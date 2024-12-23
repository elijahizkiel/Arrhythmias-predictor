import { useState, createContext } from "react";
import axios from "axios";

const LoginContext = createContext(null);
function LoginProvider({ children }) {
  let [loginState, setLoginState] = useState(false);
  let [user, setUser] = useState(null);

  async function login(userName, password, email) {
    let response = await axios.post({
      url: "/login",
      data: { userName, password, email },
    });
    setUser(response.json());
    setLoginState(true);
  }
  function logout() {
   setLoginState(false)
   setUser(null)
  }
  async function createAccount(firstName, lastName, userName, email, password) {
    const request = axios.post("/create-account", {
      firstName,
      lastName,
      userName,
      email,
      password,
    });
    if (200 <= (await request).status && (await request).status < 300) {
    }
    return;
  }
  return (
    <LoginContext.Provider
      value={{ loginState, logout, login, createAccount, user }}
    >
      {children}
    </LoginContext.Provider>
  );
}
export { LoginProvider, LoginContext };
