// chip content
NUTOOL_PIN.g_cfg_chips = [
	// ML51
	{ name: "ML51BB9AE", pkg: "MSOP10" },
	{ name: "ML51DB9AE", pkg: "TSSOP14" },
	{ name: "ML51FB9AE", pkg: "TSSOP20" },
	{ name: "ML51OB9AE", pkg: "SOP20" },
	{ name: "ML51XB9AE", pkg: "QFN20" },
	{ name: "ML51EB9AE", pkg: "TSSOP28" },
	{ name: "ML51UB9AE", pkg: "SOP28" },
	{ name: "ML51PB9AE", pkg: "LQFP32" },
	{ name: "ML51TB9AE", pkg: "QFN33" },
	{ name: "ML51EC0AE", pkg: "TSSOP28" },
	{ name: "ML51UC0AE", pkg: "SOP28" },
	{ name: "ML51PC0AE", pkg: "LQFP32" },
	{ name: "ML51TC0AE", pkg: "QFN33" },
	// ML5156
	{ name: "ML51TD1AE", pkg: "QFN33" },
	{ name: "ML51LD1AE", pkg: "LQFP48" },
	{ name: "ML51SD1AE", pkg: "LQFP64" },
	// ML56
	{ name: "ML56SD1AE", pkg: "LQFP64" },
	{ name: "ML54SD1AE", pkg: "LQFP64" },
	{ name: "ML56MD1AE", pkg: "LQFP44" },
	{ name: "ML54MD1AE", pkg: "LQFP44" },
	{ name: "ML56LD1AE", pkg: "LQFP48" },
	{ name: "ML54LD1AE", pkg: "LQFP48" }
];

NUTOOL_PIN.g_cfg_pkgs = {
	"MSOP10(16K)": [
		'P5.1', 'VSS', 'P4.6', 'VDD', 'P2.3',
		'P2.0', 'P0.1', 'P0.0', 'nRESET', 'P5.0'
	],
	"TSSOP14(16K)": [
		'VSS', 'P4.6', 'VDD', 'P3.1', 'P3.0', 'P2.5', 'P2.4',
		'P5.3', 'P5.2', 'P0.3', 'P0.2', 'nRESET', 'P5.0', 'P5.1'
	],
	"QFN20(16K)": [
		'P2.5', 'P2.4', 'P2.3', 'P2.2', 'P2.1',
		'P0.3', 'P0.2', 'P0.1', 'P0.0', 'nRESET',
		'P5.0', 'P5.1', 'P4.1', 'P4.0', 'P1.7',
		'VSS', 'P4.6', 'VDD', 'P3.1', 'P3.0'
	],
	"TSSOP20(16K)": [
		'VSS', 'P4.6', 'VDD', 'P3.2', 'P3.1', 'P3.0', 'VREF', 'P2.5', 'P2.4', 'P2.3',
		'P2.2', 'P5.3', 'P5.2', 'P0.3', 'P0.2', 'P0.1', 'P0.0', 'nRESET', 'P5.0', 'P5.1'
	],
	"TSSOP28(16K)": [
		'P1.4', 'P1.5', 'P1.6', 'P1.7', 'VSS', 'P4.6', 'VDD', 'P3.2', 'P3.1', 'P3.0',
		'VREF', 'P2.5', 'P2.4', 'P2.3',
		'P2.2', 'P2.1', 'P2.0', 'P5.3', 'P5.2', 'P0.3', 'P0.2', 'P0.1', 'P0.0', 'nRESET',
		'P5.0', 'P5.1', 'P4.1', 'P4.0'
	],
	"TSSOP28(32K)": [
		'P1.4', 'P1.5', 'P1.6', 'P1.7', 'VSS', 'P4.6', 'VDD', 'P3.2', 'P3.1', 'P3.0',
		'VREF', 'P2.5', 'P2.4', 'P2.3',
		'P2.2', 'P2.1', 'P2.0', 'P5.3', 'P5.2', 'P0.3', 'P0.2', 'P0.1', 'P0.0', 'nRESET',
		'P5.0',	'P5.1', 'P4.1', 'P4.0'
	],
	"QFN33(32K)": [
		'P2.5', 'P2.4', 'P2.3', 'P2.2', 'P2.1', 'P2.0', 'P5.5', 'P5.4',
		'P5.3', 'P5.2', 'P0.3', 'P0.2', 'P0.1', 'P0.0', 'P5.6', 'nRESET',
		'P5.0', 'P5.1', 'P4.1', 'P4.0', 'P1.4', 'P1.5', 'P1.6', 'P1.7',
		'VSS', 'P4.6', 'VDD', 'P3.3', 'P3.2', 'P3.1', 'P3.0', 'VREF'
	],
	"QFN33(64K)": [
		'P2.5', 'P2.4', 'P2.3', 'P2.2', 'P2.1', 'P2.0', 'P5.5', 'P5.4',
		'P5.3', 'P5.2', 'P0.3', 'P0.2', 'P0.1', 'P0.0', 'P5.6', 'nRESET',
		'P5.0', 'P5.1', 'P4.1', 'P4.0', 'P1.4', 'P1.5', 'P1.6', 'P1.7',
		'VSS', 'P4.6', 'VDD', 'P3.3', 'P3.2', 'P3.1', 'P3.0', 'VREF'
	],
	"LQFP48(64K)": [
		'P2.5', 'P2.4', 'P2.3', 'P2.2', 'P2.1', 'P2.0', 'P1.3', 'P1.2', 'P1.1', 'P1.0',
		'P5.5', 'P5.4',
		'P5.3', 'P5.2', 'P0.7', 'P0.6', 'P0.5', 'P0.4', 'P0.3', 'P0.2', 'P0.1', 'P0.0',
		'P5.6', 'nRESET',
		'P5.0', 'P5.1', 'P4.5', 'P4.4', 'P4.3', 'P4.2', 'P4.1', 'P4.0', 'P1.4', 'P1.5',
		'P1.6', 'P1.7',
		'VSS', 'P4.6', 'VDD', 'P4.7', 'P3.3', 'P3.2', 'P3.1', 'P3.0', 'VREF', 'AVSS',
		'P2.7', 'P2.6'
	],
	"LQFP64(64K)": [
		'P2.6', 'P2.5', 'P2.4', 'P2.3', 'P2.2', 'P2.1', 'P2.0', 'P1.3', 'P1.2', 'P1.1',
		'P1.0', 'P3.7', 'P5.7', 'P5.5', 'P5.4', 'P5.3',
		'P5.2', 'P3.5', 'P3.4', 'P0.7', 'P0.6', 'VSS', 'VDD', 'P3.6', 'P0.5', 'P0.4',
		'P0.3', 'P0.2', 'P0.1', 'P0.0', 'P5.6', 'nRESET',
		'P5.0', 'P5.1', 'P4.5', 'P4.4', 'P4.3', 'P4.2', 'P4.1', 'P4.0', 'P6.3', 'P6.2',
		'P6.1', 'P6.0', 'P1.4', 'P1.5', 'P1.6', 'P1.7',
		'VSS', 'P4.6', 'VDD', 'P4.7', 'P3.3', 'P3.2', 'P3.1', 'P3.0', 'VREF', 'VREF',
		'AVSS', 'P6.7', 'P6.6', 'P6.5', 'P6.4', 'P2.7'
	]
};

NUTOOL_PIN.g_cfg_OrCAD = {};

NUTOOL_PIN.g_cfg_gpios = [
	{ f: ['P0.0:0', 'SPI0_MOSI:3', 'SPI1_MOSI:4', 'UART0_RXD:7', 'PWM0_CH5:13']},
	{ f: ['P0.1:0', 'SPI0_MISO:3', 'SPI1_MISO:4', 'UART0_TXD:7', 'PWM0_CH4:13']},
	{ f: ['P0.2:0', 'SPI0_CLK:3', 'SPI1_CLK:4', 'UART1_RXD:8', 'I2C1_SDA:9', 'PWM0_CH3:13']},
	{ f: ['P0.3:0', 'SPI0_SS:3', 'SPI1_SS:4', 'UART1_TXD:8', 'I2C1_SCL:9', 'STADC:11', 'PWM0_CH2:13', 'PWM1_BRAKE:15']},
	{ f: ['P0.4:0', 'UART0_RXD:8', 'I2C0_SDA:9', 'PWM0_CH1:13']},
	{ f: ['P0.5:0', 'UART0_TXD:8', 'I2C0_SCL:9', 'PWM0_CH0:13']},
	{ f: ['P0.6:0', 'UART0_RXD:7', 'I2C1_SDA:8', 'PWM1_CH5:11', 'INT0:15']},
	{ f: ['P0.7:0', 'UART0_TXD:7', 'I2C1_SCL:8', 'PWM1_CH4:11', 'INT1:15']},

	{ f: ['P1.0:0', 'UART1_RXD:7', 'IC0:13']},
	{ f: ['P1.1:0', 'UART3_RXD:6', 'UART1_TXD:7', 'IC2:13']},
	{ f: ['P1.2:0', 'UART3_TXD:6', 'IC1:13']},
	{ f: ['P1.3:0', 'IC0:13']},
	{ f: ['P1.4:0', 'I2C1_SCL:4']},
	{ f: ['P1.5:0', 'I2C1_SDA:4']},
	{ f: ['P1.6:0', 'UART0_TXD:3']},
	{ f: ['P1.7:0', 'UART0_RXD:3']},

	{ f: ['P2.0:0', 'ADC_CH5:1', 'ACMP0_N1:1', 'UART2_RXD:7', 'I2C1_SDA:9', 'PWM0_CH5:11', 'PWM1_CH5:12', 'PWM0_BRAKE:13']},
	{ f: ['P2.1:0', 'ADC_CH4:1', 'ACMP0_P2:1', 'ACMP1_P2:1', 'UART2_TXD:7', 'I2C1_SCL:9', 'PWM0_CH4:11', 'PWM1_CH4:12', 'PWM0_BRAKE:13']},
	{ f: ['P2.2:0', 'ADC_CH3:1', 'ACMP1_N0:1', 'I2C1_SDA:4', 'UART1_RXD:6', 'PWM0_CH3:11']},
	{ f: ['P2.3:0', 'ADC_CH2:1', 'ACMP0_P1:1', 'ACMP1_P1:1', 'I2C1_SCL:4', 'UART1_TXD:6', 'PWM0_CH2:11', 'PWM0_BRAKE:13']},
	{ f: ['P2.4:0', 'ADC_CH1:1', 'ACMP0_N0:1', 'I2C0_SDA:6', 'PWM0_CH1:11', 'UART2_RXD:13', 'T1:14', 'INT1:15']},
	{ f: ['P2.5:0', 'ADC_CH0:1', 'ACMP0_P0:1', 'ACMP1_P0:1', 'I2C0_SCL:6', 'PWM0_CH0:11', 'UART2_TXD:13', 'T0:14', 'INT0:15']},
	{ f: ['P2.6:0', 'UART1_RXD:6', 'PWM1_BRAKE:11', 'PWM1_CH5:12', 'ACMP1_O:15']},
	{ f: ['P2.7:0', 'UART1_TXD:6', 'PWM1_BRAKE:11', 'PWM1_CH4:12', 'ACMP0_O:15']},

	{ f: ['P3.0:0', 'SPI1_MOSI:4', 'UART0_RXD:6', 'PWM1_CH3:11', 'IC0:13']},
	{ f: ['P3.1:0', 'ADC_CH6:1', 'ACMP0_P3:1', 'ACMP1_P3:1', 'SPI1_MISO:4', 'UART3_TXD:5', 'UART0_TXD:6', 'PWM1_CH2:11', 'IC2:13']},
	{ f: ['P3.2:0', 'ADC_CH7:1', 'ACMP1_N1:1', 'SPI1_CLK:4', 'UART3_RXD:5', 'PWM1_CH1:11', 'IC1:13', 'CLKO:14']},
	{ f: ['P3.3:0', 'SPI1_SS:4', 'PWM1_CH0:11', 'IC0:13', 'PWM0_BRAKE:15']},
	{ f: ['P3.4:0', 'PWM1_CH3:11', 'T1:14']},
	{ f: ['P3.5:0', 'PWM1_CH2:11', 'T0:14']},
	{ f: ['P3.6:0', 'PWM0_CH5:12']},
	{ f: ['P3.7:0', 'SPI1_MOSI:5']},

	{ f: ['P4.0:0', 'UART2_RXD:8', 'I2C0_SDA:9', 'PWM1_CH5:12', 'ACMP1_O:14', 'INT1:15']},
	{ f: ['P4.1:0', 'UART2_TXD:8', 'I2C0_SCL:9', 'PWM1_CH4:12', 'ACMP0_O:14']},
	{ f: ['P4.2:0', 'PWM1_CH3:12']},
	{ f: ['P4.3:0', 'PWM1_CH2:12']},
	{ f: ['P4.4:0', 'UART2_RXD:8', 'I2C1_SDA:9', 'PWM1_CH1:12']},
	{ f: ['P4.5:0', 'UART2_TXD:8', 'I2C1_SCL:9', 'PWM1_CH0:12']},
	{ f: ['P4.6:0', 'PWM1_BRAKE:11', 'PWM0_CH0:12', 'T0:13', 'CLKO:14', 'INT0:15']},
	{ f: ['P4.7:0', 'T1:13']},

	{ f: ['P5.0:0', 'UART1_TXD:2', 'I2C1_SCL:3', 'UART0_TXD:4', 'ICE_DAT:14']},
	{ f: ['P5.1:0', 'UART1_RXD:2', 'I2C1_SDA:3', 'UART0_RXD:4', 'ICE_CLK:14']},
	{ f: ['P5.2:0', 'UART0_RXD:3', 'I2C0_SDA:4', 'XT1_OUT:10']},
	{ f: ['P5.3:0', 'UART0_TXD:3', 'I2C0_SCL:4', 'XT1_IN:10']},
	{ f: ['P5.4:0', 'UART2_TXD:2', 'PWM0_CH1:7', 'X32_OUT:10']},
	{ f: ['P5.5:0', 'UART2_RXD:2', 'PWM0_CH0:7', 'X32_IN:10', 'STADC:11']},
	{ f: ['P5.6:0', 'PWM0_BRAKE:11', 'PWM0_CH1:12', 'CLKO:14']},
	{ f: ['P5.7:0', 'PWM1_BRAKE:9', 'PWM0_BRAKE:10', 'PWM0_CH4:12', 'CLKO:13']},

	{ f: ['P6.0:0', 'SPI0_MOSI:4']},
	{ f: ['P6.1:0', 'UART3_RXD:3', 'SPI0_MISO:4']},
	{ f: ['P6.2:0', 'UART3_TXD:3', 'SPI0_CLK:4', 'UART0_RXD:9']},
	{ f: ['P6.3:0', 'SPI0_SS:4', 'UART0_TXD:9']},
	{ f: ['P6.4:0', 'UART0_RXD:5']},
	{ f: ['P6.5:0', 'UART0_TXD:5']},
	{ f: ['P6.6:0', 'I2C1_SDA:7']},
	{ f: ['P6.7:0', 'I2C1_SCL:7']}
];

NUTOOL_PIN.g_cfg_gpiosDefines = [
	{ f: ['P0.0', 'SPI0_MOSI:MFP_P00_SPI0_MOSI@P0MF76543210', 'SPI1_MOSI:MFP_P00_SPI1_MOSI@P0MF76543210', 'UART0_RXD:MFP_P00_UART0_RXD@P0MF76543210', 'PWM0_CH5:MFP_P00_PWM0_CH5@P0MF76543210'] },
	{ f: ['P0.1', 'SPI0_MISO:MFP_P01_SPI0_MISO@P0MF76543210', 'SPI1_MISO:MFP_P01_SPI1_MISO@P0MF76543210', 'UART0_TXD:MFP_P01_UART0_TXD@P0MF76543210', 'PWM0_CH4:MFP_P01_PWM0_CH4@P0MF76543210'] },
	{ f: ['P0.2', 'SPI0_CLK:MFP_P02_SPI0_CLK@P0MF76543210', 'SPI1_CLK:MFP_P02_SPI1_CLK@P0MF76543210', 'UART1_RXD:MFP_P02_UART1_RXD@P0MF76543210', 'I2C1_SDA:MFP_P02_I2C1_SDA@P0MF76543210', 'PWM0_CH3:MFP_P02_PWM0_CH3@P0MF76543210'] },
	{ f: ['P0.3', 'SPI0_SS:MFP_P03_SPI0_SS@P0MF76543210', 'SPI1_SS:MFP_P03_SPI1_SS@P0MF76543210', 'UART1_TXD:MFP_P03_UART1_TXD@P0MF76543210', 'I2C1_SCL:MFP_P03_I2C1_SCL@P0MF76543210', 'STADC:MFP_P03_STADC@P0MF76543210', 'PWM0_CH2:MFP_P03_PWM0_CH2@P0MF76543210', 'PWM1_BRAKE:MFP_P03_PWM1_BRAKE@P0MF76543210'] },
	{ f: ['P0.4', 'UART0_RXD:MFP_P04_UART0_RXD@P0MF76543210', 'I2C0_SDA:MFP_P04_I2C0_SDA@P0MF76543210', 'PWM0_CH1:MFP_P04_PWM0_CH1@P0MF76543210'] },
	{ f: ['P0.5', 'UART0_TXD:MFP_P05_UART0_TXD@P0MF76543210', 'I2C0_SCL:MFP_P05_I2C0_SCL@P0MF76543210', 'PWM0_CH0:MFP_P05_PWM0_CH0@P0MF76543210'] },
	{ f: ['P0.6', 'UART0_RXD:MFP_P06_UART0_RXD@P0MF76543210', 'I2C1_SDA:MFP_P06_I2C1_SDA@P0MF76543210', 'PWM1_CH5:MFP_P06_PWM1_CH5@P0MF76543210', 'INT0:MFP_P06_INT0@P0MF76543210'] },
	{ f: ['P0.7', 'UART0_TXD:MFP_P07_UART0_TXD@P0MF76543210', 'I2C1_SCL:MFP_P07_I2C1_SCL@P0MF76543210', 'PWM1_CH4:MFP_P07_PWM1_CH4@P0MF76543210', 'INT1:MFP_P07_INT1@P0MF76543210'] },

	{ f: ['P1.0', 'UART1_RXD:MFP_P10_UART1_RXD@P1MF76543210', 'IC0:MFP_P10_IC0@P1MF76543210'] },
	{ f: ['P1.1', 'UART3_RXD:MFP_P11_UART3_RXD@P1MF76543210', 'UART1_TXD:MFP_P11_UART1_TXD@P1MF76543210', 'IC2:MFP_P11_IC2@P1MF76543210'] },
	{ f: ['P1.2', 'UART3_TXD:MFP_P12_UART3_TXD@P1MF76543210', 'IC1:MFP_P12_IC1@P1MF76543210'] },
	{ f: ['P1.3', 'IC0:MFP_P13_IC0@P1MF76543210'] },
	{ f: ['P1.4', 'I2C1_SCL:MFP_P14_I2C1_SCL@P1MF76543210'] },
	{ f: ['P1.5', 'I2C1_SDA:MFP_P15_I2C1_SDA@P1MF76543210'] },
	{ f: ['P1.6', 'UART0_TXD:MFP_P16_UART0_TXD@P1MF76543210'] },
	{ f: ['P1.7', 'UART0_RXD:MFP_P17_UART0_RXD@P1MF76543210'] },

	{ f: ['P2.0', 'ADC_CH5:MFP_P20_ADC_CH5@P2MF76543210', 'ACMP0_N1:MFP_P20_ACMP0_N1@P2MF76543210', 'UART2_RXD:MFP_P20_UART2_RXD@P2MF76543210', 'I2C1_SDA:MFP_P20_I2C1_SDA@P2MF76543210', 'PWM0_CH5:MFP_P20_PWM0_CH5@P2MF76543210', 'PWM1_CH5:MFP_P20_PWM1_CH5@P2MF76543210', 'PWM0_BRAKE:MFP_P20_PWM0_BRAKE@P2MF76543210'] },
	{ f: ['P2.1', 'ADC_CH4:MFP_P21_ADC_CH4@P2MF76543210', 'ACMP0_P2:MFP_P21_ACMP0_P2@P2MF76543210', 'ACMP1_P2:MFP_P21_ACMP1_P2@P2MF76543210', 'UART2_TXD:MFP_P21_UART2_TXD@P2MF76543210', 'I2C1_SCL:MFP_P21_I2C1_SCL@P2MF76543210', 'PWM0_CH4:MFP_P21_PWM0_CH4@P2MF76543210', 'PWM1_CH4:MFP_P21_PWM1_CH4@P2MF76543210', 'PWM0_BRAKE:MFP_P21_PWM0_BRAKE@P2MF76543210'] },
	{ f: ['P2.2', 'ADC_CH3:MFP_P22_ADC_CH3@P2MF76543210', 'ACMP1_N0:MFP_P22_ACMP1_N0@P2MF76543210', 'I2C1_SDA:MFP_P22_I2C1_SDA@P2MF76543210', 'UART1_RXD:MFP_P22_UART1_RXD@P2MF76543210', 'PWM0_CH3:MFP_P22_PWM0_CH3@P2MF76543210'] },
	{ f: ['P2.3', 'ADC_CH2:MFP_P23_ADC_CH2@P2MF76543210', 'ACMP0_P1:MFP_P23_ACMP0_P1@P2MF76543210', 'ACMP1_P1:MFP_P23_ACMP1_P1@P2MF76543210', 'I2C1_SCL:MFP_P23_I2C1_SCL@P2MF76543210', 'UART1_TXD:MFP_P23_UART1_TXD@P2MF76543210', 'PWM0_CH2:MFP_P23_PWM0_CH2@P2MF76543210', 'PWM0_BRAKE:MFP_P23_PWM0_BRAKE@P2MF76543210'] },
	{ f: ['P2.4', 'ADC_CH1:MFP_P24_ADC_CH1@P2MF76543210', 'ACMP0_N0:MFP_P24_ACMP0_N0@P2MF76543210', 'I2C0_SDA:MFP_P24_I2C0_SDA@P2MF76543210', 'PWM0_CH1:MFP_P24_PWM0_CH1@P2MF76543210', 'UART2_RXD:MFP_P24_UART2_RXD@P2MF76543210', 'T1:MFP_P24_T1@P2MF76543210', 'INT1:MFP_P24_INT1@P2MF76543210'] },
	{ f: ['P2.5', 'ADC_CH0:MFP_P25_ADC_CH0@P2MF76543210', 'ACMP0_P0:MFP_P25_ACMP0_P0@P2MF76543210', 'ACMP1_P0:MFP_P25_ACMP1_P0@P2MF76543210', 'I2C0_SCL:MFP_P25_I2C0_SCL@P2MF76543210', 'PWM0_CH0:MFP_P25_PWM0_CH0@P2MF76543210', 'UART2_TXD:MFP_P25_UART2_TXD@P2MF76543210', 'T0:MFP_P25_T0@P2MF76543210', 'INT0:MFP_P25_INT0@P2MF76543210'] },
	{ f: ['P2.6', 'UART1_RXD:MFP_P26_UART1_RXD@P2MF76543210', 'PWM1_BRAKE:MFP_P26_PWM1_BRAKE@P2MF76543210', 'PWM1_CH5:MFP_P26_PWM1_CH5@P2MF76543210', 'ACMP1_O:MFP_P26_ACMP1_O@P2MF76543210'] },
	{ f: ['P2.7', 'UART1_TXD:MFP_P27_UART1_TXD@P2MF76543210', 'PWM1_BRAKE:MFP_P27_PWM1_BRAKE@P2MF76543210', 'PWM1_CH4:MFP_P27_PWM1_CH4@P2MF76543210', 'ACMP0_O:MFP_P27_ACMP0_O@P2MF76543210'] },

	{ f: ['P3.0', 'SPI1_MOSI:MFP_P30_SPI1_MOSI@P3MF76543210', 'UART0_RXD:MFP_P30_UART0_RXD@P3MF76543210', 'PWM1_CH3:MFP_P30_PWM1_CH3@P3MF76543210', 'IC0:MFP_P30_IC0@P3MF76543210'] },
	{ f: ['P3.1', 'ADC_CH6:MFP_P31_ADC_CH6@P3MF76543210', 'ACMP0_P3:MFP_P31_ACMP0_P3@P3MF76543210', 'ACMP1_P3:MFP_P31_ACMP1_P3@P3MF76543210', 'SPI1_MISO:MFP_P31_SPI1_MISO@P3MF76543210', 'UART3_TXD:MFP_P31_UART3_TXD@P3MF76543210', 'UART0_TXD:MFP_P31_UART0_TXD@P3MF76543210', 'PWM1_CH2:MFP_P31_PWM1_CH2@P3MF76543210', 'IC2:MFP_P31_IC2@P3MF76543210'] },
	{ f: ['P3.2', 'ADC_CH7:MFP_P32_ADC_CH7@P3MF76543210', 'ACMP1_N1:MFP_P32_ACMP1_N1@P3MF76543210', 'SPI1_CLK:MFP_P32_SPI1_CLK@P3MF76543210', 'UART3_RXD:MFP_P32_UART3_RXD@P3MF76543210', 'PWM1_CH1:MFP_P32_PWM1_CH1@P3MF76543210', 'IC1:MFP_P32_IC1@P3MF76543210', 'CLKO:MFP_P32_CLKO@P3MF76543210'] },
	{ f: ['P3.3', 'SPI1_SS:MFP_P33_SPI1_SS@P3MF76543210', 'PWM1_CH0:MFP_P33_PWM1_CH0@P3MF76543210', 'IC0:MFP_P33_IC0@P3MF76543210', 'PWM0_BRAKE:MFP_P33_PWM0_BRAKE@P3MF76543210'] },
	{ f: ['P3.4'] },
	{ f: ['P3.5'] },
	{ f: ['P3.6'] },
	{ f: ['P3.7'] },

	{ f: ['P4.0', 'UART2_RXD:MFP_P40_UART2_RXD@P4MF76543210', 'I2C0_SDA:MFP_P40_I2C0_SDA@P4MF76543210', 'PWM1_CH5:MFP_P40_PWM1_CH5@P4MF76543210', 'ACMP1_O:MFP_P40_ACMP1_O@P4MF76543210', 'INT1:MFP_P40_INT1@P4MF76543210'] },
	{ f: ['P4.1', 'UART2_TXD:MFP_P41_UART2_TXD@P4MF76543210', 'I2C0_SCL:MFP_P41_I2C0_SCL@P4MF76543210', 'PWM1_CH4:MFP_P41_PWM1_CH4@P4MF76543210', 'ACMP0_O:MFP_P41_ACMP0_O@P4MF76543210'] },
	{ f: ['P4.2', 'PWM1_CH3:MFP_P42_PWM1_CH3@P4MF76543210'] },
	{ f: ['P4.3', 'PWM1_CH2:MFP_P43_PWM1_CH2@P4MF76543210'] },
	{ f: ['P4.4', 'UART2_RXD:MFP_P44_UART2_RXD@P4MF76543210', 'I2C1_SDA:MFP_P44_I2C1_SDA@P4MF76543210', 'PWM1_CH1:MFP_P44_PWM1_CH1@P4MF76543210'] },
	{ f: ['P4.5', 'UART2_TXD:MFP_P45_UART2_TXD@P4MF76543210', 'I2C1_SCL:MFP_P45_I2C1_SCL@P4MF76543210', 'PWM1_CH0:MFP_P45_PWM1_CH0@P4MF76543210'] },
	{ f: ['P4.6', 'PWM1_BRAKE:MFP_P46_PWM1_BRAKE@P4MF76543210', 'PWM0_CH0:MFP_P46_PWM0_CH0@P4MF76543210', 'T0:MFP_P46_T0@P4MF76543210', 'CLKO:MFP_P46_CLKO@P4MF76543210', 'INT0:MFP_P46_INT0@P4MF76543210'] },
	{ f: ['P4.7', 'T1:MFP_P47_T1@P4MF76543210'] },

	{ f: ['P5.0', 'UART1_TXD:MFP_P50_UART1_TXD@P5MF76543210', 'I2C1_SCL:MFP_P50_I2C1_SCL@P5MF76543210', 'UART0_TXD:MFP_P50_UART0_TXD@P5MF76543210', 'ICE_DAT:MFP_P50_ICE_DAT@P5MF76543210'] },
	{ f: ['P5.1', 'UART1_RXD:MFP_P51_UART1_RXD@P5MF76543210', 'I2C1_SDA:MFP_P51_I2C1_SDA@P5MF76543210', 'UART0_RXD:MFP_P51_UART0_RXD@P5MF76543210', 'ICE_CLK:MFP_P51_ICE_CLK@P5MF76543210'] },
	{ f: ['P5.2', 'UART0_RXD:MFP_P52_UART0_RXD@P5MF76543210', 'I2C0_SDA:MFP_P52_I2C0_SDA@P5MF76543210', 'XT1_OUT:MFP_P52_XT1_OUT@P5MF76543210'] },
	{ f: ['P5.3', 'UART0_TXD:MFP_P53_UART0_TXD@P5MF76543210', 'I2C0_SCL:MFP_P53_I2C0_SCL@P5MF76543210', 'XT1_IN:MFP_P53_XT1_IN@P5MF76543210'] },
	{ f: ['P5.4', 'UART2_TXD:MFP_P54_UART2_TXD@P5MF76543210', 'PWM0_CH1:MFP_P54_PWM0_CH1@P5MF76543210', 'X32_OUT:MFP_P54_X32_OUT@P5MF76543210'] },
	{ f: ['P5.5', 'UART2_RXD:MFP_P55_UART2_RXD@P5MF76543210', 'PWM0_CH0:MFP_P55_PWM0_CH0@P5MF76543210', 'X32_IN:MFP_P55_X32_IN@P5MF76543210', 'STADC:MFP_P55_STADC@P5MF76543210'] },
	{ f: ['P5.6', 'PWM0_BRAKE:MFP_P56_PWM0_BRAKE@P5MF76543210', 'PWM0_CH1:MFP_P56_PWM0_CH1@P5MF76543210', 'CLKO:MFP_P56_CLKO@P5MF76543210'] },
	{ f: ['P5.7'] }
];

NUTOOL_PIN.g_cfg_gpiosDescriptions = [
	'ACMP0_N0:Analog comparator 0 negative input 0 pin',
	'ACMP0_N1:Analog comparator 0 negative input 1 pin',
	'ACMP0_O:Analog comparator 0 output pin',
	'ACMP0_P0:Analog comparator 0 positive input 0 pin',
	'ACMP0_P1:Analog comparator 0 positive input 1 pin',
	'ACMP0_P2:Analog comparator 0 positive input 2 pin',
	'ACMP0_P3:Analog comparator 0 positive input 3 pin',
	'ACMP1_N0:Analog comparator 1 negative input 0 pin',
	'ACMP1_N1:Analog comparator 1 negative input 1 pin',
	'ACMP1_O:Analog comparator 1 output pin',
	'ACMP1_P0:Analog comparator 1 positive input 0 pin',
	'ACMP1_P1:Analog comparator 1 positive input 1 pin',
	'ACMP1_P2:Analog comparator 1 positive input 2 pin',
	'ACMP1_P3:Analog comparator 1 positive input 3 pin',
	'ADC_CH0:ADC_CH0 channel analog input',
	'ADC_CH1:ADC_CH1 channel analog input',
	'ADC_CH2:ADC_CH2 channel analog input',
	'ADC_CH3:ADC_CH3 channel analog input',
	'ADC_CH4:ADC_CH4 channel analog input',
	'ADC_CH5:ADC_CH5 channel analog input',
	'ADC_CH6:ADC_CH6 channel analog input',
	'ADC_CH7:ADC_CH7 channel analog input',
	'CLKO:Clock Out',
	'I2C0_SCL:I2C0 clock pin',
	'I2C0_SDA:I2C0 data input/output pin',
	'I2C1_SCL:I2C1 clock pin',
	'I2C1_SDA:I2C1 data input/output pin',
	'IC0:Input Capture channel 0',
	'IC1:Input Capture channel 1',
	'IC2:Input Capture channel 2',
	'ICE_CLK:Serial wired debugger clock pin',
	'ICE_DAT:Serial wired debugger data pin',
	'INT0:External interrupt 0 input pin',
	'INT1:External interrupt 1 input pin',
	'PWM0_BRAKE:PWM0 Brake input pin',
	'PWM0_CH0:PWM0 channel 0 output/capture input',
	'PWM0_CH1:PWM0 channel 1 output/capture input',
	'PWM0_CH2:PWM0 channel 2 output/capture input',
	'PWM0_CH3:PWM0 channel 3 output/capture input',
	'PWM0_CH4:PWM0 channel 4 output/capture input',
	'PWM0_CH5:PWM0 channel 5 output/capture input',
	'PWM1_BRAKE:PWM1 Brake input pin',
	'PWM1_CH0:PWM1 channel 0 output/capture input',
	'PWM1_CH1:PWM1 channel 1 output/capture input',
	'PWM1_CH2:PWM1 channel 2 output/capture input',
	'PWM1_CH3:PWM1 channel 3 output/capture input',
	'PWM1_CH4:PWM1 channel 4 output/capture input',
	'PWM1_CH5:PWM1 channel 5 output/capture input',
	'SPI0_CLK:SPI0 serial clock pin',
	'SPI0_MISO:SPI0 MISO (Master In, Slave Out) pin',
	'SPI0_MOSI:SPI0 MOSI (Master Out, Slave In) pin',
	'SPI0_SS:SPI0 slave select pin',
	'SPI1_CLK:SPI1 serial clock pin',
	'SPI1_MISO:SPI1 MISO (Master In, Slave Out) pin',
	'SPI1_MOSI:SPI1 MOSI (Master Out, Slave In) pin',
	'SPI1_SS:SPI1 slave select pin',
	'STADC:ADC external trigger input',
	'T0:External count input to Timer/Counter 0 or its toggle output',
	'T1:External count input to Timer/Counter 1 or its toggle output',
	'UART0_RXD:UART0 data receiver input pin',
	'UART0_TXD:UART0 data transmitter output pin',
	'UART1_RXD:UART1 data receiver input pin',
	'UART1_TXD:UART1 data transmitter output pin',
	'UART2_RXD:UART2 data receiver input pin',
	'UART2_TXD:UART2 data transmitter output pin',
	'UART3_RXD:UART3 data receiver input pin',
	'UART3_TXD:UART3 data transmitter output pin',
	'X32_IN:External 32.768 kHz crystal input pin',
	'X32_OUT:External 32.768 kHz crystal output pin',
	'XT1_IN:External 4~24 MHz (high speed) crystal input pin',
	'XT1_OUT:External 4~24 MHz (high speed) crystal output pin'
];

NUTOOL_PIN.g_cfg_regDescriptions = {};
NUTOOL_PIN.g_cfg_regDescriptions.P0MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P1MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P2MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P3MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P4MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P5MF76543210 = 'This register is nonexistent';
NUTOOL_PIN.g_cfg_regDescriptions.P6MF76543210 = 'This register is nonexistent';

NUTOOL_PIN.g_cfg_gpioMatrix = [];
NUTOOL_PIN.g_cfg_shareBits = [];
NUTOOL_PIN.g_cfg_addGPIO = {};
NUTOOL_PIN.g_cfg_unusedGPIO = {
	"MSOP10(16K)": {
		"ALL": ["ACMP0", "ACMP1", "PWM1", "UART3"]
	},
	"TSSOP14(16K)": {
		"ALL": ["ACMP0", "ACMP1", "PWM1", "UART3"]
	},
	"QFN20(16K)": {
		"ALL": ["ACMP0", "ACMP1", "PWM1", "UART3"]
	},
	"TSSOP20(16K)": {
		"ALL": ["ACMP0", "ACMP1", "PWM1", "UART3"]
	},
	"TSSOP28(16K)": {
		"ALL": ["ACMP0", "ACMP1", "PWM1", "UART3"]
	},
	"TSSOP28(32K)": {
		"ALL": ["PWM1", "UART3"]
	},
	"QFN33(32K)": {
		"ALL": ["PWM1", "UART3"]
	}
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
	case 'MSOP10':
		NUTOOL_PIN.g_packageNumberIndex = "MSOP10(16K)";
		break;
	case 'TSSOP14':
		NUTOOL_PIN.g_packageNumberIndex = "TSSOP14(16K)";
		break;
	case 'TSSOP20':
	case 'SOP20':
		NUTOOL_PIN.g_packageNumberIndex = "TSSOP20(16K)";
		break;
	case 'QFN20':
		NUTOOL_PIN.g_packageNumberIndex = "QFN20(16K)";
		break;
	case 'LQFP32':
		NUTOOL_PIN.g_packageNumberIndex = "QFN33(32K)";
		break;
	case 'LQFP48':
		NUTOOL_PIN.g_packageNumberIndex = "LQFP48(64K)";
		break;
	case 'TSSOP28':
		switch (partNumber) {
		case "ML51EB9AE":
			NUTOOL_PIN.g_packageNumberIndex = "TSSOP28(16K)";
			break;
		default:
			NUTOOL_PIN.g_packageNumberIndex = "TSSOP28(32K)";
			break;
		}
		break;
	case 'SOP28':
		switch (partNumber) {
		case "ML51UB9AE":
			NUTOOL_PIN.g_packageNumberIndex = "TSSOP28(16K)";
			break;
		default:
			NUTOOL_PIN.g_packageNumberIndex = "TSSOP28(32K)";
			break;
		}
		break;
	case 'QFN33':
		switch (partNumber) {
		case "ML51TB9AE":
		case "ML51TC0AE":
			NUTOOL_PIN.g_packageNumberIndex = "QFN33(32K)";
			break;
		default:
			NUTOOL_PIN.g_packageNumberIndex = "QFN33(64K)";
			break;
		}
		break;
	}

	partNumber_package = null;
	partNumber = null;
};