// Array para guardar los amigos
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim(); // quita espacios en blanco al inicio y final

  if (nombre === "") {
    alert("⚠️ Por favor, ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
  input.focus();
}

// Función para mostrar los amigos en la lista visible
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("⚠️ La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉</li>`;
}