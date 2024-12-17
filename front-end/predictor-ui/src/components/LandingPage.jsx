import Button from './Button';
import Label from './Label.jsx';
import Card from './Card.jsx'
import './LandingPage.css';


function LandingPage({loginState}){
    return (
    <div style={{'paddingBottom':'20vh'}}>
    <header>
        <Label classes="logo" text="we care" />
        <Button 
            text={(loginState)?"LogOut":"Login/Signup"} 
            classes="login-signup btn"
        />
    </header>
    <div className='ellipse one'></div>
    <div className='ellipse two'></div>
    <div className='hero-section'>
        <div className='hero-texts'>
        <Label text="Welcome!" classes='hero-title'>
            <img className='hero-img' src={null} alt="a stethoscope" />
        </Label>
        <Label classes="hero-paragraph bold" 
            text='Stay on top of your health anytime, anywhere.' 
        />
        <Label 
            text='Smart health assistance: Accurate, reliable 
            diagnoses and real-time support whenever you need them.' 
            classes='hero-paragraph small' 
        />
        <Button text='Diagnose' classes='btn primary' />
        <Button text='Chat Service' classes='btn secondary' />
    </div>
        <img className='doctor' src='../assets/doctor-landing-page.jpg' alt='doctor waiting for patient with smile' />
    </div>
    <div className='services-list'>
        <Card 
            classes='service-card'
            title='Chatbot Service' 
            text='Better care starts here: Chat with us 
                for fast and reliable health guidance.' 
        />

        <Card 
            classes='service-card'
            title='Diagnosis Center' 
            text='Smart Health Assistance: Accurate, reliable 
                diagnoses whenever you need them' 
        />
        <Card 
            classes='service-card'>
                <Button classes='btn secondary '
                    text='Contact List' 
                />
        </Card>
    </div>
    </div>)
}

export default LandingPage;