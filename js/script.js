class MedioTransporte {
    constructor(medio, tipo) {
        this.medio = medio;
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
}
//const terrestre = new MedioTransporte('Terrestre', 'Carrp');
//const aereo = new MedioTransporte('Aereo');
//const maritimo = new MedioTransporte('Maritimo');
//console.log(terrestre);
class Vehiculo extends MedioTransporte {
    //
    constructor(medio, tipo, anio, motor, cantP, color, formato, plazo) {
        super(medio, tipo);
        this.anio = anio;
        this.motor = motor;
        this.cantP = cantP;
        this.color = color;
        this.color = color;
        this.formato = formato;
        this.plazo = plazo;
    }
}
function rentar() {
    let ve = new Vehiculo(localStorage.getItem('medioTransporte'), localStorage.getItem('Aereo'), document.querySelector('#anio').value, document.querySelector('#motor').value, parseInt(document.querySelector('#cant').value), document.querySelector('#color').value, document.querySelector('#formato').value, parseInt(document.querySelector('#plazo').value));
    localStorage.setItem('Objeto', JSON.stringify(ve));
    window.location.href = '/detalle.html';
}
document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector('.dato').innerHTML = localStorage.getItem("Aereo");
    document.querySelector('#texto').innerHTML = localStorage.getItem("info");
});
//detalle Globo
document.querySelector('#globo').addEventListener("click", function () {
    localStorage.setItem("Aereo", "Globo Aeróstatico");
    localStorage.setItem('info', 'Ahora podrás disfrutar de un inolvidable vuelo en globo aerostático y apreciar diferentes panoramas desde la altura.No te pierdas esta experiencia única en la vida.');
    window.location.href = "/aereoShow.html";
});
//detalle Heli
document.querySelector('#helicoptero').addEventListener("click", function () {
    localStorage.setItem("Aereo", "Helicoptero");
    localStorage.setItem('info', 'Ahora podrás disfrutar de un inolvidable vuelo en helicóptero y apreciar diferentes panoramas desde la altura.No te pierdas esta experiencia única en la vida.');
    window.location.href = "/aereoShow.html";
});
document.querySelector('#avion').addEventListener("click", function () {
    localStorage.setItem("Aereo", "Aeronave");
    localStorage.setItem('info', 'Ahora podrás disfrutar de un inolvidable vuelo en avioneta y apreciar diferentes panoramas desde la altura.No te pierdas esta experiencia única en la vida.');
    window.location.href = "/aereoShow.html";
});
