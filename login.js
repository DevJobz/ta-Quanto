let loginAttempts = {};
let lastAlertedEmail = '';

console.log('Script login.js carregado!');

function initializeAdminUser() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const adminExists = users.some(
        (user) => user.email === 'admin@taquanto.com'
    );

    if (!adminExists) {
        console.log('Criando usuário administrador padrão...');
        const adminUser = {
            fullName: 'Admin',
            email: 'admin@taquanto.com',
            password: 'admin',
            cpf: '000.000.000-00',
            phone: '(00) 00000-0000',
            birthDate: '1990-01-01',
            state: 'SP',
            city: 'São Paulo',
            cep: '00000-000',
            gender: 'Masculino',
            authorized: true,
            isAdmin: true,
            role: 'master',
        };

        users.push(adminUser);
        localStorage.setItem('users', JSON.stringify(users));
        console.log('Usuário administrador criado:', adminUser);
    }
}

// Chama a função para inicializar o admin
initializeAdminUser();

document.addEventListener('DOMContentLoaded', function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    // Verifica se o usuário já está logado e redireciona
    if (isLoggedIn && currentUser) {
        if (currentUser.role === 'master' || currentUser.role === 'moderator') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'index.html';
        }
    }
});

document
    .getElementById('loginForm')
    .addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio tradicional do formulário
        console.log('Formulário submetido!'); // Log de depuração

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        console.log('Email:', email); // Log de depuração
        console.log('Senha:', password); // Log de depuração

        login(email, password); // Chama a função de login
    });

function login(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.email === email);

    if (user) {
        // Verifica se a senha está correta
        if (user.password === password) {
            // Reseta o contador de tentativas para o e-mail
            loginAttempts[email] = 0;

            // Atualiza o último login
            user.lastLogin = new Date().toLocaleString();
            localStorage.setItem('users', JSON.stringify(users));

            // Armazena o usuário logado
            localStorage.setItem('currentUser', JSON.stringify(user));
            localStorage.setItem('isLoggedIn', true);

            // Redireciona com base no papel do usuário
            if (user.role === 'master' || user.role === 'moderator') {
                console.log('Usuário é admin/moderator. Exibindo modal...');
                showAdminModal();
            } else if (user.authorized) {
                console.log('Usuário comum autorizado. Redirecionando...');
                window.location.href = 'index.html';
            } else {
                console.log('Usuário comum não autorizado.');
                showMessage(
                    'Você não está autorizado a acessar a página principal.',
                    'error'
                );
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('currentUser');
            }
        } else {
            // Incrementa o contador de tentativas para o e-mail
            loginAttempts[email] = (loginAttempts[email] || 0) + 1;

            // Verifica se o usuário excedeu o limite de tentativas
            if (loginAttempts[email] >= 3) {
                showMessage(
                    'Você excedeu o número de tentativas. <a href="recovery.html">Recuperar Senha</a>',
                    'error'
                );
                loginAttempts[email] = 0; // Reseta o contador após exibir o alerta
            } else {
                showMessage(
                    'Senha incorreta. Tentativas restantes: ' +
                        (3 - loginAttempts[email]),
                    'error'
                );
            }
        }
    } else {
        // E-mail não cadastrado
        if (lastAlertedEmail !== email) {
            showMessage(
                'E-mail não cadastrado. <a href="register.html">Registrar-se</a>',
                'error'
            );
            lastAlertedEmail = email; // Evita múltiplos alertas para o mesmo e-mail
        }
    }
}

function showAdminModal() {
    console.log('Exibindo modal de escolha...');
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.style.display = 'flex';
    }

    // Fecha o modal ao clicar fora dele
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Redireciona ao clicar nos botões do modal
    document.getElementById('goToIndex').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    document.getElementById('goToAdmin').addEventListener('click', function () {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser.role === 'master' || currentUser.role === 'moderator') {
            window.location.href = 'admin.html';
        } else {
            showMessage(
                'Você não tem permissão para acessar o painel de controle.',
                'error'
            );
        }
    });
}

function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}
