import { Vehiculo } from "../js/script";
function rentaMotocicleta() {
    let ve = new Vehiculo('Terrestre',
                        'Motocicleta',
        (<HTMLSelectElement>document.querySelector('#anio')).value,
        (<HTMLSelectElement>document.querySelector('#motor')).value,
        parseInt((<HTMLInputElement>document.querySelector('#cant')).value),
        (<HTMLSelectElement>document.querySelector('#color')).value,
        (<HTMLSelectElement>document.querySelector('#formato')).value,
        parseInt((<HTMLSelectElement>document.querySelector('#plazo')).value),
    );
    localStorage.setItem('Moto', JSON.stringify(ve));
    window.location.href = '/detalleRentaMoto.html';
}

document.querySelector('#rentarMoto').addEventListener('click', rentaMotocicleta);