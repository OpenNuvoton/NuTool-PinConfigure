// chip content
NUTOOL_PIN.g_cfg_chips = [
    // 32K
    { name: "MG51XC9AE", pkg: "QFN20" },
    { name: "MG51XB9AE", pkg: "QFN20" },
    { name: "MG51FC9AE", pkg: "TSSOP20" },
    { name: "MG51FB9AE", pkg: "TSSOP20" },
    // 64K
    { name: "MG51EC1AE", pkg: "TSSOP28" },
    { name: "MG51PC1AE", pkg: "LQFP32" },
    { name: "MG51TC1AE", pkg: "QFN33" },
    { name: "MG51LC1AE", pkg: "LQFP48" },
    { name: "MG51PD1AE", pkg: "LQFP32" },
    { name: "MG51TD1AE", pkg: "QFN33" },
    { name: "MG51LD1AE", pkg: "LQFP48" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "TSSOP28": [
        'VSS', 'P1.6', 'VDD', 'P1.5', 'P2.5', 'P1.4', 'P1.3', 
        'P2.4', 'P2.3', 'P2.2', 'P2.1', 'P3.5', 'P1.2', 'P1.1', 
        'P1.0', 'P0.0', 'P0.1', 'P3.3', 'P0.2', 'P0.3', 'P0.4', 
        'P0.5', 'P0.6', 'P0.7', 'P3.4', 'P2.0', 'P3.0', 'P1.7'
    ],
    "LQFP32": [
        'P2.0', 'P3.0', 'P1.7', 'VSS', 'P1.6', 'VDD', 'P1.5', 'P2.5', 
        'P3.6', 'P3.7', 'P1.4', 'P1.3', 'P2.4', 'P2.3', 'P2.2', 'P2.1', 
        'P3.5', 'P3.1', 'P3.2', 'P1.2', 'P1.1', 'P1.0', 'P0.0', 'P0.1', 
        'P3.3', 'P0.2', 'P0.3', 'P0.4', 'P0.5', 'P0.6', 'P0.7', 'P3.4'
    ],
    "QFN33": [
        'P2.0', 'P3.0', 'P1.7', 'VSS', 'P1.6', 'VDD', 'P1.5', 'P2.5', 
        'P3.6', 'P3.7', 'P1.4', 'P1.3', 'P2.4', 'P2.3', 'P2.2', 'P2.1', 
        'P3.5', 'P3.1', 'P3.2', 'P1.2', 'P1.1', 'P1.0', 'P0.0', 'P0.1', 
        'P3.3', 'P0.2', 'P0.3', 'P0.4', 'P0.5', 'P0.6', 'P0.7', 'P3.4'
    ],
    "LQFP48": [
        'P5.4', 'P2.0', 'P3.0', 'P1.7', 'VSS', 'P1.6', 'VDD', 'P5.5', 'P5.6', 'P1.5', 
        'P2.5', 'P5.7', 
        'P3.6', 'P3.7', 'P1.4', 'P1.3', 'P2.4', 'P2.3', 'P2.2', 'P2.1', 'P4.0', 'P4.1', 
        'P4.2', 'P4.3', 
        'P3.5', 'P3.1', 'P3.2', 'P1.2', 'P1.1', 'P1.0', 'P4.4', 'P4.5', 'P4.6', 'P4.7', 
        'P0.0', 'P0.1', 
        'P5.0', 'P5.1', 'P5.2', 'P5.3', 'P3.3', 'P0.2', 'P0.3', 'P0.4', 'P0.5', 'P0.6', 
        'P0.7', 'P3.4'
    ]
};

NUTOOL_PIN.g_cfg_OrCAD = {};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['P0.0:0', 'PWM0_CH3:1', 'SPI0_MOSI:2', 'IC3:3', 'UART1_RXD:4', 'T1:5', 'HXTIN:6', 'PWM2_CH1:7'] },
    { f: ['P0.1:0', 'PWM0_CH4:1', 'SPI0_MISO:2', 'IC4:3', 'HXTOUT:6', 'PWM3_CH0:7'] },
    { f: ['P0.2:0', 'ICE_CLK:1', 'I2C0_SCL:3', 'UART1_RXD:4'] },
    { f: ['P0.3:0', 'ADC_CH6:1', 'IC5:3', 'PWM0_CH5:4', 'UART2_TXD:6', 'PWM3_CH1:7'] },
    { f: ['P0.4:0', 'ADC_CH5:1', 'IC3:3', 'PWM0_CH3:4', 'STADC:5', 'UART2_RXD:6', 'PWM2_CH1:7'] },
    { f: ['P0.5:0', 'ADC_CH4:1', 'IC6:3', 'PWM0_CH2:4', 'T0:5', 'UART3_TXD:6', 'PWM2_CH0:7'] },
    { f: ['P0.6:0', 'ADC_CH3:1', 'UART0_TXD:2'] },
    { f: ['P0.7:0', 'ADC_CH2:1', 'UART0_RXD:2'] },

    { f: ['P1.0:0', 'PWM0_CH2:1', 'SPI0_CLK:2', 'IC2:3', 'UART1_TXD:4', 'PWM2_CH0:6'] },
    { f: ['P1.1:0', 'ADC_CH7:1', 'CLKO:2', 'IC1:3', 'PWM0_CH1:4', 'UART3_RXD:5', 'PWM1_CH1:6'] },
    { f: ['P1.2:0', 'PWM0_CH0:1', 'IC0:3', 'UART3_TXD:5', 'PWM1_CH0:6'] },
    { f: ['P1.3:0', 'STADC:1', 'I2C0_SCL:2', 'ADC_CH13:4'] },
    { f: ['P1.4:0', 'PWM0_CH1:1', 'I2C0_SDA:2', 'PWM0_BRAKE:3', 'ADC_CH14:4', 'PWM1_CH1:6'] },
    { f: ['P1.5:0', 'PWM0_CH5:1', 'SPI0_SS:2', 'IC7:3', 'UART3_TXD:5', 'PWM3_CH1:6'] },
    { f: ['P1.6:0', 'ICE_DAT:1', 'I2C0_SDA:3', 'UART1_TXD:4'] },
    { f: ['P1.7:0', 'ADC_CH0:1', 'INT1:3', 'PWM3_CH0:4', 'UART2_RXD:5', 'SPI0_CLK:6'] },

    { f: ['P2.0:0', 'nRESET:1'] },
    { f: ['P2.1:0', 'ADC_CH9:1', 'PWM2_CH0:2'] },
    { f: ['P2.2:0', 'ADC_CH10:1', 'PWM1_CH1:2', 'UART4_RXD:5'] },
    { f: ['P2.3:0', 'ADC_CH11:1', 'PWM1_CH0:2', 'UART4_TXD:5'] },
    { f: ['P2.4:0', 'ADC_CH12:1', 'T0:5'] },
    { f: ['P2.5:0', 'ADC_CH15:1', 'UART3_RXD:5', 'SPI0_MISO:6'] },
    { f: ['P2.6:0'] },
    { f: ['P2.7:0'] },

    { f: ['P3.0:0', 'ADC_CH1:1', 'OSCIN:2', 'INT0:3', 'PWM2_CH1:4', 'UART2_TXD:5', 'SPI0_MOSI:6'] },
    { f: ['P3.1:0', 'PWM2_CH1:2'] },
    { f: ['P3.2:0', 'PWM3_CH0:2'] },
    { f: ['P3.3:0', 'PWM0_CH0:1', 'CLKO:2', 'PWM0_BRAKE:3'] },
    { f: ['P3.4:0', 'PWM3_CH1:1', 'UART3_RXD:6'] },
    { f: ['P3.5:0', 'SPI0_SS:2'] },
    { f: ['P3.6:0', 'UART1_TXD:5'] },
    { f: ['P3.7:0', 'UART1_RXD:5'] },

    { f: ['P4.0:0'] },
    { f: ['P4.1:0'] },
    { f: ['P4.2:0'] },
    { f: ['P4.3:0'] },
    { f: ['P4.4:0'] },
    { f: ['P4.5:0'] },
    { f: ['P4.6:0'] },
    { f: ['P4.7:0'] },

    { f: ['P5.0:0'] },
    { f: ['P5.1:0'] },
    { f: ['P5.2:0'] },
    { f: ['P5.3:0'] },
    { f: ['P5.4:0'] },
    { f: ['P5.5:0'] },
    { f: ['P5.6:0'] },
    { f: ['P5.7:0'] }
];

// MB20 LCWang0: MS51 no need to generate code
NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
    'ADC_CH0:ADC input channel 0',
    'ADC_CH1:ADC input channel 1',
    'ADC_CH2:ADC input channel 2',
    'ADC_CH3:ADC input channel 3',
    'ADC_CH4:ADC input channel 4',
    'ADC_CH5:ADC input channel 5',
    'ADC_CH6:ADC input channel 6',
    'ADC_CH7:ADC input channel 7',
    'ADC_CH9:ADC input channel 9',
    'ADC_CH10:ADC input channel 10',
    'ADC_CH11:ADC input channel 11',
    'ADC_CH12:ADC input channel 12',
    'ADC_CH13:ADC input channel 13',
    'ADC_CH14:ADC input channel 14',
    'ADC_CH15:ADC input channel 15',
    'AVSS:Ground pin for analog circuit',
    'CLKO:System clock output',
    'I2C0_SCL:I2C clock',
    'I2C0_SDA:I2C data',
    'IC0:Input capture channel 0',
    'IC1:Input capture channel 1',
    'IC2:Input capture channel 2',
    'IC3:Input capture channel 3',
    'IC4:Input capture channel 4',
    'IC5:Input capture channel 5',
    'IC6:Input capture channel 6',
    'IC7:Input capture channel 7',
    'ICE_CLK:ICP / OCD clock input',
    'ICE_DAT:ICP / OCD data input or output',
    'INT0:External interrupt 0 input',
    'INT1:External interrupt 1 input',
    'nRESET:nRESET pin',
    'OSCIN:Xin is the external clock input pin',
    'PWM0_BRAKE:Fault Brake input',
    'PWM0_CH0:PWM0 output channel 0',
    'PWM0_CH1:PWM0 output channel 1',
    'PWM0_CH2:PWM0 output channel 2',
    'PWM0_CH3:PWM0 output channel 3',
    'PWM0_CH4:PWM0 output channel 4',
    'PWM0_CH5:PWM0 output channel 5',
    'PWM1_CH0:PWM1 output channel 0',
    'PWM1_CH1:PWM1 output channel 1',
    'PWM2_CH0:PWM2 output channel 0',
    'PWM2_CH1:PWM2 output channel 1',
    'PWM3_CH0:PWM3 output channel 0',
    'PWM3_CH1:PWM3 output channel 1',
    'SPI0_CLK:SPI clock',
    'SPI0_MISO:SPI master input/slave output',
    'SPI0_MOSI:SPI master output/slave input',
    'SPI0_SS:SPI slave select input',
    'STADC:External start ADC trigger',
    'T0:External count input to Timer/Counter 0 or its toggle output',
    'T1:External count input to Timer/Counter 1 or its toggle output',
    'UART0_RXD:Serial port 0 receive input',
    'UART0_TXD:Serial port 0 transmit data output',
    'UART1_RXD:Serial port 1 receive input',
    'UART1_TXD:Serial port 1 transmit data output',
    'UART2_RXD:Serial port 2 receive input',
    'UART2_TXD:Serial port 2 transmit data output',
    'UART3_RXD:Serial port 3 receive input',
    'UART3_TXD:Serial port 3 transmit data output',
    'UART4_RXD:Serial port 4 receive input',
    'UART4_TXD:Serial port 4 transmit data output'
];

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.P0MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P1MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P2MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P3MF76543210 = 'This register is nonexistent';

NUTOOL_PIN.g_cfg_gpioMatrix = [];
NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {};
NUTOOL_PIN.g_cfg_WPPin = [];

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    var partNumber_package,
        partNumber;

    if (typeof given_partNumber_package === 'undefined') {
        partNumber_package = NUTOOL_PIN.getg_partNumber_package();
    }
    else {
        partNumber_package = given_partNumber_package;
    }

    NUTOOL_PIN.g_packageNumber = partNumber_package.substring(partNumber_package.indexOf('(') + 1);
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.g_packageNumber.substring(0, NUTOOL_PIN.g_packageNumber.indexOf(')'));

    partNumber = partNumber_package.substring(0, partNumber_package.indexOf('('));
    switch (NUTOOL_PIN.g_packageNumber) {
        case 'TSSOP28':
            NUTOOL_PIN.g_packageNumberIndex = "TSSOP28";
            break;
        case 'LQFP32':
            NUTOOL_PIN.g_packageNumberIndex = "LQFP32";
            break;
        case 'QFN33':
            NUTOOL_PIN.g_packageNumberIndex = "QFN33";
            break;
        case 'LQFP48':
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48";
            break;
    }
    partNumber_package = null;
    partNumber = null;
};