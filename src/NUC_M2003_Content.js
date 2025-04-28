NUTOOL_PIN.g_cfg_chips = [
    // M2003G
    { name: "M2003SG6AE", pkg: "LQFP64" },
    { name: "M2003LG6AE", pkg: "LQFP48" },
    { name: "M2003TG6AE", pkg: "QFN33" },
    // M2003E
    { name: "M2003LE4AE", pkg: "LQFP48" },
    { name: "M2003TE4AE", pkg: "QFN33" },
    { name: "M2003PE4AE", pkg: "LQFP32" },
    { name: "M2003EE4AE", pkg: "TSSOP28" },
    { name: "M2003LD4AE", pkg: "LQFP48" },
    { name: "M2003TD4AE", pkg: "QFN33" },
    // M2003C
    { name: "M2003FC1AE", pkg: "TSSOP20" },
    { name: "M2003XC1AE", pkg: "QFN20" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "TSSOP20(4.4*6.5)": [
        'PB.1', 'PB.2', 'PB.3', 'PE.15', 'PB.4', 'PB.5', 'VSS', 'PF.0', 'VDD', 'PC.14', 
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PB.7', 'PB.8', 'PB.9', 'PF.1', 'PB.11', 'PB.0'
    ],
    "QFN20(3*3)": [
        'PB.1', 'PB.2', 'PB.3', 'PE.15', 'PB.4', 'PB.5', 'VSS', 'PF.0', 'VDD', 'PC.14', 
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PB.7', 'PB.8', 'PB.9', 'PF.1', 'PB.11', 'PB.0'
    ],
    "TSSOP28(4.4*9.7)": [
        'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'PG.9', 'VDD', 'PB.14', 'PB.13', 'PB.12', 
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.3', 'PF.2', 'PA.3', 
        'PA.2', 'PA.1', 'PA.0', 'PE.15', 'PF.0', 'PF.1', 'PC.1', 'PC.0'
    ],
    "LQFP32(7*7)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 
        'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PF.15', 'PE.15', 'PF.0', 'PF.1', 'PC.1', 'PC.0', 
        'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'PG.9', 'VDD', 'PB.15', 'PB.14', 'PB.13', 
        'PB.12', 'PG.11'
    ],
    "QFN33(4*4)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 
        'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PF.15', 'PE.15', 'PF.0', 'PF.1', 'PC.1', 'PC.0', 
        'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'PG.9', 'VDD', 'PB.15', 'PB.14', 'PB.13', 
        'PB.12', 'PG.11'
    ],
    "LQFP48(7*7)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 
        'PA.1', 'PA.0', 'PF.15', 'PE.15', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 
        'PC.1', 'PC.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'PG.9', 'VDD', 'PC.14', 
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PG.11', 'PG.12', 'PB.7', 'PB.6'
    ],
    "LQFP64(7*7)": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 
        'PA.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.7', 'PC.6', 'PA.7', 
        'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 
        'PF.15', 'PE.15', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0', 
        'PD.3', 'PD.2', 'PD.1', 'PD.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'PG.9', 
        'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PG.10', 'PG.11', 'PG.12', 'PB.11', 
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ],
    "LQFP64(Alpha)": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 
        'PA.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.7', 'PC.6', 'PA.7', 
        'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 
        'PF.15', 'PE.15', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0', 
        'PD.3', 'PD.2', 'PD.1', 'PD.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 
        'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PG.10', 'PG.11', 'PG.12', 'PB.11', 
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'QSPI0_MOSI0:3', 'UART0_RXD:7', 'UART1_nRTS:8', 'PWM0_CH5:13']},
    { f: ['PA.1:0', 'QSPI0_MISO0:3', 'UART0_TXD:7', 'UART1_nCTS:8', 'PWM0_CH4:13']},
    { f: ['PA.2:0', 'QSPI0_CLK:3', 'UART1_RXD:8', 'I2C0_SMBSUS:9', 'PWM0_CH3:13']},
    { f: ['PA.3:0', 'QSPI0_SS:3', 'UART1_TXD:8', 'I2C0_SMBAL:9', 'PWM0_CH2:13', 'CLKO:14', 'PWM1_BRAKE1:15']},
    { f: ['PA.4:0', 'QSPI0_MOSI1:3', 'UART0_nRTS:7', 'UART0_RXD:8', 'I2C0_SDA:9', 'CAN0_RXD:10', 'PWM0_CH1:13']},
    { f: ['PA.5:0', 'QSPI0_MISO1:3', 'CAN0_TXH:6', 'UART0_nCTS:7', 'UART0_TXD:8', 'I2C0_SCL:9', 'CAN0_TXD:10', 'PWM0_CH0:13']},
    { f: ['PA.6:0', 'CAN0_TXL:6', 'UART0_RXD:7', 'PWM1_CH5:11', 'TM3:14', 'INT0:15']},
    { f: ['PA.7:0', 'UART0_TXD:7', 'PWM1_CH4:11', 'TM2:14', 'INT1:15']},
    { f: ['PA.8:0', 'USCI0_CTL1:6', 'UART1_RXD:7', 'ECAP0_IC2:11', 'TM3_EXT:13', 'INT4:15']},
    { f: ['PA.9:0', 'USCI0_DAT1:6', 'UART1_TXD:7', 'ECAP0_IC1:11', 'TM2_EXT:13']},
    { f: ['PA.10:0', 'USCI0_DAT0:6', 'ECAP0_IC0:11', 'TM1_EXT:13']},
    { f: ['PA.11:0', 'USCI0_CLK:6', 'PWM0_BRAKE1:11', 'TM0_EXT:13']},
    { f: ['PA.12:0', 'CAN0_TXD:6', 'CAN0_TXH:7', 'USCI2_CTL0:9']},
    { f: ['PA.13:0', 'CAN0_RXD:6', 'USCI2_CTL1:9']},
    { f: ['PA.14:0', 'UART0_TXD:3', 'CAN0_TXL:7', 'USCI2_DAT1:9']},
    { f: ['PA.15:0', 'UART0_RXD:3', 'USCI2_DAT0:9']},

    { f: ['PB.0:0', 'ADC0_CH0:1', 'ADC0_ST:2', 'PWM1_CH5:4', 'QSPI0_MOSI1:5', 'USCI0_CTL0:6', 'PWM0_CH3:7', 'PWM0_CH5:11', 'PWM0_BRAKE1:13', 'TM3_EXT:15']},
    { f: ['PB.1:0', 'ADC0_CH1:1', 'PWM1_CH4:4', 'QSPI0_MISO1:5', 'USCI3_CTL1:6', 'PWM0_CH2:7', 'USCI1_CLK:8', 'PWM0_CH4:11', 'ECAP0_IC0:12', 'PWM0_BRAKE0:13', 'TM0:14', 'TM0_EXT:15']},
    { f: ['PB.2:0', 'ADC0_CH2:1', 'UART0_TXD:5', 'UART1_RXD:6', 'USCI1_DAT0:8', 'PWM0_CH3:11', 'ECAP0_IC1:12', 'TM3:14', 'INT3:15']},
    { f: ['PB.3:0', 'ADC0_CH3:1', 'UART0_RXD:5', 'UART1_TXD:6', 'USCI1_DAT1:8', 'PWM0_CH2:11', 'ECAP0_IC2:12', 'PWM0_BRAKE0:13', 'TM2:14', 'INT2:15']},
    { f: ['PB.4:0', 'ADC0_CH4:1', 'I2C0_SDA:6', 'USCI1_CTL1:8', 'PWM0_CH1:11', 'UART2_RXD:13', 'TM1:14', 'INT1:15']},
    { f: ['PB.5:0', 'ADC0_CH5:1', 'I2C0_SCL:6', 'USCI1_CTL0:8', 'PWM0_CH0:11', 'UART2_TXD:13', 'TM0:14', 'INT0:15']},
    { f: ['PB.6:0', 'ADC0_CH6:1', 'USCI1_DAT1:4', 'UART1_RXD:6', 'PWM1_BRAKE1:7', 'PWM1_CH5:8', 'PWM0_BRAKE1:11', 'PWM0_CH5:12', 'INT4:13']},
    { f: ['PB.7:0', 'ADC0_CH7:1', 'USCI0_CLK:2', 'USCI1_DAT0:4', 'UART1_TXD:6', 'PWM1_BRAKE0:7', 'PWM1_CH4:8', 'TM2_EXT:9', 'PWM0_BRAKE0:11', 'PWM0_CH4:12', 'INT5:13', 'PWM0_CH2:14', 'USCI3_CTL0:15']},
    { f: ['PB.8:0', 'ADC0_CH8:1', 'USCI0_DAT0:2', 'USCI1_CLK:4', 'UART0_RXD:5', 'UART1_nRTS:6', 'I2C0_SDA:8', 'TM3_EXT:9', 'PWM0_CH3:12', 'TM1:14', 'USCI3_CLK:15']},
    { f: ['PB.9:0', 'ADC0_CH9:1', 'USCI0_DAT1:2', 'USCI1_CTL1:4', 'UART0_TXD:5', 'UART1_nCTS:6', 'I2C0_SCL:8', 'TM1_EXT:9', 'PWM0_CH4:12', 'USCI3_DAT1:15']},
    { f: ['PB.10:0', 'ADC0_CH10:1', 'USCI1_CTL0:4', 'UART0_nRTS:5', 'CAN0_RXD:8', 'USCI3_DAT0:15']},
    { f: ['PB.11:0', 'ADC0_CH11:1', 'USCI0_CTL0:2', 'UART0_nCTS:5', 'CAN0_TXD:8', 'TM2_EXT:9', 'CAN0_TXH:11', 'PWM0_CH5:12', 'USCI3_CTL1:15']},
    { f: ['PB.12:0', 'ADC0_CH12:1', 'USCI0_CLK:5', 'UART0_RXD:6', 'PWM1_CH3:8', 'CAN0_TXL:9', 'PWM0_CH1:10', 'QSPI0_CLK:12', 'TM3_EXT:13', 'CLKO:14']},
    { f: ['PB.13:0', 'ADC0_CH13:1', 'USCI0_DAT0:5', 'UART0_TXD:6', 'UART0_nRTS:7', 'PWM1_CH2:8', 'CLKO:9', 'PWM0_CH0:10', 'USCI0_CTL0:12', 'TM2_EXT:13']},
    { f: ['PB.14:0', 'ADC0_ST:2', 'I2C0_SCL:3', 'USCI0_DAT1:5', 'UART0_nRTS:6', 'UART0_RXD:7', 'PWM1_CH1:8', 'TM1_EXT:13', 'CLKO:14', 'PWM0_BRAKE1:15']},
    { f: ['PB.15:0', 'I2C0_SDA:3', 'USCI0_CTL1:5', 'UART0_nCTS:6', 'UART0_TXD:7', 'PWM1_CH0:8', 'USCI2_CLK:9', 'PWM0_CH1:10', 'TM1:11', 'TM0_EXT:13', 'PWM0_BRAKE1:15']},

    { f: ['PC.0:0', 'QSPI0_MOSI0:4', 'USCI1_CTL0:6', 'UART2_RXD:7', 'I2C0_SDA:9', 'PWM1_CH5:12']},
    { f: ['PC.1:0', 'QSPI0_MISO0:4', 'USCI1_CTL1:6', 'UART2_TXD:7', 'I2C0_SCL:9', 'ADC0_ST:11', 'PWM1_CH4:12']},
    { f: ['PC.2:0', 'QSPI0_CLK:4', 'USCI1_DAT0:6', 'UART2_nCTS:7', 'I2C0_SMBSUS:9', 'PWM1_CH3:12']},
    { f: ['PC.3:0', 'QSPI0_SS:4', 'USCI1_DAT1:6', 'UART2_nRTS:7', 'I2C0_SMBAL:9', 'PWM1_CH2:12']},
    { f: ['PC.4:0', 'QSPI0_MOSI1:4', 'USCI1_CLK:6', 'UART2_RXD:7', 'CAN0_RXD:10', 'PWM1_CH1:12']},
    { f: ['PC.5:0', 'QSPI0_MISO1:4', 'CAN0_TXH:6', 'UART2_TXD:7', 'CAN0_TXD:10', 'PWM1_CH0:12']},
    { f: ['PC.6:0', 'UART0_nRTS:7', 'PWM1_CH3:11', 'TM1:14', 'INT2:15']},
    { f: ['PC.7:0', 'UART0_nCTS:7', 'PWM1_CH2:11', 'TM0:14', 'INT3:15']},
    { f: ['PC.8:0']},
    { f: ['PC.9:0']},
    { f: ['PC.10:0']},
    { f: ['PC.11:0']},
    { f: ['PC.12:0']},
    { f: ['PC.13:0']},
    { f: ['PC.14:0', 'USCI0_CTL0:5', 'QSPI0_CLK:6', 'UART0_TXD:7', 'PWM0_CH5:10', 'TM1:13', 'TM3_EXT:15']},
    { f: ['PC.15:0']},

    { f: ['PD.0:0', 'USCI0_CLK:3', 'CAN0_TXL:7', 'TM2:14']},
    { f: ['PD.1:0', 'USCI0_DAT0:3']},
    { f: ['PD.2:0', 'USCI0_DAT1:3', 'UART0_RXD:9']},
    { f: ['PD.3:0', 'USCI0_CTL1:3', 'USCI1_CTL0:7', 'UART0_TXD:9']},
    { f: ['PD.4:0']},
    { f: ['PD.5:0']},
    { f: ['PD.6:0']},
    { f: ['PD.7:0']},
    { f: ['PD.8:0']},
    { f: ['PD.9:0']},
    { f: ['PD.10:0']},
    { f: ['PD.11:0']},
    { f: ['PD.12:0']},
    { f: ['PD.13:0']},
    { f: ['PD.14:0']},
    { f: ['PD.15:0', 'PWM0_CH5:12', 'TM3:14', 'INT1:15']},

    { f: ['PE.0:0']},
    { f: ['PE.1:0']},
    { f: ['PE.2:0']},
    { f: ['PE.3:0']},
    { f: ['PE.4:0']},
    { f: ['PE.5:0']},
    { f: ['PE.6:0']},
    { f: ['PE.7:0']},
    { f: ['PE.8:0']},
    { f: ['PE.9:0']},
    { f: ['PE.10:0']},
    { f: ['PE.11:0']},
    { f: ['PE.12:0']},
    { f: ['PE.13:0']},
    { f: ['PE.14:0']},
    { f: ['PE.15:0', 'nRESET:2']},

    { f: ['PF.0:0', 'UART1_TXD:2', 'UART0_TXD:4', 'I2C0_SDA:5', 'USCI0_CTL1:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'PWM1_CH4:11', 'ICE_DAT:14']},
    { f: ['PF.1:0', 'UART1_RXD:2', 'UART0_RXD:4', 'I2C0_SCL:5', 'CAN0_TXL:6', 'USCI0_DAT1:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'PWM1_CH5:11', 'ICE_CLK:14', 'TM2_EXT:15']},
    { f: ['PF.2:0', 'UART2_RXD:2', 'UART0_RXD:3', 'I2C0_SDA:4', 'QSPI0_CLK:5', 'USCI1_CTL1:8', 'PWM1_CH1:9', 'XT1_OUT:10', 'TM1_EXT:15']},
    { f: ['PF.3:0', 'UART2_TXD:2', 'UART0_TXD:3', 'I2C0_SCL:4', 'PWM1_CH0:9', 'XT1_IN:10', 'TM0_EXT:15']},
    { f: ['PF.4:0', 'UART2_TXD:3', 'UART2_nRTS:4', 'UART0_nRTS:5', 'PWM0_CH1:7']},
    { f: ['PF.5:0', 'UART2_RXD:3', 'UART2_nCTS:4', 'UART0_nCTS:5', 'PWM0_CH0:7', 'ADC0_ST:11']},
    { f: ['PF.6:0', 'TM1:14']},
    { f: ['PF.7:0']},
    { f: ['PF.8:0']},
    { f: ['PF.9:0']},
    { f: ['PF.10:0']},
    { f: ['PF.11:0']},
    { f: ['PF.12:0']},
    { f: ['PF.13:0']},
    { f: ['PF.14:0', 'PWM0_BRAKE0:10', 'PWM0_CH4:12', 'CLKO:13', 'TM3:14', 'INT5:15']},
    { f: ['PF.15:0', 'PWM0_BRAKE0:11', 'PWM0_CH1:12', 'TM2:13', 'CLKO:14', 'INT4:15']},

    { f: ['PG.0:0']},
    { f: ['PG.1:0']},
    { f: ['PG.2:0']},
    { f: ['PG.3:0']},
    { f: ['PG.4:0']},
    { f: ['PG.5:0']},
    { f: ['PG.6:0']},
    { f: ['PG.7:0']},
    { f: ['PG.8:0']},
    { f: ['PG.9:0']},
    { f: ['PG.10:0']},
    { f: ['PG.11:0']},
    { f: ['PG.12:0']},
    { f: ['PG.13:0']},
    { f: ['PG.14:0']},
    { f: ['PG.15:0']}
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

NUTOOL_PIN.g_cfg_regDescriptions = {};
//NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPL = '0x40000030';
//NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPH = '0x40000034';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPL = '0x40000038';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPH = '0x4000003C';
//NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPL = '0x40000040';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPH = '0x40000044';
//NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPL = '0x40000048';
//NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPH = '0x4000004C';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPH = '0x40000054';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPL = '0x40000058';
//NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPH = '0x4000005C';
//NUTOOL_PIN.g_cfg_regDescriptions.GPJ_MFPL = '0x40000078';
//NUTOOL_PIN.g_cfg_regDescriptions.GPJ_MFPH = '0x4000007C';

NUTOOL_PIN.g_cfg_gpioMatrix = [];
NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {
    'M2003SG6AE': {
        'ALL': []
    },
    'M2003LG6AE': {
        'ALL': []
    },
    'M2003TG6AE': {
        'ALL': []
    },
    'M2003LE4AE': {
        'ALL': ['PWM1', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2']
    },
    'M2003TE4AE': {
        'ALL': ['PWM1', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2']
    },
    'M2003PE4AE': {
        'ALL': ['PWM1', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2']
    },
    'M2003EE4AE': {
        'ALL': ['PWM1', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2']
    },
    'M2003LD4AE': {
        'ALL': ['PWM1', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2']
    },
    'M2003TD4AE': {
        'ALL': ['PWM1', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2']
    },
    'M2003FC1AE': {
        'ALL': ['PWM1', 'CAN', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2', 'HXT']
    },
    'M2003XC1AE': {
        'ALL': ['PWM1', 'CAN', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2', 'HXT']
    }
};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.getPackageNumber(given_partNumber_package);
    let partNumber = NUTOOL_PIN.getPartNumber(given_partNumber_package);
    switch (partNumber) {
        case "M2003SG6AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(7*7)";
            break;
        case "M2003LG6AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(7*7)";
            break;
        case "M2003TG6AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(4*4)";
            break;
        case "M2003LE4AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(7*7)";
            break;
        case "M2003TE4AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(4*4)";
            break;
        case "M2003PE4AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP32(7*7)";
            break;
        case "M2003EE4AE":
            NUTOOL_PIN.g_packageNumberIndex = "TSSOP28(4.4*9.7)";
            break;
        case "M2003LD4AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(7*7)";
            break;
        case "M2003TD4AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(4*4)";
            break;
        case "M2003PD4AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP32(7*7)";
            break;
        case "M2003ED4AE":
            NUTOOL_PIN.g_packageNumberIndex = "TSSOP28(4.4*9.7)";
            break;
        case "M2003FC1AE":
            NUTOOL_PIN.g_packageNumberIndex = "TSSOP20(4.4*6.5)";
            break;
        case "M2003XC1AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN20(3*3)";
            break;
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};
