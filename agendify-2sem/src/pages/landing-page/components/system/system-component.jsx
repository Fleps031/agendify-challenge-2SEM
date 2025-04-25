import './system-component.css'
import sistemaLogin from "../../../../images/system/pageLogin.jpg"
import sistemaSwagger from "../../../../images/system/pageSwagger.jpg"
import oracleLogo from "../../../../images/system/oraclecrmLogo.png"
import evertrackLogo from "../../../../images/system/evertrackLogo.png"
import rdstationcrmLogo from "../../../../images/system/rdstationcrmLogo.png"
import pagePacientes from "../../../../images/system/pagePacientes.jpg"

export default function SystemComponent(){
    return (
        <div className="d-flex flex-column container-fluid mt-5 ms-5 sistema-container">
          <div className="d-flex flex-column align-items-start">
            <h2 className="titulo-secao">Nosso sistema</h2>
            <div className="line-custom-ver4 bg-roxo-custom"></div>
          </div>
    
          <div className="d-flex">
            <p className="fw-bold mt-4 texto-descricao">
              Te oferecemos uma plataforma web completa, para você gerenciar, cadastrar e medir a sua fila de pacientes
            </p>
          </div>
    
          <div className="d-flex container-fluid mt-5 p-0 justify-content-start flex-wrap sistema-bloco">
            <div className="d-flex w-100 w-md-50 h-50 flex-column largura-max mb-4">
              <h5>
                Login integrado com o seu <span className="txt-roxo-custom">CRM</span>
              </h5>
              <img src={sistemaLogin} alt="" className="img-fluid largura-img" />
            </div>
            <div className="d-none d-md-flex m-3 line-custom-ver5 bg-roxo-custom">
              <p></p>
            </div>
            <div className="d-flex w-100 w-md-50 h-50 flex-column largura-max mb-4">
              <h5>
                API Restful documentada com <span className="txt-roxo-custom">SWAGGER</span>, para acelerar a sua integração.
              </h5>
              <img src={sistemaSwagger} alt="" className="img-fluid w-75" />
            </div>
          </div>
    
          <div className="d-flex container-fluid p-4 gap-3 pb-2 flex-wrap justify-content-start align-items-center">
            <img className="img-parceiro" src={evertrackLogo} alt="logo evertrack" />
            <img className="img-parceiro" src={oracleLogo} alt="logo oracle" />
            <img className="img-parceiro" src={rdstationcrmLogo} alt="logo rdstationcrm" />
          </div>
    
          <div className="d-flex container-fluid ps-4 fw-light">
            <h6>Ou conecte-se aos CRMs mais utilizados no mercado, sem complicações.</h6>
          </div>
    
          <div className="d-flex container-fluid mt-5 p-0">
            <div className="d-flex flex-column align-items-start">
              <h2 className="titulo-secao">Nosso sistema</h2>
              <div className="line-custom-ver4 bg-roxo-custom"></div>
              <img className="w-75 img-fluid mt-3" src={pagePacientes} alt="" />
            </div>
          </div>
        </div>
      );
}