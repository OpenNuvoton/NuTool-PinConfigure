NUTOOL_PIN.g_cfg_chips = [
    // KM1M0D0F_100
    { name: "KM1M0DF02N/K", pkg: "LQFP100_D0x" },
    // KM1M0D0F_80
    { name: "KM1M0DF03N/K", pkg: "LQFP80_D0x" },
    // KM1M0D1F
    { name: "KM1M0DF13N/K", pkg: "LQFP80_D1x" },
    // KM1M0D0F_64
    { name: "KM1M0DF04N/K", pkg: "TQFP64_D0x" }
];

NUTOOL_PIN.g_cfg_pkgs = {
    "LQFP100_D0x": [
        'PA.0', 'PA.1', 'PA.2', 'PA.3', 'PA.4', 'PA.5', 'PA.6', 'PA.7', 'RON', 'NDMOD', 
        'NRST', 'P9.0', 'P9.1', 'VSS', 'P2.5', 'P2.6', 'VDD', 'BOOT', 'VOUT12', 'VOUT33', 
        'VDD', 'VSS', 'P0.0', 'P0.1', 'P0.2', 'P0.3', 'P0.4', 'P0.5', 'P0.6', 'P0.7', 
        'P2.0', 'P2.1', 'P2.2', 'P2.3', 'P2.4', 'P8.7', 'P8.6', 'P8.5', 'P8.4', 'P8.3', 
        'P8.2', 'P8.1', 'P8.0', 'P7.7', 'P7.6', 'P7.5', 'P7.4', 'P7.3', 'P7.2', 'P7.1', 
        'P7.0', 'P6.7', 'P6.6', 'P6.5', 'P6.4', 'P6.3', 'P6.2', 'P6.1', 'P5.0', 'P5.1', 
        'P5.2', 'P5.3', 'P5.4', 'P5.5', 'P5.6', 'P5.7', 'P4.7', 'P4.6', 'P4.5', 'P4.4', 
        'P4.3', 'P4.2', 'P4.1', 'P4.0', 'P3.6', 'P3.5', 'P3.4', 'P3.3', 'P3.2', 'P3.1', 
        'P3.0', 'P1.6', 'P1.5', 'P1.4', 'P1.3', 'P1.2', 'P1.1', 'P1.0', 'P9.2', 'P9.3', 
        'P9.4', 'P9.5', 'PB.7', 'PB.6', 'PB.5', 'PB.4', 'PB.3', 'PB.2', 'PB.1', 'PB.0'
    ]
};

NUTOOL_PIN.g_cfg_gpios = [
    { f: ['P0.0:0', 'TM10IOB:1', 'LED_LED0:9']},
    { f: ['P0.1:0', 'TM09IOB:1', 'LED_LED1:9']},
    { f: ['P0.2:0', 'TM07IOB:1', 'SIF0_SBI0A:4', 'LIN_LRX0A:4', 'LED_LED2:9']},
    { f: ['P0.3:0', 'TM08IOB:1', 'TM15IOB:3', 'SIF0_SBO0A:4', 'LIN_LTX0A:4', 'LED_LED3:9']},
    { f: ['P0.4:0', 'TM00IOB:1', 'TM02IOB:2', 'TM11IOA:3', 'SIF0_SBT0A:4', 'LED_LED4:9']},
    { f: ['P0.5:0', 'TM12IOA:3', 'SIF3_SBO3A:4', 'LED_LED5:9']},
    { f: ['P0.6:0', 'SIF3_SBI3A:4', 'LED_LED6:9']},
    { f: ['P0.7:0', 'SIF3_SBT3A:4', 'DAC1_DA1OUT0:7', 'LED_LED7:9']},

    { f: ['P1.0:0', 'TM00IOC:1', 'AN20:7']},
    { f: ['P1.1:0', 'TM02IOC:1', 'AN21:7']},
    { f: ['P1.2:0', 'TM01IOC:1', 'AN22:7']},
    { f: ['P1.3:0', 'TM03IOC:1', 'AN23:7']},
    { f: ['P1.4:0', 'TM04IOC:1']},
    { f: ['P1.5:0', 'TM07IOC:1', 'BZ_BUZZERB:2']},
    { f: ['P1.6:0', 'TM08IOC:1', 'BZ_NBUZZERB:2', 'SIF2_SBC2B:5']},
    { f: ['P1.7:0']},

    { f: ['P2.0:0', 'SIF3_SBC3A:4', 'SIF8_SCL8:5', 'IRQ0A:10']},
    { f: ['P2.1:0', 'SIF8_SDA8:5', 'IRQ1A:10']},
    { f: ['P2.2:0', 'IRQ2A:10']},
    { f: ['P2.3:0', 'TM13IOA:1', 'IRQ3A:10']},
    { f: ['P2.4:0', 'TM14IOA:1', 'IRQ4A:10']},
    { f: ['P2.5:0', 'OSCI:7']},
    { f: ['P2.6:0', 'OSCO:7']},
    { f: ['P2.7:0']},

    { f: ['P3.0:0', 'SIF2_SBO2B:5']},
    { f: ['P3.1:0', 'SIF2_SBI2B:5']},
    { f: ['P3.2:0', 'SIF4_SBC4B:4', 'SIF2_SBT2B:5']},
    { f: ['P3.3:0', 'SIF4_SBO4B:4', 'SIF6_SDA6B:5']},
    { f: ['P3.4:0', 'SIF4_SBT4B:4', 'SIF6_SCL6B:5']},
    { f: ['P3.5:0', 'SIF4_SBI4B:4']},
    { f: ['P3.6:0', 'SIF3_SBC3B:4']},
    { f: ['P3.7:0']},

    { f: ['P4.0:0', 'SIF3_SBO3B:4']},
    { f: ['P4.1:0', 'SIF3_SBI3B:4']},
    { f: ['P4.2:0', 'SIF3_SBT3B:4']},
    { f: ['P4.3:0', 'SIF0_SBO0B:4', 'LIN_LTX0B:4']},
    { f: ['P4.4:0', 'SIF0_SBI0B:4', 'LIN_LRX0B:4']},
    { f: ['P4.5:0', 'SIF0_SBT0B:4']},
    { f: ['P4.6:0']},
    { f: ['P4.7:0']},

    { f: ['P5.0:0', 'TM07OUT0:1', 'SIF1_SBO1A:4', 'CMP1_CMPIN1B:8']},
    { f: ['P5.1:0', 'TM07OUT1:1', 'SIF1_SBI1A:4', 'CMP1_CMPREF1B:8']},
    { f: ['P5.2:0', 'TM07OUT2:1', 'SIF1_SBT1A:4']},
    { f: ['P5.3:0', 'TM07OUT3:1', 'SIF1_SBC1A:4']},
    { f: ['P5.4:0', 'TM07OUT4:1']},
    { f: ['P5.5:0', 'TM07OUT5:1']},
    { f: ['P5.6:0', 'BZ_NBUZZERA:1']},
    { f: ['P5.7:0', 'BZ_BUZZERA:1']},

    { f: ['P6.0:0']},
    { f: ['P6.1:0', 'DAC1_DA1OUT1:7']},
    { f: ['P6.2:0', 'TM01IOB:1', 'CMP1_CMPREF1A:8']},
    { f: ['P6.3:0', 'TM03IOB:1', 'CMP1_CMPIN1A:8']},
    { f: ['P6.4:0', 'TM04IOB:1', 'SIF2_SBC2A:4', 'CMP1_CMPOT1:8']},
    { f: ['P6.5:0', 'SIF2_SBO2A:4']},
    { f: ['P6.6:0', 'SIF2_SBI2A:4']},
    { f: ['P6.7:0', 'SIF2_SBT2A:4']},

    { f: ['P7.0:0', 'SIF4_SBI4A:4', 'KEY0:10']},
    { f: ['P7.1:0', 'SIF4_SBO4A:4', 'SIF6_SDA6A:5', 'KEY1:10']},
    { f: ['P7.2:0', 'SIF4_SBT4A:4', 'SIF6_SCL6A:5', 'KEY2:10']},
    { f: ['P7.3:0', 'TM13IOB:1', 'SIF4_SBC4A:4', 'SIF7_SDA7A:5', 'KEY3:10']},
    { f: ['P7.4:0', 'TM14IOB:1', 'SIF1_SBC1B:4', 'SIF7_SCL7A:5', 'KEY4:10']},
    { f: ['P7.5:0', 'SIF1_SBO1B:4', 'KEY5:10']},
    { f: ['P7.6:0', 'SIF1_SBI1B:4', 'KEY6:10']},
    { f: ['P7.7:0', 'SIF1_SBT1B:4', 'KEY7:10']},

    { f: ['P8.0:0', 'SDO0:1', 'PWM0_PWM0A:2']},
    { f: ['P8.1:0', 'SDO1:1', 'PWM0_NPWM0A:2']},
    { f: ['P8.2:0', 'SDO2:1', 'PWM0_PWM1A:2']},
    { f: ['P8.3:0', 'SDO3:1', 'PWM0_NPWM1A:2']},
    { f: ['P8.4:0', 'SDO4:1', 'PWM0_PWM2A:2']},
    { f: ['P8.5:0', 'SDO5:1', 'PWM0_NPWM2A:2']},
    { f: ['P8.6:0', 'SDO6:1', 'PWM0_PWMBCSTA:2']},
    { f: ['P8.7:0', 'SDO7:1', 'TM15IOC:2']},

    { f: ['P9.0:0', 'XI:7']},
    { f: ['P9.1:0', 'XO:7']},
    { f: ['P9.2:0', 'AN19:7']},
    { f: ['P9.3:0', 'AN18:7']},
    { f: ['P9.4:0', 'AN17:1', 'DAC0_DA0OUT0:1']},
    { f: ['P9.5:0', 'AN16:1', 'DAC0_DA0OUT1:1']},
    { f: ['P9.6:0']},
    { f: ['P9.7:0']},

    { f: ['PA.0:0', 'TM00IOA:1', 'TM15IOA:2', 'AN0:7']},
    { f: ['PA.1:0', 'TM01IOA:1', 'TM11IOB:2', 'AN1:7']},
    { f: ['PA.2:0', 'TM02IOA:1', 'TM12IOB:2', 'AN2:7']},
    { f: ['PA.3:0', 'TM03IOA:1', 'AN3:7']},
    { f: ['PA.4:0', 'TM04IOA:1', 'SIF5_SBI5:4', 'AN4:7', 'CMP0_CMPREF0A:8']},
    { f: ['PA.5:0', 'TM07IOA:1', 'SIF5_SBO5:4', 'AN5:7', 'CMP0_CMPIN0A:8']},
    { f: ['PA.6:0', 'TM08IOA:1', 'TM10IOA:2', 'SIF5_SBT5:4', 'AN6:7', 'CMP0_CMPOT0:8']},
    { f: ['PA.7:0', 'MONOUT:1', 'TM09IOA:2', 'SIF5_SBC5:4', 'AN7:7']},

    { f: ['PB.0:0', 'AN8:7']},
    { f: ['PB.1:0', 'AN9:7']},
    { f: ['PB.2:0', 'AN10:7']},
    { f: ['PB.3:0', 'AN11:7', 'CMP0_CMPIN0B:8']},
    { f: ['PB.4:0', 'AN12:7', 'CMP0_CMPREF0B:8']},
    { f: ['PB.5:0', 'AN13:7']},
    { f: ['PB.6:0', 'AN14:7']},
    { f: ['PB.7:0', 'AN15:7']},
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
    { f: ['P0.0', 'GPIO:GPIO_P00MD_GPIO@IOP0MD', 'TM10IOB:GPIO_P00MD_TM10IOB@IOP0MD', 'LED_LED0:GPIO_P00MD_LED0@IOP0MD'] },
    { f: ['P0.1', 'GPIO:GPIO_P01MD_GPIO@IOP0MD', 'TM09IOB:GPIO_P01MD_TM09IOB@IOP0MD', 'LED_LED1:GPIO_P01MD_LED1@IOP0MD'] },
    { f: ['P0.2', 'GPIO:GPIO_P02MD_GPIO@IOP0MD', 'TM07IOB:GPIO_P02MD_TM07IOB@IOP0MD', 'SIF0_SBI0A:GPIO_P02MD_SBI0A@IOP0MD', 'LIN_LRX0A:GPIO_P02MD_LRX0A@IOP0MD', 'LED_LED2:GPIO_P02MD_LED2@IOP0MD'] },
    { f: ['P0.3', 'GPIO:GPIO_P03MD_GPIO@IOP0MD', 'TM08IOB:GPIO_P03MD_TM08IOB@IOP0MD', 'TM15IOB:GPIO_P03MD_TM15IOB@IOP0MD', 'SIF0_SBO0A:GPIO_P03MD_SBO0A@IOP0MD', 'LIN_LTX0A:GPIO_P03MD_LTX0A@IOP0MD', 'DAC1_DA1OUT0:GPIO_P03MD_DA1OUT0@IOP0MD', 'LED_LED3:GPIO_P03MD_LED3@IOP0MD'] },
    { f: ['P0.4', 'GPIO:GPIO_P04MD_GPIO@IOP0MD', 'TM00IOB:GPIO_P04MD_TM00IOB@IOP0MD', 'TM02IOB:GPIO_P04MD_TM02IOB@IOP0MD', 'TM11IOA:GPIO_P04MD_TM11IOA@IOP0MD', 'SIF0_SBT0A:GPIO_P04MD_SBT0A@IOP0MD', 'LED_LED4:GPIO_P04MD_LED4@IOP0MD'] },
    { f: ['P0.5', 'GPIO:GPIO_P05MD_GPIO@IOP0MD', 'TM12IOA:GPIO_P05MD_TM12IOA@IOP0MD', 'SIF3_SBO3A:GPIO_P05MD_SBO3A@IOP0MD', 'LED_LED5:GPIO_P05MD_LED5@IOP0MD'] },
    { f: ['P0.6', 'GPIO:GPIO_P06MD_GPIO@IOP0MD', 'SIF3_SBI3A:GPIO_P06MD_SBI3A@IOP0MD', 'LED_LED6:GPIO_P06MD_LED6@IOP0MD'] },
    { f: ['P0.7', 'GPIO:GPIO_P07MD_GPIO@IOP0MD', 'SIF3_SBT3A:GPIO_P07MD_SBT3A@IOP0MD', 'DAC1_DA1OUT0:GPIO_P07MD_DA1OUT0@IOP0MD', 'LED_LED7:GPIO_P07MD_LED7@IOP0MD'] },

    { f: ['P1.0', 'GPIO:GPIO_P10MD_GPIO@IOP1MD', 'TM00IOC:GPIO_P10MD_TM00IOC@IOP1MD', 'AN20:GPIO_P10MD_AN20@IOP1MD'] },
    { f: ['P1.1', 'GPIO:GPIO_P11MD_GPIO@IOP1MD', 'TM02IOC:GPIO_P11MD_TM02IOC@IOP1MD', 'AN21:GPIO_P11MD_AN21@IOP1MD'] },
    { f: ['P1.2', 'GPIO:GPIO_P12MD_GPIO@IOP1MD', 'TM01IOC:GPIO_P12MD_TM01IOC@IOP1MD', 'AN22:GPIO_P12MD_AN22@IOP1MD'] },
    { f: ['P1.3', 'GPIO:GPIO_P13MD_GPIO@IOP1MD', 'TM03IOC:GPIO_P13MD_TM03IOC@IOP1MD', 'AN23:GPIO_P13MD_AN23@IOP1MD'] },
    { f: ['P1.4', 'GPIO:GPIO_P14MD_GPIO@IOP1MD', 'TM04IOC:GPIO_P14MD_TM04IOC@IOP1MD'] },
    { f: ['P1.5', 'GPIO:GPIO_P15MD_GPIO@IOP1MD', 'TM07IOC:GPIO_P15MD_TM07IOC@IOP1MD', 'BZ_BUZZERB:GPIO_P15MD_BUZZERB@IOP1MD'] },
    { f: ['P1.6', 'GPIO:GPIO_P16MD_GPIO@IOP1MD', 'TM08IOC:GPIO_P16MD_TM08IOC@IOP1MD', 'BZ_NBUZZERB:GPIO_P16MD_NBUZZERB@IOP1MD', 'SIF2_SBC2B:GPIO_P16MD_SBC2B@IOP1MD'] },

    { f: ['P2.0', 'GPIO:GPIO_P20MD_GPIO@IOP2MD', 'SIF3_SBC3A:GPIO_P20MD_SBC3A@IOP2MD', 'SIF3_SBI3A:GPIO_P20MD_SBI3A@IOP2MD', 'SIF8_SCL8:GPIO_P20MD_SCL8@IOP2MD', 'IRQ0A:GPIO_P20MD_IRQ0A@IOP2MD'] },
    { f: ['P2.1', 'GPIO:GPIO_P21MD_GPIO@IOP2MD', 'SIF3_SBT3A:GPIO_P21MD_SBT3A@IOP2MD', 'SIF8_SDA8:GPIO_P21MD_SDA8@IOP2MD', 'IRQ1A:GPIO_P21MD_IRQ1A@IOP2MD'] },
    { f: ['P2.2', 'GPIO:GPIO_P22MD_GPIO@IOP2MD', 'SIF3_SBC3A:GPIO_P22MD_SBC3A@IOP2MD', 'IRQ2A:GPIO_P22MD_IRQ2A@IOP2MD'] },
    { f: ['P2.3', 'GPIO:GPIO_P23MD_GPIO@IOP2MD', 'TM13IOA:GPIO_P23MD_TM13IOA@IOP2MD', 'IRQ3A:GPIO_P23MD_IRQ3A@IOP2MD'] },
    { f: ['P2.4', 'GPIO:GPIO_P24MD_GPIO@IOP2MD', 'TM14IOA:GPIO_P24MD_TM14IOA@IOP2MD', 'IRQ4A:GPIO_P24MD_IRQ4A@IOP2MD'] },
    { f: ['P2.5', 'GPIO:GPIO_P25MD_GPIO@IOP2MD', 'OSCI:GPIO_P25MD_OSC1@IOP2MD'] },
    { f: ['P2.6', 'GPIO:GPIO_P26MD_GPIO@IOP2MD', 'OSCO:GPIO_P26MD_OSC2@IOP2MD'] },

    { f: ['P3.0', 'GPIO:GPIO_P30MD_GPIO@IOP3MD', 'SIF2_SBO2B:GPIO_P30MD_SBO2B@IOP3MD'] },
    { f: ['P3.1', 'GPIO:GPIO_P31MD_GPIO@IOP3MD', 'SIF2_SBI2B:GPIO_P31MD_SBI2B@IOP3MD'] },
    { f: ['P3.2', 'GPIO:GPIO_P32MD_GPIO@IOP3MD', 'SIF4_SBC4B:GPIO_P32MD_SBC4B@IOP3MD', 'SIF2_SBT2B:GPIO_P32MD_SBT2B@IOP3MD'] },
    { f: ['P3.3', 'GPIO:GPIO_P33MD_GPIO@IOP3MD', 'SIF4_SBO4B:GPIO_P33MD_SBO4B@IOP3MD', 'SIF6_SDA6B:GPIO_P33MD_SDA6B@IOP3MD', 'AN15:GPIO_P33MD_AN15@IOP3MD'] },
    { f: ['P3.4', 'GPIO:GPIO_P34MD_GPIO@IOP3MD', 'SIF4_SBT4B:GPIO_P34MD_SBT4B@IOP3MD', 'SIF6_SCL6B:GPIO_P34MD_SCL6B@IOP3MD'] },
    { f: ['P3.5', 'GPIO:GPIO_P35MD_GPIO@IOP3MD', 'SIF4_SBI4B:GPIO_P35MD_SBI4B@IOP3MD', 'DAC0_DA0OUT0:GPIO_P35MD_DA0OUT0@IOP3MD'] },
    { f: ['P3.6', 'GPIO:GPIO_P36MD_GPIO@IOP3MD', 'SIF3_SBC3B:GPIO_P36MD_SBC3B@IOP3MD'] },

    { f: ['P4.0', 'GPIO:GPIO_P40MD_GPIO@IOP4MD', 'SIF3_SBO3B:GPIO_P40MD_SBO3B@IOP4MD'] },
    { f: ['P4.1', 'GPIO:GPIO_P41MD_GPIO@IOP4MD', 'SIF3_SBI3B:GPIO_P41MD_SBI3B@IOP4MD'] },
    { f: ['P4.2', 'GPIO:GPIO_P42MD_GPIO@IOP4MD', 'SIF3_SBT3B:GPIO_P42MD_SBT3B@IOP4MD'] },
    { f: ['P4.3', 'GPIO:GPIO_P43MD_GPIO@IOP4MD', 'SIF0_SBO0B:GPIO_P43MD_SBO0B@IOP4MD', 'LIN_LTX0B:GPIO_P43MD_LTX0B@IOP4MD'] },
    { f: ['P4.4', 'GPIO:GPIO_P44MD_GPIO@IOP4MD', 'SIF0_SBI0B:GPIO_P44MD_SBI0B@IOP4MD', 'LIN_LRX0B:GPIO_P44MD_LRX0B@IOP4MD'] },
    { f: ['P4.5', 'GPIO:GPIO_P45MD_GPIO@IOP4MD', 'SIF0_SBT0B:GPIO_P45MD_SBT0B@IOP4MD'] },
    { f: ['P4.6', 'GPIO:GPIO_P46MD_GPIO@IOP4MD'] },
    { f: ['P4.7', 'GPIO:GPIO_P47MD_GPIO@IOP4MD'] },

    { f: ['P5.0', 'GPIO:GPIO_P50MD_GPIO@IOP5MD', 'TM07OUT0:GPIO_P50MD_TM07OUT0@IOP5MD', 'SIF1_SBO1A:GPIO_P50MD_SBO1A@IOP5MD', 'CMP1_CMPIN1B:GPIO_P50MD_CMPIN1B@IOP5MD'] },
    { f: ['P5.1', 'GPIO:GPIO_P51MD_GPIO@IOP5MD', 'TM07OUT1:GPIO_P51MD_TM07OUT1@IOP5MD', 'SIF1_SBI1A:GPIO_P51MD_SBI1A@IOP5MD', 'CMP1_CMPREF1B:GPIO_P51MD_CMPREF1B@IOP5MD'] },
    { f: ['P5.2', 'GPIO:GPIO_P52MD_GPIO@IOP5MD', 'TM07OUT2:GPIO_P52MD_TM07OUT2@IOP5MD', 'SIF1_SBT1A:GPIO_P52MD_SBT1A@IOP5MD'] },
    { f: ['P5.3', 'GPIO:GPIO_P53MD_GPIO@IOP5MD', 'TM07OUT3:GPIO_P53MD_TM07OUT3@IOP5MD', 'SIF1_SBC1A:GPIO_P53MD_SBC1A@IOP5MD'] },
    { f: ['P5.4', 'GPIO:GPIO_P54MD_GPIO@IOP5MD', 'TM07OUT4:GPIO_P54MD_TM07OUT4@IOP5MD'] },
    { f: ['P5.5', 'GPIO:GPIO_P55MD_GPIO@IOP5MD', 'TM07OUT5:GPIO_P55MD_TM07OUT5@IOP5MD', 'AN11:GPIO_P55MD_AN11@IOP5MD'] },
    { f: ['P5.6', 'GPIO:GPIO_P56MD_GPIO@IOP5MD', 'BZ_NBUZZERA:GPIO_P56MD_NBUZZERA@IOP5MD', 'AN10:GPIO_P56MD_AN10@IOP5MD', 'DAC0_DA0OUT0:GPIO_P56MD_DA0OUT0@IOP5MD'] },
    { f: ['P5.7', 'GPIO:GPIO_P57MD_GPIO@IOP5MD', 'BZ_BUZZERA:GPIO_P57MD_BUZZERA@IOP5MD', 'AN9:GPIO_P57MD_AN9@IOP5MD'] },

    { f: ['P6.1', 'GPIO:GPIO_P61MD_GPIO@IOP6MD', 'DAC1_DA1OUT1:GPIO_P61MD_DA1OUT1@IOP6MD'] },
    { f: ['P6.2', 'GPIO:GPIO_P62MD_GPIO@IOP6MD', 'TM01IOB:GPIO_P62MD_TM01IOB@IOP6MD', 'CMP1_CMPREF1A:GPIO_P62MD_CMPREF1A@IOP6MD'] },
    { f: ['P6.3', 'GPIO:GPIO_P63MD_GPIO@IOP6MD', 'TM03IOB:GPIO_P63MD_TM03IOB@IOP6MD', 'CMP1_CMPIN1A:GPIO_P63MD_CMPIN1A@IOP6MD'] },
    { f: ['P6.4', 'GPIO:GPIO_P64MD_GPIO@IOP6MD', 'TM04IOB:GPIO_P64MD_TM04IOB@IOP6MD', 'SIF2_SBC2A:GPIO_P64MD_SBC2A@IOP6MD', 'CMP1_CMPOT1:GPIO_P64MD_CMPOT1@IOP6MD'] },
    { f: ['P6.5', 'GPIO:GPIO_P65MD_GPIO@IOP6MD', 'SIF2_SBO2A:GPIO_P65MD_SBO2A@IOP6MD'] },
    { f: ['P6.6', 'GPIO:GPIO_P66MD_GPIO@IOP6MD', 'SIF2_SBI2A:GPIO_P66MD_SBI2A@IOP6MD'] },
    { f: ['P6.7', 'GPIO:GPIO_P67MD_GPIO@IOP6MD', 'SIF2_SBT2A:GPIO_P67MD_SBT2A@IOP6MD'] },

    { f: ['P7.0', 'GPIO:GPIO_P70MD_GPIO@IOP7MD', 'SIF4_SBI4A:GPIO_P70MD_SBI4A@IOP7MD', 'CMP1_CMPREF1B:GPIO_P70MD_CMPREF1B@IOP7MD', 'KEY0:GPIO_P70MD_KEY0@IOP7MD'] },
    { f: ['P7.1', 'GPIO:GPIO_P71MD_GPIO@IOP7MD', 'SIF4_SBO4A:GPIO_P71MD_SBO4A@IOP7MD', 'SIF6_SDA6A:GPIO_P71MD_SDA6A@IOP7MD', 'CMP1_CMPIN1B:GPIO_P71MD_CMPIN1B@IOP7MD', 'KEY1:GPIO_P71MD_KEY1@IOP7MD'] },
    { f: ['P7.2', 'GPIO:GPIO_P72MD_GPIO@IOP7MD', 'SIF4_SBT4A:GPIO_P72MD_SBT4A@IOP7MD', 'SIF6_SCL6A:GPIO_P72MD_SCL6A@IOP7MD', 'DAC1_DA1OUT1:GPIO_P72MD_DA1OUT1@IOP7MD', 'KEY2:GPIO_P72MD_KEY2@IOP7MD'] },
    { f: ['P7.3', 'GPIO:GPIO_P73MD_GPIO@IOP7MD', 'TM13IOB:GPIO_P73MD_TM13IOB@IOP7MD', 'SIF4_SBC4A:GPIO_P73MD_SBC4A@IOP7MD', 'SIF7_SDA7A:GPIO_P73MD_SDA7A@IOP7MD', 'CMP1_CMPREF1B:GPIO_P73MD_CMPREF1B@IOP7MD', 'CMP1_CMPREF1A:GPIO_P73MD_CMPREF1A@IOP7MD', 'KEY3:GPIO_P73MD_KEY3@IOP7MD'] },
    { f: ['P7.4', 'GPIO:GPIO_P74MD_GPIO@IOP7MD', 'TM14IOB:GPIO_P74MD_TM14IOB@IOP7MD', 'SIF1_SBC1B:GPIO_P74MD_SBC1B@IOP7MD', 'SIF7_SCL7A:GPIO_P74MD_SCL7A@IOP7MD', 'CMP1_CMPIN1B:GPIO_P74MD_CMPIN1B@IOP7MD', 'CMP1_CMPIN1A:GPIO_P74MD_CMPIN1A@IOP7MD', 'KEY4:GPIO_P74MD_KEY4@IOP7MD'] },
    { f: ['P7.5', 'GPIO:GPIO_P75MD_GPIO@IOP7MD', 'SIF1_SBO1B:GPIO_P75MD_SBO1B@IOP7MD', 'DAC1_DA1OUT1:GPIO_P75MD_DA1OUT1@IOP7MD', 'CMP1_CMPOT1:GPIO_P75MD_CMPOT1@IOP7MD', 'KEY5:GPIO_P75MD_KEY5@IOP7MD'] },
    { f: ['P7.6', 'GPIO:GPIO_P76MD_GPIO@IOP7MD', 'SIF1_SBI1B:GPIO_P76MD_SBI1B@IOP7MD', 'CMP1_CMPREF1A:GPIO_P76MD_CMPREF1A@IOP7MD', 'KEY6:GPIO_P76MD_KEY6@IOP7MD'] },
    { f: ['P7.7', 'GPIO:GPIO_P77MD_GPIO@IOP7MD', 'SIF1_SBT1B:GPIO_P77MD_SBT1B@IOP7MD', 'CMP1_CMPIN1A:GPIO_P77MD_CMPIN1A@IOP7MD', 'KEY7:GPIO_P77MD_KEY7@IOP7MD'] },

    { f: ['P8.0', 'GPIO:GPIO_P80MD_GPIO@IOP8MD', 'SDO0:GPIO_P80MD_SDO0@IOP8MD', 'PWM0_PWM0A:GPIO_P80MD_PWM0A@IOP8MD', 'CMP1_CMPOT1:GPIO_P80MD_CMPOT1@IOP8MD'] },
    { f: ['P8.1', 'GPIO:GPIO_P81MD_GPIO@IOP8MD', 'SDO1:GPIO_P81MD_SDO1@IOP8MD', 'PWM0_NPWM0A:GPIO_P81MD_NPWM0A@IOP8MD'] },
    { f: ['P8.2', 'GPIO:GPIO_P82MD_GPIO@IOP8MD', 'SDO2:GPIO_P82MD_SDO2@IOP8MD', 'PWM0_PWM1A:GPIO_P82MD_PWM1A@IOP8MD'] },
    { f: ['P8.3', 'GPIO:GPIO_P83MD_GPIO@IOP8MD', 'SDO3:GPIO_P83MD_SDO3@IOP8MD', 'PWM0_NPWM1A:GPIO_P83MD_NPWM1A@IOP8MD'] },
    { f: ['P8.4', 'GPIO:GPIO_P84MD_GPIO@IOP8MD', 'SDO4:GPIO_P84MD_SDO4@IOP8MD', 'PWM0_PWM2A:GPIO_P84MD_PWM2A@IOP8MD'] },
    { f: ['P8.5', 'GPIO:GPIO_P85MD_GPIO@IOP8MD', 'SDO5:GPIO_P85MD_SDO5@IOP8MD', 'PWM0_NPWM2A:GPIO_P85MD_NPWM2A@IOP8MD'] },
    { f: ['P8.6', 'GPIO:GPIO_P86MD_GPIO@IOP8MD', 'SDO6:GPIO_P86MD_SDO6@IOP8MD', 'PWM0_PWMBCSTA:GPIO_P86MD_PWMBCSTA@IOP8MD'] },
    { f: ['P8.7', 'GPIO:GPIO_P87MD_GPIO@IOP8MD', 'SDO7:GPIO_P87MD_SDO7@IOP8MD', 'TM15IOC:GPIO_P87MD_TM15IOC@IOP8MD'] },

    { f: ['P9.0', 'GPIO:GPIO_P90MD_GPIO@IOP9MD', 'XI:GPIO_P90MD_XI@IOP9MD'] },
    { f: ['P9.1', 'GPIO:GPIO_P91MD_GPIO@IOP9MD', 'XO:GPIO_P91MD_XO@IOP9MD'] },
    { f: ['P9.2', 'GPIO:GPIO_P92MD_GPIO@IOP9MD', 'SIF4_SBC4B:GPIO_P92MD_SBC4B@IOP9MD', 'AN19:GPIO_P92MD_AN19@IOP9MD', 'AN14:GPIO_P92MD_AN14@IOP9MD'] },
    { f: ['P9.3', 'GPIO:GPIO_P93MD_GPIO@IOP9MD', 'AN18:GPIO_P93MD_AN18@IOP9MD', 'AN13:GPIO_P93MD_AN13@IOP9MD'] },
    { f: ['P9.4', 'GPIO:GPIO_P94MD_GPIO@IOP9MD', 'AN17:GPIO_P94MD_AN17@IOP9MD', 'DAC0_DA0OUT0:GPIO_P94MD_DA0OUT0@IOP9MD', 'AN12:GPIO_P94MD_AN12@IOP9MD', 'AN8:GPIO_P94MD_AN8@IOP9MD', 'DAC0_DA0OUT1:GPIO_P94MD_DA0OUT1@IOP9MD', 'CMP0_CMPREF0B:GPIO_P94MD_CMPREF0B@IOP9MD'] },
    { f: ['P9.5', 'GPIO:GPIO_P95MD_GPIO@IOP9MD', 'AN16:GPIO_P95MD_AN16@IOP9MD', 'DAC0_DA0OUT1:GPIO_P95MD_DA0OUT1@IOP9MD'] },

    { f: ['PA.0', 'GPIO:GPIO_PA0MD_GPIO@IOPAMD', 'TM00IOA:GPIO_PA0MD_TM00IOA@IOPAMD', 'TM00IOA_64:GPIO_PA0MD_TM00IOA_64@IOPAMD', 'TM15IOA:GPIO_PA0MD_TM15IOA@IOPAMD', 'AN0:GPIO_PA0MD_AN0@IOPAMD'] },
    { f: ['PA.1', 'GPIO:GPIO_PA1MD_GPIO@IOPAMD', 'TM01IOA:GPIO_PA1MD_TM01IOA@IOPAMD', 'TM01IOA_64:GPIO_PA1MD_TM01IOA_64@IOPAMD', 'TM11IOB:GPIO_PA1MD_TM11IOB@IOPAMD', 'AN1:GPIO_PA1MD_AN1@IOPAMD'] },
    { f: ['PA.2', 'GPIO:GPIO_PA2MD_GPIO@IOPAMD', 'TM02IOA:GPIO_PA2MD_TM02IOA@IOPAMD', 'TM02IOA_64:GPIO_PA2MD_TM02IOA_64@IOPAMD', 'TM12IOB:GPIO_PA2MD_TM12IOB@IOPAMD', 'AN2:GPIO_PA2MD_AN2@IOPAMD', 'DAC0_DA0OUT1:GPIO_PA2MD_DA0OUT1@IOPAMD', 'CMP0_CMPREF0B:GPIO_PA2MD_CMPREF0B@IOPAMD'] },
    { f: ['PA.3', 'GPIO:GPIO_PA3MD_GPIO@IOPAMD', 'TM03IOA:GPIO_PA3MD_TM03IOA@IOPAMD', 'TM03IOA_64:GPIO_PA3MD_TM03IOA_64@IOPAMD', 'AN3:GPIO_PA3MD_AN3@IOPAMD', 'CMP0_CMPIN0B:GPIO_PA3MD_CMPIN0B@IOPAMD'] },
    { f: ['PA.4', 'GPIO:GPIO_PA4MD_GPIO@IOPAMD', 'TM04IOA:GPIO_PA4MD_TM04IOA@IOPAMD', 'SIF5_SBI5:GPIO_PA4MD_SBI5@IOPAMD', 'AN4:GPIO_PA4MD_AN4@IOPAMD', 'CMP0_CMPREF0A:GPIO_PA4MD_CMPREF0A@IOPAMD'] },
    { f: ['PA.5', 'GPIO:GPIO_PA5MD_GPIO@IOPAMD', 'TM07IOA:GPIO_PA5MD_TM07IOA@IOPAMD', 'SIF5_SBO5:GPIO_PA5MD_SBO5@IOPAMD', 'AN5:GPIO_PA5MD_AN5@IOPAMD', 'CMP0_CMPIN0A:GPIO_PA5MD_CMPIN0A@IOPAMD'] },
    { f: ['PA.6', 'GPIO:GPIO_PA6MD_GPIO@IOPAMD', 'TM08IOA:GPIO_PA6MD_TM08IOA@IOPAMD', 'TM10IOA:GPIO_PA6MD_TM10IOA@IOPAMD', 'SIF5_SBT5:GPIO_PA6MD_SBT5@IOPAMD', 'AN6:GPIO_PA6MD_AN6@IOPAMD', 'CMP0_CMPOT0:GPIO_PA6MD_CMPOT0@IOPAMD'] },
    { f: ['PA.7', 'GPIO:GPIO_PA7MD_GPIO@IOPAMD', 'MONITOR:GPIO_PA7MD_MONITOR@IOPAMD', 'TM09IOA:GPIO_PA7MD_TM09IOA@IOPAMD', 'SIF5_SBC5:GPIO_PA7MD_SBC5@IOPAMD', 'AN7:GPIO_PA7MD_AN7@IOPAMD'] },

    { f: ['PB.0', 'GPIO:GPIO_PB0MD_GPIO@IOPBMD', 'AN8:GPIO_PB0MD_AN8@IOPBMD'] },
    { f: ['PB.1', 'GPIO:GPIO_PB1MD_GPIO@IOPBMD', 'AN9:GPIO_PB1MD_AN9@IOPBMD'] },
    { f: ['PB.2', 'GPIO:GPIO_PB2MD_GPIO@IOPBMD', 'AN10:GPIO_PB2MD_AN10@IOPBMD'] },
    { f: ['PB.3', 'GPIO:GPIO_PB3MD_GPIO@IOPBMD', 'AN11:GPIO_PB3MD_AN11@IOPBMD', 'CMP0_CMPIN0B:GPIO_PB3MD_CMPIN0B@IOPBMD'] },
    { f: ['PB.4', 'GPIO:GPIO_PB4MD_GPIO@IOPBMD', 'AN12:GPIO_PB4MD_AN12@IOPBMD', 'CMP0_CMPREF0B:GPIO_PB4MD_CMPREF0B@IOPBMD'] },
    { f: ['PB.5', 'GPIO:GPIO_PB5MD_GPIO@IOPBMD', 'AN13:GPIO_PB5MD_AN13@IOPBMD'] },
    { f: ['PB.6', 'GPIO:GPIO_PB6MD_GPIO@IOPBMD', 'AN14:GPIO_PB6MD_AN14@IOPBMD'] },
    { f: ['PB.7', 'GPIO:GPIO_PB7MD_GPIO@IOPBMD', 'AN15:GPIO_PB7MD_AN15@IOPBMD'] }
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
    'LED_LED7:LED output pin',
    'LED_LED6:LED output pin',
    'LED_LED5:LED output pin',
    'LED_LED4:LED output pin',
    'LED_LED3:LED output pin',
    'LED_LED2:LED output pin',
    'LED_LED1:LED output pin',
    'LED_LED0:LED output pin',
    'DAC1_DA1OUT1:D/A converter 1 output pin',
    'DAC1_DA1OUT0:D/A converter 1 output pin',
    'DAC0_DA0OUT1:D/A converter 0 output pin',
    'DAC0_DA0OUT0:D/A converter 0 output pin',
    'CMP1_CMPOT1:Comparator 1 output pin',
    'CMP0_CMPOT0:Comparator 0 output pin',
    'CMP1_CMPREF1B:Comparator 1B  reference input pin',
    'CMP1_CMPREF1A:Comparator 1A  reference input pin',
    'CMP1_CMPIN1B:Comparator 1B input pin',
    'CMP1_CMPIN1A:Comparator 1A input pin',
    'CMP0_CMPREF0B:Comparator 0B  reference input pin',
    'CMP0_CMPREF0A:Comparator 0A  reference input pin',
    'CMP0_CMPIN0B:Comparator 0B input pin',
    'CMP0_CMPIN0A:Comparator 0A input pin',
    'AN23:A/D converter analog input 23 pin',
    'AN22:A/D converter analog input 22 pin',
    'AN21:A/D converter analog input 21 pin',
    'AN20:A/D converter analog input 20 pin',
    'AN19:A/D converter analog input 19 pin',
    'AN18:A/D converter analog input 18 pin',
    'AN17:A/D converter analog input 17 pin',
    'AN16:A/D converter analog input 16 pin',
    'AN15:A/D converter analog input 15 pin',
    'AN14:A/D converter analog input 14 pin',
    'AN13:A/D converter analog input 13 pin',
    'AN12:A/D converter analog input 12 pin',
    'AN11:A/D converter analog input 11 pin',
    'AN10:A/D converter analog input 10 pin',
    'AN9:A/D converter analog input 09 pin',
    'AN8:A/D converter analog input 08 pin',
    'AN7:A/D converter analog input 07 pin',
    'AN6:A/D converter analog input 06 pin',
    'AN5:A/D converter analog input 05 pin',
    'AN4:A/D converter analog input 04 pin',
    'AN3:A/D converter analog input 03 pin',
    'AN2:A/D converter analog input 02 pin',
    'AN1:A/D converter analog input 01 pin',
    'AN0:A/D converter analog input 00 pin',
    'LIN_LTX0B:LTX clock input/output pin',
    'LIN_LRX0B:LRX clock input/output pin',
    'LIN_LTX0A:LTX clock input/output pin',
    'LIN_LRX0A:LRX clock input/output pin',
    'SIF8_SDA8:I2C5 clock input/output pin',
    'SIF8_SCL8:I2C5 clock input/output pin',
    'SIF7_SDA7B:I2C5 clock input/output pin',
    'SIF7_SCL7B:I2C5 clock input/output pin',
    'SIF7_SDA7A:I2C5 clock input/output pin',
    'SIF7_SCL7A:I2C5 clock input/output pin',
    'SIF6_SDA6B:I2C5 clock input/output pin',
    'SIF6_SCL6B:I2C5 clock input/output pin',
    'SIF6_SDA6A:I2C5 clock input/output pin',
    'SIF6_SCL6A:I2C5 clock input/output pin',
    'SIF5_SBT5:SIF5 clock input/output pin',
    'SIF5_SBO5:SIF5 data input/output pin',
    'SIF5_SBI5:SIF5 data input pin',
    'SIF5_SBC5:SIF5 chip select input/output pin',
    'SIF4_SBT4B:SIF4 clock input/output pin',
    'SIF4_SBO4B:SIF4 data input/output pin',
    'SIF4_SBI4B:SIF4 data input pin',
    'SIF4_SBC4B:SIF4 chip select input/output pin',
    'SIF4_SBT4A:SIF4 clock input/output pin',
    'SIF4_SBO4A:SIF4 data input/output pin',
    'SIF4_SBI4A:SIF4 data input pin',
    'SIF4_SBC4A:SIF4 chip select input/output pin',
    'SIF3_SBT3B:SIF3 clock input/output pin',
    'SIF3_SBO3B:SIF3 data input/output pin',
    'SIF3_SBI3B:SIF3 data input pin',
    'SIF3_SBC3B:SIF3 chip select input/output pin',
    'SIF3_SBT3A:SIF3 clock input/output pin',
    'SIF3_SBO3A:SIF3 data input/output pin',
    'SIF3_SBI3A:SIF3 data input pin',
    'SIF3_SBC3A:SIF3 chip select input/output pin',
    'SIF2_SBT2B:SIF2 clock input/output pin',
    'SIF2_SBO2B:SIF2 data input/output pin',
    'SIF2_SBI2B:SIF2 data input pin',
    'SIF2_SBC2B:SIF2 chip select input/output pin',
    'SIF2_SBT2A:SIF2 clock input/output pin',
    'SIF2_SBO2A:SIF2 data input/output pin',
    'SIF2_SBI2A:SIF2 data input pin',
    'SIF2_SBC2A:SIF2 chip select input/output pin',
    'SIF1_SBT1B:SIF1 clock input/output pin',
    'SIF1_SBO1B:SIF1 data input/output pin',
    'SIF1_SBI1B:SIF1 data input pin',
    'SIF1_SBC1B:SIF1 chip select input/output pin',
    'SIF1_SBT1A:SIF1 clock input/output pin',
    'SIF1_SBO1A:SIF1 data input/output pin',
    'SIF1_SBI1A:SIF1 data input pin',
    'SIF1_SBC1A:SIF1 chip select input/output pin',
    'SIF0_SBT0B:SIF0 clock input/output pin',
    'SIF0_SBO0B:SIF0 data input/output pin',
    'SIF0_SBI0B:SIF0 data input pin',
    'SIF0_SBT0A:SIF0 clock input/output pin',
    'SIF0_SBO0A:SIF0 data input/output pin',
    'SIF0_SBI0A:SIF0 data input pin',
    'BZ_BUZZERB:BUZZER output pin B',
    'BZ_NBUZZERB:NBUZZER output pin B',
    'BZ_BUZZERA:BUZZER output pin A',
    'BZ_NBUZZERA:NBUZZER output pin A',
    "PWM0_PWMBCSTA:GPWM's Binary Counter Status",
    'PWM0_NPWM2A:NGPWM2A output pin',
    'PWM0_PWM2A:GPWM2A output pin',
    'PWM0_NPWM1A:NGPWM1A output pin',
    'PWM0_PWM1A:GPWM1A output pin',
    'PWM0_NPWM0A:NGPWM0A output pin',
    'PWM0_PWM0A:GPWM0A output pin',
    'TM15IOC:Timer 15 input/output pin C',
    'TM15IOB:Timer 15 input/output pin B',
    'TM15IOA:Timer 15 input/output pin A',
    'TM14IOB:Timer 14 input/output pin B',
    'TM14IOA:Timer 14 input/output pin A',
    'TM13IOB:Timer 13 input/output pin B',
    'TM13IOA:Timer 13 input/output pin A',
    'TM12IOB:Timer 12 input/output pin B',
    'TM12IOA:Timer 12 input/output pin A',
    'TM11IOB:Timer 11 input/output pin B',
    'TM11IOA:Timer 11 input/output pin A',
    'TM10IOB:Timer 10 input/output pin B',
    'TM10IOA:Timer 10 input/output pin A',
    'TM09IOB:Timer 9 input/output pin B',
    'TM09IOA:Timer 9 input/output pin A',
    'SDO7:Timer 8 synchronous output 7',
    'SDO6:Timer 8 synchronous output 6',
    'SDO5:Timer 8 synchronous output 5',
    'SDO4:Timer 8 synchronous output 4',
    'SDO3:Timer 8 synchronous output 3',
    'SDO2:Timer 8 synchronous output 2',
    'SDO1:Timer 8 synchronous output 1',
    'SDO0:Timer 8 synchronous output 0',
    'TM08IOC:Timer 8 input/output pin C',
    'TM08IOB:Timer 8 input/output pin B',
    'TM08IOA:Timer 8 input/output pin A',
    'TM07OUT5:Timer 7 output pin 5',
    'TM07OUT4:Timer 7 output pin 4',
    'TM07OUT3:Timer 7 output pin 3',
    'TM07OUT2:Timer 7 output pin 2',
    'TM07OUT1:Timer 7 output pin 1',
    'TM07OUT0:Timer 7 output pin 0',
    'TM07IOC:Timer 7 input/output pin C',
    'TM07IOB:Timer 7 input/output pin B',
    'TM07IOA:Timer 7 input/output pin A',
    'TM04IOC:Timer 4 input/output pin C',
    'TM04IOB:Timer 4 input/output pin B',
    'TM04IOA:Timer 4 input/output pin A',
    'TM03IOC:Timer 3 input/output pin C',
    'TM03IOB:Timer 3 input/output pin B',
    'TM03IOA:Timer 3 input/output pin A',
    'TM02IOC:Timer 2 input/output pin C',
    'TM02IOB:Timer 2 input/output pin B',
    'TM02IOA:Timer 2 input/output pin A',
    'TM01IOC:Timer 1 input/output pin C',
    'TM01IOB:Timer 1 input/output pin B',
    'TM01IOA:Timer 1 input/output pin A',
    'TM00IOC:Timer 0 input/output pin C',
    'TM00IOB:Timer 0 input/output pin B',
    'TM00IOA:Timer 0 input/output pin A',
    'KEY7:KEY interrupt 7',
    'KEY6:KEY interrupt 6',
    'KEY5:KEY interrupt 5',
    'KEY4:KEY interrupt 4',
    'KEY3:KEY interrupt 3',
    'KEY2:KEY interrupt 2',
    'KEY1:KEY interrupt 1',
    'KEY0:KEY interrupt 0',
    'IRQ4A:External interrupt 4',
    'IRQ3A:External interrupt 3',
    'IRQ2A:External interrupt 2',
    'IRQ1A:External interrupt 1',
    'IRQ0A:External interrupt 0',
    'XO:External clock output',
    'XI:External clock input',
    'OSCO:External clock output',
    'OSCI:External clock input',
    'MONOUT:Monitor output pin',
    'DBG_SWDD:Debug data input/output pin',
    'DBG_SWDCLK:Debug clock input pin',
];

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.IOP0MD = '0x40004200';
NUTOOL_PIN.g_cfg_regDescriptions.IOP1MD = '0x40004210';
NUTOOL_PIN.g_cfg_regDescriptions.IOP2MD = '0x40004220';
NUTOOL_PIN.g_cfg_regDescriptions.IOP3MD = '0x40004230';
NUTOOL_PIN.g_cfg_regDescriptions.IOP4MD = '0x40004240';
NUTOOL_PIN.g_cfg_regDescriptions.IOP5MD = '0x40004250';
NUTOOL_PIN.g_cfg_regDescriptions.IOP6MD = '0x40004260';
NUTOOL_PIN.g_cfg_regDescriptions.IOP7MD = '0x40004270';
NUTOOL_PIN.g_cfg_regDescriptions.IOP8MD = '0x40004280';
NUTOOL_PIN.g_cfg_regDescriptions.IOP9MD = '0x40004290';
NUTOOL_PIN.g_cfg_regDescriptions.IOPAMD = '0x400042A0';
NUTOOL_PIN.g_cfg_regDescriptions.IOPBMD = '0x400042B0';

NUTOOL_PIN.g_cfg_unusedGPIO = {
    'KM1M0DF02N/K(LQFP100_D0x)': {
        'ALL': []
    },
    'KM1M0DF03N/K(LQFP80_D0x)': {
        'ALL': []
    },
    'KM1M0DF13N/K(LQFP80_D1x)': {
        'ALL': []
    },
    'KM1M0DF04N/K(TQFP64_D0x)': {
        'ALL': []
    }
};

NUTOOL_PIN.g_cfg_OrCAD = {
    "LQFP100_D0x": [
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
    ]
};
NUTOOL_PIN.g_cfg_WPPin = ['P0.0', 'P0.1'];
// [Workaround] Sometimes NUTOOL_PIN.g_cfg_WPPin will be reset. 
setTimeout(function() {
    NUTOOL_PIN.g_cfg_WPPin = ['P0.0', 'P0.1'];
}, 100);


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