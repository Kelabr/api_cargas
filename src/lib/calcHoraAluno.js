

function calc(categoria, suplementar = 0){

    let result = 0

    //FUND 2
    if(categoria == "fund2"){
        const horaBaseAluno = 12

        const htpc = 2
        const hti = 1
        const ha = 5

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar == 5){
        const horaBaseAluno = 12 + suplementar 

        const htpc = 2
        const hti = 2
        const ha = 5

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar >= 6 && suplementar < 9){
        const horaBaseAluno = 12 + suplementar

        const htpc = 2
        const hti = 2
        const ha = 6

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar >= 9 && suplementar < 11){
        const horaBaseAluno = 12 + suplementar

        const htpc = 2
        const hti = 3
        const ha = 6

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar >= 11 && suplementar < 13){
        const horaBaseAluno = 12 + suplementar

        const htpc = 2
        const hti = 4
        const ha = 6

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar >= 13 && suplementar < 14){
        const horaBaseAluno = 12 + suplementar

        const htpc = 2
        const hti = 4
        const ha = 7

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar == 14){
        const horaBaseAluno = 12 + suplementar

        const htpc = 2
        const hti = 4
        const ha = 8

         result = horaBaseAluno + htpc + hti + ha
    }


    //FUND 1 - INF 2 - EDUCAÇÃO ESPECIAL
    if(categoria == "fund1" || categoria == "inf2" || categoria == "profapoio"){
        const horaBaseAluno = 24

        const htpc = 2
        const hti = 4
        const ha = 6

        result = horaBaseAluno + htpc + hti + ha
    }

    if((categoria == "fund1" || categoria == "inf2" || categoria == "profapoio") && suplementar == 1){
        const horaBaseAluno = 24 + suplementar

        const htpc = 2
        const hti = 4
        const ha = 7

         result = horaBaseAluno + htpc + hti + ha
    }

    //INF 1 RITS
    if(categoria == "inf1" || categoria == "rit"){
        const horaBaseAluno = 26

        const htpc = 2
        const hti = 4
        const ha = 8

         result = horaBaseAluno + htpc + hti + ha
    }

    return result

}
export{calc}

