function sumar(numero1,numero2,callback){
    setTimeout(function(){
        let suma=numero1+numero2
    callback(numero1,numero2,suma)
    },5000);
}
sumar(7,7,function(numero1,numero2,suma){
    console.log(`la suma es: ${suma}`)
    let resta= numero1-numero2
    console.log(`la resta es: ${resta}`);
})