import { gadgets } from "./gadgets.js";

export function searchGadget(keyword) {
    return gadgets.filter(gadget =>
        gadget.name.toLowerCase().includes(
            keyword.toLowerCase()
        )
    );
}
