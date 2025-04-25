import './footer-component.css'

export default function FooterComponent(){
    return(
        <>
            <div className="d-flex mt-50 bg-black p-4 flex-wrap rodape-container">
      <div className="d-flex flex-column container-fluid justify-content-center text-start mb-3 mb-md-0">
        <h1 className="text-white rodape-logo">
          Agendify<span className="txt-roxo-custom">.</span>
        </h1>
        <p className="text-white fonte-pequena">Copyright 2025 © Agendify. All Rights Reserved.</p>
      </div>

      <div className="d-flex flex-column container-fluid justify-content-center align-items-md-end align-items-start text-start text-md-end">
        <h5 className="text-white">Entre em contato conosco!</h5>
        <p className="text-white mb-0">suporte-agendify@gmail.com</p>
        <p className="text-white">(11) 99 386-3819</p>
      </div>
    </div>
        </>
    )
}