import "./App.css";
import { useContext } from "react";
import { LoginContext } from "./LoginProvider";
import { useNavigate, Routes, Route, NavLink, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginSignupPage from "./pages/LoginSignupPage";
import ChatServicePage from "./pages/ChatServicePage";
import DiagnosePage from "./pages/DiagnosePage";
import UserAvatar from "./components/UserAvatar";
import Button from "./components/Button";

function App() {
  let { loginState, user, logout } = useContext(LoginContext);
  let navigate = useNavigate();
  return (
    <>
      <header className="header">
        <Link className="logo" to="/">
          We Care
        </Link>
        <NavLink className={"tab"} to="/">
          Home
        </NavLink>
        <NavLink className={"tab"} to="/chat">
          ChatBot
        </NavLink>
        <NavLink className={"tab"} to="/diagnose">
          Diagnose
        </NavLink>

        {loginState ? (
          <div style={{ display: "flex", direction: "row" }}>
            <UserAvatar
              imgSource={
                user
                  ? `https://avatar.iran.liara.run/username?username=${user.firstName}+${user.lastName}`
                  : `https://avatar.iran.liara.run/username?username=user`
              }
            />
            <Button
              sendRequest={() => {
                navigate("/");
                logout();
              }}
              text="LogOut"
              classes="login-signup btn"
              style={{ display: "flex", fontFamily: "serif" }}
            >
              <span className="material-symbols-outlined">logout</span>
            </Button>
          </div>
        ) : (
          <Button
            sendRequest={() => {
              navigate("/login");
            }}
            text="Login/Signup"
            classes="login-signup btn"
            style={{ display: "flex", fontFamily: "serif" }}
          />
        )}
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/chat" element={<ChatServicePage />} />
        <Route path="/diagnose" element={<DiagnosePage />} />
      </Routes>
    </>
  );
}

export default App;
