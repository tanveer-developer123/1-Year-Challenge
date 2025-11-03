import express from "express";

const app = express();
const port = 4000;


app.get('/', (req,res)=>{
    res.send("CRUD Chck is a Home page and i make 4 routers 1. GET , 2. Update, 3. Del 4. POST");
});

app.listen(port, ()=>{
    console.log(`Server is running on localhost:${port}`)
})