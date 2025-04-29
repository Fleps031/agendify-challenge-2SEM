import { cpf } from 'cpf-cnpj-validator';
import * as faker from 'faker-br';
import { useEffect, useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './queue-dashboard.css';

const knownStatus = ['Agendado', 'Aguardando confirmação', 'Notificação enviada', 'Em análise']


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

function DashboardTableRow({ patientRow, patientIndex, removeFunction }) {
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
                    <FaTrashAlt onClick={() => removeFunction(patientIndex)} role='button' className='trash-can' data-bs-toggle="modal" data-bs-target="#exampleModal" />
                </td>
            </tr>
        </>
    )
}


export default function QueueDashboard() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);

    let statusCoverage;
    let idxToRemove;

    useEffect(() => {
        createInitialPatients();
    }, [])

    function getStatusByPosition(pos) {
        return statusCoverage[pos]
    }

    function setToRemove(setIdx) {
        idxToRemove = setIdx
    }

    function initialStatusCoverage(perc) {
        let tempStatusCoverage = []


        for (let i in perc) {
            console.log(perc[i])
            for (let j = 0; j <= perc[i]; j++) {
                tempStatusCoverage.push(knownStatus[i])
            }
        }

        console.log(tempStatusCoverage)

        statusCoverage = tempStatusCoverage;
    }

    function loadLocalPatients() {
        console.log("json")
        setPatients(JSON.parse(localStorage.getItem('filaPacientes')));
    }


    function createInitialPatients() {
        setLoading(true);

        const newPatients = createPatients(16);
        localStorage.setItem("filaPacientes", JSON.stringify(newPatients))
        setPatients(newPatients);


        setTimeout(() => {
            setLoading(false);
        }, 1200)
    }

    function removePatient(patientIdx) {
        let tempPatients = [...patients];

        console.log("Remove Patient")
        tempPatients.splice(idxToRemove, 1);

        console.log(tempPatients)
    }


    function createPatients(n) {
        const newPatients = []

        initialStatusCoverage([4, 4, 2, 5]);

        for (let i = 0; i < n; i++) {
            let pastDate = faker.date.past()

            let newDate = {
                day: pastDate.getDate().toString(),
                month: (pastDate.getMonth() + 1).toString(),
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


        return newPatients
    }


    return (
        <>
            <div className='container-fluid'>
                <div className='row text-start mb-5'>
                    <h1 className='fw-bold'>Dashboard - Agendamentos</h1>
                </div>

                <div className='row text-start mb-3'>
                    <div className='col-md-9 d-flex justify-content-start align-items-center'> <h2 className='fw-regular'>Requisições de agendamento/encaixe</h2> </div>
                    <div className='col-md-3 d-flex justify-content-start align-items-center'>
                        <button className='btn btn-outline-primary' onClick={() => loadLocalPatients()}>Carregar novos usuários</button>
                    </div>
                </div>

                <div className='row text-start space-between column-gap-5 ps-3'>
                    <div className='col-md-8 p-0 h-30'>
                        <div className={loading ? 'container-fluid overflow-auto p-0 table-responsive card rounded-1 p-0 m-0 dash-max-height' : 'container-fluid overflow-auto p-0 table-responsive border-bottom-0 card rounded-1 p-0 m-0 dash-max-height'}>
                            <table className={loading ? 'd-none border' : 'table m-0 fixedHeader'}>
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

                                    {patients.map((el, idx) => <DashboardTableRow patientRow={el} patientIndex={idx} removeFunction={setToRemove} key={idx} />)}

                                </tbody>
                            </table>

                            <div className={loading ? 'd-flex flex-row w-100 justify-content-center align-items-center loading-box' : 'd-none'}>
                                <div class="spinner-border spinner-size" role="status"></div>
                            </div>
                        </div>
                    </div>

                    <div className="modal" id="exampleModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className='modal-dialog'>
                            <div className='modal-content bg-dark text-white'>
                                <div className='modal-header'>
                                    <h2 className='text-middle w-100 d-flex flex-row justify-content-center'>Atenção!</h2>
                                    <div data-bs-theme="dark">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                </div>
                                <div className='modal-body'>
                                    <div className='d-flex modal-height gap-4 flex-column align-items-center justify-content-center'>
                                        <p className='text-center fs-4'>Deseja mesmo despriorizar esse paciente da fila?</p>
                                        <button type="button" class="btn modal-button-confirm" data-bs-dismiss="modal" aria-label="Close" onClick={() => removePatient()}>Confirmar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='col-md'>
                        <div className='container-fluid'>
                            <div className='card'>
                                <div className='card-body'>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}