// main code of NuTool - PinConfigure
// the sole global variable denoted by capital letters
var NUTOOL_PIN = {};

(function () {
    //private variables
    const VERSION_CODE = 'V1.29.0001';
    var g_bReadyForRelease = true, // should be true For Release
        g_bDevelopingTool = false,  // should be false For Release
        g_bTestingConflict = false,
        g_NUC_Pin_Total_Number = 0,
        g_NUC_Pin_Down_Number = 0,
        g_NUC_Pin_Right_Number = 0,
        g_NUC_Pin_Upper_Number = 0,
        g_NUC_Pin_Left_Number = 0,
        g_NUC_Pin_SideMax_Number = 0,
        g_NUC_Pin_Horizontal_Number = 0,
        g_NUC_Pin_Vertial_Number = 0,
        g_commonStringFont = '12px Arial',
        g_NUC_TreeView_Width = 275,
        g_NUC_Taskbar_height = 48,
        g_NUC_Pin_Width = 16,
        g_NUC_Pin_Height = 40,
        g_NUC_Pin_Radius = 30,
        g_NUC_Pin_Interval = 0,
        g_NUC_Pin_LengthWidth = 1,
        g_NUC_Pin_Surrounding = 10,
        g_NUC_Pin_Padding = 24,
        g_NUC_Chip_Padding = 25,
        g_NUC_Text_Padding = 3,
        g_NUC_TextDescription_Padding = 3,
        g_NUC_MultiFunction_Height = 20,
        g_NUC_MultiFunction_Padding = 7,
        g_NUC_MultiFunction_LengthWidth = 1,
        g_opacity_min,
        g_Canvas_Width = 0,  // the whole canvas width
        g_Canvas_Height = 0, // the whole canvas height
        g_Dialog_Width = 0,  // the app's dialog width
        g_Dialog_Height = 0, // the app's dialog height
        g_MFPTreeHeight = 0,        // the height of the left TreeView for the MFP and module. It will be dynamic.
        g_NUC_rootTree_Height = 0,  // the height of the left TreeView. It will be dynamic.
        g_NUC_Chip_Length = 0,      // the length of one side of the chip
        g_NUC_Chip_StartPoint_X = 0,// the X coordinate of upper-left corner of the chip
        g_NUC_Chip_StartPoint_Y = 0,// the Y coordinate of upper-left corner of the chip
        g_selectedPartNoValue,
        g_utility = {
            getContext: null,
            removeContext: null,
            addEvent: null
        },
        g_conflictCount = 0,
        g_conflictReport = "",
        g_userSelectUIlanguage = "",
        g_bUserDisplayTooltip,
        g_chipType, // MCU's chip type, such as NUC400 and M451.
        g_partNumber_package,  // for instance, NM1530VE3AE(LQFP100)
        g_chipSilkScreenPrint = "Nuvoton",
        g_briefName = "NuMicro",
        g_copyrightCompanyName = " Nuvoton Technology Corp.",
        g_readConfigFile,
        g_websocket = null,
        g_colorNotation_Shift_X = 20,
        g_colorNotation_Shift_Y = 20,
        g_colorNotation_Text_Width = 130,
        g_colorNotation_Interval = 5,
        g_colorForConfiguredByUser = '#FAB92D',
        g_colorForTooltipOnHover = '#41AF88',
        g_colorForFocusedByMouse = '#FC517E',
        g_colorForNotGPIO = '#9365C9',
        g_includeHeadFileString,
        g_gpio_MFPsString,
        g_gpio_MFPsString1,
        g_gpio_MFPsStringForFunctionalTest,
        g_gpio_MFPsStringForFunctionalTest1,
        g_pinCurrentStateString,
        g_pinsConfiguredByGPIOstring,
        g_pin_descriptions,
        g_generatedCodeByPinString,
        g_generatedCodeByModuleString,
        g_generatedCodeByGPIOstring,
        g_generatedMFPFunctionList,
        g_adjustedModulesMessageString,
        g_userDefinedPinString,
        g_lockededPinString,
        g_unPrintedCharacters,
        g_currIEZoom = 100,
        g_bestFitIEZoom = 100,
        g_minCurrIEZoom,
        g_chipPins = [], // to record the drawn pins within one side
        g_disabledSubNodesArray = [],
        g_disabledLeafNodesArray = [],
        // note that data populated in the order: g_chipPinDescriptions - > g_usedPins -> g_pinCurrentModule -> g_pinCurrentDescription
        g_chipPinDescriptions = [],  // to stash the pin descriptions of each pin. For instance, P0.0/PWM0_CH0/ECAP1_IC0
        g_usedPins = [], // to record the pins which have been configured to one of functions other than GPIO. Not that this array records the module, not the feature. For instance, 0:ADC.
        g_pinCurrentModule = [], // to stash the current module of all the pins
        g_pinCurrentDescription = [],// to stash the current description of all the pins
        g_pinsConfiguredByGPIO = [],
        g_undo_pinsConfiguredByGPIO = [],
        g_module_pins = [], // to stash all the pins for the individual module
        g_module_functions = [], // to stash all the functions for the individual module. Its sequence is identical to the sequence of g_module_pins.
        g_read_gpio_MFPs = [], // to stash the read MFPs from the saved configure file
        g_gpio_MFPs = [], // to stash the real-time GPIO multiple function control registers
        g_saved_gpio_MFPs = [], // to judge whether to invoke the dialog of warningForSaving
        g_undo_gpio_MFPs = [], // to roll back to the state prior to the adjustment of conflicts
        g_MFPFunctionsWaitForBeenChecked = [],
        g_MFPFunctionsWaitForMarkBlue = [],
        g_drawnMultiFunctionSeletions = [],
        g_pinsHighlightedByChipView = [],
        g_userDefinedPin = {},
        g_lockedPin = [],
        g_cfg_chipSeries = ["ISD9100", "ISD9300", "KM1M4BF", "KM1M7AF", "KM1M7BF", "KM1M7CF", "M029G", "M030G", "M031", "M051", "M0518", "M0519", "M0564", "M071", "M091", "M0A21", "M2003C", "M2351", "M251", "M261", "M2A23", "M2L31", "M433", "M451", "M460", "M466", "M471", "M479", "M480", "M55M1", "MA35D0", "MA35D1", "MA35H0", "MINI51", "MG51", "ML51", "MS51", "MUG51", "N76S003", "N76E003", "N9H30", "N9H30K63IIM", "NANO100", "NDA102", "NM1120", "NM1200", "NM1500", "NUC029", "NUC100", "NUC200", "NUC400", "NUC505", "NUC970", "NUC980"],
        g_cfg_chipSeriesDeveloping = ["M466", "M2A23"],
        g_bShowPinDescriptions = false, // by default, the pin descriptions would be covert.
        g_bConnectToTarget = false, // by default, the pin descriptions would be covert.
        g_bLessThanOrEqualIE8 = false,
        g_bCheckNodesBasedOnConfigFile = true,
        g_bUsingSpeedupCheck = true,
        deviceConnected = false,
        g_bLockPin = false,
        connectedDevicePID,
        completePIDList = [],
        worker;

    // after the browser has downloaded all the data, it will run the window.onload function.
    window.onload = function () {
        loadPinConfigureTool();
        initListeners();
        changeUIlanguage();
        parsingPartNumID();
        // 由於Electron無法get navigator.usb，所以Electron就在main讀，web就在worker讀
        if (isElectron()) {
            setIPCListener();
        } else {
            if (window.Worker) {
                worker = new Worker('./src/worker/webusb.worker-bundle.js');
                setWorkerListener();
            }
        }
        if (isElectron()) {
            $('#ID_BUTTON_RUN_NUCAD').show();   // TODO: 開啟時會閃一下，很醜
        }
        $('#versionCode').text(VERSION_CODE); // 設定版本號
    };
    // private functions
    function restoreAllchipPins() {
        var i, max;
        for (i = 0, max = g_chipPins.length; i < max; i += 1) {
            g_chipPins[i].restore();
        }
        g_chipPins.length = 0;

        i = null;
        max = null;
    }

    function drawChipViewAppearance() {
        var i,
            max,
            $panel = $("#panel"),
            element_NUC_PinConfiguration_Canvas,
            element_NUC_PinConfiguration_Canvas_Lining,
            context,
            chip_lining_gradient,
            liningTextInterval = 0,
            partNumberText,
            x,
            y,
            me,
            offset,
            pxCounter,
            pxCounter1;

        $panel[0].setAttribute('style', 'width:' + (window.innerWidth - g_NUC_TreeView_Width - 8) + 'px; height:' + (window.innerHeight - g_NUC_Taskbar_height - 8) + 'px; border: 1px solid white; position:absolute; left:' + g_NUC_TreeView_Width + 'px; top:0px;');
        if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            if (g_bLessThanOrEqualIE8) {
                $panel.hover(function () { $(this).css('opacity', '1'); $('#pin_side_0').show(); $('#NUC_PinConfiguration_Canvas_Lining').hide(); withdrawAllGreenPins(); }, function () { $(this).css('opacity', g_opacity_min); $('#pin_side_0').hide(); $('#NUC_PinConfiguration_Canvas_Lining').show(); });
            }
            else {
                $panel.hover(function () { $(this).css('opacity', '1'); $('#pin_side_0').css('opacity', '0.8'); $('#NUC_PinConfiguration_Canvas_Lining').css('opacity', '0'); withdrawAllGreenPins(); }, function () { $(this).css('opacity', g_opacity_min); $('#pin_side_0').css('opacity', '0.1'); $('#NUC_PinConfiguration_Canvas_Lining').css('opacity', '1'); });
            }
        }
        else {
            $panel.hover(function () { $(this).css('opacity', '1'); withdrawAllGreenPins(); }, function () { $(this).css('opacity', g_opacity_min); });
        }

        element_NUC_PinConfiguration_Canvas = $("#NUC_PinConfiguration_Canvas")[0];
        element_NUC_PinConfiguration_Canvas.setAttribute('style', 'z-index:1; position:absolute; left:0px; top:0px; border: 1px solid white;');
        element_NUC_PinConfiguration_Canvas.setAttribute('width', g_Canvas_Width);
        element_NUC_PinConfiguration_Canvas.setAttribute('height', g_Canvas_Height);

        // draw default NUC Pin Configuration
        context = g_utility.getContext(element_NUC_PinConfiguration_Canvas);

        // addEventListener
        g_utility.addEvent(element_NUC_PinConfiguration_Canvas, "click", restoreAllPinMultiFunctionSelections);
        if ($('html').hasClass('ie10+')) {
            g_utility.addEvent(element_NUC_PinConfiguration_Canvas, "dblclick", function () { generateCode('userDefined'); });
        }

        context.strokeStyle = "#000000"; // black stroke

        if (g_partNumber_package.indexOf('SOP') !== -1) {
            // draw main square
            context.strokeRect(g_NUC_Chip_StartPoint_X, g_NUC_Chip_StartPoint_Y, g_NUC_Chip_Length / 2, g_NUC_Chip_Length);
            chip_lining_gradient = context.createLinearGradient(g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2, g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length, 0, 0);
            chip_lining_gradient.addColorStop(0, "#000000");
            chip_lining_gradient.addColorStop(1, "#8CA5B9");
            context.fillStyle = chip_lining_gradient;
            context.fillRect(g_NUC_Chip_StartPoint_X, g_NUC_Chip_StartPoint_Y, g_NUC_Chip_Length / 2, g_NUC_Chip_Length);

            // draw the upper-left circle
            context.beginPath();
            context.arc(g_NUC_Chip_StartPoint_X + 10, g_NUC_Chip_StartPoint_Y + 10, 5, 0, Math.PI * 2, true);
            context.strokeStyle = "white";
            context.stroke();
            context.strokeStyle = "#000000"; // black stroke

            // draw the lining of the chip
            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = pxCounter + 'px Arial Black';
            }
            while (context.measureText(g_chipSilkScreenPrint).width < g_NUC_Chip_Length / 2);

            liningTextInterval = pxCounter;
            context.save();
            context.translate(g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 4,
                g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 - context.measureText(g_chipSilkScreenPrint).width / 2);
            context.rotate(Math.PI / 2);
            context.fillStyle = '#FE2E2E';
            context.fillText(g_chipSilkScreenPrint, 0, 0);
            context.restore();

            partNumberText = g_partNumber_package.slicePriorToX('(');
            for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
                if (NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')' === g_partNumber_package) {
                    if (typeof NUTOOL_PIN.g_cfg_chips[i].display !== 'undefined') {
                        partNumberText = NUTOOL_PIN.g_cfg_chips[i].display;
                    }
                    break;
                }
            }
            context.fillStyle = "white";
            pxCounter1 = 1;
            do {
                pxCounter1 = pxCounter1 + 1;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }
            while (context.measureText(partNumberText).width < g_NUC_Chip_Length / 2);

            if (pxCounter1 > pxCounter) {
                pxCounter1 = pxCounter;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }

            liningTextInterval = pxCounter1 / 2 + 5;
            context.save();
            context.translate(g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 4 - liningTextInterval,
                g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 - context.measureText(partNumberText).width / 2);
            context.rotate(Math.PI / 2);
            context.fillText(partNumberText, 0, 0);
            context.restore();

            if (g_NUC_Pin_Total_Number > 12) {
                pxCounter = 1;
                do {
                    pxCounter = pxCounter + 1;
                    context.font = 'bold ' + pxCounter + 'px Calibri';
                }
                while (context.measureText(NUTOOL_PIN.g_packageNumber).width < g_NUC_Chip_Length / 4);

                liningTextInterval = liningTextInterval + pxCounter / 2 + 5;
                context.save();
                context.translate(g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 4 - liningTextInterval,
                    g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 - context.measureText(NUTOOL_PIN.g_packageNumber).width / 2);
                context.rotate(Math.PI / 2);
                context.fillText(NUTOOL_PIN.g_packageNumber, 0, 0);
                context.restore();
            }

            //// draw pins from left and right side in order.
            g_chipPins = [];
            for (i = 0; i < 2; i += 1) {
                me = 'pin_side_' + i;
                $panel[0].appendChild(ce("canvas", me));
                g_chipPins[i] = drawPins().init(me, $('#' + me), i);
                g_chipPins[i].draw();
            }
        }
        else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            // draw main square
            context.strokeRect(g_NUC_Chip_StartPoint_X, g_NUC_Chip_StartPoint_Y, g_NUC_Chip_Length, g_NUC_Chip_Length);
            chip_lining_gradient = context.createLinearGradient(g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length, g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length, 0, 0);
            chip_lining_gradient.addColorStop(0, "#000000");
            chip_lining_gradient.addColorStop(1, "#8CA5B9");
            context.fillStyle = chip_lining_gradient;
            context.fillRect(g_NUC_Chip_StartPoint_X, g_NUC_Chip_StartPoint_Y, g_NUC_Chip_Length, g_NUC_Chip_Length);

            // draw the down-left circle
            context.beginPath();
            context.arc(g_NUC_Chip_StartPoint_X + 10, g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - 10, 5, 0, Math.PI * 2, true);
            context.strokeStyle = "white";
            context.stroke();
            context.strokeStyle = "#000000"; // black stroke

            // draw the lining of the chip
            if ($("#NUC_PinConfiguration_Canvas_Lining").length === 0) {
                $('#panel')[0].appendChild(ce("canvas", "NUC_PinConfiguration_Canvas_Lining"));
            }
            element_NUC_PinConfiguration_Canvas_Lining = $("#NUC_PinConfiguration_Canvas_Lining")[0];
            element_NUC_PinConfiguration_Canvas_Lining.setAttribute('style', 'z-index:1; position:absolute; left:0px; top:0px; border: 1px solid white;');
            element_NUC_PinConfiguration_Canvas_Lining.setAttribute('width', g_Canvas_Width);
            element_NUC_PinConfiguration_Canvas_Lining.setAttribute('height', g_Canvas_Height);
            context = g_utility.getContext(element_NUC_PinConfiguration_Canvas_Lining);

            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = pxCounter + 'px Arial Black';
            }
            while (context.measureText(g_chipSilkScreenPrint).width < g_NUC_Chip_Length / 2);

            context.fillStyle = '#FE2E2E';
            context.fillText(g_chipSilkScreenPrint, g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(g_chipSilkScreenPrint).width / 2,
                g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2);

            partNumberText = g_partNumber_package.slicePriorToX('(');
            for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
                if (NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')' === g_partNumber_package) {
                    if (typeof NUTOOL_PIN.g_cfg_chips[i].display !== 'undefined') {
                        partNumberText = NUTOOL_PIN.g_cfg_chips[i].display;
                    }
                    break;
                }
            }

            context.fillStyle = "white";
            pxCounter1 = 1;
            do {
                pxCounter1 = pxCounter1 + 1;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }
            while (context.measureText(partNumberText).width < g_NUC_Chip_Length / 2);

            if (pxCounter1 > pxCounter) {
                pxCounter1 = pxCounter;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }

            if (g_NUC_Pin_Total_Number < 100) {
                liningTextInterval = pxCounter1 / 2 + g_NUC_Pin_Total_Number / 2;
            }
            else {
                liningTextInterval = pxCounter1 / 2 + g_NUC_Pin_Total_Number / 10;
            }
            context.fillText(partNumberText, g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(partNumberText).width / 2,
                g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 + liningTextInterval);

            partNumberText = g_partNumber_package.slicePriorToX(')').sliceAfterX('(') + "(TOP VIEW)";
            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = 'bold ' + pxCounter + 'px Calibri';
            }
            while (context.measureText(partNumberText).width < g_NUC_Chip_Length / 2);
            if (g_NUC_Pin_Total_Number < 100) {
                liningTextInterval = liningTextInterval + pxCounter / 2 + g_NUC_Pin_Total_Number / 2;
            }
            else {
                liningTextInterval = liningTextInterval + pxCounter / 2 + g_NUC_Pin_Total_Number / 10;
            }
            context.fillText(partNumberText, g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(partNumberText).width / 2,
                g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 + liningTextInterval);

            //// draw inner pins in order.
            g_chipPins = [];
            me = 'pin_side_0';
            $panel[0].appendChild(ce("canvas", me));
            g_chipPins[0] = drawPins().init(me, $('#' + me), 0);
            g_chipPins[0].draw();
        }
        else {
            // draw main square
            context.strokeRect(g_NUC_Chip_StartPoint_X, g_NUC_Chip_StartPoint_Y, g_NUC_Chip_Length, g_NUC_Chip_Length);
            chip_lining_gradient = context.createLinearGradient(g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length, g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length, 0, 0);
            chip_lining_gradient.addColorStop(0, "#000000");
            chip_lining_gradient.addColorStop(1, "#8CA5B9");
            context.fillStyle = chip_lining_gradient;
            context.fillRect(g_NUC_Chip_StartPoint_X, g_NUC_Chip_StartPoint_Y, g_NUC_Chip_Length, g_NUC_Chip_Length);

            // draw the down-left circle
            context.beginPath();
            context.arc(g_NUC_Chip_StartPoint_X + 10, g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - 10, 5, 0, Math.PI * 2, true);
            context.strokeStyle = "white";
            context.stroke();
            context.strokeStyle = "#000000"; // black stroke

            // draw the lining of the chip
            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = pxCounter + 'px Arial Black';
            }
            while (context.measureText(g_chipSilkScreenPrint).width < g_NUC_Chip_Length / 2);

            context.fillStyle = '#FE2E2E';
            context.fillText(g_chipSilkScreenPrint, g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(g_chipSilkScreenPrint).width / 2,
                g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2);

            partNumberText = g_partNumber_package.slicePriorToX('(');
            for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
                if (NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')' === g_partNumber_package) {
                    if (typeof NUTOOL_PIN.g_cfg_chips[i].display !== 'undefined') {
                        partNumberText = NUTOOL_PIN.g_cfg_chips[i].display;
                    }
                    break;
                }
            }

            context.fillStyle = "white";
            pxCounter1 = 1;
            do {
                pxCounter1 = pxCounter1 + 1;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }
            while (context.measureText(partNumberText).width < g_NUC_Chip_Length / 2);

            if (pxCounter1 > pxCounter) {
                pxCounter1 = pxCounter;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }

            liningTextInterval = pxCounter1 / 2 + g_NUC_Pin_Total_Number / 8;
            context.fillText(partNumberText, g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(partNumberText).width / 2,
                g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 + liningTextInterval);

            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = 'bold ' + pxCounter + 'px Calibri';
            }
            while (context.measureText(NUTOOL_PIN.g_packageNumber).width < g_NUC_Chip_Length / 4);
            liningTextInterval = liningTextInterval + pxCounter / 2 + g_NUC_Pin_Total_Number / 8;
            context.fillText(NUTOOL_PIN.g_packageNumber, g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(NUTOOL_PIN.g_packageNumber).width / 2,
                g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 + liningTextInterval);

            //// draw pins from down, right, upper, and left side in order.
            g_chipPins = [];
            for (i = 0; i < 4; i += 1) {
                me = 'pin_side_' + i;
                $panel[0].appendChild(ce("canvas", me));
                g_chipPins[i] = drawPins().init(me, $('#' + me), i);
                g_chipPins[i].draw();
            }
        }

        // draw pin numbers and description
        drawPinNumberAndDescription();

        // give the notations of colors
        drawColorNotations();

        // de-reference
        i = null;
        max = null;
        $panel = null;
        element_NUC_PinConfiguration_Canvas = null;
        element_NUC_PinConfiguration_Canvas_Lining = null;
        context = null;
        chip_lining_gradient = null;
        partNumberText = null;
        liningTextInterval = null;
        x = null;
        y = null;
        me = null;
        offset = null;
        pxCounter = null;
        pxCounter1 = null;
    }

    // case insensitive, digits to number interpolation
    function natualSort(as, bs) {
        var a, b, a1, b1, i = 0, L, rx = /(\d+)|(\D+)/g, rd = /\d/;
        if (isFinite(as) && isFinite(bs)) { return as - bs; }
        a = String(as).toLowerCase();
        b = String(bs).toLowerCase();
        if (a === b) { return 0; }
        if (!(rd.test(a) && rd.test(b))) { return a > b ? 1 : -1; }
        a = a.match(rx);
        b = b.match(rx);
        L = a.length > b.length ? b.length : a.length;
        while (i < L) {
            a1 = a[i];
            b1 = b[i];
            i += 1;
            if (a1 !== b1) {
                if (isFinite(a1) && isFinite(b1)) {
                    if (a1.charAt(0) === "0") { a1 = "." + a1; }
                    if (b1.charAt(0) === "0") { b1 = "." + b1; }
                    return a1 - b1;
                }
                else { return a1 > b1 ? 1 : -1; }
            }
        }
        return a.length - b.length;
    }

    function buildModuleTree() {
        var moduleNames = [],
            i,
            j,
            k,
            max,
            maxJ,
            maxK,
            subNodeName,
            subNodeNameID,
            subNodeNameArray = [],
            skippedIndexArray = [],
            bHasIdenticalSubNodeName,
            bDisableModuleNode,
            dataChildrenArray = [],
            jsonDataArray = [],
            module,
            modulePins = [],
            dataChildren,
            dataChildrenOfChildren,
            dataChildrenOfChildrenArray = [],
            disabledModuleNodesArray = [],
            jsonData,
            attr,
            // create a tree of supported g_module_pins
            $rootTree = $("#rootTree_Pin"),
            $moduleTree = $("#moduleTree"),
            $ChipType_span = $("#ChipType_span"),
            $MCU_span = $("#MCU_span"),
            $supportedModules,
            $supportedModules_span,
            $searchInput,
            supportedModules_inner,
            searchInput_inner,
            chipType_inner,
            mcu_inner;

        moduleNames = getPropertyNames(g_module_pins);
        moduleNames.sort(natualSort);

        // Speech8bitCPU模式下，再把BP[0-9].n從module tree中移除，Request from AS50 YHChuang
        if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {
            var x = 0;
            while (x < moduleNames.length) {
                if (/BP[0-9]{1,}\./.test(moduleNames[x])) {
                    moduleNames.splice(x, 1);
                }
                else {
                    x++;
                }
            }
        }

        jsonDataArray = [];
        g_disabledSubNodesArray = [];
        g_disabledLeafNodesArray = [];
        disabledModuleNodesArray = [];
        // populate the json_data
        for (i = 0, max = moduleNames.length; i < max; i += 1) {
            subNodeNameArray = [];
            dataChildrenArray = [];
            for (j = 0, maxJ = g_module_pins[moduleNames[i]].length; j < maxJ; j += 1) {
                subNodeName = g_module_functions[moduleNames[i]][j];
                // stash these subNodeNamses
                subNodeNameArray.push(subNodeName + '_Pin' + g_module_pins[moduleNames[i]][j]);
            }

            subNodeNameArray.sort(natualSort);

            skippedIndexArray = [];
            bDisableModuleNode = false;
            for (j = 0, maxJ = subNodeNameArray.length; j < maxJ; j += 1) {
                // the identical subNode will be skipped
                if (skippedIndexArray.length > 0 && $.inArray(j, skippedIndexArray) !== -1) {
                    continue;
                }

                subNodeName = subNodeNameArray[j];

                bHasIdenticalSubNodeName = false;
                // find the identical subNodeName
                if (NUTOOL_PIN.g_cfg_shareBits.length === 0 && j !== subNodeNameArray.length - 1) {
                    for (k = j + 1, maxK = subNodeNameArray.length; k < maxK; k += 1) {
                        if (subNodeName.restorePinTreeNodeName() === subNodeNameArray[k].restorePinTreeNodeName()) {
                            skippedIndexArray.push(k);
                            bHasIdenticalSubNodeName = true;
                            bDisableModuleNode = true;
                        }
                        else if (subNodeName.sliceAfterX('_Pin') === subNodeNameArray[k].sliceAfterX('_Pin')) {
                            bDisableModuleNode = true;
                        }
                    }
                }

                subNodeNameID = subNodeName.replaceSpecialCharacters();

                dataChildren = {};
                attr = {};

                if (!bHasIdenticalSubNodeName) {
                    attr.id = subNodeNameID;
                    dataChildren.data = subNodeName.restorePinTreeNodeName() + '(Pin:' + updatePinName(subNodeName.sliceAfterX('_Pin')) + ')';
                    dataChildren.attr = attr;
                }
                else {
                    dataChildrenOfChildren = {};
                    attr.id = subNodeNameID;
                    dataChildrenOfChildren.data = 'Pin:' + updatePinName(subNodeName.sliceAfterX('_Pin'));
                    dataChildrenOfChildren.attr = attr;

                    dataChildrenOfChildrenArray = [];
                    dataChildrenOfChildrenArray.push(dataChildrenOfChildren);
                    g_disabledLeafNodesArray.push(attr.id);
                    for (k = 0, maxK = skippedIndexArray.length; k < maxK; k += 1) {
                        if (subNodeName.restorePinTreeNodeName() === subNodeNameArray[skippedIndexArray[k]].restorePinTreeNodeName()) {
                            dataChildrenOfChildren = {};
                            attr = {};
                            attr.id = subNodeNameArray[skippedIndexArray[k]];
                            attr.id = attr.id.replaceSpecialCharacters();
                            dataChildrenOfChildren.data = 'Pin:' + updatePinName(attr.id.sliceAfterX('_Pin'));
                            dataChildrenOfChildren.attr = attr;

                            dataChildrenOfChildrenArray.push(dataChildrenOfChildren);
                            g_disabledLeafNodesArray.push(attr.id);
                        }
                    }
                    attr = {};
                    attr.id = subNodeNameID.restorePinTreeNodeName() + '_Intermediate';
                    dataChildren.data = subNodeName.restorePinTreeNodeName();
                    dataChildren.attr = attr;
                    dataChildren.children = dataChildrenOfChildrenArray;

                    // if there is the case that a identical node exists,
                    // its node should not be able to check and uncheck.
                    g_disabledSubNodesArray.push(attr.id);
                }

                dataChildrenArray.push(dataChildren);
            }

            if (bDisableModuleNode) {
                disabledModuleNodesArray.push(moduleNames[i] + '_Root');
            }

            jsonData = {};
            attr = {};

            attr.id = moduleNames[i] + '_Root';
            jsonData.data = moduleNames[i];
            jsonData.attr = attr;
            jsonData.state = 'closed';
            jsonData.children = dataChildrenArray;

            jsonDataArray[i] = jsonData;
        }

        if ($moduleTree.length === 0) {
            decideUIlanguage();

            if (g_userSelectUIlanguage === "Simplified Chinese") {
                supportedModules_inner = '支援模组';
                searchInput_inner = '搜寻..';
                chipType_inner = '芯片系列:';
                mcu_inner = '型号:';
            }
            else if (g_userSelectUIlanguage === "Traditional Chinese") {
                supportedModules_inner = '支援模組';
                searchInput_inner = '搜尋..';
                chipType_inner = '晶片系列:';
                mcu_inner = '型號:';
            }
            else {
                supportedModules_inner = 'Supported Modules';
                searchInput_inner = 'Search..';
                chipType_inner = 'Chip Series:';
                mcu_inner = 'Part No.:';
            }

            $rootTree[0].appendChild(ce("div", 'supportedModules', ""));
            $supportedModules = $("#supportedModules");
            $supportedModules.append('<span id=supportedModules_span></span>');
            $supportedModules_span = $("#supportedModules_span");
            $supportedModules_span.css('vertical-align', 'text-top');
            $supportedModules_span.css('font-size', '16px');
            $supportedModules_span.css('font-weight', 'bold');
            $supportedModules.append("<input id='searchInput_Pin' type='text' value=" + searchInput_inner + ">");
            $searchInput = $('#searchInput_Pin');
            $rootTree[0].appendChild(ce("div", 'moduleTree', 'Loading...'));
            $moduleTree = $("#moduleTree");
            $ChipType_span.text(chipType_inner);
            $ChipType_span.css('font-size', '16px');
            $ChipType_span.css('font-weight', 'bold');
            $MCU_span.text(mcu_inner);
            $MCU_span.css('font-size', '16px');
            $MCU_span.css('font-weight', 'bold');

            searchInput_inner = null;
            chipType_inner = null;
            mcu_inner = null;
        }

        $supportedModules[0].setAttribute('style', 'background-color: #FFFFFF; border-right: 16px solid #F2F2F2; float:left; width:' + (g_NUC_TreeView_Width - 16) + 'px; height: 22px;');
        $supportedModules_span.text(supportedModules_inner);
        $searchInput[0].setAttribute('style', 'font-family:Times Arial; position:absolute; left:' + ($supportedModules_span.width() + 10) + 'px; width:' + (g_NUC_TreeView_Width - 16 - $supportedModules_span.width() - 10) + 'px; height: 16px;');
        $rootTree.hide();
        $searchInput.change(function () {
            searchNodesInModulesTree(this.value);
        });
        $moduleTree[0].setAttribute('style', 'background-color: #FFFFFF; overflow-y: scroll; float:left; width:' + g_NUC_TreeView_Width + 'px; height: ' + (g_NUC_rootTree_Height - g_MFPTreeHeight - 6 - $("#supportedModules").height()) + 'px; font-size:16px;');
        if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            if (g_bLessThanOrEqualIE8) {
                $moduleTree.hover(function () { $(this).css('background-color', '#FAFAFA'); withdrawAllGreenPins(); $('#pin_side_0').show(); $('#NUC_PinConfiguration_Canvas_Lining').hide(); }, function () { $(this).css('background-color', '#FFFFFF'); $('#pin_side_0').hide(); $('#NUC_PinConfiguration_Canvas_Lining').show(); });
            }
            else {
                $moduleTree.hover(function () { $(this).css('background-color', '#FAFAFA'); withdrawAllGreenPins(); $('#pin_side_0').css('opacity', '0.8'); $('#NUC_PinConfiguration_Canvas_Lining').css('opacity', '0'); }, function () { $(this).css('background-color', '#FFFFFF'); $('#pin_side_0').css('opacity', '0.1'); $('#NUC_PinConfiguration_Canvas_Lining').css('opacity', '1'); });
            }
        }
        else {
            $moduleTree.hover(function () { $(this).css('background-color', '#FAFAFA'); withdrawAllGreenPins(); }, function () { $(this).css('background-color', '#FFFFFF'); });
        }
        $moduleTree.jstree({
            "themes": {
                "theme": "classic",
                "icons": false
            },
            // If progressive_render is set to true only the visible (open nodes) parts of the returned JSON are converted to
            // DOM nodes, any hidden parts are saved away and parsed ondemand (when a node becomes visible).
            // This is useful when you have a large nested tree which would result in a heavy DOM.
            "json_data": { "data": jsonDataArray, "progressive_render": true },
            "search": {
                "case_insensitive": true
            },
            'core': {
                'animation': 0,
                'html_titles': true
            },
            "plugins": ["themes", "json_data", "types", "search", "checkbox", "ui"]
        }).bind("hover_node.jstree", function (e, data) {
            var currentNode = data.rslt.obj.attr("id"),
                multiFunction,
                bDisplay = false,
                tooltipText = "",
                pinNumber = -1;

            // display the tooltip around the mouse cursor
            if (g_bUserDisplayTooltip && NUTOOL_PIN.g_cfg_gpiosDescriptions.length > 0 && currentNode.indexOf('_dot') === -1) {
                if (currentNode.indexOf('_Pin') !== -1) {
                    multiFunction = currentNode.restorePinTreeNodeName();
                    pinNumber = parseInt(currentNode.sliceAfterX('_Pin'), 10);
                    bDisplay = true;
                }
                if (bDisplay) {
                    multiFunction = multiFunction.restorePinTreeNodeName().restoreSpecialCharacters();
                    tooltipText = extractPinDescription(multiFunction, pinNumber);
                    if (isGPIOPin(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pinNumber - 1])) {
                        tooltipText = '(' + NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pinNumber - 1] + ') ' + tooltipText;
                    }
                    if (tooltipText !== 'unknown') {
                        // $('#' + currentNode).simpletip({ content: tooltipText, fixed: false, offset: [100, -7] });
                        setTippy(currentNode, tooltipText, 'right');
                    }
                }
            }
            // de-reference
            multiFunction = null;
            bDisplay = null;
            tooltipText = null;
            pinNumber = null;
        }).bind('check_node.jstree', function (e, data) {
            var i,
                max,
                currentNode = data.rslt.obj.attr("id"),
                currentNodeSliceRoot = currentNode.restorePinTreeNodeName(),
                parentNode;
            try {
                parentNode = data.inst._get_parent(data.rslt.obj).attr("id");
            }
            catch (err) { }

            // 如果此Function已被鎖定，則跳警告
            if (bLockWarning(currentNode)) {
                showLockedWarningDialog();
                return;
            }

            modulePins = [];

            // close the last dialog
            destroyAllExistentDialogs();
            // remove the outstanding multi-function lists by individual pin click
            restoreAllPinMultiFunctionSelections();
            // for checking the semi-disabled nodes
            if ($('#' + currentNode).hasClass('semi-disabled')) {
                treeView_checkbox_semiDisabled_handler(currentNode);
                return;
            }

            if (typeof (parentNode) === 'undefined') {
                // module root checked
                for (i = 0, max = g_module_pins[currentNodeSliceRoot].length; i < max; i += 1) {
                    modulePins.push(g_module_pins[currentNodeSliceRoot][i]);
                }
                module = currentNodeSliceRoot;

                // open its children nodes
                $moduleTree.jstree("open_node", $('#' + currentNode));
            }
            else {
                // individual feature checked
                modulePins[0] = parseInt(currentNode.sliceAfterX('Pin'), 10);
                // for the intermediate node of the identical nodes
                module = specialModuleNaming(parentNode.slicePriorToX('_'));
            }

            if (g_bUsingSpeedupCheck) {
                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                checkTreeViewCheckbox_Speedup(currentNode, module, modulePins);
            }
            else {
                treeView_checkbox_handler(true, currentNode, module, modulePins);
            }

            if (!g_bReadyForRelease && g_bTestingConflict) {
                $("#NUC_PinConfiguration_Canvas")[0].setAttribute('innerText', currentNode); // for functional test
            }

            // de-reference
            i = null;
            max = null;
            currentNode = null;
            currentNodeSliceRoot = null;
        }).bind('uncheck_node.jstree', function (e, data) {
            var currentNode = data.rslt.obj.attr("id"),
                currentNodeSliceRoot = currentNode.restorePinTreeNodeName(),
                parentNode,
                currentNode_local,
                currentNode_local_1;
            try {
                parentNode = data.inst._get_parent(data.rslt.obj).attr("id");
            }
            catch (err) { }

            modulePins = [];

            // close the last dialog
            destroyAllExistentDialogs();
            if (typeof (parentNode) === 'undefined') {
                // module checked
                modulePins = g_module_pins[currentNodeSliceRoot];
                module = specialModuleNaming(currentNodeSliceRoot);
            }
            else if (currentNode.indexOf('_Intermediate') !== -1) {
                // for unchecking the semi-disabled nodes
                for (i = 0, max = g_disabledLeafNodesArray.length; i < max; i += 1) {
                    if (g_disabledLeafNodesArray[i].restorePinTreeNodeName() === currentNode.restorePinTreeNodeName()) {
                        currentNode_local = g_disabledLeafNodesArray[i];
                        module = specialModuleNaming(currentNode_local.slicePriorToX('_'));
                        modulePins[0] = parseInt(currentNode_local.sliceAfterX('_Pin'), 10);
                        currentNode_local_1 = currentNode_local.restorePinTreeNodeName();
                        if (currentNode_local_1 === g_pinCurrentDescription[modulePins[0] - 1].replaceSpecialCharacters()) {
                            // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                            uncheckTreeViewCheckbox_Speedup(currentNode_local, module, modulePins);
                            updateMFPTree();
                        }
                    }
                }

                currentNode_local = null;
                currentNode_local_1 = null;
                return;
            }
            else {
                // individual unchecked
                modulePins[0] = parseInt(currentNode.sliceAfterX('Pin'), 10);
                module = specialModuleNaming(parentNode.slicePriorToX('_'));
            }
            treeView_checkbox_handler(false, currentNode, module, modulePins);

            // de-reference
            currentNode = null;
            currentNodeSliceRoot = null;
            parentNode = null;
        }).bind('open_node.jstree', function (e, data) {
            var currentNode = data.rslt.obj.attr("id"),
                currentNodeSliceRoot = currentNode.restorePinTreeNodeName(),
                parentNode,
                childNode,
                childOfChildNode,
                pin,
                pinState,
                index1;
            try {
                parentNode = data.inst._get_parent(data.rslt.obj).attr("id");
            }
            catch (err) { }

            // handle the semi-disabled nodes
            if (typeof (parentNode) === 'undefined' && $.inArray(currentNode, disabledModuleNodesArray) !== -1) {
                // disable and highlight the sub-nodes
                for (i = 0, max = g_disabledSubNodesArray.length; i < max; i += 1) {
                    if (g_disabledSubNodesArray[i].indexOf(currentNodeSliceRoot) !== -1) {
                        $("#" + g_disabledSubNodesArray[i]).addClass('semi-disabled');
                        $("#" + g_disabledSubNodesArray[i] + " >a").css("background-color", "#B0C4DE");
                    }
                }
            }
            // after loading the config file, the actual checkbox objects are not loaded into DOM. we must handle them.
            if (typeof (parentNode) === 'undefined' &&
                typeof (g_MFPFunctionsWaitForBeenChecked[currentNodeSliceRoot]) !== 'undefined' &&
                g_MFPFunctionsWaitForBeenChecked[currentNodeSliceRoot].length > 0) {
                // need not check if conflicts happen. However, this method skips the conflict check and updateMFPTree(). We must use it carefully.
                g_bUsingSpeedupCheck = true;
                for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[currentNodeSliceRoot].length; i < max; i += 1) {
                    $moduleTree.jstree("open_node", $('#' + g_MFPFunctionsWaitForBeenChecked[currentNodeSliceRoot][i].restorePinTreeNodeName() + '_Intermediate'));
                    $moduleTree.jstree('check_node', $("#" + g_MFPFunctionsWaitForBeenChecked[currentNodeSliceRoot][i]));
                }
                g_MFPFunctionsWaitForBeenChecked[currentNodeSliceRoot].length = 0;
                g_bUsingSpeedupCheck = false;
                // do not forget this.
                updateMFPTree();
            }
            // mark nodes which have been configured to other g_module_pins.
            $(data.rslt.obj).find("li").each(function (index, listItem) {
                childNode = $(listItem).attr("id");
                parentNode = specialModuleNaming(childNode.slicePriorToX('_'));
                if (childNode.indexOf('_Pin') !== -1) {
                    pinState = g_pinCurrentModule[parseInt(childNode.sliceAfterX('_Pin'), 10) - 1];
                    if ((childNode.indexOf(pinState) !== 0 &&
                        !isGPIOPin(pinState)) ||
                        (childNode.indexOf(pinState) !== -1 &&
                            $("#" + childNode).hasClass('jstree-checked') === false)) {
                        $("#" + childNode + " >a").css("color", "red");
                        $("#" + currentNode + " >a").css("color", "red");
                    }
                    else if (typeof (g_MFPFunctionsWaitForBeenChecked[parentNode]) === 'undefined' ||
                        (typeof (g_MFPFunctionsWaitForBeenChecked[parentNode]) !== 'undefined' &&
                            g_MFPFunctionsWaitForBeenChecked[parentNode].length === 0)) {
                        index1 = $.inArray(childNode, g_MFPFunctionsWaitForMarkBlue);
                        if (index1 !== -1) {
                            $("#" + childNode + " >a").css("color", "blue");
                            g_MFPFunctionsWaitForMarkBlue.splice(index1, 1);
                        }
                    }
                }
                else {
                    $moduleTree.jstree("open_node", $('#' + childNode));
                    $("#" + childNode).find("li").each(function (index1, listItem1) {
                        childOfChildNode = $(listItem1).attr("id");
                        parentNode = specialModuleNaming(childOfChildNode.slicePriorToX('_'));
                        pinState = g_pinCurrentModule[parseInt(childOfChildNode.sliceAfterX('_Pin'), 10) - 1];
                        if (childOfChildNode.indexOf(pinState) === -1 &&
                            !isGPIOPin(pinState) ||
                            (childOfChildNode.indexOf(pinState) !== -1 &&
                                $("#" + childOfChildNode).hasClass('jstree-checked') === false)) {
                            $("#" + childOfChildNode + " >a").css("color", "red");
                            $("#" + childNode + " >a").css("color", "red");
                            $("#" + currentNode + " >a").css("color", "red");
                        }
                        else if (typeof (g_MFPFunctionsWaitForBeenChecked[parentNode]) === 'undefined' ||
                            (typeof (g_MFPFunctionsWaitForBeenChecked[parentNode]) !== 'undefined' &&
                                g_MFPFunctionsWaitForBeenChecked[parentNode].length === 0)) {
                            index1 = $.inArray(childOfChildNode, g_MFPFunctionsWaitForMarkBlue);
                            if (index1 !== -1) {
                                $("#" + childOfChildNode + " >a").css("color", "blue");
                                g_MFPFunctionsWaitForMarkBlue.splice(index1, 1);
                            }
                        }
                    });
                    $moduleTree.jstree("close_node", $('#' + childNode));
                }
            });

            // work-around: 由於讀完檔案後，replaceJS的動作尚未完成，所以在module jstree還沒出來前，無法對其修改背景顏色，所以等到check node時再來判定需不需要修改
            g_lockedPin.forEach((pin) => {
                if (pin.indexOf(currentNode.slicePriorToX('_')) != -1) {
                    document.querySelector(`#${pin}`).style.background = 'orange';
                }
            });

            // de-reference
            currentNode = null;
            currentNodeSliceRoot = null;
            parentNode = null;
            childNode = null;
            childOfChildNode = null;
            pin = null;
            pinState = null;
            index1 = null;
        }).bind("select_node.jstree", function (e, data) {
            var currentNode = data.rslt.obj.attr("id"),
                childNode,
                childOfChildNode;

            $moduleTree.jstree("open_node", $('#' + currentNode));
            $("#" + currentNode).find("li").each(function (index, listItem) {
                childNode = $(listItem).attr("id");
                if (childNode.indexOf('_Pin') !== -1) {
                    $moduleTree.jstree("open_node", $('#' + childNode));
                }
                else {
                    $moduleTree.jstree("open_node", $('#' + childNode));
                    $("#" + childNode).find("li").each(function (index1, listItem1) {
                        childOfChildNode = $(listItem1).attr("id");
                        $moduleTree.jstree("open_node", $('#' + childOfChildNode));
                    });
                }
            });
            // de-reference
            currentNode = null;
            childNode = null;
            childOfChildNode = null;
        }).bind("dblclick.jstree", function (event) {
            // var li = $(event.target).closest("li");
            // var id = li[0].id;
            // var pin = id.sliceAfterX('Pin');

            // // 目錄不能被lock
            // if (id.indexOf('Root') != -1 || id.indexOf('Intermediate') != -1) {
            //     return;
            // }
            // // 同一個IP+pin重複點擊，取消鎖定狀態
            // if (g_lockedPin.includes(id)) {
            //     var index = g_lockedPin.indexOf(id);
            //     if (index > -1) { // only splice array when item is found
            //         g_lockedPin.splice(index, 1); // 2nd parameter means remove one item only
            //         document.querySelector(`#${id}`).style.background = 'transparent';
            //     }
            // }
            // // 不同IP使用同Pin，或是同IP使用不同Pin，跳通知提醒使用者已經鎖定
            // else if (bLockWarning(id)) {
            //     showLockedWarningDialog();
            // }
            // // 新增lockedPin
            // else {
            //     g_lockedPin.push(id);
            //     document.querySelector(`#${id}`).style.background = 'orange';
            // }
        }).bind('loaded.jstree', function () { // invoked after jstree has loaded
            // handle the semi-disabled nodes
            for (i = 0, max = disabledModuleNodesArray.length; i < max; i += 1) {
                // we must open module node first, then its sub-nodes will be loaded into DOM.
                // disable and highlight the module nodes which should be disabled
                $("#" + disabledModuleNodesArray[i]).addClass('semi-disabled');
                $("#" + disabledModuleNodesArray[i] + " >a").css("background-color", "#B0C4DE");
            }

            if (g_bCheckNodesBasedOnConfigFile) {
                g_bUsingSpeedupCheck = true;
                // based on the saved config file, restore to the saved circumstance
                checkNodesInModuleTree();
                // after all nodes have been checked, we update the MPF tree.
                updateMFPTree();
                // clear this to release ram.
                g_readConfigFile = null;
            }
            else {
                g_bCheckNodesBasedOnConfigFile = true;
                goToResetValueState(); // set some MFP registers to their reset values which are not 0x00000000.
            }

            // after startup's loading, restore check method to the regular one.
            g_bUsingSpeedupCheck = false;

            // initially hide these to accommodate more nodes of the module tree
            $('#ChipType').show();
            $('#MCU').show();
            $('#moduleTree').height(window.innerHeight - 8 - $("#navbar").height() - $("#ChipType").height() - $("#MCU").height() - g_MFPTreeHeight - 8 - $("#supportedModules").height() - g_NUC_Taskbar_height);
            // after the loading is finished
            allowClicking();
            // the opacity adjustment for the BGA package
            if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                if (g_bLessThanOrEqualIE8) {
                    $('#pin_side_0').hide();
                    $('#NUC_PinConfiguration_Canvas_Lining').show();
                }
                else {
                    $('#pin_side_0').css('opacity', '0.1');
                    $('#NUC_PinConfiguration_Canvas_Lining').css('opacity', '1');
                }
            }
            // record the latest g_gpio_MFPs
            recordConfig();
            if (typeof NUTOOL_PER !== 'undefined' && NUTOOL_PER.getg_currentTool() !== 'PinConfigure') {
                // CodeGenerator needs to hide PinConfigure
                $("#parentOfPanel").hide();
                $("#ChipType").hide();
                $("#MCU").hide();
                $('#rootTree_Pin').hide();
            }
            NUTOOL_PIN.g_bModuleTreeLoaded = true;
        }).bind('destroy.jstree', function () {
            // de-reference
            moduleNames = [];
            subNodeNameArray = [];
            skippedIndexArray = [];
            dataChildrenArray = [];
            jsonDataArray = [];
            modulePins = [];
            dataChildrenOfChildrenArray = [];
            disabledModuleNodesArray = [];
            g_MFPFunctionsWaitForBeenChecked = [];
            g_MFPFunctionsWaitForMarkBlue = [];
            subNodeName = null;
            subNodeNameID = null;
            bHasIdenticalSubNodeName = null;
            bDisableModuleNode = null;
            module = null;
            dataChildren = null;
            dataChildrenOfChildren = null;
            jsonData = null;
            attr = null;
            $rootTree = null;
            $moduleTree = null;
            $ChipType_span = null;
            $MCU_span = null;
            $supportedModules = null;
            $supportedModules_span = null;
            $searchInput = null;
            supportedModules_inner = null;
        });
    }

    function treeView_checkbox_handler(bChecked, currentNode, module, modulePins) {
        // check if the pin has been used
        var i,
            j,
            max,
            maxJ,
            bConfllict = false,
            usedPinNumbers = [],
            newModulePins = [],
            gpio_MFPsNames = [],
            numberOfPins = g_usedPins.length,
            warningMessage = "",
            index,
            title,
            content,
            okButton,
            cancelButton,
            dialog,
            buttons,
            currentNode_local,
            mouseEnteredPinDescription,
            chipPinDescriptionsEBI,
            foundIndex,
            bSubNodesBeenChecked,
            bExisted,
            colorToBeFilled = g_colorForConfiguredByUser,
            $moduleTree = $("#moduleTree");

        function f1(index, listItem) {
            if ($("#" + $(listItem).attr("id")).hasClass('jstree-checked') || $("#" + $(listItem).attr("id")).hasClass('jstree-undetermined')) {
                bSubNodesBeenChecked = true;
                // Since things are done, we can leave the loop.
                return false;
            }
        }

        function f2(index, listItem) {
            if ($("#" + $(listItem).attr("id")).hasClass('jstree-checked')) {
                $("#" + currentNode.restorePinTreeNodeName() + '_Intermediate').removeClass('jstree-unchecked jstree-checked').addClass('jstree-undetermined');
                $("#" + specialModuleNaming(module) + '_Root').removeClass('jstree-unchecked jstree-checked').addClass('jstree-undetermined');
                // Since things are done, we can leave the loop.
                return false;
            }
        }

        for (i = 0, max = g_usedPins.length; i < max; i += 1) {
            usedPinNumbers[i] = g_usedPins[i].slicePriorToX(':');
        }

        if (bChecked) {
            decideUIlanguage();

            for (i = 0; i < numberOfPins; i += 1) {
                // to judge if a conflict occurs.
                if ($.inArray(parseInt(usedPinNumbers[i], 10), modulePins) !== -1 &&
                    ((modulePins.length !== 1 && g_usedPins[i] !== usedPinNumbers[i] + ':' + module) ||
                        (modulePins.length === 1 && g_pinCurrentDescription[usedPinNumbers[i] - 1].replaceSpecialCharacters() !== currentNode.restorePinTreeNodeName()))) {
                    var bLocked = isThisPinLocked(usedPinNumbers[i]);
                    if (bLocked) {
                        warningMessage += "第" + updatePinName(usedPinNumbers[i]) + "脚位已被" +
                            updatePinDescription(g_pinCurrentDescription[usedPinNumbers[i] - 1]) + "鎖定。<br />";
                        // 從modulePins中移除被鎖定的pin
                        var index = modulePins.indexOf(Number(usedPinNumbers[i]));
                        if (index > -1) {
                            modulePins.splice(index, 1);
                        }
                    } else {
                        if (g_userSelectUIlanguage === "Simplified Chinese") {
                            warningMessage += "第" + updatePinName(usedPinNumbers[i]) + "脚位已被" +
                                updatePinDescription(g_pinCurrentDescription[usedPinNumbers[i] - 1]) + "使用。<br />";
                        }
                        else if (g_userSelectUIlanguage === "Traditional Chinese") {
                            warningMessage += "第" + updatePinName(usedPinNumbers[i]) + "腳位已被" +
                                updatePinDescription(g_pinCurrentDescription[usedPinNumbers[i] - 1]) + "使用。<br />";
                        }
                        else {
                            warningMessage += "Pin" + updatePinName(usedPinNumbers[i]) + " has been asserted by " +
                                updatePinDescription(g_pinCurrentDescription[usedPinNumbers[i] - 1]) + ".<br />";
                        }
                        bConfllict = true;
                    }
                }
            }
            if (bConfllict) {
                if (g_userSelectUIlanguage === "Simplified Chinese") {
                    title = '冲突发生';
                    content = '預期的' + module + '和别的模组冲突。请问你要调整旧的且改设置到现在的模组吗?';
                    okButton = "要";
                    cancelButton = "不要";
                }
                else if (g_userSelectUIlanguage === "Traditional Chinese") {
                    title = '衝突發生';
                    content = '預期的' + module + '和別的模組衝突。請問你要調整舊的且改設置到現在的模組嗎?';
                    okButton = "要";
                    cancelButton = "不要";
                }
                else {
                    title = 'Conflict Occurred';
                    content = 'The expected ' + module + ' conflicts with other modules. Would you like to adjust the old modules and configure to the current one?';
                    okButton = "Yes";
                    cancelButton = "No";
                }

                // close the last dialog
                destroyAllExistentDialogs();
                // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
                dialog = $('<div id="conflictDialog"><p>' + content + '<br />' + warningMessage + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>').dialog({
                    modal: false,
                    resizable: false,
                    title: title,
                    width: 500,
                    height: 400,
                    show: 'fade',
                    hide: 'fade',
                    close: function () {
                        $("#conflictDialog").dialog("destroy");
                    },
                    buttons: [
                        {
                            text: okButton,
                            click: function () {
                                gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);
                                g_undo_gpio_MFPs = [];
                                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                                    g_undo_gpio_MFPs[gpio_MFPsNames[i]] = g_gpio_MFPs[gpio_MFPsNames[i]];
                                }
                                g_undo_pinsConfiguredByGPIO = [];
                                for (i = 0, max = g_pinsConfiguredByGPIO.length; i < max; i += 1) {
                                    g_undo_pinsConfiguredByGPIO[i] = g_pinsConfiguredByGPIO[i];
                                }
                                g_readConfigFile = "";
                                for (i = 0, max = g_pinCurrentDescription.length; i < max; i += 1) {
                                    if (g_pinCurrentDescription[i] !== "") {
                                        g_readConfigFile += "Pin" + (i + 1) + ":" + updatePinDescription(g_pinCurrentDescription[i]) + "\r\n";
                                    }
                                }

                                g_adjustedModulesMessageString = "";
                                conflict_handler(currentNode, module, modulePins, usedPinNumbers);

                                if ($("#conflictDialog").dialog("isOpen")) {
                                    $("#conflictDialog").dialog("destroy");
                                }
                            }
                        },
                        {
                            text: cancelButton,
                            click: function () {
                                for (i = 0, max = modulePins.length; i < max; i += 1) {
                                    if ($.inArray(modulePins[i].toString(), usedPinNumbers) === -1) {
                                        newModulePins.push(modulePins[i]);
                                    }
                                }

                                if ($("#conflictDialog").dialog("isOpen")) {
                                    $("#conflictDialog").dialog("destroy");
                                }

                                for (i = 0, max = newModulePins.length; i < max; i += 1) {
                                    currentNode_local = g_module_functions[module][$.inArray(newModulePins[i], g_module_pins[module])] + '_Pin' + newModulePins[i];
                                    currentNode_local = currentNode_local.replaceSpecialCharacters();
                                    $("#moduleTree").jstree('check_node', $('#' + currentNode_local));
                                }
                            }
                        }
                    ]
                });

                $("#conflictDialog").dialog('widget').draggable('option', 'axis', 'x y');
                $("#conflictDialog").dialog('widget').draggable({ containment: 'window', scroll: false });

                title = null;
                content = null;
                okButton = null;
                cancelButton = null;
            }
        }

        // remove the check symbols
        if (bConfllict && bChecked) {
            if (modulePins.length === 1 && currentNode.indexOf('_Pin') !== -1) {
                $("#" + currentNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                if (currentNode.indexOf('_') !== -1) {
                    $("#" + currentNode.restorePinTreeNodeName() + '_Intermediate').removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                    bSubNodesBeenChecked = false;
                    $("#" + specialModuleNaming(module) + '_Root').find("li").each(function (index, listItem) {
                        if ($("#" + $(listItem).attr("id")).hasClass('jstree-checked') || $("#" + $(listItem).attr("id")).hasClass('jstree-undetermined')) {
                            bSubNodesBeenChecked = true;
                            $("#" + specialModuleNaming(module) + '_Root').removeClass('jstree-unchecked jstree-checked').addClass('jstree-undetermined');
                            // Since things are done, we can leave the loop.
                            return false;
                        }
                    });
                    if (!bSubNodesBeenChecked) {
                        $("#" + currentNode.slicePriorToX('_')).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                        $("#" + specialModuleNaming(module) + '_Root').removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                    }
                    $("#" + currentNode.restorePinTreeNodeName() + '_Intermediate').find("li").each(function (index, listItem) {
                        if ($("#" + $(listItem).attr("id")).hasClass('jstree-checked')) {
                            $("#" + currentNode.restorePinTreeNodeName() + '_Intermediate').removeClass('jstree-unchecked jstree-checked').addClass('jstree-undetermined');
                            $("#" + specialModuleNaming(module) + '_Root').removeClass('jstree-unchecked jstree-checked').addClass('jstree-undetermined');
                            // Since things are done, we can leave the loop.
                            return false;
                        }
                    });
                }
            }
            else {
                for (i = 0, max = modulePins.length; i < max; i += 1) {
                    mouseEnteredPinDescription = g_module_functions[module][i];

                    currentNode = mouseEnteredPinDescription + '_Pin' + modulePins[i];
                    currentNode = currentNode.replaceSpecialCharacters();

                    bSubNodesBeenChecked = false;
                    for (j = 0, maxJ = g_usedPins.length; j < maxJ; j += 1) {
                        if (modulePins[i] === parseInt(g_usedPins[j].slicePriorToX(':'), 10) &&
                            currentNode.indexOf(g_usedPins[j].sliceAfterX(':')) === 0) {
                            bSubNodesBeenChecked = true;
                        }
                    }
                    if (!bSubNodesBeenChecked) {
                        $("#" + currentNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                        $("#" + specialModuleNaming(module) + '_Root').removeClass('jstree-unchecked jstree-checked').addClass('jstree-undetermined');
                    }

                    if (currentNode.indexOf('_') !== -1) {
                        $("#" + currentNode.restorePinTreeNodeName() + '_Intermediate').removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                        bSubNodesBeenChecked = false;
                        $("#" + specialModuleNaming(module) + '_Root').find("li").each(f1);
                        if (!bSubNodesBeenChecked) {
                            $("#" + currentNode.slicePriorToX('_')).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                            $("#" + specialModuleNaming(module) + '_Root').removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                        }
                        $("#" + currentNode.restorePinTreeNodeName() + '_Intermediate').find("li").each(f2);
                    }
                }
            }

            if (g_bTestingConflict) {
                buttons = $("#conflictDialog").dialog("option", "buttons")[0].click.apply(dialog);
            }
            return;
        }
        // uncheck the identical nodes
        if (bChecked) {
            // case 1: g_disabledSubNodesArray
            if ($.inArray(currentNode.restorePinTreeNodeName() + '_Intermediate', g_disabledSubNodesArray) !== -1) {
                for (i = 0, max = g_disabledLeafNodesArray.length; i < max; i += 1) {
                    if (g_disabledLeafNodesArray[i].restorePinTreeNodeName() === currentNode.restorePinTreeNodeName()) {
                        if (currentNode !== g_disabledLeafNodesArray[i]) {
                            $moduleTree.jstree('uncheck_node', $("#" + g_disabledLeafNodesArray[i]));
                        }
                    }
                }
            }
            // case 2: nasty EBIs
            if (modulePins.length === 1 && currentNode.indexOf('EBI') === 0) {
                chipPinDescriptionsEBI = g_chipPinDescriptions[parseInt(currentNode.sliceAfterX('_Pin'), 10) - 1];
                if (chipPinDescriptionsEBI.indexOf('EBI') !== chipPinDescriptionsEBI.lastIndexOf('EBI')) {
                    while (chipPinDescriptionsEBI.indexOf('EBI') !== -1) {
                        chipPinDescriptionsEBI = chipPinDescriptionsEBI.slice(chipPinDescriptionsEBI.indexOf('EBI'));
                        if (chipPinDescriptionsEBI.indexOf('/') !== -1) {
                            if (currentNode.restorePinTreeNodeName() !== chipPinDescriptionsEBI.slice(chipPinDescriptionsEBI.indexOf('EBI'), chipPinDescriptionsEBI.indexOf('/'))) {
                                $moduleTree.jstree('uncheck_node', $('#' + chipPinDescriptionsEBI.slice(chipPinDescriptionsEBI.indexOf('EBI'), chipPinDescriptionsEBI.indexOf('/')) + '_Pin' + currentNode.sliceAfterX('_Pin')));
                            }
                            // move to the next EBI
                            chipPinDescriptionsEBI = chipPinDescriptionsEBI.slice(chipPinDescriptionsEBI.indexOf('/') + 1);
                        }
                        else {
                            if (currentNode.restorePinTreeNodeName() !== chipPinDescriptionsEBI.slice(chipPinDescriptionsEBI.indexOf('EBI'))) {
                                $moduleTree.jstree('uncheck_node', $('#' + chipPinDescriptionsEBI.slice(chipPinDescriptionsEBI.indexOf('EBI')) + '_Pin' + currentNode.sliceAfterX('_Pin')));
                            }
                            // move to the next EBI
                            chipPinDescriptionsEBI = chipPinDescriptionsEBI.slice(1);
                        }
                    }
                }
            }
        }
        //assertPins
        numberOfPins = modulePins.length;
        // show the chosen pin feature
        if (bChecked) {
            if (modulePins.length === 1 && currentNode.indexOf('_Pin') !== -1) {
                showChosenPinFeature(modulePins[0] - 1, currentNode.restorePinTreeNodeName(), false);
            }
            else {
                for (i = 0, max = modulePins.length; i < max; i += 1) {
                    mouseEnteredPinDescription = g_module_functions[module][i];
                    showChosenPinFeature(modulePins[i] - 1, mouseEnteredPinDescription, false);
                }
            }
        }
        else {
            for (i = 0, max = modulePins.length; i < max; i += 1) {
                if (module === g_pinCurrentModule[modulePins[i] - 1] ||
                    g_pinCurrentModule[modulePins[i] - 1] === "") {
                    g_pinCurrentModule[modulePins[i] - 1] = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][modulePins[i] - 1];
                    showChosenPinFeature(modulePins[i] - 1, "", true);
                }
            }
        }
        // draw the related pins
        if (bChecked) {
            if (g_drawnMultiFunctionSeletions.length > 0) {
                colorToBeFilled = g_colorForConfiguredByUser;
            }
            else {
                // remove the recorded highlight pin
                if (g_pinsHighlightedByChipView.length !== 0) {
                    for (j = 0, maxJ = g_pinsHighlightedByChipView.length; j < maxJ; j += 1) {
                        if (g_pinsHighlightedByChipView[j] === modulePins[i]) {
                            g_pinsHighlightedByChipView.splice(j, 1);
                        }
                    }
                }
            }

            for (i = 0; i < numberOfPins; i += 1) {
                // update g_usedPins
                bExisted = false;
                for (j = 0, maxJ = g_usedPins.length; j < maxJ; j += 1) {
                    if (modulePins[i] === parseInt(g_usedPins[j].slicePriorToX(':'), 10)) {
                        g_usedPins[j] = modulePins[i] + ':' + module;
                        bExisted = true;
                        break;
                    }
                }

                if (!bExisted) {
                    g_usedPins.push(modulePins[i] + ':' + module);
                }

                // update g_gpio_MFPs
                if (modulePins.length !== 1) {
                    update_gpio_MFPs(modulePins[i] - 1, module);
                }
                else {
                    if (currentNode.indexOf('_Pin') !== -1) {
                        update_gpio_MFPs(modulePins[i] - 1, currentNode.restorePinTreeNodeName(), true);
                    }
                    else {
                        update_gpio_MFPs(modulePins[i] - 1, currentNode);
                    }
                }

                // update the color of pins
                updatePinColor(modulePins[i], colorToBeFilled);
                // update the current state of pins
                g_pinCurrentModule[modulePins[i] - 1] = module;
            }
            updateMFPTree();
        }
        else {
            for (i = 0; i < numberOfPins; i += 1) {
                index = $.inArray(modulePins[i] + ':' + module, g_usedPins);
                if (index !== -1) {
                    // update g_usedPins
                    g_usedPins.splice(index, 1);
                    update_gpio_MFPs((modulePins[i] - 1), NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][modulePins[i] - 1]);

                    // update the color of pins
                    updatePinColor(modulePins[i], "#FFFFFF");
                    // update the current state of pins
                    //g_pinCurrentModule[modulePins[i] - 1] = ""; //NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][modulePins[i] - 1];

                    // remove the recorded highlight pin
                    if (g_pinsHighlightedByChipView.length !== 0) {
                        for (j = 0, maxJ = g_pinsHighlightedByChipView.length; j < maxJ; j += 1) {
                            if (g_pinsHighlightedByChipView[j] === modulePins[i]) {
                                g_pinsHighlightedByChipView.splice(j, 1);
                            }
                        }
                    }
                }
            }
            updateMFPTree();
        }

        if (bChecked) {
            if (modulePins.length === 1 && currentNode.indexOf('_Pin') !== -1) {
                // mark nodes related to the pin
                markNodeRelatedToPin(currentNode, modulePins[0], true);

                if (g_bTestingConflict) {
                    g_conflictCount = g_conflictCount + 1;
                    if (!g_bReadyForRelease && window.console) { window.console.log(g_conflictCount + ". " + currentNode); }
                }
            }
            else {
                for (i = 0, max = modulePins.length; i < max; i += 1) {
                    mouseEnteredPinDescription = g_module_functions[module][i];
                    // mark nodes related to the pins
                    markNodeRelatedToPin(mouseEnteredPinDescription + '_Pin' + modulePins[i], modulePins[i], true);
                }

                if (g_bTestingConflict) {
                    g_conflictCount = g_conflictCount + 1;
                    if (!g_bReadyForRelease && window.console) { window.console.log(g_conflictCount + ". " + module); }
                }
            }
        }
        else {
            for (i = 0, max = modulePins.length; i < max; i += 1) {
                mouseEnteredPinDescription = g_module_functions[module][i];
                // mark nodes related to the pins
                markNodeRelatedToPin(mouseEnteredPinDescription + '_Pin' + modulePins[i], modulePins[i], false);
            }
        }
        // de-reference
        bConfllict = null;
        usedPinNumbers = [];
        newModulePins = [];
        gpio_MFPsNames = [];
        numberOfPins = null;
        warningMessage = null;
        currentNode_local = null;
        mouseEnteredPinDescription = null;
        foundIndex = null;
        $moduleTree = null;
        numberOfPins = null;
        bExisted = null;
        colorToBeFilled = null;
        bSubNodesBeenChecked = null;
    }

    function conflict_handler(currentNode, module, modulePins, usedPins) {
        var i,
            max,
            j,
            maxJ,
            k,
            maxK,
            pin,
            lastPin,
            currentNode_local,
            childOfChildNode,
            mouseEnteredPinDescription,
            $moduleTree = $("#moduleTree"),
            module_local,
            modulePins_local,
            conflictUncheckNodes = [],
            semiDisabledNodes = [],
            bLeafChecked,
            bAdjustResult;

        function f1(index1, listItem1) {
            childOfChildNode = $(listItem1).attr("id");
            if (!($("#" + childOfChildNode + " >a").css("color") === 'red' || $("#" + childOfChildNode + " >a").css("color") === 'rgb(255, 0, 0)') &&
                !bLeafChecked) {
                bLeafChecked = true;

                // individual feature checked
                modulePins_local = [];
                modulePins_local[0] = parseInt(childOfChildNode.sliceAfterX('Pin'), 10);
                // prepare message for the adjustedModulesDialog
                if (g_adjustedModulesMessageString !== "") {
                    lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                    if (lastPin !== modulePins_local[0].toString() &&
                        lastPin !== "removed" &&
                        lastPin !== "end") {
                        g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                    }
                }
                g_adjustedModulesMessageString += childOfChildNode.restorePinTreeNodeName() + ":" + modulePins_local[0];
                for (j = 0, maxJ = conflictUncheckNodes.length; j < maxJ; j += 1) {
                    if (conflictUncheckNodes[j].indexOf(childOfChildNode.restorePinTreeNodeName() + '_Pin') === 0) {
                        g_adjustedModulesMessageString += "/" + conflictUncheckNodes[j].sliceAfterX('Pin');
                        conflictUncheckNodes.splice(j, 1);
                        break;
                    }
                }
                g_adjustedModulesMessageString += ";";

                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                checkTreeViewCheckbox_Speedup(childOfChildNode, module_local, modulePins_local);

                // don't forget to add the check symbols
                $("#" + childOfChildNode).removeClass('jstree-unchecked jstree-undetermined').addClass('jstree-checked');
                // mark the nodes with a different color
                $("#" + childOfChildNode + " >a").css("color", "blue");
            }
            else {
                // don't forget to remove the check symbols
                $("#" + childOfChildNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
            }
        }

        function f2(index1, listItem1) {
            childOfChildNode = $(listItem1).attr("id");
            pin = parseInt(childOfChildNode.sliceAfterX('Pin'), 10);
            if ($.inArray(pin, modulePins) === -1) {
                bAdjustResult = recursiveAdjustSemiDisabledNodes(childOfChildNode, modulePins, 0, conflictUncheckNodes);
            }
            if (bAdjustResult) {
                // Since things are done, we can leave the loop.
                return false;
            }
        }

        // firstly, uncheck the last subnode of the supported module tree
        for (i = 0, max = modulePins.length; i < max; i += 1) {
            pin = modulePins[i];
            if ($.inArray(pin.toString(), usedPins) !== -1) {
                currentNode_local = g_pinCurrentDescription[pin - 1] + '_Pin' + pin;
                currentNode_local = currentNode_local.replaceSpecialCharacters();
                // please note that if the node has not been checked, the uncheck_node operation will not be invoked.
                $moduleTree.jstree('uncheck_node', $("#" + currentNode_local));
                conflictUncheckNodes.push(currentNode_local);
                if (!$("#" + currentNode_local).hasClass('jstree-unchecked')) {
                    module_local = specialModuleNaming(currentNode_local.slicePriorToX('_'));
                    modulePins_local = [];
                    modulePins_local[0] = pin;

                    // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                    uncheckTreeViewCheckbox_Speedup(currentNode_local, module_local, modulePins_local);
                    if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) !== 'undefined') {
                        for (j = 0, maxJ = g_MFPFunctionsWaitForBeenChecked[module_local].length; j < maxJ; j += 1) {
                            if (g_MFPFunctionsWaitForBeenChecked[module_local][j] === currentNode_local) {
                                g_MFPFunctionsWaitForBeenChecked[module_local][j] = "";
                                break;
                            }
                        }

                        for (j = 0, maxJ = g_MFPFunctionsWaitForBeenChecked[module_local].length; j < maxJ; j += 1) {
                            if (g_MFPFunctionsWaitForBeenChecked[module_local][j] !== "") {
                                break;
                            }
                            if (j === maxJ - 1) {
                                $("#" + module_local + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                            }
                        }
                    }
                    $moduleTree.jstree("close_node", $('#' + module_local + '_Root'));
                }
                // stash possible nodes to be checked again
                if ($.inArray(currentNode_local, g_disabledLeafNodesArray) !== -1) {
                    semiDisabledNodes.push(currentNode_local.restorePinTreeNodeName() + '_Intermediate');
                }

            }
        }
        // secondly, check the expected node
        if (modulePins.length === 1 && currentNode.indexOf('_Pin') !== -1) {
            $moduleTree.jstree('check_node', $("#" + currentNode));
        }
        else {
            for (i = 0, max = modulePins.length; i < max; i += 1) {
                for (j = 0, maxJ = g_module_pins[module].length; j < maxJ; j += 1) {
                    if (g_module_pins[module][j] === modulePins[i]) {
                        mouseEnteredPinDescription = g_module_functions[module][j].replaceSpecialCharacters();
                        $moduleTree.jstree('check_node', $("#" + mouseEnteredPinDescription + '_Pin' + modulePins[i]));
                    }
                }
            }
        }
        // thirdly, check the possible nodes under the semi-disabled nodes again
        if (semiDisabledNodes.length > 0) {
            for (i = 0, max = semiDisabledNodes.length; i < max; i += 1) {
                bLeafChecked = false;
                // for the intermediate node of the identical nodes
                module_local = specialModuleNaming(semiDisabledNodes[i].slicePriorToX('_'));
                if ($("#" + semiDisabledNodes[i]).find("li").length > 0) {
                    $("#" + semiDisabledNodes[i]).find("li").each(f1);
                }
                else {
                    childOfChildNode = semiDisabledNodes[i].restorePinTreeNodeName();
                    for (j = 0, maxJ = g_disabledLeafNodesArray.length; j < maxJ; j += 1) {
                        if (g_disabledLeafNodesArray[j].indexOf(childOfChildNode + '_Pin') === 0) {
                            pin = g_disabledLeafNodesArray[j].sliceAfterX('_Pin');
                            bAdjustResult = false;
                            for (k = 0, maxK = g_usedPins.length; k < maxK; k += 1) {
                                if (g_usedPins[k].slicePriorToX(':') === pin) {
                                    bAdjustResult = true;
                                    break;
                                }
                            }

                            if (!bAdjustResult) {
                                bLeafChecked = true;

                                childOfChildNode = g_disabledLeafNodesArray[j];
                                modulePins_local = [];
                                modulePins_local[0] = parseInt(childOfChildNode.sliceAfterX('Pin'), 10);
                                // prepare message for the adjustedModulesDialog
                                if (g_adjustedModulesMessageString !== "") {
                                    lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                                    if (lastPin !== modulePins_local[0].toString() &&
                                        lastPin !== "removed" &&
                                        lastPin !== "end") {
                                        g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                                    }
                                }
                                g_adjustedModulesMessageString += childOfChildNode.restorePinTreeNodeName() + ":" + modulePins_local[0];
                                for (j = 0, maxJ = conflictUncheckNodes.length; j < maxJ; j += 1) {
                                    if (conflictUncheckNodes[j].indexOf(childOfChildNode.restorePinTreeNodeName() + '_Pin') === 0) {
                                        g_adjustedModulesMessageString += "/" + conflictUncheckNodes[j].sliceAfterX('Pin');
                                        conflictUncheckNodes.splice(j, 1);
                                        break;
                                    }
                                }
                                g_adjustedModulesMessageString += ";";
                                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                                checkTreeViewCheckbox_Speedup(childOfChildNode, module_local, modulePins_local);
                                // mark the nodes with a different color
                                for (k = 0, maxK = g_MFPFunctionsWaitForMarkBlue.length; k < maxK; k += 1) {
                                    if (g_MFPFunctionsWaitForMarkBlue[k].indexOf(childOfChildNode.restorePinTreeNodeName() + '_Pin') === 0) {
                                        g_MFPFunctionsWaitForMarkBlue.splice(k, 1);
                                        break;
                                    }
                                }
                                g_MFPFunctionsWaitForMarkBlue.push(childOfChildNode);

                                // prepare for the first layer of moduleTree
                                if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) === 'undefined') {
                                    g_MFPFunctionsWaitForBeenChecked[module_local] = [];
                                    g_MFPFunctionsWaitForBeenChecked[module_local][0] = childOfChildNode;
                                }
                                else {
                                    g_MFPFunctionsWaitForBeenChecked[module_local].push(childOfChildNode);
                                }

                                break;
                            }
                        }
                    }
                }

                if (bLeafChecked) {
                    $("#" + module_local + '_Root').removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
                    $("#" + semiDisabledNodes[i]).removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
                }
                else {
                    // recursively adjust semi-disabled nodes if possible
                    bAdjustResult = false;
                    if ($("#" + semiDisabledNodes[i]).find("li").length > 0) {
                        $("#" + semiDisabledNodes[i]).find("li").each(f2);
                    }
                    else {
                        childOfChildNode = semiDisabledNodes[i].restorePinTreeNodeName();
                        for (j = 0, maxJ = g_disabledLeafNodesArray.length; j < maxJ; j += 1) {
                            if (g_disabledLeafNodesArray[j].indexOf(childOfChildNode + '_Pin') === 0) {
                                pin = parseInt(g_disabledLeafNodesArray[j].sliceAfterX('_Pin'), 10);
                                if ($.inArray(pin, modulePins) === -1) {
                                    bAdjustResult = recursiveAdjustSemiDisabledNodes(g_disabledLeafNodesArray[j], modulePins, 0, conflictUncheckNodes);
                                }
                                if (bAdjustResult) {
                                    // Since things are done, we can leave the loop.
                                    break;
                                }
                            }
                        }
                    }
                    if (!bAdjustResult) {
                        $("#" + semiDisabledNodes[i]).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                    }
                }
            }

            updateMFPTree();

            if (g_adjustedModulesMessageString !== "") {
                lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                if (lastPin !== "removed" &&
                    lastPin !== "end") {
                    g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                }
            }
            for (j = 0, maxJ = conflictUncheckNodes.length; j < maxJ; j += 1) {
                g_adjustedModulesMessageString += conflictUncheckNodes[j].restorePinTreeNodeName().restoreSpecialCharacters() + ":" + conflictUncheckNodes[j].sliceAfterX('_Pin') + "/removed;";
            }
            if (g_adjustedModulesMessageString !== "" && !g_bTestingConflict) {
                showAdjustedModules(g_adjustedModulesMessageString);
            }
        } else {
            if (g_adjustedModulesMessageString !== "") {
                lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                if (lastPin !== "removed" &&
                    lastPin !== "end") {
                    g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                }
            }
            for (j = 0, maxJ = conflictUncheckNodes.length; j < maxJ; j += 1) {
                g_adjustedModulesMessageString += conflictUncheckNodes[j].restorePinTreeNodeName().restoreSpecialCharacters() + ":" + conflictUncheckNodes[j].sliceAfterX('_Pin') + "/removed;";
            }
            if (g_adjustedModulesMessageString !== "" && !g_bTestingConflict) {
                showAdjustedModules(g_adjustedModulesMessageString);
            }
        }

        if (g_bTestingConflict) {
            if (g_adjustedModulesMessageString !== "") {
                if (!g_bReadyForRelease && window.console) { window.console.log(g_adjustedModulesMessageString); }
            }

            testPinFeature();
        }

        // de-reference
        i = null;
        max = null;
        j = null;
        maxJ = null;
        k = null;
        maxK = null;
        pin = null;
        lastPin = null;
        currentNode = null;
        currentNode_local = null;
        childOfChildNode = null;
        mouseEnteredPinDescription = null;
        $moduleTree = null;
        module_local = null;
        modulePins_local = [];
        conflictUncheckNodes = [];
        semiDisabledNodes = [];
        bLeafChecked = null;
        bAdjustResult = null;
    }

    function recursiveAdjustSemiDisabledNodes(triggeringNode, passedPins, depth, conflictUncheckNodes) {
        var i,
            max,
            j,
            maxJ,
            k,
            maxK,
            pin,
            thePin,
            lastPin,
            module_local,
            module_Intermediate,
            modulePins_local = [],
            recursiveNodes_local = [],
            currentNode,
            childOfChildNode,
            $moduleTree = $("#moduleTree"),
            bLeafChecked,
            bAdjustResult;

        function f1(index, listItem) {
            childOfChildNode = $(listItem).attr("id");
            if (childOfChildNode !== triggeringNode &&
                ($("#" + childOfChildNode).hasClass('jstree-checked'))) {
                bAdjustResult = true;
                // prepare message for the adjustedModulesDialog
                if (g_adjustedModulesMessageString !== "") {
                    lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                    if (lastPin !== modulePins_local[0].toString() &&
                        lastPin !== "removed" &&
                        lastPin !== "end") {
                        g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                    }
                }
                g_adjustedModulesMessageString += triggeringNode.restorePinTreeNodeName() + ":" + modulePins_local[0] +
                    "/" + childOfChildNode.sliceAfterX('Pin') + ";";
            }
            if (childOfChildNode !== triggeringNode) {
                $("#" + childOfChildNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
            }
        }

        thePin = parseInt(triggeringNode.sliceAfterX('Pin'), 10);
        currentNode = g_pinCurrentDescription[thePin - 1].replaceSpecialCharacters();
        if ($.inArray(currentNode + '_Pin' + thePin, g_disabledLeafNodesArray) === -1 ||
            $.inArray(thePin, passedPins) !== -1 ||
            depth >= 10) {
            return false;
        }
        else {
            passedPins.push(thePin);
            depth = depth + 1;

            bLeafChecked = false;
            bAdjustResult = false;
            recursiveNodes_local = [];
            // for the intermediate node of the identical nodes
            module_local = specialModuleNaming(currentNode.slicePriorToX('_'));
            module_Intermediate = currentNode + '_Intermediate';
            if ($("#" + module_Intermediate).find("li").length > 0) {
                $("#" + module_Intermediate).find("li").each(function (index, listItem) {
                    childOfChildNode = $(listItem).attr("id");
                    if (!($("#" + childOfChildNode + " >a").css("color") === 'red' || $("#" + childOfChildNode + " >a").css("color") === 'rgb(255, 0, 0)') &&
                        childOfChildNode.sliceAfterX('_Pin') !== thePin.toString() &&
                        !bLeafChecked) {
                        bLeafChecked = true;

                        // individual feature checked
                        modulePins_local = [];
                        modulePins_local[0] = parseInt(childOfChildNode.sliceAfterX('Pin'), 10);
                        // prepare message for the adjustedModulesDialog
                        if (g_adjustedModulesMessageString !== "") {
                            lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                            if (lastPin !== modulePins_local[0].toString() &&
                                lastPin !== "removed" &&
                                lastPin !== "end") {
                                g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                            }
                        }
                        g_adjustedModulesMessageString += childOfChildNode.restorePinTreeNodeName() + ":" + modulePins_local[0] + "/" + thePin + ";";

                        // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                        checkTreeViewCheckbox_Speedup(childOfChildNode, module_local, modulePins_local);

                        // don't forget to add the check symbols
                        $("#" + childOfChildNode).removeClass('jstree-unchecked jstree-undetermined').addClass('jstree-checked');
                        // mark the nodes with a different color
                        $("#" + childOfChildNode + " >a").css("color", "blue");
                    }
                    else if (childOfChildNode.sliceAfterX('_Pin') !== thePin.toString()) {
                        // prepare for the recursive call
                        recursiveNodes_local.push(childOfChildNode);
                        // don't forget to remove the check symbols
                        $("#" + childOfChildNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                    }
                });
            }
            else {
                for (i = 0, max = g_disabledLeafNodesArray.length; i < max; i += 1) {
                    if (g_disabledLeafNodesArray[i].indexOf(currentNode + '_Pin') === 0) {
                        childOfChildNode = g_disabledLeafNodesArray[i];
                        pin = childOfChildNode.sliceAfterX('_Pin');
                        if (pin === thePin.toString()) {
                            bAdjustResult = true;
                        }
                        else {
                            bAdjustResult = false;
                            for (k = 0, maxK = g_usedPins.length; k < maxK; k += 1) {
                                if (g_usedPins[k].slicePriorToX(':') === pin) {
                                    bAdjustResult = true;
                                    break;
                                }
                            }
                        }

                        if (!bAdjustResult && !bLeafChecked) {
                            bLeafChecked = true;

                            modulePins_local = [];
                            modulePins_local[0] = parseInt(childOfChildNode.sliceAfterX('Pin'), 10);
                            // prepare message for the adjustedModulesDialog
                            if (g_adjustedModulesMessageString !== "") {
                                lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                                if (lastPin !== modulePins_local[0].toString() &&
                                    lastPin !== "removed" &&
                                    lastPin !== "end") {
                                    g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                                }
                            }
                            g_adjustedModulesMessageString += childOfChildNode.restorePinTreeNodeName() + ":" + modulePins_local[0] + "/" + thePin + ";";

                            // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                            checkTreeViewCheckbox_Speedup(childOfChildNode, module_local, modulePins_local);
                            // mark the nodes with a different color
                            for (k = 0, maxK = g_MFPFunctionsWaitForMarkBlue.length; k < maxK; k += 1) {
                                if (g_MFPFunctionsWaitForMarkBlue[k].indexOf(childOfChildNode.restorePinTreeNodeName() + '_Pin') === 0) {
                                    g_MFPFunctionsWaitForMarkBlue.splice(k, 1);
                                    break;
                                }
                            }
                            g_MFPFunctionsWaitForMarkBlue.push(childOfChildNode);

                            // prepare for the first layer of moduleTree
                            if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) === 'undefined') {
                                g_MFPFunctionsWaitForBeenChecked[module_local] = [];
                                g_MFPFunctionsWaitForBeenChecked[module_local][0] = childOfChildNode;
                            }
                            else {
                                g_MFPFunctionsWaitForBeenChecked[module_local].push(childOfChildNode);
                            }
                            if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) !== 'undefined') {
                                for (j = 0, maxJ = g_MFPFunctionsWaitForBeenChecked[module_local].length; j < maxJ; j += 1) {
                                    if (g_MFPFunctionsWaitForBeenChecked[module_local][j] === currentNode + '_Pin' + thePin) {
                                        g_MFPFunctionsWaitForBeenChecked[module_local][j] = "";
                                        break;
                                    }
                                }

                                for (j = 0, maxJ = g_MFPFunctionsWaitForBeenChecked[module_local].length; j < maxJ; j += 1) {
                                    if (g_MFPFunctionsWaitForBeenChecked[module_local][j] !== "") {
                                        break;
                                    }
                                    if (j === maxJ - 1) {
                                        $("#" + module_local + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                                    }
                                }
                            }
                            break;
                        }
                        else if (childOfChildNode.sliceAfterX('_Pin') !== thePin.toString()) {
                            // prepare for the recursive call
                            recursiveNodes_local.push(childOfChildNode);
                        }
                    }
                }
            }

            if (bLeafChecked) {
                // don't forget to remove the check symbols
                $("#" + currentNode + '_Pin' + thePin).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                // individual feature checked
                modulePins_local = [];
                modulePins_local[0] = parseInt(triggeringNode.sliceAfterX('Pin'), 10);
                // for the intermediate node of the identical nodes
                module_local = specialModuleNaming(triggeringNode.slicePriorToX('_'));

                // don't forget to remove the check symbols
                if ($("#" + triggeringNode.restorePinTreeNodeName() + '_Intermediate').find("li").length > 0) {
                    $("#" + triggeringNode.restorePinTreeNodeName() + '_Intermediate').find("li").each(function (index, listItem) {
                        childOfChildNode = $(listItem).attr("id");
                        if (childOfChildNode !== triggeringNode &&
                            ($("#" + childOfChildNode).hasClass('jstree-checked') ||
                                $.inArray(childOfChildNode, conflictUncheckNodes) !== -1)) {
                            // prepare message for the adjustedModulesDialog
                            if (g_adjustedModulesMessageString !== "") {
                                lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                                if (lastPin !== modulePins_local[0].toString() &&
                                    lastPin !== "removed" &&
                                    lastPin !== "end") {
                                    g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                                }
                            }
                            g_adjustedModulesMessageString += triggeringNode.restorePinTreeNodeName() + ":" + modulePins_local[0] +
                                "/" + childOfChildNode.sliceAfterX('Pin') + ";";
                        }
                        if (childOfChildNode !== triggeringNode) {
                            $("#" + childOfChildNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                        }
                    });
                }
                else {
                    for (j = 0, maxJ = g_disabledLeafNodesArray.length; j < maxJ; j += 1) {
                        if (g_disabledLeafNodesArray[j].indexOf(triggeringNode.restorePinTreeNodeName() + '_Pin') === 0) {
                            childOfChildNode = g_disabledLeafNodesArray[j];
                            if (childOfChildNode !== triggeringNode &&
                                (childOfChildNode.restorePinTreeNodeName() === g_pinCurrentDescription[parseInt(childOfChildNode.sliceAfterX('Pin'), 10) - 1] ||
                                    $.inArray(childOfChildNode, conflictUncheckNodes) !== -1)) {
                                // prepare message for the adjustedModulesDialog
                                if (g_adjustedModulesMessageString !== "") {
                                    lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                                    if (lastPin !== modulePins_local[0].toString() &&
                                        lastPin !== "removed" &&
                                        lastPin !== "end") {
                                        g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                                    }
                                }
                                g_adjustedModulesMessageString += triggeringNode.restorePinTreeNodeName() + ":" + modulePins_local[0] +
                                    "/" + childOfChildNode.sliceAfterX('Pin') + ";";

                                break;
                            }
                        }
                    }
                }

                for (j = 0, maxJ = conflictUncheckNodes.length; j < maxJ; j += 1) {
                    if (conflictUncheckNodes[j].indexOf(triggeringNode.restorePinTreeNodeName() + '_Pin') === 0) {
                        conflictUncheckNodes.splice(j, 1);
                        break;
                    }
                }

                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                checkTreeViewCheckbox_Speedup(triggeringNode, module_local, modulePins_local);
                // don't forget to add the check symbols
                $("#" + module_local + '_Root').removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
                $("#" + triggeringNode.restorePinTreeNodeName() + '_Intermediate').removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
                $("#" + triggeringNode).removeClass('jstree-unchecked jstree-undetermined').addClass('jstree-checked');
                // mark the nodes with a different color
                $("#" + triggeringNode + " >a").css("color", "blue");

                if ($("#" + triggeringNode.restorePinTreeNodeName() + '_Intermediate').find("li").length === 0) {
                    // mark the nodes with a different color
                    for (k = 0, maxK = g_MFPFunctionsWaitForMarkBlue.length; k < maxK; k += 1) {
                        if (g_MFPFunctionsWaitForMarkBlue[k].indexOf(triggeringNode.restorePinTreeNodeName() + '_Pin') === 0) {
                            g_MFPFunctionsWaitForMarkBlue.splice(k, 1);
                            break;
                        }
                    }
                    g_MFPFunctionsWaitForMarkBlue.push(triggeringNode);

                    // prepare for the first layer of moduleTree
                    if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) === 'undefined') {
                        g_MFPFunctionsWaitForBeenChecked[module_local] = [];
                        g_MFPFunctionsWaitForBeenChecked[module_local][0] = triggeringNode;
                    }
                    else {
                        g_MFPFunctionsWaitForBeenChecked[module_local].push(triggeringNode);
                    }
                    if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) !== 'undefined') {
                        for (j = 0, maxJ = g_MFPFunctionsWaitForBeenChecked[module_local].length; j < maxJ; j += 1) {
                            if (g_MFPFunctionsWaitForBeenChecked[module_local][j] === childOfChildNode) {
                                g_MFPFunctionsWaitForBeenChecked[module_local][j] = "";
                                break;
                            }
                        }

                        for (j = 0, maxJ = g_MFPFunctionsWaitForBeenChecked[module_local].length; j < maxJ; j += 1) {
                            if (g_MFPFunctionsWaitForBeenChecked[module_local][j] !== "") {
                                break;
                            }
                            if (j === maxJ - 1) {
                                $("#" + module_local + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                            }
                        }
                    }
                }

                return true;
            }
            else if (recursiveNodes_local.length > 0) {
                for (i = 0; i < recursiveNodes_local.length; i += 1) {
                    bAdjustResult = recursiveAdjustSemiDisabledNodes(recursiveNodes_local[i], passedPins, depth, conflictUncheckNodes);

                    if (bAdjustResult) {
                        // individual feature checked
                        modulePins_local = [];
                        modulePins_local[0] = parseInt(triggeringNode.sliceAfterX('Pin'), 10);
                        // for the intermediate node of the identical nodes
                        module_local = specialModuleNaming(triggeringNode.slicePriorToX('_'));

                        bAdjustResult = false;
                        // prepare message for the adjustedModulesDialog
                        if ($("#" + triggeringNode.restorePinTreeNodeName() + '_Intermediate').find("li").length > 0) {
                            $("#" + triggeringNode.restorePinTreeNodeName() + '_Intermediate').find("li").each(f1);
                        }
                        else {
                            for (j = 0, maxJ = g_disabledLeafNodesArray.length; j < maxJ; j += 1) {
                                if (g_disabledLeafNodesArray[j].indexOf(triggeringNode.restorePinTreeNodeName() + '_Pin') === 0) {
                                    childOfChildNode = g_disabledLeafNodesArray[j];
                                    if (childOfChildNode !== triggeringNode &&
                                        childOfChildNode.restorePinTreeNodeName() === g_pinCurrentDescription[parseInt(childOfChildNode.sliceAfterX('Pin'), 10) - 1]) {
                                        bAdjustResult = true;
                                        // prepare message for the adjustedModulesDialog
                                        if (g_adjustedModulesMessageString !== "") {
                                            lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                                            if (lastPin !== modulePins_local[0].toString() &&
                                                lastPin !== "removed" &&
                                                lastPin !== "end") {
                                                g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                                            }
                                        }
                                        g_adjustedModulesMessageString += triggeringNode.restorePinTreeNodeName() + ":" + modulePins_local[0] +
                                            "/" + childOfChildNode.sliceAfterX('Pin') + ";";

                                        break;
                                    }
                                }
                            }
                        }

                        if (!bAdjustResult) {
                            if (g_adjustedModulesMessageString !== "") {
                                lastPin = g_adjustedModulesMessageString.slice(g_adjustedModulesMessageString.lastIndexOf('/') + 1).slicePriorToX(';');
                                if (lastPin !== modulePins_local[0].toString() &&
                                    lastPin !== "removed" &&
                                    lastPin !== "end") {
                                    g_adjustedModulesMessageString += g_pinCurrentDescription[parseInt(lastPin, 10) - 1] + ':' + lastPin + "/end;";
                                }
                            }
                            g_adjustedModulesMessageString += triggeringNode.restorePinTreeNodeName() + ":" + modulePins_local[0];
                            for (j = 0, maxJ = conflictUncheckNodes.length; j < maxJ; j += 1) {
                                if (conflictUncheckNodes[j].indexOf(triggeringNode.restorePinTreeNodeName() + '_Pin') === 0) {
                                    g_adjustedModulesMessageString += "/" + conflictUncheckNodes[j].sliceAfterX('Pin');
                                    childOfChildNode = conflictUncheckNodes[j];
                                    conflictUncheckNodes.splice(j, 1);
                                    break;
                                }
                            }
                            g_adjustedModulesMessageString += ";";
                        }
                        else {
                            for (j = 0, maxJ = conflictUncheckNodes.length; j < maxJ; j += 1) {
                                if (conflictUncheckNodes[j].indexOf(triggeringNode.restorePinTreeNodeName() + '_Pin') === 0) {
                                    conflictUncheckNodes.splice(j, 1);
                                    break;
                                }
                            }
                        }

                        // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                        checkTreeViewCheckbox_Speedup(triggeringNode, module_local, modulePins_local);
                        // don't forget to add the check symbols
                        $("#" + module_local + '_Root').removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
                        $("#" + triggeringNode.restorePinTreeNodeName() + '_Intermediate').removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
                        $("#" + triggeringNode).removeClass('jstree-unchecked jstree-undetermined').addClass('jstree-checked');
                        // mark the nodes with a different color
                        $("#" + triggeringNode + " >a").css("color", "blue");

                        if ($("#" + triggeringNode.restorePinTreeNodeName() + '_Intermediate').find("li").length === 0) {
                            // mark the nodes with a different color
                            for (k = 0, maxK = g_MFPFunctionsWaitForMarkBlue.length; k < maxK; k += 1) {
                                if (g_MFPFunctionsWaitForMarkBlue[k].indexOf(triggeringNode.restorePinTreeNodeName() + '_Pin') === 0) {
                                    g_MFPFunctionsWaitForMarkBlue.splice(k, 1);
                                    break;
                                }
                            }
                            g_MFPFunctionsWaitForMarkBlue.push(triggeringNode);

                            // prepare for the first layer of moduleTree
                            if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) === 'undefined') {
                                g_MFPFunctionsWaitForBeenChecked[module_local] = [];
                                g_MFPFunctionsWaitForBeenChecked[module_local][0] = triggeringNode;
                            }
                            else {
                                g_MFPFunctionsWaitForBeenChecked[module_local].push(triggeringNode);
                            }
                            if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) !== 'undefined') {
                                for (j = 0, maxJ = g_MFPFunctionsWaitForBeenChecked[module_local].length; j < maxJ; j += 1) {
                                    if (g_MFPFunctionsWaitForBeenChecked[module_local][j] === childOfChildNode) {
                                        g_MFPFunctionsWaitForBeenChecked[module_local][j] = "";
                                        break;
                                    }
                                }

                                for (j = 0, maxJ = g_MFPFunctionsWaitForBeenChecked[module_local].length; j < maxJ; j += 1) {
                                    if (g_MFPFunctionsWaitForBeenChecked[module_local][j] !== "") {
                                        break;
                                    }
                                    if (j === maxJ - 1) {
                                        $("#" + module_local + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                                    }
                                }
                            }
                        }

                        return true;
                    }
                }
                return false;
            }
        }
        // de-reference
        i = null;
        max = null;
        j = null;
        maxJ = null;
        k = null;
        maxK = null;
        pin = null;
        thePin = null;
        lastPin = null;
        module_local = null;
        module_Intermediate = null;
        modulePins_local = [];
        recursiveNodes_local = [];
        currentNode = null;
        childOfChildNode = null;
        $moduleTree = null;
        bLeafChecked = null;
        bAdjustResult = null;
    }

    function checkTreeViewCheckbox_Speedup(currentNode, module, modulePins) {
        //assertPins
        var i,
            max,
            j,
            maxJ,
            numberOfPins = modulePins.length,
            bExisted,
            $moduleTree = $("#moduleTree"),
            currentNode_local,
            module_local,
            modulePins_local = [],
            mouseEnteredPinDescription,
            foundIndex;
        // remove the recorded highlight pin
        if (g_pinsHighlightedByChipView.length !== 0) {
            for (j = 0, maxJ = g_pinsHighlightedByChipView.length; j < maxJ; j += 1) {
                if (g_pinsHighlightedByChipView[j] === modulePins[i]) {
                    g_pinsHighlightedByChipView.splice(j, 1);
                }
            }
        }

        // show the chosen pin feature
        if (modulePins.length === 1 && currentNode.indexOf('_Pin') !== -1) {
            showChosenPinFeature(modulePins[0] - 1, currentNode.restorePinTreeNodeName(), false);
        }
        else {
            for (i = 0, max = modulePins.length; i < max; i += 1) {
                mouseEnteredPinDescription = g_module_functions[module][i];
                showChosenPinFeature(modulePins[i] - 1, mouseEnteredPinDescription, false);
            }
        }

        for (i = 0; i < numberOfPins; i += 1) {
            // update g_usedPins
            bExisted = false;
            for (j = 0, maxJ = g_usedPins.length; j < maxJ; j += 1) {
                if (modulePins[i] === parseInt(g_usedPins[j].slicePriorToX(':'), 10)) {
                    g_usedPins[j] = modulePins[i] + ':' + module;
                    bExisted = true;
                    break;
                }
            }

            if (!bExisted) {
                g_usedPins.push(modulePins[i] + ':' + module);
            }

            // update g_gpio_MFPs
            if (modulePins.length !== 1) {
                update_gpio_MFPs(modulePins[i] - 1, module);
            }
            else {
                if (currentNode.indexOf('_Pin') !== -1) {
                    update_gpio_MFPs(modulePins[i] - 1, currentNode.restorePinTreeNodeName(), true);
                }
                else {
                    update_gpio_MFPs(modulePins[i] - 1, currentNode, true);
                }
            }

            // update the color of pins
            updatePinColor(modulePins[i], g_colorForConfiguredByUser);
            // update the current state of the pin
            g_pinCurrentModule[modulePins[i] - 1] = module;
        }

        if (modulePins.length === 1 && currentNode.indexOf('_Pin') !== -1) {
            // mark nodes related to the pin
            markNodeRelatedToPin(currentNode, modulePins[0], true);

            if (g_bTestingConflict) {
                g_conflictCount = g_conflictCount + 1;
                if (!g_bReadyForRelease && window.console) { window.console.log(g_conflictCount + ". " + currentNode); }
            }
        }
        else {
            for (i = 0, max = modulePins.length; i < max; i += 1) {
                mouseEnteredPinDescription = g_module_functions[module][i];
                // mark nodes related to the pins
                markNodeRelatedToPin(mouseEnteredPinDescription + '_Pin' + modulePins[i], modulePins[i], true);
            }

            if (g_bTestingConflict) {
                g_conflictCount = g_conflictCount + 1;
                if (!g_bReadyForRelease && window.console) { window.console.log(g_conflictCount + ". " + module); }
            }
        }

        // de-reference
        mouseEnteredPinDescription = null;
        foundIndex = null;
        numberOfPins = modulePins.length = null;
        bExisted = null;
        i = null;
        max = null;
        j = null;
        maxJ = null;
        numberOfPins = modulePins.length;
        $moduleTree = null;
        currentNode_local = null;
        module_local = null;
        modulePins_local = null;
    }

    function treeView_checkbox_semiDisabled_handler(currentNode) {
        var i,
            max,
            j,
            maxJ,
            $moduleTree = $("#moduleTree"),
            module,
            modulePins = [],
            modulePinsString = [],
            gpio_MFPsNames = [],
            childNode,
            childOfChildNode,
            semiDisabledNodes = [],
            hasVerifiedNodes = [],
            conflictNodes = [],
            conflictNodePins = [],
            conflictNodesLaterAdd = [],
            conflictNodeCount,
            pinState,
            title,
            content,
            okButton,
            cancelButton,
            dialog,
            buttons,
            warningMessage,
            bChecked,
            bFullyChecked,
            bAtLeastOneChecked;
        bFullyChecked = true;

        semiDisabledNodes = [];
        hasVerifiedNodes = [];
        conflictNodes = [];
        conflictNodePins = [];
        conflictNodesLaterAdd = [];


        // for the intermediate node of the identical nodes
        module = specialModuleNaming(currentNode.slicePriorToX('_'));
        bChecked = false;
        bAtLeastOneChecked = false;
        conflictNodeCount = 0;
        // traverse all the nodes to decide next steps
        $moduleTree.jstree("open_node", $('#' + currentNode));
        $("#" + currentNode).find("li").each(function (index, listItem) {
            childNode = $(listItem).attr("id");

            if ($.inArray(childNode, hasVerifiedNodes) === -1) {
                hasVerifiedNodes.push(childNode);

                if ($.inArray(childNode, g_disabledLeafNodesArray) === -1) {
                    if (childNode.indexOf('_Pin') !== -1) {
                        pinState = g_pinCurrentDescription[parseInt(childNode.sliceAfterX('_Pin'), 10) - 1].replaceSpecialCharacters();
                        if (pinState !== childNode.restorePinTreeNodeName()) {
                            bFullyChecked = false;
                            $("#" + childNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                        }
                        else {
                            bAtLeastOneChecked = true;
                        }

                        if (($("#" + childNode + " >a").css("color") === 'red' || $("#" + childNode + " >a").css("color") === 'rgb(255, 0, 0)') &&
                            $.inArray(childNode.sliceAfterX('Pin'), conflictNodePins) === -1) {
                            conflictNodes.push(childNode);
                            conflictNodePins.push(childNode.sliceAfterX('Pin'));
                        }
                    }
                    else {
                        bChecked = false;
                        conflictNodeCount = 0;
                        $moduleTree.jstree("open_node", $('#' + childNode));
                        $("#" + childNode).removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
                        $("#" + childNode).find("li").each(function (index1, listItem1) {
                            childOfChildNode = $(listItem1).attr("id");
                            hasVerifiedNodes.push(childOfChildNode);

                            pinState = g_pinCurrentDescription[parseInt(childOfChildNode.sliceAfterX('_Pin'), 10) - 1].replaceSpecialCharacters();
                            if (pinState === childOfChildNode.restorePinTreeNodeName()) {
                                bChecked = true;
                                bAtLeastOneChecked = true;
                            }
                            else {
                                $("#" + childOfChildNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                            }

                            if ($("#" + childOfChildNode + " >a").css("color") === 'red' || $("#" + childOfChildNode + " >a").css("color") === 'rgb(255, 0, 0)') {
                                conflictNodeCount = conflictNodeCount + 1;
                            }

                            if (((index1 + 1) === $("#" + childNode).find("li").length) &&
                                bChecked === false) {
                                bFullyChecked = false;
                                if (conflictNodeCount === $("#" + childNode).find("li").length) {
                                    conflictNodesLaterAdd.push(childNode);
                                }
                                $("#" + childNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                            }
                        });
                    }
                }
                else {
                    pinState = g_pinCurrentDescription[parseInt(childNode.sliceAfterX('_Pin'), 10) - 1].replaceSpecialCharacters();
                    if (pinState === childNode.restorePinTreeNodeName()) {
                        bChecked = true;
                        bAtLeastOneChecked = true;
                    }
                    else {
                        $("#" + childNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                    }

                    if ($("#" + childNode + " >a").css("color") === 'red' || $("#" + childNode + " >a").css("color") === 'rgb(255, 0, 0)') {
                        conflictNodeCount = conflictNodeCount + 1;
                    }

                    if (((index + 1) === $("#" + currentNode).find("li").length) &&
                        bChecked === false) {
                        bFullyChecked = false;
                        if (conflictNodeCount === $("#" + currentNode).find("li").length) {
                            for (i = 0, max = $("#" + currentNode).find("li").length; i < max; i += 1) {
                                pinState = $("#" + currentNode).find("li")[i].id;
                                if ($.inArray(pinState.sliceAfterX('Pin'), conflictNodePins) === -1) {
                                    conflictNodes.push(pinState);
                                    conflictNodePins.push(pinState.sliceAfterX('Pin'));
                                    break;
                                }
                            }
                        }
                        $("#" + currentNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                        // decide whether or not to add the check symbol to the root module
                        for (i = 0, max = g_usedPins.length; i < max; i += 1) {
                            if (g_usedPins[i].sliceAfterX(':') === module) {
                                bChecked = true;
                                break;
                            }
                        }
                        if (!bChecked) {
                            $("#" + module + '_Root').removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                        }
                        else {
                            $("#" + module + '_Root').removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
                        }
                    }
                }
            }
        });
        if (conflictNodesLaterAdd.length > 0) {
            for (i = 0, max = conflictNodesLaterAdd.length; i < max; i += 1) {
                childNode = conflictNodesLaterAdd[i];
                for (j = 0, maxJ = $("#" + childNode).find("li").length; j < maxJ; j += 1) {
                    pinState = $("#" + childNode).find("li")[j].id;
                    if ($.inArray(pinState.sliceAfterX('Pin'), conflictNodePins) === -1) {
                        conflictNodes.push(pinState);
                        conflictNodePins.push(pinState.sliceAfterX('Pin'));
                        break;
                    }
                }
            }
        }

        if (!bAtLeastOneChecked) {
            $("#" + currentNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
        }
        else {
            $("#" + currentNode).removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
        }

        // when fully checked, we uncheck all the nodes
        if (bFullyChecked) {
            if (typeof (g_MFPFunctionsWaitForBeenChecked[module]) !== 'undefined' && g_MFPFunctionsWaitForBeenChecked[module].length > 0) {
                g_MFPFunctionsWaitForBeenChecked[module].length = 0;
            }

            $moduleTree.jstree("uncheck_node", $('#' + currentNode));
        }
        else {
            // conflict happened
            if (conflictNodes.length > 0) {
                warningMessage = "";
                for (i = 0; i < conflictNodes.length; i += 1) {
                    pinState = conflictNodes[i].sliceAfterX('Pin');
                    if (g_userSelectUIlanguage === "Simplified Chinese") {
                        warningMessage += "第" + updatePinName(pinState) + "脚位已被" +
                            updatePinDescription(g_pinCurrentDescription[parseInt(pinState, 10) - 1]) + "使用。<br />";
                    }
                    else if (g_userSelectUIlanguage === "Traditional Chinese") {
                        warningMessage += "第" + updatePinName(pinState) + "腳位已被" +
                            updatePinDescription(g_pinCurrentDescription[parseInt(pinState, 10) - 1]) + "使用。<br />";
                    }
                    else {
                        warningMessage += "Pin" + updatePinName(pinState) + " has been asserted by " +
                            updatePinDescription(g_pinCurrentDescription[parseInt(pinState, 10) - 1]) + ".<br />";
                    }
                }

                if (g_userSelectUIlanguage === "Simplified Chinese") {
                    title = '冲突发生';
                    content = '預期的' + module + '和别的模组冲突。请问你要调整旧的且改设置到现在的模组吗?';
                    okButton = "要";
                    cancelButton = "不要";
                }
                else if (g_userSelectUIlanguage === "Traditional Chinese") {
                    title = '衝突發生';
                    content = '預期的' + module + '和別的模組衝突。請問你要調整舊的且改設置到現在的模組嗎?';
                    okButton = "要";
                    cancelButton = "不要";
                }
                else {
                    title = 'Conflict Occurred';
                    content = 'The expected ' + module + ' conflicts with other modules. Would you like to adjust the old modules and configure to the current one?';
                    okButton = "Yes";
                    cancelButton = "No";
                }

                // close the last dialog
                destroyAllExistentDialogs();
                // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
                dialog = $('<div id="conflictDialog"><p>' + content + '<br />' + warningMessage + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>').dialog({
                    modal: false,
                    resizable: false,
                    title: title,
                    width: 500,
                    height: 400,
                    show: 'fade',
                    hide: 'fade',
                    close: function () {
                        $("#conflictDialog").dialog("destroy");
                    },
                    buttons: [
                        {
                            text: okButton,
                            click: function () {
                                gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);
                                g_undo_gpio_MFPs = [];
                                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                                    g_undo_gpio_MFPs[gpio_MFPsNames[i]] = g_gpio_MFPs[gpio_MFPsNames[i]];
                                }
                                g_undo_pinsConfiguredByGPIO = [];
                                for (i = 0, max = g_pinsConfiguredByGPIO.length; i < max; i += 1) {
                                    g_undo_pinsConfiguredByGPIO[i] = g_pinsConfiguredByGPIO[i];
                                }
                                g_readConfigFile = "";
                                for (i = 0, max = g_pinCurrentDescription.length; i < max; i += 1) {
                                    if (g_pinCurrentDescription[i] !== "") {
                                        g_readConfigFile += "Pin" + (i + 1) + ":" + updatePinDescription(g_pinCurrentDescription[i]) + "\r\n";
                                    }
                                }

                                treeView_checkbox_semiDisabled_handler_core(currentNode);

                                g_adjustedModulesMessageString = "";
                                modulePins = [];
                                modulePinsString = [];
                                for (i = 0; i < conflictNodes.length; i += 1) {
                                    modulePins.push(parseInt(conflictNodes[i].sliceAfterX('Pin'), 10));
                                    modulePinsString.push(conflictNodes[i].sliceAfterX('Pin'));
                                }
                                module = specialModuleNaming(conflictNodes[0].slicePriorToX('_'));
                                conflict_handler(conflictNodes[0], module, modulePins, modulePinsString);
                            }
                        },
                        {
                            text: cancelButton,
                            click: function () {
                                if ($("#conflictDialog").dialog("isOpen")) {
                                    $("#conflictDialog").dialog("destroy");
                                }

                                treeView_checkbox_semiDisabled_handler_core(currentNode);
                            }
                        }
                    ]
                });
                $("#conflictDialog").dialog('widget').draggable('option', 'axis', 'x y');
                $("#conflictDialog").dialog('widget').draggable({ containment: 'window', scroll: false });

                if (g_bTestingConflict) {
                    buttons = $("#conflictDialog").dialog("option", "buttons")[0].click.apply(dialog);

                    if ($("#conflictDialog").dialog("isOpen")) {
                        $("#conflictDialog").dialog("destroy");
                    }
                }

                title = null;
                content = null;
                okButton = null;
                cancelButton = null;
            }
            else {
                treeView_checkbox_semiDisabled_handler_core(currentNode);
            }
        }

        updateMFPTree();

        // de-reference
        i = null;
        max = null;
        j = null;
        maxJ = null;
        $moduleTree = null;
        module = null;
        childNode = null;
        childOfChildNode = null;
        semiDisabledNodes = [];
        hasVerifiedNodes = [];
        gpio_MFPsNames = [];
        bChecked = null;
        bFullyChecked = null;
        bAtLeastOneChecked = null;
    }

    function treeView_checkbox_semiDisabled_handler_core(currentNode) {
        var i,
            max,
            $moduleTree = $("#moduleTree"),
            module,
            modulePins = [],
            currentNode_local,
            childNode,
            childOfChildNode,
            semiDisabledNodes = [],
            pinState,
            bChecked,
            bLeafChecked;

        function f1(index1, listItem1) {
            childOfChildNode = $(listItem1).attr("id");
            pinState = g_pinCurrentDescription[parseInt(childOfChildNode.sliceAfterX('_Pin'), 10) - 1].replaceSpecialCharacters();
            if (pinState === childOfChildNode.restorePinTreeNodeName()) {
                bChecked = true;
                bLeafChecked = true;
                // Since things are done, we can leave the loop.
                return false;
            }
        }

        function f2(index1, listItem1) {
            childOfChildNode = $(listItem1).attr("id");
            if (!($("#" + childOfChildNode + " >a").css("color") === 'red' || $("#" + childOfChildNode + " >a").css("color") === 'rgb(255, 0, 0)') &&
                !bLeafChecked) {
                currentNode_local = childOfChildNode.restorePinTreeNodeName() + "_Intermediate";
                // individual feature checked
                modulePins = [];
                modulePins[0] = parseInt(childOfChildNode.sliceAfterX('Pin'), 10);
                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                checkTreeViewCheckbox_Speedup(childOfChildNode, module, modulePins);

                bChecked = true;
                bLeafChecked = true;
            }

            pinState = g_pinCurrentDescription[parseInt(childOfChildNode.sliceAfterX('_Pin'), 10) - 1].replaceSpecialCharacters();
            if (pinState === childOfChildNode.restorePinTreeNodeName()) {
                $("#" + childOfChildNode).removeClass('jstree-unchecked jstree-undetermined').addClass('jstree-checked');
            }
            else {
                $("#" + childOfChildNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
            }
        }

        // check nodes which do not have any conflict
        bChecked = false;
        bLeafChecked = false;
        semiDisabledNodes = [];
        module = specialModuleNaming(currentNode.slicePriorToX('_'));
        $("#" + currentNode).find("li").each(function (index, listItem) {
            childNode = $(listItem).attr("id");
            if (childNode.indexOf('_Pin') !== -1 &&
                $.inArray(childNode.restorePinTreeNodeName() + "_Intermediate", semiDisabledNodes) === -1) {
                if (!($("#" + childNode + " >a").css("color") === 'red' || $("#" + childNode + " >a").css("color") === 'rgb(255, 0, 0)') &&
                    !bLeafChecked) {
                    if ($.inArray(childNode, g_disabledLeafNodesArray) === -1) {
                        // individual feature checked
                        modulePins = [];
                        modulePins[0] = parseInt(childNode.sliceAfterX('Pin'), 10);
                        // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                        checkTreeViewCheckbox_Speedup(childNode, module, modulePins);

                        bChecked = true;
                    }
                    else {
                        bChecked = false;
                        // if one of children has been checked, keep it and leave.
                        currentNode_local = childNode.restorePinTreeNodeName() + "_Intermediate";
                        $moduleTree.jstree("open_node", $('#' + currentNode_local));
                        $("#" + currentNode_local).find("li").each(function (index1, listItem1) {
                            childOfChildNode = $(listItem1).attr("id");
                            pinState = g_pinCurrentDescription[parseInt(childOfChildNode.sliceAfterX('_Pin'), 10) - 1].replaceSpecialCharacters();
                            if (pinState === childOfChildNode.restorePinTreeNodeName()) {
                                bChecked = true;
                                // Since things are done, we can leave the loop.
                                return false;
                            }
                        });

                        if (!bChecked) {
                            // individual feature checked
                            modulePins = [];
                            modulePins[0] = parseInt(childNode.sliceAfterX('Pin'), 10);
                            // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                            checkTreeViewCheckbox_Speedup(childNode, module, modulePins);
                        }

                        bChecked = true;
                        bLeafChecked = true;
                    }
                }

                pinState = g_pinCurrentDescription[parseInt(childNode.sliceAfterX('_Pin'), 10) - 1].replaceSpecialCharacters();
                if (pinState === childNode.restorePinTreeNodeName()) {
                    $("#" + childNode).removeClass('jstree-unchecked jstree-undetermined').addClass('jstree-checked');
                }
                else {
                    $("#" + childNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
                }
            }
            else if (childNode.indexOf('_Intermediate') !== -1) {
                semiDisabledNodes.push(childNode);
            }
        });

        for (i = 0, max = semiDisabledNodes.length; i < max; i += 1) {
            bLeafChecked = false;
            // if one of children has been checked, keep it and leave.
            $moduleTree.jstree("open_node", $('#' + semiDisabledNodes[i]));
            $("#" + semiDisabledNodes[i]).find("li").each(f1);
            $("#" + semiDisabledNodes[i]).find("li").each(f2);

            if (bLeafChecked) {
                $("#" + semiDisabledNodes[i]).removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
            }
            else {
                $("#" + semiDisabledNodes[i]).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
            }
        }

        if (bChecked) {
            $("#" + currentNode).removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
            $("#" + module + '_Root').removeClass('jstree-checked jstree-unchecked').addClass('jstree-undetermined');
        }
        else {
            $("#" + currentNode).removeClass('jstree-checked jstree-undetermined').addClass('jstree-unchecked');
        }

        updateMFPTree();

        // de-reference
        i = null;
        max = null;
        $moduleTree = null;
        module = null;
        modulePins = [];
        currentNode_local = null;
        childNode = null;
        childOfChildNode = null;
        semiDisabledNodes = [];
        pinState = null;
        bChecked = null;
        bLeafChecked = null;
    }

    function uncheckTreeViewCheckbox_Speedup(currentNode, module, modulePins) {
        var i,
            j,
            max,
            maxJ,
            numberOfPins = modulePins.length,
            bExisted,
            index;

        for (i = 0; i < numberOfPins; i += 1) {
            index = $.inArray(modulePins[i] + ':' + module, g_usedPins);
            if (index !== -1) {
                // update g_usedPins
                g_usedPins.splice(index, 1);
                update_gpio_MFPs((modulePins[i] - 1), NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][modulePins[i] - 1]);

                // update the current state of the pin
                g_pinCurrentModule[modulePins[i] - 1] = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][modulePins[i] - 1];

                // remove the recorded highlight pin
                if (g_pinsHighlightedByChipView.length !== 0) {
                    for (j = 0, maxJ = g_pinsHighlightedByChipView.length; j < maxJ; j += 1) {
                        if (g_pinsHighlightedByChipView[j] === modulePins[i]) {
                            g_pinsHighlightedByChipView.splice(j, 1);
                        }
                    }
                }
            }
        }

        // erase old pin descriptions
        for (i = 0, max = modulePins.length; i < max; i += 1) {
            if (module !== g_pinCurrentModule[modulePins[i] - 1]) {
                showChosenPinFeature(modulePins[i] - 1, "", true);
                // mark nodes related to the pin
                markNodeRelatedToPin(currentNode + '_Pin' + modulePins[i], modulePins[i], false);
            }
            // update the color of pins
            updatePinColor(modulePins[i], "#FFFFFF");
        }

        // de-reference
        i = null;
        max = null;
        j = null;
        maxJ = null;
        numberOfPins = null;
        bExisted = null;
    }

    // PinFeature: 點選Pin_MultiFunction_Selection後出現的字串，bClearPinFeatrueText: 是否要清除PinFeatrue字串
    function showChosenPinFeature(pin, pinFeature, bClearPinFeatrueText) {
        var i,
            max,
            oneSidePinIndex,
            context,
            x,
            y,
            eraseMargin = 4;

        if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            context = g_utility.getContext($("#pin_side_0")[0]);
        }
        else {
            context = g_utility.getContext($("#NUC_PinConfiguration_Canvas")[0]);
        }
        // stash the pins configured to GPIO into g_pinsConfiguredByGPIO.
        if (!bClearPinFeatrueText && (pinFeature.indexOf('_dot') !== -1 || pinFeature.indexOf('.') === 2) && $.inArray(pin, g_pinsConfiguredByGPIO) === -1) {
            // record the pins configured by the GPIO.
            if (typeof (g_pinsConfiguredByGPIO) === 'undefined') {
                g_pinsConfiguredByGPIO[0] = pin;
            }
            else {
                g_pinsConfiguredByGPIO.push(pin);
            }
        }

        // remove the pins configured to GPIO into g_pinsConfiguredByGPIO when they are not used anymore.
        if (bClearPinFeatrueText && g_pinsConfiguredByGPIO.length !== 0) {
            for (i = 0, max = g_pinsConfiguredByGPIO.length; i < max; i += 1) {
                if (g_pinsConfiguredByGPIO[i] === pin) {
                    g_pinsConfiguredByGPIO.splice(i, 1);
                }
            }
        }

        // restore to the primitive name
        pinFeature = pinFeature.restorePinTreeNodeName().restoreSpecialCharacters();

        // update g_pinCurrentDescription
        if (bClearPinFeatrueText) {
            g_pinCurrentDescription[pin] = "";
        }
        else {
            g_pinCurrentDescription[pin] = pinFeature;
            if (!g_bReadyForRelease && !g_bTestingConflict) {
                $("#NUC_PinConfiguration_Canvas")[0].setAttribute('innerText', pinFeature); // for functional test
            }
        }

        // replace pinFeature with user-defined ones.
        pinFeature = updatePinDescription(pinFeature);

        context.font = g_commonStringFont;
        if (g_partNumber_package.indexOf('SOP') !== -1) {
            oneSidePinIndex = pin - Math.floor(pin / g_NUC_Pin_Total_Number * 2) * g_NUC_Pin_Total_Number / 2;
            if (pin <= g_NUC_Pin_Total_Number / 2 - 1) {
                // left side
                x = g_NUC_Chip_StartPoint_X - g_NUC_Pin_Height - g_NUC_TextDescription_Padding;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + oneSidePinIndex * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;

                context.save();
                // clear text
                context.fillStyle = '#FFFFFF';
                context.fillRect(x - g_Canvas_Width / 2 + 1, y - g_NUC_Pin_Width * 4 / 5 - eraseMargin / 2 - 1, g_Canvas_Width / 2, g_NUC_Pin_Width + eraseMargin);
                // fill text
                context.fillStyle = "#000000"; // black text
                if (bClearPinFeatrueText && g_bShowPinDescriptions) {
                    context.fillText(g_chipPinDescriptions[pin], x - context.measureText(g_chipPinDescriptions[pin]).width, y);
                }
                if (!bClearPinFeatrueText) {
                    context.fillText(pinFeature, x - context.measureText(pinFeature).width, y);
                }
                context.restore();
            }
            else {
                // right side
                x = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 + g_NUC_Pin_Height + g_NUC_TextDescription_Padding;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - oneSidePinIndex * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;

                // clear text
                context.fillStyle = '#FFFFFF';
                context.fillRect(x, y - g_NUC_Pin_Width * 4 / 5 - eraseMargin / 2 - 1, g_Canvas_Width / 2, g_NUC_Pin_Width + eraseMargin);
                // fill text
                context.fillStyle = "#000000"; // black text
                if (bClearPinFeatrueText && g_bShowPinDescriptions) {
                    context.fillText(g_chipPinDescriptions[pin], x, y);
                }
                if (!bClearPinFeatrueText) {
                    context.fillText(pinFeature, x, y);
                }
            }
        }
        else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            // inside
            x = g_NUC_Pin_Padding + g_NUC_Pin_Radius + Math.floor(pin / g_NUC_Pin_Vertial_Number) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval);
            y = g_NUC_Pin_Padding + g_NUC_Pin_Radius + (g_NUC_Pin_Vertial_Number - 1 - (pin % g_NUC_Pin_Vertial_Number)) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval);
            // clear text
            context.beginPath();
            context.arc(x, y, g_NUC_Pin_Radius, 0, Math.PI * 2, true);
            context.fillStyle = '#FFFFFF';
            context.fill();
            // fill text
            context.fillStyle = "#000000"; // black text
            if (pinFeature === "") {
                pinFeature = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin];
            }
            if (pinFeature.length > 6) {
                pinFeature = pinFeature.slice(0, 6) + '..';
            }
            context.fillText(pinFeature, x - context.measureText(pinFeature).width / 2, y + parseInt(context.font, 10) / 2);
        }
        else {
            if (pin < g_NUC_Pin_Down_Number) {
                // down side
                oneSidePinIndex = pin + Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Down_Number) / 2);
                x = g_NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + oneSidePinIndex * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length + g_NUC_Pin_Height;

                context.save();
                context.translate(x, y);
                context.rotate(-Math.PI / 2);
                context.textAlign = "end";
                // clear text
                context.fillStyle = '#FFFFFF';
                context.fillRect(-g_Canvas_Height / 2 - g_NUC_Text_Padding, -eraseMargin / 2 - 1, g_Canvas_Height / 2, g_NUC_Pin_Width + eraseMargin);
                // fill text
                context.fillStyle = "#000000"; // black text
                if (bClearPinFeatrueText && g_bShowPinDescriptions) {
                    context.fillText(g_chipPinDescriptions[pin], -g_NUC_Text_Padding, g_NUC_Pin_Width * 4 / 5);
                }
                if (!bClearPinFeatrueText) {
                    context.fillText(pinFeature, -g_NUC_Text_Padding, g_NUC_Pin_Width * 4 / 5);
                }
                context.restore();
            }
            else if (pin >= g_NUC_Pin_Down_Number && pin < (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number)) {
                // right side
                oneSidePinIndex = pin - g_NUC_Pin_Down_Number + Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Right_Number) / 2);
                x = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length + g_NUC_Pin_Height + g_NUC_TextDescription_Padding;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - oneSidePinIndex * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;

                // clear text
                context.fillStyle = '#FFFFFF';
                context.fillRect(x, y - g_NUC_Pin_Width * 4 / 5 - eraseMargin / 2 - 1, g_Canvas_Width / 2, g_NUC_Pin_Width + eraseMargin);
                // fill text
                context.fillStyle = "#000000"; // black text
                if (bClearPinFeatrueText && g_bShowPinDescriptions) {
                    context.fillText(g_chipPinDescriptions[pin], x, y);
                }
                if (!bClearPinFeatrueText) {
                    context.fillText(pinFeature, x, y);
                }
            }
            else if (pin >= (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number) && pin < (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number)) {
                // upper side
                oneSidePinIndex = pin - g_NUC_Pin_Down_Number - g_NUC_Pin_Right_Number + Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Upper_Number) / 2);
                x = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - oneSidePinIndex * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                y = g_NUC_Chip_StartPoint_Y - g_NUC_Pin_Height;

                context.save();
                context.translate(x, y);
                context.rotate(-Math.PI / 2);
                // clear text
                context.fillStyle = '#FFFFFF';
                context.fillRect(2 * g_NUC_TextDescription_Padding - 2 * g_NUC_Pin_LengthWidth, -eraseMargin / 2 - 1, g_Canvas_Height / 2, g_NUC_Pin_Width + eraseMargin);
                // fill text
                context.fillStyle = "#000000"; // black text
                if (bClearPinFeatrueText && g_bShowPinDescriptions) {
                    context.fillText(g_chipPinDescriptions[pin], 2 * g_NUC_TextDescription_Padding, g_NUC_Pin_Width * 3 / 4);
                }
                if (!bClearPinFeatrueText) {
                    context.fillText(pinFeature, 2 * g_NUC_TextDescription_Padding, g_NUC_Pin_Width * 3 / 4);
                }
                context.restore();
            }
            else if (pin >= (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number) && pin < g_NUC_Pin_Total_Number) {
                // left side
                oneSidePinIndex = pin - g_NUC_Pin_Down_Number - g_NUC_Pin_Right_Number - g_NUC_Pin_Upper_Number + Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Left_Number) / 2);
                x = g_NUC_Chip_StartPoint_X - g_NUC_Pin_Height - g_NUC_TextDescription_Padding;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + oneSidePinIndex * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;

                context.save();
                //context.textAlign = "end";
                // clear text
                context.fillStyle = '#FFFFFF';
                context.fillRect(x - g_Canvas_Width / 2 + 1, y - g_NUC_Pin_Width * 4 / 5 - eraseMargin / 2 - 1, g_Canvas_Width / 2, g_NUC_Pin_Width + eraseMargin);
                // fill text
                context.fillStyle = "#000000"; // black text
                if (bClearPinFeatrueText && g_bShowPinDescriptions) {
                    context.fillText(g_chipPinDescriptions[pin], x - context.measureText(g_chipPinDescriptions[pin]).width, y);
                }
                if (!bClearPinFeatrueText) {
                    context.fillText(pinFeature, x - context.measureText(pinFeature).width, y);
                }
                context.restore();
            }
        }
        // de-reference
        oneSidePinIndex = null;
        context = null;
        x = null;
        y = null;
        eraseMargin = null;
        i = null;
        max = null;
    }
    function markNodeRelatedToPin(invokingNode, pin, bChecked) {
        var i,
            j,
            max,
            maxJ,
            pinDescription = g_chipPinDescriptions[pin - 1],
            id,
            id_intermediate,
            moduleNode,
            id_intermediateArray = [],
            moduleNodeArray = [];

        function f1(index, listItem) {
            if ($("#" + $(listItem).attr("id") + " >a").css("color") === 'red' || $("#" + $(listItem).attr("id") + " >a").css("color") === 'rgb(255, 0, 0)') {
                $("#" + id_intermediateArray[i] + " >a").css("color", "red");
                // Since things are done, we can leave the loop.
                return false;
            }
        }

        function f2(index, listItem) {
            if ($("#" + $(listItem).attr("id") + " >a").css("color") === 'red' || $("#" + $(listItem).attr("id") + " >a").css("color") === 'rgb(255, 0, 0)') {
                $("#" + moduleNodeArray[i] + " >a").css("color", "red");
                // Since things are done, we can leave the loop.
                return false;
            }
        }

        if (bChecked) {
            while (pinDescription !== "") {
                if (pinDescription.indexOf('/') !== -1) {
                    id = pinDescription.slicePriorToX('/') + '_Pin' + pin;
                    id_intermediate = pinDescription.slicePriorToX('/') + '_Intermediate';
                }
                else {
                    id = pinDescription + '_Pin' + pin;
                    id_intermediate = pinDescription + '_Intermediate';
                }

                id = id.replaceSpecialCharacters();
                id_intermediate = id_intermediate.replaceSpecialCharacters();
                invokingNode = invokingNode.replaceSpecialCharacters();

                if (id.restorePinTreeNodeName() !== invokingNode.restorePinTreeNodeName()) {
                    if ($("#" + id + " >a").css("color") !== 'red' || $("#" + id + " >a").css("color") !== 'rgb(255, 0, 0)') {
                        $("#" + id + " >a").css("color", "red");
                        $("#" + id_intermediate + " >a").css("color", "red");
                        if (id.indexOf('_') !== -1) {
                            $("#" + specialModuleNaming(id.slicePriorToX('_')) + '_Root' + " >a").css("color", "red");
                        }
                    }
                }
                else {
                    if ($("#" + id + " >a").css("color") !== 'black' || $("#" + id + " >a").css("color") !== 'rgb(0, 0, 0)') {
                        $("#" + id + " >a").css("color", "black");
                        $("#" + id_intermediate + " >a").css("color", "black");

                        if ($.inArray(id_intermediate, id_intermediateArray) === -1) {
                            id_intermediateArray.push(id_intermediate);
                        }

                        if (id.indexOf('_') !== -1) {
                            moduleNode = specialModuleNaming(id.slicePriorToX('_')) + '_Root';
                            if (!($("#" + moduleNode).find("li").length === 0 && ($("#" + moduleNode + " >a").css("color") === 'red') || $("#" + moduleNode + " >a").css("color") === 'rgb(255, 0, 0)')) {
                                $("#" + moduleNode + " >a").css("color", "black");

                                if ($.inArray(moduleNode, moduleNodeArray) === -1) {
                                    moduleNodeArray.push(moduleNode);
                                }
                            }
                        }
                    }
                }

                if (pinDescription.indexOf('/') !== -1) {
                    pinDescription = pinDescription.sliceAfterX('/');
                }
                else {
                    pinDescription = "";
                }
            }
        }
        else {
            while (pinDescription !== "") {
                if (pinDescription.indexOf('/') !== -1) {
                    id = pinDescription.slicePriorToX('/') + '_Pin' + pin;
                    id_intermediate = pinDescription.slicePriorToX('/') + '_Intermediate';
                }
                else {
                    id = pinDescription + '_Pin' + pin;
                    id_intermediate = pinDescription + '_Intermediate';
                }

                id = id.replaceSpecialCharacters();
                id_intermediate = id_intermediate.replaceSpecialCharacters();

                if (id.restorePinTreeNodeName() === g_pinCurrentDescription[pin - 1].replaceSpecialCharacters() ||
                    g_pinCurrentDescription[pin - 1] === "") {
                    if ($("#" + id + " >a").css("color") !== 'black' || $("#" + id + " >a").css("color") !== 'rgb(0, 0, 0)') {
                        $("#" + id + " >a").css("color", "black");
                        $("#" + id_intermediate + " >a").css("color", "black");
                        if ($.inArray(id_intermediate, id_intermediateArray) === -1) {
                            id_intermediateArray.push(id_intermediate);
                        }
                        if (id.indexOf('_') !== -1) {
                            moduleNode = specialModuleNaming(id.slicePriorToX('_')) + '_Root';
                            if ($("#" + moduleNode + " >a").css("color") === 'red' || $("#" + moduleNode + " >a").css("color") === 'rgb(255, 0, 0)') {
                                $("#" + moduleNode + " >a").css("color", "black");
                                if ($("#" + moduleNode).find("li").length !== 0) {
                                    if ($.inArray(moduleNode, moduleNodeArray) === -1) {
                                        moduleNodeArray.push(moduleNode);
                                    }
                                }
                                else {
                                    moduleNode = moduleNode.restorePinTreeNodeName();
                                    for (i = 0, max = g_module_pins[moduleNode].length; i < max; i += 1) {
                                        for (j = 0, maxJ = g_usedPins.length; j < maxJ; j += 1) {
                                            if (g_module_pins[moduleNode][i] === parseInt(g_usedPins[j].slicePriorToX(':'), 10) &&
                                                moduleNode !== g_usedPins[j].sliceAfterX(':')) {
                                                $("#" + moduleNode + '_Root' + " >a").css("color", "red");
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                else {
                    if ($("#" + id + " >a").css("color") !== 'red' || $("#" + id + " >a").css("color") !== 'rgb(255, 0, 0)') {
                        $("#" + id + " >a").css("color", "red");
                        $("#" + id_intermediate + " >a").css("color", "red");
                        if (id.indexOf('_') !== -1) {
                            $("#" + specialModuleNaming(id.slicePriorToX('_')) + '_Root' + " >a").css("color", "red");
                        }
                    }
                }

                if (pinDescription.indexOf('/') !== -1) {
                    pinDescription = pinDescription.sliceAfterX('/');
                }
                else {
                    pinDescription = "";
                }
            }
        }

        for (i = 0, max = id_intermediateArray.length; i < max; i += 1) {
            $("#" + id_intermediateArray[i]).find("li").each(f1);
        }
        for (i = 0, max = moduleNodeArray.length; i < max; i += 1) {
            $("#" + moduleNodeArray[i]).find("li").each(f2);
        }

        // de-reference
        pinDescription = null;
        id = null;
        id_intermediate = null;
        moduleNode = null;
        i = null;
        j = null;
        max = null;
        maxJ = null;
    }

    // Since progressive_render is set to true in the jstree, the hidden nodes will not be loaded into the DOM.
    // To search these nodes which are not exist in the DOM, we must load them firstly by opening their root nodes.
    function searchNodesInModulesTree(searchString) {
        var i,
            max,
            j,
            maxJ,
            k,
            maxK,
            $moduleTree = $("#moduleTree"),
            $searchInput = $("#searchInput_Pin"),
            origianlSearchString = searchString,
            module,
            modulesToBeOpened = [],
            pinDescription,
            currentIndex,
            indicesOfSearchString = [],
            indicesOfSlash = [];

        function sortNumber(a, b) { return a - b; }

        // too trivial search is filtered, such as only digits, too short length, and 'pin:'.
        if (/^\d+$/.test(searchString) || searchString.length < 2 || searchString.length > 15 || (searchString.toLowerCase().indexOf('pin:') === 0 && searchString.length === 4)) {
            $moduleTree.jstree("close_all");
            $moduleTree.jstree("clear_search");
            if (searchString !== "") {
                decideUIlanguage();

                if (searchString.length < 2) {
                    showAlertDialog("最小输入字元为两个。请更换至更合适的搜寻。",
                        "最小輸入字元為兩個。請更換至更合適的搜尋。",
                        "The minimum inputting characters are two. Please change to a proper search.");
                }
                else {
                    showAlertDialog("预期的搜寻将花费很多时间。请更换至更合适的搜寻。",
                        "預期的搜尋將花費很多時間。請更換至更合適的搜尋。",
                        "The expected search will take much time. Please change to a proper search.");
                }
                $searchInput.val("");
            }
            else {
                $searchInput.val("");
            }

            return;
        }

        try {
            if (searchString.toLowerCase().indexOf('pin:') !== -1) {
                searchString = searchString.slice(searchString.toLowerCase().indexOf('pin:') + 4);
                if (searchString.indexOf(')') !== -1) {
                    searchString = searchString.slicePriorToX(')');
                }

                if (parseInt(searchString, 10) > g_NUC_Pin_Total_Number) {
                    return;
                }

                pinDescription = g_chipPinDescriptions[parseInt(searchString, 10) - 1];

                indicesOfSlash = [];
                for (i = 0, max = pinDescription.length; i < max; i += 1) {
                    if (pinDescription[i] === '/') {
                        indicesOfSlash.push(i);
                    }
                }

                if (indicesOfSlash.length === 0) {
                    module = pinDescription;

                    module = specialModuleNaming(module);
                    if (module.indexOf('_') !== -1) {
                        module = module.slicePriorToX('_');
                    }

                    if ($.inArray(module, modulesToBeOpened) === -1) {
                        modulesToBeOpened.push(module);
                    }
                }
                else {
                    for (i = 0, max = indicesOfSlash.length + 1; i < max; i += 1) {
                        if (i === 0) {
                            module = pinDescription.slice(0, indicesOfSlash[0]);
                        }
                        else if (i === max - 1) {
                            module = pinDescription.slice(indicesOfSlash[max - 2] + 1);
                        }
                        else {
                            module = pinDescription.slice(indicesOfSlash[i - 1] + 1, indicesOfSlash[i]);
                        }

                        module = specialModuleNaming(module);
                        if (module.indexOf('_') !== -1) {
                            module = module.slicePriorToX('_');
                        }

                        if ($.inArray(module, modulesToBeOpened) === -1) {
                            modulesToBeOpened.push(module);
                        }
                    }
                }
            }
            else {
                for (i = 0; i < g_NUC_Pin_Total_Number; i += 1) {
                    pinDescription = g_chipPinDescriptions[i];
                    if (pinDescription.toLowerCase().indexOf(searchString.toLowerCase()) !== -1) {
                        indicesOfSearchString = [];
                        for (j = 0, maxJ = pinDescription.length; j < maxJ; j += 1) {
                            if (pinDescription.slice(j).toLowerCase().indexOf(searchString.toLowerCase()) === 0) {
                                indicesOfSearchString.push(j);
                            }
                        }

                        indicesOfSlash = [];
                        for (j = 0, maxJ = pinDescription.length; j < maxJ; j += 1) {
                            if (pinDescription[j] === '/') {
                                indicesOfSlash.push(j);
                            }
                        }

                        for (j = 0, maxJ = indicesOfSearchString.length; j < maxJ; j += 1) {
                            if (indicesOfSlash.length === 0) {
                                module = pinDescription;
                            }
                            else {
                                indicesOfSlash.push(indicesOfSearchString[j]);
                                indicesOfSlash.sort(sortNumber);

                                for (k = 0, maxK = indicesOfSlash.length; k < maxK; k += 1) {
                                    if (indicesOfSlash[k] === indicesOfSearchString[j]) {
                                        currentIndex = k;
                                        break;
                                    }
                                }

                                if (currentIndex === 0) {
                                    module = pinDescription.slice(0, indicesOfSlash[1]);
                                }
                                else if (currentIndex === indicesOfSlash.length - 1) {
                                    module = pinDescription.slice(indicesOfSlash[indicesOfSlash.length - 2] + 1);
                                }
                                else {
                                    module = pinDescription.slice(indicesOfSlash[currentIndex - 1] + 1, indicesOfSlash[currentIndex + 1]);
                                }

                                indicesOfSlash.splice(currentIndex, 1);

                                module = specialModuleNaming(module);
                                if (module.indexOf('_') !== -1) {
                                    module = module.slicePriorToX('_');
                                }

                                if ($.inArray(module, modulesToBeOpened) === -1) {
                                    modulesToBeOpened.push(module);
                                }
                            }
                        }
                    }
                }
            }

            // open the related module nodes in advance.
            for (i = 0, max = modulesToBeOpened.length; i < max; i += 1) {
                $moduleTree.jstree("open_node", $('#' + modulesToBeOpened[i] + '_Root'));
            }

            // do the search
            $moduleTree.jstree("close_all");
            $moduleTree.jstree("search", origianlSearchString);
        }
        catch (err) { }

        // de-reference
        i = null;
        max = null;
        j = null;
        maxJ = null;
        origianlSearchString = null;
        $moduleTree = null;
        $searchInput = null;
        module = null;
        modulesToBeOpened = [];
        pinDescription = null;
        currentIndex = null;
        indicesOfSearchString = [];
        indicesOfSlash = [];
    }

    function avoidClicking() {
        // avoid clicking these regions when the loading is not ready
        $('#ChipType').hide();
        $('#MCU').hide();
        //$('#rootTree_Pin').hide();
        $("#panel").css('overflow', 'hidden');
        $('#ChipType').css('border', 'white');
        $('#MCU').css('border', 'white');
    }

    function allowClicking() {
        // avoid clicking these regions when the loading is not ready
        $('#ChipTypeSelect').show();
        $('#MCUselect').show();
        $('#rootTree_Pin').show();
        $("#panel").css('overflow-x', 'scroll');
        $("#panel").css('overflow-y', 'scroll');
        $('#ChipType').css('border-right', '16px solid #F2F2F2');
        $('#MCU').css('border-right', '16px solid #F2F2F2');
    }

    function zoomToBestFit() {
        // Chrome版本不需要
    }

    function constrainMouseClick() {
        // to constrain mouse cursor to stay within the viewport,
        // we disable the left clicking of the mouse except that users click on the select of ChipTypeSelect and MCUselect.
        $(document).mousedown(function (e) {
            e = e || window.event;
            var elementId = (e.target || e.srcElement).id;

            if (elementId === 'panel' || elementId === 'NUC_PinConfiguration_Canvas' || elementId === 'NUC_PinConfiguration_Canvas_Lining') {
                return false;
            }

            if (elementId === 'ChipTypeSelect') {
                showWarningForSaving(function () { $("#ChipTypeSelect").focus(); });
            }

            if (elementId === 'MCUselect') {
                showWarningForSaving(function () { $("#MCUselect").focus(); });
            }

            if (elementId === 'searchInput_Pin') {
                $('#searchInput_Pin').val("");
            }

            elementId = 0;

            return this;
        });

    }

    function showAlertDialog(SimplifiedChinese, TraditionalChinese, English) {
        decideUIlanguage();
        if (g_userSelectUIlanguage === "Simplified Chinese") {
            window.alert(SimplifiedChinese);
        }
        else if (g_userSelectUIlanguage === "Traditional Chinese") {
            window.alert(TraditionalChinese);
        }
        else {
            window.alert(English);
        }
    }

    function decidePartNumber_package() {
        var bReturnResult = true;
        if (!readAndVerifyConfigFileFromClientMachine()) {
            bReturnResult = false;
        }

        NUTOOL_PIN.decidepackageNumber();
        decideNUC_Pin_Total_Side_Number();

        return bReturnResult;
    }

    function decideNUC_Pin_Total_Side_Number() {
        g_NUC_Pin_Total_Number = parseInt(NUTOOL_PIN.g_packageNumber.slice(NUTOOL_PIN.g_packageNumber.indexOf(NUTOOL_PIN.g_packageNumber.match(/\d/))), 10);
        // since QFP33 has virtually 32 pins
        if (g_NUC_Pin_Total_Number === 33) {
            g_NUC_Pin_Total_Number = 32;
        }

        if (NUTOOL_PIN.g_packageNumberIndex.toLowerCase().indexOf('pin:') !== -1) {
            g_NUC_Pin_Down_Number = parseInt(NUTOOL_PIN.g_packageNumberIndex.sliceBetweenXandX('D', 'R'), 10);
            g_NUC_Pin_Right_Number = parseInt(NUTOOL_PIN.g_packageNumberIndex.sliceBetweenXandX('R', 'U'), 10);
            g_NUC_Pin_Upper_Number = parseInt(NUTOOL_PIN.g_packageNumberIndex.sliceBetweenXandX('U', 'L'), 10);
            g_NUC_Pin_Left_Number = parseInt(NUTOOL_PIN.g_packageNumberIndex.sliceBetweenXandX('L', ')'), 10);
        }
        else {
            g_NUC_Pin_Down_Number = g_NUC_Pin_Total_Number / 4;
            g_NUC_Pin_Right_Number = g_NUC_Pin_Total_Number / 4;
            g_NUC_Pin_Upper_Number = g_NUC_Pin_Total_Number / 4;
            g_NUC_Pin_Left_Number = g_NUC_Pin_Total_Number / 4;
        }
        g_NUC_Pin_SideMax_Number = Math.max(g_NUC_Pin_Down_Number, g_NUC_Pin_Right_Number, g_NUC_Pin_Upper_Number, g_NUC_Pin_Left_Number);

        return this;
    }

    function determineIEversion() {
        // 由於IE已經結束營業，所以目前調整為適應Chromium即可。
        g_minCurrIEZoom = 30;
        g_NUC_Pin_Interval = 2;
        g_opacity_min = 0.95;
        g_unPrintedCharacters = '\u000C';
        // get context of canvas
        g_utility.getContext = function (element) {
            return element.getContext("2d");
        };
        g_utility.removeContext = function ($id) {
            $id.remove();
        };
        g_utility.addEvent = function (element, eventName, eventFunction) {
            element.addEventListener(eventName, eventFunction, false);
        };
        $('html').addClass('ie10+');
        if (typeof NUTOOL_PER === 'undefined') {
            replacejscssfile('', '/tabulator/promise-polyfill.js', 'js');
            replacejscssfile('', '/tabulator/js/tabulator.js', 'js');
            replacejscssfile('', '/tabulator/css/tabulator.css', 'css');
        }

        return false;
    }

    function decideUIlanguage() {
        var recordedUIlanguage = localStorage.getItem("UIlanguage");

        if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
            g_userSelectUIlanguage = "English";
        } else {
            g_userSelectUIlanguage = recordedUIlanguage;
        }
        recordedUIlanguage = null;
    }

    function decideDisplayTooltip() {
        var recordedDisplayTooltip = localStorage.getItem("DisplayTooltip");

        if (typeof (recordedDisplayTooltip) == 'undefined' || recordedDisplayTooltip == null) {
            g_bUserDisplayTooltip = true;
        } else {
            if (recordedDisplayTooltip === 'No') {
                g_bUserDisplayTooltip = false;
            }
            else {
                g_bUserDisplayTooltip = true;
            }
        }

        recordedDisplayTooltip = null;
    }

    function decideHotKeys() {
        $(document).keypress(function (e) {
            switch (e.which) {
                case 122: //z
                    break;
                case 120: //x
                    break;
                case 99:  //c
                    break;
                case 113: //q
                    break;
                case 119: //w
                    break;
                default:
                    break;
            }
        });
    }

    function decideMouseWheel() {
        var obj = document.body,  // obj=element for example body
            panelElement = document.getElementById('panel');
        mouseWheel = function (e) {
            // disabling
            e = e ? e : window.event;
            if (e.ctrlKey) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
                else {
                    e.returnValue = false;
                }
                return false;
            }
        };

        $('#panel').mousewheel(function (event) {
            if (window.external.getCtrlState() === true) {
                // scroll up
                if (event.deltaY > 0) {
                    zoomIn();
                }
                // scroll down
                else if (event.deltaY < 0) {
                    zoomOut();
                }
            }
            if (window.external.getShiftState() === true) {
                // scroll up
                if (event.deltaY > 0) {
                    panelElement.scrollLeft -= 50;
                }
                // scroll down
                else if (event.deltaY < 0) {
                    panelElement.scrollLeft += 50;
                }
            }
        });
        // disable the intrinsic zoom functionality from IE.
        // bind mousewheel event on the mouseWheel function
        if (obj.addEventListener) {
            obj.addEventListener('DOMMouseScroll', mouseWheel, false);
            obj.addEventListener("mousewheel", mouseWheel, false);
        }
        else {
            obj.onmousewheel = mouseWheel;
        }
    }

    function isNumeric(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    function isGPIOPin(pinName) {
        if (typeof (pinName) !== 'undefined' &&
            pinName.slice(0, 1) === 'P' &&
            pinName.slice(2, 3) === '.' &&
            isNumeric(pinName.sliceAfterX('.'))) {
            return true;
        }
        else if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode &&
            typeof (pinName) !== 'undefined' &&
            pinName.slice(0, 1) === 'B' &&
            pinName.slice(1, 2) === 'P' &&
            isNumeric(pinName.sliceAfterX('.'))) {
            return true;
        } else if (g_chipType === 'N9H30K63IIM' &&
            typeof (pinName) !== 'undefined' &&
            pinName.indexOf('ADC') != -1) {  // N9H30K63IIM有特別的pin為ADCX
            return true;
        } else {
            return false;
        }
    }

    function isToolTipPin(pinName) {
        if (NUTOOL_PIN.g_cfg_Tooltip_Pin.length > 0 && NUTOOL_PIN.g_cfg_Tooltip_Pin.includes(pinName)) {
            return true;
        }
        else {
            return false;
        }
    }

    function isWPPin(pinName) {
        if (NUTOOL_PIN.g_cfg_WPPin.length > 0 && NUTOOL_PIN.g_cfg_WPPin.includes(pinName)) {
            return true;
        }
        else {
            return false;
        }
    }

    function isCCDBPin(pinName) {
        var cfg_gpiosIndex = decide_cfg_gpiosIndex(pinName, parseInt(pinName.sliceAfterX('.'), 10));
        // 目前只針對M2L31進行判斷
        if (g_chipType != 'M2L31' || isNaN(cfg_gpiosIndex)) {
            return false;
        }
        // 由於QFN33的PC.0/PC.1的CCDB不會被列到GPIO中(透過內部連在一起)，所以要特別做標示
        if (NUTOOL_PIN.g_packageNumber == 'QFN33' && (pinName == 'PC.0' || pinName == 'PC.1')) {
            return true;
        }

        // 查看GPIO中是否有CCDB字串
        var ccdb = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.filter(function (gpio) {
            return gpio.indexOf('CCDB') != -1;
        });

        if (ccdb.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }

    // decide the size of the main Canvas which depends on the surrounding of the width of all the pin descriptions
    function decideChipViewCanvasSize() {
        var i,
            j,
            k,
            max,
            maxJ,
            maxK,
            element_NUC_PinConfiguration_Canvas,
            context,
            pinName,
            pinNameZero,
            pinDescriptionLeft,
            pinDescriptionDown,
            pinDescriptionRight,
            pinDescriptionUpper,
            leftLongestDescriptionWidth = 0,
            downLongestDescriptionWidth = 0,
            rightLongestDescriptionWidth = 0,
            upperLongestDescriptionWidth = 0,
            chipAndPinDescriptionMargin,
            recordedDialogSize;

        if ($("#NUC_PinConfiguration_Canvas").length === 0) {
            $('#panel')[0].appendChild(ce("canvas", "NUC_PinConfiguration_Canvas"));
        }

        element_NUC_PinConfiguration_Canvas = $("#NUC_PinConfiguration_Canvas")[0];
        context = g_utility.getContext(element_NUC_PinConfiguration_Canvas);
        context.font = g_commonStringFont;
        // according to the max length of user-defined pin name
        chipAndPinDescriptionMargin = context.measureText("012345678901234567890123456789").width;
        if (g_bLessThanOrEqualIE8) {
            g_NUC_Pin_Interval = 0;
        }
        else {
            g_NUC_Pin_Interval = 2;
        }
        g_NUC_Pin_Padding = 20;
        if (g_partNumber_package.indexOf('SOP') !== -1) {
            for (i = 0, max = g_NUC_Pin_Total_Number / 2; i < max; i += 1) {
                // left side
                pinDescriptionLeft = "";
                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
                pinNameZero = pinName + ':0';
                for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                    if (pinNameZero === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                        for (k = NUTOOL_PIN.g_cfg_gpios[j].f.length - 1; k >= 0; k -= 1) {
                            pinDescriptionLeft += NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                            if (k !== 0) {
                                pinDescriptionLeft += '/';
                            }
                        }
                        break;
                    }
                }
                if (pinDescriptionLeft === "") {
                    pinDescriptionLeft = pinName;
                }
                g_chipPinDescriptions[i] = pinDescriptionLeft;
                // right side
                pinDescriptionRight = "";
                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i + g_NUC_Pin_Total_Number / 2];
                pinNameZero = pinName + ':0';
                for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                    if (pinNameZero === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                        for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpios[j].f.length; k < maxK; k += 1) {
                            pinDescriptionRight += NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                            if (k !== NUTOOL_PIN.g_cfg_gpios[j].f.length - 1) {
                                pinDescriptionRight += '/';
                            }
                        }
                        break;
                    }
                }
                if (pinDescriptionRight === "") {
                    pinDescriptionRight = pinName;
                }
                g_chipPinDescriptions[i + g_NUC_Pin_Total_Number / 2] = pinDescriptionRight;

                if (g_bShowPinDescriptions) {
                    if (context.measureText(pinDescriptionLeft).width > leftLongestDescriptionWidth) {
                        leftLongestDescriptionWidth = context.measureText(pinDescriptionLeft).width;
                    }

                    if (context.measureText(pinDescriptionRight).width > rightLongestDescriptionWidth) {
                        rightLongestDescriptionWidth = context.measureText(pinDescriptionRight).width;
                    }
                }
            }

            // determine MCU chip's side length
            g_NUC_Chip_Length = (g_NUC_Pin_Total_Number / 2) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) - g_NUC_Pin_Interval + 2 * g_NUC_Pin_Padding;

            if (g_bShowPinDescriptions) {
                if (leftLongestDescriptionWidth < chipAndPinDescriptionMargin) {
                    leftLongestDescriptionWidth = chipAndPinDescriptionMargin;
                }
                if (rightLongestDescriptionWidth < chipAndPinDescriptionMargin) {
                    rightLongestDescriptionWidth = chipAndPinDescriptionMargin;
                }
                if (upperLongestDescriptionWidth < chipAndPinDescriptionMargin) {
                    upperLongestDescriptionWidth = chipAndPinDescriptionMargin;
                }
                if (downLongestDescriptionWidth < chipAndPinDescriptionMargin) {
                    downLongestDescriptionWidth = chipAndPinDescriptionMargin;
                }
                g_NUC_Chip_StartPoint_X = leftLongestDescriptionWidth + g_NUC_Pin_Height + g_NUC_Chip_Length / 4;
                g_NUC_Chip_StartPoint_Y = 130 + g_NUC_Pin_Height + g_NUC_Chip_Length / 4;
            }
            else {
                g_NUC_Chip_StartPoint_X = chipAndPinDescriptionMargin + g_NUC_Pin_Height + g_NUC_Chip_Padding;
                g_NUC_Chip_StartPoint_Y = 130 + g_NUC_Pin_Height + g_NUC_Chip_Padding;
            }
        }
        else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            // initialization
            g_NUC_Pin_Interval = 14;
            g_NUC_Pin_Padding = 24;
            g_NUC_Pin_Horizontal_Number = g_NUC_Pin_Vertial_Number = Math.sqrt(g_NUC_Pin_Total_Number);
            for (i = 0, max = g_NUC_Pin_Total_Number; i < max; i += 1) {
                // inside
                pinDescriptionLeft = "";
                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
                pinNameZero = pinName + ':0';
                for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                    if (pinNameZero === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                        for (k = NUTOOL_PIN.g_cfg_gpios[j].f.length - 1; k >= 0; k -= 1) {
                            pinDescriptionLeft += NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                            if (k !== 0) {
                                pinDescriptionLeft += '/';
                            }
                        }
                        break;
                    }
                }
                if (pinDescriptionLeft === "") {
                    pinDescriptionLeft = pinName;
                }
                g_chipPinDescriptions[i] = pinDescriptionLeft;
            }

            // determine MCU chip's side length
            g_NUC_Chip_Length = Math.sqrt(g_NUC_Pin_Total_Number) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval) - g_NUC_Pin_Interval + 2 * g_NUC_Pin_Padding;

            g_NUC_Chip_StartPoint_X = chipAndPinDescriptionMargin + g_NUC_Pin_Height + g_NUC_Chip_Padding;
            g_NUC_Chip_StartPoint_Y = chipAndPinDescriptionMargin + g_NUC_Pin_Height + g_NUC_Chip_Padding;
        }
        else {
            for (i = 0, max = g_NUC_Pin_Down_Number; i < max; i += 1) {
                // down side
                pinDescriptionDown = "";
                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
                pinNameZero = pinName + ':0';
                for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                    if (pinNameZero === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                        for (k = NUTOOL_PIN.g_cfg_gpios[j].f.length - 1; k >= 0; k -= 1) {
                            pinDescriptionDown += NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                            if (k !== 0) {
                                pinDescriptionDown += '/';
                            }
                        }
                        break;
                    }
                }
                if (pinDescriptionDown === "") {
                    pinDescriptionDown = pinName;
                }
                g_chipPinDescriptions[i] = pinDescriptionDown;

                if (g_bShowPinDescriptions) {
                    if (context.measureText(pinDescriptionDown).width > downLongestDescriptionWidth) {
                        downLongestDescriptionWidth = context.measureText(pinDescriptionDown).width;
                    }
                }
            }
            for (i = 0, max = g_NUC_Pin_Right_Number; i < max; i += 1) {
                // right side
                pinDescriptionRight = "";
                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i + g_NUC_Pin_Down_Number];
                pinNameZero = pinName + ':0';
                for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                    if (pinNameZero === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                        for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpios[j].f.length; k < maxK; k += 1) {
                            pinDescriptionRight += NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                            if (k !== NUTOOL_PIN.g_cfg_gpios[j].f.length - 1) {
                                pinDescriptionRight += '/';
                            }
                        }
                        break;
                    }
                }
                if (pinDescriptionRight === "") {
                    pinDescriptionRight = pinName;
                }
                g_chipPinDescriptions[i + g_NUC_Pin_Down_Number] = pinDescriptionRight;

                if (g_bShowPinDescriptions) {
                    if (context.measureText(pinDescriptionRight).width > rightLongestDescriptionWidth) {
                        rightLongestDescriptionWidth = context.measureText(pinDescriptionRight).width;
                    }
                }
            }
            for (i = 0, max = g_NUC_Pin_Upper_Number; i < max; i += 1) {
                // upper side
                pinDescriptionUpper = "";
                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number];
                pinNameZero = pinName + ':0';
                for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                    if (pinNameZero === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                        for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpios[j].f.length; k < maxK; k += 1) {
                            pinDescriptionUpper += NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                            if (k !== NUTOOL_PIN.g_cfg_gpios[j].f.length - 1) {
                                pinDescriptionUpper += '/';
                            }
                        }
                        break;
                    }
                }
                if (pinDescriptionUpper === "") {
                    pinDescriptionUpper = pinName;
                }
                g_chipPinDescriptions[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number] = pinDescriptionUpper;

                if (g_bShowPinDescriptions) {
                    if (context.measureText(pinDescriptionUpper).width > upperLongestDescriptionWidth) {
                        upperLongestDescriptionWidth = context.measureText(pinDescriptionUpper).width;
                    }
                }
            }
            for (i = 0, max = g_NUC_Pin_Left_Number; i < max; i += 1) {
                // left side
                pinDescriptionLeft = "";
                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number];
                pinNameZero = pinName + ':0';
                for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                    if (pinNameZero === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                        for (k = NUTOOL_PIN.g_cfg_gpios[j].f.length - 1; k >= 0; k -= 1) {
                            pinDescriptionLeft += NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                            if (k !== 0) {
                                pinDescriptionLeft += '/';
                            }
                        }
                        break;
                    }
                }
                if (pinDescriptionLeft === "") {
                    pinDescriptionLeft = pinName;
                }
                g_chipPinDescriptions[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number] = pinDescriptionLeft;

                if (g_bShowPinDescriptions) {
                    if (context.measureText(pinDescriptionLeft).width > leftLongestDescriptionWidth) {
                        leftLongestDescriptionWidth = context.measureText(pinDescriptionLeft).width;
                    }
                }
            }
            // determine MCU chip's side length
            g_NUC_Chip_Length = g_NUC_Pin_SideMax_Number * (g_NUC_Pin_Width + g_NUC_Pin_Interval) - g_NUC_Pin_Interval + 2 * g_NUC_Pin_Padding;

            if (g_bShowPinDescriptions) {
                if (leftLongestDescriptionWidth < chipAndPinDescriptionMargin) {
                    leftLongestDescriptionWidth = chipAndPinDescriptionMargin;
                }
                if (rightLongestDescriptionWidth < chipAndPinDescriptionMargin) {
                    rightLongestDescriptionWidth = chipAndPinDescriptionMargin;
                }
                if (upperLongestDescriptionWidth < chipAndPinDescriptionMargin) {
                    upperLongestDescriptionWidth = chipAndPinDescriptionMargin;
                }
                if (downLongestDescriptionWidth < chipAndPinDescriptionMargin) {
                    downLongestDescriptionWidth = chipAndPinDescriptionMargin;
                }
                g_NUC_Chip_StartPoint_X = leftLongestDescriptionWidth + g_NUC_Pin_Height + g_NUC_Chip_Length / 4;
                g_NUC_Chip_StartPoint_Y = upperLongestDescriptionWidth + g_NUC_Pin_Height + g_NUC_Chip_Length / 4;
            }
            else {
                g_NUC_Chip_StartPoint_X = chipAndPinDescriptionMargin + g_NUC_Pin_Height + g_NUC_Chip_Padding;
                g_NUC_Chip_StartPoint_Y = chipAndPinDescriptionMargin + g_NUC_Pin_Height + g_NUC_Chip_Padding;
            }
        }

        // determine the canvas's size
        if (g_bShowPinDescriptions) {
            g_Canvas_Width = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length + rightLongestDescriptionWidth + g_NUC_Pin_Height + g_NUC_Chip_Length / 4;
            g_Canvas_Height = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length + downLongestDescriptionWidth + g_NUC_Pin_Height + g_NUC_Chip_Length / 4;
        }
        else {
            g_Canvas_Width = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length + g_NUC_Pin_Height + g_NUC_Chip_Padding + chipAndPinDescriptionMargin;
            g_Canvas_Height = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length + g_NUC_Pin_Height + g_NUC_Chip_Padding + chipAndPinDescriptionMargin;
        }

        // determine the dialog's size
        g_Dialog_Width = screen.availWidth;
        g_Dialog_Height = screen.availHeight;
        // determine the height of the treeview
        g_NUC_rootTree_Height = g_Dialog_Height - 10; // the redundant height derives from the select of chip type and MCU.

        // de-reference
        i = null;
        j = null;
        k = null;
        max = null;
        maxJ = null;
        maxK = null;
        element_NUC_PinConfiguration_Canvas = null;
        context = null;
        pinName = null;
        pinNameZero = null;
        pinDescriptionLeft = null;
        pinDescriptionDown = null;
        pinDescriptionRight = null;
        pinDescriptionUpper = null;
        leftLongestDescriptionWidth = null;
        downLongestDescriptionWidth = null;
        rightLongestDescriptionWidth = null;
        upperLongestDescriptionWidth = null;
        chipAndPinDescriptionMargin = null;
    }

    function getPinCurrentState() {
        var i,
            max;
        // get the default current state of all the pins
        for (i = 0, max = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex].length; i < max; i += 1) {
            g_pinCurrentModule[i] = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
            g_pinCurrentDescription[i] = "";
        }
        // de-reference
        i = null;
        max = null;
    }

    function readGPIOMFPsAndGPIOpins(readConfigFile) {
        var GPIOpins,
            userDefined,
            thePin,
            mfpRegister,
            mfpValue,
            readConfigFileBackup = readConfigFile,
            parentRegisterAccess = 'SYS->',
            tempString;

        if (readConfigFile !== "" && typeof (readConfigFile) !== 'undefined') {
            // parentRegisterAccess may differ between NTC and NTCJ
            if (NUTOOL_PIN.g_cfg_gpiosDefines.length !== 0 &&
                (NUTOOL_PIN.g_cfg_gpiosDefines[0].f.length > 1 && NUTOOL_PIN.g_cfg_gpiosDefines[0].f[1].indexOf("GPIO:GPIO_") === 0)) {
                parentRegisterAccess = 'GPIO_MD->';
            }
            // read GPIOpins
            g_pinsConfiguredByGPIO = [];
            while (readConfigFile.indexOf('GPIOpin:') !== -1) {
                GPIOpins = readConfigFile.slice(readConfigFile.indexOf('GPIOpin:'));
                thePin = GPIOpins.slice(GPIOpins.indexOf('GPIOpin:') + 8, GPIOpins.indexOf('\r\n'));
                // stash the pins configured by the GPIO.
                tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][parseInt(thePin, 10)];
                if (isGPIOPin(tempString)) {
                    if (typeof (g_pinsConfiguredByGPIO) === 'undefined') {
                        g_pinsConfiguredByGPIO[0] = parseInt(thePin, 10);
                    }
                    else {
                        g_pinsConfiguredByGPIO.push(parseInt(thePin, 10));
                    }
                }
                // move to the next GPIOpin
                readConfigFile = GPIOpins.slice(1);
            }
            // read UserDefined
            g_userDefinedPin = {};
            while (readConfigFile.indexOf('UserDefined:') !== -1) {
                userDefined = readConfigFile.slice(readConfigFile.indexOf('UserDefined:'));
                thePin = userDefined.slice(userDefined.indexOf('UserDefined:') + 12, userDefined.indexOf('\r\n'));
                // stash the user-defined description
                tempString = thePin.sliceAfterX('=>');
                thePin = thePin.slicePriorToX('=>');
                g_userDefinedPin[thePin] = tempString;
                // move to the next UserDefined
                readConfigFile = userDefined.slice(1);
            }
            // read GPIO MFP registers
            readConfigFile = readConfigFileBackup;
            while (readConfigFile.indexOf(parentRegisterAccess) !== -1) {
                mfpRegister = readConfigFile.sliceAfterX(parentRegisterAccess);
                //if (mfpRegister.indexOf('GPIO') !== 0) { // to filter out the case of GPIOpin:
                mfpValue = mfpRegister.slice(mfpRegister.indexOf(' = ') + 3, mfpRegister.indexOf('\r\n'));
                if (!isNaN(parseInt(mfpValue.slice(2), 16))) {
                    // mfpValue should be in the format of decimal.
                    g_read_gpio_MFPs[mfpRegister.slicePriorToX(' = ')] = parseInt(mfpValue.slice(2), 16);
                }
                else {
                    showAlertDialog("寄存器的值" + mfpRegister.slicePriorToX('\r') + "存在一些错误，请更正它并重载配置档。",
                        "暫存器的值" + mfpRegister.slicePriorToX('\r') + "存在一些錯誤，請更正它並重載配置檔。",
                        "The register value of " + mfpRegister.slicePriorToX('\r') + " in the config file is incorrect.Please correct it and re-load the config file again.");
                }
                //}
                // move to the next MFP register
                readConfigFile = mfpRegister.slice(1);
            }
            // read ALT MFP registers
            readConfigFile = readConfigFileBackup;
            while (readConfigFile.indexOf('ALT_MFP') !== -1) {
                mfpRegister = readConfigFile.slice(readConfigFile.indexOf('ALT_MFP'));
                mfpValue = mfpRegister.slice(mfpRegister.indexOf(' = ') + 3, mfpRegister.indexOf('\r\n'));
                if (!isNaN(parseInt(mfpValue.slice(2), 16))) {
                    // mfpValue should be in the format of decimal.
                    g_read_gpio_MFPs[mfpRegister.slicePriorToX(' = ')] = parseInt(mfpValue.slice(2), 16);
                }
                else {
                    showAlertDialog("寄存器的值" + mfpRegister.slicePriorToX('\r') + "存在一些错误，请更正它并重载配置档。",
                        "暫存器的值" + mfpRegister.slicePriorToX('\r') + "存在一些錯誤，請更正它並重載配置檔。",
                        "The register value of " + mfpRegister.slicePriorToX('\r') + " in the config file is incorrect.Please correct it and re-load the config file again.");
                }
                // move to the next MFP register
                readConfigFile = mfpRegister.slice(1);
            }
        }
        // de-reference
        GPIOpins = null;
        thePin = null;
        mfpRegister = null;
        mfpValue = null;
        readConfigFileBackup = null;
        tempString = null;
    }

    /////////////////////////////////////////// Differences between M0 and M4/////////////////////////////////////////////////////////////
    function goToResetValueState() {
        if (g_chipType === 'NUC400' && typeof (g_gpio_MFPs.GPG_MFPH) !== 'undefined') {
            checkNodesByMFPregister('GPG_MFPH:0x00001100');
        }
        else if ((g_chipType === 'M451HD' || g_chipType === 'M451LD' || g_chipType === 'M4521') && typeof (g_gpio_MFPs.GPF_MFPL) !== 'undefined') {
            checkNodesByMFPregister('GPF_MFPL:0x01100000');
        }
        else if ((g_chipType.indexOf('M47') === 0 || g_chipType === 'M433' || g_chipType === 'M480MD' || g_chipType === 'M480LD' || g_chipType === 'AX58200' ||
            g_chipType === 'M251' || g_chipType === 'M261' || g_chipType === 'NDA102' ||
            g_chipType === 'M2351' || g_chipType.indexOf('M029') === 0 || g_chipType.indexOf('M030') === 0 || g_chipType.indexOf('M031') === 0 || g_chipType.indexOf('M2003') === 0) && typeof (g_gpio_MFPs.GPF_MFPL) !== 'undefined') {
            checkNodesByMFPregister('GPF_MFPL:0x000000EE');
        }
        else if ((g_chipType === 'NUC121AE') && typeof (g_gpio_MFPs.GPF_MFPL) !== 'undefined') {
            checkNodesByMFPregister('GPF_MFPL:0x00110011');
        }
        else if ((g_chipType === 'NANO100AN' || g_chipType === 'NANO100BN') && typeof (g_gpio_MFPs.PF_L_MFP) !== 'undefined') {
            checkNodesByMFPregister('PF_L_MFP:0x00007777');
        }
        else if (g_chipType === 'NANO112' && typeof (g_gpio_MFPs.PF_L_MFP) !== 'undefined') {
            checkNodesByMFPregister('PF_L_MFP:0x00FFFFFF');
        }
        else if (g_chipType === 'NUC123AE' && typeof (g_gpio_MFPs.GPF_MFPL) !== 'undefined') {
            checkNodesByMFPregister('GPF_MFPL:0x00001100');
        }
        else if (g_chipType === 'NANO103' && typeof (g_gpio_MFPs.GPF_MFPL) !== 'undefined') {
            checkNodesByMFPregister('GPF_MFPL:0x77777777');
        }
        else if ((g_chipType === 'M051AN' || g_chipType === 'M051BN' || g_chipType === 'M051DN_DE' || g_chipType === 'M058S' ||
            g_chipType === 'MINI51AN' || g_chipType === 'MINI51DE' || g_chipType === 'MINI55' || g_chipType === 'MINI58' ||
            g_chipType === 'NUC029AE' || g_chipType === 'NUC029TAE' || g_chipType === 'NUC029AN' ||
            g_chipType === 'NM1200') &&
            typeof (g_gpio_MFPs.P4_MFP) !== 'undefined') {
            checkNodesByMFPregister('P4_MFP:0x000000C0');
        }
        else if (g_chipType.indexOf('KM1M4BF0') === 0 && typeof (g_gpio_MFPs.IOPDMD) !== 'undefined') {
            checkNodesByMFPregister('IOPDMD:0x00101000');
        }
        else {
            $("#moduleTree").jstree('check_node', $('#ICE_Root'));
        }
    }

    function decideNewChipType(newPartNumber_package) {
        var newChipType;

        // newPartNumber_package obtained from OpenOCD does not contain the package information
        if (newPartNumber_package.indexOf('(') === -1) {
            newPartNumber_package = newPartNumber_package + '(';
        }

        // decide chip type from part number name
        // the sequence is sensitive. do not disorder them.
        if (newPartNumber_package.indexOf('NDA102') === 0) {
            newChipType = 'NDA102';
        }
        else if (newPartNumber_package.indexOf('M05641') === 0) {
            newChipType = 'M05641';
        }
        else if (newPartNumber_package.indexOf('M0564') === 0) {
            newChipType = 'M0564';
        }
        else if (newPartNumber_package.indexOf('M4521') === 0) {
            newChipType = 'M4521';
        }
        else if (newPartNumber_package.indexOf('M433') === 0) {
            newChipType = 'M433';
        }
        else if (newPartNumber_package.indexOf('M45') === 0 || newPartNumber_package.indexOf('M4TK') === 0) {
            newChipType = newPartNumber_package;
            newChipType = newChipType.slicePriorToX('(');
            newChipType = newChipType.slice(newChipType.length - 4, newChipType.length - 3);
            if (newChipType === 'D' || newChipType === 'C') {
                newChipType = 'M451LD';
            }
            else {
                newChipType = 'M451HD';
            }
        }
        else if (newPartNumber_package.indexOf('M466') === 0) {
            newChipType = 'M466';
        }
        else if (newPartNumber_package.indexOf('M467') === 0) {
            newChipType = 'M460HD';
        }
        else if (newPartNumber_package.indexOf('M46') === 0) {
            newChipType = 'M460LD';
        }
        else if (newPartNumber_package.indexOf('M471') === 0) {
            newChipType = 'M471';
        }
        else if (newPartNumber_package.indexOf('M479') === 0) {
            newChipType = 'M479';
        }
        else if (newPartNumber_package.indexOf('M48') === 0) {
            if (newPartNumber_package.indexOf('8AE') !== -1 || newPartNumber_package.indexOf('CAE') !== -1) {
                newChipType = 'M480LD';
            }
            else {
                newChipType = 'M480MD';
            }
        }
        else if (newPartNumber_package.indexOf('KM1M7AF') === 0) {
            newChipType = 'KM1M7AF';
        }
        else if (newPartNumber_package.indexOf('KM1M7BF') === 0) {
            newChipType = 'KM1M7BF';
        }
        else if (newPartNumber_package.indexOf('KM1M7CF') === 0) {
            newChipType = 'KM1M7CF';
        }
        else if (newPartNumber_package.indexOf('KM1M4BF02') === 0 ||
            newPartNumber_package.indexOf('KM1M4BF03') === 0 ||
            newPartNumber_package.indexOf('KM1M4BF04') === 0) {
            newChipType = 'KM1M4BF0';
        }
        else if (newPartNumber_package.indexOf('KM1M4BF05') === 0) {
            newChipType = 'KM1M4BF05';
        }
        else if (newPartNumber_package.indexOf('KM1M4BF52') === 0 ||
            newPartNumber_package.indexOf('KM1M4BF53') === 0 ||
            newPartNumber_package.indexOf('KM1M4BF54') === 0) {
            newChipType = 'KM1M4BF5';
        }
        else if (newPartNumber_package.indexOf('M253') === 0) {
            newChipType = 'M253';
        }
        else if (newPartNumber_package.indexOf('M251') === 0 || newPartNumber_package.indexOf('M252') === 0) {
            newChipType = 'M251';
        }
        else if (newPartNumber_package.indexOf('M256MD2AE') === 0 ||
            newPartNumber_package.indexOf('M254SD2AE') === 0 ||
            newPartNumber_package.indexOf('M254MD2AE') === 0 ||
            newPartNumber_package.indexOf('M256SD2AE') === 0) {
            newChipType = 'M256D';
        }
        else if (newPartNumber_package.indexOf('M258SG6AE') === 0 ||
            newPartNumber_package.indexOf('M256QG6AE') === 0 ||
            newPartNumber_package.indexOf('M254KG6AE') === 0 ||
            newPartNumber_package.indexOf('M254SG6AE') === 0 ||
            newPartNumber_package.indexOf('M258QG6AE') === 0 ||
            newPartNumber_package.indexOf('M258KG6AE') === 0) {
            newChipType = 'M258G';
        }
        else if (newPartNumber_package.indexOf('M254') === 0 ||
            newPartNumber_package.indexOf('M256') === 0 ||
            newPartNumber_package.indexOf('M258') === 0) {
            newChipType = 'M258';
        }
        else if (newPartNumber_package.indexOf('M26') === 0) {
            newChipType = 'M261';
        }
        else if (newPartNumber_package.indexOf('M2354') === 0) {
            newChipType = 'M2354';
        }
        else if (newPartNumber_package.indexOf('M2351') === 0) {
            newChipType = 'M2351';
        }
        else if (newPartNumber_package.indexOf('M0A2') === 0) {
            newChipType = 'M0A21';
        }
        else if (newPartNumber_package.indexOf('M2L31') === 0) {
            newChipType = 'M2L31';
        }
        else if (newPartNumber_package.indexOf('M2003') === 0) {
            newChipType = 'M2003C';
        }
        else if (newPartNumber_package.indexOf('M029G') === 0) {
            newChipType = 'M029G';
        }
        else if (newPartNumber_package.indexOf('M030G') === 0) {
            newChipType = 'M030G';
        }
        else if (newPartNumber_package.indexOf('M031GG') === 0 ||
            newPartNumber_package.indexOf('M031GT') === 0) {
            newChipType = 'M030G_31G';
        }
        else if (newPartNumber_package.indexOf('M091') === 0) {
            newChipType = 'M091';
        }
        else if (newPartNumber_package.indexOf('M030FD2AE') === 0 ||
            newPartNumber_package.indexOf('M030TD2AE') === 0 ||
            newPartNumber_package.indexOf('M030LD2AE') === 0 ||
            newPartNumber_package.indexOf('M032FC1AE') === 0 ||
            newPartNumber_package.indexOf('M032EC1AE') === 0 ||
            newPartNumber_package.indexOf('M032TC1AE') === 0 ||
            newPartNumber_package.indexOf('M032TD2AE') === 0 ||
            newPartNumber_package.indexOf('M032LC2AE') === 0 ||
            newPartNumber_package.indexOf('M032LD2AE') === 0) {
            newChipType = 'M031KM';
        }
        else if (newPartNumber_package.indexOf('M031BT') === 0) {
            newChipType = 'M031BT';
        }
        else if (newPartNumber_package.indexOf('M032BTAG8AN') === 0 ||
            ((newPartNumber_package.indexOf('M031') === 0 || newPartNumber_package.indexOf('M032') === 0) &&
                newPartNumber_package.charAt(5) === 'G')) {
            newChipType = 'M031G';
        }
        else if (newPartNumber_package.indexOf('M032BTAIAAN') === 0 ||
            ((newPartNumber_package.indexOf('M031') === 0 || newPartNumber_package.indexOf('M032') === 0) &&
                newPartNumber_package.charAt(5) === 'I')) {
            newChipType = 'M031I';
        }
        else if (newPartNumber_package.indexOf('M031') === 0 || newPartNumber_package.indexOf('M032') === 0) {
            newChipType = 'M031';
        }
        else if (newPartNumber_package.indexOf('M0518') === 0) {
            newChipType = 'M0518';
        }
        else if (newPartNumber_package.indexOf('M071M') === 0) {
            newChipType = 'M071M';
        }
        else if (newPartNumber_package.indexOf('M071Q') === 0 || newPartNumber_package.indexOf('M071V') === 0) {
            newChipType = 'M071QV';
        }
        else if (newPartNumber_package.indexOf('M071R1') === 0 || newPartNumber_package.indexOf('M071S') === 0) {
            newChipType = 'M071R1S';
        }
        else if (newPartNumber_package.indexOf('ML56') === 0 || newPartNumber_package.indexOf('ML54') === 0) {
            newChipType = 'ML56';
        }
        else if (newPartNumber_package.indexOf('ML51') === 0) {
            if (newPartNumber_package.charAt(5) === 'D') {
                newChipType = 'ML5156';
            }
            else {
                newChipType = 'ML51';
            }
        }
        else if (newPartNumber_package.indexOf('MS51') === 0 && (newPartNumber_package.indexOf('C0AE(') !== -1 ||
            newPartNumber_package.indexOf('C0BE(') !== -1 || newPartNumber_package.indexOf('B0AE(') !== -1)) {
            newChipType = 'MS51_32K';
        }
        else if (newPartNumber_package.indexOf('MS51') === 0 && (newPartNumber_package.indexOf('B9AE(') !== -1 ||
            newPartNumber_package.indexOf('B9BE(') !== -1)) {
            newChipType = 'MS51_16K';
        }
        else if (newPartNumber_package.indexOf('MUG51') === 0) {
            newChipType = 'MUG51';
        }
        else if (newPartNumber_package.indexOf('MS51IA9AE') === 0) {
            newChipType = 'MS51_8KDB';
        }
        else if (newPartNumber_package.indexOf('MS51') === 0 && newPartNumber_package.indexOf('A9AE(') !== -1) {
            newChipType = 'MS51_8K';
        }
        else if (newPartNumber_package.indexOf('MG51') === 0) {
            newChipType = 'MG51';
        }
        else if (newPartNumber_package.indexOf('N76S003') === 0) {
            newChipType = 'N76S003';
        }
        else if (newPartNumber_package.indexOf('N76E003') === 0) {
            newChipType = 'N76E003';
        }
        else if (newPartNumber_package.indexOf('M0519') === 0) {
            newChipType = 'M0519';
        }
        else if (newPartNumber_package.indexOf('M0515LDE') === 0) {
            newChipType = 'M0515LDE';
        }
        else if (newPartNumber_package.indexOf('M05') === 0 && (newPartNumber_package.indexOf('DN(') !== -1 ||
            newPartNumber_package.indexOf('DE(') !== -1)) {
            newChipType = 'M051DN_DE';
        }
        else if (newPartNumber_package.indexOf('MHC54ZDN') === 0 || newPartNumber_package.indexOf('PL054TDN') === 0) {
            newChipType = 'M051DN_DE';
        }
        else if (newPartNumber_package.indexOf('M05') === 0 && newPartNumber_package.indexOf('BN(') !== -1) {
            newChipType = 'M051BN';
        }
        else if (newPartNumber_package.indexOf('E32') === 0) {
            newChipType = 'M051BN';
        }
        else if (newPartNumber_package.indexOf('M058S') === 0) {
            newChipType = 'M058S';
        }
        else if (newPartNumber_package.indexOf('M05') === 0 && newPartNumber_package.indexOf('AN(') !== -1) {
            newChipType = 'M051AN';
        }
        else if (newPartNumber_package.indexOf('MINI57') === 0) {
            newChipType = 'MINI57';
        }
        else if (newPartNumber_package.indexOf('MINI58') === 0) {
            newChipType = 'MINI58';
        }
        else if (newPartNumber_package.indexOf('MINI5') === 0 && newPartNumber_package.indexOf('AN(') !== -1) {
            newChipType = 'MINI51AN';
        }
        else if ((newPartNumber_package.indexOf('MINI5') === 0 && newPartNumber_package.indexOf('AE(') !== -1) ||
            newPartNumber_package.indexOf('MINI54XFHC') === 0 ||
            newPartNumber_package.indexOf('MINI55') === 0 ||
            newPartNumber_package.indexOf('NVS06AL') === 0) {
            newChipType = 'MINI55';
        }
        else if ((newPartNumber_package.indexOf('MINI5') === 0 && newPartNumber_package.indexOf('DE(') !== -1) ||
            newPartNumber_package.indexOf('MINI54FHC') === 0) {
            newChipType = 'MINI51DE';
        }
        else if (newPartNumber_package.indexOf('NUC2201') === 0) {
            newChipType = 'NUC2201';
        }
        else if (newPartNumber_package.indexOf('NUC2') === 0 && newPartNumber_package.indexOf('AN(') !== -1) {
            newChipType = 'NUC200AN';
        }
        else if (newPartNumber_package.indexOf('NUC2') === 0 && newPartNumber_package.indexOf('AE(') !== -1) {
            newChipType = 'NUC200AE';
        }
        else if (newPartNumber_package.indexOf('NUC029MDE') === 0) {
            newChipType = 'NUC029MDE';
        }
        else if (newPartNumber_package.indexOf('NUC029KGE') === 0) {
            newChipType = 'NUC029KGE';
        }
        else if (newPartNumber_package.indexOf('NUC029LDE') === 0 || newPartNumber_package.indexOf('NUC029SDE') === 0) {
            newChipType = 'NUC029xDE';
        }
        else if (newPartNumber_package.indexOf('NUC029LGE') === 0 || newPartNumber_package.indexOf('NUC029SGE') === 0) {
            newChipType = 'NUC029xGE';
        }
        else if (newPartNumber_package.indexOf('NUC029LEE') === 0 || newPartNumber_package.indexOf('NUC029SEE') === 0) {
            newChipType = 'NUC029xEE';
        }
        else if (newPartNumber_package.indexOf('NUC029TAE') === 0) {
            newChipType = 'NUC029TAE';
        }
        else if (newPartNumber_package.indexOf('NUC029') === 0 && newPartNumber_package.indexOf('AE(') !== -1) {
            newChipType = 'NUC029AE';
        }
        else if (newPartNumber_package.indexOf('NUC029') === 0 && newPartNumber_package.indexOf('AN(') !== -1) {
            newChipType = 'NUC029AN';
        }
        else if ((newPartNumber_package.indexOf('NANO120') === 0 || newPartNumber_package.indexOf('NANO100') === 0) &&
            newPartNumber_package.indexOf('AN(') !== -1) {
            newChipType = 'NANO100AN';
        }
        else if ((newPartNumber_package.indexOf('NANO100') === 0 || newPartNumber_package.indexOf('NANO110') === 0 || newPartNumber_package.indexOf('NANO120') === 0 || newPartNumber_package.indexOf('NANO130') === 0) &&
            newPartNumber_package.indexOf('BN(') !== -1) {
            newChipType = 'NANO100BN';
        }
        else if (newPartNumber_package.indexOf('NANO103') === 0 && newPartNumber_package.indexOf('AE(') !== -1) {
            newChipType = 'NANO103';
        }
        else if (newPartNumber_package.indexOf('NANO1') === 0 && newPartNumber_package.indexOf('AN(') !== -1) {
            newChipType = 'NANO112';
        }
        else if (newPartNumber_package.indexOf('NM112') === 0) {
            newChipType = 'NM1120';
        }
        else if (newPartNumber_package.indexOf('NM11') === 0 || newPartNumber_package.indexOf('NM12') === 0) {
            newChipType = 'NM1200';
        }
        else if (newPartNumber_package.indexOf('NM15') === 0) {
            newChipType = 'NM1500';
        }
        else if (newPartNumber_package.indexOf('NUC121') === 0 || newPartNumber_package.indexOf('NUC125') === 0) {
            newChipType = 'NUC121AE';
        }
        else if (newPartNumber_package.indexOf('NUC122') === 0 && newPartNumber_package.indexOf('AN(') !== -1) {
            newChipType = 'NUC122AN';
        }
        else if (newPartNumber_package.indexOf('NUC123') === 0 && (newPartNumber_package.indexOf('AN0(') !== -1 || newPartNumber_package.indexOf('AN1(') !== -1)) {
            newChipType = 'NUC123AN';
        }
        else if (newPartNumber_package.indexOf('NUC123') === 0 && (newPartNumber_package.indexOf('AE0(') !== -1 || newPartNumber_package.indexOf('AE1(') !== -1)) {
            newChipType = 'NUC123AE';
        }
        else if (newPartNumber_package.indexOf('NUC1') === 0 && (newPartNumber_package.indexOf('AN(') !== -1 || newPartNumber_package.indexOf('BN(') !== -1)) {
            newChipType = 'NUC100AN_BN';
        }
        else if (newPartNumber_package.indexOf('NUC1') === 0 && newPartNumber_package.indexOf('CN(') !== -1) {
            newChipType = 'NUC100CN';
        }
        else if (newPartNumber_package.indexOf('NUC1') === 0 && newPartNumber_package.indexOf('DN(') !== -1) {
            newChipType = 'NUC100DN';
        }
        else if (newPartNumber_package.indexOf('NUC1311') === 0) {
            newChipType = 'NUC1311';
        }
        else if (newPartNumber_package.indexOf('NUC13') === 0) {
            newChipType = 'NUC131';
        }
        else if (newPartNumber_package.indexOf('NUC1261') === 0) {
            newChipType = 'NUC1261';
        }
        else if (newPartNumber_package.indexOf('NUC1262') === 0) {
            newChipType = 'NUC1262';
        }
        else if (newPartNumber_package.indexOf('NUC1263') === 0) {
            newChipType = 'NUC1263';
        }
        else if (newPartNumber_package.indexOf('NUC126') === 0) {
            newChipType = 'NUC126';
        }
        else if (newPartNumber_package.indexOf('NUC505') === 0) {
            newChipType = 'NUC505';
        }
        else if (newPartNumber_package.indexOf('I91') === 0) {
            newChipType = 'ISD9100';
        }
        else if (newPartNumber_package.indexOf('I93') === 0) {
            newChipType = 'ISD9300';
        }
        else if (newPartNumber_package.indexOf('AX58200') === 0) {
            newChipType = 'AX58200';
        }
        else if (newPartNumber_package.indexOf('MA35D0') === 0) {
            newChipType = 'MA35D0';
        }
        else if (newPartNumber_package.indexOf('MA35D1') === 0) {
            newChipType = 'MA35D1';
        }
        else if (newPartNumber_package.indexOf('MA35H0') === 0) {
            newChipType = 'MA35H0';
        }
        else if (newPartNumber_package.indexOf('M55M1') === 0 || newPartNumber_package.indexOf('M5551') === 0) {
            newChipType = 'M55M1';
        }
        else if (newPartNumber_package.indexOf('N9H30K63IIM') === 0) {
            newChipType = 'N9H30K63IIM';
        }
        else if (newPartNumber_package.indexOf('N9H30') === 0) {
            newChipType = 'N9H30';
        }
        else if (newPartNumber_package.indexOf('NUC97') === 0) {
            newChipType = 'NUC970';
        }
        else if (newPartNumber_package.indexOf('NUC98') === 0) {
            newChipType = 'NUC980';
        }
        else if (newPartNumber_package.indexOf('M2A23') === 0) {
            newChipType = 'M2A23';
        }
        else {
            newChipType = 'NUC400';
        }
        return newChipType;
    }

    function readAndVerifyConfigFileFromClientMachine() {
        var i,
            max,
            bCorrectpartNumber_package = false,
            newReadConfigFile,
            saved_newReadConfigFile,
            newPartNumber_package,
            newChipType,
            oldfilename = "",
            newfilename = "",
            bMismatchedMissing = false,
            tempGPIOs = [],
            realGPIOs = [],
            pinName,
            mfpValue,
            saved_g_partNumber_package;

        // Removing developing chip types when ready for being released
        if (!g_bDevelopingTool) {
            for (i = 0, max = g_cfg_chipSeries.length; i < max; i += 1) {
                if (g_cfg_chipSeriesDeveloping.indexOf(g_cfg_chipSeries[i]) !== -1) {
                    g_cfg_chipSeries.splice(i, 1);
                    i--;    // Fix bug: 沒有把i扣回來的話，會跳過下一個型號，可能導致沒有被濾掉
                }
            }
        }

        g_readConfigFile = "";

        // read the saved config file
        saved_newReadConfigFile = newReadConfigFile = NUTOOL_PIN.g_readConfigFileContentText;
        // the read config file is empty or undefined. Restore to the default case.
        if (!newReadConfigFile || (/^\s*$/.test(newReadConfigFile))) {
            // default setting
            g_readConfigFile = newReadConfigFile;

            // for the case the config.ncfg is not existent.
            if (typeof NUTOOL_PER === 'undefined') {
                if (typeof NUTOOL_PIN.g_chipType_default === 'undefined' || NUTOOL_PIN.g_chipType_default === '' ||
                    typeof NUTOOL_PIN.g_partNumber_package_default === 'undefined' || NUTOOL_PIN.g_partNumber_package_default === '') {
                    // since the default case is NUC400
                    if (typeof (g_chipType) !== 'undefined' && g_chipType !== 'NUC400') {
                        oldfilename = 'NUC_' + g_chipType + '_Content.js';
                        newfilename = 'NUC_NUC400_Content.js';

                        replacejscssfile(oldfilename, newfilename, 'js');
                    }
                    g_partNumber_package = "NUC472VI8AE(LQFP100)";
                    g_chipType = 'NUC400';
                }
                else {
                    if (typeof (g_chipType) === 'undefined') {
                        oldfilename = 'NUC_NUC400_Content.js';
                        newfilename = 'NUC_' + NUTOOL_PIN.g_chipType_default + '_Content.js';

                        replacejscssfile(oldfilename, newfilename, 'js');
                    }
                    else if (typeof (g_chipType) !== 'undefined' && g_chipType !== NUTOOL_PIN.g_chipType_default) {
                        oldfilename = 'NUC_' + g_chipType + '_Content.js';
                        newfilename = 'NUC_' + NUTOOL_PIN.g_chipType_default + '_Content.js';

                        replacejscssfile(oldfilename, newfilename, 'js');
                    }
                    g_partNumber_package = NUTOOL_PIN.g_partNumber_package_default;
                    g_chipType = NUTOOL_PIN.g_chipType_default;
                }
            }
            else {
                // since the default case is M251
                if (typeof (g_chipType) !== 'undefined' && g_chipType !== 'M251') {
                    oldfilename = 'NUC_' + g_chipType + '_Content.js';
                    newfilename = 'NUC_M251_Content.js';

                    replacejscssfile(oldfilename, newfilename, 'js');
                }
                g_partNumber_package = "M251EB2AE(TSSOP28)";
                g_chipType = 'M251';
            }
            return bCorrectpartNumber_package;
        }
        else {
            // find the '\r' pertaining to 'MCU:'
            while (newReadConfigFile.indexOf('\r') !== -1 && (newReadConfigFile.indexOf('\r') < newReadConfigFile.indexOf('MCU:'))) {
                newReadConfigFile = newReadConfigFile.sliceAfterX('\r');
            }

            newPartNumber_package = newReadConfigFile.sliceBetweenXandX('MCU:', '\r');
        }
        newPartNumber_package = newPartNumber_package.trim();
        newChipType = decideNewChipType(newPartNumber_package);
        // check if newChipType is correct
        if ($.inArray(chipTypeToChipSeries(newChipType), g_cfg_chipSeries) === -1) {
            showAlertDialog("从配置档读出的芯片型号 " + newChipType + " 不正确。",
                "從配置檔讀出的晶片型號 " + newChipType + " 不正確。",
                "The chip type of " + newChipType + " read from the config file is incorrect.");

            bCorrectpartNumber_package = null;
            newReadConfigFile = null;
            newPartNumber_package = null;
            newChipType = null;

            return bCorrectpartNumber_package;
        }

        // reload the corresponding chip content
        if (typeof (g_chipType) !== 'undefined') {
            oldfilename = 'NUC_' + g_chipType + '_Content.js';
            newfilename = 'NUC_' + newChipType + '_Content.js';

            replacejscssfile(oldfilename, newfilename, 'js');
        }
        else if (typeof (g_chipType) === 'undefined') {
            if (typeof NUTOOL_PER === 'undefined') {
                if (typeof NUTOOL_PIN.g_chipType_default === 'undefined' || NUTOOL_PIN.g_chipType_default === '') {
                    oldfilename = 'NUC_NUC400_Content.js';
                }
                else {
                    oldfilename = 'NUC_' + NUTOOL_PIN.g_chipType_default + '_Content.js';
                }
            }
            else {
                oldfilename = 'NUC_M251_Content.js';
            }
            newfilename = 'NUC_' + newChipType + '_Content.js';

            replacejscssfile(oldfilename, newfilename, 'js');
        }

        // check if the read g_partNumber_package is correct
        for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
            if (NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')' === newPartNumber_package) {
                bCorrectpartNumber_package = true;
                break;
            }
        }

        // check if there is a mismatch for the read g_partNumber_package and MFP registers
        if (bCorrectpartNumber_package) {
            if (typeof (g_partNumber_package) !== 'undefined') {
                saved_g_partNumber_package = g_partNumber_package;
            }
            else {
                // for the case the config.ncfg is incorrect. Restore to the default case.
                if (typeof NUTOOL_PER === 'undefined') {
                    if (typeof NUTOOL_PIN.g_chipType_default === 'undefined' || NUTOOL_PIN.g_chipType_default === '' ||
                        typeof NUTOOL_PIN.g_partNumber_package_default === 'undefined' || NUTOOL_PIN.g_partNumber_package_default === '') {
                        saved_g_partNumber_package = "NUC472VI8AE(LQFP100)";
                        g_chipType = 'NUC400';
                    }
                    else {
                        saved_g_partNumber_package = NUTOOL_PIN.g_partNumber_package_default;
                        g_chipType = NUTOOL_PIN.g_chipType_default;
                    }
                }
                else {
                    saved_g_partNumber_package = "M251EB2AE(TSSOP28)";
                    g_chipType = 'M251';
                }
            }

            g_partNumber_package = newPartNumber_package;
            NUTOOL_PIN.decidepackageNumber();

            for (i = 0, max = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex].length; i < max; i += 1) {
                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
                if (isGPIOPin(pinName)) {
                    tempGPIOs.push(pinName);
                }
            }

            // for bMismatchedMissing
            if (newChipType === "M451HD" || newChipType === "M451LD" || newChipType === "M4521" || newChipType === "NUC121AE" ||
                newChipType === "M0564" || newChipType === "M05641" ||
                newChipType.indexOf('NUC126') === 0 || newChipType === "M071QV" || newChipType === "NUC029xGE" || newChipType === "NUC029KGE" ||
                newChipType === "NUC400" || newChipType.indexOf("M47") === 0 ||
                newChipType === "M433" || newChipType === "M480MD" || newChipType === "M480LD" || newChipType === "AX58200" ||
                newChipType.indexOf('M25') === 0 || newChipType === "NDA102" ||
                newChipType === "M261" || newChipType.indexOf("M235") === 0 ||
                newChipType.indexOf("M029") === 0 || newChipType.indexOf("M030") === 0 || newChipType.indexOf("M031") === 0 || newChipType.indexOf("M091") === 0 ||
                newChipType === "NANO103" || newChipType === "NUC505" || newChipType === "NUC123AE" ||
                newChipType === "MA35D0" || newChipType === "MA35D1" || newChipType === "MA35H0" || newChipType.indexOf("M2003") === 0 || newChipType.indexOf("N9H30") === 0 || newChipType.indexOf("NUC97") === 0 || newChipType.indexOf("NUC98") === 0 || newChipType.indexOf("M2A23") === 0) {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    if (parseInt(tempGPIOs[i].sliceAfterX('.'), 10) < 8) {
                        pinName = 'G' + tempGPIOs[i].slicePriorToX('.') + '_MFPL';
                    }
                    else {
                        pinName = 'G' + tempGPIOs[i].slicePriorToX('.') + '_MFPH';
                    }

                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
            }
            else if (newChipType === "M0A21" || newChipType.indexOf("M46") === 0 || newChipType.indexOf("M2L31") === 0 || newChipType.indexOf("M55M1") === 0) {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    pinName = 'G' + tempGPIOs[i].slicePriorToX('.') + '_MFP' + Math.floor(parseInt(tempGPIOs[i].sliceAfterX('.'), 10) / 4);
                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
            }
            else if (newChipType === "NANO100AN" || newChipType === "NANO100BN" || newChipType === "NANO112") {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    if (parseInt(tempGPIOs[i].sliceAfterX('.'), 10) < 8) {
                        pinName = tempGPIOs[i].slicePriorToX('.') + '_L_MFP';
                    }
                    else {
                        pinName = tempGPIOs[i].slicePriorToX('.') + '_H_MFP';
                    }

                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
            }
            else if (newChipType === "NM1500" || newChipType === "M0519" ||
                newChipType === "M051DN_DE" || newChipType === "M051BN" || newChipType === "M051AN" ||
                newChipType === "M058S" ||
                newChipType === "MINI51AN" || newChipType === "MINI51DE" || newChipType === "MINI55" || newChipType === "MINI58" ||
                newChipType === "NUC029AE" || newChipType === "NUC029TAE" || newChipType === "NUC029AN" ||
                newChipType === "NM1200") {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    pinName = tempGPIOs[i].slicePriorToX('.') + '_MFP';

                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
            }
            else if (newChipType.indexOf("ML5") === 0 || newChipType.indexOf("MS51") === 0 || newChipType.indexOf("MG51") === 0 || newChipType.indexOf("MUG51") === 0 || newChipType.indexOf("N76S003") === 0 || newChipType.indexOf("N76E003") === 0) {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    pinName = tempGPIOs[i].slicePriorToX('.') + 'MF76543210';

                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
            }
            else if (newChipType.indexOf("KM1M7AF") === 0 || newChipType.indexOf("KM1M7BF") === 0) {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    pinName = 'IO' + tempGPIOs[i].slicePriorToX('.') + 'MD';

                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
            }
            else if (newChipType.indexOf("KM1M4BF") === 0) {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    pinName = 'IO' + tempGPIOs[i].slicePriorToX('.') + 'MD';

                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
                if (g_chipType.indexOf("KM1M4BF5") === 0) {
                    realGPIOs.push('SELSWD');
                }
            }
            else if (newChipType.indexOf("KM1M7CF") === 0) {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    pinName = 'IO' + tempGPIOs[i].slicePriorToX('.') + 'MD';

                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
                for (i = 0; i < 14; i += 1) {
                    if (i < 10) {
                        realGPIOs.push('FPSA0' + i + '_SEL');
                    } else {
                        realGPIOs.push('FPSA' + i + '_SEL');
                    }
                }
                for (i = 0; i < 12; i += 1) {
                    if (i < 10) {
                        realGPIOs.push('FPSB0' + i + '_SEL');
                    } else {
                        realGPIOs.push('FPSB' + i + '_SEL');
                    }
                }
            }
            else {
                for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                    pinName = 'G' + tempGPIOs[i].slicePriorToX('.') + '_MFP';

                    if ($.inArray(pinName, realGPIOs) === -1) {
                        realGPIOs.push(pinName);
                    }
                }
            }

            // add Alternative registers if they exist
            tempGPIOs = ['ALT_MFP', 'ALT_MFP1', 'ALT_MFP2', 'ALT_MFP3', 'ALT_MFP4', 'ALT_MFP5', 'ALT_MFP6', 'ALT_MFP7', 'ALT_MFP8', 'ALT_MFP9'];
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                pinName = tempGPIOs[i];
                if (typeof NUTOOL_PIN.g_cfg_regDescriptions[pinName] !== 'undefined' &&
                    $.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }

            if (newChipType === "MINI55" || newChipType === "NM1200") {
                realGPIOs.push('ADCHER');
                realGPIOs.push('ADCR');
                realGPIOs.push('PIN_SEL');
            }

            // for bMismatchedMissing
            for (i = 0, max = realGPIOs.length; i < max; i += 1) {
                if (newReadConfigFile.indexOf(realGPIOs[i]) === -1) {
                    pinName = realGPIOs[i];
                    bMismatchedMissing = true;
                    g_partNumber_package = saved_g_partNumber_package;
                    break;
                }
            }
        }

        if (!bCorrectpartNumber_package) {
            showAlertDialog("从配置档读出的封装名称 " + newPartNumber_package + " 不正确",
                "從配置檔讀出的封裝名稱 " + newPartNumber_package + " 不正確。",
                "The package name " + newPartNumber_package + " read from the config file is incorrect.");
            // recover
            if (newfilename !== "" && oldfilename !== "") {
                replacejscssfile(newfilename, oldfilename, 'js');
            }
            if (typeof NUTOOL_PER === 'undefined') {
                if (typeof NUTOOL_PIN.g_partNumber_package_default === 'undefined' ||
                    NUTOOL_PIN.g_partNumber_package_default === '') {
                    g_partNumber_package = "NUC472VI8AE(LQFP100)";
                }
                else {
                    g_partNumber_package = NUTOOL_PIN.g_partNumber_package_default;
                }
            }
            else {
                g_partNumber_package = "M251EB2AE(TSSOP28)";
            }
        }
        else if (bMismatchedMissing) {
            showAlertDialog("在配置档里找不到必需的MFP寄存器 " + pinName + "。",
                "在配置檔裡找不到必需的MFP暫存器 " + pinName + "。",
                "The prerequisite MFP register of " + pinName + " is missing in the config file.");
            // recover
            if (newfilename !== "" && oldfilename !== "") {
                replacejscssfile(newfilename, oldfilename, 'js');
            }
            bCorrectpartNumber_package = false;
        }
        else {
            g_readConfigFile = saved_newReadConfigFile;
            g_partNumber_package = newPartNumber_package;
            g_chipType = newChipType;
            $('#ChipTypeSelect').val(chipTypeToChipSeries(g_chipType));
            readGPIOMFPsAndGPIOpins(g_readConfigFile);
        }

        // 修改Pin Config Tool以符合Speech 8-bit CPU的需求。Request from AS50 YHChuang
        if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {
            convertToSpeech8BitCPU();
        }

        // de-reference
        i = null;
        max = null;
        newChipType = null;
        tempGPIOs = [];
        realGPIOs = [];
        newReadConfigFile = null;
        newPartNumber_package = null;
        saved_newReadConfigFile = null;
        oldfilename = null;
        newfilename = null;
        pinName = null;
        mfpValue = null;
        bMismatchedMissing = null;
        bMismatchedRedundant = null;
        saved_g_partNumber_package = null;

        return bCorrectpartNumber_package;
    }

    function createGPIO_MFPs() {
        var tempGPIOs = [], // PA.n
            realGPIOs = [], // GPA_MFPL
            pinName,
            i,
            max;

        // 先把GPIO Pin存入isGPIOPin
        for (i = 0, max = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex].length; i < max; i += 1) {
            pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];

            // 左上角的MFP register不需轉換，因為AS50版本會隱藏起來，所以有轉換過8bit格式的話先轉回成原本的格式
            if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {
                code = parseInt(pinName.sliceAfterX('BP').slicePriorToX('.')) + 65;
                char = String.fromCharCode(code);
                pinName = pinName.replace(/BP[0-9]{1,}\./, 'P' + char + '.'); // 'BP[0-9].' -> 'P[A-Z].'
            }

            if (isGPIOPin(pinName)) {
                tempGPIOs.push(pinName);
            }
        }

        if (g_chipType === "M451HD" || g_chipType === "M451LD" || g_chipType === "M4521" || g_chipType === "NUC121AE" ||
            g_chipType === "M0564" || g_chipType === "M05641" ||
            g_chipType.indexOf('NUC126') === 0 || g_chipType === "M071QV" || g_chipType === "NUC029xGE" || g_chipType === "NUC029KGE" ||
            g_chipType === "NUC400" || g_chipType.indexOf('M47') === 0 ||
            g_chipType === "M433" || g_chipType === "M480MD" || g_chipType === "M480LD" || g_chipType === "AX58200" ||
            g_chipType.indexOf('M25') === 0 || g_chipType === "NDA102" ||
            g_chipType === "M261" || g_chipType.indexOf('M235') === 0 ||
            g_chipType.indexOf("M029") === 0 || g_chipType.indexOf('M030') === 0 || g_chipType.indexOf("M031") === 0 || g_chipType.indexOf("M091") === 0 ||
            g_chipType === "NANO103" || g_chipType === "NUC505" || g_chipType === "NUC123AE" ||
            g_chipType === "MA35D0" || g_chipType === "MA35D1" || g_chipType === "MA35H0" || g_chipType.indexOf('M2003') === 0 || g_chipType.indexOf('N9H30') === 0 || g_chipType.indexOf('NUC97') === 0 || g_chipType.indexOf('NUC98') === 0 || g_chipType.indexOf('M2A23') === 0) {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                if (parseInt(tempGPIOs[i].sliceAfterX('.'), 10) < 8) {
                    pinName = 'G' + tempGPIOs[i].slicePriorToX('.') + '_MFPL';
                }
                else {
                    pinName = 'G' + tempGPIOs[i].slicePriorToX('.') + '_MFPH';
                }

                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
        }
        else if (g_chipType === "M0A21" || g_chipType.indexOf('M46') === 0 || g_chipType.indexOf('M2L31') === 0 || g_chipType.indexOf("M55M1") === 0) {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                pinName = 'G' + tempGPIOs[i].slicePriorToX('.') + '_MFP' + Math.floor(parseInt(tempGPIOs[i].sliceAfterX('.'), 10) / 4);
                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
        }
        else if (g_chipType === "NANO100AN" || g_chipType === "NANO100BN" || g_chipType === "NANO112") {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                if (parseInt(tempGPIOs[i].sliceAfterX('.'), 10) < 8) {
                    pinName = tempGPIOs[i].slicePriorToX('.') + '_L_MFP';
                }
                else {
                    pinName = tempGPIOs[i].slicePriorToX('.') + '_H_MFP';
                }

                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
        }
        else if (g_chipType === "NM1500" || g_chipType === "M0519" ||
            g_chipType === "M051DN_DE" || g_chipType === "M051BN" || g_chipType === "M051AN" || g_chipType === "M058S" ||
            g_chipType === "MINI51AN" || g_chipType === "MINI51DE" || g_chipType === "MINI55" || g_chipType === "MINI58" ||
            g_chipType === "NUC029AE" || g_chipType === "NUC029TAE" || g_chipType === "NUC029AN" ||
            g_chipType === "NM1200") {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                pinName = tempGPIOs[i].slicePriorToX('.') + '_MFP';

                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
        }
        else if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
            || g_chipType.indexOf("MUG51") === 0 || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0) {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                pinName = tempGPIOs[i].slicePriorToX('.') + 'MF76543210';

                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
        }
        else if (g_chipType.indexOf("KM1M7AF") === 0 || g_chipType.indexOf("KM1M7BF") === 0) {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                pinName = 'IO' + tempGPIOs[i].slicePriorToX('.') + 'MD';

                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
        }
        else if (g_chipType.indexOf("KM1M4BF") === 0) {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                pinName = 'IO' + tempGPIOs[i].slicePriorToX('.') + 'MD';

                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
            if (g_chipType.indexOf("KM1M4BF5") === 0) {
                realGPIOs.push('SELSWD');
            }
        }
        else if (g_chipType.indexOf("KM1M7CF") === 0) {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                pinName = 'IO' + tempGPIOs[i].slicePriorToX('.') + 'MD';

                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
            for (i = 0; i < 14; i += 1) {
                if (i < 10) {
                    realGPIOs.push('FPSA0' + i + '_SEL');
                } else {
                    realGPIOs.push('FPSA' + i + '_SEL');
                }
            }
            for (i = 0; i < 12; i += 1) {
                if (i < 10) {
                    realGPIOs.push('FPSB0' + i + '_SEL');
                } else {
                    realGPIOs.push('FPSB' + i + '_SEL');
                }
            }
        }
        else {
            for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
                pinName = 'G' + tempGPIOs[i].slicePriorToX('.') + '_MFP';

                if ($.inArray(pinName, realGPIOs) === -1) {
                    realGPIOs.push(pinName);
                }
            }
        }



        // add Alternative registers
        tempGPIOs = ['ALT_MFP', 'ALT_MFP1', 'ALT_MFP2', 'ALT_MFP3', 'ALT_MFP4', 'ALT_MFP5', 'ALT_MFP6', 'ALT_MFP7', 'ALT_MFP8', 'ALT_MFP9'];
        for (i = 0, max = tempGPIOs.length; i < max; i += 1) {
            pinName = tempGPIOs[i];
            if (typeof NUTOOL_PIN.g_cfg_regDescriptions[pinName] !== 'undefined' &&
                $.inArray(pinName, realGPIOs) === -1) {
                realGPIOs.push(pinName);
            }
        }
        for (i = 0, max = realGPIOs.length; i < max; i += 1) {
            g_gpio_MFPs[realGPIOs[i]] = 0;
        }

        if (g_chipType === "MINI55" || g_chipType === "NM1200") {
            g_gpio_MFPs.ADCHER = 0;
            g_gpio_MFPs.ADCR = 0;
            g_gpio_MFPs.PIN_SEL = 0;
        }
        // de-reference
        tempGPIOs = [];
        pinName = null;
        i = null;
        max = null;
    }

    function writeNewValueToGPIO_MFPs(register, value) {
        var groupName,
            mask = 0,
            backupValue,
            i = 0,
            j = 0,
            max,
            maxJ,
            bitShift,
            bitNumber,
            assigningValue = 0,
            tempString = "",
            registerNumber,
            stringL,
            stringH,
            bL;

        // 左上角的MFP register不需轉換，因為AS50版本會隱藏起來，所以有轉換過8bit格式的話先轉回成原本的格式
        if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {
            code = parseInt(register.sliceAfterX('BP').slicePriorToX('.')) + 65;
            char = String.fromCharCode(code);
            register = register.replace(/BP[0-9]{1,}\./, 'P' + char + '.'); // 'BP[0-9].' -> 'P[A-Z].'
        }

        if (g_chipType === "NUC400" || g_chipType === "M451HD" || g_chipType === "M451LD" || g_chipType === "M4521" ||
            g_chipType === "NUC505" || g_chipType === "NUC121AE" || g_chipType === "NUC123AE" || g_chipType === "NANO103" ||
            g_chipType.indexOf('M47') === 0 ||
            g_chipType === "M433" || g_chipType === "M480MD" || g_chipType === "M480LD" || g_chipType === "AX58200" ||
            g_chipType.indexOf('M25') === 0 || g_chipType === "NDA102" ||
            g_chipType === "M261" || g_chipType.indexOf('M235') === 0 ||
            g_chipType.indexOf('M029') === 0 || g_chipType.indexOf('M030') === 0 || g_chipType.indexOf("M031") === 0 || g_chipType.indexOf("M091") === 0 ||
            g_chipType === "M0564" || g_chipType === "M05641" ||
            g_chipType.indexOf('NUC126') === 0 || g_chipType === "M071QV" || g_chipType === "NUC029xGE" || g_chipType === "NUC029KGE" ||
            g_chipType === "MA35D0" || g_chipType === "MA35D1" || g_chipType === "MA35H0" || g_chipType.indexOf('M2003') === 0 || g_chipType.indexOf('N9H30') === 0 || g_chipType.indexOf('NUC97') === 0 || g_chipType.indexOf('NUC98') === 0 || g_chipType.indexOf('M2A23') === 0) {
            groupName = register.slice(0, 2);
            registerNumber = parseInt(register.slice(3), 10);

            if (registerNumber < 8) {
                bL = true;
            }

            if (bL) {
                mask = (0xF << registerNumber * 4) >>> 0;
                stringL = 'G' + groupName + '_MFPL';
                backupValue = (g_gpio_MFPs[stringL] & ~mask) >>> 0;
                value = (value << registerNumber * 4) >>> 0;
                g_gpio_MFPs[stringL] = (backupValue | value) >>> 0;
            }
            else {
                mask = (0xF << (registerNumber - 8) * 4) >>> 0;
                stringH = 'G' + groupName + '_MFPH';
                backupValue = (g_gpio_MFPs[stringH] & ~mask) >>> 0;
                value = (value << (registerNumber - 8) * 4) >>> 0;
                g_gpio_MFPs[stringH] = (backupValue | value) >>> 0;
            }
        }
        else if (g_chipType === "M0A21" || g_chipType.indexOf('M46') === 0 || g_chipType.indexOf('M2L31') === 0 || g_chipType.indexOf("M55M1") === 0) {
            groupName = register.slice(0, 2);
            registerNumber = parseInt(register.slice(3), 10);
            bitShift = Math.floor(registerNumber / 4);

            mask = (0xFF << (registerNumber - 4 * bitShift) * 8) >>> 0;
            stringL = 'G' + groupName + '_MFP' + bitShift;
            backupValue = (g_gpio_MFPs[stringL] & ~mask) >>> 0;
            value = (value << (registerNumber - 4 * bitShift) * 8) >>> 0;
            g_gpio_MFPs[stringL] = (backupValue | value) >>> 0;
        }
        else if (g_chipType === "MINI57" || g_chipType === "NM1120") {
            groupName = register.slice(0, 2);
            registerNumber = parseInt(register.slice(3), 10);

            mask = (0xF << registerNumber * 4) >>> 0;
            stringL = 'G' + groupName + '_MFP';
            backupValue = (g_gpio_MFPs[stringL] & ~mask) >>> 0;
            value = (value << registerNumber * 4) >>> 0;
            g_gpio_MFPs[stringL] = (backupValue | value) >>> 0;
        }
        else if (g_chipType === "NANO100AN" || g_chipType === "NANO100BN" || g_chipType === "NANO112") {
            groupName = register.slice(0, 2);
            registerNumber = parseInt(register.slice(3), 10);

            if (registerNumber < 8) {
                bL = true;
            }

            if (bL) {
                mask = (0xF << registerNumber * 4) >>> 0;
                stringL = groupName + '_L_MFP';
                backupValue = (g_gpio_MFPs[stringL] & ~mask) >>> 0;
                value = (value << registerNumber * 4) >>> 0;
                g_gpio_MFPs[stringL] = (backupValue | value) >>> 0;
            }
            else {
                mask = (0xF << (registerNumber - 8) * 4) >>> 0;
                stringH = groupName + '_H_MFP';
                backupValue = (g_gpio_MFPs[stringH] & ~mask) >>> 0;
                value = (value << (registerNumber - 8) * 4) >>> 0;
                g_gpio_MFPs[stringH] = (backupValue | value) >>> 0;
            }
        }
        else if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
            || g_chipType.indexOf("MUG51") === 0 || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0) {
            groupName = register.slice(0, 2);
            registerNumber = parseInt(register.slice(3), 10);

            mask = (0xF << registerNumber * 4) >>> 0;
            stringL = groupName + 'MF76543210';
            backupValue = (g_gpio_MFPs[stringL] & ~mask) >>> 0;
            value = (value << registerNumber * 4) >>> 0;
            g_gpio_MFPs[stringL] = (backupValue | value) >>> 0;
        }
        else if (g_chipType.indexOf("KM1M7") === 0 || g_chipType.indexOf("KM1M4") === 0) {
            groupName = register.slice(0, 2);
            registerNumber = parseInt(register.slice(3), 10);

            mask = (0xF << registerNumber * 4) >>> 0;
            stringL = 'IO' + groupName + 'MD';
            backupValue = (g_gpio_MFPs[stringL] & ~mask) >>> 0;
            value = (value << registerNumber * 4) >>> 0;
            g_gpio_MFPs[stringL] = (backupValue | value) >>> 0;
        }
        else if (g_chipType === "ISD9100" || g_chipType === "ISD9300") {
            groupName = register.slice(0, 2);
            registerNumber = parseInt(register.slice(3), 10);

            mask = (0x3 << registerNumber * 2) >>> 0;
            stringL = 'G' + groupName + '_MFP';
            backupValue = (g_gpio_MFPs[stringL] & ~mask) >>> 0;
            value = (value << registerNumber * 2) >>> 0;
            g_gpio_MFPs[stringL] = (backupValue | value) >>> 0;
        }
        else if (g_chipType === "MINI55" || g_chipType === "NM1200") {
            for (i = 0, max = NUTOOL_PIN.g_cfg_gpioMatrix.length; i < max; i += 1) {
                if (register === NUTOOL_PIN.g_cfg_gpioMatrix[i].f[0]) {
                    for (j = 1, maxJ = NUTOOL_PIN.g_cfg_gpioMatrix[i].f.length; j < maxJ; j += 1) {
                        tempString = NUTOOL_PIN.g_cfg_gpioMatrix[i].f[j];

                        groupName = tempString.slicePriorToX('[');
                        bitShift = parseInt(tempString.slice(tempString.indexOf('[') + 1, tempString.indexOf(']')), 10);
                        bitNumber = parseInt(tempString.sliceAfterX(':'), 10);

                        mask = (0x1 << bitShift) >>> 0;
                        assigningValue = 0;
                        if (value & 0x1 << bitNumber) {
                            assigningValue = (0x1 << bitShift) >>> 0;
                        }

                        backupValue = (g_gpio_MFPs[groupName] & ~mask) >>> 0;
                        g_gpio_MFPs[groupName] = (backupValue | assigningValue) >>> 0;
                    }
                    break;
                }
            }
            // special case for INT0 in P3.2
            if (register === 'P3.2' && value === 1) {
                g_gpio_MFPs.PIN_SEL = 0;
            }
        }
        else {
            for (i = 0, max = NUTOOL_PIN.g_cfg_gpioMatrix.length; i < max; i += 1) {
                if (register === NUTOOL_PIN.g_cfg_gpioMatrix[i].f[0]) {
                    for (j = 1, maxJ = NUTOOL_PIN.g_cfg_gpioMatrix[i].f.length; j < maxJ; j += 1) {
                        tempString = NUTOOL_PIN.g_cfg_gpioMatrix[i].f[j];

                        groupName = tempString.slicePriorToX('[');
                        bitShift = parseInt(tempString.slice(tempString.indexOf('[') + 1, tempString.indexOf(']')), 10);
                        bitNumber = parseInt(tempString.sliceAfterX(':'), 10);

                        mask = (0x1 << bitShift) >>> 0;
                        assigningValue = 0;
                        if (value & 0x1 << bitNumber) {
                            assigningValue = (0x1 << bitShift) >>> 0;
                        }

                        backupValue = (g_gpio_MFPs[groupName] & ~mask) >>> 0;
                        g_gpio_MFPs[groupName] = (backupValue | assigningValue) >>> 0;
                    }
                    break;
                }
            }
        }

        // de-reference
        groupName = null;
        mask = null;
        backupValue = null;
        i = null;
        j = null;
        max = null;
        maxJ = null;
        bitShift = null;
        bitNumber = null;
        assigningValue = null;
        tempString = null;
        registerNumber = null;
        stringL = null;
        stringH = null;
        bL = null;
    }

    function checkNodesInModuleTree() {
        var gpio_MFPsNames = [],
            i,
            j,
            k,
            m,
            max,
            maxJ,
            maxK,
            maxM,
            bL,
            registerValue = 0,
            mask,
            mfpValue,
            thePin,
            pin,
            pinName,
            pinNumber,
            pinChosenFeature,
            readPinName,
            pinModule,
            modulePins = [],
            cfg_gpiosIndex,
            whichSide,
            oneSidePinIndex,
            pinDescription,
            currentNode,
            module,
            moduleNames = [],
            tempString1,
            tempString2,
            shiftBitNumber,
            keyWord,
            keyWordLocation,
            local_readConfigFile = g_readConfigFile,
            escapeWhileCount = 1,
            bFound;

        gpio_MFPsNames = getPropertyNames(g_read_gpio_MFPs);

        if (g_chipType === "NUC400" || g_chipType === "M451HD" || g_chipType === "M451LD" || g_chipType === "M4521" ||
            g_chipType === "NANO100AN" || g_chipType === "NANO100BN" || g_chipType === "NANO112" || g_chipType === "NUC505" ||
            g_chipType === "NUC121AE" || g_chipType === "NUC123AE" ||
            g_chipType === "NANO103" || g_chipType.indexOf('M47') === 0 ||
            g_chipType === "M433" || g_chipType === "M480MD" || g_chipType === "M480LD" || g_chipType === "AX58200" ||
            g_chipType.indexOf('M25') === 0 ||
            g_chipType === "M261" || g_chipType.indexOf('M235') === 0 ||
            g_chipType.indexOf('M029') === 0 || g_chipType.indexOf('M030') === 0 || g_chipType.indexOf("M031") === 0 || g_chipType.indexOf("M091") === 0 ||
            g_chipType === "M0564" || g_chipType === "M05641" ||
            g_chipType.indexOf('NUC126') === 0 || g_chipType === "M071QV" || g_chipType === "NUC029xGE" || g_chipType === "NUC029KGE" ||
            g_chipType === "MINI57" || g_chipType === "NM1120" || g_chipType === "NDA102" ||
            g_chipType === "MA35D0" || g_chipType === "MA35D1" || g_chipType === "MA35H0" || g_chipType.indexOf('M2003') === 0 || g_chipType.indexOf('N9H30') === 0 || g_chipType.indexOf('NUC97') === 0 || g_chipType.indexOf('NUC98') === 0 || g_chipType.indexOf('M2A23') === 0) {
            for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                if (g_read_gpio_MFPs[gpio_MFPsNames[i]] !== 0) {
                    registerValue = g_read_gpio_MFPs[gpio_MFPsNames[i]];

                    if (gpio_MFPsNames[i].indexOf('MFPH') !== -1 || gpio_MFPsNames[i].indexOf('_H_MFP') !== -1) {
                        bL = false;
                    }
                    else {
                        bL = true;
                    }

                    // iterate 8 sets of 4 bits
                    for (j = 0; j < 8; j += 1) {
                        mask = (0xF << j * 4) >>> 0;
                        mfpValue = (registerValue & mask) >>> 0;
                        mfpValue = (mfpValue >>> j * 4) >>> 0;
                        if (mfpValue) {
                            pinNumber = bL ? j : (j + 8);
                            pinName = 'P' + gpio_MFPsNames[i].slice(gpio_MFPsNames[i].indexOf('P') + 1, gpio_MFPsNames[i].indexOf('P') + 2) + '.' + pinNumber.toString();
                            pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                            if (pin !== -1) {
                                cfg_gpiosIndex = decide_cfg_gpiosIndex(gpio_MFPsNames[i], pinNumber);
                                for (k = 1, maxK = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; k < maxK; k += 1) {
                                    if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                        pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k];
                                        pinChosenFeature = pinChosenFeature.slicePriorToX(':');

                                        // for the g_module_pins whose MFP value shares the same one
                                        k += 1;
                                        if (k < maxK && NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                            if (g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)) !== -1) {
                                                readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)));
                                                readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                if (pinChosenFeature !== readPinName) {
                                                    pinChosenFeature = readPinName;
                                                }
                                            }
                                            // for the compatibility with PinConfig_V1.14 or older version
                                            else if (g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)) !== -1) {
                                                readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)));
                                                readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                if (pinChosenFeature !== readPinName) {
                                                    pinChosenFeature = readPinName;
                                                }
                                            }
                                        }
                                        break;
                                    }
                                }
                                // decide module
                                pinModule = pinChosenFeature;
                                pinModule = specialModuleNaming(pinModule);
                                pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                                if (pinModule.indexOf('_') !== -1) {
                                    pinModule = pinModule.slicePriorToX('_');
                                }
                                modulePins[0] = pin + 1;
                                // detour round checking via jstree to save a lot of time
                                // since the DOM manipulation of IE8 is severely slow.
                                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                                checkTreeViewCheckbox_Speedup(pinChosenFeature + '_Pin' + (pin + 1), pinModule, modulePins);

                                // prepare for the first layer of moduleTree
                                if (typeof (g_MFPFunctionsWaitForBeenChecked[pinModule]) === 'undefined') {
                                    g_MFPFunctionsWaitForBeenChecked[pinModule] = [];
                                    g_MFPFunctionsWaitForBeenChecked[pinModule][0] = pinChosenFeature + '_Pin' + (pin + 1);
                                }
                                else {
                                    g_MFPFunctionsWaitForBeenChecked[pinModule].push(pinChosenFeature + '_Pin' + (pin + 1));
                                }
                            }
                        }
                        // see there is a chance to leave the iteration earlier.
                        registerValue = (registerValue & ~mask) >>> 0;
                        if (registerValue === 0) {
                            break;
                        }
                    }
                }
            }
        }
        else if (g_chipType === "M0A21" || g_chipType.indexOf('M46') === 0 || g_chipType.indexOf('M2L31') === 0 || g_chipType.indexOf("M55M1") === 0) {
            for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                if (g_read_gpio_MFPs[gpio_MFPsNames[i]] !== 0) {
                    registerValue = g_read_gpio_MFPs[gpio_MFPsNames[i]];
                    shiftBitNumber = parseInt(gpio_MFPsNames[i].substr(-1), 10);

                    // iterate 4 sets of 8 bits
                    for (j = 0; j < 4; j += 1) {
                        mask = (0xFF << j * 8) >>> 0;
                        mfpValue = (registerValue & mask) >>> 0;
                        mfpValue = (mfpValue >>> j * 8) >>> 0;
                        if (mfpValue) {
                            pinNumber = j + 4 * shiftBitNumber;
                            pinName = 'P' + gpio_MFPsNames[i].slice(gpio_MFPsNames[i].indexOf('P') + 1, gpio_MFPsNames[i].indexOf('P') + 2) + '.' + pinNumber.toString();
                            pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                            if (pin !== -1) {
                                cfg_gpiosIndex = decide_cfg_gpiosIndex(gpio_MFPsNames[i], pinNumber);
                                for (k = 1, maxK = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; k < maxK; k += 1) {
                                    if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                        pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k];
                                        pinChosenFeature = pinChosenFeature.slicePriorToX(':');

                                        // for the g_module_pins whose MFP value shares the same one
                                        k += 1;
                                        if (k < maxK && NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                            if (g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)) !== -1) {
                                                readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)));
                                                readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                if (pinChosenFeature !== readPinName) {
                                                    pinChosenFeature = readPinName;
                                                }
                                            }
                                            // for the compatibility with PinConfig_V1.14 or older version
                                            else if (g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)) !== -1) {
                                                readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)));
                                                readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                if (pinChosenFeature !== readPinName) {
                                                    pinChosenFeature = readPinName;
                                                }
                                            }
                                        }
                                        break;
                                    }
                                }
                                // decide module
                                pinModule = pinChosenFeature;
                                pinModule = specialModuleNaming(pinModule);
                                pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                                if (pinModule.indexOf('_') !== -1) {
                                    pinModule = pinModule.slicePriorToX('_');
                                }
                                modulePins[0] = pin + 1;
                                // detour round checking via jstree to save a lot of time
                                // since the DOM manipulation of IE8 is severely slow.
                                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                                checkTreeViewCheckbox_Speedup(pinChosenFeature + '_Pin' + (pin + 1), pinModule, modulePins);

                                // prepare for the first layer of moduleTree
                                if (typeof (g_MFPFunctionsWaitForBeenChecked[pinModule]) === 'undefined') {
                                    g_MFPFunctionsWaitForBeenChecked[pinModule] = [];
                                    g_MFPFunctionsWaitForBeenChecked[pinModule][0] = pinChosenFeature + '_Pin' + (pin + 1);
                                }
                                else {
                                    g_MFPFunctionsWaitForBeenChecked[pinModule].push(pinChosenFeature + '_Pin' + (pin + 1));
                                }
                            }
                        }
                        // see there is a chance to leave the iteration earlier.
                        registerValue = (registerValue & ~mask) >>> 0;
                        if (registerValue === 0) {
                            break;
                        }
                    }
                }
            }
        }
        else if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
            || g_chipType.indexOf("MUG51") === 0 || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0
            || g_chipType.indexOf("KM1M7") === 0 || g_chipType.indexOf("KM1M4") === 0) {
            for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                if (g_read_gpio_MFPs[gpio_MFPsNames[i]] !== 0) {
                    registerValue = g_read_gpio_MFPs[gpio_MFPsNames[i]];

                    // iterate 8 sets of 4 bits
                    for (j = 0; j < 8; j += 1) {
                        mask = (0xF << j * 4) >>> 0;
                        mfpValue = (registerValue & mask) >>> 0;
                        mfpValue = (mfpValue >>> j * 4) >>> 0;
                        if (mfpValue) {
                            pinNumber = j;
                            pinName = 'P' + gpio_MFPsNames[i].slice(gpio_MFPsNames[i].indexOf('P') + 1, gpio_MFPsNames[i].indexOf('P') + 2) + '.' + pinNumber.toString();
                            pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                            if (pin !== -1) {
                                cfg_gpiosIndex = decide_cfg_gpiosIndex(gpio_MFPsNames[i], pinNumber);
                                for (k = 1, maxK = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; k < maxK; k += 1) {
                                    if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                        pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k];
                                        pinChosenFeature = pinChosenFeature.slicePriorToX(':');

                                        // for the g_module_pins whose MFP value shares the same one
                                        k += 1;
                                        if (k < maxK && NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                            if (g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)) !== -1) {
                                                readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)));
                                                readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                if (pinChosenFeature !== readPinName) {
                                                    pinChosenFeature = readPinName;
                                                }
                                            }
                                            // for the compatibility with PinConfig_V1.14 or older version
                                            else if (g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)) !== -1) {
                                                readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)));
                                                readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                if (pinChosenFeature !== readPinName) {
                                                    pinChosenFeature = readPinName;
                                                }
                                            }
                                        }
                                        break;
                                    }
                                }
                                // decide module
                                pinModule = pinChosenFeature;
                                pinModule = specialModuleNaming(pinModule);
                                pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                                if (pinModule.indexOf('_') !== -1) {
                                    pinModule = pinModule.slicePriorToX('_');
                                }
                                modulePins[0] = pin + 1;
                                // detour round checking via jstree to save a lot of time
                                // since the DOM manipulation of IE8 is severely slow.
                                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                                checkTreeViewCheckbox_Speedup(pinChosenFeature + '_Pin' + (pin + 1), pinModule, modulePins);

                                // prepare for the first layer of moduleTree
                                if (typeof (g_MFPFunctionsWaitForBeenChecked[pinModule]) === 'undefined') {
                                    g_MFPFunctionsWaitForBeenChecked[pinModule] = [];
                                    g_MFPFunctionsWaitForBeenChecked[pinModule][0] = pinChosenFeature + '_Pin' + (pin + 1);
                                }
                                else {
                                    g_MFPFunctionsWaitForBeenChecked[pinModule].push(pinChosenFeature + '_Pin' + (pin + 1));
                                }
                            }
                        }
                        // see there is a chance to leave the iteration earlier.
                        registerValue = (registerValue & ~mask) >>> 0;
                        if (registerValue === 0) {
                            break;
                        }
                    }
                }
            }
        }
        else if (g_chipType === "ISD9100" || g_chipType === "ISD9300") {
            for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                if (g_read_gpio_MFPs[gpio_MFPsNames[i]] !== 0) {
                    registerValue = g_read_gpio_MFPs[gpio_MFPsNames[i]];
                    // iterate 16 sets of 2 bits
                    for (j = 0; j < 16; j += 1) {
                        mask = (0x3 << j * 2) >>> 0;
                        mfpValue = (registerValue & mask) >>> 0;
                        mfpValue = (mfpValue >>> j * 2) >>> 0;
                        if (mfpValue) {
                            pinNumber = j;
                            pinName = 'P' + gpio_MFPsNames[i].slice(gpio_MFPsNames[i].indexOf('P') + 1, gpio_MFPsNames[i].indexOf('P') + 2) + '.' + pinNumber.toString();
                            pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                            if (pin !== -1) {
                                cfg_gpiosIndex = decide_cfg_gpiosIndex(gpio_MFPsNames[i], pinNumber);
                                for (k = 1, maxK = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; k < maxK; k += 1) {
                                    if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                        pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k];
                                        pinChosenFeature = pinChosenFeature.slicePriorToX(':');

                                        // for the g_module_pins whose MFP value shares the same one
                                        k += 1;
                                        if (k < maxK && NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                            if (g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)) !== -1) {
                                                readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)));
                                                readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                if (pinChosenFeature !== readPinName) {
                                                    pinChosenFeature = readPinName;
                                                }
                                            }
                                            // for the compatibility with PinConfig_V1.14 or older version
                                            else if (g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)) !== -1) {
                                                readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)));
                                                readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                if (pinChosenFeature !== readPinName) {
                                                    pinChosenFeature = readPinName;
                                                }
                                            }
                                        }
                                        break;
                                    }
                                }
                                // decide module
                                pinModule = pinChosenFeature;
                                pinModule = specialModuleNaming(pinModule);
                                pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                                if (pinModule.indexOf('_') !== -1) {
                                    pinModule = pinModule.slicePriorToX('_');
                                }
                                modulePins[0] = pin + 1;
                                // detour round checking via jstree to save a lot of time
                                // since the DOM manipulation of IE8 is severely slow.
                                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                                checkTreeViewCheckbox_Speedup(pinChosenFeature + '_Pin' + (pin + 1), pinModule, modulePins);

                                // prepare for the first layer of moduleTree
                                if (typeof (g_MFPFunctionsWaitForBeenChecked[pinModule]) === 'undefined') {
                                    g_MFPFunctionsWaitForBeenChecked[pinModule] = [];
                                    g_MFPFunctionsWaitForBeenChecked[pinModule][0] = pinChosenFeature + '_Pin' + (pin + 1);
                                }
                                else {
                                    g_MFPFunctionsWaitForBeenChecked[pinModule].push(pinChosenFeature + '_Pin' + (pin + 1));
                                }
                            }
                        }
                        // see there is a chance to leave the iteration earlier.
                        registerValue = (registerValue & ~mask) >>> 0;
                        if (registerValue === 0) {
                            break;
                        }
                    }
                }
            }
        }
        else if (g_chipType === "NUC200AE" || g_chipType === "NUC2201" || g_chipType === "M071R1S" ||
            g_chipType === "NUC029xEE" || g_chipType === "NUC100AN_BN" || g_chipType === "NUC100CN" || g_chipType === "NUC100DN") {
            for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                if (gpio_MFPsNames[i].indexOf('ALT') === -1 && g_read_gpio_MFPs[gpio_MFPsNames[i]] !== 0) {
                    // iterate 32 bits of each MFP set
                    for (j = 0; j < 32; j += 1) {
                        registerValue = g_read_gpio_MFPs[gpio_MFPsNames[i]];
                        mask = (0x1 << j) >>> 0;
                        mfpValue = ((registerValue & mask) >>> j) >>> 0;
                        pin = -1;

                        if (mfpValue) {
                            readPinName = gpio_MFPsNames[i] + '[' + j + ']';

                            for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
                                for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                                    if (NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m].indexOf(readPinName) !== -1) {
                                        pinName = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[0];
                                        pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                                        break;
                                    }
                                }

                                if (pin !== -1) {
                                    mfpValue = 0;
                                    for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                                        tempString1 = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m];
                                        shiftBitNumber = parseInt(tempString1.slice(tempString1.indexOf('[') + 1, tempString1.indexOf(']')), 10);
                                        mask = (0x1 << shiftBitNumber) >>> 0;
                                        tempString2 = tempString1.slicePriorToX('[');
                                        registerValue = g_read_gpio_MFPs[tempString2];
                                        mfpValue = mfpValue + ((registerValue & mask) >>> shiftBitNumber) * Math.pow(2, m - 1);
                                        tempString2 = tempString1.slicePriorToX(':');
                                        // we must keep the shared bits.
                                        if ($.inArray(tempString2, NUTOOL_PIN.g_cfg_shareBits) === -1) {
                                            g_read_gpio_MFPs[tempString2] = registerValue & ~mask;
                                        }
                                    }

                                    pinChosenFeature = "";
                                    cfg_gpiosIndex = decide_cfg_gpiosIndex(pinName, parseInt(pinName.sliceAfterX('.'), 10));
                                    for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; m < maxM; m += 1) {
                                        if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m].indexOf(':' + mfpValue) !== -1) {
                                            pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m];
                                            pinChosenFeature = pinChosenFeature.slicePriorToX(':');

                                            // for the g_module_pins whose MFP value shares the same one
                                            m += 1;
                                            if (m < maxM && NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m].indexOf(':' + mfpValue) !== -1) {
                                                if (g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)) !== -1) {
                                                    readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)));
                                                    readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                    if (pinChosenFeature !== readPinName) {
                                                        pinChosenFeature = readPinName;
                                                    }
                                                }
                                                // for the compatibility with PinConfig_V1.14 or older version
                                                else if (g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)) !== -1) {
                                                    readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)));
                                                    readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                    if (pinChosenFeature !== readPinName) {
                                                        pinChosenFeature = readPinName;
                                                    }
                                                }
                                            }
                                            break;
                                        }
                                    }
                                    // for the case that mfpValue is not found
                                    if (pinChosenFeature === "") {
                                        continue;
                                    }

                                    // decide module
                                    pinModule = pinChosenFeature;
                                    pinModule = specialModuleNaming(pinModule);
                                    pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                                    if (pinModule.indexOf('_') !== -1) {
                                        pinModule = pinModule.slicePriorToX('_');
                                    }
                                    modulePins[0] = pin + 1;
                                    // detour round checking via jstree to save a lot of time
                                    // since the DOM manipulation of IE8 is severely slow.
                                    // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                                    checkTreeViewCheckbox_Speedup(pinChosenFeature + '_Pin' + (pin + 1), pinModule, modulePins);

                                    // prepare for the first layer of moduleTree
                                    if (typeof (g_MFPFunctionsWaitForBeenChecked[pinModule]) === 'undefined') {
                                        g_MFPFunctionsWaitForBeenChecked[pinModule] = [];
                                        g_MFPFunctionsWaitForBeenChecked[pinModule][0] = pinChosenFeature + '_Pin' + (pin + 1);
                                    }
                                    else {
                                        g_MFPFunctionsWaitForBeenChecked[pinModule].push(pinChosenFeature + '_Pin' + (pin + 1));
                                    }

                                    break; // leave early for for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
                                }
                            }
                        }
                        // see there is a chance to leave the iteration early.
                        if (g_read_gpio_MFPs[gpio_MFPsNames[i]] === 0) {
                            break;
                        }
                    }
                }
            }
        }
        else {
            for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                if (g_read_gpio_MFPs[gpio_MFPsNames[i]] !== 0) {
                    // iterate 32 bits of each MFP set
                    for (j = 0; j < 32; j += 1) {
                        registerValue = g_read_gpio_MFPs[gpio_MFPsNames[i]];
                        mask = (0x1 << j) >>> 0;
                        mfpValue = ((registerValue & mask) >>> j) >>> 0;
                        pin = -1;

                        if (mfpValue) {
                            readPinName = gpio_MFPsNames[i] + '[' + j + ']';

                            for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
                                for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                                    if (NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m].indexOf(readPinName) !== -1) {
                                        pinName = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[0];
                                        pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                                        break;
                                    }
                                }

                                if (pin !== -1) {
                                    mfpValue = 0;
                                    for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                                        tempString1 = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m];
                                        shiftBitNumber = parseInt(tempString1.slice(tempString1.indexOf('[') + 1, tempString1.indexOf(']')), 10);
                                        mask = (0x1 << shiftBitNumber) >>> 0;
                                        tempString2 = tempString1.slicePriorToX('[');
                                        registerValue = g_read_gpio_MFPs[tempString2];
                                        mfpValue = mfpValue + ((registerValue & mask) >>> shiftBitNumber) * Math.pow(2, m - 1);
                                        g_read_gpio_MFPs[tempString2] = registerValue & ~mask;
                                    }

                                    pinChosenFeature = "";
                                    cfg_gpiosIndex = decide_cfg_gpiosIndex(pinName, parseInt(pinName.sliceAfterX('.'), 10));
                                    for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; m < maxM; m += 1) {
                                        if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m].indexOf(':' + mfpValue) !== -1) {
                                            pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m];
                                            pinChosenFeature = pinChosenFeature.slicePriorToX(':');

                                            // for the g_module_pins whose MFP value shares the same one
                                            m += 1;
                                            if (m < maxM && NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m].indexOf(':' + mfpValue) !== -1) {
                                                if (g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)) !== -1) {
                                                    readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin' + updatePinName(pin + 1)));
                                                    readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                    if (pinChosenFeature !== readPinName) {
                                                        pinChosenFeature = readPinName;
                                                    }
                                                }
                                                // for the compatibility with PinConfig_V1.14 or older version
                                                else if (g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)) !== -1) {
                                                    readPinName = g_readConfigFile.slice(g_readConfigFile.indexOf('Pin ' + updatePinName(pin + 1)));
                                                    readPinName = readPinName.sliceBetweenXandX(':', '\r').trim();
                                                    if (pinChosenFeature !== readPinName) {
                                                        pinChosenFeature = readPinName;
                                                    }
                                                }
                                            }
                                            break;
                                        }
                                    }
                                    // for the case that mfpValue is not found
                                    if (pinChosenFeature === "") {
                                        continue;
                                    }

                                    // decide module
                                    pinModule = pinChosenFeature;
                                    pinModule = specialModuleNaming(pinModule);
                                    pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                                    if (pinModule.indexOf('_') !== -1) {
                                        pinModule = pinModule.slicePriorToX('_');
                                    }
                                    modulePins[0] = pin + 1;
                                    // detour round checking via jstree to save a lot of time
                                    // since the DOM manipulation of IE8 is severely slow.
                                    // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                                    checkTreeViewCheckbox_Speedup(pinChosenFeature + '_Pin' + (pin + 1), pinModule, modulePins);

                                    // prepare for the first layer of moduleTree
                                    if (typeof (g_MFPFunctionsWaitForBeenChecked[pinModule]) === 'undefined') {
                                        g_MFPFunctionsWaitForBeenChecked[pinModule] = [];
                                        g_MFPFunctionsWaitForBeenChecked[pinModule][0] = pinChosenFeature + '_Pin' + (pin + 1);
                                    }
                                    else {
                                        g_MFPFunctionsWaitForBeenChecked[pinModule].push(pinChosenFeature + '_Pin' + (pin + 1));
                                    }

                                    break; // leave early for for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
                                }
                            }
                        }
                        // see there is a chance to leave the iteration early.
                        if (g_read_gpio_MFPs[gpio_MFPsNames[i]] === 0) {
                            break;
                        }
                    }
                }
            }
        }
        // restore the multi-functions whose MPF value is 0
        keyWord = 'IN_ICE_MODE';
        while (local_readConfigFile.indexOf(keyWord) !== -1) {
            // find module
            bFound = true;
            keyWordLocation = local_readConfigFile.indexOf(keyWord);
            escapeWhileCount = 1;
            while (local_readConfigFile.charAt(keyWordLocation - escapeWhileCount) !== ':') {
                escapeWhileCount = escapeWhileCount + 1;

                if (keyWordLocation - escapeWhileCount < 0 || escapeWhileCount > 30) {
                    bFound = false;
                    break;
                }
            }

            if (bFound) {
                pinChosenFeature = local_readConfigFile.slice(keyWordLocation - escapeWhileCount + 1, keyWordLocation) + keyWord;
                // decide module
                pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                pinModule = pinChosenFeature;
                if (pinModule.indexOf('_') !== -1) {
                    pinModule = pinModule.slicePriorToX('_');
                }
                pinModule = specialModuleNaming(pinModule);
            }
            else {
                break;
            }
            // find pin number
            bFound = true;
            keyWordLocation = keyWordLocation - escapeWhileCount;
            escapeWhileCount = 1;
            while (local_readConfigFile.charAt(keyWordLocation - escapeWhileCount) !== 'n') {
                escapeWhileCount = escapeWhileCount + 1;

                if (keyWordLocation - escapeWhileCount < 0 || escapeWhileCount > 30) {
                    bFound = false;
                    break;
                }
            }

            if (bFound) {
                thePin = local_readConfigFile.slice(keyWordLocation - escapeWhileCount + 1).slicePriorToX(':');
                thePin = parseInt(thePin, 10);
                modulePins[0] = thePin;
                // detour round checking via jstree to save a lot of time
                // since the DOM manipulation of IE8 is severely slow.
                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                checkTreeViewCheckbox_Speedup(pinChosenFeature + '_Pin' + (pin + 1), pinModule, modulePins);
                // prepare for the first layer of moduleTree
                if (typeof (g_MFPFunctionsWaitForBeenChecked[pinModule]) === 'undefined') {
                    g_MFPFunctionsWaitForBeenChecked[pinModule] = [];
                    g_MFPFunctionsWaitForBeenChecked[pinModule][0] = pinChosenFeature + '_Pin' + thePin;
                }
                else {
                    g_MFPFunctionsWaitForBeenChecked[pinModule].push(pinChosenFeature + '_Pin' + thePin);
                }
            }
            else {
                break;
            }
            // move to the next keyWord
            local_readConfigFile = local_readConfigFile.slice(local_readConfigFile.indexOf(keyWord) + 1);
        }

        // restore the saved GPIO pins
        for (i = 0, max = g_pinsConfiguredByGPIO.length; i < max; i += 1) {
            if (g_pinCurrentDescription[g_pinsConfiguredByGPIO[i]] === "") {
                pinDescription = g_chipPinDescriptions[g_pinsConfiguredByGPIO[i]];
                pinDescription = pinDescription.slice(pinDescription.indexOf('P'));
                while (pinDescription.indexOf('.') !== -1 && pinDescription.indexOf('.') !== 2) {
                    pinDescription = pinDescription.slice(1);
                    pinDescription = pinDescription.slice(pinDescription.indexOf('P'));
                }

                pinDescription = pinDescription.slicePriorToX('/');
                // since jstree's selector does not recognize the special character, such as '.' and '+',
                // we must replace them with other suitable one
                currentNode = pinDescription.replaceSpecialCharacters() + '_Pin' + (g_pinsConfiguredByGPIO[i] + 1);
                module = specialModuleNaming(pinDescription);
                modulePins[0] = g_pinsConfiguredByGPIO[i] + 1;

                // the reason of using speedup not regular handler is to avoid stashing pins repeatedly.
                // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                checkTreeViewCheckbox_Speedup(currentNode, module, modulePins);
                // prepare for the first layer of moduleTree
                if (typeof (g_MFPFunctionsWaitForBeenChecked[module]) === 'undefined') {
                    g_MFPFunctionsWaitForBeenChecked[module] = [];
                    g_MFPFunctionsWaitForBeenChecked[module][0] = currentNode;
                }
                else {
                    g_MFPFunctionsWaitForBeenChecked[module].push(currentNode);
                }
            }
        }

        // decorate the first layer of moduleTree
        moduleNames = getPropertyNames(g_MFPFunctionsWaitForBeenChecked);
        for (i = 0, max = moduleNames.length; i < max; i += 1) {
            // since the actual check objects are not loaded int DOM yet,
            // the state of the first layer is set to jstree-undetermined inevitably.
            $("#" + moduleNames[i] + '_Root').addClass('jstree-undetermined');
        }
        // de-reference
        g_read_gpio_MFPs = [];
        gpio_MFPsNames = [];
        modulePins = [];
        moduleNames = [];
        bFound = null;
        keyWord = null;
        keyWordLocation = null;
        local_readConfigFile = null;
        escapeWhileCount = null;
        bL = null;
        registerValue = null;
        mask = null;
        mfpValue = null;
        pin = null;
        pinName = null;
        pinNumber = null;
        pinChosenFeature = null;
        readPinName = null;
        pinModule = null;
        cfg_gpiosIndex = null;
        whichSide = null;
        oneSidePinIndex = null;
        pinDescription = null;
        currentNode = null;
        module = null;
        tempString1 = null;
        tempString2 = null;
        shiftBitNumber = null;
        i = null;
        j = null;
        k = null;
        m = null;
        max = null;
        maxJ = null;
        maxK = null;
        maxM = null;
    }

    function decide_cfg_gpiosIndex(pinName, pinNumber) {
        var indexOfP = -1,
            returnResult,
            code,
            char;

        // 有轉換過8bit格式的話先轉回成原本的格式
        if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {
            code = parseInt(pinName.sliceAfterX('BP').slicePriorToX('.')) + 65;
            char = String.fromCharCode(code);
            pinName = pinName.replace(/BP[0-9]{1,}\./, 'P' + char + '.'); // 'BP[0-9].' -> 'P[A-Z].'
        }
        pinName = pinName.replace('GP', 'P'); // 'GPAXXX' -> 'PAXXX'
        if (g_chipType === "M0519" || g_chipType === "M051DN_DE" || g_chipType === "M051BN" || g_chipType === "M051AN" || g_chipType === "M058S" ||
            g_chipType === "MINI51AN" || g_chipType === "MINI51DE" || g_chipType === "MINI55" || g_chipType === "MINI58" ||
            g_chipType === "NUC029AE" || g_chipType === "NUC029TAE" || g_chipType === "NUC029AN" ||
            g_chipType === "NM1200" || g_chipType === "NM1500") {
            returnResult = parseInt(pinName.slice(1, 2), 16) * 8 + parseInt(pinName.slice(3), 10);
        }
        else if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
            || g_chipType.indexOf("MUG51") === 0 || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0) {
            returnResult = parseInt(pinName.slice(1, 2), 16) * 8 + pinNumber;
        }
        else if (g_chipType.indexOf("KM1M7") === 0 || g_chipType.indexOf("KM1M4") === 0) {
            indexOfP = pinName.indexOf('P');
            returnResult = parseInt(pinName.slice(indexOfP + 1, indexOfP + 2), 16) * 8 + pinNumber;
        }
        else if (g_chipType === "MINI57" || g_chipType === "NM1120" || g_chipType === "M0A21") {
            returnResult = (pinName.slice(1, 2).charCodeAt(0) - 'A'.charCodeAt(0)) * 8 + pinNumber;
        }
        else {
            returnResult = (pinName.slice(1, 2).charCodeAt(0) - 'A'.charCodeAt(0)) * 16 + pinNumber;
        }

        return returnResult;
    }

    function checkNodesByMFPregister(MFPregister) {
        var i,
            j,
            k,
            m,
            max,
            maxJ,
            maxK,
            maxM,
            MFPregister_digitPart,
            registerValue,
            mask,
            mfpValue,
            pinNumber,
            pinName,
            pinModule,
            modulePins = [],
            pin,
            cfg_gpiosIndex,
            pinChosenFeature,
            $moduleTree = $("#moduleTree"),
            readPinName,
            tempString1,
            tempString2,
            shiftBitNumber,
            bL;

        MFPregister_digitPart = registerValue = parseInt(MFPregister.toLowerCase().slice(MFPregister.indexOf('0x') + 2), 16);

        if (g_chipType === "NUC400" || g_chipType === "M451HD" || g_chipType === "M451LD" || g_chipType === "M4521" ||
            g_chipType === "NANO100AN" || g_chipType === "NANO100BN" || g_chipType === "NANO112" || g_chipType === "NUC505" ||
            g_chipType === "NUC121AE" || g_chipType === "NUC123AE" ||
            g_chipType === "NANO103" || g_chipType.indexOf('M47') === 0 ||
            g_chipType === "M433" || g_chipType === "M480MD" || g_chipType === "M480LD" || g_chipType === "AX58200" ||
            g_chipType.indexOf('M25') === 0 ||
            g_chipType === "M261" || g_chipType.indexOf('M235') === 0 ||
            g_chipType.indexOf('M029') === 0 || g_chipType.indexOf('M030') === 0 || g_chipType.indexOf("M031") === 0 || g_chipType.indexOf("M091") === 0 ||
            g_chipType === "M0564" || g_chipType === "M05641" ||
            g_chipType.indexOf('NUC126') === 0 || g_chipType === "M071QV" || g_chipType === "NUC029xGE" || g_chipType === "NUC029KGE" ||
            g_chipType === "MINI57" || g_chipType === "NM1120" || g_chipType === "NDA102" ||
            g_chipType === "MA35D0" || g_chipType === "MA35D1" || g_chipType === "MA35H0" || g_chipType.indexOf('M2003') === 0 || g_chipType.indexOf('N9H30') === 0 || g_chipType.indexOf('NUC97') === 0 || g_chipType.indexOf('NUC98') === 0 || g_chipType.indexOf('M2A23') === 0) {
            if (MFPregister.indexOf('MFPH') !== -1 || MFPregister.indexOf('_H_MFP') !== -1) {
                bL = false;
            }
            else {
                bL = true;
            }

            // iterate 8 sets of 4 bits
            for (j = 0; j < 8; j += 1) {
                mask = (0xF << j * 4) >>> 0;
                mfpValue = (((registerValue & mask) >>> j * 4)) >>> 0;
                if (mfpValue) {
                    pinNumber = bL ? j : (j + 8);
                    pinName = 'P' + MFPregister.slice(MFPregister.indexOf('P') + 1, MFPregister.indexOf('P') + 2) + '.' + pinNumber.toString();
                    if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {    // 把pinName切換回8bitCPUMode才找得到
                        code = pinName.charCodeAt(1) - 65;
                        pinName = pinName.replace(/P[A-Z]\./, 'BP' + code + '.');
                    }
                    pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                    if (pin !== -1) {
                        pinChosenFeature = "";
                        cfg_gpiosIndex = decide_cfg_gpiosIndex(MFPregister, pinNumber);
                        for (k = 1, maxK = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; k < maxK; k += 1) {
                            if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k];
                                pinChosenFeature = pinChosenFeature.slicePriorToX(':');
                                break;
                            }
                        }

                        // for the case that mfpValue is not found
                        if (pinChosenFeature === "") {
                            MFPregister_digitPart = MFPregister_digitPart & ~mask;
                            continue;
                        }

                        // decide module
                        pinModule = pinChosenFeature;
                        pinModule = specialModuleNaming(pinModule);
                        pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                        if (pinModule.indexOf('_') !== -1) {
                            pinModule = pinModule.slicePriorToX('_');
                        }
                        modulePins[0] = pin + 1;

                        $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                        // if check fails, open the parent and intermediate node.
                        if (!$('#' + pinChosenFeature + '_Pin' + (pin + 1)).hasClass('jstree-checked')) {
                            $moduleTree.jstree("open_node", $('#' + pinModule + '_Root'));
                            $moduleTree.jstree("open_node", $('#' + pinChosenFeature + '_Intermediate'));

                            $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                        }
                    }
                    else {
                        MFPregister_digitPart = MFPregister_digitPart & ~mask;
                    }
                }
                // see there is a chance to leave the iteration earlier.
                registerValue = registerValue & ~mask;
                if (registerValue === 0) {
                    break;
                }
            }
        }
        else if (g_chipType === "M0A21" || g_chipType.indexOf('M46') === 0 || g_chipType.indexOf('M2L31') === 0 || g_chipType.indexOf("M55M1") === 0) {
            shiftBitNumber = parseInt(MFPregister.substr(7, 1), 10);

            // iterate 4 sets of 8 bits
            for (j = 0; j < 4; j += 1) {
                mask = (0xFF << j * 8) >>> 0;
                mfpValue = (((registerValue & mask) >>> j * 8)) >>> 0;
                if (mfpValue) {
                    pinNumber = j + 4 * shiftBitNumber;
                    pinName = 'P' + MFPregister.slice(MFPregister.indexOf('P') + 1, MFPregister.indexOf('P') + 2) + '.' + pinNumber.toString();
                    if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {    // 把pinName切換回8bitCPUMode才找得到
                        code = pinName.charCodeAt(1) - 65;
                        pinName = pinName.replace(/P[A-Z]\./, 'BP' + code + '.');
                    }
                    pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                    if (pin !== -1) {
                        pinChosenFeature = "";
                        cfg_gpiosIndex = decide_cfg_gpiosIndex(MFPregister, pinNumber);
                        for (k = 1, maxK = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; k < maxK; k += 1) {
                            if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k];
                                pinChosenFeature = pinChosenFeature.slicePriorToX(':');
                                break;
                            }
                        }

                        // for the case that mfpValue is not found
                        if (pinChosenFeature === "") {
                            MFPregister_digitPart = MFPregister_digitPart & ~mask;
                            continue;
                        }

                        // decide module
                        pinModule = pinChosenFeature;
                        pinModule = specialModuleNaming(pinModule);
                        pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                        if (pinModule.indexOf('_') !== -1) {
                            pinModule = pinModule.slicePriorToX('_');
                        }
                        modulePins[0] = pin + 1;

                        $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                        // if check fails, open the parent and intermediate node.
                        if (!$('#' + pinChosenFeature + '_Pin' + (pin + 1)).hasClass('jstree-checked')) {
                            $moduleTree.jstree("open_node", $('#' + pinModule + '_Root'));
                            $moduleTree.jstree("open_node", $('#' + pinChosenFeature + '_Intermediate'));

                            $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                        }
                    }
                    else {
                        MFPregister_digitPart = MFPregister_digitPart & ~mask;
                    }
                }
                // see there is a chance to leave the iteration earlier.
                registerValue = registerValue & ~mask;
                if (registerValue === 0) {
                    break;
                }
            }
        }
        else if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
            || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0 || g_chipType.indexOf("MUG51") === 0
            || g_chipType.indexOf("KM1M7") === 0 || g_chipType.indexOf("KM1M4") === 0) {
            // iterate 8 sets of 4 bits
            for (j = 0; j < 8; j += 1) {
                mask = (0xF << j * 4) >>> 0;
                mfpValue = (((registerValue & mask) >>> j * 4)) >>> 0;
                if (mfpValue) {
                    pinNumber = j;
                    pinName = 'P' + MFPregister.slice(MFPregister.indexOf('P') + 1, MFPregister.indexOf('P') + 2) + '.' + pinNumber.toString();
                    if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {    // 把pinName切換回8bitCPUMode才找得到
                        code = pinName.charCodeAt(1) - 65;
                        pinName = pinName.replace(/P[A-Z]\./, 'BP' + code + '.');
                    }
                    pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                    if (pin !== -1) {
                        pinChosenFeature = "";
                        cfg_gpiosIndex = decide_cfg_gpiosIndex(MFPregister, pinNumber);
                        for (k = 1, maxK = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; k < maxK; k += 1) {
                            if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k];
                                pinChosenFeature = pinChosenFeature.slicePriorToX(':');
                                break;
                            }
                        }

                        // for the case that mfpValue is not found
                        if (pinChosenFeature === "") {
                            MFPregister_digitPart = MFPregister_digitPart & ~mask;
                            continue;
                        }

                        // decide module
                        pinModule = pinChosenFeature;
                        pinModule = specialModuleNaming(pinModule);
                        pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                        if (pinModule.indexOf('_') !== -1) {
                            pinModule = pinModule.slicePriorToX('_');
                        }
                        modulePins[0] = pin + 1;

                        $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                        // if check fails, open the parent and intermediate node.
                        if (!$('#' + pinChosenFeature + '_Pin' + (pin + 1)).hasClass('jstree-checked')) {
                            $moduleTree.jstree("open_node", $('#' + pinModule + '_Root'));
                            $moduleTree.jstree("open_node", $('#' + pinChosenFeature + '_Intermediate'));

                            $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                        }
                    }
                    else {
                        MFPregister_digitPart = MFPregister_digitPart & ~mask;
                    }
                }
                // see there is a chance to leave the iteration earlier.
                registerValue = registerValue & ~mask;
                if (registerValue === 0) {
                    break;
                }
            }
        }
        else if (g_chipType === "ISD9100" || g_chipType === "ISD9300") {
            // iterate 16 sets of 2 bits
            for (j = 0; j < 16; j += 1) {
                mask = (0x3 << j * 2) >>> 0;
                mfpValue = (((registerValue & mask) >>> j * 2)) >>> 0;
                if (mfpValue) {
                    pinNumber = j;
                    pinName = 'P' + MFPregister.slice(MFPregister.indexOf('P') + 1, MFPregister.indexOf('P') + 2) + '.' + pinNumber.toString();
                    if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {    // 把pinName切換回8bitCPUMode才找得到
                        code = pinName.charCodeAt(1) - 65;
                        pinName = pinName.replace(/P[A-Z]\./, 'BP' + code + '.');
                    }
                    pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                    if (pin !== -1) {
                        cfg_gpiosIndex = decide_cfg_gpiosIndex(MFPregister, pinNumber);
                        pinChosenFeature = "";
                        for (k = 1, maxK = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; k < maxK; k += 1) {
                            if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k].indexOf(':' + mfpValue) !== -1) {
                                pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[k];
                                pinChosenFeature = pinChosenFeature.slicePriorToX(':');
                                break;
                            }
                        }

                        // for the case that mfpValue is not found
                        if (pinChosenFeature === "") {
                            MFPregister_digitPart = MFPregister_digitPart & ~mask;
                            continue;
                        }

                        // decide module
                        pinModule = pinChosenFeature;
                        pinModule = specialModuleNaming(pinModule);
                        pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                        if (pinModule.indexOf('_') !== -1) {
                            pinModule = pinModule.slicePriorToX('_');
                        }
                        modulePins[0] = pin + 1;

                        $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                        // if check fails, open the parent and intermediate node.
                        if (!$('#' + pinChosenFeature + '_Pin' + (pin + 1)).hasClass('jstree-checked')) {
                            $moduleTree.jstree("open_node", $('#' + pinModule + '_Root'));
                            $moduleTree.jstree("open_node", $('#' + pinChosenFeature + '_Intermediate'));

                            $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                        }
                    }
                    else {
                        MFPregister_digitPart = MFPregister_digitPart & ~mask;
                    }
                }
                // see there is a chance to leave the iteration earlier.
                registerValue = registerValue & ~mask;
                if (registerValue === 0) {
                    break;
                }
            }
        }
        else {
            // iterate 32 bits of each MFP set
            for (j = 0; j < 32; j += 1) {
                mask = (0x1 << j) >>> 0;
                mfpValue = ((registerValue & mask) >>> j) >>> 0;
                pin = -1;

                if (mfpValue) {
                    readPinName = MFPregister.slice(MFPregister.indexOf('P'), MFPregister.indexOf(':')) + '[' + j + ']';

                    for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
                        for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                            if (NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m].indexOf(readPinName) !== -1) {
                                pinName = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[0];
                                pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                                break;
                            }
                        }
                        if (pin !== -1) {
                            mfpValue = 0;
                            for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                                tempString1 = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m];
                                shiftBitNumber = parseInt(tempString1.slice(tempString1.indexOf('[') + 1, tempString1.indexOf(']')), 10);
                                mask = (0x1 << shiftBitNumber) >>> 0;
                                tempString2 = tempString1.slicePriorToX('[');
                                mfpValue = mfpValue + ((registerValue & mask) >>> shiftBitNumber) * Math.pow(2, m - 1);
                                registerValue = registerValue & ~mask;
                            }
                            // we assume that the number of one GPIO group is 8.
                            cfg_gpiosIndex = parseInt(pinName.slice(1, 2), 16) * 8 + parseInt(pinName.slice(3), 10);
                            pinChosenFeature = "";
                            for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; m < maxM; m += 1) {
                                if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m].indexOf(':' + mfpValue) !== -1) {
                                    pinChosenFeature = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m];
                                    pinChosenFeature = pinChosenFeature.slicePriorToX(':');
                                    break;
                                }
                            }

                            // for the case that mfpValue is not found
                            if (pinChosenFeature === "") {
                                for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                                    tempString1 = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m];
                                    shiftBitNumber = parseInt(tempString1.slice(tempString1.indexOf('[') + 1, tempString1.indexOf(']')), 10);
                                    mask = (0x1 << shiftBitNumber) >>> 0;
                                    MFPregister_digitPart = MFPregister_digitPart & ~mask;
                                }
                                continue;
                            }

                            // decide module
                            pinModule = pinChosenFeature;
                            pinModule = specialModuleNaming(pinModule);
                            pinChosenFeature = pinChosenFeature.replaceSpecialCharacters();

                            if (pinModule.indexOf('_') !== -1) {
                                pinModule = pinModule.slicePriorToX('_');
                            }
                            modulePins[0] = pin + 1;

                            $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                            // if check fails, open the parent and intermediate node.
                            if (!$('#' + pinChosenFeature + '_Pin' + (pin + 1)).hasClass('jstree-checked')) {
                                $moduleTree.jstree("open_node", $('#' + pinModule + '_Root'));
                                $moduleTree.jstree("open_node", $('#' + pinChosenFeature + '_Intermediate'));

                                $moduleTree.jstree('check_node', $('#' + pinChosenFeature + '_Pin' + (pin + 1)));
                            }

                            break; // leave early for for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
                        }
                    }

                    if (pin === -1) {
                        MFPregister_digitPart = MFPregister_digitPart & ~mask;
                    }
                }
                // see there is a chance to leave the iteration earlier.
                if (registerValue === 0) {
                    break;
                }
            }
        }
        // get the correct MFPregister deleting the inexistent values.
        MFPregister = MFPregister.slice(0, MFPregister.indexOf('0x') + 2) + decimalToHex(MFPregister_digitPart);

        // de-reference
        i = null;
        j = null;
        k = null;
        max = null;
        maxJ = null;
        maxK = null;
        MFPregister_digitPart = null;
        registerValue = null;
        mask = null;
        mfpValue = null;
        pinNumber = null;
        pinName = null;
        pinModule = null;
        modulePins = [];
        pin = null;
        cfg_gpiosIndex = null;
        pinChosenFeature = null;
        $moduleTree = null;
        readPinName = null;
        tempString1 = null;
        tempString2 = null;
        shiftBitNumber = null;

        return MFPregister;
    }

    function uncheckNodesByMFPregister(MFPregister) {
        var i,
            j,
            k,
            m,
            max,
            maxJ,
            maxK,
            maxM,
            registerValue = parseInt(MFPregister.toLowerCase().slice(MFPregister.indexOf('0x') + 2), 16),
            shiftBitNumber,
            mask,
            mfpValue,
            pinNumber,
            pinName,
            currentNode,
            module,
            modulePins = [],
            pin,
            readPinName,
            tempString1,
            tempString2,
            bL;

        if (g_chipType === "NUC400" || g_chipType === "M451HD" || g_chipType === "M451LD" || g_chipType === "M4521" ||
            g_chipType === "NANO100AN" || g_chipType === "NANO100BN" || g_chipType === "NANO112" || g_chipType === "NUC505" ||
            g_chipType === "NUC121AE" || g_chipType === "NUC123AE" ||
            g_chipType === "NANO103" || g_chipType.indexOf('M47') === 0 ||
            g_chipType === "M433" || g_chipType === "M480MD" || g_chipType === "M480LD" || g_chipType === "AX58200" ||
            g_chipType.indexOf('M25') === 0 ||
            g_chipType === "M261" || g_chipType.indexOf('M235') === 0 ||
            g_chipType.indexOf('M029') === 0 || g_chipType.indexOf('M030') === 0 || g_chipType.indexOf("M031") === 0 || g_chipType.indexOf("M091") === 0 ||
            g_chipType === "M0564" || g_chipType === "M05641" ||
            g_chipType.indexOf('NUC126') === 0 || g_chipType === "M071QV" || g_chipType === "NUC029xGE" || g_chipType === "NUC029KGE" ||
            g_chipType === "MINI57" || g_chipType === "NM1120" || g_chipType === "NDA102" ||
            g_chipType === "MA35D0" || g_chipType === "MA35D1" || g_chipType === "MA35H0" || g_chipType.indexOf('M2003') === 0 || g_chipType.indexOf('N9H30') === 0 || g_chipType.indexOf('NUC97') === 0 || g_chipType.indexOf('NUC98') === 0 || g_chipType.indexOf('M2A23') === 0) {
            if (MFPregister.indexOf('MFPH') !== -1 || MFPregister.indexOf('_H_MFP') !== -1) {
                bL = false;
            }
            else {
                bL = true;
            }

            // iterate 8 sets of 4 bits
            for (j = 0; j < 8; j += 1) {
                mask = (0xF << j * 4) >>> 0;
                mfpValue = ((registerValue & mask) >>> j * 4) >>> 0;
                pinNumber = bL ? j : (j + 8);
                pinName = 'P' + MFPregister.slice(MFPregister.indexOf('P') + 1, MFPregister.indexOf('P') + 2) + '.' + pinNumber.toString();
                pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                if (pin !== -1 && g_pinCurrentDescription[pin] !== "") {
                    currentNode = g_pinCurrentDescription[pin] + '_Pin' + (pin + 1);
                    currentNode = currentNode.replaceSpecialCharacters();

                    $("#moduleTree").jstree('uncheck_node', $("#" + currentNode));
                    if (!$("#" + currentNode).hasClass('jstree-unchecked')) {
                        module = specialModuleNaming(currentNode.slicePriorToX('_'));
                        modulePins[0] = pin + 1;
                        uncheckTreeViewCheckbox_Speedup(currentNode, module, modulePins);
                        $("#" + currentNode).addClass('jstree-unchecked');
                        if (typeof (g_MFPFunctionsWaitForBeenChecked[module]) !== 'undefined') {
                            for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                if (g_MFPFunctionsWaitForBeenChecked[module][i] === currentNode) {
                                    g_MFPFunctionsWaitForBeenChecked[module][i] = "";
                                    break;
                                }
                            }

                            for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                if (g_MFPFunctionsWaitForBeenChecked[module][i] !== "") {
                                    break;
                                }
                                if (i === max - 1) {
                                    $("#" + module + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (g_chipType === "M0A21" || g_chipType.indexOf('M46') === 0 || g_chipType.indexOf('M2L31') === 0 || g_chipType.indexOf("M55M1") === 0) {
            shiftBitNumber = parseInt(MFPregister.substr(-1), 10);

            // iterate 4 sets of 8 bits
            for (j = 0; j < 4; j += 1) {
                mask = (0xFF << j * 8) >>> 0;
                mfpValue = ((registerValue & mask) >>> j * 8) >>> 0;
                pinNumber = j + 4 * shiftBitNumber;
                pinName = 'P' + MFPregister.slice(MFPregister.indexOf('P') + 1, MFPregister.indexOf('P') + 2) + '.' + pinNumber.toString();
                pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                if (pin !== -1 && g_pinCurrentDescription[pin] !== "") {
                    currentNode = g_pinCurrentDescription[pin] + '_Pin' + (pin + 1);
                    currentNode = currentNode.replaceSpecialCharacters();

                    $("#moduleTree").jstree('uncheck_node', $("#" + currentNode));
                    if (!$("#" + currentNode).hasClass('jstree-unchecked')) {
                        module = specialModuleNaming(currentNode.slicePriorToX('_'));
                        modulePins[0] = pin + 1;
                        uncheckTreeViewCheckbox_Speedup(currentNode, module, modulePins);
                        $("#" + currentNode).addClass('jstree-unchecked');
                        if (typeof (g_MFPFunctionsWaitForBeenChecked[module]) !== 'undefined') {
                            for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                if (g_MFPFunctionsWaitForBeenChecked[module][i] === currentNode) {
                                    g_MFPFunctionsWaitForBeenChecked[module][i] = "";
                                    break;
                                }
                            }

                            for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                if (g_MFPFunctionsWaitForBeenChecked[module][i] !== "") {
                                    break;
                                }
                                if (i === max - 1) {
                                    $("#" + module + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                                }
                            }
                        }
                    }
                }
            }
        }
        else if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
            || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0 || g_chipType.indexOf("MUG51") === 0
            || g_chipType.indexOf("KM1M7") === 0 || g_chipType.indexOf("KM1M4") === 0) {
            // iterate 8 sets of 4 bits
            for (j = 0; j < 8; j += 1) {
                mask = (0xF << j * 4) >>> 0;
                mfpValue = ((registerValue & mask) >>> j * 4) >>> 0;
                pinNumber = j;
                pinName = 'P' + MFPregister.slice(MFPregister.indexOf('P') + 1, MFPregister.indexOf('P') + 2) + '.' + pinNumber.toString();
                pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                if (pin !== -1 && g_pinCurrentDescription[pin] !== "") {
                    currentNode = g_pinCurrentDescription[pin] + '_Pin' + (pin + 1);
                    currentNode = currentNode.replaceSpecialCharacters();

                    $("#moduleTree").jstree('uncheck_node', $("#" + currentNode));
                    if (!$("#" + currentNode).hasClass('jstree-unchecked')) {
                        module = specialModuleNaming(currentNode.slicePriorToX('_'));
                        modulePins[0] = pin + 1;
                        uncheckTreeViewCheckbox_Speedup(currentNode, module, modulePins);
                        $("#" + currentNode).addClass('jstree-unchecked');
                        if (typeof (g_MFPFunctionsWaitForBeenChecked[module]) !== 'undefined') {
                            for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                if (g_MFPFunctionsWaitForBeenChecked[module][i] === currentNode) {
                                    g_MFPFunctionsWaitForBeenChecked[module][i] = "";
                                    break;
                                }
                            }

                            for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                if (g_MFPFunctionsWaitForBeenChecked[module][i] !== "") {
                                    break;
                                }
                                if (i === max - 1) {
                                    $("#" + module + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                                }
                            }
                        }
                    }
                }
            }
        }
        else if (g_chipType === "ISD9100" || g_chipType === "ISD9300") {
            // iterate 16 sets of 2 bits
            for (j = 0; j < 16; j += 1) {
                mask = (0x3 << j * 2) >>> 0;
                mfpValue = ((registerValue & mask) >>> j * 2) >>> 0;
                pinNumber = j;
                pinName = 'P' + MFPregister.slice(MFPregister.indexOf('P') + 1, MFPregister.indexOf('P') + 2) + '.' + pinNumber.toString();
                pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                if (pin !== -1 && g_pinCurrentDescription[pin] !== "") {
                    currentNode = g_pinCurrentDescription[pin] + '_Pin' + (pin + 1);
                    currentNode = currentNode.replaceSpecialCharacters();

                    $("#moduleTree").jstree('uncheck_node', $("#" + currentNode));
                    if (!$("#" + currentNode).hasClass('jstree-unchecked')) {
                        module = specialModuleNaming(currentNode.slicePriorToX('_'));
                        modulePins[0] = pin + 1;
                        uncheckTreeViewCheckbox_Speedup(currentNode, module, modulePins);
                        $("#" + currentNode).addClass('jstree-unchecked');
                        if (typeof (g_MFPFunctionsWaitForBeenChecked[module]) !== 'undefined') {
                            for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                if (g_MFPFunctionsWaitForBeenChecked[module][i] === currentNode) {
                                    g_MFPFunctionsWaitForBeenChecked[module][i] = "";
                                    break;
                                }
                            }

                            for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                if (g_MFPFunctionsWaitForBeenChecked[module][i] !== "") {
                                    break;
                                }
                                if (i === max - 1) {
                                    $("#" + module + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                                }
                            }
                        }
                    }
                }
            }
        }
        else {
            // iterate 32 bits of each MFP set
            for (j = 0; j < 32; j += 1) {
                mask = (0x1 << j) >>> 0;
                mfpValue = ((registerValue & mask) >>> j) >>> 0;
                pin = -1;

                if (mfpValue) {
                    readPinName = MFPregister.slice(MFPregister.indexOf('P'), MFPregister.indexOf(':')) + '[' + j + ']';

                    for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
                        for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                            if (NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m].indexOf(readPinName) !== -1) {
                                pinName = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[0];
                                pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                                break;
                            }
                        }

                        //for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                        //  tempString1 = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m];
                        //  shiftBitNumber = parseInt(tempString1.slice(tempString1.indexOf('[') + 1, tempString1.indexOf(']')), 10);
                        //  mask = (0x1 << shiftBitNumber) >>> 0;
                        //  registerValue = registerValue & ~mask;
                        //}

                        if (pin !== -1 && g_pinCurrentDescription[pin] !== "") {
                            currentNode = g_pinCurrentDescription[pin] + '_Pin' + (pin + 1);
                            currentNode = currentNode.replaceSpecialCharacters();

                            $("#moduleTree").jstree('uncheck_node', $("#" + currentNode));
                            if (!$("#" + currentNode).hasClass('jstree-unchecked')) {
                                module = specialModuleNaming(currentNode.slicePriorToX('_'));
                                modulePins[0] = pin + 1;
                                uncheckTreeViewCheckbox_Speedup(currentNode, module, modulePins);
                                $("#" + currentNode).addClass('jstree-unchecked');
                                if (typeof (g_MFPFunctionsWaitForBeenChecked[module]) !== 'undefined') {
                                    for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                        if (g_MFPFunctionsWaitForBeenChecked[module][i] === currentNode) {
                                            g_MFPFunctionsWaitForBeenChecked[module][i] = "";
                                            break;
                                        }
                                    }

                                    for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module].length; i < max; i += 1) {
                                        if (g_MFPFunctionsWaitForBeenChecked[module][i] !== "") {
                                            break;
                                        }
                                        if (i === max - 1) {
                                            $("#" + module + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
                // see there is a chance to leave the iteration earlier.
                //if (registerValue === 0) {
                //  break;
                //}
            }
        }
        // de-reference
        i = null;
        j = null;
        k = null;
        max = null;
        maxJ = null;
        maxK = null;
        registerValue = null;
        shiftBitNumber = null;
        mask = null;
        mfpValue = null;
        pinNumber = null;
        pinName = null;
        currentNode = null;
        module = null;
        modulePins = [];
        pin = null;
        readPinName = null;
        tempString1 = null;
        tempString2 = null;
    }

    function chipTypeToChipSeries(chipType) {
        var stringChipSeries;
        stringChipSeries = chipType;

        if (chipType.indexOf("NUC1") === 0) {
            stringChipSeries = "NUC100";
        }
        else if (chipType.indexOf("NUC2") === 0) {
            stringChipSeries = "NUC200";
        }
        else if (chipType.indexOf("NANO1") === 0) {
            stringChipSeries = "NANO100";
        }
        else if (chipType.indexOf("NDA102") === 0) {
            stringChipSeries = "NDA102";
        }
        else if (chipType.indexOf("M0518") === 0) {
            stringChipSeries = "M0518";
        }
        else if (chipType.indexOf("M0519") === 0) {
            stringChipSeries = "M0519";
        }
        else if (chipType.indexOf("M0564") === 0) {
            stringChipSeries = "M0564";
        }
        else if (chipType.indexOf("M029G") === 0) {
            stringChipSeries = "M029G";
        }
        else if (chipType.indexOf("M030G") === 0) {
            stringChipSeries = "M030G";
        }
        else if (chipType.indexOf("M091") === 0) {
            stringChipSeries = "M091";
        }
        else if (chipType.indexOf('M030') === 0 || chipType.indexOf("M031") === 0) {
            stringChipSeries = "M031";
        }
        else if (chipType.indexOf("M05") === 0) {
            stringChipSeries = "M051";
        }
        else if (chipType.indexOf("M071") === 0) {
            stringChipSeries = "M071";
        }
        else if (chipType.indexOf("MINI5") === 0) {
            stringChipSeries = "MINI51";
        }
        else if (chipType.indexOf("M25") === 0) {
            stringChipSeries = "M251";
        }
        else if (chipType.indexOf("M235") === 0) {
            stringChipSeries = "M2351";
        }
        else if (chipType.indexOf("M433") === 0) {
            stringChipSeries = "M433";
        }
        else if (chipType.indexOf("M45") === 0) {
            stringChipSeries = "M451";
        }
        else if (chipType.indexOf("M466") === 0) {
            stringChipSeries = "M466";
        }
        else if (chipType.indexOf("M46") === 0) {
            stringChipSeries = "M460";
        }
        else if (chipType.indexOf("M48") === 0) {
            stringChipSeries = "M480";
        }
        else if (chipType.indexOf("KM1M7AF") === 0) {
            stringChipSeries = "KM1M7AF";
        }
        else if (chipType.indexOf("KM1M7BF") === 0) {
            stringChipSeries = "KM1M7BF";
        }
        else if (chipType.indexOf("KM1M7CF") === 0) {
            stringChipSeries = "KM1M7CF";
        }
        else if (chipType.indexOf("KM1M4BF") === 0) {
            stringChipSeries = "KM1M4BF";
        }
        else if (chipType.indexOf("NUC029") === 0) {
            stringChipSeries = "NUC029";
        }
        else if (chipType.indexOf("MS51") === 0) {
            stringChipSeries = "MS51";
        }
        else if (chipType.indexOf("MG51") === 0) {
            stringChipSeries = "MG51";
        }
        else if (chipType.indexOf("ML5") === 0) {
            stringChipSeries = "ML51";
        }
        else if (chipType.indexOf("MUG51") === 0) {
            stringChipSeries = "MUG51";
        }
        else if (chipType.indexOf("M2L31") === 0) {
            stringChipSeries = "M2L31";
        }
        else if (chipType.indexOf("M55M1") === 0 || chipType.indexOf('M5551') === 0) {
            stringChipSeries = "M55M1";
        }
        else if (chipType.indexOf("M2003C") === 0) {
            stringChipSeries = "M2003C";
        }
        else if (chipType.indexOf("N76E003") === 0) {
            stringChipSeries = "N76E003";
        }
        else if (chipType.indexOf("N76S003") === 0) {
            stringChipSeries = "N76S003";
        }
        else if (chipType.indexOf("N9H30K63IIM") === 0) {
            stringChipSeries = "N9H30K63IIM";
        }
        else if (chipType.indexOf("N9H30") === 0) {
            stringChipSeries = "N9H30";
        }
        else if (chipType.indexOf("NUC97") === 0) {
            stringChipSeries = "NUC970";
        }
        else if (chipType.indexOf("NUC98") === 0) {
            stringChipSeries = "NUC980";
        }
        else if (chipType.indexOf("M2A23") === 0) {
            stringChipSeries = "M2A23";
        }

        return stringChipSeries;
    }

    function chipSeriesToChipType(chipSeries) {
        var stringChipType;
        stringChipType = chipSeries;

        // it should match the first part number.
        if (chipSeries === "NUC200") {
            stringChipType = "NUC200AN";
        }
        else if (chipSeries === "NANO100") {
            stringChipType = "NANO100BN";
        }
        else if (chipSeries === "NUC100") {
            stringChipType = "NUC100DN";
        }
        else if (chipSeries === "M029G") {
            stringChipType = "M029G";
        }
        else if (chipSeries === "M030G") {
            stringChipType = "M030G";
        }
        else if (chipSeries === "M091") {
            stringChipType = "M091";
        }
        else if (chipSeries === "M031") {
            stringChipType = "M031BT";
        }
        else if (chipSeries === "M051") {
            stringChipType = "M0515LDE";
        }
        else if (chipSeries === "M071") {
            stringChipType = "M071M";
        }
        else if (chipSeries === "MINI51") {
            stringChipType = "MINI51DE";
        }
        else if (chipSeries === "NUC029") {
            stringChipType = "NUC029AE";
        }
        else if (chipSeries === "M433") {
            stringChipType = "M433";
        }
        else if (chipSeries === "M451") {
            stringChipType = "M451HD";
        }
        else if (chipSeries === "M466") {
            stringChipType = "M466";
        }
        else if (chipSeries === "M460") {
            stringChipType = "M460LD";
        }
        else if (chipSeries === "M480") {
            stringChipType = "M480LD";
        }
        else if (chipSeries === "KM1M7AF") {
            stringChipType = "KM1M7AF";
        }
        else if (chipSeries === "KM1M7BF") {
            stringChipType = "KM1M7BF";
        }
        else if (chipSeries === "KM1M7CF") {
            stringChipType = "KM1M7CF";
        }
        else if (chipSeries === "KM1M4BF") {
            stringChipType = "KM1M4BF0";
        }
        else if (chipSeries === "MS51") {
            stringChipType = "MS51_8K";
        }
        else if (chipSeries === "MG51") {
            stringChipType = "MG51";
        }
        else if (chipSeries === "ML51") {
            stringChipType = "ML51";
        }
        else if (chipSeries === "MUG51") {
            stringChipType = "MUG51";
        }
        else if (chipSeries === "M2L31") {
            stringChipType = "M2L31";
        }
        else if (chipSeries === "M55M1" || chipSeries === "M5551") {
            stringChipType = "M55M1";
        }
        else if (chipSeries === "N76S003") {
            stringChipType = "N76S003";
        }
        else if (chipSeries === "N76E003") {
            stringChipType = "N76E003";
        }
        else if (chipSeries === "N9H30K63IIM") {
            stringChipType = "N9H30K63IIM";
        }
        else if (chipSeries === "N9H30") {
            stringChipType = "N9H30";
        }
        else if (chipSeries === "NUC97") {
            stringChipType = "NUC970";
        }
        else if (chipSeries === "NUC98") {
            stringChipType = "NUC980";
        }
        else if (chipSeries === "M2A23") {
            stringChipType = "M2A23";
        }

        return stringChipType;
    }

    // 左下角展開Modules的地方
    // specialModuleNaming.specialModuleNames.push("X") 的目的是把X相關的Module縮成一個集合
    function specialModuleNaming(moduleName) {
        var i,
            max;

        if (typeof specialModuleNaming.specialModuleNames === 'undefined') {
            if (g_chipType.indexOf("MUG51") === 0) {
                // Due to PINV & PBUF, Remove PA~PN
                specialModuleNaming.specialModuleNames = [
                    'P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9'
                ];
            } else {
                specialModuleNaming.specialModuleNames = [
                    'PA', 'PB', 'PC', 'PD', 'PE', 'PF', 'PG', 'PH', 'PI', 'PI', 'PI', 'PJ', 'PK', 'PL', 'PM', 'PN',
                    'P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9'
                ];
            }
            if (g_chipType === "NUC400") {
                specialModuleNaming.specialModuleNames.push("BRAKE");
                specialModuleNaming.specialModuleNames.push("INT");
                specialModuleNaming.specialModuleNames.push("TAMPER");
            }
            else if (g_chipType.indexOf('M029G') === 0 || g_chipType.indexOf('M030G') === 0) {
                specialModuleNaming.specialModuleNames.push("DAC");
                specialModuleNaming.specialModuleNames.push("INT");
            }
            else if (g_chipType.indexOf('NUC1262') === 0 || g_chipType.indexOf('NUC1263') === 0) {
                specialModuleNaming.specialModuleNames.push("LLSI");
                specialModuleNaming.specialModuleNames.push("INT");
            }
            else if (g_chipType.indexOf('M0A21') === 0 ||
                g_chipType.indexOf('M030') === 0 ||
                g_chipType.indexOf("M031") === 0 ||
                g_chipType.indexOf("M091") === 0 ||
                g_chipType.indexOf("M2L31") === 0 ||
                g_chipType.indexOf("MS51") === 0 ||
                g_chipType.indexOf("MG51") === 0 ||
                g_chipType.indexOf("N76S003") === 0 ||
                g_chipType.indexOf("N76E003") === 0 ||
                g_chipType === "M0564" ||
                g_chipType === "M05641" ||
                g_chipType === "M0515LDE" ||
                g_chipType === "M071M" ||
                g_chipType === "MINI58" ||
                g_chipType === "NUC029KGE" ||
                g_chipType === "NUC029xGE" ||
                g_chipType === "NUC121AE" ||
                g_chipType.indexOf('NUC126') === 0 ||
                g_chipType === "M071QV" ||
                g_chipType === "NUC1311") {
                specialModuleNaming.specialModuleNames.push("INT");
            }
            else if (g_chipType === "NM1120") {
                specialModuleNaming.specialModuleNames.push("TM");
            }
            else if (g_chipType === "MINI57") {
                specialModuleNaming.specialModuleNames.push("TM");
                specialModuleNaming.specialModuleNames.splice(specialModuleNaming.specialModuleNames.indexOf("PG"), 1);
            }
            else if (g_chipType === "M0519") {
                specialModuleNaming.specialModuleNames.push("TM");
                specialModuleNaming.specialModuleNames.push("INT");
            }
            else if (g_chipType.indexOf("ML5") === 0) {
                specialModuleNaming.specialModuleNames.push("TK");
                specialModuleNaming.specialModuleNames.push("INT");
            }
            else if (g_chipType.indexOf("MUG51") === 0) {
                specialModuleNaming.specialModuleNames.push("TK");
                specialModuleNaming.specialModuleNames.push("INT");
            }
            else if (g_chipType === "M451LD" ||
                g_chipType === "M451HD" ||
                g_chipType === "M4521") {
                specialModuleNaming.specialModuleNames.push("TK");
                specialModuleNaming.specialModuleNames.push("INT");
                specialModuleNaming.specialModuleNames.push("TAMPER");
            }
            else if (g_chipType.indexOf('M46') === 0 ||
                g_chipType.indexOf('M47') === 0 ||
                g_chipType === "M433" ||
                g_chipType === "M480MD" ||
                g_chipType === "M480LD" ||
                g_chipType === "M251" ||
                g_chipType === "M253" ||
                g_chipType === "M261" ||
                g_chipType === "NDA102" ||
                g_chipType === "M55M1" ||
                g_chipType.indexOf("M235") === 0 ||
                g_chipType === "AX58200" ||
                g_chipType.indexOf("M2003") === 0 ||
                g_chipType.indexOf("N9H30") === 0 ||
                g_chipType.indexOf("NUC97") === 0 ||
                g_chipType.indexOf("NUC98") === 0 ||
                g_chipType.indexOf("M2A23") === 0) {
                specialModuleNaming.specialModuleNames.push("INT");
                specialModuleNaming.specialModuleNames.push("TAMPER");
                specialModuleNaming.specialModuleNames.push("CFG");
            }
            else if (g_chipType.indexOf('KM1M7AF') === 0 || g_chipType.indexOf('KM1M7BF') === 0 || g_chipType.indexOf('KM1M4') === 0) {
                specialModuleNaming.specialModuleNames.push("IRQ");
                specialModuleNaming.specialModuleNames.push("AD");
                for (i = 0, max = 26; i < max; i += 1) {
                    if (i < 10) {
                        specialModuleNaming.specialModuleNames.push("TM0" + i);
                    }
                    else {
                        specialModuleNaming.specialModuleNames.push("TM" + i);
                    }
                }
            }
            else if (g_chipType.indexOf('KM1M7CF') === 0) {
                specialModuleNaming.specialModuleNames.push("IRQ");
                specialModuleNaming.specialModuleNames.push("CAN");
                specialModuleNaming.specialModuleNames.push("AD");
                specialModuleNaming.specialModuleNames.push("FPS");
                specialModuleNaming.specialModuleNames.push("RTC");
                specialModuleNaming.specialModuleNames.push("CLK");
                specialModuleNaming.specialModuleNames.push("OSC");
                for (i = 0, max = 26; i < max; i += 1) {
                    if (i < 10) {
                        specialModuleNaming.specialModuleNames.push("TM0" + i);
                    }
                    else {
                        specialModuleNaming.specialModuleNames.push("TM" + i);
                    }
                }
            }
            else if (g_chipType === "M256D" || g_chipType === "M258" || g_chipType === "M258G") {
                specialModuleNaming.specialModuleNames.push("INT");
                specialModuleNaming.specialModuleNames.push("LCD");
                specialModuleNaming.specialModuleNames.push("TAMPER");
            }
            else if (g_chipType === "NANO100AN") {
                specialModuleNaming.specialModuleNames.push("ADC");
                specialModuleNaming.specialModuleNames.push("DA");
                specialModuleNaming.specialModuleNames.push("AD");
                specialModuleNaming.specialModuleNames.push("PWM0");
                specialModuleNaming.specialModuleNames.push("PWM1");
                specialModuleNaming.specialModuleNames.push("SC0");
                specialModuleNaming.specialModuleNames.push("SC1");
                specialModuleNaming.specialModuleNames.push("TC");
                specialModuleNaming.specialModuleNames.push("SPI");
                specialModuleNaming.specialModuleNames.push("I2C0");
                specialModuleNaming.specialModuleNames.push("I2C1");
                specialModuleNaming.specialModuleNames.push("I2S");
                specialModuleNaming.specialModuleNames.push("TMR");
                specialModuleNaming.specialModuleNames.push("TX");
                specialModuleNaming.specialModuleNames.push("RX");
            }
            else if (g_chipType === "NANO100BN") {
                specialModuleNaming.specialModuleNames.push("ADC");
                specialModuleNaming.specialModuleNames.push("DA");
                specialModuleNaming.specialModuleNames.push("AD");
                specialModuleNaming.specialModuleNames.push("TC");
                specialModuleNaming.specialModuleNames.push("TM");
            }
            else if (g_chipType === "NANO103" ||
                g_chipType === "NANO112") {
                specialModuleNaming.specialModuleNames.push("AD");
            }
            else if (g_chipType === "NUC100AN_BN" || g_chipType === "NUC100CN" || g_chipType === "NUC100DN") {
                specialModuleNaming.specialModuleNames.push("INT");
                specialModuleNaming.specialModuleNames.push("ADC");
                specialModuleNaming.specialModuleNames.push("PWM");
                specialModuleNaming.specialModuleNames.push("I2C0");
                specialModuleNaming.specialModuleNames.push("I2C1");
                specialModuleNaming.specialModuleNames.push("TM");
                specialModuleNaming.specialModuleNames.push("TXD");
                specialModuleNaming.specialModuleNames.push("RXD");
                specialModuleNaming.specialModuleNames.push("RTS");
                specialModuleNaming.specialModuleNames.push("PS2");
                specialModuleNaming.specialModuleNames.push("SPI");
                specialModuleNaming.specialModuleNames.push("SC0");
                specialModuleNaming.specialModuleNames.push("SC1");
                specialModuleNaming.specialModuleNames.push("SC2");
                specialModuleNaming.specialModuleNames.push("nWR");
                specialModuleNaming.specialModuleNames.push("I2S");
                specialModuleNaming.specialModuleNames.push("CTS");
                specialModuleNaming.specialModuleNames.push("CP");
                specialModuleNaming.specialModuleNames.push("AD");
            }
            else if (g_chipType === "NUC200AE" || g_chipType === "NUC200AN") {
                specialModuleNaming.specialModuleNames.push("PWM");
                specialModuleNaming.specialModuleNames.push("ADC");
                specialModuleNaming.specialModuleNames.push("INT");
                specialModuleNaming.specialModuleNames.push("AD");
            }
            else if (g_chipType === "NUC2201" || g_chipType === "M071R1S" || g_chipType === "NUC029xEE") {
                specialModuleNaming.specialModuleNames.push("PWM");
                specialModuleNaming.specialModuleNames.push("ADC");
                specialModuleNaming.specialModuleNames.push("INT");
                specialModuleNaming.specialModuleNames.push("AD");
                specialModuleNaming.specialModuleNames.push("nWR");
            }
            else if (g_chipType.indexOf("NUC131") === 0 || g_chipType === "M0518" ||
                g_chipType === "NUC029xDE" || g_chipType === "NUC029MDE") {
                specialModuleNaming.specialModuleNames.push("ADC");
                specialModuleNaming.specialModuleNames.push("INT");
            }
            else if (g_chipType === "NUC122AN") {
                specialModuleNaming.specialModuleNames.push("PWM");
            }
            else if (g_chipType === "NUC123AN" || g_chipType === "NUC123AE") {
                specialModuleNaming.specialModuleNames.push("ADC");
                specialModuleNaming.specialModuleNames.push("I2S");
            }
            else if (g_chipType === "M051DN_DE" || g_chipType === "M051AN" || g_chipType === "M051BN" || g_chipType === "M058S" ||
                g_chipType === "NUC029AE" || g_chipType === "NUC029TAE" || g_chipType === "NUC029AN") {
                specialModuleNaming.specialModuleNames.push("AD");
                specialModuleNaming.specialModuleNames.push("AIN");
                specialModuleNaming.specialModuleNames.push("SPI");
                specialModuleNaming.specialModuleNames.push("PWM");
                specialModuleNaming.specialModuleNames.push("T0");
                specialModuleNaming.specialModuleNames.push("T1");
                specialModuleNaming.specialModuleNames.push("T2");
                specialModuleNaming.specialModuleNames.push("T3");
                specialModuleNaming.specialModuleNames.push("nWR");
                specialModuleNaming.specialModuleNames.push("CTS");
                specialModuleNaming.specialModuleNames.push("RTS");
            }
            else if (g_chipType === "MINI51AN" || g_chipType === "MINI51DE" || g_chipType === "MINI55") {
                specialModuleNaming.specialModuleNames.push("AIN");
                specialModuleNaming.specialModuleNames.push("PWM");
                specialModuleNaming.specialModuleNames.push("T0");
                specialModuleNaming.specialModuleNames.push("T1");
                specialModuleNaming.specialModuleNames.push("T2");
                specialModuleNaming.specialModuleNames.push("T3");
            }
            else if (g_chipType === "NM1200") {
                specialModuleNaming.specialModuleNames.push("AIN");
                specialModuleNaming.specialModuleNames.push("PWM");
            }
            else if (g_chipType === "NM1500") {
                specialModuleNaming.specialModuleNames.push("AINA");
                specialModuleNaming.specialModuleNames.push("AINB");
                specialModuleNaming.specialModuleNames.push("PWM");
                specialModuleNaming.specialModuleNames.push("INT");
                specialModuleNaming.specialModuleNames.push("TM");
            }
            else if (g_chipType === "ISD9100" || g_chipType === "ISD9300") {
                specialModuleNaming.specialModuleNames.push("CMP");
            }
        }

        if (typeof (moduleName) !== 'undefined') {
            for (i = 0, max = specialModuleNaming.specialModuleNames.length; i < max; i += 1) {
                if (moduleName.indexOf(specialModuleNaming.specialModuleNames[i]) === 0) {
                    if (moduleName.indexOf("ADC") !== 0) {
                        moduleName = specialModuleNaming.specialModuleNames[i];
                    }
                    else {
                        moduleName = "ADC";
                    }

                    break;
                }
            }
        }

        return moduleName;
    }

    function getIncludeHeadFile() {
        // initialization
        NUTOOL_PIN.g_pinFunctionString = '';

        if (typeof NUTOOL_PER === 'undefined') {
            if (g_chipType === "NUC200AE") {
                g_includeHeadFileString = '#include "NUC230_240.h"\r\n';
            }
            else if (g_chipType === "NUC200AN") {
                g_includeHeadFileString = '#include "NUC200Series.h"\r\n';
            }
            else if (g_chipType === "NANO100AN" || g_chipType === "NANO100BN") {
                g_includeHeadFileString = '#include "Nano100Series.h"\r\n';
            }
            else if (g_chipType === "NANO103") {
                g_includeHeadFileString = '#include "Nano103.h"\r\n';
            }
            else if (g_chipType === "NANO112") {
                g_includeHeadFileString = '#include "Nano1X2Series.h"\r\n';
            }
            else if (g_chipType === "NUC100AN_BN" || g_chipType === "NUC100CN" || g_chipType === "NUC100DN") {
                g_includeHeadFileString = '#include "NUC100Series.h"\r\n';
            }
            else if (g_chipType === "NUC121AE") {
                g_includeHeadFileString = '#include "NUC121.h"\r\n';
            }
            else if (g_chipType === "NUC122AN") {
                g_includeHeadFileString = '#include "NUC122.h"\r\n';
            }
            else if (g_chipType === "NUC123AN" || g_chipType === "NUC123AE") {
                g_includeHeadFileString = '#include "NUC123.h"\r\n';
            }
            else if (g_chipType.indexOf("M029G") === 0) {
                g_includeHeadFileString = '#include "M029G.h"\r\n';
            }
            else if (g_chipType.indexOf("M030G") === 0) {
                g_includeHeadFileString = '#include "M030G.h"\r\n';
            }
            else if (g_chipType.indexOf("M091") === 0) {
                g_includeHeadFileString = '#include "M091Series.h"\r\n';
            }
            else if (g_chipType.indexOf("M030") === 0 || g_chipType.indexOf("M031") === 0) {
                g_includeHeadFileString = '#include "M031Series.h"\r\n';
            }
            else if (g_chipType.indexOf("M256D") === 0 || g_chipType.indexOf("M258") === 0 || g_chipType.indexOf("M258G") === 0) {
                g_includeHeadFileString = '#include "M251.h"\r\n';
            }
            else if (g_chipType.indexOf("M433") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("M46") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("M480") === 0) {
                g_includeHeadFileString = '#include "M480.h"\r\n';
            }
            else if (g_chipType.indexOf("KM1M4") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("KM1M7") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType === "NUC505") {
                g_includeHeadFileString = '#include "NUC505Series.h"\r\n';
            }
            else if (g_chipType === "M051DN_DE" || g_chipType === "M051BN" || g_chipType === "M051AN") {
                g_includeHeadFileString = '#include "M051Series.h"\r\n';
            }
            else if (g_chipType === "M451LD" || g_chipType === "M451HD") {
                g_includeHeadFileString = '#include "M451Series.h"\r\n';
            }
            else if (g_chipType === "MINI51AN") {
                g_includeHeadFileString = '#include "Mini51.h"\r\n';
            }
            else if (g_chipType === "MINI51DE") {
                g_includeHeadFileString = '#include "Mini51Series.h"\r\n';
            }
            else if (g_chipType === "MINI55") {
                g_includeHeadFileString = '#include "Mini55Series.h"\r\n';
            }
            else if (g_chipType === "MINI57" || g_chipType === "NM1120") {
                g_includeHeadFileString = '#include "Mini57Series.h"\r\n';
            }
            else if (g_chipType === "MINI58") {
                g_includeHeadFileString = '#include "Mini58Series.h"\r\n';
            }
            else if (g_chipType === "ML5156") {
                g_includeHeadFileString = '#include "Function_Define_ML51.h"\r\n';
            }
            else if (g_chipType.indexOf("ML51") === 0) {
                g_includeHeadFileString = '#include "Function_Define_ML51.h"\r\n';
            }
            else if (g_chipType.indexOf("ML56") === 0) {
                g_includeHeadFileString = '#include "Function_Define_ML51.h"\r\n';
            }
            else if (g_chipType.indexOf("MUG51") === 0) {
                g_includeHeadFileString = '#include "Function_Define_MUG51.h"\r\n';
            }
            else if (g_chipType.indexOf("MS51_8K") === 0) {
                g_includeHeadFileString = '#include "MS51_8K.h"\r\n';
            }
            else if (g_chipType.indexOf("MG51") === 0) {
                g_includeHeadFileString = '#include "MG51.h"\r\n';
            }
            else if (g_chipType.indexOf("N76S003") === 0) {
                g_includeHeadFileString = '#include "N76S003.h"\r\n';
            }
            else if (g_chipType.indexOf("N76E003") === 0) {
                g_includeHeadFileString = '#include "N76E003.h"\r\n';
            }
            else if (g_chipType === "NUC029AN" || g_chipType === "NUC029TAE") {
                g_includeHeadFileString = '#include "NUC029xAN.h"\r\n';
            }
            else if (g_chipType === "NUC029AE") {
                g_includeHeadFileString = '#include "NUC029FAE.h"\r\n';
            }
            else if (g_chipType === "NUC029KGE" || g_chipType === "NUC029xGE") {
                g_includeHeadFileString = '#include "NUC029xGE.h"\r\n';
            }
            else if (g_chipType === "NUC029xDE") {
                g_includeHeadFileString = '#include "NUC029xDE.h"\r\n';
            }
            else if (g_chipType === "NUC029xEE") {
                g_includeHeadFileString = '#include "NUC029xEE.h"\r\n';
            }
            else if (g_chipType === "NM1200") {
                g_includeHeadFileString = '#include "Mini51.h"\r\n';
            }
            else if (g_chipType === "NM1500") {
                g_includeHeadFileString = '#include "MT500Series.h"\r\n';
            }
            else if (g_chipType === "NUC400") {
                g_includeHeadFileString = '#include "NUC472_442.h"\r\n';
            }
            else if (g_chipType === "M0515LDE" || g_chipType === "NDA102" ||
                g_chipType === "M071M" || g_chipType === "M071QV" || g_chipType === "M071R1S") {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("MA35D0") === 0 || g_chipType.indexOf("MA35H0") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("MA35") === 0) {
                g_includeHeadFileString = '#include "' + g_chipType.toLowerCase() + '.dtsi"\r\n';
            }
            else if (g_chipType.indexOf("M55M1") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("M2003") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("N9H30") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("NUC97") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("NUC98") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else if (g_chipType.indexOf("M2A23") === 0) {
                g_includeHeadFileString = '#include "NuMicro.h"\r\n';
            }
            else {
                g_includeHeadFileString = '#include "' + g_chipType + '.h"\r\n';
            }
        }
        else {
            g_includeHeadFileString = '#include "NuCodeGenProj.h"\r\n';
        }
    }

    function getDataUsedToCreateText() {
        var i,
            j,
            k,
            m,
            n,
            p,
            q,
            max,
            maxJ,
            maxK,
            maxM,
            maxN,
            maxP,
            maxQ,
            gpio_MFPsNames = [],
            pinDescription,
            usedPinsCatalogedByGPIO = [],
            pin,
            gpio,
            gpioNames = [],
            gpio_MFPsArray = [],
            gpio_MFPsArray1 = [],
            pinName,
            functionName,
            registerName,
            defineName,
            parentRegisterAccess = 'SYS->',
            gpiosDefinesElement;

        if (typeof NUTOOL_PER !== 'undefined') {
            // generate the include header string
            getIncludeHeadFile();
        }
        if ((NUTOOL_PIN.g_pinFunctionString === 'h' || NUTOOL_PIN.g_pinFunctionString === 'dtsi') &&
            g_includeHeadFileString.sliceAfterX('.') !== NUTOOL_PIN.g_pinFunctionString) {
            g_includeHeadFileString = g_includeHeadFileString.slicePriorToX('.') + '.' + NUTOOL_PIN.g_pinFunctionString + '"\r\n';
        }
        // concatenate gpio_MFP into a string
        g_gpio_MFPsString = "";
        // parentRegisterAccess may differ between NTC and NTCJ
        if (NUTOOL_PIN.g_cfg_gpiosDefines.length !== 0 &&
            (NUTOOL_PIN.g_cfg_gpiosDefines[0].f.length > 1 && NUTOOL_PIN.g_cfg_gpiosDefines[0].f[1].indexOf("GPIO:GPIO_") === 0)) {
            parentRegisterAccess = '';
        }

        gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);
        // Do not sort KM1M7CF's MFP registers 因為IOP*MD要排在FPS前面.
        if (g_chipType !== "KM1M7CF") {
            gpio_MFPsNames.sort();
        }

        if (NUTOOL_PIN.g_cfg_gpiosDefines.length !== 0) {
            if (g_includeHeadFileString.indexOf(".dtsi") === -1) {
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    g_read_gpio_MFPs[gpio_MFPsNames[i]] = g_gpio_MFPs[gpio_MFPsNames[i]];
                    gpio_MFPsArray[gpio_MFPsNames[i]] = [];
                }
            }
            for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
                if (g_pinCurrentDescription[i - 1] !== "") {
                    pin = i;
                    pinDescription = g_pinCurrentDescription[i - 1];
                    gpio = specialModuleNaming(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1]);

                    if (typeof (usedPinsCatalogedByGPIO[gpio]) === 'undefined') {
                        usedPinsCatalogedByGPIO[gpio] = [];
                        usedPinsCatalogedByGPIO[gpio][0] = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1] + ':' + pinDescription;
                    }
                    else {
                        usedPinsCatalogedByGPIO[gpio].push(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1] + ':' + pinDescription);
                    }
                }
            }

            gpioNames = getPropertyNames(usedPinsCatalogedByGPIO).sort(natualSort);
            for (i = 0, max = gpioNames.length; i < max; i += 1) {
                usedPinsCatalogedByGPIO[gpioNames[i]].sort(natualSort);
                for (j = 0, maxJ = usedPinsCatalogedByGPIO[gpioNames[i]].length; j < maxJ; j += 1) {
                    pinName = usedPinsCatalogedByGPIO[gpioNames[i]][j];
                    functionName = pinName;

                    pinName = pinName.slicePriorToX(':');
                    functionName = functionName.sliceAfterX(':');
                    if (functionName === pinName) {
                        functionName = 'GPIO';
                    }
                    for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpiosDefines.length; m < maxM; m += 1) {
                        if (pinName === NUTOOL_PIN.g_cfg_gpiosDefines[m].f[0]) {
                            for (n = 1, maxN = NUTOOL_PIN.g_cfg_gpiosDefines[m].f.length; n < maxN; n += 1) {
                                if (NUTOOL_PIN.g_cfg_gpiosDefines[m].f[n].indexOf(functionName + ':') === 0) {
                                    gpiosDefinesElement = NUTOOL_PIN.g_cfg_gpiosDefines[m].f[n];
                                    do {
                                        if (gpiosDefinesElement.indexOf('/') === -1) {
                                            registerName = gpiosDefinesElement;
                                            gpiosDefinesElement = "";
                                        }
                                        else {
                                            registerName = gpiosDefinesElement.slicePriorToX('/');
                                            gpiosDefinesElement = gpiosDefinesElement.sliceAfterX('/');
                                        }
                                        defineName = registerName;
                                        if (g_includeHeadFileString.indexOf(".dtsi") === -1) {
                                            registerName = registerName.sliceAfterX('@').slicePriorToX('%');
                                        }
                                        else {
                                            registerName = registerName.sliceAfterX('@').sliceAfterX('%');
                                        }
                                        if (defineName.indexOf(':') === -1) {
                                            defineName = defineName.slicePriorToX('@');
                                        }
                                        else {
                                            defineName = defineName.slice(defineName.indexOf(':') + 1, defineName.indexOf('@'));
                                        }
                                        if (registerName.slice(-1) === ';') {
                                            registerName = registerName.slice(0, -1);
                                        }
                                        gpio_MFPsArray1 = registerName.split(';');
                                        for (k = 0, maxK = gpio_MFPsArray1.length; k < maxK; k += 1) {
                                            registerName = gpio_MFPsArray1[k].trim();
                                            if (typeof gpio_MFPsArray[registerName] === 'undefined') {
                                                gpio_MFPsArray[registerName] = [];
                                            }
                                            gpio_MFPsArray[registerName].push(defineName);
                                        }
                                        // 處理FPS Register: FPSA/Bxx->FPSA/Bn_SEL
                                        if (g_chipType === "KM1M7CF") {
                                            var fpsName, register;
                                            var module = NUTOOL_PIN.g_cfg_gpiosDefines[m].f[n].slicePriorToX(':');
                                            // 先確定被選擇的pin有FPS
                                            for (p = 0, maxP = NUTOOL_PIN.g_cfg_gpios_FPS_mapping.length; p < maxP; p += 1) {
                                                if (NUTOOL_PIN.g_cfg_gpios_FPS_mapping[p].indexOf(pinName) !== -1) {
                                                    fpsName = NUTOOL_PIN.g_cfg_gpios_FPS_mapping[p].sliceAfterX(':');
                                                    break;
                                                }
                                            }
                                            // 再確認選到的function屬於FPS
                                            if (fpsName != undefined) {
                                                if (fpsName.indexOf('FPSA') !== -1) {
                                                    for (q = 0, maxQ = NUTOOL_PIN.g_cfg_gpios_FPSA_defines.length; q < maxQ; q += 1) {
                                                        if (NUTOOL_PIN.g_cfg_gpios_FPSA_defines[q].slicePriorToX(':').indexOf(module) !== -1) {
                                                            register = fpsName + '_SEL';
                                                            if (typeof gpio_MFPsArray[register] === 'undefined') {
                                                                gpio_MFPsArray[register] = [];
                                                            }
                                                            gpio_MFPsArray[register].push(NUTOOL_PIN.g_cfg_gpios_FPSA_defines[q].sliceAfterX(':'));
                                                            break;
                                                        }
                                                    }
                                                }
                                                if (fpsName.indexOf('FPSB') !== -1) {
                                                    for (q = 0, maxQ = NUTOOL_PIN.g_cfg_gpios_FPSB_defines.length; q < maxQ; q += 1) {
                                                        if (NUTOOL_PIN.g_cfg_gpios_FPSB_defines[q].slicePriorToX(':').indexOf(module) !== -1) {
                                                            register = fpsName + '_SEL';
                                                            if (typeof gpio_MFPsArray[register] === 'undefined') {
                                                                gpio_MFPsArray[register] = [];
                                                            }
                                                            gpio_MFPsArray[register].push(NUTOOL_PIN.g_cfg_gpios_FPSB_defines[q].sliceAfterX(':'));
                                                            break;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    while (gpiosDefinesElement !== "");

                                    break;
                                }
                            }

                            break;
                        }
                    }
                }
            }
            if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MUG51") === 0) {
                // real value version
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    g_gpio_MFPsString += '    //' + parentRegisterAccess + gpio_MFPsNames[i] + ' = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
                }

                g_gpio_MFPsString += '\r\n';
                if (typeof NUTOOL_PER === 'undefined') {
                    g_gpio_MFPsString += '    /* If the macros do not exist in your project, please refer to the corresponding header file in Header folder of the tool package */\r\n';
                }
                g_gpio_MFPsStringForFunctionalTest = "";
                // using defines
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0) {
                        for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                            g_gpio_MFPsString += '    ' + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';\r\n';
                            g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + '    ' + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';';
                        }
                    }
                }
            }
            else if (g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
                || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0) {
                // real value version
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    g_gpio_MFPsString += '    //' + parentRegisterAccess + gpio_MFPsNames[i] + ' = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
                }

                g_gpio_MFPsString += '\r\n';
                if (typeof NUTOOL_PER === 'undefined') {
                    g_gpio_MFPsString += '    /* If the macros do not exist in your project, please refer to the corresponding header file in Header folder of the tool package */\r\n';
                }
                g_gpio_MFPsStringForFunctionalTest = "";
                // using defines
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0) {
                        for (j = 0, maxJ = gpio_MFPsArray[gpio_MFPsNames[i]].length; j < maxJ; j += 1) {
                            gpio_MFPsArray1 = gpio_MFPsArray[gpio_MFPsNames[i]][j].split(';');
                            for (m = 0, maxM = gpio_MFPsArray1.length; m < maxM; m += 1) {
                                if (gpio_MFPsArray1[m] !== "") {
                                    if (gpio_MFPsArray1[m].toString().toUpperCase() !== "NULL") {
                                        g_gpio_MFPsString += '    ' + gpio_MFPsArray1[m] + ';\r\n';
                                    }
                                    g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + '    ' + gpio_MFPsArray1[m] + ';';
                                }
                            }
                        }
                    }
                }
            }
            else if (g_chipType.indexOf("KM1M7AF") === 0 || g_chipType.indexOf("KM1M7BF") === 0) {
                // real value version
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    g_gpio_MFPsString += '    //' + parentRegisterAccess + "GPIO_MD(0x" + gpio_MFPsNames[i][3] + ')->IOPnMD = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
                }

                g_gpio_MFPsString += '\r\n';
                if (typeof NUTOOL_PER === 'undefined') {
                    g_gpio_MFPsString += '    /* If the macros do not exist in your project, please refer to the corresponding header file in Header folder of the tool package */\r\n';
                }
                g_gpio_MFPsStringForFunctionalTest = "";
                // using defines
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0) {
                        g_gpio_MFPsString += '    ' + parentRegisterAccess + "GPIO_MD(0x" + gpio_MFPsNames[i][3] + ')->IOPnMD = ';
                        g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + '    ' + parentRegisterAccess + "GPIO_MD(0x" + gpio_MFPsNames[i][3] + ')->IOPnMD = ';

                        for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                            if (j !== 0) {
                                g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                                g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                            }
                            else {
                                g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';\r\n';
                                g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';';
                            }
                        }
                    }
                    else {
                        g_gpio_MFPsString += '    ' + parentRegisterAccess + "GPIO_MD(0x" + gpio_MFPsNames[i][3] + ')->IOPnMD = 0x00000000;\r\n';
                    }
                }
            }
            else if (g_chipType.indexOf("KM1M4BF") === 0) {
                // real value version
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    // GPIO_MDx->IOPnMD
                    if (gpio_MFPsNames[i].indexOf('IOP') !== -1) {
                        g_gpio_MFPsString += '    //' + parentRegisterAccess + "GPIO_MD" + gpio_MFPsNames[i][3] + '->IOPnMD = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
                    }
                    // DBG->SELSWD
                    else {
                        g_gpio_MFPsString += '    //' + parentRegisterAccess + 'DBG->SELSWD = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase().slice(-2) + 'UL;\r\n';
                    }
                }

                g_gpio_MFPsString += '\r\n';
                if (typeof NUTOOL_PER === 'undefined') {
                    g_gpio_MFPsString += '    /* If the macros do not exist in your project, please refer to the corresponding header file in Header folder of the tool package */\r\n';
                }
                g_gpio_MFPsStringForFunctionalTest = "";
                // using defines
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    // GPIO_MDx->IOPnMD
                    if (gpio_MFPsNames[i].indexOf('IOP') !== -1) {
                        if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0) {
                            g_gpio_MFPsString += '    ' + parentRegisterAccess + "GPIO_MD" + gpio_MFPsNames[i][3] + '->IOPnMD = ';
                            g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + '    ' + parentRegisterAccess + "GPIO_MD" + gpio_MFPsNames[i][3] + '->IOPnMD = ';

                            for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                                if (j !== 0) {
                                    g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                                    g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                                }
                                else {
                                    g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';\r\n';
                                    g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';';
                                }
                            }
                        }
                        else {
                            g_gpio_MFPsString += '    ' + parentRegisterAccess + "GPIO_MD" + gpio_MFPsNames[i][3] + '->IOPnMD = 0x00000000;\r\n';
                        }
                    }
                    // DBG->SELSWD
                    else {
                        if (decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]) == 0) {
                            g_gpio_MFPsString += '    ' + parentRegisterAccess + 'DBG->SELSWD = DEBUG_INTERFACE_DISABLE;\r\n';
                        } else {
                            g_gpio_MFPsString += '    ' + parentRegisterAccess + 'DBG->SELSWD = DEBUG_INTERFACE_ENABLE;\r\n';
                        }
                    }
                }
            }
            else if (g_chipType.indexOf("KM1M7CF") === 0) {
                // real value version
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    // GPIO_MDx->IOPnMD
                    if (gpio_MFPsNames[i].indexOf('IOP') !== -1) {
                        g_gpio_MFPsString += '    //' + parentRegisterAccess + "GPIO_MD" + gpio_MFPsNames[i][3] + '->IOPnMD = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
                    }
                    // FPSA/Bxx->FPSA/Bn_SEL
                    else {
                        g_gpio_MFPsString += '    //' + parentRegisterAccess + gpio_MFPsNames[i].slicePriorToX('_') + '->FPS' + gpio_MFPsNames[i][3] + 'n_SEL = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
                    }
                }

                g_gpio_MFPsString += '\r\n';
                if (typeof NUTOOL_PER === 'undefined') {
                    g_gpio_MFPsString += '    /* If the macros do not exist in your project, please refer to the corresponding header file in Header folder of the tool package */\r\n';
                }
                g_gpio_MFPsStringForFunctionalTest = "";
                // using defines
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    // GPIO_MDx->IOPnMD
                    if (gpio_MFPsNames[i].indexOf('IOP') !== -1) {
                        if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0) {
                            g_gpio_MFPsString += '    ' + parentRegisterAccess + "GPIO_MD" + gpio_MFPsNames[i][3] + '->IOPnMD = ';
                            g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + '    ' + parentRegisterAccess + "GPIO_MD" + gpio_MFPsNames[i][3] + '->IOPnMD = ';

                            for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                                if (j !== 0) {
                                    g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                                    g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                                }
                                else {
                                    g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';\r\n';
                                    g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';';
                                }
                            }
                        }
                        else {
                            g_gpio_MFPsString += '    ' + parentRegisterAccess + "GPIO_MD" + gpio_MFPsNames[i][3] + '->IOPnMD = 0x00000000;\r\n';
                        }
                    }
                    // FPSA/Bxx->FPSA/Bn_SEL
                    else {
                        if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0) {
                            g_gpio_MFPsString += '    ' + parentRegisterAccess + gpio_MFPsNames[i].slicePriorToX('_') + '->FPS' + gpio_MFPsNames[i][3] + 'n_SEL = ';
                            g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + '    ' + parentRegisterAccess + gpio_MFPsNames[i].slicePriorToX('_') + '->FPS' + gpio_MFPsNames[i][3] + 'n_SEL = ';

                            for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                                if (j !== 0) {
                                    g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                                    g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                                }
                                else {
                                    g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';\r\n';
                                    g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';';
                                }
                            }
                        }
                        else {
                            g_gpio_MFPsString += '    ' + parentRegisterAccess + gpio_MFPsNames[i].slicePriorToX('_') + '->FPS' + gpio_MFPsNames[i][3] + 'n_SEL = 0x00000000;\r\n';
                        }
                    }
                }
            }
            else if (g_chipType.indexOf("M55M1") === 0) {
                g_gpio_MFPsString += '\r\n';
                g_gpio_MFPsStringForFunctionalTest = "";
                for (i = 0, max = g_pinCurrentDescription.length; i < max; i += 1) {
                    if (g_pinCurrentDescription[i] != '') {
                        g_gpio_MFPsString += '    SET_' + g_pinCurrentDescription[i] + '_' + NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i].replace('.', '') + '();  // Pin: ' + (i + 1) + '\r\n';
                        g_gpio_MFPsStringForFunctionalTest += '    SET_' + g_pinCurrentDescription[i] + '_' + NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i].replace('.', '') + '();  // Pin: ' + (i + 1) + '\r\n';
                    }
                }
            }
            else if (g_includeHeadFileString.indexOf(".dtsi") !== -1) {
                g_gpio_MFPsString += '/ {\r\n    model = "Nuvoton ' + g_chipType + '";\r\n};\r\n\r\n';
                g_gpio_MFPsStringForFunctionalTest = "";

                gpio_MFPsNames = getPropertyNames(gpio_MFPsArray);
                gpio_MFPsNames.sort();
                // using defines
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    functionName = gpio_MFPsNames[i].toLowerCase();
                    g_gpio_MFPsString += '&' + functionName + ' {\r\n    pinctrl-names = "default";\r\n    pinctrl-0 = <&pinctrl_' + functionName + '>;\r\n};\r\n\r\n';
                }
                g_gpio_MFPsString += '&pinctrl {\r\n';
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    defineName = 0;
                    for (j = 0, maxJ = gpio_MFPsArray[gpio_MFPsNames[i]].length; j < maxJ; j += 1) {
                        if (gpio_MFPsArray[gpio_MFPsNames[i]][j].length > defineName) {
                            defineName = gpio_MFPsArray[gpio_MFPsNames[i]][j].length;
                        }
                    }
                    defineName += 1;

                    functionName = gpio_MFPsNames[i].toLowerCase();
                    g_gpio_MFPsString += '    ' + functionName + ' {\r\n        pinctrl_' + functionName + ': ' + functionName + 'grp {\r\n            nuvoton,pins =\r\n';
                    g_gpio_MFPsStringForFunctionalTest += '    ' + functionName + ' {\r\n        pinctrl_' + functionName + ': ' + functionName + 'grp {\r\n            nuvoton,pins =\r\n';
                    for (j = 0, maxJ = gpio_MFPsArray[gpio_MFPsNames[i]].length; j < maxJ; j += 1) {
                        g_gpio_MFPsString += '                <' + gpio_MFPsArray[gpio_MFPsNames[i]][j];
                        g_gpio_MFPsStringForFunctionalTest += '                <' + gpio_MFPsArray[gpio_MFPsNames[i]][j];
                        for (m = 0, maxM = defineName - gpio_MFPsArray[gpio_MFPsNames[i]][j].length; m < maxM; m += 1) {
                            g_gpio_MFPsString += ' ';
                            g_gpio_MFPsStringForFunctionalTest += ' ';
                        }
                        g_gpio_MFPsString += '&pcfg_default>';
                        g_gpio_MFPsStringForFunctionalTest += '&pcfg_default>';
                        if (j !== maxJ - 1) {
                            g_gpio_MFPsString += ',\r\n';
                            g_gpio_MFPsStringForFunctionalTest += ',\r\n';
                        }
                        else {
                            g_gpio_MFPsString += ';\r\n';
                            g_gpio_MFPsStringForFunctionalTest += ',\r\n';
                        }
                    }
                    if (i !== max - 1) {
                        g_gpio_MFPsString += '        };\r\n    };\r\n\r\n';
                    }
                    else {
                        g_gpio_MFPsString += '        };\r\n    };\r\n';
                    }
                }
                g_gpio_MFPsString += '};\r\n\r\n';
            }
            else {
                // real value version
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    g_gpio_MFPsString += '    //' + parentRegisterAccess + gpio_MFPsNames[i] + ' = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
                }

                g_gpio_MFPsString += '\r\n';
                if (typeof NUTOOL_PER === 'undefined') {
                    g_gpio_MFPsString += '    /* If the macros do not exist in your project, please refer to the corresponding header file in Header folder of the tool package */\r\n';
                }
                g_gpio_MFPsStringForFunctionalTest = "";
                // using defines
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0) {
                        g_gpio_MFPsString += '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' = ';
                        g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' = ';

                        for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                            if (j !== 0) {
                                g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                                g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ' | ';
                            }
                            else {
                                g_gpio_MFPsString += gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';\r\n';
                                g_gpio_MFPsStringForFunctionalTest = g_gpio_MFPsStringForFunctionalTest + gpio_MFPsArray[gpio_MFPsNames[i]][j] + ';';
                            }
                        }
                    }
                    else {
                        g_gpio_MFPsString += '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' = 0x00000000;\r\n';
                    }
                }
            }
        }
        else {
            for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                g_gpio_MFPsString += '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
            }
            // reset innerHTML
            $("#NUC_PinConfiguration_Canvas")[0].setAttribute('innerHTML', ""); // for functional test
        }
        // concatenate g_pinCurrentModule into a string
        g_pinCurrentStateString = "";
        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                g_pinCurrentStateString += 'Pin' + updatePinName(i) + ':' + updatePinDescription(g_pinCurrentDescription[i - 1]) + '\r\n';
            }
            else {
                pinDescription = g_chipPinDescriptions[i - 1].slice(g_chipPinDescriptions[i - 1].indexOf(g_pinCurrentModule[i - 1]));
                pinDescription = pinDescription.slicePriorToX('/');

                g_pinCurrentStateString += 'Pin' + updatePinName(i) + ':' + pinDescription + '\r\n';
            }
        }
        // concatenate g_userDefinedPin into a string
        g_userDefinedPinString = "/* User-defined pins */\r\n";
        for (pinDescription in g_userDefinedPin) {
            if (g_userDefinedPin.hasOwnProperty(pinDescription) &&
                g_userDefinedPin[pinDescription].trim() !== '') {
                defineName = g_userDefinedPin[pinDescription].replace(/\s/g, '_').replace(/[`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '_').toUpperCase();
                if (isNumeric(defineName.charAt(0))) {
                    defineName = '_' + defineName;
                }
                g_userDefinedPinString += '#define ' + defineName + ' ' + pinDescription.replace(/[.]/g, '').replace(/\s/g, '_').replace(/[`~!@#$%^&*()|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '_') + '\r\n';
            }
        }
        if (g_userDefinedPinString === "/* User-defined pins */\r\n") {
            g_userDefinedPinString = "";
        }
        // for functional test
        if (!g_bReadyForRelease) {
            // in some MCUs, they do not provide the define of STADC.
            if (functionName === "STADC" && g_gpio_MFPsStringForFunctionalTest === "") {
                g_gpio_MFPsStringForFunctionalTest = "We do not Have the Define for STADC;";
            }

            $("#NUC_PinConfiguration_Canvas")[0].setAttribute('innerHTML', g_gpio_MFPsStringForFunctionalTest); // for functional test
        }
    }

    function getModularizedDataUsedToCreateText() {
        var i,
            j,
            m,
            n,
            max,
            maxJ,
            maxM,
            maxN,
            gpio_MFPsNames = [],
            gpio_MFPsDefineNames = [],
            pinDescription,
            usedPinsCatalogedByGPIO = [],
            usedModules = [],
            usedModuleName = "",
            module,
            pin,
            gpio,
            gpioNames = [],
            gpio_MFPsArray = [],
            gpio_MFPsArrayCheck,
            gpio_MFPsMskGenerator,
            pinName,
            functionName,
            registerName,
            FPSRegisterName,
            FPSDefineName,
            defineName,
            MskName,
            parentRegisterAccess = 'SYS->',
            gpiosDefinesElement,
            local_gpio_MFPsString,
            bNotFirst,
            bHasCode,
            bReturn;

        var reocrdedPorjectName = localStorage.getItem("ProjectName");
        gpio_MFPsArrayCheck = function (gpio_MFPsArrayInput, usedModuleName, usedModulesElement) {
            bReturn = false;
            // 只要有以下任一情況出現即為合法字串
            if (gpio_MFPsArrayInput.indexOf("_" + usedModuleName) !== -1 ||
                gpio_MFPsArrayInput.indexOf(usedModuleName + ":") !== -1 ||
                gpio_MFPsArrayInput.indexOf(usedModuleName + "_") === 0 ||
                gpio_MFPsArrayInput.indexOf("," + usedModuleName + "_") !== -1 ||
                (gpio_MFPsArrayInput.lastIndexOf(usedModuleName) !== -1 && (gpio_MFPsArrayInput.lastIndexOf(usedModuleName) + usedModuleName.length === gpio_MFPsArrayInput.length) ||
                    (usedModuleName === "GPIO" && gpio_MFPsArrayInput.indexOf("_MFP_G" + usedModulesElement) !== -1) /* for NANO100AN and NANO100BN */) ||
                (gpio_MFPsArrayInput.indexOf(usedModuleName) === 0 && gpio_MFPsArrayInput.indexOf("_FPS") !== -1)  // KM1M7CF
            ) {
                bReturn = true;
            }

            // 身為GPIO，必須有這些字串其一在gpio_MFPsArrayInput中
            if (usedModuleName === "GPIO" &&
                gpio_MFPsArrayInput.indexOf("SYS_G" + usedModulesElement) === -1 &&
                gpio_MFPsArrayInput.indexOf("SYS_MFP_" + usedModulesElement) === -1 &&
                gpio_MFPsArrayInput.indexOf("SYS_" + usedModulesElement) === -1 &&
                gpio_MFPsArrayInput.indexOf("MD_" + usedModulesElement) === -1 && // KM1M7AF & KM1M7BF & KM1M4BF
                gpio_MFPsArrayInput.indexOf("GPIO_" + usedModulesElement) === -1 // KM1M7CF
            ) {
                bReturn = false;
            }

            return bReturn;
        };

        gpio_MFPsMskGenerator = function (MFPDefineName) {
            if (MFPDefineName.indexOf("SYS_MFP") === 0) {
                // M051DN_DE
                // M058S
                // M0519
                // MINI58
                MskName = MFPDefineName.substring(0, 11) + '_Msk';
            }
            else if (MFPDefineName.indexOf("SYS_GP") === 0 &&
                MFPDefineName.indexOf("_MFP_") !== -1) {
                if (MFPDefineName.indexOf("_MFPL_") === -1 && MFPDefineName.indexOf("_MFPH_") === -1) {
                    // MINI57
                    MskName = MFPDefineName.substring(0, 15) + '_Msk';
                }
                else {
                    // NUC123AE
                    MskName = MFPDefineName.slicePriorToX("MFP_") + 'MFP_Msk';
                }
            }
            else if (MFPDefineName.indexOf("SYS_GP") === -1 &&
                MFPDefineName.indexOf("_MFP_") !== MFPDefineName.lastIndexOf("_MFP_")) {
                // NANO100BN
                MskName = MFPDefineName.substring(0, MFPDefineName.lastIndexOf("_MFP_") + 5) + 'Msk';
            }
            else if (MFPDefineName.indexOf("GPIO_IO") === 0) {
                // KM1M7AF & KM1M7BF & KM1M4BF
                MskName = MFPDefineName.substring(0, MFPDefineName.lastIndexOf("MD_") + 3) + 'Msk';
            }
            else if (MFPDefineName.indexOf("GPIO_P") === 0) {
                // KM1M7CF
                MskName = 'GPIO_MD_IOPnMD_Pn' + MFPDefineName.substring(7, MFPDefineName.lastIndexOf("GPIO_P") + 8) + 'MD_Msk';
            }
            else if (MFPDefineName.indexOf("GPIO_FPS") === 0) {
                // KM1M7CF-FPS
                MskName = '';
            }
            else {
                MskName = MFPDefineName.slicePriorToX("MFP_") + 'MFP_Msk';
            }

            return MskName;
        };

        // parentRegisterAccess may differ between NTC and NTCJ
        if (NUTOOL_PIN.g_cfg_gpiosDefines.length !== 0 &&
            (NUTOOL_PIN.g_cfg_gpiosDefines[0].f.length > 1 && NUTOOL_PIN.g_cfg_gpiosDefines[0].f[1].indexOf("GPIO:GPIO_") === 0)) {
            parentRegisterAccess = '';
        }

        if (typeof NUTOOL_PER !== 'undefined') {
            // generate the include header string
            getIncludeHeadFile();
        }
        if ((NUTOOL_PIN.g_pinFunctionString === 'h' || NUTOOL_PIN.g_pinFunctionString === 'dtsi') &&
            g_includeHeadFileString.sliceAfterX('.') !== NUTOOL_PIN.g_pinFunctionString) {
            g_includeHeadFileString = g_includeHeadFileString.slicePriorToX('.') + '.' + NUTOOL_PIN.g_pinFunctionString + '"\r\n';
        }
        gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);
        gpio_MFPsNames.sort();
        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            g_read_gpio_MFPs[gpio_MFPsNames[i]] = g_gpio_MFPs[gpio_MFPsNames[i]];
            gpio_MFPsArray[gpio_MFPsNames[i]] = [];
        }

        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                pin = i;
                pinDescription = g_pinCurrentDescription[i - 1];
                gpio = specialModuleNaming(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1]);

                if (typeof (usedPinsCatalogedByGPIO[gpio]) === 'undefined') {
                    usedPinsCatalogedByGPIO[gpio] = [];
                    usedPinsCatalogedByGPIO[gpio][0] = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1] + ':' + pinDescription;
                }
                else {
                    usedPinsCatalogedByGPIO[gpio].push(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1] + ':' + pinDescription);
                }
            }
        }
        gpioNames = getPropertyNames(usedPinsCatalogedByGPIO).sort(natualSort);
        for (i = 0, max = gpioNames.length; i < max; i += 1) {
            usedPinsCatalogedByGPIO[gpioNames[i]].sort(natualSort);
            for (j = 0, maxJ = usedPinsCatalogedByGPIO[gpioNames[i]].length; j < maxJ; j += 1) {
                pinName = usedPinsCatalogedByGPIO[gpioNames[i]][j];
                functionName = pinName;

                pinName = pinName.slicePriorToX(':');
                functionName = functionName.sliceAfterX(':');
                module = specialModuleNaming(functionName.slicePriorToX('_')).toString();
                if (usedModules.indexOf(module) === -1) {
                    usedModules.push(module);
                }
                if (functionName === pinName) {
                    functionName = 'GPIO';
                }

                for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpiosDefines.length; m < maxM; m += 1) {
                    if (pinName === NUTOOL_PIN.g_cfg_gpiosDefines[m].f[0]) {
                        for (n = 1, maxN = NUTOOL_PIN.g_cfg_gpiosDefines[m].f.length; n < maxN; n += 1) {
                            if (NUTOOL_PIN.g_cfg_gpiosDefines[m].f[n].indexOf(functionName + ':') === 0) {
                                gpiosDefinesElement = NUTOOL_PIN.g_cfg_gpiosDefines[m].f[n];
                                do {
                                    if (gpiosDefinesElement.indexOf('/') === -1) {
                                        registerName = gpiosDefinesElement;
                                        gpiosDefinesElement = "";
                                    }
                                    else {
                                        registerName = gpiosDefinesElement.slicePriorToX('/');
                                        gpiosDefinesElement = gpiosDefinesElement.sliceAfterX('/');
                                    }
                                    defineName = registerName;

                                    registerName = registerName.sliceAfterX('@').slicePriorToX('%');
                                    if (defineName.indexOf(':') === -1) {
                                        defineName = defineName.slicePriorToX('@');
                                    }
                                    else {
                                        functionName = defineName.slicePriorToX(':');
                                        defineName = defineName.slicePriorToX('@');
                                    }
                                    if (typeof gpio_MFPsArray[registerName] !== 'undefined') {
                                        gpio_MFPsArray[registerName].push(defineName);
                                    }
                                }
                                while (gpiosDefinesElement !== "");

                                break;  // 不找剩下的define
                            }
                        }

                        break;  // 不找剩下的pin
                    }
                }

                // Handle define of FPS registers
                if (g_chipType.indexOf("KM1M7CF") === 0) {
                    for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpios_FPS_mapping.length; m < maxM; m += 1) {
                        if (NUTOOL_PIN.g_cfg_gpios_FPS_mapping[m].slicePriorToX(':').indexOf(pinName) !== -1) {
                            FPSRegisterName = NUTOOL_PIN.g_cfg_gpios_FPS_mapping[m].sliceAfterX(':') + '_SEL';
                            break;
                        }
                    }
                    if (FPSRegisterName != undefined) {
                        if (FPSRegisterName.indexOf('FPSA') !== -1) {
                            for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpios_FPSA_defines.length; m < maxM; m += 1) {
                                if (NUTOOL_PIN.g_cfg_gpios_FPSA_defines[m].slicePriorToX(':').indexOf(functionName) !== -1) {
                                    FPSDefineName = NUTOOL_PIN.g_cfg_gpios_FPSA_defines[m];
                                    break;
                                }
                            }
                        } else if (FPSRegisterName.indexOf('FPSB') !== -1) {
                            for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpios_FPSB_defines.length; m < maxM; m += 1) {
                                if (NUTOOL_PIN.g_cfg_gpios_FPSB_defines[m].slicePriorToX(':').indexOf(functionName) !== -1) {
                                    FPSDefineName = NUTOOL_PIN.g_cfg_gpios_FPSB_defines[m];
                                    break;
                                }
                            }
                        }
                        if (FPSDefineName != undefined && typeof gpio_MFPsArray[FPSRegisterName] !== 'undefined') {
                            gpio_MFPsArray[FPSRegisterName].push(FPSDefineName);
                        }
                    }
                }
            }
        }
        usedModules.sort(natualSort);
        // concatenate g_gpio_MFPsString into a string
        g_gpio_MFPsString = "";
        g_gpio_MFPsStringForFunctionalTest1 = "";

        if (g_chipType.indexOf("M55M1") === 0) {
            for (m = 0, maxM = usedModules.length; m < maxM; m += 1) {
                if (isGPIOPin(usedModules[m] + ".0")) {
                    usedModuleName = "GPIO";
                }
                else {
                    usedModuleName = usedModules[m];
                }
                // init
                local_gpio_MFPsString = "void " + reocrdedPorjectName + "_init_" + usedModules[m].toLowerCase() + "(void)\r\n{\r\n";
                // using defines
                bHasCode = false;
                // gpio_MFPsNames: MFP registers的名稱(e.g. GPA_MFPH)
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    // gpio_MFPsArray[gpio_MFPsNames[i]]:GPIO define(TM09B:GPIO_P60MD_TM09B)
                    if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0 &&
                        gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]].join(), usedModuleName, usedModules[m])) {
                        bNotFirst = false;
                        bHasCode = true;
                        // 設定IP
                        for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                            if (gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]][j], usedModuleName, usedModules[m])) {
                                if (bNotFirst) {
                                    local_gpio_MFPsString += '();\r\n';
                                    g_gpio_MFPsStringForFunctionalTest1 += '();<br />';
                                }
                                defineName = gpio_MFPsArray[gpio_MFPsNames[i]][j].slicePriorToX(':');
                                console.log(defineName);
                                var pin = gpio_MFPsArray[gpio_MFPsNames[i]][j].slicePriorToX('MFP_').sliceAfterX('_MFP').sliceAfterX('_');
                                console.log(pin);
                                local_gpio_MFPsString += '    SET_' + defineName + '_' + pin;
                                g_gpio_MFPsStringForFunctionalTest1 += '    SET_' + defineName + '_' + pin;
                                bNotFirst = true;
                            }
                        }
                        local_gpio_MFPsString += '();\r\n';
                        g_gpio_MFPsStringForFunctionalTest1 += '();<br />';
                    }
                }
                local_gpio_MFPsString += "\r\n    return;\r\n}\r\n\r\n";
                if (!bHasCode) {
                    g_gpio_MFPsStringForFunctionalTest1 += usedModules[m] + ' did not generate modularized code!!<br />';
                }
                else {
                    g_gpio_MFPsString += local_gpio_MFPsString;
                }

                // deinit
                local_gpio_MFPsString = "void " + reocrdedPorjectName + "_deinit_" + usedModules[m].toLowerCase() + "(void)\r\n{\r\n";
                // using defines
                bHasCode = false;
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0 &&
                        gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]].join(), usedModuleName, usedModules[m])) {
                        bNotFirst = false;
                        bHasCode = true;
                        for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                            if (gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]][j], usedModuleName, usedModules[m])) {
                                if (bNotFirst) {
                                    local_gpio_MFPsString += '();\r\n';
                                }
                                var pin = gpio_MFPsArray[gpio_MFPsNames[i]][j].slicePriorToX('MFP_').sliceAfterX('_MFP').sliceAfterX('_');
                                // 預設deinit都回到GPIO
                                local_gpio_MFPsString += '    SET_GPIO_' + pin;
                                g_gpio_MFPsStringForFunctionalTest1 += '    SET_GPIO_' + pin;
                                bNotFirst = true;
                            }
                        }
                        local_gpio_MFPsString += '();\r\n';
                    }
                }
                local_gpio_MFPsString += "\r\n    return;\r\n}\r\n\r\n";
                if (bHasCode) {
                    g_gpio_MFPsString += local_gpio_MFPsString;
                }
            }
        } else {
            for (m = 0, maxM = usedModules.length; m < maxM; m += 1) {
                if (isGPIOPin(usedModules[m] + ".0")) {
                    usedModuleName = "GPIO";
                }
                else {
                    usedModuleName = usedModules[m];
                }
                local_gpio_MFPsString = "void " + reocrdedPorjectName + "_init_" + usedModules[m].toLowerCase() + "(void)\r\n{\r\n";
                // using defines
                bHasCode = false;
                // gpio_MFPsNames: MFP registers的名稱(e.g. GPA_MFPH)
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    // gpio_MFPsArray[gpio_MFPsNames[i]]:GPIO define(TM09B:GPIO_P60MD_TM09B)
                    if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0 &&
                        gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]].join(), usedModuleName, usedModules[m])) {
                        bNotFirst = false;
                        bHasCode = true;
                        local_gpio_MFPsString += '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' &= ~(';
                        g_gpio_MFPsStringForFunctionalTest1 += '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' &= ~(';
                        for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                            if (gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]][j], usedModuleName, usedModules[m])) {
                                if (bNotFirst) {
                                    local_gpio_MFPsString += ' | ';
                                    g_gpio_MFPsStringForFunctionalTest1 += ' | ';
                                }
                                defineName = gpio_MFPsArray[gpio_MFPsNames[i]][j].sliceAfterX(':');
                                local_gpio_MFPsString += gpio_MFPsMskGenerator(defineName);
                                g_gpio_MFPsStringForFunctionalTest1 += gpio_MFPsMskGenerator(defineName);
                                bNotFirst = true;
                            }
                        }
                        local_gpio_MFPsString += ');\r\n';
                        g_gpio_MFPsStringForFunctionalTest1 += ');<br />';

                        bNotFirst = false;
                        local_gpio_MFPsString += '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' |= (';
                        g_gpio_MFPsStringForFunctionalTest1 += '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' |= (';
                        for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                            if (gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]][j], usedModuleName, usedModules[m])) {
                                if (bNotFirst) {
                                    local_gpio_MFPsString += ' | ';
                                    g_gpio_MFPsStringForFunctionalTest1 += ' | ';
                                }
                                defineName = gpio_MFPsArray[gpio_MFPsNames[i]][j].sliceAfterX(':');
                                local_gpio_MFPsString += defineName;
                                g_gpio_MFPsStringForFunctionalTest1 += defineName;
                                bNotFirst = true;
                            }
                        }
                        local_gpio_MFPsString += ');\r\n';
                        g_gpio_MFPsStringForFunctionalTest1 += ');<br />';
                    }
                }
                local_gpio_MFPsString += "\r\n    return;\r\n}\r\n\r\n";
                if (!bHasCode) {
                    g_gpio_MFPsStringForFunctionalTest1 += usedModules[m] + ' did not generate modularized code!!<br />';
                }
                else {
                    g_gpio_MFPsString += local_gpio_MFPsString;
                }

                local_gpio_MFPsString = "void " + reocrdedPorjectName + "_deinit_" + usedModules[m].toLowerCase() + "(void)\r\n{\r\n";
                // using defines
                bHasCode = false;
                for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                    if (gpio_MFPsArray[gpio_MFPsNames[i]].length > 0 &&
                        gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]].join(), usedModuleName, usedModules[m])) {
                        bNotFirst = false;
                        bHasCode = true;
                        local_gpio_MFPsString += '    ' + parentRegisterAccess + gpio_MFPsNames[i] + ' &= ~(';
                        for (j = gpio_MFPsArray[gpio_MFPsNames[i]].length - 1; j >= 0; j = j - 1) {
                            if (gpio_MFPsArrayCheck(gpio_MFPsArray[gpio_MFPsNames[i]][j], usedModuleName, usedModules[m])) {
                                if (bNotFirst) {
                                    local_gpio_MFPsString += ' | ';
                                }
                                defineName = gpio_MFPsArray[gpio_MFPsNames[i]][j].sliceAfterX(':');
                                local_gpio_MFPsString += gpio_MFPsMskGenerator(defineName);
                                bNotFirst = true;
                            }
                        }
                        local_gpio_MFPsString += ');\r\n';
                    }
                }
                local_gpio_MFPsString += "\r\n    return;\r\n}\r\n\r\n";
                if (bHasCode) {
                    g_gpio_MFPsString += local_gpio_MFPsString;
                }
            }
        }

        if (typeof NUTOOL_PER === 'undefined') {
            g_gpio_MFPsString += "void " + reocrdedPorjectName + "_init(void)\r\n{\r\n";
        }
        else {
            g_gpio_MFPsString += "void Pin_Init(void)\r\n{\r\n";
        }
        // real value version
        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            g_gpio_MFPsString += '    //' + parentRegisterAccess + gpio_MFPsNames[i] + ' = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + 'UL;\r\n';
        }
        g_gpio_MFPsString += "\r\n";
        for (i = 0, max = usedModules.length; i < max; i += 1) {
            g_gpio_MFPsString += "    " + reocrdedPorjectName + "_init_" + usedModules[i].toLowerCase() + "();\r\n";
        }
        g_gpio_MFPsString += "\r\n    return;\r\n}\r\n\r\n";

        if (typeof NUTOOL_PER === 'undefined') {
            g_gpio_MFPsString += "void " + reocrdedPorjectName + "_deinit(void)\r\n{\r\n";
        }
        else {
            g_gpio_MFPsString += "void Pin_Deinit(void)\r\n{\r\n";
        }
        for (i = 0, max = usedModules.length; i < max; i += 1) {
            g_gpio_MFPsString += "    " + reocrdedPorjectName + "_deinit_" + usedModules[i].toLowerCase() + "();\r\n";
        }
        g_gpio_MFPsString += "\r\n    return;\r\n}";

        // concatenate g_gpio_MFPsString1 into a string
        g_gpio_MFPsString1 = "";
        for (i = 0, max = usedModules.length; i < max; i += 1) {
            g_gpio_MFPsString1 += "void " + reocrdedPorjectName + "_init_" + usedModules[i].toLowerCase() + "(void);\r\n";
            g_gpio_MFPsString1 += "void " + reocrdedPorjectName + "_deinit_" + usedModules[i].toLowerCase() + "(void);\r\n";
        }
        if (typeof NUTOOL_PER === 'undefined') {
            g_gpio_MFPsString1 += "void " + reocrdedPorjectName + "_init(void);\r\n";
            g_gpio_MFPsString1 += "void " + reocrdedPorjectName + "_deinit(void);\r\n";
        }
        else {
            g_gpio_MFPsString1 += "void Pin_Init(void);\r\n";
            g_gpio_MFPsString1 += "void Pin_Deinit(void);\r\n";
        }
        // concatenate g_userDefinedPin into a string
        g_userDefinedPinString = "/* User-defined pins */\r\n";
        for (pinDescription in g_userDefinedPin) {
            if (g_userDefinedPin.hasOwnProperty(pinDescription) &&
                g_userDefinedPin[pinDescription].trim() !== '') {
                defineName = g_userDefinedPin[pinDescription].replace(/\s/g, '_').replace(/[`~!@#$%^&*()|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '_').toUpperCase();
                if (isNumeric(defineName.charAt(0))) {
                    defineName = '_' + defineName;
                }
                g_userDefinedPinString += '#define ' + defineName + ' ' + pinDescription.replace(/[.]/g, '').replace(/\s/g, '_').replace(/[`~!@#$%^&*()|+\-=?;:'",<>\{\}\[\]\\\/]/gi, '_') + '\r\n';
            }
        }
        if (g_userDefinedPinString === "/* User-defined pins */\r\n") {
            g_userDefinedPinString = "";
        }
        // de-reference
        gpio_MFPsNames = null;
        gpio_MFPsDefineNames = null;
        usedPinsCatalogedByGPIO = null;
        usedModules = null;
        gpioNames = null;
        gpio_MFPsArray = null;
        gpio_MFPsDefine = null;
    }

    function retrieveGenerateCodeContent() {
        return g_gpio_MFPsStringForFunctionalTest1;
    }

    function verifyMFPName(inputName) {
        var bResult = false;
        //(/^\d+$/.test(newText.slice(newText.toLowerCase().indexOf('0x') + 2)))
        if (g_chipType === "NANO100AN" || g_chipType === "NANO100BN" || g_chipType === "NANO112") {
            if (inputName.slice(inputName.toLowerCase().indexOf('0x') + 2).length === 8 &&
                inputName.toLowerCase().indexOf('p') === 0 &&
                inputName.toLowerCase().lastIndexOf('_mfp') === 4 &&
                inputName.toLowerCase().lastIndexOf(':0x') === 8) {

                bResult = true;
            }
        }
        else if (g_chipType === "NM1500" || g_chipType === "M0519" ||
            g_chipType === "M051DN_DE" || g_chipType === "M051BN" || g_chipType === "M051AN" || g_chipType === "M058S" ||
            g_chipType === "MINI51AN" || g_chipType === "MINI51DE" || g_chipType === "MINI55" || g_chipType === "MINI58" ||
            g_chipType === "NUC029AE" || g_chipType === "NUC029TAE" || g_chipType === "NUC029AN" ||
            g_chipType === "NM1200") {
            if (inputName.slice(inputName.toLowerCase().indexOf('0x') + 2).length === 8 &&
                inputName.toLowerCase().indexOf('p') === 0 &&
                inputName.toLowerCase().lastIndexOf('_mfp') === 2 &&
                inputName.toLowerCase().lastIndexOf(':0x') === 6) {

                bResult = true;
            }
        }
        else if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
            || g_chipType.indexOf("MUG51") === 0 || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0) {
            if (inputName.slice(inputName.toLowerCase().indexOf('0x') + 2).length === 8 &&
                inputName.toLowerCase().lastIndexOf('p') === 0 &&
                inputName.toLowerCase().lastIndexOf('mf') === 2 &&
                inputName.toLowerCase().lastIndexOf(':0x') === 12) {

                bResult = true;
            }
        }
        else if (g_chipType.indexOf("KM1M7CF") === 0) {
            // IOPXMD
            if (inputName.slice(inputName.toLowerCase().indexOf('0x') + 2).length === 8 &&
                inputName.toLowerCase().lastIndexOf('iop') === 0 &&
                inputName.toLowerCase().lastIndexOf('md') === 4) {

                bResult = true;
            }
            // FPSAXX_SEL or FPSBXX_SEL
            else if (inputName.toLowerCase().lastIndexOf('fps') === 0 &&
                inputName.toLowerCase().lastIndexOf('_sel') === 6) {
                bResult = true;
            }
        }
        else if (g_chipType.indexOf("KM1M7AF") === 0 || g_chipType.indexOf("KM1M7BF") === 0 || g_chipType.indexOf("KM1M4BF") === 0) {
            if (inputName.slice(inputName.toLowerCase().indexOf('0x') + 2).length === 8 &&
                inputName.toLowerCase().lastIndexOf('iop') === 0 &&
                inputName.toLowerCase().lastIndexOf('md') === 4 &&
                inputName.toLowerCase().lastIndexOf(':0x') === 6) {

                bResult = true;
            }
        }
        else {
            if (inputName.slice(inputName.toLowerCase().indexOf('0x') + 2).length === 8 &&
                inputName.toLowerCase().lastIndexOf('gp') === 0 &&
                inputName.toLowerCase().lastIndexOf('_mfp') === 3 &&
                (inputName.toLowerCase().lastIndexOf(':0x') === 7 || inputName.toLowerCase().lastIndexOf(':0x') === 8)) {

                bResult = true;
            }
        }

        return bResult;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    function drawPinColorAndShowChosenPinFeature() {
        var i,
            j,
            k,
            m,
            max,
            maxJ,
            maxK,
            maxM,
            gpio_MFPsNames = [],
            local_gpio_MFPs = [],
            bL,
            registerValue = 0,
            mask,
            mfpValue,
            pin,
            pinName,
            pinNumber,
            pinChosenFeature,
            cfg_gpiosIndex;

        gpio_MFPsNames = getPropertyNames(g_pinCurrentDescription);
        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            pin = gpio_MFPsNames[i];
            pinName = g_pinCurrentDescription[pin];
            if (pinName !== "") {
                pin = parseInt(pin, 10);
                showChosenPinFeature(pin, pinName, false);

                // assertPins
                updatePinColor(pin + 1, g_colorForConfiguredByUser);
            }
        }

        // highlighted by the individual selections
        for (i = 0, max = g_pinsHighlightedByChipView.length; i < max; i += 1) {
            pin = g_pinsHighlightedByChipView[i];
            updatePinColor(pin, g_colorForConfiguredByUser);
        }

        // de-reference
        gpio_MFPsNames = [];
        local_gpio_MFPs = [];
        bL = null;
        registerValue = null;
        mask = null;
        mfpValue = null;
        pin = null;
        pinName = null;
        pinNumber = null;
        pinChosenFeature = null;
        cfg_gpiosIndex = null;
        i = null;
        j = null;
        k = null;
        m = null;
        max = null;
        maxJ = null;
        maxK = null;
        maxM = null;
    }

    function decimalToHex(d, padding) {
        var hex = Number(d).toString(16);
        padding = typeof (padding) === "undefined" || padding === null ? padding = 8 : padding;

        while (hex.length < padding) {
            hex = "0" + hex;
        }

        return hex;
    }

    function buildMFPTree() {
        var i,
            j,
            max,
            maxJ,
            gpio_MFPsNames = [],
            dataChildrenArray = [],
            dataChildren,
            jsonData = {},
            attr,
            $mfpTree = $("#mfpTree"),
            maxRegisterNameLength = 0,
            tempString;

        gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);
        // Do not sort KM1M7CF's MFP registers 因為IOP*MD要排在FPS前面.
        if (g_chipType !== "KM1M7CF") {
            gpio_MFPsNames.sort();
        }
        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            if (maxRegisterNameLength < gpio_MFPsNames[i].length) {
                maxRegisterNameLength = gpio_MFPsNames[i].length;
            }
        }
        // populate the json_data
        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            dataChildren = {};
            attr = {};

            tempString = gpio_MFPsNames[i];
            if (tempString.length < maxRegisterNameLength) {
                for (j = 0, maxJ = maxRegisterNameLength - tempString.length; j < maxJ; j += 1) {
                    tempString = tempString + g_unPrintedCharacters;
                }
            }

            attr.id = gpio_MFPsNames[i];
            dataChildren.data = tempString + ':0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]);
            dataChildren.attr = attr;

            dataChildrenArray[i] = dataChildren;
        }
        attr = {};

        attr.id = 'mfp_tree';
        decideUIlanguage();
        if (g_userSelectUIlanguage === "Simplified Chinese") {
            jsonData.data = 'MFP寄存器';
        }
        else if (g_userSelectUIlanguage === "Traditional Chinese") {
            jsonData.data = 'MFP暫存器';
        }
        else {
            jsonData.data = 'MFP Registers';
        }
        jsonData.attr = attr;
        jsonData.state = 'open';
        jsonData.children = dataChildrenArray;

        // create a tree of MFP registers
        if ((getPropertyNames(g_gpio_MFPs).length * 18 + 20) > (g_NUC_rootTree_Height / 3)) {
            g_MFPTreeHeight = g_NUC_rootTree_Height / 3;
        }
        else {
            g_MFPTreeHeight = getPropertyNames(g_gpio_MFPs).length * 18 + 20;
        }
        if ($mfpTree.length === 0) {
            $('#rootTree_Pin')[0].appendChild(ce("div", 'mfpTree', 'Loading...'));
            $mfpTree = $("#mfpTree");
            $('#ChipType').hover(function () { $(this).css('background-color', '#FAFAFA'); withdrawAllGreenPins(); }, function () { $(this).css('background-color', '#FFFFFF'); });
            $('#MCU').hover(function () { $(this).css('background-color', '#FAFAFA'); withdrawAllGreenPins(); }, function () { $(this).css('background-color', '#FFFFFF'); });
        }

        $mfpTree[0].setAttribute('style', 'background-color: #FFFFFF; float:left; overflow-y: scroll; width:' + g_NUC_TreeView_Width + 'px; height: ' + g_MFPTreeHeight + 'px; border-bottom: 5px solid #F2F2F2;');
        if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            if (g_bLessThanOrEqualIE8) {
                $mfpTree.hover(function () { $(this).css('background-color', '#FAFAFA'); withdrawAllGreenPins(); $('#pin_side_0').show(); $('#NUC_PinConfiguration_Canvas_Lining').hide(); }, function () { $(this).css('background-color', '#FFFFFF'); $('#pin_side_0').hide(); $('#NUC_PinConfiguration_Canvas_Lining').show(); });
            }
            else {
                $mfpTree.hover(function () { $(this).css('background-color', '#FAFAFA'); withdrawAllGreenPins(); $('#pin_side_0').css('opacity', '0.8'); $('#NUC_PinConfiguration_Canvas_Lining').css('opacity', '0'); }, function () { $(this).css('background-color', '#FFFFFF'); $('#pin_side_0').css('opacity', '0.1'); $('#NUC_PinConfiguration_Canvas_Lining').css('opacity', '1'); });
            }
        }
        else {
            $mfpTree.hover(function () { $(this).css('background-color', '#FAFAFA'); withdrawAllGreenPins(); }, function () { $(this).css('background-color', '#FFFFFF'); });
        }
        $mfpTree.jstree({
            "json_data": { "data": jsonData },
            "themes": {
                "theme": "default",
                "icons": false
            },
            'core': {
                'animation': 0
            },
            "plugins": ["themes", "json_data", "ui", "crrm"]
        }).bind("hover_node.jstree", function (e, data) {
            var currentNode = data.rslt.obj.attr("id"),
                regName = currentNode.slicePriorToX(":"),
                tooltipText = "";
            // display the tooltip around the mouse cursor
            if (g_bUserDisplayTooltip && NUTOOL_PIN.g_cfg_regDescriptions.hasOwnProperty(regName)) {
                if (NUTOOL_PIN.g_cfg_regDescriptions[regName].indexOf('nonexistent') === -1) {
                    if (g_userSelectUIlanguage === "Simplified Chinese") {
                        tooltipText = '位址: ';
                    }
                    else if (g_userSelectUIlanguage === "Traditional Chinese") {
                        tooltipText = '位址: ';
                    }
                    else {
                        tooltipText = 'Address: ';
                    }
                }
                tooltipText = tooltipText + NUTOOL_PIN.g_cfg_regDescriptions[regName];
                // $('#' + currentNode).simpletip({ fixed: true, offset: [60, 0] });
                // $('#' + currentNode).eq(0).simpletip().update(tooltipText);
                setTippy(regName, tooltipText, 'right');
            }
        }).bind("dblclick.jstree", function (e) {
            var node = $(e.target).closest("li"),
                id = node[0].id; //id of the selected node

            if (id === 'mfp_tree') {
                return;
            }
            if (typeof (g_gpio_MFPs.ALT_MFP) === 'undefined' && g_chipType !== 'MINI55' && g_chipType !== 'NM1200') {
                $mfpTree.jstree('rename', $("#" + id));
            }
            // $('#' + id).eq(0).simpletip().blockShow();
            // $('#' + id).eq(0).simpletip().hide();
        }).bind("rename.jstree", function (e, data) {
            var id = data.rslt.obj.attr("id"), //id of the selected node
                oldText = data.rslt.old_name,
                newText = data.rslt.new_name;

            if (verifyMFPName(newText)) {
                uncheckNodesByMFPregister(oldText);
                newText = checkNodesByMFPregister(newText);
                //$mfpTree.jstree('rename_node', $("#" + id), newText);
                updateMFPTree();
            }
            else {
                // replace incorrect input with the old content.
                $mfpTree.jstree('rename_node', $("#" + id), oldText);
            }
        }).bind('destroy.jstree', function () {
            // de-reference
            i = null;
            j = null;
            max = null;
            maxJ = null;
            gpio_MFPsNames = [];
            dataChildrenArray = [];
            dataChildren = null;
            jsonData = null;
            attr = null;
            $mfpTree = null;
            maxRegisterNameLength = null;
            tempString = null;
        });

        $mfpTree.css("font-size", '16px');
        $mfpTree.css("font-family", 'Monaco, Consolas, "Lucida Console", monospace;');
    }

    function updateMFPTree() {
        var i,
            j,
            max,
            maxJ,
            gpio_MFPsNames = [],
            maxRegisterNameLength = 0,
            tempString;

        gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);
        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            if (maxRegisterNameLength < gpio_MFPsNames[i].length) {
                maxRegisterNameLength = gpio_MFPsNames[i].length;
            }
        }

        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            tempString = gpio_MFPsNames[i];
            if (tempString.length < maxRegisterNameLength) {
                for (j = 0, maxJ = maxRegisterNameLength - tempString.length; j < maxJ; j += 1) {
                    tempString = tempString + g_unPrintedCharacters;
                }
            }

            $("#mfpTree").jstree('rename_node', $("#" + gpio_MFPsNames[i]), tempString + ':0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase());
        }

        // de-refernce
        i = null;
        max = null;
        gpio_MFPsNames = [];
        maxRegisterNameLength = null;
        tempString = null;
    }

    function ce(type, ident, inner, isInput) {
        var el;
        if (!isInput) {
            el = document.createElement(type);
            el.innerHTML = inner;
        } else {
            el = document.createElement('input');
            el.value = inner;
            el.type = type;
        }
        el.id = ident;
        return el;
    }

    function getPropertyNames(obj) {
        var moduleNames = [],
            index = 0,
            name;
        for (name in obj) {
            if (obj.hasOwnProperty(name)) {
                moduleNames[index] = name;
                index += 1;
            }
        }
        index = null;

        return moduleNames;
    }

    // decide possible g_module_pins which depend on the surrounding of the width of all the pin descriptions
    function decideModules() {
        var i,
            j,
            k,
            m,
            n,
            max,
            maxJ,
            maxK,
            maxM,
            maxN,
            pinName,
            GPIOName,
            pinDescription,
            moduleDescription,
            GPIOProperties = [],
            regNames = [],
            unusedObject = {};

        if (typeof (NUTOOL_PIN.g_cfg_addGPIO) !== 'undefined' && typeof (NUTOOL_PIN.g_cfg_addGPIO[g_partNumber_package]) !== 'undefined') {
            if (typeof (NUTOOL_PIN.g_cfg_addGPIO[g_partNumber_package]) == "function") {
                unusedObject = NUTOOL_PIN.g_cfg_addGPIO[g_partNumber_package]();
            }
            else {
                unusedObject = NUTOOL_PIN.g_cfg_addGPIO[g_partNumber_package];
            }
            GPIOProperties = getPropertyNames(unusedObject);
            for (i = 0; i < GPIOProperties.length; i += 1) {
                pinName = GPIOProperties[i] + ':0';
                for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpios.length; m < maxM; m += 1) {
                    if (pinName === NUTOOL_PIN.g_cfg_gpios[m].f[0]) {
                        for (j = 0, maxJ = unusedObject[GPIOProperties[i]].length; j < maxJ; j = j + 1) {
                            GPIOName = unusedObject[GPIOProperties[i]][j];

                            for (k = NUTOOL_PIN.g_cfg_gpios[m].f.length - 1; k >= 0; k = k - 1) {
                                pinName = NUTOOL_PIN.g_cfg_gpios[m].f[k];
                                if (parseInt(pinName.slice(pinName.indexOf(":") + 1), 10) <
                                    parseInt(GPIOName.slice(GPIOName.indexOf(":") + 1), 10)) {
                                    NUTOOL_PIN.g_cfg_gpios[m].f.splice(k + 1, 0, GPIOName);
                                    break;
                                }
                            }
                        }

                        break;
                    }
                }
            }
        }

        // trim some unused GPIO functions if exists
        unusedObject = {};
        if (typeof (NUTOOL_PIN.g_cfg_unusedGPIO) !== 'undefined' && typeof (NUTOOL_PIN.g_cfg_unusedGPIO[NUTOOL_PIN.g_packageNumberIndex]) !== 'undefined') {
            if (typeof (NUTOOL_PIN.g_cfg_unusedGPIO[NUTOOL_PIN.g_packageNumberIndex]) == "function") {
                unusedObject = NUTOOL_PIN.g_cfg_unusedGPIO[NUTOOL_PIN.g_packageNumberIndex]();
            }
            else {
                unusedObject = NUTOOL_PIN.g_cfg_unusedGPIO[NUTOOL_PIN.g_packageNumberIndex];
            }
        }
        else if (typeof (NUTOOL_PIN.g_cfg_unusedGPIO) !== 'undefined') {
            if (typeof (NUTOOL_PIN.g_cfg_unusedGPIO[g_partNumber_package]) !== 'undefined') {
                if (typeof (NUTOOL_PIN.g_cfg_unusedGPIO[g_partNumber_package]) == "function") {
                    unusedObject = NUTOOL_PIN.g_cfg_unusedGPIO[g_partNumber_package]();
                }
                else {
                    unusedObject = NUTOOL_PIN.g_cfg_unusedGPIO[g_partNumber_package];
                }
            }
            else if (typeof (NUTOOL_PIN.g_cfg_unusedGPIO[g_partNumber_package.slicePriorToX('(')]) !== 'undefined') {
                if (typeof (NUTOOL_PIN.g_cfg_unusedGPIO[g_partNumber_package.slicePriorToX('(')]) == "function") {
                    unusedObject = NUTOOL_PIN.g_cfg_unusedGPIO[g_partNumber_package.slicePriorToX('(')]();
                }
                else {
                    unusedObject = NUTOOL_PIN.g_cfg_unusedGPIO[g_partNumber_package.slicePriorToX('(')];
                }
            }
        }

        GPIOProperties = getPropertyNames(unusedObject);
        for (i = 0; i < GPIOProperties.length; i += 1) {
            if (GPIOProperties[i] === 'ALL') {
                // trim the unused GPIO function for the specific module
                for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpios.length; m < maxM; m += 1) {
                    for (j = 0, maxJ = unusedObject[GPIOProperties[i]].length; j < maxJ; j = j + 1) {
                        GPIOName = unusedObject[GPIOProperties[i]][j].toUpperCase();
                        for (n = NUTOOL_PIN.g_cfg_gpios[m].f.length - 1; n >= 0; n -= 1) {
                            /**
                             * Bug root cause: 當g_cfg_unusedGPIO設定為UART1時，會把UART10, UART11,...一起擋掉
                             * 由於GPIO的格式都是"UARTX_XXX"，所以加上"_"來判斷是否一致
                             * 可能其他series也會有同樣問題，但目前先針對MA35D0/MA35H0來修改就好，避免不必要的bug
                             */
                            if (g_chipType.indexOf('MA35D0') === 0 || g_chipType.indexOf('MA35H0') === 0) {
                                if (NUTOOL_PIN.g_cfg_gpios[m].f[n].toUpperCase().indexOf(GPIOName + "_") === 0) {
                                    NUTOOL_PIN.g_cfg_gpios[m].f.splice(n, 1);
                                }
                            } else {
                                if (NUTOOL_PIN.g_cfg_gpios[m].f[n].toUpperCase().indexOf(GPIOName) === 0) {
                                    NUTOOL_PIN.g_cfg_gpios[m].f.splice(n, 1);
                                }
                            }
                        }
                    }
                }
            }
            else if (GPIOProperties[i] === 'PARTIAL') {
                // trim the unused GPIO function for the specific module
                for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpios.length; m < maxM; m += 1) {
                    for (j = 0, maxJ = unusedObject[GPIOProperties[i]].length; j < maxJ; j = j + 1) {
                        GPIOName = unusedObject[GPIOProperties[i]][j].toUpperCase();
                        for (n = NUTOOL_PIN.g_cfg_gpios[m].f.length - 1; n >= 0; n -= 1) {
                            if (NUTOOL_PIN.g_cfg_gpios[m].f[n].slicePriorToX(':').toUpperCase() === GPIOName) {
                                NUTOOL_PIN.g_cfg_gpios[m].f.splice(n, 1);
                            }
                        }
                    }
                }
            }
            else {
                pinName = GPIOProperties[i] + ':0';
                // trim the unused GPIO function in NUTOOL_PIN.g_cfg_gpios
                for (m = 0, maxM = NUTOOL_PIN.g_cfg_gpios.length; m < maxM; m += 1) {
                    if (pinName === NUTOOL_PIN.g_cfg_gpios[m].f[0]) {
                        for (j = 0, maxJ = unusedObject[GPIOProperties[i]].length; j < maxJ; j = j + 1) {
                            GPIOName = unusedObject[GPIOProperties[i]][j].toUpperCase();
                            for (n = NUTOOL_PIN.g_cfg_gpios[m].f.length - 1; n >= 0; n -= 1) {
                                if (NUTOOL_PIN.g_cfg_gpios[m].f[n].toUpperCase().indexOf(GPIOName) === 0) {
                                    NUTOOL_PIN.g_cfg_gpios[m].f.splice(n, 1);
                                }
                            }
                        }
                        break;
                    }
                }
            }
        }
        // trim some unused g_cfg_regDescriptions if exists
        regNames = getPropertyNames(NUTOOL_PIN.g_cfg_regDescriptions);
        for (i = regNames.length - 1; i >= 0; i -= 1) {
            if (typeof (g_gpio_MFPs[regNames[i]]) === 'undefined') {
                delete NUTOOL_PIN.g_cfg_regDescriptions[regNames[i]];
            }
        }

        g_module_pins = [];
        for (i = 0; i < g_NUC_Pin_Total_Number; i += 1) {
            pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i] + ':0';
            for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                if (pinName === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                    for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpios[j].f.length; k < maxK; k += 1) {
                        pinDescription = NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                        moduleDescription = pinDescription;
                        if (moduleDescription.indexOf('_') !== -1) {
                            moduleDescription = moduleDescription.slicePriorToX('_');
                        }

                        moduleDescription = specialModuleNaming(moduleDescription);

                        if (typeof (g_module_pins[moduleDescription]) === 'undefined') {
                            g_module_pins[moduleDescription] = [];
                            g_module_pins[moduleDescription][0] = i + 1; // store the related pin number
                            g_module_functions[moduleDescription] = [];
                            g_module_functions[moduleDescription][0] = pinDescription; // store the related function
                        }
                        else {
                            g_module_pins[moduleDescription].push(i + 1); // store the related pin number
                            g_module_functions[moduleDescription].push(pinDescription); // store the related function
                        }
                    }
                    break;
                }
            }
        }

        // de-reference
        i = null;
        j = null;
        k = null;
        m = null;
        n = null;
        max = null;
        maxJ = null;
        maxK = null;
        maxM = null;
        maxN = null;
        pinName = null;
        GPIOName = null;
        pinDescription = null;
        moduleDescription = null;
        GPIOProperties = [];
        regNames = [];
        unusedObject = null;
    }

    function withdrawAllGreenPins() {
        var i;
        for (i = 0; i < g_chipPins.length; i += 1) {
            g_chipPins[i].mouseLeave();
        }

        i = null;
    }

    function updatePinColor(targetPin, fillingColor) {
        var pin = targetPin - 1,
            whichSide,
            oneSidePinIndex,
            pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin];

        if (g_partNumber_package.indexOf('SOP') !== -1) {
            whichSide = Math.floor(pin / g_NUC_Pin_Total_Number * 2);
            oneSidePinIndex = pin - whichSide * g_NUC_Pin_Total_Number / 2;
        }
        else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            whichSide = 0;
            oneSidePinIndex = pin;
        }
        else {
            if (pin < g_NUC_Pin_Down_Number) {
                // down side
                whichSide = 0;
                oneSidePinIndex = pin;
            }
            else if (pin >= g_NUC_Pin_Down_Number && pin < (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number)) {
                // right side
                whichSide = 1;
                oneSidePinIndex = pin - g_NUC_Pin_Down_Number;
            }
            else if (pin >= (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number) && pin < (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number)) {
                // upper side
                whichSide = 2;
                oneSidePinIndex = pin - g_NUC_Pin_Down_Number - g_NUC_Pin_Right_Number;
            }
            else if (pin >= (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number) && pin < g_NUC_Pin_Total_Number) {
                // left side
                whichSide = 3;
                oneSidePinIndex = pin - g_NUC_Pin_Down_Number - g_NUC_Pin_Right_Number - g_NUC_Pin_Upper_Number;
            }
        }
        g_chipPins[whichSide].lastPinIndex = oneSidePinIndex;
        // Add WP Pin determination
        if (isWPPin(pinName) || isCCDBPin(pinName) || isToolTipPin(pinName)) {
            g_chipPins[whichSide].savedPinPadColor[oneSidePinIndex] = g_colorForTooltipOnHover;
        } else if (fillingColor !== 'savedPinPadColor') {
            g_chipPins[whichSide].savedPinPadColor[oneSidePinIndex] = fillingColor;
        }
        g_chipPins[whichSide].mouseLeave();
    }

    function updatePinName(pin) {
        var pinName = pin.toString();

        if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            if (typeof pin === 'string') {
                pin = parseInt(pin, 10);
            }
            pin = pin - 1;
            pinName = NUTOOL_PIN.g_horizontalIndexArray[Math.floor(pin / g_NUC_Pin_Vertial_Number)] + (pin % g_NUC_Pin_Vertial_Number + 1);
        }
        return pinName;
    }

    function updatePinDescription(pinName) {
        if (typeof g_userDefinedPin[pinName] !== 'undefined' &&
            g_userDefinedPin[pinName].trim() !== '') {
            pinName = g_userDefinedPin[pinName];
        }
        return pinName;
    }

    function drawPins() {
        var me_tooltip_pin = {},
            offset,
            x,
            y,
            me = {
                init: function (inner, stage, whichSide) {
                    var i,
                        defaultColor,
                        tempString;

                    me.inner = inner;
                    me.stage = stage[0];
                    me.whichSide = whichSide;
                    me.pin = [];
                    me.savedPinPadColor = [];
                    me.savedPinName = [];
                    me.x = [];
                    me.y = [];
                    me.currentPinIndex = -1; // -1 means that the mouse is not moved into any pin
                    me.lastPinIndex = -1;
                    g_utility.addEvent(me.stage, "click", me.pinClickHandler);
                    g_utility.addEvent(me.stage, "mousemove", function (evt) { me.mousePosition = me.getMousePos($("#NUC_PinConfiguration_Canvas")[0], evt); me.decideWhichPin(); });
                    if ($('html').hasClass('ie10+')) {
                        g_utility.addEvent(me.stage, "dblclick", function () { generateCode('userDefined'); });
                    }

                    if (g_partNumber_package.indexOf('SOP') !== -1) {   // 左右兩排pin
                        // populate me.pin and me.savedPinPadColor
                        me.oneSidePinNumber = g_NUC_Pin_Total_Number / 2;
                        me.pin[0] = 1 + whichSide * me.oneSidePinNumber;

                        tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][0 + whichSide * g_NUC_Pin_Total_Number / 2];
                        if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                            defaultColor = g_colorForTooltipOnHover;
                        }
                        else if (isGPIOPin(tempString)) {
                            defaultColor = '#FFFFFF';
                        }
                        else {
                            defaultColor = g_colorForNotGPIO;
                        }
                        me.savedPinPadColor[0] = defaultColor;
                        me.x[0] = 0;
                        me.y[0] = 0;
                        for (i = 1; i < me.oneSidePinNumber; i += 1) {
                            tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i + whichSide * g_NUC_Pin_Total_Number / 2];
                            if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                defaultColor = g_colorForTooltipOnHover;
                            }
                            else if (isGPIOPin(tempString)) {
                                defaultColor = '#FFFFFF';
                            }
                            else {
                                defaultColor = g_colorForNotGPIO;
                            }
                            me.pin[i] = i + 1 + whichSide * me.oneSidePinNumber;
                            me.savedPinPadColor[i] = defaultColor;
                        }

                        // populate me.x and me.y
                        for (i = 0; i < me.oneSidePinNumber; i += 1) {
                            // left side
                            if (me.pin[i] <= g_NUC_Pin_Total_Number / 2) {
                                me.x[i] = g_NUC_Chip_StartPoint_X - g_NUC_Pin_Height;
                                me.y[i] = g_NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + (me.pin[i] - 1) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                            }
                            // right side
                            else {
                                me.x[i] = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2;
                                me.y[i] = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - (me.pin[i] - g_NUC_Pin_Total_Number / 2 - 1) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                            }
                        }

                        switch (whichSide) {
                            case 0: // left side
                                me.w = g_NUC_Pin_Height;
                                me.h = g_NUC_Pin_Width;
                                me.stage.setAttribute('width', me.w + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('height', me.h + me.y[me.oneSidePinNumber - 1] - me.y[0] + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('style', 'z-index:1; position:absolute; left:' + (me.x[0] - g_NUC_Pin_Surrounding) + 'px; top:' + (me.y[0] - g_NUC_Pin_Surrounding) + 'px;');
                                break;
                            case 1: // right side
                                me.w = g_NUC_Pin_Height;
                                me.h = g_NUC_Pin_Width;
                                me.stage.setAttribute('width', me.w + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('height', me.h + me.y[0] - me.y[me.oneSidePinNumber - 1] + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('style', 'z-index:1; position:absolute; left:' + (me.x[me.oneSidePinNumber - 1] - g_NUC_Pin_Surrounding) + 'px; top:' + (me.y[me.oneSidePinNumber - 1] - g_NUC_Pin_Surrounding) + 'px;');
                                break;
                            default:
                                break;
                        }
                    }
                    else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                        // populate me.pin and me.savedPinPadColor
                        me.oneSidePinNumber = g_NUC_Pin_Total_Number;
                        me.w = 0;
                        me.pin[0] = 1;
                        tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][0];
                        if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                            defaultColor = g_colorForTooltipOnHover;
                        }
                        else if (isGPIOPin(tempString)) {
                            defaultColor = '#FFFFFF';
                        }
                        else {
                            defaultColor = g_colorForNotGPIO;
                        }
                        me.savedPinPadColor[0] = defaultColor;
                        me.x[0] = 0;
                        me.y[0] = 0;
                        for (i = 1; i < me.oneSidePinNumber; i += 1) {
                            tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
                            if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                defaultColor = g_colorForTooltipOnHover;
                            }
                            else if (isGPIOPin(tempString)) {
                                defaultColor = '#FFFFFF';
                            }
                            else {
                                defaultColor = g_colorForNotGPIO;
                            }
                            me.pin[i] = i + 1;
                            me.savedPinPadColor[i] = defaultColor;
                        }

                        // populate me.x and me.y
                        for (i = 0; i < me.oneSidePinNumber; i += 1) {
                            me.x[i] = g_NUC_Pin_Padding + g_NUC_Pin_Radius + Math.floor(i / g_NUC_Pin_Vertial_Number) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval);
                            me.y[i] = g_NUC_Pin_Padding + g_NUC_Pin_Radius + (g_NUC_Pin_Vertial_Number - 1 - (i % g_NUC_Pin_Vertial_Number)) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval);
                        }

                        me.r = g_NUC_Pin_Radius;
                        me.stage.setAttribute('width', g_NUC_Chip_Length);
                        me.stage.setAttribute('height', g_NUC_Chip_Length);
                        me.stage.setAttribute('style', 'z-index:2; opacity:0.1; filter:alpha(opacity=50); position:absolute; left:' + g_NUC_Chip_StartPoint_X + 'px; top:' + g_NUC_Chip_StartPoint_Y + 'px;');
                    }
                    else {
                        // populate me.pin and me.savedPinPadColor
                        switch (whichSide) {
                            default:
                            case 0: // down side
                                me.oneSidePinNumber = g_NUC_Pin_Down_Number;
                                me.pin[0] = 1;
                                tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][0];
                                if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                    defaultColor = g_colorForTooltipOnHover;
                                }
                                else if (isGPIOPin(tempString)) {
                                    defaultColor = '#FFFFFF';
                                }
                                else {
                                    defaultColor = g_colorForNotGPIO;
                                }
                                me.savedPinPadColor[0] = defaultColor;
                                for (i = 1; i < me.oneSidePinNumber; i += 1) {
                                    tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
                                    if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                        defaultColor = g_colorForTooltipOnHover;
                                    }
                                    else if (isGPIOPin(tempString)) {
                                        defaultColor = '#FFFFFF';
                                    }
                                    else {
                                        defaultColor = g_colorForNotGPIO;
                                    }
                                    me.pin[i] = i + 1;
                                    me.savedPinPadColor[i] = defaultColor;
                                }
                                break;
                            case 1: // right side
                                me.oneSidePinNumber = g_NUC_Pin_Right_Number;
                                me.pin[0] = 1 + g_NUC_Pin_Down_Number;
                                tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][0 + g_NUC_Pin_Down_Number];
                                if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                    defaultColor = g_colorForTooltipOnHover;
                                }
                                else if (isGPIOPin(tempString)) {
                                    defaultColor = '#FFFFFF';
                                }
                                else {
                                    defaultColor = g_colorForNotGPIO;
                                }
                                me.savedPinPadColor[0] = defaultColor;
                                for (i = 1; i < me.oneSidePinNumber; i += 1) {
                                    tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i + g_NUC_Pin_Down_Number];
                                    if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                        defaultColor = g_colorForTooltipOnHover;
                                    }
                                    else if (isGPIOPin(tempString)) {
                                        defaultColor = '#FFFFFF';
                                    }
                                    else {
                                        defaultColor = g_colorForNotGPIO;
                                    }
                                    me.pin[i] = i + 1 + g_NUC_Pin_Down_Number;
                                    me.savedPinPadColor[i] = defaultColor;
                                }
                                break;
                            case 2: // upper side
                                me.oneSidePinNumber = g_NUC_Pin_Upper_Number;
                                me.pin[0] = 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number;
                                tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][0 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number];
                                if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                    defaultColor = g_colorForTooltipOnHover;
                                }
                                else if (isGPIOPin(tempString)) {
                                    defaultColor = '#FFFFFF';
                                }
                                else {
                                    defaultColor = g_colorForNotGPIO;
                                }
                                me.savedPinPadColor[0] = defaultColor;
                                for (i = 1; i < me.oneSidePinNumber; i += 1) {
                                    tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number];
                                    if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                        defaultColor = g_colorForTooltipOnHover;
                                    }
                                    else if (isGPIOPin(tempString)) {
                                        defaultColor = '#FFFFFF';
                                    }
                                    else {
                                        defaultColor = g_colorForNotGPIO;
                                    }
                                    me.pin[i] = i + 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number;
                                    me.savedPinPadColor[i] = defaultColor;
                                }
                                break;
                            case 3: // left side
                                me.oneSidePinNumber = g_NUC_Pin_Left_Number;
                                me.pin[0] = 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number;
                                tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][0 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number];
                                if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                    defaultColor = g_colorForTooltipOnHover;
                                }
                                else if (isGPIOPin(tempString)) {
                                    defaultColor = '#FFFFFF';
                                }
                                else {
                                    defaultColor = g_colorForNotGPIO;
                                }
                                me.savedPinPadColor[0] = defaultColor;
                                for (i = 1; i < me.oneSidePinNumber; i += 1) {
                                    tempString = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number];
                                    if (isWPPin(tempString) || isCCDBPin(tempString) || isToolTipPin(tempString)) {
                                        defaultColor = g_colorForTooltipOnHover;
                                    }
                                    else if (isGPIOPin(tempString)) {
                                        defaultColor = '#FFFFFF';
                                    }
                                    else {
                                        defaultColor = g_colorForNotGPIO;
                                    }
                                    me.pin[i] = i + 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number;
                                    me.savedPinPadColor[i] = defaultColor;
                                }
                                break;
                        }
                        // populate me.x and me.y
                        me.x[0] = 0;
                        me.y[0] = 0;
                        for (i = 0; i < me.oneSidePinNumber; i += 1) {
                            switch (whichSide) {
                                default:
                                case 0: // down side
                                    offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Down_Number) / 2);
                                    me.x[i] = g_NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + (me.pin[i] - 1 + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) - g_NUC_Pin_LengthWidth;
                                    me.y[i] = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length;
                                    break;
                                case 1: // right side
                                    offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Right_Number) / 2);
                                    me.x[i] = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length;
                                    me.y[i] = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - (me.pin[i] - g_NUC_Pin_Down_Number - 1 + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                                    break;
                                case 2: // upper side
                                    offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Upper_Number) / 2);
                                    me.x[i] = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - (me.pin[i] - g_NUC_Pin_Down_Number - g_NUC_Pin_Right_Number - 1 + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) - g_NUC_Pin_LengthWidth;
                                    me.y[i] = g_NUC_Chip_StartPoint_Y - g_NUC_Pin_Height + g_NUC_Pin_LengthWidth;
                                    break;
                                case 3: // left side
                                    offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Left_Number) / 2);
                                    me.x[i] = g_NUC_Chip_StartPoint_X - g_NUC_Pin_Height;
                                    me.y[i] = g_NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + (me.pin[i] - g_NUC_Pin_Down_Number - g_NUC_Pin_Right_Number - g_NUC_Pin_Upper_Number - 1 + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                                    break;
                            }
                        }
                        // populate me.w, me.h and me.stage
                        switch (whichSide) {
                            default:
                            case 0: // down side
                                me.w = g_NUC_Pin_Width;
                                me.h = g_NUC_Pin_Height;
                                me.stage.setAttribute('width', me.w + me.x[me.oneSidePinNumber - 1] - me.x[0] + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('height', me.h + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('style', 'z-index:1; position:absolute; left:' + (me.x[0] - g_NUC_Pin_Surrounding) + 'px; top:' + (me.y[0] - g_NUC_Pin_Surrounding) + 'px;');
                                break;
                            case 1: // right side
                                me.w = g_NUC_Pin_Height;
                                me.h = g_NUC_Pin_Width;
                                me.stage.setAttribute('width', me.w + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('height', me.h + me.y[0] - me.y[me.oneSidePinNumber - 1] + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('style', 'z-index:1; position:absolute; left:' + (me.x[me.oneSidePinNumber - 1] - g_NUC_Pin_Surrounding) + 'px; top:' + (me.y[me.oneSidePinNumber - 1] - g_NUC_Pin_Surrounding) + 'px;');
                                break;
                            case 2: // upper side
                                me.w = g_NUC_Pin_Width;
                                me.h = g_NUC_Pin_Height;
                                me.stage.setAttribute('width', me.w + me.x[0] - me.x[me.oneSidePinNumber - 1] + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('height', me.h + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('style', 'z-index:1; position:absolute; left:' + (me.x[me.oneSidePinNumber - 1] - g_NUC_Pin_Surrounding) + 'px; top:' + (me.y[me.oneSidePinNumber - 1] - g_NUC_Pin_Surrounding) + 'px;');
                                break;
                            case 3: // left side
                                me.w = g_NUC_Pin_Height;
                                me.h = g_NUC_Pin_Width;
                                me.stage.setAttribute('width', me.w + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('height', me.h + me.y[me.oneSidePinNumber - 1] - me.y[0] + 2 * g_NUC_Pin_Surrounding);
                                me.stage.setAttribute('style', 'z-index:1; position:absolute; left:' + (me.x[0] - g_NUC_Pin_Surrounding) + 'px; top:' + (me.y[0] - g_NUC_Pin_Surrounding) + 'px;');
                                break;
                        }
                    }

                    me.ctx = g_utility.getContext(me.stage);

                    // de-reference
                    defaultColor = null;
                    tempString = null;
                    return me;
                },
                draw: function () {
                    var i,
                        pinName,
                        x,
                        y;

                    me.ctx.strokeStyle = "#000000"; // black stroke
                    if (g_partNumber_package.indexOf('SOP') !== -1) {
                        switch (me.whichSide) {
                            case 0: // left side
                                for (i = 0; i < me.oneSidePinNumber; i += 1) {
                                    me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = me.savedPinPadColor[i];
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    // populate me.savedPinName
                                    pinName = g_chipPinDescriptions[me.pin[i] - 1];
                                    if (pinName.lastIndexOf('/') !== -1) {
                                        pinName = pinName.slice(pinName.lastIndexOf('/') + 1);
                                    }
                                    if (!isGPIOPin(pinName) && pinName.length > 4) {
                                        pinName = pinName.slice(0, 4) + '..';
                                    }
                                    me.savedPinName[i] = pinName;
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(pinName, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[0] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                }
                                break;
                            case 1: // right side
                                for (i = 0; i < me.oneSidePinNumber; i += 1) {
                                    me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = me.savedPinPadColor[i];
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    // populate me.savedPinName
                                    pinName = g_chipPinDescriptions[me.pin[i] - 1];
                                    pinName = pinName.slicePriorToX('/');

                                    if (!isGPIOPin(pinName) && pinName.length > 4) {
                                        pinName = pinName.slice(0, 4) + '..';
                                    }
                                    me.savedPinName[i] = pinName;
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(pinName, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                        for (i = 0; i < me.oneSidePinNumber; i += 1) {
                            pinName = g_chipPinDescriptions[me.pin[i] - 1];
                            me.savedPinName[i] = pinName;
                            if (pinName.toLowerCase().indexOf('toolnotshow') === -1) {
                                me.ctx.beginPath();
                                me.ctx.arc(me.x[i], me.y[i], me.r, 0, Math.PI * 2, true);
                                me.ctx.strokeStyle = "white";
                                me.ctx.stroke();
                                me.ctx.strokeStyle = "#000000"; // black stroke
                                me.ctx.fillStyle = me.savedPinPadColor[i];
                                me.ctx.fill();
                                // populate me.savedPinName
                                if (pinName.lastIndexOf('/') !== -1) {
                                    pinName = pinName.slice(pinName.lastIndexOf('/') + 1);
                                }
                                if (pinName.length > 6) {
                                    pinName = pinName.slice(0, 6) + '..';
                                }
                                me.savedPinName[i] = pinName;
                                me.ctx.font = g_commonStringFont;
                                me.ctx.fillStyle = 'black';
                                me.ctx.fillText(pinName, me.x[i] - me.ctx.measureText(pinName).width / 2, me.y[i] + parseInt(me.ctx.font, 10) / 2);
                            }
                        }
                    }
                    else {
                        switch (me.whichSide) {
                            case 0: // down side
                                for (i = 0; i < me.oneSidePinNumber; i += 1) {
                                    me.ctx.strokeRect(me.x[i] - me.x[0] + g_NUC_Pin_Surrounding, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = me.savedPinPadColor[i];
                                    me.ctx.fillRect(me.x[i] - me.x[0] + g_NUC_Pin_Surrounding, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.w, me.h);
                                    // populate me.savedPinName
                                    pinName = g_chipPinDescriptions[me.pin[i] - 1];
                                    if (pinName.lastIndexOf('/') !== -1) {
                                        pinName = pinName.slice(pinName.lastIndexOf('/') + 1);
                                    }
                                    if (!isGPIOPin(pinName) && pinName.length > 4) {
                                        pinName = pinName.slice(0, 4) + '..';
                                    }
                                    me.savedPinName[i] = pinName;
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    x = me.x[i] - me.x[0] + g_NUC_Pin_Surrounding;
                                    y = g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding + g_NUC_Pin_Height;
                                    me.ctx.save();
                                    me.ctx.translate(x, y);
                                    me.ctx.rotate(-Math.PI / 2);
                                    me.ctx.fillText(pinName, g_NUC_Pin_LengthWidth, g_NUC_Pin_Width * 4 / 5);
                                    me.ctx.restore();
                                }
                                break;
                            case 1: // right side
                                for (i = 0; i < me.oneSidePinNumber; i += 1) {
                                    me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = me.savedPinPadColor[i];
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    // populate me.savedPinName
                                    pinName = g_chipPinDescriptions[me.pin[i] - 1];
                                    pinName = pinName.slicePriorToX('/');

                                    if (!isGPIOPin(pinName) && pinName.length > 4) {
                                        pinName = pinName.slice(0, 4) + '..';
                                    }
                                    me.savedPinName[i] = pinName;
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(pinName, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                }
                                break;
                            case 2: // upper side
                                for (i = 0; i < me.oneSidePinNumber; i += 1) {
                                    me.ctx.strokeRect(me.x[i] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = me.savedPinPadColor[i];
                                    me.ctx.fillRect(me.x[i] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, g_NUC_Pin_Surrounding, me.w, me.h);
                                    // populate me.savedPinName
                                    pinName = g_chipPinDescriptions[me.pin[i] - 1];
                                    pinName = pinName.slicePriorToX('/');

                                    if (!isGPIOPin(pinName) && pinName.length > 4) {
                                        pinName = pinName.slice(0, 4) + '..';
                                    }
                                    me.savedPinName[i] = pinName;
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    x = me.x[i] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding;
                                    y = g_NUC_Pin_Surrounding + g_NUC_Pin_Height;
                                    me.ctx.save();
                                    me.ctx.translate(x, y);
                                    me.ctx.rotate(-Math.PI / 2);
                                    me.ctx.textAlign = "end";
                                    me.ctx.fillText(pinName, g_NUC_Pin_Height, g_NUC_Pin_Width * 4 / 5);
                                    me.ctx.restore();
                                }
                                break;
                            case 3: // left side
                                for (i = 0; i < me.oneSidePinNumber; i += 1) {
                                    me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = me.savedPinPadColor[i];
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    // populate me.savedPinName
                                    pinName = g_chipPinDescriptions[me.pin[i] - 1];
                                    if (pinName.lastIndexOf('/') !== -1) {
                                        pinName = pinName.slice(pinName.lastIndexOf('/') + 1);
                                    }
                                    if (!isGPIOPin(pinName) && pinName.length > 4) {
                                        pinName = pinName.slice(0, 4) + '..';
                                    }
                                    me.savedPinName[i] = pinName;
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(pinName, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[i] - me.y[0] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                }
                                break;
                            default:
                                break;
                        }
                    }
                    // de-reference
                    pinName = null;
                    x = null;
                    y = null;
                },
                restore: function () {
                    g_utility.removeContext($('#' + me.inner));
                    // de-reference
                    me = null;
                },
                getMousePos: function (canvas, evt) {
                    var rect = canvas.getBoundingClientRect(),
                        // return relative mouse position
                        mouseX = evt.clientX - rect.left,
                        mouseY = evt.clientY - rect.top;
                    return {
                        x: mouseX,
                        y: mouseY
                    };
                },
                decideWhichPin: function () {
                    var x,
                        y,
                        i;

                    if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                        x = me.mousePosition.x - g_NUC_Chip_StartPoint_X * g_currIEZoom / 100;
                        y = me.mousePosition.y - g_NUC_Chip_StartPoint_Y * g_currIEZoom / 100;
                        for (i = 0; i < me.oneSidePinNumber; i += 1) {
                            if (x >= (me.x[i] - me.r) * g_currIEZoom / 100 && x <= (me.x[i] + me.r) * g_currIEZoom / 100 &&
                                y >= (me.y[i] - me.r) * g_currIEZoom / 100 && y <= (me.y[i] + me.r) * g_currIEZoom / 100) {
                                me.currentPinIndex = i;
                                break;
                            }
                            me.currentPinIndex = -1;
                        }
                    }
                    else {
                        for (i = 0; i < me.oneSidePinNumber; i += 1) {
                            x = (me.x[i]) * g_currIEZoom / 100;
                            if (me.mousePosition.x >= x && me.mousePosition.x <= x + me.w * g_currIEZoom / 100 &&
                                me.mousePosition.y >= me.y[i] * g_currIEZoom / 100 && me.mousePosition.y <= ((me.y[i] + me.h) * g_currIEZoom / 100)) {
                                me.currentPinIndex = i;
                                break;
                            }
                            me.currentPinIndex = -1;
                        }
                    }
                    if (me.currentPinIndex !== -1) {
                        me.mouseEnter();
                    }
                    else {
                        me.mouseLeave();
                    }
                },
                mouseEnter: function () {
                    var i,
                        max,
                        pinIndex,
                        x,
                        y,
                        tooltipText,
                        tooltip_x,
                        tooltip_y,
                        tooltip_textFont,
                        tooltip_textYposition,
                        pinName,
                        pinName1;

                    // de-assert last mouseEnter pin
                    for (i = 0, max = g_chipPins.length; i < max; i += 1) {
                        if (g_chipPins[i].lastPinIndex !== me.currentPinIndex) {
                            g_chipPins[i].mouseLeave();
                        }
                    }
                    if (me.currentPinIndex !== me.lastPinIndex) {
                        pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][me.pin[me.currentPinIndex] - 1];
                        if (pinName.toLowerCase().indexOf('toolnotshow') !== -1) {
                            return;
                        }
                        pinIndex = me.lastPinIndex = me.currentPinIndex;
                        me.ctx.strokeStyle = "#000000"; // black stroke
                        me.ctx.fillStyle = g_colorForFocusedByMouse;
                        if (g_partNumber_package.indexOf('SOP') !== -1) {
                            switch (me.whichSide) {
                                case 0: // left side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Width * 4 / 5 + g_NUC_Pin_Surrounding);
                                    break;
                                case 1: // right side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                    break;
                                default:
                                    break;
                            }
                        }
                        else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                            me.ctx.beginPath();
                            me.ctx.arc(me.x[pinIndex], me.y[pinIndex], me.r, 0, Math.PI * 2, true);
                            me.ctx.fill();
                            // populate pinName
                            if (g_pinCurrentDescription[pinIndex] !== "") {
                                pinName = updatePinDescription(g_pinCurrentDescription[pinIndex]);
                            }
                            else {
                                pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][me.pin[me.currentPinIndex] - 1];
                            }
                            pinName1 = pinName;
                            if (pinName.length > 6) {
                                pinName1 = pinName.slice(0, 6) + '..';
                            }
                            me.ctx.font = g_commonStringFont;
                            me.ctx.fillStyle = 'black';
                            me.ctx.fillText(pinName1, me.x[pinIndex] - me.ctx.measureText(pinName1).width / 2, me.y[pinIndex] + parseInt(me.ctx.font, 10) / 2);
                        }
                        else {
                            switch (me.whichSide) {
                                case 0: // down side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(me.x[pinIndex] - me.x[0] + g_NUC_Pin_Surrounding, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(me.x[pinIndex] - me.x[0] + g_NUC_Pin_Surrounding, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    x = me.x[pinIndex] - me.x[0] + g_NUC_Pin_Surrounding;
                                    y = g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding + g_NUC_Pin_Height;
                                    me.ctx.save();
                                    me.ctx.translate(x, y);
                                    me.ctx.rotate(-Math.PI / 2);
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth, g_NUC_Pin_Width * 4 / 5);
                                    me.ctx.restore();
                                    break;
                                case 1: // right side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                    break;
                                case 2: // upper side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(me.x[pinIndex] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(me.x[pinIndex] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    x = me.x[pinIndex] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding;
                                    y = g_NUC_Pin_Surrounding + g_NUC_Pin_Height;
                                    me.ctx.save();
                                    me.ctx.translate(x, y);
                                    me.ctx.rotate(-Math.PI / 2);
                                    me.ctx.textAlign = "end";
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_Height, g_NUC_Pin_Width * 4 / 5);
                                    me.ctx.restore();
                                    break;
                                case 3: // left side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.font = g_commonStringFont;
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Width * 4 / 5 + g_NUC_Pin_Surrounding);
                                    break;
                                default:
                                    break;
                            }
                        }
                        //draw the tooltip
                        if (/*g_bUserDisplayTooltip &&*/ !isGPIOPin(pinName) || isWPPin(pinName) || isCCDBPin(pinName) || isToolTipPin(pinName)) {
                            if (isToolTipPin(pinName)) {
                                if (pinName == 'AVDD/OPA_VDD') {
                                    tooltipText = 'AVDD + OPA_VDD';
                                }
                            } else if (!isGPIOPin(pinName)) {
                                tooltipText = pinName;
                            } else if (isWPPin(pinName)) {
                                if (g_chipType.indexOf('M2L31') === 0) {
                                    tooltipText = 'Can change function to Write_Protect_Pin by chip configuration';
                                } else if (g_chipType.indexOf('KM1M4BF0') === 0) {
                                    tooltipText = 'When NDMOD pin input is L level, SWDCLK would be selected. Configurable only when NDMOD pin input is H level.';
                                } else if (g_chipType.indexOf('KM1M4BF5') === 0) {
                                    tooltipText = 'When SELSWD.SWDEN = 1, SWDCLK would be selected. Configurable only when SELSWD.SWDEN = 0.';
                                }
                            } else if (isCCDBPin(pinName)) {
                                if (g_userSelectUIlanguage === "Simplified Chinese") {
                                    tooltipText = '此脚位包含CCDB功能，带下拉电阻(Rd_ccdb)，并不可被禁用。 当该管脚没用于UTCPD应用时，请检查Rd_ccdb的影响。';
                                }
                                else if (g_userSelectUIlanguage === "Traditional Chinese") {
                                    tooltipText = '此腳位包含CCDB功能，帶下拉電阻(Rd_ccdb)，並不可被禁用。 當該管腳沒用於UTCPD應用時，請檢查Rd_ccdb的影響。';
                                }
                                else {
                                    tooltipText = 'This pin includes CCDB function with a pull-low resistor(Rd_ccdb) that cannot be disabled. When this pin isn’t used for UTCPD, please check Rd_ccdb influence.';
                                }
                            }
                            if (tooltipText !== 'unknown') {
                                me_tooltip_pin.stage = $('#panel')[0].appendChild(ce("canvas", me.inner + "_tooltip_pin"));

                                if (tooltipText.indexOf('/') !== -1 &&
                                    (tooltipText.indexOf('XT1_IN') !== -1 ||
                                        tooltipText.indexOf('XT1_OUT') !== -1 ||
                                        tooltipText.indexOf('XTAL1') !== -1 ||
                                        tooltipText.indexOf('XTAL2') !== -1)) {
                                    if (tooltipText.indexOf('XTAL1') !== -1) {
                                        tooltipText = tooltipText + ' (XTAL1';
                                    }
                                    else if (tooltipText.indexOf('XTAL2') !== -1) {
                                        tooltipText = tooltipText + ' (XTAL2';
                                    }
                                    else if (tooltipText.indexOf('XT1_IN') !== -1) {
                                        tooltipText = tooltipText + ' (XT1_IN';
                                    }
                                    else {
                                        tooltipText = tooltipText + ' (XT1_OUT';
                                    }

                                    if (g_userSelectUIlanguage === "Simplified Chinese") {
                                        tooltipText = tooltipText + '由User Configuration决定。)';
                                    }
                                    else if (g_userSelectUIlanguage === "Traditional Chinese") {
                                        tooltipText = tooltipText + '由User Configuration決定。)';
                                    }
                                    else {
                                        tooltipText = tooltipText + ' is decided by User Configuration.)';
                                    }
                                }
                                if (!g_bLessThanOrEqualIE8) {
                                    if (g_currIEZoom < 100) {
                                        me_tooltip_pin.w = me.ctx.measureText(tooltipText).width / g_currIEZoom * 100;
                                        me_tooltip_pin.h = g_NUC_Pin_Width / g_currIEZoom * 100;
                                        tooltip_textFont = (12 / g_currIEZoom * 100) + 'px Times Arial';
                                        tooltip_textYposition = me_tooltip_pin.h - 5 / g_currIEZoom * 100;

                                        tooltip_x = me.x[me.currentPinIndex] + me.w;
                                        tooltip_y = me.y[me.currentPinIndex];
                                    }
                                    else {
                                        me_tooltip_pin.w = me.ctx.measureText(tooltipText).width;
                                        me_tooltip_pin.h = g_NUC_Pin_Width;
                                        tooltip_textFont = '12px Arial';
                                        tooltip_textYposition = (me_tooltip_pin.h - 4);

                                        tooltip_x = me.x[me.currentPinIndex] + me.w;
                                        tooltip_y = me.y[me.currentPinIndex];
                                    }
                                    if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                                        tooltip_x += g_NUC_Chip_StartPoint_X;
                                        tooltip_y += g_NUC_Chip_StartPoint_Y + 10;
                                    }
                                }
                                else {
                                    me_tooltip_pin.w = me.ctx.measureText(tooltipText).width;
                                    me_tooltip_pin.h = g_NUC_Pin_Width;
                                    tooltip_textFont = '12px Arial';
                                    tooltip_textYposition = (me_tooltip_pin.h - 4);

                                    if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                                        tooltip_x = (g_NUC_Chip_StartPoint_X + me.x[me.currentPinIndex]) * g_currIEZoom / 100;
                                        tooltip_y = (g_NUC_Chip_StartPoint_Y + me.y[me.currentPinIndex] + 10) * g_currIEZoom / 100;
                                    }
                                    else {
                                        tooltip_x = (me.x[me.currentPinIndex] + me.w) * g_currIEZoom / 100;
                                        tooltip_y = me.y[me.currentPinIndex] * g_currIEZoom / 100;
                                    }
                                }

                                me_tooltip_pin.stage.setAttribute('style', 'z-index:2; position:absolute; left:' + (tooltip_x) + 'px; top:' + tooltip_y + 'px;');

                                me_tooltip_pin.stage.setAttribute('width', me_tooltip_pin.w + 3 * g_NUC_MultiFunction_Padding);
                                me_tooltip_pin.stage.setAttribute('height', me_tooltip_pin.h);

                                me_tooltip_pin.ctx = g_utility.getContext(me_tooltip_pin.stage);
                                me_tooltip_pin.ctx.font = tooltip_textFont;

                                me_tooltip_pin.ctx.strokeStyle = "#000000"; // black stroke
                                me_tooltip_pin.ctx.lineWidth = 2;
                                me_tooltip_pin.ctx.strokeRect(0, 0, me_tooltip_pin.w + 3 * g_NUC_MultiFunction_Padding, me_tooltip_pin.h);
                                me_tooltip_pin.ctx.fillStyle = '#FFF6C0';
                                me_tooltip_pin.ctx.fillRect(g_NUC_MultiFunction_LengthWidth, g_NUC_MultiFunction_LengthWidth,
                                    me_tooltip_pin.w + 3 * g_NUC_MultiFunction_Padding - 2 * g_NUC_MultiFunction_LengthWidth, me_tooltip_pin.h - 2 * g_NUC_MultiFunction_LengthWidth);
                                me_tooltip_pin.ctx.fillStyle = "#000000";   // black text
                                me_tooltip_pin.ctx.fillText(tooltipText, g_NUC_MultiFunction_Padding, tooltip_textYposition);

                                tooltipText = null;
                            }
                        }
                    }
                },
                mouseLeave: function () {
                    var pinIndex = me.lastPinIndex,
                        pinName;

                    if (me.lastPinIndex !== -1) {
                        me.ctx.strokeStyle = "#000000"; // black stroke
                        me.ctx.fillStyle = me.savedPinPadColor[pinIndex];

                        if (g_partNumber_package.indexOf('SOP') !== -1) {
                            switch (me.whichSide) {
                                case 0: // left side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Width * 4 / 5 + g_NUC_Pin_Surrounding);
                                    break;
                                case 1: // right side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                    break;
                                default:
                                    break;
                            }
                        }
                        else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                            // populate pinName
                            if (g_pinCurrentDescription[pinIndex] !== "") {
                                pinName = updatePinDescription(g_pinCurrentDescription[pinIndex]);
                            }
                            else {
                                pinName = me.savedPinName[pinIndex];
                            }
                            if (pinName.toLowerCase().indexOf('toolnotshow') === -1) {
                                me.ctx.beginPath();
                                me.ctx.arc(me.x[pinIndex], me.y[pinIndex], me.r, 0, Math.PI * 2, true);
                                me.ctx.fill();

                                if (pinName.length > 6) {
                                    pinName = pinName.slice(0, 6) + '..';
                                }
                                me.ctx.font = g_commonStringFont;
                                me.ctx.fillStyle = 'black';
                                me.ctx.fillText(pinName, me.x[pinIndex] - me.ctx.measureText(pinName).width / 2, me.y[pinIndex] + parseInt(me.ctx.font, 10) / 2);
                            }
                        }
                        else {
                            switch (me.whichSide) {
                                case 0: // down side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(me.x[pinIndex] - me.x[0] + g_NUC_Pin_Surrounding, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(me.x[pinIndex] - me.x[0] + g_NUC_Pin_Surrounding, g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = 'black';
                                    x = me.x[pinIndex] - me.x[0] + g_NUC_Pin_Surrounding;
                                    y = g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding + g_NUC_Pin_Height;
                                    me.ctx.save();
                                    me.ctx.translate(x, y);
                                    me.ctx.rotate(-Math.PI / 2);
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth, g_NUC_Pin_Width * 4 / 5);
                                    me.ctx.restore();
                                    break;
                                case 1: // right side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                    break;
                                case 2: // upper side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(me.x[pinIndex] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(me.x[pinIndex] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding, g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = 'black';
                                    //me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding + g_NUC_Pin_Width * 4 / 5);
                                    x = me.x[pinIndex] - me.x[me.oneSidePinNumber - 1] + g_NUC_Pin_Surrounding;
                                    y = g_NUC_Pin_Surrounding + g_NUC_Pin_Height;
                                    me.ctx.save();
                                    me.ctx.translate(x, y);
                                    me.ctx.rotate(-Math.PI / 2);
                                    me.ctx.textAlign = "end";
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_Height, g_NUC_Pin_Width * 4 / 5);
                                    me.ctx.restore();
                                    break;
                                case 3: // left side
                                    if (g_bLessThanOrEqualIE8) {
                                        me.ctx.strokeRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    }
                                    me.ctx.fillRect(g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Surrounding, me.w, me.h);
                                    me.ctx.fillStyle = 'black';
                                    me.ctx.fillText(me.savedPinName[pinIndex], g_NUC_Pin_LengthWidth + g_NUC_Pin_Surrounding, me.y[pinIndex] - me.y[0] + g_NUC_Pin_Width * 4 / 5 + g_NUC_Pin_Surrounding);
                                    break;
                                default:
                                    break;
                            }
                        }
                        me.lastPinIndex = -1;

                        g_utility.removeContext($('#' + me.inner + "_tooltip_pin"));
                        // de-reference
                        pinIndex = null;
                    }
                },
                pinClickHandler: function () {
                    var j,
                        maxJ,
                        pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][me.pin[me.currentPinIndex] - 1],
                        gpioNumber,
                        multiFunctionLabels = [],
                        multiFunction_Width = 0,
                        context = g_utility.getContext($("#NUC_PinConfiguration_Canvas")[0]),
                        yPosition,
                        cfg_gpiosIndex,
                        x,
                        y,
                        legalInner,
                        colorBeingUsed,
                        newLineThreshold = 10;

                    var pin = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex].indexOf(pinName) + 1;
                    // 同一個pin但不同IP，跳通知提醒使用者已經鎖定
                    if (me.currentPinIndex !== -1 && isThisPinLocked(pin)) {
                        showLockedWarningDialog();
                    }
                    // 正常流程
                    else if (me.currentPinIndex !== -1) {
                        // clear old selections
                        restoreAllPinMultiFunctionSelections();
                        // restricted to GPIOs
                        if (g_chipType === 'N9H30K63IIM' &&
                            pinName.indexOf('ADC') != -1) {  // 有特別的pin為ADCX
                            gpioNumber = parseInt(pinName.sliceAfterX('.'), 10);
                            pinName += ':0';
                            cfg_gpiosIndex = decide_cfg_gpiosIndex(pinName, parseInt(pinName.sliceAfterX('.'), 10));//(pinName.slice(1, 2).charCodeAt(0) - 'A'.charCodeAt(0)) * 16 + parseInt(pinName.slice(3), 10);

                            x = me.x[me.currentPinIndex];
                            y = me.y[me.currentPinIndex];

                            // decide multiFunction_Width
                            multiFunction_Width = 60;
                            switch (pinName.slicePriorToX(':')) {
                                case 'ADC3':
                                    multiFunctionLabels.push("VSENSE");
                                    break;
                                case 'ADC4':
                                    multiFunctionLabels.push("YM");
                                    break;
                                case 'ADC5':
                                    multiFunctionLabels.push("YP");
                                    break;
                                case 'ADC6':
                                    multiFunctionLabels.push("XM");
                                    break;
                                case 'ADC7':
                                    multiFunctionLabels.push("XP");
                                    break;
                                default:
                                    break;
                            }

                            multiFunctionLabels.push("Reset");

                            g_drawnMultiFunctionSeletions = [];
                            for (j = 0, maxJ = multiFunctionLabels.length; j < maxJ; j += 1) {
                                if (!g_bLessThanOrEqualIE8 && g_currIEZoom > 100) {
                                    yPosition = y + j * g_NUC_MultiFunction_Height;
                                }
                                else {
                                    yPosition = y + j * g_NUC_MultiFunction_Height / g_currIEZoom * 100;
                                }

                                // highlight the selection of the used module
                                colorBeingUsed = '#6495ED';
                                if (j !== maxJ - 1 && multiFunctionLabels[j] === g_pinCurrentDescription[me.pin[me.currentPinIndex] - 1]) {
                                    if ($.inArray(me.pin[me.currentPinIndex], g_pinsHighlightedByChipView) !== -1) {
                                        colorBeingUsed = g_colorForConfiguredByUser;
                                    }
                                    else {
                                        colorBeingUsed = g_colorForConfiguredByUser;
                                    }
                                }

                                if (g_chipType.indexOf('KM1M7CF') !== -1) {
                                    var lineNumber = Math.floor(j / newLineThreshold);
                                    g_drawnMultiFunctionSeletions[j] = drawPinMultiFunctionSelections().init(
                                        me.pin[me.currentPinIndex],
                                        j.toString(),
                                        multiFunctionLabels[j],
                                        multiFunction_Width,
                                        x + me.w + multiFunction_Width * lineNumber / g_currIEZoom * 100 + 3 * g_NUC_MultiFunction_Padding * lineNumber,
                                        yPosition - newLineThreshold * lineNumber * g_NUC_MultiFunction_Height / g_currIEZoom * 100,
                                        colorBeingUsed,
                                        true);
                                } else {
                                    g_drawnMultiFunctionSeletions[j] = drawPinMultiFunctionSelections().init(
                                        me.pin[me.currentPinIndex],
                                        j.toString(),
                                        multiFunctionLabels[j],
                                        multiFunction_Width,
                                        x + me.w,
                                        yPosition,
                                        colorBeingUsed,
                                        true);
                                }

                                legalInner = j.toString();
                                legalInner = legalInner.replaceSpecialCharacters();

                                $('#Pin_MultiFunction_Selection_' + legalInner).hover(g_drawnMultiFunctionSeletions[j].mouseEnter, g_drawnMultiFunctionSeletions[j].mouseLeave);
                                g_drawnMultiFunctionSeletions[j].draw();
                            }

                        } else if (isGPIOPin(pinName)) {
                            gpioNumber = parseInt(pinName.sliceAfterX('.'), 10);
                            pinName += ':0';
                            cfg_gpiosIndex = decide_cfg_gpiosIndex(pinName, parseInt(pinName.sliceAfterX('.'), 10));//(pinName.slice(1, 2).charCodeAt(0) - 'A'.charCodeAt(0)) * 16 + parseInt(pinName.slice(3), 10);
                            if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                                x = me.x[me.currentPinIndex] + g_NUC_Chip_StartPoint_X;
                                y = me.y[me.currentPinIndex] + g_NUC_Chip_StartPoint_Y + 10;
                            }
                            else {
                                x = me.x[me.currentPinIndex];
                                y = me.y[me.currentPinIndex];
                            }
                            // decide multiFunction_Width
                            for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; j < maxJ; j += 1) {
                                multiFunctionLabels[j] = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[j].slicePriorToX(':');

                                if (context.measureText(multiFunctionLabels[j]).width > multiFunction_Width) {
                                    multiFunction_Width = context.measureText(multiFunctionLabels[j]).width;
                                }
                            }

                            multiFunctionLabels.push("Reset");

                            g_drawnMultiFunctionSeletions = [];
                            for (j = 0, maxJ = multiFunctionLabels.length; j < maxJ; j += 1) {
                                if (!g_bLessThanOrEqualIE8 && g_currIEZoom > 100) {
                                    yPosition = y + j * g_NUC_MultiFunction_Height;
                                }
                                else {
                                    yPosition = y + j * g_NUC_MultiFunction_Height / g_currIEZoom * 100;
                                }

                                // highlight the selection of the used module
                                colorBeingUsed = '#6495ED';
                                if (j !== maxJ - 1 && multiFunctionLabels[j] === g_pinCurrentDescription[me.pin[me.currentPinIndex] - 1]) {
                                    if ($.inArray(me.pin[me.currentPinIndex], g_pinsHighlightedByChipView) !== -1) {
                                        colorBeingUsed = g_colorForConfiguredByUser;
                                    }
                                    else {
                                        colorBeingUsed = g_colorForConfiguredByUser;
                                    }
                                }

                                if (g_chipType.indexOf('KM1M7CF') !== -1) {
                                    var lineNumber = Math.floor(j / newLineThreshold);
                                    g_drawnMultiFunctionSeletions[j] = drawPinMultiFunctionSelections().init(
                                        me.pin[me.currentPinIndex],
                                        j.toString(),
                                        multiFunctionLabels[j],
                                        multiFunction_Width,
                                        x + me.w + multiFunction_Width * lineNumber / g_currIEZoom * 100 + 3 * g_NUC_MultiFunction_Padding * lineNumber,
                                        yPosition - newLineThreshold * lineNumber * g_NUC_MultiFunction_Height / g_currIEZoom * 100,
                                        colorBeingUsed,
                                        true);
                                } else {
                                    g_drawnMultiFunctionSeletions[j] = drawPinMultiFunctionSelections().init(
                                        me.pin[me.currentPinIndex],
                                        j.toString(),
                                        multiFunctionLabels[j],
                                        multiFunction_Width,
                                        x + me.w,
                                        yPosition,
                                        colorBeingUsed,
                                        true);
                                }

                                legalInner = j.toString();
                                legalInner = legalInner.replaceSpecialCharacters();

                                $('#Pin_MultiFunction_Selection_' + legalInner).hover(g_drawnMultiFunctionSeletions[j].mouseEnter, g_drawnMultiFunctionSeletions[j].mouseLeave);
                                g_drawnMultiFunctionSeletions[j].draw();
                            }
                        }
                    }
                    // de-reference
                    pinName = null;
                    gpioNumber = null;
                    multiFunctionLabels = [];
                    multiFunction_Width = null;
                    context = null;
                    yPosition = null;
                    cfg_gpiosIndex = null;
                    offset = null;
                    x = null;
                    y = null;
                    legalInner = null;
                    colorBeingUsed = null;
                }
            };
        return me;
    }

    function restoreAllPinMultiFunctionSelections() {
        var i,
            max;
        for (i = 0, max = g_drawnMultiFunctionSeletions.length; i < max; i += 1) {
            g_drawnMultiFunctionSeletions[i].restore();
        }

        g_drawnMultiFunctionSeletions = [];
    }

    function drawPinMultiFunctionSelections() {
        var me_tooltip = {},
            me = {
                init: function (pin, inner, label, multiFunction_Width, positionX, positionY, color, bInstallClickListener) {
                    var x,
                        y,
                        textFont;

                    me.pin = pin;
                    me.label = label;
                    me.color = color;
                    me.inner = 'Pin_MultiFunction_Selection_' + inner;
                    me.stage = $('#panel')[0].appendChild(ce("canvas", me.inner));

                    if (!g_bLessThanOrEqualIE8) {
                        x = positionX;
                        y = positionY;

                        if (g_currIEZoom < 100) {
                            me.w = multiFunction_Width / g_currIEZoom * 100;
                            me.h = g_NUC_MultiFunction_Height / g_currIEZoom * 100;
                            textFont = (12 / g_currIEZoom * 100) + 'px Times Arial';
                            me.textYposition = 14 / g_currIEZoom * 100;
                        }
                        else {
                            me.w = multiFunction_Width;
                            me.h = g_NUC_MultiFunction_Height;
                            textFont = '12px Arial';
                            me.textYposition = 14;
                        }
                    }
                    else {
                        me.w = multiFunction_Width;
                        me.h = g_NUC_MultiFunction_Height;
                        x = positionX * g_currIEZoom / 100;
                        y = positionY * g_currIEZoom / 100;
                        textFont = '12px Arial';
                        me.textYposition = 14;
                    }

                    me.positionX = x;
                    me.positionY = y;

                    me.stage.setAttribute('width', me.w + 3 * g_NUC_MultiFunction_Padding);
                    me.stage.setAttribute('height', me.h);
                    if (!g_bReadyForRelease) {
                        me.stage.setAttribute('innerText', label); // for functional test
                    }

                    me.stage.setAttribute('style', 'z-index:2; position:absolute; left:' + x + 'px; top:' + y + 'px;');
                    me.ctx = g_utility.getContext(me.stage);
                    me.ctx.font = textFont;
                    me.bInstallClickListener = bInstallClickListener;

                    if (bInstallClickListener) {
                        g_utility.addEvent(me.stage, "click", me.pinMultiFunctionSelectionsClickHandler);
                    }
                    // de-reference
                    x = null;
                    y = null;
                    textFont = null;
                    return me;
                },
                mouseEnter: function () {
                    var i,
                        max,
                        tooltipText,
                        tooltipTextLines;

                    me.ctx.fillStyle = '#B0C4DE';
                    me.ctx.fillRect(g_NUC_MultiFunction_LengthWidth, g_NUC_MultiFunction_LengthWidth,
                        me.w + 3 * g_NUC_MultiFunction_Padding - 2 * g_NUC_MultiFunction_LengthWidth, me.h - 2 * g_NUC_MultiFunction_LengthWidth);
                    me.ctx.fillStyle = "#000000";   // black text
                    me.ctx.fillText(me.label, g_NUC_MultiFunction_Padding, me.textYposition);

                    //draw the tooltip
                    if (g_bUserDisplayTooltip &&
                        NUTOOL_PIN.g_cfg_gpiosDescriptions.length > 0 &&
                        me.label !== "Reset") {
                        // MA35D1的GPIOPin(e.g. PA.0)需要用來提示電壓
                        if (g_chipType === "MA35D0" || g_chipType === "MA35D1" || g_chipType === "MA35H0" || !isGPIOPin(me.label)) {
                            tooltipText = extractPinDescription(me.label, me.pin);
                            if (tooltipText !== 'unknown') {
                                me_tooltip.stage = $('#panel')[0].appendChild(ce("canvas", me.inner + "_tooltip"));
                                tooltipTextLines = tooltipText.split('<br >');
                                me_tooltip.w = 0;
                                for (i = 0, max = tooltipTextLines.length; i < max; i++) {
                                    if (me.ctx.measureText(tooltipTextLines[i]).width > me_tooltip.w) {
                                        me_tooltip.w = me.ctx.measureText(tooltipTextLines[i]).width;
                                    }
                                }

                                if (g_partNumber_package.indexOf('SOP') !== -1) {
                                    if (me.pin > g_NUC_Pin_Total_Number / 2) {
                                        me_tooltip.stage.setAttribute('style', 'z-index:2; position:absolute; left:' + (me.positionX - me_tooltip.w - 3 * g_NUC_MultiFunction_Padding - g_NUC_MultiFunction_LengthWidth) + 'px; top:' + me.positionY + 'px;');
                                    }
                                    else {
                                        me_tooltip.stage.setAttribute('style', 'z-index:2; position:absolute; left:' + (me.positionX + me.w + 3 * g_NUC_MultiFunction_Padding + g_NUC_MultiFunction_LengthWidth) + 'px; top:' + me.positionY + 'px;');
                                    }
                                }
                                else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                                    if (me.pin > g_NUC_Pin_Total_Number / 2) {
                                        me_tooltip.stage.setAttribute('style', 'z-index:2; position:absolute; left:' + (me.positionX - me_tooltip.w - 3 * g_NUC_MultiFunction_Padding - g_NUC_MultiFunction_LengthWidth) + 'px; top:' + me.positionY + 'px;');
                                    }
                                    else {
                                        me_tooltip.stage.setAttribute('style', 'z-index:2; position:absolute; left:' + (me.positionX + me.w + 3 * g_NUC_MultiFunction_Padding + g_NUC_MultiFunction_LengthWidth) + 'px; top:' + me.positionY + 'px;');
                                    }
                                }
                                else {
                                    if (me.pin > g_NUC_Pin_Down_Number / 2 && me.pin <= (g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number / 2)) {
                                        me_tooltip.stage.setAttribute('style', 'z-index:2; position:absolute; left:' + (me.positionX - me_tooltip.w - 3 * g_NUC_MultiFunction_Padding - g_NUC_MultiFunction_LengthWidth) + 'px; top:' + me.positionY + 'px;');
                                    }
                                    else {
                                        me_tooltip.stage.setAttribute('style', 'z-index:2; position:absolute; left:' + (me.positionX + me.w + 3 * g_NUC_MultiFunction_Padding + g_NUC_MultiFunction_LengthWidth) + 'px; top:' + me.positionY + 'px;');
                                    }
                                }
                                me_tooltip.stage.setAttribute('width', me_tooltip.w + 3 * g_NUC_MultiFunction_Padding);
                                me_tooltip.stage.setAttribute('height', me.h * tooltipTextLines.length);
                                if (!g_bReadyForRelease) {
                                    me_tooltip.stage.setAttribute('innerText', tooltipText); // for functional test
                                }
                                me_tooltip.ctx = g_utility.getContext(me_tooltip.stage);
                                me_tooltip.ctx.font = me.ctx.font;
                                me_tooltip.ctx.strokeStyle = "#000000"; // black stroke
                                me_tooltip.ctx.lineWidth = 2;
                                me_tooltip.ctx.strokeRect(0, 0, me_tooltip.w + 3 * g_NUC_MultiFunction_Padding, me.h * tooltipTextLines.length);
                                me_tooltip.ctx.fillStyle = '#FFF6C0';
                                me_tooltip.ctx.fillRect(g_NUC_MultiFunction_LengthWidth, g_NUC_MultiFunction_LengthWidth,
                                    me_tooltip.w + 3 * g_NUC_MultiFunction_Padding - 2 * g_NUC_MultiFunction_LengthWidth, me.h * tooltipTextLines.length - 2 * g_NUC_MultiFunction_LengthWidth);
                                me_tooltip.ctx.fillStyle = "#000000"; // black text

                                for (i = 0, max = tooltipTextLines.length; i < max; i++) {
                                    me_tooltip.ctx.fillText(tooltipTextLines[i], g_NUC_MultiFunction_Padding, me.textYposition + (i * me.h));
                                }

                                tooltipText = null;
                            }
                        }
                    }
                },
                mouseLeave: function () {
                    me.ctx.fillStyle = me.color;
                    me.ctx.fillRect(g_NUC_MultiFunction_LengthWidth, g_NUC_MultiFunction_LengthWidth,
                        me.w + 3 * g_NUC_MultiFunction_Padding - 2 * g_NUC_MultiFunction_LengthWidth, me.h - 2 * g_NUC_MultiFunction_LengthWidth);
                    me.ctx.fillStyle = "#000000";   // black text
                    me.ctx.fillText(me.label, g_NUC_MultiFunction_Padding, me.textYposition);
                    g_utility.removeContext($('#' + me.inner + "_tooltip"));
                },
                draw: function () {
                    me.ctx.strokeStyle = "#000000"; // black stroke
                    me.ctx.strokeRect(0, 0, me.w + 3 * g_NUC_MultiFunction_Padding, me.h);
                    me.ctx.fillStyle = me.color;
                    me.ctx.fillRect(g_NUC_MultiFunction_LengthWidth, g_NUC_MultiFunction_LengthWidth,
                        me.w + 3 * g_NUC_MultiFunction_Padding - 2 * g_NUC_MultiFunction_LengthWidth, me.h - 2 * g_NUC_MultiFunction_LengthWidth);
                    me.ctx.fillStyle = "#000000";   // black text
                    me.ctx.fillText(me.label, g_NUC_MultiFunction_Padding, me.textYposition);
                },
                restore: function () {
                    //me.inner = me.inner.replaceSpecialCharacters();
                    g_utility.removeContext($('#' + me.inner + "_tooltip"));
                    g_utility.removeContext($('#' + me.inner));
                    // clear the unnecessary dialogs
                    destroyAllExistentDialogs();
                    // de-reference
                    me = null;
                },
                pinMultiFunctionSelectionsClickHandler: function () {
                    var i,
                        max,
                        currentNode,
                        pinModule,
                        module_local,
                        modulePins,
                        bHasBeenConfigured,
                        configuredPin;

                    // this should be invoked as soon as possible.
                    withdrawAllGreenPins();
                    // assert pin
                    // reset the configured pins
                    if (me.label === "Reset") {
                        // remove the recorded highlight pin
                        if (g_pinsHighlightedByChipView.length !== 0) {
                            for (i = 0, max = g_pinsHighlightedByChipView.length; i < max; i += 1) {
                                if (g_pinsHighlightedByChipView[i] === me.pin) {
                                    g_pinsHighlightedByChipView.splice(i, 1);
                                }
                            }
                        }

                        currentNode = g_pinCurrentDescription[me.pin - 1] + '_Pin' + me.pin;
                        currentNode = currentNode.replaceSpecialCharacters();
                        // please note that if the node had not been checked, the uncheck_node operation will not be invoked.
                        $("#moduleTree").jstree('uncheck_node', $("#" + currentNode));
                        if (!$("#" + currentNode).hasClass('jstree-unchecked')) {
                            module_local = specialModuleNaming(currentNode.slicePriorToX('_'));
                            modulePins = [];
                            modulePins[0] = me.pin;
                            // this method skips the conflict check and updateMFPTree(). We must use it carefully.
                            uncheckTreeViewCheckbox_Speedup(currentNode, module_local, modulePins);
                            updateMFPTree();
                            if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) !== 'undefined') {
                                for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module_local].length; i < max; i += 1) {
                                    if (g_MFPFunctionsWaitForBeenChecked[module_local][i] === currentNode) {
                                        g_MFPFunctionsWaitForBeenChecked[module_local][i] = "";
                                        break;
                                    }
                                }

                                for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module_local].length; i < max; i += 1) {
                                    if (g_MFPFunctionsWaitForBeenChecked[module_local][i] !== "") {
                                        break;
                                    }
                                    if (i === max - 1) {
                                        $("#" + module_local + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                                    }
                                }
                            }
                            module_local = null;
                            modulePins = [];
                        }

                        updatePinColor(me.pin, '#FFFFFF');  // white fill

                        restoreAllPinMultiFunctionSelections();
                    }
                    // configure pins
                    else {
                        // for the case of the multiple selections, check the gpio function has been configured by the other pin.
                        bHasBeenConfigured = false;
                        currentNode = me.label + '_Pin' + me.pin;
                        if ($.inArray(currentNode.restorePinTreeNodeName() + '_Intermediate', g_disabledSubNodesArray) !== -1) {
                            for (i = 0, max = g_disabledLeafNodesArray.length; i < max; i += 1) {
                                if (g_disabledLeafNodesArray[i].restorePinTreeNodeName() === currentNode.restorePinTreeNodeName() &&
                                    g_disabledLeafNodesArray[i] !== currentNode &&
                                    ($("#" + g_disabledLeafNodesArray[i]).hasClass('jstree-checked') === true ||
                                        g_pinCurrentDescription[parseInt(g_disabledLeafNodesArray[i].slice(g_disabledLeafNodesArray[i].indexOf('_Pin') + 4), 10) - 1].replaceSpecialCharacters().indexOf(g_disabledLeafNodesArray[i].restorePinTreeNodeName()) === 0)) {
                                    bHasBeenConfigured = true;
                                    configuredPin = g_disabledLeafNodesArray[i].slice(g_disabledLeafNodesArray[i].indexOf('_Pin') + 4);
                                    break;
                                }
                            }
                        }

                        if (bHasBeenConfigured) {
                            pinModule = specialModuleNaming(me.label);

                            if (pinModule.indexOf('_') !== -1) {
                                pinModule = pinModule.slicePriorToX('_');
                            }

                            if (typeof (me.pin) !== 'undefined' && me.pin !== null) {
                                showNoticeForMultipleSelections(function () { pinMultiFunctionSelectionsClickHandler_configurePinsPart(pinModule, me.pin, me.label); }, me.label, updatePinName(configuredPin));
                                //pinModule = null;
                            }
                        }
                        else {
                            pinMultiFunctionSelectionsClickHandler_configurePinsPart(specialModuleNaming(currentNode.slicePriorToX('_')), me.pin, me.label);
                        }
                        // de-reference
                        bHasBeenConfigured = null;
                        configuredPin = null;
                    }
                    // de-reference
                    currentNode = null;
                }
            };
        return me;
    }

    function pinMultiFunctionSelectionsClickHandler_configurePinsPart(module, pin, label) {
        var i,
            max,
            $moduleTree = $("#moduleTree"),
            currentNode = g_pinCurrentDescription[pin - 1] + '_Pin' + pin,
            moduleNames = [],
            module_local,
            modulePins;
        // first, uncheck the last subnode of the supported module tree
        currentNode = currentNode.replaceSpecialCharacters();
        // please note that if the node had not been checked, the uncheck_node operation will not be invoked.
        $moduleTree.jstree('uncheck_node', $("#" + currentNode));
        if (!$("#" + currentNode).hasClass('jstree-unchecked')) {
            module_local = specialModuleNaming(currentNode.slicePriorToX('_'));
            modulePins = [];
            modulePins[0] = pin;

            // this method skips the conflict check and updateMFPTree(). We must use it carefully.
            uncheckTreeViewCheckbox_Speedup(currentNode, module_local, modulePins);
            if (typeof (g_MFPFunctionsWaitForBeenChecked[module_local]) !== 'undefined') {
                for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module_local].length; i < max; i += 1) {
                    if (g_MFPFunctionsWaitForBeenChecked[module_local][i] === currentNode) {
                        g_MFPFunctionsWaitForBeenChecked[module_local][i] = "";
                        break;
                    }
                }

                for (i = 0, max = g_MFPFunctionsWaitForBeenChecked[module_local].length; i < max; i += 1) {
                    if (g_MFPFunctionsWaitForBeenChecked[module_local][i] !== "") {
                        break;
                    }
                    if (i === max - 1) {
                        $("#" + module_local + '_Root').removeClass('jstree-undetermined').addClass('jstree-unchecked');
                    }
                }
            }
            module_local = null;
            modulePins = [];
        }

        // second, check the expected node
        // check the relevant subnode of the supported module tree
        currentNode = label + '_Pin' + pin;
        currentNode = currentNode.replaceSpecialCharacters();
        $moduleTree.jstree('check_node', $("#" + currentNode));
        // if check fails, open the parent and intermediate node.
        if (!$('#' + currentNode).hasClass('jstree-checked')) {
            $moduleTree.jstree("open_node", $('#' + module + '_Root'));
            $moduleTree.jstree("open_node", $('#' + label + '_Intermediate'));
            $moduleTree.jstree('check_node', $("#" + currentNode));
        }

        updatePinColor(pin, g_colorForConfiguredByUser);

        // this if-else should be placed behind first, uncheck the last subnode of the supported module tree
        if (typeof (g_pinsHighlightedByChipView) === 'undefined') {
            g_pinsHighlightedByChipView[0] = pin;
        }
        else {
            g_pinsHighlightedByChipView.push(pin);
        }

        restoreAllPinMultiFunctionSelections();

        module = module.replaceSpecialCharacters();
        label = label.replaceSpecialCharacters();
        // adjust the position of the scrollbar to the checked node
        $moduleTree.jstree("close_all");
        $moduleTree.jstree("open_node", $('#' + module + '_Root'));
        $moduleTree.jstree("open_node", $('#' + label + '_Intermediate'));

        moduleNames = getPropertyNames(g_module_pins);
        moduleNames.sort();

        $moduleTree.scrollTop($.inArray(module, moduleNames) * 18);
        // de-reference
        i = null;
        max = null;
        currentNode = null;
        $moduleTree = null;
        moduleNames = [];
    }

    function extractPinDescription(multifunctionName, pinNumber) {
        var i,
            max,
            local_PinDescription = "",
            local_PinDescription_1 = "",
            bFound = false,
            bHasA = false;

        for (i = 0, max = NUTOOL_PIN.g_cfg_gpiosDescriptions.length; i < max; i += 1) {
            local_PinDescription_1 = local_PinDescription = NUTOOL_PIN.g_cfg_gpiosDescriptions[i].replace('Note:', '<br >Note:');

            bHasA = false;
            if (local_PinDescription.indexOf('@') !== -1) {
                local_PinDescription_1 = local_PinDescription_1.slice(local_PinDescription_1.indexOf('@') + 1, local_PinDescription_1.indexOf(':'));
                bHasA = true;
            }


            if (local_PinDescription.indexOf(multifunctionName + ':') === 0 || local_PinDescription.indexOf(multifunctionName + '@') === 0) {
                if (!bHasA || (local_PinDescription_1 === NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pinNumber - 1])) {
                    bFound = true;
                    break;
                }
            }
        }

        i = null;
        max = null;

        if (bFound) {
            local_PinDescription = local_PinDescription.slice(local_PinDescription.indexOf(':') + 1);
        }
        else {

            local_PinDescription = "unknown";
        }

        return local_PinDescription;
    }

    function showNoticeForMultipleSelections(cancelFunction, module, configuredPin) {
        var title,
            content,
            okButton,
            cancelButton;
        if ($('#rootTree_Pin').is(':visible')) {
            decideUIlanguage();

            if (g_userSelectUIlanguage === "Simplified Chinese") {
                title = '通知';
                content = '预期的' + module + '已被第' + configuredPin + '脚位设置。请问你要取消旧的且改设置到现在的脚位吗?';
                okButton = '要';
                cancelButton = '不要';
            }
            else if (g_userSelectUIlanguage === "Traditional Chinese") {
                title = '通知';
                content = '預期的' + module + '已被第' + configuredPin + '腳位設置。請問你要取消舊的且改設置到現在的腳位嗎?';
                okButton = '要';
                cancelButton = '不要';
            }
            else {
                title = 'Notice';
                content = 'The expected ' + module + ' has been configured by the pin' + configuredPin + '. Would you like to cancel the old one and configure to the current pin?';
                okButton = 'Yes';
                cancelButton = 'No';
            }

            // close the last dialog
            destroyAllExistentDialogs();
            // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
            $('<div id="noticeForMultipleSelectionsDialog"><p>' + content + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>').dialog({
                modal: false,
                resizable: false,
                title: title,
                width: 500,
                height: 'auto',
                show: 'fade',
                hide: 'fade',
                close: function () {
                    $("#noticeForMultipleSelectionsDialog").dialog("destroy");
                },
                buttons: [
                    {
                        text: okButton,
                        click: function () {
                            cancelFunction();
                            if ($("#noticeForMultipleSelectionsDialog").dialog("isOpen")) {
                                $("#noticeForMultipleSelectionsDialog").dialog("destroy");
                            }
                        }
                    },
                    {
                        text: cancelButton,
                        click: function () {
                            restoreAllPinMultiFunctionSelections();
                            if ($("#noticeForMultipleSelectionsDialog").dialog("isOpen")) {
                                $("#noticeForMultipleSelectionsDialog").dialog("destroy");
                            }
                        }
                    }
                ]
            });
        }
        // de-reference
        title = null;
        content = null;
        okButton = null;
        cancelButton = null;
    }

    function initializeAll() {
        g_module_pins = [];
        g_usedPins = [];
        g_gpio_MFPs = [];
        g_saved_gpio_MFPs = [];
        g_pinCurrentModule = [];
        g_pinCurrentDescription = [];
        g_chipPinDescriptions = [];
        g_pinsHighlightedByChipView = [];
        if (typeof specialModuleNaming.specialModuleNames !== 'undefined') {
            delete specialModuleNaming.specialModuleNames;
        }
        restoreAllchipPins();
        restoreAllPinMultiFunctionSelections();

        $("#panel").unbind('mouseenter mouseleave');
        g_utility.removeContext($('#NUC_PinConfiguration_Canvas'));
        g_utility.removeContext($('#NUC_PinConfiguration_Canvas_Lining'));
        // remove tree to release the former one.
        $("#mfpTree").jstree('destroy');
        $("#supportedModules").jstree('destroy');
        $("#moduleTree").jstree('destroy');
        $("#mfpTree").remove();
        $("#supportedModules").remove();
        $("#moduleTree").remove();
        $("div").remove(".tooltip");
    }

    function buildChipTypeSelect() {
        var i,
            max,
            opt,
            $ChipTypeSelect = $("#ChipTypeSelect"),
            oldfilename,
            newfilename;
        // restrict the width of the div of ChipType and MCU
        $('#ChipType')[0].setAttribute('style', 'width:' + (g_NUC_TreeView_Width - 16) + 'px; border-right: 16px solid #F2F2F2;');
        $('#MCU')[0].setAttribute('style', 'width:' + (g_NUC_TreeView_Width - 16) + 'px; border-right: 16px solid #F2F2F2;');

        for (i = 0, max = g_cfg_chipSeries.length; i < max; i += 1) {
            opt = document.createElement("option");
            // for IE8
            try {
                opt.id = opt.innerHTML = opt.value = g_cfg_chipSeries[i];
            }
            catch (err) { }
            $ChipTypeSelect[0].appendChild(opt);
        }
        $ChipTypeSelect.val(chipTypeToChipSeries(g_chipType));

        // build the corresponding MCU selects.
        buildMCUselect();

        $ChipTypeSelect.on('change', function () {
            oldfilename = 'NUC_' + g_chipType + '_Content.js';
            g_chipType = chipSeriesToChipType($(this).val());
            newfilename = 'NUC_' + g_chipType + '_Content.js';

            replacejscssfile(oldfilename, newfilename, 'js', buildMCUselect);
        });
        // de-reference
        i = null;
        max = null;
        opt = null;
        $ChipTypeSelect = null;
        oldfilename = null;
        newfilename = null;
    }

    function buildMCUselect() {
        var i,
            max,
            $MCUselect = $('#MCUselect'),
            opt = {},
            mcuSelectArray = [],
            bCorrectpartNumber_package = false;
        // remove all MCU selects then populate new ones.
        if ($MCUselect.children().length > 0) {
            $MCUselect.children().remove();
        }

        for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
            try {
                mcuSelectArray.push(NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')');
            }
            catch (err) { }
        }
        mcuSelectArray.sort(natualSort);
        for (i = 0, max = mcuSelectArray.length; i < max; i += 1) {
            opt = document.createElement("option");
            opt.id = opt.innerHTML = opt.value = mcuSelectArray[i];
            $MCUselect[0].appendChild(opt);
        }
        // check if the g_partNumber_package is correct
        for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
            if (NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')' === g_partNumber_package) {
                bCorrectpartNumber_package = true;
                break;
            }
        }

        if (!bCorrectpartNumber_package) {
            $MCUselect.val($("#MCUselect option:first-child").val()).change();
        } else if (deviceConnected) {   // 特別為了connect device流程加的，避免和原流程混淆
            for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
                if (NUTOOL_PIN.g_cfg_chips[i].name === connectedDevicePID) {    // 因為從PartNumID只能反推出PID，所以要再加上pkg
                    connectedDevicePID = NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')';
                    break;
                }
            }
            $MCUselect.val(connectedDevicePID).change();
        } else {
            $MCUselect.val(g_partNumber_package);
        }
        // update Chip Series when loading an incorrect config file
        $("#ChipTypeSelect").val(chipTypeToChipSeries(g_chipType));

        $MCUselect.on('change', function () {
            if (g_selectedPartNoValue !== $(this).val()) {
                g_selectedPartNoValue = $(this).val();
                // to prevent the select from hanging here due to invoking a big function, the function will be invoked immediately after this event is finished.
                setTimeout(afterMCUchange, 0);
            }
        });
        // de-reference
        i = null;
        max = null;
        mcuSelectArray = [];
        opt = null;
        bCorrectpartNumber_package = null;
        $MCUselect = null;
    }

    function afterMCUchange() {
        var oldChipType;
        avoidClicking();

        if (g_selectedPartNoValue !== g_partNumber_package) {
            // to tackle the case of multiple usage of this app
            try { window.external.updateCurrentDialogSize(); } catch (err) { }

            oldChipType = g_chipType;
            g_chipType = decideNewChipType(g_selectedPartNoValue);
            replacejscssfile('NUC_' + oldChipType + '_Content.js', 'NUC_' + g_chipType + '_Content.js', 'js', afterMCUchangeAfterReplace);
        }

        oldChipType = null;
    }

    function afterMCUchangeAfterReplace() {
        initializeAll();

        g_partNumber_package = g_selectedPartNoValue;
        NUTOOL_PIN.decidepackageNumber();
        decideNUC_Pin_Total_Side_Number();
        // a new chip need not check nodes
        g_bCheckNodesBasedOnConfigFile = false;


        // 修改讀進來的content.js裡的NUTOOL_PIN，以符合Speech 8-bit CPU的需求。Request from AS50 YHChuang
        if (NUTOOL_PIN.g_bSwitchSpeech8bitCPUMode) {
            convertToSpeech8BitCPU();
        }

        // to release ram
        g_read_gpio_MFPs = [];
        g_pinsConfiguredByGPIO = [];
        g_userDefinedPin = {};
        g_readConfigFile = null;

        refresh();

        // do not forget to adjust the zoom feature
        g_currIEZoom = 100;
        zoomFunction();
        zoomToBestFit();

        destroyAllExistentDialogs();
    }

    function refresh() {
        createGPIO_MFPs(); // this should be called prior to drawChipViewAppearance() and decideChipViewCanvasSize().
        if (typeof NUTOOL_PER === 'undefined') {
            buildMCUselect();
        }
        decideModules(); // this should be called prior to decideChipViewCanvasSize().
        decideChipViewCanvasSize();

        // create trees
        buildMFPTree();
        buildModuleTree();

        drawChipViewAppearance();

        getPinCurrentState();
    }

    function createjscssfile(filename, filetype) {
        var fileref;
        if (filetype === "js") { //if filename is a external JavaScript file
            fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            if (typeof NUTOOL_PER !== 'undefined') {
                fileref.setAttribute("src", filename);
            }
            else {
                fileref.setAttribute("src", `./src/${filename}`);
            }
        }
        else if (filetype === "css") { //if filename is an external CSS file
            fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            if (typeof NUTOOL_PER !== 'undefined') {
                fileref.setAttribute("href", filename);
            }
            else {
                fileref.setAttribute("href", `./src/${filename}`);
            }

        }
        return fileref;
    }

    function replacejscssfile(oldfilename, newfilename, filetype, callback) {
        var i,
            targetelement = (filetype === "js") ? "script" : (filetype === "css") ? "link" : "none", //determine element type to create nodelist using
            targetattr = (filetype === "js") ? "src" : (filetype === "css") ? "href" : "none", //determine corresponding attribute to test for
            allsuspects = window.document.getElementsByTagName(targetelement),
            resetelement,
            resetfilename = 'NUC_Reset_Content.js',
            newelement;

        /* Hank: Reset NUTOOL_PIN start */
        if (typeof NUTOOL_PER !== 'undefined' && filetype === "js") {
            // Add the preceding path
            oldfilename = "PinConfigure/" + oldfilename;
            resetfilename = "PinConfigure/" + resetfilename;
        }
        resetelement = createjscssfile(resetfilename, filetype);

        // To update the data in js file fresh, remove the matched files and add the new one.
        for (i = allsuspects.length; i >= 0; i -= 1) { //search backwards within nodelist for matching elements to remove
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) !== null) {
                if (allsuspects[i].getAttribute(targetattr) === oldfilename) {
                    allsuspects[i].parentNode.removeChild(allsuspects[i]);
                }
                else if (allsuspects[i].getAttribute(targetattr) === resetfilename) {
                    allsuspects[i].parentNode.removeChild(allsuspects[i]);
                }
            }
        }

        allsuspects[0].parentNode.appendChild(resetelement);
        /* Hank: Reset NUTOOL_PIN end */

        if (typeof NUTOOL_PER !== 'undefined' && filetype === "js") {
            // Add the preceding path
            oldfilename = "PinConfigure/" + oldfilename;
            newfilename = "PinConfigure/" + newfilename;
        }
        if (newfilename !== "PeripheralConfigure/") {
            newelement = createjscssfile(newfilename, filetype);
            // 因為從html載入新content檔需要時間，所以等onload再執行callback function
            if (typeof callback === 'function') {
                newelement.onload = function () {
                    callback();
                }
            };
        }
        if (!g_bReadyForRelease && window.console) { window.console.log("In replacejscssfile, oldfilename:" + oldfilename + " / newfilename:" + newfilename); }

        // To update the data in js file fresh, remove the matched files and add the new one.
        for (i = allsuspects.length; i >= 0; i -= 1) { //search backwards within nodelist for matching elements to remove
            if (allsuspects[i] && allsuspects[i].getAttribute(targetattr) !== null) {
                if (allsuspects[i].getAttribute(targetattr) === oldfilename) {
                    allsuspects[i].parentNode.removeChild(allsuspects[i]);
                }
                else if (allsuspects[i].getAttribute(targetattr) === newfilename) {
                    allsuspects[i].parentNode.removeChild(allsuspects[i]);
                }
            }
        }

        allsuspects[0].parentNode.appendChild(newelement);
    }

    function destroyAllExistentDialogs() {
        if ($("#conflictDialog").dialog("isOpen")) {
            $("#conflictDialog").dialog("destroy");
        }

        if ($("#adjustedModulesDialog").dialog("isOpen")) {
            $("#adjustedModulesDialog").dialog("destroy");
        }

        if ($("#warningForSavingDialog").dialog("isOpen")) {
            $("#warningForSavingDialog").dialog("destroy");
        }

        if ($("#showPinErrorDialog").dialog("isOpen")) {
            $("#showPinErrorDialog").dialog("destroy");
        }

        if ($("#noticeForMultipleSelectionsDialog").dialog("isOpen")) {
            $("#noticeForMultipleSelectionsDialog").dialog("destroy");
        }

        if ($("#generateCodeDialog").dialog("isOpen")) {
            $("#generateCodeDialog").dialog("destroy");
        }

        if ($("#printReportDialog").dialog("isOpen")) {
            $("#printReportDialog").dialog("destroy");
        }

        if ($("#runAnotherToolDialog").dialog("isOpen")) {
            $("#runAnotherToolDialog").dialog("destroy");
        }

        if ($("#connectToTargetDialog").dialog("isOpen")) {
            $("#connectToTargetDialog").dialog("destroy");
        }

        if ($("#languageDialog").dialog("isOpen")) {
            $("#languageDialog").dialog("destroy");
        }
    }

    function drawPinNumberAndDescription() {
        var i,
            max,
            context = g_utility.getContext($("#NUC_PinConfiguration_Canvas")[0]),
            numberColor,
            offset,
            x,
            y,
            measureText,
            pinName;

        context.font = g_commonStringFont;
        numberColor = 'white';
        if (g_partNumber_package.indexOf('SOP') !== -1) {
            for (i = 0, max = g_NUC_Pin_Total_Number / 2; i < max; i += 1) {
                // left side
                x = g_NUC_Chip_StartPoint_X + g_NUC_Text_Padding;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + i * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;
                context.fillStyle = numberColor;
                context.fillText((i + 1).toString(), x, y);

                if (g_bShowPinDescriptions) {
                    x = g_NUC_Chip_StartPoint_X - g_NUC_Pin_Height - g_NUC_TextDescription_Padding;
                    context.save();
                    //context.textAlign = "end";
                    context.fillStyle = 'black';
                    context.fillText(g_chipPinDescriptions[i], x - context.measureText(g_chipPinDescriptions[i]).width, y);
                    context.restore();
                }
                // right side
                x = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - i * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;
                measureText = context.measureText((i + 1 + g_NUC_Pin_Total_Number / 2).toString());
                context.fillStyle = numberColor;
                context.fillText((i + 1 + g_NUC_Pin_Total_Number / 2).toString(), x - measureText.width - g_NUC_Text_Padding, y);

                if (g_bShowPinDescriptions) {
                    x = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 + g_NUC_Pin_Height + g_NUC_TextDescription_Padding;
                    context.fillStyle = 'black';
                    context.fillText(g_chipPinDescriptions[i + g_NUC_Pin_Total_Number / 2], x, y);
                }
            }
        }
        else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            for (i = 0, max = g_NUC_Pin_Vertial_Number; i < max; i += 1) {
                // left side
                x = g_NUC_Chip_StartPoint_X + g_NUC_Text_Padding;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + g_NUC_Pin_Radius + (g_NUC_Pin_Vertial_Number - 1 - (i % g_NUC_Pin_Vertial_Number)) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval) + 4;
                context.fillStyle = numberColor;
                context.fillText((i + 1).toString(), x, y);
            }
            for (i = 0, max = g_NUC_Pin_Horizontal_Number; i < max; i += 1) {
                // down side
                x = g_NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + g_NUC_Pin_Radius + i * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval) - 4;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - 5;
                context.fillStyle = numberColor;
                context.fillText(NUTOOL_PIN.g_horizontalIndexArray[i], x, y);
            }
        }
        else {
            for (i = 0, max = g_NUC_Pin_Down_Number; i < max; i += 1) {
                // down side
                offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Down_Number) / 2);
                x = g_NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length;
                context.save();
                context.translate(x, y);
                context.rotate(-Math.PI / 2);
                context.fillStyle = numberColor;
                context.fillText((i + 1).toString(), g_NUC_Text_Padding, g_NUC_Pin_Width * 4 / 5);
                context.restore();

                if (g_bShowPinDescriptions) {
                    y = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length + g_NUC_Pin_Height;
                    context.save();
                    context.translate(x, y);
                    context.rotate(-Math.PI / 2);
                    context.textAlign = "end";
                    context.fillStyle = 'black';
                    context.fillText(g_chipPinDescriptions[i], -g_NUC_Text_Padding, g_NUC_Pin_Width * 4 / 5);
                    context.restore();
                }
            }
            for (i = 0, max = g_NUC_Pin_Right_Number; i < max; i += 1) {
                // right side
                offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Right_Number) / 2);
                x = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;
                measureText = context.measureText((i + 1 + g_NUC_Pin_Down_Number).toString());
                context.fillStyle = numberColor;
                context.fillText((i + 1 + g_NUC_Pin_Down_Number).toString(), x - measureText.width - g_NUC_Text_Padding, y);

                if (g_bShowPinDescriptions) {
                    x = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length + g_NUC_Pin_Height + g_NUC_TextDescription_Padding;
                    context.fillStyle = 'black';
                    context.fillText(g_chipPinDescriptions[i + g_NUC_Pin_Down_Number], x, y);
                }
            }
            for (i = 0, max = g_NUC_Pin_Upper_Number; i < max; i += 1) {
                // upper side
                offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Upper_Number) / 2);
                x = g_NUC_Chip_StartPoint_X + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                y = g_NUC_Chip_StartPoint_Y - g_NUC_Pin_Height;
                context.save();
                context.translate(x, y);
                context.rotate(-Math.PI / 2);
                measureText = context.measureText((i + 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number).toString());
                context.fillStyle = numberColor;
                context.fillText((i + 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number).toString(), -g_NUC_Pin_Height - measureText.width - g_NUC_Text_Padding, g_NUC_Pin_Width * 4 / 5);
                context.restore();

                if (g_bShowPinDescriptions) {
                    context.save();
                    context.translate(x, y);
                    context.rotate(-Math.PI / 2);
                    context.fillStyle = 'black';
                    context.fillText(g_chipPinDescriptions[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number], 2 * g_NUC_TextDescription_Padding, g_NUC_Pin_Width * 4 / 5);
                    context.restore();
                }
            }
            for (i = 0, max = g_NUC_Pin_Left_Number; i < max; i += 1) {
                // left side
                offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Left_Number) / 2);
                x = g_NUC_Chip_StartPoint_X + g_NUC_Text_Padding;
                y = g_NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;
                context.fillStyle = numberColor;
                context.fillText((i + 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number).toString(), x, y);

                if (g_bShowPinDescriptions) {
                    x = g_NUC_Chip_StartPoint_X - g_NUC_Pin_Height - g_NUC_TextDescription_Padding;
                    context.save();
                    //context.textAlign = "end";
                    context.fillStyle = 'black';
                    context.fillText(g_chipPinDescriptions[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number], x - context.measureText(g_chipPinDescriptions[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number]).width, y);
                    context.restore();
                }
            }
        }
        // de-reference
        i = null;
        max = null;
        numberColor = null;
        context = null;
        offset = null;
        x = null;
        y = null;
        pinName = null;
    }

    function drawColorNotations() {
        var context = g_utility.getContext($("#NUC_PinConfiguration_Canvas")[0]),
            colorNotation_Shift_Index = 0,
            x,
            y,
            textConfiguredByUser,
            textTooltipOnHover,
            textFocusedByMouse,
            textNotGPIO,
            textReviewReport;

        if (g_userSelectUIlanguage === "Simplified Chinese") {
            textConfiguredByUser = '被用户配置';
            textTooltipOnHover = '悬停工具提示';
            textFocusedByMouse = '滑鼠焦点';
            textNotGPIO = '非可配置的';
            textReviewReport = '双击用户定义';
            context.font = '12px 新細明體';
        }
        else if (g_userSelectUIlanguage === "Traditional Chinese") {
            textConfiguredByUser = '被使用者配置';
            textTooltipOnHover = '懸停工具提示';
            textFocusedByMouse = '滑鼠焦點';
            textNotGPIO = '非可配置的';
            textReviewReport = '雙擊用戶定義';
            context.font = '12px 新細明體';
        }
        else {
            textConfiguredByUser = 'Configured by User';
            textTooltipOnHover = 'Tooltip on Hover';
            textFocusedByMouse = 'Focused by Mouse';
            textNotGPIO = 'Not Configurable';
            textReviewReport = 'Dblclicked for UserDefined';
            context.font = g_commonStringFont;
        }

        context.strokeStyle = "black";
        // if ($('html').hasClass('ie10+')) {
        //     colorNotation_Shift_Index += 1;
        //     x = g_NUC_Chip_StartPoint_X - g_colorNotation_Shift_X - g_NUC_Pin_Height - g_colorNotation_Text_Width;
        //     y = g_NUC_Chip_StartPoint_Y - g_colorNotation_Shift_Y - colorNotation_Shift_Index * (g_NUC_Pin_Width + g_colorNotation_Interval);
        //     context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        //     context.fillStyle = '#404040';
        //     context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        //     context.fillStyle = 'black';
        //     context.fillText(textReviewReport, x + g_NUC_Pin_Height + 3, y + g_NUC_Pin_Width * 4 / 5);
        // }

        colorNotation_Shift_Index += 1;
        x = g_NUC_Chip_StartPoint_X - g_colorNotation_Shift_X - g_NUC_Pin_Height - g_colorNotation_Text_Width;
        y = g_NUC_Chip_StartPoint_Y - g_colorNotation_Shift_Y - colorNotation_Shift_Index * (g_NUC_Pin_Width + g_colorNotation_Interval);
        context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        context.fillStyle = g_colorForConfiguredByUser;
        context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        context.fillStyle = 'black';
        context.fillText(textConfiguredByUser, x + g_NUC_Pin_Height + 3, y + g_NUC_Pin_Width * 4 / 5);

        colorNotation_Shift_Index += 1;
        x = g_NUC_Chip_StartPoint_X - g_colorNotation_Shift_X - g_NUC_Pin_Height - g_colorNotation_Text_Width;
        y = g_NUC_Chip_StartPoint_Y - g_colorNotation_Shift_Y - colorNotation_Shift_Index * (g_NUC_Pin_Width + g_colorNotation_Interval);
        context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        context.fillStyle = g_colorForTooltipOnHover;
        context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        context.fillStyle = 'black';
        context.fillText(textTooltipOnHover, x + g_NUC_Pin_Height + 3, y + g_NUC_Pin_Width * 4 / 5);

        colorNotation_Shift_Index += 1;
        x = g_NUC_Chip_StartPoint_X - g_colorNotation_Shift_X - g_NUC_Pin_Height - g_colorNotation_Text_Width;
        y = g_NUC_Chip_StartPoint_Y - g_colorNotation_Shift_Y - colorNotation_Shift_Index * (g_NUC_Pin_Width + g_colorNotation_Interval);
        context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        context.fillStyle = g_colorForFocusedByMouse;
        context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        context.fillStyle = 'black';
        context.fillText(textFocusedByMouse, x + g_NUC_Pin_Height + 3, y + g_NUC_Pin_Width * 4 / 5);

        colorNotation_Shift_Index += 1;
        x = g_NUC_Chip_StartPoint_X - g_colorNotation_Shift_X - g_NUC_Pin_Height - g_colorNotation_Text_Width;
        y = g_NUC_Chip_StartPoint_Y - g_colorNotation_Shift_Y - colorNotation_Shift_Index * (g_NUC_Pin_Width + g_colorNotation_Interval);
        context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        context.fillStyle = g_colorForNotGPIO;
        context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
        context.fillStyle = 'black';
        context.fillText(textNotGPIO, x + g_NUC_Pin_Height + 3, y + g_NUC_Pin_Width * 4 / 5);
    }

    function clearColorNotations() {
        var context,
            colorNotation_Shift_Index = 5,
            x,
            y;

        if (!$('html').hasClass('ie10+')) {
            colorNotation_Shift_Index = 4;
        }

        context = g_utility.getContext($("#NUC_PinConfiguration_Canvas")[0]);
        x = g_NUC_Chip_StartPoint_X - g_colorNotation_Shift_X - g_NUC_Pin_Height - g_colorNotation_Text_Width - 3;
        y = g_NUC_Chip_StartPoint_Y - g_colorNotation_Shift_Y - colorNotation_Shift_Index * (g_NUC_Pin_Width + g_colorNotation_Interval);
        context.fillStyle = '#FFFFFF';
        context.fillRect(x, y, g_colorNotation_Shift_X + g_NUC_Pin_Height + g_colorNotation_Text_Width, g_colorNotation_Shift_Y + 4 * (g_NUC_Pin_Width + g_colorNotation_Interval));
        // de-reference
        context = null;
        x = null;
        y = null;
    }

    function update_gpio_MFPs(pin, module, bModuleIsFullName) {
        var i,
            j,
            max,
            maxJ,
            pinName,
            pinNameAppended;

        // restore to the primitive name
        module = module.restorePinTreeNodeName().restoreSpecialCharacters();

        pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin];
        pinNameAppended = pinName + ':0';
        for (i = 0, max = NUTOOL_PIN.g_cfg_gpios.length; i < max; i += 1) {
            if (pinNameAppended === NUTOOL_PIN.g_cfg_gpios[i].f[0]) {
                for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios[i].f.length; j < maxJ; j += 1) {
                    if (typeof bModuleIsFullName === 'undefined' || bModuleIsFullName === false) {
                        if (module !== 'AD') {
                            if (NUTOOL_PIN.g_cfg_gpios[i].f[j].indexOf(module) === 0) {
                                writeNewValueToGPIO_MFPs(pinName, NUTOOL_PIN.g_cfg_gpios[i].f[j].slice(NUTOOL_PIN.g_cfg_gpios[i].f[j].indexOf(':') + 1));

                                // reset FPS register value
                                if (g_chipType.indexOf('KM1M7CF') !== -1) {
                                    var fpsName, fpsValue, stringL;
                                    for (k = 0, max = NUTOOL_PIN.g_cfg_gpios_FPS_mapping.length; k < max; k += 1) {
                                        if (NUTOOL_PIN.g_cfg_gpios_FPS_mapping[k].indexOf(pinName) !== -1) {
                                            fpsName = NUTOOL_PIN.g_cfg_gpios_FPS_mapping[k].sliceAfterX(':');
                                            break;
                                        }
                                    }
                                    if (fpsName != undefined) {
                                        stringL = fpsName + '_SEL';
                                        g_gpio_MFPs[stringL] = 0 >>> 0;
                                    }
                                }

                                break;
                            }
                        }
                        else {
                            if (NUTOOL_PIN.g_cfg_gpios[i].f[j].indexOf('ADC') !== 0 && NUTOOL_PIN.g_cfg_gpios[i].f[j].indexOf(module) === 0) {
                                writeNewValueToGPIO_MFPs(pinName, NUTOOL_PIN.g_cfg_gpios[i].f[j].slice(NUTOOL_PIN.g_cfg_gpios[i].f[j].indexOf(':') + 1));
                                break;
                            }
                        }
                    }
                    else {
                        pinNameAppended = NUTOOL_PIN.g_cfg_gpios[i].f[j];
                        pinNameAppended = pinNameAppended.slicePriorToX(':');
                        if (pinNameAppended === module) {
                            writeNewValueToGPIO_MFPs(pinName, NUTOOL_PIN.g_cfg_gpios[i].f[j].slice(NUTOOL_PIN.g_cfg_gpios[i].f[j].indexOf(':') + 1));

                            // write new value for FPS GPIO
                            if (g_chipType.indexOf('KM1M7CF') !== -1) {
                                var fpsName, fpsValue, stringL;
                                for (k = 0, max = NUTOOL_PIN.g_cfg_gpios_FPS_mapping.length; k < max; k += 1) {
                                    if (NUTOOL_PIN.g_cfg_gpios_FPS_mapping[k].indexOf(pinName) !== -1) {
                                        fpsName = NUTOOL_PIN.g_cfg_gpios_FPS_mapping[k].sliceAfterX(':');
                                        break;
                                    }
                                }
                                if (fpsName != undefined) {
                                    for (m = 0, max = NUTOOL_PIN.g_cfg_gpios_FPS_value.length; m < max; m += 1) {
                                        if (NUTOOL_PIN.g_cfg_gpios_FPS_value[m].indexOf(module) !== -1) {
                                            fpsValue = NUTOOL_PIN.g_cfg_gpios_FPS_value[m].sliceAfterX(':');
                                            break;
                                        }
                                    }
                                    if (fpsValue != undefined) {
                                        stringL = fpsName + '_SEL';
                                        g_gpio_MFPs[stringL] = fpsValue >>> 0;
                                    }
                                    // 如果不是選到FPS function，就 reset FPS register value
                                    else {
                                        stringL = fpsName + '_SEL';
                                        g_gpio_MFPs[stringL] = 0 >>> 0;
                                    }
                                }
                            }
                            break;
                        }
                    }
                }
                break;
            }
        }

        // 對於KM1M4BF5x來說，如果DBG_SWDD(PB.5)或DBG_SWDCLK(PB.6)被選到的話，把SELSWD設定成0x01，反之則0x00
        if (g_chipType.indexOf('KM1M4BF5') !== -1) {
            if (g_pinCurrentDescription.filter(function (v) { return /DBG_SWDD/.test(v) }).length != 0
                || g_pinCurrentDescription.filter(function (v) { return /DBG_SWDCLK/.test(v) }).length != 0) {
                g_gpio_MFPs['SELSWD'] = 1 >>> 0;
            } else {
                g_gpio_MFPs['SELSWD'] = 0 >>> 0;
            }
        }

        // de-reference
        i = null;
        j = null;
        max = null;
        maxJ = null;
        pinName = null;
        pinNameAppended = null;
    }

    function initializeAll_redraw() {
        restoreAllchipPins();
        restoreAllPinMultiFunctionSelections();
    }

    function refresh_redraw() {
        decideChipViewCanvasSize();
        // adjust the height of moduleTree
        if ($('#mfpTree').css('display') === 'none') {
            $('#moduleTree').height(g_NUC_rootTree_Height - $("#supportedModules").height());
        }
        else {
            $('#mfpTree').height(g_MFPTreeHeight);
            $('#moduleTree').height(g_NUC_rootTree_Height - $("#ChipType").height() - $("#MCU").height() - g_MFPTreeHeight - 6 - $("#supportedModules").height());
        }

        drawChipViewAppearance();

        drawPinColorAndShowChosenPinFeature();
    }

    function zoomFunction() {
        var $panel = $('#panel');
        if (!g_bLessThanOrEqualIE8) {
            $('#parentOfPanel').css('zoom', ' ' + g_currIEZoom + '%');
            $panel.width((window.innerWidth - g_NUC_TreeView_Width - 8) / g_currIEZoom * 100);
            $panel.height((window.innerHeight - g_NUC_Taskbar_height - 8) / g_currIEZoom * 100);

            $panel.css({
                position: "absolute",
                left: ((g_NUC_TreeView_Width) / g_currIEZoom * 100) + "px"
            });
        }
        else {
            $panel.find('canvas').css('zoom', ' ' + g_currIEZoom + '%');
            $panel.width(g_Dialog_Width - g_NUC_TreeView_Width - 8);
            $panel.height(window.innerHeight - g_NUC_Taskbar_height - 8);
            $('#NUC_PinConfiguration_Canvas').width(g_Canvas_Width * g_currIEZoom / 100);
            $('#NUC_PinConfiguration_Canvas').height(g_Canvas_Height * g_currIEZoom / 100);
            $('#NUC_PinConfiguration_Canvas_Lining').width(g_Canvas_Width * g_currIEZoom / 100);
            $('#NUC_PinConfiguration_Canvas_Lining').height(g_Canvas_Height * g_currIEZoom / 100);
            // four side chip pins
            if (g_partNumber_package.indexOf('SOP') !== -1) {
                $('#pin_side_0').width((g_chipPins[0].w + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_0').height((g_chipPins[0].h + g_chipPins[0].y[g_chipPins[0].oneSidePinNumber - 1] - g_chipPins[0].y[0] + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_1').width((g_chipPins[1].w + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_1').height((g_chipPins[1].h + g_chipPins[1].y[0] - g_chipPins[1].y[g_chipPins[1].oneSidePinNumber - 1] + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
            }
            else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
                $('#pin_side_0').width(g_NUC_Chip_Length * g_currIEZoom / 100);
                $('#pin_side_0').height(g_NUC_Chip_Length * g_currIEZoom / 100);
            }
            else {
                $('#pin_side_0').width((g_chipPins[0].w + g_chipPins[0].x[g_chipPins[0].oneSidePinNumber - 1] - g_chipPins[0].x[0] + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_0').height((g_chipPins[0].h + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_1').width((g_chipPins[1].w + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_1').height((g_chipPins[1].h + g_chipPins[1].y[0] - g_chipPins[1].y[g_chipPins[1].oneSidePinNumber - 1] + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_2').width((g_chipPins[2].w + g_chipPins[2].x[0] - g_chipPins[2].x[g_chipPins[2].oneSidePinNumber - 1] + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_2').height((g_chipPins[2].h + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_3').width((g_chipPins[3].w + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
                $('#pin_side_3').height((g_chipPins[3].h + g_chipPins[3].y[g_chipPins[3].oneSidePinNumber - 1] - g_chipPins[3].y[0] + 2 * g_NUC_Pin_Surrounding) * g_currIEZoom / 100);
            }
            // clear the possible redundant image
            $panel.css('border', '3px solid white');
        }

        // remove the remaining pin selections.
        restoreAllPinMultiFunctionSelections();

        $panel = null;
    }

    function redrawForResizingDialog() {
        // determine the dialog's size
        //目前沒存recordedDialogSize，不知道怎麼調整，先都預設為792*590
        g_Dialog_Width = window.innerWidth;
        g_Dialog_Height = window.innerHeight;

        // determine the height of the treeview
        g_NUC_rootTree_Height = g_Dialog_Height - 10; // the redundant height derives from the select of chip type and MCU.
        if ((getPropertyNames(g_gpio_MFPs).length * 18 + 20) > (g_NUC_rootTree_Height / 3)) {
            g_MFPTreeHeight = g_NUC_rootTree_Height / 3;
        }
        else {
            g_MFPTreeHeight = getPropertyNames(g_gpio_MFPs).length * 18 + 20;
        }
        // adjust the size of the relevant UI elements
        $('#panel').width(g_Dialog_Width - g_NUC_TreeView_Width - 8);
        $('#panel').height(window.innerHeight - g_NUC_Taskbar_height - 8);
        // adjust the height of mfpTree and moduleTree
        if ($('#mfpTree').css('display') === 'none') {
            $('#moduleTree').height(g_NUC_rootTree_Height - $("#supportedModules").height());
        }
        else {
            $('#mfpTree').height(g_MFPTreeHeight);
            $('#moduleTree').height(g_NUC_rootTree_Height - $("#ChipType").height() - $("#MCU").height() - g_MFPTreeHeight - 6 - $("#supportedModules").height());
        }

        g_currIEZoom = 100;
        zoomFunction();
        zoomToBestFit();

        recordedDialogSize = null;
    }

    function uncheckAllNodes_core() {
        var pin,
            pinDescription,
            subNodeName,
            module,
            modulePins = [],
            currentNode,
            firstIndex,
            lastIndex,
            currentState,
            count = 0;

        while (g_usedPins.length > 0 && count < 1000) {
            count += 1;
            pin = parseInt(g_usedPins[0].slicePriorToX(':'), 10);
            pinDescription = g_chipPinDescriptions[pin - 1];

            firstIndex = -1;
            lastIndex = 0;
            // since there might be more than one module feature in the same pin, e.g. EBI,
            // we need compare firstIndex to lastIndex.
            currentState = g_pinCurrentModule[pin - 1];
            while (firstIndex !== lastIndex) {
                firstIndex = pinDescription.indexOf(currentState);
                lastIndex = pinDescription.lastIndexOf(currentState);
                subNodeName = pinDescription.slice(firstIndex);
                subNodeName = subNodeName.slicePriorToX('/');

                currentNode = subNodeName + '_Pin' + pin;
                currentNode = currentNode.replaceSpecialCharacters();
                // please note that if the node had not been checked, the uncheck_node operation will not be invoked.
                module = specialModuleNaming(currentNode.slicePriorToX('_'));
                modulePins[0] = pin;
                uncheckTreeViewCheckbox_Speedup(currentNode, module, modulePins);
                $("#" + currentNode).removeClass('jstree-checked');
                $("#" + currentNode).addClass('jstree-unchecked');
                $("#" + module + '_Root').removeClass('jstree-undetermined');
                $("#" + module + '_Root').removeClass('jstree-checked');
                $("#" + module + '_Root').addClass('jstree-unchecked');
                // move to the next possible module feature
                pinDescription = pinDescription.slice(firstIndex + 1);
            }
        }
        // in the end, we update the MPF tree, reset the color of the nodes, and close the moduleTree
        updateMFPTree();

        $("#moduleTree").find("li").each(function (index, listItem) {
            $('#' + $(listItem).attr("id") + ' >a').css("color", "black");
        });

        $("#moduleTree").jstree('close_all');

        // de-reference
        g_usedPins = [];
        modulePins = [];
        g_MFPFunctionsWaitForBeenChecked = [];
        g_MFPFunctionsWaitForMarkBlue = [];
        pin = null;
        pinDescription = null;
        subNodeName = null;
        module = null;
        currentNode = null;
        firstIndex = null;
        lastIndex = null;
        currentState = null;
        count = null;
    }

    function checkPinCorrectness(showDialog) {
        var i,
            k,
            m,
            n,
            max,
            maxK,
            maxM,
            maxN,
            recordedUIlanguage,
            registerValue = 0,
            mask,
            mfpValue,
            configuredMFPValue,
            pin,
            pinName,
            pinChosenFeature,
            checkedPins = [],
            readPinName,
            cfg_gpiosIndex,
            tempString,
            tempString1,
            tempString2,
            shiftBitNumber,
            errorMessage = "",
            tempLanguageString,
            tempLanguageString1,
            tempLanguageString2,
            tempLanguageString3,
            tempArray = [],
            bResult = true;

        // check Shared Bits Error
        if (NUTOOL_PIN.g_cfg_shareBits.length !== 0) {
            recordedUIlanguage = localStorage.getItem("UIlanguage");

            if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                tempLanguageString = " or ";
                tempLanguageString1 = " should be ";
                tempLanguageString2 = ".";
                tempLanguageString3 = "(configure it again)";
            } else {
                if (recordedUIlanguage === "Simplified Chinese") {
                    tempLanguageString = "或";
                    tempLanguageString1 = "应为";
                    tempLanguageString2 = "。";
                    tempLanguageString3 = "(再次配置它)";
                }
                else if (recordedUIlanguage === "Traditional Chinese") {
                    tempLanguageString = "或";
                    tempLanguageString1 = "應為";
                    tempLanguageString2 = "。";
                    tempLanguageString3 = "(再次配置它)";
                }
                else {
                    tempLanguageString = " or ";
                    tempLanguageString1 = " should be ";
                    tempLanguageString2 = ".";
                    tempLanguageString3 = "(configure it again)";
                }
            }

            for (i = 0, max = NUTOOL_PIN.g_cfg_shareBits.length; i < max; i += 1) {
                readPinName = NUTOOL_PIN.g_cfg_shareBits[i];

                for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
                    pin = -1;
                    for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                        if (NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m].indexOf(readPinName) !== -1) {
                            pinName = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[0];
                            pin = $.inArray(pinName, NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex]);
                            break;
                        }
                    }

                    if (pin !== -1 &&
                        $.inArray(pin, checkedPins) === -1) {
                        checkedPins.push(pin);

                        // from the register value
                        mfpValue = 0;
                        for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                            tempString1 = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m];
                            shiftBitNumber = parseInt(tempString1.slice(tempString1.indexOf('[') + 1, tempString1.indexOf(']')), 10);
                            mask = (0x1 << shiftBitNumber) >>> 0;
                            tempString2 = tempString1.slicePriorToX('[');
                            registerValue = g_gpio_MFPs[tempString2];
                            mfpValue = mfpValue + ((registerValue & mask) >>> shiftBitNumber) * Math.pow(2, m - 1);
                        }

                        // form the defined value
                        pinChosenFeature = g_pinCurrentDescription[pin];
                        configuredMFPValue = 0;
                        cfg_gpiosIndex = decide_cfg_gpiosIndex(pinName, parseInt(pinName.sliceAfterX('.'), 10));
                        for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; m < maxM; m += 1) {
                            if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m].indexOf(pinChosenFeature + ':') === 0) {
                                configuredMFPValue = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[m];
                                configuredMFPValue = parseInt(configuredMFPValue.slice(configuredMFPValue.indexOf(':') + 1), 10);
                                break;
                            }
                        }

                        if (pinChosenFeature === "") {
                            pinChosenFeature = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin];
                        }

                        if (mfpValue !== configuredMFPValue) {
                            bResult = false;
                            // prepare errorMessage
                            tempArray = [];
                            for (m = 1, maxM = NUTOOL_PIN.g_cfg_gpioMatrix[k].f.length; m < maxM; m += 1) {
                                if ($.inArray(NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m].slicePriorToX(':'), NUTOOL_PIN.g_cfg_shareBits) !== -1) {
                                    tempString1 = NUTOOL_PIN.g_cfg_gpioMatrix[k].f[m];
                                    shiftBitNumber = parseInt(tempString1.slice(tempString1.indexOf('[') + 1, tempString1.indexOf(']')), 10);
                                    mask = (0x1 << shiftBitNumber) >>> 0;
                                    tempString2 = tempString1.slicePriorToX('[');
                                    registerValue = g_gpio_MFPs[tempString2];
                                    if (registerValue & mask) {
                                        mask = (0x1 << (m - 1)) >>> 0;
                                        for (n = 1, maxN = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f.length; n < maxN; n += 1) {
                                            configuredMFPValue = NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[n];
                                            configuredMFPValue = parseInt(configuredMFPValue.slice(configuredMFPValue.indexOf(':') + 1), 10);
                                            if (configuredMFPValue & mask) {

                                                if (NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[n].indexOf(pinChosenFeature) === 0) {
                                                    tempArray.push(pinChosenFeature + tempLanguageString3);
                                                }
                                                else {
                                                    tempArray.push(NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[n]);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                            if (tempArray.length === 0) {
                                tempArray.push(NUTOOL_PIN.g_cfg_gpios[cfg_gpiosIndex].f[0].slicePriorToX(':'));
                            }

                            tempString = '';
                            for (m = 0, maxM = tempArray.length; m < maxM; m += 1) {
                                if (m !== 0 && m === maxM - 1) {
                                    tempString = tempString + tempLanguageString;
                                }
                                else if (m !== 0) {
                                    tempString = tempString + ', ';
                                }
                                tempString = tempString + tempArray[m].slicePriorToX(':');

                                if (m === maxM - 1) {
                                    tempString = tempString + tempLanguageString2;
                                }
                            }
                            errorMessage = errorMessage + pinChosenFeature + '(Pin' + (pin + 1) + ')' + tempLanguageString1 + tempString + ' <br />';
                        } // if (mfpValue !== configuredMFPValue) {
                    } // if (pin !== -1) {
                } // for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpioMatrix.length; k < maxK; k += 1) {
            }
            if (!bResult) {
                showDialog('shareBit', errorMessage);
            }
        }
        // check USB_OTG_ID Error
        if (typeof g_module_functions.USB !== 'undefined') {
            tempString = g_pinCurrentDescription.join();
            if (tempString.indexOf('USB_D+') !== -1 &&
                tempString.indexOf('USB_D-') !== -1 &&
                tempString.indexOf('USB_OTG_ID') === -1) {
                bResult = false;
                showDialog('USB_OTG_ID', errorMessage);
            }
        }

        return bResult;
    }

    function showPinError(errorType, errorMessage) {
        var title,
            dialogWidth,
            dialogHeight,
            content,
            buttonOk,
            recordedUIlanguage = localStorage.getItem("UIlanguage");

        if (errorType === 'shareBit') {
            if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                title = "Shared Bits Error";
                content = "Some bits of GPIO registers would be configured by multiple multi-functions." +
                    "These bits are called Shared Bits. The following corresponding relations between shared bits and multi-functions are incorrect.<br /><br />" +
                    errorMessage +
                    "<br />Unless they are all fixed, the operations of saving configuration, generating code and printing report will not be permitted.";
                buttonOk = "Confirm";
            } else {
                if (recordedUIlanguage === "Simplified Chinese") {
                    title = "共享位元错误";
                    content = "一些寄存器位元可能被复数个多功能给设置。这些位元称之为共享位元。下面共享位元与多功能组成的对应关系会是不正确的。<br /><br />" +
                        errorMessage +
                        "<br />除非它们都被修正，否则存档丶产生程式码及印出报告这些操作将不被允许。";
                    buttonOk = "确定";
                }
                else if (recordedUIlanguage === "Traditional Chinese") {
                    title = "共享位元錯誤";
                    content = "一些暫存器位元可能被複數個多功能給設置。這些位元稱之為共享位元。下面共享位元與多功能組成的對應關係會是不正確的。<br /><br />" +
                        errorMessage +
                        "<br />除非它們都被修正，否則存檔、產生程式碼及印出報告這些操作將不被允許。";
                    buttonOk = "確定";
                }
                else {
                    title = "Shared Bits Error";
                    content = "Some bits of GPIO registers would be configured by multiple multi-functions." +
                        "These bits are called Shared Bits. The following corresponding relations between shared bits and multi-functions are incorrect.<br /><br />" +
                        errorMessage +
                        "<br />Unless they are all fixed, the operations of saving configuration, generating code and printing report will not be permitted.";
                    buttonOk = "Confirm";
                }
            }
        }
        else if (errorType === 'USB_OTG_ID') {
            if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                title = "Incorrect USB Settings";
                content = "USB_OTG_ID must be configured when enabling USB.";
                buttonOk = "Confirm";
            } else {
                if (recordedUIlanguage === "Simplified Chinese") {
                    title = "不正确的USB设置";
                    content = "当USB开启时，USB_OTG_ID必须被设置。";
                    buttonOk = "确定";
                }
                else if (recordedUIlanguage === "Traditional Chinese") {
                    title = "不正確的USB設置";
                    content = "當USB開啟時，USB_OTG_ID必須被設置。";
                    buttonOk = "確定";
                }
                else {
                    title = "Incorrect USB Settings";
                    content = "USB_OTG_ID must be configured when enabling USB.";
                    buttonOk = "Confirm";
                }
            }
        }
        else {
            // exception happened
            return;
        }

        // close the last dialog
        destroyAllExistentDialogs();
        $('<div id="showPinErrorDialog"><p>' + content + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>').dialog({
            modal: false,
            resizable: false,
            title: title,
            width: 500,
            height: 'auto',
            show: 'fade',
            hide: 'fade',
            close: function () {
                $("#showPinErrorDialog").dialog("destroy");
            },
            buttons: [
                {
                    text: buttonOk,
                    click: function () {
                        // close the last dialog
                        if ($("#showPinErrorDialog").dialog("isOpen")) {
                            $("#showPinErrorDialog").dialog("destroy");
                        }
                    }
                }
            ]
        });

        // de-reference
        title = null;
        dialogWidth = null;
        dialogHeight = null;
        content = null;
        buttonOk = null;
        recordedUIlanguage = null;
    }

    function showPinErrorForCloseApp(errorType, errorMessage) {
        var title,
            dialogWidth,
            dialogHeight,
            content,
            buttonOk,
            buttonCanel,
            recordedUIlanguage = localStorage.getItem("UIlanguage");

        if (errorType === 'shareBit') {
            if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                title = "Shared Bit Error";
                content = "Some bits of GPIO registers would be configured by multiple multi-functions." +
                    "These bits are called Shared Bits. The following corresponding relations between shared bits and multi-functions are incorrect.<br /><br />" +
                    errorMessage +
                    "<br />If you still want to close the application, please press Close. But all the configuration will be restored to the default." +
                    "If you want to fix them, please press Fix.";
                buttonOk = "Close";
                buttonCanel = "Fix";
            } else {
                if (recordedUIlanguage === "Simplified Chinese") {
                    title = "共享位元错误";
                    content = "一些寄存器位元可能被复数个多功能给设置。这些位元称之为共享位元。下面共享位元与多功能组成的对应关系会是不正确的。<br /><br />" +
                        errorMessage +
                        "<br />若你仍想要关掉应用程式，请按'关闭'。但所有设置将会回复到初始值。若你想要修正他们，请按'修正'。";
                    buttonOk = "关闭";
                    buttonCanel = "修正";
                }
                else if (recordedUIlanguage === "Traditional Chinese") {
                    title = "共享位元錯誤";
                    content = "一些暫存器位元可能被複數個多功能給設置。這些位元稱之為共享位元。下面共享位元與多功能組成的對應關係會是不正確的。<br /><br />" +
                        errorMessage +
                        "<br />若你仍想要關掉應用程式，請按'關閉'。但所有設置將會回復到初始值。若你想要修正他們，請按'修正'。";
                    buttonOk = "關閉";
                    buttonCanel = "修正";
                }
                else {
                    title = "Shared Bit Error";
                    content = "Some bits of GPIO registers would be configured by multiple multi-functions." +
                        "These bits are called Shared Bits. The following corresponding relations between shared bits and multi-functions are incorrect.<br /><br />" +
                        errorMessage +
                        "<br />If you still want to close the application, please press Close. But all the configuration will be restored to the default." +
                        "If you want to fix them, please press Fix.";
                    buttonOk = "Close";
                    buttonCanel = "Fix";
                }
            }
        }
        else if (errorType === 'USB_OTG_ID') {
            if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                title = "Incorrect USB Settings";
                content = "USB_OTG_ID must be configured when enabling USB.";
                buttonOk = "Close";
                buttonCanel = "Fix";
            } else {
                if (recordedUIlanguage === "Simplified Chinese") {
                    title = "不正确的USB设置";
                    content = "当USB开启时，USB_OTG_ID必须被设置。";
                    buttonOk = "关闭";
                    buttonCanel = "修正";
                }
                else if (recordedUIlanguage === "Traditional Chinese") {
                    title = "不正確的USB設置";
                    content = "當USB開啟時，USB_OTG_ID必須被設置。";
                    buttonOk = "關閉";
                    buttonCanel = "修正";
                }
                else {
                    title = "Incorrect USB Settings";
                    content = "USB_OTG_ID must be configured when enabling USB.";
                    buttonOk = "Close";
                    buttonCanel = "Fix";
                }
            }
        }
        else {
            // exception happened
            return;
        }

        // close the last dialog
        destroyAllExistentDialogs();
        $('<div id="showPinErrorDialog"><p>' + content + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>').dialog({
            modal: false,
            resizable: false,
            title: title,
            width: 500,
            height: 'auto',
            show: 'fade',
            hide: 'fade',
            close: function () {
                $("#showPinErrorDialog").dialog("destroy");
            },
            buttons: [
                {
                    text: buttonOk,
                    click: function () {
                        // close the last dialog
                        if ($("#showPinErrorDialog").dialog("isOpen")) {
                            $("#showPinErrorDialog").dialog("destroy");
                        }

                        uncheckAllNodes_core();
                        goToResetValueState();
                        window.external.closeFromJS();
                    }
                },
                {
                    text: buttonCanel,
                    click: function () {
                        // close the last dialog
                        if ($("#showPinErrorDialog").dialog("isOpen")) {
                            $("#showPinErrorDialog").dialog("destroy");
                        }
                    }
                }
            ]
        });

        // de-reference
        title = null;
        dialogWidth = null;
        dialogHeight = null;
        content = null;
        buttonOk = null;
        recordedUIlanguage = null;
    }

    function showWarningForSaving(cancelFunction) {
        var i,
            max,
            bSaved = true,
            gpio_MFPsNames = [],
            title,
            content,
            okButton,
            cancelButton;
        if ($('#rootTree_Pin').is(':visible')) {

            gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);

            for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
                if (g_saved_gpio_MFPs[gpio_MFPsNames[i]] !== g_gpio_MFPs[gpio_MFPsNames[i]]) {
                    bSaved = false;
                    break;
                }
            }

            if (!bSaved) {
                decideUIlanguage();

                if (g_userSelectUIlanguage === "Simplified Chinese") {
                    title = '警告';
                    content = '配置档已被修改过。请问你要储存它吗?';
                    okButton = '要';
                    cancelButton = '不要';
                }
                else if (g_userSelectUIlanguage === "Traditional Chinese") {
                    title = '警告';
                    content = '配置檔已被修改過。請問你要儲存它嗎?';
                    okButton = '要';
                    cancelButton = '不要';
                }
                else {
                    title = 'Warning';
                    content = 'The configuration has been modified.<br />Would you like to save it?';
                    okButton = 'Yes';
                    cancelButton = 'No';
                }

                // close the last dialog
                destroyAllExistentDialogs();
                // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
                $('<div id="warningForSavingDialog"><p>' + content + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>').dialog({
                    modal: true,
                    draggable: false,
                    resizable: false,
                    title: title,
                    width: 500,
                    height: 'auto',
                    show: 'fade',
                    hide: 'fade',
                    close: function () {
                        $("#warningForSavingDialog").dialog("destroy");
                    },
                    buttons: [
                        {
                            text: okButton,
                            click: function () {
                                if (checkPinCorrectness(showPinError)) {
                                    try { external.saveConfigFromJS("NUC_BROWSE_PROJECT_PATH"); } catch (err) { }
                                }
                                cancelFunction();
                                if ($("#warningForSavingDialog").dialog("isOpen")) {
                                    $("#warningForSavingDialog").dialog("destroy");
                                }
                            }
                        },
                        {
                            text: cancelButton,
                            click: function () {
                                cancelFunction();
                                // record the latest g_gpio_MFPs
                                recordConfig();
                                if ($("#warningForSavingDialog").dialog("isOpen")) {
                                    $("#warningForSavingDialog").dialog("destroy");
                                }
                            }
                        }
                    ]
                });
                // de-reference
                title = null;
                content = null;
                okButton = null;
                cancelButton = null;
            }
            else {
                cancelFunction();
            }
            // de-reference
            bSaved = null;
            gpio_MFPsNames = [];
        }
    }

    function undoPriorToAdjustment() {
        var i,
            max,
            gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);

        // prepare for checkNodesInModuleTree
        g_bCheckNodesBasedOnConfigFile = true;
        g_read_gpio_MFPs = [];
        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            g_read_gpio_MFPs[gpio_MFPsNames[i]] = g_undo_gpio_MFPs[gpio_MFPsNames[i]];
        }
        g_pinsConfiguredByGPIO = [];
        for (i = 0, max = g_undo_pinsConfiguredByGPIO.length; i < max; i += 1) {
            g_pinsConfiguredByGPIO[i] = g_undo_pinsConfiguredByGPIO[i];
        }

        //g_module_pins = [];
        g_usedPins = [];
        g_gpio_MFPs = [];
        //g_saved_gpio_MFPs = [];
        //g_undo_gpio_MFPs = [];
        g_pinCurrentModule = [];
        g_pinCurrentDescription = [];
        //g_chipPinDescriptions = [];
        //g_pinsHighlightedByChipView = [];

        restoreAllchipPins();
        restoreAllPinMultiFunctionSelections();

        g_utility.removeContext($('#NUC_PinConfiguration_Canvas'));
        g_utility.removeContext($('#NUC_PinConfiguration_Canvas_Lining'));
        // remove tree to release the former one.
        $("#mfpTree").jstree('destroy');
        $("#supportedModules").jstree('destroy');
        $("#moduleTree").jstree('destroy');
        $("#mfpTree").remove();
        $("#supportedModules").remove();
        $("#moduleTree").remove();
        $("div").remove(".tooltip");

        createGPIO_MFPs(); // this should be called prior to drawChipViewAppearance() and decideChipViewCanvasSize().
        if ($("#NUC_PinConfiguration_Canvas").length === 0) {
            $('#panel')[0].appendChild(ce("canvas", "NUC_PinConfiguration_Canvas"));
        }
        // create trees
        buildMFPTree();
        buildModuleTree();

        drawChipViewAppearance();
        zoomToBestFit(); // adjust the content to fit the outer dialog

        getPinCurrentState();
    }

    function showAdjustedModules(message) {
        var title,
            dialogWidth,
            dialogHeight,
            content,
            lastPin = "",
            pinTextPrior,
            pinTextPost,
            fromTextPost,
            removedTextPost,
            buttonUndo,
            buttonOk,
            dialog,
            recordedUIlanguage = localStorage.getItem("UIlanguage");

        if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
            title = "Adjustment of the Conflict";
            content = "Some modules have been adjusted. The others unable to adjust have been removed. Here is the list:<hr>";
            pinTextPrior = " Pin";
            pinTextPost = "";
            fromTextPost = "from";
            buttonUndo = "Undo";
            buttonOk = "Confirm";
        } else {
            if (recordedUIlanguage === "Simplified Chinese") {
                title = "冲突的调整";
                content = "一些模组已被调整，其它无法调整的已被移除。列表如下:<hr>";
                pinTextPrior = "第";
                pinTextPost = "脚位";
                fromTextPost = "从";
                removedTextPost = "已移除";
                buttonUndo = "复原";
                buttonOk = "确定";
            }
            else if (recordedUIlanguage === "Traditional Chinese") {
                title = "衝突的調整";
                content = "一些模組已被調整，其它無法調整的已被移除。列表如下:<hr>";
                pinTextPrior = "第";
                pinTextPost = "腳位";
                fromTextPost = "從";
                removedTextPost = "已移除";
                buttonUndo = "復原";
                buttonOk = "確定";
            }
            else {
                title = "Adjustment of the Conflict";
                content = "Some modules have been adjusted. The others unable to adjust have been removed. Here is the list:<hr>";
                pinTextPrior = " Pin";
                pinTextPost = "";
                fromTextPost = "from";
                removedTextPost = " has been removed";
                buttonUndo = "Undo";
                buttonOk = "Confirm";
            }
        }

        while (message.indexOf(';') !== -1) {
            lastPin = message.sliceAfterX('/').slicePriorToX(';');

            if (message.slicePriorToX(';').indexOf('removed') !== -1) {
                lastPin = "";
                if (message.slicePriorToX(':') !== g_pinCurrentDescription[parseInt(message.sliceAfterX(':').slicePriorToX('/'), 10) - 1]) {
                    content += "<b><big>" + updatePinDescription(message.slicePriorToX(':')) + ':' + pinTextPrior + updatePinName(message.sliceAfterX(':').slicePriorToX('/')) + pinTextPost + removedTextPost + "</big></b><br />";
                    content += updatePinDescription(g_pinCurrentDescription[parseInt(message.sliceAfterX(':').slicePriorToX('/'), 10) - 1]) + ':' + pinTextPrior + updatePinName(message.sliceAfterX(':').slicePriorToX('/')) + pinTextPost + "<hr>";
                }
            }
            else if (message.slicePriorToX(';').indexOf('end') !== -1) {
                lastPin = "";
                content += updatePinDescription(message.slicePriorToX(':')) + ':' + pinTextPrior + updatePinName(message.sliceAfterX(':').slicePriorToX('/')) + pinTextPost + "<hr>";
            }
            else {
                content += updatePinDescription(message.slicePriorToX(':')) + ':' + pinTextPrior + updatePinName(message.sliceAfterX(':').slicePriorToX('/')) + pinTextPost +
                    "(" + fromTextPost + pinTextPrior + updatePinName(message.sliceAfterX('/').slicePriorToX(';')) + pinTextPost + ")<br />";
            }
            message = message.sliceAfterX(';');
        }

        if (lastPin !== "") {
            content += updatePinDescription(g_pinCurrentDescription[parseInt(lastPin, 10) - 1]) + ':' + pinTextPrior + updatePinName(lastPin) + pinTextPost + "<hr>";
        }
        // close the last dialog
        destroyAllExistentDialogs();
        // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
        dialog = $('<div id="adjustedModulesDialog"><p>' + content + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>').dialog({
            modal: false,
            resizable: false,
            title: title,
            width: 500,
            height: 400,
            show: 'fade',
            hide: 'fade',
            close: function () {
                $("#adjustedModulesDialog").dialog("destroy");
            },
            buttons: [
                {
                    text: buttonUndo,
                    click: function () {
                        undoPriorToAdjustment();

                        // close the last dialog
                        if ($("#adjustedModulesDialog").dialog("isOpen")) {
                            $("#adjustedModulesDialog").dialog("destroy");
                        }
                    }
                },
                {
                    text: buttonOk,
                    click: function () {
                        // close the last dialog
                        if ($("#adjustedModulesDialog").dialog("isOpen")) {
                            $("#adjustedModulesDialog").dialog("destroy");
                        }
                    }
                }
            ]
        });

        // de-reference
        title = null;
        dialogWidth = null;
        dialogHeight = null;
        content = null;
        lastPin = null;
        pinTextPrior = null;
        pinTextPost = null;
        fromTextPost = null;
        removedTextPost = null;
        buttonOk = null;
        recordedUIlanguage = null;
    }

    function printReport_core(userProjectName, checkResult) {
        var project,
            projectName,
            dateName,
            mcu,
            chipType,
            mcuName,
            mccPackage,
            chipView,
            pinConfiguration,
            moduleConfiguration,
            gpioConfiguration,
            registerConfiguration,
            windowContent,
            date,
            currtentDate,
            partNumberText,
            printWin,
            params = [];

        decideUIlanguage();

        if (g_userSelectUIlanguage === "Simplified Chinese") {
            project = '方案';
            projectName = '方案名称';
            dateName = '方案日期';
            mcu = '型号';
            chipType = '芯片系列';
            mcuName = '微控器名称';
            mccPackage = '微控器封装';
            chipView = '芯片图示';
            pinConfiguration = '脚位配置';
            moduleConfiguration = '模组配置';
            gpioConfiguration = '多工泛用脚位配置';
            registerConfiguration = '寄存器配置';
        }
        else if (g_userSelectUIlanguage === "Traditional Chinese") {
            project = '方案';
            projectName = '方案名稱';
            dateName = '方案日期';
            mcu = '型號';
            chipType = '晶片系列';
            mcuName = '微控器名稱';
            mccPackage = '微控器封裝';
            chipView = '晶片圖示';
            pinConfiguration = '腳位配置';
            moduleConfiguration = '模組配置';
            gpioConfiguration = '多工泛用腳位配置';
            registerConfiguration = '暫存器配置';
        }
        else {
            project = 'Project';
            projectName = 'Project Name';
            dateName = 'Project Date';
            mcu = 'Part No.';
            chipType = 'Chip Series';
            mcuName = 'MCU Name';
            mccPackage = 'MCU Package';
            chipView = 'ChipView';
            pinConfiguration = 'Pin Configuration';
            moduleConfiguration = 'Module Configuration';
            gpioConfiguration = 'GPIO Configuration';
            registerConfiguration = 'Register Configuration';
        }

        windowContent = '<!DOCTYPE html>';
        windowContent += '<html>';
        windowContent += '<head><title>Print Report</title></head>';
        windowContent += '<body>';

        date = new Date();
        currtentDate = (date.getMonth() + 1) + '/' + (date.getDate()) + '/' + date.getFullYear() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        windowContent += '<table  style="border: 10px ridge black; background-color: white;" align="left" cellpadding="5" cellspacing="5" frame="border" rules="all"><caption style="text-align:left">' + project + '</caption><tr> <td style="border: 1px solid black;">' + projectName + '</td> <td style="border: 1px solid black;">' + userProjectName + '</td> </tr> <tr> <td style="border: 1px solid black;">' + dateName + '</td> <td style="border: 1px solid black;">' + currtentDate + '</td> </tr> </table>';
        partNumberText = g_partNumber_package.slicePriorToX('(');
        windowContent += '<table  style="border: 10px ridge black; background-color: white;" align="left" cellpadding="5" cellspacing="5" frame="border" rules="all"><caption style="text-align:left">' + mcu + '</caption><tr> <td style="border: 1px solid black;">' + chipType + '</td> <td style="border: 1px solid black;">' + g_chipType + '</td> </tr> <tr> <td style="border: 1px solid black;">' + mcuName + '</td> <td style="border: 1px solid black;">' + partNumberText + '</td> </tr> <tr> <td style="border: 1px solid black;">' + mccPackage + '</td> <td style="border: 1px solid black;">' + NUTOOL_PIN.g_packageNumber + '</td> </tr></table>';
        windowContent += '<br><br><br><br><br><br><br>';
        windowContent += '<hr>';

        if (checkResult !== null) {
            if (checkResult.indexOf('checkbox_byChipView') !== -1) {
                windowContent = getChipView(windowContent, chipView);
            }
            if (checkResult.indexOf('checkbox_byRegister') !== -1) {
                windowContent = getRegisterConfigurationTable(windowContent, registerConfiguration);
            }
            if (checkResult.indexOf('checkbox_byPin') !== -1) {
                windowContent = getPinConfigurationTable(windowContent, pinConfiguration);
            }
            if (checkResult.indexOf('checkbox_byModule') !== -1) {
                windowContent = getModuleConfigurationTable(windowContent, moduleConfiguration);
            }
            if (checkResult.indexOf('checkbox_byGPIO') !== -1) {
                windowContent = getGPIOconfigurationTable(windowContent, gpioConfiguration);
            }
        }
        windowContent += '</body>';
        windowContent += '</html>';

        printWin = window.open('dummy.htm', '', params);
        printWin.document.open();
        printWin.document.write(windowContent);
        printWin.document.close();
        printWin.moveTo(0, 0);
        printWin.focus();
        printWin.print();
        //printWin.close();

        // de-reference
        project = null;
        projectName = null;
        dateName = null;
        mcu = null;
        chipType = null;
        mcuName = null;
        mccPackage = null;
        chipView = null;
        pinConfiguration = null;
        moduleConfiguration = null;
        gpioConfiguration = null;
        registerConfiguration = null;
        date = null;
        windowContent = null;
        currtentDate = null;
        partNumberText = null;
        printWin = null;
        params = null;
    }

    function getChipView(windowContent, chipView) {
        var i,
            max,
            element_NUC_ChipView_Canvas,
            print_shift_x,
            chipAndPinDescriptionMargin,
            canvas_Width,
            canvas_Height,
            context,
            NUC_Chip_StartPoint_X,
            NUC_Chip_StartPoint_Y,
            chip_lining_gradient,
            partNumberText,
            offset,
            x,
            y,
            measureText,
            pinName,
            pinDescription,
            dataUrl,
            pxCounter,
            pxCounter1,
            liningTextInterval = 0;


        $('#panel')[0].appendChild(ce("canvas", "NUC_ChipView_Canvas"));
        element_NUC_ChipView_Canvas = $("#NUC_ChipView_Canvas")[0];
        element_NUC_ChipView_Canvas.setAttribute('style', 'z-index:1; position:absolute; left:0px; top:0px; border: 1px solid white;');

        print_shift_x = 30;
        chipAndPinDescriptionMargin = 200;
        canvas_Width = chipAndPinDescriptionMargin + g_NUC_Pin_Height + g_NUC_Chip_Padding + g_NUC_Chip_Length + g_NUC_Pin_Height + g_NUC_Chip_Length / 4;
        canvas_Height = chipAndPinDescriptionMargin + g_NUC_Pin_Height + g_NUC_Chip_Length + g_NUC_Pin_Height + chipAndPinDescriptionMargin;

        element_NUC_ChipView_Canvas.setAttribute('width', canvas_Width);
        element_NUC_ChipView_Canvas.setAttribute('height', canvas_Height);

        // draw default NUC Pin Configuration
        context = g_utility.getContext(element_NUC_ChipView_Canvas);

        // let it fit into the print page.
        context.scale(0.85, 0.85);

        NUC_Chip_StartPoint_X = chipAndPinDescriptionMargin + g_NUC_Pin_Height + g_NUC_Chip_Padding;
        NUC_Chip_StartPoint_Y = chipAndPinDescriptionMargin + g_NUC_Pin_Height;

        if (g_partNumber_package.indexOf('SOP') !== -1) {
            // draw main square
            NUC_Chip_StartPoint_X = NUC_Chip_StartPoint_X - print_shift_x;
            context.strokeRect(NUC_Chip_StartPoint_X, NUC_Chip_StartPoint_Y, g_NUC_Chip_Length / 2, g_NUC_Chip_Length);
            context.fillStyle = 'white';
            context.fillRect(NUC_Chip_StartPoint_X, NUC_Chip_StartPoint_Y, g_NUC_Chip_Length / 2, g_NUC_Chip_Length);

            // draw the upper-left circle
            context.beginPath();
            context.arc(NUC_Chip_StartPoint_X + 10, NUC_Chip_StartPoint_Y + 10, 5, 0, Math.PI * 2, true);
            context.stroke();

            // draw the lining of the chip
            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = pxCounter + 'px Arial Black';
            }
            while (context.measureText(g_chipSilkScreenPrint).width < g_NUC_Chip_Length / 2);

            liningTextInterval = pxCounter;
            context.save();
            context.translate(NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 4,
                NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 - context.measureText(g_chipSilkScreenPrint).width / 2);
            context.rotate(Math.PI / 2);
            context.fillStyle = '#FE2E2E';
            context.fillText(g_chipSilkScreenPrint, 0, 0);
            context.restore();

            partNumberText = g_partNumber_package.slicePriorToX('(');
            for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
                if (NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')' === g_partNumber_package) {
                    if (typeof NUTOOL_PIN.g_cfg_chips[i].display !== 'undefined') {
                        partNumberText = NUTOOL_PIN.g_cfg_chips[i].display;
                    }
                    break;
                }
            }
            context.fillStyle = "black";
            pxCounter1 = 1;
            do {
                pxCounter1 = pxCounter1 + 1;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }
            while (context.measureText(partNumberText).width < g_NUC_Chip_Length / 2);

            if (pxCounter1 > pxCounter) {
                pxCounter1 = pxCounter;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }

            liningTextInterval = pxCounter1 / 2 + 5;
            context.save();
            context.translate(NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 4 - liningTextInterval,
                NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 - context.measureText(partNumberText).width / 2);
            context.rotate(Math.PI / 2);
            context.fillText(partNumberText, 0, 0);
            context.restore();

            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = 'bold ' + pxCounter + 'px Calibri';
            }
            while (context.measureText(NUTOOL_PIN.g_packageNumber).width < g_NUC_Chip_Length / 4);

            liningTextInterval = liningTextInterval + pxCounter / 2 + 5;
            context.save();
            context.translate(NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 4 - liningTextInterval,
                NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 - context.measureText(NUTOOL_PIN.g_packageNumber).width / 2);
            context.rotate(Math.PI / 2);
            context.fillText(NUTOOL_PIN.g_packageNumber, 0, 0);
            context.restore();

            // draw pin numbers and description
            context.font = g_commonStringFont;
            context.fillStyle = 'black';
            for (i = 0, max = g_NUC_Pin_Total_Number / 2; i < max; i += 1) {
                // left side
                x = NUC_Chip_StartPoint_X + g_NUC_Text_Padding;
                y = NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + i * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;
                context.strokeText((i + 1).toString(), x, y);

                if (g_pinCurrentDescription[i] !== "") {
                    pinDescription = updatePinDescription(g_pinCurrentDescription[i]);
                    x = NUC_Chip_StartPoint_X - g_NUC_Pin_Height - g_NUC_TextDescription_Padding;
                    context.save();
                    context.textAlign = "end";
                    context.fillText(pinDescription, x, y);
                    context.restore();
                }

                x = NUC_Chip_StartPoint_X - g_NUC_Pin_Height + g_NUC_Pin_LengthWidth;
                y = NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + i * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
                context.fillStyle = g_chipPins[0].savedPinPadColor[i];
                context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
                // populate me.savedPinName
                pinName = g_chipPinDescriptions[i];
                if (pinName.lastIndexOf('/') !== -1) {
                    pinName = pinName.slice(pinName.lastIndexOf('/') + 1);
                }
                if (!isGPIOPin(pinName) && pinName.length > 4) {
                    pinName = pinName.slice(0, 4) + '..';
                }
                context.font = g_commonStringFont;
                context.fillStyle = 'black';
                context.fillText(pinName, x, y + g_NUC_Pin_Width * 4 / 5, g_NUC_Pin_Height, g_NUC_Pin_Width);

                // right side
                x = NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2;
                y = NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - i * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;
                measureText = context.measureText((i + 1 + g_NUC_Pin_Total_Number / 2).toString());
                context.strokeText((i + 1 + g_NUC_Pin_Total_Number / 2).toString(), x - measureText.width - g_NUC_Text_Padding, y);

                if (g_pinCurrentDescription[i + g_NUC_Pin_Total_Number / 2] !== "") {
                    pinDescription = updatePinDescription(g_pinCurrentDescription[i + g_NUC_Pin_Total_Number / 2]);
                    x = NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 + g_NUC_Pin_Height + g_NUC_TextDescription_Padding;
                    context.fillText(pinDescription, x, y);
                }

                x = NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2;
                y = NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - i * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
                context.fillStyle = g_chipPins[1].savedPinPadColor[i];
                context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
                // populate me.savedPinName
                pinName = g_chipPinDescriptions[i + g_NUC_Pin_Total_Number / 2];
                pinName = pinName.slicePriorToX('/');

                if (!isGPIOPin(pinName) && pinName.length > 4) {
                    pinName = pinName.slice(0, 4) + '..';
                }
                context.font = g_commonStringFont;
                context.fillStyle = 'black';
                context.fillText(pinName, x, y + g_NUC_Pin_Width * 4 / 5);
            }
        }
        else if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            // draw main square
            NUC_Chip_StartPoint_X = NUC_Chip_StartPoint_X - print_shift_x;
            context.lineWidth = 2;
            context.strokeRect(NUC_Chip_StartPoint_X, NUC_Chip_StartPoint_Y, g_NUC_Chip_Length, g_NUC_Chip_Length);
            context.fillStyle = 'white';
            context.fillRect(NUC_Chip_StartPoint_X, NUC_Chip_StartPoint_Y, g_NUC_Chip_Length, g_NUC_Chip_Length);

            // draw the down-left circle
            context.beginPath();
            context.arc(NUC_Chip_StartPoint_X + 10, NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - 10, 5, 0, Math.PI * 2, true);
            context.stroke();

            // draw pin numbers and description
            context.font = g_commonStringFont;
            context.fillStyle = 'black';
            for (i = 0, max = g_NUC_Pin_Vertial_Number; i < max; i += 1) {
                // left side
                x = NUC_Chip_StartPoint_X + g_NUC_Text_Padding;
                y = NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + g_NUC_Pin_Radius + (g_NUC_Pin_Vertial_Number - 1 - (i % g_NUC_Pin_Vertial_Number)) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval);
                context.fillText((i + 1).toString(), x, y);
            }
            for (i = 0, max = g_NUC_Pin_Horizontal_Number; i < max; i += 1) {
                // down side
                x = NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + g_NUC_Pin_Radius + i * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval) - 4;
                y = NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - 5;
                context.fillText(NUTOOL_PIN.g_horizontalIndexArray[i], x, y);
            }
            // draw pins
            for (i = 0; i < g_NUC_Pin_Total_Number; i += 1) {
                x = NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + g_NUC_Pin_Radius + Math.floor(i / g_NUC_Pin_Vertial_Number) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval);
                y = NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + g_NUC_Pin_Radius + (g_NUC_Pin_Vertial_Number - 1 - (i % g_NUC_Pin_Vertial_Number)) * (g_NUC_Pin_Radius * 2 + g_NUC_Pin_Interval);
                context.beginPath();
                context.arc(x, y, g_NUC_Pin_Radius, 0, Math.PI * 2, true);
                context.strokeStyle = "black";
                context.stroke();
                // context.strokeStyle = "#000000"; // black stroke
                context.fillStyle = g_chipPins[0].savedPinPadColor[i];
                context.fill();
                if (g_pinCurrentDescription[i] !== "") {
                    pinName = updatePinDescription(g_pinCurrentDescription[i]);
                }
                else {
                    pinName = g_chipPins[0].savedPinName[i];
                }
                if (pinName.lastIndexOf('/') !== -1) {
                    pinName = pinName.slice(pinName.lastIndexOf('/') + 1);
                }
                if (pinName.length > 6) {
                    pinName = pinName.slice(0, 6) + '..';
                }
                // me.savedPinName[i] = pinName;
                context.font = g_commonStringFont;
                context.fillStyle = 'black';
                context.fillText(pinName, x - context.measureText(pinName).width / 2, y + parseInt(context.font, 10) / 2);
            }
        }
        else {
            // draw main square
            NUC_Chip_StartPoint_X = NUC_Chip_StartPoint_X - print_shift_x;
            context.strokeRect(NUC_Chip_StartPoint_X, NUC_Chip_StartPoint_Y, g_NUC_Chip_Length, g_NUC_Chip_Length);
            context.fillStyle = 'white';
            context.fillRect(NUC_Chip_StartPoint_X, NUC_Chip_StartPoint_Y, g_NUC_Chip_Length, g_NUC_Chip_Length);

            // draw the down-left circle
            context.beginPath();
            context.arc(NUC_Chip_StartPoint_X + 10, NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - 10, 5, 0, Math.PI * 2, true);
            context.stroke();

            // draw the lining of the chip
            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = pxCounter + 'px Arial Black';
            }
            while (context.measureText(g_chipSilkScreenPrint).width < g_NUC_Chip_Length / 2);

            context.fillStyle = '#FE2E2E';
            context.fillText(g_chipSilkScreenPrint, NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(g_chipSilkScreenPrint).width / 2,
                NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2);
            partNumberText = g_partNumber_package.slicePriorToX('(');
            for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
                if (NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')' === g_partNumber_package) {
                    if (typeof NUTOOL_PIN.g_cfg_chips[i].display !== 'undefined') {
                        partNumberText = NUTOOL_PIN.g_cfg_chips[i].display;
                    }
                    break;
                }
            }
            context.fillStyle = "black";
            pxCounter1 = 1;
            do {
                pxCounter1 = pxCounter1 + 1;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }
            while (context.measureText(partNumberText).width < g_NUC_Chip_Length / 2);

            if (pxCounter1 > pxCounter) {
                pxCounter1 = pxCounter;
                context.font = 'bold ' + pxCounter1 + 'px Calibri';
            }

            liningTextInterval = pxCounter1 / 2 + 10;
            context.fillText(partNumberText, NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(partNumberText).width / 2,
                NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 + liningTextInterval);

            pxCounter = 1;
            do {
                pxCounter = pxCounter + 1;
                context.font = 'bold ' + pxCounter + 'px Calibri';
            }
            while (context.measureText(NUTOOL_PIN.g_packageNumber).width < g_NUC_Chip_Length / 4);
            liningTextInterval = liningTextInterval + pxCounter / 2 + 10;
            context.fillText(NUTOOL_PIN.g_packageNumber, NUC_Chip_StartPoint_X + g_NUC_Chip_Length / 2 - context.measureText(NUTOOL_PIN.g_packageNumber).width / 2,
                NUC_Chip_StartPoint_Y + g_NUC_Chip_Length / 2 + liningTextInterval);

            // draw pin numbers and description
            context.font = g_commonStringFont;
            context.fillStyle = 'black';
            offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Down_Number) / 2);
            for (i = 0, max = g_NUC_Pin_Down_Number; i < max; i += 1) {
                // down side
                x = NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                y = NUC_Chip_StartPoint_Y + g_NUC_Chip_Length;
                context.save();
                context.translate(x, y);
                context.rotate(-Math.PI / 2);
                context.strokeText((i + 1).toString(), g_NUC_Text_Padding, g_NUC_Pin_Width * 4 / 5);
                context.restore();

                if (g_pinCurrentDescription[i] !== "") {
                    pinDescription = updatePinDescription(g_pinCurrentDescription[i]);
                    y = NUC_Chip_StartPoint_Y + g_NUC_Chip_Length + g_NUC_Pin_Height;
                    context.save();
                    context.translate(x, y);
                    context.rotate(-Math.PI / 2);
                    context.textAlign = "end";
                    context.fillText(pinDescription, -g_NUC_Text_Padding, g_NUC_Pin_Width * 4 / 5);
                    context.restore();
                }

                x = NUC_Chip_StartPoint_X + g_NUC_Pin_Padding + (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) - g_NUC_Pin_LengthWidth;
                y = NUC_Chip_StartPoint_Y + g_NUC_Chip_Length;
                context.strokeRect(x, y, g_NUC_Pin_Width, g_NUC_Pin_Height);
                context.fillStyle = g_chipPins[0].savedPinPadColor[i];
                context.fillRect(x, y, g_NUC_Pin_Width, g_NUC_Pin_Height);
                // populate me.savedPinName
                pinName = g_chipPinDescriptions[i];
                if (pinName.lastIndexOf('/') !== -1) {
                    pinName = pinName.slice(pinName.lastIndexOf('/') + 1);
                }
                if (!isGPIOPin(pinName) && pinName.length > 4) {
                    pinName = pinName.slice(0, 4) + '..';
                }

                y += g_NUC_Pin_Height;
                context.font = g_commonStringFont;
                context.fillStyle = 'black';
                context.save();
                context.translate(x, y);
                context.rotate(-Math.PI / 2);
                context.fillText(pinName, g_NUC_Pin_LengthWidth, g_NUC_Pin_Width * 4 / 5);
                context.restore();
            }
            offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Right_Number) / 2);
            for (i = 0, max = g_NUC_Pin_Right_Number; i < max; i += 1) {
                // right side
                x = NUC_Chip_StartPoint_X + g_NUC_Chip_Length;
                y = NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;
                measureText = context.measureText((i + 1 + g_NUC_Pin_Down_Number).toString());
                context.strokeText((i + 1 + g_NUC_Pin_Down_Number).toString(), x - measureText.width - g_NUC_Text_Padding, y);

                if (g_pinCurrentDescription[i + g_NUC_Pin_Down_Number] !== "") {
                    pinDescription = updatePinDescription(g_pinCurrentDescription[i + g_NUC_Pin_Down_Number]);
                    x = NUC_Chip_StartPoint_X + g_NUC_Chip_Length + g_NUC_Pin_Height + g_NUC_TextDescription_Padding;
                    context.fillText(pinDescription, x, y);
                }

                x = NUC_Chip_StartPoint_X + g_NUC_Chip_Length;
                y = NUC_Chip_StartPoint_Y + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
                context.fillStyle = g_chipPins[1].savedPinPadColor[i];
                context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
                // populate me.savedPinName
                pinName = g_chipPinDescriptions[i + g_NUC_Pin_Down_Number];
                pinName = pinName.slicePriorToX('/');

                if (!isGPIOPin(pinName) && pinName.length > 4) {
                    pinName = pinName.slice(0, 4) + '..';
                }
                context.font = g_commonStringFont;
                context.fillStyle = 'black';
                context.fillText(pinName, x, y + g_NUC_Pin_Width * 4 / 5);
            }
            offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Upper_Number) / 2);
            for (i = 0, max = g_NUC_Pin_Upper_Number; i < max; i += 1) {
                // upper side
                x = NUC_Chip_StartPoint_X + g_NUC_Chip_Length - g_NUC_Pin_Padding - g_NUC_Pin_Width - (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) - g_NUC_Pin_LengthWidth;
                y = NUC_Chip_StartPoint_Y - g_NUC_Pin_Height;
                context.save();
                context.translate(x, y);
                context.rotate(-Math.PI / 2);
                measureText = context.measureText((i + 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number).toString());
                context.strokeText((i + 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number).toString(), -g_NUC_Pin_Height - measureText.width - g_NUC_Text_Padding, g_NUC_Pin_Width * 4 / 5);
                context.restore();

                if (g_pinCurrentDescription[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number] !== "") {
                    pinDescription = updatePinDescription(g_pinCurrentDescription[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number]);
                    context.save();
                    context.translate(x, y);
                    context.rotate(-Math.PI / 2);
                    context.fillText(pinDescription, 2 * g_NUC_TextDescription_Padding, g_NUC_Pin_Width * 4 / 5);
                    context.restore();
                }

                y = NUC_Chip_StartPoint_Y - g_NUC_Pin_Height + g_NUC_Pin_LengthWidth;
                context.strokeRect(x, y, g_NUC_Pin_Width, g_NUC_Pin_Height);
                context.fillStyle = g_chipPins[2].savedPinPadColor[i];
                context.fillRect(x, y, g_NUC_Pin_Width, g_NUC_Pin_Height);
                // populate me.savedPinName
                pinName = g_chipPinDescriptions[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number];
                pinName = pinName.slicePriorToX('/');

                if (!isGPIOPin(pinName) && pinName.length > 4) {
                    pinName = pinName.slice(0, 4) + '..';
                }
                context.font = g_commonStringFont;
                context.fillStyle = 'black';
                y += g_NUC_Pin_Height;
                context.save();
                context.translate(x, y);
                context.rotate(-Math.PI / 2);
                context.textAlign = "end";
                context.fillText(pinName, g_NUC_Pin_Height, g_NUC_Pin_Width * 4 / 5);
                context.restore();
            }
            offset = Math.floor((g_NUC_Pin_SideMax_Number - g_NUC_Pin_Left_Number) / 2);
            for (i = 0, max = g_NUC_Pin_Left_Number; i < max; i += 1) {
                // left side
                x = NUC_Chip_StartPoint_X + g_NUC_Text_Padding;
                y = NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval) + g_NUC_Pin_Width * 4 / 5;
                context.strokeText((i + 1 + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number).toString(), x, y);

                if (g_pinCurrentDescription[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number] !== "") {
                    pinDescription = updatePinDescription(g_pinCurrentDescription[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number]);
                    x = NUC_Chip_StartPoint_X - g_NUC_Pin_Height - g_NUC_TextDescription_Padding;
                    context.save();
                    context.textAlign = "end";
                    context.fillText(pinDescription, x, y);
                    context.restore();
                }

                x = NUC_Chip_StartPoint_X - g_NUC_Pin_Height + g_NUC_Pin_LengthWidth;
                y = NUC_Chip_StartPoint_Y + g_NUC_Pin_Padding + (i + offset) * (g_NUC_Pin_Width + g_NUC_Pin_Interval);
                context.strokeRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
                context.fillStyle = g_chipPins[3].savedPinPadColor[i];
                context.fillRect(x, y, g_NUC_Pin_Height, g_NUC_Pin_Width);
                // populate me.savedPinName
                pinName = g_chipPinDescriptions[i + g_NUC_Pin_Down_Number + g_NUC_Pin_Right_Number + g_NUC_Pin_Upper_Number];
                if (pinName.lastIndexOf('/') !== -1) {
                    pinName = pinName.slice(pinName.lastIndexOf('/') + 1);
                }
                if (!isGPIOPin(pinName) && pinName.length > 4) {
                    pinName = pinName.slice(0, 4) + '..';
                }
                context.font = g_commonStringFont;
                context.fillStyle = 'black';
                context.fillText(pinName, x, y + g_NUC_Pin_Width * 4 / 5, g_NUC_Pin_Height, g_NUC_Pin_Width);
            }
        }

        if (!g_bLessThanOrEqualIE8) {
            // convert to Data URL and bind it to windowContent.
            dataUrl = document.getElementById('NUC_ChipView_Canvas').toDataURL(); //attempt to save base64 string to server using this var

            windowContent += '<h4>' + chipView + '</h4>';
            windowContent += '<img src="' + dataUrl + '">';
            windowContent += '<hr>';

            dataUrl = null;
        }
        // its job finished.
        $('#NUC_ChipView_Canvas').remove();

        NUC_Chip_StartPoint_X += print_shift_x;
        // de-reference
        i = null;
        max = null;
        element_NUC_ChipView_Canvas = null;
        print_shift_x = null;
        NUC_Chip_StartPoint_X = null;
        NUC_Chip_StartPoint_Y = null;
        chipAndPinDescriptionMargin = null;
        canvas_Width = null;
        canvas_Height = null;
        context = null;
        chip_lining_gradient = null;
        partNumberText = null;
        offset = null;
        x = null;
        y = null;
        pinName = null;
        dataUrl = null;
        pxCounter = null;
        pxCounter1 = null;
        liningTextInterval = null;

        return windowContent;
    }

    function getPinConfigurationTable(windowContent, pinConfiguration) {
        var i,
            windowContent_backup = windowContent,
            bEmpty = true;

        windowContent += '<table style="border: 10px ridge black; background-color: white;" align="left" cellpadding="5" cellspacing="5" frame="box" rules="all" ><caption style="text-align:left">' + pinConfiguration + '</caption>';
        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                windowContent += '<tr><td style="border: 1px solid black;">Pin' + updatePinName(i) + '</td> <td style="border: 1px solid black;">' + updatePinDescription(g_pinCurrentDescription[i - 1]) + '</td></tr>';
                bEmpty = false;
            }
        }
        windowContent += '</table>';

        if (bEmpty) {
            windowContent = windowContent_backup;
        }

        // de-reference
        windowContent_backup = null;
        bEmpty = null;

        return windowContent;
    }

    function getModuleConfigurationTable(windowContent, moduleConfiguration) {
        var i,
            j,
            max,
            maxJ,
            windowContent_backup = windowContent,
            bEmpty = true,
            usedPinsCatalogedByModule = [],
            pinDescription,
            pin,
            module,
            moduleNames = [];

        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                pin = i;
                module = pinDescription = g_pinCurrentDescription[i - 1];
                if (module.indexOf('_') !== -1) {
                    module = module.slicePriorToX('_');
                }
                module = specialModuleNaming(module);

                if (typeof (usedPinsCatalogedByModule[module]) === 'undefined') {
                    usedPinsCatalogedByModule[module] = [];
                    usedPinsCatalogedByModule[module][0] = updatePinDescription(pinDescription) + '(Pin:' + updatePinName(pin) + ')';
                }
                else {
                    usedPinsCatalogedByModule[module].push(updatePinDescription(pinDescription) + '(Pin:' + updatePinName(pin) + ')');
                }
                bEmpty = false;
            }
        }

        moduleNames = getPropertyNames(usedPinsCatalogedByModule);

        windowContent += '<table  style="border: 10px ridge black; background-color: white;" align="left" cellpadding="5" cellspacing="5" frame="border" rules="all"><caption style="text-align:left">' + moduleConfiguration + '</caption>';
        for (i = 0, max = moduleNames.length; i < max; i += 1) {
            usedPinsCatalogedByModule[moduleNames[i]].sort(natualSort);
            for (j = 0, maxJ = usedPinsCatalogedByModule[moduleNames[i]].length; j < maxJ; j += 1) {
                windowContent += '<tr><td style="border: 1px solid black;">' + moduleNames[i] + '</td> <td style="border: 1px solid black;">' + usedPinsCatalogedByModule[moduleNames[i]][j] + '</td></tr>';
            }
        }
        windowContent += '</table>';

        if (bEmpty) {
            windowContent = windowContent_backup;
        }

        // de-reference
        i = null;
        j = null;
        max = null;
        maxJ = null;
        usedPinsCatalogedByModule = [];
        moduleNames = [];
        windowContent_backup = null;
        bEmpty = null;
        pinDescription = null;
        pin = null;
        module = null;

        return windowContent;
    }

    function getGPIOconfigurationTable(windowContent, gpioConfiguration) {
        var i,
            j,
            max,
            maxJ,
            windowContent_backup = windowContent,
            bEmpty = true,
            usedPinsCatalogedByGPIO = [],
            pinDescription,
            pin,
            gpio,
            gpioNames = [],
            tdContent;

        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                pin = i;
                pinDescription = updatePinDescription(g_pinCurrentDescription[i - 1]);
                gpio = specialModuleNaming(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1]);

                if (typeof (usedPinsCatalogedByGPIO[gpio]) === 'undefined') {
                    usedPinsCatalogedByGPIO[gpio] = [];
                    usedPinsCatalogedByGPIO[gpio][0] = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1] + ': ' + pinDescription + '(Pin:' + updatePinName(pin) + ')';
                }
                else {
                    usedPinsCatalogedByGPIO[gpio].push(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1] + ': ' + pinDescription + '(Pin:' + updatePinName(pin) + ')');
                }
                bEmpty = false;
            }
        }

        gpioNames = getPropertyNames(usedPinsCatalogedByGPIO).sort(natualSort);
        windowContent += '<table  style="border: 10px ridge black; background-color: white;" align="left" cellpadding="5" cellspacing="5" frame="border" rules="all"><caption style="text-align:left">' + gpioConfiguration + '</caption>';
        for (i = 0, max = gpioNames.length; i < max; i += 1) {
            usedPinsCatalogedByGPIO[gpioNames[i]].sort(natualSort);
            for (j = 0, maxJ = usedPinsCatalogedByGPIO[gpioNames[i]].length; j < maxJ; j += 1) {
                tdContent = usedPinsCatalogedByGPIO[gpioNames[i]][j];
                windowContent += '<tr><td style="border: 1px solid black;">' + tdContent.slicePriorToX(':') + '</td> <td style="border: 1px solid black;">' + tdContent.sliceAfterX(': ') + '</td></tr>';
            }
        }
        windowContent += '</table>';

        if (bEmpty) {
            windowContent = windowContent_backup;
        }

        // de-reference
        i = null;
        j = null;
        max = null;
        maxJ = null;
        usedPinsCatalogedByGPIO = [];
        gpioNames = [];
        windowContent_backup = null;
        bEmpty = null;
        pinDescription = null;
        pin = null;
        gpio = null;
        tdContent = null;

        return windowContent;
    }

    function getRegisterConfigurationTable(windowContent, registerConfiguration) {
        var i,
            max,
            gpio_MFPsNames = [];

        windowContent += '<table  style="border: 10px ridge black; background-color: white;" align="left" cellpadding="5" cellspacing="5" frame="border" rules="all"><caption style="text-align:left">' + registerConfiguration + '</caption>';
        gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);
        gpio_MFPsNames.sort();

        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            windowContent += '<tr><td style="border: 1px solid black;">' + gpio_MFPsNames[i] + '</td> <td style="border: 1px solid black;">0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + '</td></tr>';
        }
        windowContent += '</table>';

        i = null;
        max = null;

        return windowContent;
    }

    function getReadTargetMFPRegCommand() {
        var i,
            max,
            lwsCommandString = "m",
            regNames = [];

        regNames = getPropertyNames(NUTOOL_PIN.g_cfg_regDescriptions);
        for (i = 0, max = regNames.length; i < max; i += 1) {
            if (i !== 0) {
                lwsCommandString = lwsCommandString + ',';
            }

            lwsCommandString = lwsCommandString + NUTOOL_PIN.g_cfg_regDescriptions[regNames[i]].slice(2);
        }
        lwsCommandString = lwsCommandString + ',';

        return lwsCommandString;
    }

    function synchronizeWithTargetPartNumber(newPartNumber_package) {
        var i,
            max,
            newChipType;


        //skip command character
        newPartNumber_package = newPartNumber_package.slice(1);

        if (newPartNumber_package.toUpperCase() !== 'UNKNOWN') {
            // reload the corresponding chip content
            newChipType = decideNewChipType(newPartNumber_package);
            if (newChipType !== g_chipType) {
                oldfilename = 'NUC_' + g_chipType + '_Content.js';
                newfilename = 'NUC_' + newChipType + '_Content.js';
                replacejscssfile(oldfilename, newfilename, 'js', synchronizeWithTargetPartNumberAfterReplace(newChipType));
            }
            else {
                synchronizeWithTargetPartNumberNoReplace();
            }
        }
    }

    function synchronizeWithTargetPartNumberAfterReplace(newChipType) {
        // update ChipTypeSelect
        $("#ChipTypeSelect").val(newChipType);
        g_chipType = newChipType;

        g_selectedPartNoValue = null;
        for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
            if (newPartNumber_package === NUTOOL_PIN.g_cfg_chips[i].name) {
                g_selectedPartNoValue = NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')';
            }
        }

        if ((g_selectedPartNoValue !== null) && (g_selectedPartNoValue !== g_partNumber_package)) {
            avoidClicking();

            initializeAll();

            g_partNumber_package = g_selectedPartNoValue;
            NUTOOL_PIN.decidepackageNumber();
            decideNUC_Pin_Total_Side_Number();
            // a new chip need not check nodes
            g_bCheckNodesBasedOnConfigFile = false;

            // to release ram
            g_read_gpio_MFPs = [];
            g_pinsConfiguredByGPIO = [];
            g_userDefinedPin = {};
            g_readConfigFile = null;

            refresh();

            // do not forget to adjust the zoom feature
            g_currIEZoom = 100;
            zoomFunction();
            zoomToBestFit();

            destroyAllExistentDialogs();
        }
    }

    function synchronizeWithTargetPartNumberNoReplace() {
        g_selectedPartNoValue = null;
        for (i = 0, max = NUTOOL_PIN.g_cfg_chips.length; i < max; i += 1) {
            if (newPartNumber_package === NUTOOL_PIN.g_cfg_chips[i].name) {
                g_selectedPartNoValue = NUTOOL_PIN.g_cfg_chips[i].name + '(' + NUTOOL_PIN.g_cfg_chips[i].pkg + ')';
            }
        }

        if ((g_selectedPartNoValue !== null) && (g_selectedPartNoValue !== g_partNumber_package)) {
            avoidClicking();

            initializeAll();

            g_partNumber_package = g_selectedPartNoValue;
            NUTOOL_PIN.decidepackageNumber();
            decideNUC_Pin_Total_Side_Number();
            // a new chip need not check nodes
            g_bCheckNodesBasedOnConfigFile = false;

            // to release ram
            g_read_gpio_MFPs = [];
            g_pinsConfiguredByGPIO = [];
            g_userDefinedPin = {};
            g_readConfigFile = null;

            refresh();

            // do not forget to adjust the zoom feature
            g_currIEZoom = 100;
            zoomFunction();
            zoomToBestFit();

            destroyAllExistentDialogs();
        }
    }

    function synchronizeWithTargetMFPReg(targetMFPRegString) {
        var i,
            max,
            targtargetMFPRegArray,
            regName,
            regNames = [],
            oldRegValue,
            newRegValue;

        //skip command character
        targetMFPRegString = targetMFPRegString.slice(1);
        targtargetMFPRegArray = targetMFPRegString.split(',');

        regNames = getPropertyNames(NUTOOL_PIN.g_cfg_regDescriptions);
        if (targtargetMFPRegArray.length === regNames.length) {
            for (i = 0, max = regNames.length; i < max; i += 1) {
                regName = regNames[i];
                oldRegValue = g_gpio_MFPs[regName];
                newRegValue = parseInt(targtargetMFPRegArray[i], 16);
                if (oldRegValue !== newRegValue) {
                    uncheckNodesByMFPregister(regName + ':0x' + decimalToHex(oldRegValue).toUpperCase());
                    checkNodesByMFPregister(regName + ':0x' + decimalToHex(newRegValue).toUpperCase());
                }
            }
            updateMFPTree();
        }
        else {
            //something wrong
        }
    }
    ///////////////////////////////////// following functions will be invoked by the CDHtmlDialog ///////////////////////////
    function showRegisters() {
        if ($('#rootTree_Pin').is(':visible')) {
            if (typeof NUTOOL_PER === 'undefined') {
                if ($('#mfpTree').css('display') === 'none') {
                    $('#ChipType').show();
                    $('#MCU').show();
                    $('#mfpTree').show();
                    // adjust the height of moduleTree
                    $('#mfpTree').height(g_MFPTreeHeight);
                    $('#moduleTree').height(g_NUC_rootTree_Height - $("#ChipType").height() - $("#MCU").height() - g_MFPTreeHeight - 6 - $("#supportedModules").height());
                }
                else {
                    $('#ChipType').hide();
                    $('#MCU').hide();
                    $('#mfpTree').hide();
                    // adjust the height of moduleTree
                    $('#moduleTree').height(g_NUC_rootTree_Height - $("#supportedModules").height());
                }
            }
            else {
                if ($('#mfpTree').css('display') === 'none') {
                    $('#mfpTree').show();
                    // adjust the height of moduleTree
                    $('#mfpTree').height(g_MFPTreeHeight);
                    $('#moduleTree').height(g_NUC_rootTree_Height - $("#ChipType").height() - $("#MCU").height() - g_MFPTreeHeight - 6 - $("#supportedModules").height());
                }
                else {
                    $('#mfpTree').hide();
                    // adjust the height of moduleTree
                    $('#moduleTree').height(g_NUC_rootTree_Height - $("#supportedModules").height());
                }
            }
        }
    }

    function loadConfig_core() {
        var oldfilename = "",
            newfilename = "";

        try {
            // reload the corresponding chip content
            // enable faster check method
            g_bUsingSpeedupCheck = true;
            // decide g_partNumber_package based on the loaded config file
            if (!decidePartNumber_package()) {
                showAlertDialog("配置档不正确。",
                    "配置檔不正確。",
                    "The config file is incorrect.");
                g_bCheckNodesBasedOnConfigFile = false;
            }

            avoidClicking();

            initializeAll();

            refresh();

            // after all nodes have been checked, we update the MPF tree.
            updateMFPTree();

            // do not forget to adjust the zoom feature
            g_currIEZoom = 100;
            zoomFunction();
            zoomToBestFit();

            // populate and assign the new g_partNumber_package
            $('#MCUselect').val(g_partNumber_package);
            g_selectedPartNoValue = g_partNumber_package;

            // 讀取 locked pin
            var newReadConfigFile = NUTOOL_PIN.g_readConfigFileContentText;
            g_lockedPin = JSON.parse(newReadConfigFile.sliceAfterX('LockedPins=').slicePriorToX('\r\n'));

            destroyAllExistentDialogs();

            g_bUsingSpeedupCheck = false;
        }
        catch (err) { }

        oldfilename = null;
        newfilename = null;
    }

    function saveConfig() {
        if (checkPinCorrectness(showPinError)) {
            try {
                get_gpio_MFPsNames();
                var text = `/****************************************************************************\r\n`
                    + ` * @file     ${g_partNumber_package}.ncfg\r\n`
                    + ` * @version  ${VERSION_CODE}\r\n`
                    + ` * @Date     ${new Date()}\r\n`
                    + ` * @brief    ${g_briefName} config file\r\n`
                    + ` *\r\n`
                    + ` * @note Please do not modify this file.\r\n`
                    + ` *       Otherwise, it may not be loaded successfully.\r\n`
                    + ` *\r\n`
                    + ` * SPDX-License-Identifier: Apache-2.0\r\n`
                    + ` *\r\n`
                    + ` * Copyright (C) 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} All rights reserved.\r\n`
                    + `*****************************************************************************/\r\n`
                    + `MCU:${g_partNumber_package}\r\n`
                    + `${g_pinCurrentStateString}`
                    + `${g_pinsConfiguredByGPIOstring}` // TODO: no show
                    + `${g_userDefinedPinString}`
                    + `${g_gpio_MFPsString}`
                    + `${g_lockededPinString}`
                    + `/*** (C) COPYRIGHT 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} ***/\r\n`
                var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
                saveAs(blob, `${g_partNumber_package}.ncfg`);
            } catch (err) {
                console.log("saveConfig failed, meg:" + err);
            }
        }
    }

    function get_gpio_MFPsNames() {
        var i,
            max,
            gpio_MFPsNames = [],
            parentRegisterAccess = 'SYS->',
            pinDescription;

        // parentRegisterAccess may differ between NTC and NTCJ
        if (NUTOOL_PIN.g_cfg_gpiosDefines.length !== 0 &&
            (NUTOOL_PIN.g_cfg_gpiosDefines[0].f.length > 1 && NUTOOL_PIN.g_cfg_gpiosDefines[0].f[1].indexOf("GPIO:GPIO_") === 0)) {
            parentRegisterAccess = 'GPIO_MD->';
        }
        // concatenate gpio_MFP into a string
        g_gpio_MFPsString = "";

        gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);
        gpio_MFPsNames.sort();

        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            g_gpio_MFPsString += parentRegisterAccess + gpio_MFPsNames[i] + ' = 0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase() + '\r\n';
        }

        // concatenate g_pinCurrentModule into a string
        g_pinCurrentStateString = "";
        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                g_pinCurrentStateString += 'Pin' + updatePinName(i) + ':' + g_pinCurrentDescription[i - 1] + '\r\n';
            }
            else {
                pinDescription = g_chipPinDescriptions[i - 1].slice(g_chipPinDescriptions[i - 1].indexOf(g_pinCurrentModule[i - 1]));
                pinDescription = pinDescription.slicePriorToX('/');

                g_pinCurrentStateString += 'Pin' + updatePinName(i) + ':' + pinDescription + '\r\n';
            }
        }

        // concatenate g_pinsConfiguredByGPIO into a string
        g_pinsConfiguredByGPIOstring = "";
        for (i = 0, max = g_pinsConfiguredByGPIO.length; i < max; i += 1) {
            g_pinsConfiguredByGPIOstring += 'GPIOpin:' + g_pinsConfiguredByGPIO[i] + '\r\n';
        }

        // concatenate g_userDefinedPin into a string
        g_userDefinedPinString = "";
        for (pinDescription in g_userDefinedPin) {
            if (g_userDefinedPin.hasOwnProperty(pinDescription) &&
                g_userDefinedPin[pinDescription].trim() !== '') {
                g_userDefinedPinString += 'UserDefined:' + pinDescription + '=>' + g_userDefinedPin[pinDescription] + '\r\n';
            }
        }

        // concatenate g_lockededPin into a string
        g_lockededPinString = "LockedPins=" + JSON.stringify(g_lockedPin) + '\r\n';

        // de-reference
        i = null;
        max = null;
        gpio_MFPsNames = [];
        pinDescription = null;
    }

    function get_pin_descriptions() {
        var i,
            j,
            k,
            maxJ,
            maxK,
            pinDescription,
            pinName,
            pinGroup,
            pinNameZero,
            tableData,
            tableDataArray = [];

        // for current multi-function
        g_pin_descriptions = "Pin,Current Multi Function,Group\r\n";
        for (i = 0, j = 1; i < g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i] !== "") {
                // Fix bug: avoid USB_D+/USB_D- trans to USB_D_/USB_D_ in .csv, so remove +/- from replace string.
                pinDescription = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i] + '/' + updatePinDescription(g_pinCurrentDescription[i]).replace(/[.]/g, '').replace(/\s/g, '_').replace(/[`~!@#$%^&*()|=?;:'",<>\{\}\[\]\\\/]/gi, '_');
            }
            else {
                pinDescription = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
            }
            pinGroup = NUTOOL_PIN.g_cfg_OrCAD[NUTOOL_PIN.g_packageNumberIndex] == undefined ?
                '' : NUTOOL_PIN.g_cfg_OrCAD[NUTOOL_PIN.g_packageNumberIndex][i];
            if (pinDescription.indexOf('NC_ToolNotShow') === -1) {
                g_pin_descriptions += updatePinName(i + 1) + ',' + pinDescription + ',' + pinGroup + '\r\n';
                // Review Report
                if (isGPIOPin(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i]) &&
                    g_pinCurrentDescription[i] !== "") {
                    tableData = {};
                    tableData.id = j;
                    tableData.pin = updatePinName(i + 1);
                    tableData.pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
                    tableData.pinNumber = i + 1;
                    tableData.description = g_pinCurrentDescription[i];
                    if (typeof g_userDefinedPin[g_pinCurrentDescription[i]] !== 'undefined' &&
                        g_userDefinedPin[g_pinCurrentDescription[i]].trim() !== '') {
                        tableData.userDefined = g_userDefinedPin[g_pinCurrentDescription[i]];
                    }
                    else {
                        tableData.userDefined = '';
                    }
                    j = j + 1;
                    tableDataArray.push(tableData);
                }
            }
        }
        // concatenate g_chipPinDescriptions into a string
        g_pin_descriptions += "\r\nPin,Description,Group\r\n";
        for (i = 0; i < g_NUC_Pin_Total_Number; i += 1) {
            pinDescription = "";
            pinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i];
            pinNameZero = pinName + ':0';
            for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios.length; j < maxJ; j += 1) {
                if (pinNameZero === NUTOOL_PIN.g_cfg_gpios[j].f[0]) {
                    for (k = 0, maxK = NUTOOL_PIN.g_cfg_gpios[j].f.length; k < maxK; k += 1) {
                        pinDescription += NUTOOL_PIN.g_cfg_gpios[j].f[k].slicePriorToX(':');

                        if (k !== NUTOOL_PIN.g_cfg_gpios[j].f.length - 1) {
                            pinDescription += '/';
                        }
                    }
                    break;
                }
            }
            if (pinDescription === "") {
                pinDescription = pinName;
            }
            pinGroup = NUTOOL_PIN.g_cfg_OrCAD[NUTOOL_PIN.g_packageNumberIndex] == undefined ?
                '' : NUTOOL_PIN.g_cfg_OrCAD[NUTOOL_PIN.g_packageNumberIndex][i];
            if (pinDescription.indexOf('NC_ToolNotShow') === -1) {
                g_pin_descriptions += updatePinName(i + 1) + ',' + pinDescription + ',' + pinGroup + '\r\n';
            }
        }
        return tableDataArray;
    }

    function recordConfig() {
        var i,
            max,
            gpio_MFPsNames = [];
        gpio_MFPsNames = getPropertyNames(g_gpio_MFPs);

        g_saved_gpio_MFPs = [];
        for (i = 0, max = gpio_MFPsNames.length; i < max; i += 1) {
            g_saved_gpio_MFPs[gpio_MFPsNames[i]] = g_gpio_MFPs[gpio_MFPsNames[i]];
        }

        i = null;
        max = null;
        gpio_MFPsNames = [];
    }

    function showPinDescriptions() {
        if ($('#rootTree_Pin').is(':visible')) {
            g_bShowPinDescriptions = !g_bShowPinDescriptions;

            initializeAll_redraw();

            refresh_redraw();

            // generate scrollbars
            $("#panel").css('overflow-x', 'scroll');
            $("#panel").css('overflow-y', 'scroll');

            g_currIEZoom = 100;
            zoomFunction();
            zoomToBestFit();
        }
    }

    function setReviewReportTable(pinNumber, pinDescription, userDefined) {
        if (!g_bReadyForRelease && window.console) { window.console.log(pinDescription + ": " + userDefined); }
        g_userDefinedPin[pinDescription] = userDefined.trim();
        showChosenPinFeature(parseInt(pinNumber, 10) - 1, pinDescription.trim(), false);
        if (g_partNumber_package.indexOf('WLCSP') !== -1 || g_partNumber_package.indexOf('BGA') !== -1) {
            updatePinColor(parseInt(pinNumber, 10), 'savedPinPadColor');
        }
    }

    function generateCode(mode) {
        var i,
            max,
            title,
            title1,
            projectName,
            content,
            content2,
            checkbox_ModularizeCodeChecked = "checked=true",
            dialogContent,
            validateDialogNameAndPath,
            projectLocationHistorySelect = "",
            projectLocationHistoryText = "",
            projectBrowseButtonText = "",
            projectLocationArray = [],
            checkboxModularize,
            checkboxModularizeType,
            checkboxModularizeNotSupportedList = ['ML51', 'ML56', 'ML5156', 'MG51', 'MS51_8K', 'MS51_8KDB', 'MS51_16K', 'MS51_32K', 'MUG51', 'N76S003', 'N76E003'],
            checkboxReviewReport,
            buildReviewReportTable,
            sTitle_Pin_inner = "",
            sTitle_PinName_inner = "",
            sTitle_Description_inner = "",
            sTitle_UserDefined_inner = "",
            sTooltip_inner = "",
            sNoData_inner = "",
            reviewReportTable = null,
            reviewReportTableHeight,
            tableDataArray = [],
            buttonOk,
            recordedUIlanguage = localStorage.getItem("UIlanguage"),
            recordedCheckCriteriaPin = "",
            recordedCheckCriteriaModule = "",
            recordedCheckCriteriaGPIO = "",
            recordedChecModularizeCode = "",
            reocrdedPorjectName = "",
            recordedProjectLocation = "",
            recordedProjectLocationHistory = "";

        validateDialogNameAndPath = function (projectName, projectPath) {
            var ii,
                maxII,
                invalidCharArray = ['*', '?', '"', '<', '>', '|'],
                localChar,
                bResult = true;

            for (ii = 0, maxII = invalidCharArray.length; ii < maxII; ii += 1) {
                localChar = invalidCharArray[ii];
                if (projectPath.indexOf(invalidCharArray[ii]) !== -1) {
                    showAlertDialog("工程路径不应该包含" + localChar + "。请修正它。",
                        "專案路徑不應該包含" + localChar + "。請修正它。",
                        "The project path should not contain " + localChar + ". Please fix it.");
                    bResult = false;
                    break;
                }
            }
            invalidCharArray.push('\\');
            invalidCharArray.push('/');
            invalidCharArray.push(':');
            for (ii = 0, maxII = invalidCharArray.length; ii < maxII; ii += 1) {
                localChar = invalidCharArray[ii];
                if (projectName.indexOf(localChar) !== -1) {
                    showAlertDialog("工程名称不应该包含" + localChar + "。请修正它。",
                        "專案名稱不應該包含" + localChar + "。請修正它。",
                        "The project name should not contain " + localChar + ". Please fix it.");
                    bResult = false;
                    break;
                }
            }

            if (!projectPath.charAt(0).match(/^[a-zA-Z]/) ||
                !projectPath.charAt(1).match(/^[:]/) ||
                !projectPath.charAt(2).match(/^[\/\\]/)) {
                showAlertDialog("工程路径开头应为磁碟机代号、磁碟区分隔符号和元件分隔符号(C:\)。请修正它。",
                    "專案路徑開頭應為磁碟機代號、磁碟區分隔符號和元件分隔符號(C:\)。請修正它。",
                    "The project path should begin with a drive letter, a volume separator and a component separator (C:\). Please fix it.");
                bResult = false;
            }
            if (projectName.slice(-1).match(/^[ .]/)) {
                showAlertDialog("工程名称不应以空格或句号结尾。请修正它。",
                    "專案名稱不應以空格或句號結尾。請修正它。",
                    "The project name should not end with a space or peroid. Please fix it.");
                bResult = false;
            }
            return bResult;
        };

        buildReviewReportTable = function () {
            if (g_userSelectUIlanguage.indexOf("Simplified") !== -1) {
                sTitle_Pin_inner = "脚位";
                sTitle_PinName_inner = "脚位名称";
                sTitle_Description_inner = "描述";
                sTitle_UserDefined_inner = "用户定义";
                sTooltip_inner = "仅限英文字母、数字和底线。\r\n最大输入长度为30。";
                sNoData_inner = "没有可用数据，因为尚未配置。";
            }
            else if (g_userSelectUIlanguage.indexOf("Traditional") !== -1) {
                sTitle_Pin_inner = "腳位";
                sTitle_PinName_inner = "腳位名稱";
                sTitle_Description_inner = "描述";
                sTitle_UserDefined_inner = "用戶定義";
                sTooltip_inner = "僅限英文字母、數字和底線。\r\n最大輸入長度為30。";
                sNoData_inner = "沒有可用數據，因為尚未配置。";
            }
            else {
                sTitle_Pin_inner = "Pin";
                sTitle_PinName_inner = "Pin Name";
                sTitle_Description_inner = "Description";
                sTitle_UserDefined_inner = "User Defined";
                sTooltip_inner = "English letters, digits and underscores only.\r\nMaximum length of input is 30.";
                sNoData_inner = "No data available because not configured yet.";
            }
            // build the new table
            if (!$("#reviewReportTable")[0]) {
                $("<div id='reviewReportTable'></div>").insertAfter($("#generateCodeDialogMainPart_div"));
            }
            tableDataArray = get_pin_descriptions();
            if (tableDataArray.length > 10) {
                reviewReportTableHeight = "282px";
            }
            else {
                reviewReportTableHeight = "100%";
            }
            if (tableDataArray.length > 0) {
                reviewReportTable = new Tabulator("#reviewReportTable", {
                    height: reviewReportTableHeight, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                    data: tableDataArray, //assign data to table
                    layout: "fitColumns", //fit columns to width of table
                    columns: [ //Define Table Columns
                        { title: sTitle_Pin_inner, field: "pin", headerFilter: true },
                        { title: sTitle_PinName_inner, field: "pinName", headerFilter: true },
                        { title: sTitle_Description_inner, field: "description", headerFilter: true },
                        { title: sTitle_UserDefined_inner, field: "userDefined", headerFilter: true, editor: true, validator: ["regex:^[a-zA-Z0-9 _]+$", "maxLength:30"], tooltip: sTooltip_inner }
                    ],
                    cellEdited: function (cell) {
                        setReviewReportTable(cell._cell.row.data.pinNumber, cell._cell.row.data.description, cell._cell.value);
                    },
                    langs: {
                        "Simplified": {
                            "headerFilters": {
                                "default": "过滤",
                            }
                        },
                        "Traditional": {
                            "headerFilters": {
                                "default": "過濾...",
                            }
                        },
                        "English": {
                            "headerFilters": {
                                "default": "filter...",
                            }
                        }
                    }
                });
                if (g_userSelectUIlanguage.indexOf("Simplified") !== -1) {
                    reviewReportTable.setLocale("Simplified");
                }
                else if (g_userSelectUIlanguage.indexOf("Traditional") !== -1) {
                    reviewReportTable.setLocale("Traditional");
                }
                else {
                    reviewReportTable.setLocale("English");
                }
            }
            else if (tableDataArray.length === 0) {
                reviewReportTable = new Tabulator("#reviewReportTable", {
                    height: reviewReportTableHeight, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
                    placeholder: sNoData_inner //display message to user on empty table
                });
            }
        };
        // entry
        if (checkPinCorrectness(showPinError) === false) {
            return;
        }


        if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
            title = "Generate Code";
            title1 = "User Defined Functions";
            projectName = 'Project Name';
            content = "Please input a folder path for storing the generated code:";
            content2 = "Please note that the tool is not a replacement for the technical reference manual or datasheet. The user must refer to the latest documentation for the correctness.";
            projectLocationHistoryText = "Or you can choose a folder from recent projects";
            projectBrowseButtonText = "Browse";
            checkboxModularize = "Modularize Code";
            checkboxReviewReport = "Review Report";
            buttonOk = "Confirm";
        } else {
            recordedCheckCriteriaPin = localStorage.getItem("CheckCriteriaPin");
            if (recordedCheckCriteriaPin == null) {
                recordedCheckCriteriaPin = "No";
            }

            recordedCheckCriteriaModule = localStorage.getItem("CheckCriteriaModule");
            if (recordedCheckCriteriaModule == null) {
                recordedCheckCriteriaModule = "No";
            }

            recordedCheckCriteriaGPIO = localStorage.getItem("CheckCriteriaGPIO");
            if (recordedCheckCriteriaGPIO == null) {
                recordedCheckCriteriaGPIO = "No";
            }

            recordedChecModularizeCode = localStorage.getItem("CheckModularizeCode");
            if (recordedChecModularizeCode == null || recordedChecModularizeCode === "No") {
                recordedChecModularizeCode = "No";
                checkbox_ModularizeCodeChecked = "";
            }

            reocrdedPorjectName = localStorage.getItem("ProjectName");
            if (reocrdedPorjectName == null) {
                reocrdedPorjectName = "";
            }

            recordedProjectLocation = localStorage.getItem("ProjectLocation");
            if (recordedProjectLocation == null) {
                recordedProjectLocation = "";
            }

            recordedProjectLocationHistory = localStorage.getItem("ProjectLocationHistory");
            if (recordedProjectLocationHistory == null) {
                recordedProjectLocationHistory = "";
            }

            if (recordedUIlanguage === "Simplified Chinese") {
                title = "产生程式码";
                title1 = "用户定义功能";
                projectName = '工程名称';
                content = "请输入文件夹路径，用于存放生成的代码:";
                content2 = "请注意，本软件不能取代技术参考手册或规格书。用户必须参考最新文档以确保正确性。";
                projectLocationHistoryText = "或是您可以从最近的工程中选择一个";
                projectBrowseButtonText = "浏览";
                checkboxModularize = "模组化代码";
                checkboxReviewReport = "检阅报告";
                buttonOk = "确定";
            }
            else if (recordedUIlanguage === "Traditional Chinese") {
                title = "產生程式碼";
                title1 = "用戶定義功能";
                projectName = '專案名稱';
                content = "請輸入資料夾路徑，用於存放生成的程式碼:";
                content2 = "請注意，本軟件不能取代技術參考手冊或規格書。用戶必須參考最新文檔以確保正確性。";
                projectLocationHistoryText = "或是您可以從最近的專案中選擇一個";
                projectBrowseButtonText = "瀏覽";
                checkboxModularize = "模組化程式碼";
                checkboxReviewReport = "檢閱報告";
                buttonOk = "確定";
            }
            else {
                title = "Generate Code";
                title1 = "User Defined Functions";
                projectName = 'Project Name';
                content = "Please input a folder path for storing the generated code:";
                content2 = "Please note that the tool is not a replacement for the technical reference manual or datasheet. The user must refer to the latest documentation for the correctness.";
                projectLocationHistoryText = "Or you can choose a folder from recent projects";
                projectBrowseButtonText = "Browse";
                checkboxModularize = "Modularize Code";
                checkboxReviewReport = "Review Report";
                buttonOk = "Confirm";
            }
        }

        if (reocrdedPorjectName.trim() === "") {
            reocrdedPorjectName = "MyProject";
        }
        if (recordedProjectLocationHistory.trim() !== "") {
            projectLocationArray = recordedProjectLocationHistory.split('>');
            projectLocationHistorySelect = '<br /><label><select id="generateCodeDialogSelect" style="width: 450px;height:32px;"><option value="default">' + projectLocationHistoryText + '</option>';
            for (i = 0, max = projectLocationArray.length - 1; i < max; i++) {
                projectLocationHistorySelect += '<option value="' + projectLocationArray[i] + '">' + projectLocationArray[i] + '</option>';
            }
            projectLocationHistorySelect += '</select></label>';
        }

        // Special Case For MS70
        if (g_chipType.indexOf("M55M1") === 0) {
            checkboxModularizeType = "checkbox";
        } else if (checkboxModularizeNotSupportedList.indexOf(g_chipType) === -1 &&
            NUTOOL_PIN.g_cfg_gpiosDefines.length !== 0 &&
            (NUTOOL_PIN.g_cfg_gpiosDefines[0].f.length > 1 && NUTOOL_PIN.g_cfg_gpiosDefines[0].f[1].indexOf("GPIO:") === 0)) {
            checkboxModularizeType = "checkbox";
        } else {
            checkboxModularize = "";
            checkboxModularizeType = "hidden";
            checkbox_ModularizeCodeChecked = "";
        }

        // close the last dialog
        destroyAllExistentDialogs();
        if (typeof mode === 'undefined') {
            dialogContent = '<div id="generateCodeDialogMainPart_div"><label>' + projectName + ': <input type="text" id="inputText_projectName" value="' + reocrdedPorjectName + '" style="width:250px;height:24px;"></label><br /><br /><label><p>' + content2 + '</p></div>';
            dialogContent += '<div id="reviewReportTable"></div>';
            $('<div id="generateCodeDialog">' + dialogContent + '</div>').dialog({
                modal: false,
                resizable: false,
                title: title,
                width: 500,
                height: 'auto',
                show: 'fade',
                hide: 'fade',
                close: function () {
                    $("#generateCodeDialog").dialog("destroy");
                },
                create: function (e, ui) {
                    var pane = $(this).dialog("widget").find(".ui-dialog-buttonpane");
                    if ($('html').hasClass('ie10+')) {
                        $("<div class='generateCodeByModule'><input type='" + checkboxModularizeType + "' id='checkbox_ModularizeCode' " + checkbox_ModularizeCodeChecked + "/>" + checkboxModularize + "<input type='checkbox' id='checkbox_ReviewReport'/>" + checkboxReviewReport + "</div>").prependTo(pane);
                    }
                    else {
                        $("<div class='generateCodeByModule'><label><input type='" + checkboxModularizeType + "' id='checkbox_ModularizeCode' " + checkbox_ModularizeCodeChecked + "/>" + checkboxModularize + " </label></div>").prependTo(pane);
                    }
                },
                buttons: [
                    {
                        id: "generateCodeDialog_buttonOk",
                        text: buttonOk,
                        click: function () {
                            // 先把ProjectName和CheckModularizeCode的值寫入localStorage
                            localStorage.setItem("ProjectName", $('#inputText_projectName').val());
                            if ($("#checkbox_ModularizeCode").is(":checked")) {
                                localStorage.setItem("CheckModularizeCode", "Yes");
                            } else {
                                localStorage.setItem("CheckModularizeCode", "No");
                            }
                            // 本來做的事
                            $("#generateCodeDialog_buttonOk").button("disable");
                            if ($('#inputText_projectName').val().trim() === "") {
                                $('#inputText_projectName').val("MyProject");
                            }
                            try { generateCodeFromJS(); } catch (err) { }
                            // close the last dialog
                            if ($("#generateCodeDialog").dialog("isOpen")) {
                                $("#generateCodeDialog").dialog("destroy");
                            }
                            else {
                                $("#generateCodeDialog_buttonOk").button("enable");
                            }
                        }
                    }
                ]
            });
        }
        else if (mode.indexOf('userDefined') === 0) {
            // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
            dialogContent = '<div id="reviewReportTable"><input type="text" size="1" style="position:relative;top:-5000px;"/></div>';
            $('<div id="generateCodeDialog">' + dialogContent + '</div>').dialog({
                modal: false,
                resizable: false,
                title: title1,
                width: 500,
                height: 'auto',
                show: 'fade',
                hide: 'fade',
                close: function () {
                    $("#generateCodeDialog").dialog("destroy");
                },
                buttons: [
                    {
                        id: "generateCodeDialog_buttonOk",
                        text: buttonOk,
                        click: function () {
                            if (mode.indexOf('runAnotherTool') !== -1) {
                                runAnotherTool();
                            }
                            else {
                                // close the last dialog
                                if ($("#generateCodeDialog").dialog("isOpen")) {
                                    $("#generateCodeDialog").dialog("destroy");
                                }
                            }
                        }
                    }
                ]
            });
            // create the content of review table
            buildReviewReportTable();
        }
        // handle events
        $('#generateCodeDialogInput').keypress(function (e) {
            switch (e.which) {
                case 22: //ctrl + v
                    $("#generateCodeDialogInput").val(window.clipboardData.getData("Text"));
                    break;
            }
        });
        $('#generateCodeDialogBrowseFolder').click(function () {
            if ($('#inputText_projectName').val().trim() === "") {
                $('#inputText_projectName').val("MyProject");
            }
            try { generateCodeFromJS(); } catch (err) { }
            if (NUTOOL_PIN.g_pinFunctionString !== "" &&
                NUTOOL_PIN.g_pinFunctionString.indexOf(':') !== -1) {
                $("#generateCodeDialogInput").val(NUTOOL_PIN.g_pinFunctionString);
            }
            $("#generateCodeDialog").focus();
        });
        $("#generateCodeDialogSelect").change(function () {
            if ($("#generateCodeDialogSelect").val() !== "default") {
                $("#generateCodeDialogInput").val($("#generateCodeDialogSelect").val());
                $("#generateCodeDialogSelect").val($("#generateCodeDialogSelect option:first-child").val());
            }
        });
        $("#checkbox_ReviewReport").change(function () {
            if ($('#checkbox_ReviewReport').is(':checked')) {
                buildReviewReportTable();
                $('#generateCodeDialogMainPart_div').hide();
                $("#generateCodeDialog_buttonOk").button("disable");
            }
            else {
                // remove the last table
                $('#reviewReportTable').remove();
                $('#generateCodeDialogMainPart_div').show();
                $("#generateCodeDialog_buttonOk").button("enable");
            }
        });
    }

    function generateCodeFromJS() {
        // 前置步驟
        var recordedCheckCriteriaPin = localStorage.getItem("CheckCriteriaPin");
        if (recordedCheckCriteriaPin == "Yes") {
            getGeneratedCodeByPin();
        }
        var recordedCheckCriteriaModule = localStorage.getItem("CheckCriteriaModule");
        if (recordedCheckCriteriaModule == "Yes") {
            getGeneratedCodeByModule();
        }
        var recordedCheckCriteriaGPIO = localStorage.getItem("CheckCriteriaGPIO");
        if (recordedCheckCriteriaGPIO == "Yes") {
            getGeneratedCodeByGPIO();
        }

        // Generate .dts
        getIncludeHeadFile();
        if (g_includeHeadFileString.indexOf('.h') == -1) {
            getDataUsedToCreateText();
            var textdts = `/****************************************************************************\r\n`
                + ` * @file     ${$('#inputText_projectName').val()}.c\r\n`
                + ` * @version  ${VERSION_CODE}\r\n`
                + ` * @Date     ${new Date()}\r\n`
                + ` * @brief    ${g_briefName} generated code file\r\n`
                + ` *\r\n`
                + ` * SPDX-License-Identifier: Apache-2.0\r\n`
                + ` *\r\n`
                + ` * Copyright (C) 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} All rights reserved.\r\n`
                + `*****************************************************************************/\r\n`
                + ` *\r\n`
                + `/********************\r\n`
                + `MCU:${g_partNumber_package}\r\n`
                + (g_generatedCodeByPinString == undefined ? "" : `Pin Configuration:\r\n${g_generatedCodeByPinString}`)
                + (g_generatedCodeByModuleString == undefined ? "" : `Module Configuration:\r\n${g_generatedCodeByModuleString}`)
                + (g_generatedCodeByGPIOstring == undefined ? "" : `GPIO Configuration:\r\n${g_generatedCodeByGPIOstring}`)
                + `********************/\r\n\r\n`
                + `${g_includeHeadFileString}`
                + `\r\n`
                + `${g_gpio_MFPsString}`
                + `/*** (C) COPYRIGHT 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} ***/\r\n`
            var blobdts = new Blob([textdts], { type: "text/plain;charset=utf-8" });
            saveAs(blobdts, `${$('#inputText_projectName').val()}.dts`);

        }

        // Generate .c + .h
        if ($("#checkbox_ModularizeCode").is(":checked")) {
            getModularizedDataUsedToCreateText();
            var textc = `/****************************************************************************\r\n`
                + ` * @file     ${$('#inputText_projectName').val()}.c\r\n`
                + ` * @version  ${VERSION_CODE}\r\n`
                + ` * @Date     ${new Date()}\r\n`
                + ` * @brief    ${g_briefName} generated code file\r\n`
                + ` *\r\n`
                + ` * SPDX-License-Identifier: Apache-2.0\r\n`
                + ` *\r\n`
                + ` * Copyright (C) 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} All rights reserved.\r\n`
                + `*****************************************************************************/\r\n`
                + `\r\n`
                + `/********************\r\n`
                + `MCU:${g_partNumber_package}\r\n`
                + (g_generatedCodeByPinString == undefined ? "" : `Pin Configuration:\r\n${g_generatedCodeByPinString}`)
                + (g_generatedCodeByModuleString == undefined ? "" : `Module Configuration:\r\n${g_generatedCodeByModuleString}`)
                + (g_generatedCodeByGPIOstring == undefined ? "" : `GPIO Configuration:\r\n${g_generatedCodeByGPIOstring}`)
                + `********************/\r\n\r\n`
                + `${g_includeHeadFileString}`
                + (g_userDefinedPinString == undefined ? "" : `\r\n${g_userDefinedPinString}`)
                + `${g_gpio_MFPsString}`
                + `\r\n\r\n/*** (C) COPYRIGHT 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} ***/\r\n`
            var blobc = new Blob([textc], { type: "text/plain;charset=utf-8" });
            saveAs(blobc, `${$('#inputText_projectName').val()}.c`);

            var texth = `/****************************************************************************\r\n`
                + ` * @file     ${$('#inputText_projectName').val()}.h\r\n`
                + ` * @version  ${VERSION_CODE}\r\n`
                + ` * @Date     ${new Date()}\r\n`
                + ` * @brief    ${g_briefName} generated code file\r\n`
                + ` *\r\n`
                + ` * SPDX-License-Identifier: Apache-2.0\r\n`
                + ` *\r\n`
                + ` * Copyright (C) 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} All rights reserved.\r\n`
                + `*****************************************************************************/\r\n\r\n`
                + `#ifndef __${$('#inputText_projectName').val().toUpperCase()}_H__\r\n`
                + `#define __${$('#inputText_projectName').val().toUpperCase()}_H__\r\n\r\n`
                + `#ifdef __cplusplus\r\nextern \"C\"\r\n{\r\n#endif\r\n`
                + `${g_gpio_MFPsString1}`
                + `#ifdef __cplusplus\r\n}\r\n#endif\r\n`
                + `#endif /*__${$('#inputText_projectName').val().toUpperCase()}_H__*/\r\n\r\n`
                + `/*** (C) COPYRIGHT 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} ***/\r\n`
            var blobh = new Blob([texth], { type: "text/plain;charset=utf-8" });
            saveAs(blobh, `${$('#inputText_projectName').val()}.h`);
        }
        // Generate .c
        else {
            getDataUsedToCreateText();
            var textc = `/****************************************************************************\r\n`
                + ` * @file     ${$('#inputText_projectName').val()}.c\r\n`
                + ` * @version  ${VERSION_CODE}\r\n`
                + ` * @Date     ${new Date()}\r\n`
                + ` * @brief    ${g_briefName} generated code file\r\n`
                + ` *\r\n`
                + ` * SPDX-License-Identifier: Apache-2.0\r\n`
                + ` *\r\n`
                + ` * Copyright (C) 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} All rights reserved.\r\n`
                + `*****************************************************************************/\r\n`
                + `\r\n`
                + `/********************\r\n`
                + `MCU:${g_partNumber_package}\r\n`
                + (g_generatedCodeByPinString == undefined ? "" : `Pin Configuration:\r\n${g_generatedCodeByPinString}`)
                + (g_generatedCodeByModuleString == undefined ? "" : `Module Configuration:\r\n${g_generatedCodeByModuleString}`)
                + (g_generatedCodeByGPIOstring == undefined ? "" : `GPIO Configuration:\r\n${g_generatedCodeByGPIOstring}`)
                + `********************/\r\n\r\n`
                + `${g_includeHeadFileString}`
                + (g_userDefinedPinString == undefined ? "" : `\r\n${g_userDefinedPinString}`)
                + `/*\r\n`
                + ` * @brief This function provides the configured MFP registers\r\n`
                + ` * @param None\r\n`
                + ` * @return None\r\n`
                + ` */\r\n`
                + `void SYS_Init(void)\r\n{\r\n`
                + `${g_gpio_MFPsString}`
                + `\r\n    return;\r\n}\r\n\r\n`
                + `/*** (C) COPYRIGHT 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} ***/\r\n`
            var blobc = new Blob([textc], { type: "text/plain;charset=utf-8" });
            saveAs(blobc, `${$('#inputText_projectName').val()}.c`);
        }

        // Generate .ncfg (因為.cfg無法藉由瀏覽器存到local端)
        get_gpio_MFPsNames();
        var textcfg = `/****************************************************************************\r\n`
            + ` * @file     ${$('#inputText_projectName').val()}.ncfg\r\n`
            + ` * @version  ${VERSION_CODE}\r\n`
            + ` * @Date     ${new Date()}\r\n`
            + ` * @brief    ${g_briefName} config file\r\n`
            + ` *\r\n`
            + ` * @note Please do not modify this file.\r\n`
            + ` *       Otherwise, it may not be loaded successfully.\r\n`
            + ` *\r\n`
            + ` * SPDX-License-Identifier: Apache-2.0\r\n`
            + ` *\r\n`
            + ` * Copyright (C) 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} All rights reserved.\r\n`
            + `*****************************************************************************/\r\n`
            + `MCU:${g_partNumber_package}\r\n`
            + `${g_pinCurrentStateString}`
            + `${g_pinsConfiguredByGPIOstring}` // TODO: no show
            + `${g_userDefinedPinString}`
            + `${g_gpio_MFPsString}`
            + `${g_lockededPinString}`
            + `/*** (C) COPYRIGHT 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} ***/\r\n`
        var blobcfg = new Blob([textcfg], { type: "text/plain;charset=utf-8" });
        saveAs(blobcfg, `${$('#inputText_projectName').val()}.ncfg`);
    }

    function getGeneratedCodeByPin(mode) {
        var i;
        // concatenate g_pinCurrentDescription into a string
        g_generatedCodeByPinString = "";
        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                if (typeof mode !== 'undefined' && mode === 'primitiveDescription') {
                    g_generatedCodeByPinString += 'Pin' + updatePinName(i) + ':' + g_pinCurrentDescription[i - 1] + '\r\n';
                }
                else {
                    g_generatedCodeByPinString += 'Pin' + updatePinName(i) + ':' + updatePinDescription(g_pinCurrentDescription[i - 1]) + '\r\n';
                }
            }
        }
        i = null;
    }

    function getGeneratedCodeByModule() {
        var i,
            j,
            max,
            maxJ,
            usedPinsCatalogedByModule = [],
            pinDescription,
            pin,
            module,
            moduleNames = [];

        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                pin = i;
                module = pinDescription = g_pinCurrentDescription[i - 1];
                if (module.indexOf('_') !== -1) {
                    module = module.slicePriorToX('_');
                }
                module = specialModuleNaming(module);

                if (typeof (usedPinsCatalogedByModule[module]) === 'undefined') {
                    usedPinsCatalogedByModule[module] = [];
                    usedPinsCatalogedByModule[module][0] = updatePinDescription(pinDescription) + '(Pin:' + updatePinName(pin) + ')';
                }
                else {
                    usedPinsCatalogedByModule[module].push(updatePinDescription(pinDescription) + '(Pin:' + updatePinName(pin) + ')');
                }
            }
        }

        g_generatedCodeByModuleString = "";
        moduleNames = getPropertyNames(usedPinsCatalogedByModule);
        for (i = 0, max = moduleNames.length; i < max; i += 1) {
            usedPinsCatalogedByModule[moduleNames[i]].sort(natualSort);
            for (j = 0, maxJ = usedPinsCatalogedByModule[moduleNames[i]].length; j < maxJ; j += 1) {
                g_generatedCodeByModuleString += usedPinsCatalogedByModule[moduleNames[i]][j] + '\r\n';
            }
        }
        // de-reference
        i = null;
        j = null;
        max = null;
        maxJ = null;
        usedPinsCatalogedByModule = [];
        moduleNames = [];
        pinDescription = null;
        pin = null;
        module = null;
    }

    function getGeneratedCodeByGPIO() {
        var i,
            j,
            max,
            maxJ,
            usedPinsCatalogedByGPIO = [],
            pinDescription,
            pin,
            gpio,
            gpioNames = [];

        for (i = 1; i <= g_NUC_Pin_Total_Number; i += 1) {
            if (g_pinCurrentDescription[i - 1] !== "") {
                pin = i;
                pinDescription = updatePinDescription(g_pinCurrentDescription[i - 1]);
                gpio = specialModuleNaming(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1]);

                if (typeof (usedPinsCatalogedByGPIO[gpio]) === 'undefined') {
                    usedPinsCatalogedByGPIO[gpio] = [];
                    usedPinsCatalogedByGPIO[gpio][0] = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1] + ':' + pinDescription + '(Pin:' + updatePinName(pin) + ')';
                }
                else {
                    usedPinsCatalogedByGPIO[gpio].push(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][pin - 1] + ':' + pinDescription + '(Pin:' + updatePinName(pin) + ')');
                }
            }
        }

        g_generatedCodeByGPIOstring = "";
        gpioNames = getPropertyNames(usedPinsCatalogedByGPIO).sort(natualSort);
        for (i = 0, max = gpioNames.length; i < max; i += 1) {
            usedPinsCatalogedByGPIO[gpioNames[i]].sort(natualSort);
            for (j = 0, maxJ = usedPinsCatalogedByGPIO[gpioNames[i]].length; j < maxJ; j += 1) {
                g_generatedCodeByGPIOstring += usedPinsCatalogedByGPIO[gpioNames[i]][j] + '\r\n';
            }
        }
        // de-reference
        i = null;
        j = null;
        max = null;
        maxJ = null;
        usedPinsCatalogedByGPIO = [];
        gpioNames = [];
        pinDescription = null;
        pin = null;
        gpio = null;
    }

    function getGeneratedMFPFunctionList() {
        var i,
            j,
            max,
            maxJ;

        g_generatedMFPFunctionList = "/";
        for (i = 0, max = NUTOOL_PIN.g_cfg_gpios.length; i < max; i += 1) {
            for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios[i].f.length; j < maxJ; j += 1) {
                g_generatedMFPFunctionList += NUTOOL_PIN.g_cfg_gpios[i].f[j] + '/';
            }
        }
    }

    function printReport() {
        var printReportDialog,
            title,
            dialogWidth,
            dialogHeight,
            projectName,
            content,
            content2,
            contentIE8,
            byChipView,
            byPin,
            byModule,
            byGPIO,
            byRegister,
            buttonOk,
            buttonCancel,
            checkResult,
            recordedUIlanguage = localStorage.getItem("UIlanguage");

        if ($('#rootTree_Pin').is(':visible') && checkPinCorrectness(showPinError)) {
            if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                title = "Print Report";
                projectName = "Project Name";
                content = "Select the criteria by which the configured information is being cataloged.";
                content2 = "Please note that the tool is not a replacement for the technical reference manual or datasheet. The user must refer to the latest documentation for the correctness.";
                contentIE8 = "IE8 does not support this feature. If you want to use this feature, please upgrade IE. Thanks.";
                byChipView = "ChipView";
                byPin = "Pin";
                byModule = "Module";
                byGPIO = "GPIO";
                byRegister = "Register";
                buttonOk = "Confirm";
                buttonCancel = "Leave";
            } else {
                if (recordedUIlanguage === "Simplified Chinese") {
                    projectName = "方案名称";
                    title = "印出报告";
                    content = "选择用来展示配置资讯的标准。";
                    content2 = "请注意，本软件不能取代技术参考手册或规格书。用户必须参考最新文档以确保正确性。";
                    contentIE8 = "IE8不支援这个功能。倘若您想要使用此功能,请升级至IE9以上。谢谢。";
                    byChipView = "芯片图示";
                    byPin = "脚位";
                    byModule = "模組";
                    byGPIO = "多工泛用脚位";
                    byRegister = "寄存器";
                    buttonOk = "确定";
                    buttonCancel = "离开";
                }
                else if (recordedUIlanguage === "Traditional Chinese") {
                    projectName = "方案名稱";
                    title = "印出報告";
                    content = "選擇用來展示配置資訊的標準。";
                    content2 = "請注意，本軟件不能取代技術參考手冊或規格書。用戶必須參考最新文檔以確保正確性。";
                    contentIE8 = "IE8不支援這個功能。倘若您想要使用此功能,請升級至IE9以上。謝謝。";
                    byChipView = "晶片圖示";
                    byPin = "腳位";
                    byModule = "模組";
                    byGPIO = "多工泛用腳位";
                    byRegister = "暫存器";
                    buttonOk = "確定";
                    buttonCancel = "離開";
                }
                else {
                    title = "Print Report";
                    projectName = "Project Name";
                    content = "Select the criteria by which the configured information is being exhibited.";
                    content2 = "Please note that the tool is not a replacement for the technical reference manual or datasheet. The user must refer to the latest documentation for the correctness.";
                    contentIE8 = "IE8 does not support this feature. If you want to use this feature, please upgrade to IE9 or higher one. Thanks.";
                    byChipView = "ChipView";
                    byPin = "Pin";
                    byModule = "Module";
                    byGPIO = "GPIO";
                    byRegister = "Register";
                    buttonOk = "Confirm";
                    buttonCancel = "Leave";
                }
            }

            // close the last dialog
            destroyAllExistentDialogs();

            if (!g_bLessThanOrEqualIE8) {
                printReportDialog = $('<div id="printReportDialog"><label>' + projectName + ': <input type="text" id="inputText_projectName" value=""></label><br /><p>' + content + '</p><label><input type="checkbox" id="checkbox_byChipView" checked=true/>' + byChipView + '</label><br /><input type="checkbox" id="checkbox_byRegister" checked=true/>' + byRegister + '</label><br /><label><input type="checkbox" id="checkbox_byPin" checked=true/>' + byPin + '</label><br /><label><input type="checkbox" id="checkbox_byModule" />' + byModule + '</label><br /><label><input type="checkbox" id="checkbox_byGPIO" />' + byGPIO + '</label><br /><label><p>' + content2 + '</p></label><input type="text" size="1" style="position:relative;top:-5000px;"/></div>');
            }
            else {
                printReportDialog = $('<div id="printReportDialog"><label>' + projectName + ': <input type="text" id="inputText_projectName" value=""></label><br /><p>' + content + '</p><input type="checkbox" id="checkbox_byRegister" checked=true/>' + byRegister + '</label><br /><label><input type="checkbox" id="checkbox_byPin" checked=true/>' + byPin + '</label><br /><label><input type="checkbox" id="checkbox_byModule" />' + byModule + '</label><br /><label><input type="checkbox" id="checkbox_byGPIO" />' + byGPIO + '</label><br /><label><p>' + content2 + '</p></label><input type="text" size="1" style="position:relative;top:-5000px;"/></div>');
            }
            printReportDialog.dialog({
                modal: true,
                draggable: false,
                resizable: false,
                title: title,
                width: 500,
                height: 'auto',
                show: 'fade',
                hide: 'fade',
                close: function () {
                    $("#printReportDialog").dialog("destroy");
                },
                buttons: [
                    {
                        text: buttonOk,
                        click: function () {
                            if ($('#checkbox_byChipView').is(':checked')) {
                                checkResult = 'checkbox_byChipView/';
                            }
                            if ($('#checkbox_byRegister').is(':checked')) {
                                checkResult += 'checkbox_byRegister/';
                            }
                            if ($('#checkbox_byPin').is(':checked')) {
                                checkResult += 'checkbox_byPin/';
                            }
                            if ($('#checkbox_byModule').is(':checked')) {
                                checkResult += 'checkbox_byModule/';
                            }
                            if ($('#checkbox_byGPIO').is(':checked')) {
                                checkResult += 'checkbox_byGPIO/';
                            }

                            printReport_core($('#inputText_projectName').val(), checkResult);

                            if ($("#printReportDialog").dialog("isOpen")) {
                                $("#printReportDialog").dialog("destroy");
                            }
                        }
                    }
                ]
            });

            // de-reference
            printReportDialog = null;
            title = null;
            dialogWidth = null;
            dialogHeight = null;
            content = null;
            content2 = null;
            byPin = null;
            byModule = null;
            byGPIO = null;
            buttonOk = null;
            buttonCancel = null;
            recordedUIlanguage = null;
            checkResult = null;
        }
    }

    function generatePinDescriptions() {
        if (checkPinCorrectness(showPinError)) {
            try {
                get_pin_descriptions();
                var text = `/****************************************************************************\r\n`
                    + ` * @file     ${g_partNumber_package}.csv\r\n`
                    + ` * @version  ${VERSION_CODE}\r\n`
                    + ` * @Date     ${new Date()}\r\n`
                    + ` * @brief    ${g_briefName} pin descriptions file\r\n`
                    + ` *\r\n`
                    + ` * SPDX-License-Identifier: Apache-2.0\r\n`
                    + ` *\r\n`
                    + ` * Copyright (C) 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} All rights reserved.\r\n`
                    + `*****************************************************************************/\r\n`
                    + `MCU:${g_partNumber_package}\r\n`
                    + `${g_pin_descriptions}`
                    + `/*** (C) COPYRIGHT 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} ***/\r\n`
                var blob = new Blob([text], { type: "text/plain;charset=utf-8" });
                saveAs(blob, `${g_partNumber_package}.csv`);
            } catch (err) {
                console.log("saveConfig failed, meg:" + err);
            }
        }
    }

    function runAnotherTool() {
        var title,
            toolName = 'NuCAD',
            content1,
            content2,
            checkboxUserDefinedFunctions,
            stringDialogDIV,
            useNCpin,
            buttonOk,
            buttonCancel,
            recordedUIlanguage;

        // entry
        if (checkPinCorrectness(showPinError) === false) {
            return;
        }

        recordedUIlanguage = localStorage.getItem("UIlanguage");

        if ($('#rootTree_Pin').is(':visible')) {
            if (typeof NUTOOL_PIN.g_anotherNameForNuCAD !== 'undefined' && NUTOOL_PIN.g_anotherNameForNuCAD !== '') {
                toolName = NUTOOL_PIN.g_anotherNameForNuCAD;
            }

            if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                title = "Run " + toolName;
                content1 = "Select a tool to run.";
                content2 = "Please note that the tool is not a replacement for the technical reference manual or datasheet. The user must refer to the latest documentation for the correctness.";
                useNCpin = "Use NC pin to present a unconfigured pin";
                checkboxUserDefinedFunctions = "User Defined Functions";
                buttonOk = "Confirm";
                buttonCancel = "Leave";
            } else {
                if (recordedUIlanguage === "Simplified Chinese") {
                    title = "执行" + toolName;
                    content1 = "选择一个工具来执行。";
                    content2 = "请注意，本软件不能取代技术参考手册或规格书。用户必须参考最新文档以确保正确性。";
                    useNCpin = "使用NC脚位来显示未配置的脚位";
                    checkboxUserDefinedFunctions = "用户定义功能";
                    buttonOk = "确定";
                    buttonCancel = "离开";
                }
                else if (recordedUIlanguage === "Traditional Chinese") {
                    title = "執行" + toolName;
                    content1 = "選擇一個工具來執行。";
                    content2 = "請注意，本軟件不能取代技術參考手冊或規格書。用戶必須參考最新文檔以確保正確性。";
                    useNCpin = "使用NC腳位來顯示未配置的腳位";
                    checkboxUserDefinedFunctions = "用戶定義功能";
                    buttonOk = "確定";
                    buttonCancel = "離開";
                }
                else {
                    title = "Run " + toolName;
                    content1 = "Select a tool to run.";
                    content2 = "Please note that the tool is not a replacement for the technical reference manual or datasheet. The user must refer to the latest documentation for the correctness.";
                    useNCpin = "Use NC pins to present unconfigured pins";
                    checkboxUserDefinedFunctions = "User Defined Functions";
                    buttonOk = "Confirm";
                    buttonCancel = "Leave";
                }
            }

            // close the last dialog
            destroyAllExistentDialogs();
            // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
            stringDialogDIV = '<div id="runAnotherToolDialog"><div id="runAnotherToolDialogMainPart_div"><p>' + content1 + '</p><input type="radio" id="OrCAD" value="OrCAD" name="RunAnotherTool" Checked><label for="OrCAD">OrCAD</label><br /><br /><label><input type="checkbox" id="checkbox_useNCpin"/>' + useNCpin + '</label><p>' + content2 + '</p></div>';
            stringDialogDIV += '<input type="text" size="1" style="position:relative;top:-5000px;"/></div>';
            $(stringDialogDIV).dialog({
                modal: false,
                draggable: true,
                resizable: false,
                title: title,
                width: 500,
                height: 'auto',
                show: 'fade',
                hide: 'fade',
                close: function () {
                    $("#runAnotherToolDialog").dialog("destroy");
                },
                create: function (e, ui) {
                    var pane = $(this).dialog("widget").find(".ui-dialog-buttonpane");
                    if ($('html').hasClass('ie10+')) {
                        $("<div class='generateCodeByModule'><label><input type='checkbox' id='checkbox_ReviewReport'/>" + checkboxUserDefinedFunctions + "</label></div>").prependTo(pane);
                    }
                },
                buttons: [
                    {
                        id: "runAnotherToolDialog_buttonOk",
                        text: buttonOk,
                        click: function () {
                            // iterate radio buttons
                            $("input").each(function () {
                                if (this.name === "RunAnotherTool" && this.checked === true) {
                                    var bUseNCPin = false;
                                    if ($('#checkbox_useNCpin').is(':checked')) {
                                        bUseNCPin = true
                                    }
                                    // Generate .csv
                                    get_pin_descriptions();
                                    var sToolName = "NuCAD";
                                    if (NUTOOL_PIN.g_anotherNameForNuCAD.indexOf('CAD') != -1) {
                                        sToolName = NUTOOL_PIN.g_anotherNameForNuCAD;
                                    }
                                    var textCAD = `/****************************************************************************\r\n`
                                        + ` * @file     ${sToolName}.csv\r\n`
                                        + ` * @version  ${VERSION_CODE}\r\n`
                                        + ` * @Date     ${new Date()}\r\n`
                                        + ` * @brief    ${g_briefName} generated code file\r\n`
                                        + ` *\r\n`
                                        + ` * SPDX-License-Identifier: Apache-2.0\r\n`
                                        + ` *\r\n`
                                        + ` * Copyright (C) 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} All rights reserved.\r\n`
                                        + `*****************************************************************************/\r\n`
                                        + `MCU:${g_partNumber_package}\r\n`
                                        + `${g_pin_descriptions}`
                                        + (bUseNCPin ? `UseNCPin\r\n` : ``)
                                        + `/*** (C) COPYRIGHT 2013-${(new Date()).getFullYear()}${g_copyrightCompanyName} ***/\r\n`;
                                    var blobdts = new Blob([textCAD], { type: "text/plain;charset=utf-8" });
                                    saveAs(blobdts, `${sToolName}.csv`);
                                    // Execute "NuCAD_OrCAD.exe" from Main
                                    window.electronAPI.send('runNuCAD');
                                }
                            });

                            // close the last dialog
                            if ($("#runAnotherToolDialog").dialog("isOpen")) {
                                $("#runAnotherToolDialog").dialog("destroy");
                            }
                        }
                    }
                ]
            });
            // handle events
            $("#checkbox_ReviewReport").change(function () {
                if ($('#checkbox_ReviewReport').is(':checked')) {
                    generateCode('userDefined_runAnotherTool');
                }
            });
        }
    }

    function connectToTarget_core() {
        if (!g_bConnectToTarget) {
            g_websocket = new WebSocket('ws://127.0.0.1:5555',
                'openocd-nuvoton-protocol');
            g_websocket.onopen = function () {
                g_bConnectToTarget = true;
                if (g_websocket.readyState) {
                    g_websocket.send('q');
                }
                else {
                    showAlertDialog("连线尚未稳定，请稍后再试。",
                        "連線尚未穩定，請稍後再試。",
                        "The connection is not stable. Please try it later.");
                }
            };
            g_websocket.onerror = function () {
                if (g_bConnectToTarget === false) {
                    showAlertDialog("请检查NuEclipse是否进入了调试模式。如果没有，PinConfig将无法连接到目标芯片。",
                        "請檢查NuEclipse是否進入了調試模式。如果沒有，PinConfig將無法連接到目標晶片。",
                        "Please check that NuEclipse has entered the debug mode. If not, PinConfig will not be able to connect to a target chip.");
                }
                else {
                    showAlertDialog("NuEclipse退出了调试模式。",
                        "NuEclipse退出了調試模式。",
                        "NuEclipse leaved the debug mode.");
                }

                g_bConnectToTarget = false;
                g_websocket = null;
            };
            g_websocket.onmessage = function (message) {
                if (message.data.indexOf('q') === 0) {
                    synchronizeWithTargetPartNumber(message.data);
                    g_websocket.send(getReadTargetMFPRegCommand());
                }
                else if (message.data.indexOf('m') === 0) {
                    synchronizeWithTargetMFPReg(message.data);
                }
                else { // step, continue or halt
                    // do nothing
                }

            };
        }
        else {
            if (g_websocket.readyState) {
                g_websocket.send('q');
            }
            else {
                showAlertDialog("连线尚未稳定，请稍后再试。",
                    "連線尚未穩定，請稍後再試。",
                    "The connection is not stable. Please try it later.");
            }
        }
    }

    function connectToTarget() {
        var title,
            dialogWidth,
            dialogHeight,
            content,
            stringDialogDIV,
            buttonOk,
            buttonCancel,

            recordedUIlanguage = localStorage.getItem("UIlanguage");
        if (!g_bLessThanOrEqualIE8 && !$('html').hasClass('ie9')) {
            // IE10 or higher
            if (!g_bConnectToTarget) {
                if ($('#rootTree_Pin').is(':visible')) {
                    if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                        title = "Connect to Target Chip";
                        content = "When connecting to a target chip, what you have configured is going to be gone. To continue, click the Confirm button.";
                        buttonOk = "Confirm";
                        buttonCancel = "Leave";
                    } else {
                        if (recordedUIlanguage === "Simplified Chinese") {
                            title = "连线到目标芯片";
                            content = "当连接到目标芯片时，您配置的内容将会消失。 若要继续，请点击确定按钮。";
                            buttonOk = "确定";
                            buttonCancel = "离开";
                        }
                        else if (recordedUIlanguage === "Traditional Chinese") {
                            title = "連線到目標晶片";
                            content = "當連接到目標晶片時，您配置的內容將會消失。 若要繼續，請點擊確定按鈕。";
                            buttonOk = "確定";
                            buttonCancel = "離開";
                        }
                        else {
                            title = "Connect to Target Chip";
                            content = "When connecting to a target chip, what you have configured is going to be gone. To continue, click the Confirm button.";
                            buttonOk = "Confirm";
                            buttonCancel = "Leave";
                        }
                    }

                    // close the last dialog
                    destroyAllExistentDialogs();
                    // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
                    stringDialogDIV = '<div id="connectToTargetDialog"><p>' + content + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>';
                    $(stringDialogDIV).dialog({
                        modal: false,
                        draggable: false,
                        resizable: false,
                        title: title,
                        width: 500,
                        height: 'auto',
                        show: 'fade',
                        hide: 'fade',
                        close: function () {
                            $("#connectToTargetDialog").dialog("destroy");
                        },
                        buttons: [
                            {
                                text: buttonOk,
                                click: function () {
                                    connectToTarget_core();

                                    // close the last dialog
                                    if ($("#connectToTargetDialog").dialog("isOpen")) {
                                        $("#connectToTargetDialog").dialog("destroy");
                                    }
                                }
                            }
                        ]
                    });

                    // de-reference
                    title = null;
                    dialogWidth = null;
                    dialogHeight = null;
                    content = null;
                    stringDialogDIV = null;
                    buttonOk = null;
                    buttonCancel = null;
                    recordedUIlanguage = null;
                }
            }
            else {
                connectToTarget_core();
            }
        }
        else {
            // IE9 or lower
            if ($('#rootTree_Pin').is(':visible')) {
                if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                    title = "Connect to Target Chip";
                    content = "To use this feature, please upgrade the IE version to 10 or higher.";
                    buttonOk = "Confirm";
                } else {
                    if (recordedUIlanguage === "Simplified Chinese") {
                        title = "连线到目标芯片";
                        content = "要使用此功能，请将IE版本升级到10或更高版本。";
                        buttonOk = "确定";
                    }
                    else if (recordedUIlanguage === "Traditional Chinese") {
                        title = "連線到目標晶片";
                        content = "要使用此功能，請將IE版本升級到10或更高版本。";
                        buttonOk = "確定";
                    }
                    else {
                        title = "Connect to Target Chip";
                        content = "To use this feature, please upgrade the IE version to 10 or higher.";
                        buttonOk = "Confirm";
                    }
                }

                // close the last dialog
                destroyAllExistentDialogs();
                // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
                stringDialogDIV = '<div id="connectToTargetDialog"><p>' + content + '</p><input type="text" size="1" style="position:relative;top:-5000px;"/></div>';
                $(stringDialogDIV).dialog({
                    modal: false,
                    draggable: false,
                    resizable: false,
                    title: title,
                    width: 500,
                    height: 'auto',
                    show: 'fade',
                    hide: 'fade',
                    close: function () {
                        $("#connectToTargetDialog").dialog("destroy");
                    },
                    buttons: [
                        {
                            text: buttonOk,
                            click: function () {
                                // close the last dialog
                                if ($("#connectToTargetDialog").dialog("isOpen")) {
                                    $("#connectToTargetDialog").dialog("destroy");
                                }
                            }
                        }
                    ]
                });

                // de-reference
                title = null;
                dialogWidth = null;
                dialogHeight = null;
                content = null;
                stringDialogDIV = null;
                buttonOk = null;
                buttonCancel = null;
                recordedUIlanguage = null;
            }
        }
    }

    function zoomIn() {
        if ($('#rootTree_Pin').is(':visible')) {
            g_currIEZoom = Math.ceil(g_currIEZoom / 10) * 10 + 5; // zoom factor should not be fitted into a multiply of 10.
            zoomFunction();
        }
    }

    function bestFit() {
        if ($('#rootTree_Pin').is(':visible')) {
            g_currIEZoom = g_bestFitIEZoom;
            zoomFunction();
        }
    }

    function zoomOut() {
        if ($('#rootTree_Pin').is(':visible') && g_currIEZoom >= g_minCurrIEZoom + 5) {
            g_currIEZoom = Math.floor(g_currIEZoom / 10) * 10 - 5; // zoom factor should not be fitted into a multiply of 10.
            zoomFunction();
        }
    }

    function uncheckAllNodes() {
        showWarningForSaving(function () { uncheckAllNodes_core(); });
        // record the latest g_gpio_MFPs
        recordConfig();
    }

    function lockAllPin() {
        var usedPinNumbers = [];
        for (i = 0, max = g_usedPins.length; i < max; i += 1) {
            usedPinNumbers[i] = g_usedPins[i].slicePriorToX(':');
        }
        g_bLockPin = !g_bLockPin;
        if (g_bLockPin) {
            $('#ID_IMAGE_LOCK_PIN').attr("src", "./src/res/lock.png");
            // g_usedPins只有放root name
            g_usedPins.forEach((usedPin) => {
                var pin = usedPin.slicePriorToX(':');
                var mfp = usedPin.sliceAfterX(':');
                var rootNodeName = mfp + '_Root';
                // 把root node打開
                $("#moduleTree").jstree("open_node", $('#' + rootNodeName));
                // 檢查各個子node是否在g_bLockPin中
                $("#" + rootNodeName).find("li").each(function (index1, listItem1) {
                    var childOfChildNode = $(listItem1).attr("id");
                    // 如果pin和mfp name都對得起來，且lockedPin中沒有這個IP，就存入g_lockedPin
                    if (childOfChildNode.indexOf(pin) != -1 && childOfChildNode.indexOf(mfp) != -1
                        && g_lockedPin.indexOf(childOfChildNode) == -1) {
                        g_lockedPin.push(childOfChildNode);
                        document.querySelector(`#${childOfChildNode}`).style.background = 'orange';
                    }
                });
            });
        } else {
            $('#ID_IMAGE_LOCK_PIN').attr("src", "./src/res/unlock.png");
            // 解鎖各個lockedPin
            g_lockedPin.forEach((lockedPin) => {
                var rootNodeName = lockedPin.sliceAfterX(':') + '_Root';
                // 把root node打開
                $("#moduleTree").jstree("open_node", $('#' + rootNodeName));
                document.querySelector(`#${lockedPin}`).style.background = 'transparent';
            });
            g_lockedPin = [];
        }
    }

    function settings() {
        var title,
            content1,
            content2,
            content3,
            engiish,
            simplifiedChinese,
            traditionalChinese,
            stringYes,
            stringNo,
            stringDialogDIV,
            engiishChecked = "",
            simplifiedChineseChecked = "",
            traditionalChineseChecked = "",
            tooltipYesChecked = "",
            tooltipNoChecked = "",
            checkbox_byPinChecked = "checked=true",
            checkbox_byModuleChecked = "checked=true",
            checkbox_byGPIOChecked = "checked=true",
            byPin,
            byModule,
            byGPIO,
            buttonOk,
            buttonCancel,
            recordedUIlanguage,
            recordedDispalyToolTip,
            supportedModules_inner,
            chipType_inner,
            mcu_inner,
            mfp_tree_inner,
            searchInput_inner,
            recordedCheckCriteriaPin = "",
            recordedCheckCriteriaModule = "",
            recordedCheckCriteriaGPIO = "";

        recordedDispalyToolTip = localStorage.getItem("DisplayTooltip");
        recordedUIlanguage = localStorage.getItem("UIlanguage");

        if ($('#rootTree_Pin').is(':visible')) {
            if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
                title = "Settings";
                content1 = "1. Select one of the following languages displayed in UI.";
                content2 = "2. Display a tooltip.";
                content3 = "3. Select the criteria by which the configured information is being cataloged.";
                engiish = "English";
                simplifiedChinese = "Simplified Chinese";
                traditionalChinese = "Traditional Chinese";
                stringYes = "Yes";
                stringNo = "No";
                engiishChecked = "checked";
                byPin = "Pin";
                byModule = "Module";
                byGPIO = "GPIO";
                buttonOk = "Confirm";
                buttonCancel = "Leave";
            } else {
                recordedCheckCriteriaPin = localStorage.getItem("CheckCriteriaPin");
                if (recordedCheckCriteriaPin == null || recordedCheckCriteriaPin == "No") {
                    checkbox_byPinChecked = "";
                }

                recordedCheckCriteriaModule = localStorage.getItem("CheckCriteriaModule");
                if (recordedCheckCriteriaModule == null || recordedCheckCriteriaModule == "No") {
                    checkbox_byModuleChecked = "";
                }

                recordedCheckCriteriaGPIO = localStorage.getItem("CheckCriteriaGPIO");
                if (recordedCheckCriteriaGPIO == null || recordedCheckCriteriaGPIO == "No") {
                    checkbox_byGPIOChecked = "";
                }

                if (recordedUIlanguage === "Simplified Chinese") {
                    title = "设定";
                    content1 = "1. 从下面选取一个语言显示在操作介面上。";
                    content2 = "2. 显示提示框。";
                    content3 = "3. 选择用来分类配置资讯的标准。";
                    engiish = "英文";
                    simplifiedChinese = "简体中文";
                    traditionalChinese = "繁体中文";
                    stringYes = "要";
                    stringNo = "不要";
                    simplifiedChineseChecked = "checked";
                    byPin = "脚位";
                    byModule = "模組";
                    byGPIO = "多工泛用脚位";
                    buttonOk = "确定";
                    buttonCancel = "离开";
                }
                else if (recordedUIlanguage === "Traditional Chinese") {
                    title = "設定";
                    content1 = "1. 從下面選取一個語言顯示在操作介面上。";
                    content2 = "2. 顯示提示框。";
                    content3 = "3. 選擇用來分類配置資訊的標準。";
                    engiish = "英文";
                    simplifiedChinese = "简體中文";
                    traditionalChinese = "繁體中文";
                    stringYes = "要";
                    stringNo = "不要";
                    traditionalChineseChecked = "checked";
                    byPin = "腳位";
                    byModule = "模組";
                    byGPIO = "多工泛用腳位";
                    buttonOk = "確定";
                    buttonCancel = "離開";
                }
                else {
                    title = "Settings";
                    content1 = "1. Select one of the following languages displayed in UI.";
                    content2 = "2. Display a tooltip.";
                    content3 = "3. Select the criteria by which the configured information is being cataloged.";
                    engiish = "English";
                    simplifiedChinese = "Simplified Chinese";
                    traditionalChinese = "Traditional Chinese";
                    stringYes = "Yes";
                    stringNo = "No";
                    engiishChecked = "checked";
                    byPin = "Pin";
                    byModule = "Module";
                    byGPIO = "GPIO";
                    buttonOk = "Confirm";
                    buttonCancel = "Leave";
                }
            }

            if (recordedDispalyToolTip == null || recordedDispalyToolTip == "No") {
                tooltipNoChecked = "checked";
            } else {
                tooltipYesChecked = "checked";
            }
            // close the last dialog
            destroyAllExistentDialogs();
            // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
            stringDialogDIV = '<div id="languageDialog"><p>' + content1 + '</p><input type="radio" id="engiish" value="English" name="UIlanguage" ' + engiishChecked + '><label for="engiish">' + engiish + '</label><br /><input type="radio" id="simplifiedChinese" value="Simplified Chinese" name="UIlanguage" ' + simplifiedChineseChecked + '><label for="simplifiedChinese">' + simplifiedChinese + '</label><br /><input type="radio" id="traditionalChinese" value="Traditional Chinese" name="UIlanguage" ' + traditionalChineseChecked + '><label for="traditionalChinese">' + traditionalChinese + '</label><br /><p>' + content2 + '</p><input type="radio" id="stringYes" value="Yes" name="DisplayTooltip" ' + tooltipYesChecked + '><label for="stringYes">' + stringYes + '</label><br /><input type="radio" id="stringNo" value="No" name="DisplayTooltip" ' + tooltipNoChecked + '><label for="stringNo">' + stringNo + '</label><br /><p>' + content3 + '</p><label><input type="checkbox" id="checkbox_byPin" ' + checkbox_byPinChecked + '/>' + byPin + '</label><br /><label><input type="checkbox" id="checkbox_byModule" ' + checkbox_byModuleChecked + '/>' + byModule + '</label><br /><label><input type="checkbox" id="checkbox_byGPIO" ' + checkbox_byGPIOChecked + '/>' + byGPIO + '</label><input type="text" size="1" style="position:relative;top:-5000px;"/></div>';

            $(stringDialogDIV).dialog({
                modal: false,
                draggable: false,
                resizable: false,
                title: title,
                width: 500,
                height: 'auto',
                show: 'fade',
                hide: 'fade',
                close: function () {
                    $("#languageDialog").dialog("destroy");
                },
                buttons: [
                    {
                        text: buttonOk,
                        click: function () {
                            // iterate radio buttons
                            $("input").each(function () {
                                if (this.name === "UIlanguage" && this.checked === true) {
                                    localStorage.setItem("UIlanguage", $(this).val());
                                    changeUIlanguage();
                                }
                                else if (this.name === "DisplayTooltip" && this.checked === true) {
                                    localStorage.setItem("DisplayTooltip", $(this).val());
                                    if ($(this).val() === "No") {
                                        g_bUserDisplayTooltip = false;
                                    }
                                    else {
                                        g_bUserDisplayTooltip = true;
                                    }
                                }
                            });

                            if ($('#checkbox_byPin').is(':checked')) {
                                localStorage.setItem("CheckCriteriaPin", "Yes");
                            }
                            else {
                                localStorage.setItem("CheckCriteriaPin", "No");
                            }
                            if ($('#checkbox_byModule').is(':checked')) {
                                localStorage.setItem("CheckCriteriaModule", "Yes");
                            }
                            else {
                                localStorage.setItem("CheckCriteriaModule", "No");
                            }
                            if ($('#checkbox_byGPIO').is(':checked')) {
                                localStorage.setItem("CheckCriteriaGPIO", "Yes");
                            }
                            else {
                                localStorage.setItem("CheckCriteriaGPIO", "No");
                            }

                            // close the last dialog
                            if ($("#languageDialog").dialog("isOpen")) {
                                $("#languageDialog").dialog("destroy");
                            }
                        }
                    }
                ]
            });
        }
    }

    function changeUIlanguage() {
        var chipType_inner,
            mcu_inner,
            mfp_tree_inner,
            supportedModules_inner,
            searchInput_inner;

        decideUIlanguage();
        if (g_userSelectUIlanguage === "Simplified Chinese") {
            chipType_inner = '芯片系列:';
            mcu_inner = '型号:';
            mfp_tree_inner = 'MFP寄存器';
            supportedModules_inner = '支援模组';
            searchInput_inner = '搜寻..';
            setTippy('ID_BUTTON_SHOW_REGISTERS', '开关选择区域和MFP寄存器树状图');
            setTippy('ID_BUTTON_LOAD', '读取配置档');
            setTippy('ID_BUTTON_SAVE', '存放配置档');
            setTippy('ID_BUTTON_GENERATE_CODE', '产生程式码');
            setTippy('ID_BUTTON_CONNECT_TO_TARGET', '连线到目标芯片');
            setTippy('ID_BUTTON_PRINT_REPORT', '印出报告');
            setTippy('ID_BUTTON_GENERATE_PIN_DESCRIPTIONS', '产生脚位描述报告');
            setTippy('ID_BUTTON_RUN_NUCAD', '执行NuCAD');
            setTippy('ID_BUTTON_SHOW_PIN_DESCRIPTIONS', '开关管脚描述');
            setTippy('ID_BUTTON_ZOOM_IN', '放大');
            setTippy('ID_BUTTON_BEST_FIT', '最适大小');
            setTippy('ID_BUTTON_ZOOM_OUT', '缩小');
            setTippy('ID_BUTTON_LOCK_PIN', '锁定/解锁所有脚位');
            setTippy('ID_BUTTON_SHOW_LOCKED_PINS', '锁定脚位列表');
            setTippy('ID_BUTTON_DISABLE', '取消所有已选模组');
            setTippy('ID_BUTTON_LANGUAGE', '设定');
            setTippy('ID_BUTTON_INSTRUCTION', '阅读用户手册');
        }
        else if (g_userSelectUIlanguage === "Traditional Chinese") {
            chipType_inner = '晶片系列:';
            mcu_inner = '型號:';
            mfp_tree_inner = 'MFP暫存器';
            supportedModules_inner = '支援模組';
            searchInput_inner = '搜尋..';
            setTippy('ID_BUTTON_SHOW_REGISTERS', '開關選擇區域和MFP暫存器樹狀圖');
            setTippy('ID_BUTTON_LOAD', '讀取配置檔');
            setTippy('ID_BUTTON_SAVE', '存放配置檔');
            setTippy('ID_BUTTON_GENERATE_CODE', '產生程式碼');
            setTippy('ID_BUTTON_CONNECT_TO_TARGET', '連線到目標晶片');
            setTippy('ID_BUTTON_PRINT_REPORT', '印出報告');
            setTippy('ID_BUTTON_GENERATE_PIN_DESCRIPTIONS', '產生腳位描述報告');
            setTippy('ID_BUTTON_RUN_NUCAD', '執行NuCAD');
            setTippy('ID_BUTTON_SHOW_PIN_DESCRIPTIONS', '開關腳位描述');
            setTippy('ID_BUTTON_ZOOM_IN', '放大');
            setTippy('ID_BUTTON_BEST_FIT', '最適大小');
            setTippy('ID_BUTTON_ZOOM_OUT', '縮小');
            setTippy('ID_BUTTON_LOCK_PIN', '鎖定/解鎖所有腳位');
            setTippy('ID_BUTTON_SHOW_LOCKED_PINS', '鎖定腳位列表');
            setTippy('ID_BUTTON_DISABLE', '取消所有已選模組');
            setTippy('ID_BUTTON_LANGUAGE', '設定');
            setTippy('ID_BUTTON_INSTRUCTION', '閱讀用戶手冊');
        }
        else {
            chipType_inner = 'Chip Series:';
            mcu_inner = 'Part No.:';
            supportedModules_inner = 'Supported Modules';
            searchInput_inner = 'Search..';
            mfp_tree_inner = 'MFP Registers';
            setTippy('ID_BUTTON_SHOW_REGISTERS', 'Switch Select Field and MFP-Registers TreeView');
            setTippy('ID_BUTTON_LOAD', 'Load Configuration');
            setTippy('ID_BUTTON_SAVE', 'Save Configuration');
            setTippy('ID_BUTTON_GENERATE_CODE', 'Generate Code');
            setTippy('ID_BUTTON_CONNECT_TO_TARGET', 'Connect to Target Chip');
            setTippy('ID_BUTTON_PRINT_REPORT', 'Print Report');
            setTippy('ID_BUTTON_GENERATE_PIN_DESCRIPTIONS', 'Generate Report of Pin Description');
            setTippy('ID_BUTTON_RUN_NUCAD', 'Run NuCAD');
            setTippy('ID_BUTTON_SHOW_PIN_DESCRIPTIONS', 'Switch Pin Description');
            setTippy('ID_BUTTON_ZOOM_IN', 'Zoom In');
            setTippy('ID_BUTTON_BEST_FIT', 'Best Fit');
            setTippy('ID_BUTTON_ZOOM_OUT', 'Zoom Out');
            setTippy('ID_BUTTON_LOCK_PIN', 'Lock/Unlock All the Pins');
            setTippy('ID_BUTTON_SHOW_LOCKED_PINS', 'Show Locked Pins List');
            setTippy('ID_BUTTON_DISABLE', 'Disable All Checked Modules');
            setTippy('ID_BUTTON_LANGUAGE', 'Settings');
            setTippy('ID_BUTTON_INSTRUCTION', 'Read User Manual');
        }
        $("#ChipType_span").text(chipType_inner);
        $("#MCU_span").text(mcu_inner);
        $("#mfpTree").jstree('rename_node', $("#mfp_tree"), mfp_tree_inner);
        $("#supportedModules_span").text(supportedModules_inner);
        $('#searchInput_Pin')[0].setAttribute('style', 'font-family:Times Arial; position:absolute; left:' + ($('#supportedModules_span').width() + 10) + 'px; width:' + (g_NUC_TreeView_Width - 16 - $('#supportedModules_span').width() - 10) + 'px; height: 16px;');
        $('#searchInput_Pin').val(searchInput_inner);
        $("#searchInput_Pin").change(function () {
            searchNodesInModulesTree(this.value);
        });

        clearColorNotations();
        drawColorNotations();

        // de-reference
        chipType_inner = null;
        mcu_inner = null;
        mfp_tree_inner = null;
        supportedModules_inner = null;
        searchInput_inner = null;
    }

    function setTippy(id, content, placement) {
        if (placement == null || placement == undefined) {
            placement = 'top';
        }
        // 如果已經有tippy instance就destroy掉
        if (document.querySelector(`#${id}`) != null && document.querySelector(`#${id}`) != undefined && document.querySelector(`#${id}`)._tippy) {
            document.querySelector(`#${id}`)._tippy.destroy();
        }
        // 重新建立一個instance避免越疊越多
        tippy(`#${id}`, {
            content: `${content}`,
            placement: `${placement}`,
        });
    }

    function closeAPP() {
        if (g_websocket !== null) {
            g_websocket.close();
        }
        if (checkPinCorrectness(showPinErrorForCloseApp)) {
            showWarningForSaving(function () { window.external.closeFromJS(); });
        }
    }

    function triggerSearch() {
        searchNodesInModulesTree($("#searchInput_Pin").val());
    }

    function executePDFfail() {
        showAlertDialog("您的电脑不能执行PDF档。请安装必要的软件来支援它。",
            "您的電腦不能執行PDF檔。請安裝必要的軟件來支援它。",
            "Your PC is incapable of executing the PDF files. Please install a necessary software to support it");
    }

    function executeNuCADfail() {
        var toolName = 'NuCAD';

        if (typeof NUTOOL_PIN.g_anotherNameForNuCAD !== 'undefined' && NUTOOL_PIN.g_anotherNameForNuCAD !== '') {
            toolName = NUTOOL_PIN.g_anotherNameForNuCAD;
        }
        showAlertDialog("您的电脑不能执行" + toolName + "因为它不在Content资料夹里面。",
            "您的電腦不能執行" + toolName + "因為它不在Content資料夾裡面。",
            "Your PC is incapable of executing " + toolName + " because it does not exist in the Content folder.");
    }

    //////////////////////////////////////////////////////self-testing ////////////////////////////////////////////////////////////
    function testPinFeature() {
        var i,
            max,
            pinCurrentDescription,
            results = [],
            sortedArray = g_pinCurrentDescription.slice().sort(),
            gpio_MFPsNames = [],
            targetMFPValueArray = [],
            targetUndoMFPValueArray = [],
            tempString,
            localConflictReport = "",
            bResult;

        // testing whether the duplicate function name occurs.
        for (i = 0, max = sortedArray.length; i < max; i++) {
            if (sortedArray[i] !== "" &&
                sortedArray[i] === sortedArray[i + 1]) {
                results.push('Pin' + i + ':' + sortedArray[i]);
            }
        }

        if (results.length > 0) {
            //if (!g_bReadyForRelease && window.alert) { window.alert(results); }
            g_conflictReport += "Failed: duplicate name occurs. " + results;
            if (!g_bReadyForRelease && window.console) { window.console.log("Failed: duplicate name occurs. " + results); }
        }
        else {
            if (!g_bReadyForRelease && window.console) { window.console.log("Duplicate function test passed."); }

            // testing the values of MFP registers.
            gpio_MFPsNames = getPropertyNames(g_gpio_MFPs).sort();
            for (i = 0, max = gpio_MFPsNames.length; i < max; i++) {
                targetMFPValueArray.push((gpio_MFPsNames[i] + ':0x' + decimalToHex(g_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase()).trim());
                targetUndoMFPValueArray.push((gpio_MFPsNames[i] + ':0x' + decimalToHex(g_undo_gpio_MFPs[gpio_MFPsNames[i]]).toUpperCase()).trim());
            }

            bResult = true;
            for (i = 0, max = g_pinCurrentDescription.length - 1; i < max; i++) {
                pinCurrentDescription = g_pinCurrentDescription[i];
                if (pinCurrentDescription !== "") {
                    if (!verifyMFPValueOnlyByFunctionName(NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i], pinCurrentDescription, targetMFPValueArray)) {
                        bResult = false;
                        tempString = "Failed: Pin" + (i + 1) + " / " + NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i] + " / " + pinCurrentDescription + " / " + targetMFPValueArray + " / Undo: " + targetUndoMFPValueArray;
                        g_conflictReport += tempString;
                        localConflictReport += tempString;
                    }
                }
            }

            if (bResult) {
                if (!g_bReadyForRelease && window.console) { window.console.log("MFP register-function verification test passed."); }
            }
            else {
                if (!g_bReadyForRelease && window.console) { window.console.log(localConflictReport); }
            }
        }

        $("#NUC_PinConfiguration_Canvas")[0].setAttribute('innerText', g_conflictReport); // for functional test
    }

    function verifyMFPValueOnlyByFunctionName(currentPinName, targetMultiFunctionName, targetMFPValueArray) {
        var i,
            j,
            max,
            maxJ,
            multiFunctionName,
            //currentPinName,
            pinName,
            matchedMFPvalue = -1,
            powerNumber,
            tempString1,
            tempString2,
            shiftBitNumber,
            shiftBitUnit,
            mask,
            maskUnit,
            targetMFPValue,
            registerValue,
            bReturnResult = false;

        // get the current pin name
        //NUTOOL_PIN.decidepackageNumber(mcu);
        //currentPinName = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][currentPin - 1];

        //targetMultiFunctionName = targetMultiFunctionName.restoreDotAndPlusBrackets();
        // find the matched pin and MFP value
        for (i = 0, max = NUTOOL_PIN.g_cfg_gpios.length; i < max; i += 1) {
            for (j = 0, maxJ = NUTOOL_PIN.g_cfg_gpios[i].f.length; j < maxJ; j += 1) {
                multiFunctionName = NUTOOL_PIN.g_cfg_gpios[i].f[j];
                multiFunctionName = multiFunctionName.slice(0, multiFunctionName.indexOf(":"));
                if (multiFunctionName === targetMultiFunctionName) {
                    pinName = NUTOOL_PIN.g_cfg_gpios[i].f[0];
                    pinName = pinName.slice(0, pinName.indexOf(":"));

                    if (pinName === currentPinName) {
                        matchedMFPvalue = NUTOOL_PIN.g_cfg_gpios[i].f[j];
                        matchedMFPvalue = parseInt(matchedMFPvalue.slice(matchedMFPvalue.indexOf(":") + 1), 10);

                        break;
                    }

                }
            }

            if (matchedMFPvalue !== -1) {
                break;
            }
        }

        // verify matchedMFPvalue
        if (matchedMFPvalue > 0 && (typeof (NUTOOL_PIN.g_cfg_gpioMatrix) === 'undefined' || NUTOOL_PIN.g_cfg_gpioMatrix.length === 0)) {
            bReturnResult = false;
            shiftBitUnit = 4;
            maskUnit = 0xF;

            if (currentPinName.indexOf('.') !== -1) {
                tempString1 = currentPinName.slice(0, currentPinName.indexOf('.'));
                tempString2 = currentPinName.slice(currentPinName.indexOf('.') + 1);
            }

            if (g_chipType === "M451HD" || g_chipType === "M451LD" || g_chipType === "M4521" || g_chipType === "NUC121AE" ||
                g_chipType === "M0564" || g_chipType === "M05641" ||
                g_chipType.indexOf('NUC126') === 0 || g_chipType === "M071QV" || g_chipType === "NUC029xGE" || g_chipType === "NUC029KGE" ||
                g_chipType === "NUC400" || g_chipType.indexOf('M46') === 0 || g_chipType.indexOf('M47') === 0 ||
                g_chipType === "M433" || g_chipType === "M480MD" || g_chipType === "M480LD" || g_chipType === "AX58200" ||
                g_chipType.indexOf('M25') === 0 || g_chipType === "NDA102" ||
                g_chipType === "M261" || g_chipType.indexOf('M235') === 0 ||
                g_chipType.indexOf("M029") === 0 || g_chipType.indexOf("M030") === 0 || g_chipType.indexOf("M031") === 0 || g_chipType.indexOf("M091") === 0 ||
                g_chipType === "NANO103" || g_chipType === "NUC505" || g_chipType === "NUC123AE" ||
                g_chipType === "MA35D0" || g_chipType === "MA35D1" || g_chipType === "MA35H0" || g_chipType.indexOf('M2003') === 0 || g_chipType.indexOf('N9H30') === 0 || g_chipType.indexOf('NUC97') === 0 || g_chipType.indexOf('NUC98') === 0 || g_chipType.indexOf('M2A23') === 0) {
                if (parseInt(tempString2) < 8) {
                    tempString1 = 'G' + tempString1 + '_MFPL';
                }
                else {
                    tempString1 = 'G' + tempString1 + '_MFPH';
                }
            }
            else if (g_chipType === "NANO100AN" || g_chipType === "NANO100BN" || g_chipType === "NANO112") {
                if (parseInt(tempString2) < 8) {
                    tempString1 = tempString1 + '_L_MFP';
                }
                else {
                    tempString1 = tempString1 + '_H_MFP';
                }
            }
            else if (g_chipType === "NM1500" || g_chipType === "M0519" ||
                g_chipType === "M051DN_DE" || g_chipType === "M051BN" || g_chipType === "M051AN" ||
                g_chipType === "M058S" ||
                g_chipType === "MINI51AN" || g_chipType === "MINI51DE" || g_chipType === "MINI55" || g_chipType === "MINI58" ||
                g_chipType === "NUC029AE" || g_chipType === "NUC029TAE" || g_chipType === "NUC029AN" ||
                g_chipType === "NM1200") {
                tempString1 = tempString1 + '_MFP';
            }
            else if (g_chipType.indexOf("ML5") === 0 || g_chipType.indexOf("MS51") === 0 || g_chipType.indexOf("MG51") === 0
                || g_chipType.indexOf("MUG51") === 0 || g_chipType.indexOf("N76S003") === 0 || g_chipType.indexOf("N76E003") === 0) {
                tempString1 = tempString1 + 'MF76543210';
            }
            else if (g_chipType.indexOf("KM1M7") === 0 || g_chipType.indexOf("KM1M4") === 0) {
                tempString1 = 'IO' + tempString1 + 'MD';
            }
            else {
                tempString1 = 'G' + tempString1 + '_MFP';
            }

            for (j = 0, maxJ = targetMFPValueArray.length; j < maxJ; j += 1) {
                targetMFPValue = targetMFPValueArray[j];
                if (targetMFPValue.indexOf(tempString1) !== -1) {
                    registerValue = parseInt(targetMFPValue.slice(targetMFPValue.indexOf('0x') + 2), 16);

                    shiftBitNumber = parseInt(tempString2, 10) * shiftBitUnit;
                    //mask = (0xF << tempString2 * shiftBitUnit) >>> 0;
                    mask = (maskUnit << shiftBitNumber) >>> 0;
                    registerValue = (registerValue & mask) >>> 0;
                    registerValue = (registerValue >>> shiftBitNumber) >>> 0;

                    if (registerValue === matchedMFPvalue) {
                        bReturnResult = true;
                        break;
                    }
                }
            }
        }
        else if (matchedMFPvalue > 0 && NUTOOL_PIN.g_cfg_gpioMatrix.length > 0) {
            for (i = 0, max = NUTOOL_PIN.g_cfg_gpioMatrix.length; i < max; i += 1) {
                if (pinName === NUTOOL_PIN.g_cfg_gpioMatrix[i].f[0]) {
                    powerNumber = Math.floor(Math.log(matchedMFPvalue) / Math.log(2));

                    while (powerNumber >= 0) {
                        tempString1 = NUTOOL_PIN.g_cfg_gpioMatrix[i].f[powerNumber + 1];
                        shiftBitNumber = parseInt(tempString1.slice(tempString1.indexOf('[') + 1, tempString1.indexOf(']')), 10);
                        mask = (0x1 << shiftBitNumber) >>> 0;
                        tempString2 = tempString1.slice(0, tempString1.indexOf('['));

                        bReturnResult = false;
                        for (j = 0, maxJ = targetMFPValueArray.length; j < maxJ; j += 1) {
                            targetMFPValue = targetMFPValueArray[j];
                            if (targetMFPValue.indexOf(tempString2) !== -1) {
                                registerValue = parseInt(targetMFPValue.slice(targetMFPValue.indexOf('0x') + 2), 16);
                                if (registerValue & mask) {
                                    bReturnResult = true;
                                    break;
                                }
                            }
                        }
                        // fail to match. the result of verifying is unsuccessful.
                        if (!bReturnResult) {
                            return bReturnResult;
                        }

                        // prepare to the next one
                        if (matchedMFPvalue > 2) {
                            matchedMFPvalue = matchedMFPvalue - Math.pow(2, powerNumber);
                            if (matchedMFPvalue > 0) {
                                powerNumber = Math.floor(Math.log(matchedMFPvalue) / Math.log(2));
                            }
                            else {
                                break;
                            }
                        }
                        else {
                            break;
                        }

                    }
                    break;
                }
            }
        }
        else if (matchedMFPvalue === 0) {
            bReturnResult = true;
        }

        return bReturnResult;
    }

    function convertToSpeech8BitCPU() {
        var code;
        for (i = 0, max = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex].length; i < max; i += 1) {
            code = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i].charCodeAt(1) - 65;
            NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i]
                = NUTOOL_PIN.g_cfg_pkgs[NUTOOL_PIN.g_packageNumberIndex][i].replace(/P[A-Z]\./, 'BP' + code + '.');
        }
        for (i = 0, max = NUTOOL_PIN.g_cfg_gpios.length; i < max; i += 1) {
            code = NUTOOL_PIN.g_cfg_gpios[i].f[0].charCodeAt(1) - 65;
            NUTOOL_PIN.g_cfg_gpios[i].f[0] = NUTOOL_PIN.g_cfg_gpios[i].f[0].replace(/P[A-Z]\./, 'BP' + code + '.');
        }
        for (i = 0, max = NUTOOL_PIN.g_cfg_gpiosDefines.length; i < max; i += 1) {
            code = NUTOOL_PIN.g_cfg_gpiosDefines[i].f[0].charCodeAt(1) - 65;
            NUTOOL_PIN.g_cfg_gpiosDefines[i].f[0] = NUTOOL_PIN.g_cfg_gpiosDefines[i].f[0].replace(/P[A-Z]\./, 'BP' + code + '.');
        }
    }

    function loadPinConfigureTool() {
        // determine the tool content dynamically
        if (typeof NUTOOL_PER === 'undefined') {
            if (typeof NUTOOL_PIN.g_cfg_chipSeries !== 'undefined' && NUTOOL_PIN.g_cfg_chipSeries.length !== 0) {
                g_cfg_chipSeries = NUTOOL_PIN.g_cfg_chipSeries;
            }
            if (typeof NUTOOL_PIN.g_chipSilkScreenPrint_default !== 'undefined' && NUTOOL_PIN.g_chipSilkScreenPrint_default !== '') {
                g_chipSilkScreenPrint = NUTOOL_PIN.g_chipSilkScreenPrint_default;
            }
            if (typeof NUTOOL_PIN.g_briefName_default !== 'undefined' && NUTOOL_PIN.g_briefName_default !== '') {
                g_briefName = NUTOOL_PIN.g_briefName_default;
            }
            if (typeof NUTOOL_PIN.g_copyrightCompanyName_default !== 'undefined' && NUTOOL_PIN.g_copyrightCompanyName_default !== '') {
                g_copyrightCompanyName = NUTOOL_PIN.g_copyrightCompanyName_default;
            }
        }
        // note that the following invoking sequence is sensitive. We should not mangle them arbitrarily.
        if (determineIEversion()) { return; } // determine the installed IE version
        decideUIlanguage(); // for toolbar tips
        decideDisplayTooltip(); // we need to know whether to enable the tooltip feature
        //decideMouseWheel(); // set the wheel behavior of the mouse related to zoomIn, bestFIt, and zoomOut.

        if (!decidePartNumber_package()) { g_bCheckNodesBasedOnConfigFile = false; } // decide partnumber and package based on the auto-saved config.
        createGPIO_MFPs(); // this should be called prior to drawChipViewAppearance() and decideChipViewCanvasSize().
        decideModules();// the supported g_module_pins and g_module_functions are decided here
        // decideChipViewCanvasSize should be called behind decideModules
        decideChipViewCanvasSize(); // dynamically decide the canvas size.
        if (typeof NUTOOL_PER === 'undefined') {
            buildChipTypeSelect(); // construct the selects of chip type and MCU.
        }
        // construct trees
        $('#rootTree_Pin')[0].setAttribute('style', 'width:' + g_NUC_TreeView_Width + 'px; height: ' + g_NUC_rootTree_Height + 'px;');
        buildMFPTree();
        buildModuleTree();

        avoidClicking(); // when the loading is not ready, hide some UI elements to avoid some improper operations by users.
        drawChipViewAppearance(); // all the drawing functions congregate here.

        getPinCurrentState(); // set the initial state of pins
        zoomToBestFit(); // adjust the content to fit the outer dialog
        constrainMouseClick(); // constrain the left clicking of the mouse to the relevant UI elements.
        // the following is used for testing. When the driver is being released, we should comment them.
        if (typeof NUTOOL_PER === 'undefined' && !g_bReadyForRelease) {
            decideHotKeys();
        }
    }

    function loadPinConfigureTool_fromSelectionGuide() {
        // note that the following invoking sequence is sensitive. We should not mangle them arbitrarily.
        if (determineIEversion()) { return; } // determine the installed IE version
        decideUIlanguage(); // for toolbar tips
        decideDisplayTooltip(); // we need to know whether to enable the tooltip feature
        //decideMouseWheel(); // set the wheel behavior of the mouse related to zoomIn, bestFIt, and zoomOut.

        //buildToolListSelect();
        // construct trees
        $('#rootTree_Pin')[0].setAttribute('style', 'width:' + g_NUC_TreeView_Width + 'px; height: ' + g_NUC_rootTree_Height + 'px;');
        afterMCUchange();

        zoomToBestFit(); // adjust the content to fit the outer dialog
        constrainMouseClick(); // constrain the left clicking of the mouse to the relevant UI elements.

        // the following is used for testing. When the driver is being released, we should comment them.
        if (!g_bReadyForRelease) {
            decideHotKeys();
        }
    }

    function initListeners() {
        $('#ID_BUTTON_SHOW_REGISTERS').on('click', function () {
            showRegisters();
        });
        $('#ID_BUTTON_LOAD').on('click', function () {
            loadConfigByBrowser();
        });
        $('#loadConfiguration').on('change', loadConfiguration);
        $('#ID_BUTTON_SAVE').on('click', function () {
            saveConfig();
        });
        $('#ID_BUTTON_GENERATE_CODE').on('click', function () {
            generateCode();
        });
        $('#ID_BUTTON_CONNECT_TO_TARGET').on('click', function () {
            if (isElectron()) {
                window.electronAPI.send('connect');
            } else {
                connectToChipWeb();
            }
        });
        $('#ID_BUTTON_PRINT_REPORT').on('click', function () {
            printReport();
        });
        $('#ID_BUTTON_GENERATE_PIN_DESCRIPTIONS').on('click', function () {
            generatePinDescriptions();
        });
        $('#ID_BUTTON_RUN_NUCAD').on('click', function () {
            runAnotherTool();
        });
        $('#ID_BUTTON_SHOW_PIN_DESCRIPTIONS').on('click', function () {
            showPinDescriptions();
        });
        $('#ID_BUTTON_ZOOM_IN').on('click', function () {
            zoomIn();
        });
        $('#ID_BUTTON_BEST_FIT').on('click', function () {
            bestFit();
        });
        $('#ID_BUTTON_ZOOM_OUT').on('click', function () {
            zoomOut();
        });
        $('#ID_BUTTON_LOCK_PIN').on('click', function () {
            lockAllPin();
        });
        $('#ID_BUTTON_SHOW_LOCKED_PINS').on('click', function () {
            showLockedPins();
        });
        $('#ID_BUTTON_DISABLE').on('click', function () {
            uncheckAllNodes();
        });
        $('#ID_BUTTON_LANGUAGE').on('click', function () {
            // No ProjectLocation and ProjectLocationHistory
            settings();
        });
        $('#ID_BUTTON_INSTRUCTION').on('click', function () {
            window.open('https://www.nuvoton.com/resource-download.jsp?tp_GUID=UG1320220401093634');
            window.open('./assets/Supported_Chips.htm');
        });
    }

    function loadConfigByBrowser() {
        if ($('#rootTree_Pin').is(':visible')) {
            showWarningForSaving(function () {
                $('#loadConfiguration').trigger('click');
            });
        }
    }

    function loadConfiguration() {
        if (this.files[0] == undefined || this.files[0] == null) return;
        var extension = this.files[0].name.split('.').pop().toLowerCase();  // file extension from input file
        if (extension.indexOf('ncfg') != 0 && extension.indexOf('cfg') != 0) {
            alert("Please select a file with a valid file type. (.cfg/.ncfg)")
            return;
        }
        var uploadedFile = this.files[0];
        var fileReader = new FileReader();
        fileReader.readAsText(uploadedFile)
        fileReader.onload = function (reader) {
            NUTOOL_PIN.g_readConfigFileContentText = reader.target.result;
            NUTOOL_PIN.g_readConfigFilePath = URL.createObjectURL(uploadedFile);
            try {
                replaceJsFile(loadConfig_core);
            }
            catch (err) { }
        }
    }

    // 由於中間的replacejscssfile部分不好拆成用callback的方式，所以用暴力法在正式loadConfig_core前先手動load一次js檔
    function replaceJsFile(callback) {
        var bCorrectpartNumber_package = false,
            newReadConfigFile,
            newPartNumber_package,
            newChipType,
            oldfilename = "",
            newfilename = "";

        newReadConfigFile = NUTOOL_PIN.g_readConfigFileContentText;
        // find the '\r' pertaining to 'MCU:'
        while (newReadConfigFile.indexOf('\r') !== -1 && (newReadConfigFile.indexOf('\r') < newReadConfigFile.indexOf('MCU:'))) {
            newReadConfigFile = newReadConfigFile.sliceAfterX('\r');
        }

        newPartNumber_package = newReadConfigFile.sliceBetweenXandX('MCU:', '\r');

        newPartNumber_package = newPartNumber_package.trim();
        newChipType = decideNewChipType(newPartNumber_package);
        // check if newChipType is correct
        if ($.inArray(chipTypeToChipSeries(newChipType), g_cfg_chipSeries) === -1) {
            showAlertDialog("从配置档读出的芯片型号 " + newChipType + " 不正确。",
                "從配置檔讀出的晶片型號 " + newChipType + " 不正確。",
                "The chip type of " + newChipType + " read from the config file is incorrect.");

            bCorrectpartNumber_package = null;
            newReadConfigFile = null;
            newPartNumber_package = null;
            newChipType = null;

            return bCorrectpartNumber_package;
        }

        // reload the corresponding chip content
        if (typeof (g_chipType) !== 'undefined') {
            oldfilename = 'NUC_' + g_chipType + '_Content.js';
            newfilename = 'NUC_' + newChipType + '_Content.js';

            replacejscssfile(oldfilename, newfilename, 'js', callback);
        }
        else if (typeof (g_chipType) === 'undefined') {
            if (typeof NUTOOL_PER === 'undefined') {
                if (typeof NUTOOL_PIN.g_chipType_default === 'undefined' || NUTOOL_PIN.g_chipType_default === '') {
                    oldfilename = 'NUC_NUC400_Content.js';
                }
                else {
                    oldfilename = 'NUC_' + NUTOOL_PIN.g_chipType_default + '_Content.js';
                }
            }
            else {
                oldfilename = 'NUC_M251_Content.js';
            }
            newfilename = 'NUC_' + newChipType + '_Content.js';

            replacejscssfile(oldfilename, newfilename, 'js', callback);
        }
    }

    // IPC Renderer
    // 趕時間，所以直接複製webusb的flow過來，有機會再合併
    function setIPCListener() {
        window.electronAPI.onConnected((event, value) => {
            console.log('electronAPI: onConnected');
            // 確認連接後取PIDValue
            deviceConnected = true;
            window.electronAPI.send('getPIDValue');
        });
        window.electronAPI.onReturnPIDValue((event, pidValue) => {
            console.log('electronAPI: onReturnPIDValue');
            // 取得PIDValue後換成PID
            connectedDevicePID = getPIDFromPIDValue(pidValue);
            console.log('connected device: ' + connectedDevicePID);
            // 確認連接的chip是否為現在畫面上呈現的chip
            if (g_partNumber_package.toUpperCase().indexOf(connectedDevicePID.toUpperCase()) != -1) {
                // 紀錄各個register的預設位址
                var addrs = [];
                var regNames = [];
                regNames = getPropertyNames(NUTOOL_PIN.g_cfg_regDescriptions);
                for (i = 0; i < regNames.length; i++) {
                    addrs.push(NUTOOL_PIN.g_cfg_regDescriptions[regNames[i]]);
                }
                // 將預設位址送到worker讀值
                window.electronAPI.send('getMFPValues', addrs);
            } else {
                // 流程結束，斷開連結
                window.electronAPI.send('connectComplete');
                // 提示使用者選擇正確的型號
                decideUIlanguage();
                showAlertDialog("请切换至与连接芯片相符合的芯片系列与型号。",
                    "請切換至與連接晶片相符合的晶片系列與型號。",
                    `Please switch to the Chip Series and Part No. that matches the connected chip.`);
            }
        });
        // 接收到斷線通知
        window.electronAPI.onReturnRegisterValue((event, result, type) => {
            console.log('electronAPI: onReturnRegisterValue');
            onReturnRegisterValue(result, type);
        });
        // 接收到斷線通知
        window.electronAPI.onDisconnect((event, value) => {
            console.log("electronAPI: onDisconnect");
            deviceConnected = false;
        });
        // 接收到警告訊息
        window.electronAPI.onWarning((event, value) => {
            console.warn(value);
        });
        // NuCAD無法正確執行
        window.electronAPI.onRunNuCADError((event, value) => {
            executeNuCADfail();
        });
    }

    function setWorkerListener() {
        worker.onmessage = async function (e) {
            let action = e.data.action;
            let data = e.data;
            if (action == 'connected') {
                console.log('worker: connected');
                // 確認連接後取PIDValue
                deviceConnected = true;
                worker.postMessage({ 'action': 'getPIDValue' });
            } else if (action == 'returnPIDValue') {
                console.log('worker: returnPIDValue');
                // 取得PIDValue後換成PID
                connectedDevicePID = getPIDFromPIDValue(data.value);
                console.log('connected device: ' + connectedDevicePID);
                // 確認連接的chip是否為現在畫面上呈現的chip
                if (g_partNumber_package.toUpperCase().indexOf(connectedDevicePID.toUpperCase()) != -1) {
                    // 紀錄各個register的預設位址
                    var addrs = [];
                    var regNames = [];
                    regNames = getPropertyNames(NUTOOL_PIN.g_cfg_regDescriptions);
                    for (i = 0; i < regNames.length; i++) {
                        addrs.push(NUTOOL_PIN.g_cfg_regDescriptions[regNames[i]]);
                    }
                    // 將預設位址送到worker讀值
                    worker.postMessage({ 'action': 'getMFPValues', 'data': addrs });
                } else {
                    // 流程結束，斷開連結
                    worker.postMessage({ 'action': 'connectComplete' });
                    // 提示使用者選擇正確的型號
                    decideUIlanguage();
                    showAlertDialog("请切换至与连接芯片相符合的芯片系列与型号。",
                        "請切換至與連接晶片相符合的晶片系列與型號。",
                        `Please switch to the Chip Series and Part No. that matches the connected chip.`);
                }
            } else if (action == 'returnRegisterValue') {
                console.log('worker: returnRegisterValue');
                onReturnRegisterValue(data.result, data.type);
            } else if (action == 'disconnect') {
                console.log('worker: disconnect');
                deviceConnected = false;
            }
        };
    }

    function onReturnRegisterValue(result, type) {
        var regNames = getPropertyNames(NUTOOL_PIN.g_cfg_regDescriptions);
        if (type == 'CortexM') {
            for (var m in result) {
                for (var n = 0; n < regNames.length; n++) {
                    if (NUTOOL_PIN.g_cfg_regDescriptions[regNames[n]] == Object.keys(result[m])[0]) {
                        var value = result[m][Object.keys(result[m])[0]];
                        checkNodesByMFPregister(`${regNames[n]}:0x${value.toUpperCase()}`);
                        break;
                    }
                }
            }
        } else if (type == '8051') {
            checkNodesByMFPregister(`${data.register}:0x${result.toUpperCase()}`);
        } else {
            console.log("returnRegisterValue: unknown type.");
        }
    }

    async function connectToChipWeb() {
        var connDevice;
        if (worker != undefined) {
            // 先確認現在有沒有連上device
            await navigator.usb.getDevices().then((devices) => {
                devices.forEach((device) => {
                    connDevice = device;
                });
            }).catch(error => {
                console.log(error);
                connDevice = undefined;
            });
            // 如果沒有連上任何device的話，執行requestDevice()讓使用者選擇device
            if (connDevice == undefined) {
                connDevice = await navigator.usb.requestDevice({
                    filters: [{ vendorId: 0x0416 }]
                }).catch(error => {
                    console.log(error);
                    connDevice = undefined;
                });
            }
            // 選到任一裝置後，叫worker進行讀PID的動作
            if (connDevice != undefined) {
                worker.postMessage({ 'action': 'connect' });
            }
        }
    }

    function getPIDFromPIDValue(PIDValue) {
        var PIDLine = completePIDList.filter(line => {
            return line.indexOf(PIDValue) != -1;
        });
        return PIDLine[0].slicePriorToX('-');
    }

    function isElectron() {
        // Renderer process
        if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
            return true;
        }

        // Main process
        if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
            return true;
        }

        // Detect the user agent when the `nodeIntegration` option is set to false
        if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
            return true;
        }

        return false;
    }

    function parsingPartNumID() {
        var PartNumID = $.ajax({ url: './src/PartNumID.cpp', async: false }).responseText;
        PartNumID.split(/\r\n|\n/).filter(function (line) {
            var reg = new RegExp('.*[^\/]\{.*0x.*[PROJ].*\}');
            return reg.test(line);
        }).forEach(function (line) { // 根據PartNumID的格式放在PIDPair後存入PIDList
            if (line.indexOf('not release') == -1) {
                // TODO: 有點硬拆，需要轉換成json再來parse
                let pid = line.substring(line.indexOf('"') + 1, line.lastIndexOf('"'));
                let regValue = line.substring(line.indexOf('0x'), line.lastIndexOf('PROJ') - 2);
                let projName = line.substring(line.indexOf('PROJ'), line.lastIndexOf('}'));
                completePIDList.push(pid + '-' + regValue + '-' + projName);
            }
        });
    }

    function isThisPinLocked(pin) {
        for (var l = 0; l < g_lockedPin.length; l++) {
            var lockedPin = g_lockedPin[l].sliceAfterX('Pin');
            if (lockedPin == pin) {
                return true;
            }
        }
        return false;
    }

    function showLockedPins() {
        var title,
            content = "",
            buttonOk,
            recordedUIlanguage = localStorage.getItem("UIlanguage");

        // close the last dialog
        destroyAllExistentDialogs();

        g_lockedPin.sort();
        g_lockedPin.forEach((lockedPin) => {
            var pin = lockedPin.sliceAfterX('Pin')
            content = content + lockedPin.slicePriorToX('_Pin') + '(Pin: ' + pin + ')<br />';
        });

        if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
            title = "Locked Pins";
            buttonOk = "Confirm";
        } else {
            if (recordedUIlanguage === "Simplified Chinese") {
                title = "已鎖定的腳位";
                buttonOk = "确定";
            }
            else if (recordedUIlanguage === "Traditional Chinese") {
                title = "已锁定的脚位";
                buttonOk = "確定";
            }
            else {
                title = "Locked Pins";
                buttonOk = "Confirm";
            }
        }

        // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
        var stringDialogDIV = '<div id="lockedPinsDialog"><p>' + content + '</div>';
        $(stringDialogDIV).dialog({
            modal: false,
            draggable: false,
            resizable: false,
            title: title,
            width: 500,
            height: 'auto',
            show: 'fade',
            hide: 'fade',
            close: function () {
                $("#lockedPinsDialog").dialog("destroy");
            },
            buttons: [
                {
                    text: buttonOk,
                    click: function () {
                        // close the last dialog
                        if ($("#lockedPinsDialog").dialog("isOpen")) {
                            $("#lockedPinsDialog").dialog("destroy");
                        }
                    }
                }
            ]
        });
    }

    function showLockedWarningDialog() {
        var title,
            content,
            buttonOk,
            recordedUIlanguage = localStorage.getItem("UIlanguage");

        // close the last dialog
        destroyAllExistentDialogs();

        if (typeof (recordedUIlanguage) == 'undefined' || recordedUIlanguage == null) {
            title = 'Warning';
            content = "This pin or module is already locked";
            buttonOk = "Confirm";
        } else {
            if (recordedUIlanguage === "Simplified Chinese") {
                title = '警告';
                content = "目标脚位或模块已被锁定";
                buttonOk = "确定";
            }
            else if (recordedUIlanguage === "Traditional Chinese") {
                title = '警告';
                content = "目標腳位或模組已被鎖定";
                buttonOk = "確定";
            }
            else {
                title = 'Warning';
                content = "This pin or module  is already locked";
                buttonOk = "Confirm";
            }
        }

        // JQuery sets the autofocus on the first input that is found. So play it sneaky by creating a "fake" input at the last line of your dialog
        var stringDialogDIV = '<div id="lockedWarningDialog"><p>' + content + '</div>';
        $(stringDialogDIV).dialog({
            modal: false,
            draggable: false,
            resizable: false,
            title: title,
            width: 500,
            height: 'auto',
            show: 'fade',
            hide: 'fade',
            close: function () {
                $("#lockedWarningDialog").dialog("destroy");
            },
            buttons: [
                {
                    text: buttonOk,
                    click: function () {
                        // close the last dialog
                        if ($("#lockedWarningDialog").dialog("isOpen")) {
                            $("#lockedWarningDialog").dialog("destroy");
                        }
                    }
                }
            ]
        });
    }

    // 是否有不同IP使用同Pin，或是同IP使用不同Pin。 Input e.g.: ACMP0_P0_Pin32
    function bLockWarning(FUNCTION_PIN) {
        var bLockWarning = false;
        var ip = FUNCTION_PIN.slicePriorToX('_Pin');
        var pin = FUNCTION_PIN.sliceAfterX('_Pin');
        for (var l = 0; l < g_lockedPin.length; l++) {
            if (g_lockedPin[l].slicePriorToX('_Pin') == ip) {
                bLockWarning = true;
                break;
            }
            if (g_lockedPin[l].sliceAfterX('_Pin') == pin) {
                bLockWarning = true;
                break;
            }
        }
        return bLockWarning;
    }

    //////////////////////////////////////////////////////public API/////////////////////////////////////////////////////////////
    NUTOOL_PIN = {
        getg_userSelectUIlanguage: function () {
            return g_userSelectUIlanguage;
        },
        getg_partNumber_package: function () {
            return g_partNumber_package;
        },
        getg_pin_descriptions: function () {
            return g_pin_descriptions;
        },
        getg_gpio_MFPsString: function () {
            return g_gpio_MFPsString;
        },
        getg_gpio_MFPsString1: function () {
            return g_gpio_MFPsString1;
        },
        getg_pinCurrentStateString: function () {
            return g_pinCurrentStateString;
        },
        getg_pinsConfiguredByGPIOstring: function () {
            return g_pinsConfiguredByGPIOstring;
        },
        getg_userDefinedPinString: function () {
            return g_userDefinedPinString;
        },
        getg_includeHeadFileString: function () {
            return g_includeHeadFileString;
        },
        getg_generatedCodeByPinString: function () {
            return g_generatedCodeByPinString;
        },
        getg_generatedCodeByModuleString: function () {
            return g_generatedCodeByModuleString;
        },
        getg_generatedCodeByGPIOstring: function () {
            return g_generatedCodeByGPIOstring;
        },
        getg_generatedMFPFunctionList: function () {
            return g_generatedMFPFunctionList;
        },
        getg_anotherNameForNuCAD: function () {
            return NUTOOL_PIN.g_anotherNameForNuCAD;
        },
        getg_briefName: function () {
            return g_briefName;
        },
        getg_copyrightCompanyName: function () {
            return g_copyrightCompanyName;
        },
        ////for CodeGenerator////
        setg_selectedPartNoValue: function (newPartNoValue) {
            g_selectedPartNoValue = newPartNoValue;
        },
        setReviewReportTable: setReviewReportTable,
        loadPinConfigureTool: loadPinConfigureTool,
        loadPinConfigureTool_fromSelectionGuide: loadPinConfigureTool_fromSelectionGuide,
        getGeneratedCodeByPin: getGeneratedCodeByPin,
        getGeneratedCodeByModule: getGeneratedCodeByModule,
        getGeneratedCodeByGPIO: getGeneratedCodeByGPIO,
        getGeneratedMFPFunctionList: getGeneratedMFPFunctionList,
        /////////////////////////////////////////////////////////////////////////////////////
        getIncludeHeadFile: getIncludeHeadFile,
        getDataUsedToCreateText: getDataUsedToCreateText,
        getModularizedDataUsedToCreateText: getModularizedDataUsedToCreateText,
        retrieveGenerateCodeContent: retrieveGenerateCodeContent,
        decideNewChipType: decideNewChipType,
        updatePinName: updatePinName,
        closeAPP: closeAPP,
        redrawForResizingDialog: redrawForResizingDialog,
        triggerSearch: triggerSearch,
        showRegisters: showRegisters,
        loadConfig_core: loadConfig_core,
        saveConfig: saveConfig,
        generateCode: generateCode,
        connectToTarget: connectToTarget,
        printReport: printReport,
        generatePinDescriptions: generatePinDescriptions,
        runAnotherTool: runAnotherTool,
        get_pin_descriptions: get_pin_descriptions,
        showPinDescriptions: showPinDescriptions,
        zoomIn: zoomIn,
        bestFit: bestFit,
        zoomOut: zoomOut,
        uncheckAllNodes: uncheckAllNodes,
        uncheckAllNodes_core: uncheckAllNodes_core,
        settings: settings,
        changeUIlanguage: changeUIlanguage,
        executePDFfail: executePDFfail,
        executeNuCADfail: executeNuCADfail,
        get_gpio_MFPsNames: get_gpio_MFPsNames,
        recordConfig: recordConfig,
        g_readConfigFilePath: "", // for DISPATCH_PROPERTYPUT
        g_readConfigFileContentText: "",
        g_pinFunctionString: "", // for DISPATCH_PROPERTYPUT
        g_bFunctionalTesting: false,
        g_bModuleTreeLoaded: false,
        // 以下From NuTool_Content.js
        g_horizontalIndexArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'T', 'U', 'V', 'W', 'Y'],
        g_toolbarRemovedIndices: '4',
        g_chipType_default: '',
        g_partNumber_package_default: '',
        g_chipSilkScreenPrint_default: '',
        g_briefName_default: '',
        g_copyrightCompanyName_default: '',
        g_anotherNameForNuCAD: '',
        g_bSwitchSpeech8bitCPUMode: false
    };
}());
// timer code
//var start = new Date().getTime();
//var end = new Date().getTime();
//var time = end - start;
//window.alert('Execution time: ' + time);

//$searchInput.val("");