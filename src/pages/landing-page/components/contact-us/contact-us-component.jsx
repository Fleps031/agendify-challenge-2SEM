import './contact-us-component.css'
import contactPhoto from "../../../../images/contact/contactPhoto.jpg"
import { Link } from "react-router";

export default function ContactUsComponent(){
    return(
      <>
        <div id='contato' className="row text-start space-between mt-4 p-4 flex-wrap">
          <div className="d-flex col justify-content-center quebra-foto">
            <img className="largura-foto-contato" src={contactPhoto} alt="Contato" />
          </div>

          <div className="col quebra-form h-100" >
            <h2 className="row titulo-contato justify-content-center text-center mt-2">Junte-se a nós, e garanta mais transparência e agilidade para os seus pacientes.</h2>

            <div className='row altura-box largura-form mx-auto align-items-center justify-content-center'>
              <div className="d-flex flex-column borda sombra w-75 h-100 gap-4 mt-3 p-3 align-items-center justify-content-center">
                <input className="form-custom" placeholder="E-mail" type="text" />
                <input className="form-custom" placeholder="CPF/CNPJ" type="text" />
                <input className="form-custom" placeholder="Número de telefone" type="text" />
                <button className="btn-custom mt-2"><span>Cadastre-se</span></button>
              </div>
            </div>
            
            <div className = 'row'> 
              <div className="d-flex flex-column mt-5 justify-content-center w-75 mx-auto">
                <h2 className="titulo-login text-center">Já possui cadastro? Faça login e acesse o sistema!</h2>
                <Link role='button' className = 'text-decoration-none text-center align-self-center btn-custom' to="/sistema">Fazer login!</Link>
              </div>
            </div> 
          </div>
        </div>
      </>
    )
}