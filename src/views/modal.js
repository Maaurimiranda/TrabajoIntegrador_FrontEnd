import { productoActivo, setProductoActivo } from "../../main";
import { handleDeleteProduct } from "../services/productos";

/* ======  POPUP ====== */

//FUNCIONES PARA ABRIR Y CERRAR EL MODAL
//ABRIR POPUP
export const openModal = () => {
    const modal = document.getElementById("modalPopUp");

    if (modal) {
        modal.style.display = "flex"; 
        const buttonDelete = document.getElementById("buttonDelete");

        if (productoActivo) {
            buttonDelete.style.display = "block";  // Muestra el botón si hay un producto activo
        } else {
            buttonDelete.style.display = "none";  // Oculta el botón si no hay producto activo
        }

        if (productoActivo) {
            const nombre = document.getElementById("name");
            const precio = document.getElementById("price");
            const image = document.getElementById("image");
            const categoria = document.getElementById("categoria");

            image.value = productoActivo.image;
            nombre.value = productoActivo.nombre;
            precio.value = productoActivo.precio;
            categoria.value = productoActivo.categoria;
        }
    } else {
        console.error("No se encontró el modal");
    }
};


//CERRAR POPUP
export const closeModal = () => {
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
};

export const resetModal = () => {
    const nombre = document.getElementById("name");
    const precio = document.getElementById("price");
    const image = document.getElementById("image");
    const categoria = document.getElementById("categoria");

    image.value = "";
    nombre.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una categoria";
};

// BOTÓN CANCELAR
const cancelButton = document.getElementById("buttonCancel");  // Usar el ID correcto
cancelButton.addEventListener("click", () => {
    closeModal();
});



// BOTÓN ELIMINAR
const deleteButton = document.getElementById("buttonDelete");
deleteButton.addEventListener("click", () => {
    handlebuttonDelete();  // Ejecuta la función de eliminar si hay un producto activo
});

// Función para eliminar el producto
const handlebuttonDelete = () => {
    handleDeleteProduct();
    closeModal();  // Cerrar el modal después de eliminar el producto
};

