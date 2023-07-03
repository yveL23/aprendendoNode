const http = require("http")
// console.log(http)
const PORT = 3000

// só pra revisar
// const server = http.createServer((req, res)=>{
//     res.write('Olá, Mundo!')
//     res.end()
// })

// const server = http.createServer((req, res)=>{
//     if(req.url == '/home'){
//         res.writeHead(200, {'Content-Type':'text/plan'})
//         res.write('Página Home')
//         res.end()
//     } else if(req.url == '/sobre'){
//         res.writeHead(200, {'Content-Type':'text/plan'})
//         res.write('Página Sobre')
//         res.end()
//     }else{
//         res.writeHead(404, {'Content-Type':'text/plan'})
//         res.write('Página não encontrada')
//         res.end()
//     }
// })

// retornando html
const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'text/html; charset=UTF-8'})
        res.write('<h1>Página Home</h1>')
        res.write('<p>Esta é a página home!</p>')
        res.end()
    } else if(req.url === '/sobre'){
        res.writeHead(200, {'Contat-Type':'text/html; charset=UTF-8'})
        res.write('<h1>Página sobre</h1>')
        res.write('<p>Esta é a página sobre!</p>')
        res.end()
    }else if(req.url === '/contato'){
        res.writeHead(200, {'Content-Type':'text/html ; charset=UTF-8'})
        res.write('<h1>Página Contato</h1>')
        res.write('<p>Esta é a página de contato</p>')
        res.edn()
    }else{
        res.writeHead(404, {'Content-Type':'text/html ; charset=UTF-8'})
        res.write('<h1>PÁGINA NÃO ENCONTRADA</h1>')
        res.end()
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}⚒️`)
})