
import './login-home.css'

import imgSelection from '../../../../images/home_2.png'

export default function LoginHome({ mudarTipoUser }) {
  return (
    <div className="login-home d-flex h-100">
      {/* coluna de seleção */}
      <div className="left-col d-flex flex-column align-items-center justify-content-center">
      <h1 className="mb-4 text-center">
        Bem vindo ao <span className="agendify-gradient">Agendify!</span>
      </h1>
               {/* Ambos iguais: outline branco + hover degradê */}
      <div className="btn-gradient-border mb-3">
         <button
           className="btn-gradient-text"
           onClick={() => mudarTipoUser('hospital')}
         >
           Sou um Hospital ou Parceiro
         </button>
       </div>
             <div className="btn-gradient-border">
         <button
           className="btn-gradient-text"
           onClick={() => mudarTipoUser('paciente')}
         >
           Sou um Paciente
         </button>
       </div>
      </div>

      {/* coluna de imagem */}
      <div className="right-col d-none d-md-block">
        <img
          src={imgSelection}
          alt="Seleção Hospital ou Paciente"
          className="h-100 w-100 object-cover"
        />
      </div>
    </div>
  )
}
