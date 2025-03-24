function calcExcedente(excedente, horaBaseAluno, periodo = ""){

    let result = 0

    if(excedente < 11){
        result = horaBaseAluno + excedente
    }

    if(excedente >=12 && excedente < 18){
        const ha = 5

        result = horaBaseAluno + ha + excedente
    }

    if(excedente >=18 && excedente < 22){
        const ha = 6

        result = horaBaseAluno + ha +excedente
    }

    if(excedente >=22 && excedente < 24){
        const htpc = 2
        const hti = 4
        const ha = 4

        result = horaBaseAluno + ha + hti + htpc + excedente
    }

    if(excedente == 24){
        const htpc = 2
        const hti = 4
        const ha = 6

        result = horaBaseAluno + ha + hti + htpc + excedente
    }

    if(excedente == 25 && periodo == "int"){
        const htpc = 2
        const ha = 7

        result = horaBaseAluno + ha + htpc + excedente
    }

    if(excedente == 26 && periodo == "int"){
        const htpc = 2
        const hti = 4
        const ha = 8

        result = horaBaseAluno + ha + hti + htpc + exe
    }

    return result
}

export {calcExcedente}