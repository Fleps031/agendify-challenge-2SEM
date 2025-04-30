import './hero-component.css'
import img01 from "../../../../images/carrossel/img01.jpg"
import img02 from "../../../../images/carrossel/img02.jpg"
import img03 from "../../../../images/carrossel/img03.jpg"

export default function HeroComponent(){
    return(
        <>
            <div id = 'hero' className="d-flex flex-column p-0 w-100 mt-50 container-fluid">
                <div className="d-flex flex-row align-items-center justify-content-center p-0 ms-5">
                  <h1 className = 'align-self-center pb-2 fw-bold'>Agendify</h1>
                  <h3 className = 'txt-roxo-custom ponto-grande'>.</h3>
                  <h3 className = 'align-self-end pb-2 ms-3'>Organize e facilite a rotina dos seus pacientes</h3>
                </div>

                <div className = 'line-custom bg-roxo-custom mx-auto'></div>

                <div className="d-flex justify-content-center text-center mt-3 ms-3">
                    <h3>Serviços de fila e agendamento pra encaixar seu paciente no <span className = 'txt-roxo-custom'>momento</span> certo.</h3>
                </div>

                <div className="d-flex flex-column bg-black w-100 mt-5 h-100 p-4 justify-content-center align-items-center">
                    <div className="mb-3 line-custom-ver2 bg-white"></div>
                    <div className="d-none d-md-flex justify-content-center gap-3 flex-wrap">
                        <img src={img01} className="img-fluid scale-hover" alt="Imagem 1" />
                        <img src={img02} className="img-fluid scale-hover" alt="Imagem 2" />
                        <img src={img03} className="img-fluid scale-hover" alt="Imagem 3" />
                    </div>
                    <div className="d-md-none">
                        <div id="carouselImagens" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={img01} className="d-block w-100" alt="Imagem 1" />
                                </div>
                                <div className="carousel-item">
                                    <img src={img02} className="d-block w-100" alt="Imagem 2" />
                                </div>
                                <div className="carousel-item">
                                    <img src={img03} className="d-block w-100" alt="Imagem 3" />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselImagens" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselImagens" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-3 line-custom-ver2 bg-white"></div>
                </div>
            </div>
        </>
    );
}