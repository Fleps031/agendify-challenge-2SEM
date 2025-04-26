import './footer-component.css'

export default function FooterComponent(){
    return(
      <>
        <div className="d-flex margem-rodape bg-black p-3 rodape rodape-container w-100">
          <div className="d-flex flex-column justify-content-center w-50">
            <h1 className="text-white rodape-logo">Agendify<span className="txt-roxo-custom">.</span></h1>
            <p className="text-white fonte-pequena">Copyright 2025 © Agendify. All Rights Reserved.</p>
          </div>

          <div className="d-flex flex-column justify-content-end largura-rodape">
            <h5 className="text-white">Entre em contato conosco!</h5>
            <p className="text-white mb-0">suporte-agendify@gmail.com</p>
            <p className="text-white">(11) 99 386-3819</p>
          </div>
        </div>
      </>
    )
}