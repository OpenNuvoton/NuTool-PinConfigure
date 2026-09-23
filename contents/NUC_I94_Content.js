NUTOOL_PIN.g_cfg_chips = [
    { name: "I94_48_6X6", pkg: "QFN48" },
    { name: "I94_64_10X10", pkg: "LQFP64" },
    { name: "I94_64_7X7", pkg: "LQFP64" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP64 (10X10)": [
        'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PB.4', 'RESETN', 'PB.5', 'PB.6', 'PB.7', 'PB.8',
        'PB.9', 'LDO_CAP', 'VSS', 'AVSS', 'VDD', 'AVDD', 'PC.0', 'PC.1', 'PC.2', 'PC.3',
        'PC.4', 'PC.5', 'PC.6', 'PC.7', 'PC.8', 'PC.9', 'PC.10', 'PC.11', 'PC.12', 'PC.13',
        'PC.14', 'PC.15', 'PD.0', 'PD.1', 'PD.2', 'PD.3', 'PD.4', 'PD.5', 'PD.6', 'PD.7',
        'PD.8', 'PD.9', 'PD.10', 'PD.11', 'PD.12', 'PD.13', 'PD.14', 'PD.15', 'PA.0   ', 'PA.1 ',
        'PA.2 ', 'PA.3', 'PA.4', 'PA.5', 'PA.6', 'PA.7', 'PA.8', 'PA.9', 'PA.10', 'PA.11',
        'PA.12', 'PA.13', 'PA.14', 'PA.15'
    ],
    "LQFP64 (7X7)": [
        'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PB.4', 'RESETN', 'PB.5', 'PB.6', 'PB.7', 'PB.8',
        'PB.9', 'LDO_CAP', 'VSS', 'AVSS', 'VDD', 'AVDD', 'PC.0', 'PC.1', 'PC.2', 'PC.3',
        'PC.4', 'PC.5', 'PC.6', 'PC.7', 'PC.8', 'PC.9', 'PC.10', 'PC.11', 'PC.12', 'PC.13',
        'PC.14', 'USB_VDD33', 'PB.15', 'PB.14', 'PB.13', 'PD.0', 'PD.1', 'PD.2', 'PD.3', 'PD.4',
        'PD.5', 'PD.6', 'PD.7', 'PD.8', 'PD.9', 'PD.13', 'PD.14', 'PD.15', 'PA.0   ', 'PA.1 ',
        'PA.2 ', 'PA.3', 'PA.4', 'PA.5', 'PA.6', 'PA.7', 'PA.8', 'PA.9', 'PA.10', 'PA.11',
        'PA.12', 'PA.13', 'PA.14', 'PA.15'
    ],
    "QFN48 (6X6)": [
        'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PB.4', 'RESETN', 'PB.5', 'PB.6', 'LDO_CAP', 'VSS',
        'AVSS', 'VDD', 'AVDD', 'PC.0', 'PC.1', 'PC.2', 'PC.3', 'PC.4', 'USB_VDD33', 'PB.15',
        'PB.14', 'PB.13', 'PD.0', 'PD.1', 'PD.2', 'PD.3', 'PD.4', 'PD.5', 'PD.8', 'PD.9',
        'PD.14', 'PD.15', 'PA.0   ', 'PA.1 ', 'PA.2 ', 'PA.3', 'PA.4', 'PA.5', 'PA.6', 'PA.7',
        'PA.8', 'PA.9', 'PA.10', 'PA.11', 'PA.12', 'PA.13', 'PA.14', 'PA.15'
    ],
    // Clone from QFN48 (6X6)
    "QFN48 (6X6)(PIN:D10R14U10L14)": [
        'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PB.4', 'RESETN', 'PB.5', 'PB.6', 'LDO_CAP', 'VSS',
        'AVSS', 'VDD', 'AVDD', 'PC.0', 'PC.1', 'PC.2', 'PC.3', 'PC.4', 'USB_VDD33', 'PB.15',
        'PB.14', 'PB.13', 'PD.0', 'PD.1', 'PD.2', 'PD.3', 'PD.4', 'PD.5', 'PD.8', 'PD.9',
        'PD.14', 'PD.15', 'PA.0   ', 'PA.1 ', 'PA.2 ', 'PA.3', 'PA.4', 'PA.5', 'PA.6', 'PA.7',
        'PA.8', 'PA.9', 'PA.10', 'PA.11', 'PA.12', 'PA.13', 'PA.14', 'PA.15'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'SPI0_SS1:1', 'EADC0_CH0:2', 'DMIC_DAT0:3'] },
    { f: ['PA.1:0', 'SPI0_MOSI1:1', 'EADC0_CH1:2', 'DMIC_CLK0:3'] },
    { f: ['PA.2:0', 'SPI0_MISO1:1', 'EADC0_CH2:2', 'DMIC_DAT1:3'] },
    { f: ['PA.3:0', 'SPI0_MOSI0:1', 'EADC0_CH3:2', 'DMIC_CLK1:3'] },
    { f: ['PA.4:0', 'SPI0_MISO0:1', 'EADC0_CH4:2', 'DPWM_LN:3'] },
    { f: ['PA.5:0', 'SPI0_CLK:1', 'EADC0_CH5:2', 'DPWM_LP:3'] },
    { f: ['PA.6:0', 'SPI0_SS0:1', 'EADC0_CH6:2'] },
    { f: ['PA.7:0', 'UART0_TXD:1', 'EADC0_CH7:2', 'SPI2_MISO:4'] },
    { f: ['PA.8:0', 'UART0_RXD:1', 'EADC0_CH8:2', 'SPI2_MOSI:4'] },
    { f: ['PA.9:0', 'I2C0_SCL:1', 'EADC0_CH9:2', 'SPI2_SS:4'] },
    { f: ['PA.10:0', 'I2C0_SDA:1', 'EADC0_ST:2', 'DPWM_RN:3', 'SPI2_CLK:4'] },
    { f: ['PA.11:0', 'I2C0_SMBSUS:1', 'TM0:2', 'DPWM_RP:3'] },
    { f: ['PA.12:0', 'I2C0_SMBAL:1', 'TM0_EXT:2', 'SPI2_I2SMCLK:4'] },
    { f: ['PA.13:0', 'CLKO:1', 'INT0:2', 'DPWM_SN:3', 'I2C1_SCL:4'] },
    { f: ['PA.14:0', 'SPI0_SS0:1', 'TM1:2', 'DPWM_SP:3', 'I2C1_SDA:4'] },
    { f: ['PA.15:0', 'INT0:1', 'TM1_EXT:2'] },

    { f: ['PB.0:0', 'PWM0_SYNC_IN:1', 'I2C0_SCL:2', 'PWM0_CH0:3'] },
    { f: ['PB.1:0', 'PWM0_SYNC_OUT:1', 'I2C0_SDA:2', 'PWM0_CH1:3'] },
    { f: ['PB.2:0', 'PWM0_CH0:1', 'TM2:2', 'PWM0_CH2:3'] },
    { f: ['PB.3:0', 'PWM0_CH1:1', 'TM2_EXT:2', 'DMIC_DAT1:3', 'UART0_RXD:4', 'PWM0_CH3:5'] },
    { f: ['PB.4:0', 'UART0_nCTS:1', 'PWM0_CH0:2', 'DMIC_CLK1:3', 'UART0_TXD:4', 'PWM0_CH4:5'] },
    { f: ['PB.5:0', 'XT1_OUT:1', 'PWM0_CH1:2', 'I2C0_SDA:3', 'I2C1_SDA:4', 'DMIC_DAT0:5'] },
    { f: ['PB.6:0', 'XT1_IN:1', 'PWM0_CH2:2', 'I2C0_SCL:3', 'I2C1_SCL:4', 'DMIC_CLK0:5'] },
    { f: ['PB.7:0', 'UART0_nRTS:1', 'PWM0_CH3:2'] },
    { f: ['PB.8:0', 'UART0_TXD:1', 'PWM0_CH4:2'] },
    { f: ['PB.9:0', 'UART0_RXD:1', 'PWM0_CH5:2'] },
    { f: ['PB.10:0'] },
    { f: ['PB.11:0'] },
    { f: ['PB.12:0'] },
    { f: ['PB.13:0', 'USB_D+:1', 'I2S0_DI:2'] },
    { f: ['PB.14:0', 'USB_D-:1', 'I2S0_DO:2'] },
    { f: ['PB.15:0', 'USB_VBUS:1', 'I2S0_MCLK:2'] },

    { f: ['PC.0:0', 'I2C1_SCL:1', 'X32_OUT:2', 'SPI1_MOSI:3'] },
    { f: ['PC.1:0', 'I2C1_SDA:1', 'X32_IN:2', 'SPI1_MISO:3'] },
    { f: ['PC.2:0', 'I2C1_SMBSUS:1', 'TM3:2', 'SPI1_CLK:3'] },
    { f: ['PC.3:0', 'I2C1_SMBAL:1', 'TM3_EXT:2', 'SPI1_SS:3'] },
    { f: ['PC.4:0', 'PWM0_CH2:1', 'CLKO:2', 'SPI1_I2SMCLK:3'] },
    { f: ['PC.5:0', 'INT1:1', 'SPI2_MOSI:2'] },
    { f: ['PC.6:0', 'INT2:1', 'SPI2_MISO:2'] },
    { f: ['PC.7:0', 'SPI0_SS0:1', 'SPI2_CLK:2'] },
    { f: ['PC.8:0', 'SPI0_MOSI1:1', 'SPI2_SS:2'] },
    { f: ['PC.9:0', 'SPI0_MISO1:1', 'SPI2_I2SMCLK:2'] },
    { f: ['PC.10:0', 'SPI0_MOSI0:1', 'PWM0_BRAKE0:2', 'DPWM_RN:3'] },
    { f: ['PC.11:0', 'SPI0_MISO0:1', 'PWM0_BRAKE1:2', 'DPWM_RP:3'] },
    { f: ['PC.12:0', 'SPI0_CLK:1', 'DPWM_LN:3'] },
    { f: ['PC.13:0', 'PWM0_CH3:1', 'I2C0_SCL:2', 'DPWM_LP:3'] },
    { f: ['PC.14:0', 'PWM0_CH4:1', 'I2C0_SDA:2', 'DPWM_SN:3'] },
    { f: ['PC.15:0', 'SPI0_SS1:1', 'DPWM_SP:3'] },

    { f: ['PD.0:0', 'INT3:1', 'I2C1_SCL:2', 'I2C0_SCL:3', 'I2S0_BCLK:4', 'DPWM_LN:5'] },
    { f: ['PD.1:0', 'INT4:1', 'I2C1_SDA:2', 'I2C0_SDA:3', 'I2S0_LRCK:4', 'DPWM_LP:5'] },
    { f: ['PD.2:0', 'TRACE_CLK:1', 'SPI1_MOSI:2', 'I2S0_MCLK:3', 'I2C1_SCL:4', 'TM0:5'] },
    { f: ['PD.3:0', 'TRACE_DATA0:1', 'SPI1_MISO:2', 'I2S0_LRCK:3', 'DMIC_CLK1:4', 'TM2:5'] },
    { f: ['PD.4:0', 'TRACE_DATA1:1', 'SPI1_CLK:2', 'I2S0_DI:3', 'DMIC_DAT1:4', 'TM1:5'] },
    { f: ['PD.5:0', 'TRACE_DATA2:1', 'SPI1_SS:2', 'I2S0_DO:3', 'DMIC_CLK0:4', 'DPWM_RN:5'] },
    { f: ['PD.6:0', 'TRACE_DATA3:1', 'SPI1_I2SMCLK:2', 'I2S0_BCLK:3', 'DMIC_DAT0:4', 'DPWM_RP:5'] },
    { f: ['PD.7:0', 'PWM0_CH5:1', 'INT1:2'] },
    { f: ['PD.8:0', 'ICE_CLK:1', 'TM0:2', 'I2C1_SCL:3', 'I2C0_SCL:4', 'DPWM_SN:5'] },
    { f: ['PD.9:0', 'ICE_DAT:1', 'TM0_EXT:2', 'I2C1_SDA:3', 'I2C0_SDA:4', 'DPWM_SP:5'] },
    { f: ['PD.10:0', 'INT5:1', 'EADC0_ST:2'] },
    { f: ['PD.11:0', 'UART0_TXD:1', 'INT2:2'] },
    { f: ['PD.12:0', 'UART0_RXD:1', 'INT3:2', 'PWM0_CH3:3', 'INT0:4'] },
    { f: ['PD.13:0', 'SPI0_SS1:1', 'EADC0_CH10:2'] },
    { f: ['PD.14:0', 'UART0_nCTS:1', 'EADC0_CH11:2', 'I2C0_SCL:3', 'UART0_TXD:4', 'I2C1_SCL:5'] },
    { f: ['PD.15:0', 'UART0_nRTS:1', 'EADC0_CH12:2', 'I2C0_SDA:3', 'UART0_RXD:4', 'I2C1_SDA:5'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
];

NUTOOL_PIN.g_cfg_wppin = {
    "LQFP64 (10X10)": [
        
    ],
    "LQFP64 (7X7)": [
        
    ],
    "QFN48 (6X6)": [
        
    ],
    // Clone from QFN48 (6X6)
    "QFN48 (6X6)(PIN:D10R14U10L14)": [
        
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'I94_48_6X6': {
        'ALL': []
    },
    'I94_64_10X10': {
        'ALL': []
    },
    'I94_64_7X7': {
        'ALL': []
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
    "LQFP64 (10X10)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', ''
    ],
    "LQFP64 (7X7)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', ''
    ],
    "QFN48 (6X6)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', ''
    ]
};

NUTOOL_PIN.g_cfg_regDescriptions = {};

NUTOOL_PIN.g_cfg_gpioMatrix = [];

NUTOOL_PIN.g_cfg_shareBits = [];

NUTOOL_PIN.g_cfg_addGPIO = {};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.getPackageNumber(given_partNumber_package);
    let partNumber = NUTOOL_PIN.getPartNumber(given_partNumber_package);
    switch (partNumber) {
        case "I94_48_6X6":
            NUTOOL_PIN.g_packageNumberIndex = "QFN48 (6X6)";
            break;
        case "I94_64_10X10":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64 (10X10)";
            break;
        case "I94_64_7X7":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64 (7X7)";
            break;
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};