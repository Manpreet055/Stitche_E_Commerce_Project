let http = require('http');

let server = http.createServer((request,response)=>{
    let obj = [
        {
            title:"Printer",
            price : "299"

        }
    ]
    response.end(JSON.stringify(obj))
})

server.listen(8000, ()=>console.log("Server is running...."))