const express = require("express");
const app = express();

const path = require("path");

const public_path = path.resolve(__dirname, "./public");
app.use(express.static(public_path));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Server OK");
});



app.get("/", (req, res) => {
    const index_path = path.resolve(__dirname, "./views/index.html");
    res.sendFile(index_path);
});
app.get("/imagen", (req, res) => {
    const imagen_path = path.resolve(__dirname, "./public/images/logo-mercado-liebre.svg");
    res.sendFile(imagen_path);
})