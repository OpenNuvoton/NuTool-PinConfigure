// chip content
NUTOOL_PIN.g_cfg_chips = [
    { name: "M33BULGAAE", pkg: "LQFP48" },
    { name: "M33BUTGAAE", pkg: "QFN33" },
    { name: "M33BUYGAAE", pkg: "QFN48" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP48(7x7)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8',
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2',
        'PA.1', 'PA.0', 'VDDIO', 'nRESET', 'PF.0', 'PF.1', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'BYPASS_USB_D-', 'BYPASS_USB_D+', 'EX_USB_D-', 'EX_USB_D+', 'HSUSB_VRES', 'HSUSB_D-', 'HSUSB_D+', 'VSS', 'LDO_CAP', 'VDD',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'AVSS', 'PB.7', 'PB.6'
    ],
    "LQFP64(7x7)": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9',
        'PA.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.7', 'PC.6', 'PA.7',
        'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0',
        'VDDIO', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'PD.3', 'PD.2', 'BYPASS_USB_D-', 'BYPASS_USB_D+', 'EX_USB_D-', 'EX_USB_D+', 'HSUSB_VRES', 'HSUSB_D-', 'HSUSB_D+', 'VSS',
        'LDO_CAP', 'VDD', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'VREF', 'AVSS', 'PB.11',
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ],
    "QFN33(4x4)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.3', 'PF.2', 'PA.5', 'PA.4',
        'PA.3', 'PA.2', 'PA.1', 'PA.0', 'VDDIO', 'nRESET', 'PF.0', 'PF.1', 'BYPASS_USB_D-', 'BYPASS_USB_D+',
        'EX_USB_D-', 'EX_USB_D+', 'HSUSB_VRES', 'HSUSB_D-', 'HSUSB_D+', 'VSS', 'LDO_CAP', 'VDD', 'PB.15', 'PB.14',
        'PB.13', 'PB.12', 'VSS'
    ],
    "QFN48(5x5)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8',
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2',
        'PA.1', 'PA.0', 'VDDIO', 'nRESET', 'PF.0', 'PF.1', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'BYPASS_USB_D-', 'BYPASS_USB_D+', 'EX_USB_D-', 'EX_USB_D+', 'HSUSB_VRES', 'HSUSB_D-', 'HSUSB_D+', 'VSS', 'LDO_CAP', 'VDD',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'AVSS', 'PB.7', 'PB.6', 'VSS'
    ],
    // Clone from QFN48(5x5)
    "QFN48(5x5)(PIN:D10R14U10L14)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8',
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2',
        'PA.1', 'PA.0', 'VDDIO', 'nRESET', 'PF.0', 'PF.1', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'BYPASS_USB_D-', 'BYPASS_USB_D+', 'EX_USB_D-', 'EX_USB_D+', 'HSUSB_VRES', 'HSUSB_D-', 'HSUSB_D+', 'VSS', 'LDO_CAP', 'VDD',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'AVSS', 'PB.7', 'PB.6', 'VSS'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'UART0_RXD:2', 'UART1_nRTS:3', 'SPI0_MOSI:6', 'QSPI0_MOSI0:8', 'BPWM1_CH5:10', 'LLSI1_OUT:12'] },
    { f: ['PA.1:0', 'UART0_TXD:2', 'UART1_nCTS:3', 'SPI0_MISO:6', 'QSPI0_MISO0:8', 'BPWM1_CH4:10', 'LLSI0_OUT:12'] },
    { f: ['PA.2:0', 'UART1_RXD:3', 'I2C0_SMBSUS:4', 'I2C1_SDA:5', 'SPI0_CLK:6', 'QSPI0_CLK:8', 'BPWM1_CH3:10'] },
    { f: ['PA.3:0', 'UART1_TXD:3', 'I2C0_SMBAL:4', 'I2C1_SCL:5', 'SPI0_SS:6', 'QSPI0_SS:8', 'BPWM1_CH2:10', 'CLKO:13'] },
    { f: ['PA.4:0', 'UART0_RXD:2', 'UART0_nRTS:3', 'I2C0_SDA:4', 'QSPI0_MOSI1:8', 'BPWM1_CH1:10'] },
    { f: ['PA.5:0', 'UART0_TXD:2', 'UART0_nCTS:3', 'I2C0_SCL:4', 'QSPI0_MISO1:8', 'BPWM1_CH0:10'] },
    { f: ['PA.6:0', 'UART0_RXD:2', 'I2C1_SDA:5', 'SPI1_SS:7', 'BPWM0_CH3:9', 'TM3:14', 'INT0:15'] },
    { f: ['PA.7:0', 'UART0_TXD:2', 'I2C1_SCL:5', 'SPI1_CLK:7', 'BPWM0_CH2:9', 'TM2:14', 'INT1:15'] },
    { f: ['PA.8:0', 'UART1_RXD:3', 'SPI0_MOSI:6', 'BPWM1_CH3:10', 'TM3_EXT:14', 'INT4:15'] },
    { f: ['PA.9:0', 'UART1_TXD:3', 'SPI0_MISO:6', 'BPWM1_CH2:10', 'TM2_EXT:14'] },
    { f: ['PA.10:0', 'SPI0_CLK:6', 'BPWM1_CH1:10', 'LLSI1_OUT:12', 'TM1_EXT:14'] },
    { f: ['PA.11:0', 'SPI0_SS:6', 'BPWM1_CH0:10', 'LLSI0_OUT:12', 'TM0_EXT:14'] },
    { f: ['PA.12:0'] },
    { f: ['PA.13:0'] },
    { f: ['PA.14:0'] },
    { f: ['PA.15:0'] },

    { f: ['PB.0:0', 'ADC0_CH0:1', 'I2C1_SDA:5', 'QSPI0_MOSI1:8', 'BPWM0_CH5:9'] },
    { f: ['PB.1:0', 'ADC0_CH1:1', 'I2C1_SCL:5', 'QSPI0_MISO1:8', 'BPWM0_CH4:9'] },
    { f: ['PB.2:0', 'ADC0_CH2:1', 'UART1_RXD:3', 'I2C1_SDA:5', 'SPI1_SS:7', 'QSPI0_SS:8', 'BPWM0_CH3:9', 'TM3:14', 'INT3:15'] },
    { f: ['PB.3:0', 'ADC0_CH3:1', 'UART1_TXD:3', 'I2C1_SCL:5', 'SPI1_CLK:7', 'QSPI0_CLK:8', 'BPWM0_CH2:9', 'TM2:14', 'INT2:15'] },
    { f: ['PB.4:0', 'ADC0_CH4:1', 'I2C0_SDA:4', 'SPI1_MOSI:7', 'QSPI0_MOSI0:8', 'BPWM0_CH1:9', 'LLSI1_OUT:12', 'TM1:14', 'INT1:15'] },
    { f: ['PB.5:0', 'ADC0_CH5:1', 'I2C0_SCL:4', 'SPI1_MISO:7', 'QSPI0_MISO0:8', 'BPWM0_CH0:9', 'LLSI0_OUT:12', 'TM0:14', 'INT0:15'] },
    { f: ['PB.6:0', 'ADC0_CH6:1', 'UART1_RXD:3', 'BPWM0_CH5:9', 'TM3:14', 'INT4:15'] },
    { f: ['PB.7:0', 'ADC0_CH7:1', 'UART1_TXD:3', 'BPWM0_CH4:9', 'TM2:14', 'INT5:15'] },
    { f: ['PB.8:0', 'UART0_RXD:2', 'UART1_nRTS:3', 'BPWM0_CH3:9', 'TM1:14'] },
    { f: ['PB.9:0', 'UART0_TXD:2', 'UART1_nCTS:3', 'BPWM0_CH2:9', 'TM0:14'] },
    { f: ['PB.10:0', 'UART0_nRTS:2', 'I2C1_SDA:5', 'BPWM0_CH1:9'] },
    { f: ['PB.11:0', 'UART0_nCTS:2', 'I2C1_SCL:5', 'BPWM0_CH0:9'] },
    { f: ['PB.12:0', 'UART0_RXD:2', 'I2C0_SMBSUS:4', 'SPI0_MOSI:6', 'BPWM1_CH5:10', 'TM3_EXT:14'] },
    { f: ['PB.13:0', 'UART0_TXD:2', 'I2C0_SMBAL:4', 'SPI0_MISO:6', 'BPWM1_CH4:10', 'TM2_EXT:14'] },
    { f: ['PB.14:0', 'UART0_nRTS:2', 'I2C0_SDA:4', 'SPI0_CLK:6', 'BPWM1_CH3:10', 'LLSI1_OUT:12', 'CLKO:13', 'TM1_EXT:14'] },
    { f: ['PB.15:0', 'UART0_nCTS:2', 'I2C0_SCL:4', 'SPI0_SS:6', 'BPWM1_CH2:10', 'LLSI0_OUT:12', 'TM0_EXT:14'] },

    { f: ['PC.0:0', 'I2C0_SDA:4', 'SPI1_SS:7', 'QSPI0_MOSI0:8', 'BPWM0_CH5:9'] },
    { f: ['PC.1:0', 'I2C0_SCL:4', 'SPI1_CLK:7', 'QSPI0_MISO0:8', 'BPWM0_CH4:9', 'EADC0_ST:15'] },
    { f: ['PC.2:0', 'I2C0_SMBSUS:4', 'SPI1_MOSI:7', 'QSPI0_CLK:8', 'BPWM0_CH3:9'] },
    { f: ['PC.3:0', 'I2C0_SMBAL:4', 'SPI1_MISO:7', 'QSPI0_SS:8', 'BPWM0_CH2:9'] },
    { f: ['PC.4:0', 'I2C1_SDA:5', 'QSPI0_MOSI1:8', 'BPWM0_CH1:9', 'LLSI1_OUT:12'] },
    { f: ['PC.5:0', 'I2C1_SCL:5', 'QSPI0_MISO1:8', 'BPWM0_CH0:9', 'LLSI0_OUT:12'] },
    { f: ['PC.6:0', 'UART0_nRTS:2', 'SPI1_MOSI:7', 'BPWM0_CH1:9', 'LLSI1_OUT:12', 'TM1:14', 'INT2:15'] },
    { f: ['PC.7:0', 'UART0_nCTS:2', 'SPI1_MISO:7', 'BPWM0_CH0:9', 'LLSI0_OUT:12', 'TM0:14', 'INT3:15'] },
    { f: ['PC.8:0'] },
    { f: ['PC.9:0'] },
    { f: ['PC.10:0'] },
    { f: ['PC.11:0'] },
    { f: ['PC.12:0'] },
    { f: ['PC.13:0'] },
    { f: ['PC.14:0'] },
    { f: ['PC.15:0'] },

    { f: ['PD.0:0'] },
    { f: ['PD.1:0'] },
    { f: ['PD.2:0', 'UART0_RXD:2', 'SPI0_CLK:6', 'TM1:14'] },
    { f: ['PD.3:0', 'UART0_TXD:2', 'SPI0_SS:6', 'TM0:14'] },
    { f: ['PD.4:0'] },
    { f: ['PD.5:0'] },
    { f: ['PD.6:0'] },
    { f: ['PD.7:0'] },
    { f: ['PD.8:0'] },
    { f: ['PD.9:0'] },
    { f: ['PD.10:0'] },
    { f: ['PD.11:0'] },
    { f: ['PD.12:0'] },
    { f: ['PD.13:0'] },
    { f: ['PD.14:0'] },
    { f: ['PD.15:0', 'BPWM1_CH5:10', 'TM3:14', 'INT1:15'] },

    { f: ['PE.0:0'] },
    { f: ['PE.1:0'] },
    { f: ['PE.2:0'] },
    { f: ['PE.3:0'] },
    { f: ['PE.4:0'] },
    { f: ['PE.5:0'] },
    { f: ['PE.6:0'] },
    { f: ['PE.7:0'] },
    { f: ['PE.8:0'] },
    { f: ['PE.9:0'] },
    { f: ['PE.10:0'] },
    { f: ['PE.11:0'] },
    { f: ['PE.12:0'] },
    { f: ['PE.13:0'] },
    { f: ['PE.14:0'] },
    { f: ['PE.15:0'] },

    { f: ['PF.0:0', 'UART0_TXD:2', 'UART1_TXD:3', 'I2C1_SCL:5', 'BPWM1_CH0:10', 'ICE_DAT:14'] },
    { f: ['PF.1:0', 'UART0_RXD:2', 'UART1_RXD:3', 'I2C1_SDA:5', 'BPWM1_CH1:10', 'ICE_CLK:14'] },
    { f: ['PF.2:0', 'UART0_RXD:2', 'I2C0_SDA:4', 'XT1_OUT:11'] },
    { f: ['PF.3:0', 'UART0_TXD:2', 'I2C0_SCL:4', 'XT1_IN:11'] },
    { f: ['PF.4:0', 'I2C0_SMBSUS:4', 'BPWM1_CH5:10', 'LLSI1_OUT:12'] },
    { f: ['PF.5:0', 'I2C0_SMBAL:4', 'BPWM1_CH4:10', 'LLSI0_OUT:12', 'TM1:14', 'EADC0_ST:15'] },
    { f: ['PF.6:0', 'BPWM0_CH4:9', 'CLKO:13'] },
    { f: ['PF.7:0'] },
    { f: ['PF.8:0'] },
    { f: ['PF.9:0'] },
    { f: ['PF.10:0'] },
    { f: ['PF.11:0'] },
    { f: ['PF.12:0'] },
    { f: ['PF.13:0'] },
    { f: ['PF.14:0', 'BPWM0_CH5:9', 'TM0:14', 'INT5:15'] },
    { f: ['PF.15:0'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
];

NUTOOL_PIN.g_cfg_wppin = {
    "LQFP48(7x7)": [
        
    ],
    "LQFP64(7x7)": [
        
    ],
    "QFN33(4x4)": [
        
    ],
    "QFN48(5x5)": [
        
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'M33BULGAAE': {
        'ALL': []
    },
    'M33BUTGAAE': {
        'ALL': []
    },
    'M33BUYGAAE': {
        'ALL': []
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
    "LQFP48(7x7)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', ''
    ],
    "LQFP64(7x7)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', ''
    ],
    "QFN33(4x4)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', ''
    ],
    "QFN48(5x5)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', ''
    ]
};

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP0 = '0x40000500';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP1 = '0x40000504';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP2 = '0x40000508';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP3 = '0x4000050C';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP0 = '0x40000510';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP1 = '0x40000514';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP2 = '0x40000518';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP3 = '0x4000051C';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP0 = '0x40000520';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP1 = '0x40000524';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP2 = '0x40000528';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP3 = '0x4000052C';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFP0 = '0x40000530';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFP1 = '0x40000534';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFP2 = '0x40000538';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFP3 = '0x4000053C';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP0 = '0x40000540';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP1 = '0x40000544';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP2 = '0x40000548';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP3 = '0x4000054C';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP0 = '0x40000550';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP1 = '0x40000554';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP2 = '0x40000558';
//NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP3 = '0x4000055C';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFP0 = '0x40000560';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFP1 = '0x40000564';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFP2 = '0x40000568';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFP3 = '0x4000056C';
//NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFP0 = '0x40000570';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFP1 = '0x40000574';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFP2 = '0x40000578';
//NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFP3 = '0x4000057C';

NUTOOL_PIN.g_cfg_gpioMatrix = [];

NUTOOL_PIN.g_cfg_shareBits = [];

NUTOOL_PIN.g_cfg_addGPIO = {};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.getPackageNumber(given_partNumber_package);
    let partNumber = NUTOOL_PIN.getPartNumber(given_partNumber_package);
    switch (partNumber) {
        case "M33BULGAAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(7x7)";
            break;
        case "M33BUTGAAE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(4x4)";
            break;
        case "M33BUYGAAE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN48(5x5)(PIN:D10R14U10L14)";
            break;
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};