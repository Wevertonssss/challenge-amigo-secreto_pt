// Lista para guardar os nomes
let amigos = [];

// Função para adicionar um nome
function adicionarAmigo() {
  let input = document.getElementById("nome");
  let nome = input.value;

  // Se não escrever nada, mostra um alerta
  if (nome === "") {
    alert("Por favor, escreva um nome!");
  } else {
    amigos.push(nome); // coloca o nome na lista
    input.value = "";  // limpa o campo
    mostrarLista();    // atualiza a lista na tela
  }
}

// Função para mostrar os nomes na tela
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpa a lista antes

  // Cria um <li> para cada amigo
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.innerText = amigos[i];
    lista.appendChild(item);
  }
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("A lista está vazia! Adicione pelo menos um nome.");
  } else {
    let numero = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[numero];
    document.getElementById("resultado").innerText =
      "🎁 O amigo secreto sorteado foi: " + sorteado;
  }
}

// Função para limpar toda a lista
function limparLista() {
  amigos = []; // esvazia a lista
  mostrarLista(); // atualiza a tela
  document.getElementById("resultado").innerText = ""; // limpa o resultado
}

