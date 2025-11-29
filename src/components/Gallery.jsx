import React from 'react';
import './Gallery.css';
import img1 from '../assets/gallery-1.png';
import img2 from '../assets/gallery-2.png';
import img3 from '../assets/gallery-3.png';
import img4 from '../assets/gallery-4.png';

const galleryItems = [
    { id: 1, src: img1, title: 'PVC Prozori', category: 'Enterijer' },
    { id: 2, src: img2, title: 'ALU Ulazna Vrata', category: 'Eksterijer' },
    { id: 3, src: img3, title: 'Klizne Stene', category: 'Dnevni Boravak' },
    { id: 4, src: img4, title: 'Moderna Kuća', category: 'Projekti' },
];

const Gallery = () => {
    return (
        <section className="gallery-section" id="galerija">
            <div className="container">
                <div className="section-header">
                    <h2>Naši Radovi</h2>
                    <p>Pogledajte neke od naših nedavnih projekata i inspirišite se.</p>
                </div>

                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <img src={item.src} alt={item.title} loading="lazy" />
                            <div className="gallery-overlay">
                                <div className="gallery-info">
                                    <span className="gallery-category">{item.category}</span>
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
