import React from 'react';
import { AppWindow, DoorOpen, Blinds, ShieldCheck } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'PVC Prozori',
        description: 'Vrhunska toplotna i zvučna izolacija uz minimalno održavanje. Idealni za svaki dom.',
        icon: <AppWindow size={40} />,
        color: 'blue'
    },
    {
        id: 2,
        title: 'ALU Stolarija',
        description: 'Moderan dizajn, izuzetna čvrstoća i trajnost. Savršen izbor za poslovne prostore i moderne kuće.',
        icon: <DoorOpen size={40} />,
        color: 'slate'
    },
    {
        id: 3,
        title: 'Ulazna Vrata',
        description: 'Sigurnost na prvom mestu. Veliki izbor panela i boja koji će vašem domu dati karakter.',
        icon: <ShieldCheck size={40} />,
        color: 'sky'
    },
    {
        id: 4,
        title: 'Roletne i Komarnici',
        description: 'Potpuna zaštita od sunca i insekata. Spoljašnje i unutrašnje roletne, fiksni i rolo komarnici.',
        icon: <Blinds size={40} />,
        color: 'indigo'
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
                    {servicesData.map((service) => (
                        <div key={service.id} className={`service-card color-${service.color}`}>
                            <div className="icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#kontakt" className="service-link">Saznajte više &rarr;</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
