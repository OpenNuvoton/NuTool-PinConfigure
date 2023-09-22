Attribute VB_Name = "MFP_GPIOParsing"
Option Explicit

Private Declare Function StrCmpLogicalW Lib "SHLWAPI.DLL" ( _
                                        ByVal lpStr1 As Long, _
                                        ByVal lpStr2 As Long) As Long

'The purpose of the sub routine is to parse MFP function definitions of GPIO
'The result will be like:
'NUTOOL_PIN.g_cfg_gpios = [
'{ f: ['P0.0:0', 'PWM0_CH0:1', 'ECAP1_IC0:3']},
'{ f: ['P0.1:0', 'PWM0_CH1:1', 'ECAP1_IC1:3']},
'{ f: ['P0.2:0', 'PWM0_CH2:1', 'ECAP1_IC2:3']},
Sub MFP_GPIOParsing()
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
    Dim iColumnA1 As Integer
    Dim iColumnA2 As Integer
    Dim iTemp As Integer
    Dim iStartRow As Integer
    Dim iTotalPinsForOneGPIOGroup As Integer

    Dim lCurrentRegionRowsCount As Long

    Dim sTemp As String
    Dim sTemp1 As String
    Dim sTemp2 As String
    Dim sTemp3 As String
    Dim sStartColumnForParsing As String
    Dim sEndColumnForParsing As String

    Dim sKeyWordForAdditionalParsing As String
    Dim sAdditionalStartColumnForParsing As String
    Dim sAdditionalEndColumnForParsing As String
    Dim sGPIONameColumn As String
    'Dim sLastResult As String
    Dim sOutputResult As String: sOutputResult = ""

    Dim bFound As Boolean
    Dim bSplitMFPFunctions As Boolean

    Dim tempArrayList As Object
    Dim tempArrayListA As Object
    Dim keyWordForAdditionalParsingArrayList As Object
    Dim additionalStartColumnForParsingArrayList As Object
    Dim additionalEndColumnForParsingArrayList As Object
    Set tempArrayList = CreateObject("System.Collections.ArrayList")
    Set tempArrayListA = CreateObject("System.Collections.ArrayList")
    Set keyWordForAdditionalParsingArrayList = CreateObject("System.Collections.ArrayList")
    Set additionalStartColumnForParsingArrayList = CreateObject("System.Collections.ArrayList")
    Set additionalEndColumnForParsingArrayList = CreateObject("System.Collections.ArrayList")

    lCurrentRegionRowsCount = Cells.CurrentRegion.Rows.Count

    'based on the practical case to determine
    sStartColumnForParsing = "H"
    sEndColumnForParsing = "N"
    sGPIONameColumn = "G"
    iStartRow = 1
    iTotalPinsForOneGPIOGroup = 16 'or 8
    bSplitMFPFunctions = True
    keyWordForAdditionalParsingArrayList.Clear
    keyWordForAdditionalParsingArrayList.Add ("Analog")
    keyWordForAdditionalParsingArrayList.Add ("Serial1")
    keyWordForAdditionalParsingArrayList.Add ("Serial2")
    keyWordForAdditionalParsingArrayList.Add ("Serial3")
    keyWordForAdditionalParsingArrayList.Add ("Serial4")
    keyWordForAdditionalParsingArrayList.Add ("Serial5")
    keyWordForAdditionalParsingArrayList.Add ("Serial6")
    additionalStartColumnForParsingArrayList.Clear
    additionalStartColumnForParsingArrayList.Add ("Q")
    additionalStartColumnForParsingArrayList.Add ("V")
    additionalStartColumnForParsingArrayList.Add ("AB")
    additionalStartColumnForParsingArrayList.Add ("AH")
    additionalStartColumnForParsingArrayList.Add ("AL")
    additionalStartColumnForParsingArrayList.Add ("AQ")
    additionalStartColumnForParsingArrayList.Add ("AV")
    additionalEndColumnForParsingArrayList.Clear
    additionalEndColumnForParsingArrayList.Add ("S")
    additionalEndColumnForParsingArrayList.Add ("Y")
    additionalEndColumnForParsingArrayList.Add ("AE")
    additionalEndColumnForParsingArrayList.Add ("AI")
    additionalEndColumnForParsingArrayList.Add ("AN")
    additionalEndColumnForParsingArrayList.Add ("AS")
    additionalEndColumnForParsingArrayList.Add ("AX")

    iColumn = Range(sGPIONameColumn & 1).Column
    iColumn1 = Range(sStartColumnForParsing & 1).Column
    iColumn2 = Range(sEndColumnForParsing & 1).Column

    tempArrayList.Clear
    For ii = 2 To lCurrentRegionRowsCount
            sTemp = Cells(ii, iColumn).Text
            If InStr(sTemp, "P") = 1 And InStr(sTemp, ".") = 3 And InStr(sTemp, "/") = 0 And InStr(sTemp, "\") = 0 Then
                LeftToByRef sTemp, "("
                sTemp = sTemp & ":0"
                tempArrayListA.Clear
                For ij = iColumn1 To iColumn2
                    sTemp1 = Trim(Cells(ii, ij).Text)
                    If sTemp1 <> "" And Cells(ii, ij).Characters.Font.Strikethrough = False Then
                        LeftToByRef sTemp1, "("
                        sTemp1 = Trim(sTemp1)

                        sTemp2 = Cells(iStartRow, ij).Text
                        LeftToByRef sTemp2, "("
                        iTemp = CInt(onlyDigits(sTemp2))

                        bFound = False
                        For iz = 0 To keyWordForAdditionalParsingArrayList.Count - 1
                            sKeyWordForAdditionalParsing = keyWordForAdditionalParsingArrayList(iz)
                            If InStr(sTemp1, sKeyWordForAdditionalParsing) = 1 Then
                                bFound = True
                                iColumnA1 = Range(additionalStartColumnForParsingArrayList(iz) & 1).Column
                                iColumnA2 = Range(additionalEndColumnForParsingArrayList(iz) & 1).Column
                                For ik = iColumnA1 To iColumnA2
                                    sTemp1 = Cells(ii, ik).Text
                                    If sTemp1 <> "" And Cells(ii, ik).Characters.Font.Strikethrough = False Then
                                        LeftToByRef sTemp1, "("
                                        sTemp1 = Trim(sTemp1)
                                        sTemp1 = iTemp & ":" & sTemp1
                                        tempArrayListA.Add (sTemp1)
                                    End If
                                Next ik
                            End If
                        Next iz
                        If bFound = False Then
                            sTemp1 = iTemp & ":" & sTemp1
                            tempArrayListA.Add (sTemp1)
                        End If
                    End If
                Next ij

                'tempArrayListA.Sort
                For ij = 0 To tempArrayListA.Count - 1
                    sTemp1 = tempArrayListA(ij)
                    sTemp2 = RightToByVal(sTemp1, ":")
                    LeftToByRef sTemp1, ":"

                    If bSplitMFPFunctions Then
                        sTemp3 = ""
                        Do
                            iTemp = InStr(sTemp2, "/")
                            If iTemp > 0 Then
                                If sTemp3 <> "" Then
                                    sTemp3 = sTemp3 & "&" & Left(sTemp2, iTemp - 1) & ":" & sTemp1
                                Else
                                    sTemp3 = Left(sTemp2, iTemp - 1) & ":" & sTemp1
                                End If
                                 'trim the used part
                                 sTemp2 = Right(sTemp2, Len(sTemp2) - iTemp)
                            Else
                                If sTemp3 <> "" Then
                                    sTemp3 = sTemp3 & "&" & sTemp2 & ":" & sTemp1
                                Else
                                    sTemp3 = sTemp2 & ":" & sTemp1
                                End If
                                 sTemp2 = ""
                            End If
                        Loop While InStr(sTemp2, "/") > 0 Or sTemp2 <> ""
                        sTemp1 = sTemp3
                    Else
                        sTemp1 = sTemp2 & ":" & sTemp1
                    End If
                    'separated by &
                    sTemp = sTemp & "&" & sTemp1
                Next ij

                tempArrayList.Add (sTemp)
            End If
    Next ii

    'tempArrayList.Sort (Natural Sort)
    For ii = 0 To tempArrayList.Count - 2
        For ij = ii + 1 To tempArrayList.Count - 1
            If StrCmpLogicalW(StrPtr(tempArrayList(ii)), StrPtr(tempArrayList(ij))) > 0 Then
                sTemp = tempArrayList(ii)
                tempArrayList(ii) = tempArrayList(ij)
                tempArrayList(ij) = sTemp
            End If
        Next
    Next

    'add lost GPIO pins
    iColumn = 0
    sTemp = tempArrayList(0)
    tempArrayListA.Clear
    Do
        sTemp = Left(sTemp, 3) & iColumn
        bFound = False
        For ii = 0 To tempArrayList.Count - 1
            If InStr(tempArrayList(ii), sTemp & ":") = 1 Then
                bFound = True
                tempArrayListA.Add (tempArrayList(0))
                tempArrayList.RemoveAt (0)
                Exit For
            End If
        Next

        If bFound = False Then
            tempArrayListA.Add (sTemp & ":0")

        End If

        If iColumn < iTotalPinsForOneGPIOGroup - 1 Then
            iColumn = iColumn + 1
        Else
            iColumn = 0
            If tempArrayList.Count > 0 Then
                sTemp = tempArrayList(0)
            End If
        End If

    Loop While tempArrayList.Count > 0 Or iColumn <> 0

    For ii = 0 To tempArrayListA.Count - 1
        tempArrayList.Add (tempArrayListA(ii))
    Next

    'assemble the final output result
    sOutputResult = "NUTOOL_PIN.g_cfg_gpios = [" & vbCrLf
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
                    sOutputResult = sOutputResult & "'] },"
                End If
            Loop While InStr(sTemp, "&") > 0 Or sTemp <> ""

            sOutputResult = sOutputResult & vbCrLf

    Next ii
    sOutputResult = Left(sOutputResult, Len(sOutputResult) - 3)
    sOutputResult = sOutputResult & vbCrLf & "];"

    parseGPIODefinition = sOutputResult

    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    keyWordForAdditionalParsingArrayList.Clear
    additionalStartColumnForParsingArrayList.Clear
    additionalEndColumnForParsingArrayList.Clear

    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    keyWordForAdditionalParsingArrayList.TrimToSize
    additionalStartColumnForParsingArrayList.TrimToSize
    additionalEndColumnForParsingArrayList.TrimToSize

    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
    Set keyWordForAdditionalParsingArrayList = Nothing
    Set additionalStartColumnForParsingArrayList = Nothing
    Set additionalEndColumnForParsingArrayList = Nothing
End Function
