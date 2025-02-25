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

// Verifica se já existem usuários no localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Verifica se o usuário administrador já existe
const adminExists = users.some((user) => user.email === 'admin@taquanto.com');

// Se o usuário administrador não existir, cria um novo
if (!adminExists) {
    console.log('Criando usuário administrador padrão...');
    const adminUser = {
        fullName: 'Admin',
        email: 'admin@taquanto.com', // E-mail corrigido
        password: 'admin', // Senha corrigida
        cpf: '000.000.000-00',
        phone: '(00) 00000-0000',
        birthDate: '1990-01-01',
        state: 'SP',
        city: 'São Paulo',
        cep: '00000-000',
        gender: 'Masculino',
        authorized: true,
        isAdmin: true, // Adiciona a propriedade isAdmin para identificar o administrador
    };

    users.push(adminUser);
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Usuário administrador criado:', adminUser);
}

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

        console.log('Usuário encontrado:', user); // Depuração: Verifica o usuário encontrado

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
