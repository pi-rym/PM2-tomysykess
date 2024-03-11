const CarritoCompra = require('../index')

describe("Clase carritoCompra", () => {
    let carritoCompra;

    beforeEach(() => {
        carritoCompra = new CarritoCompra()
    })

    describe("Sobre el constructor de la clase CarritoCompra", () => {
        it("CarritoCompra debería ser una clase", () => {
            expect(typeof CarritoCompra.prototype.constructor).toBe('function')
        })

        it("carritoCompra debería ser una instancia de la clase CarritoCompra", () => {
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })

        it("Debería guardar productos en una lista", () => {
            expect(carritoCompra.products).toEqual([])
        })
    })


    describe("Métodos de la clase CarritoCompra", () => {
        const product1 = {
            id: 1,
            name: "Lapicero Negro",
            price: 900,
            quantity: 3,
        }
        const product2 = {
            id: 2,
            name: "Lapicero Azul",
            price: 100,
            quantity: 5,
        }

        it("Debería tener un método llamado agregarProducto", () => {
            expect(typeof carritoCompra.agregarProducto).toBe('function')
        })

        it("Debería tener un método llamado calcularTotal", () => {
            expect(typeof carritoCompra.calcularTotal).toBe('function')
        })

        it("Debería tener un método llamado aplicarDescuento", () => {
            expect(typeof carritoCompra.aplicarDescuento).toBe('function')
        })

        it("Debería poder agregar un producto a la lista", () => {
            carritoCompra.agregarProducto(product1)
            expect(carritoCompra.products).toContain(product1)
        })

        it('El método  calcular total debería poder calcular la compra sumando los precios de todos los productos en el carrito', () => {
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)

            const totalExpect = product1.price * product1.quantity + product2.price * product2.quantity

            const total = carritoCompra.calcularTotal()

            expect(total).toBe(totalExpect)
        })

        it("Debería poder calcular descuento", () => {
            carritoCompra.agregarProducto(product1)
            carritoCompra.agregarProducto(product2)
            const subtotal = product1.price * product1.quantity + product2.price * product2.quantity
            const porcentajeDescuentos = 15

            const totalExpect = subtotal - (subtotal * (porcentajeDescuentos / 100))

            const total = carritoCompra.aplicarDescuento(porcentajeDescuentos)

            expect(totalExpect).toBe(total)
        })
    })
})
