document.addEventListener('DOMContentLoaded', () => {
  
  const productosDisponibles = [
    {id: '1', nombre: 'Dell Inspiron 15', precio: 850000, img: 'img/productos/pexels-cookiecutter-1148820.jpg'},
    {id: '2', nombre: 'HP Pavilion x360', precio: 985000, img: 'img/productos/pexels-daan-stevens-66128-939331.jpg'},
    {id: '3', nombre: 'Lenovo IdeaPad 3', precio: 960000, img: 'img/productos/pexels-designecologist-1779487.jpg'},
    {id: '4', nombre: 'Acer Aspire 5', precio: 784000, img: 'img/productos/pexels-divinetechygirl-1181269.jpg'},
    {id: '5', nombre: 'Asus Vivobook 14', precio: 931000, img: 'img/productos/pexels-fauxels-3182774.jpg'}
  ];

  const contenedorListaProductos = document.getElementById('contenedorListaProductos');

  function renderizarProductos() {
    //usamos map para transformar cada objeto producto en un string html
    const productosHtml = productosDisponibles.map(producto => {
      return `
                <div class="item-producto">
                  <img src="${producto.img}" alt="${producto.nombre}" class="imagen-producto">
                  <h2>${producto.nombre}</h2>
                  <p>$ ${producto.precio.toFixed(2)}</p>
                  <button class="btn-agregar-carrito" id="btn-agregar-${producto.id}">Agregar al carrito</button>
                </div>
        `;
    }); 

    //unimos todos los strings HTML y los insertamos en el contenedor
    contenedorListaProductos.innerHTML = productosHtml.join(''); //join para sacar las comas

    //Una vez que el HTML está en el DOM, podemos seleccionar los botones y adjuntarles los eventos 
    adjuntarEventosAgregarCarrito();
  };

  function adjuntarEventosAgregarCarrito(){
    //recorremos el array original de productos para adjuntar eventos
    //usamos el id del producto para encontar el botón correspondiente
    productosDisponibles.forEach(producto => {
      const boton = document.getElementById(`btn-agregar-${producto.id}`);
      //me aseguro que el botón exista
      if (boton) {
        boton.addEventListener('click', () => {
          agregarProductoAlCarrito(producto)
        });
      }
    })

  }

  function agregarProductoAlCarrito(productoAAgregar) {
    let carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || []; //si no existe el carrito, va a crear uno vacío

    const indiceProductoExistente = carrito.findIndex(item => item.id === productoAAgregar.id);

    if (indiceProductoExistente !== -1) {
      carrito[indiceProductoExistente].cantidad++;
    } else {
      carrito.push({
        id: productoAAgregar.id,
        nombre: productoAAgregar.nombre,
        precio: productoAAgregar.precio,
        img: productoAAgregar.img,
        cantidad: 1
      });
    };

    localStorage.setItem('carritoDeCompras', JSON.stringify(carrito));
    alert(`${productoAAgregar.nombre} agregado al carrito`)
  }

  renderizarProductos();
 

});
