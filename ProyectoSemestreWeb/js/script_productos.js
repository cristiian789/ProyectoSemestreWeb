const productos = [
    {
        "id": 1,
        "imagenURL": "https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/lecheok_0.jpg.webp?itok=0XaoEZv0",
        "marca": "Clopez",
        "nombre": "Leche",
        "precio": 1.99,
        "categoria": "Lácteos",
        "peso": "1 litro",
        "descripcion": "Leche entera fresca",
        "Stock": 20,
        "Descuento": "10%"
    },
    {
        "id": 2,
        "imagenURL": "https://ejemplo.com/pan.png",
        "marca": "BakeryBest",
        "nombre": "Pan integral",
        "precio": 2.49,
        "categoria": "Panadería",
        "peso": "500 gramos",
        "descripcion": "Pan integral recién horneado",
        "Stock": 15,
        "Descuento": "5%"
    },
    {
        "id": 3,
        "imagenURL": "https://ejemplo.com/yogur.png",
        "marca": "HealthyDairy",
        "nombre": "Yogur",
        "precio": 0.99,
        "categoria": "Lácteos",
        "peso": "200 gramos",
        "descripcion": "Yogur natural",
        "Stock": 30,
        "Descuento": "15%"
    },
    {
        "id": 4,
        "imagenURL": "https://ejemplo.com/cereal.png",
        "marca": "NutriCrunch",
        "nombre": "Cereal",
        "precio": 3.29,
        "categoria": "Desayuno",
        "peso": "400 gramos",
        "descripcion": "Cereal integral con frutas",
        "Stock": 25,
        "Descuento": "8%"
    },
    {
        "id": 5,
        "imagenURL": "https://ejemplo.com/aceite.png",
        "marca": "GoldenOil",
        "nombre": "Aceite de oliva",
        "precio": 4.99,
        "categoria": "Aceites",
        "peso": "750 ml",
        "descripcion": "Aceite de oliva virgen extra",
        "Stock": 18,
        "Descuento": "12%"
    },
    {
        "id": 6,
        "imagenURL": "https://ejemplo.com/galletas.png",
        "marca": "SweetBites",
        "nombre": "Galletas",
        "precio": 2.79,
        "categoria": "Snacks",
        "peso": "300 gramos",
        "descripcion": "Galletas de chocolate",
        "Stock": 22,
        "Descuento": "6%"
    },
    {
        "id": 7,
        "imagenURL": "https://ejemplo.com/jabon.png",
        "marca": "CleanLife",
        "nombre": "Jabón líquido",
        "precio": 1.49,
        "categoria": "Cuidado personal",
        "peso": "500 ml",
        "descripcion": "Jabón líquido para manos",
        "Stock": 28,
        "Descuento": "10%"
    },
    {
        "id": 8,
        "imagenURL": "https://ejemplo.com/arroz.png",
        "marca": "RiceMaster",
        "nombre": "Arroz",
        "precio": 2.89,
        "categoria": "Granos",
        "peso": "1 kg",
        "descripcion": "Arroz blanco de grano largo",
        "Stock": 16,
        "Descuento": "7%"
    },
    {
        "id": 9,
        "imagenURL": "https://ejemplo.com/yogurt.png",
        "marca": "SmoothDelight",
        "nombre": "Yogurt de frutas",
        "precio": 1.79,
        "categoria": "Lácteos",
        "peso": "150 gramos",
        "descripcion": "Yogurt con trozos de frutas",
        "Stock": 32,
        "Descuento": "9%"
    },
    {
        "id": 10,
        "imagenURL": "https://ejemplo.com/pasta.png",
        "marca": "PastaMaster",
        "nombre": "Pasta",
        "precio": 1.49,
        "categoria": "Pasta",
        "peso": "500 gramos",
        "descripcion": "Pasta de trigo",
        "Stock": 20,
        "Descuento": "5%"
    },
    {
        "id": 11,
        "imagenURL": "https://ejemplo.com/queso.png",
        "marca": "CheeseMasters",
        "nombre": "Queso",
        "precio": 5.99,
        "categoria": "Lácteos",
        "peso": "250 gramos",
        "descripcion": "Queso cheddar en bloque",
        "Stock": 15,
        "Descuento": "8%"
    },
    {
        "id": 12,
        "imagenURL": "https://ejemplo.com/salmon.png",
        "marca": "OceanFresh",
        "nombre": "Filete de salmón",
        "precio": 8.49,
        "categoria": "Pescado",
        "peso": "200 gramos",
        "descripcion": "Filete de salmón fresco",
        "Stock": 12,
        "Descuento": "10%"
    },
    {
        "id": 13,
        "imagenURL": "https://ejemplo.com/agua.png",
        "marca": "PureHydration",
        "nombre": "Agua mineral",
        "precio": 0.79,
        "categoria": "Bebidas",
        "peso": "1 litro",
        "descripcion": "Agua mineral natural",
        "Stock": 50,
        "Descuento": "5%"
    },
    {
        "id": 14,
        "imagenURL": "https://ejemplo.com/sopa.png",
        "marca": "SoupDelight",
        "nombre": "Sopa de tomate",
        "precio": 2.29,
        "categoria": "Conservas",
        "peso": "400 gramos",
        "descripcion": "Sopa de tomate en lata",
        "Stock": 25,
        "Descuento": "7%"
    },
    {
        "id": 15,
        "imagenURL": "https://ejemplo.com/cerveza.png",
        "marca": "BrewMasters",
        "nombre": "Cerveza artesanal",
        "precio": 3.99,
        "categoria": "Bebidas alcohólicas",
        "peso": "500 ml",
        "descripcion": "Cerveza artesanal de trigo",
        "Stock": 18,
        "Descuento": "15%"
    },
    {
        "id": 16,
        "imagenURL": "https://ejemplo.com/limpiador.png",
        "marca": "CleanPro",
        "nombre": "Limpiador multiusos",
        "precio": 1.99,
        "categoria": "Limpieza",
        "peso": "750 ml",
        "descripcion": "Limpiador para superficies",
        "Stock": 30,
        "Descuento": "10%"
    },
    {
        "id": 17,
        "imagenURL": "https://ejemplo.com/mermelada.png",
        "marca": "SweetSpread",
        "nombre": "Mermelada de fresa",
        "precio": 2.79,
        "categoria": "Desayuno",
        "peso": "300 gramos",
        "descripcion": "Mermelada de fresa casera",
        "Stock": 20,
        "Descuento": "5%"
    },
    {
        "id": 18,
        "imagenURL": "https://ejemplo.com/papel.png",
        "marca": "SoftTouch",
        "nombre": "Papel higiénico",
        "precio": 4.49,
        "categoria": "Artículos de papel",
        "peso": "Pack de 6 rollos",
        "descripcion": "Papel higiénico suave",
        "Stock": 24,
        "Descuento": "8%"
    },
    {
        "id": 19,
        "imagenURL": "https://ejemplo.com/cepillo.png",
        "marca": "DentalCare",
        "nombre": "Cepillo de dientes",
        "precio": 1.29,
        "categoria": "Cuidado personal",
        "descripcion": "Cepillo de dientes con cerdas suaves",
        "Stock": 35,
        "Descuento": "6%"
    },
    {
        "id": 20,
        "imagenURL": "https://ejemplo.com/salsa.png",
        "marca": "FlavorBurst",
        "nombre": "Salsa de tomate",
        "precio": 1.49,
        "categoria": "Salsas",
        "peso": "500 gramos",
        "descripcion": "Salsa de tomate italiana",
        "Stock": 28,
        "Descuento": "10%"
    },
    {
            "id": 21,
            "imagenURL": "https://ejemplo.com/lechuga.png",
            "marca": "FreshGreens",
            "nombre": "Lechuga",
            "precio": 1.29,
            "categoria": "Frutas y Verduras",
            "peso": "300 gramos",
            "descripcion": "Lechuga fresca de hoja verde",
            "Stock": 40,
            "Descuento": "5%"
    },
    {
            "id": 22,
            "imagenURL": "https://ejemplo.com/jugo.png",
            "marca": "FruitSplash",
            "nombre": "Jugo de naranja",
            "precio": 2.99,
            "categoria": "Bebidas",
            "peso": "1 litro",
            "descripcion": "Jugo de naranja recién exprimido",
            "Stock": 25,
            "Descuento": "10%"
    },
    {
            "id": 23,
            "imagenURL": "https://ejemplo.com/pollo.png",
            "marca": "FarmFresh",
            "nombre": "Pechuga de pollo",
            "precio": 6.49,
            "categoria": "Carnes",
            "peso": "500 gramos",
            "descripcion": "Pechuga de pollo sin hueso",
            "Stock": 18,
            "Descuento": "8%"
        },
        {
            "id": 24,
            "imagenURL": "https://ejemplo.com/cereal_miel.png",
            "marca": "HoneyCrunch",
            "nombre": "Cereal con miel",
            "precio": 3.79,
            "categoria": "Desayuno",
            "peso": "450 gramos",
            "descripcion": "Cereal con hojuelas de avena y miel",
            "Stock": 20,
            "Descuento": "6%"
        },
        {
            "id": 25,
            "imagenURL": "https://ejemplo.com/vino.png",
            "marca": "VineyardSelect",
            "nombre": "Vino tinto",
            "precio": 9.99,
            "categoria": "Bebidas alcohólicas",
            "peso": "750 ml",
            "descripcion": "Vino tinto reserva",
            "Stock": 15,
            "Descuento": "15%"
        },
        {
            "id": 26,
            "imagenURL": "https://ejemplo.com/toallas.png",
            "marca": "SoftComfort",
            "nombre": "Toallas de papel",
            "precio": 2.49,
            "categoria": "Artículos de papel",
            "peso": "Pack de 4 rollos",
            "descripcion": "Toallas de papel absorbentes",
            "Stock": 30,
            "Descuento": "10%"
        },
        {
            "id": 27,
            "imagenURL": "https://ejemplo.com/pure.png",
            "marca": "NatureBlend",
            "nombre": "Puré de manzana",
            "precio": 1.89,
            "categoria": "Alimentos para bebés",
            "peso": "Jarra de 200 gramos",
            "descripcion": "Puré de manzana sin azúcares añadidos",
            "Stock": 35,
            "Descuento": "7%"
        },
        {
            "id": 28,
            "imagenURL": "https://ejemplo.com/champu.png",
            "marca": "SilkyLocks",
            "nombre": "Champú suave",
            "precio": 3.99,
            "categoria": "Cuidado personal",
            "peso": "500 ml",
            "descripcion": "Champú para cabello suave y sedoso",
            "Stock": 22,
            "Descuento": "8%"
        },
        {
            "id": 29,
            "imagenURL": "https://ejemplo.com/pasas.png",
            "marca": "SnackTime",
            "nombre": "Pasas",
            "precio": 1.49,
            "categoria": "Snacks",
            "peso": "250 gramos",
            "descripcion": "Pasas naturales sin azúcares añadidos",
            "Stock": 28,
            "Descuento": "5%"
        },
        {
            "id": 30,
            "imagenURL": "https://ejemplo.com/pescado.png",
            "marca": "SeaHarvest",
            "nombre": "Filete de pescado",
            "precio": 7.29,
            "categoria": "Pescado",
            "peso": "300 gramos",
            "descripcion": "Filete de pescado blanco congelado",
            "Stock": 20,
            "Descuento": "10%"
        },
        {
            "id": 31,
            "imagenURL": "https://ejemplo.com/mango.png",
            "marca": "TropicalHarvest",
            "nombre": "Mango",
            "precio": 1.79,
            "categoria": "Frutas y Verduras",
            "peso": "1 unidad",
            "descripcion": "Mango fresco y jugoso",
            "Stock": 45,
            "Descuento": "6%"
        },
        {
            "id": 32,
            "imagenURL": "https://ejemplo.com/agua_gas.png",
            "marca": "BubblyQuench",
            "nombre": "Agua con gas",
            "precio": 0.99,
            "categoria": "Bebidas",
            "peso": "500 ml",
            "descripcion": "Agua con gas burbujeante",
            "Stock": 35,
            "Descuento": "5%"
        },
        {
            "id": 33,
            "imagenURL": "https://ejemplo.com/pavo.png",
            "marca": "TurkeyDelight",
            "nombre": "Pavo en lonchas",
            "precio": 4.29,
            "categoria": "Embutidos",
            "peso": "150 gramos",
            "descripcion": "Lonchas de pavo de calidad",
            "Stock": 20,
            "Descuento": "8%"
        },
        {
            "id": 34,
            "imagenURL": "https://ejemplo.com/chocolate.png",
            "marca": "SweetIndulgence",
            "nombre": "Chocolate negro",
            "precio": 3.49,
            "categoria": "Chocolates",
            "peso": "200 gramos",
            "descripcion": "Tableta de chocolate negro 70%",
            "Stock": 18,
            "Descuento": "10%"
        },
        {
            "id": 35,
            "imagenURL": "https://ejemplo.com/sidra.png",
            "marca": "CrispCider",
            "nombre": "Sidra de manzana",
            "precio": 5.99,
            "categoria": "Bebidas alcohólicas",
            "peso": "750 ml",
            "descripcion": "Sidra de manzana natural",
            "Stock": 15,
            "Descuento": "12%"
        },
        {
            "id": 36,
            "imagenURL": "https://ejemplo.com/detergente.png",
            "marca": "FreshClean",
            "nombre": "Detergente líquido",
            "precio": 2.99,
            "categoria": "Limpieza",
            "peso": "1 litro",
            "descripcion": "Detergente para ropa fresca",
            "Stock": 25,
            "Descuento": "7%"
        },
        {
            "id": 37,
            "imagenURL": "https://ejemplo.com/pure_banana.png",
            "marca": "BananaBlend",
            "nombre": "Puré de plátano",
            "precio": 1.49,
            "categoria": "Alimentos para bebés",
            "peso": "Jarra de 150 gramos",
            "descripcion": "Puré de plátano natural",
            "Stock": 30,
            "Descuento": "5%"
        },
        {
            "id": 38,
            "imagenURL": "https://ejemplo.com/crema.png",
            "marca": "SilkyCream",
            "nombre": "Crema hidratante",
            "precio": 4.79,
            "categoria": "Cuidado personal",
            "peso": "200 ml",
            "descripcion": "Crema hidratante para piel suave",
            "Stock": 22,
            "Descuento": "8%"
        },
        {
            "id": 39,
            "imagenURL": "https://ejemplo.com/nueces.png",
            "marca": "NuttyDelight",
            "nombre": "Nueces",
            "precio": 3.29,
            "categoria": "Frutas secas",
            "peso": "250 gramos",
            "descripcion": "Nueces frescas y crujientes",
            "Stock": 28,
            "Descuento": "6%"
        },
        {
            "id": 40,
            "imagenURL": "https://ejemplo.com/pesto.png",
            "marca": "GreenPesto",
            "nombre": "Salsa pesto",
            "precio": 2.19,
            "categoria": "Salsas",
            "peso": "150 gramos",
            "descripcion": "Salsa pesto italiana",
            "Stock": 20,
            "Descuento": "10%"
        },
        {
            "id": 41,
            "imagenURL": "https://ejemplo.com/nectar.png",
            "marca": "FruitNectar",
            "nombre": "Néctar de durazno",
            "precio": 2.49,
            "categoria": "Bebidas",
            "peso": "1 litro",
            "descripcion": "Néctar de durazno 100% natural",
            "Stock": 32,
            "Descuento": "7%"
        },
        {
            "id": 42,
            "imagenURL": "https://ejemplo.com/sal.png",
            "marca": "PureSalt",
            "nombre": "Sal marina",
            "precio": 1.19,
            "categoria": "Condimentos",
            "peso": "500 gramos",
            "descripcion": "Sal marina fina de alta calidad",
            "Stock": 40,
            "Descuento": "5%"
        },
        {
            "id": 43,
            "imagenURL": "https://ejemplo.com/palomitas.png",
            "marca": "PopcornTime",
            "nombre": "Palomitas de maíz",
            "precio": 1.99,
            "categoria": "Snacks",
            "peso": "200 gramos",
            "descripcion": "Palomitas de maíz listas para microondas",
            "Stock": 25,
            "Descuento": "10%"
        },
        {
            "id": 44,
            "imagenURL": "https://ejemplo.com/queso_azul.png",
            "marca": "BlueCheese",
            "nombre": "Queso azul",
            "precio": 4.99,
            "categoria": "Lácteos",
            "peso": "300 gramos",
            "descripcion": "Queso azul de origen francés",
            "Stock": 18,
            "Descuento": "8%"
        },
        {
            "id": 45,
            "imagenURL": "https://ejemplo.com/te_verde.png",
            "marca": "GreenTeaDelight",
            "nombre": "Té verde",
            "precio": 3.29,
            "categoria": "Bebidas",
            "peso": "50 bolsitas",
            "descripcion": "Té verde antioxidante",
            "Stock": 22,
            "Descuento": "6%"
        },
        {
            "id": 46,
            "imagenURL": "https://ejemplo.com/purificador_aire.png",
            "marca": "FreshAir",
            "nombre": "Purificador de aire",
            "precio": 49.99,
            "categoria": "Electrodomésticos",
            "peso": "Para espacios de hasta 50 m²",
            "descripcion": "Purificador de aire con filtro HEPA",
            "Stock": 15,
            "Descuento": "15%"
        },
        {
            "id": 47,
            "imagenURL": "https://ejemplo.com/mayonesa.png",
            "marca": "CreamyMayo",
            "nombre": "Mayonesa",
            "precio": 2.79,
            "categoria": "Salsas",
            "peso": "400 gramos",
            "descripcion": "Mayonesa cremosa para untar",
            "Stock": 28,
            "Descuento": "10%"
        },
        {
            "id": 48,
            "imagenURL": "https://ejemplo.com/aloe_vera.png",
            "marca": "AloeFresh",
            "nombre": "Gel de aloe vera",
            "precio": 6.49,
            "categoria": "Cuidado personal",
            "peso": "250 ml",
            "descripcion": "Gel refrescante de aloe vera",
            "Stock": 20,
            "Descuento": "12%"
        },
        {
            "id": 49,
            "imagenURL": "https://ejemplo.com/arandanos.png",
            "marca": "BerryBurst",
            "nombre": "Arándanos",
            "precio": 3.99,
            "categoria": "Frutas y Verduras",
            "peso": "150 gramos",
            "descripcion": "Arándanos frescos y antioxidantes",
            "Stock": 32,
            "Descuento": "7%"
        },
        {
            "id": 50,
            "imagenURL": "https://ejemplo.com/pasta_integral.png",
            "marca": "WholeWheat",
            "nombre": "Pasta integral",
            "precio": 2.19,
            "categoria": "Pasta",
            "peso": "500 gramos",
            "descripcion": "Pasta de trigo integral",
            "Stock": 26,
            "Descuento": "8%"
        }
];   

    
    
    // Continuar con más objetos de productos...
    const elementosPorPagina = 10;
    let paginaActual = 1;

   /* function mostrarBoton(page) {
        const divobjetos = document.getElementById("contenedor");
        const startIndex = (page - 1) * elementosPorPagina;
        const endIndex = startIndex + elementosPorPagina;
    
        divobjetos.innerHTML = "";
    
        // Recorrer los objetos y crear elementos <div> para cada uno
        for (let i = startIndex; i < Math.min(endIndex, productos.length); i++) {
            const producto = productos[i];
            const productoDiv = document.createElement("div"); // Contenedor div para el objeto
            productoDiv.className = "listadoJson"; // Aplicar la clase objeto al contenedor
    
            const imagenElement = document.createElement("img");
            imagenElement.src = producto.imagenURL;
            imagenElement.alt = producto.nombre;
            imagenElement.className = "imagenRedonda";

           

            productoDiv.innerHTML = `
                <p>ID: ${producto.id}</p>
                <p>Marca: ${producto.marca}</p>
                <p>Nombre: ${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Peso: ${producto.peso}</p>
                <p>Descripción: ${producto.descripcion}</p>
                <p>Stock: ${producto.Stock}</p>
                <p>Descuento: ${producto.Descuento}</p>
            `;
    
            // Agregar el contenedor div al contenedor principal
            divobjetos.appendChild(productoDiv);
           
        }
    }*/

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
    
            const imagenElement = document.createElement("img");
            imagenElement.src = producto.imagenURL;
            imagenElement.alt = producto.nombre;
            imagenElement.className = "imagenRedonda";
    
            productoDiv.appendChild(imagenElement); // Agregar la imagen al contenedor
    
            const contenidoDiv = document.createElement("div");
            contenidoDiv.innerHTML = `
                <p>ID: ${producto.id}</p>
                <p>Marca: ${producto.marca}</p>
                <p>Nombre: ${producto.nombre}</p>
                <p>Precio: $${producto.precio}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Peso: ${producto.peso}</p>
                <p>Descripción: ${producto.descripcion}</p>
                <p>Stock: ${producto.Stock}</p>
                <p>Descuento: ${producto.Descuento}</p>
            `;
    
            productoDiv.appendChild(contenidoDiv); // Agregar el contenido al contenedor
    
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
