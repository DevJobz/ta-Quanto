document
    .getElementById('loginForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Simulação de login
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            localStorage.setItem('isLoggedIn', 'true'); // Adiciona o indicador de login
            window.location.href = 'index.html'; // Redireciona para a página principal
        } else {
            alert('Email ou senha incorretos.');
        }
    });

// Simulação de login com redes sociais
document.querySelector('.google-login').addEventListener('click', function () {
    alert('Login com Google simulado.');
});

document
    .querySelector('.facebook-login')
    .addEventListener('click', function () {
        alert('Login com Facebook simulado.');
    });

document.querySelector('.apple-login').addEventListener('click', function () {
    alert('Login com Apple simulado.');
});
