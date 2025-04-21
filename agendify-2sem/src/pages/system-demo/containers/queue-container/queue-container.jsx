import QueueDashboard from '../../components/queue-dashboard/queue-dashboard'
import QueuePatient from '../../components/queue-patient/queue-patient'
import './queue-container.css'

export default function QueueContainer(){
    return(
        <>
            <h1>Queue Container Works!</h1>
            <QueueDashboard></QueueDashboard>
            <QueuePatient></QueuePatient>
        </>
    )
}