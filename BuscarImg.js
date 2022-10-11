function BuscarImagenes(){
    alert("Te amo ❤")
    var Iterador = getRandomInt(13);
   
    var img = document.getElementById("ImgAleatoria");
    
    const src = "./img/" + + Iterador + "-min.jpg";
    img.setAttribute("src", src); 

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }
} 