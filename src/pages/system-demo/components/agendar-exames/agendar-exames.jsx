import { useState } from "react"
import '../login-form/login-form.css'
import imgLogin from '../../../../images/home_1.png'
import moment from 'moment';
import 'moment/locale/pt-br';
import { Router, useNavigate } from "react-router";



moment.locale('pt-br');
export default function AgendarExames() {
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [nomePaciente, setNomePaciente] = useState('');
  const [error, setError] = useState('');
  const [exame, setExame] = useState("");

  const [dateValue, setDateValue] = useState('');
  const [isNewDateValid, setIsValid] = useState(true);

  const navigate = useNavigate()

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
  function handleSubmit(e) {
    e.preventDefault()
    if (!nomeResponsavel.trim() || !nomePaciente.trim() || !exame.trim() || !isNewDateValid || !dateValue.trim()) {
      setError('Por favor, preencha todos os campos corretamente.')
      return
    }
    setError('')
    salvarExame();
    
    navigate('/agendify-challenge-2SEM/sistema/fila')
  }

  function salvarExame() {
    let novoExame = {
        altura: "h-50",
        nomePaciente: nomePaciente,
        exame: exame,
        dataInfo: `Agendamento solicitado para o dia ${dateValue}`,
        infoExtra: true 
    }

    let filaLocal = JSON.parse(localStorage.getItem('filaExames'));

    let tempFila = {...filaLocal};

    tempFila.exames.push(novoExame);

    localStorage.setItem('filaExames', JSON.stringify(tempFila));

  }

     
  const validateDate = (date) => {
    const cleaned = date.replace(/\D/g, '');
    if (cleaned.length !== 8) {
    setIsValid(false);
    return;
    }
    const formatted = `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}/${cleaned.slice(4)}`;
    const isValidFormat = moment(formatted, 'DD/MM/YYYY', true).isValid();
    setIsValid(isValidFormat);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setDateValue(value);
    validateDate(value);
  };

  function onBack(){
    navigate('/agendify-challenge-2SEM/sistema/fila')
  }

  return (
    <div className="login-form-wrapper d-flex flex-column flex-md-row vh-100">
      {/* Coluna do formulário */}
      <div className="flex-fill bg-white p-4 position-relative">
        <a
          href="#"
          className="back-link"
          onClick={e => {
            e.preventDefault()
            onBack()
          }}
        >
          ← Voltar
        </a>

        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="card p-4" style={{ maxWidth: '380px', width: '100%' }}>
            <h2 className="card-title mb-3 text-start">Solicitar um exame</h2>
            <p className="card-text mb-4 text-start">Preencha as informações abaixo</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={"Nome do responsável"}
                  value={nomeResponsavel}
                  onChange={e => {
                    setNomeResponsavel(e.target.value)
                    if (error) setError('')
                  }}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome do paciente"
                  value={nomePaciente}
                  onChange={e => {
                    setNomePaciente(e.target.value)
                    if (error) setError('')
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Tipo de exame/consulta</label>
                <select
                    className="form-select text-black"
                    value={exame}
                    onChange={(e) => setExame(e.target.value)}
                >
                <option value="">Selecione...</option>
                {exames.map((el, idx) => (
                    <option value={el} key={idx}>{el}</option>
                ))}
                </select>
              </div>

              <label className="form-label">Data</label>
              <input
                type="text"
                className={`form-control text-black ${!isNewDateValid ? 'is-invalid' : ''}`}
                placeholder="dd/mm/aaaa"
                value={dateValue}
                onChange={handleDateChange}
              />

              {!isNewDateValid && (
                <div className="invalid-feedback d-block">
                Data inválida. Use o formato: dd/mm/aaaa
                </div>
              )}

            {error && (
            <div className="text-danger mb-3">
                {error}
            </div>
            )}

              <button
                type="submit"
                className="btn btn-gradient w-100 mt-4"
              >
                Solicitar agendamento
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Coluna da imagem */}
      <div className="flex-fill">
        <img
          src={imgLogin}
          alt="Ambiente Hospitalar"
          className="h-100 w-100 object-cover"
        />
      </div>
    </div>
  )
}
