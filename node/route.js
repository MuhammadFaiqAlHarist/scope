/**
 * Routing
 */

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
    }else if(url === "/login"){
        dataResponse = {
            data: "Ini adalah halaman login"
        }
    }else if(url === "/register"){
        dataResponse = {
            data: "Ini adalah halaman Register"
        }
    }else if(url === "/about"){
        dataResponse = {
            data: "Ini adalah halaman About"
        }
    }
    

    return res.end(JSON.stringify(dataResponse))
})

server.listen(3002)