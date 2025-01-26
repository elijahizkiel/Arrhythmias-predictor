import Button from "../components/Button.jsx";
import Label from "../components/Label.jsx";
import Card from "../components/Card.jsx";
import assets from "../assets/imgs.js";


function LandingPage({ onDiagnose, onChatService }) {
  let contacts = [
      { name: "LandMark Hospital", phone: "+251 115 525 463" },
      { name: "Addis Cardiac center", phone: "+251 116 634 740" },
      { name: "Addis Hiwot General Hospital", phone: "+251 116 180 449" },
      { name: "ICMC General hospital", phone: "+251 116 678 646" },
      {
        name: "Washington Medical Center Addis Ababa",
        phone: "+251 116 635 969",
      },
    ];

  const onContactList = () => {
    document.getElementsByClassName("landing-page")[0].style.filter = "blur(3px)";
    document.getElementById('contact-list').style.display = "block"; 
  };
  return (
    <div style={{ paddingBottom: "20vh", marginBottom: "10vh" }}>
      <div className="landing-page">
      <div className="ellipse one"></div>
      <div className="ellipse two"></div>
      <div className="hero-section">
        <div className="hero-texts">
          <Label text="Welcome!" classes="hero-title">
            <img
              className="hero-img"
              src={assets.stetescope}
              alt="a stethoscope"
            />
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
      <div
        id="contact-list" 
        onClick={() => {
          document.getElementById("contact-list").style.display = 'none';
          document.getElementsByClassName("landing-page")[0].style.filter = "none";
        }}
      >
        {contacts.map((contact) => {
          return (
            <div className="contact" key={contact.name}>
              <div>{contact.name}</div>
              <div>{contact.phone}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
