import './hero-component.css'
import img01 from "../../../../images/carrossel/img01.jpg"
import img02 from "../../../../images/carrossel/img02.jpg"
import img03 from "../../../../images/carrossel/img03.jpg"

export default function HeroComponent(){
    return(
        <>
            <div className="d-flex flex-column p-0 w-100 mt-50 container-fluid">
                <div className="d-flex justify-content-center">
                  <h1 className = 'align-self-end pb-2 fw-bold'>Agendify</h1>
                  <h3 className = 'txt-roxo-custom ponto-grande'>.</h3>
                  <h3 className = 'align-self-end pb-2 ms-3'>Organize e facilite a rotina dos seus pacientes</h3>
                </div>

                <div className = 'line-custom bg-roxo-custom mx-auto'></div>

                <div className="d-flex justify-content-center mt-5">
                    <h3>Serviços de fila e agendamento pra encaixar seu paciente no <span className = 'txt-roxo-custom'>momento</span> certo.</h3>
                </div>

                <div className="d-flex flex-column bg-black w-100 mt-5 h-100 p-4 justify-content-center align-items-center">
                    <div className="mb-3 line-custom-ver2 bg-white"></div>
                    <div className="d-flex gap-3 justify-content-center align-items-center">
                      <img src={img01} alt="img01" className = 'w-25 scale-hover'/>
                      <img src={img02} alt="img02" className = 'w-25 scale-hover'/>
                      <img src={img03} alt="img03" className = 'w-25 scale-hover'/>
                    </div>
                    <div className="mt-3 line-custom-ver2 bg-white"></div>
                </div>
            </div>
        </>
    )
}