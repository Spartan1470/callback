/*
function sumar(numero1,numero2,numero3) {
    return numero1+numero2+numero3
}
console.log(sumar(1,4,7));
*/
function iniciar() {
    console.log("estoy iniciando el programa");
}
function procesar() {
    console.log("estamos procesando el programa");
}
function finalizar() {
    console.log("estamos finalizando el programa");
}
setTimeout(function(){
    console.log("estamos procesandos el programa");

},3000)

iniciar()
procesar()
finalizar()