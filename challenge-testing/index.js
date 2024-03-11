/* HOMEWORK VIERNES 08-03 */
class CarritoCompra {
    constructor() {
        this.products = []
    }

    agregarProducto(producto) {
        this.products.push(producto)
    }

    calcularTotal() {
        let total = 0;

        for (const item of this.products) {
            total += item.price * item.quantity
        }
        return total
    }

    aplicarDescuento(porcentaje) {
        const subtotal = this.calcularTotal()
        const descuento = this.calcularTotal() * (porcentaje / 100)

        return subtotal - descuento
    }
}



module.exports = CarritoCompra;