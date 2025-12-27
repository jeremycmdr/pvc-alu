import React from 'react';
import { Link } from 'react-router-dom';
import { AppWindow, DoorOpen, Blinds, ShieldCheck, LayoutTemplate } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        id: 0,
        title: 'Modeli',
        description: 'Pogledajte katalog naših modela i izaberite savršen dizajn za vaš dom.',
        icon: <LayoutTemplate size={40} />,
        color: 'accent-gold',
        link: '/modeli'
    },
    {
        id: 1,
        title: 'PVC Prozori',
        description: 'Vrhunska toplotna i zvučna izolacija uz minimalno održavanje. Idealni za svaki dom.',
        icon: <AppWindow size={40} />,
        color: 'blue',
        link: '/pvc-prozori'
    },
    {
        id: 2,
        title: 'Klizni sistemi',
        description: 'Maksimalna funkcionalnost i estetska elegancija. Idealni za terase i moderne staklene zidove.',
        icon: <DoorOpen size={40} />,
        color: 'slate',
        link: '/klizni-sistemi'
    },
    {
        id: 3,
        title: 'Ulazna Vrata',
        description: 'Sigurnost na prvom mestu. Veliki izbor panela i boja koji će vašem domu dati karakter.',
        icon: <ShieldCheck size={40} />,
        color: 'sky',
        link: '/ulazna-vrata'
    },
    {
        id: 4,
        title: 'Roletne i Komarnici',
        description: 'Potpuna zaštita od sunca i insekata. Spoljašnje i unutrašnje roletne, fiksni i rolo komarnici.',
        icon: <Blinds size={40} />,
        color: 'indigo',
        link: '/roletne-i-komarnici'
    }
];

const Services = () => {
    return (
        <section className="services-section" id="ponuda">
            <div className="container">
                <div className="section-header">
                    <h2>Naša Ponuda</h2>
                    <p>Kvalitetna rešenja za vaš dom po meri</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service) => {
                        const CardContent = (
                            <>
                                <div className="icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <span className="service-link">
                                    {service.title === 'Modeli' ? 'Pogledaj modele' : 'Saznajte više'} &rarr;
                                </span>
                            </>
                        );

                        return service.link ? (
                            <Link
                                key={service.id}
                                to={service.link}
                                className={`service-card color-${service.color}`}
                            >
                                {CardContent}
                            </Link>
                        ) : (
                            <a
                                key={service.id}
                                href="#kontakt"
                                className={`service-card color-${service.color}`}
                            >
                                {CardContent}
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
