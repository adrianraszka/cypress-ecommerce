import { MyAccountGetters } from "./MyAccount.getters";

export class MyAccountAssertions {
    public static isAccountInfoEmailCorrect(email: string) {
        MyAccountGetters.getAccountInfoLabel().siblings().contains("p", email);
    }

    public static isMyAccountMenuVisible() { 
        MyAccountGetters.getOrdersButton().should("be.visible");
        MyAccountGetters.getPreferencesButton().should("be.visible");
        MyAccountGetters.getLogOutButton().should("be.visible");
    }
}