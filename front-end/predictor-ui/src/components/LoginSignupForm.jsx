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
  let [hasAccount, setHasAccount] = useState(true);
  let [userInfo, setUserInfo] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
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
            onInput={(firstName) => {
              setUserInfo((info) => {
                return { ...info, firstName: firstName };
              });
            }}
            val={userInfo.firstName}
          />
          <InputField
            type="text"
            classes="name input"
            id="last-name"
            label="Last Name"
            onInput={(lastName) => {
              setUserInfo((info) => {
                return { ...info, lastName: lastName };
              });
            }}
            val={userInfo.lastName}
          />
        </div>
      )}
      <InputField
        type="email"
        classes="email input"
        id="user-email"
        label={hasAccount ? "Email or Username" : "Email"}
        required={true}
        onInput={(email) => {
          setUserInfo((info) => {
            return { ...info, email: email };
          });
        }}
        val={userInfo.email}
      />
      {!hasAccount && (
        <InputField
          type="text"
          classes="username-field input"
          id="user-name"
          label="User Name"
          required={true}
          onInput={(userName) => {
            setUserInfo((info) => {
              return { ...info, userName: userName };
            });
          }}
          val={userInfo.userName}
        />
      )}
      <InputField
        type="password"
        classes="password input"
        id="user-password"
        label="Password"
        required={true}
        onInput={(password) => {
          setUserInfo((info) => {
            return { ...info, password: password };
          });
        }}
        val={userInfo.password}
      />
      <Button
        text={hasAccount ? "Login" : "Create Account"}
        classes="btn primary"
        style={{ margin: "2vh 1vh" }}
        sendRequest={
          hasAccount
            ? () => {
                if (userInfo.email === "" || userInfo.password === "") {
                  window.alert("please insert all indicated necessary fields");
                  return;
                }
                onLogin(userInfo.email, userInfo.password);
                onHome();
              }
            : () => {
                if (
                  userInfo.firstName === "" ||
                  userInfo.userName === "" ||
                  userInfo.email === "" ||
                  userInfo.password === ""
                ) {
                  window.alert("please insert all indicated necessary fields");
                  return;
                }
                return onCreateAccount(userInfo);
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
