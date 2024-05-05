import { HeaderAssertions } from "../../CommonPageObjects/Header/Header.assertions";
import { LogInRegisterActions } from "../../PageObjects/LoginRegister/LoginAndRegister.actions";
import { LogInRegisterGetters } from "../../PageObjects/LoginRegister/LoginAndRegister.getters";
import { MyAccountAssertions } from "../../PageObjects/MyAccount/MyAccount.assertions";
import { MyAccountGetters } from "../../PageObjects/MyAccount/MyAccount.getters";

// const MAX_RANDOM_NUMBER = 10000;
// const RANDOM_EMAIL = `randomtestemail${Math.floor(Math.random() * MAX_RANDOM_NUMBER)}@testing.com`;
// const STRONG_PASSWORD = "&ZY(mu-gOjIlW=e";
const RANDOM_EMAIL = "randomtestemail782@testing.com";
const STRONG_PASSWORD = "&ZY(mu-gOjIlW=e";

describe("Create User", () => {
  before("Navigate to sign up page", () => {
    cy.visit("/my-account");
  });

  it("Create new user account and use its credentials to log in.", () => {
    // // Create new user account - commentent as it's real service and I don't want to create artificial user each time!
    // LogInRegisterGetters.getRegisterEmailInput().type(RANDOM_EMAIL);
    // LogInRegisterGetters.getRegisterPasswordInput().type(STRONG_PASSWORD);
    // LogInRegisterGetters.getPasswordStrengthContainer().should("have.text", "Strong");
    // LogInRegisterGetters.getCreateAccountButton().click();

    LogInRegisterActions.fillLogInForm(RANDOM_EMAIL, STRONG_PASSWORD);
    LogInRegisterGetters.getLogInButton().click();
    MyAccountGetters.getPreferencesButton().click();
    MyAccountAssertions.isMyAccountMenuVisible();
    MyAccountAssertions.isAccountInfoEmailCorrect(RANDOM_EMAIL);
    MyAccountGetters.getLogOutButton().click();

    LogInRegisterActions.fillLogInForm(RANDOM_EMAIL, STRONG_PASSWORD);
    LogInRegisterGetters.getLogInButton().click();
    MyAccountAssertions.isMyAccountMenuVisible();
    MyAccountGetters.getLogOutButton().click();

    HeaderAssertions.isMainMenuVisible();
  });
});
