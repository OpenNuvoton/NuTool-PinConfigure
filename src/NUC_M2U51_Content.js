NUTOOL_PIN.g_cfg_chips = [
    // M2U54
    { name: "M2U54KE4AE", pkg: "LQFP128" },
    { name: "M2U54KG6AE", pkg: "LQFP128" },
    { name: "M2U54YE4AE", pkg: "QFN48" },
    { name: "M2U54YG6AE", pkg: "QFN48" },
    { name: "M2U54SE4AE", pkg: "LQFP64" },
    { name: "M2U54SG6AE", pkg: "LQFP64" },
    { name: "M2U54AE4AE", pkg: "QFN88" },
    { name: "M2U54AG6AE", pkg: "QFN88" },
    // M2U51
    { name: "M2U51YD3AE", pkg: "QFN48" },
    { name: "M2U51YC2AE", pkg: "QFN48" },
    { name: "M2U51TC2AE", pkg: "QFN33" },
    { name: "M2U51FC2AE", pkg: "TSSOP20" },
    { name: "M2U51EC2AE", pkg: "TSSOP28" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP128(DC/DC)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PC.12', 'PC.11', 'PC.10', 'PC.9', 'PB.1', 'PB.0', 
        'VSS', 'VDD', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 'VLCD', 'PD.12', 'PD.11', 'PD.10', 
        'PG.2', 'PG.3', 'PG.4', 'NC', 'NC', 'PF.9', 'PF.8', 'PF.7', 'PF.6', 'PF.14', 
        'PF.5', 'PF.4', 'NC', 'NC', 'NC', 'NC', 'PF.3', 'PF.2', 'VSS', 'VDD', 
        'PE.8', 'PE.9', 'PE.10', 'PE.11', 'PE.12', 'PE.13', 'PC.8', 'PC.7', 'PC.6', 'PA.7', 
        'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 
        'VDDIO', 'PE.14', 'PE.15', 'nRESET', 'PF.0', 'PF.1', 'PD.9', 'PD.8', 'PC.5', 'PC.4', 
        'PC.3', 'PC.2', 'PC.1', 'PC.0', 'VSS', 'VDD', 'NC', 'NC', 'NC', 'NC', 
        'NC', 'NC', 'NC', 'PD.7', 'PD.6', 'PD.5', 'PD.4', 'PD.3', 'PD.2', 'PD.1', 
        'PD.0', 'PD.13', 'PA.12', 'AVDD_BUCK', 'VSW', 'VSS_BUCK', 'PE.7', 'PE.6', 'PE.5', 'PE.4', 
        'PE.3', 'PE.2', 'NC', 'VDD', 'PE.1', 'PE.0', 'PH.8', 'PH.9', 'NC', 'NC', 
        'NC', 'VSS', 'LDO_CAP', 'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 
        'VREF', 'AVSS', 'PB.11', 'PB.10', 'PB.9', 'PB.8', 'PB.7', 'PB.6'
    ],
    "QFN88(DC/DC)": [
        'PB.4', 'PB.3', 'PB.2', 'PC.12', 'PC.11', 'PC.10', 'PC.9', 'PB.1', 'PB.0', 'VSS', 
        'VDD', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 'VLCD', 'PD.11', 'PD.10', 'PF.14', 'PF.5', 
        'PF.4', 'PF.3', 'PF.2', 'PE.8', 'PE.9', 'PE.10', 'PE.11', 'PE.13', 'PC.8', 'PC.7', 
        'PC.6', 'PA.7', 'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 
        'PA.1', 'PA.0', 'VDDIO', 'PE.14', 'nRESET', 'PF.0', 'PF.1', 'PD.9', 'PD.8', 'PC.5', 
        'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0', 'PD.7', 'PD.6', 'PD.3', 'PD.2', 'PD.1', 
        'PD.0', 'PD.13', 'PA.12', 'AVDD_BUCK', 'VSW', 'VSS_BUCK', 'PE.7', 'PE.6', 'PE.5', 'PE.2', 
        'VSS', 'LDO_CAP', 'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'VREF', 
        'AVSS', 'PB.11', 'PB.10', 'PB.9', 'PB.8', 'PB.7', 'PB.6', 'PB.5', 'VSS'
    ],
    "LQFP64(DC/DC)": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 
        'PA.8', 'VLCD', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.7', 'PC.6', 'PA.7', 
        'PA.6', 'VSS', 'VDD', 'PD.15', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 
        'VDDIO', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0', 
        'PD.3', 'PD.2', 'PD.1', 'PD.0', 'PA.12', 'AVDD_BUCK', 'VSW', 'VSS_BUCK', 'VSS', 'LDO_CAP', 
        'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'VREF', 'AVSS', 'PB.11', 
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ],
    "QFN48(DC/DC)(PIN:D10R14U10L14)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'VLCD', 
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 
        'PA.1', 'PA.0', 'VDDIO', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 
        'PC.1', 'PC.0', 'PA.12', 'AVDD_BUCK', 'VSW', 'VSS_BUCK', 'VSS', 'LDO_CAP', 'VDD', 'PC.14', 
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'AVSS', 'PB.7', 'PB.6', 'VSS'
    ],
    "QFN48(NonDC/DC,NonLCD)(PIN:D10R14U10L14)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 
        'PA.1', 'PA.0', 'VDDIO', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 
        'PC.1', 'PC.0', 'PA.12', 'PE.7', 'PE.6', 'PE.5', 'VSS', 'LDO_CAP', 'VDD', 'PC.14', 
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'AVSS', 'PB.7', 'PB.6', 'VSS'
    ],
    "QFN48(NonDC/DC,NonVDDIO)(PIN:D10R14U10L14)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 
        'PA.1', 'PA.0', 'PE.14', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 
        'PC.1', 'PC.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 'VDD', 'PC.14', 
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'AVSS', 'PB.7', 'PB.6', 'VSS'
    ],
    "QFN33(NonLCD)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 
        'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PE.14', 'nRESET', 'PF.0', 'PF.1', 'PC.1', 'PC.0', 
        'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 'VDD', 'PB.15', 'PB.14', 'PB.13', 
        'PB.12', 'AVDD', 'VSS'
    ],
    "TSSOP28(NonLCD)": [
        'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 'VDD', 'PB.14', 'PB.13', 'PB.12', 
        'AVDD', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.3', 'PF.2', 'PA.3', 
        'PA.2', 'PA.1', 'PA.0', 'nRESET', 'PF.0', 'PF.1', 'PC.1', 'PC.0'
    ],
    "QFN20(NonLCD)": [
        'PB.12', 'AVDD', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PF.3', 'PF.2', 'PA.3', 'PA.2', 
        'PA.1', 'PA.0', 'nRESET', 'PF.0', 'PF.1', 'VSS', 'LDO_CAP', 'VDD', 'PB.14', 'PB.13', 
        'VSS'
    ],
    "TSSOP20(NonLCD)": [
        'VSS', 'LDO_CAP', 'VDD', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'PB.5', 'PB.4', 'PB.3', 
        'PB.2', 'PF.3', 'PF.2', 'PA.3', 'PA.2', 'PA.1', 'PA.0', 'nRESET', 'PF.0', 'PF.1'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'SPI0_MOSI:4', 'UART0_RXD:7', 'UART1_nRTS:8', 'I2C2_SDA:9', 'BPWM0_CH0:12', 'PWM0_CH5:13']},
    { f: ['PA.1:0', 'PINV:2', 'SPI0_MISO:4', 'PBUF:5', 'UART0_TXD:7', 'UART1_nCTS:8', 'I2C2_SCL:9', 'BPWM0_CH1:12', 'PWM0_CH4:13']},
    { f: ['PA.2:0', 'PINV:2', 'SPI0_CLK:4', 'PBUF:5', 'UART1_RXD:7', 'I2C1_SDA:9', 'I2C0_SMBSUS:10', 'BPWM0_CH2:12', 'PWM0_CH3:13']},
    { f: ['PA.3:0', 'PINV:2', 'SPI0_SS:4', 'PBUF:5', 'UART1_TXD:7', 'I2C1_SCL:9', 'I2C0_SMBAL:10', 'BPWM0_CH3:12', 'PWM0_CH2:13']},
    { f: ['PA.4:0', 'PINV:2', 'PBUF:5', 'UART0_nRTS:7', 'I2C0_SDA:9', 'UART0_RXD:11', 'BPWM0_CH4:12', 'PWM0_CH1:13']},
    { f: ['PA.5:0', 'PINV:2', 'PBUF:5', 'UART0_nCTS:7', 'I2C0_SCL:9', 'UART0_TXD:11', 'BPWM0_CH5:12', 'PWM0_CH0:13']},
    { f: ['PA.6:0', 'PINV:2', 'SPI1_SS:4', 'UART0_RXD:7', 'LCD_SEG36:8', 'I2C1_SDA:9', 'PBUF:10', 'ACMP1_WLAT:13', 'TM3:14', 'INT0:15']},
    { f: ['PA.7:0', 'PINV:2', 'SPI1_CLK:4', 'UART0_TXD:7', 'LCD_SEG37:8', 'I2C1_SCL:9', 'PBUF:10', 'ACMP0_WLAT:13', 'TM2:14', 'INT1:15']},
    { f: ['PA.8:0', 'PINV:2', 'SPI2_MOSI:4', 'USCI0_CTL1:6', 'UART1_RXD:7', 'LCD_SEG0:8', 'BPWM0_CH3:9', 'PBUF:10', 'TM3_EXT:13', 'INT4:15']},
    { f: ['PA.9:0', 'PINV:2', 'SPI2_MISO:4', 'USCI0_DAT1:6', 'UART1_TXD:7', 'LCD_DH1:8', 'BPWM0_CH2:9', 'PBUF:10', 'TM2_EXT:13']},
    { f: ['PA.10:0', 'ACMP1_P0:1', 'PINV:2', 'SPI2_CLK:4', 'USCI0_DAT0:6', 'I2C2_SDA:7', 'LCD_DH2:8', 'BPWM0_CH1:9', 'PBUF:10', 'TM1_EXT:13']},
    { f: ['PA.11:0', 'ACMP0_P0:1', 'PINV:2', 'SPI2_SS:4', 'USCI0_CLK:6', 'I2C2_SCL:7', 'LCD_V3:8', 'BPWM0_CH0:9', 'PBUF:10', 'TM0_EXT:13']},
    { f: ['PA.12:0', 'PINV:2', 'I2C1_SCL:4', 'SPI2_SS:5', 'PBUF:10']},
    { f: ['PA.13:0', 'PINV:2', 'I2C1_SDA:4', 'SPI2_CLK:5', 'PBUF:10']},
    { f: ['PA.14:0', 'PINV:2', 'UART0_TXD:3', 'I2C1_SMBAL:4', 'SPI2_MISO:5', 'I2C2_SCL:6', 'I2C0_SMBAL:9', 'PBUF:10']},
    { f: ['PA.15:0', 'PINV:2', 'UART0_RXD:3', 'I2C1_SMBSUS:4', 'SPI2_MOSI:5', 'I2C2_SDA:6', 'I2C0_SMBSUS:9', 'PBUF:10']},

    { f: ['PB.0:0', 'ADC0_CH0:1', 'USCI0_CTL0:6', 'UART2_RXD:7', 'LCD_V2:8', 'I2C1_SDA:9', 'PWM0_CH5:11', 'PWM0_BRAKE1:13']},
    { f: ['PB.1:0', 'ADC0_CH1:1', 'PINV:2', 'UART2_TXD:7', 'LCD_V1:8', 'I2C1_SCL:9', 'PBUF:10', 'PWM0_CH4:11', 'PWM0_BRAKE0:13']},
    { f: ['PB.2:0', 'ADC0_CH2:1', 'ACMP0_P1:1', 'PINV:2', 'SPI1_SS:5', 'UART1_RXD:6', 'LCD_COM3:8', 'PBUF:10', 'PWM0_CH3:11', 'I2C1_SDA:12', 'TM3:14', 'INT3:15']},
    { f: ['PB.3:0', 'ADC0_CH3:1', 'ACMP0_N:1', 'PINV:2', 'SPI1_CLK:5', 'UART1_TXD:6', 'LCD_COM2:8', 'PBUF:10', 'PWM0_CH2:11', 'I2C1_SCL:12', 'TM2:14', 'INT2:15']},
    { f: ['PB.4:0', 'ADC0_CH4:1', 'ACMP1_P1:1', 'PINV:2', 'SPI1_MOSI:5', 'I2C0_SDA:6', 'LCD_COM1:8', 'PBUF:10', 'PWM0_CH1:11', 'UART2_RXD:12', 'TM1:14', 'INT1:15']},
    { f: ['PB.5:0', 'ADC0_CH5:1', 'ACMP1_N:1', 'PINV:2', 'SPI1_MISO:5', 'I2C0_SCL:6', 'LCD_COM0:8', 'PBUF:10', 'PWM0_CH0:11', 'UART2_TXD:12', 'TM0:14', 'INT0:15']},
    { f: ['PB.6:0', 'ADC0_CH6:1', 'PINV:2', 'UART1_RXD:6', 'LCD_SEG4:8', 'SPI0_CLK:9', 'PBUF:10', 'INT4:13', 'ACMP1_O:15']},
    { f: ['PB.7:0', 'ADC0_CH7:1', 'PINV:2', 'UART1_TXD:6', 'LCD_SEG5:8', 'SPI0_SS:9', 'PBUF:10', 'INT5:13', 'ACMP0_O:15']},
    { f: ['PB.8:0', 'ADC0_CH8:1', 'PINV:2', 'UART0_RXD:5', 'UART1_nRTS:6', 'I2C1_SMBSUS:7', 'LCD_SEG6:8', 'I2C0_SDA:9', 'PBUF:10', 'INT6:13']},
    { f: ['PB.9:0', 'ADC0_CH9:1', 'PINV:2', 'UART0_TXD:5', 'UART1_nCTS:6', 'I2C1_SMBAL:7', 'LCD_SEG7:8', 'I2C0_SCL:9', 'PBUF:10', 'INT7:13']},
    { f: ['PB.10:0', 'ADC0_CH10:1', 'PINV:2', 'UART0_nRTS:5', 'I2C1_SDA:7', 'LCD_SEG8:8', 'PBUF:10']},
    { f: ['PB.11:0', 'ADC0_CH11:1', 'PINV:2', 'UART0_nCTS:5', 'I2C1_SCL:7', 'LCD_SEG9:8', 'PBUF:10']},
    { f: ['PB.12:0', 'ADC0_CH12:1', 'ACMP0_P2:1', 'ACMP1_P2:1', 'PINV:2', 'SPI0_MOSI:4', 'USCI0_CLK:5', 'UART0_RXD:6', 'I2C2_SDA:7', 'LCD_SEG10:8', 'PBUF:10', 'TM3_EXT:13']},
    { f: ['PB.13:0', 'ADC0_CH13:1', 'ACMP0_P3:1', 'ACMP1_P3:1', 'PINV:2', 'SPI0_MISO:4', 'USCI0_DAT0:5', 'UART0_TXD:6', 'I2C2_SCL:7', 'LCD_SEG11:8', 'CLKO:9', 'PBUF:10', 'TM2_EXT:13']},
    { f: ['PB.14:0', 'ADC0_CH14:1', 'PINV:2', 'SPI0_CLK:4', 'USCI0_DAT1:5', 'UART0_nRTS:6', 'I2C2_SMBSUS:7', 'LCD_SEG12:8', 'PBUF:10', 'TM1_EXT:13', 'CLKO:14']},
    { f: ['PB.15:0', 'ADC0_CH15:1', 'PINV:2', 'SPI0_SS:4', 'USCI0_CTL1:5', 'UART0_nCTS:6', 'I2C2_SMBAL:7', 'LCD_SEG13:8', 'LCD_COM1:8', 'PBUF:10', 'TM0_EXT:13']},

    { f: ['PC.0:0', 'UART2_RXD:6', 'SPI1_SS:7', 'LCD_SEG26:8', 'LCD_COM3:8', 'I2C0_SDA:9', 'ACMP1_O:14']},
    { f: ['PC.1:0', 'PINV:2', 'UART2_TXD:6', 'SPI1_CLK:7', 'LCD_SEG27:8', 'LCD_COM2:8', 'I2C0_SCL:9', 'PBUF:10', 'ACMP0_O:14', 'ADC0_ST:15']},
    { f: ['PC.2:0', 'PINV:2', 'UART2_nCTS:6', 'SPI1_MOSI:7', 'LCD_SEG28:8', 'LCD_COM7:8', 'I2C0_SMBSUS:9', 'PBUF:10']},
    { f: ['PC.3:0', 'PINV:2', 'UART2_nRTS:6', 'SPI1_MISO:7', 'LCD_SEG29:8', 'LCD_COM6:8', 'I2C0_SMBAL:9', 'PBUF:10']},
    { f: ['PC.4:0', 'PINV:2', 'UART2_RXD:6', 'LCD_SEG30:8', 'LCD_COM5:8', 'I2C1_SDA:9', 'PBUF:10', 'ACMP1_WLAT:13']},
    { f: ['PC.5:0', 'PINV:2', 'UART2_TXD:6', 'LCD_SEG31:8', 'LCD_COM4:8', 'I2C1_SCL:9', 'PBUF:10', 'ACMP0_WLAT:13']},
    { f: ['PC.6:0', 'PINV:2', 'SPI1_MOSI:4', 'UART0_nRTS:7', 'LCD_SEG38:8', 'I2C1_SMBSUS:9', 'PBUF:10', 'TM1:14', 'INT2:15']},
    { f: ['PC.7:0', 'PINV:2', 'SPI1_MISO:4', 'UART0_nCTS:7', 'LCD_SEG39:8', 'I2C1_SMBAL:9', 'PBUF:10', 'TM0:14', 'INT3:15']},
    { f: ['PC.8:0', 'PINV:2', 'I2C0_SDA:4', 'LCD_COM7:8', 'LCD_SEG40:8', 'UART1_RXD:9', 'PBUF:10']},
    { f: ['PC.9:0', 'PINV:2', 'LCD_SEG2:8', 'PBUF:10']},
    { f: ['PC.10:0', 'PINV:2', 'LCD_SEG3:8', 'PBUF:10']},
    { f: ['PC.11:0', 'PINV:2', 'UART0_RXD:3', 'I2C0_SDA:4', 'LCD_SEG35:8', 'PBUF:10', 'ACMP1_O:14']},
    { f: ['PC.12:0', 'PINV:2', 'UART0_TXD:3', 'I2C0_SCL:4', 'LCD_SEG1:8', 'PBUF:10', 'ACMP0_O:14']},
    { f: ['PC.13:0']},
    { f: ['PC.14:0', 'PINV:2', 'USCI0_CTL0:5', 'LCD_SEG14:8', 'LCD_COM0:8', 'PBUF:10', 'TM1:13']},
    { f: ['PC.15:0']},

    { f: ['PD.0:0', 'USCI0_CLK:3', 'SPI0_MOSI:4', 'I2C2_SDA:6', 'LCD_SEG22:8', 'TM2:14']},
    { f: ['PD.1:0', 'USCI0_DAT0:3', 'SPI0_MISO:4', 'I2C2_SCL:6', 'LCD_SEG23:8']},
    { f: ['PD.2:0', 'USCI0_DAT1:3', 'SPI0_CLK:4', 'LCD_SEG24:8', 'UART0_RXD:9']},
    { f: ['PD.3:0', 'USCI0_CTL1:3', 'SPI0_SS:4', 'LCD_SEG25:8', 'UART0_TXD:9']},
    { f: ['PD.4:0', 'USCI0_CTL0:3', 'I2C1_SDA:4', 'SPI1_SS:5']},
    { f: ['PD.5:0', 'I2C1_SCL:4', 'SPI1_CLK:5']},
    { f: ['PD.6:0', 'UART1_RXD:3', 'I2C0_SDA:4', 'SPI1_MOSI:5']},
    { f: ['PD.7:0', 'UART1_TXD:3', 'I2C0_SCL:4', 'SPI1_MISO:5']},
    { f: ['PD.8:0', 'I2C2_SDA:3', 'UART2_nRTS:4', 'LCD_SEG32:8']},
    { f: ['PD.9:0', 'I2C2_SCL:3', 'UART2_nCTS:4', 'LCD_SEG33:8']},
    { f: ['PD.10:0', 'UART1_RXD:3', 'LCD_COM5:8', 'LCD_SEG42:8', 'INT7:15']},
    { f: ['PD.11:0', 'UART1_TXD:3', 'LCD_COM4:8', 'LCD_SEG43:8', 'INT6:15']},
    { f: ['PD.12:0', 'UART2_RXD:7', 'BPWM0_CH5:9', 'CLKO:13', 'ADC0_ST:14', 'INT5:15']},
    { f: ['PD.13:0', 'LCD_SEG21:8', 'BPWM0_CH0:11', 'CLKO:14']},
    { f: ['PD.14:0']},
    { f: ['PD.15:0']},

    { f: ['PE.0:0', 'SPI1_MOSI:6', 'I2C1_SDA:7']},
    { f: ['PE.1:0', 'SPI1_MISO:6', 'I2C1_SCL:7']},
    { f: ['PE.2:0', 'USCI0_CLK:7', 'BPWM0_CH0:13']},
    { f: ['PE.3:0', 'USCI0_DAT0:7', 'BPWM0_CH1:13']},
    { f: ['PE.4:0', 'USCI0_DAT1:7', 'BPWM0_CH2:13', 'SPI1_MOSI:15']},
    { f: ['PE.5:0', 'UART0_RXD:3', 'I2C1_SMBSUS:4', 'SPI2_MOSI:5', 'I2C2_SDA:6', 'USCI0_CTL1:7', 'I2C0_SMBSUS:9', 'BPWM0_CH3:13', 'SPI1_MISO:15']},
    { f: ['PE.6:0', 'UART0_TXD:3', 'I2C1_SMBAL:4', 'SPI2_MISO:5', 'I2C2_SCL:6', 'USCI0_CTL0:7', 'LCD_SEG15:8', 'I2C0_SMBAL:9', 'BPWM0_CH4:13']},
    { f: ['PE.7:0', 'I2C1_SDA:4', 'SPI2_CLK:5', 'LCD_SEG16:8', 'BPWM0_CH5:13']},
    { f: ['PE.8:0', 'SPI2_CLK:5', 'UART2_TXD:7', 'LCD_SEG20:8', 'LCD_COM0:8', 'PWM0_BRAKE0:11']},
    { f: ['PE.9:0', 'SPI2_MISO:5', 'UART2_RXD:7', 'LCD_SEG19:8', 'LCD_COM1:8', 'PWM0_BRAKE1:11']},
    { f: ['PE.10:0', 'SPI2_MOSI:5', 'LCD_SEG18:8', 'LCD_COM2:8']},
    { f: ['PE.11:0', 'SPI2_SS:5', 'LCD_SEG17:8', 'LCD_COM3:8', 'UART1_nCTS:9']},
    { f: ['PE.12:0', 'UART1_nRTS:9']},
    { f: ['PE.13:0', 'I2C0_SCL:4', 'LCD_COM6:8', 'LCD_SEG41:8', 'UART1_TXD:9']},
    { f: ['PE.14:0', 'UART2_TXD:3', 'LCD_SEG34:8', 'I2C1_SCL:9']},
    { f: ['PE.15:0', 'UART2_RXD:3', 'I2C1_SDA:9']},

    { f: ['PF.0:0', 'UART1_TXD:2', 'I2C1_SCL:3', 'UART0_TXD:4', 'USCI0_CTL1:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'ACMP0_O:13', 'ICE_DAT:14']},
    { f: ['PF.1:0', 'UART1_RXD:2', 'I2C1_SDA:3', 'UART0_RXD:4', 'USCI0_DAT1:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'ACMP1_O:13', 'ICE_CLK:14']},
    { f: ['PF.2:0', 'UART0_RXD:3', 'I2C0_SDA:4', 'I2C2_SMBSUS:8', 'TM1_EXT:15']},
    { f: ['PF.3:0', 'UART0_TXD:3', 'I2C0_SCL:4', 'I2C2_SMBAL:8', 'TM0_EXT:15']},
    { f: ['PF.4:0', 'UART2_TXD:2', 'UART2_nRTS:4', 'UART0_nRTS:5', 'BPWM0_CH5:8', 'X32_OUT:10']},
    { f: ['PF.5:0', 'UART2_RXD:2', 'UART2_nCTS:4', 'UART0_nCTS:5', 'BPWM0_CH4:8', 'X32_IN:10']},
    { f: ['PF.6:0', 'SPI0_MOSI:5']},
    { f: ['PF.7:0', 'SPI0_MISO:5']},
    { f: ['PF.8:0', 'SPI0_CLK:5']},
    { f: ['PF.9:0', 'SPI0_SS:5']},
    { f: ['PF.10:0']},
    { f: ['PF.11:0']},
    { f: ['PF.12:0']},
    { f: ['PF.13:0']},
    { f: ['PF.14:0']},
    { f: ['PF.15:0']},

    { f: ['PG.0:0']},
    { f: ['PG.1:0']},
    { f: ['PG.2:0', 'SPI2_SS:3', 'I2C0_SMBAL:4', 'I2C1_SCL:5', 'TM0:13']},
    { f: ['PG.3:0', 'SPI2_CLK:3', 'I2C0_SMBSUS:4', 'I2C1_SDA:5', 'TM1:13']},
    { f: ['PG.4:0', 'SPI2_MISO:3', 'TM2:13']},
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
    { f: ['PG.15:0']},

    { f: ['PH.0:0']},
    { f: ['PH.1:0']},
    { f: ['PH.2:0']},
    { f: ['PH.3:0']},
    { f: ['PH.4:0']},
    { f: ['PH.5:0']},
    { f: ['PH.6:0']},
    { f: ['PH.7:0']},
    { f: ['PH.8:0', 'SPI1_CLK:6', 'I2C1_SMBAL:7', 'LCD_SEG18:8', 'LCD_COM6:8', 'LCD_SEG45:8', 'I2C2_SCL:9', 'UART1_TXD:10']},
    { f: ['PH.9:0', 'SPI1_SS:6', 'I2C1_SMBSUS:7', 'LCD_SEG17:8', 'LCD_COM7:8', 'LCD_SEG44:8', 'I2C2_SDA:9', 'UART1_RXD:10']},
    { f: ['PH.10:0']},
    { f: ['PH.11:0']},
    { f: ['PH.12:0']},
    { f: ['PH.13:0']},
    { f: ['PH.14:0']},
    { f: ['PH.15:0']}
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
    'ADC0_CH0:ADC0 channel 0 analog input.',
    'ADC0_CH1:ADC0 channel 1 analog input.',
    'ADC0_CH2:ADC0 channel 2 analog input.',
    'ADC0_CH3:ADC0 channel 3 analog input.',
    'ADC0_CH4:ADC0 channel 4 analog input.',
    'ADC0_CH5:ADC0 channel 5 analog input.',
    'ADC0_CH6:ADC0 channel 6 analog input.',
    'ADC0_CH7:ADC0 channel 7 analog input.',
    'ADC0_CH8:ADC0 channel 8 analog input.',
    'ADC0_CH9:ADC0 channel 9 analog input.',
    'ADC0_CH10:ADC0 channel 10 analog input.',
    'ADC0_CH11:ADC0 channel 11 analog input.',
    'ADC0_CH12:ADC0 channel 12 analog input.',
    'ADC0_CH13:ADC0 channel 13 analog input.',
    'ADC0_CH14:ADC0 channel 14 analog input.',
    'ADC0_CH15:ADC0 channel 15 analog input.',
    'ADC0_ST:ADC0 external trigger input pin.',
    'BPWM0_CH0:BPWM0 channel 0 output/capture input.',
    'BPWM0_CH1:BPWM0 channel 1 output/capture input.',
    'BPWM0_CH2:BPWM0 channel 2 output/capture input.',
    'BPWM0_CH3:BPWM0 channel 3 output/capture input.',
    'BPWM0_CH4:BPWM0 channel 4 output/capture input.',
    'BPWM0_CH5:BPWM0 channel 5 output/capture input.',
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
    'ICE_CLK:Serial wired debugger clock pin.',
    'ICE_DAT:Serial wired debugger data pin.',
    'INT0:External interrupt 0 input pin.',
    'INT1:External interrupt 1 input pin.',
    'INT2:External interrupt 2 input pin.',
    'INT3:External interrupt 3 input pin.',
    'INT4:External interrupt 4 input pin.',
    'INT5:External interrupt 5 input pin.',
    'INT6:External interrupt 6 input pin.',
    'INT7:External interrupt 7 input pin.',
    'LCD_COM0:LCD common 0 output pin.',
    'LCD_COM1:LCD common 1 output pin.',
    'LCD_COM2:LCD common 2 output pin.',
    'LCD_COM3:LCD common 3 output pin.',
    'LCD_COM4:LCD common 4 output pin.',
    'LCD_COM5:LCD common 5 output pin.',
    'LCD_COM6:LCD common 6 output pin.',
    'LCD_COM7:LCD common 7 output pin.',
    'LCD_DH1:LCD external capacitor pin 1 of LCD charge pump circuit.',
    'LCD_DH2:LCD external capacitor pin 2 of LCD charge pump circuit.',
    'LCD_PIN0:',
    'LCD_PIN1:',
    'LCD_PIN2:',
    'LCD_PIN3:',
    'LCD_PIN4:',
    'LCD_PIN5:',
    'LCD_PIN6:',
    'LCD_PIN7:',
    'LCD_PIN8:',
    'LCD_PIN9:',
    'LCD_PIN10:',
    'LCD_PIN11:',
    'LCD_PIN12:',
    'LCD_PIN13:',
    'LCD_PIN14:',
    'LCD_PIN15:',
    'LCD_PIN16:',
    'LCD_PIN17:',
    'LCD_PIN18:',
    'LCD_PIN19:',
    'LCD_PIN20:',
    'LCD_PIN21:',
    'LCD_PIN22:',
    'LCD_PIN23:',
    'LCD_PIN24:',
    'LCD_PIN25:',
    'LCD_PIN26:',
    'LCD_PIN27:',
    'LCD_PIN28:',
    'LCD_PIN29:',
    'LCD_PIN30:',
    'LCD_PIN31:',
    'LCD_PIN32:',
    'LCD_PIN33:',
    'LCD_PIN34:',
    'LCD_PIN35:',
    'LCD_PIN36:',
    'LCD_PIN37:',
    'LCD_PIN38:',
    'LCD_PIN39:',
    'LCD_PIN40:',
    'LCD_PIN41:',
    'LCD_PIN42:',
    'LCD_PIN43:',
    'LCD_PIN44:',
    'LCD_PIN45:',
    'LCD_PIN46:',
    'LCD_PIN47:',
    'LCD_PIN48:',
    'LCD_PIN49:',
    'LCD_POWER:',
    'LCD_SEG0:LCD segment 0 output pin.',
    'LCD_SEG1:LCD segment 1 output pin.',
    'LCD_SEG2:LCD segment 2 output pin.',
    'LCD_SEG3:LCD segment 3 output pin.',
    'LCD_SEG4:LCD segment 4 output pin.',
    'LCD_SEG5:LCD segment 5 output pin.',
    'LCD_SEG6:LCD segment 6 output pin.',
    'LCD_SEG7:LCD segment 7 output pin.',
    'LCD_SEG8:LCD segment 8 output pin.',
    'LCD_SEG9:LCD segment 9 output pin.',
    'LCD_SEG10:LCD segment 10 output pin.',
    'LCD_SEG11:LCD segment 11 output pin.',
    'LCD_SEG12:LCD segment 12 output pin.',
    'LCD_SEG13:LCD segment 13 output pin.',
    'LCD_SEG14:LCD segment 14 output pin.',
    'LCD_SEG15:LCD segment 15 output pin.',
    'LCD_SEG16:LCD segment 16 output pin.',
    'LCD_SEG17:LCD segment 17 output pin.',
    'LCD_SEG18:LCD segment 18 output pin.',
    'LCD_SEG19:LCD segment 19 output pin.',
    'LCD_SEG20:LCD segment 20 output pin.',
    'LCD_SEG21:LCD segment 21 output pin.',
    'LCD_SEG22:LCD segment 22 output pin.',
    'LCD_SEG23:LCD segment 23 output pin.',
    'LCD_SEG24:LCD segment 24 output pin.',
    'LCD_SEG25:LCD segment 25 output pin.',
    'LCD_SEG26:LCD segment 26 output pin.',
    'LCD_SEG27:LCD segment 27 output pin.',
    'LCD_SEG28:LCD segment 28 output pin.',
    'LCD_SEG29:LCD segment 29 output pin.',
    'LCD_SEG30:LCD segment 30 output pin.',
    'LCD_SEG31:LCD segment 31 output pin.',
    'LCD_SEG32:LCD segment 32 output pin.',
    'LCD_SEG33:LCD segment 33 output pin.',
    'LCD_SEG34:LCD segment 34 output pin.',
    'LCD_SEG35:LCD segment 35 output pin.',
    'LCD_SEG36:LCD segment 36 output pin.',
    'LCD_SEG37:LCD segment 37 output pin.',
    'LCD_SEG38:LCD segment 38 output pin.',
    'LCD_SEG39:LCD segment 39 output pin.',
    'LCD_SEG40:LCD segment 40 output pin.',
    'LCD_SEG41:LCD segment 41 output pin.',
    'LCD_SEG42:LCD segment 42 output pin.',
    'LCD_SEG43:LCD segment 43 output pin.',
    'LCD_SEG44:LCD segment 44 output pin.',
    'LCD_SEG45:LCD segment 45 output pin.',
    'LCD_V1:LCD Unit voltage for charge pump circuit.',
    'LCD_V2:LCD driver biasing voltage.',
    'LCD_V3:LCD driver biasing voltage.',
    'PBUF:GPIO follows the previous GPIO pin status.',
    'Pin Name:Description',
    'PINV:GPIO follows the previous GPIO pin inverted status.',
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
    'SPI1_CLK:SPI1 serial clock pin.',
    'SPI1_MISO:SPI1 MISO (Master In, Slave Out) pin.',
    'SPI1_MOSI:SPI1 MOSI (Master Out, Slave In) pin.',
    'SPI1_SS:SPI1 slave select  pin.',
    'SPI2_CLK:SPI2 serial clock pin.',
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
    'UART0_nCTS:UART0 clear to Send input pin.',
    'UART0_nRTS:UART0 request to Send output pin.',
    'UART0_RXD:UART0 data receiver input pin.',
    'UART0_TXD:UART0 data transmitter output pin.',
    'UART1_nCTS:UART1 clear to Send input pin.',
    'UART1_nRTS:UART1 request to Send output pin.',
    'UART1_RXD:UART1 data receiver input pin.',
    'UART1_TXD:UART1 data transmitter output pin.',
    'UART2_nCTS:UART2 clear to Send input pin.',
    'UART2_nRTS:UART2 request to Send output pin.',
    'UART2_RXD:UART2 data receiver input pin.',
    'UART2_TXD:UART2 data transmitter output pin.',
    'USCI0_CLK:USCI0 clock pin.',
    'USCI0_CTL0:USCI0 control 0 pin.',
    'USCI0_CTL1:USCI0 control 1 pin.',
    'USCI0_DAT0:USCI0 data 0 pin.',
    'USCI0_DAT1:USCI0 data 1 pin.',
    'X32_IN:External 32.768 kHz crystal input pin.',
    'X32_OUT:External 32.768 kHz crystal output pin.',
];

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPL = '0x40000030';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPH = '0x40000034';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPL = '0x40000038';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPH = '0x4000003C';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPL = '0x40000040';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPH = '0x40000044';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPL = '0x40000048';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPH = '0x4000004C';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPL = '0x40000050';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPH = '0x40000054';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPL = '0x40000058';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPH = '0x4000005C';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFPL = '0x40000060';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFPH = '0x40000064';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFPL = '0x40000068';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFPH = '0x4000006C';

NUTOOL_PIN.g_cfg_wppin = {
    "LQFP128(DC/DC)": [
        'PB.2', 'PC.6', 'PD.13', 'PC.14'
    ],
    "QFN88(DC/DC)": [
        'PB.2', 'PC.6', 'PD.13', 'PC.14'
    ],
    "LQFP64(DC/DC)": [
        'PB.2', 'PC.6', 'PC.14'
    ],
    "QFN48(DC/DC)": [
        'PB.2', 'PC.14'
    ],
    "QFN48(NonDC/DC,NonLCD)": [
        'PB.2', 'PC.14'
    ],
    "QFN48(NonDC/DC,NonVDDIO)": [
        'PB.2', 'PC.14'
    ],
    "QFN33(NonLCD)": [
        'PB.2'
    ],
    "TSSOP28(NonLCD)": [
        'PB.2'
    ],
    "QFN20(NonLCD)": [
        'PB.2'
    ],
    "TSSOP20(NonLCD)": [
        'PB.2'
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
    "PB.2" : [ 'Can change function to  Write_Protect_Pin by chip configuration' ],
    "PC.6" : [ 'Can change function to  Write_Protect_Pin by chip configuration' ],
    "PD.13" : [ 'Can change function to  Write_Protect_Pin by chip configuration' ],
    "PC.14" : [ 'Can change function to  Write_Protect_Pin by chip configuration' ],
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'M2U54KE4AE': {
        'ALL': ['PINV', 'PBUF']
    },
    'M2U54KG6AE': {
        'ALL': ['PINV', 'PBUF']
    },
    'M2U54YE4AE': {
        'ALL': ['PINV', 'PBUF']
    },
    'M2U54YG6AE': {
        'ALL': ['PINV', 'PBUF']
    },
    'M2U54SE4AE': {
        'ALL': ['PINV', 'PBUF']
    },
    'M2U54SG6AE': {
        'ALL': ['PINV', 'PBUF']
    },
    'M2U54AE4AE': {
        'ALL': ['PINV', 'PBUF']
    },
    'M2U54AG6AE': {
        'ALL': ['PINV', 'PBUF']
    },
    'M2U51YD3AE': {
        'ALL': ['LCD']
    },
    'M2U51YC2AE': {
        'ALL': ['I2C2', 'UART2', 'SPI1', 'SPI2', 'LCD', 'PWM0', 'USCI0', 'ACMP0', 'ACMP1']
    },
    'M2U51TC2AE': {
        'ALL': ['I2C2', 'UART2', 'SPI1', 'SPI2', 'LCD', 'PWM0', 'USCI0', 'ACMP0', 'ACMP1']
    },
    'M2U51FC2AE': {
        'ALL': ['I2C2', 'UART2', 'SPI1', 'SPI2', 'LCD', 'PWM0', 'USCI0', 'ACMP0', 'ACMP1']
    },
    'M2U51EC2AE': {
        'ALL': ['I2C2', 'UART2', 'SPI1', 'SPI2', 'LCD', 'PWM0', 'USCI0', 'ACMP0', 'ACMP1']
    }
};

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.getPackageNumber(given_partNumber_package);
    let partNumber = NUTOOL_PIN.getPartNumber(given_partNumber_package);
    switch (partNumber) {
        case "M2U54KE4AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP128(DC/DC)";
            break;
        case "M2U54KG6AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP128(DC/DC)";
            break;
        case "M2U54YE4AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN48(DC/DC)(PIN:D10R14U10L14)";
            break;
        case "M2U54YG6AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN48(DC/DC)(PIN:D10R14U10L14)";
            break;
        case "M2U54SE4AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(DC/DC)";
            break;
        case "M2U54SG6AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(DC/DC)";
            break;
        case "M2U54AE4AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN88(DC/DC)";
            break;
        case "M2U54AG6AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN88(DC/DC)";
            break;
        case "M2U51YD3AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN48(NonDC/DC,NonLCD)(PIN:D10R14U10L14)";
            break;
        case "M2U51YC2AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN48(NonDC/DC,NonVDDIO)(PIN:D10R14U10L14)";
            break;
        case "M2U51TC2AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(NonLCD)";
            break;
        case "M2U51FC2AE":
            NUTOOL_PIN.g_packageNumberIndex = "TSSOP20(NonLCD)";
            break;
        case "M2U51EC2AE":
            NUTOOL_PIN.g_packageNumberIndex = "TSSOP28(NonLCD)";
            break;
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};
