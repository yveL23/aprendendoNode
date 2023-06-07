module.exports = {
    mult(a,b){
        console.log(`${a*b}`)
    },
    div(a,b){
    if(a <= 0 || b <= 0){
    console.log('ERRO')
    }else{
        console.log(`${a/b}`)
    } 
    }
}