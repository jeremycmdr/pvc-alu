import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Hvala na upitu! Kontaktiraćemo vas uskoro.');
    };

    return (
        <footer className="contact-section" id="kontakt">
            <div className="container">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Kontaktirajte Nas</h2>
                        <p className="contact-desc">
                            Imate pitanja ili želite besplatnu procenu?
                            Javite nam se putem forme ili nas nazovite direktno.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="icon-box">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4>Telefon</h4>
                                    <p>+387 65 123 456</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@alprom.ba</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4>Adresa</h4>
                                    <p>Karakaj bb, 75400 Zvornik</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={24} /></a>
                            <a href="#" className="social-link"><Instagram size={24} /></a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <h3>Pošaljite Upit</h3>

                            <div className="form-group">
                                <label htmlFor="name">Ime i Prezime</label>
                                <input type="text" id="name" placeholder="Vaše ime i prezime" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Adresa</label>
                                <input type="email" id="email" placeholder="vas@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Broj Telefona</label>
                                <input type="tel" id="phone" placeholder="+387 65..." />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Poruka</label>
                                <textarea id="message" rows="4" placeholder="Zanima me ponuda za..." required></textarea>
                            </div>

                            <button type="submit" className="btn-submit">Pošalji Poruku</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Al-prom. Sva prava zadržana.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
