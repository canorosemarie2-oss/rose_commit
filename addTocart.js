import { cart } from "./cart.js";
import { gadgets } from "./gadgets.js";

export function addToCart(id) {
    let gadget = gadgets.find(item => item.id === id);

    let existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else if (gadget) {
        cart.push({ ...gadget, quantity: 1 });
    }
}
