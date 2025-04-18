NUTOOL_PIN.g_cfg_chips = [
    { name: "N9H31K41IFC", pkg: "LQFP128" },
    { name: "N9H31K51IFC", pkg: "LQFP128" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP128(14*14)": [
        'USB0_ID', 'PG.1', 'PG.0', 'PG.14', 'PG.13', 'PG.12', 'PG.11', 'PG.10', 'IO_VDD', 'CORE_VDD', 
        'DDR_VDD', 'DDR_VDD', 'CORE_VDD', 'PG.9', 'PG.8', 'PG.7', 'PG.6', 'PD.15', 'PD.14', 'PD.13', 
        'PD.12', 'PD.11', 'PD.10', 'PD.9', 'PD.8', 'PA.15', 'PA.14', 'PA.13', 'PA.12', 'PA.11', 
        'PA.10', 'IO_VDD', 'PA.9', 'PA.8', 'PA.7', 'PA.6', 'PA.5', 'PA.4', 'PA.3', 'PA.2', 
        'PA.1', 'PA.0', 'ADC6', 'ADC4', 'AVDD', 'ADC7', 'ADC5', 'RTC_VDD', 'X32_IN', 'X32_OUT', 
        'CORE_VDD', 'PI.1', 'PI.3', 'PI.4', 'PI.5', 'PI.6', 'PI.7', 'PI.8', 'PI.9', 'PI.10', 
        'PI.11', 'PI.12', 'PI.13', 'VSS', 'PI.14', 'PI.15', 'IO_VDD', 'PB.6', 'PB.7', 'PB.8', 
        'PB.9', 'PB.10', 'PB.11', 'PB.12', 'PB.13', 'PJ.3', 'PJ.0', 'PJ.1', 'PJ.2', 'PJ.4', 
        'nRESET', 'CORE_VDD', 'DDR_VDD', 'DDR_VDD', 'IO_VDD', 'PD.0', 'PD.1', 'PD.2', 'PD.3', 'PD.4', 
        'PD.5', 'PD.6', 'PD.7', 'CORE_VDD', 'PLL_VSS', 'PH.3', 'PH.2', 'PE.13', 'PE.12', 'PE.1', 
        'PE.0', 'IO_VDD', 'XT1_IN', 'XT1_OUT', 'PF.9', 'PF.8', 'PF.7', 'PF.6', 'PF.5', 'PF.4', 
        'PF.3', 'PF.2', 'PF.1', 'PF.0', 'PH.1', 'PH.0', 'PF.10', 'CORE_VDD', 'USB1_DM', 'USB1_DP', 
        'USB1_VDD', 'USB1_REXT', 'USBPLL0_VDD', 'USB0_DM', 'USB0_DP', 'USB0_VDD', 'USB0_REXT', 'VSS'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['PA.0:0', 'LCD_DATA0:1', 'PWRON_SET0:2']},
    { f: ['PA.1:0', 'LCD_DATA1:1', 'PWRON_SET1:2']},
    { f: ['PA.2:0', 'LCD_DATA2:1', 'PWRON_SET2:2']},
    { f: ['PA.3:0', 'LCD_DATA3:1', 'PWRON_SET3:2']},
    { f: ['PA.4:0', 'LCD_DATA4:1', 'PWRON_SET4:2']},
    { f: ['PA.5:0', 'LCD_DATA5:1', 'PWRON_SET5:2']},
    { f: ['PA.6:0', 'LCD_DATA6:1', 'PWRON_SET6:2']},
    { f: ['PA.7:0', 'LCD_DATA7:1', 'PWRON_SET7:2']},
    { f: ['PA.8:0', 'LCD_DATA8:1', 'PWRON_SET8:2']},
    { f: ['PA.9:0', 'LCD_DATA9:1', 'PWRON_SET9:2']},
    { f: ['PA.10:0', 'LCD_DATA10:1']},
    { f: ['PA.11:0', 'LCD_DATA11:1']},
    { f: ['PA.12:0', 'LCD_DATA12:1', 'PWM0:2']},
    { f: ['PA.13:0', 'LCD_DATA13:1', 'PWM1:2']},
    { f: ['PA.14:0', 'LCD_DATA14:1', 'PWM2:2']},
    { f: ['PA.15:0', 'LCD_DATA15:1', 'PWM3:2']},

    { f: ['PB.0:0']},
    { f: ['PB.1:0']},
    { f: ['PB.2:0']},
    { f: ['PB.3:0']},
    { f: ['PB.4:0']},
    { f: ['PB.5:0']},
    { f: ['PB.6:0', 'SPI0_SS0:2']},
    { f: ['PB.7:0', 'SPI0_CLK:2']},
    { f: ['PB.8:0', 'SPI0_DO/D0:2']},
    { f: ['PB.9:0', 'SPI0_DI/D1:2']},
    { f: ['PB.10:0', 'UART10_TXD:1', 'SPI0_DATA2:2', 'CAN0_RXD:3']},
    { f: ['PB.11:0', 'UART10_RXD:1', 'SPI0_DATA3:2', 'CAN0_TXD:3']},
    { f: ['PB.12:0', 'UART10_TXD:1', 'SPI1_SS0:2']},
    { f: ['PB.13:0', 'UART10_RXD:1', 'SPI1_CLK:2']},
    { f: ['PB.14:0']},
    { f: ['PB.15:0']},

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
    { f: ['PC.14:0']},
    { f: ['PC.15:0']},

    { f: ['PD.0:0', 'SD0_CMD:1']},
    { f: ['PD.1:0', 'SD0_CLK:1']},
    { f: ['PD.2:0', 'SD0_DAT0:1']},
    { f: ['PD.3:0', 'SD0_DAT1:1']},
    { f: ['PD.4:0', 'SD0_DAT2:1']},
    { f: ['PD.5:0', 'SD0_DAT3:1']},
    { f: ['PD.6:0', 'SD0_nCD:1']},
    { f: ['PD.7:0', 'SD0_nPWR:1']},
    { f: ['PD.8:0', 'LCD_DATA16:1', 'EBI_nCS0:2']},
    { f: ['PD.9:0', 'LCD_DATA17:1', 'EBI_nCS1:2']},
    { f: ['PD.10:0', 'LCD_DATA18:1', 'EBI_nCS2:2']},
    { f: ['PD.11:0', 'LCD_DATA19:1', 'EBI_nCS3:2', 'UART9_TXD:4']},
    { f: ['PD.12:0', 'LCD_DATA20:1', 'EBI_nCS4:2', 'PWM0:3', 'UART9_RXD:4']},
    { f: ['PD.13:0', 'LCD_DATA21:1', 'EBI_nWE:2', 'PWM1:3']},
    { f: ['PD.14:0', 'LCD_DATA22:1', 'EBI_nOE:2', 'PWM2:3', 'UART9_TXD:4']},
    { f: ['PD.15:0', 'LCD_DATA23:1', 'EBI_nWAIT:2', 'PWM3:3', 'UART9_RXD:4']},

    { f: ['PE.0:0', 'UART0_TXD:2']},
    { f: ['PE.1:0', 'UART0_RXD:2']},
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
    { f: ['PE.12:0', 'UART3_TXD:2', 'UART8_RTS:6']},
    { f: ['PE.13:0', 'UART3_RXD:2', 'UART8_CTS:6', 'RMII1_PPS:7', 'CLK_OUT:8']},
    { f: ['PE.14:0']},
    { f: ['PE.15:0']},

    { f: ['PF.0:0', 'RMII0_MDC:1']},
    { f: ['PF.1:0', 'RMII0_MDIO:1']},
    { f: ['PF.2:0', 'RMII0_TXDATA0:1']},
    { f: ['PF.3:0', 'RMII0_TXDATA1:1']},
    { f: ['PF.4:0', 'RMII0_TXEN:1']},
    { f: ['PF.5:0', 'RMII0_REFCLK:1']},
    { f: ['PF.6:0', 'RMII0_RXDATA0:1']},
    { f: ['PF.7:0', 'RMII0_RXDATA1:1']},
    { f: ['PF.8:0', 'RMII0_CRSDV:1']},
    { f: ['PF.9:0', 'RMII0_RXERR:1']},
    { f: ['PF.10:0', 'USB_PWREN:2', 'WDT_nRST:3']},
    { f: ['PF.11:0']},
    { f: ['PF.12:0']},
    { f: ['PF.13:0']},
    { f: ['PF.14:0']},
    { f: ['PF.15:0']},

    { f: ['PG.0:0', 'I2C0_SCL:1']},
    { f: ['PG.1:0', 'I2C0_SDA:1']},
    { f: ['PG.2:0']},
    { f: ['PG.3:0']},
    { f: ['PG.4:0']},
    { f: ['PG.5:0']},
    { f: ['PG.6:0', 'LCD_CLK:1']},
    { f: ['PG.7:0', 'LCD_HSYNC:1']},
    { f: ['PG.8:0', 'LCD_VSYNC:1']},
    { f: ['PG.9:0', 'LCD_DEN:1']},
    { f: ['PG.10:0', 'I2S_MCLK:1', 'SC0_RST:2']},
    { f: ['PG.11:0', 'I2S_DO:1', 'SC0_CLK:2', 'UART6_TXD:3']},
    { f: ['PG.12:0', 'I2S_DI:1', 'SC0_DAT:2', 'UART6_RXD:3']},
    { f: ['PG.13:0', 'I2S_BCLK:1', 'SC0_PWR:2', 'UART6_RTS:3']},
    { f: ['PG.14:0', 'I2S_LRCK:1', 'SC0_CD:2', 'UART6_CTS:3', 'CLK_OUT:4']},
    { f: ['PG.15:0']},

    { f: ['PH.0:0', 'INT0:1', 'USB0_VBUSVLD:2']},
    { f: ['PH.1:0', 'INT1:1', 'USB_OVRCUR:2']},
    { f: ['PH.2:0', 'I2C1_SCL:1', 'UART9_TXD:2', 'PWM2:3', 'CAN0_RXD:4', 'INT2:5']},
    { f: ['PH.3:0', 'I2C1_SDA:1', 'UART9_RXD:2', 'PWM3:3', 'CAN0_TXD:4', 'INT3:5']},
    { f: ['PH.4:0']},
    { f: ['PH.5:0']},
    { f: ['PH.6:0']},
    { f: ['PH.7:0']},
    { f: ['PH.8:0']},
    { f: ['PH.9:0']},
    { f: ['PH.10:0']},
    { f: ['PH.11:0']},
    { f: ['PH.12:0']},
    { f: ['PH.13:0']},
    { f: ['PH.14:0']},
    { f: ['PH.15:0']},

    { f: ['PI.0:0']},
    { f: ['PI.1:0', 'NAND_nCS0:2', 'UART7_TXD:3', 'INT6:4', 'EBI_DATA1:8']},
    { f: ['PI.2:0']},
    { f: ['PI.3:0', 'I2C1_SCL:1', 'NAND_ALE:2', 'VCAP_CLKO:4', 'CAN0_RXD:5', 'EBI_DATA3:8']},
    { f: ['PI.4:0', 'I2C1_SDA:1', 'NAND_CLE:2', 'VCAP_PCLK:4', 'CAN0_TXD:5', 'EBI_DATA4:8']},
    { f: ['PI.5:0', 'NAND_nWE:2', 'UART1_TXD:3', 'VCAP_HSYNC:4', 'SPI1_SS0:5', 'SD1_CMD:6', 'eMMC_CMD:7', 'EBI_DATA5:8']},
    { f: ['PI.6:0', 'SC1_RST:1', 'NAND_nRE:2', 'UART1_RXD:3', 'VCAP_VSYNC:4', 'SPI1_CLK:5', 'SD1_CLK:6', 'eMMC_CLK:7', 'EBI_DATA6:8']},
    { f: ['PI.7:0', 'SC1_CLK:1', 'NAND_RDY0:2', 'UART1_RTS:3', 'VCAP_FIELD:4', 'SPI1_DO/D0:5', 'SD1_DAT0:6', 'eMMC_DATA3:7', 'EBI_DATA7:8']},
    { f: ['PI.8:0', 'SC1_DAT:1', 'NAND_DATA0:2', 'UART1_CTS:3', 'VCAP_DATA0:4', 'SPI1_DI/D1:5', 'SD1_DAT1:6', 'eMMC_DATA0:7', 'EBI_DATA8:8']},
    { f: ['PI.9:0', 'SC1_PWR:1', 'NAND_DATA1:2', 'UART4_TXD:3', 'VCAP_DATA1:4', 'SD1_DAT2:6', 'eMMC_DATA1:7', 'EBI_DATA9:8']},
    { f: ['PI.10:0', 'SC1_CD:1', 'NAND_DATA2:2', 'UART4_RXD:3', 'VCAP_DATA2:4', 'SD1_DAT3:6', 'eMMC_DATA2:7', 'EBI_DATA10:8']},
    { f: ['PI.11:0', 'SC0_RST:1', 'NAND_DATA3:2', 'VCAP_DATA3:4', 'EBI_DATA11:8']},
    { f: ['PI.12:0', 'SC0_CLK:1', 'NAND_DATA4:2', 'UART8_TXD:3', 'VCAP_DATA4:4', 'SD1_nCD:6', 'EBI_DATA12:8']},
    { f: ['PI.13:0', 'SC0_DAT:1', 'NAND_DATA5:2', 'UART8_RXD:3', 'VCAP_DATA5:4', 'SD1_nPWR:6', 'EBI_DATA13:8']},
    { f: ['PI.14:0', 'SC0_PWR:1', 'NAND_DATA6:2', 'UART8_RTS:3', 'VCAP_DATA6:4', 'EBI_DATA14:8']},
    { f: ['PI.15:0', 'SC0_CD:1', 'NAND_DATA7:2', 'UART8_CTS:3', 'VCAP_DATA7:4', 'EBI_DATA15:8', 'CLK_OUT:9']},

    { f: ['PJ.0:0', 'JTAG_TCK:1']},
    { f: ['PJ.1:0', 'JTAG_TMS:1']},
    { f: ['PJ.2:0', 'JTAG_TDI:1']},
    { f: ['PJ.3:0', 'JTAG_TDO:1']},
    { f: ['PJ.4:0', 'JTAG_nTRST:1']},
    { f: ['PJ.5:0']},
    { f: ['PJ.6:0']},
    { f: ['PJ.7:0']},
    { f: ['PJ.8:0']},
    { f: ['PJ.9:0']},
    { f: ['PJ.10:0']},
    { f: ['PJ.11:0']},
    { f: ['PJ.12:0']},
    { f: ['PJ.13:0']},
    { f: ['PJ.14:0']},
    { f: ['PJ.15:0']},
    
    { f: ['ADC4:0', 'YM:0']},
    { f: ['ADC5:0', 'YP:0']},
    { f: ['ADC6:0', 'XM:0']},
    { f: ['ADC7:0', 'XP:0']}
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
    'CAN0_RXD:CAN0 bus receiver input.',
    'CAN0_TXD:CAN0 bus transmitter output.',
    'CAN1_RXD:CAN1 bus receiver input.',
    'CAN1_TXD:CAN1 bus transmitter output.',
    // 'CLK_OUT:',
    'EBI_ADDR0:EBI address/data bus bit D.',
    'EBI_ADDR1:EBI address/data bus bit D.',
    'EBI_ADDR2:EBI address/data bus bit D.',
    'EBI_ADDR3:EBI address/data bus bit D.',
    'EBI_ADDR4:EBI address/data bus bit D.',
    'EBI_ADDR5:EBI address/data bus bit D.',
    'EBI_ADDR6:EBI address/data bus bit D.',
    'EBI_ADDR7:EBI address/data bus bit D.',
    'EBI_ADDR8:EBI address/data bus bit D.',
    'EBI_ADDR9:EBI address/data bus bit D.',
    'EBI_DATA0:EBI data bus bit 0.',
    'EBI_DATA1:EBI data bus bit 1.',
    'EBI_DATA2:EBI data bus bit 2.',
    'EBI_DATA3:EBI data bus bit 3.',
    'EBI_DATA4:EBI data bus bit 4.',
    'EBI_DATA5:EBI data bus bit 5.',
    'EBI_DATA6:EBI data bus bit 6.',
    'EBI_DATA7:EBI data bus bit 7.',
    'EBI_DATA8:EBI data bus bit 8.',
    'EBI_DATA9:EBI data bus bit 9.',
    'EBI_DATA10:EBI data bus bit 10.',
    'EBI_DATA11:EBI data bus bit 11.',
    'EBI_DATA12:EBI data bus bit 12.',
    'EBI_DATA13:EBI data bus bit 13.',
    'EBI_DATA14:EBI data bus bit 14.',
    'EBI_DATA15:EBI data bus bit 15.',
    // 'EBI_nBE0:',
    // 'EBI_nBE1:',
    'EBI_nCS0:EBI chip select 0 output pin.',
    'EBI_nCS1:EBI chip select 1 output pin.',
    'EBI_nCS2:EBI chip select 2 output pin.',
    'EBI_nCS3:EBI chip select 3 output pin.',
    'EBI_nCS4:EBI chip select 4 output pin.',
    // 'EBI_nOE:',
    // 'EBI_nWAIT:',
    // 'EBI_nWE:',
    // 'eMMC_CLK:',
    // 'eMMC_CMD:',
    // 'eMMC_DATA0:',
    // 'eMMC_DATA1:',
    // 'eMMC_DATA2:',
    // 'eMMC_DATA3:',
    'I2C0_SCL:I2C0 clock pin.',
    'I2C0_SDA:I2C0 data input/output pin.',
    'I2C1_SCL:I2C1 clock pin.',
    'I2C1_SDA:I2C1 data input/output pin.',
    'I2S_BCLK:I2S_ bit clock output pin.',
    'I2S_DI:I2S_ data input pin.',
    'I2S_DO:I2S_ data output pin.',
    'I2S_LRCK:I2S_ left right channel clock output pin.',
    'I2S_MCLK:I2S_ master clock output pin.',
    'INT0:External interrupt 0 input pin.',
    'INT1:External interrupt 1 input pin.',
    'INT2:External interrupt 2 input pin.',
    'INT3:External interrupt 3 input pin.',
    'INT4:External interrupt 4 input pin.',
    'INT5:External interrupt 5 input pin.',
    'INT6:External interrupt 6 input pin.',
    'INT7:External interrupt 7 input pin.',
    'JTAG_nTRST:JTAG reset input pin.',
    'JTAG_TCK:JTAG clock input pin.',
    'JTAG_TDI:JTAG data input pin.',
    'JTAG_TDO:JTAG data output pin.',
    'JTAG_TMS:JTAG test mode selection input pin.',
    // 'LCD_CLK:',
    // 'LCD_DATA0:',
    // 'LCD_DATA1:',
    // 'LCD_DATA2:',
    // 'LCD_DATA3:',
    // 'LCD_DATA4:',
    // 'LCD_DATA5:',
    // 'LCD_DATA6:',
    // 'LCD_DATA7:',
    // 'LCD_DATA8:',
    // 'LCD_DATA9:',
    // 'LCD_DATA10:',
    // 'LCD_DATA11:',
    // 'LCD_DATA12:',
    // 'LCD_DATA13:',
    // 'LCD_DATA14:',
    // 'LCD_DATA15:',
    // 'LCD_DATA16:',
    // 'LCD_DATA17:',
    // 'LCD_DATA18:',
    // 'LCD_DATA19:',
    // 'LCD_DATA20:',
    // 'LCD_DATA21:',
    // 'LCD_DATA22:',
    // 'LCD_DATA23:',
    // 'LCD_DEN:',
    // 'LCD_HSYNC:',
    // 'LCD_VSYNC:',
    // 'NAND_ALE:',
    // 'NAND_CLE:',
    // 'NAND_DATA0:',
    // 'NAND_DATA1:',
    // 'NAND_DATA2:',
    // 'NAND_DATA3:',
    // 'NAND_DATA4:',
    // 'NAND_DATA5:',
    // 'NAND_DATA6:',
    // 'NAND_DATA7:',
    // 'NAND_nCS0:',
    // 'NAND_nCS1:',
    // 'NAND_nRE:',
    // 'NAND_nWE:',
    // 'NAND_nWP:',
    // 'NAND_RDY0:',
    // 'NAND_RDY1:',
    // 'PWM0:',
    // 'PWM1:',
    // 'PWM2:',
    // 'PWM3:',
    // 'PWRON_SET0:',
    // 'PWRON_SET1:',
    // 'PWRON_SET2:',
    // 'PWRON_SET3:',
    // 'PWRON_SET4:',
    // 'PWRON_SET5:',
    // 'PWRON_SET6:',
    // 'PWRON_SET7:',
    // 'PWRON_SET8:',
    // 'PWRON_SET9:',
    'RMII_MDC:RMII PHY Management Clock output pin.',
    // 'RMII0_CRSDV:',
    // 'RMII0_MDC:',
    // 'RMII0_MDIO:',
    // 'RMII0_PPS:',
    // 'RMII0_REFCLK:',
    // 'RMII0_RXDATA0:',
    // 'RMII0_RXDATA1:',
    // 'RMII0_RXERR:',
    // 'RMII0_TXDATA0:',
    // 'RMII0_TXDATA1:',
    // 'RMII0_TXEN:',
    // 'RMII1_CRSDV:',
    // 'RMII1_MDIO:',
    // 'RMII1_PPS:',
    // 'RMII1_REFCLK:',
    // 'RMII1_RXDATA0:',
    // 'RMII1_RXDATA1:',
    // 'RMII1_RXERR:',
    // 'RMII1_TXDATA0:',
    // 'RMII1_TXDATA1:',
    // 'RMII1_TXEN:',
    // 'RTC_TICK:',
    // 'SC0_CD:',
    'SC0_CLK:Smart Card 0 clock pin.',
    'SC0_DAT:Smart Card 0 data pin.',
    'SC0_PWR:Smart Card 0 power pin.',
    'SC0_RST:Smart Card 0 reset pin.',
    // 'SC1_CD:',
    'SC1_CLK:Smart Card 1 clock pin.',
    'SC1_DAT:Smart Card 1 data pin.',
    'SC1_PWR:Smart Card 1 power pin.',
    'SC1_RST:Smart Card 1 reset pin.',
    'SD0_CLK:SD/SDIO0 clock output pin',
    'SD0_CMD:SD/SDIO0 command/response pin',
    'SD0_DAT0:SD/SDIO0 data line bit 0.',
    'SD0_DAT1:SD/SDIO0 data line bit 1.',
    'SD0_DAT2:SD/SDIO0 data line bit 2.',
    'SD0_DAT3:SD/SDIO0 data line bit 3.',
    'SD0_nCD:SD/SDIO0 card detect input pin',
    // 'SD0_nPWR:',
    'SD1_CLK:SD/SDIO1 clock output pin',
    'SD1_CMD:SD/SDIO1 command/response pin',
    'SD1_DAT0:SD/SDIO1 data line bit 0.',
    'SD1_DAT1:SD/SDIO1 data line bit 1.',
    'SD1_DAT2:SD/SDIO1 data line bit 2.',
    'SD1_DAT3:SD/SDIO1 data line bit 3.',
    'SD1_nCD:SD/SDIO1 card detect input pin',
    // 'SD1_nPWR:',
    'SPI0_CLK:SPI0 serial clock pin.',
    // 'SPI0_DATA2:',
    // 'SPI0_DATA3:',
    // 'SPI0_DI/D1:',
    // 'SPI0_DO/D0:',
    'SPI0_SS0:SPI0 slave select 0 pin.',
    'SPI0_SS1:SPI0 slave select 1 pin.',
    'SPI1_CLK:SPI1 serial clock pin.',
    // 'SPI1_DATA2:',
    // 'SPI1_DATA3:',
    // 'SPI1_DI/D1:',
    // 'SPI1_DO/D0:',
    'SPI1_SS0:SPI1 slave select 0 pin.',
    'SPI1_SS1:SPI1 slave select 1 pin.',
    'TM0_EXT:Timer0 external capture input/toggle output pin.',
    'TM0_TGL:Timer0 event counter input/toggle output pin.',
    'TM1_EXT:Timer1 external capture input/toggle output pin.',
    'TM1_TGL:Timer1 event counter input/toggle output pin.',
    'TM2_EXT:Timer2 external capture input/toggle output pin.',
    'TM2_TGL:Timer2 event counter input/toggle output pin.',
    'TM3_EXT:Timer3 external capture input/toggle output pin.',
    'TM3_TGL:Timer3 event counter input/toggle output pin.',
    'UART0_RXD:UART0 data receiver input pin.',
    'UART0_TXD:UART0 data transmitter output pin.',
    // 'UART1_CD:',
    // 'UART1_CTS:',
    // 'UART1_DSR:',
    // 'UART1_DTR:',
    // 'UART1_RI:',
    // 'UART1_RTS:',
    'UART1_RXD:UART1 data receiver input pin.',
    'UART1_TXD:UART1 data transmitter output pin.',
    // 'UART2_CTS:',
    // 'UART2_RTS:',
    'UART2_RXD:UART2 data receiver input pin.',
    'UART2_TXD:UART2 data transmitter output pin.',
    'UART3_RXD:UART3 data receiver input pin.',
    'UART3_TXD:UART3 data transmitter output pin.',
    // 'UART4_CTS:',
    // 'UART4_RTS:',
    'UART4_RXD:UART4 data receiver input pin.',
    'UART4_TXD:UART4 data transmitter output pin.',
    'UART5_RXD:UART5 data receiver input pin.',
    'UART5_TXD:UART5 data transmitter output pin.',
    // 'UART6_CTS:',
    // 'UART6_RTS:',
    'UART6_RXD:UART6 data receiver input pin.',
    'UART6_TXD:UART6 data transmitter output pin.',
    'UART7_RXD:UART7 data receiver input pin.',
    'UART7_TXD:UART7 data transmitter output pin.',
    // 'UART8_CTS:',
    // 'UART8_RTS:',
    'UART8_RXD:UART8 data receiver input pin.',
    'UART8_TXD:UART8 data transmitter output pin.',
    'UART9_RXD:UART9 data receiver input pin.',
    'UART9_TXD:UART9 data transmitter output pin.',
    // 'UART10_CTS:',
    // 'UART10_RTS:',
    'UART10_RXD:UART10 data receiver input pin.',
    'UART10_TXD:UART10 data transmitter output pin.',
    // 'USB_OVRCUR:',
    // 'USB_PWREN:',
    // 'USB0_PWREN:',
    // 'USB0_VBUSVLD:',
    // 'USB1_PWREN:',
    // 'VCAP_CLKO:',
    // 'VCAP_DATA0:',
    // 'VCAP_DATA1:',
    // 'VCAP_DATA2:',
    // 'VCAP_DATA3:',
    // 'VCAP_DATA4:',
    // 'VCAP_DATA5:',
    // 'VCAP_DATA6:',
    // 'VCAP_DATA7:',
    // 'VCAP_FIELD:',
    // 'VCAP_HSYNC:',
    // 'VCAP_PCLK:',
    // 'VCAP_VSYNC:',
    // 'WDT_nRST:'
];

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPL = '0xB0000070';
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFPH = '0xB0000074';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPL = '0xB0000078';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFPH = '0xB000007C';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPL = '0xB0000080';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFPH = '0xB0000084';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPL = '0xB0000088';
NUTOOL_PIN.g_cfg_regDescriptions.GPD_MFPH = '0xB000008C';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPL = '0xB0000090';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFPH = '0xB0000094';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPL = '0xB0000098';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFPH = '0xB000009C';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFPL = '0xB00000A0';
NUTOOL_PIN.g_cfg_regDescriptions.GPG_MFPH = '0xB00000A4';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFPL = '0xB00000A8';
NUTOOL_PIN.g_cfg_regDescriptions.GPH_MFPH = '0xB00000AC';
NUTOOL_PIN.g_cfg_regDescriptions.GPI_MFPL = '0xB00000B0';
NUTOOL_PIN.g_cfg_regDescriptions.GPI_MFPH = '0xB00000B4';
NUTOOL_PIN.g_cfg_regDescriptions.GPJ_MFPL = '0xB00000B8';

NUTOOL_PIN.g_cfg_gpioMatrix = [];
NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {
};
NUTOOL_PIN.g_cfg_WPPin = [];

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
        case 'LQFP128':
            NUTOOL_PIN.g_packageNumberIndex = "LQFP128(14*14)";
            break;
        default:
            break;
    }
    partNumber_package = null;
    partNumber = null;
};