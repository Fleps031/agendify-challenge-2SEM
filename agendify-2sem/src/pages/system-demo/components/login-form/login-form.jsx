// src/pages/system-demo/components/login-form/login-form.jsx
import { useState } from 'react'
import './login-form.css'
import imgLogin from '../../../../images/home_1.png'

export default function LoginForm({ tipoUser, onLoginSuccess, onBack }) {
  const [ident, setIdent] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  const labelBemVindo =
    tipoUser === 'paciente' ? 'Bem vindo de volta 🙂' : 'Bem vindo de volta!'
  const instrucoes =
    tipoUser === 'paciente'
      ? 'Entre com seu CPF ou e‑mail utilizados no momento do seu cadastro'
      : 'Entre com seu e‑mail ou ID corporativo'
  const placeholderIdent =
    tipoUser === 'paciente' ? 'E-mail/CPF' : 'E-mail/ID'

  function handleSubmit(e) {
    e.preventDefault()
    if (!ident.trim() || !senha.trim()) {
      setError('Por favor, preencha ambos os campos para entrar.')
      return
    }
    setError('')
    onLoginSuccess()
  }

  return (
    <div className="login-form-wrapper d-flex flex-column flex-md-row vh-100">
      {/* Coluna do formulário */}
      <div className="flex-fill bg-white p-4 position-relative">
        <a
          href="#"
          className="back-link"
          onClick={e => {
            e.preventDefault()
            onBack()
          }}
        >
          ← Voltar
        </a>

        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="card p-4" style={{ maxWidth: '380px', width: '100%' }}>
            <h2 className="card-title mb-3 text-start">{labelBemVindo}</h2>
            <p className="card-text mb-4 text-start">{instrucoes}</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={placeholderIdent}
                  value={ident}
                  onChange={e => {
                    setIdent(e.target.value)
                    if (error) setError('')
                  }}
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Senha"
                  value={senha}
                  onChange={e => {
                    setSenha(e.target.value)
                    if (error) setError('')
                  }}
                />
              </div>

              {error && (
                <div className="text-danger mb-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-gradient w-100"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Coluna da imagem */}
      <div className="flex-fill">
        <img
          src={imgLogin}
          alt="Ambiente Hospitalar"
          className="h-100 w-100 object-cover"
        />
      </div>
    </div>
  )
}
