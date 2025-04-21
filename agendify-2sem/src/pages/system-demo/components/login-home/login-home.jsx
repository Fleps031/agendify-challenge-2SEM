
import './login-home.css'

export default function LoginHome({ mudarTipoUser }) {
  return (
    <div className="login-home d-flex flex-column align-items-center justify-content-center">
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
  )
}
