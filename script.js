function suma(){
    var resultado = Number(document.getElementById("primerNro").value) + Number(document.getElementById("segundoNro").value);
    imprimirResultado(resultado);    
}
function resta(){
    var resultado = Number(document.getElementById("primerNro").value) - Number(document.getElementById("segundoNro").value);
    imprimirResultado(resultado);
}
function division(){
    if (Number(document.getElementById("segundoNro").value) === 0) {
        document.getElementById("resultado").innerHTML = "¡La operación no es válida!"    
    } else {
    var resultado = Number(document.getElementById("primerNro").value) / Number(document.getElementById("segundoNro").value);
    imprimirResultado(resultado);
}
}
function multiplicacion(){
    var resultado = Number(document.getElementById("primerNro").value) * Number(document.getElementById("segundoNro").value);
    imprimirResultado(resultado);
}
function imprimirResultado(resultado){
        var mensaje = `El resultado es ${resultado}`; 
        document.getElementById("resultado").innerHTML = mensaje;        
}