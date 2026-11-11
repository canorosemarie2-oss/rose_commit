import { gadgets } from "./gadgets.js";
import { addToCart } from "./addToCart.js";
import { displayCart } from "./displayCart.js";

export function displayGadgets() {
    let products = document.getElementById("products");

    products.innerHTML = "";

    gadgets.forEach(gadget => {
        products.innerHTML += `
            <div class="gadget">
                <h3>${gadget.name}</h3>
                <p>Price: ₱${gadget.price}</p>
                <button data-id="${gadget.id}">
                    Add to Cart
                </button>
            </div>
        `;
    });

    products.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            addToCart(Number(button.dataset.id));
            displayCart();
        });
    });
}
