Attribute VB_Name = "GenerateGPIODefines"
Option Explicit
Option Base 1

'The result will be like:

Sub generateGPIODefines()
    Dim sResult As String
    sResult = GenerateMultiFunctionGPIODefines
    printToTxtFile (sResult)
End Sub

Function GenerateMultiFunctionGPIODefines() As String
    Dim ii As Integer
    Dim ij As Integer
    Dim ik As Integer
    Dim iz As Integer
    Dim iChipTotalPinNumber As Integer
    Dim iColumn As Integer
    Dim iTemp As Integer
    Dim iStartRow As Integer

    Dim bFound As Boolean
    Dim bParseFull As Boolean

    Dim lCurrentRegionRowsCount As Long
    Dim lCurrentRegionColumnsCount As Long

    Dim sTemp As String
    Dim sTemp1 As String
    Dim sGPIODefineColumn As String
    Dim sSpecialCase As String
    Dim sLastResult As String
    Dim sOutputResult As String: sOutputResult = ""
    Dim sGPIODefine As String
    Dim sGPIODefineLast As String
    Dim sMultifunctionDefinesElement As String
    Dim sMultifunctionDefines As String

    lCurrentRegionRowsCount = ActiveSheet.Cells(Rows.Count, "A").End(xlUp).Row

    'based on the practical case to determine
    sGPIODefineColumn = "C"
    sSpecialCase = "NUC123AE" 'M051DN_DE, MINI57, NANO100BN or NUC123AE
    iStartRow = 2
    bParseFull = True

    iColumn = Range(sGPIODefineColumn & 1).Column
    sOutputResult = "NUTOOL_PIN.g_cfg_gpiosDefines = [" & vbCrLf

    sGPIODefineLast = ""
    sMultifunctionDefines = ""
    sMultifunctionDefinesElement = ""

    For ii = iStartRow To lCurrentRegionRowsCount
         sTemp1 = ""
         lCurrentRegionColumnsCount = ActiveSheet.Cells(ii, Columns.Count).End(xlToLeft).Column
         If lCurrentRegionColumnsCount > 1 Then
            sGPIODefine = createGPIODefine(Cells(ii, iColumn).Text, sSpecialCase)
            For ij = 1 To lCurrentRegionColumnsCount
                sTemp = Cells(ii, ij).Text
                If InStr(sTemp, "]") > 0 Then
                    LeftToByRef sTemp, "]"
                    sTemp1 = "]"
                End If

                If ij = 1 Then
                    sOutputResult = sOutputResult & sTemp
                Else
                    sOutputResult = sOutputResult & " " & sTemp
                End If

                If ij = iColumn Then
                    If lCurrentRegionColumnsCount = 4 Then
                        sOutputResult = sOutputResult & "," & sGPIODefine
                    Else
                        sOutputResult = sOutputResult & sGPIODefine & ","
                    End If
                End If

                If ij = lCurrentRegionColumnsCount - 1 Then
                    sOutputResult = sOutputResult & sTemp1
                End If
            Next ij
         End If

        If ii < lCurrentRegionRowsCount Then
            sOutputResult = sOutputResult & vbCrLf
        End If
    Next ii

    sOutputResult = sOutputResult & "];" & vbCrLf
    GenerateMultiFunctionGPIODefines = sOutputResult
End Function

Public Function createGPIODefine(ByVal sOrigin As String, ByVal sOption As String) As String
    Dim ii As Integer
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sTemp2 As String
    Dim sTemp3 As String

    sOrigin = Right(sOrigin, Len(sOrigin) - 2)
    LeftToByRef sOrigin, "'"

    sTemp = sOrigin
    LeftToByRef sTemp, "."

    sTemp1 = RightToByVal(sOrigin, ".")
    sTemp2 = " 'GPIO:"

    Select Case sOption
       Case "M051DN_DE"
            sTemp2 = sTemp2 & "SYS_MFP_" & sTemp & sTemp1 & "_GPIO@" & sTemp & "_MFP"
       Case "MINI57"
            sTemp2 = sTemp2 & "SYS_G" & sTemp & "_MFP_" & sTemp & sTemp1 & "_GPIO@G" & sTemp & "_MFP"
       Case "NANO100BN"
            If CInt(sTemp1) < 8 Then
                sTemp3 = sTemp & "_L_MFP"
            Else
                sTemp3 = sTemp & "_H_MFP"
            End If

            sTemp2 = sTemp2 & "SYS_" & sTemp3 & "_" & sTemp & sTemp1 & "_MFP_G" & sTemp & sTemp1 & "@" & sTemp3
       Case "NUC123AE"
            If CInt(sTemp1) < 8 Then
                sTemp3 = "G" & sTemp & "_MFP" & "L"
            Else
                sTemp3 = "G" & sTemp & "_MFP" & "H"
            End If

            sTemp2 = sTemp2 & "SYS_" & sTemp3 & "_G" & sTemp & sTemp1 & "_MFP_GPIO@" & sTemp3
       Case Else
            If CInt(sTemp1) < 8 Then
                sTemp3 = "G" & sTemp & "_MFP" & "L"
            Else
                sTemp3 = "G" & sTemp & "_MFP" & "H"
            End If

            sTemp2 = sTemp2 & "SYS_" & sTemp3 & "_" & sTemp & sTemp1 & "MFP_GPIO@" & sTemp3
    End Select

    createGPIODefine = sTemp2 & "'"
End Function
