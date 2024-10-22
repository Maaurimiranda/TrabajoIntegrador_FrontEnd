//FUNCION PARA GUARDAR EL PRODUCTO ACTUAL ACTIVO

export const setProductoActivo1 = (producto) => {
    localStorage.setItem("productoActivo", JSON.stringify(producto));
    console.log("Producto activo actualizado:", producto);
};

export const getProductoActivo1 = () => {
    const producto = JSON.parse(localStorage.getItem("productoActivo"));

    if (!producto) {
        console.log("No se encontró el producto activo");
        return null;
    } else {
    console.log("Producto activo obtenido:", producto);
    return producto;
    }
};