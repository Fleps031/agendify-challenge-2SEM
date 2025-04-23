import './footer-component.css'

export default function FooterComponent(){
    return(
        <>
            <div className = 'd-flex mt-50 bg-black p-4'>
                <div className = 'd-flex flex-column container-fluid justify-content-center'>
                    <h1 className = 'text-white'>Agendify<span className = 'txt-roxo-custom'>.</span></h1>
                    <p className = 'text-white fonte-pequena'>Copyright 2025 © Agendify. All Rights Reserved.</p>
                </div>
                <div className = 'd-flex flex-column container-fluid justify-content-center align-items-end'>
                    <h5 className = 'text-white'>Entre em contato conosco!</h5>
                    <p className = 'text-white'>suporte-agendify@gmail.com</p>
                    <p className = 'text-white'>(11) 99 386-3819</p>
                </div>
            </div>
        </>
    )
}