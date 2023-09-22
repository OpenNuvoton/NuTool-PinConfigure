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
    Dim iColumn1 As Integer
    Dim iTemp As Integer
    Dim iStartRow As Integer
    Dim iTotalPinsForOneGPIOGroup As Integer

    Dim bFound As Boolean
    Dim bParseFull As Boolean

    Dim lCurrentRegionRowsCount As Long

    Dim sTemp As String
    Dim sTemp1 As String
    Dim sGPIONameColumn As String
    Dim sNodeNameColumn As String
    Dim sSpecialCase As String
    Dim sLastResult As String
    Dim sOutputResult As String: sOutputResult = ""
    Dim sGPIOName As String
    Dim sGPIONameLast As String
    Dim sMultifunctionDefinesElement As String
    Dim sMultifunctionDefines As String

    Dim tempArrayList As Object
    Dim tempArrayListA As Object
    Set tempArrayList = CreateObject("System.Collections.ArrayList")
    Set tempArrayListA = CreateObject("System.Collections.ArrayList")

    lCurrentRegionRowsCount = ActiveSheet.Cells(Rows.Count, "A").End(xlUp).Row

    'based on the practical case to determine
    sGPIONameColumn = "B"
    sNodeNameColumn = "F"
    sSpecialCase = "" 'ML51 or MS51
    iStartRow = 1
    iTotalPinsForOneGPIOGroup = 16 '16 or 8
    bParseFull = True

    iColumn = Range(sGPIONameColumn & 1).Column
    iColumn1 = Range(sNodeNameColumn & 1).Column

    tempArrayList.Clear
    tempArrayListA.Clear
    sOutputResult = "NUTOOL_PIN.g_cfg_gpiosDefines = [" & vbCrLf

    sGPIONameLast = ""
    sMultifunctionDefines = ""
    sMultifunctionDefinesElement = ""
    For ii = iStartRow To lCurrentRegionRowsCount
        If InStr(Cells(ii, iColumn - 1).Text, "define") > 0 Then
            sGPIOName = createGPIOName(Cells(ii, iColumn).Text)
            If sGPIONameLast <> "" and sGPIONameLast <> sGPIOName Then
                'store the last result
                sMultifunctionDefines = "{ f: ['" & sGPIONameLast & "'"
                For ij = 1 To tempArrayListA.Count
                    sTemp1 = RightToByVal(tempArrayListA(ij - 1), "#")
                    sMultifunctionDefines = sMultifunctionDefines & sTemp1
                Next ij
                tempArrayListA.Clear
                tempArrayList.Add (sMultifunctionDefines & "] }," & vbCrLf)
            End If

            sTemp = findMultiFunctionName(Cells(ii, iColumn).Text, Cells(ii, iColumn - 1).Text, sGPIOName, sSpecialCase)

            ' for the general case
            sMultifunctionDefinesElement = sMultifunctionDefinesElement & "/" & RemoveWhiteSpace(Cells(ii, iColumn).Text) & "@" & createRegisterName(Cells(ii, iColumn).Text, sGPIOName, Cells(ii, iColumn1).Text, sSpecialCase)

            If sTemp <> findMultiFunctionName(Cells(ii + 1, iColumn).Text, Cells(ii + 1, iColumn -1).Text, sGPIOName, sSpecialCase) Then
                sMultifunctionDefinesElement = Right(sMultifunctionDefinesElement, Len(sMultifunctionDefinesElement) - 1)
                sMultifunctionDefinesElement = sMultifunctionDefinesElement & "'"
                If bParseFull Then
                    sMultifunctionDefinesElement = Cells(ii, iColumn + 1).Text & "#" & ", '" & sTemp & ":" & sMultifunctionDefinesElement
                Else
                    sMultifunctionDefinesElement = Cells(ii, iColumn + 1).Text & "#" & ", '" & sTemp & ":" & "'"
                End If
                tempArrayListA.Add (sMultifunctionDefinesElement)
                sMultifunctionDefinesElement = ""
            End If
            sGPIONameLast = sGPIOName
        End If
    Next ii

    'store the last result
    sMultifunctionDefines = "{ f: ['" & sGPIONameLast & "'"
    For ij = 1 To tempArrayListA.Count
        sTemp1 = RightToByVal(tempArrayListA(ij - 1), "#")
        sMultifunctionDefines = sMultifunctionDefines & sTemp1
    Next ij
    tempArrayListA.Clear
    tempArrayList.Add (sMultifunctionDefines & "] }," & vbCrLf)

    For ii = 1 To tempArrayList.Count
        sOutputResult = sOutputResult & tempArrayList(ii - 1)
    Next ii

    sOutputResult = Left(sOutputResult, Len(sOutputResult) - 3)
    sOutputResult = sOutputResult & vbCrLf & "];"

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
    Dim ii As Integer
    Dim sTemp As String
    Dim sTemp1 As String
    Dim tempArrayListB As Object
    Set tempArrayListB = CreateObject("System.Collections.ArrayList")

    tempArrayListB.Add ("MFPH_P")
    tempArrayListB.Add ("MFPL_P")
    tempArrayListB.Add ("MFP1_P")
    tempArrayListB.Add ("MFP0_P")
    tempArrayListB.Add ("MFP_P")
    tempArrayListB.Add ("MD_P")

    sTemp = sOrigin
    For ii = 1 To tempArrayListB.Count
        While InStr(sTemp, tempArrayListB(ii - 1)) > 0
            sTemp = "P" & RightToByVal(sTemp, tempArrayListB(ii - 1))

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
    Next ii

    createGPIOName = sOrigin

    'release memory
    tempArrayListB.Clear
    tempArrayListB.TrimToSize
    Set tempArrayListB = Nothing
End Function

Public Function createRegisterName(ByVal sOrigin As String, ByVal sOrigin1 As String, ByVal sOrigin2 As String, ByVal sOption As String) As String
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sTempOrigin As String
    Dim sRegisterName As String

    sOrigin = RightToByVal(sOrigin, "SYS_")
    sTempOrigin = sOrigin

    sRegisterName = ""

    Select Case sOption
       Case "generalCase"
            While InStr(sOrigin, "_") > 0
                sTemp = sOrigin
                LeftToByRef sTemp, "_"
                sOrigin = RightToByVal(sOrigin, "_")
                sRegisterName = sRegisterName & "_" & sTemp
                If InStr(sTemp, "MFP") <> 0 Then
                    sOrigin = ""
                End If
            Wend
            If Len(sRegisterName) > 0 Then
                sRegisterName = Right(sRegisterName, Len(sRegisterName) - 1)
            End If
       Case "MA35D1"
            While InStr(sOrigin, "_") > 0
                sTemp = sOrigin
                LeftToByRef sTemp, "_"
                sOrigin = RightToByVal(sOrigin, "_")
                sRegisterName = sRegisterName & "_" & sTemp
                If InStr(sTemp, "MFP") <> 0 Then
                    sOrigin = ""
                End If
            Wend
            If Len(sRegisterName) > 0 Then
                sRegisterName = Right(sRegisterName, Len(sRegisterName) - 1)
            End If

            If InStr(sOrigin2, "//") <> 0 Then
                sTemp = Right(sOrigin2, Len(sOrigin2) - 2)
            Else
                sTemp = findMultiFunctionName(sTempOrigin, "",  sOrigin1, "")
                If InStr(sTemp, "_") > 0 Then
                    LeftToByRef sTemp, "_"
                End If
                If sTemp = "GPIO" Then
                    LeftToByRef sOrigin1, "."
                    sTemp = sTemp & sOrigin1
                End If
            End If
            sRegisterName = sRegisterName & "%" & sTemp
       Case "KM1M7"
            sTemp = RightToByVal(sOrigin, "GPIO_")
            LeftToByRef sTemp, "_"
            sRegisterName = sTemp
       Case "P0_MFP"
            sTemp = sOrigin
            LeftToByRef sTemp, "_"
            sTemp1 = RightToByVal(sOrigin, "_")
            LeftToByRef sTemp1, "_"
            sTemp1 = Left(sTemp1, 2)
            sRegisterName = sTemp1 & "_" & sTemp
       Case "ML51"
            sTemp1 = RightToByVal(sOrigin, "_")
            sTemp1 = Left(sTemp1, 2)
            sRegisterName = sTemp1 & "MF76543210"
       Case "MS51"
            sTemp1 = Left(sOrigin1, 2)
            sRegisterName = sTemp1 & "MF76543210"
       Case Else
            sTemp = sOrigin
            LeftToByRef sTemp, "_"
            sTemp1 = RightToByVal(sOrigin, "_")
            LeftToByRef sTemp1, "_"
            sRegisterName = sTemp & "_" & sTemp1
    End Select

    createRegisterName = sRegisterName
End Function

Public Function findMultiFunctionName(ByVal sOrigin As String, ByVal sOrigin1 As String, ByVal sGPIOName As String, ByVal sOption As String) As String
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sResult As String
    Dim sKeyWord As String
    Dim sOriginLocal As String

    Select Case sOption
       Case "MS51"
            sResult = sOrigin1
       Case Else
            sTemp = sGPIOName
            sTemp = RightToByVal(sTemp, ".")
            sTemp1 = sGPIOName
            LeftToByRef sTemp1, "."
            sGPIOName = sTemp1 & sTemp
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
    End Select

    findMultiFunctionName = sResult
End Function

'Add a reference to Microsoft VBScript Regular Expressions 5.5
Public Function RemoveWhiteSpace(target As String) As String
    With New RegExp
        .Pattern = "\s"
        .MultiLine = True
        .Global = True
        RemoveWhiteSpace = .Replace(target, vbNullString)
    End With
End Function
