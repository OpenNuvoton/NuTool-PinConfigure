NUTOOL_PIN.g_cfg_chips = [
    { name: "M3334YIGAE", pkg: "QFN48(USB2.0)" },
    { name: "M3334LIGAE", pkg: "LQFP48(USB2.0)" },
    { name: "M3334SIGAE", pkg: "LQFP64(USB2.0)" },
    { name: "M3334KIGAE", pkg: "LQFP128(USB2.0)" },
    { name: "M3333YIGAE", pkg: "QFN48" },
    { name: "M3333LIGAE", pkg: "LQFP48" },
    { name: "M3333SIGAE", pkg: "LQFP64" },
    { name: "M3333TIGAE", pkg: "QFN33" },
    { name: "M3334TIGAE", pkg: "QFN33(USB2.0)" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "QFN33": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.5', 'PF.4', 'PF.3', 'PF.2',
        'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.1', 'PC.0',
        'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 'VDD', 'PB.15', 'PB.14', 'PB.13',
        'PB.12', 'AVDD/VREF', 'VSS'
    ],
    "QFN33(USB2.0)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PF.5', 'PF.4', 'PF.3', 'PF.2',
        'PA.3', 'PA.2', 'PA.1', 'PA.0', 'PF.15', 'nRESET', 'PF.0', 'PF.1', 'HSUSB_VRES', 'HSUSB_VDD33',
        'HSUSB_VBUS', 'HSUSB_D-', 'HSUSB_D+', 'HSUSB_VDD12_CAP', 'VSS', 'LDO_CAP', 'VDD', 'PB.15', 'PB.14', 'PB.13',
        'PB.12', 'AVDD/VREF', 'HSUSB_VSS'
    ],
    "QFN48": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8',
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2',
        'PA.1', 'PA.0', 'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2',
        'PC.1', 'PC.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 'VDD', 'PC.14',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD/VREF', 'AVSS', 'PB.7', 'PB.6', 'VSS'
    ],
    "LQFP48": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8',
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2',
        'PA.1', 'PA.0', 'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2',
        'PC.1', 'PC.0', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP', 'VDD', 'PC.14',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD/VREF', 'AVSS', 'PB.7', 'PB.6'
    ],
    "QFN48(USB2.0)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8',
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2',
        'PA.1', 'PA.0', 'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.1', 'PC.0', 'HSUSB_VRES', 'HSUSB_VDD33',
        'HSUSB_VBUS', 'HSUSB_D-', 'HSUSB_VSS', 'HSUSB_D+', 'HSUSB_VDD12_CAP', 'HSUSB_ID', 'VSS', 'LDO_CAP', 'VDD', 'PC.14',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD/VREF', 'AVSS', 'PB.7', 'PB.6', 'VSS'
    ],
    "LQFP48(USB2.0)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9', 'PA.8',
        'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2',
        'PA.1', 'PA.0', 'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.1', 'PC.0', 'HSUSB_VRES', 'HSUSB_VDD33',
        'HSUSB_VBUS', 'HSUSB_D-', 'HSUSB_VSS', 'HSUSB_D+', 'HSUSB_VDD12_CAP', 'HSUSB_ID', 'VSS', 'LDO_CAP', 'VDD', 'PC.14',
        'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD/VREF', 'AVSS', 'PB.7', 'PB.6'
    ],
    "LQFP64": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9',
        'PA.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.7', 'PC.6', 'PA.7',
        'PA.6', 'VSS', 'VDD', 'LDO_CAP', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0',
        'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'PG.9', 'PG.10', 'PG.11', 'PG.12', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'VSS', 'LDO_CAP',
        'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'VREF', 'AVSS', 'PB.11',
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ],
    "LQFP64(USB2.0)": [
        'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0', 'PA.11', 'PA.10', 'PA.9',
        'PA.8', 'PF.6', 'PF.14', 'PF.5', 'PF.4', 'PF.3', 'PF.2', 'PC.7', 'PC.6', 'PA.7',
        'PA.6', 'VSS', 'VDD', 'LDO_CAP', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0',
        'PF.15', 'nRESET', 'PF.0', 'PF.1', 'PC.5', 'PC.4', 'PC.3', 'PC.2', 'PC.1', 'PC.0',
        'HSUSB_VRES', 'HSUSB_VDD33', 'HSUSB_VBUS', 'HSUSB_D-', 'HSUSB_VSS', 'HSUSB_D+', 'HSUSB_VDD12_CAP', 'HSUSB_ID', 'VSS', 'LDO_CAP',
        'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD', 'VREF', 'AVSS', 'PB.11',
        'PB.10', 'PB.9', 'PB.8', 'PB.7'
    ],
    "LQFP128": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PC.12', 'PC.11', 'PC.10', 'PC.9', 'PB.1', 'PB.0',
        'VSS', 'VDD', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 'PC.13', 'PD.12', 'PD.11', 'PD.10',
        'PG.2', 'PG.3', 'PG.4', 'PF.11', 'PF.10', 'PF.9', 'PF.8', 'PF.7', 'PF.6', 'PF.14',
        'PF.5', 'PF.4', 'PH.4', 'PH.5', 'PH.6', 'PH.7', 'PF.3', 'PF.2', 'VSS', 'VDD',
        'PE.8', 'PE.9', 'PE.10', 'PE.11', 'PE.12', 'PE.13', 'PC.8', 'PC.7', 'PC.6', 'PA.7',
        'PA.6', 'VSS', 'VDD', 'LDO_CAP', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0',
        'PF.15', 'PE.14', 'PE.15', 'nRESET', 'PF.0', 'PF.1', 'PD.9', 'PD.8', 'PC.5', 'PC.4',
        'PC.3', 'PC.2', 'PC.1', 'PC.0', 'VSS', 'VDD', 'PG.9', 'PG.10', 'PG.11', 'PG.12',
        'PG.13', 'PG.14', 'PG.15', 'PD.7', 'PD.6', 'PD.5', 'PD.4', 'PD.3', 'PD.2', 'PD.1',
        'PD.0', 'PD.13', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'PE.7', 'PE.6', 'PE.5', 'PE.4',
        'PE.3', 'PE.2', 'VSS', 'VDD', 'PE.1', 'PE.0', 'PH.8', 'PH.9', 'PH.10', 'PH.11',
        'PD.14', 'VSS', 'LDO_CAP', 'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD',
        'VREF', 'AVSS', 'PB.11', 'PB.10', 'PB.9', 'PB.8', 'PB.7', 'PB.6'
    ],
    "LQFP128(USB2.0)": [
        'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PC.12', 'PC.11', 'PC.10', 'PC.9', 'PB.1', 'PB.0',
        'VSS', 'VDD', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 'PC.13', 'PD.12', 'PD.11', 'PD.10',
        'PG.2', 'PG.3', 'PG.4', 'PF.11', 'PF.10', 'PF.9', 'PF.8', 'PF.7', 'PF.6', 'PF.14',
        'PF.5', 'PF.4', 'PH.4', 'PH.5', 'PH.6', 'PH.7', 'PF.3', 'PF.2', 'VSS', 'VDD',
        'PE.8', 'PE.9', 'PE.10', 'PE.11', 'PE.12', 'PE.13', 'PC.8', 'PC.7', 'PC.6', 'PA.7',
        'PA.6', 'VSS', 'VDD', 'LDO_CAP', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 'PA.1', 'PA.0',
        'PF.15', 'PE.14', 'PE.15', 'nRESET', 'PF.0', 'PF.1', 'PD.9', 'PD.8', 'PC.5', 'PC.4',
        'PC.3', 'PC.2', 'PC.1', 'PC.0', 'VSS', 'VDD', 'PG.9', 'PG.10', 'PG.11', 'PG.12',
        'PG.13', 'PG.14', 'PG.15', 'PD.13', 'PA.12', 'PA.13', 'PA.14', 'PA.15', 'HSUSB_VRES', 'HSUSB_VDD33',
        'HSUSB_VBUS', 'HSUSB_D-', 'HSUSB_VSS', 'HSUSB_D+', 'HSUSB_VDD12_CAP', 'HSUSB_ID', 'PE.7', 'PE.6', 'PE.5', 'PE.4',
        'PE.3', 'PE.2', 'VSS', 'VDD', 'PE.1', 'PE.0', 'PH.8', 'PH.9', 'PH.10', 'PH.11',
        'PD.14', 'VSS', 'LDO_CAP', 'VDD', 'PC.14', 'PB.15', 'PB.14', 'PB.13', 'PB.12', 'AVDD',
        'VREF', 'AVSS', 'PB.11', 'PB.10', 'PB.9', 'PB.8', 'PB.7', 'PB.6'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'QSPI0_MOSI0:3', 'SPI0_MOSI:4', 'UART0_RXD:7', 'UART1_nRTS:8', 'I2C2_SDA:9', 'I3C0_SDA:11', 'BPWM0_CH0:12', 'EPWM0_CH5:13', 'LLSI7_OUT:16'] },
    { f: ['PA.1:0', 'QSPI0_MISO0:3', 'SPI0_MISO:4', 'UART0_TXD:7', 'UART1_nCTS:8', 'I2C2_SCL:9', 'I3C0_SCL:11', 'BPWM0_CH1:12', 'EPWM0_CH4:13', 'LLSI6_OUT:16'] },
    { f: ['PA.2:0', 'QSPI0_CLK:3', 'SPI0_CLK:4', 'UART4_RXD:7', 'UART1_RXD:8', 'I2C1_SDA:9', 'I2C0_SMBSUS:10', 'BPWM0_CH2:12', 'EPWM0_CH3:13', 'I3C0_PUPEN:15', 'LLSI5_OUT:16'] },
    { f: ['PA.3:0', 'QSPI0_SS:3', 'SPI0_SS:4', 'UART4_TXD:7', 'UART1_TXD:8', 'I2C1_SCL:9', 'I2C0_SMBAL:10', 'BPWM0_CH3:12', 'EPWM0_CH2:13', 'EQEI0_B:14', 'EPWM1_BRAKE1:15', 'LLSI4_OUT:16'] },
    { f: ['PA.4:0', 'QSPI0_MOSI1:3', 'SPI0_I2SMCLK:4', 'UART0_nRTS:7', 'EBI_AD1:8', 'I2C0_SDA:9', 'CANFD0_RXD:10', 'UART0_RXD:11', 'BPWM0_CH4:12', 'EPWM0_CH1:13', 'EQEI0_A:14', 'I3C0_SDA:15'] },
    { f: ['PA.5:0', 'QSPI0_MISO1:3', 'SPI1_I2SMCLK:4', 'CANFD0_TXH:6', 'UART0_nCTS:7', 'EBI_AD0:8', 'I2C0_SCL:9', 'CANFD0_TXD:10', 'UART0_TXD:11', 'BPWM0_CH5:12', 'EPWM0_CH0:13', 'EQEI0_INDEX:14', 'I3C0_SCL:15'] },
    { f: ['PA.6:0', 'EBI_AD6:2', 'SPI1_SS:4', 'CANFD0_TXL:6', 'UART0_RXD:7', 'I2C1_SDA:8', 'EPWM1_CH5:11', 'BPWM1_CH3:12', 'ACMP1_WLAT:13', 'TM3:14', 'INT0:15'] },
    { f: ['PA.7:0', 'EBI_AD7:2', 'SPI1_CLK:4', 'UART0_TXD:7', 'I2C1_SCL:8', 'EPWM1_CH4:11', 'BPWM1_CH2:12', 'ACMP0_WLAT:13', 'TM2:14', 'INT1:15', 'ELLSI0_OUT:16'] },
    { f: ['PA.8:0', 'EBI_ALE:2', 'SPI2_MOSI:4', 'USCI0_CTL1:6', 'UART1_RXD:7', 'CANFD1_TXL:8', 'BPWM0_CH3:9', 'ECAP0_IC2:11', 'BPWM3_CH3:12', 'TM3_EXT:13', 'INT4:15'] },
    { f: ['PA.9:0', 'EBI_MCLK:2', 'SPI2_MISO:4', 'USCI0_DAT1:6', 'UART1_TXD:7', 'BPWM0_CH2:9', 'ECAP0_IC1:11', 'BPWM3_CH2:12', 'TM2_EXT:13'] },
    { f: ['PA.10:0', 'ACMP1_P0:1', 'EBI_nWR:2', 'SPI2_CLK:4', 'USCI0_DAT0:6', 'I2C2_SDA:7', 'BPWM0_CH1:9', 'ECAP0_IC0:11', 'BPWM3_CH1:12', 'TM1_EXT:13'] },
    { f: ['PA.11:0', 'ACMP0_P0:1', 'EBI_nRD:2', 'SPI2_SS:4', 'USCI0_CLK:6', 'I2C2_SCL:7', 'BPWM0_CH0:9', 'EPWM0_SYNC_OUT:10', 'EPWM0_BRAKE1:11', 'BPWM3_CH0:12', 'TM0_EXT:13'] },
    { f: ['PA.12:0', 'I2S0_BCLK:2', 'UART4_TXD:3', 'I2C1_SCL:4', 'SPI2_SS:5', 'CANFD0_TXD:6', 'CANFD0_TXH:7', 'BPWM1_CH2:11', 'BPWM2_CH3:13'] },
    { f: ['PA.13:0', 'I2S0_MCLK:2', 'UART4_RXD:3', 'I2C1_SDA:4', 'SPI2_CLK:5', 'CANFD0_RXD:6', 'BPWM1_CH3:11', 'BPWM2_CH4:13'] },
    { f: ['PA.14:0', 'I2S0_DI:2', 'UART0_TXD:3', 'EBI_AD5:4', 'SPI2_MISO:5', 'I2C2_SCL:6', 'BPWM1_CH4:11', 'BPWM2_CH5:13'] },
    { f: ['PA.15:0', 'I2S0_DO:2', 'UART0_RXD:3', 'SPI2_MOSI:5', 'I2C2_SDA:6', 'BPWM1_CH5:11', 'EPWM0_SYNC_IN:12'] },

    { f: ['PB.0:0', 'EADC0_CH0:1', 'EBI_ADR9:2', 'SD0_CMD:3', 'SPI2_I2SMCLK:4', 'USCI0_CTL0:6', 'UART2_RXD:7', 'SPI0_I2SMCLK:8', 'I2C1_SDA:9', 'EPWM0_CH5:11', 'EPWM1_CH5:12', 'EPWM0_BRAKE1:13', 'I3C0_SDA:14', 'QSPI0_MOSI1:15'] },
    { f: ['PB.1:0', 'EADC0_CH1:1', 'EBI_ADR8:2', 'SD0_CLK:3', 'SPI1_I2SMCLK:5', 'UART2_TXD:7', 'USCI1_CLK:8', 'I2C1_SCL:9', 'I2S0_LRCK:10', 'EPWM0_CH4:11', 'EPWM1_CH4:12', 'EPWM0_BRAKE0:13', 'I3C0_SCL:14', 'QSPI0_MISO1:15', 'ELLSI0_OUT:16'] },
    { f: ['PB.2:0', 'EADC0_CH2:1', 'ACMP0_P1:1', 'EBI_ADR3:2', 'SD0_DAT0:3', 'SPI1_SS:5', 'UART1_RXD:6', 'USCI1_DAT0:8', 'I2S0_DO:10', 'EPWM0_CH3:11', 'I2C1_SDA:12', 'TM3:14', 'INT3:15', 'LLSI7_OUT:16'] },
    { f: ['PB.3:0', 'EADC0_CH3:1', 'ACMP0_N:1', 'EBI_ADR2:2', 'SD0_DAT1:3', 'SPI1_CLK:5', 'UART1_TXD:6', 'USCI1_DAT1:8', 'I2S0_DI:10', 'EPWM0_CH2:11', 'I2C1_SCL:12', 'TM2:14', 'INT2:15', 'LLSI6_OUT:16'] },
    { f: ['PB.4:0', 'EADC0_CH4:1', 'ACMP1_P1:1', 'EBI_ADR1:2', 'SD0_DAT2:3', 'SPI1_MOSI:5', 'I2C0_SDA:6', 'USCI1_CTL1:8', 'I2S0_MCLK:10', 'EPWM0_CH1:11', 'UART2_RXD:12', 'TM1:14', 'INT1:15', 'LLSI5_OUT:16'] },
    { f: ['PB.5:0', 'EADC0_CH5:1', 'ACMP1_N:1', 'EBI_ADR0:2', 'SD0_DAT3:3', 'SPI1_MISO:5', 'I2C0_SCL:6', 'USCI1_CTL0:8', 'I2S0_BCLK:10', 'EPWM0_CH0:11', 'UART2_TXD:12', 'TM0:14', 'INT0:15', 'LLSI4_OUT:16'] },
    { f: ['PB.6:0', 'EADC0_CH6:1', 'EBI_nWRH:2', 'EPWM0_SYNC_IN:3', 'USCI1_DAT1:4', 'CANFD1_RXD:5', 'UART1_RXD:6', 'HSUSB_VBUS_EN:7', 'EBI_nCS1:8', 'SPI0_CLK:9', 'BPWM1_CH5:10', 'EPWM1_BRAKE1:11', 'EPWM1_CH5:12', 'INT4:13', 'ACMP1_O:15', 'TM1:16'] },
    { f: ['PB.7:0', 'EADC0_CH7:1', 'EBI_nWRL:2', 'CANFD1_TXH:3', 'USCI1_DAT0:4', 'CANFD1_TXD:5', 'UART1_TXD:6', 'HSUSB_VBUS_ST:7', 'EBI_nCS0:8', 'SPI0_SS:9', 'BPWM1_CH4:10', 'EPWM1_BRAKE0:11', 'EPWM1_CH4:12', 'INT5:13', 'ACMP0_O:15'] },
    { f: ['PB.8:0', 'EADC0_CH8:1', 'EBI_ADR19:2', 'CANFD1_TXL:3', 'USCI1_CLK:4', 'UART0_RXD:5', 'UART1_nRTS:6', 'I2C1_SMBSUS:7', 'I2C0_SDA:9', 'BPWM1_CH3:10', 'INT6:13'] },
    { f: ['PB.9:0', 'EADC0_CH9:1', 'EBI_ADR18:2', 'USCI1_CTL1:4', 'UART0_TXD:5', 'UART1_nCTS:6', 'I2C1_SMBAL:7', 'I2C0_SCL:9', 'BPWM1_CH2:10', 'INT7:13', 'ELLSI0_OUT:16'] },
    { f: ['PB.10:0', 'EADC0_CH10:1', 'EBI_ADR17:2', 'USCI1_CTL0:4', 'UART0_nRTS:5', 'UART4_RXD:6', 'I2C1_SDA:7', 'CANFD0_RXD:8', 'BPWM1_CH1:10', 'HSUSB_VBUS_EN:14', 'LLSI9_OUT:16'] },
    { f: ['PB.11:0', 'EADC0_CH11:1', 'EBI_ADR16:2', 'CANFD0_TXH:4', 'UART0_nCTS:5', 'UART4_TXD:6', 'I2C1_SCL:7', 'CANFD0_TXD:8', 'SPI0_I2SMCLK:9', 'BPWM1_CH0:10', 'HSUSB_VBUS_ST:14', 'LLSI8_OUT:16'] },
    { f: ['PB.12:0', 'EADC0_CH12:1', 'ACMP0_P2:1', 'ACMP1_P2:1', 'EBI_AD15:2', 'CANFD0_TXL:3', 'SPI0_MOSI:4', 'USCI0_CLK:5', 'UART0_RXD:6', 'UART3_nCTS:7', 'I2C2_SDA:8', 'SD0_nCD:9', 'BPWM2_CH4:10', 'EPWM1_CH3:11', 'QSPI0_CLK:12', 'TM3_EXT:13', 'EBI_AD11:14', 'SPI0_I2SMCLK:15', 'LLSI3_OUT:16'] },
    { f: ['PB.13:0', 'EADC0_CH13:1', 'ACMP0_P3:1', 'ACMP1_P3:1', 'EBI_AD14:2', 'SPI0_MISO:4', 'USCI0_DAT0:5', 'UART0_TXD:6', 'UART3_nRTS:7', 'I2C2_SCL:8', 'CLKO:9', 'BPWM2_CH3:10', 'EPWM1_CH2:11', 'USCI0_CTL0:12', 'TM2_EXT:13', 'HSUSB_VBUS_ST:15', 'LLSI2_OUT:16'] },
    { f: ['PB.14:0', 'EADC0_CH14:1', 'EBI_AD13:2', 'SPI0_CLK:4', 'USCI0_DAT1:5', 'UART0_nRTS:6', 'UART3_RXD:7', 'I2C2_SMBSUS:8', 'EPWM1_CH1:11', 'BPWM2_CH2:12', 'TM1_EXT:13', 'CLKO:14', 'LLSI1_OUT:16'] },
    { f: ['PB.15:0', 'EADC0_CH15:1', 'EBI_AD12:2', 'SPI0_SS:4', 'USCI0_CTL1:5', 'UART0_nCTS:6', 'UART3_TXD:7', 'I2C2_SMBAL:8', 'EPWM0_BRAKE1:10', 'EPWM1_CH0:11', 'BPWM2_CH1:12', 'TM0_EXT:13', 'HSUSB_VBUS_EN:15', 'LLSI0_OUT:16'] },

    { f: ['PC.0:0', 'EBI_AD0:2', 'QSPI0_MOSI0:4', 'I2S0_LRCK:6', 'SPI1_SS:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'BPWM4_CH5:11', 'EPWM1_CH5:12', 'ACMP1_O:14', 'LLSI9_OUT:16'] },
    { f: ['PC.1:0', 'EBI_AD1:2', 'QSPI0_MISO0:4', 'I2S0_DO:6', 'SPI1_CLK:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'BPWM4_CH4:11', 'EPWM1_CH4:12', 'ELLSI0_OUT:13', 'ACMP0_O:14', 'EADC0_ST:15', 'LLSI8_OUT:16'] },
    { f: ['PC.2:0', 'EBI_AD2:2', 'QSPI0_CLK:4', 'I2S0_DI:6', 'SPI1_MOSI:7', 'UART2_nCTS:8', 'I2C0_SMBSUS:9', 'CANFD1_RXD:10', 'UART3_RXD:11', 'EPWM1_CH3:12', 'LLSI7_OUT:13', 'BPWM4_CH3:14', 'LLSI3_OUT:16'] },
    { f: ['PC.3:0', 'EBI_AD3:2', 'QSPI0_SS:4', 'CANFD1_TXH:5', 'I2S0_MCLK:6', 'SPI1_MISO:7', 'UART2_nRTS:8', 'I2C0_SMBAL:9', 'CANFD1_TXD:10', 'UART3_TXD:11', 'EPWM1_CH2:12', 'BPWM4_CH2:14', 'LLSI2_OUT:16'] },
    { f: ['PC.4:0', 'EBI_AD4:2', 'QSPI0_MOSI1:4', 'CANFD1_TXL:5', 'I2S0_BCLK:6', 'SPI1_I2SMCLK:7', 'UART2_RXD:8', 'I2C1_SDA:9', 'CANFD0_RXD:10', 'UART4_RXD:11', 'EPWM1_CH1:12', 'BPWM4_CH1:14', 'LLSI1_OUT:16'] },
    { f: ['PC.5:0', 'EBI_AD5:2', 'QSPI0_MISO1:4', 'CANFD0_TXH:7', 'UART2_TXD:8', 'I2C1_SCL:9', 'CANFD0_TXD:10', 'UART4_TXD:11', 'EPWM1_CH0:12', 'BPWM4_CH0:14', 'I3C0_PUPEN:15', 'LLSI0_OUT:16'] },
    { f: ['PC.6:0', 'EBI_AD8:2', 'SPI1_MOSI:4', 'UART4_RXD:5', 'UART0_nRTS:7', 'I2C1_SMBSUS:8', 'EPWM1_CH3:11', 'BPWM1_CH1:12', 'TM1:14', 'INT2:15'] },
    { f: ['PC.7:0', 'EBI_AD9:2', 'SPI1_MISO:4', 'UART4_TXD:5', 'UART0_nCTS:7', 'I2C1_SMBAL:8', 'EPWM1_CH2:11', 'BPWM1_CH0:12', 'TM0:14', 'INT3:15'] },
    { f: ['PC.8:0', 'EBI_ADR16:2', 'I2C0_SDA:4', 'UART4_nCTS:5', 'UART1_RXD:8', 'EPWM1_CH1:11', 'BPWM1_CH4:12'] },
    { f: ['PC.9:0', 'EBI_ADR7:2', 'UART3_RXD:7', 'CANFD1_RXD:9', 'EPWM1_CH3:12', 'I3C0_PUPEN:15'] },
    { f: ['PC.10:0', 'EBI_ADR6:2', 'UART3_TXD:7', 'CANFD1_TXD:9', 'CANFD1_TXH:10', 'EPWM1_CH2:12'] },
    { f: ['PC.11:0', 'EBI_ADR5:2', 'UART0_RXD:3', 'I2C0_SDA:4', 'CANFD1_TXL:10', 'EPWM1_CH1:12', 'ACMP1_O:14'] },
    { f: ['PC.12:0', 'EBI_ADR4:2', 'UART0_TXD:3', 'I2C0_SCL:4', 'EPWM1_CH0:12', 'ACMP0_O:14'] },
    { f: ['PC.13:0', 'EBI_ADR10:2', 'SPI2_I2SMCLK:4', 'CANFD1_TXD:5', 'USCI0_CTL0:6', 'UART2_TXD:7', 'CANFD1_TXH:8', 'BPWM0_CH4:9', 'BPWM2_CH0:12', 'CLKO:13', 'EADC0_ST:14'] },
    { f: ['PC.14:0', 'EBI_AD11:2', 'SPI0_I2SMCLK:4', 'USCI0_CTL0:5', 'QSPI0_CLK:6', 'TRACE_SWO:10', 'EPWM0_SYNC_IN:11', 'BPWM2_CH0:12', 'TM1:13', 'HSUSB_VBUS_ST:15'] },
    { f: ['PC.15:0'] },

    { f: ['PD.0:0', 'EBI_AD13:2', 'USCI0_CLK:3', 'SPI0_MOSI:4', 'UART3_RXD:5', 'I2C2_SDA:6', 'TM2:14'] },
    { f: ['PD.1:0', 'EBI_AD12:2', 'USCI0_DAT0:3', 'SPI0_MISO:4', 'UART3_TXD:5', 'I2C2_SCL:6'] },
    { f: ['PD.2:0', 'EBI_AD11:2', 'USCI0_DAT1:3', 'SPI0_CLK:4', 'UART3_nCTS:5', 'UART0_RXD:9', 'BPWM4_CH5:13'] },
    { f: ['PD.3:0', 'EBI_AD10:2', 'USCI0_CTL1:3', 'SPI0_SS:4', 'UART3_nRTS:5', 'USCI1_CTL0:6', 'UART0_TXD:9', 'BPWM4_CH4:13'] },
    { f: ['PD.4:0', 'EBI_AD5:2', 'USCI0_CTL0:3', 'I2C1_SDA:4', 'SPI1_SS:5', 'USCI1_CTL1:6', 'BPWM4_CH3:13'] },
    { f: ['PD.5:0', 'EBI_AD15:2', 'I2C1_SCL:4', 'SPI1_CLK:5', 'USCI1_DAT0:6', 'BPWM4_CH2:13', 'EADC0_ST:15'] },
    { f: ['PD.6:0', 'UART1_RXD:3', 'I2C0_SDA:4', 'SPI1_MOSI:5', 'USCI1_DAT1:6', 'BPWM4_CH1:13'] },
    { f: ['PD.7:0', 'UART1_TXD:3', 'I2C0_SCL:4', 'SPI1_MISO:5', 'USCI1_CLK:6', 'BPWM4_CH0:13'] },
    { f: ['PD.8:0', 'EBI_AD6:2', 'I2C2_SDA:3', 'UART2_nRTS:4', 'CANFD0_TXL:7', 'BPWM3_CH3:14'] },
    { f: ['PD.9:0', 'EBI_AD7:2', 'I2C2_SCL:3', 'UART2_nCTS:4', 'BPWM3_CH2:14'] },
    { f: ['PD.10:0', 'EBI_nCS2:2', 'UART1_RXD:3', 'CANFD0_RXD:4', 'EQEI0_B:10', 'BPWM2_CH3:12', 'INT7:15'] },
    { f: ['PD.11:0', 'EBI_nCS1:2', 'UART1_TXD:3', 'CANFD0_TXD:4', 'CANFD0_TXH:8', 'EQEI0_A:10', 'BPWM2_CH2:12', 'INT6:15'] },
    { f: ['PD.12:0', 'EBI_nCS0:2', 'CANFD1_RXD:5', 'UART2_RXD:7', 'CANFD0_TXL:8', 'BPWM0_CH5:9', 'EQEI0_INDEX:10', 'BPWM2_CH1:12', 'CLKO:13', 'EADC0_ST:14', 'INT5:15'] },
    { f: ['PD.13:0', 'EBI_AD10:2', 'SD0_nCD:3', 'SPI0_I2SMCLK:4', 'SPI1_I2SMCLK:5', 'CANFD0_TXL:7', 'BPWM0_CH0:11', 'CLKO:14', 'EADC0_ST:15'] },
    { f: ['PD.14:0', 'EBI_nCS0:2', 'SPI0_I2SMCLK:5', 'EPWM0_CH4:11'] },
    { f: ['PD.15:0'] },

    { f: ['PE.0:0', 'EBI_AD11:2', 'QSPI0_MOSI0:3', 'I2S0_MCLK:5', 'SPI1_MOSI:6', 'UART3_RXD:7', 'I2C1_SDA:8', 'UART4_nRTS:9', 'BPWM3_CH1:13'] },
    { f: ['PE.1:0', 'EBI_AD10:2', 'QSPI0_MISO0:3', 'I2S0_BCLK:5', 'SPI1_MISO:6', 'UART3_TXD:7', 'I2C1_SCL:8', 'UART4_nCTS:9', 'BPWM3_CH0:13'] },
    { f: ['PE.2:0', 'EBI_ALE:2', 'SD0_DAT0:3', 'USCI0_CLK:7', 'EQEI0_B:11', 'EPWM0_CH5:12', 'BPWM0_CH0:13', 'I2S0_MCLK:14'] },
    { f: ['PE.3:0', 'EBI_MCLK:2', 'SD0_DAT1:3', 'USCI0_DAT0:7', 'EQEI0_A:11', 'EPWM0_CH4:12', 'BPWM0_CH1:13', 'I2S0_BCLK:14'] },
    { f: ['PE.4:0', 'EBI_nWR:2', 'SD0_DAT2:3', 'USCI0_DAT1:7', 'EQEI0_INDEX:11', 'EPWM0_CH3:12', 'BPWM0_CH2:13', 'SPI1_MOSI:15'] },
    { f: ['PE.5:0', 'EBI_nRD:2', 'SD0_DAT3:3', 'USCI0_CTL1:7', 'CANFD1_TXL:8', 'EPWM0_CH2:12', 'BPWM0_CH3:13', 'SPI1_MISO:15'] },
    { f: ['PE.6:0', 'EBI_AD11:2', 'SD0_CLK:3', 'USCI0_CTL0:7', 'CANFD1_RXD:9', 'EPWM0_CH1:12', 'BPWM0_CH4:13', 'QSPI0_MOSI0:15'] },
    { f: ['PE.7:0', 'EBI_AD10:2', 'SD0_CMD:3', 'CANFD1_TXH:8', 'CANFD1_TXD:9', 'EPWM0_CH0:12', 'BPWM0_CH5:13', 'QSPI0_MISO0:15'] },
    { f: ['PE.8:0', 'EBI_ADR10:2', 'I2S0_BCLK:4', 'SPI2_CLK:5', 'USCI1_CTL1:6', 'UART2_TXD:7', 'EPWM0_CH0:10', 'EPWM0_BRAKE0:11', 'ECAP0_IC0:12', 'BPWM4_CH0:13'] },
    { f: ['PE.9:0', 'EBI_ADR11:2', 'I2S0_MCLK:4', 'SPI2_MISO:5', 'USCI1_CTL0:6', 'UART2_RXD:7', 'EPWM0_CH1:10', 'EPWM0_BRAKE1:11', 'ECAP0_IC1:12', 'BPWM4_CH1:13'] },
    { f: ['PE.10:0', 'EBI_ADR12:2', 'I2S0_DI:4', 'SPI2_MOSI:5', 'USCI1_DAT0:6', 'UART3_TXD:7', 'EPWM0_CH2:10', 'EPWM1_BRAKE0:11', 'ECAP0_IC2:12', 'BPWM4_CH2:13'] },
    { f: ['PE.11:0', 'EBI_ADR13:2', 'I2S0_DO:4', 'SPI2_SS:5', 'USCI1_DAT1:6', 'UART3_RXD:7', 'UART1_nCTS:8', 'EPWM0_CH3:10', 'EPWM1_BRAKE1:11', 'BPWM4_CH3:13'] },
    { f: ['PE.12:0', 'EBI_ADR14:2', 'I2S0_LRCK:4', 'SPI2_I2SMCLK:5', 'USCI1_CLK:6', 'UART1_nRTS:8', 'EPWM0_CH4:10', 'BPWM4_CH4:13'] },
    { f: ['PE.13:0', 'EBI_ADR15:2', 'I2C0_SCL:4', 'UART4_nRTS:5', 'UART1_TXD:8', 'EPWM0_CH5:10', 'EPWM1_CH0:11', 'BPWM1_CH5:12', 'BPWM4_CH5:13', 'TRACE_SWO:14'] },
    { f: ['PE.14:0', 'EBI_AD8:2', 'UART2_TXD:3', 'CANFD0_TXD:4', 'UART3_TXD:7', 'I2C1_SCL:8', 'UART4_nCTS:9', 'BPWM3_CH0:12', 'BPWM5_CH0:13'] },
    { f: ['PE.15:0', 'EBI_AD9:2', 'UART2_RXD:3', 'CANFD0_RXD:4', 'UART3_RXD:7', 'I2C1_SDA:8', 'UART4_nRTS:9', 'BPWM3_CH1:12', 'BPWM5_CH1:13'] },

    { f: ['PF.0:0', 'UART1_TXD:2', 'I2C1_SCL:3', 'UART0_TXD:4', 'I2S0_DO:6', 'USCI0_CTL1:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'I3C0_SCL:10', 'EPWM1_CH4:11', 'BPWM5_CH0:12', 'ACMP0_O:13', 'ICE_DAT:14', 'EADC0_ST:15'] },
    { f: ['PF.1:0', 'UART1_RXD:2', 'I2C1_SDA:3', 'UART0_RXD:4', 'I2S0_LRCK:6', 'USCI0_DAT1:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'I3C0_SDA:10', 'EPWM1_CH5:11', 'BPWM5_CH1:12', 'ACMP1_O:13', 'ICE_CLK:14'] },
    { f: ['PF.2:0', 'EBI_nCS1:2', 'UART0_RXD:3', 'I2C0_SDA:4', 'QSPI0_CLK:5', 'I2C2_SMBSUS:8', 'EPWM1_CH1:9', 'XT1_OUT:10', 'BPWM1_CH1:11', 'BPWM5_CH5:12', 'TM1_EXT:15'] },
    { f: ['PF.3:0', 'EBI_nCS0:2', 'UART0_TXD:3', 'I2C0_SCL:4', 'I2C2_SMBAL:8', 'EPWM1_CH0:9', 'XT1_IN:10', 'BPWM1_CH0:11', 'BPWM5_CH4:12', 'TM0_EXT:15'] },
    { f: ['PF.4:0', 'UART2_TXD:2', 'EBI_AD0:3', 'UART2_nRTS:4', 'UART0_nRTS:5', 'UART3_RXD:6', 'EPWM0_CH1:7', 'BPWM0_CH5:8', 'X32_OUT:10'] },
    { f: ['PF.5:0', 'UART2_RXD:2', 'EBI_AD1:3', 'UART2_nCTS:4', 'UART0_nCTS:5', 'UART3_TXD:6', 'EPWM0_CH0:7', 'BPWM0_CH4:8', 'EPWM0_SYNC_OUT:9', 'X32_IN:10', 'EADC0_ST:11'] },
    { f: ['PF.6:0', 'EBI_ADR19:2', 'I2S0_LRCK:4', 'SPI0_MOSI:5', 'UART4_RXD:6', 'EBI_nCS0:7', 'BPWM3_CH4:12', 'TRACE_SWO:14'] },
    { f: ['PF.7:0', 'EBI_ADR18:2', 'I2S0_DO:4', 'SPI0_MISO:5', 'UART4_TXD:6', 'BPWM4_CH5:12'] },
    { f: ['PF.8:0', 'EBI_ADR17:2', 'I2S0_DI:4', 'SPI0_CLK:5', 'CANFD1_RXD:8', 'BPWM4_CH4:12'] },
    { f: ['PF.9:0', 'EBI_ADR16:2', 'I2S0_MCLK:4', 'SPI0_SS:5', 'CANFD1_TXD:8', 'CANFD1_TXH:9', 'BPWM4_CH3:12'] },
    { f: ['PF.10:0', 'EBI_ADR15:2', 'I2S0_BCLK:4', 'SPI0_I2SMCLK:5', 'CANFD1_TXL:9', 'BPWM4_CH2:12'] },
    { f: ['PF.11:0', 'EBI_ADR14:2', 'SPI2_MOSI:3', 'BPWM4_CH1:12', 'TM3:13'] },
    { f: ['PF.12:0'] },
    { f: ['PF.13:0'] },
    { f: ['PF.14:0', 'BPWM3_CH5:12', 'LLSI3_OUT:16'] },
    { f: ['PF.15:0', 'BPWM3_CH5:12'] },

    { f: ['PG.0:0'] },
    { f: ['PG.1:0'] },
    { f: ['PG.2:0', 'EBI_ADR11:2', 'SPI2_SS:3', 'I2C0_SMBAL:4', 'I2C1_SCL:5', 'BPWM2_CH4:12', 'TM0:13'] },
    { f: ['PG.3:0', 'EBI_ADR12:2', 'SPI2_CLK:3', 'I2C0_SMBSUS:4', 'I2C1_SDA:5', 'BPWM2_CH5:12', 'TM1:13'] },
    { f: ['PG.4:0', 'EBI_ADR13:2', 'SPI2_MISO:3', 'BPWM4_CH0:12', 'TM2:13'] },
    { f: ['PG.5:0'] },
    { f: ['PG.6:0'] },
    { f: ['PG.7:0'] },
    { f: ['PG.8:0'] },
    { f: ['PG.9:0', 'EBI_AD0:2', 'BPWM0_CH5:12', 'BPWM5_CH5:13'] },
    { f: ['PG.10:0', 'EBI_AD1:2', 'BPWM0_CH4:12', 'BPWM5_CH4:13'] },
    { f: ['PG.11:0', 'EBI_AD2:2', 'BPWM0_CH3:12', 'BPWM5_CH3:13'] },
    { f: ['PG.12:0', 'EBI_AD3:2', 'BPWM0_CH2:12', 'BPWM5_CH2:13'] },
    { f: ['PG.13:0', 'EBI_AD4:2', 'BPWM0_CH1:12', 'BPWM3_CH4:13'] },
    { f: ['PG.14:0', 'EBI_AD5:2', 'BPWM0_CH0:12', 'BPWM3_CH5:13', 'ACMP0_O:14', 'EADC0_ST:15'] },
    { f: ['PG.15:0', 'ACMP1_O:14'] },

    { f: ['PH.0:0'] },
    { f: ['PH.1:0'] },
    { f: ['PH.2:0'] },
    { f: ['PH.3:0'] },
    { f: ['PH.4:0', 'EBI_ADR3:2', 'SPI1_MISO:3', 'EPWM0_CH5:11', 'BPWM5_CH0:12'] },
    { f: ['PH.5:0', 'EBI_ADR2:2', 'SPI1_MOSI:3', 'EPWM0_CH4:11', 'BPWM5_CH1:12'] },
    { f: ['PH.6:0', 'EBI_ADR1:2', 'SPI1_CLK:3', 'BPWM5_CH2:12'] },
    { f: ['PH.7:0', 'EBI_ADR0:2', 'SPI1_SS:3', 'BPWM5_CH3:12'] },
    { f: ['PH.8:0', 'EBI_AD12:2', 'QSPI0_CLK:3', 'I2S0_DI:5', 'SPI1_CLK:6', 'UART3_nRTS:7', 'I2C1_SMBAL:8', 'I2C2_SCL:9', 'UART1_TXD:10', 'BPWM3_CH2:13', 'I3C0_SCL:15'] },
    { f: ['PH.9:0', 'EBI_AD13:2', 'QSPI0_SS:3', 'I2S0_DO:5', 'SPI1_SS:6', 'UART3_nCTS:7', 'I2C1_SMBSUS:8', 'I2C2_SDA:9', 'UART1_RXD:10', 'BPWM3_CH3:13', 'I3C0_SDA:15'] },
    { f: ['PH.10:0', 'EBI_AD14:2', 'QSPI0_MISO1:3', 'I2S0_LRCK:5', 'SPI1_I2SMCLK:6', 'UART4_TXD:7', 'UART0_TXD:8', 'BPWM3_CH4:13', 'I3C0_PUPEN:15'] },
    { f: ['PH.11:0', 'EBI_AD15:2', 'QSPI0_MOSI1:3', 'UART4_RXD:7', 'UART0_RXD:8', 'EPWM0_CH5:11', 'BPWM3_CH5:13'] },
    { f: ['PH.12:0'] },
    { f: ['PH.13:0'] },
    { f: ['PH.14:0'] },
    { f: ['PH.15:0'] }
];

NUTOOL_PIN.g_cfg_wppin = {
    "QFN33": [
        'PB.2'
    ],
    "QFN33(USB2.0)": [
        'PB.2'
    ],
    "QFN48": [
        'PB.2', 'PA.6', 'PC.14'
    ],
    "LQFP48": [
        'PB.2', 'PA.6', 'PC.14'
    ],
    "QFN48(USB2.0)": [
        'PB.2', 'PA.6', 'PC.14'
    ],
    "LQFP48(USB2.0)": [
        'PB.2', 'PA.6', 'PC.14'
    ],
    "LQFP64": [
        'PB.2', 'PA.6', 'PC.14'
    ],
    "LQFP64(USB2.0)": [
        'PB.2', 'PA.6', 'PC.14'
    ],
    "LQFP128": [
        'PB.2', 'PA.6', 'PD.13', 'PC.14'
    ],
    "LQFP128(USB2.0)": [
        'PB.2', 'PA.6', 'PD.13', 'PC.14'
    ],
};

NUTOOL_PIN.g_cfg_wppin_comment = {
    "PB.2": ['Can change function to  Write_Protect_Pin by chip configuration'],
    "PA.6": ['Can change function to  Write_Protect_Pin by chip configuration'],
    "PC.14": ['Can change function to  Write_Protect_Pin by chip configuration'],
    "PD.13": ['Can change function to  Write_Protect_Pin by chip configuration'],
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'M3334YIGAE(QFN48(USB2.0))': {
        'ALL': ['EBI']
    },
    'M3334LIGAE(LQFP48(USB2.0))': {
        'ALL': ['EBI']
    },
    'M3334SIGAE(LQFP64(USB2.0))': {
        'ALL': []
    },
    'M3334KIGAE(LQFP128(USB2.0))': {
        'ALL': []
    },
    'M3333YIGAE(QFN48)': {
        'ALL': []
    },
    'M3333LIGAE(LQFP48)': {
        'ALL': []
    },
    'M3333SIGAE(LQFP64)': {
        'ALL': []
    },
    'M3333TIGAE(QFN33)': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'CANFD1']
    },
    'M3334TIGAE(QFN33(USB2.0))': {
        'ALL': ['EBI', 'SD0', 'EQEI0', 'ECAP0', 'CANFD0', 'CANFD1']
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
}

NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
];

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP0 = '0x40000500';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP1 = '0x40000504';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP2 = '0x40000508';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP3 = '0x4000050C';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP0 = '0x40000510';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP1 = '0x40000514';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP2 = '0x40000518';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP3 = '0x4000051C';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP0 = '0x40000520';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP1 = '0x40000524';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP2 = '0x40000528';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP3 = '0x4000052C';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFP0 = '0x40000530';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFP1 = '0x40000534';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFP2 = '0x40000538';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFP3 = '0x4000053C';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP0 = '0x40000540';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP1 = '0x40000544';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP2 = '0x40000548';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP3 = '0x4000054C';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP0 = '0x40000550';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP1 = '0x40000554';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP2 = '0x40000558';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP3 = '0x4000055C';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFP0 = '0x40000560';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFP1 = '0x40000564';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFP2 = '0x40000568';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFP3 = '0x4000056C';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFP0 = '0x40000570';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFP1 = '0x40000574';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFP2 = '0x40000578';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFP3 = '0x4000057C';

NUTOOL_PIN.g_cfg_gpioMatrix = [];
NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};

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
