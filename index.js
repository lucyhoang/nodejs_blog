const express = require("express");
const app = express();
const port = 3001;

//app.get("/", (req, res) => res.send("hello world"));
app.get("/", (req, res) => {
    var a = 0;
    var b = 1;
    var c = a + b;
    res.send("hello world");
})

app.listen(port, () => console.log(`i am listening at http://localhost:${port}`))
