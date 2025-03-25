import { MongoClient } from "mongodb";
import dotenv from "dotenv"

dotenv.config()

const uri = process.env.CONNECTION_DB
const client = new MongoClient(uri)

async function connectMongoDb(){
    try{
        await client.connect()
        console.log("Conexão estabelecida com o mongo db")
    }catch(error){
        console.error("Erro ao estebalecer conexão com o mongodb", error)
    }
}

function manipulationMongoDb(db, collection){
    const data = client.db(db)
    const collec = data.collection(collection)

    return collec
}




export{manipulationMongoDb, connectMongoDb}