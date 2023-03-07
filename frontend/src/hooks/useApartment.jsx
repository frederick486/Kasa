import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'


export const useApartment = () => {
    const location = useLocation();
    const [selectedFlat, setSelectedFlat] = useState(null)
    useEffect(() => {
        const abortController = new AbortController();
        // fetch("db.json", { signal:abortController.signal })
        fetch("db.json")
        .then((res) => res.json())
        .then((flats) => {
          const flat = flats.find((flat) => flat.id === location.state.apartmentId)
          setSelectedFlat(flat)
        })
        .catch(console.error);
        return () => {
            abortController.abort();
        }
      }, [])
    return selectedFlat;
}

