
let obscuro = false;
 console.log(obscuro);
 
/*

document.addEventListener("click", function(){
    console.log("msj 001 bit");
  });

*/


/* //////////////////////  FUNCION QUE CAMBIA CLASES PARA CREAR EL MODO OBSCURO ///////////////////////////////   */ 
  document.getElementById("boton").addEventListener("click", function(){
  obscuro = !obscuro;
  console.log(obscuro);
  if (obscuro) {
document.body.style.backgroundColor = "#282828";


document.getElementById("v1").style.backgroundColor = "#282828";
document.getElementById("v2").style.backgroundColor = "#282828";
document.getElementById("v3").style.backgroundColor = "#282828";

document.getElementById("t1").style.color = "white";
document.getElementById("t2").style.color = "white";
document.getElementById("t3").style.color = "white";


document.getElementById("botonmodo").className = "bi bi-sun";
document.getElementById("barra").className = "navbar navbar-expand-lg navbar-dark bg-dark";
document.getElementById("boton").className = "btn btn-dark";
document.getElementById("botoninfo").className = "btn btn-dark";
const collection = document.getElementsByClassName("ventana2");

   
for (let i = 0; i < collection.length; i++) {
        collection[i].className = "ventana3";
    }
    
  
    document.getElementById("tablita").className="table table-striped table-dark";
    
    
    
    
 } else {
    document.getElementById("botonmodo").className = "bi bi-moon";
    
    document.body.style.backgroundColor = "white";

    document.getElementById("v1").style.backgroundColor = "white";
    document.getElementById("v2").style.backgroundColor = "white";
    document.getElementById("v3").style.backgroundColor = "white";

    document.getElementById("t1").style.color = "#236CC4";
    document.getElementById("t2").style.color = "#236CC4";
    document.getElementById("t3").style.color = "#236CC4";

    document.getElementById("barra").className = "navbar navbar-expand-lg navbar-dark bg-primary";
    document.getElementById("boton").className = "btn btn-primary";
    document.getElementById("botoninfo").className = "btn btn-primary";
    const collection2 = document.getElementsByClassName("ventana3");
       for (let i = 0; i < collection2.length; i++) {
        collection2[i].className = "ventana2";
         }
    
         document.getElementById("tablita").className="table table-striped table-light";


    
 }
    
  });


  

