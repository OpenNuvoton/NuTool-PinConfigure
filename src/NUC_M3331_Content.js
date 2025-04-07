NUTOOL_PIN.g_cfg_chips = [
    { name: "M3331KIGAE", pkg: "LQFP128" },
    { name: "CM3031HS8E", pkg: "LQFP128" },
    { name: "M3331LIGAE", pkg: "LQFP48" },
    { name: "CM3031HL8E", pkg: "LQFP48" },
    { name: "M3331SIGAE", pkg: "LQFP64" },
    { name: "CM3031HN8E", pkg: "LQFP64" },
    { name: "M3331TIGAE", pkg: "QFN33" },
    { name: "CM3031HJ3E", pkg: "QFN33" },
    { name: "M3333KIGAE", pkg: "LQFP128" },
    { name: "CM3033HS8E", pkg: "LQFP128" },
    { name: "M3333LIGAE", pkg: "LQFP48" },
    { name: "CM3033HL8E", pkg: "LQFP48" },
    { name: "M3333SIGAE", pkg: "LQFP64" },
    { name: "CM3033HN8E", pkg: "LQFP64" },
    { name: "M3334KIGAE", pkg: "LQFP128" },
    { name: "CM3034HS8E", pkg: "LQFP128(USB2.0)" },
    { name: "M3334LIGAE", pkg: "LQFP48" },
    { name: "CM3034HL8E", pkg: "LQFP48(USB2.0)" },
    { name: "M3334SIGAE", pkg: "LQFP64" },
    { name: "CM3034HN8E", pkg: "LQFP64(USB2.0)" },
    { name: "M3334TIGAE", pkg: "QFN33" },
    { name: "CM3034HJ3E", pkg: "QFN33(USB2.0)" },
    { name: "M3331KGGAE", pkg: "LQFP128" },
    { name: "CM3031GS8E", pkg: "LQFP128" },
    { name: "M3331LGGAE", pkg: "LQFP48" },
    { name: "CM3031GL8E", pkg: "LQFP48" },
    { name: "M3331SGGAE", pkg: "LQFP64" },
    { name: "CM3031GN8E", pkg: "LQFP64" },
    { name: "M3331TGGAE", pkg: "QFN33" },
    { name: "CM3031GJ3E", pkg: "QFN33" },
    { name: "M3333KGGAE", pkg: "LQFP128" },
    { name: "CM3033GS8AE", pkg: "LQFP128" },
    { name: "M3333LGGAE", pkg: "LQFP48" },
    { name: "CM3033GL8AE", pkg: "LQFP48" },
    { name: "M3333SGGAE", pkg: "LQFP64" },
    { name: "CM3033GN8AE", pkg: "LQFP64" },
    { name: "M3334KGGAE", pkg: "LQFP128" },
    { name: "CM3034GS8AE", pkg: "LQFP128" },
    { name: "M3334LGGAE", pkg: "LQFP48" },
    { name: "CM3034GL8AE", pkg: "LQFP48" },
    { name: "M3334SGGAE", pkg: "LQFP64" },
    { name: "CM3034GN8AE", pkg: "LQFP64" },
    { name: "M3334TGGAE", pkg: "QFN33" },
    { name: "CM3034GJ3AE", pkg: "QFN33" },
    { name: "M3331SGAAE", pkg: "LQFP64" },
    { name: "CM3021GN8AE", pkg: "LQFP64" },
    { name: "M3331TGAAE", pkg: "QFN33" },
    { name: "CM3021GJ3AE", pkg: "QFN33" },
    { name: "M3331LGAAE", pkg: "LQFP48" },
    { name: "CM3021GL8AE", pkg: "LQFP48" },
    { name: "M3333SGAAE", pkg: "LQFP64" },
    { name: "CM3023GN8AE", pkg: "LQFP64" },
    { name: "M3333LGAAE", pkg: "LQFP48" },
    { name: "CM3023GL8AE", pkg: "LQFP48" },
    { name: "M3334SGAAE", pkg: "LQFP64" },
    { name: "CM3024GN8AE", pkg: "LQFP64" },
    { name: "M3334TGAAE", pkg: "QFN33" },
    { name: "CM3024GJ3AE", pkg: "QFN33" },
    { name: "M3334LGAAE", pkg: "LQFP48" },
    { name: "CM3024GL8AE", pkg: "LQFP48" }
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
    { f: ['PA.0:0', 'QSPI0_MOSI0:3', 'SPI0_MOSI:4', 'BMC_CH19:6', 'UART0_RXD:7', 'UART1_nRTS:8', 'I2C2_SDA:9', 'I3C0_SDA:11', 'BPWM0_CH0:12', 'EPWM0_CH5:13', 'LLSI7_OUT:16']},
    { f: ['PA.1:0', 'QSPI0_MISO0:3', 'SPI0_MISO:4', 'BMC_CH18:6', 'UART0_TXD:7', 'UART1_nCTS:8', 'I2C2_SCL:9', 'I3C0_SCL:11', 'BPWM0_CH1:12', 'EPWM0_CH4:13', 'LLSI6_OUT:16']},
    { f: ['PA.2:0', 'QSPI0_CLK:3', 'SPI0_CLK:4', 'BMC_CH17:6', 'UART4_RXD:7', 'UART1_RXD:8', 'I2C1_SDA:9', 'I2C0_SMBSUS:10', 'BPWM0_CH2:12', 'EPWM0_CH3:13', 'I3C0_PUPEN:15', 'LLSI5_OUT:16']},
    { f: ['PA.3:0', 'QSPI0_SS:3', 'SPI0_SS:4', 'BMC_CH16:6', 'UART4_TXD:7', 'UART1_TXD:8', 'I2C1_SCL:9', 'I2C0_SMBAL:10', 'BPWM0_CH3:12', 'EPWM0_CH2:13', 'EQEI0_B:14', 'EPWM1_BRAKE1:15', 'LLSI4_OUT:16']},
    { f: ['PA.4:0', 'QSPI0_MOSI1:3', 'SPI0_I2SMCLK:4', 'UART0_nRTS:7', 'EBI_AD1:8', 'I2C0_SDA:9', 'CANFD0_RXD:10', 'UART0_RXD:11', 'BPWM0_CH4:12', 'EPWM0_CH1:13', 'EQEI0_A:14', 'I3C0_SDA:15']},
    { f: ['PA.5:0', 'QSPI0_MISO1:3', 'SPI1_I2SMCLK:4', 'CANFD0_TXH:6', 'UART0_nCTS:7', 'EBI_AD0:8', 'I2C0_SCL:9', 'CANFD0_TXD:10', 'UART0_TXD:11', 'BPWM0_CH5:12', 'EPWM0_CH0:13', 'EQEI0_INDEX:14', 'I3C0_SCL:15']},
    { f: ['PA.6:0', 'EBI_AD6:2', 'SPI1_SS:4', 'CANFD0_TXL:6', 'UART0_RXD:7', 'I2C1_SDA:8', 'BMC_CH15:10', 'EPWM1_CH5:11', 'BPWM1_CH3:12', 'ACMP1_WLAT:13', 'TM3:14', 'INT0:15']},
    { f: ['PA.7:0', 'EBI_AD7:2', 'SPI1_CLK:4', 'UART0_TXD:7', 'I2C1_SCL:8', 'BMC_CH14:10', 'EPWM1_CH4:11', 'BPWM1_CH2:12', 'ACMP0_WLAT:13', 'TM2:14', 'INT1:15', 'ELLSI0_OUT:16']},
    { f: ['PA.8:0', 'EBI_ALE:2', 'SPI2_MOSI:4', 'USCI0_CTL1:6', 'UART1_RXD:7', 'CANFD1_TXL:8', 'BPWM0_CH3:9', 'ECAP0_IC2:11', 'BPWM3_CH3:12', 'TM3_EXT:13', 'INT4:15', 'BMC_CH9:16']},
    { f: ['PA.9:0', 'EBI_MCLK:2', 'SPI2_MISO:4', 'USCI0_DAT1:6', 'UART1_TXD:7', 'BPWM0_CH2:9', 'ECAP0_IC1:11', 'BPWM3_CH2:12', 'TM2_EXT:13', 'BMC_CH8:16']},
    { f: ['PA.10:0', 'ACMP1_P0:1', 'EBI_nWR:2', 'SPI2_CLK:4', 'USCI0_DAT0:6', 'I2C2_SDA:7', 'BPWM0_CH1:9', 'ECAP0_IC0:11', 'BPWM3_CH1:12', 'TM1_EXT:13', 'BMC_CH7:16']},
    { f: ['PA.11:0', 'ACMP0_P0:1', 'EBI_nRD:2', 'SPI2_SS:4', 'USCI0_CLK:6', 'I2C2_SCL:7', 'BPWM0_CH0:9', 'EPWM0_SYNC_OUT:10', 'EPWM0_BRAKE1:11', 'BPWM3_CH0:12', 'TM0_EXT:13', 'BMC_CH6:16']},
    { f: ['PA.12:0', 'I2S0_BCLK:2', 'UART4_TXD:3', 'I2C1_SCL:4', 'SPI2_SS:5', 'CANFD0_TXD:6', 'CANFD0_TXH:7', 'BPWM1_CH2:11', 'BPWM2_CH3:13', 'BMC_CH12:16']},
    { f: ['PA.13:0', 'I2S0_MCLK:2', 'UART4_RXD:3', 'I2C1_SDA:4', 'SPI2_CLK:5', 'CANFD0_RXD:6', 'BPWM1_CH3:11', 'BPWM2_CH4:13', 'BMC_CH13:16']},
    { f: ['PA.14:0', 'I2S0_DI:2', 'UART0_TXD:3', 'EBI_AD5:4', 'SPI2_MISO:5', 'I2C2_SCL:6', 'BPWM1_CH4:11', 'BPWM2_CH5:13', 'BMC_CH14:16']},
    { f: ['PA.15:0', 'I2S0_DO:2', 'UART0_RXD:3', 'SPI2_MOSI:5', 'I2C2_SDA:6', 'BPWM1_CH5:11', 'EPWM0_SYNC_IN:12', 'BMC_CH15:16']},

    { f: ['PB.0:0', 'EADC0_CH0:1', 'EBI_ADR9:2', 'SD0_CMD:3', 'SPI2_I2SMCLK:4', 'BMC_CH5:5', 'USCI0_CTL0:6', 'UART2_RXD:7', 'SPI0_I2SMCLK:8', 'I2C1_SDA:9', 'EPWM0_CH5:11', 'EPWM1_CH5:12', 'EPWM0_BRAKE1:13', 'I3C0_SDA:14', 'QSPI0_MOSI1:15']},
    { f: ['PB.1:0', 'EADC0_CH1:1', 'EBI_ADR8:2', 'SD0_CLK:3', 'SPI1_I2SMCLK:5', 'BMC_CH4:6', 'UART2_TXD:7', 'USCI1_CLK:8', 'I2C1_SCL:9', 'I2S0_LRCK:10', 'EPWM0_CH4:11', 'EPWM1_CH4:12', 'EPWM0_BRAKE0:13', 'I3C0_SCL:14', 'QSPI0_MISO1:15', 'ELLSI0_OUT:16']},
    { f: ['PB.2:0', 'EADC0_CH2:1', 'ACMP0_P1:1', 'EBI_ADR3:2', 'SD0_DAT0:3', 'SPI1_SS:5', 'UART1_RXD:6', 'USCI1_DAT0:8', 'I2S0_DO:10', 'EPWM0_CH3:11', 'I2C1_SDA:12', 'BMC_CH3:13', 'TM3:14', 'INT3:15', 'LLSI7_OUT:16']},
    { f: ['PB.3:0', 'EADC0_CH3:1', 'ACMP0_N:1', 'EBI_ADR2:2', 'SD0_DAT1:3', 'SPI1_CLK:5', 'UART1_TXD:6', 'USCI1_DAT1:8', 'I2S0_DI:10', 'EPWM0_CH2:11', 'I2C1_SCL:12', 'BMC_CH2:13', 'TM2:14', 'INT2:15', 'LLSI6_OUT:16']},
    { f: ['PB.4:0', 'EADC0_CH4:1', 'ACMP1_P1:1', 'EBI_ADR1:2', 'SD0_DAT2:3', 'SPI1_MOSI:5', 'I2C0_SDA:6', 'USCI1_CTL1:8', 'I2S0_MCLK:10', 'EPWM0_CH1:11', 'UART2_RXD:12', 'BMC_CH1:13', 'TM1:14', 'INT1:15', 'LLSI5_OUT:16']},
    { f: ['PB.5:0', 'EADC0_CH5:1', 'ACMP1_N:1', 'EBI_ADR0:2', 'SD0_DAT3:3', 'SPI1_MISO:5', 'I2C0_SCL:6', 'USCI1_CTL0:8', 'I2S0_BCLK:10', 'EPWM0_CH0:11', 'UART2_TXD:12', 'BMC_CH0:13', 'TM0:14', 'INT0:15', 'LLSI4_OUT:16']},
    { f: ['PB.6:0', 'EADC0_CH6:1', 'EBI_nWRH:2', 'EPWM0_SYNC_IN:3', 'USCI1_DAT1:4', 'CANFD1_RXD:5', 'UART1_RXD:6', 'HSUSB_VBUS_EN:7', 'EBI_nCS1:8', 'SPI0_CLK:9', 'BPWM1_CH5:10', 'EPWM1_BRAKE1:11', 'EPWM1_CH5:12', 'INT4:13', 'BMC_CH31:14', 'ACMP1_O:15', 'TM1:16']},
    { f: ['PB.7:0', 'EADC0_CH7:1', 'EBI_nWRL:2', 'CANFD1_TXH:3', 'USCI1_DAT0:4', 'CANFD1_TXD:5', 'UART1_TXD:6', 'HSUSB_VBUS_ST:7', 'EBI_nCS0:8', 'SPI0_SS:9', 'BPWM1_CH4:10', 'EPWM1_BRAKE0:11', 'EPWM1_CH4:12', 'INT5:13', 'BMC_CH30:14', 'ACMP0_O:15']},
    { f: ['PB.8:0', 'EADC0_CH8:1', 'EBI_ADR19:2', 'CANFD1_TXL:3', 'USCI1_CLK:4', 'UART0_RXD:5', 'UART1_nRTS:6', 'I2C1_SMBSUS:7', 'I2C0_SDA:9', 'BPWM1_CH3:10', 'INT6:13', 'BMC_CH23:15']},
    { f: ['PB.9:0', 'EADC0_CH9:1', 'EBI_ADR18:2', 'USCI1_CTL1:4', 'UART0_TXD:5', 'UART1_nCTS:6', 'I2C1_SMBAL:7', 'I2C0_SCL:9', 'BPWM1_CH2:10', 'INT7:13', 'BMC_CH22:15', 'ELLSI0_OUT:16']},
    { f: ['PB.10:0', 'EADC0_CH10:1', 'EBI_ADR17:2', 'USCI1_CTL0:4', 'UART0_nRTS:5', 'UART4_RXD:6', 'I2C1_SDA:7', 'CANFD0_RXD:8', 'BPWM1_CH1:10', 'HSUSB_VBUS_EN:14', 'BMC_CH21:15', 'LLSI9_OUT:16']},
    { f: ['PB.11:0', 'EADC0_CH11:1', 'EBI_ADR16:2', 'CANFD0_TXH:4', 'UART0_nCTS:5', 'UART4_TXD:6', 'I2C1_SCL:7', 'CANFD0_TXD:8', 'SPI0_I2SMCLK:9', 'BPWM1_CH0:10', 'HSUSB_VBUS_ST:14', 'BMC_CH20:15', 'LLSI8_OUT:16']},
    { f: ['PB.12:0', 'EADC0_CH12:1', 'ACMP0_P2:1', 'ACMP1_P2:1', 'EBI_AD15:2', 'CANFD0_TXL:3', 'SPI0_MOSI:4', 'USCI0_CLK:5', 'UART0_RXD:6', 'UART3_nCTS:7', 'I2C2_SDA:8', 'SD0_nCD:9', 'BPWM2_CH4:10', 'EPWM1_CH3:11', 'QSPI0_CLK:12', 'TM3_EXT:13', 'EBI_AD11:14', 'SPI0_I2SMCLK:15', 'LLSI3_OUT:16']},
    { f: ['PB.13:0', 'EADC0_CH13:1', 'ACMP0_P3:1', 'ACMP1_P3:1', 'EBI_AD14:2', 'SPI0_MISO:4', 'USCI0_DAT0:5', 'UART0_TXD:6', 'UART3_nRTS:7', 'I2C2_SCL:8', 'CLKO:9', 'BPWM2_CH3:10', 'EPWM1_CH2:11', 'USCI0_CTL0:12', 'TM2_EXT:13', 'BMC_CH28:14', 'HSUSB_VBUS_ST:15', 'LLSI2_OUT:16']},
    { f: ['PB.14:0', 'EADC0_CH14:1', 'EBI_AD13:2', 'SPI0_CLK:4', 'USCI0_DAT1:5', 'UART0_nRTS:6', 'UART3_RXD:7', 'I2C2_SMBSUS:8', 'EPWM1_CH1:11', 'BPWM2_CH2:12', 'TM1_EXT:13', 'CLKO:14', 'BMC_CH29:15', 'LLSI1_OUT:16']},
    { f: ['PB.15:0', 'EADC0_CH15:1', 'EBI_AD12:2', 'SPI0_SS:4', 'USCI0_CTL1:5', 'UART0_nCTS:6', 'UART3_TXD:7', 'I2C2_SMBAL:8', 'EPWM0_BRAKE1:10', 'EPWM1_CH0:11', 'BPWM2_CH1:12', 'TM0_EXT:13', 'BMC_CH27:14', 'HSUSB_VBUS_EN:15', 'LLSI0_OUT:16']},

    { f: ['PC.0:0', 'EBI_AD0:2', 'BMC_CH25:3', 'QSPI0_MOSI0:4', 'I2S0_LRCK:6', 'SPI1_SS:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'BPWM4_CH5:11', 'EPWM1_CH5:12', 'ACMP1_O:14', 'LLSI9_OUT:16']},
    { f: ['PC.1:0', 'EBI_AD1:2', 'BMC_CH24:3', 'QSPI0_MISO0:4', 'I2S0_DO:6', 'SPI1_CLK:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'BPWM4_CH4:11', 'EPWM1_CH4:12', 'ELLSI0_OUT:13', 'ACMP0_O:14', 'EADC0_ST:15', 'LLSI8_OUT:16']},
    { f: ['PC.2:0', 'EBI_AD2:2', 'BMC_CH23:3', 'QSPI0_CLK:4', 'I2S0_DI:6', 'SPI1_MOSI:7', 'UART2_nCTS:8', 'I2C0_SMBSUS:9', 'CANFD1_RXD:10', 'UART3_RXD:11', 'EPWM1_CH3:12', 'LLSI7_OUT:13', 'BPWM4_CH3:14', 'LLSI3_OUT:16']},
    { f: ['PC.3:0', 'EBI_AD3:2', 'BMC_CH22:3', 'QSPI0_SS:4', 'CANFD1_TXH:5', 'I2S0_MCLK:6', 'SPI1_MISO:7', 'UART2_nRTS:8', 'I2C0_SMBAL:9', 'CANFD1_TXD:10', 'UART3_TXD:11', 'EPWM1_CH2:12', 'BPWM4_CH2:14', 'LLSI2_OUT:16']},
    { f: ['PC.4:0', 'EBI_AD4:2', 'BMC_CH21:3', 'QSPI0_MOSI1:4', 'CANFD1_TXL:5', 'I2S0_BCLK:6', 'SPI1_I2SMCLK:7', 'UART2_RXD:8', 'I2C1_SDA:9', 'CANFD0_RXD:10', 'UART4_RXD:11', 'EPWM1_CH1:12', 'BPWM4_CH1:14', 'LLSI1_OUT:16']},
    { f: ['PC.5:0', 'EBI_AD5:2', 'BMC_CH20:3', 'QSPI0_MISO1:4', 'CANFD0_TXH:7', 'UART2_TXD:8', 'I2C1_SCL:9', 'CANFD0_TXD:10', 'UART4_TXD:11', 'EPWM1_CH0:12', 'BPWM4_CH0:14', 'I3C0_PUPEN:15', 'LLSI0_OUT:16']},
    { f: ['PC.6:0', 'EBI_AD8:2', 'SPI1_MOSI:4', 'UART4_RXD:5', 'UART0_nRTS:7', 'I2C1_SMBSUS:8', 'BMC_CH25:10', 'EPWM1_CH3:11', 'BPWM1_CH1:12', 'TM1:14', 'INT2:15']},
    { f: ['PC.7:0', 'EBI_AD9:2', 'SPI1_MISO:4', 'UART4_TXD:5', 'UART0_nCTS:7', 'I2C1_SMBAL:8', 'BMC_CH24:10', 'EPWM1_CH2:11', 'BPWM1_CH0:12', 'TM0:14', 'INT3:15']},
    { f: ['PC.8:0', 'EBI_ADR16:2', 'I2C0_SDA:4', 'UART4_nCTS:5', 'UART1_RXD:8', 'EPWM1_CH1:11', 'BPWM1_CH4:12']},
    { f: ['PC.9:0', 'EBI_ADR7:2', 'UART3_RXD:7', 'CANFD1_RXD:9', 'EPWM1_CH3:12', 'I3C0_PUPEN:15']},
    { f: ['PC.10:0', 'EBI_ADR6:2', 'UART3_TXD:7', 'CANFD1_TXD:9', 'CANFD1_TXH:10', 'EPWM1_CH2:12']},
    { f: ['PC.11:0', 'EBI_ADR5:2', 'UART0_RXD:3', 'I2C0_SDA:4', 'CANFD1_TXL:10', 'EPWM1_CH1:12', 'ACMP1_O:14']},
    { f: ['PC.12:0', 'EBI_ADR4:2', 'UART0_TXD:3', 'I2C0_SCL:4', 'EPWM1_CH0:12', 'ACMP0_O:14']},
    { f: ['PC.13:0', 'EBI_ADR10:2', 'SPI2_I2SMCLK:4', 'CANFD1_TXD:5', 'USCI0_CTL0:6', 'UART2_TXD:7', 'CANFD1_TXH:8', 'BPWM0_CH4:9', 'BPWM2_CH0:12', 'CLKO:13', 'EADC0_ST:14']},
    { f: ['PC.14:0', 'EBI_AD11:2', 'SPI0_I2SMCLK:4', 'USCI0_CTL0:5', 'QSPI0_CLK:6', 'TRACE_SWO:10', 'EPWM0_SYNC_IN:11', 'BPWM2_CH0:12', 'TM1:13', 'BMC_CH26:14', 'HSUSB_VBUS_ST:15']},
    { f: ['PC.15:0']},

    { f: ['PD.0:0', 'EBI_AD13:2', 'USCI0_CLK:3', 'SPI0_MOSI:4', 'UART3_RXD:5', 'I2C2_SDA:6', 'TM2:14']},
    { f: ['PD.1:0', 'EBI_AD12:2', 'USCI0_DAT0:3', 'SPI0_MISO:4', 'UART3_TXD:5', 'I2C2_SCL:6']},
    { f: ['PD.2:0', 'EBI_AD11:2', 'USCI0_DAT1:3', 'SPI0_CLK:4', 'UART3_nCTS:5', 'UART0_RXD:9', 'BPWM4_CH5:13']},
    { f: ['PD.3:0', 'EBI_AD10:2', 'USCI0_CTL1:3', 'SPI0_SS:4', 'UART3_nRTS:5', 'USCI1_CTL0:6', 'UART0_TXD:9', 'BPWM4_CH4:13']},
    { f: ['PD.4:0', 'EBI_AD5:2', 'USCI0_CTL0:3', 'I2C1_SDA:4', 'SPI1_SS:5', 'USCI1_CTL1:6', 'BPWM4_CH3:13']},
    { f: ['PD.5:0', 'EBI_AD15:2', 'I2C1_SCL:4', 'SPI1_CLK:5', 'USCI1_DAT0:6', 'BPWM4_CH2:13', 'EADC0_ST:15']},
    { f: ['PD.6:0', 'UART1_RXD:3', 'I2C0_SDA:4', 'SPI1_MOSI:5', 'USCI1_DAT1:6', 'BPWM4_CH1:13']},
    { f: ['PD.7:0', 'UART1_TXD:3', 'I2C0_SCL:4', 'SPI1_MISO:5', 'USCI1_CLK:6', 'BPWM4_CH0:13']},
    { f: ['PD.8:0', 'EBI_AD6:2', 'I2C2_SDA:3', 'UART2_nRTS:4', 'CANFD0_TXL:7', 'BPWM3_CH3:14']},
    { f: ['PD.9:0', 'EBI_AD7:2', 'I2C2_SCL:3', 'UART2_nCTS:4', 'BPWM3_CH2:14']},
    { f: ['PD.10:0', 'EBI_nCS2:2', 'UART1_RXD:3', 'CANFD0_RXD:4', 'EQEI0_B:10', 'BPWM2_CH3:12', 'INT7:15']},
    { f: ['PD.11:0', 'EBI_nCS1:2', 'UART1_TXD:3', 'CANFD0_TXD:4', 'CANFD0_TXH:8', 'EQEI0_A:10', 'BPWM2_CH2:12', 'INT6:15']},
    { f: ['PD.12:0', 'EBI_nCS0:2', 'CANFD1_RXD:5', 'UART2_RXD:7', 'CANFD0_TXL:8', 'BPWM0_CH5:9', 'EQEI0_INDEX:10', 'BPWM2_CH1:12', 'CLKO:13', 'EADC0_ST:14', 'INT5:15']},
    { f: ['PD.13:0', 'EBI_AD10:2', 'SD0_nCD:3', 'SPI0_I2SMCLK:4', 'SPI1_I2SMCLK:5', 'CANFD0_TXL:7', 'BPWM0_CH0:11', 'CLKO:14', 'EADC0_ST:15']},
    { f: ['PD.14:0', 'EBI_nCS0:2', 'SPI0_I2SMCLK:5', 'EPWM0_CH4:11']},
    { f: ['PD.15:0']},

    { f: ['PE.0:0', 'EBI_AD11:2', 'QSPI0_MOSI0:3', 'I2S0_MCLK:5', 'SPI1_MOSI:6', 'UART3_RXD:7', 'I2C1_SDA:8', 'UART4_nRTS:9', 'BPWM3_CH1:13']},
    { f: ['PE.1:0', 'EBI_AD10:2', 'QSPI0_MISO0:3', 'I2S0_BCLK:5', 'SPI1_MISO:6', 'UART3_TXD:7', 'I2C1_SCL:8', 'UART4_nCTS:9', 'BPWM3_CH0:13']},
    { f: ['PE.2:0', 'EBI_ALE:2', 'SD0_DAT0:3', 'USCI0_CLK:7', 'EQEI0_B:11', 'EPWM0_CH5:12', 'BPWM0_CH0:13', 'I2S0_MCLK:14']},
    { f: ['PE.3:0', 'EBI_MCLK:2', 'SD0_DAT1:3', 'USCI0_DAT0:7', 'EQEI0_A:11', 'EPWM0_CH4:12', 'BPWM0_CH1:13', 'I2S0_BCLK:14']},
    { f: ['PE.4:0', 'EBI_nWR:2', 'SD0_DAT2:3', 'USCI0_DAT1:7', 'EQEI0_INDEX:11', 'EPWM0_CH3:12', 'BPWM0_CH2:13', 'SPI1_MOSI:15']},
    { f: ['PE.5:0', 'EBI_nRD:2', 'SD0_DAT3:3', 'USCI0_CTL1:7', 'CANFD1_TXL:8', 'EPWM0_CH2:12', 'BPWM0_CH3:13', 'SPI1_MISO:15']},
    { f: ['PE.6:0', 'EBI_AD11:2', 'SD0_CLK:3', 'USCI0_CTL0:7', 'CANFD1_RXD:9', 'EPWM0_CH1:12', 'BPWM0_CH4:13', 'QSPI0_MOSI0:15']},
    { f: ['PE.7:0', 'EBI_AD10:2', 'SD0_CMD:3', 'CANFD1_TXH:8', 'CANFD1_TXD:9', 'EPWM0_CH0:12', 'BPWM0_CH5:13', 'QSPI0_MISO0:15']},
    { f: ['PE.8:0', 'EBI_ADR10:2', 'I2S0_BCLK:4', 'SPI2_CLK:5', 'USCI1_CTL1:6', 'UART2_TXD:7', 'EPWM0_CH0:10', 'EPWM0_BRAKE0:11', 'ECAP0_IC0:12', 'BPWM4_CH0:13']},
    { f: ['PE.9:0', 'EBI_ADR11:2', 'I2S0_MCLK:4', 'SPI2_MISO:5', 'USCI1_CTL0:6', 'UART2_RXD:7', 'EPWM0_CH1:10', 'EPWM0_BRAKE1:11', 'ECAP0_IC1:12', 'BPWM4_CH1:13']},
    { f: ['PE.10:0', 'EBI_ADR12:2', 'I2S0_DI:4', 'SPI2_MOSI:5', 'USCI1_DAT0:6', 'UART3_TXD:7', 'EPWM0_CH2:10', 'EPWM1_BRAKE0:11', 'ECAP0_IC2:12', 'BPWM4_CH2:13']},
    { f: ['PE.11:0', 'EBI_ADR13:2', 'I2S0_DO:4', 'SPI2_SS:5', 'USCI1_DAT1:6', 'UART3_RXD:7', 'UART1_nCTS:8', 'EPWM0_CH3:10', 'EPWM1_BRAKE1:11', 'BPWM4_CH3:13']},
    { f: ['PE.12:0', 'EBI_ADR14:2', 'I2S0_LRCK:4', 'SPI2_I2SMCLK:5', 'USCI1_CLK:6', 'UART1_nRTS:8', 'EPWM0_CH4:10', 'BPWM4_CH4:13']},
    { f: ['PE.13:0', 'EBI_ADR15:2', 'I2C0_SCL:4', 'UART4_nRTS:5', 'UART1_TXD:8', 'EPWM0_CH5:10', 'EPWM1_CH0:11', 'BPWM1_CH5:12', 'BPWM4_CH5:13', 'TRACE_SWO:14']},
    { f: ['PE.14:0', 'EBI_AD8:2', 'UART2_TXD:3', 'CANFD0_TXD:4', 'UART3_TXD:7', 'I2C1_SCL:8', 'UART4_nCTS:9', 'BPWM3_CH0:12', 'BPWM5_CH0:13']},
    { f: ['PE.15:0', 'EBI_AD9:2', 'UART2_RXD:3', 'CANFD0_RXD:4', 'UART3_RXD:7', 'I2C1_SDA:8', 'UART4_nRTS:9', 'BPWM3_CH1:12', 'BPWM5_CH1:13']},

    { f: ['PF.0:0', 'UART1_TXD:2', 'I2C1_SCL:3', 'UART0_TXD:4', 'I2S0_DO:6', 'USCI0_CTL1:7', 'UART2_TXD:8', 'I2C0_SCL:9', 'I3C0_SCL:10', 'EPWM1_CH4:11', 'BPWM5_CH0:12', 'ACMP0_O:13', 'ICE_DAT:14', 'EADC0_ST:15']},
    { f: ['PF.1:0', 'UART1_RXD:2', 'I2C1_SDA:3', 'UART0_RXD:4', 'I2S0_LRCK:6', 'USCI0_DAT1:7', 'UART2_RXD:8', 'I2C0_SDA:9', 'I3C0_SDA:10', 'EPWM1_CH5:11', 'BPWM5_CH1:12', 'ACMP1_O:13', 'ICE_CLK:14']},
    { f: ['PF.2:0', 'EBI_nCS1:2', 'UART0_RXD:3', 'I2C0_SDA:4', 'QSPI0_CLK:5', 'I2C2_SMBSUS:8', 'EPWM1_CH1:9', 'XT1_OUT:10', 'BPWM1_CH1:11', 'BPWM5_CH5:12', 'TM1_EXT:15', 'BMC_CH13:16']},
    { f: ['PF.3:0', 'EBI_nCS0:2', 'UART0_TXD:3', 'I2C0_SCL:4', 'I2C2_SMBAL:8', 'EPWM1_CH0:9', 'XT1_IN:10', 'BPWM1_CH0:11', 'BPWM5_CH4:12', 'TM0_EXT:15', 'BMC_CH12:16']},
    { f: ['PF.4:0', 'UART2_TXD:2', 'EBI_AD0:3', 'UART2_nRTS:4', 'UART0_nRTS:5', 'UART3_RXD:6', 'EPWM0_CH1:7', 'BPWM0_CH5:8', 'X32_OUT:10', 'BMC_CH11:16']},
    { f: ['PF.5:0', 'UART2_RXD:2', 'EBI_AD1:3', 'UART2_nCTS:4', 'UART0_nCTS:5', 'UART3_TXD:6', 'EPWM0_CH0:7', 'BPWM0_CH4:8', 'EPWM0_SYNC_OUT:9', 'X32_IN:10', 'EADC0_ST:11', 'BMC_CH10:16']},
    { f: ['PF.6:0', 'EBI_ADR19:2', 'I2S0_LRCK:4', 'SPI0_MOSI:5', 'UART4_RXD:6', 'EBI_nCS0:7', 'BPWM3_CH4:12', 'TRACE_SWO:14']},
    { f: ['PF.7:0', 'EBI_ADR18:2', 'I2S0_DO:4', 'SPI0_MISO:5', 'UART4_TXD:6', 'BPWM4_CH5:12']},
    { f: ['PF.8:0', 'EBI_ADR17:2', 'I2S0_DI:4', 'SPI0_CLK:5', 'CANFD1_RXD:8', 'BPWM4_CH4:12']},
    { f: ['PF.9:0', 'EBI_ADR16:2', 'I2S0_MCLK:4', 'SPI0_SS:5', 'CANFD1_TXD:8', 'CANFD1_TXH:9', 'BPWM4_CH3:12']},
    { f: ['PF.10:0', 'EBI_ADR15:2', 'I2S0_BCLK:4', 'SPI0_I2SMCLK:5', 'CANFD1_TXL:9', 'BPWM4_CH2:12']},
    { f: ['PF.11:0', 'EBI_ADR14:2', 'SPI2_MOSI:3', 'BPWM4_CH1:12', 'TM3:13']},
    { f: ['PF.12:0']},
    { f: ['PF.13:0']},
    { f: ['PF.14:0', 'BPWM3_CH5:12', 'LLSI3_OUT:16']},
    { f: ['PF.15:0', 'BPWM3_CH5:12']},

    { f: ['PG.0:0']},
    { f: ['PG.1:0']},
    { f: ['PG.2:0', 'EBI_ADR11:2', 'SPI2_SS:3', 'I2C0_SMBAL:4', 'I2C1_SCL:5', 'BPWM2_CH4:12', 'TM0:13']},
    { f: ['PG.3:0', 'EBI_ADR12:2', 'SPI2_CLK:3', 'I2C0_SMBSUS:4', 'I2C1_SDA:5', 'BPWM2_CH5:12', 'TM1:13']},
    { f: ['PG.4:0', 'EBI_ADR13:2', 'SPI2_MISO:3', 'BPWM4_CH0:12', 'TM2:13']},
    { f: ['PG.5:0']},
    { f: ['PG.6:0']},
    { f: ['PG.7:0']},
    { f: ['PG.8:0']},
    { f: ['PG.9:0', 'EBI_AD0:2', 'BPWM0_CH5:12', 'BPWM5_CH5:13', 'BMC_CH16:16']},
    { f: ['PG.10:0', 'EBI_AD1:2', 'BPWM0_CH4:12', 'BPWM5_CH4:13', 'BMC_CH17:16']},
    { f: ['PG.11:0', 'EBI_AD2:2', 'BPWM0_CH3:12', 'BPWM5_CH3:13', 'BMC_CH18:16']},
    { f: ['PG.12:0', 'EBI_AD3:2', 'BPWM0_CH2:12', 'BPWM5_CH2:13', 'BMC_CH19:16']},
    { f: ['PG.13:0', 'EBI_AD4:2', 'BPWM0_CH1:12', 'BPWM3_CH4:13']},
    { f: ['PG.14:0', 'EBI_AD5:2', 'BPWM0_CH0:12', 'BPWM3_CH5:13', 'ACMP0_O:14', 'EADC0_ST:15']},
    { f: ['PG.15:0', 'ACMP1_O:14']},

    { f: ['PH.0:0']},
    { f: ['PH.1:0']},
    { f: ['PH.2:0']},
    { f: ['PH.3:0']},
    { f: ['PH.4:0', 'EBI_ADR3:2', 'SPI1_MISO:3', 'EPWM0_CH5:11', 'BPWM5_CH0:12']},
    { f: ['PH.5:0', 'EBI_ADR2:2', 'SPI1_MOSI:3', 'EPWM0_CH4:11', 'BPWM5_CH1:12']},
    { f: ['PH.6:0', 'EBI_ADR1:2', 'SPI1_CLK:3', 'BPWM5_CH2:12']},
    { f: ['PH.7:0', 'EBI_ADR0:2', 'SPI1_SS:3', 'BPWM5_CH3:12']},
    { f: ['PH.8:0', 'EBI_AD12:2', 'QSPI0_CLK:3', 'I2S0_DI:5', 'SPI1_CLK:6', 'UART3_nRTS:7', 'I2C1_SMBAL:8', 'I2C2_SCL:9', 'UART1_TXD:10', 'BPWM3_CH2:13', 'I3C0_SCL:15']},
    { f: ['PH.9:0', 'EBI_AD13:2', 'QSPI0_SS:3', 'I2S0_DO:5', 'SPI1_SS:6', 'UART3_nCTS:7', 'I2C1_SMBSUS:8', 'I2C2_SDA:9', 'UART1_RXD:10', 'BPWM3_CH3:13', 'I3C0_SDA:15']},
    { f: ['PH.10:0', 'EBI_AD14:2', 'QSPI0_MISO1:3', 'I2S0_LRCK:5', 'SPI1_I2SMCLK:6', 'UART4_TXD:7', 'UART0_TXD:8', 'BPWM3_CH4:13', 'I3C0_PUPEN:15']},
    { f: ['PH.11:0', 'EBI_AD15:2', 'QSPI0_MOSI1:3', 'UART4_RXD:7', 'UART0_RXD:8', 'EPWM0_CH5:11', 'BPWM3_CH5:13']},
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
    'BMC_CH0:BMC channel _ output.',
    'BMC_CH1:BMC channel _ output.',
    'BMC_CH2:BMC channel _ output.',
    'BMC_CH3:BMC channel _ output.',
    'BMC_CH6:BMC channel _ output.',
    'BMC_CH7:BMC channel _ output.',
    'BMC_CH8:BMC channel _ output.',
    'BMC_CH9:BMC channel _ output.',
    'BMC_CH10:BMC channel _ output.',
    'BMC_CH12:BMC channel _ output.',
    'BMC_CH13:BMC channel _ output.',
    'BMC_CH14:BMC channel _ output.',
    'BMC_CH15:BMC channel _ output.',
    'BMC_CH16:BMC channel _ output.',
    'BMC_CH17:BMC channel _ output.',
    'BMC_CH18:BMC channel _ output.',
    'BMC_CH19:BMC channel _ output.',
    'BMC_CH20:BMC channel _ output.',
    'BMC_CH21:BMC channel _ output.',
    'BMC_CH22:BMC channel _ output.',
    'BMC_CH23:BMC channel _ output.',
    'BMC_CH24:BMC channel _ output.',
    'BMC_CH25:BMC channel _ output.',
    'BMC_CH26:BMC channel _ output.',
    'BMC_CH27:BMC channel _ output.',
    'BMC_CH28:BMC channel _ output.',
    'BMC_CH29:BMC channel _ output.',
    'BMC_CH30:BMC channel _ output.',
    'BMC_CH31:BMC channel _ output.',
    'BMC4:BMC channel 4 output.',
    'BMC5:BMC channel 5 output.',
    'BMC11:BMC channel 11 output.',
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
    'BPWM4_CH0:BPWM4 channel 0 output/capture input.',
    'BPWM4_CH1:BPWM4 channel 1 output/capture input.',
    'BPWM4_CH2:BPWM4 channel 2 output/capture input.',
    'BPWM4_CH3:BPWM4 channel 3 output/capture input.',
    'BPWM4_CH4:BPWM4 channel 4 output/capture input.',
    'BPWM4_CH5:BPWM4 channel 5 output/capture input.',
    'BPWM5_CH0:BPWM5 channel 0 output/capture input.',
    'BPWM5_CH1:BPWM5 channel 1 output/capture input.',
    'BPWM5_CH2:BPWM5 channel 2 output/capture input.',
    'BPWM5_CH3:BPWM5 channel 3 output/capture input.',
    'BPWM5_CH4:BPWM5 channel 4 output/capture input.',
    'BPWM5_CH5:BPWM5 channel 5 output/capture input.',
    'CANFD0_RXD:CANF bus receiver input.',
    'CANFD0_TXD:CANF bus transmitter output.',
    'CANFD0_TXH:CAN0 bus transmitter high level line digital output.',
    'CANFD0_TXL:CAN0 bus transmitter low level line digital output.',
    'CANFD1_RXD:CANF bus receiver input.',
    'CANFD1_TXD:CANF bus transmitter output.',
    'CANFD1_TXH:CAN1 bus transmitter high level line digital output.',
    'CANFD1_TXL:CAN1 bus transmitter low level line digital output.',
    'CLKO:Clock Out.',
    'EADC0_CH0:EADC0 channel 0 analog input.',
    'EADC0_CH1:EADC0 channel 1 analog input.',
    'EADC0_CH2:EADC0 channel 2 analog input.',
    'EADC0_CH3:EADC0 channel 3 analog input.',
    'EADC0_CH4:EADC0 channel 4 analog input.',
    'EADC0_CH5:EADC0 channel 5 analog input.',
    'EADC0_CH6:EADC0 channel 6 analog input.',
    'EADC0_CH7:EADC0 channel 7 analog input.',
    'EADC0_CH8:EADC0 channel 8 analog input.',
    'EADC0_CH9:EADC0 channel 9 analog input.',
    'EADC0_CH10:EADC0 channel 10 analog input.',
    'EADC0_CH11:EADC0 channel 11 analog input.',
    'EADC0_CH12:EADC0 channel 12 analog input.',
    'EADC0_CH13:EADC0 channel 13 analog input.',
    'EADC0_CH14:EADC0 channel 14 analog input.',
    'EADC0_CH15:EADC0 channel 15 analog input.',
    'EADC0_ST:EADC0 external trigger input.',
    'EBI_AD0:EBI address/data bus bit 0.',
    'EBI_AD1:EBI address/data bus bit 1.',
    'EBI_AD2:EBI address/data bus bit 2.',
    'EBI_AD3:EBI address/data bus bit 3.',
    'EBI_AD4:EBI address/data bus bit 4.',
    'EBI_AD5:EBI address/data bus bit 5.',
    'EBI_AD6:EBI address/data bus bit 6.',
    'EBI_AD7:EBI address/data bus bit 7.',
    'EBI_AD8:EBI address/data bus bit 8.',
    'EBI_AD9:EBI address/data bus bit 9.',
    'EBI_AD10:EBI address/data bus bit 10.',
    'EBI_AD11:EBI address/data bus bit 11.',
    'EBI_AD12:EBI address/data bus bit 12.',
    'EBI_AD13:EBI address/data bus bit 13.',
    'EBI_AD14:EBI address/data bus bit 14.',
    'EBI_AD15:EBI address/data bus bit 15.',
    'EBI_ADR0:EBI address bus bit 0.',
    'EBI_ADR1:EBI address bus bit 1.',
    'EBI_ADR2:EBI address bus bit 2.',
    'EBI_ADR3:EBI address bus bit 3.',
    'EBI_ADR4:EBI address bus bit 4.',
    'EBI_ADR5:EBI address bus bit 5.',
    'EBI_ADR6:EBI address bus bit 6.',
    'EBI_ADR7:EBI address bus bit 7.',
    'EBI_ADR8:EBI address bus bit 8.',
    'EBI_ADR9:EBI address bus bit 9.',
    'EBI_ADR10:EBI address bus bit 10.',
    'EBI_ADR11:EBI address bus bit 11.',
    'EBI_ADR12:EBI address bus bit 12.',
    'EBI_ADR13:EBI address bus bit 13.',
    'EBI_ADR14:EBI address bus bit 14.',
    'EBI_ADR15:EBI address bus bit 15.',
    'EBI_ADR16:EBI address bus bit 16.',
    'EBI_ADR17:EBI address bus bit 17.',
    'EBI_ADR18:EBI address bus bit 18.',
    'EBI_ADR19:EBI address bus bit 19.',
    'EBI_ALE:EBI address latch enable output pin.',
    'EBI_MCLK:EBI external clock output pin.',
    'EBI_nCS0:EBI chip select 0 output pin.',
    'EBI_nCS1:EBI chip select 1 output pin.',
    'EBI_nCS2:EBI chip select 2 output pin.',
    'EBI_nRD:EBI read enable output pin.',
    'EBI_nWR:EBI write enable output pin.',
    'EBI_nWRH:EBI high byte write enable output pin',
    'EBI_nWRL:EBI low byte write enable output pin.',
    'ECAP0_IC0:Enhanced capture unit 0 input 0 pin.',
    'ECAP0_IC1:Enhanced capture unit 0 input 1 pin.',
    'ECAP0_IC2:Enhanced capture unit 0 input 2 pin.',
    'ELLSI0_OUT:',
    'EPWM0_BRAKE0:EPWM0 Brake 0 input pin.',
    'EPWM0_BRAKE1:EPWM0 Brake 1 input pin.',
    'EPWM0_CH0:EPWM0 channel 0 output/capture input.',
    'EPWM0_CH1:EPWM0 channel 1 output/capture input.',
    'EPWM0_CH2:EPWM0 channel 2 output/capture input.',
    'EPWM0_CH3:EPWM0 channel 3 output/capture input.',
    'EPWM0_CH4:EPWM0 channel 4 output/capture input.',
    'EPWM0_CH5:EPWM0 channel 5 output/capture input.',
    'EPWM0_SYNC_IN:EPWM0 counter synchronous trigger input pin.',
    'EPWM0_SYNC_OUT:EPWM0 counter synchronous trigger output pin.',
    'EPWM1_BRAKE0:EPWM1 Brake 0 input pin.',
    'EPWM1_BRAKE1:EPWM1 Brake 1 input pin.',
    'EPWM1_CH0:EPWM1 channel 0 output/capture input.',
    'EPWM1_CH1:EPWM1 channel 1 output/capture input.',
    'EPWM1_CH2:EPWM1 channel 2 output/capture input.',
    'EPWM1_CH3:EPWM1 channel 3 output/capture input.',
    'EPWM1_CH4:EPWM1 channel 4 output/capture input.',
    'EPWM1_CH5:EPWM1 channel 5 output/capture input.',
    'EQEI0_A:EQEI0 phase A input.',
    'EQEI0_B:EQEI0 phase B input.',
    'EQEI0_INDEX:EQEI0 index input.',
    'HSUSB_VBUS_EN:HSUSB external VBUS regulator enable pin.',
    'HSUSB_VBUS_ST:HSUSB external VBUS regulator status pin.',
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
    'I2S0_BCLK:I2S0 bit clock output pin.',
    'I2S0_DI:I2S0 data input pin.',
    'I2S0_DO:I2S0 data output pin.',
    'I2S0_LRCK:I2S0 left right channel clock output pin.',
    'I2S0_MCLK:I2S0 master clock output pin.',
    'I3C0_PUPEN:I3C0 pull-up resistor enable pin.',
    'I3C0_SCL:I3C0 serial clock pin.',
    'I3C0_SDA:I3C0 serial data pin.',
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
    'LLSI0_OUT:LED Lighting Strip Interface 0 output pin.',
    'LLSI1_OUT:LED Lighting Strip Interface 1 output pin.',
    'LLSI2_OUT:LED Lighting Strip Interface 2 output pin.',
    'LLSI3_OUT:LED Lighting Strip Interface 3 output pin.',
    'LLSI4_OUT:LED Lighting Strip Interface 4 output pin.',
    'LLSI5_OUT:LED Lighting Strip Interface 5 output pin.',
    'LLSI6_OUT:LED Lighting Strip Interface 6 output pin.',
    'LLSI7_OUT:LED Lighting Strip Interface 7 output pin.',
    'LLSI8_OUT:LED Lighting Strip Interface 8 output pin.',
    'LLSI9_OUT:LED Lighting Strip Interface 9 output pin.',
    'QSPI0_CLK:Quad SPI0 serial clock pin.',
    'QSPI0_MISO0:Quad SPI0 MISO0 (Master In, Slave Out) pin.',
    'QSPI0_MISO1:Quad SPI0 MISO1 (Master In, Slave Out) pin.',
    'QSPI0_MOSI0:Quad SPI0 MOSI0 (Master Out, Slave In) pin.',
    'QSPI0_MOSI1:Quad SPI0 MOSI1 (Master Out, Slave In) pin.',
    'QSPI0_SS:Quad SPI0 slave select  pin.',
    'SD0_CLK:SD/SDIO0 clock output pin',
    'SD0_CMD:SD/SDIO0 command/response pin',
    'SD0_DAT0:SD/SDIO0 data line bit 0.',
    'SD0_DAT1:SD/SDIO0 data line bit 1.',
    'SD0_DAT2:SD/SDIO0 data line bit 2.',
    'SD0_DAT3:SD/SDIO0 data line bit 3.',
    'SD0_nCD:SD/SDIO0 card detect input pin',
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
    'TRACE_SWO:Trace Single Wire output pin.',
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
    'UART3_nCTS:UART3 clear to Send input pin.',
    'UART3_nRTS:UART3 request to Send output pin.',
    'UART3_RXD:UART3 data receiver input pin.',
    'UART3_TXD:UART3 data transmitter output pin.',
    'UART4_nCTS:UART4 clear to Send input pin.',
    'UART4_nRTS:UART4 request to Send output pin.',
    'UART4_RXD:UART4 data receiver input pin.',
    'UART4_TXD:UART4 data transmitter output pin.',
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
    'XT1_OUT:External 4~24 MHz (high speed) crystal output pin.',
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
    "PB.2" : [ 'Can change function to  Write_Protect_Pin by chip configuration' ],
    "PA.6" : [ 'Can change function to  Write_Protect_Pin by chip configuration' ],
    "PC.14" : [ 'Can change function to  Write_Protect_Pin by chip configuration' ],
    "PD.13" : [ 'Can change function to  Write_Protect_Pin by chip configuration' ],
};

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'M3331KIGAE': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'CM3031HS8E': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'M3331LIGAE': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'CM3031HL8E': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'M3331SIGAE': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'CM3031HN8E': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'M3331TIGAE': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'CANFD0', 'CANFD1', 'BMC']
    },
    'CM3031HJ3E': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'CANFD0', 'CANFD1', 'BMC']
    },
    'M3333KIGAE': {
        'ALL': ['BMC']
    },
    'CM3033HS8E': {
        'ALL': ['BMC']
    },
    'M3333LIGAE': {
        'ALL': ['BMC']
    },
    'CM3033HL8E': {
        'ALL': ['BMC']
    },
    'M3333SIGAE': {
        'ALL': ['BMC']
    },
    'CM3033HN8E': {
        'ALL': ['BMC']
    },
    'M3334KIGAE': {
        'ALL': ['BMC']
    },
    'CM3034HS8E': {
        'ALL': ['BMC']
    },
    'M3334LIGAE': {
        'ALL': ['BMC']
    },
    'CM3034HL8E': {
        'ALL': ['BMC']
    },
    'M3334SIGAE': {
        'ALL': ['BMC']
    },
    'CM3034HN8E': {
        'ALL': ['BMC']
    },
    'M3334TIGAE': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'BMC']
    },
    'CM3034HJ3E': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'BMC']
    },
    'M3331KGGAE': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'CM3031GS8E': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'M3331LGGAE': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'CM3031GL8E': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'M3331SGGAE': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'CM3031GN8E': {
        'ALL': ['CANFD0', 'CANFD1', 'BMC']
    },
    'M3331TGGAE': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'CANFD0', 'CANFD1', 'BMC']
    },
    'CM3031GJ3E': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'CANFD0', 'CANFD1', 'BMC']
    },
    'M3333KGGAE': {
        'ALL': ['BMC']
    },
    'CM3033GS8AE': {
        'ALL': ['BMC']
    },
    'M3333LGGAE': {
        'ALL': ['BMC']
    },
    'CM3033GL8AE': {
        'ALL': ['BMC']
    },
    'M3333SGGAE': {
        'ALL': ['BMC']
    },
    'CM3033GN8AE': {
        'ALL': ['BMC']
    },
    'M3334KGGAE': {
        'ALL': ['BMC']
    },
    'CM3034GS8AE': {
        'ALL': ['BMC']
    },
    'M3334LGGAE': {
        'ALL': ['BMC']
    },
    'CM3034GL8AE': {
        'ALL': ['BMC']
    },
    'M3334SGGAE': {
        'ALL': ['BMC']
    },
    'CM3034GN8AE': {
        'ALL': ['BMC']
    },
    'M3334TGGAE': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'BMC']
    },
    'CM3034GJ3AE': {
        'ALL': ['EBI', 'EQEI0', 'ECAP0', 'BMC']
    },
    'M3331SGAAE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'CM3021GN8AE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'M3331TGAAE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'EQEI0', 'ECAP0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'CM3021GJ3AE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'EQEI0', 'ECAP0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'M3331LGAAE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'CM3021GL8AE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'M3333SGAAE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'CM3023GN8AE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'M3333LGAAE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'CM3023GL8AE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'M3334SGAAE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'CM3024GN8AE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'M3334TGAAE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'EQEI0', 'ECAP0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'CM3024GJ3AE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'EQEI0', 'ECAP0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'M3334LGAAE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    },
    'CM3024GL8AE': {
        'ALL': ['SPI2', 'UART4', 'USCI1', 'I2C2', 'EBI', 'I2S0', 'SD0', 'CANFD0', 'I3C0', 'CANFD1', 'ELLSI0', 'ACMP0', 'ACMP1', 'BPWM2', 'BPWM3', 'BPWM4', 'BPWM5']
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
}

NUTOOL_PIN.g_cfg_gpiosDefines = [
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
    NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.getPackageNumber(given_partNumber_package);
    let partNumber = NUTOOL_PIN.getPartNumber(given_partNumber_package);
    switch (partNumber) {
        case "M3334TGAAE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(USB2.0)";
            break;
        case "M3334SGAAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(USB2.0)";
            break;
        case "M3334LGAAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(USB2.0)";
            break;
        case "CM3024GN8AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(USB2.0)";
            break;
        case "CM3024GL8AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(USB2.0)";
            break;
        case "CM3024GJ3AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(USB2.0)";
            break;
        case "M3334TIGAE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(USB2.0)";
            break;
        case "M3334TGGAE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(USB2.0)";
            break;
        case "M3334SIGAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(USB2.0)";
            break;
        case "M3334SGGAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(USB2.0)";
            break;
        case "M3334LIGAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(USB2.0)";
            break;
        case "M3334LGGAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(USB2.0)";
            break;
        case "M3334KIGAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP128(USB2.0)";
            break;
        case "M3334KGGAE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP128(USB2.0)";
            break;
        case "CM3034HS8AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP128(USB2.0)";
            break;
        case "CM3034HN8AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(USB2.0)";
            break;
        case "CM3034HL8AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(USB2.0)";
            break;
        case "CM3034HJ3AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(USB2.0)";
            break;
        case "CM3034GS8AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP128(USB2.0)";
            break;
        case "CM3034GN8AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP64(USB2.0)";
            break;
        case "CM3034GL8AE":
            NUTOOL_PIN.g_packageNumberIndex = "LQFP48(USB2.0)";
            break;
        case "CM3034GJ3AE":
            NUTOOL_PIN.g_packageNumberIndex = "QFN33(USB2.0)";
            break;
        default:
            NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;
            break;
    };
};
