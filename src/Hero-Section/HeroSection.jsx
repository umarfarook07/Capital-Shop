import React from 'react';
import mensCollectionImg from './Images/items1.jpg.webp';
import womensCollectionImg from './Images/items2.jpg.webp';
import babysCollectionImg from './Images/items3.jpg.webp';

import './HeroSection.css'

function HeroSection() {
    return (
        <section className="hero-section">            
            <div className="collection-grid">
                <div className="mens-collection">
                    <img className="collection-img" src={mensCollectionImg} alt="Men's Collection" />
                    <span>Men's Collection</span>
                </div>          
                <div className="womens-collection">
                    <img className="collection-img" src={womensCollectionImg} alt="Women's Collection" />
                    <span>Women's Collection</span>
                </div>
                <div className="baby-collection">
                    <img className="collection-img" src={babysCollectionImg} alt="Baby's Collection" />
                    <span>Baby's Collection</span>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
