import React from 'react'

import "./About.css"
import AboutImage from "../../assest/about.jpg"
import Lunch1 from "../../assest/lunch-2.jpg"
import Lunch2 from "../../assest/lunch-6.jpg"
import Lunch3 from "../../assest/lunch-8.jpg"

const About = () => {
    return(
            <div className="AboutContainer">
                <div className="ImageDiv">
                    <img src={AboutImage} className="imageSize"></img>
                </div>
                <div className="abputDescription">
                    <div className="containerTitle">
                        <h2 className="aboutTitle">About</h2>
                        <h2>Bienvenue a Drop-Food</h2>
                    </div>
                    <div>
                        <div className="desciptionP">
                        Drop Food sous traite une partie des livraisons à 
                        son partenaire Stuart. Une partie des livraisons 
                        sont assurées en vélo, sans émission de CO2. Une 
                        partie des livraisons est toutefois assuré par les 
                        restaurants eux mêmes,
                        
                         L'utilisation d'emballages recyclables est 
                         laissé à la bonne volonté des restaurants.
                         Drop Food est un pionnier de la commande de repas à 
                         domicile bien avant l'émergence de ses concurrents. 
                         Aujourd'hui, la concurrence a complètement rattrapé 
                         son retard et sait aussi proposer des 
                         services très innovants.
                        </div>
                        <h2 style={{marginLeft: '3rem', paddingLeft: '3rem'}}>Recette Spéciale</h2>
                        <div className="ImageDescContainer">
                            <img src={Lunch1} className="imageDEscription" />
                            <img src={Lunch2} className="imageDEscription" />
                            <img src={Lunch3} className="imageDEscription" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About
