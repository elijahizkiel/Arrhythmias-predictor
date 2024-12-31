import { useState, createContext } from "react";
// import axios from "axios";

const LoginContext = createContext(null);
function LoginProvider({ children }) {
  const isLoggedIn = localStorage.getItem("loginState");
  const activeUser = localStorage.getItem("user");
  console.log(`~~~~~~~~~~user retrieved from LocalStorage:~~~~~~~~~~~ \n${activeUser}`)
  let [loginState, setLoginState] = useState(isLoggedIn ? true : false);
  let [user, setUser] = useState(JSON.parse(activeUser));

  async function login(email, password) {
    console.log(`request sent to login with ${email} ${password}`);
    setLoginState(true);
    let newUser = {
      userName: "elijahizkiel",
      firstName: "Elias",
      lastName: "Alota",
      chats: [
        {
          role: "user",
          part: "Hi, I’ve had a mild fever, headache, and fatigue for three days and I’m unsure if it’s serious. Can you tell me if I should see a doctor or try home remedies? If needed, how can I book a virtual consultation? Also, does my insurance cover online appointments, and how can I update my details? Lastly, what warning signs should I watch for that need urgent attention?",
        },
        {
          role: "model",
          part: "Hello! I’m here to help. Based on your symptoms of mild fever, headache, and fatigue, it’s possible that you might have a common viral infection or something like the flu. It’s generally okay to rest, stay hydrated, and use over-the-counter medications like acetaminophen or ibuprofen for fever and headache. However, if your symptoms persist for more than 5 days, worsen, or you experience additional symptoms like difficulty breathing, severe pain, or confusion, you should seek medical attention immediately",
        },
        {
          role: "user",
          part: "Hi, I’ve had a mild fever, headache, and fatigue for three days and I’m unsure if it’s serious. Can you tell me if I should see a doctor or try home remedies? If needed, how can I book a virtual consultation? Also, does my insurance cover online appointments, and how can I update my details? Lastly, what warning signs should I watch for that need urgent attention?",
        },
        {
          role: "model",
          parts:
            "I can certainly offer advice on preventing heart disease. It's a multifaceted approach, but focusing on these key areas can significantly reduce your risk: **Lifestyle Modifications:** These are the foundation of heart health. * **Healthy Diet:** Focus on a diet rich in fruits, vegetables, whole grains, lean proteins (fish, poultry, beans), and healthy fats (olive oil, avocados, nuts). Limit saturated and trans fats, processed foods, red meat, and added sugars. Portion control is also important. * **Regular Exercise:** Aim for at least 150 minutes of moderate-intensity aerobic exercise (brisk walking, cycling) or 75 minutes of vigorous-intensity exercise (running, swimming) per week, spread throughout the week. Also, include strength training exercises at least twice a week. * **Maintain a Healthy Weight:** Excess weight, especially around the abdomen, increases the strain on your heart. Losing even a small amount of weight can make a difference. * **Quit Smoking:** Smoking damages blood vessels and increases blood pressure, significantly raising your risk of heart disease. Quitting is one of the best things you can do for your heart health. There are resources available to help you quit. * **Limit Alcohol Consumption:** Excessive alcohol intake can contribute to high blood pressure, heart failure, and stroke. If you choose to drink, do so in moderation. Moderation is defined as up to one drink per day for women and up to two drinks per day for men. * **Manage Stress:** Chronic stress can contribute to high blood pressure and other heart-related problems. Find healthy ways to manage stress, such as exercise, yoga, meditation, or spending time in nature. Ensure you're getting enough sleep as well. **Medical Management:** Working with your doctor is crucial. * **Control High Blood Pressure:** High blood pressure is a major risk factor. Work with your doctor to monitor and manage it through lifestyle changes and, if necessary, medication. * **Manage High Cholesterol:** High cholesterol contributes to plaque buildup in your arteries. Your doctor can recommend lifestyle changes and, if needed, medications. * **Control Diabetes:** Diabetes significantly increases your risk. Careful management of blood sugar levels is essential. * **Regular Checkups:** Regular visits with your doctor are important for monitoring your heart health and identifying any potential problems early. **Other Important Factors:** * **Family History:** If you have a family history of heart disease, you're at higher risk and should be especially diligent about these measures. Talk to your doctor about any family history. * **Sleep:** Aim for 7-9 hours of quality sleep per night. Poor sleep is linked to increased risk factors for heart disease. I highly recommend discussing your individual risk factors and the best preventive strategies with your doctor. They can help you create a personalized plan to keep your heart healthy. Is there anything specific you'd like to discuss further, like your diet, exercise habits, or family history?",
        },
      ],
    };
    setUser(newUser);
    localStorage.setItem("loginState", loginState);
    console.log(
      `~~~~~~~~~~~user saved to local storage~~~~~~~~~~\n ${newUser}`
    );
    localStorage.setItem("user", JSON.stringify(newUser));
  }
  function logout() {
    console.log("logged out");
    setLoginState(false);
    setUser(null);

    localStorage.removeItem("loginState");
    localStorage.removeItem("user");
  }
  async function createAccount(userInfo) {
    let { userName, firstName, lastName, email, password } = userInfo;
    console.log(
      `Account created for {firstName: ${firstName}, lastName: ${lastName}, userName:${userName}, email: ${email}, password:${password}}`
    );
    // const request = axios.post("/create-account", {
    //   firstName,
    //   lastName,
    //   userName,
    //   email,
    //   password,
    // });
    // if (200 <= (await request).status && (await request).status < 300) {
    // }
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
