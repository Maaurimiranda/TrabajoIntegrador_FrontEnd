/* ================ STORE ================ */

import { setProductoActivo } from "../../main";
import { handleGetProductsLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";


export const handleGetProductsToStore = () => { 

    const products = handleGetProductsLocalStorage();
    handleRenderList(products);
    console.log(products);
}

//FILTRA Y RENDERIZA LA SECCION CON TODOS SUS ELEMENTOS 
export const handleRenderList = (productosIn) => {
    //Filtrar por categoria
    const burguers = productosIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas");

    //RENDERIZA EL ELEMENTO DE LA LISTA
    const renderProductsGroup = (productos, title) => {
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return ` 
            <div class='containerTargetItem' id= 'product-${producto.categoria}-${index}'>
                <div>
                    <img src='${producto.image}'>
                    <div>
                        <h2>${producto.nombre}</h2>
                    </div>
                    <div class="targetProps"> 
                        <p><b>Precio: $</b>${producto.precio}</p> 
                    </div>
                </div>
            </div>`
            });

            //RETORTNA LA FUNCION CON TODOS LOS ELEMENTOS
            return `
                <section class="sectionStore">
                    <div class="containerTitleSection">
                        <h3>${title}</h3>
                    </div>
                    <div class="containerProductStore">
                        ${productosHTML.join("")}
                    </div>
                </section>
                `;
            }
    };

            //renderizar cada uno de los productos dentro de su categoria
    const appContainer = document.getElementById("storeContainer");
    appContainer.innerHTML = `
        ${renderProductsGroup(burguers, "Hamburguesas")}
        ${renderProductsGroup(papas, "Papas")}
        ${renderProductsGroup(gaseosas, "Gaseosas")} 
    `; 
    
    const addEvents = (productsIn) => {
        console.log("PRODUCTOS", productsIn);
        if (productsIn) {
            productsIn.forEach((element, index) => {
                const productContainer = document.getElementById(`product-${element.categoria}-${index}`);
                productContainer.addEventListener("click", () => {
                    setProductoActivo(element);  // Asignar el producto actual como activo
                    console.log("Producto activo seleccionado:", element);  // Verificar en la consola
                    openModal();  // Abre el modal
                });
            });
        }
    };
    
    addEvents(burguers);
    addEvents(papas);
    addEvents(gaseosas);
    
};
