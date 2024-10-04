import express from "express";

const router = express.Router();

const message = "Hello World";

router.get('/api/hello', (req, res) => {
    res.send(message);
});

export { router };
