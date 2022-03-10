const http = require("http")
const server = http.createServer((req, res) => {

    let url, 
    dataResponse

    res.setHeader("Content-Type", "application/json")
    url = req.url

    //Routing
    if(url === "/"){
        dataResponse = {
            data: "Ini adalah halaman homepage"
        }
    }else if(url === "/about"){
        dataResponse = {
            data: "Ini adalah halaman About"
        }
    } else {
        dataResponse = {
            data: "404, Halaman tidak ditemukan"
        }

    }
    

    return res.end(JSON.stringify(dataResponse))
})

server.listen(3004)