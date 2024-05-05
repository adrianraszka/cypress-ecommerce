
export class LogInRegisterGetters {
    public static getLogInUsernameInput() {
        return cy.get("input[id='username']");
    }

    public static getLogInPasswordInput() {
        return cy.get("input[id='password']");
    }

    public static getLogInButton() {
        return cy.get("button[name='login']");
    }

    public static getRegisterEmailInput() {
        return cy.get("input[id='reg_email']");
    }

    public static getRegisterPasswordInput() {
        return cy.get("input[id='reg_password']");
    }

    public static getCreateAccountButton() {
        return cy.get("button[name='register']");
    }

    public static getPasswordStrengthContainer() {
        return cy.get("div.woocommerce-password-strength");
    }
}