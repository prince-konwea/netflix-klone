const express = require("express");
const path = require("path");


const initial_path = path.join(_dirname, "public");

const app = express();

app.use(express.static(initial_path));

app.get("/", (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.listen(3000, () => {
    console.log("server running on port 3000")
})