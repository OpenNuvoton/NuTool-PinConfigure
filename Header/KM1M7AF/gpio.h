/**************************************************************************//**
 * @file     gpio.h
 * @version  V1.00
 * @brief    KM1M7AF series GPIO Driver Header File
 *
 * SPDX-License-Identifier: Apache-2.0
 * @copyright (C) 2021 Nuvoton Technology Corp. Japan All rights reserved.
 ******************************************************************************/
#ifndef __GPIO_H__
#define __GPIO_H__

#ifdef __cplusplus
extern "C"
{
#endif


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
/*  Input level selection definitions.                                                                     */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_IOP0ILV_P06ILV_SET              GPIO_IOPnILV_Pn6ILV_Msk               /*!< Input level 1 : 1.35V(H level),0.8V(L level) \hideinitializer */
#define GPIO_IOP0ILV_P07ILV_SET              GPIO_IOPnILV_Pn7ILV_Msk               /*!< Input level 1 : 1.35V(H level),0.8V(L level) \hideinitializer */
#define GPIO_IOP1ILV_P12ILV_SET              GPIO_IOPnILV_Pn2ILV_Msk               /*!< Input level 1 : VDD50x0.8(H level),VDD50x0.2(L level) \hideinitializer */
#define GPIO_IOP1ILV_P13ILV_SET              GPIO_IOPnILV_Pn3ILV_Msk               /*!< Input level 1 : VDD50x0.8(H level),VDD50x0.2(L level) \hideinitializer */
#define GPIO_IOP1ILV_P14ILV_SET              GPIO_IOPnILV_Pn4ILV_Msk               /*!< Input level 1 : VDD50x0.8(H level),VDD50x0.2(L level) \hideinitializer */
#define GPIO_IOP1ILV_P15ILV_SET              GPIO_IOPnILV_Pn5ILV_Msk               /*!< Input level 1 : VDD50x0.8(H level),VDD50x0.2(L level) \hideinitializer */
#define GPIO_IOP2ILV_P20ILV_SET              GPIO_IOPnILV_Pn0ILV_Msk               /*!< Input level 1 : VDD50x0.8(H level),VDD50x0.2(L level) \hideinitializer */
#define GPIO_IOP2ILV_P21ILV_SET              GPIO_IOPnILV_Pn1ILV_Msk               /*!< Input level 1 : VDD50x0.8(H level),VDD50x0.2(L level) \hideinitializer */
#define GPIO_IOP5ILV_P52ILV_SET              GPIO_IOPnILV_Pn2ILV_Msk               /*!< Input level 1 : 1.35V(H level),0.8V(L level) \hideinitializer */
#define GPIO_IOP5ILV_P53ILV_SET              GPIO_IOPnILV_Pn3ILV_Msk               /*!< Input level 1 : 1.35V(H level),0.8V(L level) \hideinitializer */


/*---------------------------------------------------------------------------------------------------------*/
/*  Nch open drain output control definitions.                                                             */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_IOP0ODC_P06ODC_ODC              GPIO_IOPnODC_Pn6ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP0ODC_P07ODC_ODC              GPIO_IOPnODC_Pn7ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP1ODC_P10ODC_ODC              GPIO_IOPnODC_Pn0ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP2ODC_P25ODC_ODC              GPIO_IOPnODC_Pn5ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP2ODC_P26ODC_ODC              GPIO_IOPnODC_Pn6ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP2ODC_P27ODC_ODC              GPIO_IOPnODC_Pn7ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP3ODC_P30ODC_ODC              GPIO_IOPnODC_Pn0ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP3ODC_P31ODC_ODC              GPIO_IOPnODC_Pn1ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP3ODC_P34ODC_ODC              GPIO_IOPnODC_Pn4ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP3ODC_P35ODC_ODC              GPIO_IOPnODC_Pn5ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP4ODC_P40ODC_ODC              GPIO_IOPnODC_Pn0ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP4ODC_P41ODC_ODC              GPIO_IOPnODC_Pn1ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP4ODC_P44ODC_ODC              GPIO_IOPnODC_Pn4ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP4ODC_P45ODC_ODC              GPIO_IOPnODC_Pn5ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP4ODC_P47ODC_ODC              GPIO_IOPnODC_Pn7ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP5ODC_P50ODC_ODC              GPIO_IOPnODC_Pn0ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP5ODC_P52ODC_ODC              GPIO_IOPnODC_Pn2ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP5ODC_P53ODC_ODC              GPIO_IOPnODC_Pn3ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP5ODC_P55ODC_ODC              GPIO_IOPnODC_Pn5ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP5ODC_P56ODC_ODC              GPIO_IOPnODC_Pn6ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP5ODC_P57ODC_ODC              GPIO_IOPnODC_Pn7ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP6ODC_P61ODC_ODC              GPIO_IOPnODC_Pn1ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP6ODC_P62ODC_ODC              GPIO_IOPnODC_Pn2ODC_Msk               /*!< Nch open drain output. \hideinitializer */
#define GPIO_IOP6ODC_P63ODC_ODC              GPIO_IOPnODC_Pn3ODC_Msk               /*!< Nch open drain output. \hideinitializer */


/*---------------------------------------------------------------------------------------------------------*/
/*  Pin-Function definitions.                                                                              */
/*---------------------------------------------------------------------------------------------------------*/
/********************* Bit definition of IOP0MD register **********************/
#define GPIO_IOP0MD_P00MD_GPIO                (0x00UL<<GPIO_IOP0MD_P00MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P00MD_IRQ00               (0x01UL<<GPIO_IOP0MD_P00MD_Pos)     /*!< External interrupt 0 input pin. \hideinitializer */
#define GPIO_IOP0MD_P00MD_TM20A               (0x02UL<<GPIO_IOP0MD_P00MD_Pos)     /*!< Timer 20 input/output pin A. \hideinitializer */
#define GPIO_IOP0MD_P00MD_DBG_TRCCLK          (0x04UL<<GPIO_IOP0MD_P00MD_Pos)     /*!< ETM Trace clock output pin. \hideinitializer */

#define GPIO_IOP0MD_P01MD_GPIO                (0x00UL<<GPIO_IOP0MD_P01MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P01MD_IRQ01               (0x01UL<<GPIO_IOP0MD_P01MD_Pos)     /*!< External interrupt 1 input pin. \hideinitializer */
#define GPIO_IOP0MD_P01MD_TM20B               (0x02UL<<GPIO_IOP0MD_P01MD_Pos)     /*!< Timer 20 input/output pin B. \hideinitializer */
#define GPIO_IOP0MD_P01MD_DBG_TRCSWO          (0x04UL<<GPIO_IOP0MD_P01MD_Pos)     /*!< Serial wire output pin. \hideinitializer */

#define GPIO_IOP0MD_P02MD_GPIO                (0x00UL<<GPIO_IOP0MD_P02MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P02MD_IRQ02               (0x01UL<<GPIO_IOP0MD_P02MD_Pos)     /*!< External interrupt 2 input pin. \hideinitializer */
#define GPIO_IOP0MD_P02MD_TM00A               (0x02UL<<GPIO_IOP0MD_P02MD_Pos)     /*!< Timer 0 input/output pin A. \hideinitializer */
#define GPIO_IOP0MD_P02MD_DBG_TRCD0           (0x04UL<<GPIO_IOP0MD_P02MD_Pos)     /*!< ETM Trace data 0 output pin. \hideinitializer */

#define GPIO_IOP0MD_P03MD_GPIO                (0x00UL<<GPIO_IOP0MD_P03MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P03MD_IRQ03               (0x01UL<<GPIO_IOP0MD_P03MD_Pos)     /*!< External interrupt 3 input pin. \hideinitializer */
#define GPIO_IOP0MD_P03MD_TM00B               (0x02UL<<GPIO_IOP0MD_P03MD_Pos)     /*!< Timer 0 input/output pin B. \hideinitializer */
#define GPIO_IOP0MD_P03MD_DBG_TRCD1           (0x04UL<<GPIO_IOP0MD_P03MD_Pos)     /*!< ETM Trace data 1 output pin. \hideinitializer */

#define GPIO_IOP0MD_P04MD_GPIO                (0x00UL<<GPIO_IOP0MD_P04MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P04MD_IRQ04               (0x01UL<<GPIO_IOP0MD_P04MD_Pos)     /*!< External interrupt 4 input pin. \hideinitializer */
#define GPIO_IOP0MD_P04MD_TM01A               (0x02UL<<GPIO_IOP0MD_P04MD_Pos)     /*!< Timer 1 input/output pin A. \hideinitializer */
#define GPIO_IOP0MD_P04MD_DBG_TRCD2           (0x04UL<<GPIO_IOP0MD_P04MD_Pos)     /*!< ETM Trace data 2 output pin. \hideinitializer */

#define GPIO_IOP0MD_P05MD_GPIO                (0x00UL<<GPIO_IOP0MD_P05MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P05MD_IRQ05               (0x01UL<<GPIO_IOP0MD_P05MD_Pos)     /*!< External interrupt 5 input pin. \hideinitializer */
#define GPIO_IOP0MD_P05MD_TM01B               (0x02UL<<GPIO_IOP0MD_P05MD_Pos)     /*!< Timer 1 input/output pin B. \hideinitializer */
#define GPIO_IOP0MD_P05MD_DBG_TRCD3           (0x04UL<<GPIO_IOP0MD_P05MD_Pos)     /*!< ETM Trace data 3 output pin. \hideinitializer */

#define GPIO_IOP0MD_P06MD_GPIO                (0x00UL<<GPIO_IOP0MD_P06MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P06MD_IRQ06               (0x01UL<<GPIO_IOP0MD_P06MD_Pos)     /*!< External interrupt 6 input pin. \hideinitializer */
#define GPIO_IOP0MD_P06MD_TM02A               (0x02UL<<GPIO_IOP0MD_P06MD_Pos)     /*!< Timer 2 input/output pin A. \hideinitializer */
#define GPIO_IOP0MD_P06MD_SMBUS_SMCL          (0x03UL<<GPIO_IOP0MD_P06MD_Pos)     /*!< SMBUS clock input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P06MD_CAN1_CRX            (0x04UL<<GPIO_IOP0MD_P06MD_Pos)     /*!< CAN1 receive input pin. \hideinitializer */

#define GPIO_IOP0MD_P07MD_GPIO                (0x00UL<<GPIO_IOP0MD_P07MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP0MD_P07MD_IRQ07               (0x01UL<<GPIO_IOP0MD_P07MD_Pos)     /*!< External interrupt 7 input pin. \hideinitializer */
#define GPIO_IOP0MD_P07MD_TM02B               (0x02UL<<GPIO_IOP0MD_P07MD_Pos)     /*!< Timer 2 input/output pin B. \hideinitializer */
#define GPIO_IOP0MD_P07MD_SMBUS_SMDA          (0x03UL<<GPIO_IOP0MD_P07MD_Pos)     /*!< SMBUS data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP0MD_P07MD_CAN1_CTX            (0x04UL<<GPIO_IOP0MD_P07MD_Pos)     /*!< CAN1 transmit output (Use Nch open-drain) pin. \hideinitializer */

/********************* Bit definition of IOP1MD register **********************/
#define GPIO_IOP1MD_P10MD_GPIO                (0x00UL<<GPIO_IOP1MD_P10MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP1MD_P10MD_IRQ08               (0x01UL<<GPIO_IOP1MD_P10MD_Pos)     /*!< External interrupt 8 input pin. \hideinitializer */
#define GPIO_IOP1MD_P10MD_TM21A               (0x02UL<<GPIO_IOP1MD_P10MD_Pos)     /*!< Timer 21 input/output pin A. \hideinitializer */
#define GPIO_IOP1MD_P10MD_CMP0_CMPOT00        (0x03UL<<GPIO_IOP1MD_P10MD_Pos)     /*!< Comparator 00 output pin. \hideinitializer */
#define GPIO_IOP1MD_P10MD_CAN1_CTX            (0x04UL<<GPIO_IOP1MD_P10MD_Pos)     /*!< CAN1 transmit output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP1MD_P11MD_GPIO                (0x00UL<<GPIO_IOP1MD_P11MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP1MD_P11MD_IRQ09               (0x01UL<<GPIO_IOP1MD_P11MD_Pos)     /*!< External interrupt 9 input pin. \hideinitializer */
#define GPIO_IOP1MD_P11MD_TM21B               (0x02UL<<GPIO_IOP1MD_P11MD_Pos)     /*!< Timer 21 input/output pin B. \hideinitializer */
#define GPIO_IOP1MD_P11MD_CMP1_CMPOT10        (0x03UL<<GPIO_IOP1MD_P11MD_Pos)     /*!< Comparator 10 output pin. \hideinitializer */
#define GPIO_IOP1MD_P11MD_CAN1_CRX            (0x04UL<<GPIO_IOP1MD_P11MD_Pos)     /*!< CAN1 receive input pin. \hideinitializer */

#define GPIO_IOP1MD_P12MD_GPIO                (0x00UL<<GPIO_IOP1MD_P12MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP1MD_P12MD_IRQ10               (0x01UL<<GPIO_IOP1MD_P12MD_Pos)     /*!< External interrupt 10 input pin. \hideinitializer */
#define GPIO_IOP1MD_P12MD_TM07A               (0x02UL<<GPIO_IOP1MD_P12MD_Pos)     /*!< Timer 7 input/output pin A. \hideinitializer */

#define GPIO_IOP1MD_P13MD_GPIO                (0x00UL<<GPIO_IOP1MD_P13MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP1MD_P13MD_IRQ11               (0x01UL<<GPIO_IOP1MD_P13MD_Pos)     /*!< External interrupt 11 input pin. \hideinitializer */
#define GPIO_IOP1MD_P13MD_TM07B               (0x02UL<<GPIO_IOP1MD_P13MD_Pos)     /*!< Timer 7 input/output pin B. \hideinitializer */
#define GPIO_IOP1MD_P13MD_GPWM0_GPWMST0       (0x03UL<<GPIO_IOP1MD_P13MD_Pos)     /*!< GPWM0 count state output pin. \hideinitializer */
#define GPIO_IOP1MD_P13MD_GPWM9_GPWMST9       (0x04UL<<GPIO_IOP1MD_P13MD_Pos)     /*!< GPWM9 count state output pin. \hideinitializer */

#define GPIO_IOP1MD_P14MD_GPIO                (0x00UL<<GPIO_IOP1MD_P14MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP1MD_P14MD_IRQ12               (0x01UL<<GPIO_IOP1MD_P14MD_Pos)     /*!< External interrupt 12 input pin. \hideinitializer */
#define GPIO_IOP1MD_P14MD_TM08A               (0x02UL<<GPIO_IOP1MD_P14MD_Pos)     /*!< Timer 8 input/output pin A. \hideinitializer */
#define GPIO_IOP1MD_P14MD_GPWM1_GPWMST1       (0x03UL<<GPIO_IOP1MD_P14MD_Pos)     /*!< GPWM1 count state output pin. \hideinitializer */
#define GPIO_IOP1MD_P14MD_GPWMA_GPWMSTA       (0x04UL<<GPIO_IOP1MD_P14MD_Pos)     /*!< GPWMA count state output pin. \hideinitializer */
#define GPIO_IOP1MD_P14MD_DAC_DAOT0           (0x05UL<<GPIO_IOP1MD_P14MD_Pos)     /*!< D/A Converter 0 output pin. \hideinitializer */

#define GPIO_IOP1MD_P15MD_GPIO                (0x00UL<<GPIO_IOP1MD_P15MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP1MD_P15MD_IRQ13               (0x01UL<<GPIO_IOP1MD_P15MD_Pos)     /*!< External interrupt 13 input pin. \hideinitializer */
#define GPIO_IOP1MD_P15MD_TM08B               (0x02UL<<GPIO_IOP1MD_P15MD_Pos)     /*!< Timer 8 input/output pin B. \hideinitializer */
#define GPIO_IOP1MD_P15MD_GPWM2_GPWMST2       (0x03UL<<GPIO_IOP1MD_P15MD_Pos)     /*!< GPWM2 count state output pin. \hideinitializer */
#define GPIO_IOP1MD_P15MD_GPWMB_GPWMSTB       (0x04UL<<GPIO_IOP1MD_P15MD_Pos)     /*!< GPWMB count state output pin. \hideinitializer */
#define GPIO_IOP1MD_P15MD_DAC_DAOT1           (0x05UL<<GPIO_IOP1MD_P15MD_Pos)     /*!< D/A Converter 1 output pin. \hideinitializer */

#define GPIO_IOP1MD_P16MD_GPIO                (0x00UL<<GPIO_IOP1MD_P16MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOP1MD_P17MD_GPIO                (0x00UL<<GPIO_IOP1MD_P17MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

/********************* Bit definition of IOP2MD register **********************/
#define GPIO_IOP2MD_P20MD_GPIO                (0x00UL<<GPIO_IOP2MD_P20MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP2MD_P20MD_IRQ14               (0x01UL<<GPIO_IOP2MD_P20MD_Pos)     /*!< External interrupt 14 input pin. \hideinitializer */
#define GPIO_IOP2MD_P20MD_TM12A               (0x02UL<<GPIO_IOP2MD_P20MD_Pos)     /*!< Timer 12 input/output pin A. \hideinitializer */

#define GPIO_IOP2MD_P21MD_GPIO                (0x00UL<<GPIO_IOP2MD_P21MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP2MD_P21MD_IRQ15               (0x01UL<<GPIO_IOP2MD_P21MD_Pos)     /*!< External interrupt 15 input pin. \hideinitializer */
#define GPIO_IOP2MD_P21MD_TM12B               (0x02UL<<GPIO_IOP2MD_P21MD_Pos)     /*!< Timer 12 input/output pin B. \hideinitializer */

#define GPIO_IOP2MD_P22MD_GPIO                (0x00UL<<GPIO_IOP2MD_P22MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP2MD_P22MD_IRQ16               (0x01UL<<GPIO_IOP2MD_P22MD_Pos)     /*!< External interrupt 16 input pin. \hideinitializer */

#define GPIO_IOP2MD_P24MD_GPIO                (0x00UL<<GPIO_IOP2MD_P24MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP2MD_P24MD_IRQ17               (0x01UL<<GPIO_IOP2MD_P24MD_Pos)     /*!< External interrupt 17 input pin. \hideinitializer */
#define GPIO_IOP2MD_P24MD_SPI4_SBI            (0x02UL<<GPIO_IOP2MD_P24MD_Pos)     /*!< SPI4 data input pin. \hideinitializer */
#define GPIO_IOP2MD_P24MD_UART4_RX            (0x02UL<<GPIO_IOP2MD_P24MD_Pos)     /*!< UART4 data input pin. \hideinitializer */
#define GPIO_IOP2MD_P24MD_SPI7_SBI            (0x03UL<<GPIO_IOP2MD_P24MD_Pos)     /*!< SPI7 data input pin. \hideinitializer */
#define GPIO_IOP2MD_P24MD_UART7_RX            (0x03UL<<GPIO_IOP2MD_P24MD_Pos)     /*!< UART7 data input pin. \hideinitializer */
#define GPIO_IOP2MD_P24MD_CAN0_CRX            (0x04UL<<GPIO_IOP2MD_P24MD_Pos)     /*!< CAN0 receive input pin. \hideinitializer */
#define GPIO_IOP2MD_P24MD_ADTRG0              (0x05UL<<GPIO_IOP2MD_P24MD_Pos)     /*!< A/D0 conversion state output pin. \hideinitializer */

#define GPIO_IOP2MD_P25MD_GPIO                (0x00UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_IRQ18               (0x01UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< External interrupt 18 input pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_SPI4_SBO            (0x02UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< SPI4 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_UART4_TX            (0x02UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< UART4 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_SPI4_SBT            (0x03UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< SPI4 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_SPI7_SBO            (0x04UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< SPI7 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_UART7_TX            (0x04UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< UART7 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_IIC7_SDA            (0x04UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< IIC7 data input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_SPI7_SBT            (0x05UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< SPI7 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_IIC7_SCL            (0x05UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< IIC7 clock input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_CAN0_CTX            (0x06UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< CAN0 transmit output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P25MD_ADTRG1              (0x07UL<<GPIO_IOP2MD_P25MD_Pos)     /*!< A/D1 conversion state output pin. \hideinitializer */

#define GPIO_IOP2MD_P26MD_GPIO                (0x00UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_IRQ19               (0x01UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< External interrupt 19 input pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_SPI4_SBT            (0x02UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< SPI4 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_SPI4_SBO            (0x03UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< SPI4 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_UART4_TX            (0x03UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< UART4 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_SPI7_SBT            (0x04UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< SPI7 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_IIC7_SCL            (0x04UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< IIC7 clock input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_SPI7_SBO            (0x05UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< SPI7 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_UART7_TX            (0x05UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< UART7 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_IIC7_SDA            (0x05UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< IIC7 data input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P26MD_TM13A               (0x06UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< Timer 13 input/output pin A. \hideinitializer */
#define GPIO_IOP2MD_P26MD_ADTRG2              (0x07UL<<GPIO_IOP2MD_P26MD_Pos)     /*!< A/D2 conversion state output pin. \hideinitializer */

#define GPIO_IOP2MD_P27MD_GPIO                (0x00UL<<GPIO_IOP2MD_P27MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP2MD_P27MD_SPI4_SBCS           (0x01UL<<GPIO_IOP2MD_P27MD_Pos)     /*!< SPI4 chip select input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P27MD_SPI7_SBCS           (0x02UL<<GPIO_IOP2MD_P27MD_Pos)     /*!< SPI7 chip select input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP2MD_P27MD_TM13B               (0x03UL<<GPIO_IOP2MD_P27MD_Pos)     /*!< Timer 13 input/output pin B. \hideinitializer */

/********************* Bit definition of IOP3MD register **********************/
#define GPIO_IOP3MD_P30MD_GPIO                (0x00UL<<GPIO_IOP3MD_P30MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP3MD_P30MD_SPI0_SBO            (0x01UL<<GPIO_IOP3MD_P30MD_Pos)     /*!< SPI0 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P30MD_IIC0_SDA            (0x01UL<<GPIO_IOP3MD_P30MD_Pos)     /*!< IIC0 data input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P30MD_SPI0_SBT            (0x02UL<<GPIO_IOP3MD_P30MD_Pos)     /*!< SPI0 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P30MD_IIC0_SCL            (0x02UL<<GPIO_IOP3MD_P30MD_Pos)     /*!< IIC0 clock input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P30MD_CMP2_CMPOT20        (0x03UL<<GPIO_IOP3MD_P30MD_Pos)     /*!< Comparator 20 output pin. \hideinitializer */

#define GPIO_IOP3MD_P31MD_GPIO                (0x00UL<<GPIO_IOP3MD_P31MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP3MD_P31MD_SPI0_SBT            (0x01UL<<GPIO_IOP3MD_P31MD_Pos)     /*!< SPI0 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P31MD_IIC0_SCL            (0x01UL<<GPIO_IOP3MD_P31MD_Pos)     /*!< IIC0 clock input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P31MD_SPI0_SBO            (0x02UL<<GPIO_IOP3MD_P31MD_Pos)     /*!< SPI0 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P31MD_IIC0_SDA            (0x02UL<<GPIO_IOP3MD_P31MD_Pos)     /*!< IIC0 data input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P31MD_CMP3_CMPOT30        (0x03UL<<GPIO_IOP3MD_P31MD_Pos)     /*!< Comparator 30 output pin. \hideinitializer */

#define GPIO_IOP3MD_P32MD_GPIO                (0x00UL<<GPIO_IOP3MD_P32MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP3MD_P32MD_SPI0_SBI            (0x01UL<<GPIO_IOP3MD_P32MD_Pos)     /*!< SPI0 data input pin. \hideinitializer */
#define GPIO_IOP3MD_P32MD_CMP4_CMPOT40        (0x02UL<<GPIO_IOP3MD_P32MD_Pos)     /*!< Comparator 40 output pin. \hideinitializer */

#define GPIO_IOP3MD_P34MD_GPIO                (0x00UL<<GPIO_IOP3MD_P34MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP3MD_P34MD_SPI1_SBO            (0x01UL<<GPIO_IOP3MD_P34MD_Pos)     /*!< SPI1 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P34MD_UART1_TX            (0x01UL<<GPIO_IOP3MD_P34MD_Pos)     /*!< UART1 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P34MD_LIN_LTX             (0x01UL<<GPIO_IOP3MD_P34MD_Pos)     /*!< LIN transmission input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P34MD_SPI1_SBT            (0x02UL<<GPIO_IOP3MD_P34MD_Pos)     /*!< SPI1 clock input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP3MD_P35MD_GPIO                (0x00UL<<GPIO_IOP3MD_P35MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP3MD_P35MD_SPI1_SBT            (0x01UL<<GPIO_IOP3MD_P35MD_Pos)     /*!< SPI1 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P35MD_SPI1_SBO            (0x02UL<<GPIO_IOP3MD_P35MD_Pos)     /*!< SPI1 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P35MD_UART1_TX            (0x02UL<<GPIO_IOP3MD_P35MD_Pos)     /*!< UART1 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP3MD_P35MD_LIN_LTX             (0x02UL<<GPIO_IOP3MD_P35MD_Pos)     /*!< LIN transmission input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP3MD_P36MD_GPIO                (0x00UL<<GPIO_IOP3MD_P36MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP3MD_P36MD_SPI1_SBI            (0x01UL<<GPIO_IOP3MD_P36MD_Pos)     /*!< SPI1 data input pin. \hideinitializer */
#define GPIO_IOP3MD_P36MD_UART1_RX            (0x01UL<<GPIO_IOP3MD_P36MD_Pos)     /*!< UART1 data input pin. \hideinitializer */
#define GPIO_IOP3MD_P36MD_LIN_LRX             (0x01UL<<GPIO_IOP3MD_P36MD_Pos)     /*!< LIN reception input pin. \hideinitializer */

/********************* Bit definition of IOP4MD register **********************/
#define GPIO_IOP4MD_P40MD_GPIO                (0x00UL<<GPIO_IOP4MD_P40MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP4MD_P40MD_SPI2_SBO            (0x01UL<<GPIO_IOP4MD_P40MD_Pos)     /*!< SPI2 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP4MD_P40MD_UART2_TX            (0x01UL<<GPIO_IOP4MD_P40MD_Pos)     /*!< UART2 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP4MD_P40MD_SPI2_SBT            (0x02UL<<GPIO_IOP4MD_P40MD_Pos)     /*!< SPI2 clock input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP4MD_P41MD_GPIO                (0x00UL<<GPIO_IOP4MD_P41MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP4MD_P41MD_SPI2_SBT            (0x01UL<<GPIO_IOP4MD_P41MD_Pos)     /*!< SPI2 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP4MD_P41MD_SPI2_SBO            (0x02UL<<GPIO_IOP4MD_P41MD_Pos)     /*!< SPI2 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP4MD_P41MD_UART2_TX            (0x02UL<<GPIO_IOP4MD_P41MD_Pos)     /*!< UART2 data input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP4MD_P42MD_GPIO                (0x00UL<<GPIO_IOP4MD_P42MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP4MD_P42MD_SPI2_SBI            (0x01UL<<GPIO_IOP4MD_P42MD_Pos)     /*!< SPI2 data input pin. \hideinitializer */
#define GPIO_IOP4MD_P42MD_UART2_RX            (0x01UL<<GPIO_IOP4MD_P42MD_Pos)     /*!< UART2 data input pin. \hideinitializer */

#define GPIO_IOP4MD_P44MD_GPIO                (0x00UL<<GPIO_IOP4MD_P44MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP4MD_P44MD_SPI3_SBO            (0x01UL<<GPIO_IOP4MD_P44MD_Pos)     /*!< SPI3 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP4MD_P44MD_UART3_TX            (0x01UL<<GPIO_IOP4MD_P44MD_Pos)     /*!< UART3 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP4MD_P44MD_SPI3_SBT            (0x02UL<<GPIO_IOP4MD_P44MD_Pos)     /*!< SPI3 clock input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP4MD_P45MD_GPIO                (0x00UL<<GPIO_IOP4MD_P45MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP4MD_P45MD_SPI3_SBT            (0x01UL<<GPIO_IOP4MD_P45MD_Pos)     /*!< SPI3 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP4MD_P45MD_SPI3_SBO            (0x02UL<<GPIO_IOP4MD_P45MD_Pos)     /*!< SPI3 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP4MD_P45MD_UART3_TX            (0x02UL<<GPIO_IOP4MD_P45MD_Pos)     /*!< UART3 data input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP4MD_P46MD_GPIO                (0x00UL<<GPIO_IOP4MD_P46MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP4MD_P46MD_SPI3_SBI            (0x01UL<<GPIO_IOP4MD_P46MD_Pos)     /*!< SPI3 data input pin. \hideinitializer */
#define GPIO_IOP4MD_P46MD_UART3_RX            (0x01UL<<GPIO_IOP4MD_P46MD_Pos)     /*!< UART3 data input pin. \hideinitializer */

#define GPIO_IOP4MD_P47MD_GPIO                (0x00UL<<GPIO_IOP4MD_P47MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP4MD_P47MD_SPI3_SBCS           (0x01UL<<GPIO_IOP4MD_P47MD_Pos)     /*!< SPI3 chip select input/output (Use Nch open-drain) pin. \hideinitializer */

/********************* Bit definition of IOP5MD register **********************/
#define GPIO_IOP5MD_P50MD_GPIO                (0x00UL<<GPIO_IOP5MD_P50MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP5MD_P50MD_TM22A               (0x01UL<<GPIO_IOP5MD_P50MD_Pos)     /*!< Timer 22 input/output pin A. \hideinitializer */
#define GPIO_IOP5MD_P50MD_CAN0_CTX            (0x02UL<<GPIO_IOP5MD_P50MD_Pos)     /*!< CAN0 transmit output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP5MD_P51MD_GPIO                (0x00UL<<GPIO_IOP5MD_P51MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP5MD_P51MD_TM22B               (0x01UL<<GPIO_IOP5MD_P51MD_Pos)     /*!< Timer 22 input/output pin B. \hideinitializer */
#define GPIO_IOP5MD_P51MD_CAN0_CRX            (0x02UL<<GPIO_IOP5MD_P51MD_Pos)     /*!< CAN0 receive input pin. \hideinitializer */

#define GPIO_IOP5MD_P52MD_GPIO                (0x00UL<<GPIO_IOP5MD_P52MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP5MD_P52MD_TM23A               (0x01UL<<GPIO_IOP5MD_P52MD_Pos)     /*!< Timer 23 input/output pin A. \hideinitializer */
#define GPIO_IOP5MD_P52MD_CMP0_CMPOT01        (0x02UL<<GPIO_IOP5MD_P52MD_Pos)     /*!< Comparator 01 output pin. \hideinitializer */
#define GPIO_IOP5MD_P52MD_SPI5_SBO            (0x03UL<<GPIO_IOP5MD_P52MD_Pos)     /*!< SPI5 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP5MD_P52MD_UART5_TX            (0x03UL<<GPIO_IOP5MD_P52MD_Pos)     /*!< UART5 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP5MD_P52MD_SPI5_SBT            (0x04UL<<GPIO_IOP5MD_P52MD_Pos)     /*!< SPI5 clock input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP5MD_P53MD_GPIO                (0x00UL<<GPIO_IOP5MD_P53MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP5MD_P53MD_TM23B               (0x01UL<<GPIO_IOP5MD_P53MD_Pos)     /*!< Timer 23 input/output pin B. \hideinitializer */
#define GPIO_IOP5MD_P53MD_CMP1_CMPOT11        (0x02UL<<GPIO_IOP5MD_P53MD_Pos)     /*!< Comparator 11 output pin. \hideinitializer */
#define GPIO_IOP5MD_P53MD_SPI5_SBT            (0x03UL<<GPIO_IOP5MD_P53MD_Pos)     /*!< SPI5 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP5MD_P53MD_SPI5_SBO            (0x04UL<<GPIO_IOP5MD_P53MD_Pos)     /*!< SPI5 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP5MD_P53MD_UART5_TX            (0x04UL<<GPIO_IOP5MD_P53MD_Pos)     /*!< UART5 data input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP5MD_P54MD_GPIO                (0x00UL<<GPIO_IOP5MD_P54MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP5MD_P54MD_TM24A               (0x01UL<<GPIO_IOP5MD_P54MD_Pos)     /*!< Timer 24 input/output pin A. \hideinitializer */
#define GPIO_IOP5MD_P54MD_CMP2_CMPOT21        (0x02UL<<GPIO_IOP5MD_P54MD_Pos)     /*!< Comparator 21 output pin. \hideinitializer */
#define GPIO_IOP5MD_P54MD_SPI5_SBI            (0x03UL<<GPIO_IOP5MD_P54MD_Pos)     /*!< SPI5 data input pin. \hideinitializer */
#define GPIO_IOP5MD_P54MD_UART5_RX            (0x03UL<<GPIO_IOP5MD_P54MD_Pos)     /*!< UART5 data input pin. \hideinitializer */

#define GPIO_IOP5MD_P55MD_GPIO                (0x00UL<<GPIO_IOP5MD_P55MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP5MD_P55MD_TM24B               (0x01UL<<GPIO_IOP5MD_P55MD_Pos)     /*!< Timer 24 input/output pin B. \hideinitializer */
#define GPIO_IOP5MD_P55MD_CMP3_CMPOT31        (0x02UL<<GPIO_IOP5MD_P55MD_Pos)     /*!< Comparator 31 output pin. \hideinitializer */
#define GPIO_IOP5MD_P55MD_SPI6_SBO            (0x03UL<<GPIO_IOP5MD_P55MD_Pos)     /*!< SPI6 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP5MD_P55MD_UART6_TX            (0x03UL<<GPIO_IOP5MD_P55MD_Pos)     /*!< UART6 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP5MD_P55MD_SPI6_SBT            (0x04UL<<GPIO_IOP5MD_P55MD_Pos)     /*!< SPI6 clock input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP5MD_P56MD_GPIO                (0x00UL<<GPIO_IOP5MD_P56MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP5MD_P56MD_TM25A               (0x01UL<<GPIO_IOP5MD_P56MD_Pos)     /*!< Timer 25 input/output pin A. \hideinitializer */
#define GPIO_IOP5MD_P56MD_CMP4_CMPOT41        (0x02UL<<GPIO_IOP5MD_P56MD_Pos)     /*!< Comparator 41 output pin. \hideinitializer */
#define GPIO_IOP5MD_P56MD_SPI6_SBT            (0x03UL<<GPIO_IOP5MD_P56MD_Pos)     /*!< SPI6 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP5MD_P56MD_SPI6_SBO            (0x04UL<<GPIO_IOP5MD_P56MD_Pos)     /*!< SPI6 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP5MD_P56MD_UART6_TX            (0x04UL<<GPIO_IOP5MD_P56MD_Pos)     /*!< UART6 data input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP5MD_P57MD_GPIO                (0x00UL<<GPIO_IOP5MD_P57MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP5MD_P57MD_TM25B               (0x01UL<<GPIO_IOP5MD_P57MD_Pos)     /*!< Timer 25 input/output pin B. \hideinitializer */
#define GPIO_IOP5MD_P57MD_SPI6_SBI            (0x02UL<<GPIO_IOP5MD_P57MD_Pos)     /*!< SPI6 data input pin. \hideinitializer */
#define GPIO_IOP5MD_P57MD_UART6_RX            (0x02UL<<GPIO_IOP5MD_P57MD_Pos)     /*!< UART6 data input pin. \hideinitializer */

/********************* Bit definition of IOP6MD register **********************/
#define GPIO_IOP6MD_P60MD_GPIO                (0x00UL<<GPIO_IOP6MD_P60MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP6MD_P60MD_TM03A               (0x01UL<<GPIO_IOP6MD_P60MD_Pos)     /*!< Timer 3 input/output pin A. \hideinitializer */
#define GPIO_IOP6MD_P60MD_GPWM5_GPWMST5       (0x02UL<<GPIO_IOP6MD_P60MD_Pos)     /*!< GPWM5 count state output pin. \hideinitializer */
#define GPIO_IOP6MD_P60MD_SPI4_SBI            (0x03UL<<GPIO_IOP6MD_P60MD_Pos)     /*!< SPI4 data input pin. \hideinitializer */
#define GPIO_IOP6MD_P60MD_UART4_RX            (0x03UL<<GPIO_IOP6MD_P60MD_Pos)     /*!< UART4 data input pin. \hideinitializer */
#define GPIO_IOP6MD_P60MD_SPI7_SBI            (0x04UL<<GPIO_IOP6MD_P60MD_Pos)     /*!< SPI7 data input pin. \hideinitializer */
#define GPIO_IOP6MD_P60MD_UART7_RX            (0x04UL<<GPIO_IOP6MD_P60MD_Pos)     /*!< UART7 data input pin. \hideinitializer */

#define GPIO_IOP6MD_P61MD_GPIO                (0x00UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_TM03B               (0x01UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< Timer 3 input/output pin B. \hideinitializer */
#define GPIO_IOP6MD_P61MD_GPWM6_GPWMST6       (0x02UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< GPWM6 count state output pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_SPI4_SBO            (0x03UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< SPI4 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_UART4_TX            (0x03UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< UART4 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_SPI4_SBT            (0x04UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< SPI4 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_SPI7_SBO            (0x05UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< SPI7 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_UART7_TX            (0x05UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< UART7 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_IIC7_SDA            (0x05UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< IIC7 data input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_SPI7_SBT            (0x06UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< SPI7 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P61MD_IIC7_SCL            (0x06UL<<GPIO_IOP6MD_P61MD_Pos)     /*!< IIC7 clock input/ouput (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP6MD_P62MD_GPIO                (0x00UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_TM04A               (0x01UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< Timer 4 input/output pin A. \hideinitializer */
#define GPIO_IOP6MD_P62MD_GPWM7_GPWMST7       (0x02UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< GPWM7 count state output pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_SPI4_SBT            (0x03UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< SPI4 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_SPI4_SBO            (0x04UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< SPI4 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_UART4_TX            (0x04UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< UART4 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_SPI7_SBT            (0x05UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< SPI7 clock input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_IIC7_SCL            (0x05UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< IIC7 clock input/ouput (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_SPI7_SBO            (0x06UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< SPI7 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_UART7_TX            (0x06UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< UART7 data input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P62MD_IIC7_SDA            (0x06UL<<GPIO_IOP6MD_P62MD_Pos)     /*!< IIC7 data input/ouput (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP6MD_P63MD_GPIO                (0x00UL<<GPIO_IOP6MD_P63MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP6MD_P63MD_TM04B               (0x01UL<<GPIO_IOP6MD_P63MD_Pos)     /*!< Timer 4 input/output pin B. \hideinitializer */
#define GPIO_IOP6MD_P63MD_GPWM8_GPWMST8       (0x02UL<<GPIO_IOP6MD_P63MD_Pos)     /*!< GPWM8 count state output pin. \hideinitializer */
#define GPIO_IOP6MD_P63MD_SPI4_SBCS           (0x03UL<<GPIO_IOP6MD_P63MD_Pos)     /*!< SPI4 chip select input/output (Use Nch open-drain) pin. \hideinitializer */
#define GPIO_IOP6MD_P63MD_SPI7_SBCS           (0x04UL<<GPIO_IOP6MD_P63MD_Pos)     /*!< SPI7 chip select input/output (Use Nch open-drain) pin. \hideinitializer */

#define GPIO_IOP6MD_P64MD_GPIO                (0x00UL<<GPIO_IOP6MD_P64MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP6MD_P64MD_TM05A               (0x01UL<<GPIO_IOP6MD_P64MD_Pos)     /*!< Timer 5 input/output pin A. \hideinitializer */

#define GPIO_IOP6MD_P65MD_GPIO                (0x00UL<<GPIO_IOP6MD_P65MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP6MD_P65MD_TM05B               (0x01UL<<GPIO_IOP6MD_P65MD_Pos)     /*!< Timer 5 input/output pin B. \hideinitializer */

#define GPIO_IOP6MD_P66MD_GPIO                (0x00UL<<GPIO_IOP6MD_P66MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOP6MD_P67MD_GPIO                (0x00UL<<GPIO_IOP6MD_P67MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

/********************* Bit definition of IOP7MD register **********************/
#define GPIO_IOP7MD_P70MD_GPIO                (0x00UL<<GPIO_IOP7MD_P70MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP7MD_P70MD_GPWM9_GPWM90        (0x01UL<<GPIO_IOP7MD_P70MD_Pos)     /*!< GPWM90 output pin. \hideinitializer */
#define GPIO_IOP7MD_P70MD_TM09A               (0x02UL<<GPIO_IOP7MD_P70MD_Pos)     /*!< Timer 9 input/output pin A. \hideinitializer */

#define GPIO_IOP7MD_P71MD_GPIO                (0x00UL<<GPIO_IOP7MD_P71MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP7MD_P71MD_GPWM9_GPWM91        (0x01UL<<GPIO_IOP7MD_P71MD_Pos)     /*!< GPWM91 output pin. \hideinitializer */
#define GPIO_IOP7MD_P71MD_TM09B               (0x02UL<<GPIO_IOP7MD_P71MD_Pos)     /*!< Timer 9 input/output pin B. \hideinitializer */

#define GPIO_IOP7MD_P72MD_GPIO                (0x00UL<<GPIO_IOP7MD_P72MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP7MD_P72MD_GPWMA_GPWMA0        (0x01UL<<GPIO_IOP7MD_P72MD_Pos)     /*!< GPWMA0 output pin. \hideinitializer */
#define GPIO_IOP7MD_P72MD_TM10A               (0x02UL<<GPIO_IOP7MD_P72MD_Pos)     /*!< Timer 10 input/output pin A. \hideinitializer */

#define GPIO_IOP7MD_P73MD_GPIO                (0x00UL<<GPIO_IOP7MD_P73MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP7MD_P73MD_GPWMA_GPWMA1        (0x01UL<<GPIO_IOP7MD_P73MD_Pos)     /*!< GPWMA1 output pin. \hideinitializer */
#define GPIO_IOP7MD_P73MD_TM10B               (0x02UL<<GPIO_IOP7MD_P73MD_Pos)     /*!< Timer 10 input/output pin B. \hideinitializer */

#define GPIO_IOP7MD_P74MD_GPIO                (0x00UL<<GPIO_IOP7MD_P74MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP7MD_P74MD_TM11A               (0x01UL<<GPIO_IOP7MD_P74MD_Pos)     /*!< Timer 11 input/output pin A. \hideinitializer */
#define GPIO_IOP7MD_P74MD_GPWM3_GPWMST3       (0x02UL<<GPIO_IOP7MD_P74MD_Pos)     /*!< GPWM3 count state output pin. \hideinitializer */

#define GPIO_IOP7MD_P75MD_GPIO                (0x00UL<<GPIO_IOP7MD_P75MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP7MD_P75MD_TM11B               (0x01UL<<GPIO_IOP7MD_P75MD_Pos)     /*!< Timer 11 input/output pin B. \hideinitializer */
#define GPIO_IOP7MD_P75MD_GPWM4_GPWMST4       (0x02UL<<GPIO_IOP7MD_P75MD_Pos)     /*!< GPWM4 count state output pin. \hideinitializer */

#define GPIO_IOP7MD_P76MD_GPIO                (0x00UL<<GPIO_IOP7MD_P76MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOP7MD_P77MD_GPIO                (0x00UL<<GPIO_IOP7MD_P77MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

/********************* Bit definition of IOP8MD register **********************/
#define GPIO_IOP8MD_P80MD_GPIO                (0x00UL<<GPIO_IOP8MD_P80MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP8MD_P80MD_GPWM0_GPWMH00       (0x01UL<<GPIO_IOP8MD_P80MD_Pos)     /*!< GPWM00 high-resolution output pin. \hideinitializer */
#define GPIO_IOP8MD_P80MD_GPWM0_GPWM00        (0x02UL<<GPIO_IOP8MD_P80MD_Pos)     /*!< GPWM00 output pin. \hideinitializer */

#define GPIO_IOP8MD_P81MD_GPIO                (0x00UL<<GPIO_IOP8MD_P81MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP8MD_P81MD_GPWM0_GPWMH01       (0x01UL<<GPIO_IOP8MD_P81MD_Pos)     /*!< GPWM01 high-resolution output pin. \hideinitializer */
#define GPIO_IOP8MD_P81MD_GPWM0_GPWM01        (0x02UL<<GPIO_IOP8MD_P81MD_Pos)     /*!< GPWM01 output pin. \hideinitializer */

#define GPIO_IOP8MD_P82MD_GPIO                (0x00UL<<GPIO_IOP8MD_P82MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP8MD_P82MD_GPWM1_GPWMH10       (0x01UL<<GPIO_IOP8MD_P82MD_Pos)     /*!< GPWM10 high-resolution output pin. \hideinitializer */
#define GPIO_IOP8MD_P82MD_GPWM1_GPWM10        (0x02UL<<GPIO_IOP8MD_P82MD_Pos)     /*!< GPWM10 output pin. \hideinitializer */

#define GPIO_IOP8MD_P83MD_GPIO                (0x00UL<<GPIO_IOP8MD_P83MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP8MD_P83MD_GPWM1_GPWMH11       (0x01UL<<GPIO_IOP8MD_P83MD_Pos)     /*!< GPWM11 high-resolution output pin. \hideinitializer */
#define GPIO_IOP8MD_P83MD_GPWM1_GPWM11        (0x02UL<<GPIO_IOP8MD_P83MD_Pos)     /*!< GPWM11 output pin. \hideinitializer */

#define GPIO_IOP8MD_P84MD_GPIO                (0x00UL<<GPIO_IOP8MD_P84MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP8MD_P84MD_GPWM2_GPWMH20       (0x01UL<<GPIO_IOP8MD_P84MD_Pos)     /*!< GPWM20 high-resolution output pin. \hideinitializer */
#define GPIO_IOP8MD_P84MD_GPWM2_GPWM20        (0x02UL<<GPIO_IOP8MD_P84MD_Pos)     /*!< GPWM20 output pin. \hideinitializer */

#define GPIO_IOP8MD_P85MD_GPIO                (0x00UL<<GPIO_IOP8MD_P85MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP8MD_P85MD_GPWM2_GPWMH21       (0x01UL<<GPIO_IOP8MD_P85MD_Pos)     /*!< GPWM21 high-resolution output pin. \hideinitializer */
#define GPIO_IOP8MD_P85MD_GPWM2_GPWM21        (0x02UL<<GPIO_IOP8MD_P85MD_Pos)     /*!< GPWM21 output pin. \hideinitializer */

#define GPIO_IOP8MD_P86MD_GPIO                (0x00UL<<GPIO_IOP8MD_P86MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP8MD_P86MD_TM06A               (0x01UL<<GPIO_IOP8MD_P86MD_Pos)     /*!< Timer 6 input/output pin A. \hideinitializer */

#define GPIO_IOP8MD_P87MD_GPIO                (0x00UL<<GPIO_IOP8MD_P87MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP8MD_P87MD_TM06B               (0x01UL<<GPIO_IOP8MD_P87MD_Pos)     /*!< Timer 6 input/output pin B. \hideinitializer */

/********************* Bit definition of IOP9MD register **********************/
#define GPIO_IOP9MD_P90MD_GPIO                (0x00UL<<GPIO_IOP9MD_P90MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP9MD_P90MD_GPWM3_GPWMH30       (0x01UL<<GPIO_IOP9MD_P90MD_Pos)     /*!< GPWM30 high-resolution output pin. \hideinitializer */
#define GPIO_IOP9MD_P90MD_GPWM3_GPWM30        (0x02UL<<GPIO_IOP9MD_P90MD_Pos)     /*!< GPWM30 output pin. \hideinitializer */

#define GPIO_IOP9MD_P91MD_GPIO                (0x00UL<<GPIO_IOP9MD_P91MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP9MD_P91MD_GPWM3_GPWMH31       (0x01UL<<GPIO_IOP9MD_P91MD_Pos)     /*!< GPWM31 high-resolution output pin. \hideinitializer */
#define GPIO_IOP9MD_P91MD_GPWM3_GPWM31        (0x02UL<<GPIO_IOP9MD_P91MD_Pos)     /*!< GPWM31 output pin. \hideinitializer */

#define GPIO_IOP9MD_P92MD_GPIO                (0x00UL<<GPIO_IOP9MD_P92MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP9MD_P92MD_GPWM4_GPWMH40       (0x01UL<<GPIO_IOP9MD_P92MD_Pos)     /*!< GPWM40 high-resolution output pin. \hideinitializer */
#define GPIO_IOP9MD_P92MD_GPWM4_GPWM40        (0x02UL<<GPIO_IOP9MD_P92MD_Pos)     /*!< GPWM40 output pin. \hideinitializer */

#define GPIO_IOP9MD_P93MD_GPIO                (0x00UL<<GPIO_IOP9MD_P93MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP9MD_P93MD_GPWM4_GPWMH41       (0x01UL<<GPIO_IOP9MD_P93MD_Pos)     /*!< GPWM41 high-resolution output pin. \hideinitializer */
#define GPIO_IOP9MD_P93MD_GPWM4_GPWM41        (0x02UL<<GPIO_IOP9MD_P93MD_Pos)     /*!< GPWM41 output pin. \hideinitializer */

#define GPIO_IOP9MD_P94MD_GPIO                (0x00UL<<GPIO_IOP9MD_P94MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP9MD_P94MD_GPWM5_GPWMH50       (0x01UL<<GPIO_IOP9MD_P94MD_Pos)     /*!< GPWM50 high-resolution output pin. \hideinitializer */
#define GPIO_IOP9MD_P94MD_GPWM5_GPWM50        (0x02UL<<GPIO_IOP9MD_P94MD_Pos)     /*!< GPWM50 output pin. \hideinitializer */

#define GPIO_IOP9MD_P95MD_GPIO                (0x00UL<<GPIO_IOP9MD_P95MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOP9MD_P95MD_GPWM5_GPWMH51       (0x01UL<<GPIO_IOP9MD_P95MD_Pos)     /*!< GPWM51 high-resolution output pin. \hideinitializer */
#define GPIO_IOP9MD_P95MD_GPWM5_GPWM51        (0x02UL<<GPIO_IOP9MD_P95MD_Pos)     /*!< GPWM51 output pin. \hideinitializer */

#define GPIO_IOP9MD_P96MD_GPIO                (0x00UL<<GPIO_IOP9MD_P96MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOP9MD_P97MD_GPIO                (0x00UL<<GPIO_IOP9MD_P97MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

/********************* Bit definition of IOPAMD register **********************/
#define GPIO_IOPAMD_PA0MD_GPIO                (0x00UL<<GPIO_IOPAMD_PA0MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPAMD_PA0MD_GPWM6_GPWMH60       (0x01UL<<GPIO_IOPAMD_PA0MD_Pos)     /*!< GPWM60 high-resolution output pin. \hideinitializer */
#define GPIO_IOPAMD_PA0MD_GPWM6_GPWM60        (0x02UL<<GPIO_IOPAMD_PA0MD_Pos)     /*!< GPWM60 output pin. \hideinitializer */

#define GPIO_IOPAMD_PA1MD_GPIO                (0x00UL<<GPIO_IOPAMD_PA1MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPAMD_PA1MD_GPWM6_GPWMH61       (0x01UL<<GPIO_IOPAMD_PA1MD_Pos)     /*!< GPWM61 high-resolution output pin. \hideinitializer */
#define GPIO_IOPAMD_PA1MD_GPWM6_GPWM61        (0x02UL<<GPIO_IOPAMD_PA1MD_Pos)     /*!< GPWM61 output pin. \hideinitializer */

#define GPIO_IOPAMD_PA2MD_GPIO                (0x00UL<<GPIO_IOPAMD_PA2MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPAMD_PA2MD_GPWM7_GPWMH70       (0x01UL<<GPIO_IOPAMD_PA2MD_Pos)     /*!< GPWM70 high-resolution output pin. \hideinitializer */
#define GPIO_IOPAMD_PA2MD_GPWM7_GPWM70        (0x02UL<<GPIO_IOPAMD_PA2MD_Pos)     /*!< GPWM70 output pin. \hideinitializer */

#define GPIO_IOPAMD_PA3MD_GPIO                (0x00UL<<GPIO_IOPAMD_PA3MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPAMD_PA3MD_GPWM7_GPWMH71       (0x01UL<<GPIO_IOPAMD_PA3MD_Pos)     /*!< GPWM71 high-resolution output pin. \hideinitializer */
#define GPIO_IOPAMD_PA3MD_GPWM7_GPWM71        (0x02UL<<GPIO_IOPAMD_PA3MD_Pos)     /*!< GPWM71 output pin. \hideinitializer */

#define GPIO_IOPAMD_PA4MD_GPIO                (0x00UL<<GPIO_IOPAMD_PA4MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPAMD_PA4MD_GPWM8_GPWMH80       (0x01UL<<GPIO_IOPAMD_PA4MD_Pos)     /*!< GPWM80 high-resolution output pin. \hideinitializer */
#define GPIO_IOPAMD_PA4MD_GPWM8_GPWM80        (0x02UL<<GPIO_IOPAMD_PA4MD_Pos)     /*!< GPWM80 output pin. \hideinitializer */

#define GPIO_IOPAMD_PA5MD_GPIO                (0x00UL<<GPIO_IOPAMD_PA5MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPAMD_PA5MD_GPWM8_GPWMH81       (0x01UL<<GPIO_IOPAMD_PA5MD_Pos)     /*!< GPWM81 high-resolution output pin. \hideinitializer */
#define GPIO_IOPAMD_PA5MD_GPWM8_GPWM81        (0x02UL<<GPIO_IOPAMD_PA5MD_Pos)     /*!< GPWM81 output pin. \hideinitializer */

#define GPIO_IOPAMD_PA6MD_GPIO                (0x00UL<<GPIO_IOPAMD_PA6MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOPAMD_PA7MD_GPIO                (0x00UL<<GPIO_IOPAMD_PA7MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

/********************* Bit definition of IOPBMD register **********************/
#define GPIO_IOPBMD_PB0MD_GPIO                (0x00UL<<GPIO_IOPBMD_PB0MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPBMD_PB0MD_GPWMB_GPWMB0        (0x01UL<<GPIO_IOPBMD_PB0MD_Pos)     /*!< GPWMB0 output pin. \hideinitializer */

#define GPIO_IOPBMD_PB1MD_GPIO                (0x00UL<<GPIO_IOPBMD_PB1MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPBMD_PB1MD_GPWMB_GPWMB1        (0x01UL<<GPIO_IOPBMD_PB1MD_Pos)     /*!< GPWMB1 output pin. \hideinitializer */

#define GPIO_IOPBMD_PB2MD_GPIO                (0x00UL<<GPIO_IOPBMD_PB2MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOPBMD_PB3MD_GPIO                (0x00UL<<GPIO_IOPBMD_PB3MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOPBMD_PB4MD_GPIO                (0x00UL<<GPIO_IOPBMD_PB4MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOPBMD_PB6MD_GPIO                (0x00UL<<GPIO_IOPBMD_PB6MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

#define GPIO_IOPBMD_PB7MD_GPIO                (0x00UL<<GPIO_IOPBMD_PB7MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */

/********************* Bit definition of IOPCMD register **********************/
#define GPIO_IOPCMD_PC0MD_GPIO                (0x00UL<<GPIO_IOPCMD_PC0MD_Pos)     /*!< General-purpose input pin. \hideinitializer */
#define GPIO_IOPCMD_PC0MD_ADIN00              (0x01UL<<GPIO_IOPCMD_PC0MD_Pos)     /*!< A/D converter analog input 00 pin. \hideinitializer */
#define GPIO_IOPCMD_PC0MD_VGA0_VGAN           (0x01UL<<GPIO_IOPCMD_PC0MD_Pos)     /*!< VGA0 negative input pin. \hideinitializer */

#define GPIO_IOPCMD_PC1MD_GPIO                (0x00UL<<GPIO_IOPCMD_PC1MD_Pos)     /*!< General-purpose input pin. \hideinitializer */
#define GPIO_IOPCMD_PC1MD_ADIN01              (0x01UL<<GPIO_IOPCMD_PC1MD_Pos)     /*!< A/D converter analog input 01 pin. \hideinitializer */
#define GPIO_IOPCMD_PC1MD_VGA0_VGAP0          (0x01UL<<GPIO_IOPCMD_PC1MD_Pos)     /*!< VGA0 positive 0 input pin. \hideinitializer */
#define GPIO_IOPCMD_PC1MD_CMP0_CMPIN0         (0x01UL<<GPIO_IOPCMD_PC1MD_Pos)     /*!< Comparator 00/01 input pin. \hideinitializer */

#define GPIO_IOPCMD_PC2MD_GPIO                (0x00UL<<GPIO_IOPCMD_PC2MD_Pos)     /*!< General-purpose input pin. \hideinitializer */
#define GPIO_IOPCMD_PC2MD_ADIN02              (0x01UL<<GPIO_IOPCMD_PC2MD_Pos)     /*!< A/D converter analog input 02 pin. \hideinitializer */
#define GPIO_IOPCMD_PC2MD_VGA0_VGAP1          (0x01UL<<GPIO_IOPCMD_PC2MD_Pos)     /*!< VGA0 positive 1 input pin. \hideinitializer */
#define GPIO_IOPCMD_PC2MD_CMP1_CMPIN1         (0x01UL<<GPIO_IOPCMD_PC2MD_Pos)     /*!< Comparator 10/11 input pin. \hideinitializer */

#define GPIO_IOPCMD_PC3MD_GPIO                (0x00UL<<GPIO_IOPCMD_PC3MD_Pos)     /*!< General-purpose input pin. \hideinitializer */
#define GPIO_IOPCMD_PC3MD_ADIN03              (0x01UL<<GPIO_IOPCMD_PC3MD_Pos)     /*!< A/D converter analog input 03 pin. \hideinitializer */
#define GPIO_IOPCMD_PC3MD_VGA0_VGAP2          (0x01UL<<GPIO_IOPCMD_PC3MD_Pos)     /*!< VGA0 positive 2 input pin. \hideinitializer */
#define GPIO_IOPCMD_PC3MD_CMP2_CMPIN2         (0x01UL<<GPIO_IOPCMD_PC3MD_Pos)     /*!< Comparator 20/21 input pin. \hideinitializer */

#define GPIO_IOPCMD_PC4MD_GPIO                (0x00UL<<GPIO_IOPCMD_PC4MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPCMD_PC4MD_ADIN04              (0x01UL<<GPIO_IOPCMD_PC4MD_Pos)     /*!< A/D converter analog input 04 pin. \hideinitializer */

#define GPIO_IOPCMD_PC5MD_GPIO                (0x00UL<<GPIO_IOPCMD_PC5MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPCMD_PC5MD_ADIN05              (0x01UL<<GPIO_IOPCMD_PC5MD_Pos)     /*!< A/D converter analog input 05 pin. \hideinitializer */

#define GPIO_IOPCMD_PC6MD_GPIO                (0x00UL<<GPIO_IOPCMD_PC6MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPCMD_PC6MD_ADIN06              (0x01UL<<GPIO_IOPCMD_PC6MD_Pos)     /*!< A/D converter analog input 06 pin. \hideinitializer */

#define GPIO_IOPCMD_PC7MD_GPIO                (0x00UL<<GPIO_IOPCMD_PC7MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPCMD_PC7MD_ADIN07              (0x01UL<<GPIO_IOPCMD_PC7MD_Pos)     /*!< A/D converter analog input 07 pin. \hideinitializer */

/********************* Bit definition of IOPDMD register **********************/
#define GPIO_IOPDMD_PD0MD_GPIO                (0x00UL<<GPIO_IOPDMD_PD0MD_Pos)     /*!< General-purpose input pin. \hideinitializer */
#define GPIO_IOPDMD_PD0MD_ADIN08              (0x01UL<<GPIO_IOPDMD_PD0MD_Pos)     /*!< A/D converter analog input 08 pin. \hideinitializer */
#define GPIO_IOPDMD_PD0MD_VGA1_VGAN           (0x01UL<<GPIO_IOPDMD_PD0MD_Pos)     /*!< VGA1 negative input pin. \hideinitializer */

#define GPIO_IOPDMD_PD1MD_GPIO                (0x00UL<<GPIO_IOPDMD_PD1MD_Pos)     /*!< General-purpose input pin. \hideinitializer */
#define GPIO_IOPDMD_PD1MD_ADIN09              (0x01UL<<GPIO_IOPDMD_PD1MD_Pos)     /*!< A/D converter analog input 09 pin. \hideinitializer */
#define GPIO_IOPDMD_PD1MD_VGA1_VGAP           (0x01UL<<GPIO_IOPDMD_PD1MD_Pos)     /*!< VGA1 positive input pin. \hideinitializer */
#define GPIO_IOPDMD_PD1MD_CMP3_CMPIN3         (0x01UL<<GPIO_IOPDMD_PD1MD_Pos)     /*!< Comparator 30/31 input pin. \hideinitializer */

#define GPIO_IOPDMD_PD2MD_GPIO                (0x00UL<<GPIO_IOPDMD_PD2MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPDMD_PD2MD_ADIN10              (0x01UL<<GPIO_IOPDMD_PD2MD_Pos)     /*!< A/D converter analog input 10 pin. \hideinitializer */

#define GPIO_IOPDMD_PD3MD_GPIO                (0x00UL<<GPIO_IOPDMD_PD3MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPDMD_PD3MD_ADIN11              (0x01UL<<GPIO_IOPDMD_PD3MD_Pos)     /*!< A/D converter analog input 11 pin. \hideinitializer */

#define GPIO_IOPDMD_PD4MD_GPIO                (0x00UL<<GPIO_IOPDMD_PD4MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPDMD_PD4MD_ADIN12              (0x01UL<<GPIO_IOPDMD_PD4MD_Pos)     /*!< A/D converter analog input 12 pin. \hideinitializer */

#define GPIO_IOPDMD_PD5MD_GPIO                (0x00UL<<GPIO_IOPDMD_PD5MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPDMD_PD5MD_ADIN13              (0x01UL<<GPIO_IOPDMD_PD5MD_Pos)     /*!< A/D converter analog input 13 pin. \hideinitializer */

#define GPIO_IOPDMD_PD6MD_GPIO                (0x00UL<<GPIO_IOPDMD_PD6MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPDMD_PD6MD_ADIN14              (0x01UL<<GPIO_IOPDMD_PD6MD_Pos)     /*!< A/D converter analog input 14 pin. \hideinitializer */

#define GPIO_IOPDMD_PD7MD_GPIO                (0x00UL<<GPIO_IOPDMD_PD7MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPDMD_PD7MD_ADIN15              (0x01UL<<GPIO_IOPDMD_PD7MD_Pos)     /*!< A/D converter analog input 15 pin. \hideinitializer */

/********************* Bit definition of IOPEMD register **********************/
#define GPIO_IOPEMD_PE0MD_GPIO                (0x00UL<<GPIO_IOPEMD_PE0MD_Pos)     /*!< General-purpose input pin. \hideinitializer */
#define GPIO_IOPEMD_PE0MD_ADIN16              (0x01UL<<GPIO_IOPEMD_PE0MD_Pos)     /*!< A/D converter analog input 16 pin. \hideinitializer */
#define GPIO_IOPEMD_PE0MD_VGA2_VGAP           (0x01UL<<GPIO_IOPEMD_PE0MD_Pos)     /*!< VGA2 positive input pin. \hideinitializer */
#define GPIO_IOPEMD_PE0MD_CMP4_CMPIN4         (0x01UL<<GPIO_IOPEMD_PE0MD_Pos)     /*!< Comparator 40/41 input pin. \hideinitializer */

#define GPIO_IOPEMD_PE1MD_GPIO                (0x00UL<<GPIO_IOPEMD_PE1MD_Pos)     /*!< General-purpose input pin. \hideinitializer */
#define GPIO_IOPEMD_PE1MD_ADIN17              (0x01UL<<GPIO_IOPEMD_PE1MD_Pos)     /*!< A/D converter analog input 17 pin. \hideinitializer */
#define GPIO_IOPEMD_PE1MD_VGA2_VGAN           (0x01UL<<GPIO_IOPEMD_PE1MD_Pos)     /*!< VGA2 negative input pin. \hideinitializer */

#define GPIO_IOPEMD_PE2MD_GPIO                (0x00UL<<GPIO_IOPEMD_PE2MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPEMD_PE2MD_ADIN18              (0x01UL<<GPIO_IOPEMD_PE2MD_Pos)     /*!< A/D converter analog input 18 pin. \hideinitializer */

#define GPIO_IOPEMD_PE3MD_GPIO                (0x00UL<<GPIO_IOPEMD_PE3MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPEMD_PE3MD_ADIN19              (0x01UL<<GPIO_IOPEMD_PE3MD_Pos)     /*!< A/D converter analog input 19 pin. \hideinitializer */

#define GPIO_IOPEMD_PE4MD_GPIO                (0x00UL<<GPIO_IOPEMD_PE4MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPEMD_PE4MD_ADIN20              (0x01UL<<GPIO_IOPEMD_PE4MD_Pos)     /*!< A/D converter analog input 20 pin. \hideinitializer */

#define GPIO_IOPEMD_PE5MD_GPIO                (0x00UL<<GPIO_IOPEMD_PE5MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPEMD_PE5MD_ADIN21              (0x01UL<<GPIO_IOPEMD_PE5MD_Pos)     /*!< A/D converter analog input 21 pin. \hideinitializer */

#define GPIO_IOPEMD_PE6MD_GPIO                (0x00UL<<GPIO_IOPEMD_PE6MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPEMD_PE6MD_ADIN22              (0x01UL<<GPIO_IOPEMD_PE6MD_Pos)     /*!< A/D converter analog input 22 pin. \hideinitializer */

#define GPIO_IOPEMD_PE7MD_GPIO                (0x00UL<<GPIO_IOPEMD_PE7MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPEMD_PE7MD_ADIN23              (0x01UL<<GPIO_IOPEMD_PE7MD_Pos)     /*!< A/D converter analog input 23 pin. \hideinitializer */

/********************* Bit definition of IOPFMD register **********************/
#define GPIO_IOPFMD_PF0MD_GPIO                (0x00UL<<GPIO_IOPFMD_PF0MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPFMD_PF0MD_ADIN24              (0x01UL<<GPIO_IOPFMD_PF0MD_Pos)     /*!< A/D converter analog input 24 pin. \hideinitializer */

#define GPIO_IOPFMD_PF1MD_GPIO                (0x00UL<<GPIO_IOPFMD_PF1MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPFMD_PF1MD_ADIN25              (0x01UL<<GPIO_IOPFMD_PF1MD_Pos)     /*!< A/D converter analog input 25 pin. \hideinitializer */

#define GPIO_IOPFMD_PF2MD_GPIO                (0x00UL<<GPIO_IOPFMD_PF2MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPFMD_PF2MD_ADIN26              (0x01UL<<GPIO_IOPFMD_PF2MD_Pos)     /*!< A/D converter analog input 26 pin. \hideinitializer */

#define GPIO_IOPFMD_PF3MD_GPIO                (0x00UL<<GPIO_IOPFMD_PF3MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPFMD_PF3MD_ADIN27              (0x01UL<<GPIO_IOPFMD_PF3MD_Pos)     /*!< A/D converter analog input 27 pin. \hideinitializer */

#define GPIO_IOPFMD_PF4MD_GPIO                (0x00UL<<GPIO_IOPFMD_PF4MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPFMD_PF4MD_ADIN28              (0x01UL<<GPIO_IOPFMD_PF4MD_Pos)     /*!< A/D converter analog input 28 pin. \hideinitializer */

#define GPIO_IOPFMD_PF5MD_GPIO                (0x00UL<<GPIO_IOPFMD_PF5MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPFMD_PF5MD_ADIN29              (0x01UL<<GPIO_IOPFMD_PF5MD_Pos)     /*!< A/D converter analog input 29 pin. \hideinitializer */

#define GPIO_IOPFMD_PF6MD_GPIO                (0x00UL<<GPIO_IOPFMD_PF6MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPFMD_PF6MD_ADIN30              (0x01UL<<GPIO_IOPFMD_PF6MD_Pos)     /*!< A/D converter analog input 30 pin. \hideinitializer */

#define GPIO_IOPFMD_PF7MD_GPIO                (0x00UL<<GPIO_IOPFMD_PF7MD_Pos)     /*!< General-purpose input/output pin. \hideinitializer */
#define GPIO_IOPFMD_PF7MD_ADIN31              (0x01UL<<GPIO_IOPFMD_PF7MD_Pos)     /*!< A/D converter analog input 31 pin. \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Both edge detect selection                                                                             */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_INTCGnDETMD_IRQEG_Pos          (2)
#define GPIO_EXIRQ_BOTHEDGE_DISABLE         (0x00 << GPIO_INTCGnDETMD_IRQEG_Pos)        /*!< GPIO external interrupt both-edge : disable  \hideinitializer */
#define GPIO_EXIRQ_BOTHEDGE_ENABLE          (0x01 << GPIO_INTCGnDETMD_IRQEG_Pos)        /*!< GPIO external interrupt both-edge : enable  \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  External interrupt trigger settings                                                                    */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_INTCGnDETMD_IRQTG_Pos          (0)
#define GPIO_EXIRQ_TRIGGER_RISINGEDGE       (0x00 << GPIO_INTCGnDETMD_IRQTG_Pos)        /*!< GPIO external interrupt trigger : rising edge  \hideinitializer */
#define GPIO_EXIRQ_TRIGGER_FALLINGEDGE      (0x01 << GPIO_INTCGnDETMD_IRQTG_Pos)        /*!< GPIO external interrupt trigger : falling edge  \hideinitializer */
#define GPIO_EXIRQ_TRIGGER_H_LEVEL          (0x02 << GPIO_INTCGnDETMD_IRQTG_Pos)        /*!< GPIO external interrupt trigger : "H" level  \hideinitializer */
#define GPIO_EXIRQ_TRIGGER_L_LEVEL          (0x03 << GPIO_INTCGnDETMD_IRQTG_Pos)        /*!< GPIO external interrupt trigger : "L" level  \hideinitializer */

/*---------------------------------------------------------------------------------------------------------*/
/*  Noise Filter Sampling clock frequency selection                                                        */
/*---------------------------------------------------------------------------------------------------------*/
#define GPIO_NF_SMP_IOCLK_DIV_8         (0x00000000)        /*!< Noise Filter Sampling clock frequency : IOCLK/8 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_16        (0x00000001)        /*!< Noise Filter Sampling clock frequency : IOCLK/16 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_32        (0x00000002)        /*!< Noise Filter Sampling clock frequency : IOCLK/32 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_64        (0x00000003)        /*!< Noise Filter Sampling clock frequency : IOCLK/64 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_128       (0x00000004)        /*!< Noise Filter Sampling clock frequency : IOCLK/128 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_256       (0x00000005)        /*!< Noise Filter Sampling clock frequency : IOCLK/256 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_512       (0x00000006)        /*!< Noise Filter Sampling clock frequency : IOCLK/512 \hideinitializer */
#define GPIO_NF_SMP_IOCLK_DIV_1024      (0x00000007)        /*!< Noise Filter Sampling clock frequency : IOCLK/1024 \hideinitializer */


/*@}*/ /* end of group GPIO_EXPORTED_CONSTANTS */


/** @addtogroup GPIO_EXPORTED_FUNCTIONS GPIO Exported Functions
  @{
*/

/**
 * @brief      Noise filter disabled
 * @param[in]  u8Exirq : External interrupt nunmber(0 to 19).
 * @return     None
 * @details    Disables the noise filter of the specified external interrupt.
 */
#define GPIO_DISABLE_NF(u8Exirq)        (NF->NFCNT0 &= ~(0x1UL << u8Exirq))


/**
 * @brief      Noise filter enabled
 * @param[in]  u8Exirq : External interrupt nunmber(0 to 19).
 * @return     None
 * @details    Enables the noise filter of the specified external interrupt.
 */
#define GPIO_ENABLE_NF(u8Exirq)         (NF->NFCNT0 |= (0x1UL << u8Exirq))


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
 *             - \ref GPIOC
 *             - \ref GPIOD
 *             - \ref GPIOE
 *             - \ref GPIOF
 * @param[in]  u8Ctl : For each pin (Pn0 to Pn7), set it to 1 for input enable and 0 for input disable.
 *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
 * @return     None
 * @details    Enables or disables the input of the specified pin
 */
#define GPIO_IN_CTRL(gpio, u8Ctl)           (gpio->IOPnIE = u8Ctl)


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
 *             - \ref GPIOC
 *             - \ref GPIOD
 *             - \ref GPIOE
 *             - \ref GPIOF
 * @param[in]  u8Ctl : For each pin (Pn0 to Pn7), set it to 1 for output enable and 0 for output disable.
 *                     Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
 * @return     None
 * @details    Enables or disables the output of the specified pin
 */
#define GPIO_OUT_CTRL(gpio, u8Ctl)          (gpio->IOPnOE = u8Ctl)


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
 *             - \ref GPIOC
 *             - \ref GPIOD
 *             - \ref GPIOE
 *             - \ref GPIOF
 * @return     The specified port input data
 * @details    Get the IN register of specified GPIO port.
 */
#define GPIO_GET_IN(gpio)               (gpio->IOPnIN)


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
 *             - \ref GPIOC
 *             - \ref GPIOD
 *             - \ref GPIOE
 *             - \ref GPIOF
 * @param[in]  u8Out : GPIO port data.
 * @return     None
 * @details    Set the Data into specified GPIO port.
 */
#define GPIO_SET_OUT(gpio, u8Out)   (gpio->IOPnOUT = u8Out)


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
 *             - \ref GPIOC
 *             - \ref GPIOD
 *             - \ref GPIOE
 *             - \ref GPIOF
 * @param[in]  u8Clr : For each pin (Pn0 to Pn7), set it to 1 to clear it and 0 to not clear it.
 *                      Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
 * @return     None
 *
 * @details    Clear the output data of the specified pin of the GPIO port
 */
#define GPIO_SET_OUT_CLR(gpio,u8Clr)    (gpio->IOPnCLR = u8Clr)

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
 *             - \ref GPIOC
 *             - \ref GPIOD
 *             - \ref GPIOE
 *             - \ref GPIOF
 * @param[in]  u8Set : For each pin (Pn0 to Pn7), set it to 1 if you want to set it (set the output data to 1),
 *                      or set it to 0 if you do not want to set it.
 *                      Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
 * @return     None
 * @details    Set the output data of the specified pin of the GPIO port to 1.
 */
#define GPIO_SET_OUT_SET(gpio,u8Set)    (gpio->IOPnSET = u8Set)

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
 *             - \ref GPIOC
 *             - \ref GPIOD
 *             - \ref GPIOE
 *             - \ref GPIOF
 * @param[in]  u8Tgl : For each pin (Pn0 to Pn7), set it to 1 if you want to invert it,
 *                      or set it to 0 if you do not want to invert it.
 *                      Each bit shows the pin information in the order of Pn0, Pn1.. Pn6, and Pn7 from the bottom.
 * @return     None
 * @details    Invert the output data of the specified pin of the GPIO port.
 */
#define GPIO_SET_OUT_TOGGLE(gpio,u8Tgl)    (gpio->IOPnTGL = u8Tgl)

/**
 * @brief      Nch open drain output control of the specified pin
 * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, ...., GPIO6).
 *             - \ref GPIO0
 *             - \ref GPIO1
 *             - \ref GPIO2
 *             - \ref GPIO3
 *             - \ref GPIO4
 *             - \ref GPIO5
 *             - \ref GPIO6
 * @param[in]  u8Odc : Pin of the specified port. Select from the macros below.
 *                     (The logical sum of multiple macros is also possible.)
 *             - \ref GPIO_IOP0ODC_P06ODC_ODC
 *             - \ref GPIO_IOP0ODC_P07ODC_ODC
 *             - \ref GPIO_IOP1ODC_P10ODC_ODC
 *             - \ref GPIO_IOP2ODC_P25ODC_ODC
 *             - \ref GPIO_IOP2ODC_P26ODC_ODC
 *             - \ref GPIO_IOP2ODC_P27ODC_ODC
 *             - \ref GPIO_IOP3ODC_P30ODC_ODC
 *             - \ref GPIO_IOP3ODC_P31ODC_ODC
 *             - \ref GPIO_IOP3ODC_P34ODC_ODC
 *             - \ref GPIO_IOP3ODC_P35ODC_ODC
 *             - \ref GPIO_IOP4ODC_P40ODC_ODC
 *             - \ref GPIO_IOP4ODC_P41ODC_ODC
 *             - \ref GPIO_IOP4ODC_P44ODC_ODC
 *             - \ref GPIO_IOP4ODC_P45ODC_ODC
 *             - \ref GPIO_IOP4ODC_P47ODC_ODC
 *             - \ref GPIO_IOP5ODC_P50ODC_ODC
 *             - \ref GPIO_IOP5ODC_P52ODC_ODC
 *             - \ref GPIO_IOP5ODC_P53ODC_ODC
 *             - \ref GPIO_IOP5ODC_P55ODC_ODC
 *             - \ref GPIO_IOP5ODC_P56ODC_ODC
 *             - \ref GPIO_IOP5ODC_P57ODC_ODC
 *             - \ref GPIO_IOP6ODC_P61ODC_ODC
 *             - \ref GPIO_IOP6ODC_P62ODC_ODC
 *             - \ref GPIO_IOP6ODC_P63ODC_ODC
 * @param[in]  set : Set it to 1 for Nch open drain output and 0 for push-pull output.
 *                   0 : push-pull output
 *                   1 : Nch open drain output
 * @return     None
 * @details    Set Nch open drain / push pull output of the specified pin of GPIO port
 */
#define GPIO_SET_ODC(gpio,u8Odc,set)    ((set==1)? (gpio->IOPnODC |= u8Odc) : (gpio->IOPnODC &= ~(u8Odc)))

/**
 * @brief      Input level selection of the specified pin
 * @param[in]  gpio : The pointer of the specified GPIO module(GPIO0, GPIO1, GPIO2, GPIO5).
 *             - \ref GPIO0
 *             - \ref GPIO1
 *             - \ref GPIO2
 *             - \ref GPIO5
 * @param[in]  u8Ilv : Pin of the specified port. Select from the macros below.
 *                     (The logical sum of multiple macros is also possible.)
 *             - \ref GPIO_IOP0ILV_P06ILV_SET
 *             - \ref GPIO_IOP0ILV_P07ILV_SET
 *             - \ref GPIO_IOP1ILV_P12ILV_SET
 *             - \ref GPIO_IOP1ILV_P13ILV_SET
 *             - \ref GPIO_IOP1ILV_P14ILV_SET
 *             - \ref GPIO_IOP1ILV_P15ILV_SET
 *             - \ref GPIO_IOP2ILV_P20ILV_SET
 *             - \ref GPIO_IOP2ILV_P21ILV_SET
 *             - \ref GPIO_IOP5ILV_P52ILV_SET
 *             - \ref GPIO_IOP5ILV_P53ILV_SET
 * @param[in]  set : Set 1 or 0 according to the following
 *                    <P06,P07,P52,P53>
 *                        0 : VDD50x0.7(H level),VDD50x0.3(L level)
 *                        1 : 1.35V(H level),0.8V(L level)
 *                    <P12-P15,P20,P21>
 *                        0: VDD50x0.7(H level),VDD50x0.3(L level)
 *                        1: VDD50x0.8(H level),VDD50x0.2(L level)
 * @return     None
 * @details    Select Input level of the specified pin of GPIO port.
 */
#define GPIO_SET_ILV(gpio,u8Ilv,set)    ((set==1)? (gpio->IOPnILV |= u8Ilv) : (gpio->IOPnILV &= ~(u8Ilv)))


/*-----------------------------*/
/* BSP API function prototypes */
/*-----------------------------*/
void GPIO_DisableInt(uint8_t u8Exirq);
void GPIO_EnableInt(uint8_t u8Irqno, uint8_t u8Exirq, uint8_t u8Edge, uint8_t u8Trigger);
void GPIO_SetFunctionMode(GPIO_T const *gpio, uint8_t u8pin, uint32_t u32value);
void GPIO_SetPullCtl(GPIO_T *gpio, uint8_t u8pin, uint8_t u8value);
void GPIO_SetNfClk(uint8_t u8Exirq, uint32_t u32smp);

/*@}*/ /* end of group GPIO_EXPORTED_FUNCTIONS */

/*@}*/ /* end of group GPIO_Driver */

/*@}*/ /* end of group Standard_Driver */


#ifdef __cplusplus
}
#endif

#endif  /* __GPIO_H__ */

/*** (C) COPYRIGHT 2021 Nuvoton Technology Corp. Japan ***/
