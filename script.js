const products = [
    {
        id: 1,
        name: 'Arroz 5kg',
        supermarket: 'Fernandes',
        price: 18.0,
        category: 'Grãos',
        subCategory: 'Arroz',
        image: 'https://superprix.vteximg.com.br/arquivos/ids/174488/Arroz-Tio-Joao-Branco-5kg.png?v=636209530088030000',
    },
    {
        id: 2,
        name: 'Arroz 5kg',
        supermarket: 'Burgão',
        price: 18.5,
        category: 'Grãos',
        subCategory: 'Arroz',
        image: 'https://superprix.vteximg.com.br/arquivos/ids/174488/Arroz-Tio-Joao-Branco-5kg.png?v=636209530088030000',
    },
    {
        id: 3,
        name: 'Feijão 1kg',
        supermarket: 'Fernandes',
        price: 8.0,
        category: 'Grãos',
        subCategory: 'Feijão',
        image: 'https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896116900029/img_1200_1.png',
    },
    {
        id: 4,
        name: 'Feijão 1kg',
        supermarket: 'Burgão',
        price: 7.5,
        category: 'Grãos',
        subCategory: 'Feijão',
        image: 'https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896116900029/img_1200_1.png',
    },
    {
        id: 5,
        name: 'Óleo de Soja 1L',
        supermarket: 'Fernandes',
        price: 5.0,
        category: 'Óleos e Gorduras',
        subCategory: 'Óleo',
        image: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/62349dcd51561.png',
    },
    {
        id: 6,
        name: 'Óleo de Soja 1L',
        supermarket: 'Burgão',
        price: 4.8,
        category: 'Óleos e Gorduras',
        subCategory: 'Óleo',
        image: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/62349dcd51561.png',
    },
    {
        id: 7,
        name: 'Tomate 1kg',
        supermarket: 'Fernandes',
        price: 4.5,
        category: 'Verduras e Legumes',
        subCategory: 'Tomate',
        image: 'https://ibassets.com.br/ib.item.image.big/b-5f53e30322214af3b214b3f447f14834.png',
    },
    {
        id: 8,
        name: 'Tomate 1kg',
        supermarket: 'Burgão',
        price: 4.2,
        category: 'Verduras e Legumes',
        subCategory: 'Tomate',
        image: 'https://ibassets.com.br/ib.item.image.big/b-5f53e30322214af3b214b3f447f14834.png',
    },
    {
        id: 9,
        name: 'Leite 1L',
        supermarket: 'Fernandes',
        price: 3.6,
        category: 'Laticínios',
        subCategory: 'Leite',
        image: 'https://www.italac.com.br/wp-content/uploads/2018/11/Italac_imagens_1024x1024px_export_0020s_0004_AF-3D-ITALAC-LEITE-UHT-INTEGRAL-1L-EDGE-SIMPL.png',
    },
    {
        id: 10,
        name: 'Leite 1L',
        supermarket: 'Burgão',
        price: 3.5,
        category: 'Laticínios',
        subCategory: 'Leite',
        image: 'https://www.italac.com.br/wp-content/uploads/2018/11/Italac_imagens_1024x1024px_export_0020s_0004_AF-3D-ITALAC-LEITE-UHT-INTEGRAL-1L-EDGE-SIMPL.png',
    },
    {
        id: 11,
        name: 'Arroz 5kg',
        supermarket: 'Ana Mara',
        price: 17.8,
        category: 'Grãos',
        subCategory: 'Arroz',
        image: 'https://superprix.vteximg.com.br/arquivos/ids/174488/Arroz-Tio-Joao-Branco-5kg.png?v=636209530088030000',
    },
    {
        id: 12,
        name: 'Feijão 1kg',
        supermarket: 'Ana Mara',
        price: 7.8,
        category: 'Grãos',
        subCategory: 'Feijão',
        image: 'https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896116900029/img_1200_1.png',
    },
    {
        id: 13,
        name: 'Óleo de Soja 1L',
        supermarket: 'Ana Mara',
        price: 4.9,
        category: 'Óleos e Gorduras',
        subCategory: 'Óleo',
        image: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/62349dcd51561.png',
    },
    {
        id: 14,
        name: 'Tomate 1kg',
        supermarket: 'Ana Mara',
        price: 4.3,
        category: 'Verduras e Legumes',
        subCategory: 'Tomate',
        image: 'https://ibassets.com.br/ib.item.image.big/b-5f53e30322214af3b214b3f447f14834.png',
    },
    {
        id: 15,
        name: 'Leite 1L',
        supermarket: 'Ana Mara',
        price: 3.4,
        category: 'Laticínios',
        subCategory: 'Leite',
        image: 'https://www.italac.com.br/wp-content/uploads/2018/11/Italac_imagens_1024x1024px_export_0020s_0004_AF-3D-ITALAC-LEITE-UHT-INTEGRAL-1L-EDGE-SIMPL.png',
    },
    {
        id: 16,
        name: 'Arroz 5kg',
        supermarket: 'Cooperbarra',
        price: 18.2,
        category: 'Grãos',
        subCategory: 'Arroz',
        image: 'https://superprix.vteximg.com.br/arquivos/ids/174488/Arroz-Tio-Joao-Branco-5kg.png?v=636209530088030000',
    },
    {
        id: 17,
        name: 'Feijão 1kg',
        supermarket: 'Cooperbarra',
        price: 7.7,
        category: 'Grãos',
        subCategory: 'Feijão',
        image: 'https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896116900029/img_1200_1.png',
    },
    {
        id: 18,
        name: 'Óleo de Soja 1L',
        supermarket: 'Cooperbarra',
        price: 5.1,
        category: 'Óleos e Gorduras',
        subCategory: 'Óleo',
        image: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/62349dcd51561.png',
    },
    {
        id: 19,
        name: 'Tomate 1kg',
        supermarket: 'Cooperbarra',
        price: 4.4,
        category: 'Verduras e Legumes',
        subCategory: 'Tomate',
        image: 'https://ibassets.com.br/ib.item.image.big/b-5f53e30322214af3b214b3f447f14834.png',
    },
    {
        id: 20,
        name: 'Leite 1L',
        supermarket: 'Cooperbarra',
        price: 3.7,
        category: 'Laticínios',
        subCategory: 'Leite',
        image: 'https://www.italac.com.br/wp-content/uploads/2018/11/Italac_imagens_1024x1024px_export_0020s_0004_AF-3D-ITALAC-LEITE-UHT-INTEGRAL-1L-EDGE-SIMPL.png',
    },
    {
        id: 21,
        name: 'Arroz 5kg',
        supermarket: 'Jaú Serve',
        price: 17.9,
        category: 'Grãos',
        subCategory: 'Arroz',
        image: 'https://superprix.vteximg.com.br/arquivos/ids/174488/Arroz-Tio-Joao-Branco-5kg.png?v=636209530088030000',
    },
    {
        id: 22,
        name: 'Feijão 1kg',
        supermarket: 'Jaú Serve',
        price: 7.6,
        category: 'Grãos',
        subCategory: 'Feijão',
        image: 'https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896116900029/img_1200_1.png',
    },
    {
        id: 23,
        name: 'Óleo de Soja 1L',
        supermarket: 'Jaú Serve',
        price: 4.7,
        category: 'Óleos e Gorduras',
        subCategory: 'Óleo',
        image: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/62349dcd51561.png',
    },
    {
        id: 24,
        name: 'Tomate 1kg',
        supermarket: 'Jaú Serve',
        price: 4.1,
        category: 'Verduras e Legumes',
        subCategory: 'Tomate',
        image: 'https://ibassets.com.br/ib.item.image.big/b-5f53e30322214af3b214b3f447f14834.png',
    },
    {
        id: 25,
        name: 'Leite 1L',
        supermarket: 'Jaú Serve',
        price: 3.3,
        category: 'Laticínios',
        subCategory: 'Leite',
        image: 'https://www.italac.com.br/wp-content/uploads/2018/11/Italac_imagens_1024x1024px_export_0020s_0004_AF-3D-ITALAC-LEITE-UHT-INTEGRAL-1L-EDGE-SIMPL.png',
    },
    {
        id: 26,
        name: 'Arroz 5kg',
        supermarket: 'Veríssimo',
        price: 18.1,
        category: 'Grãos',
        subCategory: 'Arroz',
        image: 'https://superprix.vteximg.com.br/arquivos/ids/174488/Arroz-Tio-Joao-Branco-5kg.png?v=636209530088030000',
    },
    {
        id: 27,
        name: 'Feijão 1kg',
        supermarket: 'Veríssimo',
        price: 7.9,
        category: 'Grãos',
        subCategory: 'Feijão',
        image: 'https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/7896116900029/img_1200_1.png',
    },
    {
        id: 28,
        name: 'Óleo de Soja 1L',
        supermarket: 'Veríssimo',
        price: 5.2,
        category: 'Óleos e Gorduras',
        subCategory: 'Óleo',
        image: 'https://img.deliverydireto.com.br/unsafe/origxorig/https://duisktnou8b89.cloudfront.net/img/items/62349dcd51561.png',
    },
    {
        id: 29,
        name: 'Tomate 1kg',
        supermarket: 'Veríssimo',
        price: 4.6,
        category: 'Verduras e Legumes',
        subCategory: 'Tomate',
        image: 'https://ibassets.com.br/ib.item.image.big/b-5f53e30322214af3b214b3f447f14834.png',
    },
    {
        id: 30,
        name: 'Leite 1L',
        supermarket: 'Veríssimo',
        price: 3.8,
        category: 'Laticínios',
        subCategory: 'Leite',
        image: 'https://www.italac.com.br/wp-content/uploads/2018/11/Italac_imagens_1024x1024px_export_0020s_0004_AF-3D-ITALAC-LEITE-UHT-INTEGRAL-1L-EDGE-SIMPL.png',
    },
];

let selectedRankings = [];
let cartItems = [];
let couponData = null;
let isCouponGenerated = false;
let currentFilteredProducts = [];

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

// Histórico para desfazer/refazer
let history = [];
let historyIndex = -1;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${
        -index * slideWidth
    }px)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 10000);

document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const themeIcon = document.getElementById('themeIcon');
    themeIcon.textContent = document.body.classList.contains('dark-mode')
        ? '☀️'
        : '🌙';
});

function displayProducts(filteredProducts) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    const productsByCategory = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    for (const category in productsByCategory) {
        const categorySection = document.createElement('div');
        categorySection.className = 'category-section';

        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = category;
        categoryTitle.setAttribute('data-category', category);
        categorySection.appendChild(categoryTitle);

        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'items-container';

        productsByCategory[category].forEach((product) => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';

            const isInCart = cartItems.some((item) => item.id === product.id);

            itemCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p>${product.supermarket}</p>
                <p>R$ ${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})" class="${
                isInCart ? 'added' : ''
            }">
                    <span>Adicionar</span>
                </button>
            `;

            itemsContainer.appendChild(itemCard);
        });

        categorySection.appendChild(itemsContainer);
        resultsContainer.appendChild(categorySection);
    }
}

function filterProducts(category = 'Todos', subCategory = null) {
    currentFilteredProducts =
        category === 'Todos'
            ? products
            : products.filter(
                  (product) =>
                      product.category === category &&
                      (subCategory ? product.subCategory === subCategory : true)
              );
    displayProducts(currentFilteredProducts);
}

function displaySubCategories(category) {
    const subCategories = [
        ...new Set(
            products
                .filter((product) => product.category === category)
                .map((product) => product.subCategory)
        ),
    ];

    const categoryButtons = document.querySelector('.category-buttons');
    categoryButtons.innerHTML = '';

    subCategories.forEach((subCategory) => {
        const button = document.createElement('button');
        button.textContent = subCategory;
        button.onclick = () => filterProducts(category, subCategory);
        categoryButtons.appendChild(button);
    });

    const backButton = document.createElement('button');
    backButton.textContent = 'Voltar';
    backButton.onclick = displayMainCategories;
    categoryButtons.appendChild(backButton);

    filterProducts(category);
}

function displayMainCategories() {
    const categoryButtons = document.querySelector('.category-buttons');
    categoryButtons.innerHTML = `
        <button onclick="displaySubCategories('Grãos')">Grãos</button>
        <button onclick="displaySubCategories('Óleos e Gorduras')">Óleos e Gorduras</button>
        <button onclick="displaySubCategories('Verduras e Legumes')">Verduras e Legumes</button>
        <button onclick="displaySubCategories('Laticínios')">Laticínios</button>
        <button onclick="filterProducts('Todos')">Todos</button>
    `;
    filterProducts('Todos');
}

function searchProduct() {
    const searchTerm = document
        .getElementById('searchInput')
        .value.toLowerCase();
    currentFilteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(currentFilteredProducts);
}

function sortProducts(sortType) {
    let sortedProducts = [...currentFilteredProducts];

    switch (sortType) {
        case 'priceAsc':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'priceDesc':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'nameAsc':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'nameDesc':
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            break;
    }

    displayProducts(sortedProducts);
}

function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    saveHistory();

    const addButton = document.querySelector(
        `.item-card button[onclick="addToCart(${productId})"]`
    );
    if (addButton) {
        addButton.classList.add('added', 'bounce');
        setTimeout(() => addButton.classList.remove('bounce'), 500);
    }

    const comparisonSection = document.querySelector('.comparison');
    comparisonSection.classList.remove('hidden');

    updateCartAndComparison();
    if (isCouponGenerated) {
        updateCouponDisplay();
    }
}

function removeFromCart(productId, event) {
    if (event) {
        event.preventDefault();
    }

    const scrollPosition = window.scrollY;

    const itemIndex = cartItems.findIndex((item) => item.id === productId);
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
    }

    saveHistory();

    updateCartAndComparison();

    window.scrollTo(0, scrollPosition);

    if (isCouponGenerated) {
        updateCouponDisplay();
    }

    const addButton = document.querySelector(
        `.item-card button[onclick="addToCart(${productId})"]`
    );
    if (addButton) {
        addButton.classList.remove('added');
    }
}

function updateCartAndComparison() {
    const comparisonResults = document.getElementById('comparisonResults');
    const comparisonSection = document.querySelector('.comparison');

    const scrollPosition = window.scrollY;
    comparisonResults.innerHTML = '';

    if (cartItems.length === 0) {
        comparisonSection.classList.add('hidden');
        return;
    }

    cartItems.sort((a, b) => a.name.localeCompare(b.name));

    const marketsInCart = [
        ...new Set(cartItems.map((item) => item.supermarket)),
    ];

    let tableHTML = `
        <table class="comparison">
            <thead>
                <tr>
                    <th>Produto</th>
    `;

    marketsInCart.forEach((market) => {
        tableHTML += `<th data-market="${market}">${market}</th>`;
    });

    tableHTML += '</tr></thead><tbody>';

    const uniqueItems = [...new Set(cartItems.map((item) => item.name))];
    uniqueItems.forEach((itemName) => {
        tableHTML += '<tr><td>' + itemName + '</td>';

        marketsInCart.forEach((market) => {
            const item = cartItems.find(
                (cartItem) =>
                    cartItem.name === itemName &&
                    cartItem.supermarket === market
            );
            if (item) {
                tableHTML += `
                    <td data-market="${market}">
                        <div class="market-item">
                            <div style="display: flex; gap: 5px;">
                                <input type="text" value="${
                                    item.quantity
                                }" min="1" onchange="editQuantity(${
                    item.id
                }, this.value)" class="quantity-input">
                                <button class="remove-btn" onclick="removeFromCart(${
                                    item.id
                                }, event)">×</button>
                            </div>
                            <span>R$ ${item.price.toFixed(2)} (un)</span>
                        </div>
                    </td>
                `;
            } else {
                tableHTML += '<td>-</td>';
            }
        });

        tableHTML += '</tr>';
    });

    tableHTML += '<tr><td><strong>Total</strong></td>';
    marketsInCart.forEach((market) => {
        const total = cartItems
            .filter((item) => item.supermarket === market)
            .reduce((sum, item) => sum + item.price * item.quantity, 0);
        tableHTML += `<td><strong>R$ ${total.toFixed(2)}</strong></td>`;
    });
    tableHTML += '<td></td></tr>';

    tableHTML += '</tbody></table>';
    comparisonResults.innerHTML = tableHTML;

    window.scrollTo(0, scrollPosition);
}

function generateCoupon() {
    if (cartItems.length === 0) {
        alert('Adicione itens ao carrinho antes de gerar um cupom.');
        const couponDisplay = document.getElementById('couponDisplay');
        couponDisplay.innerHTML = '';
        couponData = null;
        isCouponGenerated = false;
        return;
    }

    isCouponGenerated = true;
    updateCouponDisplay();
}

function updateCouponDisplay() {
    if (cartItems.length === 0) {
        const couponDisplay = document.getElementById('couponDisplay');
        couponDisplay.innerHTML = '';
        couponData = null;
        isCouponGenerated = false;
        return;
    }

    const itemsMap = new Map();

    cartItems.forEach((item) => {
        if (!itemsMap.has(item.name)) {
            itemsMap.set(item.name, { ...item });
        } else {
            const existingItem = itemsMap.get(item.name);
            if (item.price < existingItem.price) {
                itemsMap.set(item.name, { ...item });
            }
        }
    });

    couponData = {
        items: Array.from(itemsMap.values()),
        total: Array.from(itemsMap.values()).reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        ),
    };

    let couponContent = `
        <h3>Cupom de Compras</h3>
        <p>Aqui está a lista de compras com os melhores preços:</p>
        <table>
            <thead>
                <tr>
                    <th>Produto</th>
                    <th>Supermercado</th>
                    <th>Preço Unitário</th>
                    <th>Und.</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
    `;

    couponData.items.forEach((item) => {
        const total = item.price * item.quantity;
        couponContent += `
            <tr>
                <td>${item.name}</td>
                <td data-market="${item.supermarket}">${item.supermarket}</td>
                <td>R$ ${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>R$ ${total.toFixed(2)}</td>
            </tr>
        `;
    });

    couponContent += `
            </tbody>
        </table>
        <p><strong>Total a ser gasto: R$ ${couponData.total.toFixed(
            2
        )}</strong></p>
        <p>Orientamos comprar cada item no supermercado indicado para economizar!</p>
    `;

    const couponDisplay = document.getElementById('couponDisplay');
    couponDisplay.innerHTML = couponContent;

    couponDisplay.innerHTML += `
        <button onclick="downloadCoupon()" class="download-coupon">
            Baixar Cupom
        </button>
    `;
}

function downloadCoupon() {
    if (!couponData || couponData.items.length === 0) {
        alert('Gere um cupom antes de baixar.');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Cupom de Compras - SuperSaver', 10, 15);

    doc.setFontSize(12);
    doc.text('Lista de compras com os melhores preços:', 10, 25);

    const headers = [
        ['Produto', 'Supermercado', 'Preço Unitário', 'Und.', 'Total'],
    ];

    const data = couponData.items.map((item) => [
        item.name,
        item.supermarket,
        `R$ ${item.price.toFixed(2)}`,
        item.quantity,
        `R$ ${(item.price * item.quantity).toFixed(2)}`,
    ]);

    doc.autoTable({
        startY: 30,
        head: headers,
        body: data,
        theme: 'grid',
        styles: { fontSize: 10 },
        headStyles: { fillColor: [76, 175, 80] },
    });

    const finalY = doc.lastAutoTable.finalY + 10;
    doc.setFontSize(12);
    doc.text(
        `Total a ser gasto: R$ ${couponData.total.toFixed(2)}`,
        10,
        finalY
    );
    doc.text(
        'Orientamos comprar cada item no supermercado indicado para economizar!',
        10,
        finalY + 10
    );

    doc.save('cupom_supersaver.pdf');
}

// Funções para Desfazer, Refazer e Zerar Carrinho
function saveHistory() {
    history = history.slice(0, historyIndex + 1);
    history.push([...cartItems]);
    historyIndex++;
}

function undoAction() {
    if (historyIndex > 0) {
        historyIndex--;
        cartItems = [...history[historyIndex]];
        updateCartAndComparison();
        updateAddButtons();
        updateCouponDisplay();
    } else if (historyIndex === 0) {
        cartItems = [];
        historyIndex = -1;
        updateCartAndComparison();
        updateAddButtons();
        updateCouponDisplay();
    }
}

function redoAction() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        cartItems = [...history[historyIndex]];
        updateCartAndComparison();
        updateAddButtons();
        updateCouponDisplay();
    }
}

function clearCart() {
    cartItems = [];
    history = [];
    historyIndex = -1;
    updateCartAndComparison();
    updateAddButtons();
    updateCouponDisplay();
}

function updateAddButtons() {
    const addButtons = document.querySelectorAll('.item-card button');
    addButtons.forEach((button) => {
        const productId = button.getAttribute('onclick').match(/\d+/)[0];
        const isInCart = cartItems.some(
            (item) => item.id === parseInt(productId, 10)
        );
        button.classList.toggle('added', isInCart);
    });
}

window.onload = function () {
    displayMainCategories();
    currentFilteredProducts = products;
};

// Funções para o Modal de Feedback
const feedbackModal = document.getElementById('feedbackModal');
const feedbackButton = document.getElementById('feedbackButton');
const closeModal = document.querySelector('.close');

// Abrir o modal
feedbackButton.addEventListener('click', () => {
    feedbackModal.style.display = 'block';
    feedbackModal.classList.add('open');
});

// Fechar o modal
closeModal.addEventListener('click', () => {
    feedbackModal.classList.remove('open');
    setTimeout(() => {
        feedbackModal.style.display = 'none';
    }, 300);
});

// Fechar o modal ao clicar fora dele
window.addEventListener('click', (event) => {
    if (event.target === feedbackModal) {
        feedbackModal.classList.remove('open');
        setTimeout(() => {
            feedbackModal.style.display = 'none';
        }, 300);
    }
});

// Enviar feedback (simulação)
document.getElementById('feedbackForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const feedbackType = document.getElementById('feedbackType').value;
    const message = document.getElementById('message').value;

    console.log('Feedback enviado:', { name, email, feedbackType, message });

    feedbackModal.classList.remove('open');
    setTimeout(() => {
        feedbackModal.style.display = 'none';
    }, 300);

    document.getElementById('feedbackForm').reset();

    alert('Obrigado pelo seu feedback!');
});

function editQuantity(productId, newQuantity) {
    const item = cartItems.find((item) => item.id === parseInt(productId, 10));
    if (item) {
        item.quantity = parseInt(newQuantity, 10);
        saveHistory();
        updateCartAndComparison();
        if (isCouponGenerated) {
            updateCouponDisplay();
        }
    }
}
