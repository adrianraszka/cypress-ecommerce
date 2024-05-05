import { HeaderGetters, HeaderIconsGetters } from "../../CommonPageObjects/Header/Header.getters";
import { CartActions } from "../../PageObjects/Cart/Cart.actions";
import { CartAssertions } from "../../PageObjects/Cart/Cart.assertions";
import { CartGetters } from "../../PageObjects/Cart/Cart.getters";
import { LogInRegisterActions } from "../../PageObjects/LoginRegister/LoginAndRegister.actions";
import { LogInRegisterGetters } from "../../PageObjects/LoginRegister/LoginAndRegister.getters";
import { ShopGetters, ShopItemGetters } from "../../PageObjects/Shop/Shop.getters";


describe("Add items to cart", () => {
  beforeEach("Navigate to sign up page", () => {
    cy.session("qwe", () => {
      cy.visit("/my-account");
      LogInRegisterActions.fillLogInForm(Cypress.env("LOGIN"), Cypress.env("PASSWORD"));
      LogInRegisterGetters.getLogInButton().click();
      HeaderIconsGetters.getHomeIcon().click();
    });
  });

  it("Add items to the cart and verify if it correct.", () => {
    cy.visit("/");
    HeaderGetters.getShopButton().click();
    ShopGetters.getProductContainerByName("BBQ Kit").click();
    ShopItemGetters.getAddToCartButton().click();
    HeaderGetters.getShopButton().click();
    HeaderIconsGetters.getCartContentCount().should("contain.text", "1")
    ShopGetters.getProductContainerByName("Outdoor Oven").click();
    ShopItemGetters.getAddToCartButton().click();
    HeaderIconsGetters.getCartContentCount().should("contain.text", "2")
    HeaderIconsGetters.getCartIcon().click();

    CartAssertions.verifyCartProductData(0);
    CartAssertions.verifyCartProductData(1);
  });

  after("Remove all products from the chart", () => {
    cy.visit("/cart");
    CartActions.removeAllItemsFromCart();
    CartGetters.getReturnToShopButton().click();
    HeaderIconsGetters.getCartContentCount().should("not.exist");
    HeaderIconsGetters.getCartIcon().click();

    CartAssertions.verifyChartIsEmpty();
  })
});
