import { useState, useEffect } from "react";

export const useApartments = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        console.log("FETCH")
        const abortController = new AbortController();
        fetch("db.json", { signal: abortController.signal })
        .then((res) => res.json())
        .then((res) => setApartments(res))
        .catch(console.error); 

    return () => {
        console.log("CLEANUP");
        abortController.abort();
    };
    }, []);
  return apartments;
}