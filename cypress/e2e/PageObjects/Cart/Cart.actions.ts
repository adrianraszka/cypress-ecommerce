import { CartGetters } from "./Cart.getters";

export class CartActions {
    /**
     * Elements are removed from the last as the list of elements is dynamically reduced.
     */
    public static removeAllItemsFromCart() {
        CartGetters.getRemoveProductButton().its("length").then(elementsQnt => {
            for (let i = elementsQnt; i > 0; i--) {
                CartGetters.getRemoveProductButton().eq(i - 1).click();
            }
        })
    }
}