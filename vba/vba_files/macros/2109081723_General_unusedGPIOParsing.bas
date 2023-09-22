Attribute VB_Name = "unusedGPIOParsing"
Option Explicit
'The result will be like:


Sub GPIOMatrixParsing()
    Dim sResult As String
    sResult = unusedGPIOParsing
    printToTxtFile (sResult)
End Sub

Function unusedGPIOParsing() As String
    Dim ii As Integer
    Dim ij As Integer
    Dim ik As Integer
    Dim iColumn1 As Integer
    Dim iColumn2 As Integer
    Dim iStartRow As Integer
    Dim iPartNumberRow As Integer

    Dim lCurrentRegionRowsCount As Long

    Dim sTemp As String
    Dim sStartColumnForParsing As String
    Dim sEndColumnForParsing As String
    Dim sOutputResult As String: sOutputResult = ""

    Dim tempArrayList As Object
    Dim tempArrayListA As Object
    Set tempArrayList = CreateObject("System.Collections.ArrayList")
    Set tempArrayListA = CreateObject("System.Collections.ArrayList")

    lCurrentRegionRowsCount = Cells.CurrentRegion.Rows.Count

    'based on the practical case to determine
    sStartColumnForParsing = "B"
    sEndColumnForParsing = "Q"
    iStartRow = 4
    iPartNumberRow = 2

    iColumn1 = Range(sStartColumnForParsing & 1).Column
    iColumn2 = Range(sEndColumnForParsing & 1).Column

    sOutputResult = "NUTOOL_PIN.g_cfg_unusedGPIO = {" & vbCrLf
    For ii = Range(sStartColumnForParsing & 1).Column To Range(sEndColumnForParsing & 1).Column
        tempArrayList.Clear
        For ij = iStartRow To lCurrentRegionRowsCount
            sTemp = Cells(ij, ii).Text
            If sTemp <> "" Then
                tempArrayList.Add (sTemp)
            End If
        Next ij

        'assemble the final output result
        sOutputResult = sOutputResult & vbTab & "'" & Cells(iPartNumberRow, ii).Text & "': {" & vbCrLf & vbTab & vbTab & "'ALL': ["
        For ik = 1 To tempArrayList.Count
            sTemp = tempArrayList(ik - 1)
            sOutputResult = sOutputResult & "'" & sTemp
            If ik = tempArrayList.Count Then
                sOutputResult = sOutputResult & "'"
            Else
                sOutputResult = sOutputResult & "', "
            End If
        Next ik

        If ii = Range(sEndColumnForParsing & 1).Column Then
            sOutputResult = sOutputResult & "]" & vbCrLf & vbTab & "}"
        Else
            sOutputResult = sOutputResult & "]" & vbCrLf & vbTab & "}," & vbCrLf
        End If
    Next ii
    sOutputResult = sOutputResult & vbCrLf & "};"

    unusedGPIOParsing = sOutputResult

    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function
