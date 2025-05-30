import React, { useEffect } from 'react';

interface LightboxProps {
    painting: {
        title: string;
        artist: string;
        year: number;
        imageUrl: string;
        description?: string;
        medium?: string;
        dimensions?: string;
    };
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ painting, onClose }) => {
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="lightbox-overlay" onClick={handleBackdropClick}>
            <button 
                className="lightbox-close" 
                onClick={onClose}
                aria-label="Close lightbox"
            >
                ×
            </button>
            <div className="lightbox-content">
                <img 
                    src={painting.imageUrl} 
                    alt={painting.title}
                    className="lightbox-image"
                />
                <div className="lightbox-info">
                    <h3>{painting.title}</h3>
                    <p>{painting.year}</p>
                    {painting.medium && <p>{painting.medium}</p>}
                    {painting.description && (
                        <p className="lightbox-description">{painting.description}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Lightbox;
