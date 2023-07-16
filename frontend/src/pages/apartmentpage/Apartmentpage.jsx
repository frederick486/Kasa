import React, { useEffect, useState } from 'react'
import './apartmentpage.css'
import Apartmentheader from '../../components/apartmentheader/Apartmentheader'
import ImageBanner from '../../components/imageBanner/ImageBanner'
import DescriptionPanel from '../../components/descriptionPanel/DescriptionPanel'
import { useLocation } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { useApartment } from '../../hooks/useApartment'


function Apartmentpage() {

  const selectedFlat = useApartment();

  if(selectedFlat == null){ return <div>...LOADING</div>}
  return (
    <div className='apartment-page'>
      <ImageBanner pictures={ selectedFlat.pictures }/>
      <Apartmentheader flat={ selectedFlat }/>

      <div className="apartment__description__area">
        <DescriptionPanel 
          title="Description" 
          content={selectedFlat.description} 
        />
        <DescriptionPanel 
          title="Equipements" 
          content={selectedFlat.equipments.map((equipment) => (
            <li key={uuidv4()} >{equipment}</li>
          ))} 
        />
      </div>
              
    </div>
  )
}

export default Apartmentpage
