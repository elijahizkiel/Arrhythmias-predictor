import Button from "./components/Button.jsx";
import Label from "./components/Label.jsx";
import Card from "./components/Card.jsx";
import "./LandingPage.css";

function LandingPage({
  loginState,
  onLogInBtnCLick,
  onDiagnoseBtnClick,
  onChatServBtnClick,
  onContactListClick,
}) {
  return (
    <div style={{ paddingBottom: "20vh" }}>
      <header>
        <Label classes="logo" text="we care" />
        <Button
          sendRequest={onLogInBtnCLick}
          text={loginState ? "LogOut" : "Login/Signup"}
          classes="login-signup btn"
        />
      </header>
      <div className="ellipse one"></div>
      <div className="ellipse two"></div>
      <div className="hero-section">
        <div className="hero-texts">
          <Label text="Welcome!" classes="hero-title">
            <img className="hero-img" src={null} alt="a stethoscope" />
          </Label>
          <Label
            classes="hero-paragraph bold"
            text="Stay on top of your health anytime, anywhere."
          />
          <Label
            text="Smart health assistance: Accurate, reliable 
            diagnoses and real-time support whenever you need them."
            classes="hero-paragraph small"
          />
          <Button
            text="Diagnose"
            classes="btn primary"
            sendRequest={onDiagnoseBtnClick}
          />
          <Button
            text="Chat Service"
            classes="btn secondary"
            sendRequest={onChatServBtnClick}
          />
        </div>
        <img
          className="doctor"
          src="../assets/doctor-landing-page.jpg"
          alt="doctor waiting for patient with smile"
        />
      </div>
      <div className="services-list">
        <Card
          classes="service-card"
          title="Chatbot Service"
          text="Better care starts here: Chat with us 
                for fast and reliable health guidance."
        />

        <Card
          classes="service-card"
          title="Diagnosis Center"
          text="Smart Health Assistance: Accurate, reliable 
                diagnoses whenever you need them"
        />
        <Card classes="service-card">
          <Button 
          classes="btn secondary " 
          sendRequest={onContactListClick} 
          text="Contact List" 
          />
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
