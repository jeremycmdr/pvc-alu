import React, { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Contact.css';

const Contact = () => {
    // Fix Leaflet default marker icon issue
    useEffect(() => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
            iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
    }, []);

    const workshopPosition = [44.296872, 19.068228];

    const form = React.useRef();
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // ZAMENITE OVE VREDNOSTI SA VAŠIM IZ EMAILJS DASHBOARD-A
        const SERVICE_ID = 'service_vx7acjg';
        const TEMPLATE_ID = 'template_vxdv7lu';
        const PUBLIC_KEY = 'wTD6ilxwwdQo0TmDz';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                alert('Poruka uspešno poslata!');
                e.target.reset();
            }, (error) => {
                alert('Došlo je do greške prilikom slanja poruke. Molimo pokušajte ponovo.');
                console.log(error.text);
            })
            .finally(() => {
                setIsSubmitting(false);
            });
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
                                    <p>Zvornik, Raševo</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="map-container">
                            <MapContainer
                                center={workshopPosition}
                                zoom={15}
                                scrollWheelZoom={false}
                                style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
                            >
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={workshopPosition}>
                                    <Popup>
                                        <strong>Al-prom Radionica</strong><br />
                                        Zvornik,Raševo
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-wrapper">
                        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                            <h3>Pošaljite Upit</h3>

                            <div className="form-group">
                                <label htmlFor="user_name">Ime i Prezime</label>
                                <input type="text" name="user_name" id="user_name" placeholder="Vaše ime i prezime" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="user_email">Email Adresa</label>
                                <input type="email" name="user_email" id="user_email" placeholder="vas@email.com" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="user_phone">Broj Telefona</label>
                                <input type="tel" name="user_phone" id="user_phone" placeholder="+387 65..." />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Poruka</label>
                                <textarea name="message" id="message" rows="4" placeholder="Zanima me ponuda za..." required></textarea>
                            </div>

                            <button type="submit" className="btn-submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Slanje...' : 'Pošalji email'}
                            </button>
                        </form>

                        <div className="social-links">
                            <a href="#" className="social-link"><Facebook size={24} /></a>
                            <a href="#" className="social-link"><Instagram size={24} /></a>
                        </div>
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
