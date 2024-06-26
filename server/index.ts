import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import router from "./routes/auth.routes"

dotenv.config()

const PORT = process.env.PORT

const app = express()

app.use(cors())

app.use(router)

app.listen(PORT, ()=>{
    console.log("Server is running in port", PORT)
})