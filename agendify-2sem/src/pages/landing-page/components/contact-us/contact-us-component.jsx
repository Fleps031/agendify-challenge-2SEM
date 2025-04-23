import './contact-us-component.css'
import contactPhoto from "../../../../images/contact/contactPhoto.jpg"

export default function ContactUsComponent(){
    return(
        <>
            <div className="d-flex container-fluid mt-100 justify-content-center align-items-center">
                <div className="position-relative w-25 me-5">
                    <img className="w-100" src={contactPhoto} alt="Contato" />
                    <p className="text-white position-absolute top-50 start-50 translate-middle text-center fs-5">Além de todas essas vantagens, o Agendify notifica seus pacientes por SMS, Whatsapp e E-mail para deixá-los informados em todas as etapas do processo!</p>
                </div>

                <div className="d-flex flex-column h-100 justify-content-center">
                    <div className="d-flex flex-column container-fluid align-items-center">
                        <h2 className="d-flex justify-content-center">Junte-se a nós, e garanta mais transparência e agilidade para os seus pacientes.</h2>
                        <div className="d-flex flex-column rounded borda sombra h-50 w-50 gap-2 mt-4 p-2 align-items-center justify-content-center">
                            <input className="m-1 w-75 rounded bg-black text-white rounded-pill" placeholder="E-mail" type="text" />
                            <input className="m-1 w-75 rounded bg-black text-white rounded-pill" placeholder="CPF/CNPJ" type="text" />
                            <input className="m-1 w-75 rounded bg-black text-white rounded-pill" placeholder="Número de telefone" type="text" />
                            <button className="m-1 w-25 botao botao-suc txt-roxo-custom">Cadastre-se</button>
                        </div>
                    </div>

                    <div className="d-flex flex-column justify-content-end mt-5 align-items-center">
                        <h2>Já possui cadastro? Faça login e acesse o sistema!</h2>
                        <button className="m-2 w-25 botao botao-suc">Fazer login!</button>
                    </div>
                </div>
            </div>
        </>
    )
}