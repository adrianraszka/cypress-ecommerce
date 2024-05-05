export class ShopGetters {
    public static getProductContainerByName(productName: string) {
        return cy.contains("div.product__title-and-price", productName)
    }
}

export class ShopItemGetters {
    public static getProductNameLabel() {
        return cy.get("h1.product_title")
    }

    public static getAddToCartButton() {
        return cy.get("button[name='add-to-cart']")
    }
}