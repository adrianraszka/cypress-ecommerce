import { HeaderGetters } from "./Header.getters";

export class HeaderAssertions {
    public static isMainMenuVisible() {
        HeaderGetters.getShopButton().should("be.visible");
        HeaderGetters.getPizzaCalculatorButton().should("be.visible");
        HeaderGetters.getYeastCalculatorButton().should("be.visible");
        HeaderGetters.getIngredientsButton().should("be.visible");
        HeaderGetters.getHowTosButton().should("be.visible");
        HeaderGetters.getRecipesButton().should("be.visible");
        HeaderGetters.getAboutButton().should("be.visible");
    }
}