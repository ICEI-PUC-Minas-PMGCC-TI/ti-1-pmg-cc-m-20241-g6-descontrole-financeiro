document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('Email').value.trim();
    const password = document.getElementById('Senha').value.trim();

    const errorMessage = validateForm(email, password);

    if (errorMessage) {
        alert(errorMessage);
    } else {
        // Simular a verificação de login
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login realizado com sucesso!');
            // Redirecionar para a página inicial ou dashboard
            window.location.href = 'index.html';
        } else {
            alert('Email ou senha incorretos.');
        }
    }
});

function validateForm(email, password) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Por favor, insira um endereço de email válido.';
    }
    if (password.length < 6) {
        return 'A senha deve conter pelo menos 6 caracteres.';
    }
    return null;
}
