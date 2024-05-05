import { CartGetters } from "./Cart.getters";

export class CartAssertions {
    public static verifyChartIsEmpty() {
        CartGetters.getEmptyCartMessageLabel().should("contain.text", "Your cart is currently empty.");
    }

    /**
    * @param index 0 based index of an item in the cart.
    */
    public static verifyCartProductData(index: number) {
        cy.fixture("cartProducts").then(cart => {
            CartGetters.getCartProductNameLabel(index).should("contain.text", cart.products[index].productName);
            CartGetters.getCartProductPriceLabel(index).should("contain.text", cart.products[index].price);
            CartGetters.getCartProductSubtotalLabel(index).should("contain.text", cart.products[index].subtotal);
            CartGetters.getCartProductQuantityLabel(index).should("have.attr", "value", cart.products[index].quantity);
        })
    }
}