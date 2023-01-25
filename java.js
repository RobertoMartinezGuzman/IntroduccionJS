function funcionGeneral() {
    cantidadIngresada = (document.querySelector('#cantidadIngresada').value);
    total = 100000 * Number(cantidadIngresada);
    color = (document.querySelector('#colorIngresado').value);

    compraTotal = document.querySelector('#compraTotal');
    compraTotal.innerHTML = total;

    cantidadTotal = document.querySelector('#cantidadTotal');
    cantidadTotal.innerHTML = cantidadIngresada;

    colorObjeto = document.querySelector('#colorObjeto');
    colorObjeto.style.backgroundColor = color;
}