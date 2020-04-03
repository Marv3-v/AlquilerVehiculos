document.querySelector('#rentarVehiculo').addEventListener("click", function () {
    localStorage.setItem("medioTrans", "Aereo");
    window.location.href = "/rentar.html";
});
