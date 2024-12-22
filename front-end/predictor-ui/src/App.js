import './App.css';
// import LandingPage from './pages/LandingPage';
// import LoginSignupPage from './pages/LoginSignupPage';
import ChatServicePage from './pages/ChatServicePage';


function App() {
  // return <>{false?<LandingPage loginState={true} />:<LoginSignupPage hasAccount={false} />}
  // </>
  const messages =[
    {'role': 'user', 'part': 'Who the hell do you think you\'re?'},
    { 'role': 'model', 'part': 'I\'m an AI model here to help you regarding your health.'},
    {'role': 'user', 'part':'Hi, I’ve had a mild fever, headache, and fatigue for three days and I’m unsure if it’s serious. Can you tell me if I should see a doctor or try home remedies? If needed, how can I book a virtual consultation? Also, does my insurance cover online appointments, and how can I update my details? Lastly, what warning signs should I watch for that need urgent attention?'},
    {'role': 'model', 'part': 'Hello! I’m here to help. Based on your symptoms of mild fever, headache, and fatigue, it’s possible that you might have a common viral infection or something like the flu. It’s generally okay to rest, stay hydrated, and use over-the-counter medications like acetaminophen or ibuprofen for fever and headache. However, if your symptoms persist for more than 5 days, worsen, or you experience additional symptoms like difficulty breathing, severe pain, or confusion, you should seek medical attention immediately'},
    {'role': 'user', 'part':'Hi, I’ve had a mild fever, headache, and fatigue for three days and I’m unsure if it’s serious. Can you tell me if I should see a doctor or try home remedies? If needed, how can I book a virtual consultation? Also, does my insurance cover online appointments, and how can I update my details? Lastly, what warning signs should I watch for that need urgent attention?'},
    {'role': 'model', 'part': 'Hello! I’m here to help. Based on your symptoms of mild fever, headache, and fatigue, it’s possible that you might have a common viral infection or something like the flu. It’s generally okay to rest, stay hydrated, and use over-the-counter medications like acetaminophen or ibuprofen for fever and headache. However, if your symptoms persist for more than 5 days, worsen, or you experience additional symptoms like difficulty breathing, severe pain, or confusion, you should seek medical attention immediately'}
  ]
  return <>
    <ChatServicePage chats={messages} />  
  </>
}

export default App;
