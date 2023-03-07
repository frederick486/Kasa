import React from 'react'
import './errorPageNotFound.css'
import Navbar from '../../components/navbar/Navbar'
import Main from '../../layout/main/Main'
import picture404 from '../../Assets/404.png'
import { Link } from 'react-router-dom'

function ErrorPageNotFound() {
  return (
    <>
        <Navbar />
        <Main>
            <div className="error__page">
                <div className="error__page__picture404_wrapper"> 
                    <img src={picture404} alt="Erreur 404"/>
                </div>
                <h2>Oups ! La page que vous demandez n'existe pas.</h2>
                <Link to='/'>Retourner sur la page d'acceuil</Link>
            </div>
        </Main>
    </>
  )
}

export default ErrorPageNotFound
