import { LogInRegisterGetters } from "./LoginAndRegister.getters";

export class LogInRegisterActions {
    public static fillLogInForm(login: string, password: string) {
        LogInRegisterGetters.getLogInUsernameInput().type(login);
        LogInRegisterGetters.getLogInPasswordInput().type(password);
    }
}