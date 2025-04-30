import '../header/header-component.css'
import logoAgendify from '../../../../images/logo.svg'
import { useState } from 'react'  
import { Link } from "react-router";

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
        <a href="#hero" className="text-decoration-none texto-preto">Início</a>
        <a href="#servicos" className="text-decoration-none texto-preto">Serviços</a>
        <a href="#beneficios" className="text-decoration-none texto-preto">Benefícios</a>
        <a href="#sistema" className="text-decoration-none texto-preto">Sistemas</a>
        <a href="#contato" className="text-decoration-none texto-preto">Cadastre-se</a>
        <Link className = 'text-decoration-none texto-preto' to="/sistema">Login</Link>
      </div>
    </section>
  );
}
