/**************************************************************************//**
 * @file     gpio.h
 * @version  V1.00
 * @brief    KM1M4B series GPIO Driver Header File
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
/*  Nch open drain output control definitions.                                                             */
/*---------------------------------------------------------------------------------------------------------*/
/* Pin of the specified port */
#define GPIO_P00ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P00 Nch open drain selection \hideinitializer */
#define GPIO_P01ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< P01 Nch open drain selection \hideinitializer */
#define GPIO_P02ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P02 Nch open drain selection \hideinitializer */
#define GPIO_P10ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P10 Nch open drain selection \hideinitializer */
#define GPIO_P22ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P22 Nch open drain selection \hideinitializer */
#define GPIO_P23ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P23 Nch open drain selection \hideinitializer */
#define GPIO_P24ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< P24 Nch open drain selection \hideinitializer */
#define GPIO_P30ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P30 Nch open drain selection \hideinitializer */
#define GPIO_P80ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P80 Nch open drain selection \hideinitializer */
#define GPIO_P81ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< P81 Nch open drain selection \hideinitializer */
#define GPIO_P82ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P82 Nch open drain selection \hideinitializer */
#define GPIO_P90ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P90 Nch open drain selection \hideinitializer */
#define GPIO_P91ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< P91 Nch open drain selection \hideinitializer */
#define GPIO_P92ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P92 Nch open drain selection \hideinitializer */
#define GPIO_P93ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P93 Nch open drain selection \hideinitializer */
#define GPIO_P96ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< P96 Nch open drain selection \hideinitializer */
#define GPIO_PA2ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< PA2 Nch open drain selection \hideinitializer */
#define GPIO_PA3ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< PA3 Nch open drain selection \hideinitializer */
#define GPIO_PA4ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< PA4 Nch open drain selection \hideinitializer */
#define GPIO_PA5ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< PA5 Nch open drain selection \hideinitializer */
#define GPIO_PB0ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< PB0 Nch open drain selection \hideinitializer */
#define GPIO_PB1ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< PB1 Nch open drain selection \hideinitializer */
#define GPIO_PB2ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< PB2 Nch open drain selection \hideinitializer */
#define GPIO_PB3ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< PB3 Nch open drain selection \hideinitializer */
#define GPIO_PB4ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< PB4 Nch open drain selection \hideinitializer */
#define GPIO_PB5ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< PB5 Nch open drain selection \hideinitializer */
#define GPIO_PB6ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< PB6 Nch open drain selection \hideinitializer */
#define GPIO_PB7ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< PB7 Nch open drain selection \hideinitializer */
#define GPIO_PD0ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< PD0 Nch open drain selection \hideinitializer */
#define GPIO_PD1ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< PD1 Nch open drain selection \hideinitializer */
#define GPIO_PD2ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< PD2 Nch open drain selection \hideinitializer */
#define GPIO_PD3ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< PD3 Nch open drain selection \hideinitializer */
#define GPIO_PD4ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< PD4 Nch open drain selection \hideinitializer */
#define GPIO_PD5ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< PD5 Nch open drain selection \hideinitializer */
#define GPIO_PD6ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< PD6 Nch open drain selection \hideinitializer */
#define GPIO_PD7ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< PD7 Nch open drain selection \hideinitializer */
#define GPIO_PE1ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< PE1 Nch open drain selection \hideinitializer */
#define GPIO_PE4ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< PE4 Nch open drain selection \hideinitializer */
#define GPIO_PF1ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< PF1 Nch open drain selection \hideinitializer */
#define GPIO_PF2ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< PF2 Nch open drain selection \hideinitializer */

/* Nch open drain output selection */
#define GPIO_ODC_PUSHPULL               (0U)                                    /*!< Push-pull output \hideinitializer */
#define GPIO_ODC_NCH_OPENDRAIN          (1U)                                    /*!< Nch open drain output \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin-Function definitions.                                                                              */
/*---------------------------------------------------------------------------------------------------------*/
/********************* Bit definition of IOP0MD register **********************/
#define GPIO_P00MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P00MD_IRQ02                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 02 pin. \hideinitializer */
#define GPIO_P00MD_SBI4                 (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBI4 input pin. \hideinitializer */
#define GPIO_P00MD_SBO4                 (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO4 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_P00MD_ADST1                (0x04UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< ADST1 output pin. \hideinitializer */

#define GPIO_P01MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P01MD_IRQ04                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 04 pin. \hideinitializer */
#define GPIO_P01MD_IRQ15                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 15 pin. \hideinitializer */
#define GPIO_P01MD_GPWMBCST6            (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWMBCST6 output pin. \hideinitializer */
#define GPIO_P01MD_ADST2                (0x04UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< ADST2 output pin. \hideinitializer */
#define GPIO_P01MD_SBT4                 (0x05UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBT4 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P02MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P02MD_IRQ05                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 05 pin. \hideinitializer */
#define GPIO_P02MD_TM15B                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 15 input/output pin B. \hideinitializer */
#define GPIO_P02MD_SBCS1                (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBCS1 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P02MD_SBI4                 (0x04UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBI4 input pin. \hideinitializer */
#define GPIO_P02MD_SBO4                 (0x05UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBO4 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_P02MD_ADST0                (0x06UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< ADST0 output pin. \hideinitializer */

/********************* Bit definition of IOP1MD register **********************/
#define GPIO_P10MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P10MD_IRQ00                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 00 pin. \hideinitializer */
#define GPIO_P10MD_IRQ15                (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 15 pin. \hideinitializer */
#define GPIO_P10MD_IRQ33                (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 33 pin. \hideinitializer */
#define GPIO_P10MD_TM12B                (0x04UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 12 input/output pin B. \hideinitializer */
#define GPIO_P10MD_TM14B                (0x05UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 14 input/output pin B. \hideinitializer */
#define GPIO_P10MD_SBCS2                (0x06UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBCS2 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P11MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P11MD_IRQ01                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 01 pin. \hideinitializer */
#define GPIO_P11MD_TM03A                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 03 input/output pin A. \hideinitializer */
#define GPIO_P11MD_TM12A                (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 12 input/output pin A. \hideinitializer */
#define GPIO_P11MD_GPWM00               (0x04UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWM00 output pin. \hideinitializer */

/********************* Bit definition of IOP2MD register **********************/
#define GPIO_P20MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P20MD_IRQ07                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 07 pin. \hideinitializer */
#define GPIO_P20MD_IRQ20                (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 20 pin. \hideinitializer */
#define GPIO_P20MD_IRQ34                (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 34 pin. \hideinitializer */
#define GPIO_P20MD_TM11B                (0x04UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 11 input/output pin B. \hideinitializer */
#define GPIO_P20MD_TM15A                (0x05UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 15 input/output pin A. \hideinitializer */
#define GPIO_P20MD_ADIN20               (0x06UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< A/D converter analog input 20 pin. \hideinitializer */
#define GPIO_P20MD_CMPREF01             (0x06UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 01 reference input pin. \hideinitializer */

#define GPIO_P21MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P21MD_IRQ06                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 06 pin. \hideinitializer */
#define GPIO_P21MD_IRQ21                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 21 pin. \hideinitializer */
#define GPIO_P21MD_TM04B                (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 04 input/output pin B. \hideinitializer */
#define GPIO_P21MD_TM11A                (0x04UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 11 input/output pin A. \hideinitializer */
#define GPIO_P21MD_TM14A                (0x05UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 14 input/output pin A. \hideinitializer */
#define GPIO_P21MD_ADIN21               (0x06UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< A/D converter analog input 21 pin. \hideinitializer */
#define GPIO_P21MD_CMPREF11             (0x06UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Comparator 11 reference input pin. \hideinitializer */
#define GPIO_P21MD_TRCD3                (0x07UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TRCD3 output pin. \hideinitializer */

#define GPIO_P22MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P22MD_IRQ22                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 22 pin. \hideinitializer */
#define GPIO_P22MD_IRQ32                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 32 pin. \hideinitializer */
#define GPIO_P22MD_TM04A                (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 04 input/output pin A. \hideinitializer */
#define GPIO_P22MD_TM13A                (0x04UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 13 input/output pin A. \hideinitializer */
#define GPIO_P22MD_SBI3                 (0x05UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBI3 input pin. \hideinitializer */
#define GPIO_P22MD_SBO3                 (0x06UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBO3 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_P22MD_CMPOUT00             (0x07UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Comparator 00 output pin. \hideinitializer */
#define GPIO_P22MD_CMPOUT01             (0x08UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Comparator 01 output pin. \hideinitializer */
#define GPIO_P22MD_TRCD2                (0x09UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TRCD2 output pin. \hideinitializer */

#define GPIO_P23MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P23MD_TM02A                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 02 input/output pin A. \hideinitializer */
#define GPIO_P23MD_TM07A                (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 07 input/output pin A. \hideinitializer */
#define GPIO_P23MD_SBI3                 (0x03UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBI3 input pin. \hideinitializer */
#define GPIO_P23MD_SBO3                 (0x04UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBO3 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_P23MD_GPWMBCST2            (0x05UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWMBCST2 output pin. \hideinitializer */
#define GPIO_P23MD_GPWMBCST5            (0x06UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWMBCST5 output pin. \hideinitializer */
#define GPIO_P23MD_CMPOUT10             (0x07UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Comparator 10 output pin. \hideinitializer */
#define GPIO_P23MD_CMPOUT11             (0x08UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Comparator 11 output pin. \hideinitializer */
#define GPIO_P23MD_CKMREF               (0x09UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< CKMREF input pin. \hideinitializer */
#define GPIO_P23MD_TRCD1                (0x0AUL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TRCD1 output pin. \hideinitializer */

#define GPIO_P24MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P24MD_TM02B                (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 02 input/output pin B. \hideinitializer */
#define GPIO_P24MD_TM06A                (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 06 input/output pin A. \hideinitializer */
#define GPIO_P24MD_SBT3                 (0x03UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBT3 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P24MD_GPWMBCST1            (0x04UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWMBCST1 output pin. \hideinitializer */
#define GPIO_P24MD_GPWMBCST4            (0x05UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWMBCST4 output pin. \hideinitializer */
#define GPIO_P24MD_CMPOUT00             (0x06UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Comparator 00 output pin. \hideinitializer */
#define GPIO_P24MD_CMPOUT01             (0x07UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Comparator 01 output pin. \hideinitializer */
#define GPIO_P24MD_DA0OUT               (0x08UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< DA0OUT output pin. \hideinitializer */
#define GPIO_P24MD_TRCD0                (0x09UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TRCD0 output pin. \hideinitializer */

/********************* Bit definition of IOP3MD register **********************/
#define GPIO_P30MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P30MD_IRQ07                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 07 pin. \hideinitializer */
#define GPIO_P30MD_TM06B                (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 06 input/output pin B. \hideinitializer */
#define GPIO_P30MD_TM10B                (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 10 input/output pin B. \hideinitializer */
#define GPIO_P30MD_TM12B                (0x04UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 12 input/output pin B. \hideinitializer */
#define GPIO_P30MD_SBCS3                (0x05UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBCS3 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P30MD_GPWMBCST0            (0x06UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< GPWMBCST0 output pin. \hideinitializer */
#define GPIO_P30MD_GPWMBCST3            (0x07UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< GPWMBCST3 output pin. \hideinitializer */
#define GPIO_P30MD_CMPOUT10             (0x08UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 10 output pin. \hideinitializer */
#define GPIO_P30MD_CMPOUT11             (0x09UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 11 output pin. \hideinitializer */
#define GPIO_P30MD_TRCSWO               (0x0AUL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TRCSWO output pin. \hideinitializer */

#define GPIO_P31MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P31MD_IRQ06                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 06 pin. \hideinitializer */
#define GPIO_P31MD_IRQ36                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 36 pin. \hideinitializer */
#define GPIO_P31MD_TM10A                (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 10 input/output pin A. \hideinitializer */
#define GPIO_P31MD_TM12A                (0x04UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 12 input/output pin A. \hideinitializer */
#define GPIO_P31MD_TRCCLK               (0x05UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TRCCLK output pin. \hideinitializer */

#define GPIO_P32MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P32MD_TM06A                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 06 input/output pin A. \hideinitializer */
#define GPIO_P32MD_TM11B                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 11 input/output pin B. \hideinitializer */
#define GPIO_P32MD_GPWM10               (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< GPWM10 output pin. \hideinitializer */

#define GPIO_P33MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P33MD_TM00A                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 00 input/output pin A. \hideinitializer */
#define GPIO_P33MD_TM11A                (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 11 input/output pin A. \hideinitializer */
#define GPIO_P33MD_GPWM00               (0x03UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWM00 output pin. \hideinitializer */

/********************* Bit definition of IOP4MD register **********************/
#define GPIO_P40MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P40MD_ADIN00               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< A/D converter analog input 00 pin. \hideinitializer */
#define GPIO_P40MD_VGAP00               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< VGAP00 input pin. \hideinitializer */
#define GPIO_P40MD_CMPIN01              (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 01 input pin. \hideinitializer */

#define GPIO_P41MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P41MD_ADIN01               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< A/D converter analog input 01 pin. \hideinitializer */
#define GPIO_P41MD_VGAP01               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< VGAP01 input pin. \hideinitializer */

#define GPIO_P42MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P42MD_ADIN02               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< A/D converter analog input 02 pin. \hideinitializer */
#define GPIO_P42MD_VGAP02               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< VGAP02 input pin. \hideinitializer */

#define GPIO_P43MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P43MD_ADIN03               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< A/D converter analog input 03 pin. \hideinitializer */

#define GPIO_P44MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P44MD_ADIN04               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< A/D converter analog input 04 pin. \hideinitializer */
#define GPIO_P44MD_VGAP12               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< VGAP12 input pin. \hideinitializer */
#define GPIO_P44MD_CMPIN10              (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Comparator 10 input pin. \hideinitializer */
#define GPIO_P44MD_CMPIN11              (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Comparator 11 input pin. \hideinitializer */

#define GPIO_P45MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P45MD_ADIN05               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< A/D converter analog input 05 pin. \hideinitializer */
#define GPIO_P45MD_VGAP11               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< VGAP11 input pin. \hideinitializer */
#define GPIO_P45MD_CMPIN00              (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Comparator 00 input pin. \hideinitializer */
#define GPIO_P45MD_CMPIN01              (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Comparator 01 input pin. \hideinitializer */

#define GPIO_P46MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P46MD_ADIN06               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< A/D converter analog input 06 pin. \hideinitializer */
#define GPIO_P46MD_VGAP10               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< VGAP10 input pin. \hideinitializer */
#define GPIO_P46MD_CMPIN11              (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Comparator 11 input pin. \hideinitializer */

#define GPIO_P47MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P47MD_ADIN07               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< A/D converter analog input 07 pin. \hideinitializer */

/********************* Bit definition of IOP5MD register **********************/
#define GPIO_P50MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P50MD_ADIN08               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< A/D converter analog input 08 pin. \hideinitializer */
#define GPIO_P50MD_VGAN1                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< VGAN1 input pin. \hideinitializer */
#define GPIO_P50MD_CMPIN10              (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 10 input pin. \hideinitializer */
#define GPIO_P50MD_CMPREF10             (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Comparator 10 reference input pin. \hideinitializer */

#define GPIO_P51MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P51MD_IRQ33                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 33 pin. \hideinitializer */
#define GPIO_P51MD_ADIN09               (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< A/D converter analog input 09 pin. \hideinitializer */

#define GPIO_P52MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P52MD_IRQ00                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 00 pin. \hideinitializer */
#define GPIO_P52MD_ADIN10               (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< A/D converter analog input 10 pin. \hideinitializer */

#define GPIO_P53MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P53MD_IRQ01                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 01 pin. \hideinitializer */
#define GPIO_P53MD_ADIN11               (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< A/D converter analog input 11 pin. \hideinitializer */

#define GPIO_P54MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P54MD_IRQ02                (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 02 pin. \hideinitializer */
#define GPIO_P54MD_ADIN12               (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< A/D converter analog input 12 pin. \hideinitializer */

#define GPIO_P55MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P55MD_IRQ03                (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 03 pin. \hideinitializer */
#define GPIO_P55MD_ADIN13               (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< A/D converter analog input 13 pin. \hideinitializer */

/********************* Bit definition of IOP6MD register **********************/
#define GPIO_P60MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P60MD_IRQ04                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 04 pin. \hideinitializer */
#define GPIO_P60MD_ADIN14               (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< A/D converter analog input 14 pin. \hideinitializer */

#define GPIO_P61MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P61MD_IRQ05                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 05 pin. \hideinitializer */
#define GPIO_P61MD_ADIN15               (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< A/D converter analog input 15 pin. \hideinitializer */

#define GPIO_P62MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P62MD_IRQ06                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 06 pin. \hideinitializer */
#define GPIO_P62MD_ADIN16               (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< A/D converter analog input 16 pin. \hideinitializer */

#define GPIO_P63MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P63MD_IRQ07                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 07 pin. \hideinitializer */
#define GPIO_P63MD_ADIN17               (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< A/D converter analog input 17 pin. \hideinitializer */

#define GPIO_P64MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P64MD_ADIN18               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< A/D converter analog input 18 pin. \hideinitializer */

#define GPIO_P65MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P65MD_ADIN19               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< A/D converter analog input 19 pin. \hideinitializer */

/********************* Bit definition of IOP7MD register **********************/
#define GPIO_P70MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P70MD_IRQ05                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 05 pin. \hideinitializer */
#define GPIO_P70MD_IRQ10                (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 10 pin. \hideinitializer */

#define GPIO_P71MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P71MD_TM00A                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 00 input/output pin A. \hideinitializer */
#define GPIO_P71MD_GPWM00               (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWM00 output pin. \hideinitializer */

#define GPIO_P72MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P72MD_TM01A                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 01 input/output pin A. \hideinitializer */
#define GPIO_P72MD_GPWM10               (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< GPWM10 output pin. \hideinitializer */

#define GPIO_P73MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P73MD_TM02A                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 02 input/output pin A. \hideinitializer */
#define GPIO_P73MD_GPWM20               (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWM20 output pin. \hideinitializer */

#define GPIO_P74MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P74MD_TM03A                (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 03 input/output pin A. \hideinitializer */
#define GPIO_P74MD_GPWM01               (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWM01 output pin. \hideinitializer */

#define GPIO_P75MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P75MD_TM04A                (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 04 input/output pin A. \hideinitializer */
#define GPIO_P75MD_GPWM11               (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< GPWM11 output pin. \hideinitializer */

#define GPIO_P76MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P76MD_TM05A                (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Timer 05 input/output pin A. \hideinitializer */
#define GPIO_P76MD_GPWM21               (0x02UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< GPWM21 output pin. \hideinitializer */

/********************* Bit definition of IOP8MD register **********************/
#define GPIO_P80MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P80MD_IRQ34                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 34 pin. \hideinitializer */
#define GPIO_P80MD_TM13A                (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 13 input/output pin A. \hideinitializer */
#define GPIO_P80MD_SBI2                 (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBI2 input pin. \hideinitializer */
#define GPIO_P80MD_SBO2                 (0x04UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO2 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_P80MD_SBT2                 (0x05UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBT2 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P81MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P81MD_TM04B                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 04 input/output pin B. \hideinitializer */
#define GPIO_P81MD_TM07A                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 07 input/output pin A. \hideinitializer */
#define GPIO_P81MD_SBI2                 (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI2 input pin. \hideinitializer */
#define GPIO_P81MD_SBO2                 (0x04UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBO2 input/inout (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_P82MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P82MD_TM04A                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 04 input/output pin A. \hideinitializer */
#define GPIO_P82MD_TM06A                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 06 input/output pin A. \hideinitializer */
#define GPIO_P82MD_SBT2                 (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT2 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOP9MD register **********************/
#define GPIO_P90MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P90MD_GPWM51               (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< GPWM51 output pin. \hideinitializer */
#define GPIO_P90MD_SBI6                 (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBI6 input pin. \hideinitializer */
#define GPIO_P90MD_SBO6                 (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO6 input/inout (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_P91MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P91MD_GPWM41               (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWM41 output pin. \hideinitializer */
#define GPIO_P91MD_SBI6                 (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI6 input pin. \hideinitializer */
#define GPIO_P91MD_SBO6                 (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBO6 input/inout (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_P92MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P92MD_GPWM31               (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< GPWM31 output pin. \hideinitializer */
#define GPIO_P92MD_SBT6                 (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT6 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P93MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P93MD_GPWM50               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWM50 output pin. \hideinitializer */
#define GPIO_P93MD_SBCS6                (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBCS6 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P94MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P94MD_GPWM40               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWM40 output pin. \hideinitializer */

#define GPIO_P95MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P95MD_GPWM30               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< GPWM30 output pin. \hideinitializer */

#define GPIO_P96MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P96MD_IRQ04                (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External interrupt input 04 pin. \hideinitializer */
#define GPIO_P96MD_IRQ11                (0x02UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External interrupt input 11 pin. \hideinitializer */
#define GPIO_P96MD_GPWMBCST7            (0x03UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< GPWMBCST7 output pin. \hideinitializer */
#define GPIO_P96MD_SBI5                 (0x04UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBI5 input pin. \hideinitializer */
#define GPIO_P96MD_SBO5                 (0x05UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBO5 input/inout (Use Nch open-drain) pin. \hideinitializer */

/********************* Bit definition of IOPAMD register **********************/
#define GPIO_PA0MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA0MD_TM02A                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 02 input/output pin A. \hideinitializer */
#define GPIO_PA0MD_GPWM40               (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< GPWM40 output pin. \hideinitializer */

#define GPIO_PA1MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA1MD_IRQ20                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 20 pin. \hideinitializer */
#define GPIO_PA1MD_TM04A                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 04 input/output pin A. \hideinitializer */
#define GPIO_PA1MD_GPWM30               (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< GPWM30 output pin. \hideinitializer */

#define GPIO_PA2MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA2MD_TM07A                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 07 input/output pin A. \hideinitializer */
#define GPIO_PA2MD_TM13B                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 13 input/output pin B. \hideinitializer */
#define GPIO_PA2MD_SBCS2                (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBCS2 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PA3MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA3MD_IRQ37                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 37 pin. \hideinitializer */
#define GPIO_PA3MD_TM13A                (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 13 input/output pin A. \hideinitializer */
#define GPIO_PA3MD_SBCS3                (0x03UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBCS3 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PA3MD_SBCS5                (0x04UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBCS5 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PA4MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA4MD_IRQ20                (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 20 pin. \hideinitializer */
#define GPIO_PA4MD_TM07B                (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 07 input/output pin B. \hideinitializer */
#define GPIO_PA4MD_TM12B                (0x03UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 12 input/output pin B. \hideinitializer */
#define GPIO_PA4MD_SBT2                 (0x04UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBT2 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PA4MD_SBT3                 (0x05UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBT3 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PA5MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA5MD_IRQ01                (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 01 pin. \hideinitializer */
#define GPIO_PA5MD_IRQ21                (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 21 pin. \hideinitializer */
#define GPIO_PA5MD_TM03B                (0x03UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 03 input/output pin B. \hideinitializer */
#define GPIO_PA5MD_TM12A                (0x04UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 12 input/output pin A. \hideinitializer */
#define GPIO_PA5MD_SBI2                 (0x05UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBI2 input pin. \hideinitializer */
#define GPIO_PA5MD_SBO2                 (0x06UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBO2 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_PA5MD_SBT2                 (0x07UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBT2 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PA5MD_SBI3                 (0x08UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBI3 input pin. \hideinitializer */
#define GPIO_PA5MD_SBO3                 (0x09UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBO3 input/inout (Use Nch open-drain) pin. \hideinitializer */

/********************* Bit definition of IOPBMD register **********************/
#define GPIO_PB0MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB0MD_IRQ22                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 22 pin. \hideinitializer */
#define GPIO_PB0MD_TM00A                (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 00 input/output pin A. \hideinitializer */
#define GPIO_PB0MD_TM11B                (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 11 input/output pin B. \hideinitializer */
#define GPIO_PB0MD_SBI2                 (0x04UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBI2 input pin. \hideinitializer */
#define GPIO_PB0MD_SBO2                 (0x05UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO2 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_PB0MD_SBI3                 (0x06UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBI3 input pin. \hideinitializer */
#define GPIO_PB0MD_SBO3                 (0x07UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO3 input/inout (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_PB1MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB1MD_TM00B                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 00 input/output pin B. \hideinitializer */
#define GPIO_PB1MD_TM11A                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 11 input/output pin A. \hideinitializer */
#define GPIO_PB1MD_SBI2                 (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI2 input pin. \hideinitializer */
#define GPIO_PB1MD_SBO2                 (0x04UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBO2 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_PB1MD_SBT2                 (0x05UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBT2 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PB2MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB2MD_IRQ30                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 30 pin. \hideinitializer */
#define GPIO_PB2MD_TM10B                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 10 input/output pin B. \hideinitializer */
#define GPIO_PB2MD_SBI2                 (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBI2 input pin. \hideinitializer */
#define GPIO_PB2MD_SBO2                 (0x04UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBO2 input/inout(Use Nch open-drain) pin. \hideinitializer */

#define GPIO_PB3MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB3MD_GPWM60               (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< GPWM60 output pin. \hideinitializer */
#define GPIO_PB3MD_TM10A                (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 10 input/output pin A. \hideinitializer */
#define GPIO_PB3MD_SBT2                 (0x03UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBT2 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PB3MD_SBT3                 (0x04UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBT3 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PB3MD_CKMREF               (0x05UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< CKMREF input pin. \hideinitializer */

#define GPIO_PB4MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB4MD_GPWM70               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< GPWM70 output pin. \hideinitializer */
#define GPIO_PB4MD_IRQ03                (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 03 pin. \hideinitializer */
#define GPIO_PB4MD_IRQ12                (0x03UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 12 pin. \hideinitializer */
#define GPIO_PB4MD_SBCS0                (0x04UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBCS0 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PB5MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB5MD_GPWM61               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< GPWM61 output pin. \hideinitializer */
#define GPIO_PB5MD_SBI0                 (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBI0 input pin. \hideinitializer */
#define GPIO_PB5MD_SBO0                 (0x03UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBO0 input/inout(Use Nch open-drain) pin. \hideinitializer */

#define GPIO_PB6MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB6MD_GPWM71               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< GPWM71 output pin. \hideinitializer */
#define GPIO_PB6MD_IRQ05                (0x02UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External interrupt input 05 pin. \hideinitializer */
#define GPIO_PB6MD_SBI0                 (0x03UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBI0 input pin. \hideinitializer */
#define GPIO_PB6MD_SBO0                 (0x04UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBO0 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_PB6MD_SBT0                 (0x05UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBT0 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PB7MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB7MD_SBT0                 (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< SBT0 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOPDMD register **********************/
#define GPIO_PD0MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD0MD_TM06A                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 06 input/output pin A. \hideinitializer */
#define GPIO_PD0MD_SBT3                 (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBT3 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PD1MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD1MD_TM02A                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 02 input/output pin A. \hideinitializer */
#define GPIO_PD1MD_SBI3                 (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI3 input pin. \hideinitializer */
#define GPIO_PD1MD_SBO3                 (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBO3 input/inout (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_PD2MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD2MD_TM01B                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 01 input/output pin B. \hideinitializer */
#define GPIO_PD2MD_TM04A                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer 04 input/output pin A. \hideinitializer */
#define GPIO_PD2MD_SBI3                 (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBI3 input pin. \hideinitializer */
#define GPIO_PD2MD_SBO3                 (0x04UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBO3 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_PD2MD_SBT0                 (0x05UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT0 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PD3MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD3MD_SWDD                 (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SWDD inout pin. \hideinitializer */
#define GPIO_PD3MD_TM00A                (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 00 input/output pin A. \hideinitializer */
#define GPIO_PD3MD_SBI1                 (0x03UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBI1 input pin. \hideinitializer */
#define GPIO_PD3MD_SBO1                 (0x04UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBO1 input/inout (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_PD4MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD4MD_IRQ02                (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 02 pin. \hideinitializer */
#define GPIO_PD4MD_TM00B                (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 00 input/output pin B. \hideinitializer */
#define GPIO_PD4MD_TM06B                (0x03UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 06 input/output pin B. \hideinitializer */
#define GPIO_PD4MD_SBO1                 (0x04UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBO1 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_PD4MD_SBT1                 (0x05UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBT1 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PD5MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD5MD_SWDCLK               (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SWDCLK input pin. \hideinitializer */
#define GPIO_PD5MD_IRQ03                (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 03 pin. \hideinitializer */
#define GPIO_PD5MD_IRQ30                (0x03UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 30 pin. \hideinitializer */
#define GPIO_PD5MD_IRQ36                (0x04UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 36 pin. \hideinitializer */
#define GPIO_PD5MD_SBI1                 (0x05UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBI1 input pin. \hideinitializer */
#define GPIO_PD5MD_SBO1                 (0x06UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBO1 input/inout (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_PD5MD_SBT1                 (0x07UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBT1 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PD6MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD6MD_GPWM71               (0x01UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< GPWM71 output pin. \hideinitializer */
#define GPIO_PD6MD_IRQ05                (0x02UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External interrupt input 05 pin. \hideinitializer */
#define GPIO_PD6MD_TM01A                (0x03UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Timer 01 input/output pin A. \hideinitializer */
#define GPIO_PD6MD_TM15A                (0x04UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Timer 15 input/output pin A. \hideinitializer */
#define GPIO_PD6MD_SBCS1                (0x05UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBCS1 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PD6MD_SBCS3                (0x06UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBCS3 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PD6MD_ADST0                (0x07UL<<GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< ADST0 output pin. \hideinitializer */

#define GPIO_PD7MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD7MD_GPWM70               (0x01UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< GPWM70 output pin. \hideinitializer */
#define GPIO_PD7MD_IRQ31                (0x02UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< External interrupt input 31 pin. \hideinitializer */
#define GPIO_PD7MD_IRQ35                (0x03UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< External interrupt input 35 pin. \hideinitializer */
#define GPIO_PD7MD_TM14A                (0x04UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Timer 14 input/output pin A. \hideinitializer */
#define GPIO_PD7MD_SBCS3                (0x05UL<<GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< SBCS3 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOPEMD register **********************/
#define GPIO_PE0MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PE0MD_TM01B                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 01 input/output pin B. \hideinitializer */
#define GPIO_PE0MD_TM05B                (0x02UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 05 input/output pin B. \hideinitializer */
#define GPIO_PE0MD_TM14B                (0x03UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 14 input/output pin B. \hideinitializer */

#define GPIO_PE1MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PE1MD_TM05A                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 05 input/output pin A. \hideinitializer */
#define GPIO_PE1MD_TM15B                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 15 input/output pin B. \hideinitializer */
#define GPIO_PE1MD_SBCS0                (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBCS0 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PE2MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PE2MD_NMI                  (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< NMI input pin. \hideinitializer */
#define GPIO_PE2MD_IRQ13                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 13 pin. \hideinitializer */

#define GPIO_PE3MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PE3MD_IRQ02                (0x01UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 02 pin. \hideinitializer */
#define GPIO_PE3MD_IRQ14                (0x02UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 14 pin. \hideinitializer */
#define GPIO_PE3MD_TM12B                (0x03UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer 12 input/output pin B. \hideinitializer */

#define GPIO_PE4MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PE4MD_IRQ01                (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 01 pin. \hideinitializer */
#define GPIO_PE4MD_IRQ13                (0x02UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 13 pin. \hideinitializer */
#define GPIO_PE4MD_TM12A                (0x03UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer 12 input/output pin A. \hideinitializer */
#define GPIO_PE4MD_SBCS4                (0x04UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBCS4 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PE5MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PE5MD_IRQ00                (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 00 pin. \hideinitializer */

/********************* Bit definition of IOPFMD register **********************/
#define GPIO_PF0MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PF0MD_TM15A                (0x01UL<<GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer 15 input/output pin A. \hideinitializer */

#define GPIO_PF1MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PF1MD_TM00A                (0x01UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 00 input/output pin A. \hideinitializer */
#define GPIO_PF1MD_TM02B                (0x02UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer 02 input/output pin B. \hideinitializer */
#define GPIO_PF1MD_SBT5                 (0x03UL<<GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBT5 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_PF2MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PF2MD_IRQ14                (0x01UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 14 pin. \hideinitializer */
#define GPIO_PF2MD_IRQ20                (0x02UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 20 pin. \hideinitializer */
#define GPIO_PF2MD_IRQ37                (0x03UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 37 pin. \hideinitializer */
#define GPIO_PF2MD_SBI5                 (0x04UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBI5 input pin. \hideinitializer */
#define GPIO_PF2MD_SBO5                 (0x05UL<<GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBO5 input/inout (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_PF3MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_PF4MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PF4MD_ADIN22               (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< A/D converter analog input 22 pin. \hideinitializer */
#define GPIO_PF4MD_VGAN0                (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< VGAN0 input pin. \hideinitializer */
#define GPIO_PF4MD_CMPIN00              (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Comparator 00 input pin. \hideinitializer */
#define GPIO_PF4MD_CMPREF00             (0x01UL<<GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Comparator 00 reference input pin. \hideinitializer */

#define GPIO_PF5MD_GPIO                 (0x00UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PF5MD_IRQ34                (0x01UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 34 pin. \hideinitializer */
#define GPIO_PF5MD_TM03B                (0x02UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 03 input/output pin B. \hideinitializer */
#define GPIO_PF5MD_TM12B                (0x03UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer 12 input/output pin B. \hideinitializer */
#define GPIO_PF5MD_GPWM01               (0x04UL<<GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< GPWM01 output pin. \hideinitializer */

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
#define GPIO_NF_NFCNT2_Msk               (0x00040000U)       /*!< NFCNT2 register \hideinitializer */
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
#define GPIO_NF_CTRL_INPUT_IRQ10        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT8_Pos)       /*!< Noise Filter input signal : IRQ10 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ11        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT9_Pos)       /*!< Noise Filter input signal : IRQ11 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ12        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT10_Pos)      /*!< Noise Filter input signal : IRQ12 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ13        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT11_Pos)      /*!< Noise Filter input signal : IRQ13 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ14        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT12_Pos)      /*!< Noise Filter input signal : IRQ14 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ15        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT13_Pos)      /*!< Noise Filter input signal : IRQ15 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ20        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT16_Pos)      /*!< Noise Filter input signal : IRQ20 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ21        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT17_Pos)      /*!< Noise Filter input signal : IRQ21 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ22        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT18_Pos)      /*!< Noise Filter input signal : IRQ22 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ30        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT24_Pos)      /*!< Noise Filter input signal : IRQ30 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ31        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT25_Pos)      /*!< Noise Filter input signal : IRQ31 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ32        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT26_Pos)      /*!< Noise Filter input signal : IRQ32 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ33        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT27_Pos)      /*!< Noise Filter input signal : IRQ33 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ34        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT28_Pos)      /*!< Noise Filter input signal : IRQ34 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ35        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT29_Pos)      /*!< Noise Filter input signal : IRQ35 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ36        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT30_Pos)      /*!< Noise Filter input signal : IRQ36 \hideinitializer */
#define GPIO_NF_CTRL_INPUT_IRQ37        (GPIO_NF_NFCNT0_Msk | NF_NFCNT0_CNT31_Pos)      /*!< Noise Filter input signal : IRQ37 \hideinitializer */
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
#define GPIO_NF_CTRL_INPUT_TM10A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT16_Pos)      /*!< Noise Filter input signal : TM10A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM10B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT17_Pos)      /*!< Noise Filter input signal : TM10B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM11A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT18_Pos)      /*!< Noise Filter input signal : TM11A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM11B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT19_Pos)      /*!< Noise Filter input signal : TM11B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM12A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT20_Pos)      /*!< Noise Filter input signal : TM12A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM12B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT21_Pos)      /*!< Noise Filter input signal : TM12B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM13A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT22_Pos)      /*!< Noise Filter input signal : TM13A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM13B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT23_Pos)      /*!< Noise Filter input signal : TM13B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM14A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT24_Pos)      /*!< Noise Filter input signal : TM14A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM14B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT25_Pos)      /*!< Noise Filter input signal : TM14B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM15A        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT26_Pos)      /*!< Noise Filter input signal : TM15A \hideinitializer */
#define GPIO_NF_CTRL_INPUT_TM15B        (GPIO_NF_NFCNT1_Msk | NF_NFCNT1_CNT27_Pos)      /*!< Noise Filter input signal : TM15B \hideinitializer */
#define GPIO_NF_CTRL_INPUT_NMI          (GPIO_NF_NFCNT2_Msk | NF_NFCNT2_CNT0_Pos)       /*!< Noise Filter input signal : NMI   \hideinitializer */
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
#define GPIO_NF_NFCK6_Msk               (0x00400000U)       /*!< NFCK6 register \hideinitializer */
#define GPIO_NF_NFCK7_Msk               (0x00800000U)       /*!< NFCK7 register \hideinitializer */
#define GPIO_NF_NFCK8_Msk               (0x01000000U)       /*!< NFCK8 register \hideinitializer */
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
#define GPIO_NF_CLK_INPUT_IRQ10        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK0_Pos)           /*!< Noise Filter input signal : IRQ10 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ11        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK1_Pos)           /*!< Noise Filter input signal : IRQ11 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ12        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK2_Pos)           /*!< Noise Filter input signal : IRQ12 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ13        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK3_Pos)           /*!< Noise Filter input signal : IRQ13 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ14        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK4_Pos)           /*!< Noise Filter input signal : IRQ14 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ15        (GPIO_NF_NFCK1_Msk | NF_NFCK1_CK5_Pos)           /*!< Noise Filter input signal : IRQ15 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ20        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK0_Pos)           /*!< Noise Filter input signal : IRQ20 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ21        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK1_Pos)           /*!< Noise Filter input signal : IRQ21 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ22        (GPIO_NF_NFCK2_Msk | NF_NFCK2_CK2_Pos)           /*!< Noise Filter input signal : IRQ22 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ30        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK0_Pos)           /*!< Noise Filter input signal : IRQ30 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ31        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK1_Pos)           /*!< Noise Filter input signal : IRQ31 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ32        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK2_Pos)           /*!< Noise Filter input signal : IRQ32 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ33        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK3_Pos)           /*!< Noise Filter input signal : IRQ33 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ34        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK4_Pos)           /*!< Noise Filter input signal : IRQ34 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ35        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK5_Pos)           /*!< Noise Filter input signal : IRQ35 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ36        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK6_Pos)           /*!< Noise Filter input signal : IRQ36 \hideinitializer */
#define GPIO_NF_CLK_INPUT_IRQ37        (GPIO_NF_NFCK3_Msk | NF_NFCK3_CK7_Pos)           /*!< Noise Filter input signal : IRQ37 \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM00A        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK0_Pos)           /*!< Noise Filter input signal : TM00A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM00B        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK1_Pos)           /*!< Noise Filter input signal : TM00B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM01A        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK2_Pos)           /*!< Noise Filter input signal : TM01A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM01B        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK3_Pos)           /*!< Noise Filter input signal : TM01B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM02A        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK4_Pos)           /*!< Noise Filter input signal : TM02A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM02B        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK5_Pos)           /*!< Noise Filter input signal : TM02B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM03A        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK6_Pos)           /*!< Noise Filter input signal : TM03A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM03B        (GPIO_NF_NFCK4_Msk | NF_NFCK4_CK7_Pos)           /*!< Noise Filter input signal : TM03B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM04A        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK0_Pos)           /*!< Noise Filter input signal : TM04A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM04B        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK1_Pos)           /*!< Noise Filter input signal : TM04B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM05A        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK2_Pos)           /*!< Noise Filter input signal : TM05A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM05B        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK3_Pos)           /*!< Noise Filter input signal : TM05B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM06A        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK4_Pos)           /*!< Noise Filter input signal : TM06A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM06B        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK5_Pos)           /*!< Noise Filter input signal : TM06B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM07A        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK6_Pos)           /*!< Noise Filter input signal : TM07A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM07B        (GPIO_NF_NFCK5_Msk | NF_NFCK5_CK7_Pos)           /*!< Noise Filter input signal : TM07B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM10A        (GPIO_NF_NFCK6_Msk | NF_NFCK6_CK0_Pos)           /*!< Noise Filter input signal : TM10A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM10B        (GPIO_NF_NFCK6_Msk | NF_NFCK6_CK1_Pos)           /*!< Noise Filter input signal : TM10B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM11A        (GPIO_NF_NFCK6_Msk | NF_NFCK6_CK2_Pos)           /*!< Noise Filter input signal : TM11A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM11B        (GPIO_NF_NFCK6_Msk | NF_NFCK6_CK3_Pos)           /*!< Noise Filter input signal : TM11B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM12A        (GPIO_NF_NFCK6_Msk | NF_NFCK6_CK4_Pos)           /*!< Noise Filter input signal : TM12A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM12B        (GPIO_NF_NFCK6_Msk | NF_NFCK6_CK5_Pos)           /*!< Noise Filter input signal : TM12B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM13A        (GPIO_NF_NFCK6_Msk | NF_NFCK6_CK6_Pos)           /*!< Noise Filter input signal : TM13A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM13B        (GPIO_NF_NFCK6_Msk | NF_NFCK6_CK7_Pos)           /*!< Noise Filter input signal : TM13B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM14A        (GPIO_NF_NFCK7_Msk | NF_NFCK7_CK0_Pos)           /*!< Noise Filter input signal : TM14A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM14B        (GPIO_NF_NFCK7_Msk | NF_NFCK7_CK1_Pos)           /*!< Noise Filter input signal : TM14B \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM15A        (GPIO_NF_NFCK7_Msk | NF_NFCK7_CK2_Pos)           /*!< Noise Filter input signal : TM15A \hideinitializer */
#define GPIO_NF_CLK_INPUT_TM15B        (GPIO_NF_NFCK7_Msk | NF_NFCK7_CK3_Pos)           /*!< Noise Filter input signal : TM15B \hideinitializer */
#define GPIO_NF_CLK_INPUT_NMI          (GPIO_NF_NFCK8_Msk | NF_NFCK8_CK0_Pos)           /*!< Noise Filter input signal : NMI   \hideinitializer */

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
#define GPIO_PROTECT_FACTOR_IRQ10               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ10PSEL_Msk)        /*!< Pin protection factor : IRQ10 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ11               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ11PSEL_Msk)        /*!< Pin protection factor : IRQ11 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ12               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ12PSEL_Msk)        /*!< Pin protection factor : IRQ12 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ13               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ13PSEL_Msk)        /*!< Pin protection factor : IRQ13 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ14               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ14PSEL_Msk)        /*!< Pin protection factor : IRQ14 \hideinitializer */
#define GPIO_PROTECT_FACTOR_IRQ15               (GPIO_PFL_PFLPSELA_Msk | PFL_PFLPSELA_IRQ15PSEL_Msk)        /*!< Pin protection factor : IRQ15 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP00               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP00PSEL_Msk)        /*!< Pin protection factor : CMP00 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP01               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP01PSEL_Msk)        /*!< Pin protection factor : CMP01 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP10               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP10PSEL_Msk)        /*!< Pin protection factor : CMP10 \hideinitializer */
#define GPIO_PROTECT_FACTOR_CMP11               (GPIO_PFL_PFLPSELB_Msk | PFL_PFLPSELB_CMP11PSEL_Msk)        /*!< Pin protection factor : CMP11 \hideinitializer */

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
#define GPIO_PROTECT_FACTOR_STATE_IRQ10         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ10DET_Msk)       /*!< Pin protection factor detection state of IRQ10 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ11         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ11DET_Msk)       /*!< Pin protection factor detection state of IRQ11 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ12         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ12DET_Msk)       /*!< Pin protection factor detection state of IRQ12 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ13         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ13DET_Msk)       /*!< Pin protection factor detection state of IRQ13 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ14         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ14DET_Msk)       /*!< Pin protection factor detection state of IRQ14 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_IRQ15         (GPIO_PFL_PFLSTATA_Msk | PFL_PFLSTATA_IRQ15DET_Msk)       /*!< Pin protection factor detection state of IRQ15 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP00         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP00PSEL_Msk)      /*!< Pin protection factor detection state of CMP00 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP01         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP01PSEL_Msk)      /*!< Pin protection factor detection state of CMP01 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP10         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP10PSEL_Msk)      /*!< Pin protection factor detection state of CMP10 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_CMP11         (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_CMP11PSEL_Msk)      /*!< Pin protection factor detection state of CMP11 \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD0ERRA       (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_AD0ERRADET_Msk)     /*!< Pin protection factor detection state of AD0ERRA \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD0ERRB       (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_AD0ERRBDET_Msk)     /*!< Pin protection factor detection state of AD0ERRB \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD1ERRA       (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_AD1ERRADET_Msk)     /*!< Pin protection factor detection state of AD1ERRA \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD1ERRB       (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_AD1ERRBDET_Msk)     /*!< Pin protection factor detection state of AD1ERRB \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD2ERRA       (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_AD2ERRADET_Msk)     /*!< Pin protection factor detection state of AD2ERRA \hideinitializer */
#define GPIO_PROTECT_FACTOR_STATE_AD2ERRB       (GPIO_PFL_PFLSTATB_Msk | PFL_PFLSTATB_AD2ERRBDET_Msk)     /*!< Pin protection factor detection state of AD2ERRB \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Debug interface setting definitions.                                                                   */
/*---------------------------------------------------------------------------------------------------------*/
#define DEBUG_INTERFACE_DISABLE                  (0x00U)            /*!< Debug interface disable \hideinitializer */
#define DEBUG_INTERFACE_ENABLE                   (0x01U)            /*!< Debug interface enable  \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Both edge detect selection                                                                             */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_NMIIRQ_BOTHEDGE_DISABLE     (0x00U << INTCG_SET_CLR_INTCGNMIEXMD_IRQEG_Pos)       /*!< GPIO NMI interrupt both-edge : disable  \hideinitializer */
#define GPIO_NMIIRQ_BOTHEDGE_ENABLE      (0x01U << INTCG_SET_CLR_INTCGNMIEXMD_IRQEG_Pos)       /*!< GPIO NMI interrupt both-edge : enable  \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  NMI interrupt trigger settings                                                                    */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_NMIIRQ_TRIGGER_RISINGEDGE   (0x00U << INTCG_SET_CLR_INTCGNMIEXMD_IRQTG_Pos)       /*!< GPIO NMI interrupt trigger : rising edge  \hideinitializer */
#define GPIO_NMIIRQ_TRIGGER_FALLINGEDGE  (0x01U << INTCG_SET_CLR_INTCGNMIEXMD_IRQTG_Pos)       /*!< GPIO NMI interrupt trigger : falling edge  \hideinitializer */
#define GPIO_NMIIRQ_TRIGGER_H_LEVEL      (0x02U << INTCG_SET_CLR_INTCGNMIEXMD_IRQTG_Pos)       /*!< GPIO NMI interrupt trigger : "H" level  \hideinitializer */
#define GPIO_NMIIRQ_TRIGGER_L_LEVEL      (0x03U << INTCG_SET_CLR_INTCGNMIEXMD_IRQTG_Pos)       /*!< GPIO NMI interrupt trigger : "L" level  \hideinitializer */

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
__STATIC_INLINE void GPIO_SetOpenDrainCtrl(GPIO_T *gpio, uint8_t u8Odc, uint8_t u8Value);
__STATIC_INLINE uint8_t GPIO_GetNdmodInput(void);
__STATIC_INLINE void GPIO_SetDebugInterface(uint8_t u8Set);

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
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ10
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ11
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ12
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ13
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ14
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ15
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ20
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ21
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ22
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ30
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ31
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ32
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ33
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ34
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ35
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ36
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ37
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
  *             - \ref GPIO_NF_CTRL_INPUT_TM10A
  *             - \ref GPIO_NF_CTRL_INPUT_TM10B
  *             - \ref GPIO_NF_CTRL_INPUT_TM11A
  *             - \ref GPIO_NF_CTRL_INPUT_TM11B
  *             - \ref GPIO_NF_CTRL_INPUT_TM12A
  *             - \ref GPIO_NF_CTRL_INPUT_TM12B
  *             - \ref GPIO_NF_CTRL_INPUT_TM13A
  *             - \ref GPIO_NF_CTRL_INPUT_TM13B
  *             - \ref GPIO_NF_CTRL_INPUT_TM14A
  *             - \ref GPIO_NF_CTRL_INPUT_TM14B
  *             - \ref GPIO_NF_CTRL_INPUT_TM15A
  *             - \ref GPIO_NF_CTRL_INPUT_TM15B
  *             - \ref GPIO_NF_CTRL_INPUT_NMI
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
    else if ((u32Input & GPIO_NF_NFCNT1_Msk) != 0U)
    {
        NF->NFCNT1 &= ~(0x1UL << shift);
    }
    else
    {
        NF->NFCNT2 &= ~(0x1UL << shift);
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
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ10
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ11
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ12
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ13
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ14
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ15
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ20
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ21
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ22
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ30
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ31
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ32
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ33
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ34
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ35
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ36
  *             - \ref GPIO_NF_CTRL_INPUT_IRQ37
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
  *             - \ref GPIO_NF_CTRL_INPUT_TM10A
  *             - \ref GPIO_NF_CTRL_INPUT_TM10B
  *             - \ref GPIO_NF_CTRL_INPUT_TM11A
  *             - \ref GPIO_NF_CTRL_INPUT_TM11B
  *             - \ref GPIO_NF_CTRL_INPUT_TM12A
  *             - \ref GPIO_NF_CTRL_INPUT_TM12B
  *             - \ref GPIO_NF_CTRL_INPUT_TM13A
  *             - \ref GPIO_NF_CTRL_INPUT_TM13B
  *             - \ref GPIO_NF_CTRL_INPUT_TM14A
  *             - \ref GPIO_NF_CTRL_INPUT_TM14B
  *             - \ref GPIO_NF_CTRL_INPUT_TM15A
  *             - \ref GPIO_NF_CTRL_INPUT_TM15B
  *             - \ref GPIO_NF_CTRL_INPUT_NMI
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
    else if ((u32Input & GPIO_NF_NFCNT1_Msk) != 0U)
    {
        NF->NFCNT1 |= (0x1UL << shift);
    }
    else
    {
        NF->NFCNT2 |= (0x1UL << shift);
    }
}

/**
  * @brief      Port input enable / disable
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
  * @return     The specified port input data
  * @details    Get the IN register of specified GPIO port.
  * @note       When reading a pin input data, read the value after enabling the input by GPIO_SetInputCtrl.
  *             When the input is disabled, "0" is always read out.
  */
__STATIC_INLINE uint8_t GPIO_GetInput(GPIO_T const *gpio)
{
    return (gpio->IOPnIN);
}

/**
  * @brief      Set GPIO Port OUT Data
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, GPIO2, GPIO3, GPIO8, GPIO9, GPIOA, GPIOB, GPIOD, GPIOE, GPIOF).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO8
  *             - \ref GPIO9
  *             - \ref GPIOA
  *             - \ref GPIOB
  *             - \ref GPIOD
  *             - \ref GPIOE
  *             - \ref GPIOF
  * @param[in]  u8Odc : Pin of the specified port. Select from the macros below.
  *                     (The logical sum of multiple macros is also possible.)
  *              | GPIO0            | GPIO1            | GPIO2            | GPIO3            | GPIO8            |
  *              |:-----------------|:-----------------|:-----------------|:-----------------|:-----------------|
  *              | \ref GPIO_P00ODC | \ref GPIO_P10ODC | \ref GPIO_P22ODC | \ref GPIO_P30ODC | \ref GPIO_P80ODC |
  *              | \ref GPIO_P01ODC |                  | \ref GPIO_P23ODC |                  | \ref GPIO_P81ODC |
  *              | \ref GPIO_P02ODC |                  | \ref GPIO_P24ODC |                  | \ref GPIO_P82ODC |
  *              |                  |                  |                  |                  |                  |
  *              ------------------------------------------------------------------------------------------------
  *              | GPIO9            | GPIOA            | GPIOB            | GPIOD            | GPIOE            |
  *              |:-----------------|:-----------------|:-----------------|:-----------------|:-----------------|
  *              | \ref GPIO_P90ODC | \ref GPIO_PA2ODC | \ref GPIO_PB0ODC | \ref GPIO_PD0ODC | \ref GPIO_PE1ODC |
  *              | \ref GPIO_P91ODC | \ref GPIO_PA3ODC | \ref GPIO_PB1ODC | \ref GPIO_PD1ODC | \ref GPIO_PE4ODC |
  *              | \ref GPIO_P92ODC | \ref GPIO_PA4ODC | \ref GPIO_PB2ODC | \ref GPIO_PD2ODC |                  |
  *              | \ref GPIO_P93ODC | \ref GPIO_PA5ODC | \ref GPIO_PB3ODC | \ref GPIO_PD3ODC |                  |
  *              | \ref GPIO_P96ODC |                  | \ref GPIO_PB4ODC | \ref GPIO_PD4ODC |                  |
  *              |                  |                  | \ref GPIO_PB5ODC | \ref GPIO_PD5ODC |                  |
  *              |                  |                  | \ref GPIO_PB6ODC | \ref GPIO_PD6ODC |                  |
  *              |                  |                  | \ref GPIO_PB7ODC | \ref GPIO_PD7ODC |                  |
  *              ------------------------------------------------------------------------------------------------
  *              | GPIOF            |
  *              |:-----------------|
  *              | \ref GPIO_PF1ODC |
  *              | \ref GPIO_PF2ODC |
  *              |                  |
  * @param[in]  u8Value : Nch open drain output selection.
  *             - \ref GPIO_ODC_PUSHPULL
  *             - \ref GPIO_ODC_NCH_OPENDRAIN
  * @return     None
  * @details    Set Nch open drain / push pull output of the specified pin of GPIO port
  */
__STATIC_INLINE void GPIO_SetOpenDrainCtrl(GPIO_T *gpio, uint8_t u8Odc, uint8_t u8Value)
{
    if (u8Value == GPIO_ODC_NCH_OPENDRAIN)
    {
        gpio->IOPnODC |= u8Odc;
    }
    else
    {
        gpio->IOPnODC &= ~(u8Odc);
    }
}

/**
  * @brief      Get Input of NDMOD
  * @param[in]  None
  * @return     The specified port input data
  * @details    Get the data of NDMOD Input Register
  * @note       None
  */
__STATIC_INLINE uint8_t GPIO_GetNdmodInput(void)
{
    return (DBG->NDMODIN);
}

/**
  * @brief      Debug enable / disable
  * @param[in]  u8Set : Debug Interface enable/disable of PB6 and PB5
  *             - \ref DEBUG_INTERFACE_DISABLE
  *             - \ref DEBUG_INTERFACE_ENABLE
  * @return     None
  * @details    Set Debug Interface of PB6 and PB5.
  * @note       This register is valid only for the KM1M4BF5 series.
  *             In the KM1M4BF0 series, the initial value is SELSWD.SWDEN = 0 and cannot be rewritten.
  */
__STATIC_INLINE void GPIO_SetDebugInterface(uint8_t u8Set)
{
    DBG->SELSWD = u8Set;
}

/*-----------------------------*/
/* BSP API function prototypes */
/*-----------------------------*/
void GPIO_DisableInt(uint8_t u8Irqno);
void GPIO_EnableInt(INTCG_MD_T *intcg_eint, uint8_t u8Irqno, uint8_t u8Edge, uint8_t u8Trigger);
void GPIO_SetFunctionMode(GPIO_MD_T *gpio_md, uint8_t u8Pin, uint32_t u32Value);
void GPIO_SetPullCtrl(GPIO_T *gpio, uint8_t u8Pin, uint8_t u8Value);
void GPIO_SetNfClk(uint32_t u32Input, uint32_t u32Smp);
void GPIO_SetOutputProtectionPolarity(uint32_t u32Profactor, uint16_t u16Polality);
uint32_t GPIO_IsOutputProtectionDetect(uint32_t u32Profactor);
void GPIO_ClearOutputProtection(uint32_t u32Profactor);
void GPIO_DisableNMIInt(void);
void GPIO_EnableNMIInt(uint8_t u8Edge, uint8_t u8Trigger);
void GPIO_ClearNMIIntFlag(void);

/*@}*/ /* end of group GPIO_EXPORTED_FUNCTIONS */

/*@}*/ /* end of group GPIO_Driver */

/*@}*/ /* end of group Standard_Driver */

#endif  /* __GPIO_H__ */

/*** (C) COPYRIGHT 2022 Nuvoton Technology Corp. Japan ***/
