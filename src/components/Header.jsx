import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

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

    const isHomePage = location.pathname === '/';

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                    Al-<span>prom</span>
                </Link>

                <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                </button>

                <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={closeMobileMenu}>Početna</Link>
                    <Link to="/modeli" className="nav-link" onClick={closeMobileMenu}>Modeli</Link>
                    <a href={isHomePage ? "#kontakt" : "/#kontakt"} className="nav-link btn-contact" onClick={closeMobileMenu}>Kontakt</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
