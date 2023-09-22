Attribute VB_Name = "ParseMultiFunctionDefines"
Option Explicit
Option Base 1

Private Declare Function StrCmpLogicalW Lib "SHLWAPI.DLL" ( _
                                        ByVal lpStr1 As Long, _
                                        ByVal lpStr2 As Long) As Long

'The result will be like:

Sub packageGPIOParsing()
    Dim sResult As String
    sResult = ParseMultiFunctionDefines
    printToTxtFile (sResult)
End Sub

Function ParseMultiFunctionDefines() As String
    Dim ii As Integer
    Dim ij As Integer
    Dim ik As Integer
    Dim iz As Integer
    Dim iChipTotalPinNumber As Integer
    Dim iColumn As Integer
    Dim iTemp As Integer
    Dim iStartRow As Integer
    Dim iTotalPinsForOneGPIOGroup As Integer
    
    Dim bFound As Boolean
    Dim bParseFull As Boolean
        
    Dim lCurrentRegionRowsCount As Long
    
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sStartColumnForPackage As String
    Dim sEndColumnForPackage As String
    Dim sGPIONameColumn As String
    Dim sLastResult As String
    Dim sOutputResult As String: sOutputResult = ""
    Dim sMultifunctionDefines As String
    Dim sGPIOName As String
    Dim sMultifunctionDefinesElement As String
    
    
    Dim tempArrayList As Object
    Dim tempArrayListA As Object
    Set tempArrayList = CreateObject("System.Collections.ArrayList")
    Set tempArrayListA = CreateObject("System.Collections.ArrayList")
    
    lCurrentRegionRowsCount = ActiveSheet.Cells(Rows.Count, "A").End(xlUp).Row
    
    'based on the practical case to determine
'    sStartColumnForPackage = "A"
'    sEndColumnForPackage = "C"
    sGPIONameColumn = "A"
    iStartRow = 1
    iTotalPinsForOneGPIOGroup = 8 'or 16
    bParseFull = True
    
    iColumn = Range(sGPIONameColumn & 1).Column
    
    tempArrayList.Clear
    tempArrayListA.Clear
    sOutputResult = "NUTOOL_PIN.g_cfg_gpiosDefines = [" & vbCrLf
    
    sMultifunctionDefines = ""
    sMultifunctionDefinesElement = ""
    For ii = iStartRow To lCurrentRegionRowsCount
        sTemp = Cells(ii, iColumn).Text

        If InStr(sTemp, "//P") = 1 Or InStr(sTemp, "//GP") = 1 Then
            'store the last result
            If sMultifunctionDefines <> "" Then
                'tempArrayListA.Sort
                For ij = 1 To tempArrayListA.Count
                    sTemp1 = RightToByVal(tempArrayListA(ij - 1), "#")
                    sMultifunctionDefines = sMultifunctionDefines & sTemp1
                Next ij
                tempArrayListA.Clear
                
                'sOutputResult = sOutputResult & sMultifunctionDefines & "] }," & vbCrLf
                tempArrayList.Add (sMultifunctionDefines & "] }," & vbCrLf)
            End If

            sGPIOName = createGPIOName(sTemp)
            sMultifunctionDefines = "{ f: ['" & sGPIOName & "'"
        ElseIf InStr(sTemp, "define") > 0 Then
            sTemp = Cells(ii, iColumn + 1).Text
            sTemp = findMultiFunctionName(sTemp, sGPIOName)
            
            If sTemp <> "GPIO" And InStr(sTemp, "GP") <> 1 And sTemp <> "Msk" Then
                If Cells(ii, iColumn + 2).Text <> "NULL" And Cells(ii, iColumn + 2).Text <> "0x00000000UL" Then
                    ' for the general case
                    'sMultifunctionDefinesElement = sMultifunctionDefinesElement & "/" & Cells(ii, iColumn + 1).Text & "@" & createRegisterName(Cells(ii, iColumn + 1).Text)
                    
                    ' for ML51
                    sMultifunctionDefinesElement = sMultifunctionDefinesElement & "/" & Cells(ii, iColumn + 1).Text
                End If
                
                If sTemp <> findMultiFunctionName(Cells(ii + 1, iColumn + 1).Text, sGPIOName) Then
                    sMultifunctionDefinesElement = Right(sMultifunctionDefinesElement, Len(sMultifunctionDefinesElement) - 1)
                    sMultifunctionDefinesElement = sMultifunctionDefinesElement & "'"
                
                    If bParseFull Then
                        sMultifunctionDefinesElement = Cells(ii, iColumn + 2).Text & "#" & ", '" & sTemp & ":" & sMultifunctionDefinesElement
                        'sMultifunctionDefines = sMultifunctionDefines & ", '" & sTemp & ":" & sMultifunctionDefinesElement
                    Else
                        sMultifunctionDefinesElement = Cells(ii, iColumn + 2).Text & "#" & ", '" & sTemp & ":" & "'"
                        'sMultifunctionDefines = sMultifunctionDefines & ", '" & sTemp & ":" & "'"
                    End If
                    tempArrayListA.Add (sMultifunctionDefinesElement)
                    
                    sMultifunctionDefinesElement = ""
                End If
            End If
        End If
    Next ii
    'handle the last case
    If ii = lCurrentRegionRowsCount + 1 And sMultifunctionDefines <> "" Then
        'tempArrayListA.Sort
        For ij = 1 To tempArrayListA.Count
            sTemp1 = RightToByVal(tempArrayListA(ij - 1), "#")
            sMultifunctionDefines = sMultifunctionDefines & sTemp1
        Next ij
        tempArrayListA.Clear
        
        sMultifunctionDefines = sMultifunctionDefines & "] }," & vbCrLf
        If (sMultifunctionDefines <> tempArrayList(tempArrayList.Count - 1)) Then
            tempArrayList.Add (sMultifunctionDefines)
        End If
    End If
   
    
    'tempArrayList.Add (sMultifunctionDefines & "] }," & vbCrLf)

'    tempArrayList.Sort
    For ii = 1 To tempArrayList.Count
        sOutputResult = sOutputResult & tempArrayList(ii - 1)
    Next ii

    'tempArrayList.Sort (Natural Sort)
'    For ii = 0 To tempArrayList.Count - 2
'        For ij = ii + 1 To tempArrayList.Count - 1
'            If StrCmpLogicalW(StrPtr(tempArrayList(ii)), StrPtr(tempArrayList(ij))) > 0 Then
'                sTemp = tempArrayList(ii)
'                tempArrayList(ii) = tempArrayList(ij)
'                tempArrayList(ij) = sTemp
'            End If
'        Next
'    Next

    'add lost GPIO pins
'    iColumn = 0
'    sTemp = tempArrayList(0)
'    tempArrayListA.Clear
'    Do
'        sTemp = Left(sTemp, 3) & iColumn
'        bFound = False
'        For ii = 0 To tempArrayList.Count - 1
'            If InStr(tempArrayList(ii), sTemp) = 1 Then
'                bFound = True
'                tempArrayListA.Add (tempArrayList(0))
'                tempArrayList.RemoveAt (0)
'                Exit For
'            End If
'        Next
'
'        If bFound = False Then
'            tempArrayListA.Add (sTemp & ":0")
'
'        End If
'
'        If iColumn < iTotalPinsForOneGPIOGroup - 1 Then
'            iColumn = iColumn + 1
'        Else
'            iColumn = 0
'            If tempArrayList.Count > 0 Then
'                sTemp = tempArrayList(0)
'            End If
'        End If
'
'    Loop While tempArrayList.Count > 0 Or iColumn <> 0
'
'    For ii = 0 To tempArrayListA.Count - 1
'        tempArrayList.Add (tempArrayListA(ii))
'    Next

    'sOutputResult = sOutputResult & sMultifunctionDefines & "] }" & vbCrLf
    sOutputResult = sOutputResult & "];" & vbCrLf
    
    ParseMultiFunctionDefines = sOutputResult
    
    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function

Public Function createGPIOName(ByVal sOrigin As String) As String
    Dim sTemp As String
    Dim sTemp1 As String
    
    sTemp = sOrigin
    While InStr(sTemp, "P") > 0
        sTemp = "P" & RightToByVal(sTemp, "P")
        
        If InStr(sTemp, ".") > 0 Then
            sOrigin = sTemp
        ElseIf IsNumeric(Mid(sTemp, 3, 1)) Then
            If IsNumeric(Mid(sTemp, 4, 1)) Then
                sTemp = Left(sTemp, 4)
            Else
                sTemp = Left(sTemp, 3)
            End If

            sTemp1 = Right(sTemp, Len(sTemp) - 2)
            sTemp = Left(sTemp, 2)
            
            sOrigin = sTemp & "." & sTemp1
        End If

        sTemp = Right(sTemp, Len(sTemp) - 1)
    Wend
    
    createGPIOName = sOrigin
End Function

Public Function createRegisterName(ByVal sOrigin As String) As String
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sRegisterName As String
        
    sOrigin = RightToByVal(sOrigin, "SYS_")
    
    sRegisterName = ""
'case1
'    While InStr(sOrigin, "_") > 0
'        sTemp = sOrigin
'        LeftToByRef sTemp, "_"
'
'        sOrigin = RightToByVal(sOrigin, "_")
'
'        sRegisterName = sRegisterName & "_" & sTemp
'        If InStr(sTemp, "MFP") <> 0 Then
'            sOrigin = ""
'        End If
'    Wend
'
'
'    If Len(sRegisterName) > 0 Then
'        sRegisterName = Right(sRegisterName, Len(sRegisterName) - 1)
'    End If
    
'case2
    sTemp = sOrigin
    LeftToByRef sTemp, "_"

    sTemp1 = RightToByVal(sOrigin, "_")
    LeftToByRef sTemp1, "_"

    sRegisterName = sTemp & "_" & sTemp1

'case3:P0_MFP
'    sTemp = sOrigin
'    LeftToByRef sTemp, "_"
'
'    sTemp1 = RightToByVal(sOrigin, "_")
'    LeftToByRef sTemp1, "_"
'
'    sTemp1 = Left(sTemp1, 2)
'
'    sRegisterName = sTemp1 & "_" & sTemp


           
    createRegisterName = sRegisterName
End Function

Public Function findMultiFunctionName(ByVal sOrigin As String, ByVal sGPIOName As String) As String
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sResult As String
    Dim sKeyWord As String
    Dim sOriginLocal As String

    sTemp = sGPIOName
    sTemp = RightToByVal(sTemp, ".")
    
     
    sTemp1 = sGPIOName
    LeftToByRef sTemp1, "."
    
    sGPIOName = sTemp1 & sTemp
    
    'sKeyWord = "MFP"
    sKeyWord = sGPIOName
    
    sResult = ""
    sOriginLocal = sOrigin
    While InStr(sOriginLocal, "_") > 0
        sTemp = RightRevToByVal(sOriginLocal, "_")
        LeftRevToByRef sOriginLocal, "_"
        
        If InStr(sTemp, sKeyWord) = 0 Then
            sResult = sTemp & "_" & sResult
        Else
            sOriginLocal = ""
        End If
    Wend
      
    If Len(sResult) > 0 Then
        sResult = Left(sResult, Len(sResult) - 1)
    End If
    
    
    findMultiFunctionName = sResult
End Function
