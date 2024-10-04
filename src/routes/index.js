import express from "express";


const router = express.Router();

const message = "hello world"

router.get('/api/hello', (req, res)=>{
    res.send(message)
} )

export {router}