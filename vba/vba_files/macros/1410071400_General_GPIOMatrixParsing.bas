Attribute VB_Name = "GPIOMatrixParsing"
Option Explicit

'The purpose of the sub routine is to parse MFP function matrix of GPIO
'The result will be like:
'NUTOOL_PIN.g_cfg_gpioMatrix = [
'{ f: ['P0.0', 'P0_MFP[0]:0', 'P0_MFP[8]:1'] },
'{ f: ['P0.1', 'P0_MFP[1]:0', 'P0_MFP[9]:1'] },
'{ f: ['P0.2', 'P0_MFP[2]:0', 'P0_MFP[10]:1'] },
'{ f: ['P0.3', 'P0_MFP[3]:0', 'P0_MFP[11]:1'] },,
Sub GPIOMatrixParsing()
    Dim sResult As String
    sResult = parseGPIOMatrix
    printToTxtFile (sResult)
End Sub

Function parseGPIOMatrix() As String
    Dim ii As Integer
    Dim ij As Integer
    Dim ik As Integer
    Dim iz As Integer
    Dim iChipTotalPinNumber As Integer
    Dim iColumn As Integer
    Dim iColumn1 As Integer
    Dim iColumn2 As Integer
    Dim iTemp As Integer
    Dim iTemp1 As Integer
    Dim iTemp2 As Integer
    Dim iStartRow As Integer
    
    Dim bReplaceALTwithMFP As Boolean
            
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
    sStartColumnForParsing = "L"
    sEndColumnForParsing = "N"
    sGPIONameColumn = "G"
    iStartRow = 1
    bReplaceALTwithMFP = False
        
    iColumn = Range(sGPIONameColumn & 1).Column
    iColumn1 = Range(sStartColumnForParsing & 1).Column
    iColumn2 = Range(sEndColumnForParsing & 1).Column
    
    tempArrayList.Clear
    tempArrayListA.Clear
    For ii = 2 To lCurrentRegionRowsCount
            sTemp = Cells(ii, iColumn).Text
            If InStr(sTemp, "P") = 1 And InStr(sTemp, ".") = 3 Then
                For ij = iColumn2 To iColumn1 Step -1
                    If Cells(ii, ij).Text <> "" Then
                        iTemp = CInt(onlyDigits(Cells(iStartRow, ij).Text))
                        sTemp1 = Cells(ii, ij).Text
                        
                        If bReplaceALTwithMFP And InStr(sTemp1, "ALT") > 0 Then
                            sTemp2 = sTemp1
                            sTemp1 = Replace(sTemp1, "ALT", "MFP")
                            
                            sTemp2 = RightToByVal(sTemp2, "[")
                            LeftToByRef sTemp2, "]"
                            iTemp1 = CInt(onlyDigits(sTemp2))
                            sTemp1 = Left(sTemp1, 6) & Replace(sTemp1, CStr(iTemp1), CStr(iTemp1 + 8), 7)
                        End If
                                                
                        If tempArrayListA.Contains(sTemp1) Then
                            MsgBox "Duplicate bit " & sTemp1 & " occurs!"
                        End If
                        tempArrayListA.Add (sTemp1)
                        
                        sTemp = sTemp & "&" & sTemp1 & ":" & iTemp 'separated by '&'
                    End If
                Next ij
                
                tempArrayList.Add (sTemp)
            End If
    Next ii
        

    tempArrayList.Sort
    'assemble the final output result
    sOutputResult = "NUTOOL_PIN.g_cfg_gpioMatrix = [" & vbCrLf
    For ii = 1 To tempArrayList.Count
            sTemp = tempArrayList(ii - 1)
            sOutputResult = sOutputResult & "{ f: ["
            
            Do
                iTemp = InStr(sTemp, "&")
                sOutputResult = sOutputResult & "'"
                If iTemp > 0 Then
                     sOutputResult = sOutputResult & Left(sTemp, iTemp - 1)
                     'trim the used part
                     sTemp = Right(sTemp, Len(sTemp) - iTemp)
                Else
                     sOutputResult = sOutputResult & sTemp
                     sTemp = ""
                End If
                
                If sTemp <> "" Then
                    sOutputResult = sOutputResult & "', "
                Else
                    sOutputResult = sOutputResult & "']},"
                End If
            Loop While InStr(sTemp, "&") > 0 Or sTemp <> ""
            
            sOutputResult = sOutputResult & vbCrLf
            
    Next ii
    sOutputResult = sOutputResult & "];" & vbCrLf
    
    parseGPIOMatrix = sOutputResult
    
    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function


