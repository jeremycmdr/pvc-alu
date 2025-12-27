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

    const handleHomeClick = () => {
        closeMobileMenu();
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleContactClick = (e) => {
        closeMobileMenu();
        if (isHomePage) {
            e.preventDefault();
            const contactSection = document.getElementById('kontakt');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo" onClick={handleHomeClick}>
                    Al-<span>prom</span>
                </Link>

                <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                    <span className={mobileMenuOpen ? 'open' : ''}></span>
                </button>

                <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/" className="nav-link" onClick={handleHomeClick}>Početna</Link>
                    <Link to="/modeli" className="nav-link" onClick={closeMobileMenu}>Modeli</Link>
                    <Link to="/?contact=true" className="nav-link btn-contact" onClick={handleContactClick}>Kontakt</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
