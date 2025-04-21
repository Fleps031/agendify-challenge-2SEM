import QueueContainer from './containers/queue-container/queue-container'
import LoginContainer from './containers/login-container/login-container'
import './system-demo.css'

import { Routes, Route, Outlet } from 'react-router'


export default function SystemDemo(){
    return(
        <>
            <h1>System Demo Works!</h1>
            <Outlet></Outlet>
        </>
    )
}