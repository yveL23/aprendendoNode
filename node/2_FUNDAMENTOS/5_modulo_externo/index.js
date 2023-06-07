const minimist = require('minimist')

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args['nome']
const idade = args['idade']
console.log(`o nome dele é ${nome} e ele tem ${idade} anos`)