// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nombresSorteados = []; // Lista para almacenar los nombres que ya han sido sorteados
console.log(listaAmigos);
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // No continuar si el campo está vacío
    } else if (listaAmigos.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista. Por favor, ingresa un nombre diferente.");
        document.getElementById("amigo").value = ""; // Limpiar el campo si el nombre es repetido
        return; // No continuar si el nombre ya existe
    } else {
        listaAmigos.push(nombreAmigo);
        document.getElementById("amigo").value = ""; // Limpiar el campo después de agregar el nombre
        actualizarLista(); // Actualizar la lista de amigos
    }

    console.log(listaAmigos);
}

function actualizarLista() {
    lista.innerHTML = "";  // Limpiar lista visual

    let inicioLista = 0;
    let finalLista = listaAmigos.length - 1;

    while (inicioLista <= finalLista) {
        let listaNombre = document.createElement("li");
        listaNombre.textContent = listaAmigos[inicioLista];
        lista.appendChild(listaNombre);
        inicioLista++;
    }
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista.");
        return;
    }

    // Filtrar amigos que aún no han sido sorteados
    let amigosNoSorteados = listaAmigos.filter(nombre => !nombresSorteados.includes(nombre));

    if (amigosNoSorteados.length === 0) {
        alert("¡Todos los amigos ya han sido sorteados! El juego ha terminado.");
        
        // Limpiar las listas y reiniciar el juego
        listaAmigos = [];
        nombresSorteados = [];
        actualizarLista(); // Limpiar la lista visual
        document.getElementById("resultado").innerHTML = ""; // Limpiar el área de resultados
        
        return; // Fin del juego y reinicio
    }

    // Elegir un amigo al azar de los no sorteados
    let indiceSorteado = Math.floor(Math.random() * amigosNoSorteados.length);
    let nombreSorteado = amigosNoSorteados[indiceSorteado];
    nombresSorteados.push(nombreSorteado); // Marcar el nombre como sorteado

    // Mostrar el resultado del sorteo
    let nombreMostrado = document.getElementById("resultado");
    nombreMostrado.innerHTML = `¡El amigo sorteado es: ${nombreSorteado}!`;

    // Actualizar la lista de amigos (sin los sorteados)
    actualizarLista();
}
// Fin del código!!! ^^