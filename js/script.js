let productos = [
  {
    "id": 1,
    "marca": "Dell",
    "modelo": "Inspiron 15",
    "precio": 750000,
    "ram": "8GB",
    "image": "img/dell-inspiron.jpg"
  },
  {
    "id": 2,
    "marca": "HP",
    "modelo": "Pavilion x360",
    "precio": 830000,
    "ram": "16GB",
    "image": "img/hp-pavilion.jpg"
  },
  {
    "id": 3,
    "marca": "Lenovo",
    "modelo": "IdeaPad 3",
    "precio": 690000,
    "ram": "8GB",
    "image": "img/lenovo-ideapad.jpg"
  },
  {
    "id": 4,
    "marca": "Asus",
    "modelo": "Vivobook 14",
    "precio": 720000,
    "ram": "8GB",
    "image": "img/asus-vivobook.jpg"
  },
    {
    "id": 5,
    "marca": "Acer",
    "modelo": "Aspire 5",
    "precio": 650000,
    "ram": "8GB",
    "image": "img/acer-aspire.jpg"
  },
  {
    "id": 6,
    "marca": "Apple",
    "modelo": "MacBook Air M1",
    "precio": 1200000,
    "ram": "8GB",
    "image": "img/macbook-air.jpg"
  }
];


////////////////////////////////////////////////////////////////

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