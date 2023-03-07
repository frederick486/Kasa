import React, { useState } from 'react'
import './descriptionPanel.css'

function DescriptionPanel (props) {
  const [isContentVisible, setIsContentVisible] = useState(true)

  const showContent = () => {
    setIsContentVisible(!isContentVisible)
  }

  // const contentClass = isContentVisible ? "" : "hidden"
  const chevronClass = "fa-solid " + (isContentVisible ? "fa-chevron-up" : "fa-chevron-down")
  return (
    <div className="description__panel">
        <p className='description__panel__header'  onClick={showContent}>
            <span>{props.title}</span>
            {/* <i className="fa-solid fa-chevron-down" onClick={showContent}></i> */}
            <i className={chevronClass}></i>
        </p>
        
        {/* {isContentVisible && <ul className="description__panel__content" >{props.content}</ul>} */}
        {isContentVisible 
          ? <ul className="description__panel__content" >{props.content}</ul>
          : <ul className="description__panel__content__hidden" >{props.content}</ul>
        }
    </div>    
  )
}

export default DescriptionPanel
