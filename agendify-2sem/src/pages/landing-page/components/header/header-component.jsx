import '../header/header-component.css'
import logoAgendify from '../../../../images/logo.svg'
import { useState } from 'react'

export default function HeaderComponent(){
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <section className="navbar bg-roxo-custom p-3">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logoAgendify} alt="logo Agendify" className="rounded"/>
          <a href="#" className="text-decoration-none"><h1 className="text-white m-0">Agendify</h1></a>
        </div>

        <button className="menu-toggle d-md-none ms-4" onClick={() => setMenuAberto(!menuAberto)} aria-label="Abrir menu">☰</button>
      </div>

      <div className={`menu-links ${menuAberto ? 'show' : ''}`}>
        <a href="#" className="text-decoration-none text-white">Início</a>
        <a href="#" className="text-decoration-none text-white">Serviços</a>
        <a href="#" className="text-decoration-none text-white">Benefícios</a>
        <a href="#" className="text-decoration-none text-white">Sistemas</a>
        <a href="#" className="text-decoration-none text-white">Cadastro</a>
        <a href="#" className="text-decoration-none text-white">Login</a>
      </div>
    </section>
  );
}
