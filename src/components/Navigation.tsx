import React from 'react';

interface NavigationProps {
    currentSection: 'gallery' | 'about';
    onSectionChange: (section: 'gallery' | 'about') => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
    return (
        <nav className="professional-nav">
            <button 
                className={`nav-link ${currentSection === 'gallery' ? 'active' : ''}`}
                onClick={() => onSectionChange('gallery')}
            >
                Works
            </button>
            <button 
                className={`nav-link ${currentSection === 'about' ? 'active' : ''}`}
                onClick={() => onSectionChange('about')}
            >
                About
            </button>
        </nav>
    );
};

export default Navigation;
