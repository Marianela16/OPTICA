// Importa productos y maneja la vista y el carrito
document.addEventListener("DOMContentLoaded", async () => {
    const productosContainer = document.getElementById("productos-container");
    const carritoContainer = document.getElementById("carrito");
    const productos = await obtenerProductos();

    // Mostrar productos en la vista
    productos.forEach((producto) => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
        `;
        productosContainer.appendChild(productoDiv);
    });
});

const carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(idProducto) {
    obtenerProductos().then((productos) => {
        const producto = productos.find((p) => p.id === idProducto);
        carrito.push(producto);
        actualizarCarrito();
    });
}

// Actualizar el carrito en la vista
function actualizarCarrito() {
    const carritoContainer = document.getElementById("carrito");
    carritoContainer.innerHTML = "";
    carrito.forEach((producto) => {
        const item = document.createElement("p");
        item.textContent = `${producto.nombre} - $${producto.precio}`;
        carritoContainer.appendChild(item);
    });
}
