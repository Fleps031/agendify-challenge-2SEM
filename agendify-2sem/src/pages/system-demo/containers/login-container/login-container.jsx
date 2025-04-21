import LoginForm from '../../components/login-form/login-form'
import LoginHome from '../../components/login-home/login-home'
import './login-container.css'

export default function LoginContainer(){
    return(
        <>
            <h1>Login Container Works!</h1>
            <LoginHome></LoginHome>
            <LoginForm></LoginForm>
        </>
    )
}