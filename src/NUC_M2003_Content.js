NUTOOL_PIN.g_cfg_chips = [
    { name: "M2003FC1AE", pkg: "TSSOP20" },
    { name: "M2003XC1AE", pkg: "QFN20(AQ20)" },
    { name: "M2003XC1BE", pkg: "QFN20(BQ20)" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP48(AlphaTest)": [
        'PB.1', 'PB.2', 'PB.3', 'PE.15', 'PB.4', 'PB.5', 'VSS'
    ],
    "TSSOP20": [
        'PB.1', 'PB.2', 'PB.3', 'PE.15', 'PB.4', 'PB.5', 'VSS', 'PF.0', 'VDD', 'PC.14', 
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'PB.7', 'PB.8', 'PB.9', 'PF.1', 'PB.11', 'PB.0'
    ],
    "QFN20(AQ20)": [
        'PB.3', 'PB.5', 'VSS', 'PF.0', 'VDD', 'PC.14', 'PB.7', 'PB.12', 'PB.13', 'PB.15', 
        'PB.14', 'PB.8', 'PB.9', 'PF.1', 'PB.11', 'PB.0', 'PB.4', 'PE.15', 'PB.2', 'PB.1'
    ],
    "QFN20(BQ20)": [
        'PE.15', 'PB.4', 'PB.5', 'VSS', 'PF.0', 'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 
        'PB.12', 'PB.7', 'PB.8', 'PB.9', 'PF.1', 'PB.11', 'PB.0', 'PB.1', 'PB.2', 'PB.3'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0']},
    { f: ['PA.1:0']},
    { f: ['PA.2:0']},
    { f: ['PA.3:0']},
    { f: ['PA.4:0']},
    { f: ['PA.5:0']},
    { f: ['PA.6:0']},
    { f: ['PA.7:0']},
    { f: ['PA.8:0']},
    { f: ['PA.9:0']},
    { f: ['PA.10:0']},
    { f: ['PA.11:0']},
    { f: ['PA.12:0']},
    { f: ['PA.13:0']},
    { f: ['PA.14:0']},
    { f: ['PA.15:0']},

    { f: ['PB.0:0', 'ADC0_CH0:1', 'ADC0_ST:2', 'PWM0_CH3:7', 'PWM0_CH5:11', 'PWM0_BRAKE1:13', 'TM3_EXT:15']},
    { f: ['PB.1:0', 'ADC0_CH1:1', 'PWM0_CH2:7', 'PWM0_CH4:11', 'ECAP0_IC0:12', 'PWM0_BRAKE0:13', 'TM0:14', 'TM0_EXT:15']},
    { f: ['PB.2:0', 'ADC0_CH2:1', 'UART0_TXD:5', 'UART1_RXD:6', 'PWM0_CH3:11', 'ECAP0_IC1:12', 'TM3:14', 'INT3:15']},
    { f: ['PB.3:0', 'ADC0_CH3:1', 'UART0_RXD:5', 'UART1_TXD:6', 'PWM0_CH2:11', 'ECAP0_IC2:12', 'PWM0_BRAKE0:13', 'TM2:14', 'INT2:15']},
    { f: ['PB.4:0', 'ADC0_CH4:1', 'I2C0_SDA:6', 'PWM0_CH1:11', 'TM1:14', 'INT1:15']},
    { f: ['PB.5:0', 'ADC0_CH5:1', 'I2C0_SCL:6', 'PWM0_CH0:11', 'TM0:14', 'INT0:15']},
    { f: ['PB.6:0']},
    { f: ['PB.7:0', 'USCI0_CLK:2', 'UART1_TXD:6', 'TM2_EXT:9', 'PWM0_BRAKE0:11', 'PWM0_CH4:12', 'INT5:13', 'PWM0_CH2:14']},
    { f: ['PB.8:0', 'USCI0_DAT0:2', 'UART0_RXD:5', 'UART1_nRTS:6', 'I2C0_SDA:8', 'TM3_EXT:9', 'PWM0_CH3:12', 'TM1:14']},
    { f: ['PB.9:0', 'USCI0_DAT1:2', 'UART0_TXD:5', 'UART1_nCTS:6', 'I2C0_SCL:8', 'TM1_EXT:9', 'PWM0_CH4:12']},
    { f: ['PB.10:0']},
    { f: ['PB.11:0', 'ADC0_CH11:1', 'USCI0_CTL0:2', 'UART0_nCTS:5', 'TM2_EXT:9', 'PWM0_CH5:12']},
    { f: ['PB.12:0', 'ADC0_CH12:1', 'USCI0_CLK:5', 'UART0_RXD:6', 'PWM0_CH1:10', 'TM3_EXT:13', 'CLKO:14']},
    { f: ['PB.13:0', 'USCI0_DAT0:5', 'UART0_TXD:6', 'UART0_nRTS:7', 'PWM0_CH0:10', 'TM2_EXT:13']},
    { f: ['PB.14:0', 'ADC0_ST:2', 'I2C0_SCL:3', 'USCI0_DAT1:5', 'UART0_nRTS:6', 'UART0_RXD:7', 'TM1_EXT:13', 'CLKO:14', 'PWM0_BRAKE1:15']},
    { f: ['PB.15:0', 'I2C0_SDA:3', 'USCI0_CTL1:5', 'UART0_nCTS:6', 'UART0_TXD:7', 'PWM0_CH1:10', 'TM1:11', 'TM0_EXT:13', 'PWM0_BRAKE1:15']},

    { f: ['PC.0:0']},
    { f: ['PC.1:0']},
    { f: ['PC.2:0']},
    { f: ['PC.3:0']},
    { f: ['PC.4:0']},
    { f: ['PC.5:0']},
    { f: ['PC.6:0']},
    { f: ['PC.7:0']},
    { f: ['PC.8:0']},
    { f: ['PC.9:0']},
    { f: ['PC.10:0']},
    { f: ['PC.11:0']},
    { f: ['PC.12:0']},
    { f: ['PC.13:0']},
    { f: ['PC.14:0', 'USCI0_CTL0:5', 'UART0_TXD:7', 'PWM0_CH5:10', 'TM1:13', 'TM3_EXT:15']},
    { f: ['PC.15:0']},

    { f: ['PD.0:0']},
    { f: ['PD.1:0']},
    { f: ['PD.2:0']},
    { f: ['PD.3:0']},
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
    { f: ['PD.15:0']},

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

    { f: ['PF.0:0', 'UART1_TXD:2', 'UART0_TXD:4', 'I2C0_SDA:5', 'ICE_DAT:14']},
    { f: ['PF.1:0', 'UART1_RXD:2', 'UART0_RXD:4', 'I2C0_SCL:5', 'ICE_CLK:14', 'TM2_EXT:15']},
    { f: ['PF.2:0']},
    { f: ['PF.3:0']},
    { f: ['PF.4:0']},
    { f: ['PF.5:0']},
    { f: ['PF.6:0']},
    { f: ['PF.7:0']},
    { f: ['PF.8:0']},
    { f: ['PF.9:0']},
    { f: ['PF.10:0']},
    { f: ['PF.11:0']},
    { f: ['PF.12:0']},
    { f: ['PF.13:0']},
    { f: ['PF.14:0']},
    { f: ['PF.15:0']}
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
    'M2003FC1AE(TSSOP20)': {
        'ALL': ['BPWM0', 'CAN', 'RTC', 'SPI0', 'SPI1', 'I2C1', 'USCI1', 'TAMPER0', 'ACMP0', 'ACMP1', 'VREF', 'HXT', 'LXT']
    },
    'M2003XC1AE(QFN20(AQ20))': {
        'ALL': ['BPWM0', 'CAN', 'RTC', 'SPI0', 'SPI1', 'I2C1', 'USCI1', 'TAMPER0', 'ACMP0', 'ACMP1', 'VREF', 'HXT', 'LXT']
    },
    'M2003XC1BE(QFN20(BQ20))': {
        'ALL': ['BPWM0', 'CAN', 'RTC', 'SPI0', 'SPI1', 'I2C1', 'USCI1', 'TAMPER0', 'ACMP0', 'ACMP1', 'VREF', 'HXT', 'LXT']
    }
};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    var partNumber_package;

    if (typeof given_partNumber_package === 'undefined') {
        partNumber_package = NUTOOL_PIN.getg_partNumber_package();
    }
    else {
        partNumber_package = given_partNumber_package;
    }

    NUTOOL_PIN.g_packageNumber = partNumber_package.substring(partNumber_package.indexOf('(') + 1);
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.g_packageNumber.substring(0, NUTOOL_PIN.g_packageNumber.lastIndexOf(')'));
    NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
    partNumber_package = null;
};