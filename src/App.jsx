
import './App.css'
import LandingPage from './pages/landing-page/landing-page'
import SystemDemo from './pages/system-demo/system-demo'
import LoginContainer from './pages/system-demo/containers/login-container/login-container'
import QueueContainer from './pages/system-demo/containers/queue-container/queue-container'
import { Routes, Route, Navigate} from 'react-router'

function App() {

  return (
    <>
    <Routes>
      <Route index path="/agendify-challenge-2SEM/" element={<LandingPage/>}></Route>

      <Route path="/agendify-challenge-2SEM/sistema" element={<SystemDemo/>}>
        <Route index element={<Navigate to="login" replace />} />
        <Route path="login" element={<LoginContainer />} />
        <Route path="fila" element={<QueueContainer />} />
      </Route>
    </Routes>
    </>
  )
}

export default App