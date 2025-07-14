document.addEventListener('DOMContentLoaded', () => {
  const contenedorCarrito = document.getElementById('contenedorCarrito');
  const carrito = JSON.parse(localStorage.getItem('carritoDeCompras')) || [];

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = '<p>Tu carrito está vacío.</p>';
    return;
  }

  let total = 0;

  const itemsHTML = carrito.map(producto => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    return `
      <div class="item-carrito">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio.toFixed(2)}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <hr>
      </div>
    `;
  });

  contenedorCarrito.innerHTML = itemsHTML.join('') + `<h2>Total: $${total.toFixed(2)}</h2>`;

  // Botón para vaciar carrito
  const btnVaciar = document.getElementById('btnVaciarCarrito');
  if (btnVaciar) {
    btnVaciar.addEventListener('click', () => {
      if (confirm('¿Estás seguro de que querés vaciar el carrito?')) {
        localStorage.removeItem('carritoDeCompras');
        location.reload();
      }
    });
  };


  const btnFinalizar = document.getElementById('btnFinalizarCompra');
  if (btnFinalizar) {
    btnFinalizar.addEventListener('click', () => {
      alert('¡La compra se realizó con éxito!');
      localStorage.removeItem('carritoDeCompras');
      location.reload();
    });
  };

});