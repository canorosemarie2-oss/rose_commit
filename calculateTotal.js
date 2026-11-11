import { cart } from "./cart.js";

export function calculateTotal() {
    return cart.reduce((total, gadget) => {
        return total + gadget.price * gadget.quantity;
    }, 0);
}
