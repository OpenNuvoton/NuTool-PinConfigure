Attribute VB_Name = "assembleGPIOsParsing"
Option Explicit

Sub packageGPIOParsing()
    Dim sResult As String
    sResult = ParsePartNumber
    printToTxtFile (sResult)
End Sub

Function ParsePartNumber() As String
    Dim ii As Integer
    Dim ij As Integer
    Dim ik As Integer
    Dim iz As Integer
    Dim iChipTotalPinNumber As Integer
    Dim iColumn As Integer
    Dim iColumn1 As Integer
    Dim iColumn2 As Integer
    Dim iTemp As Integer
        
    Dim lCurrentRegionRowsCount As Long
    Dim lLastRow As Long
    
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
    With ActiveSheet.UsedRange
        lLastRow = .Rows(.Rows.Count).Row
    End With
    
    'based on the practical case to determine
    sStartColumnForParsing = "A"
    sEndColumnForParsing = "B"
    'sGPIONameColumn = "L"
    
    'iColumn = Range(sGPIONameColumn & 1).Column
    iColumn1 = Range(sStartColumnForParsing & 1).Column
    iColumn2 = Range(sEndColumnForParsing & 1).Column
    
    tempArrayList.Clear
    For ii = 1 To lLastRow
        sTemp = Cells(ii, iColumn1).Text
        If IsNumeric(sTemp) Then
            For ij = ii To (ii + Cells(ii, iColumn1).MergeArea.Rows.Count - 1)
                sTemp = sTemp & "$" & Cells(ij, iColumn2).Text
            Next ij
            
            tempArrayList.Add (sTemp)
        End If
        
    Next ii
    'assemble the output string
    For ii = 1 To tempArrayList.Count
        sTemp = tempArrayList(ii - 1)
        sTemp1 = Right(sTemp, Len(sTemp) - InStr(sTemp, "$"))
        sTemp = Left(sTemp, InStr(sTemp, "$") - 1)
        
        sOutputResult = sOutputResult & sTemp & vbTab
        Do
            If InStr(sTemp1, "$") > 0 Then
                sTemp2 = Left(sTemp1, InStr(sTemp1, "$") - 1) & "/"
                sTemp1 = Right(sTemp1, Len(sTemp1) - InStr(sTemp1, "$"))
            Else
                sTemp2 = sTemp1
                sTemp1 = ""
            End If
            
            sOutputResult = sOutputResult & sTemp2
        Loop While sTemp1 <> ""
        
        sOutputResult = sOutputResult & vbCrLf
    Next ii
        
    ParsePartNumber = sOutputResult
    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function
