Attribute VB_Name = "packageGPIOParsing"
Option Explicit
Option Base 1

'The purpose of the sub routine is to parse pin assignment of each package
'The result will be like:
'NUTOOL_PIN.g_cfg_pkgs = {
'    "LQFP100": [
'    'VSS', 'P9.7', 'P3.7', 'P3.6', 'P3.5', 'P3.4', 'P3.2', 'P1.7', 'LDO.CAP', 'VDD',
'    'VSS', 'PA.1', 'PA.0', 'P5.7', 'P5.6', 'P1.6', 'P1.5', 'P1.4', 'P1.3', 'P1.2',
'    'P4.4', 'P4.5', 'P4.0', 'P4.1', 'P4.2',
'    'P4.3', 'P3.3', 'P4.6', 'P1.1', 'P1.0', 'P3.0', 'P3.1', 'P4.7', 'VDD', 'VSS',
'    'P5.0', 'P5.1', 'P2.7', 'P2.6', 'P2.5', 'P2.4', 'P0.7', 'P0.6', 'P0.5', 'P0.4',
'    'P2.3', 'P2.2', 'P2.1', 'P2.0', 'P5.2',
'    'P5.3', 'P5.4', 'P5.5', 'P0.3', 'P0.2', 'P0.1', 'P0.0', 'P8.7', 'P8.6', 'VSS',
'    'VDD', 'P6.7', 'P6.6', 'P6.5', 'P6.4', 'P6.3', 'P6.2', 'P6.1', 'P6.0', 'P8.2',
'    'P8.1', 'P8.0', 'AVSS', 'AVDD', 'VREF',
'    'P7.7', 'P7.6', 'P7.5', 'P7.4', 'P7.3', 'P7.2', 'P7.1', 'P7.0', 'P8.4', 'P8.3',
'    'P9.0', 'P9.1', 'P9.2', 'VDD', 'VSS', 'P8.5', 'P9.3', 'nRESET', 'XOUT', 'XIN',
'    'ICE.DAT', 'ICE.CLK', 'P9.4', 'P9.5', 'P9.6'
'    ],
Sub packageGPIOParsing()
    Dim sResult As String
    sResult = ParsePinDefinition
    printToTxtFile (sResult)
End Sub

Function ParsePinDefinition() As String
    Dim ii As Integer
    Dim ij As Integer
    Dim ik As Integer
    Dim iz As Integer
    Dim iChipTotalPinNumber As Integer
    Dim iChipHorizontalPinNumber As Integer
    Dim iChipVertialPinNumber As Integer
    Dim iColumn As Integer
    Dim iTemp As Integer
    Dim iStartRow As Integer

    Dim lCurrentRegionRowsCount As Long

    Dim sTemp As String
    Dim sTemp1 As String
    Dim sStartColumnForPackage As String
    Dim sEndColumnForPackage As String
    Dim sGPIONameColumn As String
    Dim sLastResult As String
    Dim sOutputResult As String: sOutputResult = ""

    Dim bFound As Boolean
    Dim bWLCSP As Boolean: bWLCSP = False

    Dim tempArrayList As Object
    Dim tempArrayListA As Object
    Dim tempArrayListB As Object
    Set tempArrayList = CreateObject("System.Collections.ArrayList")
    Set tempArrayListA = CreateObject("System.Collections.ArrayList")
    Set tempArrayListB = CreateObject("System.Collections.ArrayList")

    lCurrentRegionRowsCount = Cells.CurrentRegion.Rows.Count

    'based on the practical case to determine
    sStartColumnForPackage = "E"
    sEndColumnForPackage = "J"
    sGPIONameColumn = "B"
    iStartRow = 1

    iColumn = Range(sGPIONameColumn & 1).Column

    tempArrayList.Clear
    sOutputResult = "NUTOOL_PIN.g_cfg_pkgs = {" & vbCrLf
    For ii = Range(sStartColumnForPackage & 1).Column To Range(sEndColumnForPackage & 1).Column
        sTemp = Cells(iStartRow, ii).Text
        'get package name
        tempArrayList.Add (sTemp)
        'get the total number of pins
        LeftToByRef sTemp, "("
        iChipTotalPinNumber = CInt(onlyDigits(sTemp))
        If InStr(sTemp, "WLCSP") > 0 Or InStr(sTemp, "BGA") > 0 Then
            bWLCSP = True
            iChipHorizontalPinNumber = Sqr(iChipTotalPinNumber)
            iChipVertialPinNumber = Sqr(iChipTotalPinNumber)
        Else
            iChipTotalPinNumber = iChipTotalPinNumber / 4
            iChipTotalPinNumber = iChipTotalPinNumber * 4
        End If
        'assemble the output string
        sTemp = tempArrayList(tempArrayList.Count - 1)
        sOutputResult = sOutputResult & """"
        sOutputResult = sOutputResult & sTemp
        sOutputResult = sOutputResult & """"
        sOutputResult = sOutputResult & ": [" & vbCrLf
        'check the package be WLCSP or not
        tempArrayListA.Clear
        tempArrayListB.Clear
        ' sLastResult = ""
        For ij = iStartRow + 1 To lCurrentRegionRowsCount
            sTemp = Trim(Cells(ij, ii).Text)
            LeftToByRef sTemp, "("
            LeftToByRef sTemp, "*"

            If Trim(sTemp) <> "" And (IsNumeric(sTemp) Or bWLCSP) Then
                If tempArrayListB.contains(Trim(sTemp)) = False Then
                    tempArrayListB.Add (Trim(sTemp))
                    sTemp1 = Trim(Cells(ij, iColumn).Text)
                    'do some modifications for the cases such as GPA_1. After doing, it will become PA.1
                    If InStr(sTemp1, "GP") = 1 Then
                        sTemp1 = Right(sTemp1, Len(sTemp1) - 1)
                    End If

                    If InStr(sTemp1, "P") = 1 And Mid(sTemp1, 3, 1) = "_" Then
                        sTemp1 = Replace(sTemp1, "_", ".")
                    End If

                    LeftToByRef sTemp1, "("
                    'since pin name could be wrong, we need to correct it
                    'sTemp1 = CorrectPinName(sTemp1)
                    'for NC cases
'                    If sLastResult <> "" Then
'                        If CInt(sTemp) > (CInt(sLastResult) + 1) Then
'                            For ik = CInt(sLastResult) + 1 To CInt(sTemp) - 1
'                                tempArrayListA.Add (CStr(ik) & ":NC")
'                            Next ik
'                        End If
'                    End If
                    'sanity check'
                    If Trim(sTemp1) = "" Then
                        MsgBox "The name of pin " & Trim(sTemp) & " is empty!"
                        Exit Function
                    End If
                    tempArrayListA.Add (Trim(sTemp) & ":" & sTemp1)
                End If

                 sLastResult = Trim(sTemp)
            End If
        Next ij

        'for the NC case
        For ij = 1 To iChipTotalPinNumber
            sTemp = UpdatePinName(ij, bWLCSP, iChipVertialPinNumber)
            bFound = False
            For ik = 1 To tempArrayListA.Count
                sTemp1 = tempArrayListA(ik - 1)
                If InStr(sTemp1, sTemp & ":") = 1 Then
                    bFound = True
                    Exit For
                End If
            Next ik

            If Not bFound Then
                tempArrayListA.Add (sTemp & ":NC")
            End If
        Next ij

        SortArrayListByNumericByRef tempArrayListA, bWLCSP, iChipVertialPinNumber
        If Not bWLCSP Then
        For ik = 1 To tempArrayListA.Count
            sTemp1 = RightToByVal(tempArrayListA(ik - 1), ":")
            sOutputResult = sOutputResult & "'" & sTemp1 & "'"
            If ik <> tempArrayListA.Count Then
                sOutputResult = sOutputResult & ", "
            End If

            iTemp = ik Mod (iChipTotalPinNumber / 4)
            If (iTemp Mod 10) = 0 Or (iTemp Mod (iChipTotalPinNumber / 4)) = 0 Then
            sOutputResult = sOutputResult & vbCrLf
            End If
        Next ik
        Else
            Debug.Assert tempArrayListA.Count = iChipTotalPinNumber
            For ik = 1 To iChipTotalPinNumber
                sTemp1 = RightToByVal(tempArrayListA(ik - 1), ":")
                sOutputResult = sOutputResult & "'" & sTemp1 & "'"
                If ik <> tempArrayListA.Count Then
                    sOutputResult = sOutputResult & ", "
                End If

                If (ik Mod iChipVertialPinNumber) = 0 Then
                sOutputResult = sOutputResult & vbCrLf
                End If
            Next ik
        End If

        If ii <> Range(sEndColumnForPackage & 1).Column Then
            sOutputResult = sOutputResult & "]," & vbCrLf
        Else
            sOutputResult = sOutputResult & "]" & vbCrLf
        End If
    Next ii
    sOutputResult = sOutputResult & "};" & vbCrLf

    ParsePinDefinition = sOutputResult

    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayListB.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    tempArrayListB.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
    Set tempArrayListB = Nothing
End Function

Function CorrectPinName(sInput As String) As String
    Dim ii As Integer

    Dim sReturn As String
    Dim sArrayReplaceTable(8, 8) As String

    sInput = Trim(sInput)
    sReturn = sInput

    sArrayReplaceTable(1, 1) = "PVDD"
    sArrayReplaceTable(1, 2) = "VDD5V"
    sArrayReplaceTable(1, 3) = "VDDPST"
    sArrayReplaceTable(1, 4) = "VSSPST"
    sArrayReplaceTable(1, 5) = "AVSS_5V"
    sArrayReplaceTable(1, 6) = "AVDD_5V"

    sArrayReplaceTable(2, 1) = "LDO_CAP"
    sArrayReplaceTable(2, 2) = "VDD"
    sArrayReplaceTable(2, 3) = "VDD"
    sArrayReplaceTable(2, 4) = "VSS"
    sArrayReplaceTable(2, 5) = "AVSS"
    sArrayReplaceTable(2, 6) = "AVDD"

    For ii = 1 To UBound(sArrayReplaceTable)
        If sInput = sArrayReplaceTable(1, ii) Then
            sReturn = sArrayReplaceTable(2, ii)
            Exit For
        End If
    Next ii

    CorrectPinName = sReturn
End Function
