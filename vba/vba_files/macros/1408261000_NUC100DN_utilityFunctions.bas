Attribute VB_Name = "utilityFunctions"
Option Explicit


Public Function onlyDigits(s As String) As String
    ' Variables needed (remember to use "option explicit").   '
    Dim retval As String    ' This is the return string.      '
    Dim i As Integer        ' Counter for character position. '

    ' Initialise return string to empty                       '
    retval = ""

    ' For every character in input string, copy digits to     '
    '   return string.                                        '
    For i = 1 To Len(s)
        If Mid(s, i, 1) >= "0" And Mid(s, i, 1) <= "9" Then
            retval = retval + Mid(s, i, 1)
        End If
    Next

    ' Then return the return string.                          '
    onlyDigits = retval
End Function

Public Function firstSetDigits(s As String) As String
    ' Variables needed (remember to use "option explicit").   '
    Dim retval As String    ' This is the return string.      '
    Dim i As Integer        ' Counter for character position. '
    Dim precedingDigitPosition
    
    ' Initialise return string to empty                       '
    retval = ""
    
    precedingDigitPosition = 0

    ' For every character in input string, copy digits to     '
    '   return string.                                        '
    For i = 1 To Len(s)
        If Mid(s, i, 1) >= "0" And Mid(s, i, 1) <= "9" Then
            If Len(retval) = 0 Or i = precedingDigitPosition + 1 Then
                retval = retval + Mid(s, i, 1)
                precedingDigitPosition = i
            End If
        End If
    Next

    ' Then return the return string.                          '
    firstSetDigits = retval
End Function

Public Function LeftToByRef(ByRef sOrigin As String, ByRef sTarget As String) As String
    If InStr(sOrigin, sTarget) > 0 Then
        sOrigin = Left(sOrigin, InStr(sOrigin, sTarget) - 1)
    End If
    
    LeftToByRef = sOrigin
End Function

Public Function LeftRevToByRef(ByRef sOrigin As String, ByRef sTarget As String) As String
    If InStrRev(sOrigin, sTarget) > 0 Then
        sOrigin = Left(sOrigin, InStrRev(sOrigin, sTarget) - 1)
    End If
    
    LeftRevToByRef = sOrigin
End Function

Public Function RightToByVal(ByVal sOrigin As String, ByRef sTarget As String) As String
    If InStr(sOrigin, sTarget) > 0 Then
        sOrigin = Right(sOrigin, Len(sOrigin) - InStr(sOrigin, sTarget) - Len(sTarget) + 1)
    End If
    
    RightToByVal = sOrigin
End Function
        
Public Function RightRevToByVal(ByVal sOrigin As String, ByRef sTarget As String) As String
    If InStrRev(sOrigin, sTarget) > 0 Then
        sOrigin = Right(sOrigin, Len(sOrigin) - InStrRev(sOrigin, sTarget) - Len(sTarget) + 1)
    End If
    
    RightRevToByVal = sOrigin
End Function
        
Public Function printToTxtFile(sInput As String)
    Dim iFileHandle As Integer
    
    Dim sPath As String: sPath = ""
        
    'indicate where to write data
    sPath = Application.GetSaveAsFilename(FileFilter:="Text Files (*.txt), *.txt")
    If sPath = "" Then Exit Function
    
    iFileHandle = FreeFile
    
    Open sPath For Output Access Write As #iFileHandle
    
    Print #iFileHandle, sInput
    'do not forget to return the finished resource
    Close #iFileHandle
End Function

Public Function HexToLong(ByVal sHex As String) As Long
        HexToLong = Val("&H" & sHex & "&")
End Function

Public Function SortArrayListByNumericByRef(ByRef receivedArrayList As Object, ByVal bWLCSP As Boolean, ByVal iChipVertialPinNumber As Integer) As Object
    Dim ii As Integer
    Dim ij As Integer
    Dim iTotalNumber As Integer
      
    Dim resultArrayList As Object
    Set resultArrayList = CreateObject("System.Collections.ArrayList")
    
    iTotalNumber = receivedArrayList.Count
    
    For ii = iTotalNumber To 1 Step -1
        For ij = 0 To receivedArrayList.Count - 1
            If InStr(receivedArrayList(ij), UpdatePinName(ii, bWLCSP, iChipVertialPinNumber) & ":") > 0 Then
                resultArrayList.Add receivedArrayList(ij)
                receivedArrayList.RemoveAt (ij)
                Exit For
            End If
        Next ij
    Next ii
   
    resultArrayList.Reverse
    
    receivedArrayList.Clear
    For ii = 0 To resultArrayList.Count - 1
        receivedArrayList.Add resultArrayList(ii)
    Next ii
End Function

Function UpdatePinName(ByVal iPin As Integer, bWLCSP As Boolean, iChipVertialPinNumber As Integer) As String
    Dim sReturn As String: sReturn = CStr(iPin)
    Dim horizontalIndexArray As Variant: horizontalIndexArray = Array("A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "T", "U", "V", "W", "Y")
    
    If bWLCSP Then
        iPin = iPin - 1
        sReturn = horizontalIndexArray(Int(iPin / iChipVertialPinNumber)) + CStr(1 + (iPin Mod iChipVertialPinNumber))
    End If
    
    UpdatePinName = sReturn
End Function
