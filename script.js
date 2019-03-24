

function reloj() {
	time = new Date();
	horas = time.getHours();
	minutos = time.getMinutes();
	segundos = time.getSeconds();
    
    if (horas >= 12) {
     	porcentajeHoras = horas / 12 * 360;
    }  else {
    	porcentajeHoras = horas / 24 * 360;
    }

    porcentajeHoras += minutos / 60 * 30;
    porcentajeMinutos = minutos / 60 * 360;
    porcentajeSegundos = segundos / 60 * 360;

    document.getElementById("horas").style.transform = "rotate("+ porcentajeHoras +"deg)";
    document.getElementById("minutos").style.transform = "rotate("+ porcentajeMinutos +"deg)";
    document.getElementById("segundos").style.transform = "rotate("+ porcentajeSegundos +"deg)";
    document.getElementById("p-content").innerHTML = horas + ":" + minutos + ":" + segundos; 
}


setInterval(reloj, 1000);