const express = require("express");
const app = express();

app.use(express.json());

const messageRoutes = require("./Routes/messages.routes");
app.use("/api", messageRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});