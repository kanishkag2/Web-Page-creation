document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const cartSummaryElement = document.getElementById('cart-summary');
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (event) => {
            const productElement = event.target.closest('.product');
            const productId = productElement.getAttribute('data-id');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p').textContent.replace('$', ''));
            
            addToCart({ id: productId, name: productName, price: productPrice });
        });
    });

    document.getElementById('cart').addEventListener('click', (event) => {
        event.preventDefault();
        cartSummaryElement.classList.toggle('hidden');
    });

    checkoutButton.addEventListener('click', () => {
        alert('Checkout not implemented yet!');
    });

    function addToCart(product) {
        cart.push(product);
        updateCart();
    }

    function updateCart() {
        cartCountElement.textContent = cart.length;
        cartItemsElement.innerHTML = '';

        let totalPrice = 0;
        cart.forEach(product => {
            const itemElement = document.createElement('li');
            itemElement.textContent = `${product.name} - $${product.price.toFixed(2)}`;
            cartItemsElement.appendChild(itemElement);
            totalPrice += product.price;
        });

        totalPriceElement.textContent = totalPrice.toFixed(2);
    }
});
