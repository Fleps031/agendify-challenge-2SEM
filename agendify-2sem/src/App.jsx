import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './pages/landing-page/landing-page'
import SystemDemo from './pages/system-demo/system-demo'
import { Routes, Route } from 'react-router'
import  LoginContainer  from './pages/system-demo/containers/login-container/login-container'
import  QueueContainer  from './pages/system-demo/containers/queue-container/queue-container'

function App() {
  return (
    <>
      <h1>Agendify - APP</h1>
      <button type="button" className='btn'>Botão bootstrapado - Mogged by the chad, nothing left for the beta</button>
      
      <Routes>
        
        <Route index element={<LandingPage/>}></Route>
        
        <Route path="/sistema" element={<SystemDemo/>}>
          <Route index path='login' element={<LoginContainer />} />
          <Route path="fila" element={<QueueContainer />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
