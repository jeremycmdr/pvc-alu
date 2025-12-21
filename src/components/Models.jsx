import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ZoomIn, ArrowLeft, Send, CheckCircle2, LayoutGrid, AppWindow, DoorOpen, Blinds } from 'lucide-react';
import './Models.css';

// Slike
import pvcWhite from '../assets/pvc_window_modern_white_1766313740107.png';
import aluSliding from '../assets/alu_sliding_door_anthracite_1766313754891.png';
import pvcDoor from '../assets/pvc_entrance_door_modern_1766313769922.png';
import aluWood from '../assets/alu_window_wood_texture_1766313787822.png';
import pvcBalcony from '../assets/pvc_balcony_door_white_1766313802106.png';
import aluStandard from '../assets/alu_window_anthracite_standard_1766313822632.png';
import doorModel1 from '../assets/door_model_1.png';

const modelsData = [
    {
        id: 7,
        name: 'OS 101',
        category: 'vrata',
        image: doorModel1,
        description: 'Ekskluzivni model vrata sa kružnim staklenim elementom i horizontalnim linijama. Moderan i upečatljiv dizajn.',
        specs: ['Materijal: PVC/ALU', 'Staklo: Ornamentno', 'Boja: Bela / Po izboru']
    },
    {
        id: 1,
        name: 'OS 102',
        category: 'prozor',
        image: pvcWhite,
        description: 'Trokomorni sistem sa vrhunskom toplotnom izolacijom. Idealan za moderne stambene objekte.',
        specs: ['Profil: 82mm', 'Staklo: Troslojno 48mm', 'Izolacija: Uw = 0.73 W/m²K']
    },
    {
        id: 2,
        name: 'OS 103',
        category: 'klizni',
        image: aluSliding,
        description: 'Velike staklene površine sa minimalnim profilima. Savršeno za izlaz na terasu ili dvorište.',
        specs: ['Sistem: Podizno-klizni', 'Boja: Antracit RAL 7016', 'Maks. visina: 3000mm']
    },
    {
        id: 3,
        name: 'OS 104',
        category: 'vrata',
        image: pvcDoor,
        description: 'Sigurnosna vrata sa modernim panelom i inox rukohvatom. Spoj estetike i bezbednosti.',
        specs: ['Zaključavanje: 5 tačaka', 'Panel: 40mm ojačan', 'Rukohvat: Inox 1200mm']
    },
    {
        id: 4,
        name: 'OS 105',
        category: 'prozor',
        image: aluWood,
        description: 'Izdržljivost aluminijuma sa toplinom drveta. Specijalna plastifikacija visoke rezolucije.',
        specs: ['Profil: Termo prekid', 'Boja: Zlatni hrast (Alu)', 'Okov: Skriveni']
    },
    {
        id: 5,
        name: 'OS 106',
        category: 'vrata',
        image: pvcBalcony,
        description: 'Klasična balkonska vrata sa niskim pragom. Maksimalna svetlost i laka prohodnost.',
        specs: ['Prag: Aluminijumski niski', 'Otvaranje: Okretno-nagibno', 'Boja: Bela sjaj']
    },
    {
        id: 6,
        name: 'OS 107',
        category: 'prozor',
        image: aluStandard,
        description: 'Elegantan i čvrst profil za poslovne i stambene prostore. Dugovečnost bez održavanja.',
        specs: ['Profil: Hladni ili Termo', 'Staklo: Dvoslojno/Troslojno', 'Završna obrada: Mat plastifikacija']
    }
];

const categories = [
    { id: 'prozor', name: 'Prozori', icon: <AppWindow size={48} />, count: 3 },
    { id: 'vrata', name: 'Vrata', icon: <DoorOpen size={48} />, count: 3 },
    { id: 'klizni', name: 'Klizni sistemi', icon: <Blinds size={48} />, count: 1 },
    { id: 'sve', name: 'Svi Modeli', icon: <LayoutGrid size={48} />, count: 7 }
];

const Models = () => {
    const [view, setView] = useState('categories'); // 'categories' ili 'gallery'
    const [activeCategory, setActiveCategory] = useState('sve');
    const [selectedModel, setSelectedModel] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const filteredModels = activeCategory === 'sve'
        ? modelsData
        : modelsData.filter(m => m.category === activeCategory);

    const handleCategoryClick = (catId) => {
        setActiveCategory(catId);
        setView('gallery');
        window.scrollTo(0, 0);
    };

    const openPreview = (model) => {
        setSelectedModel(model);
        document.body.style.overflow = 'hidden';
    };

    const closePreview = () => {
        setSelectedModel(null);
        setIsZoomed(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="models-page">
            <div className="models-hero">
                <div className="container">
                    <h1>Katalog Modela</h1>
                    <p>Izaberite kategoriju i istražite našu ponudu</p>
                </div>
            </div>

            <div className="container">
                {view === 'categories' ? (
                    <div className="categories-container">
                        <div className="categories-grid">
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    className="category-card"
                                    onClick={() => handleCategoryClick(cat.id)}
                                >
                                    <div className="category-icon">{cat.icon}</div>
                                    <h3>{cat.name}</h3>
                                    <p>{cat.count} modela</p>
                                    <div className="category-btn">Pogledaj modele</div>
                                </div>
                            ))}
                        </div>
                        <div className="categories-footer">
                            <Link to="/" className="btn-back-home-simple">
                                <ArrowLeft size={18} /> Nazad na početnu
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="gallery-view">
                        <div className="gallery-nav">
                            <button className="btn-back-to-cats" onClick={() => setView('categories')}>
                                <ArrowLeft size={18} /> Nazad na kategorije
                            </button>
                            <div className="active-cat-title">
                                <h2>{categories.find(c => c.id === activeCategory).name}</h2>
                            </div>
                        </div>

                        <div className="models-grid">
                            {filteredModels.map((model) => (
                                <div
                                    key={model.id}
                                    className="model-card"
                                    onClick={() => openPreview(model)}
                                >
                                    <div className="model-image-wrapper">
                                        <img src={model.image} alt={model.name} />
                                        <div className="model-overlay">
                                            <ZoomIn size={32} />
                                            <span>Detaljan pregled</span>
                                        </div>
                                    </div>
                                    <div className="model-info">
                                        <span className="model-category">{model.category}</span>
                                        <h3>{model.name}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal Preview */}
            {selectedModel && (
                <div className="modal-overlay" onClick={closePreview}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closePreview}>
                            <X size={24} />
                        </button>

                        <div className="modal-grid">
                            <div className={`modal-image-container ${isZoomed ? 'zoomed' : ''}`} onClick={() => setIsZoomed(!isZoomed)}>
                                <img
                                    src={selectedModel.image}
                                    alt={selectedModel.name}
                                    className={isZoomed ? 'zoom-in' : ''}
                                />
                                {!isZoomed && <div className="zoom-hint">Klikni za zumiranje</div>}
                            </div>

                            <div className="modal-details">
                                <span className="detail-category">{selectedModel.category}</span>
                                <h2>{selectedModel.name}</h2>
                                <p className="detail-desc">{selectedModel.description}</p>

                                <div className="detail-specs">
                                    <h4>Tehničke karakteristike:</h4>
                                    <ul>
                                        {selectedModel.specs.map((spec, i) => (
                                            <li key={i}><CheckCircle2 size={16} /> {spec}</li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to={`/?model=${selectedModel.name}#kontakt`} className="btn-inquiry" onClick={closePreview}>
                                    <Send size={18} /> Pošalji upit za ovaj model
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Models;
