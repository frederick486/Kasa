import React, { useState, useEffect } from 'react'
import ApartmentCard from '../apartmentCard/ApartmentCard'
import './apartmentGrid.css'
import {useApartments } from '../../hooks/useApartments.jsx'


function ApartmentGrid() {

  // // chargement composant Version 1
  // const [apartments, setApartments] = useState([]);

  // useEffect(fetchApartments, [])

  // function fetchApartments() {
  //   fetch("db.json")
  //   .then((res) => res.json())
  //   .then((res) => setApartments(res))
  //   .catch(console.error);
  // }

  // // chargement du composant Version 2
  // const [apartments, setApartments] = useState([]);

  // useEffect(() => {
  //   console.log("FETCH")
  //   const abortController = new AbortController();
  //   fetch("db.json", { signal: abortController.signal })
  //   .then((res) => res.json())
  //   .then((res) => setApartments(res))
  //   .catch(console.error); 
  //   return () => {
  //     console.log("CLEANUP");
  //     abortController.abort();
  //   };
  // }, []);


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
