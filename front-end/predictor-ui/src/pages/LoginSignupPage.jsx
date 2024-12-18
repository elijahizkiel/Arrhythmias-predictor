import LoginSignupForm from "../components/LoginSignupForm";

function LoginPage({hasAccount}){
    return (
    <>
       <LoginSignupForm hasAccount={false} /> 
    </>)
}

export default LoginPage;