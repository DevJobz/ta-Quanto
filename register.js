function showMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

// Função para validar o nome
function validateName() {
    const nameInput = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    if (nameInput.value.length < 10 && nameInput.value.trim() !== '') {
        nameError.textContent = 'O nome deve ter no mínimo 10 caracteres.';
        nameError.style.display = 'block';
        nameInput.style.borderColor = '#ff4444';
        return false;
    } else {
        nameError.style.display = 'none';
        nameInput.style.borderColor =
            nameInput.value.trim() === '' ? '#ccc' : '#00c851';
        return true;
    }
}

// Função para validar o e-mail
function validateEmail() {
    const emailInput = document.getElementById('registerEmail');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Formato de e-mail inválido.';
        emailError.style.display = 'block';
        emailInput.style.borderColor = '#ff4444';
        return false;
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((u) => u.email === emailInput.value);
        if (userExists) {
            emailError.textContent = 'Este e-mail já está cadastrado.';
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#ff4444';
            return false;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = '#00c851';
            return true;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const birthDateInput = document.getElementById('birthDate');

    // Adiciona o evento 'blur' para validar a data ao sair do campo
    birthDateInput.addEventListener('blur', validateBirthDate);
});

// Função para validar a data de nascimento
function validateBirthDate() {
    const birthDateInput = document.getElementById('birthDate');
    const birthDateError = document.getElementById('birthDateError');
    const selectedDate = new Date(birthDateInput.value);
    const currentDate = new Date();
    const minDate = new Date('1900-01-01');

    // Verifica se o campo de data está vazio ou incompleto
    if (!birthDateInput.value) {
        birthDateError.textContent =
            'Por favor, insira uma data completa (dia, mês e ano).';
        birthDateError.style.display = 'block';
        birthDateInput.style.borderColor = '#ff4444';
        return false;
    }

    // Verifica se a data é válida (entre 1900 e o ano atual)
    if (selectedDate < minDate || selectedDate > currentDate) {
        birthDateError.textContent =
            'Data de nascimento inválida. Use uma data entre 1900 e o ano atual.';
        birthDateError.style.display = 'block';
        birthDateInput.style.borderColor = '#ff4444';
        return false;
    } else {
        birthDateError.style.display = 'none';
        birthDateInput.style.borderColor = '#00c851';
        return true;
    }
}

function validateSelectFields() {
    let isValid = true;
    const selectFields = document.querySelectorAll('select:not(#role)'); // Ignora o campo de role
    selectFields.forEach((select) => {
        const errorElement = document.getElementById(`${select.id}Error`);
        if (select.value === '') {
            errorElement.textContent = 'Por favor, selecione uma opção.';
            errorElement.style.display = 'block';
            select.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            errorElement.style.display = 'none';
            select.style.borderColor = '#00c851';
        }
    });
    return isValid;
}

// Função para validar o CPF
function validateCPF() {
    const cpfInput = document.getElementById('cpf');
    const cpfError = document.getElementById('cpfError');
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (!cpfRegex.test(cpfInput.value)) {
        cpfError.textContent = 'CPF inválido. Use o formato 000.000.000-00.';
        cpfError.style.display = 'block';
        cpfInput.style.borderColor = '#ff4444';
        return false;
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((u) => u.cpf === cpfInput.value);
        if (userExists) {
            cpfError.textContent = 'Este CPF já está cadastrado.';
            cpfError.style.display = 'block';
            cpfInput.style.borderColor = '#ff4444';
            return false;
        } else {
            cpfError.style.display = 'none';
            cpfInput.style.borderColor = '#00c851';
            return true;
        }
    }
}

// Função para validar o CEP
function validateCEP() {
    const cepInput = document.getElementById('cep');
    const cepError = document.getElementById('cepError');
    const cepRegex = /^\d{2}\.\d{3}-\d{3}$/;

    if (!cepRegex.test(cepInput.value)) {
        cepError.textContent = 'CEP inválido. Use o formato 00.000-000.';
        cepError.style.display = 'block';
        cepInput.style.borderColor = '#ff4444';
        return false;
    } else {
        cepError.style.display = 'none';
        cepInput.style.borderColor = '#00c851';
        return true;
    }
}

// Função para validar o telefone celular
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;

    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent =
            'Telefone inválido. Use o formato (00) 00000-0000 ou (00) 0000-0000.';
        phoneError.style.display = 'block';
        phoneInput.style.borderColor = '#ff4444';
        return false;
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((u) => u.phone === phoneInput.value);
        if (userExists) {
            phoneError.textContent =
                'Este número de celular já está cadastrado.';
            phoneError.style.display = 'block';
            phoneInput.style.borderColor = '#ff4444';
            return false;
        } else {
            phoneError.style.display = 'none';
            phoneInput.style.borderColor = '#00c851';
            return true;
        }
    }
}

// Função para validar a confirmação de senha
function validatePassword() {
    const passwordInput = document.getElementById('registerPassword');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');

    if (passwordInput.value !== confirmPasswordInput.value) {
        passwordError.textContent = 'As senhas não coincidem.';
        passwordError.style.display = 'block';
        confirmPasswordInput.style.borderColor = '#ff4444';
        return false;
    } else {
        passwordError.style.display = 'none';
        confirmPasswordInput.style.borderColor = '#00c851';
        return true;
    }
}

// Adiciona eventos de validação ao sair do campo (blur)
document.getElementById('fullName').addEventListener('blur', validateName);
document
    .getElementById('registerEmail')
    .addEventListener('blur', validateEmail);
document.getElementById('cpf').addEventListener('blur', validateCPF);
document.getElementById('cep').addEventListener('blur', validateCEP);
document.getElementById('phone').addEventListener('blur', validatePhone);
document
    .getElementById('confirmPassword')
    .addEventListener('blur', validatePassword);

// Máscara para CPF
document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    e.target.value = value;
});

// Máscara para telefone celular e fixo
document.getElementById('phone').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

    // Aplica a máscara de acordo com o tamanho do número
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3'); // Formato para telefone fixo (00) 0000-0000
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3'); // Formato para celular (00) 00000-0000
    }
    e.target.value = value;
});

// Função para validar o telefone celular e fixo
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/; // Aceita 10 ou 11 dígitos

    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.textContent =
            'Telefone inválido. Use o formato (00) 0000-0000 ou (00) 00000-0000.';
        phoneError.style.display = 'block';
        phoneInput.style.borderColor = '#ff4444';
        return false;
    } else {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((u) => u.phone === phoneInput.value);
        if (userExists) {
            phoneError.textContent =
                'Este número de telefone já está cadastrado.';
            phoneError.style.display = 'block';
            phoneInput.style.borderColor = '#ff4444';
            return false;
        } else {
            phoneError.style.display = 'none';
            phoneInput.style.borderColor = '#00c851';
            return true;
        }
    }
}

// Máscara para CEP
document.getElementById('cep').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 8) value = value.slice(0, 8);
    value = value.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3');
    e.target.value = value;
});

// Validação do formulário ao enviar
document
    .getElementById('registerForm')
    .addEventListener('submit', function (e) {
        e.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isCPFValid = validateCPF();
        const isCEPValid = validateCEP();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();
        const isBirthDateValid = validateBirthDate();
        const isSelectFieldsValid = validateSelectFields();

        if (
            isNameValid &&
            isEmailValid &&
            isCPFValid &&
            isCEPValid &&
            isPhoneValid &&
            isPasswordValid &&
            isBirthDateValid &&
            isSelectFieldsValid
        ) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const newUser = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('registerEmail').value,
                cpf: document.getElementById('cpf').value,
                phone: document.getElementById('phone').value,
                birthDate: document.getElementById('birthDate').value,
                state: document.getElementById('state').value,
                city: document.getElementById('city').value,
                cep: document.getElementById('cep').value,
                gender: document.getElementById('gender').value,
                password: document.getElementById('registerPassword').value,
                authorized: false,
                isAdmin: false,
                role: 'user', // Define o papel padrão como 'user'
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));

            showMessage('Cadastro realizado com sucesso!', 'success');
            setTimeout(() => {
                window.location.href = 'login.html';
            }, 1500);
        } else {
            showMessage('Por favor, corrija os erros no formulário.', 'error');
        }
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
