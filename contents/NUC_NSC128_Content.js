NUTOOL_PIN.g_cfg_chips = [
    { name: "NSC128_48", pkg: "LQFP48" },
    { name: "NSC128_64", pkg: "LQFP64" },
    { name: "NSC128_80", pkg: "LQFP80" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP48": [
        'PC.11', 'PC.12', 'PC.13', 'PD.0', 'PD.1', 'PD.2', 'PD.3', 'VDD33SPI', 'SPKP', 'VSSSPK',
        'VDDSPK', 'SPKN', 'VSS', 'LDO_CAP(1.5V)', 'VDD(5V)', 'AVDD(5V)', 'AVSS', 'BSBG_CAP', 'BSVMID_CAP', 'BSLDO_CAP',
        'BSP', 'BSN', 'PD.10', 'PD.11', 'VLCD', 'PA.0', 'PA.1', 'PA.2', 'PA.3', 'PA.4',
        'PA.5', 'PA.6', 'PA.7', 'PA.8', 'PA.9', 'PA.14', 'PA.15', 'PB.0', 'PB.1', 'PB.2',
        'PB.5', 'PB.6', 'PB.14', 'PB.15', 'nRESET', 'PC.4', 'PC.5', 'PC.10'
    ],
    "LQFP64": [
        'PC.7', 'PC.10', 'PC.11', 'PC.12', 'PC.13', 'PC.14', 'PC.15', 'PD.0', 'PD.1', 'PD.2',
        'PD.3', 'VDD33SPI', 'SPKP', 'VSSSPK', 'VDDSPK', 'SPKN', 'VSS', 'LDO_CAP(1.5V)', 'VDD(5V)', 'AVDD(5V)',
        'AVSS', 'BSBG_CAP', 'BSVMID_CAP', 'BSLDO_CAP', 'BSP', 'BSN', 'PD.10', 'PD.11', 'VLCD', 'PA.0',
        'PA.1', 'PA.2', 'PA.3', 'PA.4', 'PA.5', 'PA.6', 'PA.7', 'PA.8', 'PA.9', 'PA.10',
        'PA.11', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PB.4',
        'PB.5', 'PB.6', 'PB.7', 'PB.8', 'PB.9', 'PB.14', 'PB.15', 'nRESET', 'PC.0', 'PC.1',
        'PC.2', 'PC.3', 'PC.4', 'PC.5'
    ],
    "LQFP80": [
        'PC.6', 'PC.7', 'PC.8', 'PC.9', 'PC.10', 'PC.11', 'PC.12', 'PC.13', 'PC.14', 'PC.15',
        'PD.0', 'PD.1', 'PD.2', 'PD.3', 'VDD33SPI', 'SPKP', 'VSSSPK', 'VDDSPK', 'SPKN', 'VSS',
        'PD.4', 'PD.5', 'LDO_CAP(1.5V)', 'VDD(5V)', 'AVDD(5V)', 'AVSS', 'BSBG_CAP', 'BSVMID_CAP', 'BSLDO_CAP', 'BSP',
        'BSN', 'PD.6', 'PD.7', 'PD.8', 'PD.9', 'PD.10', 'PD.11', 'VLCD', 'PD.12', 'PD.13',
        'PE.0', 'PA.0', 'PA.1', 'PA.2', 'PA.3', 'PA.4', 'PA.5', 'PA.6', 'PA.7', 'PA.8',
        'PA.9', 'PA.10', 'PA.11', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'PB.0', 'PB.1', 'PB.2',
        'PB.3', 'PB.4', 'PB.5', 'PB.6', 'PB.7', 'PB.8', 'PB.9', 'PB.10', 'PB.11', 'PB.12',
        'PB.13', 'PB.14', 'PB.15', 'nRESET', 'PC.0', 'PC.1', 'PC.2', 'PC.3', 'PC.4', 'PC.5'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'LCD_COM0:1'] },
    { f: ['PA.1:0', 'LCD_COM1:1'] },
    { f: ['PA.2:0', 'LCD_COM2:1'] },
    { f: ['PA.3:0', 'LCD_COM3:1'] },
    { f: ['PA.4:0', 'LCD_COM4:1', 'LCD_SEG0:1', 'UART0_RXD:2'] },
    { f: ['PA.5:0', 'LCD_COM5:1', 'LCD_SEG1:1', 'UART0_TXD:2'] },
    { f: ['PA.6:0', 'LCD_COM6:1', 'LCD_SEG2:1', 'UART1_RXD:2'] },
    { f: ['PA.7:0', 'LCD_COM7:1', 'LCD_SEG3:1', 'UART1_TXD:2'] },
    { f: ['PA.8:0', 'LCD_SEG4:1', 'SARADC_CH0:2'] },
    { f: ['PA.9:0', 'LCD_SEG5:1', 'SARADC_CH1:2'] },
    { f: ['PA.10:0', 'LCD_SEG6:1', 'SARADC_CH2:2'] },
    { f: ['PA.11:0', 'LCD_SEG7:1'] },
    { f: ['PA.12:0', 'LCD_SEG8:1', 'UART2_nCTS:3'] },
    { f: ['PA.13:0', 'LCD_SEG9:1', 'UART2_nRTS:3'] },
    { f: ['PA.14:0', 'LCD_SEG10:1', 'CXA0:2', 'UART2_TXD:3'] },
    { f: ['PA.15:0', 'LCD_SEG11:1', 'CXA1:2', 'UART2_RXD:3'] },

    { f: ['PB.0:0', 'LCD_SEG12:1', 'CXA2:2', 'UART0_TXD:3'] },
    { f: ['PB.1:0', 'LCD_SEG13:1', 'CXA3:2', 'UART0_RXD:3'] },
    { f: ['PB.2:0', 'LCD_SEG14:1', 'PWM0_CH0:2', 'TM0:3'] },
    { f: ['PB.3:0', 'LCD_SEG15:1', 'PWM0_CH1:2'] },
    { f: ['PB.4:0', 'LCD_SEG16:1', 'PWM0_CH2:2'] },
    { f: ['PB.5:0', 'LCD_SEG17:1', 'UART1_RXD:2', 'I2C_SDA:3'] },
    { f: ['PB.6:0', 'LCD_SEG18:1', 'UART1_TXD:2', 'I2C_SCL:3'] },
    { f: ['PB.7:0', 'LCD_SEG19:1', 'UART1_nRTS:2'] },
    { f: ['PB.8:0', 'LCD_SEG20:1', 'UART1_nCTS:2'] },
    { f: ['PB.9:0', 'LCD_SEG21:1'] },
    { f: ['PB.10:0', 'LCD_SEG22:1'] },
    { f: ['PB.11:0', 'LCD_SEG23:1'] },
    { f: ['PB.12:0', 'LCD_SEG24:1'] },
    { f: ['PB.13:0', 'LCD_SEG25:1'] },
    { f: ['PB.14:0', 'LCD_SEG26:1', 'ICE_DAT:2'] },
    { f: ['PB.15:0', 'LCD_SEG27:1', 'ICE_CLK:2'] },

    { f: ['PC.0:0', 'LCD_SEG28:1', 'UART0_TXD:2'] },
    { f: ['PC.1:0', 'LCD_SEG29:1', 'UART0_RXD:2'] },
    { f: ['PC.2:0', 'LCD_SEG30:1', 'UART0_nRTS:2', 'SPI0_SS1:3'] },
    { f: ['PC.3:0', 'LCD_SEG31:1', 'UART0_nCTS:2', 'PWM0_CH0:3'] },
    { f: ['PC.4:0', 'LCD_SEG32:1', 'I2C_SCL:2', 'PWM0_CH1:3'] },
    { f: ['PC.5:0', 'LCD_SEG33:1', 'I2C_SDA:2', 'PWM0_CH2:3'] },
    { f: ['PC.6:0', 'LCD_SEG34:1', 'IROUT:2'] },
    { f: ['PC.7:0', 'LCD_SEG35:1', 'TM0:2'] },
    { f: ['PC.8:0', 'LCD_SEG36:1', 'TM1:2'] },
    { f: ['PC.9:0', 'LCD_SEG37:1', 'TM2:2'] },
    { f: ['PC.10:0', 'LCD_SEG38:1', 'SPIM_SS:2'] },
    { f: ['PC.11:0', 'LCD_SEG39:1', 'SPIM_CLK:2'] },
    { f: ['PC.12:0', 'LCD_SEG40:1', 'SPIM_MOSI:2'] },
    { f: ['PC.13:0', 'LCD_SEG41:1', 'SPIM_MISO:2'] },
    { f: ['PC.14:0', 'LCD_SEG42:1', 'SPIM_SIO2:2'] },
    { f: ['PC.15:0', 'LCD_SEG43:1', 'SPIM_SIO3:2'] },

    { f: ['PD.0:0', 'LCD_SEG44:1', 'SPI0_SS0:2', 'UART1_RXD:3'] },
    { f: ['PD.1:0', 'LCD_SEG45:1', 'SPI0_CLK:2', 'UART1_TXD:3'] },
    { f: ['PD.2:0', 'LCD_SEG46:1', 'SPI0_MISO:2', 'I2C_SCL:3'] },
    { f: ['PD.3:0', 'LCD_SEG47:1', 'SPI0_MOSI:2', 'I2C_SDA:3'] },
    { f: ['PD.4:0', 'PWM0_CH0:1', 'I2C_SCL:2'] },
    { f: ['PD.5:0', 'PWM0_CH1:1', 'I2C_SDA:2'] },
    { f: ['PD.6:0', 'OPA0_P:1'] },
    { f: ['PD.7:0', 'OPA0_N:1'] },
    { f: ['PD.8:0', 'OPA0_O:1', 'SARADC_CH5:2'] },
    { f: ['PD.9:0', 'SARADC_CH3:2'] },
    { f: ['PD.10:0', 'LCD_DH1:1'] },
    { f: ['PD.11:0', 'LCD_DH2:1'] },
    { f: ['PD.12:0', 'X32_OUT:1', 'PWM0_CH0:2', 'I2C_SCL:3'] },
    { f: ['PD.13:0', 'X32_IN:1', 'PWM0_CH1:2', 'I2C_SDA:3'] },
    { f: ['PD.14:0'] },
    { f: ['PD.15:0'] },

    { f: ['PE.0:0', 'SPI0_SS0:1', 'SARADC_CH4:2'] },
    { f: ['PE.1:0', 'SPI0_CLK:1'] },
    { f: ['PE.2:0', 'SPI0_MISO:1'] },
    { f: ['PE.3:0', 'SPI0_MOSI:1'] },
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
    { f: ['PE.15:0'] }
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
    "LQFP80": [
        
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'NSC128_48': {
        'ALL': []
    },
    'NSC128_64': {
        'ALL': []
    },
    'NSC128_80': {
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
    ],
    "LQFP80": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
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