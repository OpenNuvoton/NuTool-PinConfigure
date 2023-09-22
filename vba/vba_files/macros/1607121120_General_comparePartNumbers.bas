Attribute VB_Name = "comparePartNumbers"
Option Explicit
'The result will be like:


Sub GPIOMatrixParsing()
    Dim sResult As String
    sResult = comparePartNumbers
    printToTxtFile (sResult)
End Sub

Function comparePartNumbers() As String
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
    Dim bSearched As Boolean
            
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
    sStartColumnForParsing = "A"
    sEndColumnForParsing = "B"
    'sGPIONameColumn = "G"
    iStartRow = 1
    bReplaceALTwithMFP = False
        
    'iColumn = Range(sGPIONameColumn & 1).Column
    iColumn1 = Range(sStartColumnForParsing & 1).Column
    iColumn2 = Range(sEndColumnForParsing & 1).Column
    
    tempArrayList.Clear
    tempArrayListA.Clear
    For ii = iStartRow To 500
            sTemp = Cells(ii, iColumn1).Text
            bSearched = False
            
            For ij = iStartRow To 500
                If Cells(ij, iColumn2).Text = sTemp Then
                    bSearched = True
                End If
            Next ij
            
            If Not bSearched Then
                tempArrayList.Add (sTemp)
            End If
    Next ii
    
    For ii = iStartRow To 500
            sTemp = Cells(ii, iColumn2).Text
            bSearched = False
            
            For ij = iStartRow To 500
                If Cells(ij, iColumn1).Text = sTemp Then
                    bSearched = True
                End If
            Next ij
            
            If Not bSearched Then
                tempArrayListA.Add (sTemp)
            End If
    Next ii
        

    'tempArrayList.Sort
    'assemble the final output result
    sOutputResult = "In Column " & sStartColumnForParsing & ":" & vbCrLf
    For ii = 1 To tempArrayList.Count
            sTemp = tempArrayList(ii - 1)
            sOutputResult = sOutputResult & sTemp & vbCrLf
    Next ii

    sOutputResult = sOutputResult & "In Column " & sEndColumnForParsing & ":" & vbCrLf
    For ii = 1 To tempArrayListA.Count
            sTemp = tempArrayListA(ii - 1)
            sOutputResult = sOutputResult & sTemp & vbCrLf
    Next ii
    
    comparePartNumbers = sOutputResult
    
    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function


