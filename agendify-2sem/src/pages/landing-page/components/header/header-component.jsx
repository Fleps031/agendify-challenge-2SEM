import '../header/header-component.css'
import logoAgendify from '../../../../images/logo.svg'

export default function HeaderComponent(){
    return(
        <>  
            <section className="container-fluid align-items-center bg-roxo-custom w-100">
                <div className = 'row'>
                    <div className = 'container-flex-around col-md-6 d-flex gap-4'>
                        <div className = 'd-flex justify-content-center pb-1'>
                            <img src={logoAgendify} alt="logo Agendify" className = 'img-fluid'/>
                        </div>
                        <a href="#" className = 'text-decoration-none'><h1 className="text-white">Agendify</h1></a>
                    </div>

                    <div className="col-md d-flex align-items-center gap-3 justify-content-end ms-3">
                        <a href="#" className="text-decoration-none text-white link-dark">Início</a>
                        <a href="#" className="text-decoration-none text-white link-dark">Serviços</a>
                        <a href="#" className="text-decoration-none text-white link-dark">Benefícios</a>
                        <a href="#" className="text-decoration-none text-white link-dark">Sistemas</a>
                        <a href="#" className="text-decoration-none text-white link-dark">Juntar-se</a>
                        <a href="#" className="text-decoration-none text-white link-dark">Login</a>
                    </div>
                </div>
            </section>
        </>
    )
}