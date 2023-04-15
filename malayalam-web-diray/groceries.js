// Grocery
const uiElement = (product, quantity, price) => {
    let productList = document.querySelector(".product-list");
    let li = document.createElement("li");

    productList.appendChild(li);
    let itemList = `
        <ul>
            <li>${product}</li> <li>${quantity}</li> <li>${price}</li>
        </ul>
    `;
    li.innerHTML = itemList;
};

const grocerieProducts = (groceries) => {
    let total = 0;
    for (let i = 0; i < groceries.length; i++) {
        let { product, quantity, price } = groceries[i];
        total += quantity * price;
        uiElement(product, quantity, price);
    }
    let totalPrice = document.querySelector(".total .price");
    totalPrice.textContent = total;
};

const result = grocerieProducts([
    { product: "Milk", quantity: 1, price: 1.5 },
    { product: "Coffee", quantity: 2, price: 2.5 },
]);
