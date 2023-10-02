// import MenuBuilder from './menu';
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const webusb = require('usb').webusb;
const DAPjs = require('dapjs');
const child = require('child_process').execFile;
const PROCESSOR_TYPE_ARM_CM0 = 'PROCESSOR_TYPE_ARM_CM0';
const PROCESSOR_TYPE_ARM_CM4 = 'PROCESSOR_TYPE_ARM_CM4';
const PROCESSOR_TYPE_ARM_CM23 = 'PROCESSOR_TYPE_ARM_CM23'
const PROCESSOR_TYPE_UNDEFINED = 'PROCESSOR_TYPE_UNDEFINED';

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

let windows = [];
let processor, proecssorType, baseAddr;
let usbIsConnecting = false;
let bCortexMConnecting = false;
let refreshTimeMS = 0;  // 初始值是0，對照html的select
let connDevice;
let addrs;
let pidDec;

const sfrs_addr = 0x20000000 + 0x91
const P0MF10_addr = 0x20000000 + 0xF9
const P0MF32_addr = 0x20000000 + 0xFA
const P0MF54_addr = 0x20000000 + 0xFB
const P0MF76_addr = 0x20000000 + 0xFC
const P1MF10_addr = 0x20000000 + 0xFD
const P1MF32_addr = 0x20000000 + 0xFE
const P1MF54_addr = 0x20000000 + 0xFF
const P1MF76_addr = 0x20000000 + 0xF1
const P2MF10_addr = 0x20000000 + 0xF2
const P2MF32_addr = 0x20000000 + 0xF3
const P2MF54_addr = 0x20000000 + 0xF4
const P2MF76_addr = 0x20000000 + 0xF5
const P3MF10_addr = 0x20000000 + 0xF6
const P3MF32_addr = 0x20000000 + 0xF7
const P3MF54_addr = 0x20000000 + 0xE9
const P3MF76_addr = 0x20000000 + 0xEA
const P4MF10_addr = 0x20000000 + 0xEB
const P4MF32_addr = 0x20000000 + 0xEC
const P4MF54_addr = 0x20000000 + 0xED
const P4MF76_addr = 0x20000000 + 0xEE
const P5MF10_addr = 0x20000000 + 0xEF
const P5MF32_addr = 0x20000000 + 0xE1
const P5MF54_addr = 0x20000000 + 0xE2
const P5MF76_addr = 0x20000000 + 0xE3
const P6MF10_addr = 0x20000000 + 0x92
const P6MF32_addr = 0x20000000 + 0x93
const P6MF54_addr = 0x20000000 + 0x94
const P6MF76_addr = 0x20000000 + 0x95

/*******************************************
 * USB Related
 *******************************************/

const connect = async () => {
  // 不是connecting的話，取得device instance
  if (!usbIsConnecting) {
    const transport = new DAPjs.WebUSB(connDevice, 0xFF, 0x03, 1, true, 1/*debug channel*/);

    // 抓到device的話，先用Cortex-M的方式連接(NuMicroCM)
    if (connDevice != undefined) {
      /* Cortex-M */
      try {
        processor = new DAPjs.NuMicroCM(transport, 1000000, 3300);

        await processor.connect();

        console.log('Cortex-M is connected.');
        usbIsConnecting = true;
        bCortexMConnecting = true;
        windows.mainWindow.webContents.send('connected');
      } catch (error) {
        console.log(error);
      }

      // 如果Cortex-M沒有連接成功的話，就用8051的方式連接(NuMicro51)
      if (!bCortexMConnecting) {
        /* 8051 */
        try {
          processor = new DAPjs.NuMicro51(transport, 1, 3300);
          pidDec = await processor.connect();

          console.log('8051 is connected.');
          usbIsConnecting = true;
          windows.mainWindow.webContents.send('connected');
        } catch (error) {
          console.log(error);
        }
      }

      // 如果都沒連上，show disconnect info
      if (!usbIsConnecting) {
        await disconnect();
      }
    } else {
      await disconnect();
    }
  } else {
    windows.mainWindow.webContents.send('warning', 'USB is connecting.');
  }
}

const getPIDValue = async () => {
  try {
    if (bCortexMConnecting) {
      proecssorType = await getProecssorType();
      baseAddr = await getBaseAddress(proecssorType);
      await getPID(baseAddr).then(function (result) {
        let pidValue = '0x' + ('00000000' + result.toString(16).toUpperCase()).slice(-8);
        windows.mainWindow.webContents.send('returnPIDValue', pidValue);
      });
    } else {
      /* 8051 */
      try {
        let pidValue = '0x' + ('00000000' + pidDec.toString(16).toUpperCase()).slice(-8);
        windows.mainWindow.webContents.send('returnPIDValue', pidValue);
      } catch (error) {
        console.log(error);
        await disconnect();
      }
    }
  } catch (error) {
    console.log(error);
    await disconnect();
  }
}

const getRegisterValue = async () => {
  // 目前已經是connecting狀態，所以直接讀值
  try {
    let showing_buffer = [];

    if (bCortexMConnecting) {
      /* Cortex-M */
      try {
        await processor.resume();

        let result = [];
        for (let i = 0; i < addrs.length; i++) {
          showing_buffer = await processor.readBlock(0x00000000 + Number(addrs[i]), 1);
          let value = ('00000000' + showing_buffer[0].toString(16)).slice(-8);
          var obj = {};
          obj[`${addrs[i]}`] = value;
          console.log(`${addrs[i]}, ${value}`);
          result.push(obj);
        }
        windows.mainWindow.webContents.send('returnRegisterValue', result, "CortexM");
        await disconnect();
      } catch (error) {
        console.log(error);
        await disconnect();
      }
    } else {
      /* 8051 */
      try {
        let sfs_data = [0, 2];

        await processor.resume();
        await new Promise(r => setTimeout(r, 1000));
        await processor.halt();

        // 先記錄原先sfrs的值
        sfs_data[0] = await processor.readMem8(sfrs_addr);
        // 因為要讀取GPIO register，所以要改成2 (詳見TRM - 6.2 SFRs Memory Mapping)
        await processor.writeMem8(sfrs_addr, sfs_data[1]);

        let value_P0MF10 = registerValueToHex(await processor.readMem8(P0MF10_addr));
        let value_P0MF32 = registerValueToHex(await processor.readMem8(P0MF32_addr));
        let value_P0MF54 = registerValueToHex(await processor.readMem8(P0MF54_addr));
        let value_P0MF76 = registerValueToHex(await processor.readMem8(P0MF76_addr));
        // console.log("P0M:" + value_P0MF76 + value_P0MF54 + value_P0MF32 + value_P0MF10);
        let value_P1MF10 = registerValueToHex(await processor.readMem8(P1MF10_addr));
        let value_P1MF32 = registerValueToHex(await processor.readMem8(P1MF32_addr));
        let value_P1MF54 = registerValueToHex(await processor.readMem8(P1MF54_addr));
        let value_P1MF76 = registerValueToHex(await processor.readMem8(P1MF76_addr));
        // console.log("P1M:" + value_P1MF76 + value_P1MF54 + value_P1MF32 + value_P1MF10);
        let value_P2MF10 = registerValueToHex(await processor.readMem8(P2MF10_addr));
        let value_P2MF32 = registerValueToHex(await processor.readMem8(P2MF32_addr));
        let value_P2MF54 = registerValueToHex(await processor.readMem8(P2MF54_addr));
        let value_P2MF76 = registerValueToHex(await processor.readMem8(P2MF76_addr));
        // console.log("P2M:" + value_P2MF76 + value_P2MF54 + value_P2MF32 + value_P2MF10);
        let value_P3MF10 = registerValueToHex(await processor.readMem8(P3MF10_addr));
        let value_P3MF32 = registerValueToHex(await processor.readMem8(P3MF32_addr));
        let value_P3MF54 = registerValueToHex(await processor.readMem8(P3MF54_addr));
        let value_P3MF76 = registerValueToHex(await processor.readMem8(P3MF76_addr));
        // console.log("P3M:" + value_P3MF76 + value_P3MF54 + value_P3MF32 + value_P3MF10);
        let value_P4MF10 = registerValueToHex(await processor.readMem8(P4MF10_addr));
        let value_P4MF32 = registerValueToHex(await processor.readMem8(P4MF32_addr));
        let value_P4MF54 = registerValueToHex(await processor.readMem8(P4MF54_addr));
        let value_P4MF76 = registerValueToHex(await processor.readMem8(P4MF76_addr));
        // console.log("P4M:" + value_P4MF76 + value_P4MF54 + value_P4MF32 + value_P4MF10);
        let value_P5MF10 = registerValueToHex(await processor.readMem8(P5MF10_addr));
        let value_P5MF32 = registerValueToHex(await processor.readMem8(P5MF32_addr));
        let value_P5MF54 = registerValueToHex(await processor.readMem8(P5MF54_addr));
        let value_P5MF76 = registerValueToHex(await processor.readMem8(P5MF76_addr));
        // console.log("P5M:" + value_P5MF76 + value_P5MF54 + value_P5MF32 + value_P5MF10);
        let value_P6MF10 = registerValueToHex(await processor.readMem8(P6MF10_addr));
        let value_P6MF32 = registerValueToHex(await processor.readMem8(P6MF32_addr));
        let value_P6MF54 = registerValueToHex(await processor.readMem8(P6MF54_addr));
        let value_P6MF76 = registerValueToHex(await processor.readMem8(P6MF76_addr));
        // console.log("P6M:" + value_P6MF76 + value_P6MF54 + value_P6MF32 + value_P6MF10);

        // 把sfrs原先的值寫回去
        await processor.writeMem8(sfrs_addr, sfs_data[0]);

        await processor.resume();

        postMessage({
          'action': 'returnRegisterValue', 'register': 'P0MF76543210', 'type': '8051',
          'value': `${value_P0MF76}${value_P0MF54}${value_P0MF32}${value_P0MF10}`
        });
        postMessage({
          'action': 'returnRegisterValue', 'register': 'P1MF76543210', 'type': '8051',
          'value': `${value_P1MF76}${value_P1MF54}${value_P1MF32}${value_P1MF10}`
        });
        postMessage({
          'action': 'returnRegisterValue', 'register': 'P2MF76543210', 'type': '8051',
          'value': `${value_P2MF76}${value_P2MF54}${value_P2MF32}${value_P2MF10}`
        });
        postMessage({
          'action': 'returnRegisterValue', 'register': 'P3MF76543210', 'type': '8051',
          'value': `${value_P3MF76}${value_P3MF54}${value_P3MF32}${value_P3MF10}`
        });
        postMessage({
          'action': 'returnRegisterValue', 'register': 'P4MF76543210', 'type': '8051',
          'value': `${value_P4MF76}${value_P4MF54}${value_P4MF32}${value_P4MF10}`
        });
        postMessage({
          'action': 'returnRegisterValue', 'register': 'P5MF76543210', 'type': '8051',
          'value': `${value_P5MF76}${value_P5MF54}${value_P5MF32}${value_P5MF10}`
        });
        postMessage({
          'action': 'returnRegisterValue', 'register': 'P6MF76543210', 'type': '8051',
          'value': `${value_P6MF76}${value_P6MF54}${value_P6MF32}${value_P6MF10}`
        });

        await disconnect();
        // 因為需要處理halt/resume，所以8051不能像Cortex一樣頻繁存取
        // await new Promise(r => setTimeout(r, refreshTimeMS > 200 ? 0 : 200 - refreshTimeMS)); // refreshTimeMS超過200ms，則不用特別再等200ms
      } catch (error) {
        console.log(error);
        await disconnect();
      }
    }
    // Setting from renderer Main.js
    await new Promise(r => setTimeout(r, refreshTimeMS));
  } catch (error) {
    console.log(error);
  }
};

const disconnect = async () => {
  processor = undefined;
  proecssorType = undefined;
  baseAddr = undefined;
  usbIsConnecting = false;
  bCortexMConnecting = false;
  windows.mainWindow.webContents.send('disconnect');
}

const getProecssorType = async () => {
  let uPartNo;
  await processor.readMem32(0xE000ED00).then(function (result) {
    uPartNo = ((('0x' + result.toString(16)) & 0x0000FFF0) >> 4).toString(16).toUpperCase();
  });
  switch (uPartNo) {
    case 'C20':
      return PROCESSOR_TYPE_ARM_CM0;
    case 'C24':
      return PROCESSOR_TYPE_ARM_CM4;
    case 'D20':
      return PROCESSOR_TYPE_ARM_CM23;
  }

  return PROCESSOR_TYPE_UNDEFINED;
}

const getBaseAddress = async (proecssorType) => {
  let baseAddr;
  switch (proecssorType) {
    case PROCESSOR_TYPE_ARM_CM0:
      baseAddr = 0x50000000;
      try {
        if (processor.readMem32(0x40003FFC).toString(16) == '20171011') {
          baseAddr = 0x40000000;
        }
      }
      catch (error) {
      }
      break;
    case PROCESSOR_TYPE_ARM_CM4:
      baseAddr = 0x40000000;
      break;
    case PROCESSOR_TYPE_ARM_CM23:
      baseAddr = 0x40000000;
      try {
        await processor.readMem32(0x50003FFC).then(function (result) {
          if ((result).toString(16) == '20201130') {
            baseAddr = 0x50000000;
          }
        });
      }
      catch (error) {
      }
      break;
    default:
      throw ('getBaseAddress() Unsupported processor type!')
  }
  return baseAddr;
}

const getPID = async (baseAddr) => {
  return processor.readMem32(REG_SYS_PDID_ADDR(baseAddr));
}

function REG_SYS_PDID_ADDR(BASE) {
  return (BASE) + 0x00000;
}

function registerValueToHex(value) {
  return ('00' + value.toString(16)).slice(-2);
}

/*******************************************
 * Main BrowserWindow Related
 *******************************************/

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      devTools: true,
      preload: path.join(__dirname, "preload.js") // use a preload script
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.htm'))

  // build menu
  // const menuBuilder = new MenuBuilder(mainWindow);
  // menuBuilder.buildMenu();

  // Devtool will show by default in debug mode
  if (isDebug) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.webContents.on('did-finish-load', function () {
    windows.mainWindow = mainWindow;

    // Receive IPC data from renderer
    ipcMain.on('connect', async (event, arg) => {
      console.log('ipcMain: connect()');
      connDevice = await webusb.requestDevice({
        filters: [{ vendorId: 0x0416 }]
      }).catch(error => {
        console.log(error);
        connDevice = undefined;
      });
      connect();
    });
    ipcMain.on('getPIDValue', async (event, arg) => {
      console.log('ipcMain: getPIDValue');
      getPIDValue();
    });
    ipcMain.on('getMFPValues', async (event, arg) => {
      console.log('ipcMain: getMFPValues');
      addrs = arg;
      getRegisterValue();
    });
    ipcMain.on('connectComplete', async (event, arg) => {
      console.log('ipcMain: connectComplete');
      await disconnect();
    });
    ipcMain.on('runNuCAD', async (event, arg) => {
      console.log('ipcMain: runNuCAD');
      child(`${__dirname}\\src\\NuCAD_OrCAD.exe`, function (err, data) {
        if (err) {
          console.error(err);
          windows.mainWindow.webContents.send('runNuCADError');
          return;
        }
      });
    });
  });

  if (!isDebug) {
    mainWindow.on('close', function (e) {
      var choice = require('electron').dialog.showMessageBoxSync(this,
        {
          type: 'question',
          buttons: ['Yes', 'No'],
          title: 'Warning',
          message: 'Are you sure you want to quit?'
        });
      if (choice == 1) {
        e.preventDefault();
      }
    });
  }

  mainWindow.maximize()
  mainWindow.show()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', /*async () =>*/ function () {
  //   await processor.disconnect();
  if (process.platform !== 'darwin') app.quit()
})