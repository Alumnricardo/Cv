
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
    document.getElementById("botonmodo").className = "bi bi-sun";
    
    document.getElementById("barra").className = "navbar navbar-expand-lg navbar-dark bg-dark";
    document.getElementById("boton").className = "btn btn-dark";
    const collection = document.getElementsByClassName("ventana2");
    for (let i = 0; i < collection.length; i++) {
        collection[i].className = "ventana3";
    }
    
    
    
    
 } else {
    document.getElementById("botonmodo").className = "bi bi-moon";
    document.getElementById("barra").className = "navbar navbar-expand-lg navbar-dark bg-primary";
    document.getElementById("boton").className = "btn btn-primary";
    const collection2 = document.getElementsByClassName("ventana3");
    for (let i = 0; i < collection2.length; i++) {
        collection2[i].className = "ventana2";
    }
 }
    
  });


  

