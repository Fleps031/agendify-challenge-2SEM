import '../header/header-component.css'
import logoAgendify from '../../../../images/logo.svg'
import { useState } from 'react'

export default function HeaderComponent(){
    const [menuAberto, setMenuAberto] = useState(false)

    return(
        <section className="container-fluid align-items-center bg-roxo-custom w-100">
            <div className="row justify-content-between align-items-center px-3">
                <div className="col-6 d-flex gap-3 align-items-center">
                    <img src={logoAgendify} alt="logo Agendify" className="img-fluid logo" />
                    <a href="#" className="text-decoration-none"><h1 className="text-white">Agendify</h1></a>
                </div>

                <div className="d-md-none col-6 d-flex justify-content-end">
                    <button className="menu-toggle" onClick={() => setMenuAberto(!menuAberto)}>
                        ☰
                    </button>
                </div>

                <div className={`menu col-md-6 d-md-flex flex-md-row align-items-center justify-content-end gap-3 ${menuAberto ? 'ativo' : ''}`}>
                    <a href="#" className="text-decoration-none text-white link-dark">Início</a>
                    <a href="#" className="text-decoration-none text-white link-dark">Serviços</a>
                    <a href="#" className="text-decoration-none text-white link-dark">Benefícios</a>
                    <a href="#" className="text-decoration-none text-white link-dark">Sistemas</a>
                    <a href="#" className="text-decoration-none text-white link-dark">Juntar-se</a>
                    <a href="#" className="text-decoration-none text-white link-dark">Login</a>
                </div>
            </div>
        </section>
    )
}
