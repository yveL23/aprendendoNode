const http = require('http')
const fs = require('fs')

const PORT = 3000

// passo a passo para ler um arquivo html
const server = http.createServer((req, res)=>{
    fs.readFile('mensagem.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })
})

server.listen(PORT, ()=>{
    console.log('Server On 🫥')
})