import './queue-patient.css'

function CardExame({ nomePaciente, nomeExame, dataExame }) {
  return (
    <div className="mb-3">
      <p className="text-purple mb-1">{nomePaciente}</p>
      <div className="height-total border rounded p-2 d-flex justify-content-between align-items-center">
        <span>{nomeExame}</span>
        <span className="text-purple">{dataExame}</span>
      </div>
    </div>
  )
}

function CardSimples({ tituloInicio, qtdExames, tituloFim, nomePaciente, exame, dataInfo, infoExtra }) {
  return (
    <div className="gradient-border custom-shadow">
      <div className="inner">
        <h5 className="fw-bold fs-4">
          {tituloInicio} <span className="text-gradient">{qtdExames}</span> {tituloFim}
        </h5>
        <p className="text-purple mb-1">{nomePaciente}</p>
        <div className="border rounded p-4 d-flex justify-content-between w-100">
          <span>{exame}</span>
          <small className={infoExtra ? "text-muted text-end" : "text-purple"}>
            {dataInfo}
          </small>
        </div>
      </div>
    </div>
  );
}

export default function QueuePatient() {
  const queuePacientes = [
    { nomePaciente: 'Mark', nomeExame: 'Exame de sangue', dataExame: '24/08/2025' },
    { nomePaciente: 'Dipper', nomeExame: 'Tomografia computadorizada', dataExame: '26/08/2025' },
    { nomePaciente: 'Pietra', nomeExame: 'Ultrassonografia', dataExame: '28/08/2025' },
    { nomePaciente: 'Mark', nomeExame: 'Exame de sangue', dataExame: '24/08/2025' },
    { nomePaciente: 'Dipper', nomeExame: 'Tomografia computadorizada', dataExame: '26/08/2025' },
    { nomePaciente: 'Pietra', nomeExame: 'Ultrassonografia', dataExame: '28/08/2025' },
    { nomePaciente: 'Mark', nomeExame: 'Exame de sangue', dataExame: '24/08/2025' },
    { nomePaciente: 'Dipper', nomeExame: 'Tomografia computadorizada', dataExame: '26/08/2025' },
    { nomePaciente: 'Pietra', nomeExame: 'Ultrassonografia', dataExame: '28/08/2025' }
  ];

  const exameAgendado = {
    tituloInicio: 'Você tem',
    qtdExames: 'um',
    tituloFim: 'exame agendado!',
    nomePaciente: 'Alice Pereira Dias',
    exame: 'Biópsia dos Pulmões',
    dataInfo: '11/03/2025',
    infoExtra: false
  };

  const exameFila = {
    tituloInicio: 'Você está na fila para',
    qtdExames: 'um',
    tituloFim: 'exame!',
    nomePaciente: 'Alice Pereira Dias',
    exame: 'Biópsia dos Pulmões',
    dataInfo: <>Solicitado para reagendamento no dia<br />23/12/2024</>,
    infoExtra: true
  };

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
          <div className="gradient-border custom-shadow" style={{ height: '100%' }}>
            <div className="inner d-flex flex-column">
              <h5 className="fw-bold text-center mb-3 fs-3">Seus últimos atendimentos</h5>
              <div className="scroll-area height-max">
                {queuePacientes.map((el, idx) => (
                  <CardExame
                    key={idx}
                    nomePaciente={el.nomePaciente}
                    nomeExame={el.nomeExame}
                    dataExame={el.dataExame}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coluna 2 - Exames agendados + Fila */}
        <div className="col-md-6 d-flex flex-column gap-3">
          <CardSimples {...exameAgendado} />
          <CardSimples {...exameFila} />
          <p className="mt-2 small text-purple">
            Estamos aqui para cuidar de vocês! O exame da sua criança já está na fila e deve ser agendado dentro dos próximos 2 meses.
            Fique tranquilo, avisaremos assim que uma vaga estiver disponível.
          </p>
        </div>
      </div>
    </div>
  );
}
