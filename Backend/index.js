import express from "express"
import connectDb from "./config/db.js"
import dotenv from "dotenv"
import Authroute from "./routes/AuthRoute.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import roadrouter from "./routes/Roadmaproutes.js"

dotenv.config()

const app =express()

const port =9000

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true
}))

connectDb()


app.get("/" , (req,res)=>{
    res.send("Hello this is me")
    console.log("This is something special")
})

app.use("/Authapi" ,Authroute)
app.use("/roadmapapi",roadrouter)





app.listen(port ,()=>{
    console.log(`The server is running on the : http://localhost:${port}`)
})

