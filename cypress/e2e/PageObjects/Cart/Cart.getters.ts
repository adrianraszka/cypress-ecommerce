export class CartGetters {
    /**
     * @param index 0 based index of an item in the cart.
     */
    public static getCartProductNameLabel(index: number) {
        return cy.get("div.cart-column--product-name").eq(index).find("div.cart-column__value");
    }

    /**
    * @param index 0 based index of an item in the cart.
    */
    public static getCartProductPriceLabel(index: number) {
        return cy.get("div.cart-column--product-price").eq(index).find("span.woocommerce-Price-amount");
    }

    /**
     * @param index 0 based index of an item in the cart.
     */
    public static getCartProductQuantityLabel(index: number) {
        return cy.get("div.cart-column--product-quantity").eq(index).find("input[id*='quantity']");
    }

    /**
     * @param index 0 based index of an item in the cart.
     */
    public static getCartProductSubtotalLabel(index: number) {
        return cy.get("div.cart-column--product-subtotal").eq(index).find("span.woocommerce-Price-amount");
    }

    public static getRemoveProductButton() {
        return cy.get("div.product-remove a.remove");
    }

    public static getEmptyCartMessageLabel() {
        return cy.get("div.cart-empty.woocommerce-info");
    }

    public static getReturnToShopButton() {
        return cy.get("a.wc-backward");
    }
}