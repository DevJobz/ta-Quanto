// Função para carregar e exibir os usuários
function loadUsers() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const tableBody = document.querySelector('#usersTable tbody');

    // Limpa o conteúdo atual da tabela
    tableBody.innerHTML = '';

    // Adiciona cada usuário na tabela
    users.forEach((user, index) => {
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
                <button class="delete" onclick="deleteUser(${index})">Excluir</button>
                <button class="toggle-auth" onclick="toggleAuthorization(${index})">
                    ${user.authorized ? 'Negar' : 'Autorizar'}
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Função para excluir um usuário
function deleteUser(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.splice(index, 1); // Remove o usuário do array
    localStorage.setItem('users', JSON.stringify(users)); // Atualiza o localStorage
    loadUsers(); // Recarrega a tabela
    alert('Usuário excluído com sucesso!');
}

// Função para alternar a autorização do usuário
function toggleAuthorization(index) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users[index].authorized = !users[index].authorized; // Alterna o status de autorização
    localStorage.setItem('users', JSON.stringify(users)); // Atualiza o localStorage
    loadUsers(); // Recarrega a tabela
    alert(
        `Usuário ${
            users[index].authorized ? 'autorizado' : 'não autorizado'
        } com sucesso!`
    );
}

// Carrega os usuários ao abrir a página
window.onload = loadUsers;
