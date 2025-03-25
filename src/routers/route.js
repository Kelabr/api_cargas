import {} from "jose"

import { calc } from "../lib/calcHoraAluno.js"
import { calcExcedente } from "../lib/calcExcedente.js"
import { manipulationMongoDb } from "../db/mongodb.js"

export default async function router(app, options){
    
    app.get("/hello", async (req, res)=>{
        res.send({message:"hello world"})
    })

    app.post("/register", async(req, res) => {
        const {nome, matricula, categoria, suplementar, ampliacao, excedente, cuidar} = req.body

        const horasAlunoMes = calc(categoria, suplementar, ampliacao)

        const comExcedente = calcExcedente(excedente, horasAlunoMes)

        const result = comExcedente + cuidar

        const instance = manipulationMongoDb("carga", "servidores")

        await instance.insertOne({nome, matricula, categoria, suplementar, ampliacao, excedente, cuidar, totalSemanal:result, totalMensal:result * 5})
        

            return res.send({totalSemanal:result, totalMensal:result * 5})
        })

}