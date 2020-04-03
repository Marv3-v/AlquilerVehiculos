class MedioTransporte {
    medio: string;
    tipo: string;
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
    anio: string;
    motor: string;
    cantP: Number;
    color: string;
    formato: string;
    plazo: number;
    //
    constructor(medio: string, tipo: string, anio: string, motor: string, cantP: number,
                color: string, formato: string, plazo: number) {
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
    let ve = new Vehiculo(localStorage.getItem('medioTransporte'), 
                            localStorage.getItem('Aereo'),
                            (<HTMLSelectElement>document.querySelector('#anio')).value,
                            (<HTMLSelectElement>document.querySelector('#motor')).value,
                            parseInt((<HTMLInputElement>document.querySelector('#cant')).value),
                            (<HTMLSelectElement>document.querySelector('#color')).value,
                            (<HTMLSelectElement>document.querySelector('#formato')).value,
                            parseInt((<HTMLSelectElement>document.querySelector('#plazo')).value),
    );
    localStorage.setItem('Objeto', JSON.stringify(ve));
    window.location.href = '/detalle.html';
}


document.addEventListener("DOMContentLoaded", function (event) {
    document.querySelector('.dato').innerHTML = localStorage.getItem("Aereo");
    document.querySelector('#texto').innerHTML = localStorage.getItem("info");
   
});
//detalle Globo

document.querySelector('#globo').addEventListener("click", function(){
    localStorage.setItem("Aereo", "Globo Aeróstatico");
    localStorage.setItem('info', 'Ahora podrás disfrutar de un inolvidable vuelo en globo aerostático y apreciar diferentes panoramas desde la altura.No te pierdas esta experiencia única en la vida.')
    window.location.href = "/aereoShow.html";
});
//detalle Heli
document.querySelector('#helicoptero').addEventListener("click", function () {
    localStorage.setItem("Aereo", "Helicoptero");
    localStorage.setItem('info', 'Ahora podrás disfrutar de un inolvidable vuelo en helicóptero y apreciar diferentes panoramas desde la altura.No te pierdas esta experiencia única en la vida.')
    window.location.href = "/aereoShow.html";
});

document.querySelector('#avion').addEventListener("click", function () {
    localStorage.setItem("Aereo", "Aeronave");
    localStorage.setItem('info', 'Ahora podrás disfrutar de un inolvidable vuelo en avioneta y apreciar diferentes panoramas desde la altura.No te pierdas esta experiencia única en la vida.')
    window.location.href = "/aereoShow.html";
});


