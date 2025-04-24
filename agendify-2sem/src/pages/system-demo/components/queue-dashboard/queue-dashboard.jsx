import { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './queue-dashboard.css';

const statusColors = {
    'Agendado': 'status-booked',
    'Aguardando confirmaÃ§Ã£o': 'status-awaiting',
    'Em anÃ¡lise': 'status-processing',
    'NotificaÃ§Ã£o enviada': 'status-notified',
}

const mockPacientes = [
    {
        name: 'Mark',
        position: 'Grayson',
        requestedAt: '12-03-2025',
        status: 'Agendado'
    },
    {
        name: 'Mark',
        position: 'Grayson',
        requestedAt: '12-03-2025',
        status: 'Agendado'
    },
    {
        id: '2',
        name: 'Nolan',
        position: 'Man',
        requestedAt: '12-03-2025',
        status: 'Aguardando confirmaÃ§Ã£o'
    },
    {
        id: '2',
        name: 'Livia',
        position: 'Pereira',
        requestedAt: '12-03-2025',
        status: 'NotificaÃ§Ã£o enviada'
    },
    {
        id: '2',
        name: 'Livia',
        position: 'Pereira',
        requestedAt: '12-03-2025',
        status: 'Em anÃ¡lise'
    },
    {
        id: '2',
        name: 'Livia',
        position: 'Pereira',
        requestedAt: '12-03-2025',
        status: 'Em anÃ¡lise'
    },
    {
        id: '2',
        name: 'Livia',
        position: 'Pereira',
        requestedAt: '12-03-2025',
        status: 'Em anÃ¡lise'
    },
]

function DashboardTableRow({ patientRow, patientIndex }) {
    const statusClass = statusColors[patientRow?.status]

    return (
        <>
            <tr className='text-center'>
                <th scope="row">{patientIndex + 100}</th>
                <td>{patientRow?.name}</td>
                <td>{patientRow?.position}</td>
                <td>{patientRow?.requestedAt}</td>
                <td>
                    <span className={'d-flex justify-content-center badge ' + statusClass}>{patientRow?.status}</span>
                </td>
                <td className='p-1'>
                    <FaTrashAlt role='button' className='trash-can' />
                </td>
            </tr>
        </>
    )
}

export default function QueueDashboard() {
    const [person, setPerson] = useState();
    let isFirstUseCall = true;

    useEffect(() => {
        if (isFirstUseCall) {
            createUsers(5);
            isFirstUseCall = false;
        }
    }, [])

    function createUsers(n) {
        const url = 'https://randomuser.me/api/';

        let promises = []
        let results = []

        for (let i = 0; i <= n; i++) {
            promises.push(setTimeout(() => {
                fetch(url)
            }, 1000))
        }

        Promise.all([...promises]).then((values) => { console.log(values) })
    }

    return (
        <>
            <div className='container-fluid'>
                <div className='row text-start mb-5'>
                    <h1 className='fw-bold'>Dashboard - Agendamentos</h1>
                </div>

                <div className='row text-start mb-1'>
                    <h2 className='fw-regular'>RequisiÃ§Ãµes de agendamento/encaixe</h2>
                </div>

                <div className='row text-start space-between column-gap-5 ps-3'>
                    <div className='col-md-8 p-0'>
                        <div className='container-fluid overflow-auto p-0 table-responsive border-bottom-0 card rounded-1 p-0 m-0 '>
                            <table className="table m-0">
                                <thead className='text-center'>
                                    <tr className='table-dark'>
                                        <th scope='col text-center'>ID</th>
                                        <th scope='col'>Nome do paciente</th>
                                        <th scope='col'>PosiÃ§ao na fila</th>
                                        <th scope='col'>Data da solicitaÃ§Ã£o</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>AÃ§Ãµes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockPacientes.map((el, idx) => <DashboardTableRow patientRow={el} patientIndex={idx} key={idx} />)}
                                </tbody>
                            </table>
                        </div>
                    </div>


                    <div className='col-md'>
                        <h3 className='text-center'>Card</h3>
                        <div className='container-fluid'>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}