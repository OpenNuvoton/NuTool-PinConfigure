/**************************************************************************//**
 * @file     gpio.h
 * @version  V1.00
 * @brief    KM1M7CF series GPIO Driver Header File
 *
 * SPDX-License-Identifier: Apache-2.0
 * @copyright (C) 2022 Nuvoton Technology Corp. Japan All rights reserved.
 ******************************************************************************/
#ifndef __GPIO_H__
#define __GPIO_H__

/** @addtogroup Standard_Driver Standard Driver
  @{
*/

/** @addtogroup GPIO_Driver GPIO Driver
  @{
*/

/** @addtogroup GPIO_EXPORTED_CONSTANTS GPIO Exported Constants
  @{
*/

/*---------------------------------------------------------------------------------------------------------*/
/*  Pull-up resistor selection.                                                                            */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_PLU_DISABLE                (0U)                                    /*!< Without pull-up resistor \hideinitializer */
#define GPIO_PLU_PULL_UP                (1U)                                    /*!< Adding pull-up resistor \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Output current capacity selection.                                                                     */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_DRV_NORMAL                 (0U)                                    /*!< Normal output current capacity (+/-4.0 mA for GPIO0, GPIO1, GPIO5, GPIO8. +/-2.0 mA for GPIO2, GPIO3, GPIO4, GPIO6) \hideinitializer */
#define GPIO_DRV_LARGE                  (1U)                                    /*!< Large output current capacity (+/-8.0 mA for GPIO0, GPIO1, GPIO5, GPIO8. +/-4.0 mA for GPIO2, GPIO3, GPIO4, GPIO6) \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Input level selection definitions.                                                                     */
/*---------------------------------------------------------------------------------------------------------*/
/* Pin of the specified port */
#define GPIO_P57ILV                     GPIO_IOPnILV_Pn7ILV_Msk                 /*!< P57 Input level selection \hideinitializer */
#define GPIO_P60ILV                     GPIO_IOPnILV_Pn0ILV_Msk                 /*!< P60 Input level selection \hideinitializer */

/* Input Level Selection */
#define GPIO_ILV_VDD33                  (0U)                                    /*!< VDD33 * 0.7(H level), VDD33 * 0.3(L level) \hideinitializer */
#define GPIO_ILV_FIX                    (1U)                                    /*!< 1.35V(H level), 0.8V(L level) \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Nch open drain output control definitions.                                                             */
/*---------------------------------------------------------------------------------------------------------*/
/* Pin of the specified port */
#define GPIO_P10ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P10 Nch open drain selection \hideinitializer */
#define GPIO_P11ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< P11 Nch open drain selection \hideinitializer */
#define GPIO_P12ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P12 Nch open drain selection \hideinitializer */
#define GPIO_P13ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P13 Nch open drain selection \hideinitializer */
#define GPIO_P52ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P52 Nch open drain selection \hideinitializer */
#define GPIO_P53ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P53 Nch open drain selection \hideinitializer */
#define GPIO_P54ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< P54 Nch open drain selection \hideinitializer */
#define GPIO_P55ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P55 Nch open drain selection \hideinitializer */
#define GPIO_P56ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< P56 Nch open drain selection \hideinitializer */
#define GPIO_P57ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< P57 Nch open drain selection \hideinitializer */
#define GPIO_P60ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P60 Nch open drain selection \hideinitializer */
#define GPIO_P61ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< P61 Nch open drain selection \hideinitializer */
#define GPIO_P62ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P62 Nch open drain selection \hideinitializer */
#define GPIO_P63ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P63 Nch open drain selection \hideinitializer */
#define GPIO_P64ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< P64 Nch open drain selection \hideinitializer */
#define GPIO_P65ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P65 Nch open drain selection \hideinitializer */
#define GPIO_P66ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< P66 Nch open drain selection \hideinitializer */
#define GPIO_P67ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< P67 Nch open drain selection \hideinitializer */
#define GPIO_P70ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P70 Nch open drain selection \hideinitializer */
#define GPIO_P71ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< P71 Nch open drain selection \hideinitializer */
#define GPIO_P72ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P72 Nch open drain selection \hideinitializer */
#define GPIO_P73ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P73 Nch open drain selection \hideinitializer */
#define GPIO_P74ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< P74 Nch open drain selection \hideinitializer */
#define GPIO_P75ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P75 Nch open drain selection \hideinitializer */
#define GPIO_P76ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< P76 Nch open drain selection \hideinitializer */
#define GPIO_P77ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< P77 Nch open drain selection \hideinitializer */

/* Nch open drain output selection */
#define GPIO_ODC_PUSHPULL               (0U)                                    /*!< Push-pull output \hideinitializer */
#define GPIO_ODC_NCH_OPENDRAIN          (1U)                                    /*!< Nch open drain output \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin-Function definitions.                                                                              */
/*---------------------------------------------------------------------------------------------------------*/
/********************* Bit definition of IOP0MD register **********************/
#define GPIO_P00MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P00MD_GPWM60               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< GPWM60 output pin. \hideinitializer */
#define GPIO_P00MD_GPWMH60              (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< GPWM60 high-resolution output pin. \hideinitializer */
#define GPIO_P00MD_TM12A                (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 12 input/output pin A. \hideinitializer */

#define GPIO_P01MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P01MD_GPWM6U               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWM6U output pin. \hideinitializer */
#define GPIO_P01MD_GPWMH6U              (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWM6U high-resolution output pin. \hideinitializer */
#define GPIO_P01MD_TM12B                (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 12 input/output pin B. \hideinitializer */

#define GPIO_P02MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P02MD_GPWM30               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< GPWM30 output pin. \hideinitializer */
#define GPIO_P02MD_GPWMH30              (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< GPWM30 high-resolution output pin. \hideinitializer */
#define GPIO_P02MD_TM03A                (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 03 input/output pin A. \hideinitializer */

#define GPIO_P03MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P03MD_GPWM3U               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWM3U output pin. \hideinitializer */
#define GPIO_P03MD_GPWMH3U              (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWM3U high-resolution output pin. \hideinitializer */
#define GPIO_P03MD_TM03B                (0x03UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 03 input/output pin B. \hideinitializer */

#define GPIO_P04MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P04MD_GPWM40               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWM40 output pin. \hideinitializer */
#define GPIO_P04MD_GPWMH40              (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWM40 high-resolution output pin. \hideinitializer */
#define GPIO_P04MD_TM04A                (0x03UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 04 input/output pin A. \hideinitializer */

#define GPIO_P05MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P05MD_GPWM4U               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< GPWM4U output pin. \hideinitializer */
#define GPIO_P05MD_GPWMH4U              (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< GPWM4U high-resolution output pin. \hideinitializer */
#define GPIO_P05MD_TM04B                (0x03UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 04 input/output pin B. \hideinitializer */

#define GPIO_P06MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P06MD_GPWM50               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< GPWM50 output pin. \hideinitializer */
#define GPIO_P06MD_GPWMH50              (0x02UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< GPWM50 high-resolution output pin. \hideinitializer */
#define GPIO_P06MD_TM05A                (0x03UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Timer 05 input/output pin A. \hideinitializer */

#define GPIO_P07MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P07MD_GPWM5U               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< GPWM5U output pin. \hideinitializer */
#define GPIO_P07MD_GPWMH5U              (0x02UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< GPWM5U high-resolution output pin. \hideinitializer */
#define GPIO_P07MD_TM05B                (0x03UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Timer 05 input/output pin B. \hideinitializer */

/********************* Bit definition of IOP1MD register **********************/
#define GPIO_P10MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P10MD_DAOUT0               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< D/A Converter 0 output pin. \hideinitializer */
#define GPIO_P10MD_FPSB08               (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< FPSB08 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P11MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P11MD_DAOUT1               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< D/A Converter 1 output pin. \hideinitializer */
#define GPIO_P11MD_FPSB09               (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< FPSB09 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P12MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P12MD_TM06A                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 06 input/output pin A. \hideinitializer */
#define GPIO_P12MD_FPSB10               (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< FPSB10 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P13MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P13MD_TM06B                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 06 input/output pin B. \hideinitializer */
#define GPIO_P13MD_FPSB11               (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< FPSB11 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOP2MD register **********************/
#define GPIO_P20MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P20MD_ADIN00               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< A/D converter analog input 00 pin. \hideinitializer */
#define GPIO_P20MD_CMP00                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 00 input pin. \hideinitializer */

#define GPIO_P21MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P21MD_ADIN01               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< A/D converter analog input 01 pin. \hideinitializer */
#define GPIO_P21MD_CMP01                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Comparator 01 input pin. \hideinitializer */

#define GPIO_P22MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P22MD_ADIN02               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< A/D converter analog input 02 pin. \hideinitializer */
#define GPIO_P22MD_CMPREF0              (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Comparator 0 reference input pin. \hideinitializer */

#define GPIO_P23MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P23MD_ADIN03               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< A/D converter analog input 03 pin. \hideinitializer */
#define GPIO_P23MD_CMP10                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Comparator 10 input pin. \hideinitializer */

#define GPIO_P24MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P24MD_ADIN18               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< A/D converter analog input 18 pin. \hideinitializer */

#define GPIO_P25MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P25MD_ADIN19               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< A/D converter analog input 19 pin. \hideinitializer */

#define GPIO_P26MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P26MD_ADIN04               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< A/D converter analog input 04 pin. \hideinitializer */
#define GPIO_P26MD_CMP11                (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Comparator 11 input pin. \hideinitializer */

#define GPIO_P27MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P27MD_ADIN05               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< A/D converter analog input 05 pin. \hideinitializer */
#define GPIO_P27MD_CMPREF1              (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Comparator 1 reference input pin. \hideinitializer */

/********************* Bit definition of IOP3MD register **********************/
#define GPIO_P30MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P30MD_ADIN20               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< A/D converter analog input 20 pin. \hideinitializer */

#define GPIO_P31MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P31MD_ADIN21               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< A/D converter analog input 21 pin. \hideinitializer */

#define GPIO_P32MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P32MD_ADIN06               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< A/D converter analog input 06 pin. \hideinitializer */
#define GPIO_P32MD_CMP20                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Comparator 20 input pin. \hideinitializer */

#define GPIO_P33MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P33MD_ADIN07               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< A/D converter analog input 07 pin. \hideinitializer */
#define GPIO_P33MD_CMP21                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Comparator 21 input pin. \hideinitializer */

#define GPIO_P34MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P34MD_ADIN08               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< A/D converter analog input 08 pin. \hideinitializer */
#define GPIO_P34MD_CMPREF2              (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Comparator 2 reference input pin. \hideinitializer */

#define GPIO_P35MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P35MD_ADIN09               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< A/D converter analog input 09 pin. \hideinitializer */
#define GPIO_P35MD_CMP30                (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Comparator 30 input pin. \hideinitializer */

#define GPIO_P36MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P36MD_ADIN10               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< A/D converter analog input 10 pin. \hideinitializer */
#define GPIO_P36MD_CMP31                (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Comparator 31 input pin. \hideinitializer */

#define GPIO_P37MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P37MD_ADIN11               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< A/D converter analog input 11 pin. \hideinitializer */
#define GPIO_P37MD_CMPREF3              (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Comparator 3 reference input pin. \hideinitializer */

/********************* Bit definition of IOP4MD register **********************/
#define GPIO_P40MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P40MD_ADIN12               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< A/D converter analog input 12 pin. \hideinitializer */
#define GPIO_P40MD_CMP40                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 40 input pin. \hideinitializer */

#define GPIO_P41MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P41MD_ADIN13               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< A/D converter analog input 13 pin. \hideinitializer */
#define GPIO_P41MD_CMP41                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Comparator 41 input pin. \hideinitializer */

#define GPIO_P42MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P42MD_ADIN14               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< A/D converter analog input 14 pin. \hideinitializer */
#define GPIO_P42MD_CMPREF4              (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Comparator 4 reference input pin. \hideinitializer */

#define GPIO_P43MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P43MD_ADIN15               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< A/D converter analog input 15 pin. \hideinitializer */
#define GPIO_P43MD_CMP50                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Comparator 50 input pin. \hideinitializer */

#define GPIO_P44MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P44MD_ADIN22               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< A/D converter analog input 22 pin. \hideinitializer */

#define GPIO_P45MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P45MD_ADIN23               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< A/D converter analog input 23 pin. \hideinitializer */

#define GPIO_P46MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P46MD_ADIN24               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< A/D converter analog input 24 pin. \hideinitializer */

#define GPIO_P47MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P47MD_ADIN25               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< A/D converter analog input 25 pin. \hideinitializer */

/********************* Bit definition of IOP5MD register **********************/
#define GPIO_P50MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P50MD_ADIN16               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< A/D converter analog input 16 pin. \hideinitializer */
#define GPIO_P50MD_CMP51                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 51 input pin. \hideinitializer */

#define GPIO_P51MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P51MD_ADIN17               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< A/D converter analog input 17 pin. \hideinitializer */
#define GPIO_P51MD_CMPREF5              (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Comparator 5 reference input pin. \hideinitializer */

#define GPIO_P52MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P52MD_FPSA00               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< FPSA00 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P53MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P53MD_TM07A                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 07 input/output pin A. \hideinitializer */
#define GPIO_P53MD_FPSA01               (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< FPSA01 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P54MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P54MD_TM07B                (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 07 input/output pin B. \hideinitializer */
#define GPIO_P54MD_FPSA02               (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< FPSA02 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P55MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P55MD_TM08A                (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 08 input/output pin A. \hideinitializer */
#define GPIO_P55MD_FPSA03               (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< FPSA03 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P56MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P56MD_TM08B                (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Timer 08 input/output pin B. \hideinitializer */
#define GPIO_P56MD_FPSA04               (0x02UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< FPSA04 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P57MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P57MD_TM09A                (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Timer 09 input/output pin A. \hideinitializer */
#define GPIO_P57MD_FPSA05               (0x02UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< FPSA05 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P57MD_SMDA                 (0x03UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< SMBus data input/output pin. (Nch open-drain control is valid.) \hideinitializer */

/********************* Bit definition of IOP6MD register **********************/
#define GPIO_P60MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P60MD_TM09B                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 09 input/output pin B. \hideinitializer */
#define GPIO_P60MD_FPSA06               (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< FPSA06 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P60MD_SMCL                 (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SMBus clock input/output pin. (Nch open-drain control is valid.) \hideinitializer */

#define GPIO_P61MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P61MD_FPSA07               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< FPSA07 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P62MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P62MD_TM10A                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 10 input/output pin A. \hideinitializer */
#define GPIO_P62MD_FPSA08               (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< FPSA08 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P63MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P63MD_TRCSWO               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Serial wire output pin. \hideinitializer */
#define GPIO_P63MD_FPSA09               (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< FPSA09 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P64MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P64MD_SWDCLK               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Debug clock input pin. \hideinitializer */
#define GPIO_P64MD_FPSA10               (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< FPSA10 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P65MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P65MD_SWDD                 (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Debug data input/output pin. \hideinitializer */
#define GPIO_P65MD_FPSA11               (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< FPSA11 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P66MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P66MD_FPSA12               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< FPSA12 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P67MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P67MD_FPSA13               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< FPSA13 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOP7MD register **********************/
#define GPIO_P70MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P70MD_FPSB00               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< FPSB00 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P71MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P71MD_FPSB01               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< FPSB01 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P72MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P72MD_TM10B                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 10 input/output pin B. \hideinitializer */
#define GPIO_P72MD_FPSB02               (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< FPSB02 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P73MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P73MD_OSCI                 (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External high-speed oscillation (OSCI). \hideinitializer */
#define GPIO_P73MD_FPSB03               (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< FPSB03 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P74MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P74MD_OSCO                 (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External high-speed oscillation (OSCO). \hideinitializer */
#define GPIO_P74MD_FPSB04               (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< FPSB04 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P75MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P75MD_TM11A                (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 11 input/output pin A. \hideinitializer */
#define GPIO_P75MD_FPSB05               (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< FPSB05 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P76MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P76MD_TM11B                (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Timer 11 input/output pin B. \hideinitializer */
#define GPIO_P76MD_FPSB06               (0x02UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< FPSB06 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P77MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P77MD_FPSB07               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< FPSB07 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definit  ion of IOP8MD register **********************/
#define GPIO_P80MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P80MD_GPWM00               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< GPWM00 output pin. \hideinitializer */
#define GPIO_P80MD_GPWMH00              (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< GPWM00 high-resolution output pin. \hideinitializer */
#define GPIO_P80MD_TM00A                (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 00 input/output pin A. \hideinitializer */

#define GPIO_P81MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P81MD_GPWM0U               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWM0U output pin. \hideinitializer */
#define GPIO_P81MD_GPWMH0U              (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWM0U high-resolution output pin. \hideinitializer */
#define GPIO_P81MD_TM00B                (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 00 input/output pin B. \hideinitializer */

#define GPIO_P82MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P82MD_GPWM10               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< GPWM10 output pin. \hideinitializer */
#define GPIO_P82MD_GPWMH10              (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< GPWM10 high-resolution output pin. \hideinitializer */
#define GPIO_P82MD_TM01A                (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 01 input/output pin A. \hideinitializer */

#define GPIO_P83MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P83MD_GPWM1U               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWM1U output pin. \hideinitializer */
#define GPIO_P83MD_GPWMH1U              (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWM1U high-resolution output pin. \hideinitializer */
#define GPIO_P83MD_TM01B                (0x03UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 01 input/output pin B. \hideinitializer */

#define GPIO_P84MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P84MD_GPWM20               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWM20 output pin. \hideinitializer */
#define GPIO_P84MD_GPWMH20              (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWM20 high-resolution output pin. \hideinitializer */
#define GPIO_P84MD_TM02A                (0x03UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 02 input/output pin A. \hideinitializer */

#define GPIO_P85MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P85MD_GPWM2U               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< GPWM2U output pin. \hideinitializer */
#define GPIO_P85MD_GPWMH2U              (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< GPWM2U high-resolution output pin. \hideinitializer */
#define GPIO_P85MD_TM02B                (0x03UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 02 input/output pin B. \hideinitializer */

#define GPIO_P86MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P86MD_GPWM70               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< GPWM70 output pin. \hideinitializer */
#define GPIO_P86MD_GPWMH70              (0x02UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< GPWM70 high-resolution output pin. \hideinitializer */
#define GPIO_P86MD_TM13A                (0x03UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Timer 13 input/output pin A. \hideinitializer */

#define GPIO_P87MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P87MD_GPWM7U               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< GPWM7U output pin. \hideinitializer */
#define GPIO_P87MD_GPWMH7U              (0x02UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< GPWM7U high-resolution output pin. \hideinitializer */
#define GPIO_P87MD_TM13B                (0x03UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Timer 13 input/output pin B. \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  FPS function selection definitions.                                                                    */
/*---------------------------------------------------------------------------------------------------------*/
/********************* Selection definition of FPSAn_SEL register **********************/
#define GPIO_FPSA_SEL_IRQ00             (0x01U)             /*!< IRQ00 : External interrupt 0 input pin. \hideinitializer */
#define GPIO_FPSA_SEL_IRQ01             (0x02U)             /*!< IRQ01 : External interrupt 1 input pin. \hideinitializer */
#define GPIO_FPSA_SEL_IRQ02             (0x03U)             /*!< IRQ02 : External interrupt 2 input pin. \hideinitializer */
#define GPIO_FPSA_SEL_IRQ03             (0x04U)             /*!< IRQ03 : External interrupt 3 input pin. \hideinitializer */
#define GPIO_FPSA_SEL_IRQ08             (0x05U)             /*!< IRQ08 : External interrupt 8 input pin. \hideinitializer */
#define GPIO_FPSA_SEL_IRQ09             (0x06U)             /*!< IRQ09 : External interrupt 9 input pin. \hideinitializer */
#define GPIO_FPSA_SEL_IRQ10             (0x07U)             /*!< IRQ10 : External interrupt 10 input pin. \hideinitializer */
#define GPIO_FPSA_SEL_IRQ11             (0x08U)             /*!< IRQ11 : External interrupt 11 input pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF00             (0x09U)             /*!< SIF00(SBO0/TX0/SDA0) : Serial interface 0 data input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF01             (0x0AU)             /*!< SIF01(SBI0/RX0) : Serial interface 0 data input pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF02             (0x0BU)             /*!< SIF02(SBT0/SCL0) : Serial interface 0 clock input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF03             (0x0CU)             /*!< SIF03(SBCS0) : Serial interface 0 chip select input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF20             (0x0DU)             /*!< SIF20(SBO2/TX2) : Serial interface 2 data input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF21             (0x0EU)             /*!< SIF21(SBI2/RX2) : Serial interface 2 data input pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF22             (0x0FU)             /*!< SIF22(SBT2) : Serial interface 2 clock input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF23             (0x10U)             /*!< SIF23(SBCS2) : Serial interface 2 chip select input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF30             (0x11U)             /*!< SIF30(SBO3/TX3) : Serial interface 3 data input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF31             (0x12U)             /*!< SIF31(SBI3/RX3) : Serial interface 3 data input pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF32             (0x13U)             /*!< SIF32(SBT3) : Serial interface 3 clock input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_SIF33             (0x14U)             /*!< SIF33(SBCS3) : Serial interface 3 chip select input/output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CTX               (0x15U)             /*!< CTX : CAN transmit output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CRX               (0x16U)             /*!< CRX : CAN receive input pin. \hideinitializer */
#define GPIO_FPSA_SEL_RTCOUT            (0x17U)             /*!< RTCOUT : Real-time clock output pin. \hideinitializer */
#define GPIO_FPSA_SEL_GPWMBCST0         (0x18U)             /*!< GPWMBCST0 : GPWM0 count state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_GPWMBCST1         (0x19U)             /*!< GPWMBCST1 : GPWM1 count state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_GPWMBCST2         (0x1AU)             /*!< GPWMBCST2 : GPWM2 count state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_GPWMBCST3         (0x1BU)             /*!< GPWMBCST3 : GPWM3 count state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_GPWMBCST4         (0x1CU)             /*!< GPWMBCST4 : GPWM4 count state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_GPWMBCST5         (0x1DU)             /*!< GPWMBCST5 : GPWM5 count state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_GPWMBCST6         (0x1EU)             /*!< GPWMBCST6 : GPWM6 count state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_GPWMBCST7         (0x1FU)             /*!< GPWMBCST7 : GPWM7 count state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_ADSTATE0          (0x20U)             /*!< ADSTATE0 : A/D0 conversion state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_ADSTATE1          (0x21U)             /*!< ADSTATE1 : A/D1 conversion state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_ADSTATE2          (0x22U)             /*!< ADSTATE2 : A/D2 conversion state output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT00           (0x23U)             /*!< CMPOT00 : Comparator 00 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT01           (0x24U)             /*!< CMPOT01 : Comparator 01 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT10           (0x25U)             /*!< CMPOT10 : Comparator 10 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT11           (0x26U)             /*!< CMPOT11 : Comparator 11 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT20           (0x27U)             /*!< CMPOT20 : Comparator 20 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT21           (0x28U)             /*!< CMPOT21 : Comparator 21 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT30           (0x29U)             /*!< CMPOT30 : Comparator 30 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT31           (0x2AU)             /*!< CMPOT31 : Comparator 31 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT40           (0x2BU)             /*!< CMPOT40 : Comparator 40 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT41           (0x2CU)             /*!< CMPOT41 : Comparator 41 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT50           (0x2DU)             /*!< CMPOT50 : Comparator 50 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CMPOT51           (0x2EU)             /*!< CMPOT51 : Comparator 51 output pin. \hideinitializer */
#define GPIO_FPSA_SEL_CLKOUT            (0x2FU)             /*!< CLKOUT : Clock output pin. \hideinitializer */

/********************* Selection definition of FPSBn_SEL register **********************/
#define GPIO_FPSB_SEL_IRQ04             (0x01U)             /*!< IRQ04 : External interrupt 4 input pin. \hideinitializer */
#define GPIO_FPSB_SEL_IRQ05             (0x02U)             /*!< IRQ05 : External interrupt 5 input pin. \hideinitializer */
#define GPIO_FPSB_SEL_IRQ06             (0x03U)             /*!< IRQ06 : External interrupt 6 input pin. \hideinitializer */
#define GPIO_FPSB_SEL_IRQ07             (0x04U)             /*!< IRQ07 : External interrupt 7 input pin. \hideinitializer */
#define GPIO_FPSB_SEL_IRQ12             (0x05U)             /*!< IRQ12 : External interrupt 12 input pin. \hideinitializer */
#define GPIO_FPSB_SEL_IRQ13             (0x06U)             /*!< IRQ13 : External interrupt 13 input pin. \hideinitializer */
#define GPIO_FPSB_SEL_IRQ14             (0x07U)             /*!< IRQ14 : External interrupt 14 input pin. \hideinitializer */
#define GPIO_FPSB_SEL_IRQ15             (0x08U)             /*!< IRQ15 : External interrupt 15 input pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF10             (0x09U)             /*!< SIF10(SBO1/TX1/SDA1) : Serial interface 1 data input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF11             (0x0AU)             /*!< SIF11(SBI1/RX1) : Serial interface 1 data input pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF12             (0x0BU)             /*!< SIF12(SBT1/SCL1) : Serial interface 1 clock input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF13             (0x0CU)             /*!< SIF13(SBCS1) : Serial interface 1 chip select input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF40             (0x0DU)             /*!< SIF40(SBO4/TX4) : Serial interface 4 data input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF41             (0x0EU)             /*!< SIF41(SBI4/RX4) : Serial interface 4 data input pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF42             (0x0FU)             /*!< SIF42(SBT4) : Serial interface 4 clock input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF43             (0x10U)             /*!< SIF43(SBCS4) : Serial interface 4 chip select input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF50             (0x11U)             /*!< SIF50(SBO5/TX5/LTX) : Serial interface 5 data input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF51             (0x12U)             /*!< SIF51(SBI5/RX5/LRX) : Serial interface 5 data input pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF52             (0x13U)             /*!< SIF52(SBT5) : Serial interface 5 clock input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF60             (0x14U)             /*!< SIF60(SBO6/TX6) : Serial interface 6 data input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF61             (0x15U)             /*!< SIF61(SBI6/RX6) : Serial interface 6 data input pin. \hideinitializer */
#define GPIO_FPSB_SEL_SIF62             (0x16U)             /*!< SIF62(SBT6) : Serial interface 6 clock input/output pin. \hideinitializer */
#define GPIO_FPSB_SEL_RTCOUT            (0x17U)             /*!< RTCOUT : Real-time clock output pin. \hideinitializer */
#define GPIO_FPSB_SEL_GPWMBCST0         (0x18U)             /*!< GPWMBCST0 : GPWM0 count state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_GPWMBCST1         (0x19U)             /*!< GPWMBCST1 : GPWM1 count state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_GPWMBCST2         (0x1AU)             /*!< GPWMBCST2 : GPWM2 count state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_GPWMBCST3         (0x1BU)             /*!< GPWMBCST3 : GPWM3 count state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_GPWMBCST4         (0x1CU)             /*!< GPWMBCST4 : GPWM4 count state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_GPWMBCST5         (0x1DU)             /*!< GPWMBCST5 : GPWM5 count state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_GPWMBCST6         (0x1EU)             /*!< GPWMBCST6 : GPWM6 count state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_GPWMBCST7         (0x1FU)             /*!< GPWMBCST7 : GPWM7 count state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_ADSTATE0          (0x20U)             /*!< ADSTATE0 : A/D0 conversion state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_ADSTATE1          (0x21U)             /*!< ADSTATE1 : A/D1 conversion state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_ADSTATE2          (0x22U)             /*!< ADSTATE2 : A/D2 conversion state output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT00           (0x23U)             /*!< CMPOT00 : Comparator 00 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT01           (0x24U)             /*!< CMPOT01 : Comparator 01 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT10           (0x25U)             /*!< CMPOT10 : Comparator 10 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT11           (0x26U)             /*!< CMPOT11 : Comparator 11 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT20           (0x27U)             /*!< CMPOT20 : Comparator 20 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT21           (0x28U)             /*!< CMPOT21 : Comparator 21 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT30           (0x29U)             /*!< CMPOT30 : Comparator 30 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT31           (0x2AU)             /*!< CMPOT31 : Comparator 31 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT40           (0x2BU)             /*!< CMPOT40 : Comparator 40 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT41           (0x2CU)             /*!< CMPOT41 : Comparator 41 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT50           (0x2DU)             /*!< CMPOT50 : Comparator 50 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CMPOT51           (0x2EU)             /*!< CMPOT51 : Comparator 51 output pin. \hideinitializer */
#define GPIO_FPSB_SEL_CLKOUT            (0x2FU)             /*!< CLKOUT : Clock output pin. \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Both edge detect selection                                                                             */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_EXIRQ_BOTHEDGE_DISABLE     (0x00U << INTCG_MD_INTCGnDETMD_IRQEG_Pos)       /*!< GPIO external interrupt both-edge : disable  \hideinitializer */
#define GPIO_EXIRQ_BOTHEDGE_ENABLE      (0x01U << INTCG_MD_INTCGnDETMD_IRQEG_Pos)       /*!< GPIO external interrupt both-edge : enable  \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  External interrupt trigger settings                                                                    */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_EXIRQ_TRIGGER_RISINGEDGE   (0x00U << INTCG_MD_INTCGnDETMD_IRQTG_Pos)       /*!< GPIO external interrupt trigger : rising edge  \hideinitializer */
#define GPIO_EXIRQ_TRIGGER_FALLINGEDGE  (0x01U << INTCG_MD_INTCGnDETMD_IRQTG_Pos)       /*!< GPIO external interrupt trigger : falling edge  \hideinitializer */
#define GPIO_EXIRQ_TRIGGER_H_LEVEL      (0x02U << INTCG_MD_INTCGnDETMD_IRQTG_Pos)       /*!< GPIO external interrupt trigger : "H" level  \hideinitializer */
#define GPIO_EXIRQ_TRIGGER_L_LEVEL      (0x03U << INTCG_MD_INTCGnDETMD_IRQTG_Pos)       /*!< GPIO external interrupt trigger : "L" level  \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Noise Filter input signal definitions for enabled/disabled selection                                   */
/*---------------------------------------------------------------------------------------------------------*/
/* Register mask value */
#define GPIO_NF_NFCNT0_Msk               (0x00010000U)       /*!< NFCNT0 register \hideinitializer */
#define GPIO_NF_NFCNT1_Msk               (0x00020000U)       /*!< NFCNT1 register \hideinitializer */
/* Noise Filter input signal */
#define GPIO_NF_CTRL_INPUT_Msk          (0x0000FFFFU)       /*!< Noise Filter input signal mask \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ00        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT0_Pos)       /*!< Noise Filter input signal : IRQ00 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ01        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT1_Pos)       /*!< Noise Filter input signal : IRQ01 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ02        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT2_Pos)       /*!< Noise Filter input signal : IRQ02 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ03        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT3_Pos)       /*!< Noise Filter input signal : IRQ03 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ04        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT4_Pos)       /*!< Noise Filter input signal : IRQ04 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ05        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT5_Pos)       /*!< Noise Filter input signal : IRQ05 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ06        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT6_Pos)       /*!< Noise Filter input signal : IRQ06 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ07        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT7_Pos)       /*!< Noise Filter input signal : IRQ07 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ08        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT8_Pos)       /*!< Noise Filter input signal : IRQ08 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ09        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT9_Pos)       /*!< Noise Filter input signal : IRQ09 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ10        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT10_Pos)      /*!< Noise Filter input signal : IRQ10 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ11        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT11_Pos)      /*!< Noise Filter input signal : IRQ11 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ12        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT12_Pos)      /*!< Noise Filter input signal : IRQ12 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ13        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT13_Pos)      /*!< Noise Filter input signal : IRQ13 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ14        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT14_Pos)      /*!< Noise Filter input signal : IRQ14 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ15        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT15_Pos)      /*!< Noise Filter input signal : IRQ15 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM00A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT0_Pos)       /*!< Noise Filter input signal : TM00A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM00B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT1_Pos)       /*!< Noise Filter input signal : TM00B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM01A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT2_Pos)       /*!< Noise Filter input signal : TM01A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM01B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT3_Pos)       /*!< Noise Filter input signal : TM01B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM02A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT4_Pos)       /*!< Noise Filter input signal : TM02A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM02B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT5_Pos)       /*!< Noise Filter input signal : TM02B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM03A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT6_Pos)       /*!< Noise Filter input signal : TM03A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM03B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT7_Pos)       /*!< Noise Filter input signal : TM03B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM04A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT8_Pos)       /*!< Noise Filter input signal : TM04A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM04B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT9_Pos)       /*!< Noise Filter input signal : TM04B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM05A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT10_Pos)      /*!< Noise Filter input signal : TM05A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM05B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT11_Pos)      /*!< Noise Filter input signal : TM05B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM06A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT12_Pos)      /*!< Noise Filter input signal : TM06A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM06B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT13_Pos)      /*!< Noise Filter input signal : TM06B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM07A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT14_Pos)      /*!< Noise Filter input signal : TM07A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM07B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT15_Pos)      /*!< Noise Filter input signal : TM07B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM08A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT16_Pos)      /*!< Noise Filter input signal : TM08A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM08B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT17_Pos)      /*!< Noise Filter input signal : TM08B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM09A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT18_Pos)      /*!< Noise Filter input signal : TM09A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM09B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT19_Pos)      /*!< Noise Filter input signal : TM09B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM10A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT20_Pos)      /*!< Noise Filter input signal : TM10A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM10B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT21_Pos)      /*!< Noise Filter input signal : TM10B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM11A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT22_Pos)      /*!< Noise Filter input signal : TM11A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM11B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT23_Pos)      /*!< Noise Filter input signal : TM11B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM12A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT24_Pos)      /*!< Noise Filter input signal : TM12A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM12B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT25_Pos)      /*!< Noise Filter input signal : TM12B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM13A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT26_Pos)      /*!< Noise Filter input signal : TM13A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM13B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT27_Pos)      /*!< Noise Filter input signal : TM13B \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Noise Filter input signal definitions for sampling clock frequency selection                           */
/*---------------------------------------------------------------------------------------------------------*/
/* Register mask value */
#define GPIO_NF_NFCK0_Msk               (0x00010000U)       /*!< NFCK0 register \hideinitializer */
#define GPIO_NF_NFCK1_Msk               (0x00020000U)       /*!< NFCK1 register \hideinitializer */
#define GPIO_NF_NFCK2_Msk               (0x00040000U)       /*!< NFCK2 register \hideinitializer */
#define GPIO_NF_NFCK3_Msk               (0x00080000U)       /*!< NFCK3 register \hideinitializer */
#define GPIO_NF_NFCK4_Msk               (0x00100000U)       /*!< NFCK4 register \hideinitializer */
#define GPIO_NF_NFCK5_Msk               (0x00200000U)       /*!< NFCK5 register \hideinitializer */
/* Noise Filter input signal */
#define GPIO_NF_CLK_INPUT_Msk          (0x0000FFFFU)       /*!< Noise Filter input signal mask \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ00        (GPIO_NF_NFCK0_Msk | NF_NFCK0_CK0_Pos)           /*!< Noise Filter input signal : IRQ00 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ01        (GPIO_NF_NFCK0_Msk | NF_NFCK0_CK1_Pos)           /*!< Noise Filter input signal : IRQ01 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ02        (GPIO_NF_NFCK0_Msk | NF_NFCK0_CK2_Pos)           /*!< Noise Filter input signal : IRQ02 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ03        (GPIO_NF_NFCK0_Msk | NF_NFCK0_CK3_Pos)           /*!< Noise Filter input signal : IRQ03 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ04        (GPIO_NF_NFCK0_Msk | NF_NFCK0_CK4_Pos)           /*!< Noise Filter input signal : IRQ04 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ05        (GPIO_NF_NFCK0_Msk | NF_NFCK0_CK5_Pos)           /*!< Noise Filter input signal : IRQ05 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ06        (GPIO_NF_NFCK0_Msk | NF_NFCK0_CK6_Pos)           /*!< Noise Filter input signal : IRQ06 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ07        (GPIO_NF_NFCK0_Msk | NF_NFCK0_CK7_Pos)           /*!< Noise Filter input signal : IRQ07 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ08        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK0_Pos)           /*!< Noise Filter input signal : IRQ08 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ09        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK1_Pos)           /*!< Noise Filter input signal : IRQ09 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ10        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK2_Pos)           /*!< Noise Filter input signal : IRQ10 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ11        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK3_Pos)           /*!< Noise Filter input signal : IRQ11 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ12        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK4_Pos)           /*!< Noise Filter input signal : IRQ12 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ13        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK5_Pos)           /*!< Noise Filter input signal : IRQ13 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ14        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK6_Pos)           /*!< Noise Filter input signal : IRQ14 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ15        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK7_Pos)           /*!< Noise Filter input signal : IRQ15 \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM00A        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK0_Pos)           /*!< Noise Filter input signal : TM00A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM00B        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK1_Pos)           /*!< Noise Filter input signal : TM00B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM01A        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK2_Pos)           /*!< Noise Filter input signal : TM01A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM01B        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK3_Pos)           /*!< Noise Filter input signal : TM01B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM02A        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK4_Pos)           /*!< Noise Filter input signal : TM02A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM02B        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK5_Pos)           /*!< Noise Filter input signal : TM02B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM03A        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK6_Pos)           /*!< Noise Filter input signal : TM03A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM03B        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK7_Pos)           /*!< Noise Filter input signal : TM03B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM04A        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK0_Pos)           /*!< Noise Filter input signal : TM04A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM04B        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK1_Pos)           /*!< Noise Filter input signal : TM04B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM05A        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK2_Pos)           /*!< Noise Filter input signal : TM05A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM05B        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK3_Pos)           /*!< Noise Filter input signal : TM05B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM06A        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK4_Pos)           /*!< Noise Filter input signal : TM06A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM06B        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK5_Pos)           /*!< Noise Filter input signal : TM06B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM07A        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK6_Pos)           /*!< Noise Filter input signal : TM07A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM07B        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK7_Pos)           /*!< Noise Filter input signal : TM07B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM08A        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK0_Pos)           /*!< Noise Filter input signal : TM08A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM08B        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK1_Pos)           /*!< Noise Filter input signal : TM08B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM09A        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK2_Pos)           /*!< Noise Filter input signal : TM09A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM09B        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK3_Pos)           /*!< Noise Filter input signal : TM09B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM10A        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK4_Pos)           /*!< Noise Filter input signal : TM10A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM10B        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK5_Pos)           /*!< Noise Filter input signal : TM10B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM11A        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK6_Pos)           /*!< Noise Filter input signal : TM11A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM11B        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK7_Pos)           /*!< Noise Filter input signal : TM11B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM12A        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK0_Pos)           /*!< Noise Filter input signal : TM12A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM12B        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK1_Pos)           /*!< Noise Filter input signal : TM12B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM13A        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK2_Pos)           /*!< Noise Filter input signal : TM13A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM13B        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK3_Pos)           /*!< Noise Filter input signal : TM13B \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Noise Filter Sampling clock frequency selection                                                        */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_NF_SMP_IOCLK_DIV_8         (0x00000000U)       /*!< Noise Filter Sampling clock frequency : IOCLK/8 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_16        (0x00000001U)       /*!< Noise Filter Sampling clock frequency : IOCLK/16 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_32        (0x00000002U)       /*!< Noise Filter Sampling clock frequency : IOCLK/32 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_64        (0x00000003U)       /*!< Noise Filter Sampling clock frequency : IOCLK/64 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_128       (0x00000004U)       /*!< Noise Filter Sampling clock frequency : IOCLK/128 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_256       (0x00000005U)       /*!< Noise Filter Sampling clock frequency : IOCLK/256 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_512       (0x00000006U)       /*!< Noise Filter Sampling clock frequency : IOCLK/512 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_1024      (0x00000007U)       /*!< Noise Filter Sampling clock frequency : IOCLK/1024 \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin protection factor definitions.                                                                     */
/*---------------------------------------------------------------------------------------------------------*/
/* Register mask value */
#define GPIO_PFL_PFLPSELA_Msk                   (0x00010000U)       /*!< PFLPSELA register \hideinitializer */
#define GPIO_PFL_PFLPSELB_Msk                   (0x00020000U)       /*!< PFLPSELB register \hideinitializer */
/* Pin protection factor */
#define GPIO_PROTECT_FACTOR_ALL                 (0x0000FFFFU)       /*!< Pin protection factor all valid flags \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ00               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ00PSEL_Msk)        /*!< Pin protection factor : IRQ00 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ01               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ01PSEL_Msk)        /*!< Pin protection factor : IRQ01 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ02               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ02PSEL_Msk)        /*!< Pin protection factor : IRQ02 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ03               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ03PSEL_Msk)        /*!< Pin protection factor : IRQ03 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ04               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ04PSEL_Msk)        /*!< Pin protection factor : IRQ04 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ05               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ05PSEL_Msk)        /*!< Pin protection factor : IRQ05 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ06               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ06PSEL_Msk)        /*!< Pin protection factor : IRQ06 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ07               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ07PSEL_Msk)        /*!< Pin protection factor : IRQ07 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP00               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP00PSEL_Msk)        /*!< Pin protection factor : CMP00 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP01               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP01PSEL_Msk)        /*!< Pin protection factor : CMP01 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP10               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP10PSEL_Msk)        /*!< Pin protection factor : CMP10 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP11               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP11PSEL_Msk)        /*!< Pin protection factor : CMP11 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP20               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP20PSEL_Msk)        /*!< Pin protection factor : CMP20 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP21               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP21PSEL_Msk)        /*!< Pin protection factor : CMP21 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP30               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP30PSEL_Msk)        /*!< Pin protection factor : CMP30 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP31               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP31PSEL_Msk)        /*!< Pin protection factor : CMP31 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP40               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP40PSEL_Msk)        /*!< Pin protection factor : CMP40 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP41               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP41PSEL_Msk)        /*!< Pin protection factor : CMP41 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP50               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP50PSEL_Msk)        /*!< Pin protection factor : CMP50 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP51               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP51PSEL_Msk)        /*!< Pin protection factor : CMP51 \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin protection factor detection polarity definitions.                                                  */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_PROTECT_FACTOR_POLARITY_HIGH       (0U)                /*!< Pin protection factor detection polarity is "H" output. \hideinitializer */
#define GPIO_PROTECT_FACTOR_POLARITY_LOW        (1U)                /*!< Pin protection factor detection polarity is "L" output. \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin protection factor detection state definition.                                                      */
/*---------------------------------------------------------------------------------------------------------*/
/* Register mask value */
#define GPIO_PFL_PFLSTATA_Msk                   (0x00010000U)       /*!< PFLSTATA register \hideinitializer */
#define GPIO_PFL_PFLSTATB_Msk                   (0x00020000U)       /*!< PFLSTATB register \hideinitializer */
/* Pin protection factor detection state */
#define GPIO_PROTECT_FACTOR_STATE_ALL           (0x0000FFFFU)       /*!< Pin protection factor detection state all valid flags \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ00         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ00DET_Msk)       /*!< Pin protection factor detection state of IRQ00 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ01         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ01DET_Msk)       /*!< Pin protection factor detection state of IRQ01 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ02         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ02DET_Msk)       /*!< Pin protection factor detection state of IRQ02 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ03         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ03DET_Msk)       /*!< Pin protection factor detection state of IRQ03 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ04         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ04DET_Msk)       /*!< Pin protection factor detection state of IRQ04 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ05         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ05DET_Msk)       /*!< Pin protection factor detection state of IRQ05 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ06         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ06DET_Msk)       /*!< Pin protection factor detection state of IRQ06 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ07         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ07DET_Msk)       /*!< Pin protection factor detection state of IRQ07 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD0ERRA       (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_AD0ERRADET_Msk)     /*!< Pin protection factor detection state of AD0ERRA \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD0ERRB       (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_AD0ERRBDET_Msk)     /*!< Pin protection factor detection state of AD0ERRB \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD1ERRA       (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_AD1ERRADET_Msk)     /*!< Pin protection factor detection state of AD1ERRA \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD1ERRB       (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_AD1ERRBDET_Msk)     /*!< Pin protection factor detection state of AD1ERRB \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD2ERRA       (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_AD2ERRADET_Msk)     /*!< Pin protection factor detection state of AD2ERRA \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD2ERRB       (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_AD2ERRBDET_Msk)     /*!< Pin protection factor detection state of AD2ERRB \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP00         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP00PSEL_Msk)      /*!< Pin protection factor detection state of CMP00 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP01         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP01PSEL_Msk)      /*!< Pin protection factor detection state of CMP01 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP10         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP10PSEL_Msk)      /*!< Pin protection factor detection state of CMP10 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP11         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP11PSEL_Msk)      /*!< Pin protection factor detection state of CMP11 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP20         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP20PSEL_Msk)      /*!< Pin protection factor detection state of CMP20 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP21         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP21PSEL_Msk)      /*!< Pin protection factor detection state of CMP21 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP30         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP30PSEL_Msk)      /*!< Pin protection factor detection state of CMP30 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP31         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP31PSEL_Msk)      /*!< Pin protection factor detection state of CMP31 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP40         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP40PSEL_Msk)      /*!< Pin protection factor detection state of CMP40 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP41         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP41PSEL_Msk)      /*!< Pin protection factor detection state of CMP41 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP50         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP50PSEL_Msk)      /*!< Pin protection factor detection state of CMP50 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP51         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP51PSEL_Msk)      /*!< Pin protection factor detection state of CMP51 \hideinitializer */

/*@}*/ /* end of group GPIO_EXPORTED_CONSTANTS */


/** @addtogroup GPIO_EXPORTED_FUNCTIONS GPIO Exported Functions
  @{
*/

/* BSP inline API function definitions */
/* Declare these inline functions here to avoid MISRA C 2004 rule 8.1 error */
__STATIC_INLINE void GPIO_DisableNf(uint32_t u32Input);
__STATIC_INLINE void GPIO_EnableNf(uint32_t u32Input);
__STATIC_INLINE void GPIO_SetInputCtrl(GPIO_T *gpio, uint8_t u8Ctl);
__STATIC_INLINE void GPIO_SetInputCtrlClr(GPIO_T *gpio, uint8_t u8Ctl);
__STATIC_INLINE void GPIO_SetInputCtrlSet(GPIO_T *gpio, uint8_t u8Ctl);
__STATIC_INLINE void GPIO_SetOutputCtrl(GPIO_T *gpio, uint8_t u8Ctl);
__STATIC_INLINE void GPIO_SetOutputCtrlClr(GPIO_T *gpio, uint8_t u8Ctl);
__STATIC_INLINE void GPIO_SetOutputCtrlSet(GPIO_T *gpio, uint8_t u8Ctl);
__STATIC_INLINE uint8_t GPIO_GetInput(GPIO_T const *gpio);
__STATIC_INLINE void GPIO_SetOutput(GPIO_T *gpio, uint8_t u8Out);
__STATIC_INLINE void GPIO_SetOutputClr(GPIO_T *gpio, uint8_t u8Clr);
__STATIC_INLINE void GPIO_SetOutputSet(GPIO_T *gpio, uint8_t u8Set);
__STATIC_INLINE void GPIO_SetOutputToggle(GPIO_T *gpio, uint8_t u8Tgl);
__STATIC_INLINE void GPIO_SetOpenDrainCtrl(GPIO_T *gpio, uint8_t u8Odc, uint8_t u8value);
__STATIC_INLINE void GPIO_SetInputLevel(GPIO_T *gpio, uint8_t u8Ilv, uint8_t u8value);

/**
  * @brief      Noise filter disabled
  * @param[in]  u32Input : Noise filter input signal.
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ00
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ01
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ02
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ03
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ04
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ05
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ06
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ07
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ08
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ09
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ10
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ11
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ12
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ13
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ14
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ15
  *             - \ref GPIO_NF_CTRL_INPUT_TM00A
  *             - \ref GPIO_NF_CTRL_INPUT_TM00B
  *             - \ref GPIO_NF_CTRL_INPUT_TM01A
  *             - \ref GPIO_NF_CTRL_INPUT_TM01B
  *             - \ref GPIO_NF_CTRL_INPUT_TM02A
  *             - \ref GPIO_NF_CTRL_INPUT_TM02B
  *             - \ref GPIO_NF_CTRL_INPUT_TM03A
  *             - \ref GPIO_NF_CTRL_INPUT_TM03B
  *             - \ref GPIO_NF_CTRL_INPUT_TM04A
  *             - \ref GPIO_NF_CTRL_INPUT_TM04B
  *             - \ref GPIO_NF_CTRL_INPUT_TM05A
  *             - \ref GPIO_NF_CTRL_INPUT_TM05B
  *             - \ref GPIO_NF_CTRL_INPUT_TM06A
  *             - \ref GPIO_NF_CTRL_INPUT_TM06B
  *             - \ref GPIO_NF_CTRL_INPUT_TM07A
  *             - \ref GPIO_NF_CTRL_INPUT_TM07B
  *             - \ref GPIO_NF_CTRL_INPUT_TM08A
  *             - \ref GPIO_NF_CTRL_INPUT_TM08B
  *             - \ref GPIO_NF_CTRL_INPUT_TM09A
  *             - \ref GPIO_NF_CTRL_INPUT_TM09B
  *             - \ref GPIO_NF_CTRL_INPUT_TM10A
  *             - \ref GPIO_NF_CTRL_INPUT_TM10B
  *             - \ref GPIO_NF_CTRL_INPUT_TM11A
  *             - \ref GPIO_NF_CTRL_INPUT_TM11B
  *             - \ref GPIO_NF_CTRL_INPUT_TM12A
  *             - \ref GPIO_NF_CTRL_INPUT_TM12B
  *             - \ref GPIO_NF_CTRL_INPUT_TM13A
  *             - \ref GPIO_NF_CTRL_INPUT_TM13B
  * @return     None
  * @details    Disable the noise filter of the specified external interrupt.
  * @note       Disable the noise filter while the interrupt or the timer is disabled.
  */
__STATIC_INLINE void GPIO_DisableNf(uint32_t u32Input)
{
    uint16_t shift;

    shift = (uint16_t)(u32Input & GPIO_NF_CTRL_INPUT_Msk);

    if ((u32Input & GPIO_NF_NFCNT0_Msk) != 0U)
    {
        NF->NFCNT0 &= ~(0x1UL << shift);
    }
    else
    {
        NF->NFCNT1 &= ~(0x1UL << shift);
    }
}

/**
  * @brief      Noise filter enabled
  * @param[in]  u32Input : Noise filter input signal.
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ00
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ01
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ02
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ03
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ04
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ05
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ06
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ07
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ08
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ09
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ10
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ11
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ12
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ13
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ14
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ15
  *             - \ref GPIO_NF_CTRL_INPUT_TM00A
  *             - \ref GPIO_NF_CTRL_INPUT_TM00B
  *             - \ref GPIO_NF_CTRL_INPUT_TM01A
  *             - \ref GPIO_NF_CTRL_INPUT_TM01B
  *             - \ref GPIO_NF_CTRL_INPUT_TM02A
  *             - \ref GPIO_NF_CTRL_INPUT_TM02B
  *             - \ref GPIO_NF_CTRL_INPUT_TM03A
  *             - \ref GPIO_NF_CTRL_INPUT_TM03B
  *             - \ref GPIO_NF_CTRL_INPUT_TM04A
  *             - \ref GPIO_NF_CTRL_INPUT_TM04B
  *             - \ref GPIO_NF_CTRL_INPUT_TM05A
  *             - \ref GPIO_NF_CTRL_INPUT_TM05B
  *             - \ref GPIO_NF_CTRL_INPUT_TM06A
  *             - \ref GPIO_NF_CTRL_INPUT_TM06B
  *             - \ref GPIO_NF_CTRL_INPUT_TM07A
  *             - \ref GPIO_NF_CTRL_INPUT_TM07B
  *             - \ref GPIO_NF_CTRL_INPUT_TM08A
  *             - \ref GPIO_NF_CTRL_INPUT_TM08B
  *             - \ref GPIO_NF_CTRL_INPUT_TM09A
  *             - \ref GPIO_NF_CTRL_INPUT_TM09B
  *             - \ref GPIO_NF_CTRL_INPUT_TM10A
  *             - \ref GPIO_NF_CTRL_INPUT_TM10B
  *             - \ref GPIO_NF_CTRL_INPUT_TM11A
  *             - \ref GPIO_NF_CTRL_INPUT_TM11B
  *             - \ref GPIO_NF_CTRL_INPUT_TM12A
  *             - \ref GPIO_NF_CTRL_INPUT_TM12B
  *             - \ref GPIO_NF_CTRL_INPUT_TM13A
  *             - \ref GPIO_NF_CTRL_INPUT_TM13B
  * @return     None
  * @details    Enable the noise filter of the specified external interrupt.
  * @note       Enable the noise filter while the interrupt or the timer is disabled.
  */
__STATIC_INLINE void GPIO_EnableNf(uint32_t u32Input)
{
    uint16_t shift;

    shift = (uint16_t)(u32Input & GPIO_NF_CTRL_INPUT_Msk);

    if ((u32Input & GPIO_NF_NFCNT0_Msk) != 0U)
    {
        NF->NFCNT0 |= (0x1UL << shift);
    }
    else
    {
        NF->NFCNT1 |= (0x1UL << shift);
    }
}

/**
  * @brief      Port input enable / disable
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Ctl : For each pin (Pn0 to Pn7), set it to 1 for input enable and 0 for input disable.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Enable or disable the input of the specified pin
  */
__STATIC_INLINE void GPIO_SetInputCtrl(GPIO_T *gpio, uint8_t u8Ctl)
{
    gpio->IOPnIE = u8Ctl;
}

/**
  * @brief      Port input disable
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Ctl : For each pin (Pn0 to Pn7), set it to 1 for input disable.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Disable the input of the specified pin
  */
__STATIC_INLINE void GPIO_SetInputCtrlClr(GPIO_T *gpio, uint8_t u8Ctl)
{
    gpio->IOPnIE &= ~(u8Ctl);
}

/**
  * @brief      Port input enable
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Ctl : For each pin (Pn0 to Pn7), set it to 1 for input enable.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Enable the input of the specified pin
  */
__STATIC_INLINE void GPIO_SetInputCtrlSet(GPIO_T *gpio, uint8_t u8Ctl)
{
    gpio->IOPnIE |= u8Ctl;
}

/**
  * @brief      Port output enable / disable
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Ctl : For each pin (Pn0 to Pn7), set it to 1 for output enable and 0 for output disable.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Enable or disable the output of the specified pin
  * @note       When outputting data to a pin, enable the output after setting the data by GPIO_SetOutput.
  */
__STATIC_INLINE void GPIO_SetOutputCtrl(GPIO_T *gpio, uint8_t u8Ctl)
{
    gpio->IOPnOE = u8Ctl;
}

/**
  * @brief      Port output disable
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Ctl : For each pin (Pn0 to Pn7), set it to 1 for output disable.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Disable the output of the specified pin
  */
__STATIC_INLINE void GPIO_SetOutputCtrlClr(GPIO_T *gpio, uint8_t u8Ctl)
{
    gpio->IOPnOE &= ~(u8Ctl);
}

/**
  * @brief      Port output enable
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Ctl : For each pin (Pn0 to Pn7), set it to 1 for output enable.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Enable the output of the specified pin
  * @note       When outputting data to a pin, enable the output after setting the data by GPIO_SetOutput.
  */
__STATIC_INLINE void GPIO_SetOutputCtrlSet(GPIO_T *gpio, uint8_t u8Ctl)
{
    gpio->IOPnOE |= u8Ctl;
}

/**
  * @brief      Get Port input data
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @return     The specified port input data
  * @details    Get the IN register of specified GPIO port.
  * @note       When reading a pin input data, read the value after enabling the input by GPIO_SetInputCtrl.
  *             When the input is disabled, "0" is always read out.
  * @note       The value is the value before noise filter.
  */
__STATIC_INLINE uint8_t GPIO_GetInput(GPIO_T const *gpio)
{
    return (gpio->IOPnIN);
}

/**
  * @brief      Set GPIO Port OUT Data
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Out : GPIO port data.
  * @return     None
  * @details    Set the Data into specified GPIO port.
  */
__STATIC_INLINE void GPIO_SetOutput(GPIO_T *gpio, uint8_t u8Out)
{
    gpio->IOPnOUT = u8Out;
}

/**
  * @brief      Clear output data of specified pin
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Clr : For each pin (Pn0 to Pn7), set it to 1 to clear it and 0 to not clear it.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Clear the output data of the specified pin of the GPIO port
  */
__STATIC_INLINE void GPIO_SetOutputClr(GPIO_T *gpio, uint8_t u8Clr)
{
    gpio->IOPnCLR = u8Clr;
}

/**
  * @brief      Set output data of specified pin
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Set : For each pin (Pn0 to Pn7), set it to 1 if you want to set it (set the output data to 1),
  *                     or set it to 0 if you do not want to set it.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Set the output data of the specified pin of the GPIO port to 1.
  */
__STATIC_INLINE void GPIO_SetOutputSet(GPIO_T *gpio, uint8_t u8Set)
{
    gpio->IOPnSET = u8Set;
}

/**
  * @brief      Invert the output data of the specified pin
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO7, GPIO8).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  * @param[in]  u8Tgl : For each pin (Pn0 to Pn7), set it to 1 if you want to invert it,
  *                     or set it to 0 if you do not want to invert it.
  *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
  * @return     None
  * @details    Invert the output data of the specified pin of the GPIO port.
  */
__STATIC_INLINE void GPIO_SetOutputToggle(GPIO_T *gpio, uint8_t u8Tgl)
{
    gpio->IOPnTGL = u8Tgl;
}

/**
  * @brief      Nch open drain output control of the specified pin
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO1, GPIO5, GPIO6, GPIO7).
  *             - \ref GPIO1
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  * @param[in]  u8Odc : Pin of the specified port. Select from the macros below.
  *                     (The logical sum of multiple macros is also possible.)
  *              | GPIO1            | GPIO5            | GPIO6            | GPIO7            |
  *              |:-----------------|:-----------------|:-----------------|:-----------------|
  *              | \ref GPIO_P10ODC | \ref GPIO_P52ODC | \ref GPIO_P60ODC | \ref GPIO_P70ODC |
  *              | \ref GPIO_P11ODC | \ref GPIO_P53ODC | \ref GPIO_P61ODC | \ref GPIO_P71ODC |
  *              | \ref GPIO_P12ODC | \ref GPIO_P54ODC | \ref GPIO_P62ODC | \ref GPIO_P72ODC |
  *              | \ref GPIO_P13ODC | \ref GPIO_P55ODC | \ref GPIO_P63ODC | \ref GPIO_P73ODC |
  *              |                  | \ref GPIO_P56ODC | \ref GPIO_P64ODC | \ref GPIO_P74ODC |
  *              |                  | \ref GPIO_P57ODC | \ref GPIO_P65ODC | \ref GPIO_P75ODC |
  *              |                  |                  | \ref GPIO_P66ODC | \ref GPIO_P76ODC |
  *              |                  |                  | \ref GPIO_P67ODC | \ref GPIO_P77ODC |
  * @param[in]  u8value : Nch open drain output selection.
  *             - \ref GPIO_ODC_PUSHPULL
  *             - \ref GPIO_ODC_NCH_OPENDRAIN
  * @return     None
  * @details    Set Nch open drain / push pull output of the specified pin of GPIO port
  */
__STATIC_INLINE void GPIO_SetOpenDrainCtrl(GPIO_T *gpio, uint8_t u8Odc, uint8_t u8value)
{
    if (u8value == GPIO_ODC_NCH_OPENDRAIN)
    {
        gpio->IOPnODC |= u8Odc;
    }
    else
    {
        gpio->IOPnODC &= ~(u8Odc);
    }
}

/**
  * @brief      Input level selection of the specified pin
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO5, GPIO6).
  *             - \ref GPIO5
  *             - \ref GPIO6
  * @param[in]  u8Ilv : Pin of the specified port. Select from the macros below.
  *              | GPIO5            | GPIO6            |
  *              |:-----------------|:-----------------|
  *              | \ref GPIO_P57ILV | \ref GPIO_P60ILV |
  * @param[in]  u8value : Input level selection.
  *             - \ref GPIO_ILV_VDD33
  *             - \ref GPIO_ILV_FIX
  * @return     None
  * @details    Select Input level of the specified pin of GPIO port.
  */
__STATIC_INLINE void GPIO_SetInputLevel(GPIO_T *gpio, uint8_t u8Ilv, uint8_t u8value)
{
    if (u8value == GPIO_ILV_FIX)
    {
        gpio->IOPnILV |= u8Ilv;
    }
    else
    {
        gpio->IOPnILV &= ~(u8Ilv);
    }
}


/*-----------------------------*/
/* BSP API function prototypes */
/*-----------------------------*/
void GPIO_DisableInt(uint8_t u8Irqno);
void GPIO_EnableInt(INTCG_MD_T *intcg_eint, uint8_t u8Irqno, uint8_t u8Edge, uint8_t u8Trigger);
void GPIO_SetFunctionMode(GPIO_MD_T *gpio_md, uint8_t u8pin, uint32_t u32value);
void GPIO_SetFpsAFunction(FPSA_T *fpsa, uint32_t u32value);
void GPIO_SetFpsBFunction(FPSB_T *fpsb, uint32_t u32value);
void GPIO_SetPullCtrl(GPIO_T *gpio, uint8_t u8pin, uint8_t u8value);
void GPIO_SetOutputCurrentDrive(GPIO_T *gpio, uint8_t u8pin, uint8_t u8value);
void GPIO_SetNfClk(uint32_t u32Input, uint32_t u32smp);
void GPIO_SetOutputProtectionPolarity(uint32_t u32Profactor, uint16_t u16Polality);
uint32_t GPIO_IsOutputProtectionDetect(uint32_t u32Profactor);
void GPIO_ClearOutputProtection(uint32_t u32Profactor);

/*@}*/ /* end of group GPIO_EXPORTED_FUNCTIONS */

/*@}*/ /* end of group GPIO_Driver */

/*@}*/ /* end of group Standard_Driver */

#endif  /* __GPIO_H__ */

/*** (C) COPYRIGHT 2022 Nuvoton Technology Corp. Japan ***/
