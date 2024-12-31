import LoginSignupForm from "../components/LoginSignupForm";
import LoginPagePromoCard from "../components/LoginPagePromoCard";
import { LoginContext } from "../LoginProvider";
import { useContext } from "react";

function LoginPage({onHome}){
    let { login, createAccount} = useContext(LoginContext);
    return (
    <div className="login-page">
        <LoginPagePromoCard />
        <LoginSignupForm onHome={onHome} onLogin={login} onCreteAccount={createAccount} /> 
    </div>)
}

export default LoginPage;