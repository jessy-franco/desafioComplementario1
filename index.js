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
