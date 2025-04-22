import './services-component.css'
import card01 from "../../../../images/services/card01.png"
import card02 from "../../../../images/services/card02.png"
import card03 from "../../../../images/services/card03.png"

export default function ServicesComponent(){
    return(
        <>
            <div className = 'd-flex flex-column container-fluid mt-100'>
                <div className="d-flex flex-column align-items-center">
                    <h1>Nossos serviços</h1>
                    <div className = 'line-custom bg-roxo-custom'></div>
                </div>
                <div className = 'w-100'>
                    <div className = 'd-flex flex-column mt-5 gap-4 align-items-center'>
                        <div className = 'd-flex w-75 align-items-center justify-content-center gap-4 rounded borda scale-hover sombra'>
                            <img src={card01} alt="card01" className = 'w-150 m-4'/>
                            <h1 className = 'fs-5'>Sistema integrado com as suas consultas e agendamentos, sem necessidade de migração</h1>
                        </div>

                        <div className = 'd-flex w-75 align-items-center justify-content-center gap-4 rounded borda scale-hover sombra'>
                            <img src={card02} alt="card01" className = 'w-150 m-4'/>
                            <h1 className = 'fs-5'>Encaixe seus pacientes em filas de espera de consultas e exames de forma inteligente</h1>
                        </div>

                        <div className = 'd-flex w-75 align-items-center justify-content-center gap-4 rounded borda scale-hover sombra'>
                            <img src={card03} alt="card01" className = 'w-150 m-4'/>
                            <h1 className = 'fs-5'>Disponibilizamos API e plataforma web pra te impulsionar sem perda de tempo</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}