NUTOOL_PIN.g_cfg_chips = [
    { name: "M250ED2AE", pkg: "TSSOP28" },
    { name: "M250FD2AE", pkg: "TSSOP20" },
    { name: "M250ZD2AE", pkg: "QFN33" },
    { name: "NDR5ZD2AE", pkg: "QFN33" },
    { name: "NUC1264ZD2AE", pkg: "QFN33" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "QFN33_VDDIO1.0(5*5)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.5', 'PF.4', 'PF.3', 'PF.2',
        'SPD5_LSCL', 'SPD5_LSDA', 'SPD5_HSCL', 'SPD5_HSDA', 'VDDIO2', 'nRESET', 'PF.0', 'PF.1', 'PC.3', 'PC.2',
        'PC.1', 'PC.0', 'PD.3', 'PD.2', 'VSS', 'LDO_CAP', 'VDD', 'PB.15', 'PB.14', 'PB.13',
        'PB.12', 'AVDD', 'Vss'
    ],
    "QFN33_VDDIO1.8(5*5)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.5', 'PF.4', 'PF.3', 'PF.2',
        'PA.3', 'PA.2', 'PA.1', 'PA.0', 'VDDIO1', 'nRESET', 'PF.0', 'PF.1', 'PC.3', 'PC.2',
        'PC.1', 'PC.0', 'PD.3', 'PD.2', 'VSS', 'LDO_CAP', 'VDD', 'PB.15', 'PB.14', 'PB.13',
        'PB.12', 'AVDD', 'Vss'
    ],
    "TSSOP20": [
        'VSS', 'LDO_CAP', 'VDD', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'PB.5', 'PB.4', 'PB.3',
        'PB.2', 'PF.3', 'PF.2', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 'nRESET', 'PF.0', 'PF.1'
    ],
    "TSSOP28": [
        'PC.1', 'PC.0', 'PD.3', 'PD.2', 'VSS', 'LDO_CAP', 'VDD', 'PB.14', 'PB.13', 'PB.12',
        'AVDD', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.3', 'PF.2', 'PA.3',
        'PA.2', 'PA.1', 'PA.0', 'nRESET', 'PF.0', 'PF.1', 'PC.3', 'PC.2'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'SPI0_MOSI:4', 'SPI2_MOSI:5', 'UART0_RXD:7', 'UART1_nRTS:8', 'I2C2_SDA:9', 'BPWM0_CH0:12', 'BPWM2_CH5:13', 'BPWM1_CH5:14'] },
    { f: ['PA.1:0', 'SPI0_MISO:4', 'SPI2_MISO:5', 'UART0_TXD:7', 'UART1_nCTS:8', 'I2C2_SCL:9', 'BPWM0_CH1:12', 'BPWM2_CH4:13', 'BPWM1_CH4:14'] },
    { f: ['PA.2:0', 'SPI0_CLK:4', 'SPI2_CLK:5', 'I3CS1_SDA:6', 'I2C0_SMBSUS:7', 'UART1_RXD:8', 'I2C1_SDA:9', 'LLSI5_OUT:10', 'BPWM0_CH2:12', 'BPWM2_CH3:13'] },
    { f: ['PA.3:0', 'SPI0_SS:4', 'SPI2_SS:5', 'I3CS1_SCL:6', 'I2C0_SMBAL:7', 'UART1_TXD:8', 'I2C1_SCL:9', 'LLSI4_OUT:10', 'BPWM0_CH3:12', 'BPWM2_CH2:13', 'CLKO:14'] },
    { f: ['PA.4:0'] },
    { f: ['PA.5:0'] },
    { f: ['PA.6:0'] },
    { f: ['PA.7:0'] },
    { f: ['PA.8:0'] },
    { f: ['PA.9:0'] },
    { f: ['PA.10:0'] },
    { f: ['PA.11:0'] },
    { f: ['PA.12:0'] },
    { f: ['PA.13:0'] },
    { f: ['PA.14:0'] },
    { f: ['PA.15:0'] },

    { f: ['PB.0:0', 'ADC0_CH0:1', 'SPI0_SS:3', 'SPI2_I2SMCLK:4', 'UART2_RXD:7', 'SPI0_I2SMCLK:8', 'I2C1_SDA:9', 'BPWM2_CH5:11', 'BPWM3_CH5:12', 'BPWM1_CH5:14'] },
    { f: ['PB.1:0', 'ADC0_CH1:1', 'SPI1_I2SMCLK:2', 'UART2_TXD:7', 'I2C1_SCL:9', 'BPWM2_CH4:11', 'BPWM3_CH4:12', 'TM3_EXT:13', 'BPWM1_CH4:14'] },
    { f: ['PB.2:0', 'ADC0_CH2:1', 'SPI1_SS:2', 'I2C1_SDA:4', 'UART1_RXD:6', 'I2C2_SDA:7', 'SPI0_I2SMCLK:8', 'BPWM2_CH3:11', 'TM3:14', 'INT3:15'] },
    { f: ['PB.3:0', 'ADC0_CH3:1', 'SPI1_CLK:2', 'I2C1_SCL:4', 'UART1_TXD:6', 'I2C2_SCL:7', 'BPWM2_CH2:11', 'TM2:14', 'INT2:15'] },
    { f: ['PB.4:0', 'ADC0_CH4:1', 'SPI1_MOSI:2', 'I2C0_SDA:6', 'BPWM2_CH1:11', 'LLSI5_OUT:12', 'UART2_RXD:13', 'TM1:14', 'INT1:15'] },
    { f: ['PB.5:0', 'ADC0_CH5:1', 'SPI1_MISO:2', 'I2C0_SCL:6', 'BPWM2_CH0:11', 'LLSI4_OUT:12', 'UART2_TXD:13', 'TM0:14', 'INT0:15'] },
    { f: ['PB.6:0'] },
    { f: ['PB.7:0'] },
    { f: ['PB.8:0'] },
    { f: ['PB.9:0'] },
    { f: ['PB.10:0'] },
    { f: ['PB.11:0'] },
    { f: ['PB.12:0', 'ADC0_CH12:1', 'SPI0_MOSI:4', 'UART0_RXD:6', 'I2C2_SDA:8', 'LLSI3_OUT:10', 'BPWM3_CH3:11', 'TM3_EXT:13'] },
    { f: ['PB.13:0', 'ADC0_CH13:1', 'SPI0_MISO:4', 'UART0_TXD:6', 'I2C2_SCL:8', 'LLSI2_OUT:10', 'BPWM3_CH2:11', 'TM2_EXT:13'] },
    { f: ['PB.14:0', 'ADC0_CH14:1', 'SPI0_CLK:4', 'UART0_nRTS:6', 'I2C2_SMBSUS:8', 'LLSI1_OUT:10', 'BPWM3_CH1:11', 'TM1_EXT:13', 'CLKO:14'] },
    { f: ['PB.15:0', 'ADC0_CH15:1', 'SPI0_SS:4', 'UART0_nCTS:6', 'I2C2_SMBAL:8', 'LLSI0_OUT:10', 'BPWM3_CH0:11', 'TM0_EXT:13'] },

    { f: ['PC.0:0', 'SPI1_SS:2', 'I2C1_SDA:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'BPWM3_CH5:12', 'BPWM3_CH3:13'] },
    { f: ['PC.1:0', 'SPI1_CLK:2', 'I2C1_SCL:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'ADC0_ST:11', 'BPWM3_CH4:12', 'BPWM2_CH1:13'] },
    { f: ['PC.2:0', 'SPI1_MOSI:2', 'I2C2_SMBSUS:7', 'UART2_nCTS:8', 'I2C0_SMBSUS:9', 'I2C0_SDA:10', 'BPWM3_CH3:12', 'LLSI3_OUT:15'] },
    { f: ['PC.3:0', 'SPI1_MISO:2', 'I2C2_SMBAL:7', 'UART2_nRTS:8', 'I2C0_SMBAL:9', 'I2C0_SCL:10', 'BPWM3_CH2:12', 'LLSI2_OUT:15'] },
    { f: ['PC.4:0'] },
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
    { f: ['PC.15:0'] },

    { f: ['PD.0:0'] },
    { f: ['PD.1:0'] },
    { f: ['PD.2:0', 'SPI0_CLK:4', 'UART0_RXD:9', 'BPWM1_CH3:12'] },
    { f: ['PD.3:0', 'SPI0_SS:4', 'UART0_TXD:9', 'BPWM1_CH2:12'] },
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
    { f: ['PD.15:0'] },

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

    { f: ['PF.0:0', 'UART1_TXD:2', 'I2C1_SCL:3', 'UART0_TXD:4', 'I2C2_SCL:7', 'UART2_TXD:8', 'I2C1_SMBAL:9', 'BPWM1_CH0:12', 'ICE_DAT:14'] },
    { f: ['PF.1:0', 'UART1_RXD:2', 'I2C1_SDA:3', 'UART0_RXD:4', 'I2C2_SDA:7', 'UART2_RXD:8', 'I2C1_SMBSUS:9', 'BPWM1_CH1:12', 'ICE_CLK:14'] },
    { f: ['PF.2:0', 'UART0_RXD:3', 'I2C0_SDA:4', 'UART1_RXD:7', 'BPWM1_CH1:11', 'INT4:15'] },
    { f: ['PF.3:0', 'UART0_TXD:3', 'I2C0_SCL:4', 'UART2_RXD:7', 'BPWM0_CH3:9', 'BPWM1_CH0:11'] },
    { f: ['PF.4:0', 'UART2_TXD:2', 'UART2_nRTS:4', 'SPI0_MISO:5', 'BPWM2_CH1:7', 'BPWM0_CH5:8', 'I2C0_SDA:9', 'BPWM2_CH5:11', 'BPWM3_CH5:12', 'BPWM1_CH5:14'] },
    { f: ['PF.5:0', 'UART2_RXD:2', 'SPI1_SS:3', 'UART2_nCTS:4', 'SPI0_CLK:5', 'BPWM2_CH0:7', 'BPWM0_CH4:8', 'I2C0_SCL:9', 'ADC0_ST:11', 'BPWM1_CH4:14'] },
    { f: ['PF.6:0'] },
    { f: ['PF.7:0'] },
    { f: ['PF.8:0'] },
    { f: ['PF.9:0'] },
    { f: ['PF.10:0'] },
    { f: ['PF.11:0'] },
    { f: ['PF.12:0'] },
    { f: ['PF.13:0'] },
    { f: ['PF.14:0'] },
    { f: ['PF.15:0'] }
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
    'ADC0_CH0:ADC0 channel 0 analog input.',
    'ADC0_CH1:ADC0 channel 1 analog input.',
    'ADC0_CH12:ADC0 channel 12 analog input.',
    'ADC0_CH13:ADC0 channel 13 analog input.',
    'ADC0_CH14:ADC0 channel 14 analog input.',
    'ADC0_CH15:ADC0 channel 15 analog input.',
    'ADC0_CH2:ADC0 channel 2 analog input.',
    'ADC0_CH3:ADC0 channel 3 analog input.',
    'ADC0_CH4:ADC0 channel 4 analog input.',
    'ADC0_CH5:ADC0 channel 5 analog input.',
    'ADC0_ST:ADC0 external trigger input pin.',
    'BPWM0_CH0:BPWM0 channel 0 output/capture input.',
    'BPWM0_CH1:BPWM0 channel 1 output/capture input.',
    'BPWM0_CH2:BPWM0 channel 2 output/capture input.',
    'BPWM0_CH3:BPWM0 channel 3 output/capture input.',
    'BPWM0_CH4:BPWM0 channel 4 output/capture input.',
    'BPWM0_CH5:BPWM0 channel 5 output/capture input.',
    'BPWM1_CH0:BPWM1 channel 0 output/capture input.',
    'BPWM1_CH1:BPWM1 channel 1 output/capture input.',
    'BPWM1_CH2:BPWM1 channel 2 output/capture input.',
    'BPWM1_CH3:BPWM1 channel 3 output/capture input.',
    'BPWM1_CH4:BPWM1 channel 4 output/capture input.',
    'BPWM1_CH5:BPWM1 channel 5 output/capture input.',
    'BPWM2_CH0:BPWM2 channel 0 output/capture input.',
    'BPWM2_CH1:BPWM2 channel 1 output/capture input.',
    'BPWM2_CH2:BPWM2 channel 2 output/capture input.',
    'BPWM2_CH3:BPWM2 channel 3 output/capture input.',
    'BPWM2_CH4:BPWM2 channel 4 output/capture input.',
    'BPWM2_CH5:BPWM2 channel 5 output/capture input.',
    'BPWM3_CH0:BPWM3 channel 0 output/capture input.',
    'BPWM3_CH1:BPWM3 channel 1 output/capture input.',
    'BPWM3_CH2:BPWM3 channel 2 output/capture input.',
    'BPWM3_CH3:BPWM3 channel 3 output/capture input.',
    'BPWM3_CH4:BPWM3 channel 4 output/capture input.',
    'BPWM3_CH5:BPWM3 channel 5 output/capture input.',
    'CLKO:Clock Out.',
    'I2C0_SCL:I2C0 clock pin.',
    'I2C0_SDA:I2C0 data input/output pin.',
    'I2C0_SMBAL:I2C0 SMBus SMBALTER pin.',
    'I2C0_SMBSUS:I2C0 SMBus SMBSUS pin (PMBus CONTROL pin)',
    'I2C1_SCL:I2C1 clock pin.',
    'I2C1_SDA:I2C1 data input/output pin.',
    'I2C1_SMBAL:I2C1 SMBus SMBALTER pin.',
    'I2C1_SMBSUS:I2C1 SMBus SMBSUS pin (PMBus CONTROL pin)',
    'I2C2_SCL:I2C2 clock pin.',
    'I2C2_SDA:I2C2 data input/output pin.',
    'I2C2_SMBAL:I2C2 SMBus SMBALTER pin.',
    'I2C2_SMBSUS:I2C2 SMBus SMBSUS pin (PMBus CONTROL pin)',
    'I3CS1_SCL:I3CS1 serial clock pin.',
    'I3CS1_SDA:I3CS1 serial data pin.',
    'ICE_CLK:Serial wired debugger clock pin.\nNote: It is recommended to use 100 kΩ pull-up resistor on ICE_CLK pin.',
    'ICE_DAT:Serial wired debugger data pin.\nNote: It is recommended to use 100 kΩ pull-up resistor on ICE_DAT pin.',
    'INT0:External interrupt 0 input pin.',
    'INT1:External interrupt 1 input pin.',
    'INT2:External interrupt 2 input pin.',
    'INT3:External interrupt 3 input pin.',
    'INT4:External interrupt 4 input pin.',
    'LLSI0_OUT:LED Lighting Strip Interface 0 output pin.',
    'LLSI1_OUT:LED Lighting Strip Interface 1 output pin.',
    'LLSI2_OUT:LED Lighting Strip Interface 2 output pin.',
    'LLSI3_OUT:LED Lighting Strip Interface 3 output pin.',
    'LLSI4_OUT:LED Lighting Strip Interface 4 output pin.',
    'LLSI5_OUT:LED Lighting Strip Interface 5 output pin.',
    'PA.0:General purpose digital I/O pin.',
    'PA.1:General purpose digital I/O pin.',
    'PA.10:General purpose digital I/O pin.',
    'PA.11:General purpose digital I/O pin.',
    'PA.12:General purpose digital I/O pin.',
    'PA.13:General purpose digital I/O pin.',
    'PA.14:General purpose digital I/O pin.',
    'PA.15:General purpose digital I/O pin.',
    'PA.2:General purpose digital I/O pin.',
    'PA.3:General purpose digital I/O pin.',
    'PA.4:General purpose digital I/O pin.',
    'PA.5:General purpose digital I/O pin.',
    'PA.6:General purpose digital I/O pin.',
    'PA.7:General purpose digital I/O pin.',
    'PA.8:General purpose digital I/O pin.',
    'PA.9:General purpose digital I/O pin.',
    'PB.0:General purpose digital I/O pin.',
    'PB.1:General purpose digital I/O pin.',
    'PB.10:General purpose digital I/O pin.',
    'PB.11:General purpose digital I/O pin.',
    'PB.12:General purpose digital I/O pin.',
    'PB.13:General purpose digital I/O pin.',
    'PB.14:General purpose digital I/O pin.',
    'PB.15:General purpose digital I/O pin.',
    'PB.2:General purpose digital I/O pin.',
    'PB.3:General purpose digital I/O pin.',
    'PB.4:General purpose digital I/O pin.',
    'PB.5:General purpose digital I/O pin.',
    'PB.6:General purpose digital I/O pin.',
    'PB.7:General purpose digital I/O pin.',
    'PB.8:General purpose digital I/O pin.',
    'PB.9:General purpose digital I/O pin.',
    'PC.0:General purpose digital I/O pin.',
    'PC.1:General purpose digital I/O pin.',
    'PC.10:General purpose digital I/O pin.',
    'PC.11:General purpose digital I/O pin.',
    'PC.12:General purpose digital I/O pin.',
    'PC.13:General purpose digital I/O pin.',
    'PC.14:General purpose digital I/O pin.',
    'PC.15:General purpose digital I/O pin.',
    'PC.2:General purpose digital I/O pin.',
    'PC.3:General purpose digital I/O pin.',
    'PC.4:General purpose digital I/O pin.',
    'PC.5:General purpose digital I/O pin.',
    'PC.6:General purpose digital I/O pin.',
    'PC.7:General purpose digital I/O pin.',
    'PC.8:General purpose digital I/O pin.',
    'PC.9:General purpose digital I/O pin.',
    'PD.0:General purpose digital I/O pin.',
    'PD.1:General purpose digital I/O pin.',
    'PD.10:General purpose digital I/O pin.',
    'PD.11:General purpose digital I/O pin.',
    'PD.12:General purpose digital I/O pin.',
    'PD.13:General purpose digital I/O pin.',
    'PD.14:General purpose digital I/O pin.',
    'PD.15:General purpose digital I/O pin.',
    'PD.2:General purpose digital I/O pin.',
    'PD.3:General purpose digital I/O pin.',
    'PD.4:General purpose digital I/O pin.',
    'PD.5:General purpose digital I/O pin.',
    'PD.6:General purpose digital I/O pin.',
    'PD.7:General purpose digital I/O pin.',
    'PD.8:General purpose digital I/O pin.',
    'PD.9:General purpose digital I/O pin.',
    'PE.0:General purpose digital I/O pin.',
    'PE.1:General purpose digital I/O pin.',
    'PE.10:General purpose digital I/O pin.',
    'PE.11:General purpose digital I/O pin.',
    'PE.12:General purpose digital I/O pin.',
    'PE.13:General purpose digital I/O pin.',
    'PE.14:General purpose digital I/O pin.',
    'PE.15:General purpose digital I/O pin.',
    'PE.2:General purpose digital I/O pin.',
    'PE.3:General purpose digital I/O pin.',
    'PE.4:General purpose digital I/O pin.',
    'PE.5:General purpose digital I/O pin.',
    'PE.6:General purpose digital I/O pin.',
    'PE.7:General purpose digital I/O pin.',
    'PE.8:General purpose digital I/O pin.',
    'PE.9:General purpose digital I/O pin.',
    'PF.0:General purpose digital I/O pin.',
    'PF.1:General purpose digital I/O pin.',
    'PF.10:General purpose digital I/O pin.',
    'PF.11:General purpose digital I/O pin.',
    'PF.12:General purpose digital I/O pin.',
    'PF.13:General purpose digital I/O pin.',
    'PF.14:General purpose digital I/O pin.',
    'PF.15:General purpose digital I/O pin.',
    'PF.2:General purpose digital I/O pin.',
    'PF.3:General purpose digital I/O pin.',
    'PF.4:General purpose digital I/O pin.',
    'PF.5:General purpose digital I/O pin.',
    'PF.6:General purpose digital I/O pin.',
    'PF.7:General purpose digital I/O pin.',
    'PF.8:General purpose digital I/O pin.',
    'PF.9:General purpose digital I/O pin.',
    'SPI0_CLK:SPI0 serial clock pin.',
    'SPI0_I2SMCLK:SPI0 I2S master clock output pin',
    'SPI0_MISO:SPI0 MISO (Master In, Slave Out) pin.',
    'SPI0_MOSI:SPI0 MOSI (Master Out, Slave In) pin.',
    'SPI0_SS:SPI0 slave select  pin.',
    'SPI1_CLK:SPI1 serial clock pin.',
    'SPI1_I2SMCLK:SPI1 I2S master clock output pin',
    'SPI1_MISO:SPI1 MISO (Master In, Slave Out) pin.',
    'SPI1_MOSI:SPI1 MOSI (Master Out, Slave In) pin.',
    'SPI1_SS:SPI1 slave select  pin.',
    'SPI2_CLK:SPI2 serial clock pin.',
    'SPI2_I2SMCLK:SPI2 I2S master clock output pin',
    'SPI2_MISO:SPI2 MISO (Master In, Slave Out) pin.',
    'SPI2_MOSI:SPI2 MOSI (Master Out, Slave In) pin.',
    'SPI2_SS:SPI2 slave select  pin.',
    'TM0:Timer0 event counter input/toggle output pin.',
    'TM0_EXT:Timer0 external capture input/toggle output pin.',
    'TM1:Timer1 event counter input/toggle output pin.',
    'TM1_EXT:Timer1 external capture input/toggle output pin.',
    'TM2:Timer2 event counter input/toggle output pin.',
    'TM2_EXT:Timer2 external capture input/toggle output pin.',
    'TM3:Timer3 event counter input/toggle output pin.',
    'TM3_EXT:Timer3 external capture input/toggle output pin.',
    'UART0_RXD:UART0 data receiver input pin.',
    'UART0_TXD:UART0 data transmitter output pin.',
    'UART0_nCTS:UART0 clear to Send input pin.',
    'UART0_nRTS:UART0 request to Send output pin.',
    'UART1_RXD:UART1 data receiver input pin.',
    'UART1_TXD:UART1 data transmitter output pin.',
    'UART1_nCTS:UART1 clear to Send input pin.',
    'UART1_nRTS:UART1 request to Send output pin.',
    'UART2_RXD:UART2 data receiver input pin.',
    'UART2_TXD:UART2 data transmitter output pin.',
    'UART2_nCTS:UART2 clear to Send input pin.',
    'UART2_nRTS:UART2 request to Send output pin.'
];

NUTOOL_PIN.g_cfg_wppin = {
    "QFN33_VDDIO1.0(5*5)": [
        
    ],
    "QFN33_VDDIO1.8(5*5)": [
        
    ],
    "TSSOP20": [
        
    ],
    "TSSOP28": [
        
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'M250ED2AE': {
        'ALL': []
    },
    'M250FD2AE': {
        'ALL': []
    },
    'M250ZD2AE': {
        'ALL': []
    },
    'NDR5ZD2AE': {
        'ALL': []
    },
    'NUC1264ZD2AE': {
        'ALL': []
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
    "QFN33_VDDIO1.0(5*5)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', ''
    ],
    "QFN33_VDDIO1.8(5*5)": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', ''
    ],
    "TSSOP20": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', ''
    ],
    "TSSOP28": [
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', ''
    ]
};

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPL = '0x50000030';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPH = '0x50000034';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPL = '0x50000038';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPH = '0x5000003C';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPL = '0x50000040';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPH = '0x50000044';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPL = '0x50000048';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPH = '0x5000004C';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPL = '0x50000050';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPH = '0x50000054';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPL = '0x50000058';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPH = '0x5000005C';

NUTOOL_PIN.g_cfg_gpioMatrix = [];

NUTOOL_PIN.g_cfg_shareBits = [];

NUTOOL_PIN.g_cfg_addGPIO = {};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.getPackageNumber(given_partNumber_package);
    let partNumber = NUTOOL_PIN.getPartNumber(given_partNumber_package);
    switch (partNumber) {
        case "M250ZD2AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33_VDDIO1.8(5*5)";
            break;
        case "NDR5ZD2AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33_VDDIO1.0(5*5)";
            break;
        case "NUC1264ZD2AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33_VDDIO1.0(5*5)";
            break;
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};