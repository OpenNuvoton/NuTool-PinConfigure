Attribute VB_Name = "GPIOParsing"
Option Explicit

'The purpose of the sub routine is to parse MFP function definitions of GPIO
'The result will be like:
'NUTOOL_PIN.g_cfg_gpios = [
'{ f: ['P0.0:0', 'PWM0_CH0:1', 'ECAP1_IC0:3']},
'{ f: ['P0.1:0', 'PWM0_CH1:1', 'ECAP1_IC1:3']},
'{ f: ['P0.2:0', 'PWM0_CH2:1', 'ECAP1_IC2:3']},
Sub GPIOParsing()
    Dim sResult As String
    sResult = parseGPIODefinition
    printToTxtFile (sResult)
End Sub

Function parseGPIODefinition() As String
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
    sStartColumnForParsing = "S"
    sEndColumnForParsing = "BY"
    sGPIONameColumn = "R"
    iStartRow = 2
    
    iColumn = Range(sGPIONameColumn & 1).Column
    iColumn1 = Range(sStartColumnForParsing & 1).Column
    iColumn2 = Range(sEndColumnForParsing & 1).Column
    
    tempArrayList.Clear
    For ii = 2 To lCurrentRegionRowsCount
            sTemp = Cells(ii, iColumn).Text
            sTemp = Trim(sTemp)
            If InStr(sTemp, "GP") = 1 And InStr(sTemp, "[") = 4 Then
                LeftToByRef sTemp, "("
                'sTemp = sTemp & ":0"
                tempArrayListA.Clear
                For ij = iColumn1 To iColumn2
                    sTemp1 = Cells(ii, ij).Text
                    If sTemp1 <> "" And Cells(ii, ij).Characters.Font.Strikethrough = False Then
                        LeftToByRef sTemp1, "("
                        sTemp1 = Trim(sTemp1)
                        
                        'sTemp2 = Cells(iStartRow, ij).Text
                        'LeftToByRef sTemp2, "("
                        
                        'iTemp = CInt(onlyDigits(sTemp2))
                        'sTemp1 = iTemp & ":" & sTemp1
                        tempArrayListA.Add (sTemp1)
                    End If
                Next ij
                
                tempArrayListA.Sort
                For ij = 0 To tempArrayListA.Count - 1
                    sTemp1 = tempArrayListA(ij)
                    'sTemp2 = RightToByVal(sTemp1, ":")
                    'LeftToByRef sTemp1, ":"
                    
                    'sTemp1 = sTemp2 & ":" & sTemp1
                    'separated by &
                    sTemp = sTemp & "&" & sTemp1
                Next ij
                
                tempArrayList.Add (sTemp)
            End If
    Next ii
        

    tempArrayList.Sort
    For ii = 1 To tempArrayList.Count
        sTemp = tempArrayList(ii - 1) & vbCrLf
        sOutputResult = sOutputResult & sTemp
    Next ii
'    'assemble the final output result
'    sOutputResult = "NUTOOL_PIN.g_cfg_gpios = [" & vbCrLf
'    For ii = 1 To tempArrayList.Count
'            sTemp = tempArrayList(ii - 1)
'            sOutputResult = sOutputResult & "{ f: ["
'
'            Do
'                iTemp = InStr(sTemp, "&")
'                sOutputResult = sOutputResult & "'"
'                If iTemp > 0 Then
'                     sOutputResult = sOutputResult & Left(sTemp, iTemp - 1)
'                     'trim the used part
'                     sTemp = Right(sTemp, Len(sTemp) - iTemp)
'                Else
'                     sOutputResult = sOutputResult & sTemp
'                     sTemp = ""
'                End If
'
'                If sTemp <> "" Then
'                    sOutputResult = sOutputResult & "', "
'                Else
'                    sOutputResult = sOutputResult & "']},"
'                End If
'            Loop While InStr(sTemp, "&") > 0 Or sTemp <> ""
'
'            sOutputResult = sOutputResult & vbCrLf
'
'    Next ii
'    sOutputResult = sOutputResult & "];" & vbCrLf
    
    parseGPIODefinition = sOutputResult
    
    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function

