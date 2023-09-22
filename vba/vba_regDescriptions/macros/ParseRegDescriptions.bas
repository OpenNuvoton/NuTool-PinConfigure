Attribute VB_Name = "ParseRegDescriptions"
Option Explicit
Option Base 1

Private Declare Function StrCmpLogicalW Lib "SHLWAPI.DLL" ( _
                                        ByVal lpStr1 As Long, _
                                        ByVal lpStr2 As Long) As Long
'The result will be like:

Sub packageGPIOParsing()
    Dim sResult As String
    sResult = ParseRegDescriptions
    printToTxtFile (sResult)
End Sub

Function ParseRegDescriptions() As String
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
    
    Dim sTemp As String
    Dim sTemp1 As String
    Dim sStartColumnForPackage As String
    Dim sEndColumnForPackage As String
    Dim sGPIONameColumn As String
    Dim sSYS_BASE As String
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
    sSYS_BASE = "0x500000"
    iStartRow = 1
    bParseFull = True
    
    iColumn = Range(sGPIONameColumn & 1).Column
    
    tempArrayList.Clear
    tempArrayListA.Clear
    sOutputResult = "NUTOOL_PIN.g_cfg_regDescriptions = [];" & vbCrLf
    
    For ii = iStartRow To lCurrentRegionRowsCount
        sTemp = Cells(ii, iColumn).Text
        sTemp1 = Cells(ii, iColumn + 1).Text
        sTemp1 = RightToByVal(sTemp1, "0x")
        
        sOutputResult = sOutputResult & "NUTOOL_PIN.g_cfg_regDescriptions." & sTemp & " = '" & sSYS_BASE & sTemp1 & "';" & vbCrLf
'        If sTemp <> "" And Not (Mid(sTemp, 1, 1) = "P" And Mid(sTemp, 3, 1) = ".") Then
'            sTemp = "'" & sTemp & ":" & Cells(ii, iColumn + 1).Text & "',"
'            tempArrayList.Add (sTemp)
'        End If
    Next ii
    
    'tempArrayList.Sort
'    For ii = 0 To tempArrayList.Count - 2
'        For ij = ii + 1 To tempArrayList.Count - 1
'            If StrCmpLogicalW(StrPtr(tempArrayList(ii)), StrPtr(tempArrayList(ij))) > 0 Then
'                sTemp = tempArrayList(ii)
'                tempArrayList(ii) = tempArrayList(ij)
'                tempArrayList(ij) = sTemp
'            End If
'        Next
'    Next
'
'    For ii = 1 To tempArrayList.Count
'        bFound = False
'
'        For ij = 1 To tempArrayListA.Count
'            If tempArrayList(ii - 1) = tempArrayListA(ij - 1) Then
'                bFound = True
'                Exit For
'            End If
'        Next ij
'
'        If Not bFound Then
'            bFound = False
'            sTemp = tempArrayList(ii - 1)
'            LeftToByRef sTemp, ":"
'
'            For ij = 1 To tempArrayListA.Count
'                sTemp1 = tempArrayListA(ij - 1)
'                LeftToByRef sTemp1, ":"
'
'                If sTemp = sTemp1 Then
'                    bFound = True
'                    Exit For
'                End If
'            Next ij
'
'            If bFound Then
'                sOutputResult = sOutputResult & tempArrayList(ii - 1) & " //<----Duplicate" & vbCrLf
'            Else
'                sOutputResult = sOutputResult & tempArrayList(ii - 1) & vbCrLf
'            End If
'
'
'            tempArrayListA.Add (tempArrayList(ii - 1))
'        End If
'    Next ii

    'sOutputResult = sOutputResult & sMultifunctionDefines & "] }" & vbCrLf
    'sOutputResult = sOutputResult & "];" & vbCrLf
    
    ParseRegDescriptions = sOutputResult
    
    'release memory
    tempArrayList.Clear
    tempArrayListA.Clear
    tempArrayList.TrimToSize
    tempArrayListA.TrimToSize
    Set tempArrayList = Nothing
    Set tempArrayListA = Nothing
End Function
