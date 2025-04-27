import { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './queue-dashboard.css';
import * as faker from 'faker-br'
import { cpf } from 'cpf-cnpj-validator';

const knownStatus = ['Agendado', 'Aguardando confirmação', 'Em análise', 'Notificação enviada']


const statusCoverage = {
    3: 'Agendado',
    6: 'Aguardando confirmação',
    8: 'Notificação enviada',
    9: 'Aguardando confirmação',
}

const statusColors = {
    'Agendado': 'status-booked',
    'Aguardando confirmação': 'status-awaiting',
    'Em análise': 'status-processing',
    'Notificação enviada': 'status-notified',
}

function DashboardTableRow({ patientRow, patientIndex }) {
    const statusClass = statusColors[patientRow?.status]

    return (
        <>
            <tr className='text-center'>
                <th scope="row">{patientRow?.id}</th>
                <td className='align-middle'>{patientIndex + 1 + 'º'}</td>
                <td className='align-middle'>{patientRow?.document}</td>
                <td className='align-middle'>{patientRow?.patientName}</td>
                <td className='align-middle'>{patientRow?.relativeName}</td>
                <td className='align-middle'>{patientRow?.requestedAt}</td>
                <td className='align-middle'>
                    <span className={'badge ' + statusClass}>{patientRow?.status}</span>
                </td>
                <td className='align-middle'>
                    <FaTrashAlt role='button' className='trash-can' />
                </td>
            </tr>
        </>
    )
}

export default function QueueDashboard() {
    const [patients, setPatients] = useState([]);
    const [initial, setInitial] = useState([0])

    useEffect(() => {
        createInitialPatients();
    }, [])


    function getStatusByPosition(pos){
        for (let i in statusCoverage){
            if(pos + 1 <= i){
                return statusCoverage[i]
            }
        }
    }


    function createInitialPatients(){
        const newPatients = createPatients(10);
        console.log(newPatients)
        setPatients(newPatients);
    }


    function createPatients(n){
        const newPatients = []
        
        for(let i=0; i<n; i++){
            let pastDate = faker.date.past()
            
            let newDate = {
                day: pastDate.getDate().toString(),
                month: (pastDate.getMonth() +1).toString(),
                year: '2024'
            }

            let familyName = faker.name.lastName()

            newPatients.push(
                {
                    id: faker.random.uuid(),
                    document: cpf.format(faker.br.cpf()),
                    patientName: faker.name.firstName() + ' ' + familyName,
                    relativeName: faker.name.firstName() + ' ' + familyName,
                    status: getStatusByPosition(i),
                    requestedAt: newDate.day + '/' + newDate.month + '/' + newDate.year
                }
            )
        }

        console.log(faker.date.past().getDate())
        console.log(faker.date.recent().getFullYear())
        console.log(faker.date.past().getMonth())
        
        return newPatients
    }


    return (
        <>
            <div className='container-fluid'>
                <div className='row text-start mb-5'>
                    <h1 className='fw-bold'>Dashboard - Agendamentos</h1>
                </div>

                <div className='row text-start mb-1'>
                    <h2 className='fw-regular'>Requisições de agendamento/encaixe</h2>
                </div>

                <div className='row text-start space-between column-gap-5 ps-3'>
                    <div className='col-md-8 p-0 h-30'>
                        <div className='container-fluid overflow-auto p-0 table-responsive border-bottom-0 card rounded-1 p-0 m-0 dash-max-height'>
                            <table className="table m-0 fixedHeader">
                                <thead className='text-center sticky-top'>
                                    <tr className='table-dark'>
                                        <th className='align-middle' scope='col text-center'>ID</th>
                                        <th className='align-middle' scope='col'>Posição na fila</th>
                                        <th className='align-middle' scope='col'>Documento (CPF)</th>
                                        <th className='align-middle' scope='col'>Nome do paciente</th>
                                        <th className='align-middle' scope='col'>Nome do Responsável</th>
                                        <th className='align-middle' scope='col'>Data da solicitação</th>
                                        <th className='align-middle' scope='col'>Status</th>
                                        <th className='align-middle' scope='col'>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patients.map((el, idx) => <DashboardTableRow patientRow={el} patientIndex={idx} key={idx} />)}
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