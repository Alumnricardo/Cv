

/*

document.addEventListener("click", function(){
    console.log("msj 001 bit");
  });
*/
  document.getElementById("boton").addEventListener("click", function(){
    console.log("msj 001 bit");
    alert("Seleccionó modo Obscuro");
    document.getElementById("barra").className = "navbar navbar-expand-lg navbar-dark bg-dark";
    document.getElementById("boton").innerHTML = "\uF5A2";
    document.getElementById("boton").className = "btn btn-dark";

    const collection = document.getElementsByClassName("ventana2");
for (let i = 0; i < collection.length; i++) {
  collection[i].className = "ventana3";
  collection[i++].className = "ventana3";
}

    
  });