import React from 'react'
import './Apartmentheader.css'
import {v4 as uuidv4} from 'uuid'


function Apartmentheader(props) {
    const name = props.flat.host.name;
    const [firstName, lastName] = name.split(" ");

  return (
    <div className="apartment__header">

        <div className="apartment__title">
            <h1>{ props.flat.title }</h1>
            <h2>{ props.flat.location }</h2>
            <div className="apartment__tags">
                {props.flat.tags.map((tag) => (<span key={uuidv4()}>{tag}</span>))}
            </div>
        </div>

        <div className="apartment__owner">

            <div className="apartment__owner__details">
                <h3>
                    <span>{firstName}</span>
                    <span>{lastName}</span>
                </h3>
                <div className="apartment__owner__badge">
                    <img src={props.flat.host.picture} alt="" />
                </div>
            </div>

            <div className="apartment__owner__stars">
                {[1, 2, 3, 4, 5].map((num) => (
                    <span 
                        key={uuidv4()} 
                        className={props.flat.rating >= num ? "on" : ""}
                    >★</span>
                ))}
            </div>
        </div>                                     
    </div>
  )
}

export default Apartmentheader

// ☆