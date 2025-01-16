import "./App.css";
import { useState } from "react";
import { LoginProvider } from "./LoginProvider";

import LandingPage from "./pages/LandingPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import ChatServicePage from "./pages/ChatServicePage";
import DiagnosePage from "./pages/DiagnosePage";


function App() {
  
  const tabs = Object.freeze({
    login: "Login",
    landing: "Landing",
    chat: "Chat",
    diagnose: "Diagnose",
  });
  
  let [tab, setTab] = useState(/*localStorage.getItem('tab')?localStorage.getItem('tab'):*/tabs.landing);
  

  return (
    <LoginProvider>
      {tab === tabs.landing ? (
        <LandingPage
          onLogin={() => {
            setTab(tabs.login);
            localStorage.setItem('tab',tabs.login);
          }}
          onDiagnose={() => {
            setTab(tabs.diagnose);
            localStorage.setItem('tab',tabs.diagnose);
          }}
          onChatService={() => {
            setTab(tabs.chat);
            localStorage.setItem('tab',tabs.chat);
          }}
          onContactList={()=><div>list of heart speciality clinics Contacts'</div>} 
        />
      ) : tab === tabs.login ? (
        <LoginSignupPage onHome={()=>{setTab(tabs.landing);localStorage.setItem('tab',tabs.landing);}} />
      ) : tab === tabs.chat ? (
        <ChatServicePage onHome={()=>{setTab(tabs.landing);localStorage.setItem('tab',tabs.landing);}} />
      ) : <DiagnosePage onHome={()=>{setTab(tabs.landing);localStorage.setItem('tab',tabs.landing);}} />}
    </LoginProvider>
  );
}

export default App;
