import express from "express";
import { getUsuario } from './controller/usuario'
import { json } from "node:stream/consumers";
const app = express()
app.use(express.json())
app.get("/usuario",getUsuario)
app.listen(4000,()=>console.log("rodando na porta 4000"))