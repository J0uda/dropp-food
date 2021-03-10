import React, { useState } from 'react'

import './MenuHero.css'
import { Link } from 'react-router-dom'

const MenuHero = () => {
    const [text, setText] = useState('')
    const handleChange = (event) => {
      setText(event.target.value)
     }
    return(
        <div className="heroContainer">
            <div className="HeroContent">
                <div className="HeroItems">
                    <h1 className="heroH1">Faites-vous livrer vos envies !</h1>
                    <p className="HeroP">Des milliers d'offres exclusives en livraison</p>
                    <div style={{display: 'flex'}}>
                    <input type="text" className="inputStyleSearch" placeholder="Adresse, par ex Tunis" onChange={handleChange} value={text}/>
                    <Link to={`/restaurent/${text}`}><button>Continuer</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuHero