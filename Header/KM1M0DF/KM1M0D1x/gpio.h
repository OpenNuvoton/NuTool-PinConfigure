/**************************************************************************//**
 * @file     gpio.h
 * @version  V1.00
 * @brief    KM1M0DF series GPIO Driver Header File
 *
 * SPDX-License-Identifier: Apache-2.0
 * @copyright (C) 2023 Nuvoton Technology Corp. Japan All rights reserved.
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
#define GPIO_LED_NO_OUTPUT              (0U)                                   /*!< No output LED            \hideinitializer */
#define GPIO_LED_OUTPUT                 (1U)                                   /*!< output LED resistor      \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Input level selection.                                                                                 */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_VDD50_30_LOW_LEVEL         (0U)                                   /*!< VDD50 x 0.7(High level) VDD50 x 0.3(Low level)    \hideinitializer */
#define GPIO_VDD50_45_LOW_LEVEL         (1U)                                   /*!< VDD50 x 0.7(High level) VDD50 x 0.45(Low level)   \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Nch open drain output control definitions.                                                             */
/*---------------------------------------------------------------------------------------------------------*/
/* Pin of the specified port */
#define GPIO_P01ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< P01 Nch open drain selection \hideinitializer */
#define GPIO_P02ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P02 Nch open drain selection \hideinitializer */
#define GPIO_P03ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P03 Nch open drain selection \hideinitializer */
#define GPIO_P05ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P05 Nch open drain selection \hideinitializer */
#define GPIO_P10ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P10 Nch open drain selection \hideinitializer */
#define GPIO_P20ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P20 Nch open drain selection \hideinitializer */
#define GPIO_P21ODC                     GPIO_IOPnODC_Pn1ODC_Msk                 /*!< P21 Nch open drain selection \hideinitializer */
#define GPIO_P33ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P33 Nch open drain selection \hideinitializer */
#define GPIO_P34ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< P34 Nch open drain selection \hideinitializer */
#define GPIO_P43ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P43 Nch open drain selection \hideinitializer */
#define GPIO_P45ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P45 Nch open drain selection \hideinitializer */
#define GPIO_P46ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< P46 Nch open drain selection \hideinitializer */
#define GPIO_P47ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< P47 Nch open drain selection \hideinitializer */
#define GPIO_P50ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P50 Nch open drain selection \hideinitializer */
#define GPIO_P52ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P52 Nch open drain selection \hideinitializer */
#define GPIO_P64ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< P64 Nch open drain selection \hideinitializer */
#define GPIO_P66ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< P66 Nch open drain selection \hideinitializer */
#define GPIO_P67ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< P67 Nch open drain selection \hideinitializer */
#define GPIO_P70ODC                     GPIO_IOPnODC_Pn0ODC_Msk                 /*!< P70 Nch open drain selection \hideinitializer */
#define GPIO_P72ODC                     GPIO_IOPnODC_Pn2ODC_Msk                 /*!< P72 Nch open drain selection \hideinitializer */
#define GPIO_P73ODC                     GPIO_IOPnODC_Pn3ODC_Msk                 /*!< P73 Nch open drain selection \hideinitializer */
#define GPIO_P74ODC                     GPIO_IOPnODC_Pn4ODC_Msk                 /*!< P74 Nch open drain selection \hideinitializer */
#define GPIO_P75ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< P75 Nch open drain selection \hideinitializer */
#define GPIO_P77ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< P77 Nch open drain selection \hideinitializer */
#define GPIO_PA5ODC                     GPIO_IOPnODC_Pn5ODC_Msk                 /*!< PA5 Nch open drain selection \hideinitializer */
#define GPIO_PA6ODC                     GPIO_IOPnODC_Pn6ODC_Msk                 /*!< PA6 Nch open drain selection \hideinitializer */
#define GPIO_PA7ODC                     GPIO_IOPnODC_Pn7ODC_Msk                 /*!< PA7 Nch open drain selection \hideinitializer */

/* Nch open drain output selection */
#define GPIO_ODC_PUSHPULL               (0U)                                    /*!< Push-pull output \hideinitializer */
#define GPIO_ODC_NCH_OPENDRAIN          (1U)                                    /*!< Nch open drain output \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin-Function definitions                                                                               */
/*---------------------------------------------------------------------------------------------------------*/
/********************* Bit definition of IOP0MD register **********************/
#define GPIO_P00MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P00MD_TM07IOB              (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM07IOB input/output pin. \hideinitializer */
#define GPIO_P00MD_TM10IOB              (0x02UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM10IOB input/output pin. \hideinitializer */
#define GPIO_P00MD_SBI1A                (0x04UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBI1A input pin. \hideinitializer */
#define GPIO_P00MD_LED0                 (0x09UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< LED0 output pin. \hideinitializer */

#define GPIO_P01MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P01MD_TM08IOB              (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM08IOB input/output pin. \hideinitializer */
#define GPIO_P01MD_TM09IOB              (0x02UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM09IOB input/output pin. \hideinitializer */
#define GPIO_P01MD_SBO1A                (0x04UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBO1A input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */
#define GPIO_P01MD_LED1                 (0x09UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< LED1 output pin. \hideinitializer */

#define GPIO_P02MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P02MD_SBT1A                (0x04UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT1A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P02MD_LED2                 (0x09UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< LED2 output pin. \hideinitializer */

#define GPIO_P03MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P03MD_TM00IOB              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM00IOB input/output pin. \hideinitializer */
#define GPIO_P03MD_TM02IOB              (0x02UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM02IOB input/output pin. \hideinitializer */
#define GPIO_P03MD_TM15IOB              (0x03UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM15IOB input/output pin. \hideinitializer */
#define GPIO_P03MD_SBC1A                (0x04UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBC1A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P03MD_LED3                 (0x09UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< LED3 output pin. \hideinitializer */

#define GPIO_P04MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P04MD_TM11IOA              (0x03UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM11IOA input/output pin. \hideinitializer */
#define GPIO_P04MD_LED4                 (0x09UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< LED4 output pin. \hideinitializer */

#define GPIO_P05MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P05MD_TM12IOA              (0x03UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< TM12IOA input/output pin. \hideinitializer */
#define GPIO_P05MD_SBO3A                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBO3A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P05MD_LED5                 (0x09UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< LED5 output pin. \hideinitializer */

#define GPIO_P06MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P06MD_SBI3A                (0x04UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBI3A input pin. \hideinitializer */
#define GPIO_P06MD_LED6                 (0x09UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< LED6 output pin. \hideinitializer */

/********************* Bit definition of IOP1MD register **********************/
#define GPIO_P10MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P10MD_TM00IOC              (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM00IOC input/output pin. \hideinitializer */
#define GPIO_P10MD_TM15IOC              (0x02UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM15IOC input/output pin. \hideinitializer */
#define GPIO_P10MD_SBC4B                (0x04UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBC4B input/output pin.(Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOP2MD register **********************/
#define GPIO_P20MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P20MD_SBT3A                (0x04UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBT3A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P20MD_SCL8                 (0x05UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< IICSCL8 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P20MD_DA1OUT0              (0x07UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< DA1OUT0 output pin. \hideinitializer */
#define GPIO_P20MD_IRQ0A                (0x0AUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External interrupt input 0A pin. \hideinitializer */

#define GPIO_P21MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P21MD_SBC3A                (0x04UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBC3A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P21MD_SDA8                 (0x05UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< IICSDA8 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P21MD_IRQ1A                (0x0AUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External interrupt input 1A pin. \hideinitializer */

#define GPIO_P22MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P22MD_IRQ2A                (0x0AUL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< External interrupt input 2A pin. \hideinitializer */

#define GPIO_P23MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P23MD_TM13IOA              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM13IOA input/output pin. \hideinitializer */
#define GPIO_P23MD_IRQ3A                (0x0AUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< External interrupt input 3A pin. \hideinitializer */

#define GPIO_P24MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P24MD_TM14IOA              (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM14IOA input/output pin. \hideinitializer */
#define GPIO_P24MD_IRQ4A                (0x0AUL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< External interrupt input 4A pin. \hideinitializer */

#define GPIO_P25MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P25MD_OSC1                 (0x07UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< External high-speed vibration OSC1 pin. \hideinitializer */

#define GPIO_P26MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P26MD_OSC2                 (0x07UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< External high-speed vibration OSC2 pin. \hideinitializer */

/********************* Bit definition of IOP3MD register **********************/
#define GPIO_P33MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P33MD_SBO4B                (0x04UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBO4B input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */
#define GPIO_P33MD_SDA6B                (0x05UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< IICSDA6B input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P34MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P34MD_SBT4B                (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBT4B input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P34MD_SCL6B                (0x05UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< IIC0SCL6B input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P35MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P35MD_SBI4B                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBI4B input pin. \hideinitializer */

/********************* Bit definition of IOP4MD register **********************/
#define GPIO_P43MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P43MD_SBO0B                (0x04UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBO0B input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */
#define GPIO_P43MD_LTX0B                (0x04UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< LTX0B input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */

#define GPIO_P44MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P44MD_SBI0B                (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBI0B input pin. \hideinitializer */
#define GPIO_P44MD_LRX0B                (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< LRX0B input pin. \hideinitializer */

#define GPIO_P45MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P45MD_SBT0B                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBT0B input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P46MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P46MD_SDA7B                (0x04UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< IICSDA7B input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P47MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P47MD_SCL7B                (0x04UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< IICSCL7B input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOP5MD register **********************/
#define GPIO_P50MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P50MD_TM07OUT0             (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM07OUT0 output pin. \hideinitializer */
#define GPIO_P50MD_SBO0A                (0x04UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO0A input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */
#define GPIO_P50MD_LTX0A                (0x04UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< LTX0A input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */
#define GPIO_P50MD_CMPREF1B             (0x08UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< CMPREF1B input pin. \hideinitializer */
#define GPIO_P50MD_KEY0                 (0x0AUL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Key interrupt input KEY0 pin. \hideinitializer */

#define GPIO_P51MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P51MD_TM07OUT1             (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM07OUT1 output pin. \hideinitializer */
#define GPIO_P51MD_SBI0A                (0x04UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI0A input pin. \hideinitializer */
#define GPIO_P51MD_LRX0A                (0x04UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< LRX0A input pin. \hideinitializer */
#define GPIO_P51MD_CMPIN1B              (0x08UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< CMPIN1B input pin. \hideinitializer */
#define GPIO_P51MD_KEY1                 (0x0AUL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Key interrupt input KEY1 pin. \hideinitializer */

#define GPIO_P52MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P52MD_TM07OUT2             (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM07OUT2 output pin. \hideinitializer */
#define GPIO_P52MD_SBT0A                (0x04UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT0A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P52MD_DA1OUT1              (0x07UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< DA1OUT1 output pin. \hideinitializer */
#define GPIO_P52MD_KEY2                 (0x0AUL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Key interrupt input KEY2 pin. \hideinitializer */

#define GPIO_P53MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P53MD_TM07OUT3             (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM07OUT3 output pin. \hideinitializer */
#define GPIO_P53MD_BUZZERA              (0x02UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< BUZZERA output pin. \hideinitializer */
#define GPIO_P53MD_CMPREF1A             (0x08UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< CMPREF1A input pin. \hideinitializer */
#define GPIO_P53MD_KEY3                 (0x0AUL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Key interrupt input KEY3 pin. \hideinitializer */

#define GPIO_P54MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P54MD_TM07OUT4             (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM07OUT4 output pin. \hideinitializer */
#define GPIO_P54MD_NBUZZERA             (0x02UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< NBUZZERA output pin. \hideinitializer */
#define GPIO_P54MD_CMPIN1A              (0x08UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< CMPIN1A input pin. \hideinitializer */
#define GPIO_P54MD_KEY4                 (0x0AUL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Key interrupt input KEY4 pin. \hideinitializer */

#define GPIO_P55MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P55MD_TM07OUT5             (0x01UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< TM07OUT5 output pin. \hideinitializer */
#define GPIO_P55MD_CMPOT1               (0x08UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< CMPOT1 output pin. \hideinitializer */
#define GPIO_P55MD_KEY5                 (0x0AUL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Key interrupt input KEY5 pin. \hideinitializer */

#define GPIO_P56MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P56MD_KEY6                 (0x0AUL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Key interrupt input KEY6 pin. \hideinitializer */

#define GPIO_P57MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P57MD_KEY7                 (0x0AUL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Key interrupt input KEY7 pin. \hideinitializer */

/********************* Bit definition of IOP6MD register **********************/
#define GPIO_P61MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_P62MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P62MD_TM01IOB              (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM01IOB input/output pin. \hideinitializer */

#define GPIO_P63MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P63MD_TM03IOB              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM03IOB input/output pin. \hideinitializer */

#define GPIO_P64MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P64MD_TM04IOB              (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM04IOB input/output pin. \hideinitializer */
#define GPIO_P64MD_SBC4A                (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBC4A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P65MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P65MD_SBI4A                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBI4A input pin. \hideinitializer */

#define GPIO_P66MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P66MD_SBO4A                (0x04UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBO4A input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */
#define GPIO_P66MD_SDA6A                (0x05UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< IICSDA6A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P67MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P67MD_SBT4A                (0x04UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< SBT4A input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */
#define GPIO_P67MD_SCL6A                (0x05UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< IICSCL6A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOP7MD register **********************/
#define GPIO_P70MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P70MD_SBO2A                (0x04UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< SBO2A input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */

#define GPIO_P71MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P71MD_SBI2A                (0x04UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< SBI2A input pin. \hideinitializer */

#define GPIO_P72MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P72MD_SBT2A                (0x04UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< SBT2A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P73MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P73MD_TM13IOB              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM13IOB input/output pin. \hideinitializer */
#define GPIO_P73MD_SBC2A                (0x04UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< SBC2A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P73MD_SDA7A                (0x05UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< IICSDA7A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P74MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P74MD_TM14IOB              (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM14IOB input/output pin. \hideinitializer */
#define GPIO_P74MD_SBC1B                (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBC1B input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_P74MD_SCL7A                (0x05UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< IICSCL7A input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

#define GPIO_P75MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P75MD_SBO1B                (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBO1B input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */

#define GPIO_P76MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P76MD_SBI1B                (0x04UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBI1B input pin. \hideinitializer */

#define GPIO_P77MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P77MD_SBT1B                (0x04UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< SBT1B input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */

/********************* Bit definition of IOP8MD register **********************/
#define GPIO_P80MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P80MD_SDO0                 (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< Timer synchronous output SDO0 pin. \hideinitializer */
#define GPIO_P80MD_PWM0A                (0x02UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< PWM0A output pin. \hideinitializer */

#define GPIO_P81MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P81MD_SDO1                 (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< Timer synchronous output SDO1 pin. \hideinitializer */
#define GPIO_P81MD_NPWM0A               (0x02UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< NPWM0A output pin. \hideinitializer */

#define GPIO_P82MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P82MD_SDO2                 (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< Timer synchronous output SDO2 pin. \hideinitializer */
#define GPIO_P82MD_PWM1A                (0x02UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< PWM1A output pin. \hideinitializer */

#define GPIO_P83MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P83MD_SDO3                 (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< Timer synchronous output SDO3 pin. \hideinitializer */
#define GPIO_P83MD_NPWM1A               (0x02UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< NPWM1A output pin. \hideinitializer */

#define GPIO_P84MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P84MD_SDO4                 (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< Timer synchronous output SDO4 pin. \hideinitializer */
#define GPIO_P84MD_PWM2A                (0x02UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< PWM2A output pin. \hideinitializer */

#define GPIO_P85MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P85MD_SDO5                 (0x01UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< Timer synchronous output SDO5 pin. \hideinitializer */
#define GPIO_P85MD_NPWM2A               (0x02UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< NPWM2A output pin. \hideinitializer */
#define GPIO_P85MD_DA0OUT0              (0x07UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< DA0OUT0 output pin. \hideinitializer */

#define GPIO_P86MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P86MD_SDO6                 (0x01UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< Timer synchronous output SDO6 pin. \hideinitializer */
#define GPIO_P86MD_PWMBCSTA             (0x02UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< PWMBCSTA output pin. \hideinitializer */

#define GPIO_P87MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P87MD_SDO7                 (0x01UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Timer synchronous output SDO7 pin. \hideinitializer */

/********************* Bit definition of IOP9MD register **********************/
#define GPIO_P90MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P90MD_XO                   (0x07UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< External low speed vibration XO pin. \hideinitializer */

#define GPIO_P91MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P91MD_XI                   (0x07UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< External low speed vibration XI pin. \hideinitializer */

#define GPIO_P92MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_P93MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_P94MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_P94MD_DA0OUT1              (0x07UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< DA0OUT1 output pin. \hideinitializer */
#define GPIO_P94MD_CMPREF0B             (0x08UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< CMPREF0B input pin. \hideinitializer */

#define GPIO_P95MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */

/********************* Bit definition of IOPAMD register **********************/
#define GPIO_PA0MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA0MD_TM00IOA              (0x01UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM00IOA input/output pin. \hideinitializer */
#define GPIO_PA0MD_TM15IOA              (0x02UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< TM15IOA input/output pin. \hideinitializer */
#define GPIO_PA0MD_AN0                  (0x07UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< AN0 input pin. \hideinitializer */

#define GPIO_PA1MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA1MD_TM01IOA              (0x01UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM01IOA input/output pin. \hideinitializer */
#define GPIO_PA1MD_TM11IOB              (0x02UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< TM11IOB input/output pin. \hideinitializer */
#define GPIO_PA1MD_AN1                  (0x07UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< AN1 input pin. \hideinitializer */

#define GPIO_PA2MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA2MD_TM02IOA              (0x01UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM02IOA input/output pin. \hideinitializer */
#define GPIO_PA2MD_TM12IOB              (0x02UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< TM12IOB input/output pin. \hideinitializer */
#define GPIO_PA2MD_AN2                  (0x07UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< AN2 input pin. \hideinitializer */

#define GPIO_PA3MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA3MD_TM03IOA              (0x01UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< TM03IOA input/output pin. \hideinitializer */
#define GPIO_PA3MD_AN3                  (0x07UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< AN3 input pin. \hideinitializer */

#define GPIO_PA4MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA4MD_TM04IOA              (0x01UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< TM04IOA input/output pin. \hideinitializer */
#define GPIO_PA4MD_SBI5                 (0x04UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< SBI5 input pin. \hideinitializer */
#define GPIO_PA4MD_AN4                  (0x07UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< AN4 input pin. \hideinitializer */
#define GPIO_PA4MD_CMPREF0A             (0x08UL << GPIO_MD_IOPnMD_Pn4MD_Pos)      /*!< CMPREF0A input pin. \hideinitializer */

#define GPIO_PA5MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA5MD_TM07IOA              (0x01UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< TM07IOA input/output pin. \hideinitializer */
#define GPIO_PA5MD_SBO5                 (0x04UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< SBO5 input/output pin. (Nch open-drain control is valid when serial I/F input/output is selected.) \hideinitializer */
#define GPIO_PA5MD_AN5                  (0x07UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< AN5 input pin. \hideinitializer */
#define GPIO_PA5MD_CMPIN0A              (0x08UL << GPIO_MD_IOPnMD_Pn5MD_Pos)      /*!< CMPIN0A input pin. \hideinitializer */

#define GPIO_PA6MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA6MD_TM08IOA              (0x01UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< TM08IOA input/output pin. \hideinitializer */
#define GPIO_PA6MD_TM10IOA              (0x02UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< TM10IOA input/output pin. \hideinitializer */
#define GPIO_PA6MD_SBT5                 (0x04UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< SBT5 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PA6MD_AN6                  (0x07UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< AN6 input pin. \hideinitializer */
#define GPIO_PA6MD_CMPOT0               (0x08UL << GPIO_MD_IOPnMD_Pn6MD_Pos)      /*!< CMPOT0 output pin. \hideinitializer */

#define GPIO_PA7MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PA7MD_MONITOR              (0x01UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< Monitor output pin. \hideinitializer */
#define GPIO_PA7MD_TM09IOA              (0x02UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< TM09IOA input/output pin. \hideinitializer */
#define GPIO_PA7MD_SBC5                 (0x04UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< SBC5 input/output pin. (Nch open-drain control is valid when serial I/F output is selected.) \hideinitializer */
#define GPIO_PA7MD_AN7                  (0x07UL << GPIO_MD_IOPnMD_Pn7MD_Pos)      /*!< AN7 input pin. \hideinitializer */

/********************* Bit definition of IOPBMD register **********************/
#define GPIO_PB0MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB0MD_AN8                  (0x07UL << GPIO_MD_IOPnMD_Pn0MD_Pos)      /*!< AN8 input pin. \hideinitializer */

#define GPIO_PB1MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB1MD_AN9                  (0x07UL << GPIO_MD_IOPnMD_Pn1MD_Pos)      /*!< AN9 input pin. \hideinitializer */

#define GPIO_PB2MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB2MD_AN10                 (0x07UL << GPIO_MD_IOPnMD_Pn2MD_Pos)      /*!< AN10 input pin. \hideinitializer */

#define GPIO_PB3MD_GPIO                 (0x00UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_PB3MD_AN11                 (0x07UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< AN11 input pin. \hideinitializer */
#define GPIO_PB3MD_CMPIN0B              (0x08UL << GPIO_MD_IOPnMD_Pn3MD_Pos)      /*!< CMPIN0B input pin. \hideinitializer */
/*---------------------------------------------------------------------------------------------------------*/
/*  Pin Interrupt control definitions                                                                      */
/*---------------------------------------------------------------------------------------------------------*/
/* Interrupt definitions */
#define GPIO_EXINT0                     (EXINT_MD_EXTDEG_IRQEG4_Pos)              /*!< External interrupt 0  \hideinitializer */
#define GPIO_EXINT1                     (EXINT_MD_EXTDEG_IRQEG5_Pos)              /*!< External interrupt 1  \hideinitializer */
#define GPIO_EXINT2                     (EXINT_MD_EXTDEG_IRQEG6_Pos)              /*!< External interrupt 2  \hideinitializer */
#define GPIO_EXINT3                     (EXINT_MD_EXTDEG_IRQEG7_Pos)              /*!< External interrupt 3  \hideinitializer */
#define GPIO_EXINT4                     (EXINT_MD_EXTDEG_IRQEG8_Pos)              /*!< External interrupt 4  \hideinitializer */
#define GPIO_KEYINT0                    (EXINT_MD_EXTDEG_IRQEG9_Pos)              /*!< KEY interrupt 0       \hideinitializer */
#define GPIO_KEYINT1                    (EXINT_MD_EXTDEG_IRQEG10_Pos)             /*!< KEY interrupt 1       \hideinitializer */
#define GPIO_KEYINT2                    (EXINT_MD_EXTDEG_IRQEG11_Pos)             /*!< KEY interrupt 2       \hideinitializer */
#define GPIO_KEYINT3                    (EXINT_MD_EXTDEG_IRQEG12_Pos)             /*!< KEY interrupt 3       \hideinitializer */
#define GPIO_KEYINT4                    (EXINT_MD_EXTDEG_IRQEG13_Pos)             /*!< KEY interrupt 4       \hideinitializer */
#define GPIO_KEYINT5                    (EXINT_MD_EXTDEG_IRQEG14_Pos)             /*!< KEY interrupt 5       \hideinitializer */
#define GPIO_KEYINT6                    (EXINT_MD_EXTDEG_IRQEG15_Pos)             /*!< KEY interrupt 6       \hideinitializer */
#define GPIO_KEYINT7                    (EXINT_MD_EXTDEG_IRQEG16_Pos)             /*!< KEY interrupt 7       \hideinitializer */

/* Both edge detect selection */
#define GPIO_INTERRUPT_BOTHEDGE_DISABLE     (0x00U)                               /*!< GPIO interrupt both-edge : disable  \hideinitializer */
#define GPIO_INTERRUPT_BOTHEDGE_ENABLE      (0x01U)                               /*!< GPIO interrupt both-edge : enable   \hideinitializer */

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

/*---------------------------------------------------------------------------------------------------------*/
/*  KEY interrupt number                                                                                   */
/*---------------------------------------------------------------------------------------------------------*/
/* The following is used to operate the registers GnIRCLR, GnIESET, GnIECLR, GnID.                                     */
/* Each bit of the register GnIRCLR, GnIESET, GnIECLR, GnID indicates the interrupt group number and is common to all. */
/* Therefore, the following refers to the GnIRCLR macro, but they are used in common.                                  */
#define GPIO_KEY_INT0                    (EXINT_CTRL_GnID_ID0_Msk)                /*!< GPIO KEY interrupt0       \hideinitializer */
#define GPIO_KEY_INT1                    (EXINT_CTRL_GnID_ID1_Msk)                /*!< GPIO KEY interrupt1       \hideinitializer */
#define GPIO_KEY_INT2                    (EXINT_CTRL_GnID_ID2_Msk)                /*!< GPIO KEY interrupt2       \hideinitializer */
#define GPIO_KEY_INT3                    (EXINT_CTRL_GnID_ID3_Msk)                /*!< GPIO KEY interrupt3       \hideinitializer */
#define GPIO_KEY_INT4                    (EXINT_CTRL_GnID_ID4_Msk)                /*!< GPIO KEY interrupt4       \hideinitializer */
#define GPIO_KEY_INT5                    (EXINT_CTRL_GnID_ID5_Msk)                /*!< GPIO KEY interrupt5       \hideinitializer */
#define GPIO_KEY_INT6                    (EXINT_CTRL_GnID_ID6_Msk)                /*!< GPIO KEY interrupt6       \hideinitializer */
#define GPIO_KEY_INT7                    (EXINT_CTRL_GnID_ID7_Msk)                /*!< GPIO KEY interrupt7       \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Synchronous output definitions                                                                         */
/*---------------------------------------------------------------------------------------------------------*/
/* Pin Output selection */
#define GPIO_SYNC_P80                    (GPIO_IOPnSYO_PnSYO0_Pos)                /*!< GPIO P80 output           \hideinitializer */
#define GPIO_SYNC_P81                    (GPIO_IOPnSYO_PnSYO1_Pos)                /*!< GPIO P81 output           \hideinitializer */
#define GPIO_SYNC_P82                    (GPIO_IOPnSYO_PnSYO2_Pos)                /*!< GPIO P82 output           \hideinitializer */
#define GPIO_SYNC_P83                    (GPIO_IOPnSYO_PnSYO3_Pos)                /*!< GPIO P83 output           \hideinitializer */
#define GPIO_SYNC_P84                    (GPIO_IOPnSYO_PnSYO4_Pos)                /*!< GPIO P84 output           \hideinitializer */
#define GPIO_SYNC_P85                    (GPIO_IOPnSYO_PnSYO5_Pos)                /*!< GPIO P85 output           \hideinitializer */
#define GPIO_SYNC_P86                    (GPIO_IOPnSYO_PnSYO6_Pos)                /*!< GPIO P86 output           \hideinitializer */
#define GPIO_SYNC_P87                    (GPIO_IOPnSYO_PnSYO7_Pos)                /*!< GPIO P87 output           \hideinitializer */

/* Output selection */
#define GPIO_OUTPUT_IOPORT               (0U)                                     /*!< GPIO I/O port output      \hideinitializer */
#define GPIO_OUTPUT_SYNC                 (1U)                                     /*!< GPIO Synchronous output   \hideinitializer */

/* Synchronous output event */
#define GPIO_SYNC_EVENT_IRQ2A            (0x00U << GPIO_IOPnSEV_PnSEV_Pos)        /*!< GPIO IRQ2A output         \hideinitializer */
#define GPIO_SYNC_EVENT_TM7IRQ           (0x01U << GPIO_IOPnSEV_PnSEV_Pos)        /*!< GPIO TM7IRQ output        \hideinitializer */
#define GPIO_SYNC_EVENT_TM2IRQ           (0x02U << GPIO_IOPnSEV_PnSEV_Pos)        /*!< GPIO TM2IRQ output        \hideinitializer */
#define GPIO_SYNC_EVENT_TM1IRQ           (0x03U << GPIO_IOPnSEV_PnSEV_Pos)        /*!< GPIO TM1IRQ output        \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Pin Real-time control (IRQ0A event) definitions                                                        */
/*---------------------------------------------------------------------------------------------------------*/
/* Register mask value */
#define GPIO_IOPnCNT1_Msk                (0x10U)                                  /*!< IOPnCNT1 register   \hideinitializer */
#define GPIO_IOPnCNT2_Msk                (0x20U)                                  /*!< IOPnCNT2 register   \hideinitializer */
/* Pin Output Control */
#define GPIO_P80CNT                      (GPIO_IOPnCNT1_Msk | 0x0U)               /*!< P80 Output          \hideinitializer */
#define GPIO_P81CNT                      (GPIO_IOPnCNT1_Msk | 0x1U)               /*!< P81 Output          \hideinitializer */
#define GPIO_P82CNT                      (GPIO_IOPnCNT1_Msk | 0x2U)               /*!< P82 Output          \hideinitializer */
#define GPIO_P83CNT                      (GPIO_IOPnCNT1_Msk | 0x3U)               /*!< P83 Output          \hideinitializer */
#define GPIO_P84CNT                      (GPIO_IOPnCNT2_Msk | 0x0U)               /*!< P85 Output          \hideinitializer */
#define GPIO_P85CNT                      (GPIO_IOPnCNT2_Msk | 0x1U)               /*!< P86 Output          \hideinitializer */
#define GPIO_PA0CNT                      (GPIO_IOPnCNT1_Msk | 0x0U)               /*!< PA0 Output          \hideinitializer */
#define GPIO_PA2CNT                      (GPIO_IOPnCNT1_Msk | 0x1U)               /*!< PA2 Output          \hideinitializer */
#define GPIO_PA4CNT                      (GPIO_IOPnCNT1_Msk | 0x2U)               /*!< PA4 Output          \hideinitializer */
#define GPIO_PA5CNT                      (GPIO_IOPnCNT1_Msk | 0x3U)               /*!< PA5 Output          \hideinitializer */
#define GPIO_PA6CNT                      (GPIO_IOPnCNT2_Msk | 0x0U)               /*!< PA6 Output          \hideinitializer */
#define GPIO_PA7CNT                      (GPIO_IOPnCNT2_Msk | 0x1U)               /*!< PA7 Output          \hideinitializer */
/* Real-time control selection */
#define GPIO_REALTIME_CONTROL_DISABLE    (0x0U)                                   /*!< I/O port (Real-time control disabled)  \hideinitializer */
#define GPIO_REALTIME_CONTROL_HIGH       (0x1U)                                   /*!< "1"(High) output                       \hideinitializer */
#define GPIO_REALTIME_CONTROL_LOW        (0x2U)                                   /*!< "0"(Low) output                        \hideinitializer */
#define GPIO_REALTIME_CONTROL_HIZ        (0x3U)                                   /*!< "Hi-z" output                          \hideinitializer */

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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIOA, GPIOB).
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
  * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, GPIO2, GPIO3, GPIO4, GPIO5, GPIO6, GPIO7, GPIOA).
  *             - \ref GPIO0
  *             - \ref GPIO1
  *             - \ref GPIO2
  *             - \ref GPIO3
  *             - \ref GPIO4
  *             - \ref GPIO5
  *             - \ref GPIO6
  *             - \ref GPIO7
  *             - \ref GPIOA
  * @param[in]  u8Odc : Pin of the specified port. Select from the macros below.
  *                     (The logical sum of multiple macros is also possible.)
  *              | GPIO0            | GPIO1            | GPIO2            | GPIO3            | GPIO4            |
  *              |:-----------------|:-----------------|:-----------------|:-----------------|:-----------------|
  *              | \ref GPIO_P01ODC | \ref GPIO_P10ODC | \ref GPIO_P20ODC | \ref GPIO_P33ODC | \ref GPIO_P43ODC |
  *              | \ref GPIO_P02ODC |                  | \ref GPIO_P21ODC | \ref GPIO_P34ODC | \ref GPIO_P45ODC |
  *              | \ref GPIO_P03ODC |                  |                  |                  | \ref GPIO_P46ODC |
  *              | \ref GPIO_P05ODC |                  |                  |                  | \ref GPIO_P47ODC |
  *              ------------------------------------------------------------------------------------------------
  *              | GPIO5            | GPIO6            | GPIO7            | GPIOA            |
  *              |:-----------------|:-----------------|:-----------------|:-----------------|
  *              | \ref GPIO_P50ODC | \ref GPIO_P64ODC | \ref GPIO_P70ODC | \ref GPIO_PA5ODC |
  *              | \ref GPIO_P52ODC | \ref GPIO_P66ODC | \ref GPIO_P72ODC | \ref GPIO_PA6ODC |
  *              |                  | \ref GPIO_P67ODC | \ref GPIO_P73ODC | \ref GPIO_PA7ODC |
  *              |                  |                  | \ref GPIO_P74ODC |                  |
  *              |                  |                  | \ref GPIO_P75ODC |                  |
  *              |                  |                  | \ref GPIO_P77ODC |                  |
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
void GPIO_EnableResist(GPIO_T *gpio, uint8_t u8Ctl);
void GPIO_DisableResist(GPIO_T *gpio, uint8_t u8Ctl);
void GPIO_SetPullUpDownCtrl(GPIO_T *gpio, uint8_t u8Pin, uint8_t u8Value);
void GPIO_SetLEDOutput(GPIO_T *gpio, uint8_t u8Pin, uint8_t u8Value);
void GPIO_SetInputLevel(GPIO_T *gpio, uint8_t u8Pin, uint8_t u8Level);
void GPIO_SetRealTimeCtrl(GPIO_T *gpio, uint8_t u8PinCnt, uint8_t u8RealTimeCtr);
void GPIO_SetSyncOutputCtrl(uint8_t u8PinSel, uint8_t u8OutSel, uint8_t u8OutCtr);
void GPIO_SetIntCond(uint32_t u32Irqtgn, uint32_t u32Edge, uint32_t u32Trigger);
void GPIO_ClearExternalIntFlag(uint32_t u32EintNum);
void GPIO_DisableExternalInt(uint32_t u32EintNum);
void GPIO_EnableExternalInt(uint32_t u32EintNum);
uint32_t GPIO_GetExternalIntFlag(uint32_t u32EintNum);
uint32_t GPIO_GetExternalIntDetectFlag(uint32_t u32EintNum);
void GPIO_ClearKEYIntFlag(uint32_t u32KeyNum);
void GPIO_DisableKEYInt(uint32_t u32KeyNum);
void GPIO_EnableKEYInt(uint32_t u32KeyNum);
uint32_t GPIO_GetKEYIntFlag(uint32_t u32KeyNum);
uint32_t GPIO_GetKEYIntDetectFlag(uint32_t u32KeyNum);


/*@}*/ /* end of group GPIO_EXPORTED_FUNCTIONS */

/*@}*/ /* end of group GPIO_Driver */

/*@}*/ /* end of group Standard_Driver */

#endif  /* __GPIO_H__ */

/*** (C) COPYRIGHT 2023 Nuvoton Technology Corp. Japan ***/
