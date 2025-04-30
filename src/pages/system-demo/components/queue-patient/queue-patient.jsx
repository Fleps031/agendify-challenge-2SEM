import './queue-patient.css'
import { useMemo } from 'react';

export function CardExame({ nomePaciente, nomeExame, dataExame }) {
  return (
    <div className="mb-3 ">
      <p className="text-purple mb-1">{nomePaciente}</p>
      <div className="height-total border rounded p-2 d-flex justify-content-between align-items-center flex-wrap fs-5 card-content-bootstrap">
        <span>{nomeExame}</span>
        <span className="text-purple">{dataExame}</span>
      </div>
    </div>
  )
}

function CardSimples({ tituloInicio, qtdExames, tituloFim, nomePaciente, exame, dataInfo, infoExtra, altura=''}) {
  const exameLabel = qtdExames.qtd > 1 ? 'exames' : 'exame';
  const tituloFimCorrigido = qtdExames.qtd > 1
    ? tituloFim.replace('agendado', 'agendados')
    : tituloFim.replace('agendados', 'agendado');


  return (
    <div className={'gradient-border custom-shadow d-flex flex-column ' + altura} >
      <div className="inner d-flex flex-column h-100">
        <h5 className="fw-bold fs-4">
          {tituloInicio} <span className="text-gradient">{qtdExames.extenso}</span> {exameLabel} {tituloFimCorrigido}
        </h5>
        <p className="text-purple">{nomePaciente}</p>
        <div className="border rounded p-4 d-flex justify-content-between w-100 flex-wrap fs-5 card-content-bootstrap h-100">
          <span>{exame}</span>
          <small className={infoExtra ? "text-muted" : "text-purple"}>
            {dataInfo}
          </small>
        </div>
      </div>
    </div>
  );
}

export default function QueuePatient() {
  const nomesResponsáveis = ['Jorge Pereira Dias', 'Paula Silva', 'Maria Moura', 'Ana Andrade', 'Fernando Lima', 'Evandro Souza'];
  const nomesPacientes = ['Alice Pereira Dias', 'Carlos Silva', 'Beatriz Moura', 'Lucas Andrade', 'Juliana Lima', 'João Souza'];
  const exames = ['Exame de sangue', 'Tomografia', 'Ultrassonografia', 'Biópsia dos Pulmões', 'Ressonância Magnética'];
  const datas = ['24/08/2025', '26/08/2025', '28/07/2025', '11/06/2025', '15/09/2025', '18/11/2025'];
  const numerosPorExtenso = [
    { qtd: 1, extenso: 'um' },
    { qtd: 2, extenso: 'dois' },
    { qtd: 3, extenso: 'três' },
    { qtd: 4, extenso: 'quatro' },
    { qtd: 5, extenso: 'cinco' },
  ];

  const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const getSaudacao = () => {
    const hora = new Date().getHours();
    if (hora < 12) return 'Bom dia';
    if (hora < 18) return 'Boa tarde';
    return 'Boa noite';
  };

  const getNomesDiferentes = () => {
    const nomeResponsavel = getRandom(nomesResponsáveis);
    let nomePaciente = getRandom(nomesPacientes);
    while (nomeResponsavel === nomePaciente) {
      nomePaciente = getRandom(nomesPacientes);
    }
    return { nomeResponsavel, nomePaciente };
  };

  const { nomeResponsavel, nomePaciente } = useMemo(getNomesDiferentes, []);

  const saudacao = getSaudacao();

  const getExamesDiferentes = () => {
    let exameAgendado = getRandom(exames);
    let exameFila = getRandom(exames);
    while (exameAgendado === exameFila) {
      exameFila = getRandom(exames);
    }
    return { exameAgendado, exameFila };
  };

  const { exameAgendado: exameAgendadoNome, exameFila: exameFilaNome } = useMemo(getExamesDiferentes, []);

  const exameAgendado = useMemo(() => {
    const qtdExames = getRandom(numerosPorExtenso);
    return {
      altura:' h-50 ',
      tituloInicio: 'Você tem',
      qtdExames,
      tituloFim: 'agendado!',
      nomePaciente,
      exame: exameAgendadoNome,
      dataInfo: getRandom(datas),
      infoExtra: false
    };
  }, [nomePaciente, exameAgendadoNome]);

  const exameFila = useMemo(() => {
    const qtdExames = getRandom(numerosPorExtenso);
    return {
      altura:'h-50',
      tituloInicio: 'Você está na fila para',
      qtdExames,
      tituloFim: '!',
      nomePaciente,
      exame: exameFilaNome,
      dataInfo: <>Solicitado para reagendamento dia {getRandom(datas)}</>,
      infoExtra: true
    };
  }, [nomePaciente, exameFilaNome]);

  const queuePacientes = useMemo(() => {
    return Array.from({ length: 5 }, () => ({
      nomePaciente: getRandom(nomesPacientes),
      nomeExame: getRandom(exames),
      dataExame: getRandom(datas),
    }));
  }, []);

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col text-center">
          <h2 className="fw-bold fs-1">
            {saudacao}, <span className="text-gradient">{nomeResponsavel}!</span>
          </h2>
        </div>
      </div>

      <div className="row d-flex align-items-stretch">
        <div className="col-md-6 mb-4">
          <div className="gradient-border custom-shadow d-flex flex-column ">
            <div className="inner d-flex flex-column h-100">
              <h5 className="fw-bold text-center mb-3 fs-3">Seus últimos atendimentos</h5>
              <div className="scroll-area height-max flex-grow-1">
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

        <div className="col-md-6 d-flex flex-column gap-3 h-100">
          <CardSimples {...exameAgendado} />
          <CardSimples {...exameFila} />
          <p className="mt-2 fs-5 text-purple">
            Estamos aqui para cuidar de vocês! O exame da sua criança já está na fila e deve ser agendado dentro dos próximos 2 meses.
            Fique tranquilo, avisaremos assim que uma vaga estiver disponível.
          </p>
        </div>
      </div>
    </div>
  );
}