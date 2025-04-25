import './contact-us-component.css'
import contactPhoto from "../../../../images/contact/contactPhoto.jpg"

export default function ContactUsComponent(){
    return(
      <>
        <div className="d-flex container-fluid w-100 h-100 mt-100 justify-content-center align-items-center contato-container flex-wrap flex-row">
          <div className="position-relative w-25 mb-4">
            <img className="w-auto img-fluid" src={contactPhoto} alt="Contato" />
          </div>

          <div className="d-flex flex-column h-50 justify-content-center align-items-center w-75">
            <div className="d-flex flex-column container-fluid align-items-center text-center">
              <h2 className="titulo-contato">Junte-se a nós, e garanta mais transparência e agilidade para os seus pacientes.</h2>

              <div className="d-flex flex-column rounded borda sombra h-auto w-100 w-md-50 gap-2 mt-4 p-3 align-items-center justify-content-center box-form">
                <input className="form-custom" placeholder="E-mail" type="text" />
                <input className="form-custom" placeholder="CPF/CNPJ" type="text" />
                <input className="form-custom" placeholder="Número de telefone" type="text" />
                <button className="btn-custom botao-suc txt-roxo-custom bg-white w-25"><span>Cadastre-se</span></button>
              </div>
            </div>

            <div className="d-flex flex-column justify-content-end mt-5 align-items-center text-center w-100">
              <h2 className="titulo-login">Já possui cadastro? Faça login e acesse o sistema!</h2>
              <button className="btn-custom botao-suc mt-2 w-25 w-md-25"><span>Fazer login!</span></button>
            </div>
          </div>
        </div>
      </>
    )
}