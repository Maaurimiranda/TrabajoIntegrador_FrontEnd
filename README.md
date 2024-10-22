# 🍔 Aplicación de Gestión de Productos para Restaurante

Este proyecto es una aplicación de gestión de productos que permite agregar, modificar y eliminar productos de un restaurante (como hamburguesas, papas y gaseosas) utilizando **LocalStorage** para persistencia. Se implementa una interfaz sencilla con pop-ups de confirmación mediante la librería **SweetAlert**. 

## 🛠️ Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución utilizado para la configuración del proyecto.
- **JavaScript (ES6)**: Lenguaje principal para la lógica de la aplicación.
- **SweetAlert**: Librería para mostrar ventanas emergentes (pop-ups) con confirmaciones, alertas, y mensajes amigables.
- **HTML/CSS**: Estructura y estilo del frontend.
- **LocalStorage**: Mecanismo de almacenamiento local del navegador utilizado para guardar productos y su estado.

## 📁 Estructura del Proyecto

El proyecto está organizado en módulos separados para mantener una estructura clara y escalable:

/src ├── /services │ ├── productos.js # Manejo de los productos │ ├── categorias.js # Gestión de categorías │ ├── searchBar.js # Búsqueda de productos ├── /views │ ├── modal.js # Funciones para abrir y cerrar el modal │ ├── store.js # Renderización de la lista de productos en el DOM ├── /persistence │ └── localStorage.js # Persistencia de productos en LocalStorage ├── /assets │ └── images # Imágenes de los productos index.html # Página principal style.css # Estilos del proyecto


## ⚙️ Instalación y Configuración

### Prerrequisitos

1. **Node.js**: Debes tener Node.js instalado. Puedes descargarlo desde su [sitio web oficial](https://nodejs.org/).
2. **NPM**: Normalmente, NPM se instala junto con Node.js.

## Librerías utilizadas
- **SweetAlert2: Utilizamos SweetAlert2 para mostrar pop-ups que mejoran la experiencia de usuario, ofreciendo alertas estilizadas para confirmar la eliminación de productos o notificar sobre la falta de datos. Puedes encontrar más sobre esta librería en su sitio web oficial.

## 📝 Funcionalidades
- **Agregar Producto: Puedes agregar productos especificando nombre, precio, imagen y categoría.
- **Modificar Producto: Si haces clic en un producto de la lista, puedes modificar sus detalles en el modal que se abre.
- **Eliminar Producto: Al eliminar un producto, se te pedirá una confirmación mediante SweetAlert antes de proceder con la eliminación.
- **Búsqueda: La barra de búsqueda permite filtrar productos por nombre.

## 🎯 Ejecución de la Página Web
- **Abre el archivo index.html en tu navegador.
- **Navega a la lista de productos, donde puedes interactuar con las distintas opciones: agregar, modificar o eliminar.
- **Usa la barra de búsqueda en la parte superior para buscar productos por su nombre.

## 💡 Notas Importantes
- ** Todos los productos y cambios se almacenan en LocalStorage, por lo que si cierras el navegador, los datos persistirán hasta que se eliminen manualmente o se borre el caché del navegador.
- ** El botón de eliminar requiere confirmación antes de proceder, y el producto activo se resalta cuando se selecciona.
