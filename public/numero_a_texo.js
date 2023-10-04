function numeros_a_palabras(valor){
    let numero = valor;
    let tres_cifras= new Array(3);
    let convertir_3cifras;
    let valor_temporal;
    let extrae_3cifras;
    let extrae_3cifras_longitud;
    let xTTN;
    let jNTT;
    let Col;
    let Row;
    let P;
    let J2;
    let J3;
    let J4;
    let Die;
    let Die2;
    let Resultx;

    let longitud_numero = numero.toString().length; // Detecta el largo del numero
    let divicion_cifras = longitud_numero / 3; // Cuantos grupos de 3 cifras hay
    let grupo_cifra_3 = Math.round(divicion_cifras); // Redondea
    let numero_cifras = grupo_cifra_3;  
    cnl(numero_cifras);
    valor_temporal = divicion_cifras - grupo_cifra_3;

    if (valor_temporal) {
        numero_cifras = grupo_cifra_3++
    }
    
    if (numero_cifras){
        extrae_3cifras = parseInt(numero.toString().substring(longitud_numero-3,longitud_numero));
        extrae_3cifras_longitud = extrae_3cifras.toString().length;

        const numeroTexto = {
            valoro: ["UN", "DOS", "TRES", "CUATRO", "CINCO", "SEIS", "SIETE", "OCHO", "NUEVE"],
            valorg: ["QUINIEN","SETE","OCHO","NOVE"],
            valorf: ["DIEZ", "ONCE", "DOCE", "TRECE", "CATORCE", "QUINCE"],
            valort: ["DIECI","VEINTI","TREINTA","CUARENTA","CINCUENTA","SESENTA","SETENTA","OCHENTA","NOVENTA"],
            valorp: ["CIEN","MIL","MILLON"]
        }

        for (var j = numero_cifras - 1; j == 0; j--  ) {
            convertir_3cifras = j * 3;
            tres_cifras[0] = 0;
            tres_cifras[1] = 0;
            tres_cifras[2] = 0;

            for (var k = convertir_3cifras; k = 1; k--){
                
            }
        }

    }
    
    

    /*
        //
        ValorO(0) = "CERO"
        ValorO(1) = "UN"
        ValorO(2) = "DOS"
        ValorO(3) = "TRES"
        ValorO(4) = "CUATRO"
        ValorO(5) = "CINCO"
        ValorO(6) = "SEIS"
        ValorO(7) = "SIETE"
        ValorO(8) = "OCHO"
        ValorO(9) = "NUEVE"

        ValorG(5) = "QUINIEN"
        ValorG(7) = "SETE"
        ValorG(8) = "OCHO"
        ValorG(9) = "NOVE"

        ValorF(0) = "DIEZ"
        ValorF(1) = "ONCE"
        ValorF(2) = "DOCE"
        ValorF(3) = "TRECE"
        ValorF(4) = "CATORCE"
        ValorF(5) = "QUINCE"

        ValorT(1) = "DIECI"
        ValorT(2) = "VEINTI"
        ValorT(3) = "TREINTA"
        ValorT(4) = "CUARENTA"
        ValorT(5) = "CINCUENTA"
        ValorT(6) = "SESENTA"
        ValorT(7) = "SETENTA"
        ValorT(8) = "OCHENTA"
        ValorT(9) = "NOVENTA"

        ValorP(1) = "CIEN"
        ValorP(2) = "MIL"
        ValorP(3) = "MILLON"


        For (var J; Numero_Cifras - 1 > 0 ; J--)
        {
            J2 = J * 3
            xLeNum = longitud_numero - J2
            TCif(0) = 0
            TCif(1) = 0
            TCif(2) = 0
            
            For K = xLeNum To 1 Step -1
                xNTT = Mid(Str(numero), xLeNum - K + 2, 1)
                xTTN = Int(xNTT)
                TCif(K - 1) = xTTN
                'I = MsgBox(TCif(K - 1))
            Next
                
            For P = xLeNum - 1 To 0 Step -1
                Select Case P
                    Case 2
                        If TCif(2) = 1 Then
                            If TCif(1) = 0 And TCif(0) = 0 Then
                                Resultx = Resultx & Esp(Resultx) & ValorP(1)
                            Else
                                Resultx = Resultx & Esp(Resultx) & ValorP(1) & "TO"
                            End If
                        ElseIf TCif(2) > 1 Then
                            If TCif(2) = 5 Then
                                Resultx = Resultx & Esp(Resultx) & ValorG(5) & "TOS"
                            ElseIf TCif(2) = 7 Then
                                Resultx = Resultx & Esp(Resultx) & ValorG(7) & ValorP(1) & "TOS"
                            ElseIf TCif(2) = 9 Then
                                Resultx = Resultx & Esp(Resultx) & ValorG(9) & ValorP(1) & "TOS"
                            Else
                                Resultx = Resultx & Esp(Resultx) & ValorO(TCif(2)) & ValorP(1) & "TOS"
                            End If
                        End If
                    Case 1
                        If TCif(1) = 1 Then
                            If TCif(0) > 5 Then
                                Resultx = Resultx & Esp(Resultx) & ValorT(1) '& ValorO(TCif(0))
                                Die2 = 1
                            Else
                                Resultx = Resultx & Esp(Resultx) & ValorF(TCif(0))
                                Die = 1
                            End If
                        ElseIf TCif(1) = 2 Then
                            If TCif(0) > 0 Then
                                Resultx = Resultx & Esp(Resultx) & ValorT(TCif(1))
                                Die2 = 1
                            Else
                                Resultx = Resultx & " VEINTE"
                            End If
                        ElseIf TCif(1) > 2 Then
                            If TCif(0) > 0 Then
                                Resultx = Resultx & Esp(Resultx) & ValorT(TCif(1)) & " Y"
                            Else
                                Resultx = Resultx & Esp(Resultx) & ValorT(TCif(1))
                            End If
                        End If
                    Case 0
                        If TCif(0) > 0 Then
                            If Die = 0 Then
                                If Die2 = 1 Then
                                    Resultx = Resultx & ValorO(TCif(0))
                                    Die2 = 0
                                Else
                                    Resultx = Resultx & Esp(Resultx) & ValorO(TCif(0))
                                End If
                                Die = 0
                            Else
                                Die = 0
                            End If
                        End If
                End Select
            Next
            Select Case J
                Case 2
                    If TCif(2) = 0 And TCif(1) = 0 And TCif(0) = 1 Then
                        Resultx = Resultx & Esp(Resultx) & ValorP(3)
                    Else
                        Resultx = Resultx & Esp(Resultx) & ValorP(3) & "ES"
                    End If
                Case 1
                    If TCif(2) > 0 Or TCif(1) > 0 Or TCif(0) > 0 Then
                        Resultx = Resultx & Esp(Resultx) & ValorP(2)
                    End If
            End Select
            jNTT = Right(Str(numero), J * 3)
            If jNTT = "" Then
                numero = 0
            Else
                numero = Int(jNTT)
            End If
            longitud_numero = Len(numero)
            If longitud_numero * (J - 1) < (J - 1) * 3 Then J = J - 1
            
            If longitud_numero = 0 Then End
            
        }
        
    Resultx = Resultx & " PESOS MCTE"
    
    Row = ActiveCell.Row
    Col = ActiveCell.Column + 1
    ActiveSheet.Cells(Row, Col).Formula = Resultx
    'ActiveCell.Select

    'I = MsgBox(Resultx)
*/
}