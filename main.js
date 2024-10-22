import { renderCategorias } from "./src/services/categorias";
import "./style.css";
import { handleGetProductsToStore } from "./src/views/store";
import { openModal } from "./src/views/modal";
import { handleSearchProductByName } from "./src/services/searchBar";

/* ================ APLICACION ================ */
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
};


export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    if (productoIn && !productoIn.id) {
        console.error("El producto activo no tiene ID:", productoIn);
    }
    productoActivo = productoIn;
};



handleGetProductsToStore();  // Cargar los productos en el local storage
renderCategorias();

// ================= HEADER ================
const addButton = document.getElementById("addButton_Header");

addButton.addEventListener("click", () => {
    openModal();
});

// ======   BARRA DE BUSQUEDA =====
const buttonSearch = document.getElementById("searchButton");
buttonSearch.addEventListener("click", () => {
    handleSearchProductByName();
});



