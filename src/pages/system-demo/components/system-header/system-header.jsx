import '../system-header/system-header.css'
import logoAgendify from '../../../../images/logo.svg'
import { useState } from 'react'    
import { Link } from "react-router";



export default function SystemHeader(){    
    return(
        <>
             <section className="navbar sticky-top bg-roxo-custom p-3 header-system">
                <div className="navbar-container">
                    <div className="navbar-brand">
                    <img src={logoAgendify} alt="logo Agendify" className="rounded"/>
                    <Link className="text-decoration-none" to="/agendify-challenge-2SEM/"><h1 className="text-white m-0">Agendify</h1></Link>
                    </div>
                </div>
            </section>
        </>
    )
}