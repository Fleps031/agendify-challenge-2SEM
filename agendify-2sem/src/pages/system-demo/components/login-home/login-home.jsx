
import './login-home.css'

import imgSelection from '../../../../images/home_2.png'

export default function LoginHome({ mudarTipoUser }) {
  return (
    <div className="login-home d-flex vh-100">
      {/* coluna de seleção */}
      <div className="flex-fill d-flex flex-column align-items-center justify-content-center bg-white p-4">
        <h1 className="mb-4">
          Bem vindo ao <span className="agendify-purple">Agendify!</span>
        </h1>
        <button
          className="btn btn-gradient btn-lg mb-3"
          onClick={() => mudarTipoUser('hospital')}
        >
          Sou um Hospital ou Parceiro
        </button>
        <button
          className="btn btn-outline-gradient btn-lg"
          onClick={() => mudarTipoUser('paciente')}
        >
          Sou um Paciente
        </button>
      </div>

      {/* coluna de imagem */}
      <div className="flex-fill d-none d-md-block">
        <img
          src={imgSelection}
          alt="Seleção Hospital ou Paciente"
          className="h-100 w-100 object-cover"
        />
      </div>
    </div>
  )
}
