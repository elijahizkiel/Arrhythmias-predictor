import InputField from "./InputField";
import Button from "./Button";
import Label from "./Label";

function LoginSignupForm({
  hasAccount,
  onSignup,
  onCreatAccount,
  onContinueWithGoogle,
  onLogin,
}) {
  return (
    <div className="login-form">
      <Label classes='login-logo' text="we care" />
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
          id="username"
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
        sendRequest={hasAccount ? onLogin : onCreatAccount}
      />
      <Label
        text={hasAccount ? "Don't have account? " : "Alreadry have account? "}
      >
        <span
          style={{ color: " #0b9cbd", cursor: "pointer" }}
          onClick={hasAccount ? onSignup : onLogin}
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
