
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import QueueDashboard from '../../components/queue-dashboard/queue-dashboard'
import QueuePatient from '../../components/queue-patient/queue-patient'
import './queue-container.css'

export default function QueueContainer() {
  const [tipoUser, setTipoUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const t = localStorage.getItem('tipoUser')
    if (!t) {
      // se não estiver logado, volta ao login
      navigate('/sistema/login')
    } else {
      setTipoUser(t)
    }
  }, [])

  return (
    <div className="queue-container  pe-0 pt-4 pb-4 container-fluid">
      {tipoUser === 'paciente' ? <QueuePatient /> : <QueueDashboard />}
    </div>
  )
}
