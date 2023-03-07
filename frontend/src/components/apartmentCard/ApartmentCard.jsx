import React from 'react'
import './apartmentCard.css'
import { Link } from 'react-router-dom'

function ApartmentCard(props) {
  const state = {
    apartmentId: props.id
  }
  return (
    <Link className='apartment__lien' to="/flat" state={state}>
      <div className='apartment__card'>
        <img className='apartment__card__image' src={props.cover} alt="" />
        <div className="apartment__subtitle">{props.title}</div>   
      </div>    
    </Link>
  )
}

export default ApartmentCard
