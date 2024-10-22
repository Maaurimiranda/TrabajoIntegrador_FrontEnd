/*  PERSISTENCE LOCAL STORAGE */

export const handleGetProductsLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    console.log("Productos en el LocalStorage:", products);  // Asegúrate de que se muestran los productos con ID
    return products;
};


// GUARDAR EN LOCAL STORAGE
export const setInLocalStorage = (productIn) => {
    // Asegúrate de que el producto tiene un ID válido
    if (!productIn.id) {
        productIn.id = new Date().toISOString();  // O usa otra lógica de generación de ID
    }

    let productsInLocal = handleGetProductsLocalStorage();  // Obtener todos los productos

    const existingIndex = productsInLocal.findIndex((productsLocal) => 
        productsLocal.id === productIn.id);
    
    if (existingIndex !== -1) {  // Si existe, modificar
        productsInLocal[existingIndex] = productIn;
    } else {  // Si no existe, añadir
        productsInLocal.push(productIn);
        console.log("AÑADIDO EL PRODUCTO");
    }

    // Guardar en el localStorage
    localStorage.setItem("products", JSON.stringify(productsInLocal));
};

