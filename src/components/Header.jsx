import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <div className="logo">
                    Al-<span>prom</span>
                </div>

                <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                </button>

                <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="#home" className="nav-link" onClick={closeMobileMenu}>Početna</a>
                    <a href="#ponuda" className="nav-link" onClick={closeMobileMenu}>Ponuda</a>
                    <a href="#galerija" className="nav-link" onClick={closeMobileMenu}>Galerija</a>
                    <a href="#kontakt" className="nav-link btn-contact" onClick={closeMobileMenu}>Kontakt</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
