import './benefits-component.css'

export default function BenefitsComponent(){
    return(
        <>
            <div className='d-flex container-fluid flex-column w-100'>
                <div className='altura-card-beneficio d-flex justify-content-center align-items-center'>
                    <h3 className='txt-roxo-custom text-center'>Por que escolher a Agendify?</h3>
                </div>
                <div className='d-flex bg-roxo-custom altura-card-beneficio'>
                    <div className='line-custom-ver3 bg-white'></div>
                        <p>Centenas de pacientes perdem agendamentos e consultas por indisponibilidade de horários e falta de visibilidade do tempo de espera e seu lugar na fila todos os anos</p>
                </div>
            </div>
        </>
    )
}