

function calc(categoria, suplementar = 0, ampliacao = 0){

    let result = 0

    //FUND 2
    if(categoria == "fund2"){
        const horaBaseAluno = 12

        const htpc = 2
        const hti = 1
        const ha = 5

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar + ampliacao  == 5){
        const horaBaseAluno = 12 + suplementar + ampliacao

        const htpc = 2
        const hti = 2
        const ha = 5

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar + ampliacao >= 6 && suplementar + ampliacao < 9){
        const horaBaseAluno = 12 + suplementar + ampliacao

        const htpc = 2
        const hti = 2
        const ha = 6

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar + ampliacao >= 9 && suplementar + ampliacao < 11){
        const horaBaseAluno = 12 + suplementar + ampliacao

        const htpc = 2
        const hti = 3
        const ha = 6

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar + ampliacao >= 11 && suplementar + ampliacao < 13){
        const horaBaseAluno = 12 + suplementar + ampliacao

        const htpc = 2
        const hti = 4
        const ha = 6

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar + ampliacao >= 13 && suplementar + ampliacao < 14){
        const horaBaseAluno = 12 + suplementar + ampliacao

        const htpc = 2
        const hti = 4
        const ha = 7

         result = horaBaseAluno + htpc + hti + ha
    }

    if(categoria == "fund2" && suplementar + ampliacao == 14){
        const horaBaseAluno = 12 + suplementar + ampliacao

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

    if((categoria == "fund1" || categoria == "inf2" || categoria == "profapoio") && suplementar + ampliacao == 1){
        const horaBaseAluno = 24 + suplementar + ampliacao

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

