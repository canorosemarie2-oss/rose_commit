import { cart } from "./cart.js";

export function removeFromCart(id) {
    let index = cart.findIndex(item => item.id === id);

    if (index !== -1) {
        cart.splice(index, 1);
    }
}
