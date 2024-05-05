import { MenuItems } from "./Header.enums";

export class HeaderGetters {
    public static getShopButton() {
        return cy.contains("ul#menu-main-menu-desktop li.menu-item", MenuItems.Shop);
    }

    public static getPizzaCalculatorButton() {
        return cy.contains("ul#menu-main-menu-desktop li.menu-item", MenuItems.PizzaCalculator);
    }

    public static getYeastCalculatorButton() {
        return cy.contains("ul#menu-main-menu-desktop li.menu-item", MenuItems.YeastCalculator);
    }

    public static getIngredientsButton() {
        return cy.contains("ul#menu-main-menu-desktop li.menu-item", MenuItems.Ingredients);
    }

    public static getHowTosButton() {
        return cy.contains("ul#menu-main-menu-desktop li.menu-item", MenuItems.HowTos);
    }

    public static getRecipesButton() {
        return cy.contains("ul#menu-main-menu-desktop li.menu-item", MenuItems.Recipes);
    }
    
    public static getAboutButton() {
        return cy.contains("ul#menu-main-menu-desktop li.menu-item", MenuItems.About);
    }
}

export class HeaderIconsGetters {
    public static getHomeIcon() {
        return cy.get("img[title='Stadler Made Home Icon']");
    }

    public static getCartContentCount() {
        return cy.get("div.cart-content-count");
    }

    public static getCartIcon() {
        return cy.get("div.header__icons__cart");
    }
}
