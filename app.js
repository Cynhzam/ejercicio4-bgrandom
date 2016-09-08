window.addEventListener("load", function() {

  var boton = document.getElementById("calcular");
  boton.addEventListener("click", function(){

    var intervalo = parseFloat(document.getElementById("intervalo").value);
    setInterval(colorRandom,intervalo*1000);

    function colorRandom(){
      document.body.style.backgroundColor ='#'+Math.floor(Math.random()*16777215).toString(16);
    }

  });
});