//Button 1 (home page): show a random skincare tip 
function showTip() {
    var tips = [
        "Always apply sunscreen, even on cloudy days.",
        "Drink plenty of water to keep your skin hydrated.",
        "Remove your makeup before going to bed.",
        "Use a gentle cleanser twice a day.",
        "Moisturize right after washing your face."
    ];

    // pick a random number from 0 to 4 for tips
    var number = Math.floor(Math.random() * tips.length);

    document.getElementById("tip-text").textContent = "Tip: " + tips[number];
}

// Shopping cart (products page)
var cartNames = [];
var cartPrices = [];
var cartQuantities = [];

var DISCOUNT_LIMIT = 3000;   
var DISCOUNT_AMOUNT = 500; 

function addToCart(name, price) {
    var found = false;

    // check if the product is already in the cart
    for (var i = 0; i < cartNames.length; i++) {
        if (cartNames[i] == name) {
            cartQuantities[i] = cartQuantities[i] + 1;
            found = true;
        }
    }

    // if it is not in the cart, add it as a new product
    if (found == false) {
        cartNames.push(name);
        cartPrices.push(price);
        cartQuantities.push(1);
    }

    showCart();
}

// Show the products, total, discount and final amount
function showCart() {
    var itemCount = 0;
    var total = 0;
    var html = "<h3>Your Selected Products</h3>";

    // go through every product in the cart
    for (var i = 0; i < cartNames.length; i++) {
        var lineTotal = cartPrices[i] * cartQuantities[i];

        itemCount = itemCount + cartQuantities[i];
        total = total + lineTotal;

        html = html + "<p>" + cartNames[i] + " - Tk " + cartPrices[i] + " x " + cartQuantities[i] + " = Tk " + lineTotal + "</p>";
    }

    document.getElementById("cart-items").textContent = "Cart Items: " + itemCount;

    // if nothing is in the cart, show a message and stop
    if (itemCount == 0) {
        document.getElementById("cart-details").innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    var discount = 0;
    if (total >= DISCOUNT_LIMIT) {
        discount = DISCOUNT_AMOUNT;
    }

    var finalAmount = total - discount;

    html = html + "<hr>";
    html = html + "<p>Total Price: Tk " + total + "</p>";
    html = html + "<p>Discount: Tk " + discount + "</p>";
    html = html + "<h3>Final Payable Amount: Tk " + finalAmount + "</h3>";

    document.getElementById("cart-details").innerHTML = html;
}

function clearCart() {
    cartNames = [];
    cartPrices = [];
    cartQuantities = [];
    showCart();
}

// Contact page button
function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var result = document.getElementById("form-message");

    if (name == "" || email == "" || message == "") {
        result.textContent = "Please fill in all the fields.";
    } else {
        result.textContent = "Thank you, " + name + "! We received your message.";
    }
}