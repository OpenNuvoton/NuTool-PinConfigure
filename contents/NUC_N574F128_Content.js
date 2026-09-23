NUTOOL_PIN.g_cfg_chips = [
    // N574F128 series
    { name: "N574F128_48", pkg: "LQFP48" },
    { name: "N574F128_64", pkg: "LQFP64" },

    // N574F1K5 series
    { name: "N574F1K5_28", pkg: "TSSOP28" },
    { name: "N574F1K5_48", pkg: "LQFP48" },
    { name: "N574F1K5_64", pkg: "LQFP64" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP48": [
        'PB.8', 'PB.9', 'PB.6', 'VSSPST', 'VSS', 'PB.7', 'VDDL', 'VDDPST', 'VDD', 'VDDFS',
        'VDDB', 'PB.0', 'PB.1', 'PB.3', 'PB.2', 'PB.5', 'PB.4', 'AVDD', 'PA.15', 'PA.12',
        'PA.14', 'PA.13', 'PA.3', 'PA.4', 'AVSS', 'PA.0', 'PA.1', 'PA.2', 'PA.6', 'PA.5',
        'PA.8', 'PA.9', 'PA.7', 'PB.10', 'VSSPST1', 'PB.11', 'PB.12', 'PA.10', 'PA.11', 'PB.13',
        'PB.14', 'PB.15', 'RESETB', 'VDDP', 'SPKN', 'VSSP', 'SPKP', 'VDDP'
    ],
    "LQFP64": [
        'NC', 'NC', 'PC.7', 'PB.8', 'PB.9', 'PB.6', 'VSSPST', 'VSS', 'PB.7', 'VDDL',
        'VDDPST', 'VDD', 'VDDFS', 'VDDB', 'NC', 'PB.0', 'PB.1', 'PB.3', 'PB.2', 'PB.5',
        'PB.4', 'AVDD', 'PA.15', 'PA.12', 'PA.14', 'PA.13', 'PA.3', 'PA.4', 'AVSS', 'PC.5',
        'PC.6', 'PA.0', 'PA.1', 'PA.2', 'PA.6', 'PA.5', 'PA.8', 'PA.9', 'PA.7', 'PB.10',
        'PC.4', 'VSSPST1', 'PC.3', 'PC.2', 'PC.1', 'PC.0', 'PB.11', 'PB.12', 'NC', 'NC',
        'PA.10', 'PA.11', 'PB.13', 'PB.14', 'PB.15', 'RESETB', 'VDDP', 'SPKN', 'VSSP', 'SPKP',
        'VDDP', 'NC', 'NC', 'NC'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'PWM0_CH0:1', 'ADC_AIN0:4'] },
    { f: ['PA.1:0', 'PWM0_CH1:1', 'ADC_AIN1:4'] },
    { f: ['PA.2:0', 'PWM1_CH0:1', 'ADC_AIN2:4'] },
    { f: ['PA.3:0', 'ADC_MICP1:1', 'ADC_AIN3:4'] },
    { f: ['PA.4:0', 'ADC_MICN1:1', 'ADC_AIN4:4'] },
    { f: ['PA.5:0', 'PWM1_CH1:1', 'TM0:2', 'CSCAN_CXA0:3'] },
    { f: ['PA.6:0', 'ICE_CLK:4'] },
    { f: ['PA.7:0', 'ICE_DAT:4'] },
    { f: ['PA.8:0', 'PWM1_CH2:1', 'TM1:2', 'CSCAN_CXA1:3'] },
    { f: ['PA.9:0', 'PWM1_CH3:1', 'PWM1_CPR:2', 'CSCAN_CXA2:3'] },
    { f: ['PA.10:0', 'CSCAN_CXA3:1', 'UART_Tx:2', 'X32_I:3'] },
    { f: ['PA.11:0', 'CSCAN_CXA4:1', 'UART_Rx:2', 'X32_O:3'] },
    { f: ['PA.12:0', 'ADC_MICBIAS:1'] },
    { f: ['PA.13:0', 'ADC_MICP:1'] },
    { f: ['PA.14:0', 'ADC_MICN:1'] },
    { f: ['PA.15:0', 'ADC_PGCVMID:1'] },

    { f: ['PB.0:0', 'SPIM_CLK:1', 'PWM0_CH0:2', 'SPIM_MOSI:3'] },
    { f: ['PB.1:0', 'SPIM_MOSI:1', 'PWM0_CH1:2', 'SPIM_CLK:3'] },
    { f: ['PB.2:0', 'SPIM_SIO3:1', 'PWM0_CH2:2', 'SPIM_SS:3'] },
    { f: ['PB.3:0', 'SPIM_SIO2:1', 'PWM0_CH3:2', 'SPIM_MISO:3'] },
    { f: ['PB.4:0', 'SPIM_MISO:1', 'PWM0_CPR:2', 'SPIM_SS:3'] },
    { f: ['PB.5:0', 'SPIM_SS:1', 'SPIM_MISO:3'] },
    { f: ['PB.6:0', 'SPI_MOSI:1', 'UART_Tx:2', 'PWM1_CH4:3'] },
    { f: ['PB.7:0', 'SPI_CLK:1', 'UART_Rx:2', 'PWM1_CH5:3'] },
    { f: ['PB.8:0', 'SPI_MISO:1', 'I2C_SCL:2', 'PWM1_CH6:3'] },
    { f: ['PB.9:0', 'SPI_SS0:1', 'I2C_SDA:2', 'IR_CARR:3'] },
    { f: ['PB.10:0', 'SPI_SS1:1', 'CSCAN_CXA5:2', 'PWM1_CH7:3'] },
    { f: ['PB.11:0', 'IR_CARR:1', 'CSCAN_CXA6:2', 'ALED_SDOUT:3'] },
    { f: ['PB.12:0', 'TM1:1', 'CSCAN_CXA7:2', 'ALED_SDO:3'] },
    { f: ['PB.13:0', 'PWM1_CPR:1', 'CSCAN_CXA8:2', 'ALED_CKO:3'] },
    { f: ['PB.14:0', 'I2C_SCL:1', 'CSCAN_CXA9:2', 'PWM0_CH2:3'] },
    { f: ['PB.15:0', 'I2C_SDA:1', 'CSCAN_CXA10:2', 'PWM0_CH3:3'] },

    { f: ['PC.0:0', 'CSCAN_CXA11:2'] },
    { f: ['PC.1:0', 'CSCAN_CXA12:2'] },
    { f: ['PC.2:0', 'CSCAN_CXA13:2'] },
    { f: ['PC.3:0', 'CSCAN_CXA14:2'] },
    { f: ['PC.4:0', 'CSCAN_CXA15:2'] },
    { f: ['PC.5:0'] },
    { f: ['PC.6:0'] },
    { f: ['PC.7:0'] },
    { f: ['PC.8:0'] },
    { f: ['PC.9:0'] },
    { f: ['PC.10:0'] },
    { f: ['PC.11:0'] },
    { f: ['PC.12:0'] },
    { f: ['PC.13:0'] },
    { f: ['PC.14:0'] },
    { f: ['PC.15:0'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
];

NUTOOL_PIN.g_cfg_wppin = {
    "LQFP48": [
        
    ],
    "LQFP64": [
        
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'N574F128_48': {
        'ALL': []
    },
    'N574F128_64': {
        'ALL': []
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
    "LQFP48": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', ''
    ],
    "LQFP64": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', ''
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
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};