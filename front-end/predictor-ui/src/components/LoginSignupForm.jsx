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
    <>
      {!hasAccount && (
        <div className="name-fields">
          <InputField
            type="text"
            classes="name input"
            id="first-name"
            label="First Name"
            required="true"
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
        label="Email"
        required="true"
      />
      {!hasAccount && (
        <InputField
          type="text"
          classes="username-field"
          id="username"
          label="User Name"
          required="true"
        />
      )}
      <InputField
        type="password"
        classes="password input"
        id="user-password"
        label="Password"
        required="true"
      />
      <Button
        text={hasAccount ? "Login" : "Create Account"}
        classes="btn primary"
        style={{ width: "100%", color: "#E2FAFF", backgroundColor: "#0b9cbd" }}
        sendRequest={hasAccount ? onLogin : onCreatAccount}
      />
      <Label text={hasAccount ? "Don't have account? " : "Have account? "}>
        <div
          style={{ color: "#0b9cbd", cursor: "pointer" }}
          onClick={hasAccount ? onSignup : onLogin}
        >
          {hasAccount ? "Signup" : "Login"}
        </div>
      </Label>
      <Button
        text="Continue with Google"
        classes="btn secondary"
        style={{ width: "100%", border: "2px solid #0b9cbd" }}
        sendRequest={onContinueWithGoogle}
      />
    </>
  );
}

export default LoginSignupForm;
