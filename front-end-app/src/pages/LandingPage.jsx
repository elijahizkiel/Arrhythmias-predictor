import Button from "../components/Button.jsx";
import Label from "../components/Label.jsx";
import Card from "../components/Card.jsx";
import assets from "../assets/imgs.js";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function LandingPage() {
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
  const contactsList = useRef(null);
  const landingPage = useRef(null);
  const navigate = useNavigate();
  return (
      <div style={{ paddingBottom: "20vh", marginBottom: "10vh" }} className="landing-page" ref={landingPage}>
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
              sendRequest={() => {
                navigate("/diagnose");
              }}
            />
            <Button
              text="Chat Service"
              classes="btn secondary"
              style={{ fontFamily: "serif", display: "inline-block" }}
              sendRequest={() => {
                navigate("/chat");
              }}
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
              sendRequest={()=>{
                contactsList.current.style.display = "block";
              }}
              text="Contact List"
            />
          </Card>
        </div>
        <ContactsList
          ref={contactsList}
          contacts={contacts}
          onClick={() => {
            landingPage.current.style.filter = "none";
            contactsList.current.style.display = "none";
          }}/>
    </div>
  );
}

export default LandingPage;

function ContactsList({ contacts, ref, onClick, style }) {
  return (
    <div id="contact-list" ref={ref} style={style} onClick={onClick}>
      <div className="modal-header">
        <h2 className="modal-title">Contacts </h2>
        <span className="btn close-modal-btn">X</span>
      </div>
      <div className="contacts">
        {contacts.map((contact) => {
          return (
            <div className="contact" key={contact.name}>
              <div className="contact-name">{contact.name}</div>
              <div className="contact-num">{contact.phone}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
