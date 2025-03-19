//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos adicionados
let amigos = [];

/**
 * Adiciona um amigo à lista
 */
function adicionarAmigo() {
    // Obtém o valor do input
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();
    
    // Verifica se o nome foi preenchido
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome.');
        return;
    }
    
    // Verifica se o nome já existe na lista
    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }
    
    // Adiciona o amigo ao array
    amigos.push(nomeAmigo);
    
    // Atualiza a lista visual
    atualizarListaAmigos();
    
    // Limpa o campo de input
    inputAmigo.value = '';
    inputAmigo.focus();
}

/**
 * Atualiza a lista visual de amigos
 */
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista atual
    listaAmigos.innerHTML = '';
    
    // Adiciona cada amigo à lista com botão para remover
    amigos.forEach((amigo, index) => {
        const itemLista = document.createElement('li');
        itemLista.className = 'list-item';
        
        const nomeSpan = document.createElement('span');
        nomeSpan.textContent = amigo;
        
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.className = 'button-remove';
        botaoRemover.onclick = function() {
            removerAmigo(index);
        };
        
        itemLista.appendChild(nomeSpan);
        itemLista.appendChild(botaoRemover);
        listaAmigos.appendChild(itemLista);
    });
}

/**
 * Remove um amigo da lista
 * @param {number} index - Índice do amigo a ser removido
 */
function removerAmigo(index) {
    // Remove o amigo do array
    amigos.splice(index, 1);
    
    // Atualiza a lista visual
    atualizarListaAmigos();
    
    // Limpa os resultados anteriores quando a lista muda
    limparResultado();
}

/**
 * Limpa a lista de resultados
 */
function limparResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

/**
 * Realiza o sorteio do amigo secreto
 */
function sortearAmigo() {
    // Verifica se há amigos suficientes para o sorteio
    if (amigos.length < 3) {
        alert('Adicione pelo menos 3 participantes para realizar o sorteio.');
        return;
    }
    
    // Cria uma cópia do array de amigos para não modificar o original
    const sorteio = [...amigos];
    // Array para armazenar os resultados do sorteio
    const resultados = [];
    
    // Embaralha o array para garantir aleatoriedade
    embaralharArray(sorteio);
    
    // Realiza o sorteio
    for (let i = 0; i < amigos.length; i++) {
        const pessoa = amigos[i];
        // A pessoa tira quem está na mesma posição no array embaralhado
        const amigoSecreto = sorteio[i];
        
        // Verifica se a pessoa tirou ela mesma
        if (pessoa === amigoSecreto) {
            // Se isso acontecer, troca com a próxima pessoa
            const proximoIndice = (i + 1) % amigos.length;
            const temp = sorteio[i];
            sorteio[i] = sorteio[proximoIndice];
            sorteio[proximoIndice] = temp;
        }
        
        // Adiciona o resultado ao array de resultados
        resultados.push({
            pessoa: pessoa,
            amigoSecreto: sorteio[i]
        });
    }
    
    // Exibe os resultados
    exibirResultados(resultados);
}

/**
 * Embaralha um array usando o algoritmo Fisher-Yates
 * @param {Array} array - Array a ser embaralhado
 */
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

/**
 * Exibe os resultados do sorteio
 * @param {Array} resultados - Array com os resultados do sorteio
 */
function exibirResultados(resultados) {
    const listaResultado = document.getElementById('resultado');
    
    // Limpa resultados anteriores
    limparResultado();
    
    // Adiciona cada resultado à lista
    resultados.forEach(resultado => {
        const itemLista = document.createElement('li');
        itemLista.className = 'result-item';
        itemLista.textContent = `${resultado.pessoa} → ${resultado.amigoSecreto}`;
        listaResultado.appendChild(itemLista);
    });
}

// Permite adicionar amigos pressionando Enter no campo de input
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarAmigo();
    }
});
