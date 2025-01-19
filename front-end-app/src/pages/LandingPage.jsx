import Button from "../components/Button.jsx";
import Label from "../components/Label.jsx";
import Card from "../components/Card.jsx";
import assets from "../assets/imgs.js";

function LandingPage({
  onDiagnose,
  onChatService,
  onContactList,
}) {
  return (
    <div style={{ paddingBottom: "20vh", marginBottom: "10vh" }}>
      <div className="ellipse one"></div>
      <div className="ellipse two"></div>
      <div className="hero-section">
        <div className="hero-texts">
          <Label text="Welcome!" classes="hero-title">
            <img className="hero-img" src={assets.stetescope} alt="a stethoscope" />
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
            style={{ display: "inline-block", fontFamily: "serif" }}
            sendRequest={onDiagnose}
          />
          <Button
            text="Chat Service"
            classes="btn secondary"
            style={{ fontFamily: "serif", display: "inline-block" }}
            sendRequest={onChatService}
          />
        </div>
        <img
          className="doctor"
          src={assets.doctorLanding}
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
            sendRequest={onContactList}
            text="Contact List"
          />
        </Card>
      </div>
    </div>
  );
}

export default LandingPage;
