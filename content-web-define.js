/* eslint-disable no-unused-vars */
// main code of NuTool - IpConfigure
// the sole global variable denoted by capital letters
var NUTOOL_PIN = {
    getg_partNumber_package: function () {
        return g_partNumber_package;
    },
    getg_partNumber_package: function () {
        return g_partNumber_package;
    },
};
NUTOOL_PIN.g_horizontalIndexArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'T', 'U', 'V', 'W', 'Y'];


// main code of NuTool - ClockConfigure
// the sole global variable denoted by capital letters
var NUTOOL_CLOCK = {};


// main code of NuTool - Peripheral
// the sole global variable denoted by capital letters
var NUTOOL_PER = {};

// all the global variables within the immediately-invoked function scope
var //
    // g_bLessThanOrEqualIE8,
    // g_unPrintedCharacters,
    // g_utility = {
    //     getContext: null,
    //     removeContext: null,
    //     addEvent: null,
    //     triggerEvent: null
    // },
    // g_NUC_TreeView_Width = 0,
    // g_Dialog_Width,
    // g_Dialog_Height,
    g_chipTypes = ["M251", "M253", "M031", "NUC100", "M2003"],
    // g_chipTypesDeveloping = ["M030G", "DEMO"],
    g_chipType = "", // "M251",
    // g_updatedSnippetFile = "",
    // g_selectedPartNoValue = "",
    g_partNumber_package = "", // = "M251EC2AE(TSSOP28)",
    g_partNumber_type = "",
    g_supportedGPIOPins = {},
    // g_userHeader = "",
    g_generatedCodeFromPerString = "",
    g_enabledThirdPartyLibString = "",
    g_enabledPeripheralFunctionString = "",
    // g_currentSnippetFilePath = "",
    // g_currentSnippetLayoutath = "",                      No use
    // g_lastCheckedSnippetNode = "",
    g_currentTool = "PeripheralConfigure",
    g_groupIds = {},
    g_recordedIds = {},
    g_perControls = {},
    // g_enabledThirdPartyLibNodes = [],
    // g_enabledPeripheralFunctionNodes = [],
    g_enabledPeripheralFunctionData = {},
    // g_field1SubDIVs = [],
    // g_field1SubDIVsCache = {},
    g_module_snippet = [],
    g_module_snippet_primitive = [],
    // g_module_snippet_buttonId = [],
    g_module_snippet_code = [],
    // g_module_snippet_header = [],
    g_module_snippet_pin = [],
    g_module_snippet_clock = [],
    // g_module_snippet_peripheral = [],
    // g_alpacaFormRepository = [],
    g_object = {},
    // g_toast_pin,
    // g_toast_clock,
    // g_toast_peripheral,
    // g_alpacaFormIndex = 0,
    // g_field1SubIndex = 0,
    // g_thirdPartyLibTreeHeight = 0,
    // g_readConfigFile,
    // g_userSelectUIlanguage,
    g_bReadyForRelease = true, // should be true For Release
    g_bDevelopingTool = false;  // should be false For Release
    // g_bPressEnter = false,
    // g_bInvokedByCDHtmlDialog = true,
    // g_bAlpacaValidationResult = true,
    // g_bCheckNodesBasedOnConfigFile = true;





// Only web version use!!!

// the sole global variable denoted by capital letters
var EXPORT_REACT = {};

// var g_bWebVersion = "v1.0"; // v1.0: electron, v2.0: Web
var g_snippetName = "";
var g_perControlsAutoTest = {}; // For autoTest, it need default value. 
var g_perControlsFilter = {}
var g_cfg_projectLoaction = "";
var g_toolVersion = "";
var g_cfg_perFunctions = [];
var g_module_snippet_txt = {};

var g_perControls_pin = {}; // store localPin
var g_perControls_clock = {}; // store localClock

var g_basic_test_mode = null; // Easy to debug

var PATH = {
    // Folder
    // result: "\\..\\..\\result\\",
    result: "\\PeripheralConfigure\\FunctionalTesting\\result\\",
    AutoTest: "\\PeripheralConfigure\\FunctionalTesting\\AutoTest\\",

    // File
    Keil_exe: "C:\\Keil_v5\\UV4\\UV4.exe",
    // Iar_exe: "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.4\\common\\bin\\IarBuild.exe",
    Iar_exe: "C:\\Program Files (x86)\\IAR Systems\\Embedded Workbench 8.2\\common\\bin\\IarBuild.exe",
    // Gcc_exe: "C:\\Program Files (x86)\\Nuvoton Tools\\NuEclipse\\V1.02.024r\\NuEclipse\\eclipse\\eclipsec.exe",
    Gcc_exe: "C:\\Program Files (x86)\\Nuvoton Tools\\NuEclipse\\V1.02.025a\\NuEclipse\\eclipse\\eclipsec.exe",
    NuLink_exe: "C:\\Program Files (x86)\\Nuvoton Tools\\NuLink Command Tool\\NuLink.exe",
};



var
    g_NUC_Pin_Total_Number = 0,
    g_NUC_Pin_Down_Number = 0,
    g_NUC_Pin_Right_Number = 0,
    g_NUC_Pin_Upper_Number = 0,
    g_NUC_Pin_Left_Number = 0,
    g_NUC_Pin_SideMax_Number = 0,
    g_NUC_Pin_Horizontal_Number = 0,
    g_NUC_Pin_Vertial_Number = 0,

    g_colorForConfiguredByUser = '#FAB92D',
    g_colorForTooltipOnHover = '#41AF88',
    g_colorForFocusedByMouse = '#FC517E',
    g_colorForNotGPIO = 'darkgrey',

    g_commonStringFont = '12px Arial',
    g_NUC_Pin_Interval = 0,
    g_bLessThanOrEqualIE8 = false,

    g_NUC_Pin_Padding = 24,
    g_NUC_Chip_Padding = 25,
    g_NUC_Pin_Width = 16,
    g_NUC_Pin_Height = 40,
    g_NUC_Pin_Radius = 30,

    g_NUC_Chip_StartPoint_X = 0,// the X coordinate of upper-left corner of the chip
    g_NUC_Chip_StartPoint_Y = 0,// the Y coordinate of upper-left corner of the chip

    g_bShowPinDescriptions = false,

    g_Canvas_Width = 0,  // the whole canvas width
    g_Canvas_Height = 0, // the whole canvas height
    g_Dialog_Width = 0,  // the app's dialog width
    g_Dialog_Height = 0, // the app's dialog height
    g_NUC_rootTree_Height = 0,  // the height of the left TreeView. It will be dynamic.
    g_NUC_Chip_Length = 0,      // the length of one side of the chip

    g_gpio_MFPs = [],
    g_module_pins = [],
    g_pinCurrentDescription = [],
    g_unusedGPIO = {},


    g_disabledSubNodesArray = [],
    g_disabledLeafNodesArray = [],

    g_module_functions = [],
    g_chipPinDescriptions = []
    ;

// For Loading Config File
var g_pinsConfiguredByGPIO = [],
    g_userDefinedPin = {},
    g_lockedPin = [],
    g_read_gpio_MFPs = []
    ;


var g_read_cfg_pkgs = [];

var g_gpio_MFPsString,
    g_gpio_MFPsString1,
    g_pinCurrentStateString,
    g_pinsConfiguredByGPIOstring,
    g_pinCurrentModule,
    g_userDefinedPinString,
    g_lockededPinString,
    g_briefName = "NuMicro",
    g_copyrightCompanyName = " Nuvoton Technology Corp."
    ;

var g_includeHeadFileString,
    g_generatedCodeByPinString,
    g_generatedCodeByModuleString,
    g_generatedCodeByGPIOstring,
    g_gpio_MFPsStringForFunctionalTest,
    g_gpio_MFPsStringForFunctionalTest1,
    g_pin_descriptions
    ;

// Connect to Target Chip
var deviceConnected = false,
    connectedDevicePID,
    completePIDList = [],
    worker
    ;