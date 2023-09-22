Attribute VB_Name = "generatePackageGPIO"
Option Explicit

Sub generatePackageGPIO()
    generatePackageGPIOFunction
End Sub

Function generatePackageGPIOFunction() As String
    Dim ii As Integer
    Dim ij As Integer
    Dim ik As Integer
    Dim iz As Integer
    Dim iChipTotalPinNumber As Integer
    Dim iColumn As Integer
    Dim iColumn1 As Integer
    Dim iColumn2 As Integer
    Dim iColumnA As Integer
    Dim iTemp As Integer
    Dim iCurrentColumnForMFP As Integer
            
    Dim lCurrentRegionRowsCount As Long
    Dim lLastRow As Long
    
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sTemp2 As String
    Dim sStartColumnForParsing As String
    Dim sEndColumnForParsing As String
    Dim sGPIONameColumn As String
    Dim sStartColumnForMFP As String
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
    sEndColumnForParsing = "C"
    sGPIONameColumn = "D"
    sStartColumnForMFP = "E"
    
    iColumn = Range(sGPIONameColumn & 1).Column
    iColumn1 = Range(sStartColumnForParsing & 1).Column
    iColumn2 = Range(sEndColumnForParsing & 1).Column
    iColumnA = Range(sStartColumnForMFP & 1).Column
    
    tempArrayList.Clear
    For ii = 1 To lLastRow
        For ij = iColumn1 To iColumn2
            sTemp = Cells(ii, ij).Text
            If IsNumeric(sTemp) And Cells(ii, iColumn1).MergeArea.Rows.Count > 1 Then
                sTemp = Cells(ii + 1, iColumn).Text
            
                iCurrentColumnForMFP = iColumnA
                While Not IsEmpty(Cells(ii, iCurrentColumnForMFP))
                    iCurrentColumnForMFP = iCurrentColumnForMFP + 1
                Wend
                
                Cells(ii, iCurrentColumnForMFP).Value = sTemp
            
                Cells(ii + 1, 1).EntireRow.Delete
                'reset
                ii = 0
                With ActiveSheet.UsedRange
                     lLastRow = .Rows(.Rows.Count).Row
                End With
                
                Exit For
            End If
        Next ij
    Next ii

    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function
