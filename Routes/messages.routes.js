const express = require("express");
const router = express.Router();

router.get("/message", (req, res) => {
    res.json({
        message: "Hello from backend"
    });
});

router.post("/message", (req, res) => {
    const userMessage = req.body.message;
    
    res.json({
        status: "received",
        message: userMessage
    });
});

module.exports = router;