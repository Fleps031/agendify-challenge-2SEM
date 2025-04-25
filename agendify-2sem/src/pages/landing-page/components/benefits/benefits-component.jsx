import './benefits-component.css'

export default function BenefitsComponent(){
    return(
        <>
            <div className='d-flex container-fluid flex-column w-100 p-0'>
                <div className='altura-card-beneficio d-flex justify-content-center align-items-center'>
                    <h1 className='txt-roxo-custom text-center'>Por que escolher a Agendify?</h1>
                </div>
                <div className='d-flex bg-roxo-custom altura-card-beneficio align-items-center justify-content-center'>
                    <div className='d-flex line-custom-ver3 bg-white ms-3 mt-3 me-3'></div>
                    <p className = 'd-flex fs-4 align-items-center me-5 text-white texto'>Centenas de pacientes perdem agendamentos e consultas por indisponibilidade de horários e falta de visibilidade do tempo de espera e seu lugar na fila todos os anos</p>
                </div>
                <div className='d-flex txt-roxo-custom altura-card-beneficio align-items-center justify-content-center'>
                    <p className = 'd-flex fs-4 align-items-center ms-5 texto'>Nós automatizamos todo o processo de gerenciamento de desistências, analisando a fila em tempo real e priorizando pacientes com maior urgência, eliminando a necessidade de ligações repetitivas e garantindo rapidez no atendimento.</p>
                    <div className='d-flex line-custom-ver3 bg-roxo-custom me-3 mt-3'></div>
                </div>
                <div className='d-flex bg-roxo-custom altura-card-beneficio align-items-center justify-content-center'>
                    <div className='d-flex line-custom-ver3 bg-white ms-3 mt-3 me-3'></div>
                    <p className = 'd-flex fs-4 align-items-center me-5 text-white texto'>Os pacientes podem acompanhar a posição na fila diretamente pelo aplicativo ou site, recebendo notificações automáticas sobre vagas disponíveis, proporcionando uma experiência clara e confiável.</p>
                </div>
                <div className='d-flex txt-roxo-custom altura-card-beneficio align-items-center justify-content-center'>
                    <p className = 'd-flex fs-4 align-items-center ms-5 texto'>O sistema preenche vagas liberadas de forma eficiente, reduzindo o desperdício de horários e diminuindo a sobrecarga da equipe de atendimento, ao mesmo tempo que melhora os índices de satisfação dos seus pacientes.</p>
                    <div className='d-flex line-custom-ver3 bg-roxo-custom me-3 mt-3'></div>
                </div>
            </div>
        </>
    )
}