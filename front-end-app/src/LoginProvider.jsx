import { useState, createContext } from "react";
// import axios from "axios";

const LoginContext = createContext(null);
function LoginProvider({ children }) {
  const isLoggedIn = localStorage.getItem("loginState");
  const activeUser = localStorage.getItem("user");

  let [loginState, setLoginState] = useState(isLoggedIn);
  let [user, setUser] = useState(activeUser);

  async function login(email, password) {
    const loginRequest = await fetch("/login",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
    }).then(response=>response.json()) 
    let newUser = await loginRequest.user
    console.log(newUser);
    
    if(newUser){
    setUser(newUser);
    setLoginState(true);
    }
    localStorage.setItem("loginState", loginState);    
    localStorage.setItem("user", JSON.stringify(newUser));
    return newUser;
  }
  function logout() {
    console.log("logged out");
    setLoginState(false);
    setUser(null);

    localStorage.removeItem("loginState");
    localStorage.removeItem("user");
  }
  async function createAccount(userInfo) {
    let { username, firstName, lastName, email, password } = userInfo;
    console.log(
      `Account created for {firstName: ${firstName}, lastName: ${lastName}, userName:${username}, email: ${email}, password:${password}}`
    );
    const request = await fetch("/create-account", {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
      "firstName":firstName,
      "lastName":lastName,
      "username":username,
      "email":email,
      "password":password,
    })
    });
    if (200 <= (await request).status && (await request).status < 300) {
      setUser(request.json().user)
      setLoginState(true)
    }
    return request.json().user;
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
