import { handleGetProductsLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import { productoActivo, setProductoActivo } from "../../main";
import { closeModal } from "../views/modal";

import Swal from "sweetalert2"
import { getProductoActivo1, setProductoActivo1 } from "../persistence/currentProductoActivo";


/* ===================== PRODUCTOS ====================== */

// GUARDAR O MODIFICAR ELEMENTOS - ADD BUTTON
const acceptButton = document.getElementById("buttonAccept");
acceptButton.addEventListener("click", () => {
    handSaveOrModifyElements();
});

//FUNCION DE GUARDAR O MODIFICAR ELEMENTOS
export const handSaveOrModifyElements = () => {
    const nombre = document.getElementById("name").value.trim();
    const precio = document.getElementById("price").value;
    const image = document.getElementById("image").value.trim();
    const categoria = document.getElementById("categoria").value;

    if (!nombre || !precio || !image || categoria === "Seleccione una categoria") {
        alert("Por favor, rellena todos los campos correctamente");
        return;
    }

    let object = null;

    if (productoActivo) {   
        object = {
            ...productoActivo,
            nombre,
            precio,
            image,
            categoria
        };

    } else {  // Si no está activo, añadir
        object = {
            id: new Date().toISOString(),
            nombre,
            precio,
            image,
            categoria
        };
        setInLocalStorage(object);
        handleGetProductsToStore();
        closeModal();  // Cerrar el modal después de guardar
    }

    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();  // Cerrar el modal después de guardar
};


export const handleDeleteProduct = () => {

    console.log("fuera del if",productoActivo); //ACA NO ES NULL PERFECTO
    setProductoActivo1(productoActivo);

    Swal.fire({

        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        

    }).then((result) => {

        const productoActivoNew = getProductoActivo1(); //LO RECUPERA 
        console.log("productoActivoNew",productoActivoNew);

        if (result.isConfirmed) {

            if (!productoActivoNew) {
                console.error("No se puede eliminar: el producto activo no tiene ID o es nulo."); 
                return;
            }   

            const products = handleGetProductsLocalStorage();
            console.log(products);
            const result = products.filter((el) => el.id !== productoActivoNew.id);
            // Actualizar el localStorage - Setear el nuevo arrayList
            localStorage.setItem("products", JSON.stringify(result));
            const newProducts = handleGetProductsLocalStorage();
            // Renderizar los productos actualizados
            handleRenderList(newProducts);
            
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            width: '400px',
            heightAuto: false,
            customClass: {
                popup: 'no-scroll'}
            });

        } else {
            closeModal();
        }
    });
};






/*
export const handleDeleteProduct = () => {
    if (!productoActivo || !productoActivo.id) {
        console.error("No se puede eliminar: el producto activo no tiene ID o es nulo.");
        return;
    }   
    const products = handleGetProductsLocalStorage();
    console.log(products);
    const result = products.filter((el) => el.id !== productoActivo.id);
    // Actualizar el localStorage - Setear el nuevo arrayList
    localStorage.setItem("products", JSON.stringify(result));
    const newProducts = handleGetProductsLocalStorage();
    // Renderizar los productos actualizados
    handleRenderList(newProducts);
}
*/