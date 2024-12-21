import LoginSignupForm from "../components/LoginSignupForm";
import LoginPagePromoCard from "../components/LoginPagePromoCard";

function LoginPage({hasAccount}){
    return (
    <div className="login-page">
        <LoginPagePromoCard />
        <LoginSignupForm hasAccount={hasAccount} /> 
    </div>)
}

export default LoginPage;