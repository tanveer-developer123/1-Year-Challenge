import express from "express";

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send("Serve Home Page");
})

app.listen(PORT, () => {
    console.log(`Server is Runing on localhost:${PORT}`);

})