import React from 'react';

import MenuHero from "../MenuHero/MenuHero"
import About from "../About/About"
import Product from '../product/Prodcut'


const  Home = () => {
    return (
        <div>
            <MenuHero />    
            <About />
            <Product />
        </div>
    )
}


export default Home;
