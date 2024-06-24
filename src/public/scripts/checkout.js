var product_cart = JSON.parse(localStorage.getItem("cart"));

var total_product = product_cart.length;

var sum = 0

for (var i = 0; i < product_cart.length; i++) {
    sum += product_cart[i].price
}

var items = document.getElementById("p_items")
items.textContent = total_product

let shipping = document.getElementById("p_shipping")

var shipping_cost = 10
shipping.textContent = '$' + shipping_cost

let total_tax = Math.floor(sum * 5 / 100)
var taxes = document.getElementById("p_taxes")
taxes.textContent = '$' + total_tax

let total_p_amount = Math.floor(shipping_cost + total_tax + sum)
var total_amount = document.getElementById("p_total")

total_amount.textContent = "$" + Math.floor(total_p_amount)

