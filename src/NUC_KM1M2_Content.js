NUTOOL_PIN.g_cfg_chips = [
    { name: "KM1M2DF02N", pkg: "LQFP100" },
    { name: "KM1M2DF02R", pkg: "LQFP100" },
    { name: "KM1M2DF03N", pkg: "LQFP80" },
    { name: "KM1M2DF03R", pkg: "LQFP80" },
    { name: "KM1M2DF04N", pkg: "LQFP64" },
    { name: "KM1M2DF04R", pkg: "LQFP64" },
    { name: "M2003SI7AE", pkg: "LQFP64" },
    { name: "M2003SJ7AE", pkg: "LQFP64" },
    { name: "M2003VI7AE", pkg: "LQFP100" },
    { name: "M2003VJ7AE", pkg: "LQFP100" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP100": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PC.12', 'PC.11', 'PC.10', 'PC.9', 'PB.1', 'PB.0',
        'VSS', 'VDD', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 'PD.12', 'PD.11', 'PD.10', 'PF.7',
        'PE.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PE.9', 'PE.10', 'PE.11',
        'PE.12', 'PE.13', 'PC.8', 'PC.7', 'PC.6', 'PA.7', 'PA.6', 'VSS', 'VDD', 'PD.15',
        'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PF.15', 'PE.14', 'PE.15', 'nRESET',
        'PF.0', 'PF.1', 'PD.9', 'PD.8', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'VSS', 'VDD', 'PD.7', 'PD.6', 'PD.5', 'PD.4', 'PD.3', 'PD.2', 'PD.1', 'PD.0',
        'PD.13', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'PE.7', 'PE.6', 'PE.5', 'PE.4', 'PE.3',
        'PE.2', 'PE.1', 'PE.0', 'VSS', 'LDO_CAP', 'VDD', 'AVDD', 'VREF', 'AVSS', 'PC.14',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PB.11', 'PB.10', 'PB.9', 'PB.8', 'PB.7', 'PB.6'
    ],
    "LQFP64": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9',
        'PA.8', 'PD.12', 'PD.11', 'PD.10', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.6', 'PA.7',
        'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0',
        'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'PD.3', 'PD.2', 'PD.1', 'PD.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP',
        'VDD', 'AVDD', 'VREF', 'AVSS', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PB.11',
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ],
    "LQFP80": [
        'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'VSS', 'VDD', 'PA.11', 'PA.10', 'PA.9',
        'PA.8', 'PD.12', 'PD.11', 'PD.10', 'PF.7', 'PE.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4',
        'PF.3', 'PF.2', 'PE.9', 'PE.10', 'PE.11', 'PE.13', 'PC.8', 'PC.7', 'PC.6', 'PA.7',
        'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PF.15', 'PE.14', 'PE.15',
        'nRESET', 'PF.0', 'PF.1', 'PD.9', 'PD.8', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1',
        'PC.0', 'PD.3', 'PD.2', 'PD.1', 'PD.0', 'PD.13', 'PA.12', 'PA.13', 'PA.14', 'PA.15',
        'PE.7', 'PE.6', 'VSS', 'LDO_CAP', 'VDD', 'AVDD', 'VREF', 'AVSS', 'PC.14', 'PB.15',
        'PB.14', 'PB.13', 'PB.12', 'PB.11', 'PB.10', 'PB.9', 'PB.8', 'PB.7', 'PB.6', 'PB.5'
    ],
    "M2003_LQFP64": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9',
        'PA.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.7', 'PC.6', 'PA.7',
        'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0',
        'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'PD.3', 'PD.2', 'PD.1', 'PD.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP',
        'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PG.10', 'PG.11', 'PG.12', 'PB.11',
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'I2C2_SDA:4', 'UART0_RXD:7', 'UART1_nRTS:8', 'BPWM0_CH5:12'] },
    { f: ['PA.1:0', 'I2C2_SCL:4', 'UART0_TXD:7', 'UART1_nCTS:8', 'BPWM0_CH4:12'] },
    { f: ['PA.2:0', 'I2C1_SDA:4', 'UART4_RXD:7', 'UART1_RXD:8', 'BPWM0_CH3:12'] },
    { f: ['PA.3:0', 'I2C1_SCL:4', 'UART4_TXD:7', 'UART1_TXD:8', 'BPWM0_CH2:12', 'CLKO:14'] },
    { f: ['PA.4:0', 'UART0_nRTS:7', 'UART0_RXD:8', 'I2C0_SDA:9', 'BPWM0_CH1:12'] },
    { f: ['PA.5:0', 'UART0_nCTS:7', 'UART0_TXD:8', 'I2C0_SCL:9', 'BPWM0_CH0:12'] },
    { f: ['PA.6:0', 'I2C1_SDA:4', 'UART0_RXD:7', 'USCI4_CTL0:8', 'BPWM1_CH5:11', 'TM3:14', 'INT0:15'] },
    { f: ['PA.7:0', 'I2C1_SCL:4', 'UART0_TXD:7', 'USCI4_CLK:8', 'BPWM1_CH4:11', 'TM2:14', 'INT1:15'] },
    { f: ['PA.8:0', 'ADC0_CH19:1', 'USCI0_CTL1:6', 'UART1_RXD:7', 'TM3_EXT:13', 'INT4:15'] },
    { f: ['PA.9:0', 'ADC0_CH21:1', 'USCI0_DAT1:6', 'UART1_TXD:7', 'TM2_EXT:13'] },
    { f: ['PA.10:0', 'ADC0_CH22:1', 'I2C2_SDA:4', 'USCI0_DAT0:6', 'TM1_EXT:13'] },
    { f: ['PA.11:0', 'ADC0_CH23:1', 'I2C2_SCL:4', 'USCI0_CLK:6', 'TM0_EXT:13'] },
    { f: ['PA.12:0', 'UART4_TXD:3', 'I2C1_SCL:4', 'USCI2_CTL0:9'] },
    { f: ['PA.13:0', 'UART4_RXD:3', 'I2C1_SDA:4', 'USCI2_CTL1:9'] },
    { f: ['PA.14:0', 'UART0_TXD:3', 'I2C2_SCL:4', 'USCI2_DAT1:9'] },
    { f: ['PA.15:0', 'UART0_RXD:3', 'I2C2_SDA:4', 'USCI2_DAT0:9'] },

    { f: ['PB.0:0', 'ADC0_CH0:1', 'ADC0_ST:2', 'UART2_RXD:3', 'BPWM1_CH5:4', 'USCI0_CTL0:6', 'BPWM0_CH5:8', 'I2C1_SDA:10', 'BPWM0_CH3:12', 'TM8:14', 'TM3_EXT:15'] },
    { f: ['PB.1:0', 'ADC0_CH1:1', 'BPWM0_CH2:2', 'UART2_TXD:3', 'BPWM1_CH4:4', 'USCI3_CTL1:6', 'USCI1_CLK:8', 'BPWM0_CH4:9', 'I2C1_SCL:10', 'TM0:14', 'TM0_EXT:15'] },
    { f: ['PB.2:0', 'ADC0_CH2:1', 'I2C1_SDA:4', 'UART0_TXD:5', 'UART1_RXD:6', 'USCI1_DAT0:8', 'BPWM0_CH3:10', 'TM3:14', 'INT3:15'] },
    { f: ['PB.3:0', 'ADC0_CH3:1', 'I2C1_SCL:4', 'UART0_RXD:5', 'UART1_TXD:6', 'USCI1_DAT1:8', 'BPWM0_CH2:10', 'TM2:14', 'INT2:15'] },
    { f: ['PB.4:0', 'ADC0_CH4:1', 'I2C0_SDA:6', 'USCI1_CTL1:8', 'BPWM0_CH1:10', 'UART2_RXD:13', 'TM1:14', 'INT1:15'] },
    { f: ['PB.5:0', 'ADC0_CH5:1', 'I2C0_SCL:6', 'USCI1_CTL0:8', 'BPWM0_CH0:10', 'UART2_TXD:13', 'TM0:14', 'INT0:15'] },
    { f: ['PB.6:0', 'ADC0_CH6:1', 'USCI1_DAT1:4', 'UART1_RXD:6', 'BPWM1_CH5:8', 'INT4:13'] },
    { f: ['PB.7:0', 'ADC0_CH7:1', 'USCI0_CLK:2', 'USCI1_DAT0:4', 'UART1_TXD:6', 'BPWM1_CH4:8', 'TM2_EXT:9', 'BPWM0_CH2:10', 'INT5:13', 'USCI3_CTL0:15'] },
    { f: ['PB.8:0', 'ADC0_CH8:1', 'USCI0_DAT0:2', 'USCI1_CLK:4', 'UART0_RXD:5', 'UART1_nRTS:6', 'I2C0_SDA:8', 'TM3_EXT:9', 'BPWM0_CH3:10', 'TM1:14', 'USCI3_CLK:15'] },
    { f: ['PB.9:0', 'ADC0_CH9:1', 'USCI0_DAT1:2', 'USCI1_CTL1:4', 'UART0_TXD:5', 'UART1_nCTS:6', 'I2C0_SCL:8', 'TM1_EXT:9', 'BPWM0_CH4:10', 'USCI3_DAT1:15'] },
    { f: ['PB.10:0', 'ADC0_CH10:1', 'UART4_RXD:3', 'USCI1_CTL0:4', 'UART0_nRTS:5', 'I2C1_SDA:7', 'USCI3_DAT0:15'] },
    { f: ['PB.11:0', 'ADC0_CH11:1', 'USCI0_CTL0:2', 'UART4_TXD:3', 'UART0_nCTS:5', 'I2C1_SCL:7', 'TM2_EXT:9', 'BPWM0_CH5:10', 'USCI3_CTL1:15'] },
    { f: ['PB.12:0', 'ADC0_CH12:1', 'BPWM0_CH1:3', 'UART3_nCTS:4', 'USCI0_CLK:5', 'UART0_RXD:6', 'BPWM1_CH3:8', 'I2C2_SDA:11', 'TM3_EXT:13', 'CLKO:14'] },
    { f: ['PB.13:0', 'ADC0_CH13:1', 'BPWM0_CH0:3', 'UART3_nRTS:4', 'USCI0_DAT0:5', 'UART0_TXD:6', 'UART0_nRTS:7', 'BPWM1_CH2:8', 'CLKO:9', 'I2C2_SCL:11', 'USCI0_CTL0:12', 'TM2_EXT:13'] },
    { f: ['PB.14:0', 'ADC0_CH14:1', 'ADC0_ST:2', 'I2C0_SCL:3', 'UART3_RXD:4', 'USCI0_DAT1:5', 'UART0_nRTS:6', 'UART0_RXD:7', 'BPWM1_CH1:8', 'TM1_EXT:13', 'CLKO:14'] },
    { f: ['PB.15:0', 'ADC0_CH15:1', 'I2C0_SDA:3', 'UART3_TXD:4', 'USCI0_CTL1:5', 'UART0_nCTS:6', 'UART0_TXD:7', 'BPWM1_CH0:8', 'USCI2_CLK:9', 'TM1:11', 'BPWM0_CH1:12', 'TM0_EXT:13'] },

    { f: ['PC.0:0', 'USCI1_CTL0:6', 'UART2_RXD:7', 'I2C0_SDA:9', 'BPWM1_CH5:12'] },
    { f: ['PC.1:0', 'USCI1_CTL1:6', 'UART2_TXD:7', 'I2C0_SCL:9', 'ADC0_ST:11', 'BPWM1_CH4:12'] },
    { f: ['PC.2:0', 'UART3_RXD:2', 'USCI1_DAT0:6', 'UART2_nCTS:7', 'BPWM1_CH3:12'] },
    { f: ['PC.3:0', 'UART3_TXD:2', 'USCI1_DAT1:6', 'UART2_nRTS:7', 'BPWM1_CH2:12'] },
    { f: ['PC.4:0', 'UART4_RXD:2', 'I2C1_SDA:5', 'USCI1_CLK:6', 'UART2_RXD:7', 'BPWM1_CH1:12'] },
    { f: ['PC.5:0', 'UART4_TXD:2', 'I2C1_SCL:5', 'UART2_TXD:7', 'BPWM1_CH0:12'] },
    { f: ['PC.6:0', 'UART4_RXD:5', 'UART0_nRTS:7', 'USCI4_DAT1:8', 'BPWM1_CH3:11', 'TM1:14', 'INT2:15'] },
    { f: ['PC.7:0', 'UART4_TXD:5', 'UART0_nCTS:7', 'USCI4_DAT0:8', 'BPWM1_CH2:11', 'TM0:14', 'INT3:15'] },
    { f: ['PC.8:0', 'UART1_RXD:2', 'I2C0_SDA:4', 'UART4_nCTS:5', 'USCI4_CTL1:8'] },
    { f: ['PC.9:0', 'ADC0_CH20:1', 'UART3_RXD:3', 'USCI3_CTL0:6', 'TM7:14'] },
    { f: ['PC.10:0', 'UART3_TXD:3', 'USCI3_CLK:6', 'TM6:14'] },
    { f: ['PC.11:0', 'UART0_RXD:3', 'I2C0_SDA:4', 'UART0_TXD:5', 'USCI3_DAT1:6', 'TM5:14'] },
    { f: ['PC.12:0', 'UART0_TXD:3', 'I2C0_SCL:4', 'UART0_RXD:5', 'USCI3_DAT0:6', 'TM4:14'] },
    { f: ['PC.13:0'] },
    { f: ['PC.14:0', 'USCI0_CTL0:5', 'UART0_TXD:7', 'BPWM0_CH5:12', 'TM1:13', 'TM3_EXT:15'] },
    { f: ['PC.15:0'] },

    { f: ['PD.0:0', 'UART3_RXD:2', 'USCI0_CLK:3', 'I2C2_SDA:4', 'TM2:14'] },
    { f: ['PD.1:0', 'UART3_TXD:2', 'USCI0_DAT0:3', 'I2C2_SCL:4'] },
    { f: ['PD.2:0', 'UART3_nCTS:2', 'USCI0_DAT1:3', 'UART0_RXD:9'] },
    { f: ['PD.3:0', 'UART3_nRTS:2', 'USCI0_CTL1:3', 'USCI1_CTL0:7', 'UART0_TXD:9'] },
    { f: ['PD.4:0', 'USCI0_CTL0:3', 'I2C1_SDA:4', 'USCI1_CTL1:7'] },
    { f: ['PD.5:0', 'I2C1_SCL:4', 'USCI1_DAT0:7', 'ADC0_ST:11'] },
    { f: ['PD.6:0', 'UART1_RXD:3', 'I2C0_SDA:4', 'USCI1_DAT1:7'] },
    { f: ['PD.7:0', 'UART1_TXD:3', 'I2C0_SCL:4', 'USCI1_CLK:7'] },
    { f: ['PD.8:0', 'I2C2_SDA:3', 'UART2_nRTS:4'] },
    { f: ['PD.9:0', 'I2C2_SCL:3', 'UART2_nCTS:4'] },
    { f: ['PD.10:0', 'ADC0_CH16:1', 'UART1_RXD:3'] },
    { f: ['PD.11:0', 'ADC0_CH17:1', 'UART1_TXD:3', 'USCI4_DAT0:8'] },
    { f: ['PD.12:0', 'ADC0_CH18:1', 'UART2_RXD:3', 'ADC0_ST:10'] },
    { f: ['PD.13:0', 'CLKO:10', 'ADC0_ST:11'] },
    { f: ['PD.14:0'] },
    { f: ['PD.15:0', 'BPWM0_CH5:13', 'TM3:14', 'INT1:15'] },

    { f: ['PE.0:0', 'UART3_RXD:2', 'UART4_nRTS:3', 'I2C1_SDA:4', 'TM0_EXT:14'] },
    { f: ['PE.1:0', 'UART3_TXD:2', 'UART4_nCTS:3', 'I2C1_SCL:4', 'TM8_EXT:14'] },
    { f: ['PE.2:0', 'USCI0_CLK:7', 'TM7_EXT:14'] },
    { f: ['PE.3:0', 'USCI0_DAT0:7', 'TM6_EXT:14'] },
    { f: ['PE.4:0', 'USCI0_DAT1:7', 'TM5_EXT:14'] },
    { f: ['PE.5:0', 'USCI0_CTL1:7', 'TM4_EXT:14'] },
    { f: ['PE.6:0', 'USCI0_CTL0:7', 'TM0_EXT:14'] },
    { f: ['PE.7:0', 'TM8_EXT:14'] },
    { f: ['PE.8:0', 'UART4_RXD:3', 'TM0:14'] },
    { f: ['PE.9:0', 'UART3_TXD:3', 'USCI1_CTL0:8'] },
    { f: ['PE.10:0', 'UART1_nCTS:2', 'UART3_RXD:3', 'USCI1_DAT0:8'] },
    { f: ['PE.11:0', 'UART1_nRTS:2', 'USCI1_DAT1:8'] },
    { f: ['PE.12:0', 'TM1:14'] },
    { f: ['PE.13:0', 'UART1_TXD:2', 'I2C0_SCL:4', 'UART4_nRTS:5', 'USCI1_CLK:8'] },
    { f: ['PE.14:0', 'UART3_TXD:2', 'UART2_TXD:3', 'UART4_nCTS:4', 'I2C1_SCL:5'] },
    { f: ['PE.15:0', 'UART3_RXD:2', 'UART2_RXD:3', 'UART4_nRTS:4', 'I2C1_SDA:5'] },

    { f: ['PF.0:0', 'UART1_TXD:2', 'I2C1_SCL:3', 'UART0_TXD:4', 'I2C0_SDA:5', 'USCI0_CTL1:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'BPWM1_CH4:11', 'ICE_DAT:14'] },
    { f: ['PF.1:0', 'UART1_RXD:2', 'I2C1_SDA:3', 'UART0_RXD:4', 'I2C0_SCL:5', 'USCI0_DAT1:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'BPWM1_CH5:11', 'ICE_CLK:14', 'TM2_EXT:15'] },
    { f: ['PF.2:0', 'UART2_RXD:2', 'UART0_RXD:3', 'I2C0_SDA:4', 'USCI1_CTL1:8', 'BPWM1_CH1:9', 'XT1_OUT:10', 'TM1_EXT:15'] },
    { f: ['PF.3:0', 'UART2_TXD:2', 'UART0_TXD:3', 'I2C0_SCL:4', 'BPWM1_CH0:9', 'XT1_IN:10', 'TM0_EXT:15'] },
    { f: ['PF.4:0', 'UART2_TXD:3', 'UART2_nRTS:4', 'UART0_nRTS:5', 'BPWM0_CH1:6', 'X32_OUT:10'] },
    { f: ['PF.5:0', 'UART2_RXD:3', 'UART2_nCTS:4', 'UART0_nCTS:5', 'BPWM0_CH0:6', 'USCI4_CTL1:8', 'X32_IN:10', 'ADC0_ST:11'] },
    { f: ['PF.6:0', 'UART3_TXD:3', 'TM1:14'] },
    { f: ['PF.7:0', 'UART4_TXD:3'] },
    { f: ['PF.8:0'] },
    { f: ['PF.9:0'] },
    { f: ['PF.10:0'] },
    { f: ['PF.11:0'] },
    { f: ['PF.12:0'] },
    { f: ['PF.13:0'] },
    { f: ['PF.14:0', 'UART3_RXD:3', 'BPWM0_CH4:11', 'CLKO:13', 'TM3:14', 'INT5:15'] },
    { f: ['PF.15:0', 'BPWM0_CH1:12', 'TM2:13', 'CLKO:14', 'INT4:15'] },

    { f: ['PG.0:0'] },
    { f: ['PG.1:0'] },
    { f: ['PG.2:0'] },
    { f: ['PG.3:0'] },
    { f: ['PG.4:0'] },
    { f: ['PG.5:0'] },
    { f: ['PG.6:0'] },
    { f: ['PG.7:0'] },
    { f: ['PG.8:0'] },
    { f: ['PG.9:0'] },
    { f: ['PG.10:0'] },
    { f: ['PG.11:0'] },
    { f: ['PG.12:0'] },
    { f: ['PG.13:0'] },
    { f: ['PG.14:0'] },
    { f: ['PG.15:0'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
    'ADC0_CH0:ADC0 channel 0 analog input.',
    'ADC0_CH1:ADC0 channel 1 analog input.',
    'ADC0_CH2:ADC0 channel 2 analog input.',
    'ADC0_CH3:ADC0 channel 3 analog input.',
    'ADC0_CH4:ADC0 channel 4 analog input.',
    'ADC0_CH5:ADC0 channel 5 analog input.',
    'ADC0_CH11:ADC0 channel 11 analog input.',
    'ADC0_CH12:ADC0 channel 12 analog input.',
    'ADC0_ST:ADC0 external trigger input pin.',
    'CLKO:Clock Out',
    'I2C0_SCL:I2C0 clock pin.',
    'I2C0_SDA:I2C0 data input/output pin.',
    'ECAP0_IC0:Enhanced capture unit 0 input 0 pin.',
    'ECAP0_IC1:Enhanced capture unit 0 input 1 pin.',
    'ECAP0_IC2:Enhanced capture unit 0 input 2 pin.',
    'ICE_CLK:Serial wired debugger clock pin.',
    'ICE_DAT:Serial wired debugger data pin.',
    'INT0:External interrupt 0 input pin.',
    'INT1:External interrupt 1 input pin.',
    'INT2:External interrupt 2 input pin.',
    'INT3:External interrupt 3 input pin.',
    'INT5:External interrupt 5 input pin.',
    'nRESET:External reset input: active LOW, with an internal pull-up. Set this pin low reset to initial state.',
    'PWM0_BRAKE0:PWM0 Brake 0 input pin.',
    'PWM0_BRAKE1:PWM0 Brake 1 input pin.',
    'PWM0_CH0:PWM0 channel 0 output/capture input.',
    'PWM0_CH1:PWM0 channel 1 output/capture input.',
    'PWM0_CH2:PWM0 channel 2 output/capture input.',
    'PWM0_CH3:PWM0 channel 3 output/capture input.',
    'PWM0_CH4:PWM0 channel 4 output/capture input.',
    'PWM0_CH5:PWM0 channel 5 output/capture input.',
    'TM0:Timer0 event counter input/toggle output pin.',
    'TM0_EXT:Timer0 external capture input/toggle output pin.',
    'TM1:Timer1 event counter input/toggle output pin.',
    'TM1_EXT:Timer1 external capture input/toggle output pin.',
    'TM2:Timer2 event counter input/toggle output pin.',
    'TM2_EXT:Timer2 external capture input/toggle output pin.',
    'TM3:Timer3 event counter input/toggle output pin.',
    'TM3_EXT:Timer3 external capture input/toggle output pin.',
    'UART0_nCTS:UART0 clear to Send input pin.',
    'UART0_nRTS:UART0 request to Send output pin.',
    'UART0_RXD:UART0 data receiver input pin.',
    'UART0_TXD:UART0 data transmitter output pin.',
    'UART1_nCTS:UART1 clear to Send input pin.',
    'UART1_nRTS:UART1 request to Send output pin.',
    'UART1_RXD:UART1 data receiver input pin.',
    'UART1_TXD:UART1 data transmitter output pin.',
    'USCI0_CLK:USCI0 clock pin.',
    'USCI0_CTL0:USCI0 control 0 pin.',
    'USCI0_CTL1:USCI0 control 1 pin.',
    'USCI0_DAT0:USCI0 data 0 pin.',
    'USCI0_DAT1:USCI0 data 1 pin.'
];

NUTOOL_PIN.g_cfg_wppin = {
    "LQFP100": [
        
    ],
    "LQFP64": [
        
    ],
    "LQFP80": [
        
    ],
    "M2003_LQFP64": [
        
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'KM1M2DF02N': {
        'ALL': []
    },
    'KM1M2DF02R': {
        'ALL': []
    },
    'KM1M2DF03N': {
        'ALL': []
    },
    'KM1M2DF03R': {
        'ALL': []
    },
    'KM1M2DF04N': {
        'ALL': []
    },
    'KM1M2DF04R': {
        'ALL': []
    },
    'M2003SI7AE': {
        'ALL': []
    },
    'M2003SJ7AE': {
        'ALL': []
    },
    'M2003VI7AE': {
        'ALL': []
    },
    'M2003VJ7AE': {
        'ALL': []
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
    "LQFP100": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
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
    ],
    "M2003_LQFP64": [
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
NUTOOL_PIN.g_cfg_regDescriptions.IOP0MD = '0x40060080';
NUTOOL_PIN.g_cfg_regDescriptions.IOP1MD = '0x40060084';
NUTOOL_PIN.g_cfg_regDescriptions.IOP2MD = '0x40060088';
NUTOOL_PIN.g_cfg_regDescriptions.IOP3MD = '0x4006008C';
NUTOOL_PIN.g_cfg_regDescriptions.IOP4MD = '0x40060090';
NUTOOL_PIN.g_cfg_regDescriptions.IOP5MD = '0x40060094';
NUTOOL_PIN.g_cfg_regDescriptions.IOP6MD = '0x40060098';
NUTOOL_PIN.g_cfg_regDescriptions.IOP7MD = '0x4006009C';
NUTOOL_PIN.g_cfg_regDescriptions.IOP8MD = '0x400600A0';
NUTOOL_PIN.g_cfg_regDescriptions.IOP9MD = '0x400600A4';
NUTOOL_PIN.g_cfg_regDescriptions.IOPAMD = '0x400600A8';
NUTOOL_PIN.g_cfg_regDescriptions.IOPBMD = '0x400600AC';
NUTOOL_PIN.g_cfg_regDescriptions.IOPDMD = '0x400600B4';
NUTOOL_PIN.g_cfg_regDescriptions.IOPEMD = '0x400600B8';
NUTOOL_PIN.g_cfg_regDescriptions.IOPFMD = '0x400600BC';

NUTOOL_PIN.g_cfg_gpioMatrix = [];

NUTOOL_PIN.g_cfg_shareBits = [];

NUTOOL_PIN.g_cfg_addGPIO = {};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.getPackageNumber(given_partNumber_package);
    let partNumber = NUTOOL_PIN.getPartNumber(given_partNumber_package);
    switch (partNumber) {
        case "M2003SI7AE":
            NUTOOL_PIN.g_packageNumberIndex = "M2003_LQFP64";
            break;
        case "M2003SJ7AE":
            NUTOOL_PIN.g_packageNumberIndex = "M2003_LQFP64";
            break;
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};