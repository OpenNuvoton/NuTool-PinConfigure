NUTOOL_PIN.g_cfg_chips = [
    { name: "M2A23OC1AC", pkg: "QFN33" },
    { name: "M2A23OB1AC", pkg: "QFN33" },
    { name: "M2A23XC1AC", pkg: "LQFP48" },
    { name: "M2A23XB1AC", pkg: "LQFP48" },
    { name: "M2A23EC1AC", pkg: "LQFP64" },
    { name: "M2A23EB1AC", pkg: "LQFP64" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "QFN33": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 
        'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.1', 'PC.0', 
        'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 'VDD', 'PB.15', 'PB.14', 'PB.13', 
        'PB.12', 'AVDD', 'VSS'
    ],
    "LQFP48": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 
        'PA.1', 'PA.0', 'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 
        'PC.1', 'PC.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 'VDD', 'PC.14', 
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'AVSS', 'PB.7', 'PB.6'
    ],
    "LQFP64": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 
        'PA.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.7', 'PC.6', 'PA.7', 
        'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 
        'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0', 
        'PD.3', 'PD.2', 'PD.1', 'PD.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 
        'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'VREF', 'AVSS', 'PB.11', 
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'SPI0_MOSI:4', 'UART0_RXD:7', 'UART1_nRTS:8', 'LLSI1_OUT:10', 'BPWM0_CH0:12', 'PWM0_CH5:13']},
    { f: ['PA.1:0', 'SPI0_MISO:4', 'UART0_TXD:7', 'UART1_nCTS:8', 'LLSI0_OUT:10', 'BPWM0_CH1:12', 'PWM0_CH4:13']},
    { f: ['PA.2:0', 'SPI0_CLK:4', 'I2C0_SMBSUS:7', 'UART1_RXD:8', 'CANFD1_RXD:9', 'BPWM0_CH2:12', 'PWM0_CH3:13']},
    { f: ['PA.3:0', 'SPI0_SS:4', 'I2C0_SMBAL:7', 'UART1_TXD:8', 'CANFD1_TXD:9', 'BPWM0_CH3:12', 'PWM0_CH2:13', 'CLKO:14']},
    { f: ['PA.4:0', 'UART0_nRTS:7', 'UART0_RXD:8', 'I2C0_SDA:9', 'CANFD0_RXD:10', 'BPWM0_CH4:12', 'PWM0_CH1:13']},
    { f: ['PA.5:0', 'UART0_nCTS:7', 'UART0_TXD:8', 'I2C0_SCL:9', 'CANFD0_TXD:10', 'BPWM0_CH5:12', 'PWM0_CH0:13']},
    { f: ['PA.6:0', 'UART0_RXD:7', 'ACMP1_WLAT:13', 'TM3:14', 'INT0:15']},
    { f: ['PA.7:0', 'UART0_TXD:7', 'ACMP0_WLAT:13', 'TM2:14', 'INT1:15']},
    { f: ['PA.8:0', 'USCI0_CTL1:6', 'UART1_RXD:7', 'BPWM0_CH3:9', 'TM3_EXT:13', 'INT4:15']},
    { f: ['PA.9:0', 'USCI0_DAT1:6', 'UART1_TXD:7', 'BPWM0_CH2:9', 'TM2_EXT:13']},
    { f: ['PA.10:0', 'ACMP1_P0:1', 'USCI0_DAT0:6', 'BPWM0_CH1:9', 'TM1_EXT:13']},
    { f: ['PA.11:0', 'ACMP0_P0:1', 'USCI0_CLK:6', 'BPWM0_CH0:9', 'TM0_EXT:13']},
    { f: ['PA.12:0', 'SPI0_SS:8']},
    { f: ['PA.13:0', 'SPI0_CLK:8']},
    { f: ['PA.14:0', 'UART0_TXD:3', 'SPI0_MISO:8', 'LLSI0_OUT:10']},
    { f: ['PA.15:0', 'UART0_RXD:3', 'SPI0_MOSI:8', 'LLSI1_OUT:10']},

    { f: ['PB.0:0', 'EADC0_CH0:1', 'USCI0_CTL0:6', 'PWM0_CH5:11', 'PWM0_BRAKE1:13']},
    { f: ['PB.1:0', 'EADC0_CH1:1', 'USCI1_CLK:8', 'PWM0_CH4:11', 'PWM0_BRAKE0:13']},
    { f: ['PB.2:0', 'EADC0_CH2:1', 'ACMP0_P1:1', 'UART1_RXD:6', 'USCI1_DAT0:8', 'CANFD1_RXD:9', 'PWM0_CH3:11', 'TM3:14', 'INT3:15']},
    { f: ['PB.3:0', 'EADC0_CH3:1', 'ACMP0_N:1', 'UART1_TXD:6', 'USCI1_DAT1:8', 'CANFD1_TXD:9', 'PWM0_CH2:11', 'TM2:14', 'INT2:15']},
    { f: ['PB.4:0', 'EADC0_CH4:1', 'ACMP1_P1:1', 'I2C0_SDA:6', 'USCI1_CTL1:8', 'PWM0_CH1:11', 'TM1:14', 'INT1:15']},
    { f: ['PB.5:0', 'EADC0_CH5:1', 'ACMP1_N:1', 'I2C0_SCL:6', 'USCI1_CTL0:8', 'PWM0_CH0:11', 'TM0:14', 'INT0:15']},
    { f: ['PB.6:0', 'EADC0_CH6:1', 'USCI1_DAT1:4', 'UART1_RXD:6', 'CANFD1_RXD:10', 'INT4:13', 'ACMP1_O:15']},
    { f: ['PB.7:0', 'EADC0_CH7:1', 'USCI1_DAT0:4', 'UART1_TXD:6', 'CANFD1_TXD:10', 'INT5:13', 'ACMP0_O:15']},
    { f: ['PB.8:0', 'EADC0_CH8:1', 'USCI1_CLK:4', 'UART0_RXD:5', 'UART1_nRTS:6', 'CANFD2_RXD:10']},
    { f: ['PB.9:0', 'EADC0_CH9:1', 'USCI1_CTL1:4', 'UART0_TXD:5', 'UART1_nCTS:6', 'CANFD2_TXD:10']},
    { f: ['PB.10:0', 'EADC0_CH10:1', 'USCI1_CTL0:4', 'UART0_nRTS:5', 'CANFD0_RXD:10']},
    { f: ['PB.11:0', 'EADC0_CH11:1', 'UART0_nCTS:5', 'CANFD0_TXD:10']},
    { f: ['PB.12:0', 'EADC0_CH12:1', 'ACMP0_P2:1', 'ACMP1_P2:1', 'SPI0_MOSI:4', 'USCI0_CLK:5', 'UART0_RXD:6', 'CANFD0_RXD:7', 'TM3_EXT:13']},
    { f: ['PB.13:0', 'EADC0_CH13:1', 'ACMP0_P3:1', 'ACMP1_P3:1', 'SPI0_MISO:4', 'USCI0_DAT0:5', 'UART0_TXD:6', 'CANFD0_TXD:7', 'TM2_EXT:13']},
    { f: ['PB.14:0', 'EADC0_CH14:1', 'SPI0_CLK:4', 'USCI0_DAT1:5', 'UART0_nRTS:6', 'LLSI1_OUT:10', 'TM1_EXT:13', 'CLKO:14']},
    { f: ['PB.15:0', 'EADC0_CH15:1', 'SPI0_SS:4', 'USCI0_CTL1:5', 'UART0_nCTS:6', 'LLSI0_OUT:10', 'TM0_EXT:13']},

    { f: ['PC.0:0', 'I2C0_SDA:9', 'CANFD2_RXD:10', 'ACMP1_O:14']},
    { f: ['PC.1:0', 'I2C0_SCL:9', 'CANFD2_TXD:10', 'ACMP0_O:14', 'EADC0_ST:15']},
    { f: ['PC.2:0', 'I2C0_SMBSUS:9']},
    { f: ['PC.3:0', 'I2C0_SMBAL:9', 'CANFD1_TXD:11']},
    { f: ['PC.4:0', 'CANFD0_RXD:10', 'CANFD1_RXD:11', 'LLSI1_OUT:15']},
    { f: ['PC.5:0', 'CANFD0_TXD:10', 'LLSI0_OUT:15']},
    { f: ['PC.6:0', 'UART0_nRTS:7', 'TM1:14', 'INT2:15']},
    { f: ['PC.7:0', 'UART0_nCTS:7', 'TM0:14', 'INT3:15']},
    { f: ['PC.8:0']},
    { f: ['PC.9:0']},
    { f: ['PC.10:0']},
    { f: ['PC.11:0']},
    { f: ['PC.12:0']},
    { f: ['PC.13:0']},
    { f: ['PC.14:0', 'USCI0_CTL0:5', 'TM1:13']},
    { f: ['PC.15:0']},

    { f: ['PD.0:0', 'USCI0_CLK:3', 'SPI0_MOSI:4', 'TM2:14']},
    { f: ['PD.1:0', 'USCI0_DAT0:3', 'SPI0_MISO:4']},
    { f: ['PD.2:0', 'USCI0_DAT1:3', 'SPI0_CLK:4', 'UART0_RXD:9']},
    { f: ['PD.3:0', 'USCI0_CTL1:3', 'SPI0_SS:4', 'USCI1_CTL0:6', 'UART0_TXD:9']},
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
    { f: ['PD.15:0', 'TM3:14', 'INT1:15']},

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
    { f: ['PE.15:0']},

    { f: ['PF.0:0', 'UART1_TXD:2', 'UART0_TXD:4', 'CANFD2_TXD:10', 'ICE_DAT:14']},
    { f: ['PF.1:0', 'UART1_RXD:2', 'UART0_RXD:4', 'CANFD2_RXD:10', 'ICE_CLK:14']},
    { f: ['PF.2:0', 'UART0_RXD:3', 'I2C0_SDA:4', 'CANFD0_RXD:5', 'XT1_OUT:10']},
    { f: ['PF.3:0', 'UART0_TXD:3', 'I2C0_SCL:4', 'CANFD0_TXD:5', 'XT1_IN:10']},
    { f: ['PF.4:0', 'PWM0_CH1:7', 'BPWM0_CH5:8', 'LLSI1_OUT:9', 'X32_OUT:10']},
    { f: ['PF.5:0', 'PWM0_CH0:7', 'BPWM0_CH4:8', 'LLSI0_OUT:9', 'X32_IN:10', 'EADC0_ST:11']},
    { f: ['PF.6:0', 'SPI0_MOSI:5', 'CLKO:15']},
    { f: ['PF.7:0']},
    { f: ['PF.8:0']},
    { f: ['PF.9:0']},
    { f: ['PF.10:0']},
    { f: ['PF.11:0']},
    { f: ['PF.12:0']},
    { f: ['PF.13:0']},
    { f: ['PF.14:0', 'CLKO:13', 'TM3:14']},
    { f: ['PF.15:0', 'TM2:13', 'CLKO:14', 'INT4:15']}
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
    'ACMP0_N:Analog comparator 0 negative input  pin.',
    'ACMP0_O:Analog comparator 0 output pin.',
    'ACMP0_P0:Analog comparator 0 positive input 0 pin.',
    'ACMP0_P1:Analog comparator 0 positive input 1 pin.',
    'ACMP0_P2:Analog comparator 0 positive input 2 pin.',
    'ACMP0_P3:Analog comparator 0 positive input 3 pin.',
    'ACMP0_WLAT:Analog comparator 0 window latch input pin',
    'ACMP1_N:Analog comparator 1 negative input  pin.',
    'ACMP1_O:Analog comparator 1 output pin.',
    'ACMP1_P0:Analog comparator 1 positive input 0 pin.',
    'ACMP1_P1:Analog comparator 1 positive input 1 pin.',
    'ACMP1_P2:Analog comparator 1 positive input 2 pin.',
    'ACMP1_P3:Analog comparator 1 positive input 3 pin.',
    'ACMP1_WLAT:Analog comparator 1 window latch input pin',
    'BPWM0_CH0:BPWM0 channel 0 output/capture input.',
    'BPWM0_CH1:BPWM0 channel 1 output/capture input.',
    'BPWM0_CH2:BPWM0 channel 2 output/capture input.',
    'BPWM0_CH3:BPWM0 channel 3 output/capture input.',
    'BPWM0_CH4:BPWM0 channel 4 output/capture input.',
    'BPWM0_CH5:BPWM0 channel 5 output/capture input.',
    'CANFD0_RXD:CANF bus receiver input.',
    'CANFD0_TXD:CANF bus transmitter output.',
    'CANFD1_RXD:CANF bus receiver input.',
    'CANFD1_TXD:CANF bus transmitter output.',
    'CANFD2_RXD:CANF bus receiver input.',
    'CANFD2_TXD:CANF bus transmitter output.',
    'CLKO:Clock Out',
    'EADC0_CH0:EADC0 channel 0 analog input.',
    'EADC0_CH1:EADC0 channel 1 analog input.',
    'EADC0_CH2:EADC0 channel 2 analog input.',
    'EADC0_CH3:EADC0 channel 3 analog input.',
    'EADC0_CH4:EADC0 channel 4 analog input.',
    'EADC0_CH5:EADC0 channel 5 analog input.',
    'EADC0_CH12:EADC0 channel 12 analog input.',
    'EADC0_CH13:EADC0 channel 13 analog input.',
    'EADC0_CH14:EADC0 channel 14 analog input.',
    'EADC0_CH15:EADC0 channel 15 analog input.',
    'EADC0_ST:EADC0 external trigger input.',
    'I2C0_SCL:I2C0 clock pin.',
    'I2C0_SDA:I2C0 data input/output pin.',
    'I2C0_SMBAL:I2C0 SMBus SMBALTER pin ',
    'I2C0_SMBSUS:I2C0 SMBus SMBSUS pin (PMBus CONTROL pin)',
    'ICE_CLK:Serial wired debugger clock pin.',
    'ICE_DAT:Serial wired debugger data pin.',
    'INT0:External interrupt 0 input pin.',
    'INT1:External interrupt 1 input pin.',
    'INT2:External interrupt 2 input pin.',
    'INT3:External interrupt 3 input pin.',
    'INT4:External interrupt 4 input pin.',
    'LLSI0_OUT:LED Lighting Strip Interface 0 output pin.',
    'LLSI1_OUT:LED Lighting Strip Interface 1 output pin.',
    'Pin Name:Description',
    'PWM0_BRAKE0:PWM0 Brake 0 input pin.',
    'PWM0_BRAKE1:PWM0 Brake 1 input pin.',
    'PWM0_CH0:PWM0 channel 0 output/capture input.',
    'PWM0_CH1:PWM0 channel 1 output/capture input.',
    'PWM0_CH2:PWM0 channel 2 output/capture input.',
    'PWM0_CH3:PWM0 channel 3 output/capture input.',
    'PWM0_CH4:PWM0 channel 4 output/capture input.',
    'PWM0_CH5:PWM0 channel 5 output/capture input.',
    'SPI0_CLK:SPI0 serial clock pin.',
    'SPI0_MISO:SPI0 MISO (Master In, Slave Out) pin.',
    'SPI0_MOSI:SPI0 MOSI (Master Out, Slave In) pin.',
    'SPI0_SS:SPI0 slave select  pin.',
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
    'USCI0_DAT1:USCI0 data 1 pin.',
    'USCI1_CLK:USCI1 clock pin.',
    'USCI1_CTL0:USCI1 control 0 pin.',
    'USCI1_CTL1:USCI1 control 1 pin.',
    'USCI1_DAT0:USCI1 data 0 pin.',
    'USCI1_DAT1:USCI1 data 1 pin.',
    'X32_IN:External 32.768 kHz crystal input pin.',
    'X32_OUT:External 32.768 kHz crystal output pin.',
    'XT1_IN:External 4~24 MHz (high speed) crystal input pin.',
    'XT1_OUT:External 4~24 MHz (high speed) crystal output pin.'
];

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPL = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPH = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPL = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPH = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPL = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPH = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPL = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPH = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPL = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPH = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPL = '';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPH = '';

NUTOOL_PIN.g_cfg_gpioMatrix = [];
NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {
    'M2A23OC1AC(QFN33)': {
        'ALL': ['DAC0_OUT', 'DAC1_OUT', 'DAC2_OUT', 'DAC3_OUT', 'I2C1', 'INT5', 'PWM1', 'BPWM1', 'UART2', 'UART3', 'UART4', 'UART5', 'UART6', 'UART7', 'USB', 'RTC', 'QSPI']
    },
    'M2A23OB1AC(QFN33)': {
        'ALL': ['DAC0_OUT', 'DAC1_OUT', 'DAC2_OUT', 'DAC3_OUT', 'I2C1', 'INT5', 'PWM1', 'BPWM1', 'UART2', 'UART3', 'UART4', 'UART5', 'UART6', 'UART7', 'USB', 'RTC', 'QSPI']
    },
    'M2A23XC1AC(LQFP48)': {
        'ALL': ['DAC0_OUT', 'DAC1_OUT', 'DAC2_OUT', 'DAC3_OUT', 'I2C1', 'INT5', 'PWM1', 'BPWM1', 'UART2', 'UART3', 'UART4', 'UART5', 'UART6', 'UART7', 'USB', 'RTC', 'QSPI']
    },
    'M2A23XB1AC(LQFP48)': {
        'ALL': ['DAC0_OUT', 'DAC1_OUT', 'DAC2_OUT', 'DAC3_OUT', 'I2C1', 'INT5', 'PWM1', 'BPWM1', 'UART2', 'UART3', 'UART4', 'UART5', 'UART6', 'UART7', 'USB', 'RTC', 'QSPI']
    },
    'M2A23EC1AC(LQFP64)': {
        'ALL': ['DAC0_OUT', 'DAC1_OUT', 'DAC2_OUT', 'DAC3_OUT', 'I2C1', 'INT5', 'PWM1', 'BPWM1', 'UART2', 'UART3', 'UART4', 'UART5', 'UART6', 'UART7', 'USB', 'RTC', 'QSPI']
    },
    'M2A23EB1AC(LQFP64)': {
        'ALL': ['DAC0_OUT', 'DAC1_OUT', 'DAC2_OUT', 'DAC3_OUT', 'I2C1', 'INT5', 'PWM1', 'BPWM1', 'UART2', 'UART3', 'UART4', 'UART5', 'UART6', 'UART7', 'USB', 'RTC', 'QSPI']
    }
};

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
    default:
        break;
    case 'QFN33':
        NUTOOL_PIN.g_packageNumberIndex = "QFN33";
        break;
    case 'LQFP48':
        NUTOOL_PIN.g_packageNumberIndex = "LQFP48";
        break;
    case 'LQFP64':
        NUTOOL_PIN.g_packageNumberIndex = "LQFP64";
        break;
    }
    partNumber_package = null;
    partNumber = null;
};