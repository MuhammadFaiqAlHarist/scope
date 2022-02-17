/**
 * Core module
 * 
 * membuat server menggunakan module http
 */

 const http = require("http")

 const server = http.createServer((req, res) => {
     // inisiasi variable yang akan digunakan
     let data;
 
     console.log(req)
 
     /**
      * object request itu banyak, tapi yang dipakai 
      * url, method, headers
      */
 
     // create object yang berisi url, method dan header
 
     data = {
         url : req.url,
         method : req.method,
         header : req.headers,
     }
 
     // ini akan mengubah sel response menjadi berupa data Json
     res.setHeader("Content-Type", "application/Json")
 
     res.end(JSON.stringify(data))
 });
 
 server.listen(5000)