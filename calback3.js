function recibir_usuario(nombre,edad,pass,callback){
    setTimeout(function(){
        let usuario={
            nombre:nombre,
            edad:edad,
            password:pass
        }
        callback(usuario)
    },3000)
}

recibir_usuario("adam",17,"1470",function(usuario){
        if (usuario.edad>=18) {
            console.log("bienvenidos "+usuario.nombre);
        }
        else{
            console.log("no eres bienvenido "+usuario.nombre);
        }
})