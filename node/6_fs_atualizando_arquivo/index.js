const fs = require('fs')
const http = require('http')
const PORT = 4000

const server = http.createServer((req,res)=>{
    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    if(!name){
        fs.readFile('index.html', (err, data)=>{
            res.writeHead(200, {'Content-Type':'text/html'})
            res.write(data)
            return res.end()
        })
    }else{ 
        // concatenar elementos
        const nameNewLine = name+',\r\n'
        fs.appendFile('arquivo.txt', nameNewLine, function(err,data){
            res.writeHead(302, {
                Location: '/'
            })
        })
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT} 🥶`)
})