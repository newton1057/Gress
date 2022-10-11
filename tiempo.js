
function tiempo(){
    var fechaInicio = new Date('2022-08-07').getTime();
    var fechaFin    = new Date().getTime();
    
    var diff = fechaFin - fechaInicio;
    
    var dias = parseInt(diff/(1000*60*60*24))
    
    var Section = document.getElementById('tiempo');
    var contador = 0;
    var timer = 50;


    function contar(){
    if(contador != dias){
        if(contador == (dias * 0.5)){
            alert(timer)
            timer = timer * 8; 
        }
        contador++;
        Section.innerHTML = contador + " dias" ;
        }
    }


    setInterval( contar, timer);
}

