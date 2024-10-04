import express from "express";
import helmet from "helmet";
import cors from "cors";
import { rateLimit } from 'express-rate-limit';
import { router } from "./routes/index.js";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.json());

app.use(cors())
app.use(helmet());


const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, 
    max: 5, 
    message: "Veuillez réessayer dans une minute."
});


const corsOptions = {
    origin: 'https://example.com', 
    optionsSuccessStatus: 200 
  };
  
  app.use(cors(corsOptions));
  


app.use(limiter);


app.use(router);


app.listen(3001, () => {
    console.log("Application connectée au port 3001");
});

export { limiter };
