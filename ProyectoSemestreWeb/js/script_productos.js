const productos = [
    {
        "id": 1,
        "nombre": "Leche",
        "precio": 1.99,
        "categoria": "Lácteos",
        "peso": "1 litro",
        "descripcion": "Leche entera fresca"
    },
    {
        "id": 2,
        "nombre": "Pan integral",
        "precio": 2.49,
        "categoria": "Panadería",
        "peso": "500 gramos",
        "descripcion": "Pan integral recién horneado"
    },
    {
        "id": 3,
        "nombre": "Manzanas",
        "precio": 0.99,
        "categoria": "Frutas",
        "peso": "1 kilogramo",
        "descripcion": "Manzanas frescas y crujientes"
    },
    {
        "id": 4,
        "nombre": "Arroz",
        "precio": 3.99,
        "categoria": "Granos",
        "peso": "2 kilogramos",
        "descripcion": "Arroz blanco de alta calidad"
    },
    {
        "id": 5,
        "nombre": "Huevos",
        "precio": 2.29,
        "categoria": "Lácteos",
        "peso": "Docena",
        "descripcion": "Huevos frescos de granja"
    },
    {
        "id": 6,
        "nombre": "Cereales",
        "precio": 3.49,
        "categoria": "Desayuno",
        "peso": "500 gramos",
        "descripcion": "Cereales para un desayuno saludable"
    },
    {
        "id": 7,
        "nombre": "Aceite de oliva",
        "precio": 5.99,
        "categoria": "Aceites",
        "peso": "1 litro",
        "descripcion": "Aceite de oliva virgen extra"
    },
    {
        "id": 8,
        "nombre": "Carne de res",
        "precio": 7.99,
        "categoria": "Carnes",
        "peso": "500 gramos",
        "descripcion": "Carne de res magra y tierna"
    },
    {
        "id": 9,
        "nombre": "Pasta",
        "precio": 1.79,
        "categoria": "Pastas",
        "peso": "500 gramos",
        "descripcion": "Pasta de trigo durum"
    },
    {
        "id": 10,
        "nombre": "Verduras mixtas",
        "precio": 2.49,
        "categoria": "Vegetales",
        "peso": "1 kilogramo",
        "descripcion": "Mezcla de verduras congeladas"
    },{
            "id": 11,
            "nombre": "Aceitunas",
            "precio": 2.49,
            "categoria": "Conservas",
            "peso": "250 gramos",
            "descripcion": "Aceitunas verdes rellenas de anchoas"
        },
        {
            "id": 12,
            "nombre": "Salmón",
            "precio": 8.99,
            "categoria": "Pescados",
            "peso": "400 gramos",
            "descripcion": "Filete de salmón fresco"
        },
        {
            "id": 13,
            "nombre": "Yogur",
            "precio": 0.99,
            "categoria": "Lácteos",
            "peso": "150 gramos",
            "descripcion": "Yogur natural"
        },
        {
            "id": 14,
            "nombre": "Arvejas",
            "precio": 1.29,
            "categoria": "Conservas",
            "peso": "400 gramos",
            "descripcion": "Arvejas enlatadas"
        },
        {
            "id": 15,
            "nombre": "Naranjas",
            "precio": 2.99,
            "categoria": "Frutas",
            "peso": "2 kilogramos",
            "descripcion": "Naranjas frescas y jugosas"
        },
        {
            "id": 16,
            "nombre": "Papel higiénico",
            "precio": 4.49,
            "categoria": "Higiene",
            "peso": "Paquete de 4 rollos",
            "descripcion": "Papel higiénico suave y resistente"
        },
        {
            "id": 17,
            "nombre": "Café",
            "precio": 6.99,
            "categoria": "Bebidas",
            "peso": "250 gramos",
            "descripcion": "Café molido premium"
        },
        {
            "id": 18,
            "nombre": "Pollo",
            "precio": 5.99,
            "categoria": "Carnes",
            "peso": "1 kilogramo",
            "descripcion": "Pechuga de pollo sin hueso"
        },
        {
            "id": 19,
            "nombre": "Jabón de lavandería",
            "precio": 3.49,
            "categoria": "Limpieza",
            "peso": "Paquete de 3 barras",
            "descripcion": "Jabón de lavandería efectivo"
        },
        {
            "id": 20,
            "nombre": "Maní tostado",
            "precio": 2.79,
            "categoria": "Snacks",
            "peso": "200 gramos",
            "descripcion": "Maní tostado y salado"
        }
    ]
    
    // Continuar con más objetos de productos...
    const elementosPorPagina = 10;
    let paginaActual = 1;

    function mostrarBoton(page) {
        const divobjetos = document.getElementById("contenedor");
        const startIndex = (page - 1) * elementosPorPagina;
        const endIndex = startIndex + elementosPorPagina;
    
        divobjetos.innerHTML = "";
    
        // Recorrer los objetos y crear elementos <div> para cada uno
        for (let i = startIndex; i < Math.min(endIndex, productos.length); i++) {
            const producto = productos[i];
            const productoDiv = document.createElement("div"); // Contenedor div para el objeto
            productoDiv.className = "listadoJson"; // Aplicar la clase objeto al contenedor
    
            productoDiv.innerHTML = `
                <p>ID: ${producto.id}</p>
                <p>Nombre: ${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Peso: ${producto.peso}</p>
                <p>Descripción: ${producto.descripcion}</p>
            `;
    
            // Agregar el contenedor div al contenedor principal
            divobjetos.appendChild(productoDiv);
        }
    }
    
    // Función para ir a la página anterior
    function paginaAnterior() {
        if (paginaActual > 1) {
            paginaActual--;
            mostrarBoton(paginaActual);
        }
    }
    
    // Función para ir a la página siguiente
    function paginaSiguiente() {
        const totalPaginas = Math.ceil(productos.length / elementosPorPagina);
        if (paginaActual < totalPaginas) {
            paginaActual++;
            mostrarBoton(paginaActual);
        }
    }
    
    function mostrarBoton1() {
        mostrarBoton(1);
    }


function limpiarContenido() {
    const contenedorObjetos = document.getElementById("contenedor");
    contenedorObjetos.innerHTML = ""; // Limpia el contenido del div
}
