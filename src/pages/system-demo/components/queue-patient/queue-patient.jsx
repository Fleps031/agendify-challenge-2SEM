import './queue-patient.css'
import { useMemo } from 'react';
import { useNavigate } from 'react-router';



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

function CardSimples({ infosLabel, exames}) {
  console.log(infosLabel, exames)
  const exameLabel = infosLabel?.qtdExames?.qtd > 1 ? 'exames' : 'exame';
  const tituloFimCorrigido = infosLabel?.qtdExames?.qtd > 1
    ? infosLabel?.tituloFim?.replace('agendado', 'agendados')
    : infosLabel?.tituloFim?.replace('agendados', 'agendado');


  return (
    <div className={'gradient-border custom-shadow d-flex flex-column ' + exames[0]?.altura} >
      <div className="inner d-flex flex-column h-100">
        <h5 className="fw-bold fs-4">
          {infosLabel?.tituloInicio} <span className="text-gradient">{infosLabel?.qtdExames?.extenso}</span> {exameLabel} {tituloFimCorrigido}
        </h5>
        {exames.map((el, idx) => {
          return(
            <>
              <p className="text-purple">{el.nomePaciente}</p>
              <div className="border rounded p-4 d-flex justify-content-between w-100 flex-wrap fs-5 card-content-bootstrap h-100" key={'examefila' + idx + 1}>
                <span>{el?.exame}</span>
                <small className={el.infoExtra ? "text-muted" : "text-purple"}>
                  {el?.dataInfo}
                </small>
              </div>
            </>
          )
        })}

      </div>
    </div>
  );
}

export default function QueuePatient() {
  const navigate = useNavigate();

  const nomesResponsáveis = ['Jorge Pereira Dias', 'Paula Silva', 'Maria Moura', 'Ana Andrade', 'Fernando Lima', 'Evandro Souza'];
  const nomesPacientes = ['Alice Pereira Dias', 'Carlos Silva', 'Beatriz Moura', 'Lucas Andrade', 'Juliana Lima', 'João Souza'];
  const exames = [
    'Exame de sangue',
    'Tomografia',
    'Ultrassonografia',
    'Biópsia dos Pulmões',
    'Ressonância Magnética',
    'Raio-X',
    'Eletrocardiograma (ECG)',
    'Eletroencefalograma (EEG)',
    'Teste do Pezinho',
    'Teste de Visão',
    'Teste de Audição (Otoemissões Acústicas)',
    'Exame de Urina',
    'Gasometria Arterial',
    'Ecocardiograma',
    'Endoscopia Digestiva',
    'Espirometria (Função Pulmonar)',
    'Teste de Alergia',
    'Cultura de Fezes',
    'Punção Lombar',
    'Mapa da Pressão Arterial (MAPA)'
  ]
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

  function solicitarAgendamento() {
    navigate('/agendify-challenge-2SEM/marcar-exame', {replace: true})
  }
  const exameAgendado = useMemo(() => {
    const qtdExames = getRandom(numerosPorExtenso);
    return {
      infoLabel:{
        tituloInicio: 'Você tem',
        qtdExames,
        tituloFim: 'agendado!',
      },
      exames: [
        {
          altura:' h-50 ',
          nomePaciente,
          exame: exameAgendadoNome,
          dataInfo: getRandom(datas),
          infoExtra: false
        }
      ]
     
    };
  }, [nomePaciente, exameAgendadoNome]);

  const exameFila = useMemo(() => {
    console.log("Examefila")
    if(localStorage.getItem('filaExames') == undefined){
      let starterExame = {
        altura:'h-50',

        nomePaciente,
        exame: exameFilaNome,
        dataInfo: `Solicitado para reagendamento dia ${getRandom(datas)}`,
        infoExtra: true
      };

      localStorage.setItem('filaExames', JSON.stringify(
        {
          infoLabel: {   
            tituloInicio: 'Você está na fila para',
            qtdExames: {
              qtd: '1',
              extenso: 'um'
            },
            tituloFim: '!'
          },
          exames: [starterExame]
        }
      ))

      return [starterExame]
    }
    else{
      console.log("else")
      let filaLocal = JSON.parse(localStorage.getItem('filaExames'));
      console.log(filaLocal)
      return filaLocal
    }
    
   
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
          <button
                type="submit"
                className="btn btn-gradient w-75"
                onClick={solicitarAgendamento}
              >
                Solicitar agendamento
          </button>
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
          <CardSimples infosLabel={exameAgendado.infoLabel} exames={exameAgendado.exames} />
          <CardSimples infosLabel={exameFila.infoLabel} exames={exameFila.exames} />
          <p className="mt-2 fs-5 text-purple">
            Estamos aqui para cuidar de vocês! O exame da sua criança já está na fila e deve ser agendado dentro dos próximos 2 meses.
            Fique tranquilo, avisaremos assim que uma vaga estiver disponível.
          </p>
        </div>
      </div>
    </div>
  );
}