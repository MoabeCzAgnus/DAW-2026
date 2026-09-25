const categoryLinks = document.querySelectorAll('nav a');
const selectedCategory = document.getElementById('selected-category');
const articles = document.querySelectorAll('main section article');
const asideCart = document.querySelector('main aside');

let cart = [];


categoryLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

       
        const categoryName = link.textContent.trim();

        
        if (selectedCategory) {
            selectedCategory.textContent = categoryName;
        }

        
        categoryLinks.forEach(function(categoryLink) {  
            categoryLink.classList.remove('active');
        });

       
        link.classList.add('active');

        
        articles.forEach(function(article) {
            const articleCategory = article.querySelector('figcaption').textContent.trim();

            if (categoryName === 'Todos' || articleCategory.toLowerCase() === categoryName.toLowerCase()) {
                article.style.display = 'grid';
            } else {
                article.style.display = 'none';
            }
        });
    });
});


articles.forEach(function(article) {
    const button = article.querySelector('button');

    button.addEventListener('click', function() {
        const title = article.querySelector('h3').textContent.trim();
        const priceText = article.querySelector('p:last-of-type').textContent;
        const price = parseFloat(priceText.replace('R$', '').replace(',', '.').trim());

        
        const existingItem = cart.find(function(item) {
            return item.title === title;
        });

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                title: title,
                price: price,
                quantity: 1
            });
        }

        renderCart();
    });
});


function renderCart() {
    if (cart.length === 0) {
        asideCart.innerHTML = `
            <h2>Seu pedido</h2>
            <div class="cart-empty">
                <img src="./assets/img/cart.svg" alt="Carrinho Vazio" />
                <p>Seu carrinho está vazio</p>
                <p>Escolha um item do cardápio para começar</p>
            </div>
        `;
        return;
    }

    let total = 0;
    let itemsHTML = '';

    cart.forEach(function(item, index) {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        itemsHTML += `
            <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; border-bottom: 1px solid var(--border);">
                <div>
                    <h4 style="font-size: 0.875rem; font-weight: 600;">${item.title}</h4>
                    <p style="font-size: 0.75rem; color: var(--text-muted);">R$ ${item.price.toFixed(2).replace('.', ',')}</p>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <button onclick="changeQuantity(${index}, -1)" style="padding: 0.2rem 0.5rem; border: 1px solid var(--border); background: #fff; border-radius: 4px; cursor: pointer;">-</button>
                    <span style="font-size: 0.875rem; font-weight: 600;">${item.quantity}</span>
                    <button onclick="changeQuantity(${index}, 1)" style="padding: 0.2rem 0.5rem; border: 1px solid var(--border); background: #fff; border-radius: 4px; cursor: pointer;">+</button>
                </div>
            </div>
        `;
    });

    asideCart.innerHTML = `
        <h2>Seu pedido</h2>
        <div class="cart-items">
            ${itemsHTML}
        </div>
        <div style="padding: 1rem; border-top: 1px solid var(--border);">
            <div style="display: flex; justify-content: space-between; font-weight: 700; margin-bottom: 1rem;">
                <span>Total:</span>
                <span style="color: var(--primary);">R$ ${total.toFixed(2).replace('.', ',')}</span>
            </div>
            <button style="width: 100%; background: var(--primary); color: #fff; border: none; padding: 0.75rem; border-radius: 8px; font-weight: 700; cursor: pointer;">
                Finalizar Pedido
            </button>
        </div>
    `;
}
window.changeQuantity = function(index, change) {
    cart[index].quantity += change;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    renderCart();
};