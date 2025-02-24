document
    .getElementById('registerForm')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('registerEmail').value;
        const birthDate = document.getElementById('birthDate').value;
        const state = document.getElementById('state').value;
        const city = document.getElementById('city').value;
        const cep = document.getElementById('cep').value;
        const cpf = document.getElementById('cpf').value;
        const gender = document.getElementById('gender').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword =
            document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((u) => u.email === email);

        if (userExists) {
            alert('Este email já está cadastrado.');
            return;
        }

        const newUser = {
            fullName,
            email,
            birthDate,
            state,
            city,
            cep,
            cpf,
            gender,
            password,
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alert('Cadastro realizado com sucesso!');
        localStorage.setItem('isLoggedIn', 'true'); // Adiciona o indicador de login
        window.location.href = 'login.html';
    });

// Preenchimento dinâmico de estados e cidades
const states = {
    SP: ['São Paulo', 'Campinas', 'Santos'],
    RJ: ['Rio de Janeiro', 'Niterói', 'São Gonçalo'],
    MG: ['Belo Horizonte', 'Uberlândia', 'Contagem'],
};

const stateSelect = document.getElementById('state');
const citySelect = document.getElementById('city');

Object.keys(states).forEach((state) => {
    const option = document.createElement('option');
    option.value = state;
    option.textContent = state;
    stateSelect.appendChild(option);
});

stateSelect.addEventListener('change', function () {
    citySelect.innerHTML = '<option value="">Selecione a Cidade</option>';
    if (this.value) {
        states[this.value].forEach((city) => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
});
