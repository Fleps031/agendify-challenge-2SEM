
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/landing-page/landing-page'
import SystemDemo from './pages/system-demo/system-demo'
import LoginContainer from './pages/system-demo/containers/login-container/login-container'
import QueueContainer from './pages/system-demo/containers/queue-container/queue-container'

function App() {
  return (
    <>
      <h1 className="text-center my-4">Agendify - APP</h1>

      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/sistema" element={<SystemDemo />}>
          {/* /sistema → /sistema/login */}
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginContainer />} />
          <Route path="fila" element={<QueueContainer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
