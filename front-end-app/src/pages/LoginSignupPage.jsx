import LoginSignupForm from "../components/LoginSignupForm";
import LoginPagePromoCard from "../components/LoginPagePromoCard";
import { LoginContext } from "../LoginProvider";
import { useContext } from "react";

function LoginPage({onHome}){
    let { login, createAccount} = useContext(LoginContext);
    return (
    <div className="login-page">
        <LoginPagePromoCard />
        <LoginSignupForm onHome={onHome} onLogin={async(email, password) => {
            let user = await login({email,password})
            if(user){
                onHome()
            }
            }} onCreateAccount={createAccount} /> 
    </div>)
}

export default LoginPage;