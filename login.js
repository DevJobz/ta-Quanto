let loginAttempts = {};
let lastAlertedEmail = '';

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

document
    .getElementById('loginForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (user) {
            localStorage.setItem('isLoggedIn', 'true');
            showMessage('Login realizado com sucesso!', 'success');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        } else {
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

document.querySelector('.google-login').addEventListener('click', function () {
    showMessage('Login com Google simulado.', 'success');
});

document
    .querySelector('.facebook-login')
    .addEventListener('click', function () {
        showMessage('Login com Facebook simulado.', 'success');
    });

document.querySelector('.apple-login').addEventListener('click', function () {
    showMessage('Login com Apple simulado.', 'success');
});
