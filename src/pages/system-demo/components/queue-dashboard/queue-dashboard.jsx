import { cpf } from 'cpf-cnpj-validator';
import * as fakerBr from 'faker-br';
import { faker } from '@faker-js/faker';
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

function DashboardTableRow({ patientRow, patientIndex, removeFunction, active, setFunction}) {
    const statusClass = statusColors[patientRow?.status]

    return (
        <>
            <tr className={active ? 'text-center table-active hover-row' : 'text-center hover-row'} onClick={() => setFunction(patientIndex)}>
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

function CardExameDetalhe({nomeExame, dataExame}){
    return (
        <>
            <div className="mb-3 ">
            <div className="card-exame-detalhe border rounded p-2 d-flex justify-content-between align-items-center flex-wrap fs-9">
                <div className='detail-bio-row align-items-center'>
                    <p className='fw-semibold detail-title p-0 m-0'>{nomeExame}</p>
                    <p className="text-purple m-0">{dataExame}</p>
                </div>
            </div>
            </div>
        </>
    );
} 


export default function QueueDashboard() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeRow, setActiveRow] = useState(0);
    const [currentDetail, setDetail] = useState(patients[0]);

    let statusCoverage;
    let idxToRemove;

    const exames = ['Exame de sangue', 'Tomografia', 'Ultrassonografia', 'Biópsia dos Pulmões', 'Ressonância Magnética'];
    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

    useEffect(() => {
        createInitialPatients();
    }, [])

    useEffect(() => {
        setActiveRow(0)
        setDetail(patients[0])
    }, [patients])


    function getStatusByPosition(pos) {
        return statusCoverage[pos]
    }

    function setToRemove(setIdx) {
        idxToRemove = setIdx
    }

    function initialStatusCoverage(perc) {
        let tempStatusCoverage = []


        for (let i in perc) {
            for (let j = 0; j <= perc[i]; j++) {
                tempStatusCoverage.push(knownStatus[i])
            }
        }


        statusCoverage = tempStatusCoverage;
    }

    function loadLocalPatients() {
        let localPatients = JSON.parse(localStorage.getItem('filaPacientes'));
        if(localPatients){
            setPatients(localPatients);
            return localPatients
        }
        return
    }


    function createInitialPatients() {
        setLoading(true);

        if(loadLocalPatients()){
            setTimeout(() => {
                setLoading(false);
            }, 1200)
            return
        }

        createNewPatients();


        setTimeout(() => {
            setLoading(false);
        }, 1200)
    }


    function createNewPatients(){
        setLoading(true);
        
        const newPatients = generatePatients(16);
        localStorage.setItem("filaPacientes", JSON.stringify(newPatients))
        setPatients(newPatients);

        setTimeout(() => {
            setLoading(false);
        }, 1200)

    }

    function removePatient(patientIdx) {
        let tempPatients = [...patients];

        tempPatients.splice(idxToRemove, 1);

        setPatients(tempPatients)
        localStorage.setItem("filaPacientes", JSON.stringify(tempPatients))

    }


    function generatePatients(n) {
        const newPatients = []

        initialStatusCoverage([4, 4, 2, 5]);

        for (let i = 0; i < n; i++) {
            let pastDate = fakerBr.date.past()

            let newDate = {
                day: pastDate.getDate().toString(),
                month: (pastDate.getMonth() + 1).toString(),
                year: '2024'
            }


            let birthDate = faker.date.between({from: '2016-01-01', to: '2024-01-01'});

            let patientSex = faker.person.sexType()


            let familyName = fakerBr.name.lastName()

            let formattedBirthDate = {
                day: birthDate.getDate().toString(),
                month: (birthDate.getMonth() + 1).toString(),
                year: birthDate.getFullYear().toString()
            }

            let randomExames = []

            for(let i = 0; i < 3; i++){
                let exameData = faker.date.between({from: '2023-01-01', to: '2025-02-18'});

                let formattedDataExame = {
                    day: exameData.getDate().toString(),
                    month: (exameData.getMonth() + 1).toString(),
                    year: exameData.getFullYear().toString()
                }

                randomExames.push({
                    nomeExame: getRandom(exames),
                    dataExame: formattedDataExame.day + '/' + formattedDataExame.month + '/' + formattedDataExame.year,
                });
            }


            newPatients.push(
                {
                    id: fakerBr.random.uuid(),
                    document: cpf.format(fakerBr.br.cpf()),
                    patientName: fakerBr.name.firstName(patientSex) + ' ' + familyName,
                    relativeName: fakerBr.name.firstName() + ' ' + familyName,
                    status: getStatusByPosition(i),
                    requestedAt: newDate.day + '/' + newDate.month + '/' + newDate.year,
                    details: {
                        sex: patientSex,
                        imgUrl: faker.image.personPortrait({sex: patientSex, size: '128'}),
                        dateBirth: formattedBirthDate.day + '/' + formattedBirthDate.month + '/' + formattedBirthDate.year,
                        age: new Date().getFullYear() - birthDate.getFullYear(),
                        exames: randomExames,
                    }
                }
            )
        }
        return newPatients
    }

    function isActiveRow(idx){
        return activeRow == idx
    }

    function newDetailRow(idx){
        setActiveRow(idx)
        setDetail(patients[idx]);
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
                        <button className='btn btn-outline-primary' onClick={() => createNewPatients()}>Carregar novos usuários</button>
                    </div>
                </div>

                <div className='row text-start space-between column-gap-5 row-gap-3 ps-3 w-100'>
                    <div className='col-md-8 p-0 h-30 min-w-40'>
                        <div className={loading ? 'container-fluid overflow-auto p-0 table-responsive card rounded-1 p-0 m-0 dash-max-height' : 'container-fluid overflow-auto p-0 table-responsive border-bottom-0 card rounded-1 p-0 m-0 dash-max-height'}>
                            <table className={loading ? 'd-none border' : 'table m-0 fixedHeader table-hover'}>
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

                                    {patients.map((el, idx) => <DashboardTableRow patientRow={el} patientIndex={idx} removeFunction={setToRemove} key={idx} active={isActiveRow(idx)} setFunction={newDetailRow} />)}

                                </tbody>
                            </table>

                            <div className={loading ? 'd-flex flex-row w-100 justify-content-center align-items-center loading-box' : 'd-none'}>
                                <div className="spinner-border spinner-size" role="status"></div>
                            </div>
                        </div>
                    </div>

                    <div className="modal" id="exampleModal" tabIndex="-1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className='modal-dialog'>
                            <div className='modal-content bg-dark text-white'>
                                <div className='modal-header'>
                                    <h2 className='text-middle w-100 d-flex flex-row justify-content-center'>Atenção!</h2>
                                    <div data-bs-theme="dark">
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                </div>
                                <div className='modal-body'>
                                    <div className='d-flex modal-height gap-4 flex-column align-items-center justify-content-center'>
                                        <p className='text-center fs-4'>Deseja mesmo despriorizar esse paciente da fila?</p>
                                        <button type="button" className="btn modal-button-confirm" data-bs-dismiss="modal" aria-label="Close" onClick={() => removePatient()}>Confirmar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='col-md p-0'>
                        <div className='container-fluid p-0'>
                            <div className='detail-min-w card p-2'>
                                <div className='card-body p-0'>
                                    <div className='d-flex flex-column'>
                                        <div className='d-flex flex-row gap-3'>
                                            <img src={currentDetail?.details?.imgUrl} className='img-detail rounded'></img>
                                            <div className='detail-vertical-divider'></div>
                                            <div className='d-flex flex-column w-100'>
                                                <div className='detail-bio-row'>
                                                    <p className='fw-semibold detail-title'>Nome</p>
                                                    <p>{currentDetail?.patientName}</p>
                                                </div>
                                                <div className='detail-bio-row'>
                                                    <p className='fw-semibold detail-title'>Idade</p>
                                                    <p>{currentDetail?.details?.age} anos</p>
                                                </div>
                                                <div className='detail-bio-row'>
                                                    <p className='fw-semibold detail-title'>Data de nascimento</p>
                                                    <p>{currentDetail?.details?.dateBirth}</p>
                                                </div>
                                                <div className='detail-bio-row'>
                                                    <p className='fw-semibold detail-title'>CPF</p>
                                                    <p>{currentDetail?.document}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='d-flex flex-column align-items-center p-0'>
                                            <h5 className='fw-semibold detail-title p-0'>Histórico de consultas</h5>
                                            <div className='detail-x-divider m-0'></div>
                                        </div>

                                        <div className='d-flex flex-column rounded pt-3'>
                                            {currentDetail?.details?.exames?.map((el, idx) => <CardExameDetalhe key={idx} nomeExame={el?.nomeExame} dataExame={el?.dataExame}/>)}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}