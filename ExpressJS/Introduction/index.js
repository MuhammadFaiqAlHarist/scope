

require ("dotenv").config();
const express = require ("express")
const app = express();

// app.get("/", (req, res) =>{
//     res.send("Hallo saya belajar express");
// });

// app.listen(3000, function(){
//     console.log(`server berjalan di localhost ${port}`)
// })

app.get(`/`, (req, res) => {
    let status = process.env.PORT == 5000 ? "Production" : "Development"
    res.send(`Hello, lu sedang di halaman : ${status} page.`)
});

app.listen(process.env.PORT, function(){
    console.log(`Anda sedang berjalan di port : ${process.env.PORT}`)
});