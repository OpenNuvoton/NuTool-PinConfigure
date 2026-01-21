NUTOOL_PIN.autoAssign = {};
NUTOOL_PIN.autoAssign.priority = {
    L1 : {
        QSPI0: ["QSPI0_SS0", "QSPI0_CLK", "QSPI0_MOSI0", "QSPI0_MISO0", "QSPI0_MISO1",
            "QSPI0_MISO1"
        ],
        SD0: ["SD0_CMD", "SD0_CLK", "SD0_DAT0", "SD0_DAT1", "SD0_DAT2",
            "SD0_DAT3", "SD0_WP", "SD0_nCD"
        ],
        SD1: ["SD1_CMD", "SD1_CLK", "SD1_DAT0", "SD1_DAT1", "SD1_DAT2",
            "SD1_DAT3", "SD1_WP", "SD1_nCD"
        ],
        eMMC0: ["EMMC0_CMD", "EMMC0_CLK", "EMMC0_DAT0", "EMMC0_DAT1", "EMMC0_DAT2",
            "EMMC0_DAT3"],
        eMMC1: ["EMMC1_CMD", "EMMC1_CLK", "EMMC1_DAT0", "EMMC1_DAT1", "EMMC1_DAT2",
            "EMMC1_DAT3", "EMMC1_DAT4", "EMMC1_DAT5", "EMMC1_DAT6", "EMMC1_DAT7"],
        NAND: ["NAND_DATA0", "NAND_DATA1", "NAND_DATA2", "NAND_DATA3", "NAND_DATA4",
            "NAND_DATA5", "NAND_DATA6", "NAND_DATA7", "NAND_ALE", "NAND_CLE",
            "NAND_nRE", "NAND_nWE"
            // NAND_RDY0 / NAND_RDY1 (需與CS一起選,  0 or 1 可單/複選)
            // NAND_nCS0 / NAND_nCS1 (需與RDY一起選,  0 or 1 可單/複選)
        ],
        HSUSB0: ["HSUSB0_VBUSVLD"],
        HSUSB1: ["HSUSBH_PWREN", "HSUSBH_OVC"]
    },
    L2 : {
        QSPI1: [
            // QSPI1_SS0  / QSPI1_SS1 (可單/複選)
            "QSPI1_CLK", "QSPI1_MOSI0", "QSPI1_MISO0", "QSPI1_MISI1", "QSPI1_MISO1"
        ],
        RMII0: ["RMII0_MDC", "RMII0_MDIO", "RMII0_TXEN", "RMII0_TXD0", "RMII0_TXD1",
            "RMII0_REFCLK", "RMII0_CRS_DV", "RMII0_RXD0", "RMII0_RXD1", "RMII0_RXER"
        ],
        RMII1: ["RMII1_MDC", "RMII1_MDIO", "RMII1_TXEN", "RMII1_TXD0", "RMII1_TXD1",
            "RMII1_REFCLK", "RMII1_CRS_DV", "RMII1_RXD0", "RMII1_RXD1", "RMII1_RXER"
        ],
        RGMII0: ["RGMII0_MDC", "RGMII0_MDIO", "RGMII0_TXCTL", "RGMII0_TXD0", "RGMII0_TXD1",
            "RGMII0_RXCLK", "RGMII0_RXCTL", "RGMII0_RXD0", "RGMII0_RXD1", "RGMII0_RXD2",
            "RGMII0_RXD3", "RGMII0_TXCLK", "RGMII0_TXD2", "RGMII0_TXD3"
        ],
        RGMII1: ["RGMII1_MDC", "RGMII1_MDIO", "RGMII1_TXCTL", "RGMII1_TXD0", "RGMII1_TXD1",
            "RGMII1_RXCLK", "RGMII1_RXCTL", "RGMII1_RXD0", "RGMII1_RXD1", "RGMII1_RXD2",
            "RGMII1_RXD3", "RGMII1_TXCLK", "RGMII1_TXD2", "RGMII1_TXD3"
        ],
        LCM: ["LCM_VSYNC", "LCM_HSYNC", "LCM_CLK", "LCM_DEN", "LCM_DATA0",
            "LCM_DATA1", "LCM_DATA2", "LCM_DATA3", "LCM_DATA4", "LCM_DATA5",
            "LCM_DATA6", "LCM_DATA7", "LCM_DATA8", "LCM_DATA9", "LCM_DATA10",
            "LCM_DATA11", "LCM_DATA12", "LCM_DATA13", "LCM_DATA14", "LCM_DATA15",
            "LCM_DATA16", "LCM_DATA17", "LCM_DATA18", "LCM_DATA19", "LCM_DATA20",
            "LCM_DATA21", "LCM_DATA22", "LCM_DATA23",
            "LCM_MPU_RD", "LCM_MPU_WR", "LCM_MPU_RS", "LCM_MPU_D0", "LCM_MPU_D1",
            "LCM_MPU_D2", "LCM_MPU_D3", "LCM_MPU_D4", "LCM_MPU_D5", "LCM_MPU_D6",
            "LCM_MPU_D7", "LCM_MPU_D8", "LCM_MPU_D9", "LCM_MPU_D10", "LCM_MPU_D11",
            "LCM_MPU_D12", "LCM_MPU_D13", "LCM_MPU_D14", "LCM_MPU_D15", "LCM_MPU_D16",
            "LCM_MPU_D17", "LCM_MPU_CS", "LCM_MPU_TE"
        ],
        CCAP0: ["CCAP0_SCLK", "CCAP0_PIXCLK", "CCAP0_HSYNC", "CCAP0_VSYNC", "CCAP0_SFIELD",
            "CCAP0_DATA0", "CCAP0_DATA1", "CCAP0_DATA2", "CCAP0_DATA3", "CCAP0_DATA4",
            "CCAP0_DATA5", "CCAP0_DATA6", "CCAP0_DATA7"
        ],
        CCAP1: ["CCAP1_SCLK", "CCAP1_PIXCLK", "CCAP1_HSYNC", "CCAP1_VSYNC", "CCAP1_SFIELD",
            "CCAP1_DATA0", "CCAP1_DATA1", "CCAP1_DATA2", "CCAP1_DATA3", "CCAP1_DATA4",
            "CCAP1_DATA5", "CCAP1_DATA6", "CCAP1_DATA7"
        ],
        UART0: ["UART0_RXD", "UART0_TXD"],
        // ADC0_CHx (可單/複選幾 Channels)
        ADC0: ["ADC0_CH0", "ADC0_CH1", "ADC0_CH2", "ADC0_CH3", "ADC0_CH4",
            "ADC0_CH5", "ADC0_CH6", "ADC0_CH7", "ADC0_CH8", "ADC0_CH9",
            "ADC0_CH10", "ADC0_CH11", "ADC0_CH12", "ADC0_CH13", "ADC0_CH14",
            "ADC0_CH15", "ADC0_CH16", "ADC0_CH17", "ADC0_CH18", "ADC0_CH19",
            "ADC0_CH20", "ADC0_CH21", "ADC0_CH22", "ADC0_CH23",
            "ADC0_0", "ADC0_1", "ADC0_2", "ADC0_3", "ADC0_4", // For NUC400
            "ADC0_5", "ADC0_6", "ADC0_7", "ADC0_8", "ADC0_9",
            "ADC0_10", "ADC0_11"
        ],
        // EADC0_CHx (可單/複選幾 Channels)
        EADC0: ["EADC0_CH0", "EADC0_CH1", "EADC0_CH2", "EADC0_CH3", "EADC0_CH4",
            "EADC0_CH5", "EADC0_CH6", "EADC0_CH7", "EADC0_CH8", "EADC0_CH9",
            "EADC0_CH10", "EADC0_CH11", "EADC0_CH12", "EADC0_CH13", "EADC0_CH14",
            "EADC0_CH15", "EADC0_CH16", "EADC0_CH17", "EADC0_CH18", "EADC0_CH19",
            "EADC0_CH20", "EADC0_CH21", "EADC0_CH22", "EADC0_CH23"
        ],
        // TAMPERx (可單/複選幾根 Tamper pins)
        TAMPER0: ["TAMPER0"],
        TAMPER1: ["TAMPER1"],
        TAMPER2: ["TAMPER2"],
        TAMPER3: ["TAMPER3"],
        TAMPER4: ["TAMPER4"],
        TAMPER5: ["TAMPER5"],
    },
    L3: {
        EBI: ["EBI_AD0", "EBI_AD1", "EBI_AD2", "EBI_AD3", "EBI_AD4",
            "EBI_AD5", "EBI_AD6", "EBI_AD7", "EBI_AD8", "EBI_AD9",
            "EBI_AD10", "EBI_AD11", "EBI_AD12", "EBI_AD13", "EBI_AD14",
            "EBI_AD15",
            "EBI_ADR0", "EBI_ADR1", "EBI_ADR2", "EBI_ADR3", "EBI_ADR4",
            "EBI_ADR5", "EBI_ADR6", "EBI_ADR7", "EBI_ADR8", "EBI_ADR9",
            "EBI_ADR10", "EBI_ADR11", "EBI_ADR12", "EBI_ADR13", "EBI_ADR14",
            "EBI_ADR15",
            // EBI_ADR16 (可單獨選16)
            // EBI_ADR17 (不可單獨選, 需連續選16~17)
            // EBI_ADR18 (不可單獨選, 需連續選16~18)
            // EBI_ADR19 (不可單獨選, 需連續選16~19)
            "EBI_nRD", "EBI_nWR", "EBI_ALE",
            // EBI_nCS0 / EBI_nCS1 / EBI_nCS2 (可單/複選)
            "EBI_nWRH", "EBI_nWRL", "EBI_MCLK"
        ],
        // KPI(0~7)
        // KPI_COLx (需選連續幾根的COL)
        // KPI_ROWx (需選連續幾根的ROW)
        JTAG: ["JTAG_TDO", "JTAG_TCK", "JTAG_TMS", "JTAG_TDI", "JTAG_nTRST"],
        TRACE: ["TRACE_CLK", "TRACE_DATA0", "TRACE_DATA1", "TRACE_DATA2", "TRACE_DATA3"],
        SW: ["SW_DIO", "SW_CLK"],
        CLK: ["CLK_OUT",
            "CLK_32KOUT" // For MA35XX
        ],
    },
    L4: {
        UART0: ["UART0_RXD", "UART0_TXD", "UART0_nCTS", "UART0_nRTS"],
        UART1: ["UART1_RXD", "UART1_TXD", "UART1_nCTS", "UART1_nRTS"],
        UART2: ["UART2_RXD", "UART2_TXD", "UART2_nCTS", "UART2_nRTS"],
        UART3: ["UART3_RXD", "UART3_TXD", "UART3_nCTS", "UART3_nRTS"],
        UART4: ["UART4_RXD", "UART4_TXD", "UART4_nCTS", "UART4_nRTS"],
        UART5: ["UART5_RXD", "UART5_TXD", "UART5_nCTS", "UART5_nRTS"],
        UART6: ["UART6_RXD", "UART6_TXD", "UART6_nCTS", "UART6_nRTS"],
        UART7: ["UART7_RXD", "UART7_TXD", "UART7_nCTS", "UART7_nRTS"],
        UART8: ["UART8_RXD", "UART8_TXD", "UART8_nCTS", "UART8_nRTS"],
        UART9: ["UART9_RXD", "UART9_TXD", "UART9_nCTS", "UART9_nRTS"],
        UART10: ["UART10_RXD", "UART10_TXD", "UART10_nCTS", "UART10_nRTS"],
        UART11: ["UART11_RXD", "UART11_TXD", "UART11_nCTS", "UART11_nRTS"],
        UART12: ["UART12_RXD", "UART12_TXD", "UART12_nCTS", "UART12_nRTS"],
        UART13: ["UART13_RXD", "UART13_TXD", "UART13_nCTS", "UART13_nRTS"],
        UART14: ["UART14_RXD", "UART14_TXD", "UART14_nCTS", "UART14_nRTS"],
        UART15: ["UART15_RXD", "UART15_TXD", "UART15_nCTS", "UART15_nRTS"],
        UART16: ["UART16_RXD", "UART16_TXD", "UART16_nCTS", "UART16_nRTS"],
        CAN0: ["CAN0_RXD", "CAN0_TXD"],
        CAN1: ["CAN1_RXD", "CAN1_TXD"],
        CAN2: ["CAN2_RXD", "CAN2_TXD"],
        CAN3: ["CAN3_RXD", "CAN3_TXD"],
        I2C0: ["I2C0_SDA", "I2C0_SCL"],
        I2C1: ["I2C1_SDA", "I2C1_SCL"],
        I2C2: ["I2C2_SDA", "I2C2_SCL"],
        I2C3: ["I2C3_SDA", "I2C3_SCL"],
        I2C4: ["I2C4_SDA", "I2C4_SCL"],
        I2C5: ["I2C5_SDA", "I2C5_SCL"],
        SPI0: [
            // SPIx_SS0 / SPIx_SS1 (可單/複選)
            "SPI0_SS0", "SPI0_CLK", "SPI0_MOSI", "SPI0_MISO"
        ],
        SPI1: [
            // SPIx_SS0 / SPIx_SS1 (可單/複選)
            "SPI1_SS0", "SPI1_CLK", "SPI1_MOSI", "SPI1_MISO"
        ],
        SPI2: [
            // SPIx_SS0 / SPIx_SS1 (可單/複選)
            "SPI2_SS0", "SPI2_CLK", "SPI2_MOSI", "SPI2_MISO"
        ],
        SPI3: [
            // SPIx_SS0 / SPIx_SS1 (可單/複選)
            "SPI3_SS0", "SPI3_CLK", "SPI3_MOSI", "SPI3_MISO"
        ],
        I2S0: ["I2S0_MCLK", "I2S0_LRCK", "I2S0_BCLK", "I2S0_DI", "I2S0_DO"],
        I2S1: ["I2S1_MCLK", "I2S1_LRCK", "I2S1_BCLK", "I2S1_DI", "I2S1_DO"],
        SC0: ["SC0_nCD", "SC0_CLK", "SC0_DAT", "SC0_RST", "SC0_PWR"],
        SC1: ["SC1_nCD", "SC1_CLK", "SC1_DAT", "SC1_RST", "SC1_PWR"],
        QEI0: ["QEI0_A", "QEI0_B", "QEI0_INDEX"],
        QEI1: ["QEI1_A", "QEI1_B", "QEI1_INDEX"],
        QEI2: ["QEI2_A", "QEI2_B", "QEI2_INDEX"],
        ECAP0: ["ECAP0_IC0", "ECAP0_IC1", "ECAP0_IC2"],
        ECAP1: ["ECAP1_IC0", "ECAP1_IC1", "ECAP1_IC2"],
        ECAP2: ["ECAP2_IC0", "ECAP2_IC1", "ECAP2_IC2"],
        CLKO: ["CLKO"],
    },
    L5: {
        EPWM0: ["EPWM0_CH0", "EPWM0_CH1", "EPWM0_CH2", "EPWM0_CH3", "EPWM0_CH4", "EPWM0_CH5",
            "EPWM0_0", "EPWM0_1", "EPWM0_2", "EPWM0_3", "EPWM0_4", "EPWM0_5" // For NUC400
        ],
        EPWM1: ["EPWM1_CH0", "EPWM1_CH1", "EPWM1_CH2", "EPWM1_CH3", "EPWM1_CH4", "EPWM1_CH5",
            "EPWM1_0", "EPWM1_1", "EPWM1_2", "EPWM1_3", "EPWM1_4", "EPWM1_5" // For NUC400
        ],
        EPWM2: ["EPWM2_CH0", "EPWM2_CH1", "EPWM2_CH2", "EPWM2_CH3", "EPWM2_CH4", "EPWM2_CH5"],
        INT0: ["INT0"],
        INT1: ["INT1"],
        INT2: ["INT2"],
        INT3: ["INT3"],
        TM0: ["TM0", "TM0_EXT"],
        TM1: ["TM1", "TM1_EXT"],
        TM2: ["TM2", "TM2_EXT"],
        TM3: ["TM3", "TM3_EXT"],
        TM4: ["TM4", "TM4_EXT"],
        TM5: ["TM5", "TM5_EXT"],
        TM6: ["TM6", "TM6_EXT"],
        TM7: ["TM7", "TM7_EXT"],
        TM8: ["TM8", "TM8_EXT"],
        TM9: ["TM9", "TM9_EXT"],
        TM10: ["TM10", "TM10_EXT"],
        TM11: ["TM11", "TM11_EXT"],
    }
};

NUTOOL_PIN.autoAssign.getg_modulesBase = function (jsonDataArray) {
    function compareModuleType(a, b) {
        const cleanChildren = (module, children) =>
            children
                .filter(child => child.isDefault)
                .map(child =>
                    child.data
                        .split("(Pin:")[0]
                        .replace(module, "")
                        .replace(/^_/, "")
                )
                .sort()
                .toString();

        return cleanChildren(a.data, a.children) === cleanChildren(b.data, b.children);
    };

    function getAssignmentPins(moduleName) {
        const priority = NUTOOL_PIN.autoAssign.priority;
        for (const level of Object.values(priority)) {
            if (Array.isArray(level[moduleName])) {
                return level[moduleName];
            }
        }
        return [];
    };

    let modulesTree = {}, modulesType = {};
    // Copy to AutoAssignment
    if (typeof structuredClone === "function") {
        modulesTree = structuredClone(jsonDataArray);
    }
    else {
        modulesTree = JSON.parse(JSON.stringify(jsonDataArray));
    }

    for (let i = 0; i < modulesTree.length; i++) {
        const curr = modulesTree[i];
        curr.assignmentPins = getAssignmentPins(curr.data);

        curr.children.forEach(child => {
            const childName = child.data.split("(Pin:")[0];
            if (curr.assignmentPins.length === 0) {
                child.isDefault = true;
            }
            else {
                child.isDefault = curr.assignmentPins.includes(childName);
            }
        });
    }

    for (let i = 0; i < modulesTree.length; i++) {

        const curr = modulesTree[i];
        const { prefix: module } = curr.data.splitPrefixIndex();

        curr.module = module;
        curr.typeIdx = 1;
        curr.groupIdx = 1;

        // 往前找同 module 的
        for (let j = i - 1; j >= 0; j--) {
            const prev = modulesTree[j];
            if (prev.module !== curr.module) continue;

            // 型態一樣 → 同 groupIdx +1
            if (compareModuleType(curr, prev)) {
                curr.typeIdx = prev.typeIdx;
                curr.groupIdx = prev.groupIdx + 1;
                break;
            }

            // 型態不一樣 → type 要比前一個大
            curr.typeIdx = Math.max(curr.typeIdx, prev.typeIdx + 1);
            curr.groupIdx = 1;
        }

        const key = module + "_type_" + curr.typeIdx;
        modulesType[key] ||= [];
        if (!modulesType[key].includes(curr.attr.id)) {
            modulesType[key].push(curr.attr.id);
        }
    }
    return { modulesTree, modulesType };
};

/**
 * 
 * @param {*} typeMap 
 * @param {*} typeKeys 
 * @param {*} options 
 * @returns 
 */
NUTOOL_PIN.autoAssign.listAllTypeCombinations = function (typeMap, typeKeys, options = {}) {
    const flat = options.flat !== false;   // 預設 true

    function getPickCountMap(typeKeys, selectClass = "group-select") {
        const pickCountMap = {};

        typeKeys.forEach((key) => {
            const value = $(`select.${selectClass}[data-id="${key}"]`).val();
            pickCountMap[key] = Number(value);
        });

        return pickCountMap;
    }

    function combinations(arr, k) {
        const result = [];

        function dfs(start, combo) {
            if (combo.length === k) {
                result.push([...combo]);
                return;
            }
            for (let i = start; i < arr.length; i++) {
                combo.push(arr[i]);
                dfs(i + 1, combo);
                combo.pop();
            }
        }

        dfs(0, []);
        return result;
    }

    const pickCountMap = getPickCountMap(typeKeys);

    const perTypeCombos = typeKeys.map(typeKey => {
        const arr = typeMap[typeKey];
        const k = pickCountMap[typeKey];
        return {
            typeKey,
            combos: combinations(arr, k)
        };
    });

    const result = [];

    // ====== flat mode ======
    if (flat) {

        function dfs(idx, currentArray) {
            if (idx === perTypeCombos.length) {
                result.push([...currentArray]);
                return;
            }

            const { combos } = perTypeCombos[idx];

            for (const combo of combos) {
                dfs(idx + 1, currentArray.concat(combo));
            }
        }

        dfs(0, []);

        // if (result.length === 1 && JSON.stringify(result[0]) === "[]") {
        //     return [];
        // }

        return result;
    }

    // ====== original object structure ======
    else {

        function dfs(idx, currentObj) {
            if (idx === perTypeCombos.length) {
                result.push({ ...currentObj });
                return;
            }

            const { typeKey, combos } = perTypeCombos[idx];

            for (const combo of combos) {
                currentObj[typeKey] = combo;
                dfs(idx + 1, currentObj);
            }
        }

        dfs(0, {});

        // if (result.length === 1 && Object.keys(result[0]).length === 0) {
        //     return [];
        // }

        return result;
    }
};

NUTOOL_PIN.autoAssign.allocateUniquePin = function (result, tmpByPin) {
    function showDetail(obj) {
        Object.entries(obj).forEach(([key, pins]) => {
            console.log(key, pins.map(i => `Pin ${i + 1}`));
        });
    };

    function sortObjectByLength(obj) {
        return Object.fromEntries(
            Object.entries(obj).sort((a, b) => a[1].length - b[1].length)
        );
    };

    var result = result.slice();
    var tmpByPin = JSON.parse(JSON.stringify(tmpByPin));
    showDetail(tmpByPin);
    while (Object.keys(tmpByPin).length > 0) {
        let progress = false; // 判斷本輪是否有分配
        const keys = Object.keys(sortObjectByLength(tmpByPin));

        for (const key of keys) {
            const aryIndexs = tmpByPin[key];
            // 1如果只有一個選擇 → 直接分配
            if (aryIndexs.length === 1) {
                const aryIndex = aryIndexs[0];
                if (result[aryIndex] === undefined) {
                    // 實際腳位 = index + 1
                    console.log(`Assigning unique pin: *${key} -> Pin ${aryIndex + 1}`);
                    result[aryIndex] = `${key}_Pin${aryIndex + 1}`;

                    // 從原物件刪掉 key
                    delete tmpByPin[key];

                    // 從其他 key 刪掉這個 aryIndex
                    for (const k2 of Object.keys(tmpByPin)) {
                        tmpByPin[k2] = tmpByPin[k2].filter(p => p !== aryIndex);
                        // 如果 aryIndexs 刪到變空 → 這個 key 無法分配
                        if (tmpByPin[k2].length === 0) {
                            throw new Error(`No available pins for "${k2}".`);
                        }
                    }
                    progress = true;
                    break;
                }
            }
            // 多個選擇 → 檢查哪個 index 是唯一可選
            else {
                for (const aryIndex of aryIndexs) {
                    let isUnique = true;
                    for (const k2 of Object.keys(tmpByPin)) {
                        if (k2 !== key && tmpByPin[k2].includes(aryIndex)) {
                            isUnique = false;
                            break;
                        }
                    }
                    if (isUnique && result[aryIndex] === undefined) {
                        // 實際腳位 = index + 1
                        console.log(`Assigning unique pin: ${key} -> *Pin ${aryIndex + 1}`);
                        result[aryIndex] = `${key}_Pin${aryIndex + 1}`;

                        // 從原物件刪掉 key
                        delete tmpByPin[key];
                        progress = true;
                        break;
                    }
                }
                if (progress) break;
            }
        }

        if (!progress) {
            break;
        }
    }
    return { result, tmpByPin };
};

NUTOOL_PIN.autoAssign.allocatePinsRecursiveDebug = function (result, tmpByPin, depth = 0) {
    const indent = '  '.repeat(depth); // 縮排讓 log 更清楚
    const tmpKeys = Object.keys(tmpByPin);

    // 沒有剩餘 key → 分配完成
    if (tmpKeys.length === 0) {
        console.log(`${indent}✅ Allocation complete:`, result);
        return { result, tmpByPin: {} };
    }

    // ======================
    // Case 1: 優先處理只有一個可選 pin 的 key
    // ======================
    for (const key of tmpKeys) {
        const pins = tmpByPin[key];

        if (pins.length === 1) {
            const pin = pins[0];
            console.log(`${indent}Assigning single pin: ${key} -> Pin ${pin + 1}`);

            const newResult = result.slice();
            newResult[pin] = `${key}_Pin${pin + 1}`;

            const newTmpByPin = JSON.parse(JSON.stringify(tmpByPin));
            delete newTmpByPin[key];

            // 從其他 key 移除該 pin
            var illegalPin = false;
            for (const k2 of Object.keys(newTmpByPin)) {
                newTmpByPin[k2] = newTmpByPin[k2].filter(p => p !== pin);

                // 若 pins 刪到變空 → 這個 key 無法分配
                if (newTmpByPin[k2].length === 0) {
                    illegalPin = true
                    console.log(`${indent}⚠️ No available pins for "${k2}".`);
                }
            }
            if (!illegalPin) {
                return NUTOOL_PIN.autoAssign.allocatePinsRecursiveDebug(newResult, newTmpByPin, depth);
            }
        }
    }

    // ======================
    // Case 2: 沒有單選 → 對第一個 key 做 backtracking
    // ======================
    const firstKey = tmpKeys[0];
    const pinsToTry = tmpByPin[firstKey];

    for (const pin of pinsToTry) {
        console.log(`${indent}Trying ${firstKey} -> Pin ${pin + 1}`);

        const newResult = result.slice();
        newResult[pin] = `${firstKey}_Pin${pin + 1}`;

        const newTmpByPin = JSON.parse(JSON.stringify(tmpByPin));
        delete newTmpByPin[firstKey];

        // 從其他 key 移除該 pin
        for (const k2 of Object.keys(newTmpByPin)) {
            newTmpByPin[k2] = newTmpByPin[k2].filter(p => p !== pin);
        }

        // 遞迴嘗試
        const allocation = NUTOOL_PIN.autoAssign.allocatePinsRecursiveDebug(newResult, newTmpByPin, depth + 1);

        // 若成功（沒有剩餘 key）
        if (Object.keys(allocation.tmpByPin).length === 0) {
            console.log(`${indent}✅ Success with ${firstKey} -> Pin ${pin + 1}`);
            return allocation;
        }

        // 若失敗 → 回溯
        console.log(`${indent}❌ Backtracking ${firstKey} -> Pin ${pin + 1}`);
    }

    // 所有選擇失敗
    console.log(`${indent}⚠️ Cannot allocate remaining keys:`, tmpByPin);
    return { result, tmpByPin };
};


