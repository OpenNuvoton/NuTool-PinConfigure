Attribute VB_Name = "unussedGPIOParsing"
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
    Dim iStartRow As Integer
    Dim iTotalPinNubmer As Integer
        
    Dim lCurrentRegionRowsCount As Long
    Dim lLastRow As Long
    
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sTemp2 As String
    Dim sPerfectColumnForParsing As String
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
    sPerfectColumnForParsing = "A"
    sStartColumnForParsing = "B"
    sEndColumnForParsing = "C"
    'sGPIONameColumn = "L"
    
    iColumn = Range(sPerfectColumnForParsing & 1).Column
    iColumn1 = Range(sStartColumnForParsing & 1).Column
    iColumn2 = Range(sEndColumnForParsing & 1).Column
    iStartRow = 1
    
    sOutputResult = "NUTOOL_PIN.g_cfg_unusedGPIO = {" & vbCrLf
    For ii = iColumn1 To iColumn2
        sTemp = Cells(iStartRow, ii).Text
        sOutputResult = sOutputResult & vbTab & """" & sTemp & """: {" & vbCrLf
        iTotalPinNubmer = CInt(onlyDigits(sTemp))
        For ij = iStartRow + 1 To lLastRow
            sTemp = Cells(ij, ii).Text
            If IsNumeric(sTemp) And _
                Cells(ij, iColumn).MergeArea.Rows.Count > Cells(ij, ii).MergeArea.Rows.Count Then
                 
                sOutputResult = sOutputResult & vbTab & vbTab & """" & Cells(ij, iColumn2 + 1).Text & """: ["
                For ik = ij + Cells(ij, ii).MergeArea.Rows.Count To ij + Cells(ij, iColumn).MergeArea.Rows.Count - 1
                    sOutputResult = sOutputResult & """" & Cells(ik, iColumn2 + 1).Text & """"
                    If ik <> ij + Cells(ij, iColumn).MergeArea.Rows.Count - 1 Then
                        sOutputResult = sOutputResult & ", "
                    End If
                Next ik
                sOutputResult = sOutputResult & "]," & vbCrLf
            End If
            
        Next ij
        sOutputResult = sOutputResult & vbTab & "}," & vbCrLf
    Next ii

    sOutputResult = sOutputResult & "};"
    
    ParsePartNumber = sOutputResult
    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function

