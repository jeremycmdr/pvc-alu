import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Models.css'; // Ponovo koristimo isti CSS radi konzistentnosti

const ServicePage = ({ title, description }) => {
    return (
        <div className="models-page">
            <div className="models-hero">
                <div className="container">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>

            <div className="container">
                {/* Prazan prostor za budući sadržaj */}
                <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', fontStyle: 'italic' }}>
                        Sadržaj za ovu sekciju je u pripremi...
                    </p>
                </div>

                <div className="categories-footer">
                    <Link to="/" className="btn-back-home-simple">
                        <ArrowLeft size={18} /> Nazad na početnu
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
