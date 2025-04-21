
import { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import './login-form.css'

export default function LoginForm({ tipoUser, onLoginSuccess }) {
  const [ident, setIdent] = useState('')
  const [senha, setSenha] = useState('')

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
    // → aqui você integra com sua API de autenticação
    onLoginSuccess()
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 p-3">
      <Card className="p-4" style={{ maxWidth: '380px', width: '100%' }}>
        <Card.Title className="mb-3 text-start">{labelBemVindo}</Card.Title>
        <Card.Text className="mb-4 text-start">{instrucoes}</Card.Text>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formIdent">
            <Form.Control
              type="text"
              placeholder={placeholderIdent}
              value={ident}
              onChange={(e) => setIdent(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formSenha">
            <Form.Control
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>
          <Button
            className="btn-gradient w-100"
            type="submit"
          >
            Entrar
          </Button>
        </Form>
      </Card>
    </div>
  )
}
