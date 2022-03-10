/**
 * 
 * Request Body
 * 
 * kita akan menampilkan cara untuk membaca request body pada server
 * 
 * terdapat 2 untuk transaksi data antara klien dan server :
 * upload : mengirim data dari klien ke server 
 * download : menerima data dari server ke klien 
 */

const {
    on
} = require("events")
const http = require("http")
const querystring = require("querystring")
const { buffer } = require("stream/consumers")
const server = http.createServer((req, res) => {
    let urlReq,
        methodReq,
        dataReq

    const chunkArr = []
    const dataResponse = {}

    res.setHeader("content-Type", "application/json")

    urlReq = req.url
    methodReq = req.method ?? "get"

    if (urlReq.toLowerCase() === "/login") {
        if (methodReq.toLowerCase() === "/post") {
            dataResponse.data = "Ini adalah halaman login"
        } else if (methodReq.toLowerCase() === "post") {
            // buffering data body
            req.on("data", (chunk) => {
                chunkArr.push(chunk) // maka akan menambahkan data chunk ke chunkArr
            })
        } else {
            dataResponse.data = "Ubah method ke get atau post"
        }
    } else {
        dataResponse.data = "Gunakan endpoint /login"
    }

    req.on("end", () => {
        if(chunkArr.length !== 0 ) {
            dataReq = Buffer.concat(chunkArr).toString();
            console.log(dataReq)

            let requestObj = querystring.parse(dataReq);
            dataResponse.data = requestObj
        }

        return res.end(JSON.stringify(dataResponse));
    })
})

server.listen(5002)