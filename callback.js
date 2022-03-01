function funcion_principal(callback){
    setTimeout(function(){
        console.log("soy la funcion principal")
        callback()
    },2000)
}
funcion_principal(function(){
    console.log("soy la segunda funcion")
})