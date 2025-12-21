const express = require("express");
const app = express();

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from backend" // Json object
    });
});

const port = 3000;
app.listen(3000, () => {
    console.log('Server started on port ${PORT} '); //changed port to use environment variable
});
