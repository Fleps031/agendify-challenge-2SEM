
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginHome from '../../components/login-home/login-home'
import LoginForm from '../../components/login-form/login-form'
import './login-container.css'

export default function LoginContainer() {
  const [tipoUser, setTipoUser] = useState(null)
  const navigate = useNavigate()

  // ao montar, tenta ler do localStorage
  useEffect(() => {
    const stored = localStorage.getItem('tipoUser')
    if (stored) {
      setTipoUser(stored)
    }
  }, [])

  function mudarTipoUser(t) {
    localStorage.setItem('tipoUser', t)
    setTipoUser(t)
  }

  function onLoginSuccess() {
    navigate('/sistema/fila')
  }

  function onBack() {
    localStorage.removeItem('tipoUser')
    setTipoUser(null)
  }

  return (
    <div className="login-container">
      {!tipoUser ? (
        <LoginHome mudarTipoUser={mudarTipoUser} />
      ) : (       
        <LoginForm
         tipoUser={tipoUser}
         onLoginSuccess={onLoginSuccess}
         onBack={onBack}
       />
      )}
    </div>
  )
}
