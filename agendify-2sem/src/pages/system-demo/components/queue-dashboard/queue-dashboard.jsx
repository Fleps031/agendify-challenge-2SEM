import { data } from 'react-router'
import './queue-dashboard.css'
import { FaTrashAlt } from "react-icons/fa";
import { useState, useEffect } from 'react';

const statusColors = {
    'Agendado': 'status-booked',
    'Aguardando confirmação': 'status-awaiting',
    'Em análise': 'status-processing',
    'Notificação enviada': 'status-notified',
}

function DashboardTableRow({patientRow, patientIndex}){
    const statusClass = statusColors[patientRow?.status]

    console.log()

    
    return(
        <>
            <tr className='text-center'>
                <th scope="row">{patientIndex + 1}</th>
                <td>{patientRow?.name}</td>
                <td>{patientRow?.position}</td>
                <td>{patientRow?.requestedAt}</td>
                <td>
                    <span className={'d-flex justify-content-center badge ' + statusClass}>{patientRow?.status}</span>
                </td>
                <td className='p-1'>
                    <FaTrashAlt role='button' className='trash-can'/>
                </td>
            </tr>
        </>
    )
}

export default function QueueDashboard(){
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
            status: 'Aguardando confirmação'
        },
        {
            id: '2',
            name: 'Livia',
            position: 'Pereira',
            requestedAt: '12-03-2025',
            status: 'Notificação enviada'
        },
        {
            id: '2',
            name: 'Livia',
            position: 'Pereira',
            requestedAt: '12-03-2025',
            status: 'Em análise'
        },
        {
            id: '2',
            name: 'Livia',
            position: 'Pereira',
            requestedAt: '12-03-2025',
            status: 'Em análise'
        },
        {
            id: '2',
            name: 'Livia',
            position: 'Pereira',
            requestedAt: '12-03-2025',
            status: 'Em análise'
        },
    ]
    return(
        <>
            <div className='container-fluid'>
                <div className='row text-start mb-5'>
                    <h1 className='fw-bold'>Dashboard - Agendamentos</h1>
                </div>

                <div className='row text-start mb-1'>
                    <h2 className='fw-regular'>Requisições de agendamento/encaixe</h2>
                </div>

                <div className='row text-start space-between column-gap-5 ps-3'>
                    <div className='col-md-8 p-0'>
                        <div className='container-fluid overflow-auto p-0'>
                            <table className="table">
                                <thead className='text-center'>
                                    <tr className='table-dark'>
                                        <th scope='col text-center'>ID</th>
                                        <th scope='col'>Nome do paciente</th>
                                        <th scope='col'>Posiçao na fila</th>
                                        <th scope='col'>Data da solicitação</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {mockPacientes.map((el, idx) => <DashboardTableRow patientRow={el} patientIndex={idx} key={idx}/>)}
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