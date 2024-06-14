/**************************************************************************//**
 * @file     gpio.h
 * @version  V1.00
 * @brief    KM1M0GF series GPIO Driver Header File
 *
 * SPDX-License-Identifier: Apache-2.0
 * @copyright (C) 2024 Nuvoton Technology Corp. Japan All rights reserved.
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
#define GPIO_PLU_DISABLE                (0U)                                   /*!< Without pull-up resistor \hideinitializer */
#define GPIO_PLU_PULL_UP                (1U)                                   /*!< Adding pull-up resistor  \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  LED output selection.                                                                                  */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_LED_NO_OUTPUT              (0U)                                   /*!< No output LED       \hideinitializer */
#define GPIO_LED_OUTPUT                 (1U)                                   /*!< output LED resistor \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Input level selection.                                                                                 */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_VDD50_30_LOW_LEVEL         (0U)                                   /*!< VDD50 x 0.7(High level) VDD50 x 0.3(Low level)  \hideinitializer */
#define GPIO_VDD50_45_LOW_LEVEL         (1U)                                   /*!< VDD50 x 0.7(High level) VDD50 x 0.45(Low level) \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Nch open drain output control definitions.                                                             */
/*---------------------------------------------------------------------------------------------------------*/
/* Pin of the specified port */
#define GPIO_P00ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P00 Nch open drain selection \hideinitializer */
#define GPIO_P02ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P02 Nch open drain selection \hideinitializer */
#define GPIO_P03ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P03 Nch open drain selection \hideinitializer */
#define GPIO_P05ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P05 Nch open drain selection (KM1M0GF01/02 only) \hideinitializer */
#define GPIO_P06ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< P06 Nch open drain selection (KM1M0GF01/02 only) \hideinitializer */
#define GPIO_P14ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< P14 Nch open drain selection \hideinitializer */
#define GPIO_P30ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P30 Nch open drain selection \hideinitializer */
#define GPIO_P32ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P32 Nch open drain selection \hideinitializer */
#define GPIO_P33ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P33 Nch open drain selection \hideinitializer */
#define GPIO_P35ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P35 Nch open drain selection \hideinitializer */
#define GPIO_P93ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P93 Nch open drain selection \hideinitializer */
#define GPIO_P95ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P95 Nch open drain selection \hideinitializer */
#define GPIO_PD0ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< PD0 Nch open drain selection \hideinitializer */
#define GPIO_PD2ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< PD2 Nch open drain selection \hideinitializer */

/* Nch open drain output selection */
#define GPIO_ODC_PUSHPULL               (0U)                                    /*!< Push-pull output      \hideinitializer */
#define GPIO_ODC_NCH_OPENDRAIN          (1U)                                    /*!< Nch open drain output \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin-Function definitions                                                                               */
/*---------------------------------------------------------------------------------------------------------*/
/********************* Bit definition of IOP0MD register **********************/
#define GPIO_P00MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P00MD_TM07IOA              (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM07IOA input/output pin. \hideinitializer */
#define GPIO_P00MD_SBO1B                (0x06UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO1B input/output pin. \hideinitializer */
#define GPIO_P00MD_AN8                  (0x07UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< AN8 input pin. \hideinitializer */
#define GPIO_P00MD_DA0OUT0              (0x08UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< DA0OUT0 output pin. \hideinitializer */

#define GPIO_P01MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P01MD_TM08IOB              (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM08IOB input/output pin. \hideinitializer */
#define GPIO_P01MD_SBI1B                (0x06UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI1B input pin. \hideinitializer */
#define GPIO_P01MD_AN9                  (0x07UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< AN9 input pin. \hideinitializer */
#define GPIO_P01MD_DA0OUT1              (0x08UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< DA0OUT1 output pin. \hideinitializer */

#define GPIO_P02MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P02MD_SBT1B                (0x06UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT1B input/output pin. \hideinitializer */
#define GPIO_P02MD_AN10                 (0x07UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< AN10 input pin. \hideinitializer */
#define GPIO_P02MD_CMPREF0A             (0x08UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< CMPREF0A output pin. \hideinitializer */

#define GPIO_P03MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P03MD_SBO2A                (0x04UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBO2A input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P03MD_SDA6A                (0x05UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< IIC6A SDA input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P03MD_SBC1B                (0x06UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBC1B output pin. \hideinitializer */
#define GPIO_P03MD_AN11                 (0x07UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< AN11 input pin. \hideinitializer */
#define GPIO_P03MD_CMPIN0A              (0x08UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< CMPIN0A input pin. \hideinitializer */

#define GPIO_P04MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P04MD_SBI2A                (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBI2A input pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P04MD_AN12                 (0x07UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< AN12 input pin. \hideinitializer */
#define GPIO_P04MD_CMPOT0               (0x08UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< CMPOT0 output pin. \hideinitializer */

#define GPIO_P05MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P05MD_SBT2A                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBT2A input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P05MD_SCL6A                (0x05UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< IIC6A SCL input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P05MD_AN13                 (0x07UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< AN13 input pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P05MD_CMPREF0B             (0x08UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< CMPREF0B output pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P06MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P06MD_SBC2A                (0x04UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBC2A output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P06MD_CMPIN0B              (0x08UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< CMPIN0B input pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P07MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

/********************* Bit definition of IOP1MD register **********************/
#define GPIO_P10MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P10MD_TM00IO               (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM00IO input/output pin. \hideinitializer */
#define GPIO_P10MD_AN14                 (0x07UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< AN14 input pin. \hideinitializer */

#define GPIO_P11MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P11MD_TM01IO               (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM01IO input/output pin. \hideinitializer */
#define GPIO_P11MD_AN15                 (0x07UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< AN15 input pin. \hideinitializer */

#define GPIO_P12MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P12MD_TM02IOA              (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM02IOA input/output pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P13MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P13MD_IRQ05B               (0x0AUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 05B pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P13MD_MONOUTA              (0x0BUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< MONOUTA monitor output pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P14MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P14MD_LTX0A                (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< LTX0A input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */

#define GPIO_P15MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P15MD_LRX0A                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< LRX0A input pin. \hideinitializer */

#define GPIO_P16MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */

/********************* Bit definition of IOP2MD register **********************/
#define GPIO_P20MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P20MD_IRQ00A               (0x0AUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 00A pin. \hideinitializer */

#define GPIO_P21MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P21MD_IRQ01A               (0x0AUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 01A pin. \hideinitializer */

#define GPIO_P22MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P22MD_IRQ02A               (0x0AUL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 02A pin. \hideinitializer */

#define GPIO_P23MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P23MD_IRQ03A               (0x0AUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 03A pin. \hideinitializer */

#define GPIO_P24MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P24MD_IRQ04A               (0x0AUL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 04A pin. \hideinitializer */

#define GPIO_P25MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P25MD_IRQ05A               (0x0AUL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 05A pin. \hideinitializer */

/********************* Bit definition of IOP3MD register **********************/
#define GPIO_P30MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P30MD_SBO1A                (0x06UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO1A input/output pin. \hideinitializer */

#define GPIO_P31MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P31MD_SBI1A                (0x06UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI1A input pin. \hideinitializer */

#define GPIO_P32MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P32MD_SBC3A                (0x04UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBC3A input pin. \hideinitializer */
#define GPIO_P32MD_SBT1A                (0x06UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT1A input/output pin. \hideinitializer */

#define GPIO_P33MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P33MD_TM02IOB              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM02IOB input/output pin. \hideinitializer */
#define GPIO_P33MD_SBO3A                (0x04UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBO3A input/output pin. \hideinitializer */
#define GPIO_P33MD_SDA7A                (0x05UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< IIC7A SDA input pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P33MD_SBC1A                (0x06UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBC1A output pin. \hideinitializer */

#define GPIO_P34MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P34MD_TM04IO               (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM04IO input/output pin. \hideinitializer */
#define GPIO_P34MD_SBI3A                (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBI3A input pin. \hideinitializer */

#define GPIO_P35MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P35MD_SBT3A                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBT3A input/output pin. \hideinitializer */
#define GPIO_P35MD_SCL7A                (0x05UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< IIC7A SCL ouput pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOP4MD register **********************/
#define GPIO_P40MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P40MD_TM12IOB              (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM12IOB input/output pin. \hideinitializer */

#define GPIO_P41MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P41MD_IRQ06                (0x0AUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 06 pin. \hideinitializer */

#define GPIO_P42MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P42MD_TM07IOC              (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM07IOC input/output pin. \hideinitializer */
#define GPIO_P42MD_IRQ07                (0x0AUL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 07 pin. \hideinitializer */

#define GPIO_P43MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P43MD_TM08IOC              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM08IOC input/output pin. \hideinitializer */
#define GPIO_P43MD_MONOUTB              (0x0BUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< MONOUTB monitor output pin. \hideinitializer */

#define GPIO_P44MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P44MD_OSCO                 (0x0BUL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External high-speed vibration OSCO pin. \hideinitializer */

#define GPIO_P45MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P45MD_OSCI                 (0x0BUL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External high-speed vibration OSCI pin. \hideinitializer */

#define GPIO_P46MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P46MD_XI                   (0x0BUL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External low speed vibration XI pin. \hideinitializer */

#define GPIO_P47MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P47MD_XO                   (0x0BUL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< External low speed vibration XO pin. \hideinitializer */

/********************* Bit definition of IOP5MD register **********************/
#define GPIO_P50MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P50MD_IRQ08B               (0x0AUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 08B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P51MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P51MD_IRQ09B               (0x0AUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 09B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P52MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P52MD_IRQ10B               (0x0AUL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 10B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P53MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P53MD_IRQ11B               (0x0AUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 11B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P54MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P54MD_IRQ12B               (0x0AUL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 12B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P55MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P55MD_IRQ13B               (0x0AUL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 13B pin. \hideinitializer */

#define GPIO_P56MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P56MD_IRQ14B               (0x0AUL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External interrupt input 14B pin. \hideinitializer */

#define GPIO_P57MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P57MD_IRQ08A               (0x0AUL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< External interrupt input 08A pin. \hideinitializer */

/********************* Bit definition of IOP6MD register **********************/
#define GPIO_P60MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P60MD_TM13IOA              (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM13IOA input/output pin. \hideinitializer */
#define GPIO_P60MD_IRQ09A               (0x0AUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 09A pin. \hideinitializer */

#define GPIO_P61MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P61MD_TM09IOB              (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM09IOB input/output pin. \hideinitializer */
#define GPIO_P61MD_IRQ10A               (0x0AUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 10A pin. \hideinitializer */

#define GPIO_P62MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P62MD_TM14IOA              (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM14IOA input/output pin. \hideinitializer */
#define GPIO_P62MD_IRQ11A               (0x0AUL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 11A pin. \hideinitializer */

#define GPIO_P63MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P63MD_TM10IOB              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM10IOB input/output pin. \hideinitializer */
#define GPIO_P63MD_IRQ12A               (0x0AUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 12A pin. \hideinitializer */

#define GPIO_P64MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P64MD_TM11IOB              (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM11IOB input/output pin. \hideinitializer */
#define GPIO_P64MD_IRQ13A               (0x0AUL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 13A pin. \hideinitializer */

#define GPIO_P65MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P65MD_TM15IOA              (0x01UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< TM15IOA input/output pin. \hideinitializer */
#define GPIO_P65MD_TM12IOC              (0x02UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< TM12IOC input/output pin. \hideinitializer */
#define GPIO_P65MD_IRQ14A               (0x0AUL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 14A pin. \hideinitializer */

#define GPIO_P66MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P66MD_TM16IO1              (0x01UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< TM16IO1 input/output pin. \hideinitializer */
#define GPIO_P66MD_IRQ15A               (0x0AUL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External interrupt input 15A pin. \hideinitializer */

#define GPIO_P67MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P67MD_TM16O2               (0x01UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< TM16O2 output pin. \hideinitializer */
#define GPIO_P67MD_IRQ16A               (0x0AUL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< External interrupt input 16A pin. \hideinitializer */

/********************* Bit definition of IOP7MD register **********************/
#define GPIO_P70MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P70MD_NPWM2A               (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< NPWM2A output pin. \hideinitializer */
#define GPIO_P70MD_TM16O3               (0x02UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM16O3 output pin. \hideinitializer */
#define GPIO_P70MD_IRQ17A               (0x0AUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 17A pin. \hideinitializer */

#define GPIO_P71MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P71MD_PWM2A                (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< PWM2A output pin. \hideinitializer */
#define GPIO_P71MD_TM16O4               (0x02UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM16O4 output pin. \hideinitializer */
#define GPIO_P71MD_IRQ18A               (0x0AUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 18A pin. \hideinitializer */

#define GPIO_P72MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P72MD_NPWM1A               (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< NPWM1A output pin. \hideinitializer */
#define GPIO_P72MD_TM16O5               (0x02UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM16O5 output pin. \hideinitializer */
#define GPIO_P72MD_IRQ19A               (0x0AUL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 19A pin. \hideinitializer */

#define GPIO_P73MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P73MD_PWM1A                (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< PWM1A output pin. \hideinitializer */
#define GPIO_P73MD_TM16O6               (0x02UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM16O6 output pin. \hideinitializer */

#define GPIO_P74MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P74MD_NPWM0A               (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< NPWM0A output pin. \hideinitializer */
#define GPIO_P74MD_TM16O7               (0x02UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM16O7 output pin. \hideinitializer */

#define GPIO_P75MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P75MD_PWM0A                (0x01UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< PWM0A output pin. \hideinitializer */
#define GPIO_P75MD_TM16O8               (0x02UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< TM16O8 output pin. \hideinitializer */

#define GPIO_P77MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P77MD_PWMBCSTA             (0x01UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< PWMBCSTA output pin. \hideinitializer */
#define GPIO_P77MD_TM16O9               (0x02UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< TM16O9 output pin. \hideinitializer */

/********************* Bit definition of IOP8MD register **********************/
#define GPIO_P80MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P80MD_TM03IO               (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM03IO input/output pin. \hideinitializer */

#define GPIO_P81MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P81MD_TM08IOA              (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM08IOA input/output pin. \hideinitializer */

#define GPIO_P82MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P82MD_TM13IOB              (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM13IOB input/output pin. \hideinitializer */

#define GPIO_P83MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P83MD_TM09IOA              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM09IOA input/output pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P84MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P84MD_TM07IOB              (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM07IOB input/output pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P85MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P85MD_TM14IOB              (0x01UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< TM14IOB input/output pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P86MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P86MD_TM10IOA              (0x01UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< TM10IOA input/output pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P87MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_P87MD_TM11IOA              (0x01UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< TM11IOA input/output pin. (KM1M0DF01/02 only) \hideinitializer */

/********************* Bit definition of IOP9MD register **********************/
#define GPIO_P90MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P90MD_CTX0A                (0x0BUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< CAN FD CTX0A output pin. \hideinitializer */

#define GPIO_P91MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P91MD_CRX0A                (0x0BUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!<  CAN FD CRX0A input pin. \hideinitializer */

#define GPIO_P92MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_P93MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P93MD_SDA7B                (0x05UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< IIC7B SDA input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P93MD_SBO3B                (0x06UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBO3B input/output pin. \hideinitializer */

#define GPIO_P94MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P94MD_CRX0A                (0x06UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< CRX0A input pin. \hideinitializer */

#define GPIO_P95MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P95MD_SBC2B                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBC2B output pin. \hideinitializer */
#define GPIO_P95MD_SCL7B                (0x05UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< IIC7B SCL input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P95MD_SBT3B                (0x06UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBT3B input/output pin. \hideinitializer */

/********************* Bit definition of IOPAMD register **********************/
#define GPIO_PA0MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA0MD_AN0                  (0x07UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< AN0 input pin. \hideinitializer */
#define GPIO_PA0MD_CMPIN1B              (0x08UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< CMPIN1B input pin. \hideinitializer */
#define GPIO_PA0MD_IRQ15B               (0x0AUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 15B pin. \hideinitializer */

#define GPIO_PA1MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA1MD_AN1                  (0x07UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< AN1 input pin. \hideinitializer */
#define GPIO_PA1MD_CMPREF1B             (0x08UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< CMPREF1B output pin. \hideinitializer */

#define GPIO_PA2MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA2MD_AN2                  (0x07UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< AN2 input pin. \hideinitializer */
#define GPIO_PA2MD_CMPOT1               (0x08UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< CMPOT1 output pin. \hideinitializer */

#define GPIO_PA3MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA3MD_AN3                  (0x07UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< AN3 input pin. \hideinitializer */
#define GPIO_PA3MD_CMPIN1A              (0x08UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< CMPIN1A output pin. \hideinitializer */

#define GPIO_PA4MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA4MD_AN4                  (0x07UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< AN4 input pin. \hideinitializer */
#define GPIO_PA4MD_CMPREF1A             (0x08UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< CMPREF1A output pin. \hideinitializer */
#define GPIO_PA4MD_IRQ16B               (0x0AUL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 16B pin. \hideinitializer */

#define GPIO_PA5MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA5MD_AN5                  (0x07UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< AN5 input pin. \hideinitializer */
#define GPIO_PA5MD_IRQ17B               (0x0AUL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 17B pin. \hideinitializer */

#define GPIO_PA6MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA6MD_AN6                  (0x07UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< AN6 input pin. \hideinitializer */
#define GPIO_PA6MD_DA1OUT0              (0x08UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< DA1OUT0 output pin. \hideinitializer */
#define GPIO_PA6MD_IRQ18B               (0x0AUL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External interrupt input 18B pin. \hideinitializer */

#define GPIO_PA7MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA7MD_AN7                  (0x07UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< AN7 input pin. \hideinitializer */
#define GPIO_PA7MD_DA1OUT1              (0x08UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< DA1OUT1 output pin. \hideinitializer */
#define GPIO_PA7MD_IRQ19B               (0x0AUL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< External interrupt input 19B pin. \hideinitializer */

/********************* Bit definition of IOPBMD register **********************/
#define GPIO_PB0MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PB1MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PB2MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PB3MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PB4MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PB5MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

/********************* Bit definition of IOPCMD register **********************/
#define GPIO_PC0MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PC1MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PC2MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PC3MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PC4MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PC5MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PC6MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

/********************* Bit definition of IOPDMD register **********************/
#define GPIO_PD0MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD0MD_SBO2B                (0x04UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO2B input/output pin. \hideinitializer */
#define GPIO_PD0MD_SDA6B                (0x05UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< IIC6B SDA input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PD0MD_AN6                  (0x06UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< AN6 output pin. \hideinitializer */

#define GPIO_PD1MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD1MD_SBI2B                (0x04UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI2B input pin. \hideinitializer */

#define GPIO_PD2MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD2MD_SBT2B                (0x04UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT2B input/output pin. \hideinitializer */
#define GPIO_PD2MD_SCL6B                (0x05UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< IIC6B SCL input/output pin. (Nch open-drain control is valid when serial I/F output is selected.)  \hideinitializer */

#define GPIO_PD3MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_PD3MD_IRQ00B               (0x0AUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 00B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_PD4MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_PD4MD_IRQ01B               (0x0AUL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 01B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_PD5MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_PD5MD_IRQ02B               (0x0AUL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External interrupt input 02B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_PD6MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_PD6MD_TM12IOA              (0x01UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< TM12IOA input/output pin.         (KM1M0DF01/02 only) \hideinitializer */
#define GPIO_PD6MD_IRQ03B               (0x0AUL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External interrupt input 03B pin. (KM1M0DF01/02 only) \hideinitializer */

#define GPIO_PD7MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PD7MD_TM15IOB              (0x01UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< TM15IOB input/output pin.         \hideinitializer */
#define GPIO_PD7MD_IRQ04B               (0x0AUL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< External interrupt input 04B pin. \hideinitializer */

/********************* Bit definition of IOPEMD register **********************/
#define GPIO_PE0MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */
#define GPIO_PE0MD_CTX0B                (0x0BUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< CAN FD CTX0B output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PE1MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */
#define GPIO_PE1MD_CRX0B                (0x0BUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< CAN FD CRX0B output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PE2MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PE3MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PE4MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PE5MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PE6MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

/********************* Bit definition of IOPFMD register **********************/
#define GPIO_PF0MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PF1MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PF2MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PF3MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PF4MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PF5MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

#define GPIO_PF6MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. (KM1M0DF01 only) \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin Interrupt control definitions                                                                      */
/*---------------------------------------------------------------------------------------------------------*/
/* Interrupt definitions */
#define GPIO_EXINT0                     (EXINT_MD_EXTDEG_IRQEG4_Pos)              /*!< External interrupt 0  \hideinitializer */
#define GPIO_EXINT1                     (EXINT_MD_EXTDEG_IRQEG5_Pos)              /*!< External interrupt 1  \hideinitializer */
#define GPIO_EXINT2                     (EXINT_MD_EXTDEG_IRQEG6_Pos)              /*!< External interrupt 2  \hideinitializer */
#define GPIO_EXINT3                     (EXINT_MD_EXTDEG_IRQEG7_Pos)              /*!< External interrupt 3  \hideinitializer */
#define GPIO_EXINT4                     (EXINT_MD_EXTDEG_IRQEG8_Pos)              /*!< External interrupt 4  \hideinitializer */
#define GPIO_EXINT5                     (EXINT_MD_EXTDEG_IRQEG9_Pos)              /*!< External interrupt 5  \hideinitializer */
#define GPIO_EXINT6                     (EXINT_MD_EXTDEG_IRQEG10_Pos)             /*!< External interrupt 6  \hideinitializer */
#define GPIO_EXINT7                     (EXINT_MD_EXTDEG_IRQEG11_Pos)             /*!< External interrupt 7  \hideinitializer */
#define GPIO_EXINT8                     (EXINT_MD_EXTDEG_IRQEG12_Pos)             /*!< External interrupt 8  \hideinitializer */
#define GPIO_EXINT9                     (EXINT_MD_EXTDEG_IRQEG13_Pos)             /*!< External interrupt 9  \hideinitializer */
#define GPIO_EXINT10                    (EXINT_MD_EXTDEG_IRQEG14_Pos)             /*!< External interrupt 10 \hideinitializer */
#define GPIO_EXINT11                    (EXINT_MD_EXTDEG_IRQEG15_Pos)             /*!< External interrupt 11 \hideinitializer */
#define GPIO_EXINT12                    (EXINT_MD_EXTDEG_IRQEG16_Pos)             /*!< External interrupt 12 \hideinitializer */
#define GPIO_EXINT13                    (EXINT_MD_EXTDEG_IRQEG17_Pos)             /*!< External interrupt 13 \hideinitializer */
#define GPIO_EXINT14                    (EXINT_MD_EXTDEG_IRQEG18_Pos)             /*!< External interrupt 14 \hideinitializer */
#define GPIO_EXINT15                    (EXINT_MD_EXTDEG_IRQEG19_Pos)             /*!< External interrupt 15 \hideinitializer */
#define GPIO_EXINT16                    (EXINT_MD_EXTDEG_IRQEG20_Pos)             /*!< External interrupt 16 \hideinitializer */
#define GPIO_EXINT17                    (EXINT_MD_EXTDEG_IRQEG21_Pos)             /*!< External interrupt 17 \hideinitializer */
#define GPIO_EXINT18                    (EXINT_MD_EXTDEG_IRQEG22_Pos)             /*!< External interrupt 18 \hideinitializer */
#define GPIO_EXINT19                    (EXINT_MD_EXTDEG_IRQEG23_Pos)             /*!< External interrupt 19 \hideinitializer */

/* Both edge detect selection */
#define GPIO_INTERRUPT_BOTHEDGE_DISABLE     (0x00U)                               /*!< GPIO interrupt both-edge : disable \hideinitializer */
#define GPIO_INTERRUPT_BOTHEDGE_ENABLE      (0x01U)                               /*!< GPIO interrupt both-edge : enable  \hideinitializer */

/* Interrupt trigger settings */
#define GPIO_INTERRUPT_TRIGGER_RISINGEDGE   (0x00U)                               /*!< GPIO interrupt trigger : rising edge  \hideinitializer */
#define GPIO_INTERRUPT_TRIGGER_FALLINGEDGE  (0x01U)                               /*!< GPIO interrupt trigger : falling edge \hideinitializer */
#define GPIO_INTERRUPT_TRIGGER_H_LEVEL      (0x02U)                               /*!< GPIO interrupt trigger : "H" level    \hideinitializer */
#define GPIO_INTERRUPT_TRIGGER_L_LEVEL      (0x03U)                               /*!< GPIO interrupt trigger : "L" level    \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Noise Filter Sampling clock frequency selection                                                        */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_NF_SMP_SYSCLK                (0x00U << NF_NFnCTR_CK_Pos)             /*!< Noise Filter Sampling clock frequency : SYSCLK      \hideinitializer */
#define GPIO_NF_SMP_SYSCLK_DIV_32         (0x01U << NF_NFnCTR_CK_Pos)             /*!< Noise Filter Sampling clock frequency : SYSCLK/32   \hideinitializer */
#define GPIO_NF_SMP_SYSCLK_DIV_64         (0x02U << NF_NFnCTR_CK_Pos)             /*!< Noise Filter Sampling clock frequency : SYSCLK/64   \hideinitializer */
#define GPIO_NF_SMP_SYSCLK_DIV_128        (0x03U << NF_NFnCTR_CK_Pos)             /*!< Noise Filter Sampling clock frequency : SYSCLK/128  \hideinitializer */
#define GPIO_NF_SMP_SYSCLK_DIV_256        (0x04U << NF_NFnCTR_CK_Pos)             /*!< Noise Filter Sampling clock frequency : SYSCLK/256  \hideinitializer */
#define GPIO_NF_SMP_SYSCLK_DIV_512        (0x05U << NF_NFnCTR_CK_Pos)             /*!< Noise Filter Sampling clock frequency : SYSCLK/512  \hideinitializer */
#define GPIO_NF_SMP_SYSCLK_DIV_1024       (0x06U << NF_NFnCTR_CK_Pos)             /*!< Noise Filter Sampling clock frequency : SYSCLK/1024 \hideinitializer */
#define GPIO_NF_SMP_LPCLK                 (0x07U << NF_NFnCTR_CK_Pos)             /*!< Noise Filter Sampling clock frequency : LPCLK       \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  External interrupt number                                                                              */
/*---------------------------------------------------------------------------------------------------------*/
/* The following is used to operate the registers GnIRCLR, GnIESET, GnIECLR, GnID.                                     */
/* Each bit of the register GnIRCLR, GnIESET, GnIECLR, GnID indicates the interrupt group number and is common to all. */
/* Therefore, the following refers to the GnIRCLR macro, but they are used in common.                                  */
#define GPIO_EXTERNAL_INT0               (EXINT_CTRL_GnID_ID0_Msk)                /*!< GPIO external interrupt0  \hideinitializer */
#define GPIO_EXTERNAL_INT1               (EXINT_CTRL_GnID_ID1_Msk)                /*!< GPIO external interrupt1  \hideinitializer */
#define GPIO_EXTERNAL_INT2               (EXINT_CTRL_GnID_ID2_Msk)                /*!< GPIO external interrupt2  \hideinitializer */
#define GPIO_EXTERNAL_INT3               (EXINT_CTRL_GnID_ID3_Msk)                /*!< GPIO external interrupt3  \hideinitializer */
#define GPIO_EXTERNAL_INT4               (EXINT_CTRL_GnID_ID4_Msk)                /*!< GPIO external interrupt4  \hideinitializer */
#define GPIO_EXTERNAL_INT5               (EXINT_CTRL_GnID_ID5_Msk)                /*!< GPIO external interrupt5  \hideinitializer */
#define GPIO_EXTERNAL_INT6               (EXINT_CTRL_GnID_ID6_Msk)                /*!< GPIO external interrupt6  \hideinitializer */
#define GPIO_EXTERNAL_INT7               (EXINT_CTRL_GnID_ID7_Msk)                /*!< GPIO external interrupt7  \hideinitializer */
#define GPIO_EXTERNAL_INT8               (EXINT_CTRL_GnID_ID8_Msk)                /*!< GPIO external interrupt8  \hideinitializer */
#define GPIO_EXTERNAL_INT9               (EXINT_CTRL_GnID_ID9_Msk)                /*!< GPIO external interrupt9  \hideinitializer */
#define GPIO_EXTERNAL_INT10              (EXINT_CTRL_GnID_ID10_Msk)               /*!< GPIO external interrupt10 \hideinitializer */
#define GPIO_EXTERNAL_INT11              (EXINT_CTRL_GnID_ID11_Msk)               /*!< GPIO external interrupt11 \hideinitializer */
#define GPIO_EXTERNAL_INT12              (EXINT_CTRL_GnID_ID12_Msk)               /*!< GPIO external interrupt12 \hideinitializer */
#define GPIO_EXTERNAL_INT13              (EXINT_CTRL_GnID_ID13_Msk)               /*!< GPIO external interrupt13 \hideinitializer */
#define GPIO_EXTERNAL_INT14              (EXINT_CTRL_GnID_ID14_Msk)               /*!< GPIO external interrupt14 \hideinitializer */
#define GPIO_EXTERNAL_INT15              (EXINT_CTRL_GnID_ID15_Msk)               /*!< GPIO external interrupt15 \hideinitializer */
#define GPIO_EXTERNAL_INT16              (EXINT_CTRL_GnID_ID16_Msk)               /*!< GPIO external interrupt16 \hideinitializer */
#define GPIO_EXTERNAL_INT17              (EXINT_CTRL_GnID_ID17_Msk)               /*!< GPIO external interrupt17 \hideinitializer */
#define GPIO_EXTERNAL_INT18              (EXINT_CTRL_GnID_ID18_Msk)               /*!< GPIO external interrupt18 \hideinitializer */
#define GPIO_EXTERNAL_INT19              (EXINT_CTRL_GnID_ID19_Msk)               /*!< GPIO external interrupt19 \hideinitializer */


/*@}*/ /* end of group GPIO_EXPORTED_CONSTANTS */


/** @addtogroup GPIO_EXPORTED_FUNCTIONS GPIO Exported Functions
  @{
*/

/* BSP inline API function definitions */
/* Declare these inline functions here to avoid MISRA C 2004 rule 8.1 error */
__STATIC_INLINE void GPIO_DisableNf(NF_T *nf);
__STATIC_INLINE void GPIO_EnableNf(NF_T *nf);
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

/**
  * @brief      Noise filter disabled
  * @param[in]  nf : The pointer of the specified NFn.
  *             - \ref NF0
  *             - \ref NF1
  *             - \ref NF2
  *             - \ref NF3
  *             - \ref NF4
  *             - \ref NF5
  *             - \ref NF6
  *             - \ref NF7
  *             - \ref NF8
  *             - \ref NF9
  *             - \ref NF10
  *             - \ref NF11
  *             - \ref NF12
  *             - \ref NF13
  *             - \ref NF14
  *             - \ref NF15
  *             - \ref NF16
  *             - \ref NF17
  *             - \ref NF18
  *             - \ref NF19
  * @return     None
  * @details    Disable the noise filter of the specified external interrupt.
  * @note       Disable the noise filter while the interrupt or the timer is disabled.
  */
__STATIC_INLINE void GPIO_DisableNf(NF_T *nf)
{
    nf->NFnCTR &= (~NF_NFnCTR_EN_Msk);
}

/**
  * @brief      Noise filter enabled
  * @param[in]  nf : The pointer of the specified NFn.
  *             - \ref NF0
  *             - \ref NF1
  *             - \ref NF2
  *             - \ref NF3
  *             - \ref NF4
  *             - \ref NF5
  *             - \ref NF6
  *             - \ref NF7
  *             - \ref NF8
  *             - \ref NF9
  *             - \ref NF10
  *             - \ref NF11
  *             - \ref NF12
  *             - \ref NF13
  *             - \ref NF14
  *             - \ref NF15
  *             - \ref NF16
  *             - \ref NF17
  *             - \ref NF18
  *             - \ref NF19
  * @return     None
  * @details    Enable the noise filter of the specified external interrupt.
  * @note       Enable the noise filter while the interrupt or the timer is disabled.
  */
__STATIC_INLINE void GPIO_EnableNf(NF_T *nf)
{
    nf->NFnCTR |= NF_NFnCTR_EN_Msk;
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  *             - \ref GPIOB(KM1M0DF01 only)
  *             - \ref GPIOC(KM1M0DF01 only)
  *             - \ref GPIOD
  *             - \ref GPIOE(KM1M0DF01 only)
  *             - \ref GPIOF(KM1M0DF01 only)
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, GPIO3, GPIO9, GPIOD).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO3
  *             - \ref GPIO9
  *             - \ref GPIOD
  * @param[in]  u8Odc : Pin of the specified port. Select from the macros below.
  *                     (The logical sum of multiple macros is also possible.)
  *              | GPIO0                               | GPIO1            | GPIO3            |
  *              |:------------------------------------|:-----------------|:-----------------|
  *              | \ref GPIO_P00ODC                    | \ref GPIO_P14ODC | \ref GPIO_P30ODC |
  *              | \ref GPIO_P02ODC                    |                  | \ref GPIO_P32ODC |
  *              | \ref GPIO_P03ODC                    |                  | \ref GPIO_P33ODC |
  *              | \ref GPIO_P05ODC (KM1M0DF01/02 only)|                  | \ref GPIO_P35ODC |
  *              | \ref GPIO_P06ODC (KM1M0DF01/02 only)|                  |                  |
  *              -----------------------------------------------------------------------------
  *              | GPIO9                               | GPIOD            |
  *              |:------------------------------------|:-----------------|
  *              | \ref GPIO_P93ODC                    | \ref GPIO_PD0ODC |
  *              | \ref GPIO_P95ODC                    | \ref GPIO_PD2ODC |
  *              |                                     |                  |
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

/*-----------------------------*/
/* BSP API function prototypes */
/*-----------------------------*/
void GPIO_SetFunctionMode(GPIO_MD_T *gpio_md, uint8_t u8Pin, uint32_t u32Value);
void GPIO_SetPullCtrl(GPIO_T *gpio, uint8_t u8Pin, uint8_t u8Value);
void GPIO_SetNfClk(NF_T *nf, uint8_t u8Smp);
void GPIO_ClearNMIIntFlag(void);
void GPIO_SetInputLevel(GPIO_T *gpio, uint8_t u8Pin, uint8_t u8Level);
void GPIO_SetIntCond(uint32_t u32Irqtgn, uint32_t u32Edge, uint32_t u32Trigger);
void GPIO_ClearExternalIntFlag(uint32_t u32EintNum);
void GPIO_DisableExternalInt(uint32_t u32EintNum);
void GPIO_EnableExternalInt(uint32_t u32EintNum);
uint32_t GPIO_GetExternalIntFlag(uint32_t u32EintNum);
uint32_t GPIO_GetExternalIntDetectFlag(uint32_t u32EintNum);

/*@}*/ /* end of group GPIO_EXPORTED_FUNCTIONS */

/*@}*/ /* end of group GPIO_Driver */

/*@}*/ /* end of group Standard_Driver */

#endif  /* __GPIO_H__ */

/*** (C) COPYRIGHT 2024 Nuvoton Technology Corp. Japan ***/
