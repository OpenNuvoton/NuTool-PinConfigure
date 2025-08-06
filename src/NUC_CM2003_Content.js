NUTOOL_PIN.g_cfg_chips = [
    { name: "CM2003CF2AE", pkg: "TSSOP20" },
    { name: "CM2003CF3AE", pkg: "QFN20" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "TSSOP20(4.4*6.5)": [
        'PB.1', 'PB.2', 'PB.3', 'PE.15', 'PB.4', 'PB.5', 'VSS', 'PF.0', 'VDD', 'PC.14',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PB.7', 'PB.8', 'PB.9', 'PF.1', 'PB.11', 'PB.0'
    ],
    "QFN20(3*3)": [
        'PB.3', 'PB.5', 'VSS', 'PF.0', 'VDD', 'PC.14', 'PB.7', 'PB.12', 'PB.13', 'PB.15',
        'PB.14', 'PB.8', 'PB.9', 'PF.1', 'PB.11', 'PB.0', 'PB.4', 'PE.15', 'PB.2', 'PB.1'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'QSPI0_MOSI0:3', 'UART0_RXD:7', 'UART1_nRTS:8', 'PWM0_CH5:13'] },
    { f: ['PA.1:0', 'QSPI0_MISO0:3', 'UART0_TXD:7', 'UART1_nCTS:8', 'PWM0_CH4:13'] },
    { f: ['PA.2:0', 'QSPI0_CLK:3', 'UART1_RXD:8', 'I2C0_SMBSUS:9', 'PWM0_CH3:13'] },
    { f: ['PA.3:0', 'QSPI0_SS:3', 'UART1_TXD:8', 'I2C0_SMBAL:9', 'PWM0_CH2:13', 'CLKO:14', 'PWM1_BRAKE1:15'] },
    { f: ['PA.4:0', 'QSPI0_MOSI1:3', 'UART0_nRTS:7', 'UART0_RXD:8', 'I2C0_SDA:9', 'CAN0_RXD:10', 'PWM0_CH1:13'] },
    { f: ['PA.5:0', 'QSPI0_MISO1:3', 'CAN0_TXH:6', 'UART0_nCTS:7', 'UART0_TXD:8', 'I2C0_SCL:9', 'CAN0_TXD:10', 'PWM0_CH0:13'] },
    { f: ['PA.6:0', 'CAN0_TXL:6', 'UART0_RXD:7', 'PWM1_CH5:11', 'TM3:14', 'INT0:15'] },
    { f: ['PA.7:0', 'UART0_TXD:7', 'PWM1_CH4:11', 'TM2:14', 'INT1:15'] },
    { f: ['PA.8:0', 'USCI0_CTL1:6', 'UART1_RXD:7', 'ECAP0_IC2:11', 'TM3_EXT:13', 'INT4:15'] },
    { f: ['PA.9:0', 'USCI0_DAT1:6', 'UART1_TXD:7', 'ECAP0_IC1:11', 'TM2_EXT:13'] },
    { f: ['PA.10:0', 'USCI0_DAT0:6', 'ECAP0_IC0:11', 'TM1_EXT:13'] },
    { f: ['PA.11:0', 'USCI0_CLK:6', 'PWM0_BRAKE1:11', 'TM0_EXT:13'] },
    { f: ['PA.12:0', 'CAN0_TXD:6', 'CAN0_TXH:7', 'USCI2_CTL0:9'] },
    { f: ['PA.13:0', 'CAN0_RXD:6', 'USCI2_CTL1:9'] },
    { f: ['PA.14:0', 'UART0_TXD:3', 'CAN0_TXL:7', 'USCI2_DAT1:9'] },
    { f: ['PA.15:0', 'UART0_RXD:3', 'USCI2_DAT0:9'] },

    { f: ['PB.0:0', 'ADC0_CH0:1', 'ADC0_ST:2', 'PWM1_CH5:4', 'QSPI0_MOSI1:5', 'USCI0_CTL0:6', 'PWM0_CH3:7', 'PWM0_CH5:11', 'PWM0_BRAKE1:13', 'TM3_EXT:15'] },
    { f: ['PB.1:0', 'ADC0_CH1:1', 'PWM1_CH4:4', 'QSPI0_MISO1:5', 'USCI3_CTL1:6', 'PWM0_CH2:7', 'USCI1_CLK:8', 'PWM0_CH4:11', 'ECAP0_IC0:12', 'PWM0_BRAKE0:13', 'TM0:14', 'TM0_EXT:15'] },
    { f: ['PB.2:0', 'ADC0_CH2:1', 'UART0_TXD:5', 'UART1_RXD:6', 'USCI1_DAT0:8', 'PWM0_CH3:11', 'ECAP0_IC1:12', 'TM3:14', 'INT3:15'] },
    { f: ['PB.3:0', 'ADC0_CH3:1', 'UART0_RXD:5', 'UART1_TXD:6', 'USCI1_DAT1:8', 'PWM0_CH2:11', 'ECAP0_IC2:12', 'PWM0_BRAKE0:13', 'TM2:14', 'INT2:15'] },
    { f: ['PB.4:0', 'ADC0_CH4:1', 'I2C0_SDA:6', 'USCI1_CTL1:8', 'PWM0_CH1:11', 'UART2_RXD:13', 'TM1:14', 'INT1:15'] },
    { f: ['PB.5:0', 'ADC0_CH5:1', 'I2C0_SCL:6', 'USCI1_CTL0:8', 'PWM0_CH0:11', 'UART2_TXD:13', 'TM0:14', 'INT0:15'] },
    { f: ['PB.6:0', 'ADC0_CH6:1', 'USCI1_DAT1:4', 'UART1_RXD:6', 'PWM1_BRAKE1:7', 'PWM1_CH5:8', 'PWM0_BRAKE1:11', 'PWM0_CH5:12', 'INT4:13'] },
    { f: ['PB.7:0', 'ADC0_CH7:1', 'USCI0_CLK:2', 'USCI1_DAT0:4', 'UART1_TXD:6', 'PWM1_BRAKE0:7', 'PWM1_CH4:8', 'TM2_EXT:9', 'PWM0_BRAKE0:11', 'PWM0_CH4:12', 'INT5:13', 'PWM0_CH2:14', 'USCI3_CTL0:15'] },
    { f: ['PB.8:0', 'ADC0_CH8:1', 'USCI0_DAT0:2', 'USCI1_CLK:4', 'UART0_RXD:5', 'UART1_nRTS:6', 'I2C0_SDA:8', 'TM3_EXT:9', 'PWM0_CH3:12', 'TM1:14', 'USCI3_CLK:15'] },
    { f: ['PB.9:0', 'ADC0_CH9:1', 'USCI0_DAT1:2', 'USCI1_CTL1:4', 'UART0_TXD:5', 'UART1_nCTS:6', 'I2C0_SCL:8', 'TM1_EXT:9', 'PWM0_CH4:12', 'USCI3_DAT1:15'] },
    { f: ['PB.10:0', 'ADC0_CH10:1', 'USCI1_CTL0:4', 'UART0_nRTS:5', 'CAN0_RXD:8', 'USCI3_DAT0:15'] },
    { f: ['PB.11:0', 'ADC0_CH11:1', 'USCI0_CTL0:2', 'UART0_nCTS:5', 'CAN0_TXD:8', 'TM2_EXT:9', 'CAN0_TXH:11', 'PWM0_CH5:12', 'USCI3_CTL1:15'] },
    { f: ['PB.12:0', 'ADC0_CH12:1', 'USCI0_CLK:5', 'UART0_RXD:6', 'PWM1_CH3:8', 'CAN0_TXL:9', 'PWM0_CH1:10', 'QSPI0_CLK:12', 'TM3_EXT:13', 'CLKO:14'] },
    { f: ['PB.13:0', 'ADC0_CH13:1', 'USCI0_DAT0:5', 'UART0_TXD:6', 'UART0_nRTS:7', 'PWM1_CH2:8', 'CLKO:9', 'PWM0_CH0:10', 'USCI0_CTL0:12', 'TM2_EXT:13'] },
    { f: ['PB.14:0', 'ADC0_ST:2', 'I2C0_SCL:3', 'USCI0_DAT1:5', 'UART0_nRTS:6', 'UART0_RXD:7', 'PWM1_CH1:8', 'TM1_EXT:13', 'CLKO:14', 'PWM0_BRAKE1:15'] },
    { f: ['PB.15:0', 'I2C0_SDA:3', 'USCI0_CTL1:5', 'UART0_nCTS:6', 'UART0_TXD:7', 'PWM1_CH0:8', 'USCI2_CLK:9', 'PWM0_CH1:10', 'TM1:11', 'TM0_EXT:13', 'PWM0_BRAKE1:15'] },

    { f: ['PC.0:0', 'QSPI0_MOSI0:4', 'USCI1_CTL0:6', 'UART2_RXD:7', 'I2C0_SDA:9', 'PWM1_CH5:12'] },
    { f: ['PC.1:0', 'QSPI0_MISO0:4', 'USCI1_CTL1:6', 'UART2_TXD:7', 'I2C0_SCL:9', 'ADC0_ST:11', 'PWM1_CH4:12'] },
    { f: ['PC.2:0', 'QSPI0_CLK:4', 'USCI1_DAT0:6', 'UART2_nCTS:7', 'I2C0_SMBSUS:9', 'PWM1_CH3:12'] },
    { f: ['PC.3:0', 'QSPI0_SS:4', 'USCI1_DAT1:6', 'UART2_nRTS:7', 'I2C0_SMBAL:9', 'PWM1_CH2:12'] },
    { f: ['PC.4:0', 'QSPI0_MOSI1:4', 'USCI1_CLK:6', 'UART2_RXD:7', 'CAN0_RXD:10', 'PWM1_CH1:12'] },
    { f: ['PC.5:0', 'QSPI0_MISO1:4', 'CAN0_TXH:6', 'UART2_TXD:7', 'CAN0_TXD:10', 'PWM1_CH0:12'] },
    { f: ['PC.6:0', 'UART0_nRTS:7', 'PWM1_CH3:11', 'TM1:14', 'INT2:15'] },
    { f: ['PC.7:0', 'UART0_nCTS:7', 'PWM1_CH2:11', 'TM0:14', 'INT3:15'] },
    { f: ['PC.8:0'] },
    { f: ['PC.9:0'] },
    { f: ['PC.10:0'] },
    { f: ['PC.11:0'] },
    { f: ['PC.12:0'] },
    { f: ['PC.13:0'] },
    { f: ['PC.14:0', 'USCI0_CTL0:5', 'QSPI0_CLK:6', 'UART0_TXD:7', 'PWM0_CH5:10', 'TM1:13', 'TM3_EXT:15'] },
    { f: ['PC.15:0'] },

    { f: ['PD.0:0', 'USCI0_CLK:3', 'CAN0_TXL:7', 'TM2:14'] },
    { f: ['PD.1:0', 'USCI0_DAT0:3'] },
    { f: ['PD.2:0', 'USCI0_DAT1:3', 'UART0_RXD:9'] },
    { f: ['PD.3:0', 'USCI0_CTL1:3', 'USCI1_CTL0:7', 'UART0_TXD:9'] },
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
    { f: ['PD.15:0', 'PWM0_CH5:12', 'TM3:14', 'INT1:15'] },

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
    { f: ['PE.15:0', 'nRESET:2'] },

    { f: ['PF.0:0', 'UART1_TXD:2', 'UART0_TXD:4', 'I2C0_SDA:5', 'USCI0_CTL1:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'PWM1_CH4:11', 'ICE_DAT:14'] },
    { f: ['PF.1:0', 'UART1_RXD:2', 'UART0_RXD:4', 'I2C0_SCL:5', 'CAN0_TXL:6', 'USCI0_DAT1:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'PWM1_CH5:11', 'ICE_CLK:14', 'TM2_EXT:15'] },
    { f: ['PF.2:0', 'UART2_RXD:2', 'UART0_RXD:3', 'I2C0_SDA:4', 'QSPI0_CLK:5', 'USCI1_CTL1:8', 'PWM1_CH1:9', 'XT1_OUT:10', 'TM1_EXT:15'] },
    { f: ['PF.3:0', 'UART2_TXD:2', 'UART0_TXD:3', 'I2C0_SCL:4', 'PWM1_CH0:9', 'XT1_IN:10', 'TM0_EXT:15'] },
    { f: ['PF.4:0', 'UART2_TXD:3', 'UART2_nRTS:4', 'UART0_nRTS:5', 'PWM0_CH1:7'] },
    { f: ['PF.5:0', 'UART2_RXD:3', 'UART2_nCTS:4', 'UART0_nCTS:5', 'PWM0_CH0:7', 'ADC0_ST:11'] },
    { f: ['PF.6:0', 'TM1:14'] },
    { f: ['PF.7:0'] },
    { f: ['PF.8:0'] },
    { f: ['PF.9:0'] },
    { f: ['PF.10:0'] },
    { f: ['PF.11:0'] },
    { f: ['PF.12:0'] },
    { f: ['PF.13:0'] },
    { f: ['PF.14:0', 'PWM0_BRAKE0:10', 'PWM0_CH4:12', 'CLKO:13', 'TM3:14', 'INT5:15'] },
    { f: ['PF.15:0', 'PWM0_BRAKE0:11', 'PWM0_CH1:12', 'TM2:13', 'CLKO:14', 'INT4:15'] },

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
    { f: ['PB.0', 'GPIO:SYS_GPB_MFPL_PB0MFP_GPIO@GPB_MFPL', 'ADC0_CH0:SYS_GPB_MFPL_PB0MFP_ADC0_CH0@GPB_MFPL', 'ADC0_ST:SYS_GPB_MFPL_PB0MFP_ADC0_ST@GPB_MFPL', 'PWM0_CH3:SYS_GPB_MFPL_PB0MFP_PWM0_CH3@GPB_MFPL', 'PWM0_CH5:SYS_GPB_MFPL_PB0MFP_PWM0_CH5@GPB_MFPL', 'PWM0_BRAKE1:SYS_GPB_MFPL_PB0MFP_PWM0_BRAKE1@GPB_MFPL', 'TM3_EXT:SYS_GPB_MFPL_PB0MFP_TM3_EXT@GPB_MFPL'] },
    { f: ['PB.1', 'GPIO:SYS_GPB_MFPL_PB1MFP_GPIO@GPB_MFPL', 'ADC0_CH1:SYS_GPB_MFPL_PB1MFP_ADC0_CH1@GPB_MFPL', 'PWM0_CH2:SYS_GPB_MFPL_PB1MFP_PWM0_CH2@GPB_MFPL', 'PWM0_CH4:SYS_GPB_MFPL_PB1MFP_PWM0_CH4@GPB_MFPL', 'ECAP0_IC0:SYS_GPB_MFPL_PB1MFP_ECAP0_IC0@GPB_MFPL', 'PWM0_BRAKE0:SYS_GPB_MFPL_PB1MFP_PWM0_BRAKE0@GPB_MFPL', 'TM0:SYS_GPB_MFPL_PB1MFP_TM0@GPB_MFPL', 'TM0_EXT:SYS_GPB_MFPL_PB1MFP_TM0_EXT@GPB_MFPL'] },
    { f: ['PB.2', 'GPIO:SYS_GPB_MFPL_PB2MFP_GPIO@GPB_MFPL', 'ADC0_CH2:SYS_GPB_MFPL_PB2MFP_ADC0_CH2@GPB_MFPL', 'UART0_TXD:SYS_GPB_MFPL_PB2MFP_UART0_TXD@GPB_MFPL', 'UART1_RXD:SYS_GPB_MFPL_PB2MFP_UART1_RXD@GPB_MFPL', 'PWM0_CH3:SYS_GPB_MFPL_PB2MFP_PWM0_CH3@GPB_MFPL', 'ECAP0_IC1:SYS_GPB_MFPL_PB2MFP_ECAP0_IC1@GPB_MFPL', 'TM3:SYS_GPB_MFPL_PB2MFP_TM3@GPB_MFPL', 'INT3:SYS_GPB_MFPL_PB2MFP_INT3@GPB_MFPL'] },
    { f: ['PB.3', 'GPIO:SYS_GPB_MFPL_PB3MFP_GPIO@GPB_MFPL', 'ADC0_CH3:SYS_GPB_MFPL_PB3MFP_ADC0_CH3@GPB_MFPL', 'UART0_RXD:SYS_GPB_MFPL_PB3MFP_UART0_RXD@GPB_MFPL', 'UART1_TXD:SYS_GPB_MFPL_PB3MFP_UART1_TXD@GPB_MFPL', 'PWM0_CH2:SYS_GPB_MFPL_PB3MFP_PWM0_CH2@GPB_MFPL', 'ECAP0_IC2:SYS_GPB_MFPL_PB3MFP_ECAP0_IC2@GPB_MFPL', 'PWM0_BRAKE0:SYS_GPB_MFPL_PB3MFP_PWM0_BRAKE0@GPB_MFPL', 'TM2:SYS_GPB_MFPL_PB3MFP_TM2@GPB_MFPL', 'INT2:SYS_GPB_MFPL_PB3MFP_INT2@GPB_MFPL'] },
    { f: ['PB.4', 'GPIO:SYS_GPB_MFPL_PB4MFP_GPIO@GPB_MFPL', 'ADC0_CH4:SYS_GPB_MFPL_PB4MFP_ADC0_CH4@GPB_MFPL', 'I2C0_SDA:SYS_GPB_MFPL_PB4MFP_I2C0_SDA@GPB_MFPL', 'PWM0_CH1:SYS_GPB_MFPL_PB4MFP_PWM0_CH1@GPB_MFPL', 'TM1:SYS_GPB_MFPL_PB4MFP_TM1@GPB_MFPL', 'INT1:SYS_GPB_MFPL_PB4MFP_INT1@GPB_MFPL'] },
    { f: ['PB.5', 'GPIO:SYS_GPB_MFPL_PB5MFP_GPIO@GPB_MFPL', 'ADC0_CH5:SYS_GPB_MFPL_PB5MFP_ADC0_CH5@GPB_MFPL', 'I2C0_SCL:SYS_GPB_MFPL_PB5MFP_I2C0_SCL@GPB_MFPL', 'PWM0_CH0:SYS_GPB_MFPL_PB5MFP_PWM0_CH0@GPB_MFPL', 'TM0:SYS_GPB_MFPL_PB5MFP_TM0@GPB_MFPL', 'INT0:SYS_GPB_MFPL_PB5MFP_INT0@GPB_MFPL'] },
    { f: ['PB.7', 'GPIO:SYS_GPB_MFPL_PB7MFP_GPIO@GPB_MFPL', 'USCI0_CLK:SYS_GPB_MFPL_PB7MFP_USCI0_CLK@GPB_MFPL', 'UART1_TXD:SYS_GPB_MFPL_PB7MFP_UART1_TXD@GPB_MFPL', 'TM2_EXT:SYS_GPB_MFPL_PB7MFP_TM2_EXT@GPB_MFPL', 'PWM0_BRAKE0:SYS_GPB_MFPL_PB7MFP_PWM0_BRAKE0@GPB_MFPL', 'PWM0_CH4:SYS_GPB_MFPL_PB7MFP_PWM0_CH4@GPB_MFPL', 'INT5:SYS_GPB_MFPL_PB7MFP_INT5@GPB_MFPL', 'PWM0_CH2:SYS_GPB_MFPL_PB7MFP_PWM0_CH2@GPB_MFPL'] },
    { f: ['PB.8', 'GPIO:SYS_GPB_MFPH_PB8MFP_GPIO@GPB_MFPH', 'USCI0_DAT0:SYS_GPB_MFPH_PB8MFP_USCI0_DAT0@GPB_MFPH', 'UART0_RXD:SYS_GPB_MFPH_PB8MFP_UART0_RXD@GPB_MFPH', 'UART1_nRTS:SYS_GPB_MFPH_PB8MFP_UART1_nRTS@GPB_MFPH', 'I2C0_SDA:SYS_GPB_MFPH_PB8MFP_I2C0_SDA@GPB_MFPH', 'TM3_EXT:SYS_GPB_MFPH_PB8MFP_TM3_EXT@GPB_MFPH', 'PWM0_CH3:SYS_GPB_MFPH_PB8MFP_PWM0_CH3@GPB_MFPH', 'TM1:SYS_GPB_MFPH_PB8MFP_TM1@GPB_MFPH'] },
    { f: ['PB.9', 'GPIO:SYS_GPB_MFPH_PB9MFP_GPIO@GPB_MFPH', 'USCI0_DAT1:SYS_GPB_MFPH_PB9MFP_USCI0_DAT1@GPB_MFPH', 'UART0_TXD:SYS_GPB_MFPH_PB9MFP_UART0_TXD@GPB_MFPH', 'UART1_nCTS:SYS_GPB_MFPH_PB9MFP_UART1_nCTS@GPB_MFPH', 'I2C0_SCL:SYS_GPB_MFPH_PB9MFP_I2C0_SCL@GPB_MFPH', 'TM1_EXT:SYS_GPB_MFPH_PB9MFP_TM1_EXT@GPB_MFPH', 'PWM0_CH4:SYS_GPB_MFPH_PB9MFP_PWM0_CH4@GPB_MFPH'] },
    { f: ['PB.11', 'GPIO:SYS_GPB_MFPH_PB11MFP_GPIO@GPB_MFPH', 'ADC0_CH11:SYS_GPB_MFPH_PB11MFP_ADC0_CH11@GPB_MFPH', 'USCI0_CTL0:SYS_GPB_MFPH_PB11MFP_USCI0_CTL0@GPB_MFPH', 'UART0_nCTS:SYS_GPB_MFPH_PB11MFP_UART0_nCTS@GPB_MFPH', 'TM2_EXT:SYS_GPB_MFPH_PB11MFP_TM2_EXT@GPB_MFPH', 'PWM0_CH5:SYS_GPB_MFPH_PB11MFP_PWM0_CH5@GPB_MFPH'] },
    { f: ['PB.12', 'GPIO:SYS_GPB_MFPH_PB12MFP_GPIO@GPB_MFPH', 'ADC0_CH12:SYS_GPB_MFPH_PB12MFP_ADC0_CH12@GPB_MFPH', 'USCI0_CLK:SYS_GPB_MFPH_PB12MFP_USCI0_CLK@GPB_MFPH', 'UART0_RXD:SYS_GPB_MFPH_PB12MFP_UART0_RXD@GPB_MFPH', 'PWM0_CH1:SYS_GPB_MFPH_PB12MFP_PWM0_CH1@GPB_MFPH', 'TM3_EXT:SYS_GPB_MFPH_PB12MFP_TM3_EXT@GPB_MFPH', 'CLKO:SYS_GPB_MFPH_PB12MFP_CLKO@GPB_MFPH'] },
    { f: ['PB.13', 'GPIO:SYS_GPB_MFPH_PB13MFP_GPIO@GPB_MFPH', 'USCI0_DAT0:SYS_GPB_MFPH_PB13MFP_USCI0_DAT0@GPB_MFPH', 'UART0_TXD:SYS_GPB_MFPH_PB13MFP_UART0_TXD@GPB_MFPH', 'UART0_nRTS:SYS_GPB_MFPH_PB13MFP_UART0_nRTS@GPB_MFPH', 'PWM0_CH0:SYS_GPB_MFPH_PB13MFP_PWM0_CH0@GPB_MFPH', 'TM2_EXT:SYS_GPB_MFPH_PB13MFP_TM2_EXT@GPB_MFPH'] },
    { f: ['PB.14', 'GPIO:SYS_GPB_MFPH_PB14MFP_GPIO@GPB_MFPH', 'ADC0_ST:SYS_GPB_MFPH_PB14MFP_ADC0_ST@GPB_MFPH', 'I2C0_SCL:SYS_GPB_MFPH_PB14MFP_I2C0_SCL@GPB_MFPH', 'USCI0_DAT1:SYS_GPB_MFPH_PB14MFP_USCI0_DAT1@GPB_MFPH', 'UART0_nRTS:SYS_GPB_MFPH_PB14MFP_UART0_nRTS@GPB_MFPH', 'UART0_RXD:SYS_GPB_MFPH_PB14MFP_UART0_RXD@GPB_MFPH', 'TM2_EXT:SYS_GPB_MFPH_PB14MFP_TM2_EXT@GPB_MFPH', 'TM1_EXT:SYS_GPB_MFPH_PB14MFP_TM1_EXT@GPB_MFPH', 'CLKO:SYS_GPB_MFPH_PB14MFP_CLKO@GPB_MFPH', 'PWM0_BRAKE1:SYS_GPB_MFPH_PB14MFP_PWM0_BRAKE1@GPB_MFPH'] },
    { f: ['PB.15', 'GPIO:SYS_GPB_MFPH_PB15MFP_GPIO@GPB_MFPH', 'I2C0_SDA:SYS_GPB_MFPH_PB15MFP_I2C0_SDA@GPB_MFPH', 'USCI0_CTL1:SYS_GPB_MFPH_PB15MFP_USCI0_CTL1@GPB_MFPH', 'UART0_nCTS:SYS_GPB_MFPH_PB15MFP_UART0_nCTS@GPB_MFPH', 'UART0_TXD:SYS_GPB_MFPH_PB15MFP_UART0_TXD@GPB_MFPH', 'PWM0_CH1:SYS_GPB_MFPH_PB15MFP_PWM0_CH1@GPB_MFPH', 'TM1:SYS_GPB_MFPH_PB15MFP_TM1@GPB_MFPH', 'TM0_EXT:SYS_GPB_MFPH_PB15MFP_TM0_EXT@GPB_MFPH', 'PWM0_BRAKE1:SYS_GPB_MFPH_PB15MFP_PWM0_BRAKE1@GPB_MFPH'] },
    { f: ['PC.14', 'GPIO:SYS_GPC_MFPH_PC14MFP_GPIO@GPC_MFPH', 'USCI0_CTL0:SYS_GPC_MFPH_PC14MFP_USCI0_CTL0@GPC_MFPH', 'UART0_TXD:SYS_GPC_MFPH_PC14MFP_UART0_TXD@GPC_MFPH', 'PWM0_CH5:SYS_GPC_MFPH_PC14MFP_PWM0_CH5@GPC_MFPH', 'TM1:SYS_GPC_MFPH_PC14MFP_TM1@GPC_MFPH', 'TM3_EXT:SYS_GPC_MFPH_PC14MFP_TM3_EXT@GPC_MFPH'] },
    { f: ['PE.15', 'GPIO:SYS_GPE_MFPH_PE15MFP_GPIO@GPE_MFPH', 'nRESET:SYS_GPE_MFPH_PE15MFP_nRESET@GPE_MFPH'] },
    { f: ['PF.0', 'GPIO:SYS_GPF_MFPL_PF0MFP_GPIO@GPF_MFPL', 'UART1_TXD:SYS_GPF_MFPL_PF0MFP_UART1_TXD@GPF_MFPL', 'UART0_TXD:SYS_GPF_MFPL_PF0MFP_UART0_TXD@GPF_MFPL', 'I2C0_SDA:SYS_GPF_MFPL_PF0MFP_I2C0_SDA@GPF_MFPL', 'ICE_DAT:SYS_GPF_MFPL_PF0MFP_ICE_DAT@GPF_MFPL'] },
    { f: ['PF.1', 'GPIO:SYS_GPF_MFPL_PF1MFP_GPIO@GPF_MFPL', 'UART1_RXD:SYS_GPF_MFPL_PF1MFP_UART1_RXD@GPF_MFPL', 'UART0_RXD:SYS_GPF_MFPL_PF1MFP_UART0_RXD@GPF_MFPL', 'I2C0_SCL:SYS_GPF_MFPL_PF1MFP_I2C0_SCL@GPF_MFPL', 'ICE_CLK:SYS_GPF_MFPL_PF1MFP_ICE_CLK@GPF_MFPL', 'TM2_EXT:SYS_GPF_MFPL_PF1MFP_TM2_EXT@GPF_MFPL'] }
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
    "TSSOP20(4.4*6.5)": [
    ],
    "QFN20(3*3)": [
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'CM2003CF2AE': {
        'ALL': ['PWM1', 'CAN', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2', 'HXT']
    },
    'CM2003CF3AE': {
        'ALL': ['PWM1', 'CAN', 'QSPI', 'USCI1', 'USCI2', 'USCI3', 'UART2', 'HXT']
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
    "TSSOP20(4.4*6.5)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
    ],
    "QFN20(3*3)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
    ]
};

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPL = '0x40000038';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPH = '0x4000003C';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPH = '0x40000044';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPH = '0x40000054';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPL = '0x40000058';

NUTOOL_PIN.g_cfg_gpioMatrix = [];

NUTOOL_PIN.g_cfg_shareBits = [];

NUTOOL_PIN.g_cfg_addGPIO = {};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.getPackageNumber(given_partNumber_package);
    let partNumber = NUTOOL_PIN.getPartNumber(given_partNumber_package);
    switch (partNumber) {
        case "CM2003CF2AE":
            NUTOOL_PIN.g_packageNumberIndex = "TSSOP20(4.4*6.5)";
            break;
        case "CM2003CF3AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN20(3*3)";
            break;
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};