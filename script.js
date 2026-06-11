// GESTIONE CARRELLO
let cart = [];

// Toggle carrello
function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Aggiungi al carrello
function addToCart(name, price, image) {
    cart.push({
        id: Date.now(),
        name: name,
        price: price,
        image: image
    });
    
    updateCart();
    showNotification(`${name} aggiunto al carrello!`);
    
    // Apri il carrello automaticamente
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    sidebar.classList.add('active');
    overlay.classList.add('active');
}

// Aggiorna la visualizzazione del carrello
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.querySelector('.cart-count');
    const cartTotal = document.getElementById('cart-total');
    
    // Aggiorna contatore
    cartCount.textContent = cart.length;
    
    // Svuota il contenitore
    cartItems.innerHTML = '';
    
    // Aggiungi gli item
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">€${item.price.toFixed(2)}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">Rimuovi</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Aggiorna totale
    cartTotal.textContent = total.toFixed(2);
    
    // Salva in localStorage
    localStorage.setItem('fotonuoto-cart', JSON.stringify(cart));
}

// Rimuovi dal carrello
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    showNotification('Articolo rimosso dal carrello');
}

// Procedi al pagamento
function checkout() {
    if (cart.length === 0) {
        alert('Il carrello è vuoto!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const items = cart.map(item => `${item.name}: €${item.price.toFixed(2)}`).join('\n');
    
    alert(`
Riepilogo Ordine:
${items}

Totale: €${total.toFixed(2)}

Contattami per completare l'ordine:
📧 info@fotonuoto.it
📞 +39 333 123 4567

Grazie per l'acquisto!
    `);
    
    // Svuota il carrello
    cart = [];
    updateCart();
    toggleCart();
}

// Notifica
function showNotification(message) {
    // Crea elemento notifica
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #00a8e8 0%, #0066cc 100%);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Rimuovi dopo 3 secondi
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Invia messaggio contatti
function sendMessage(event) {
    event.preventDefault();
    
    const form = event.target;
    const name = form.children[0].value;
    const email = form.children[1].value;
    const message = form.children[2].value;
    
    // Simula invio (in realtà dovresti usare un backend)
    console.log('Messaggio inviato:', { name, email, message });
    
    alert(`Grazie ${name}! Il tuo messaggio è stato ricevuto.\nTi contatterò presto a ${email}`);
    
    form.reset();
}

// Carica il carrello dal localStorage all'avvio
window.addEventListener('load', () => {
    const savedCart = localStorage.getItem('fotonuoto-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCart();
    }
    
    // Aggiungi animazione CSS
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Smooth scroll per i link di navigazione
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});