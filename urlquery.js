/**
 * URL Query String
 * 
 * Pasangan antara key value yang ada di URL
 * 
 * contoh : url google.com
 * 
 * awal : https://rumaysho.com/
 * ketika searching = https://rumaysho.com/27212-hukum-fotografi-dalam-islam.html
 * 
 * tanda tanya (?) adalah pemisah antara url dengan query 
 * 
 * dalam kasus ini 
 * q = key
 * rumaysho = value.
 * 
 * fungsi disini adalah untuk memilih data ke server dengan method GET
 */

const http = require("http")
const querystring = require("querystring")
const url = require('url');

const server = http.createServer((req, res) => {
    let urlRequest, //berisi path url di reqest 
        urlobj, //Berisi url yang sudah diperiksa 
        urlQuery, // berisi object dari query
        dataResponse // object query

        res.setHeader("Content-Type", "application/json")

        urlRequest = req.url
        //ubah string urlRequestnya jadi bentuk object URL

        urlobj = url.parse(urlRequest)
        console.log(urlobj)

        urlQuery = urlobj.query

        if(!urlQuery){
            dataResponse = {
                data : "query string not found"
            }
            return res.end(JSON.stringify(dataResponse))
        }
        dataResponse = querystring.parse(urlQuery)
        return res.end(JSON.stringify(dataResponse))

})

server.listen(2105)