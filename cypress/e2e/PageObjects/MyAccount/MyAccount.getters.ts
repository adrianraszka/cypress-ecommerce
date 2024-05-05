import { AccountData, MyAccountMenu } from "./MyAccount.enums";

export class MyAccountGetters {
    public static getOrdersButton() {
        return cy.contains("li.woocommerce-MyAccount-navigation-link--orders", MyAccountMenu.Orders);
    }

    public static getPreferencesButton() {
        return cy.contains("li.woocommerce-MyAccount-navigation-link--preferences", MyAccountMenu.Preferences);
    }

    public static getLogOutButton() {
        return cy.contains("li.woocommerce-MyAccount-navigation-link--customer-logout", MyAccountMenu.LogOut);
    }

    public static getAccountInfoLabel() {
        return cy.contains("h2", AccountData.AccountInfo);
    }
}