function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

let loginAttempts = {};
let lastAlertedEmail = '';

console.log('Script login.js carregado!');

document
    .getElementById('loginForm')
    .addEventListener('submit', function (event) {
        console.log('Formulário submetido!');
        event.preventDefault(); // Impede o envio tradicional do formulário
        console.log('PreventDefault executado!');

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        console.log('Email:', email);
        console.log('Senha:', password);

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            console.log('Usuário encontrado:', user);
            if (user.isAdmin) {
                console.log('Redirecionando para admin.html');
                window.location.href = 'admin.html';
            } else if (user.authorized) {
                console.log(
                    'Usuário autorizado, redirecionando para index.html'
                );
                localStorage.setItem('isLoggedIn', 'true'); // Salva o status de login
                showMessage('Login realizado com sucesso!', 'success');
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                console.log('Usuário não autorizado');
                showMessage(
                    'Você não está autorizado a acessar a página principal.',
                    'error'
                );
            }
        } else {
            console.log('Usuário não encontrado');
            const emailExists = users.some((u) => u.email === email);

            if (!emailExists && email !== lastAlertedEmail) {
                showMessage('E-mail não encontrado.', 'error');
                lastAlertedEmail = email;
            } else if (emailExists) {
                if (!loginAttempts[email]) {
                    loginAttempts[email] = 0;
                }
                loginAttempts[email]++;

                if (loginAttempts[email] >= 3) {
                    showMessage(
                        'Você excedeu o número de tentativas. <a href="recovery.html">Recuperar senha</a>',
                        'error'
                    );
                } else {
                    showMessage('Email ou senha incorretos.', 'error');
                }
            }
        }
    });

console.log('Evento submit adicionado ao formulário!');
