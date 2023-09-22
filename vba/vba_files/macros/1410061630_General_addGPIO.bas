Attribute VB_Name = "addGPIO"
Option Explicit

'The result will be like:
'NUTOOL_PIN.g_cfg_addGPIO = {
'    "LQFP48": {
'        "PB.12": ['LCD_SEG15:8'],
'        "PB.13": ['LCD_SEG14:8'],
'        "PB.14": ['LCD_SEG13:8'],
'        "PB.15": ['LCD_SEG12:8'],
'        "PC.0": ['LCD_SEG11:8'],
'        "PC.1": ['LCD_SEG10:8'],
'        "PC.2": ['LCD_SEG9:8'],
'        "PC.3": ['LCD_SEG8:8'],
'        "PC.4": ['LCD_SEG7:8'],
'        "PC.5": ['LCD_SEG6:8'],
'        "PC.6": ['LCD_SEG5:8'],
'        "PC.7": ['LCD_SEG4:8'],
'        "PC.8": ['LCD_SEG3:8'],
'        "PC.9": ['LCD_SEG2:8'],
'        "PC.14": ['LCD_SEG1:8'],
'        "PC.15": ['LCD_SEG0:8'],
'        "PD.7": ['LCD_COM3:8'],
'        "PD.8": ['LCD_COM2:8'],
'        "PD.9": ['LCD_COM1:8'],
'        "PD.10": ['LCD_COM0:8'],
'        "PD.13": ['LCD_V1:8'],
'        "PD.14": ['LCD_V2:8'],
'        "PD.15": ['LCD_V3:8'],
'        "PA.12": ['LCD_SEG19:8'],
'        "PA.13": ['LCD_SEG18:8'],
'        "PA.14": ['LCD_SEG17:8'],
'        "PA.15": ['LCD_SEG16:8']
'    },,
Sub addGPIO()
    Dim sResult As String
    sResult = addGPIOfinition
    printToTxtFile (sResult)
End Sub

Function addGPIOfinition() As String
    Dim ii As Integer
    Dim ij As Integer
    Dim ik As Integer
    Dim iz As Integer
    Dim iChipTotalPinNumber As Integer
    Dim iColumn As Integer
    Dim iColumn1 As Integer
    Dim iColumn2 As Integer
    Dim iTemp As Integer
    Dim iStartRow As Integer
        
    Dim lCurrentRegionRowsCount As Long
    
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sTemp2 As String
    Dim sStartColumnForParsing As String
    Dim sEndColumnForParsing As String
    Dim sGPIONameColumn As String
    'Dim sLastResult As String
    Dim sOutputResult As String: sOutputResult = ""

    Dim tempArrayList As Object
    Dim tempArrayListA As Object
    Set tempArrayList = CreateObject("System.Collections.ArrayList")
    Set tempArrayListA = CreateObject("System.Collections.ArrayList")
    
    lCurrentRegionRowsCount = Cells.CurrentRegion.Rows.Count
    
    'based on the practical case to determine
    sStartColumnForParsing = "U"
    'sEndColumnForParsing = "N"
    sGPIONameColumn = "K"
    iStartRow = 1
    
    iColumn = Range(sGPIONameColumn & 1).Column
    iColumn1 = Range(sStartColumnForParsing & 1).Column
    'iColumn2 = Range(sEndColumnForParsing & 1).Column
    
    tempArrayList.Clear
    For ii = 2 To lCurrentRegionRowsCount
            sTemp = Cells(ii, iColumn1).Text
            If Len(sTemp) > 0 Then
                tempArrayList.Add (sTemp)
                tempArrayListA.Add (Cells(ii, iColumn).Text)
            End If
    Next ii
        

    'tempArrayList.Sort
    'assemble the final output result
    'sOutputResult = "NUTOOL_PIN.g_cfg_addGPIO = [" & vbCrLf
    For ii = 1 To tempArrayList.Count
        sOutputResult = sOutputResult & """" & tempArrayListA(ii - 1) & """: ['" & tempArrayList(ii - 1) & ":8']," & vbCrLf
    Next ii

    addGPIOfinition = sOutputResult
    
    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function


