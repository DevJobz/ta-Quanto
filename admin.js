function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.querySelector('#usersTable tbody');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Ordena os usuários por nome
    users.sort((a, b) => a.fullName.localeCompare(b.fullName));

    // Limpa o conteúdo atual da tabela
    tableBody.innerHTML = '';

    // Adiciona cada usuário na tabela
    users.forEach((user) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${user.cpf}</td>
            <td>${user.phone}</td>
            <td>${user.birthDate}</td>
            <td>${user.state}</td>
            <td>${user.city}</td>
            <td>${user.cep}</td>
            <td>${user.gender}</td>
            <td>${user.authorized ? 'Sim' : 'Não'}</td>
            <td class="actions">
                <button class="delete" onclick="deleteUser('${
                    user.email
                }')">Excluir</button>
                <button class="toggle-auth" onclick="toggleAuthorization('${
                    user.email
                }')">
                    ${user.authorized ? 'Negar' : 'Autorizar'}
                </button>
                ${
                    currentUser &&
                    currentUser.role === 'master' &&
                    !user.isAdmin
                        ? `<button onclick="makeAdmin('${user.email}', 'master')">Tornar Master</button>
                           <button onclick="makeAdmin('${user.email}', 'moderator')">Tornar Moderador</button>`
                        : ''
                }
                ${
                    currentUser &&
                    currentUser.role === 'master' &&
                    (user.role === 'master' || user.role === 'moderator')
                        ? `<button onclick="removeAdmin('${user.email}')">Remover Admin</button>`
                        : ''
                }
            </td>
        `;
        tableBody.appendChild(row);
    });

    // Evita a propagação do evento de clique
    document.querySelectorAll('.actions button').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
}

function makeAdmin(email, role) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.role === 'master') {
        const userIndex = users.findIndex((user) => user.email === email);
        if (userIndex === -1) {
            alert('Usuário não encontrado.');
            return;
        }

        const userAffected = users[userIndex];
        users[userIndex].isAdmin = true;
        users[userIndex].role = role;
        users[userIndex].authorized = true;
        localStorage.setItem('users', JSON.stringify(users));

        // Registra a ação
        logAction(`tornar ${role}`, userAffected, currentUser);

        loadUsers();
    } else {
        alert('Apenas o master pode tornar outros usuários admin.');
    }
}

function removeAdmin(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.role === 'master') {
        const userIndex = users.findIndex((user) => user.email === email);
        if (userIndex === -1) {
            alert('Usuário não encontrado.');
            return;
        }

        const userAffected = users[userIndex];
        users[userIndex].isAdmin = false;
        users[userIndex].role = 'user';
        localStorage.setItem('users', JSON.stringify(users));

        // Registra a ação
        logAction('remover admin', userAffected, currentUser);

        loadUsers();
    } else {
        alert('Apenas o master pode remover permissões de admin.');
    }
}

function deleteUser(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex === -1) {
        alert('Usuário não encontrado.');
        return;
    }

    const userToDelete = users[userIndex];

    // Moderadores não podem excluir masters
    if (currentUser.role === 'moderator' && userToDelete.role === 'master') {
        alert('Moderadores não podem excluir usuários master.');
        return;
    }

    // Moderadores não podem excluir outros moderadores diretamente
    if (currentUser.role === 'moderator' && userToDelete.role === 'moderator') {
        const reason = prompt('Digite o motivo da exclusão:');
        if (reason) {
            submitRequest(userToDelete, reason);
            alert(
                'Solicitação de exclusão enviada. Aguarde aprovação do master.'
            );
        }
        return;
    }

    const confirmDelete = confirm(
        'Tem certeza que deseja excluir este usuário?'
    );
    if (confirmDelete) {
        const deletedUser = users[userIndex];
        users.splice(userIndex, 1);
        localStorage.setItem('users', JSON.stringify(users));

        // Registra a ação
        logAction('excluir usuário', deletedUser, currentUser);

        // Se o usuário excluído for o próprio usuário logado, redireciona para a página de login
        if (deletedUser.email === currentUser.email) {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
            return;
        }

        loadUsers();
        alert('Usuário excluído com sucesso!');
    }
}

function toggleAuthorization(email) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex === -1) {
        alert('Usuário não encontrado.');
        return;
    }

    const userAffected = users[userIndex];

    if (currentUser.role === 'master' || currentUser.role === 'moderator') {
        users[userIndex].authorized = !users[userIndex].authorized;
        localStorage.setItem('users', JSON.stringify(users));

        // Registra a ação
        logAction(
            users[userIndex].authorized ? 'autorizar usuário' : 'negar usuário',
            userAffected,
            currentUser
        );

        loadUsers();
        alert(
            `Usuário ${
                users[userIndex].authorized ? 'autorizado' : 'não autorizado'
            } com sucesso!`
        );
    } else {
        alert('Você não tem permissão para autorizar usuários.');
    }
}

function loadFeedback() {
    const feedbackList = JSON.parse(localStorage.getItem('feedback')) || [];
    const feedbackSection = document.getElementById('feedbackList');

    feedbackSection.innerHTML = feedbackList
        .map(
            (feedback) => `
        <div class="feedback-item">
            <p><strong>${feedback.name}</strong> (${feedback.email})</p>
            <p><em>${feedback.feedbackType}</em></p>
            <p>${feedback.message}</p>
            <p class="timestamp">${feedback.timestamp}</p>
        </div>
    `
        )
        .join('');
}

function loadPermissions() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const permissionsSection = document.getElementById('permissionsList');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Limpa o conteúdo atual
    permissionsSection.innerHTML = '';

    // Filtra apenas usuários master/moderador e ordena por nome
    const adminUsers = users
        .filter((user) => user.role === 'master' || user.role === 'moderator')
        .sort((a, b) => a.fullName.localeCompare(b.fullName)); // Ordena por nome

    // Exibe as permissões dos usuários
    adminUsers.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.className = 'permission-item';
        userDiv.innerHTML = `
            <p><strong>${user.fullName}</strong> (${user.email})</p>
            <p>Permissão: ${user.role === 'master' ? 'Master' : 'Moderador'}</p>
            <p>Último Login: ${user.lastLogin || 'Nunca acessou'}</p>
        `;

        // Adiciona um evento de clique para exibir o histórico
        userDiv.querySelector('strong').addEventListener('click', () => {
            toggleActionHistory(user, userDiv);
        });

        permissionsSection.appendChild(userDiv);
    });
}

function toggleActionHistory(user, userDiv) {
    const historyDiv = userDiv.querySelector('.action-history');
    if (historyDiv) {
        // Se o histórico já estiver visível, remove-o
        historyDiv.remove();
    } else {
        // Se o histórico não estiver visível, exibe-o
        const actions = JSON.parse(localStorage.getItem('adminActions')) || [];
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        // Filtra as ações com base no papel do usuário logado
        const filteredActions = actions.filter((action) => {
            if (currentUser.role === 'master') {
                // Master vê todas as ações do usuário clicado
                return action.userPerformed.email === user.email;
            } else if (currentUser.role === 'moderator') {
                // Moderador vê apenas suas ações e as de outros moderadores
                return (
                    action.userPerformed.role === 'moderator' &&
                    action.userPerformed.email === user.email
                );
            }
            return false;
        });

        // Cria o conteúdo do histórico
        const historyHTML = filteredActions
            .map(
                (action) => `
                <div class="action-item">
                    <p><strong>Ação:</strong> ${action.action}</p>
                    <p><strong>Usuário Afetado:</strong> ${
                        action.userAffected.email
                    }</p>
                    <p><strong>Data/Hora:</strong> ${action.timestamp}</p>
                    ${
                        currentUser.role === 'master' &&
                        action.action === 'excluir usuário' &&
                        !action.undone // Mostra o botão apenas se a ação não foi desfeita
                            ? `<button onclick="undoDelete('${action.userAffected.email}', '${action.timestamp}')">Desfazer Exclusão</button>`
                            : ''
                    }
                </div>
            `
            )
            .join('');

        // Adiciona o histórico ao item do usuário
        const historyDiv = document.createElement('div');
        historyDiv.className = 'action-history';
        historyDiv.innerHTML = `<h3>Histórico de Ações</h3>${historyHTML}`;
        userDiv.appendChild(historyDiv);
    }
}

function loadActionHistory() {
    const actions = JSON.parse(localStorage.getItem('adminActions')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const historySection = document.getElementById('permissionsList');

    // Filtra as ações com base no papel do usuário
    const filteredActions = actions.filter((action) => {
        if (currentUser.role === 'master') {
            return true; // Master vê todas as ações
        } else if (currentUser.role === 'moderator') {
            return action.user.email === currentUser.email; // Moderador vê apenas suas ações
        }
        return false;
    });

    // Exibe o histórico
    const historyHTML = filteredActions
        .map(
            (action) => `
            <div class="action-item">
                <p><strong>Ação:</strong> ${action.action}</p>
                <p><strong>Usuário Afetado:</strong> ${action.user.email}</p>
                <p><strong>Data/Hora:</strong> ${action.timestamp}</p>
            </div>
        `
        )
        .join('');

    // Adiciona o histórico à seção de permissões
    permissionsSection.innerHTML += `<h2>Histórico de Ações</h2>${historyHTML}`;
}

// Carrega os usuários ao abrir a página
document.addEventListener('DOMContentLoaded', function () {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    // Remove o botão antigo, se existir
    const oldUndoButton = document.querySelector(
        '#usersSection button:not(#undoButton)'
    );
    if (oldUndoButton) {
        oldUndoButton.remove();
    }

    // Verifica se o usuário está logado e tem permissão
    if (
        !isLoggedIn ||
        !currentUser ||
        (currentUser.role !== 'master' && currentUser.role !== 'moderator')
    ) {
        alert('Você não tem permissão para acessar esta página.');
        window.location.href = 'login.html';
        return;
    }

    // Exibe o nome do usuário logado
    document.getElementById('loggedInUser').textContent = currentUser.fullName;

    // Adiciona a funcionalidade de pesquisa de usuários
    const userSearch = document.getElementById('userSearch');
    if (userSearch) {
        userSearch.addEventListener('input', function () {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('#usersTable tbody tr');

            rows.forEach((row) => {
                const name = row.querySelector('td').textContent.toLowerCase();
                row.style.display = name.includes(searchTerm) ? '' : 'none';
            });
        });
    }

    // Carrega os usuários ao abrir a página
    loadUsers();

    // Adiciona a navegação entre as seções
    const navLinks = document.querySelectorAll('.admin-nav a');
    const sections = document.querySelectorAll('.section-content');

    navLinks.forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');

            if (targetSection === 'logout') {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('currentUser'); // Correção aplicada aqui
                window.location.href = 'login.html';
                return;
            }

            // Remove a classe 'active' de todas as seções
            sections.forEach((section) => section.classList.remove('active'));

            // Adiciona a classe 'active' à seção clicada
            document
                .getElementById(`${targetSection}Section`)
                .classList.add('active');

            // Carrega o conteúdo da seção clicada
            if (targetSection === 'feedback') {
                loadFeedback();
            } else if (targetSection === 'permissions') {
                loadPermissions();
            } else if (targetSection === 'requests') {
                loadRequests();
            }
        });
    });

    // Define a seção inicial como ativa
    document.getElementById('usersSection').classList.add('active');
});

document.getElementById('userSearch').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#usersTable tbody tr');

    rows.forEach((row) => {
        const name = row.querySelector('td').textContent.toLowerCase();
        row.style.display = name.includes(searchTerm) ? '' : 'none';
    });
});

const user = JSON.parse(localStorage.getItem('currentUser'));
if (user) {
    if (user.isAdmin) {
        const adminModal = document.getElementById('adminModal');
        if (adminModal) {
            // Verifica se o modal existe antes de acessá-lo
            adminModal.style.display = 'block';
        }
    }
    if (user.role === 'master') {
        // Permite ações exclusivas para o admin master
    }
}

// Função para registrar ações
function logAction(action, userAffected, userPerformed) {
    const actions = JSON.parse(localStorage.getItem('adminActions')) || [];
    actions.push({
        action,
        userAffected, // Usuário afetado pela ação
        userPerformed, // Usuário que realizou a ação
        timestamp: new Date().toLocaleString(),
    });
    localStorage.setItem('adminActions', JSON.stringify(actions));
}

function addUndoButton() {
    const undoButton = document.createElement('button');
    undoButton.textContent = 'Desfazer Última Ação';
    undoButton.onclick = undoLastAction;
    document.querySelector('#usersSection').appendChild(undoButton); // Adiciona apenas na aba de usuários
}

// Remove o botão antigo, se existir
const oldUndoButton = document.querySelector(
    '#usersSection button.undo-btn-old'
);
if (oldUndoButton) {
    oldUndoButton.remove();
}

// Adiciona o evento ao novo botão
document.getElementById('undoButton').addEventListener('click', undoLastAction);

function undoLastAction() {
    const actions = JSON.parse(localStorage.getItem('adminActions')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Filtra as ações realizadas pelo usuário logado
    const userActions = actions.filter(
        (action) => action.userPerformed.email === currentUser.email
    );

    if (userActions.length > 0) {
        const lastAction = userActions[userActions.length - 1];

        if (lastAction.action === 'excluir usuário') {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(lastAction.userAffected);
            localStorage.setItem('users', JSON.stringify(users));

            // Remove a ação do histórico
            const updatedActions = actions.filter(
                (action) => action !== lastAction
            );
            localStorage.setItem(
                'adminActions',
                JSON.stringify(updatedActions)
            );

            loadUsers();
            alert('Última ação desfeita com sucesso!');
        }
    } else {
        alert('Nenhuma ação para desfazer.');
    }
}

// Chama a função para adicionar o botão
addUndoButton();

function undoDelete(email, timestamp) {
    const actions = JSON.parse(localStorage.getItem('adminActions')) || [];
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Encontra a ação de exclusão correspondente
    const deleteAction = actions.find(
        (action) =>
            action.action === 'excluir usuário' &&
            action.userAffected.email === email &&
            action.timestamp === timestamp
    );

    if (deleteAction) {
        // Adiciona o usuário excluído de volta
        users.push(deleteAction.userAffected);
        localStorage.setItem('users', JSON.stringify(users));

        // Remove a ação do histórico
        const updatedActions = actions.filter(
            (action) => action !== deleteAction
        );
        localStorage.setItem('adminActions', JSON.stringify(updatedActions));

        // Remove o botão de desfazer da interface
        const historyDiv = document.querySelector('.action-history');
        if (historyDiv) {
            const undoButton = historyDiv.querySelector('button');
            if (undoButton) {
                undoButton.remove();
            }
        }

        // Adiciona um novo histórico ao master notificando a ação de desfazer
        logAction('desfazer exclusão', deleteAction.userAffected, currentUser);

        // Recarrega a lista de usuários
        loadUsers();
        alert('Exclusão desfeita com sucesso!');
    } else {
        alert('Ação de exclusão não encontrada.');
    }
}

function loadRequests() {
    const requests = JSON.parse(localStorage.getItem('adminRequests')) || [];
    const requestsSection = document.getElementById('requestsList');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Limpa o conteúdo atual
    requestsSection.innerHTML = '';

    // Filtra as solicitações com base no papel do usuário logado
    const filteredRequests = requests.filter((request) => {
        if (currentUser.role === 'master') {
            return true; // Master vê todas as solicitações
        } else if (currentUser.role === 'moderator') {
            return request.requestedBy === currentUser.email; // Moderador vê apenas suas solicitações
        }
        return false;
    });

    // Exibe as solicitações
    requestsSection.innerHTML = filteredRequests
        .map(
            (request) => `
            <div class="request-item">
                <p><strong>Solicitante:</strong> ${request.requestedBy}</p>
                <p><strong>Usuário Afetado:</strong> ${
                    request.userAffected.email
                }</p>
                <p><strong>Motivo:</strong> ${request.reason}</p>
                <p><strong>Status:</strong> ${request.status || 'Pendente'}</p>
                ${
                    currentUser.role === 'master' &&
                    request.status === 'Pendente'
                        ? `<button onclick="approveRequest('${request.userAffected.email}', '${request.timestamp}')">Aprovar</button>
                           <button onclick="rejectRequest('${request.userAffected.email}', '${request.timestamp}')">Recusar</button>`
                        : ''
                }
            </div>
        `
        )
        .join('');
}

function submitRequest(userAffected, reason) {
    const requests = JSON.parse(localStorage.getItem('adminRequests')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const newRequest = {
        requestedBy: currentUser.email,
        userAffected,
        reason,
        timestamp: new Date().toLocaleString(),
        status: 'Pendente',
    };

    requests.push(newRequest);
    localStorage.setItem('adminRequests', JSON.stringify(requests));

    // Registra a ação
    logAction('solicitação de exclusão', userAffected, currentUser);

    loadRequests();
    alert('Solicitação enviada com sucesso!');
}

function approveRequest(email, timestamp) {
    const users = JSON.parse(localStorage.getItem('users')) || []; // Adiciona esta linha
    const requests = JSON.parse(localStorage.getItem('adminRequests')) || [];
    const request = requests.find(
        (req) => req.userAffected.email === email && req.timestamp === timestamp
    );

    if (request) {
        request.status = 'Aprovado';
        localStorage.setItem('adminRequests', JSON.stringify(requests));

        // Executa a exclusão
        const userIndex = users.findIndex((user) => user.email === email);
        if (userIndex !== -1) {
            users.splice(userIndex, 1); // Remove o usuário
            localStorage.setItem('users', JSON.stringify(users));
        }

        // Registra a ação
        logAction(
            'aprovar solicitação',
            request.userAffected,
            JSON.parse(localStorage.getItem('currentUser'))
        );

        loadUsers();
        loadRequests(); // Recarrega a lista de solicitações
        alert('Solicitação aprovada e usuário excluído!');
    }
}

function rejectRequest(email, timestamp) {
    const requests = JSON.parse(localStorage.getItem('adminRequests')) || [];
    const request = requests.find(
        (req) => req.userAffected.email === email && req.timestamp === timestamp
    );

    if (request) {
        request.status = 'Recusado';
        localStorage.setItem('adminRequests', JSON.stringify(requests));

        // Registra a ação
        logAction(
            'recusar solicitação',
            request.userAffected,
            JSON.parse(localStorage.getItem('currentUser'))
        );

        loadRequests();
        alert('Solicitação recusada!');
    }
}
