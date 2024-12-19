import UnorderedList from './UnorderedList';
import Label from './Label';
import assets from '../assets/imgs';
function LoginPagePromoCard(){
    const items =[
        "Instant Health Answers at Your Fingertips!",
        "Accurate Diagnoses, Anytime, Anywhere!",
        "Personalized Health Solutions, One Chat Away!",
        "From Symptoms to Solution!",
        "Feel Better Faster with Our Online Diagnosis and Chat Service!"
    ]
return <>
<Label text="Let's start your journey to healthy life together!" classes='promo-card-label' />
<div classes='promo-img-list'>
    <img src={assets.doctorSignup} alt='doctor joyfully welcoming to the journey' />
    <UnorderedList listItems={items} classes='promo-list'/>
</div>
</>
}


export default LoginPagePromoCard;