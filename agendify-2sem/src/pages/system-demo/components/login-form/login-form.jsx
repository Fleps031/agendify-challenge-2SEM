
import { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
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
    // Validação: ambos os campos devem ter algo
    if (!ident.trim() || !senha.trim()) {
      setError('Por favor, preencha ambos os campos para entrar.')
      return
    }
    // Limpa qualquer erro existente e prossegue
    setError('')
    onLoginSuccess()
  }

  return (
    <div className="login-form-wrapper d-flex flex-column flex-md-row vh-100">
      {/* coluna do form */}
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
          <Card className="p-4" style={{ maxWidth: '380px', width: '100%' }}>
            <Card.Title className="mb-3 text-start">
              {labelBemVindo}
            </Card.Title>
            <Card.Text className="mb-4 text-start">{instrucoes}</Card.Text>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formIdent">
                <Form.Control
                  type="text"
                  placeholder={placeholderIdent}
                  value={ident}
                  onChange={e => {
                    setIdent(e.target.value)
                    if (error) setError('')
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSenha">
                <Form.Control
                  type="password"
                  placeholder="Senha"
                  value={senha}
                  onChange={e => {
                    setSenha(e.target.value)
                    if (error) setError('')
                  }}
                />
              </Form.Group>

              {error && (
                <div className="text-danger mb-3">
                  {error}
                </div>
              )}

              <Button className="btn-gradient w-100" type="submit">
                Entrar
              </Button>
            </Form>
          </Card>
        </div>
      </div>

      {/* coluna da imagem */}
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
