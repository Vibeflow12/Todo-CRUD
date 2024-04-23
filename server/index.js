require("dotenv").config();
const express = require("express");
const {connectToMongodb} = require("./db.js");
const app = express();

const router = require("./routes");
app.use(express.json());
app.use("/api", router);

const port = process.env.PORT || 5000;

async function startServer() {
    await connectToMongodb();
    app.listen(port, () => {
        console.log(`server is to  listennig on http://localhost:${port}`);
    });
}

startServer();

