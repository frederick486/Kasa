import React, { useState, useEffect } from 'react'
import ApartmentCard from '../apartmentCard/ApartmentCard'
import './apartmentGrid.css'
import {useApartments } from '../../hooks/useApartments.jsx'


function ApartmentGrid() {

  // chargement du composant Version 3 (custon hook)
  const apartments = useApartments();
  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <ApartmentCard 
          key={apartment.id} 
          id={apartment.id} 
          cover={apartment.cover} 
          title={apartment.title}
        />
      ))}

    </div>
  )
}

export default ApartmentGrid
