const http = require("http")

const server = http.createServer((req,res) =>{
    let url, // digunakan untuk path url di request
    method,// digunakan untuk menampng jenis method pada request atau nilai default
    dataResponse // data yang akan dikirim

    res.setHeader("Content-Type", "Application/json");

    url = req.url;
    method = req.method ?? 'get'

    //jika method tidak ada isi maka isi dengan method test
    if(url === "/") {
        method.dataResponse ={
            data: "ini adalah halaman homepage"
        };
    } else if(url === "/form") {
        // akses untuk method post
        if (method === "POST") {
            dataResponse = {
                data: "lu berhasil mengirim data"
            }
        } else {
            dataResponse = {
                data: "lu berhasil mengirim data, jika lu ganti methodnya ke post "
            }
        }
    }
    else {
        dataResponse = {
            data: "404, Halaman tidak ditemukan"
        }

    }

    return res.end(JSON.stringify(dataResponse));

})

server.listen(4004)