import "./App.css";
import { useContext, useState } from "react";
import { LoginContext } from "./LoginProvider";

import LandingPage from "./pages/LandingPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import ChatServicePage from "./pages/ChatServicePage";
import DiagnosePage from "./pages/DiagnosePage";
import Label from "./components/Label";
import UserAvatar from "./components/UserAvatar";
import Button from "./components/Button";

function App() {
  let { loginState, user, logout } = useContext(LoginContext);
  
  const tabs = Object.freeze({
    login: "Login",
    landing: "Landing",
    chat: "Chat",
    diagnose: "Diagnose",
  });

  let [tab, setTab] = useState(
    /*localStorage.getItem('tab')?localStorage.getItem('tab'):*/ tabs.landing
  );
  const onLogin = () => {
    setTab(tabs.login);
    localStorage.setItem("tab", tabs.login);
  };

  return (
    <>
      <header className="header">
        <Label
          classes="logo"
          text="we care"
          onClick={(e) => {
            setTab(tabs.landing);
            localStorage.setItem("tab", tabs.landing);
          }}
        />
        <Label
          classes={tab === tabs.landing?"tab active":"tab"}
          text="Home"
          onClick={(e) => {
            setTab(tabs.landing);
            localStorage.setItem("tab", tabs.landing);
          }}
        />
        <Label
          classes={tab === tabs.chat?"tab active":"tab"}
          text="ChatBot"
          onClick={() => {
            setTab(tabs.chat);
            localStorage.setItem("tab", tabs.chat);
          }}
        />
        <Label
          text="Diagnose"
          classes={tab === tabs.diagnose?"tab active":"tab"}
          onClick={() => {
            setTab(tabs.diagnose);
            localStorage.setItem("tab", tabs.diagnose);
          }}
        />
         {loginState?
        <UserAvatar
          imgSource={
            user
              ? `https://avatar.iran.liara.run/username?username=${user.firstName}+${user.lastName}`
              : `https://avatar.iran.liara.run/username?username=user`
          }
        />
        :
          <Button
            sendRequest={loginState ? logout : onLogin}
            text={loginState ? "LogOut" : "Login/Signup"}
            classes="login-signup btn"
            style={{ display: "flex", fontFamily: "serif" }}
          >
            {loginState ? (
              <span className="material-symbols-outlined">logout</span>
            ) : null}
          </Button>
        }
      </header>
      <main>
        {tab === tabs.landing ? (
          <LandingPage
            onDiagnose={() => {
              setTab(tabs.diagnose);
              localStorage.setItem("tab", tabs.diagnose);
            }}
            onChatService={() => {
              setTab(tabs.chat);
              localStorage.setItem("tab", tabs.chat);
            }}
            onContactList={() => (
              <div>list of heart speciality clinics Contacts'</div>
            )}
          />
        ) : tab === tabs.login ? (
          <LoginSignupPage/>
        ) : tab === tabs.chat ? (
          <ChatServicePage/>
        ) : (
          <DiagnosePage onChatBot={()=>{
            setTab(tabs.chat);
          localStorage.setItem('tab',tabs.chat);}}/>
        )}
      </main>
      </>
  );
}

export default App;
