import './queue-patient.css'


function CardExame({nomePaciente, nomeExame, dataExame}) {
    return (
        <>
            <p className="text-purple mb-1">{nomePaciente}</p>
                <div className="border rounded p-2 d-flex justify-content-between">
                    <span>{nomeExame}</span>
                  <span className="text-purple">{dataExame}</span>
                </div>
        </>
    )
    
}

export default function QueuePatient() {
    const queuePacientes = [
        {
            nomePaciente: 'Mark',
            nomeExame: 'Exame de sangue',
            dataExame: '24/08/2025'
        },
        {
            nomePaciente: 'Dipper',
            nomeExame: 'Tomografia computadorizada',
            dataExame: '26/08/2025'
        },
        {
            nomePaciente: 'Pietra',
            nomeExame: 'Ultrassonografia',
            dataExame: '28/08/2025'
        },
        {
            nomePaciente: 'Mark',
            nomeExame: 'Exame de sangue',
            dataExame: '24/08/2025'
        },
        {
            nomePaciente: 'Dipper',
            nomeExame: 'Tomografia computadorizada',
            dataExame: '26/08/2025'
        },
        {
            nomePaciente: 'Pietra',
            nomeExame: 'Ultrassonografia',
            dataExame: '28/08/2025'
        },
        {
            nomePaciente: 'Mark',
            nomeExame: 'Exame de sangue',
            dataExame: '24/08/2025'
        },
        {
            nomePaciente: 'Dipper',
            nomeExame: 'Tomografia computadorizada',
            dataExame: '26/08/2025'
        },
        {
            nomePaciente: 'Pietra',
            nomeExame: 'Ultrassonografia',
            dataExame: '28/08/2025'
        }
    ]
  return (
    <div className="container py-4">
      {/* Texto de boas-vindas */}
      <div className="row mb-4">
        <div className="col text-center">
          <h2 className="fw-bold fs-1">
            Bom dia, <span className="text-gradient">Alexandre!</span>
          </h2>
        </div>
      </div>

      {/* Área principal com 2 colunas */}
      <div className="row">
        {/* Coluna 1 - Últimos atendimentos */}
        <div className="col-md-6 mb-4">
          <div className="p-3 rounded border-1 border-gradient custom-shadow container-fluid" style={{ height: '100%' }}>
            <h5 className="fw-bold text-center mb-3 fs-3">Seus últimos atendimentos</h5>

            <div className="pe-2">
              {/* Repita esse bloco para cada atendimento */}
              <div className="mb-3 scroll-area">
                {queuePacientes.map((el, idx) => <CardExame nomePaciente={el.nomePaciente} nomeExame={el.nomeExame} dataExame={el.dataExame} key={idx}/>)}
              </div>
              {/* ...outros atendimentos */}
            </div>
          </div>
        </div>

        {/* Coluna 2 - Exames agendados + Fila */}
        <div className="col-md-6 d-flex flex-column gap-3">
          <div className="p-5 rounded border-1 border-gradient custom-shadow mb-3">
            <h5 className="fw-bold fs-4">
              Você tem <span className="text-gradient">um</span> exame agendado!
            </h5>
            <p className="text-purple mb-1">Alice Pereira Dias</p>
            <div className="border rounded p-4 d-flex justify-content-between">
              <span>Biópsia dos Pulmões</span>
              <span className="text-purple">11/03/2025</span>
            </div>
          </div>

          <div className="p-5 rounded border-1 border-gradient custom-shadow container-fluid">
            <h5 className="fw-bold fs-4">
              Você está na fila para <span className="text-gradient">um</span> exame!
            </h5>
            <p className="text-purple mb-1">Alice Pereira Dias</p>
            <div className="border rounded p-4 d-flex justify-content-between w-100">
              <span>Biópsia dos Pulmões</span>
              <small className="text-muted text-end">Solicitado para reagendamento no dia<br/>23/12/2024</small>
            </div>
          </div>

          <p className="mt-2 small text-purple">
            Estamos aqui para cuidar de vocês! O exame da sua criança já está na fila e deve ser agendado dentro dos próximos 2 meses.
            Fique tranquilo, avisaremos assim que uma vaga estiver disponível.
          </p>
        </div>
      </div>
    </div>
  );
}
