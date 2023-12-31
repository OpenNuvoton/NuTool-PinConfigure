// chip content
NUTOOL_PIN.g_cfg_chips = [
	//M071M
	{ name: "M071MC2AE", pkg: "LQFP44" },
	{ name: "M071MD2AE", pkg: "LQFP44" },
	//M071QV
	//{ name: "M071QG4AE", pkg: "LQFP80" }, // Remove LQFP80 pkg
	//{ name: "M071QE4AE", pkg: "LQFP80" }, // Remove LQFP80 pkg
	{ name: "M071VG4AE", pkg: "LQFP100" },
	//M071R1S
	{ name: "M071R1D3AE", pkg: "LQFP64" },
	{ name: "M071R1E3AE", pkg: "LQFP64" },
	{ name: "M071SD3AE", pkg: "LQFP64" },
	{ name: "M071SE3AE", pkg: "LQFP64" }
];

NUTOOL_PIN.g_cfg_pkgs = {
	"LQFP64": [
		'PB.14', 'PB.13', 'VBAT', 'X32_OUT', 'X32_IN', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 'PB.4',
		'PB.5', 'PB.6', 'PB.7', 'LDO_CAP', 'VDD', 'VSS',
		'USB_VBUS', 'USB_VDD33_CAP', 'USB_D-', 'USB_D+', 'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PC.3', 'PC.2',
		'PC.1', 'PC.0', 'PE.5', 'PB.11', 'PB.10', 'PB.9',
		'PC.11', 'PC.10', 'PC.9', 'PC.8', 'PA.15', 'PA.14', 'PA.13', 'PA.12', 'ICE_DAT', 'ICE_CLK',
		'AVSS', 'PA.0', 'PA.1', 'PA.2', 'PA.3', 'PA.4',
		'PA.5', 'PA.6', 'VREF', 'AVDD', 'PC.7', 'PC.6', 'PC.15', 'PC.14', 'PB.15', 'PF.0',
		'PF.1', 'nRESET', 'VSS', 'VDD', 'PVSS', 'PB.8'
	],
	"LQFP48": [
		'VBAT', 'X32_OUT', 'X32_IN', 'PA.11', 'PA.10', 'PA.9', 'PA.8', 'PB.4', 'PB.5', 'LDO_CAP',
		'VDD', 'VSS',
		'USB_VBUS', 'USB_VDD33_CAP', 'USB_D-', 'USB_D+', 'PB.0', 'PB.1', 'PB.2', 'PB.3', 'PC.3', 'PC.2',
		'PC.1', 'PC.0',
		'PA.15', 'PA.14', 'PA.13', 'PA.12', 'ICE_DAT', 'ICE_CLK', 'AVSS', 'PA.0', 'PA.1', 'PA.2',
		'PA.3', 'PA.4',
		'PA.5', 'PA.6', 'VREF', 'AVDD', 'PC.7', 'PC.6', 'PB.15', 'PF.0', 'PF.1', 'nRESET',
		'PVSS', 'PB.8'
	]
};

NUTOOL_PIN.g_cfg_OrCAD = {};

NUTOOL_PIN.g_cfg_gpios = [
	{ f: ['PA.0:0', 'ADC0:1']},
	{ f: ['PA.1:0', 'ADC1:1', 'AD12:7']},
	{ f: ['PA.2:0', 'ADC2:1', 'AD11:7']},
	{ f: ['PA.3:0', 'ADC3:1', 'AD10:7']},
	{ f: ['PA.4:0', 'ADC4:1', 'AD9:7']},
	{ f: ['PA.5:0', 'ADC5:1', 'AD8:7']},
	{ f: ['PA.6:0', 'ADC6:1', 'AD7:3']},
	{ f: ['PA.7:0']},
	{ f: ['PA.8:0', 'I2C0_SDA:1']},
	{ f: ['PA.9:0', 'I2C0_SCL:1']},
	{ f: ['PA.10:0', 'I2C1_SDA:1', 'nWR:3']},
	{ f: ['PA.11:0', 'I2C1_SCL:1', 'nRD:3']},
	{ f: ['PA.12:0', 'PWM0:1', 'AD13:7']},
	{ f: ['PA.13:0', 'PWM1:1', 'AD14:7']},
	{ f: ['PA.14:0', 'PWM2:1', 'AD15:7']},
	{ f: ['PA.15:0', 'PWM3:1']},

	{ f: ['PB.0:0', 'UART0_RXD:1']},
	{ f: ['PB.1:0', 'UART0_TXD:1']},
	{ f: ['PB.2:0', 'UART0_nRTS:1', 'TM2_EXT:3', 'TM2:5', 'nWRL:25']},
	{ f: ['PB.3:0', 'UART0_nCTS:1', 'TM3_EXT:3', 'TM3:5', 'nWRH:25']},
	{ f: ['PB.4:0', 'UART1_RXD:1']},
	{ f: ['PB.5:0', 'UART1_TXD:1']},
	{ f: ['PB.6:0', 'UART1_nRTS:1', 'ALE:3']},
	{ f: ['PB.7:0', 'UART1_nCTS:1', 'nCS:3']},
	{ f: ['PB.8:0', 'TM0:1', 'STADC:2', 'CLKO:3']},
	{ f: ['PB.9:0', 'TM1:1', 'UART2_TXD:3']},
	{ f: ['PB.10:0', 'TM2:1', 'UART2_RXD:3']},
	{ f: ['PB.11:0', 'TM3:1', 'PWM4:3']},
	{ f: ['PB.12:0']},
	{ f: ['PB.13:0', 'AD1:1']},
	{ f: ['PB.14:0', 'INT0:1', 'AD0:3']},
	{ f: ['PB.15:0', 'INT1:1', 'TM0:3', 'ADC11:4', 'TM0_EXT:5', 'AD6:9']},

	{ f: ['PC.0:0', 'SPI0_SS0:1']},
	{ f: ['PC.1:0', 'SPI0_CLK:1']},
	{ f: ['PC.2:0', 'SPI0_MISO0:1']},
	{ f: ['PC.3:0', 'SPI0_MOSI0:1']},
	{ f: ['PC.4:0']},
	{ f: ['PC.5:0']},
	{ f: ['PC.6:0', 'ADC8:1', 'AD4:3']},
	{ f: ['PC.7:0', 'ADC7:1', 'AD5:3']},
	{ f: ['PC.8:0', 'SPI1_SS0:1', 'MCLK:7']},
	{ f: ['PC.9:0', 'SPI1_CLK:1']},
	{ f: ['PC.10:0', 'SPI1_MISO0:1']},
	{ f: ['PC.11:0', 'SPI1_MOSI0:1']},
	{ f: ['PC.12:0']},
	{ f: ['PC.13:0']},
	{ f: ['PC.14:0', 'ADC10:1', 'AD2:3']},
	{ f: ['PC.15:0', 'ADC9:1', 'AD3:3']},

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
	{ f: ['PE.5:0', 'PWM5:1', 'TM1:3', 'TM1_EXT:5']},
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

	{ f: ['PF.0:0', 'XT1_OUT:1']},
	{ f: ['PF.1:0', 'XT1_IN:1']},
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

NUTOOL_PIN.g_cfg_gpiosDefines = [
	{ f: ['PA.0', 'ADC0:SYS_GPA_MFP_PA0_ADC0@GPA_MFP'] },
	{ f: ['PA.1', 'ADC1:SYS_GPA_MFP_PA1_ADC1@GPA_MFP', 'AD12:SYS_GPA_MFP_PA1_AD12@GPA_MFP/SYS_ALT_MFP_PA1_AD12@ALT_MFP'] },
	{ f: ['PA.2', 'ADC2:SYS_GPA_MFP_PA2_ADC2@GPA_MFP', 'AD11:SYS_GPA_MFP_PA2_AD11@GPA_MFP/SYS_ALT_MFP_PA2_AD11@ALT_MFP'] },
	{ f: ['PA.3', 'ADC3:SYS_GPA_MFP_PA3_ADC3@GPA_MFP', 'AD10:SYS_GPA_MFP_PA3_AD10@GPA_MFP/SYS_ALT_MFP_PA3_AD10@ALT_MFP'] },
	{ f: ['PA.4', 'ADC4:SYS_GPA_MFP_PA4_ADC4@GPA_MFP', 'AD9:SYS_GPA_MFP_PA4_AD9@GPA_MFP/SYS_ALT_MFP_PA4_AD9@ALT_MFP'] },
	{ f: ['PA.5', 'ADC5:SYS_GPA_MFP_PA5_ADC5@GPA_MFP', 'AD8:SYS_GPA_MFP_PA5_AD8@GPA_MFP/SYS_ALT_MFP_PA5_AD8@ALT_MFP'] },
	{ f: ['PA.6', 'ADC6:SYS_GPA_MFP_PA6_ADC6@GPA_MFP', 'AD7:SYS_GPA_MFP_PA6_AD7@GPA_MFP/SYS_ALT_MFP_PA6_AD7@ALT_MFP'] },
	{ f: ['PA.7']},
	{ f: ['PA.8', 'I2C0_SDA:SYS_GPA_MFP_PA8_I2C0_SDA@GPA_MFP'] },
	{ f: ['PA.9', 'I2C0_SCL:SYS_GPA_MFP_PA9_I2C0_SCL@GPA_MFP'] },
	{ f: ['PA.10', 'I2C1_SDA:SYS_GPA_MFP_PA10_I2C1_SDA@GPA_MFP', 'nWR:SYS_GPA_MFP_PA10_nWR@GPA_MFP/SYS_ALT_MFP_PA10_nWR@ALT_MFP'] },
	{ f: ['PA.11', 'I2C1_SCL:SYS_GPA_MFP_PA11_I2C1_SCL@GPA_MFP', 'nRD:SYS_GPA_MFP_PA11_nRD@GPA_MFP/SYS_ALT_MFP_PA11_nRD@ALT_MFP'] },
	{ f: ['PA.12', 'PWM0:SYS_GPA_MFP_PA12_PWM0@GPA_MFP', 'AD13:SYS_GPA_MFP_PA12_AD13@GPA_MFP/SYS_ALT_MFP_PA12_AD13@ALT_MFP'] },
	{ f: ['PA.13', 'PWM1:SYS_GPA_MFP_PA13_PWM1@GPA_MFP', 'AD14:SYS_GPA_MFP_PA13_AD14@GPA_MFP/SYS_ALT_MFP_PA13_AD14@ALT_MFP'] },
	{ f: ['PA.14', 'PWM2:SYS_GPA_MFP_PA14_PWM2@GPA_MFP', 'AD15:SYS_GPA_MFP_PA14_AD15@GPA_MFP/SYS_ALT_MFP_PA14_AD15@ALT_MFP'] },
	{ f: ['PA.15', 'PWM3:SYS_GPA_MFP_PA15_PWM3@GPA_MFP'] },

	{ f: ['PB.0', 'UART0_RXD:SYS_GPB_MFP_PB0_UART0_RXD@GPB_MFP'] },
	{ f: ['PB.1', 'UART0_TXD:SYS_GPB_MFP_PB1_UART0_TXD@GPB_MFP'] },
	{ f: ['PB.2', 'UART0_nRTS:SYS_GPB_MFP_PB2_UART0_nRTS@GPB_MFP', 'TM2_EXT:SYS_GPB_MFP_PB2_TM2_EXT@GPB_MFP/SYS_ALT_MFP_PB2_TM2_EXT@ALT_MFP', 'TM2:SYS_GPB_MFP_PB2_TM2@GPB_MFP/SYS_ALT_MFP2_PB2_TM2@ALT_MFP2', 'nWRL:SYS_GPB_MFP_PB2_nWRL@GPB_MFP/SYS_ALT_MFP_PB2_nWRL@ALT_MFP'] },
	{ f: ['PB.3', 'UART0_nCTS:SYS_GPB_MFP_PB3_UART0_nCTS@GPB_MFP', 'TM3_EXT:SYS_GPB_MFP_PB3_TM3_EXT@GPB_MFP/SYS_ALT_MFP_PB3_TM3_EXT@ALT_MFP', 'TM3:SYS_GPB_MFP_PB3_TM3@GPB_MFP/SYS_ALT_MFP2_PB3_TM3@ALT_MFP2', 'nWRH:SYS_GPB_MFP_PB3_nWRH@GPB_MFP/SYS_ALT_MFP_PB3_nWRH@ALT_MFP'] },
	{ f: ['PB.4', 'UART1_RXD:SYS_GPB_MFP_PB4_UART1_RXD@GPB_MFP'] },
	{ f: ['PB.5', 'UART1_TXD:SYS_GPB_MFP_PB5_UART1_TXD@GPB_MFP'] },
	{ f: ['PB.6', 'UART1_nRTS:SYS_GPB_MFP_PB6_UART1_nRTS@GPB_MFP', 'ALE:SYS_GPB_MFP_PB6_ALE@GPB_MFP/SYS_ALT_MFP_PB6_ALE@ALT_MFP'] },
	{ f: ['PB.7', 'UART1_nCTS:SYS_GPB_MFP_PB7_UART1_nCTS@GPB_MFP', 'nCS:SYS_GPB_MFP_PB7_nCS@GPB_MFP/SYS_ALT_MFP_PB7_nCS@ALT_MFP'] },
	{ f: ['PB.8', 'TM0:SYS_GPB_MFP_PB8_TM0@GPB_MFP', 'STADC:SYS_ALT_MFP_PB8_STADC@ALT_MFP', 'CLKO:SYS_GPB_MFP_PB8_CLKO@GPB_MFP/SYS_ALT_MFP_PB8_CLKO@ALT_MFP'] },
	{ f: ['PB.9', 'TM1:SYS_GPB_MFP_PB9_TM1@GPB_MFP', 'UART2_TXD:SYS_GPB_MFP_PB9_UART2_TXD@GPB_MFP/SYS_ALT_MFP_PB9_UART2_TXD@ALT_MFP'] },
	{ f: ['PB.10', 'TM2:SYS_GPB_MFP_PB10_TM2@GPB_MFP', 'UART2_RXD:SYS_GPB_MFP_PB10_UART2_RXD@GPB_MFP/SYS_ALT_MFP_PB10_UART2_RXD@ALT_MFP'] },
	{ f: ['PB.11', 'TM3:SYS_GPB_MFP_PB11_TM3@GPB_MFP', 'PWM4:SYS_GPB_MFP_PB11_PWM4@GPB_MFP/SYS_ALT_MFP_PB11_PWM4@ALT_MFP'] },
	{ f: ['PB.12']},
	{ f: ['PB.13', 'AD1:SYS_GPB_MFP_PB13_AD1@GPB_MFP'] },
	{ f: ['PB.14', 'INT0:SYS_GPB_MFP_PB14_INT0@GPB_MFP', 'AD0:SYS_GPB_MFP_PB14_AD0@GPB_MFP/SYS_ALT_MFP2_PB14_AD0@ALT_MFP2'] },
	{ f: ['PB.15', 'INT1:SYS_GPB_MFP_PB15_INT1@GPB_MFP', 'TM0_EXT:SYS_GPB_MFP_PB15_TM0_EXT@GPB_MFP/SYS_ALT_MFP_PB15_TM0_EXT@ALT_MFP', 'TM0:SYS_GPB_MFP_PB15_TM0@GPB_MFP/SYS_ALT_MFP2_PB15_TM0@ALT_MFP2', 'AD6:SYS_GPB_MFP_PB15_AD6@GPB_MFP/SYS_ALT_MFP2_PB15_AD6@ALT_MFP2', 'ADC11:SYS_ALT_MFP_PB15_ADC11@ALT_MFP'] },
	{ f: ['PC.0', 'SPI0_SS0:SYS_GPC_MFP_PC0_SPI0_SS0@GPC_MFP'] },
	{ f: ['PC.1', 'SPI0_CLK:SYS_GPC_MFP_PC1_SPI0_CLK@GPC_MFP'] },
	{ f: ['PC.2', 'SPI0_MISO0:SYS_GPC_MFP_PC2_SPI0_MISO0@GPC_MFP'] },
	{ f: ['PC.3', 'SPI0_MOSI0:SYS_GPC_MFP_PC3_SPI0_MOSI0@GPC_MFP'] },
	{ f: ['PC.4']},
	{ f: ['PC.5']},
	{ f: ['PC.6', 'ADC8:SYS_GPC_MFP_PC6_ADC8@GPC_MFP', 'AD4:SYS_GPC_MFP_PC6_AD4@GPC_MFP/SYS_ALT_MFP_PC6_AD4@ALT_MFP'] },
	{ f: ['PC.7', 'ADC7:SYS_GPC_MFP_PC7_ADC7@GPC_MFP', 'AD5:SYS_GPC_MFP_PC7_AD5@GPC_MFP/SYS_ALT_MFP_PC7_AD5@ALT_MFP'] },
	{ f: ['PC.8', 'SPI1_SS0:SYS_GPC_MFP_PC8_SPI1_SS0@GPC_MFP', 'MCLK:SYS_GPC_MFP_PC8_MCLK@GPC_MFP/SYS_ALT_MFP_PC8_MCLK@ALT_MFP'] },
	{ f: ['PC.9', 'SPI1_CLK:SYS_GPC_MFP_PC9_SPI1_CLK@GPC_MFP'] },
	{ f: ['PC.10', 'SPI1_MISO0:SYS_GPC_MFP_PC10_SPI1_MISO0@GPC_MFP'] },
	{ f: ['PC.11', 'SPI1_MOSI0:SYS_GPC_MFP_PC11_SPI1_MOSI0@GPC_MFP'] },
	{ f: ['PC.12']},
	{ f: ['PC.13']},
	{ f: ['PC.14', 'ADC10:SYS_GPC_MFP_PC14_ADC10@GPC_MFP', 'AD2:SYS_GPC_MFP_PC14_AD2@GPC_MFP/SYS_ALT_MFP_PC14_AD2@ALT_MFP'] },
	{ f: ['PC.15', 'ADC9:SYS_GPC_MFP_PC15_ADC9@GPC_MFP', 'AD3:SYS_GPC_MFP_PC15_AD3@GPC_MFP/SYS_ALT_MFP_PC15_AD3@ALT_MFP'] },

	{ f: ['PD.0']},
	{ f: ['PD.1']},
	{ f: ['PD.2']},
	{ f: ['PD.3']},
	{ f: ['PD.4']},
	{ f: ['PD.5']},
	{ f: ['PD.6']},
	{ f: ['PD.7']},
	{ f: ['PD.8']},
	{ f: ['PD.9']},
	{ f: ['PD.10']},
	{ f: ['PD.11']},
	{ f: ['PD.12']},
	{ f: ['PD.13']},
	{ f: ['PD.14']},
	{ f: ['PD.15']},

	{ f: ['PE.0']},
	{ f: ['PE.1']},
	{ f: ['PE.2']},
	{ f: ['PE.3']},
	{ f: ['PE.4']},
	{ f: ['PE.5', 'PWM5:SYS_GPE_MFP_PE5_PWM5@GPE_MFP', 'TM1_EXT:SYS_GPE_MFP_PE5_TM1_EXT@GPE_MFP/SYS_ALT_MFP_PE5_TM1_EXT@ALT_MFP', 'TM1:SYS_GPE_MFP_PE5_TM1@GPE_MFP/SYS_ALT_MFP2_PE5_TM1@ALT_MFP2'] },
	{ f: ['PF.0', 'XT1_OUT:SYS_GPF_MFP_PF0_XT1_OUT@GPF_MFP'] },
	{ f: ['PF.1', 'XT1_IN:SYS_GPF_MFP_PF1_XT1_IN@GPF_MFP'] }
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
	'AD0:EBI Address/Data bus bit0',
	'AD1:EBI Address/Data bus bit1',
	'AD2:EBI Address/Data bus bit2',
	'AD3:EBI Address/Data bus bit3',
	'AD4:EBI Address/Data bus bit4',
	'AD5:EBI Address/Data bus bit5',
	'AD6:EBI Address/Data bus bit6',
	'AD7:EBI Address/Data bus bit7',
	'AD8:EBI Address/Data bus bit8',
	'AD9:EBI Address/Data bus bit9',
	'AD10:EBI Address/Data bus bit10',
	'AD11:EBI Address/Data bus bit11',
	'AD12:EBI Address/Data bus bit12',
	'AD13:EBI Address/Data bus bit13',
	'AD14:EBI Address/Data bus bit14',
	'AD15:EBI Address/Data bus bit15',
	'ADC0:ADC0 analog input',
	'ADC1:ADC1 analog input',
	'ADC2:ADC2 analog input',
	'ADC3:ADC3 analog input',
	'ADC4:ADC4 analog input',
	'ADC5:ADC5 analog input',
	'ADC6:ADC6 analog input',
	'ADC7:ADC7 analog input',
	'ADC8:ADC8 analog input',
	'ADC9:ADC9 analog input',
	'ADC10:ADC10 analog input',
	'ADC11:ADC11 analog input',
	'ALE:EBI address latch enable output pin',
	'AVDD:Power supply for internal analog circuit',
	'AVSS:Ground pin for analog circuit',
	'CLKO:Frequency divider clock output pin',
	'I2C0_SCL:I2C0 clock pin',
	'I2C0_SDA:I2C0 data input/output pin',
	'I2C1_SCL:I2C1 clock pin',
	'I2C1_SDA:I2C1 data input/output pin',
	'ICE_CLK:Serial wire debugger clock pin',
	'ICE_DAT:Serial wire debugger data pin',
	'INT0:External interrupt0 input pin',
	'INT1:External interrupt1 input pin',
	'LDO_CAP:LDO output pin',
	'MCLK:EBI clock output ',
	'nCS:EBI chip select enable output pin',
	'nRD:EBI read enable output pin',
	'nRESET:External reset input: active LOW, with an internal pull-up. Set this pin low reset chip to initial state',
	'nWR:EBI write enable output pin',
	'nWRH:EBI high byte write enable output pin',
	'nWRL:EBI low byte write enable output pin',
	'PVSS:PLL ground',
	'PWM0:PWM0 output/Capture input',
	'PWM1:PWM1 output/Capture input',
	'PWM2:PWM2 output/Capture input',
	'PWM3:PWM3 output/Capture input',
	'PWM4:PWM4 output/Capture input',
	'PWM5:PWM5 output/Capture input',
	'SPI0_CLK:SPI0 serial clock pin',
	'SPI0_MISO0:1st SPI0 MISO (Master In, Slave Out) pin',
	'SPI0_MOSI0:1st SPI0 MOSI (Master Out, Slave In) pin',
	'SPI0_SS0:1st SPI0 slave select pin',
	'SPI1_CLK:SPI1 serial clock pin',
	'SPI1_MISO0:1st SPI1 MISO (Master In, Slave Out) pin',
	'SPI1_MOSI0:1st SPI1 MOSI (Master Out, Slave In) pin',
	'SPI1_SS0:1st SPI1 slave select pin',
	'STADC:ADC external trigger input',
	'TM0:Timer0 event counter input / toggle output',
	'TM0_EXT:Timer 0 external capture input pin',
	'TM1:Timer1 event counter input / toggle output',
	'TM1_EXT:Timer1 external capture input pin',
	'TM2:Timer2 event counter input / toggle output',
	'TM2_EXT:Timer2 external capture input pin',
	'TM3:Timer3 event counter input / toggle output',
	'TM3_EXT:Timer3 external capture input pin',
	'UART0_nCTS:Clear to Send input pin for UART0',
	'UART0_nRTS:Request to Send output pin for UART0',
	'UART0_RXD:Data receiver input pin for UART0',
	'UART0_TXD:Data transmitter output pin for UART0',
	'UART1_nCTS:Clear to Send input pin for UART1',
	'UART1_nRTS:Request to Send output pin for UART1',
	'UART1_RXD:Data receiver input pin for UART1',
	'UART1_TXD:Data transmitter output pin for UART1',
	'UART2_RXD:Data receiver input pin for UART2',
	'UART2_TXD:Data transmitter output pin for UART2',
	'USB_D-:USB differential signal D-',
	'USB_D+:USB differential signal D+',
	'USB_VBUS:Power supply from USB host or HUB',
	'USB_VDD33_CAP:Internal power regulator output 3.3V decoupling pin',
	'VBAT:Power supply by batteries for RTC',
	'VDD:Power supply for I/O ports and LDO source for internal PLL and digital circuit',
	'VREF:Voltage reference input for ADC',
	'VSS:Ground pin for digital circuit',
	'X32_IN:External 32.768 kHz (low speed) crystal input pin',
	'X32_OUT:External 32.768 kHz (low speed) crystal output pin',
	'XT1_IN:External 4~24 MHz (high speed) crystal input pin',
	'XT1_OUT:External 4~24 MHz (high speed) crystal output pin'
];

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.GPA_MFP = '0x50000030';
NUTOOL_PIN.g_cfg_regDescriptions.GPB_MFP = '0x50000034';
NUTOOL_PIN.g_cfg_regDescriptions.GPC_MFP = '0x50000038';
NUTOOL_PIN.g_cfg_regDescriptions.GPE_MFP = '0x50000040';
NUTOOL_PIN.g_cfg_regDescriptions.GPF_MFP = '0x50000044';
NUTOOL_PIN.g_cfg_regDescriptions.ALT_MFP = '0x50000050';
NUTOOL_PIN.g_cfg_regDescriptions.ALT_MFP2 = '0x5000005C';

NUTOOL_PIN.g_cfg_gpioMatrix = [
	{ f: ['PA.0', 'GPA_MFP[0]:0']},
	{ f: ['PA.1', 'GPA_MFP[1]:0', 'ALT_MFP[11]:1', 'ALT_MFP[20]:2']},
	{ f: ['PA.2', 'GPA_MFP[2]:0', 'ALT_MFP[11]:1', 'ALT_MFP[19]:2']},
	{ f: ['PA.3', 'GPA_MFP[3]:0', 'ALT_MFP[11]:1', 'ALT_MFP[18]:2']},
	{ f: ['PA.4', 'GPA_MFP[4]:0', 'ALT_MFP[11]:1', 'ALT_MFP[17]:2']},
	{ f: ['PA.5', 'GPA_MFP[5]:0', 'ALT_MFP[11]:1', 'ALT_MFP[16]:2']},
	{ f: ['PA.6', 'GPA_MFP[6]:0', 'ALT_MFP[11]:1']},
	{ f: ['PA.7']},
	{ f: ['PA.8', 'GPA_MFP[8]:0']},
	{ f: ['PA.9', 'GPA_MFP[9]:0']},
	{ f: ['PA.10', 'GPA_MFP[10]:0', 'ALT_MFP[11]:1']},
	{ f: ['PA.11', 'GPA_MFP[11]:0', 'ALT_MFP[11]:1']},
	{ f: ['PA.12', 'GPA_MFP[12]:0', 'ALT_MFP[11]:1', 'ALT_MFP[21]:2']},
	{ f: ['PA.13', 'GPA_MFP[13]:0', 'ALT_MFP[11]:1', 'ALT_MFP[22]:2']},
	{ f: ['PA.14', 'GPA_MFP[14]:0', 'ALT_MFP[11]:1', 'ALT_MFP[23]:2']},
	{ f: ['PA.15', 'GPA_MFP[15]:0']},

	{ f: ['PB.0', 'GPB_MFP[0]:0']},
	{ f: ['PB.1', 'GPB_MFP[1]:0']},
	{ f: ['PB.2', 'GPB_MFP[2]:0', 'ALT_MFP[26]:1', 'ALT_MFP2[4]:2', 'ALT_MFP[11]:3', 'ALT_MFP[13]:4']},
	{ f: ['PB.3', 'GPB_MFP[3]:0', 'ALT_MFP[27]:1', 'ALT_MFP2[5]:2', 'ALT_MFP[11]:3', 'ALT_MFP[14]:4']},
	{ f: ['PB.4', 'GPB_MFP[4]:0']},
	{ f: ['PB.5', 'GPB_MFP[5]:0']},
	{ f: ['PB.6', 'GPB_MFP[6]:0', 'ALT_MFP[11]:1']},
	{ f: ['PB.7', 'GPB_MFP[7]:0', 'ALT_MFP[11]:1']},
	{ f: ['PB.8', 'GPB_MFP[8]:0', 'ALT_MFP[29]:1']},
	{ f: ['PB.9', 'GPB_MFP[9]:0', 'ALT_MFP[1]:1']},
	{ f: ['PB.10', 'GPB_MFP[10]:0', 'ALT_MFP[0]:1']},
	{ f: ['PB.11', 'GPB_MFP[11]:0', 'ALT_MFP[4]:1']},
	{ f: ['PB.12']},
	{ f: ['PB.13', 'GPB_MFP[13]:0']},
	{ f: ['PB.14', 'GPB_MFP[14]:0', 'ALT_MFP2[1]:1']},
	{ f: ['PB.15', 'GPB_MFP[15]:0', 'ALT_MFP2[2]:1', 'ALT_MFP[24]:2', 'ALT_MFP2[1]:3']},

	{ f: ['PC.0', 'GPC_MFP[0]:0']},
	{ f: ['PC.1', 'GPC_MFP[1]:0']},
	{ f: ['PC.2', 'GPC_MFP[2]:0']},
	{ f: ['PC.3', 'GPC_MFP[3]:0']},
	{ f: ['PC.4']},
	{ f: ['PC.5']},
	{ f: ['PC.6', 'GPC_MFP[6]:0', 'ALT_MFP[11]:1']},
	{ f: ['PC.7', 'GPC_MFP[7]:0', 'ALT_MFP[11]:1']},
	{ f: ['PC.8', 'GPC_MFP[8]:0', 'ALT_MFP[11]:1', 'ALT_MFP[12]:2']},
	{ f: ['PC.9', 'GPC_MFP[9]:0']},
	{ f: ['PC.10', 'GPC_MFP[10]:0']},
	{ f: ['PC.11', 'GPC_MFP[11]:0']},
	{ f: ['PC.12']},
	{ f: ['PC.13']},
	{ f: ['PC.14', 'GPC_MFP[14]:0', 'ALT_MFP[11]:1']},
	{ f: ['PC.15', 'GPC_MFP[15]:0', 'ALT_MFP[11]:1']},

	{ f: ['PD.0']},
	{ f: ['PD.1']},
	{ f: ['PD.2']},
	{ f: ['PD.3']},
	{ f: ['PD.4']},
	{ f: ['PD.5']},
	{ f: ['PD.6']},
	{ f: ['PD.7']},
	{ f: ['PD.8']},
	{ f: ['PD.9']},
	{ f: ['PD.10']},
	{ f: ['PD.11']},
	{ f: ['PD.12']},
	{ f: ['PD.13']},
	{ f: ['PD.14']},
	{ f: ['PD.15']},

	{ f: ['PE.0']},
	{ f: ['PE.1']},
	{ f: ['PE.2']},
	{ f: ['PE.3']},
	{ f: ['PE.4']},
	{ f: ['PE.5', 'GPE_MFP[5]:0', 'ALT_MFP2[3]:1', 'ALT_MFP[25]:2']},
	{ f: ['PE.6']},
	{ f: ['PE.7']},
	{ f: ['PE.8']},
	{ f: ['PE.9']},
	{ f: ['PE.10']},
	{ f: ['PE.11']},
	{ f: ['PE.12']},
	{ f: ['PE.13']},
	{ f: ['PE.14']},
	{ f: ['PE.15']},

	{ f: ['PF.0', 'GPF_MFP[0]:0']},
	{ f: ['PF.1', 'GPF_MFP[1]:0']},
	{ f: ['PF.2']},
	{ f: ['PF.3']},
	{ f: ['PF.4']},
	{ f: ['PF.5']},
	{ f: ['PF.6']},
	{ f: ['PF.7']},
	{ f: ['PF.8']},
	{ f: ['PF.9']},
	{ f: ['PF.10']},
	{ f: ['PF.11']},
	{ f: ['PF.12']},
	{ f: ['PF.13']},
	{ f: ['PF.14']},
	{ f: ['PF.15']}
];

NUTOOL_PIN.g_cfg_shareBits = [
	'ALT_MFP[11]',
	'ALT_MFP2[1]'
];

NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {};
NUTOOL_PIN.g_cfg_WPPin = [];

NUTOOL_PIN.decidepackageNumber = function (given_partNumber_package) {
	var partNumber_package;

	if (typeof given_partNumber_package === 'undefined') {
		partNumber_package = NUTOOL_PIN.getg_partNumber_package();
	}
	else {
		partNumber_package = given_partNumber_package;
	}

	NUTOOL_PIN.g_packageNumber = partNumber_package.substring(partNumber_package.indexOf('(') + 1);
	NUTOOL_PIN.g_packageNumber = NUTOOL_PIN.g_packageNumber.substring(0, NUTOOL_PIN.g_packageNumber.indexOf(')'));
	NUTOOL_PIN.g_packageNumberIndex = NUTOOL_PIN.g_packageNumber;

	partNumber_package = null;
};
