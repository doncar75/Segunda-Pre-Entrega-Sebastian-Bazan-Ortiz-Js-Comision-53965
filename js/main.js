let nombre = prompt("¡Bienvenido a Doncar Burger! Por favor, introduce tu nombre:");
alert("Hola, " + nombre + ". ¡A continuación verás nuestro menú!");

const hamburguesasDisponibles = [
    { 
        nombre: "Hamburguesa Clásica con Lechuga y Tomate",
        precio: 3500,
        ingredientesExtra: [
            { nombre: "Cheddar", precio: 1000 },
            { nombre: "Bacon", precio: 1300 },
            { nombre: "Huevo", precio: 600 },
            { nombre: "Cebolla Caramelizada", precio: 500 }
        ]
    },
    { 
        nombre: "Hamburguesa con Cheddar",
        precio: 3500,
        ingredientesExtra: [
            { nombre: "Huevo", precio: 600 },
            { nombre: "Cebolla Caramelizada", precio: 500 },
            { nombre: "Bacon", precio: 1300 }
        ]
    },
    { 
        nombre: "Hamburguesa Doble Con Lechuga,Tomate y Cheddar",
        precio: 4900,
        ingredientesExtra: [
            { nombre: "Bacon", precio: 1300 },
            { nombre: "Huevo", precio: 600 },
            { nombre: "Cebolla Caramelizada", precio: 500 }
        ]
    },
    { 
        nombre: "Hamburguesa Vegana con Lechuga y Tomate",
        precio: 6000,
        ingredientesExtra: [
            { nombre: "Queso Vegano", precio: 1500 },
            { nombre: "Tofu", precio: 1500 },
        ]
    }
];

// Generar mensaje de opciones utilizando map
const mensajeOpciones = "Estas son nuestras hamburguesas disponibles:\n\n" +
    hamburguesasDisponibles.map((hamburguesa, index) => {
        let mensaje = `${index + 1}. ${hamburguesa.nombre} - $${hamburguesa.precio}`;
        if (hamburguesa.ingredientesExtra.length > 0) {
            mensaje += "\n  Ingredientes extra disponibles:";
            hamburguesa.ingredientesExtra.forEach((ingrediente) => {
                mensaje += `\n    - ${ingrediente.nombre} - $${ingrediente.precio}`;
            });
        }
        return mensaje;
    }).join('\n') +
    "\n\nPor favor, introduce el número de la hamburguesa que deseas (1-4), o presiona 'x' para salir:";

function mostrarMenu() {
    let totalCompra = 0;

    do {
        let opcionElegida = prompt(mensajeOpciones);

        switch (opcionElegida) {
            case "1":
            case "2":
            case "3":
            case "4":
                let opcionSeleccionada = hamburguesasDisponibles[parseInt(opcionElegida) - 1];
                totalCompra += opcionSeleccionada.precio;
                alert("Has elegido la " + opcionSeleccionada.nombre + ". ¡Buen provecho!");

                // Preguntar si desea agregar ingredientes extras
                if (opcionSeleccionada.ingredientesExtra.length > 0) {
                    let agregarIngredientes = confirm("¿Deseas agregar ingredientes extras a tu hamburguesa?");
                    if (agregarIngredientes) {
                        // Mostrar opciones de ingredientes extras y sumar el precio al total de la compra
                        opcionSeleccionada.ingredientesExtra.forEach((ingrediente) => {
                            let agregar = confirm(`¿Deseas agregar ${ingrediente.nombre} por $${ingrediente.precio}?`);
                            if (agregar) {
                                totalCompra += ingrediente.precio;
                            }
                        });
                    }
                }
                break;
            case "x":
                alert("Gracias por visitar Doncar Burger. ¡Que tengas un buen día!");
                return;
            default:
                alert("Por favor, selecciona una opción válida.");
        }

        alert("Total a pagar hasta ahora: $" + totalCompra);

    } while (true);

    let comprarMas = confirm("¿Quieres comprar algo más?");
    if (!comprarMas) {
        alert("Gracias por tu compra en Doncar Burger. Total a pagar: $" + totalCompra);
    } else {
        mostrarMenu();
    }
}

mostrarMenu();

