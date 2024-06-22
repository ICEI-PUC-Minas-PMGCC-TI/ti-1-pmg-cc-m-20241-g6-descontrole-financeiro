                <form>
                    <label for="saldo">
                        Saldo:
                        <input type="number" id="saldo" oninput="atualizarDados()" />
                    </label>
                    <label for="fatura">
                        Fatura:
                        <input type="number" id="fatura" oninput="atualizarDados()" />
                    </label>
                    <button id="enviar" type="button" onclick="cadastroFatura()">ENVIAR</button>
                </form>

                <div>
                    <input type="text" id="new-message" placeholder="Nova mensagem">
                    <button onclick="adicionar_mensagem()">Adicionar Mensagem</button>
                    <button onclick="mostra_mensagem()">Mostrar Mensagem Aleatória</button>
                </div>

                <div id="dadosRecuperados"></div>



if (!localStorage.getItem('mensagens')) {
    const mensagens = [
        "O sucesso não é final, o fracasso não é fatal: o que importa é a coragem de continuar.",
        "Não tenha medo de ser diferente. Ser diferente te torna memorável.",
        "A mente é tudo. O que você pensa, você se torna.",
        "Se você pode sonhar, você pode fazer.",
        "A única maneira de fazer um bom trabalho é amar o que você faz.",
        "Acredite em você e em tudo o que você é.",
        "Sua limitação é apenas sua imaginação.",
        "Esforce-se, porque ninguém mais fará isso por você.",
        "Às vezes, mais tarde torna-se nunca. Faça agora.",
        "Grandes coisas nunca vêm de zonas de conforto.",
        "Sonhe-o, deseje-o, faça-o.",
        "O sucesso não encontra apenas você. Você tem que sair e consegui-lo.",
        "Quanto mais você trabalhar por algo, melhor você se sentirá ao alcançá-lo.",
        "Sonhe maior. Faça maior.",
        "Não pare quando estiver cansado. Pare quando terminar."

    ];
    localStorage.setItem('mensagens', JSON.stringify(mensagens));
}

function mensagem_aleatoria() {
    const mensagens = JSON.parse(localStorage.getItem('mensagens'));
    const randomIndex = Math.floor(Math.random() * mensagens.length);
    return mensagens[randomIndex];
}

function mostra_mensagem() {
    console.log('Mostrando mensagem');
    const messageBox = document.getElementById('message-box');
    const randomMessage = mensagem_aleatoria();
    messageBox.textContent = randomMessage;
}

function adicionar_mensagem() {
    console.log('Adicionando mensagem');
    const newMessageInput = document.getElementById('new-message');
    const newMessage = newMessageInput.value.trim();

    if (newMessage) {
        let mensagens = JSON.parse(localStorage.getItem('mensagens'));
        mensagens.push(newMessage);
        localStorage.setItem('mensagens', JSON.stringify(mensagens));

        newMessageInput.value = ''; // Limpa
        alert('Mensagem adicionada.');
    } else {
        alert('Insira uma mensagem válida.');
    }
}

function cadastroFatura() {
    const saldoInput = document.getElementById('saldo').value;
    const faturaInput = document.getElementById('fatura').value;

    const saldo = parseFloat(saldoInput);
    const fatura = parseFloat(faturaInput);
    const saldoDisponivel = saldo - fatura;

    if (isNaN(saldo) || isNaN(fatura)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    console.log('saldo:', saldo);
    console.log('fatura:', fatura);
    console.log('saldo disponivel:', saldoDisponivel);

    const dados = { saldo, fatura, saldoDisponivel };
    localStorage.setItem('db', JSON.stringify(dados));

    mostrarDadosRecuperados();
}

function atualizarDados() {
    const saldoInput = document.getElementById('saldo').value;
    const faturaInput = document.getElementById('fatura').value;

    const saldo = parseFloat(saldoInput) || 0;
    const fatura = parseFloat(faturaInput) || 0;
    const saldoDisponivel = saldo - fatura;

    document.getElementById('saldo-value').textContent = saldo;
    document.getElementById('fatura-value').textContent = fatura;
    document.getElementById('saldo-disponivel-value').textContent = saldoDisponivel;

    const dados = { saldo, fatura, saldoDisponivel };
    localStorage.setItem('db', JSON.stringify(dados));
}

function atualizarSaldo() {
    const saldoDisponivel = parseFloat(document.getElementById('saldo-disponivel-value').textContent);
    if (!isNaN(saldoDisponivel)) {
        document.getElementById('saldo').value = saldoDisponivel;
        document.getElementById('saldo-value').textContent = saldoDisponivel;
        const fatura = parseFloat(document.getElementById('fatura-value').textContent);
        const dados = { saldo: saldoDisponivel, fatura, saldoDisponivel };
        localStorage.setItem('db', JSON.stringify(dados));
    } else {
        alert('Saldo disponível inválido.');
    }
}

function mostrarDadosRecuperados() {
    const dados = JSON.parse(localStorage.getItem('db'));
    if (dados) {
        document.getElementById('saldo').value = dados.saldo;
        document.getElementById('fatura').value = dados.fatura;
        document.getElementById('saldo-value').textContent = dados.saldo;
        document.getElementById('fatura-value').textContent = dados.fatura;
        document.getElementById('saldo-disponivel-value').textContent = dados.saldoDisponivel;
    }
}

document.addEventListener("DOMContentLoaded", mostrarDadosRecuperados);