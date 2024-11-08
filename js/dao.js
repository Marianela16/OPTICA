// DAO para gestionar productos
async function obtenerProductos() {
    const response = await fetch("../datos/productos.json");
    const productos = await response.json();
    return productos;
}
