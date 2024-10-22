//============== CATEGORIAS ================

import { categoriaActiva } from "../../main";
import { handleGetProductsLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";




const handleFilterProductsByCategory = (categoryIn) => {
  //Obtener los productos
  const products = handleGetProductsLocalStorage();

  switch(categoryIn){
    case categoriaActiva :
      handleRenderList(products);
      break;
    case "Todos":
      handleRenderList(products);
      break;
    case "Hamburguesas":
    case "Papas":
    case "Gaseosas":
      const result = products.filter((el) => el.categoria === categoryIn);
      handleRenderList(result);
      default:
      break;
    case "menorPrecio":
      const resultPrecio = products.sort((a,b) => a.precio - b.precio);
      handleRenderList(resultPrecio);
      break;
    case "mayorPrecio":
      const resultPrecio2 = products.sort((a,b) => b.precio - a.precio);
      handleRenderList(resultPrecio2);
      break;
  }

 };


export const renderCategorias = () => {

    //TOMAMOS ELEMENTOS DE LA LISTA
    const ulList = document.getElementById("listFilter");
    //CREAMOS ELEMENTOS DENTRO DE LA LISTA
    ulList.innerHTML = `
    <li id="Todos">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="menorPrecio">Menor precio</li>
    <li id="mayorPrecio">Mayor precio</li>
    `;
  
    const listElement = document.querySelectorAll("li");
    
    // Verificamos y manejamos el estilo del campo
    const handleClick = (elemento) => {
      handleFilterProductsByCategory(elemento.id);
      listElement.forEach((el) => {
        if (el.classList.contains("liActive")) {
          el.classList.remove("liActive");
        }
        if (elemento === el) {
          el.classList.add("liActive");
        }
      });
    };
  
    // Añadir eventos de click
    listElement.forEach((element) => {
      element.addEventListener("click", () => {
        handleClick(element);
      });
    });
  };
  