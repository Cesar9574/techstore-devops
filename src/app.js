function calcularTotal(precio, cantidad) {
    // TODO: agregar validacion de precios negativos (ver Issue #1)
    return precio * cantidad;
}

function aplicarDescuento(total, porcentaje) {
    // TODO: validar que porcentaje este entre 0 y 100 (ver Issue #2)
    return total - (total * porcentaje / 100);
}

module.exports = {
    calcularTotal,
    aplicarDescuento
};