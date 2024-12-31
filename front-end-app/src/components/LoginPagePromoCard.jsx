import UnorderedList from "./UnorderedList";
import Label from "./Label";
import assets from "../assets/imgs";
function LoginPagePromoCard() {
  const items = [
    "Instant Health Answers at Your Fingertips!",
    "Accurate Diagnoses, Anytime, Anywhere!",
    "Personalized Health Solutions, One Chat Away!",
    "From Symptoms to Solution!",
    "Feel Better Faster with Our Online Diagnosis and Chat Service!",
  ];
  return (
    <div className="login-page-promo">
    <div className="circle one"></div>
    <div className="login-page-promocard">
      <Label
        text="Let's start your journey to healthy life together!"
        classes="promo-card-label"
      />
      <div className="promo-img-list">
        <img
          src={assets.doctorSignup}
          className="doctor signup"
          alt="doctor joyfully welcoming to the journey"
        />
        <UnorderedList listItems={items} classes="promo-list" />
      </div>
    </div>
    <div className="circle two"></div>
    </div>
  );
}

export default LoginPagePromoCard;