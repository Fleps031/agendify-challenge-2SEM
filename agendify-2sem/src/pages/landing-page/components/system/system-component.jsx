import './system-component.css'
import sistemaLogin from "../../../../images/system/pageLogin.jpg"
import sistemaSwagger from "../../../../images/system/pageSwagger.jpg"
import oracleLogo from "../../../../images/system/oraclecrmLogo.png"
import evertrackLogo from "../../../../images/system/evertrackLogo.png"
import rdstationcrmLogo from "../../../../images/system/rdstationcrmLogo.png"
import pagePacientes from "../../../../images/system/pagePacientes.jpg"

export default function SystemComponent(){
    return(
        <>
            <div className = 'd-flex flex-column container-fluid mt-5 ms-5'>
                <div className="d-flex flex-column align-items-start ">
                    <h2 className = 'd-flex'>Nosso sistema</h2>
                    <div className = 'line-custom-ver4 bg-roxo-custom'></div>
                </div>

                <div className = 'd-flex'>
                    <p className = 'fw-bold mt-4'>Te oferecemos uma plataforma web completa, para você gerenciar, cadastrar e medir a sua fila de pacientes</p>
                </div>

                <div className='d-flex container-fluid mt-5 p-0 justify-content-center'>
                    <div>
                        <h5>Login integrado com o seu <span className = 'txt-roxo-custom'>CRM</span></h5>
                        <img src={sistemaLogin} alt="" />
                    </div>
                    <div className='d-flex m-3 line-custom-ver5 bg-roxo-custom'><p></p></div>
                    <div>
                        <h5>API Restful documentada com <span className = 'txt-roxo-custom'>SWAGGER</span>, para acelerar a sua integração.</h5>
                        <img src={sistemaSwagger} alt="" />
                    </div>
                    
                </div>

                <div className='d-flex container-fluid p-4 gap-3 pb-2'>
                    <img className='img-parceiro' src={evertrackLogo} alt="logo evertrack" />
                    <img className='img-parceiro' src={oracleLogo} alt="logo oracle" />
                    <img className='img-parceiro' src={rdstationcrmLogo} alt="logo rdstationcrm" />
                </div>

                <div className='d-flex container-fluid ps-4 fw-light'>
                    <h6>Ou conecte-se aos CRMS mais utilizados no mercado, sem complicações.</h6>
                </div>

                <div className='d-flex container-fluid mt-5 p-0'>
                    <div className="d-flex flex-column align-items-start">
                        <h2 className = 'd-flex'>Nosso sistema</h2>
                        <div className = 'line-custom-ver4 bg-roxo-custom'></div>
                        <img className = 'w-75' src={pagePacientes} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}