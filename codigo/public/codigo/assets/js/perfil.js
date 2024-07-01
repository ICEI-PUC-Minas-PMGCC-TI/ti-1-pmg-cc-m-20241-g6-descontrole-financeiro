document.addEventListener('DOMContentLoaded', function() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUserIndex = 0; // Defina o índice do usuário logado

    const currentUser = users[currentUserIndex];

    // Carregar informações atuais do usuário no perfil
    document.getElementById('nick').textContent = currentUser.nick;
    document.getElementById('name').textContent = currentUser.name;
    document.getElementById('email').textContent = currentUser.email;
    document.getElementById('cpf').textContent = currentUser.cpf;

    // Preencher formulário de edição com informações atuais
    document.getElementById('editNick').value = currentUser.nick;
    document.getElementById('editName').value = currentUser.name;
    document.getElementById('editEmail').value = currentUser.email;
    document.getElementById('editCPF').value = currentUser.cpf;

    // Evento para salvar alterações no perfil
    document.getElementById('editForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Atualizar informações do usuário
        currentUser.nick = document.getElementById('editNick').value.trim();
        currentUser.name = document.getElementById('editName').value.trim();
        currentUser.email = document.getElementById('editEmail').value.trim();
        currentUser.cpf = document.getElementById('editCPF').value.trim();

        const newPassword = document.getElementById('editPassword').value.trim();
        if (newPassword !== '') {
            currentUser.password = newPassword;
        }

        // Salvar usuário atualizado no armazenamento local
        users[currentUserIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));

        alert('Perfil atualizado com sucesso!');
    });
});
