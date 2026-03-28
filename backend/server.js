const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/data", (req, res) =>
{
    res.json({ message: "Hello from Backend"});
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log("Server running on port 5000")
});