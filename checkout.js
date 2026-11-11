import { cart } from "./cart.js";
import { calculateTotal } from "./calculateTotal.js";
import { displayCart } from "./displayCart.js";

export function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let total = calculateTotal();

    alert("Thank you for shopping!\nTotal: ₱" + total);

    cart.length = 0;

    displayCart();
}
