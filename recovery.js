let lastAlertedEmail = '';

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Validação do e-mail em tempo real
document.getElementById('recoveryEmail').addEventListener('input', function () {
    const email = this.value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some((u) => u.email === email);

    if (userExists) {
        this.style.borderColor = '#00c851';
    } else {
        this.style.borderColor = '#ff4444';
    }
});

document
    .getElementById('recoveryForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('recoveryEmail').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((u) => u.email === email);

        if (userExists && email !== lastAlertedEmail) {
            showMessage(
                'Recuperação de senha enviada para o seu e-mail!',
                'success'
            );
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        } else if (!userExists && email !== lastAlertedEmail) {
            showMessage('E-mail não encontrado.', 'error');
            lastAlertedEmail = email;
        }
    });
