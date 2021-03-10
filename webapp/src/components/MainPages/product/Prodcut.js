import React from 'react'

import './Product.css'

import { GiPositionMarker } from 'react-icons/gi'
import { IoFastFood } from 'react-icons/io5'
import { GiTakeMyMoney } from "react-icons/gi"


const Product = () => {
    return(
        <div className="ProdcutContainer">
            <div className="titleContainerProduct">
                <h5>Comment ça marche ?</h5>
                <h5 style={{color: '#54c391'}}>C'est trés simple !</h5>
            </div>
            <div className="serviceContainer">
                <div className="serviceStepContainer">
                    <GiPositionMarker className="GrMapLocation" size='80' />
                    <h6>Adresse</h6>
                    <p className="Pdesc">Enter le nom de votre rue ou laissez-nous déterminer votre position.</p>
                </div>
                <div className="serviceStepContainer">
                    <IoFastFood  className="IoFastFood" size='80'/>
                    <h6>Sélection</h6>
                    <p className="Pdesc">Quelles sont vos envies du moment ? Parcourez les menus et 
                        les avis clients pour faire votre choix.</p>
                </div>
                <div className="serviceStepContainer">
                    <GiTakeMyMoney  className="GiTakeMyMoney" size='80' />
                    <h6>Paiment et livraison</h6>
                    <p className="Pdesc">Réglez en espèces et recerver votre commende</p>
                </div>
            </div>
        </div>
    )
}

export default Product