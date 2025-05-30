import React, { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import About from './components/About';
import Navigation from './components/Navigation';
import './assets/styles.css';

const App: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<'gallery' | 'about'>('gallery');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`App ${isLoaded ? 'app-loaded' : ''}`}>
            <header className="professional-header">
                <div className="header-content">
                    <h1 className="artist-name">Ugo ART</h1>
                    <Navigation 
                        currentSection={currentSection} 
                        onSectionChange={setCurrentSection} 
                    />
                </div>
            </header>
            
            <main className="main-content">
                {currentSection === 'gallery' ? <Gallery /> : <About />}
            </main>
            
            <footer className="professional-footer">
                <div className="footer-content">
                    <p>&copy; 2025 Ugo. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="https://instagram.com/ugotheartist" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <span>Houston, TX</span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;