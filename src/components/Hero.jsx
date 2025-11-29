import React from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <img src={heroBg} alt="Moderni PVC prozori" />
                <div className="overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <h1>Vrhunska <span className="highlight">PVC i ALU</span> Stolarija za Vaš Dom</h1>
                    <p>
                        Spoj energetske efikasnosti, modernog dizajna i dugotrajnosti.
                        Izrađujemo prozore i vrata po meri koji štede vaš novac i ulepšavaju prostor.
                    </p>
                    <div className="hero-buttons">
                        <a href="#kontakt" className="btn btn-primary">Zatražite Ponudu</a>
                        <a href="#galerija" className="btn btn-outline">Pogledajte Radove</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
