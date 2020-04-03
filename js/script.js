var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MedioTransporte = /** @class */ (function () {
    function MedioTransporte(medio, tipo) {
        this.medio = medio;
        this.tipo = tipo;
    }
    MedioTransporte.prototype.getTipo = function () {
        return this.tipo;
    };
    return MedioTransporte;
}());
//const terrestre = new MedioTransporte('Terrestre', 'Carrp');
//const aereo = new MedioTransporte('Aereo');
//const maritimo = new MedioTransporte('Maritimo');
//console.log(terrestre);
var Vehiculo = /** @class */ (function (_super) {
    __extends(Vehiculo, _super);
    //
    function Vehiculo(medio, tipo, anio, motor, cantP, color, formato, plazo, precio) {
        var _this = _super.call(this, medio, tipo) || this;
        _this.anio = anio;
        _this.motor = motor;
        _this.cantP = cantP;
        _this.color = color;
        _this.color = color;
        _this.formato = formato;
        _this.plazo = plazo;
        _this.precio = precio;
        return _this;
    }
    return Vehiculo;
}(MedioTransporte));
function rentar() {
    var ve = new Vehiculo(localStorage.getItem('medioTransporte'), localStorage.getItem('Aereo'), document.querySelector('#anio').value, document.querySelector('#motor').value, parseInt(document.querySelector('#cant').value), document.querySelector('#color').value, document.querySelector('#formato').value, parseInt(document.querySelector('#plazo').value), 1200);
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
    window.location.href = "aereoShow.html";
});
//detalle Heli
document.querySelector('#helicoptero').addEventListener("click", function () {
    localStorage.setItem("Aereo", "Helicoptero");
    localStorage.setItem('info', 'Ahora podrás disfrutar de un inolvidable vuelo en helicóptero y apreciar diferentes panoramas desde la altura.No te pierdas esta experiencia única en la vida.');
    window.location.href + "/aereoShow.html";
    // window.location.href = "aereoShow.html";
});
document.querySelector('#avion').addEventListener("click", function () {
    localStorage.setItem("Aereo", "Aeronave");
    localStorage.setItem('info', 'Ahora podrás disfrutar de un inolvidable vuelo en avioneta y apreciar diferentes panoramas desde la altura.No te pierdas esta experiencia única en la vida.');
    window.location.href = "aereoShow.html";
});
