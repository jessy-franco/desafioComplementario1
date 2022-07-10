const edad=parseInt(prompt("Ingrese su edad:"));

while(edad>=0){
    if(edad>=18 && edad<85){
        alert("Sos mayor, página habilitada");
    }
    else if(edad>85){
        alert("sos matusalem")
    }
    else{
        alert("Sos menor, Página restringida");
    }
    break
}
/*let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "ANA":
            alert("HOLA ANA");
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
       default:
           alert("¿QUIÉN SOS?")
           break;
   }
   entrada = prompt("Ingresar un nombre");
}*/


