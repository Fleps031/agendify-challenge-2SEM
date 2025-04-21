import BenefitsComponent from './components/benefits/benefits-component'
import ContactUsComponent from './components/contact-us/contact-us-component'
import FooterComponent from './components/footer/footer-component'
import HeaderComponent from './components/header/header-component'
import HeroComponent from './components/hero/hero-component'
import ServicesComponent from './components/services/services-component'
import SystemComponent from './components/system/system-component'

import './landing-page.css'

export default function LandingPage(){
    return(
        <>
            <h1>Landing Page Works!</h1>

            <HeaderComponent></HeaderComponent>
            
            <main>
                <HeroComponent></HeroComponent>
                <ServicesComponent></ServicesComponent>
                <BenefitsComponent></BenefitsComponent>
                <SystemComponent></SystemComponent>
                <ContactUsComponent></ContactUsComponent>
                <FooterComponent></FooterComponent>
            </main>
        </>
    )
}