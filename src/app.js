import express from "express"
import helmet from "helmet";
import { rateLimit } from 'express-rate-limit'
import { router } from "./routes/index.js"
import bodyParser from "body-parser"

const app = express()
app.use(bodyParser.json())
app.use(router)
app.use(helmet());
const limiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
  });


app.use(limiter);
app.listen(3001, () => {
    console.log("Application connecté au port 3001");
});