import InputField from "./InputField";
import Button from "./Button";
import Label from "./Label";
import { useState } from "react";

function LoginSignupForm({
  onCreateAccount,
  onContinueWithGoogle,
  onLogin,
  onHome,
}) {
  let [hasAccount, setHasAccount] = useState(false);
  return (
    <div className="login-form">
      <Label classes="login logo" text="we care" onClick={onHome} />
      <h1>{hasAccount ? "Login" : "Create Account"}</h1>
      {!hasAccount && (
        <div className="name-fields">
          <InputField
            type="text"
            classes="name input"
            id="first-name"
            label="First Name"
            required={true}
          />
          <InputField
            type="text"
            classes="name input"
            id="last-name"
            label="Last Name"
          />
        </div>
      )}
      <InputField
        type="email"
        classes="email input"
        id="user-email"
        label={hasAccount ? "Email or Username" : "Email"}
        required={true}
      />
      {!hasAccount && (
        <InputField
          type="text"
          classes="username-field input"
          id="user-name"
          label="User Name"
          required={true}
        />
      )}
      <InputField
        type="password"
        classes="password input"
        id="user-password"
        label="Password"
        required={true}
      />
      <Button
        text={hasAccount ? "Login" : "Create Account"}
        classes="btn primary"
        style={{ margin: "2vh 1vh" }}
        sendRequest={
          hasAccount
            ? () => {
                const [email, password] = [
                  document.getElementById("first-name").value,
                  document.getElementById("last-name").value,
                  document.getElementById("user-name").value,
                  document.getElementById("user-email").value,
                  document.getElementById("user-password").value,
                ];
                if( email===''|| password===''){
                  window.alert('please insert all indicated necessary fileds')
                  return;}
                onLogin(email, password);
              }
            : () => {
                const [firstName, lastName, userName, email, password] = [
                  document.getElementById("first-name").value,
                  document.getElementById("last-name").value,
                  document.getElementById("user-name").value,
                  document.getElementById("user-email").value,
                  document.getElementById("user-password").value,
                ];
                if(firstName ===''|| userName===''|| email===''|| password===''){
                  window.alert('please insert all indicated necessary fileds')
                  return;
                }
                onCreateAccount(firstName, lastName, userName, email, password);
              }
        }
      />
      <Label
        text={hasAccount ? "Don't have account? " : "Alreadry have account? "}
      >
        <span
          style={{ color: " #0b9cbd", cursor: "pointer" }}
          onClick={() => {
            setHasAccount(!hasAccount);
          }}
        >
          {hasAccount ? "Signup" : "Login"}
        </span>
      </Label>
      <Button
        text="Continue with Google"
        classes="btn secondary"
        style={{
          margin: "1vh 1vh",
          color: "#AFAFAF",
          border: "1px solid #0b9cbd",
        }}
        sendRequest={onContinueWithGoogle}
      />
    </div>
  );
}

export default LoginSignupForm;
