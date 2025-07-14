
/*
let carrito = [];

// Para agregar un producto al carrito
function agregarProducto(id, cantidad = 1) {
    let producto = productos.find(producto => producto.id === id); //compara el id de los productos con el id cargado
    if (producto) {
        carrito.push({
            id: producto.id,
            marca: producto.marca,
            modelo: producto.modelo,
            precio: producto.precio,
            ram: producto.ram,
            cantidad: cantidad
        });
    };
};


// Para mostrar el carrito
function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío...")
    } else {
        console.log("Porductos agregados: ");
        carrito.forEach(producto => console.log(`id: ${producto.id} - ${producto.marca} - ${producto.modelo} - $${producto.precio} - ram: ${producto.ram} - cantidad: ${producto.cantidad}`));

    };
};

agregarProducto(3,2);
agregarProducto(6);
mostrarCarrito();


function vaciarCarrito() {
    carrito = [];
};

function eliminarProducto(id) {
    const index = carrito.findIndex(producto => producto.id === id);
    if (index !== -1) {
      carrito.splice(index, 1) //primer parámetro desde dónde empieza a borrar y el segundo cuántos borra
    };
};


agregarProducto(1);
mostrarCarrito();
console.log("--------------------------");
eliminarProducto(6);
mostrarCarrito();

*/