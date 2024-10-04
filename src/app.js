import express from "express"
import { router } from "./routes/index.js"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use(router)


app.listen(3001, () => {
    console.log("Application connecté au port 3001");
});