import React, { useState } from 'react';

interface PaintingCardProps {
    title: string;
    artist: string;
    year: number;
    imageUrl: string;
    description?: string;
    medium?: string;
    dimensions?: string;
    onClick: () => void;
    index?: number;
}

const PaintingCard: React.FC<PaintingCardProps> = ({ title, artist, year, imageUrl, description, medium, dimensions, onClick, index = 0 }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div 
            className="artwork-item" 
            onClick={onClick}
            tabIndex={0}
            role="button"
            aria-label={`View ${title} by ${artist}`}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick();
                }
            }}
        >
            <div className="artwork-image-container">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className={`artwork-image ${imageLoaded ? 'loaded' : ''}`}
                    loading="lazy"
                    onLoad={() => setImageLoaded(true)}
                />
            </div>
            <div className="artwork-info">
                <h3 className="artwork-title">{title}</h3>
                <div className="artwork-meta">
                    <span className="artwork-year">{year}</span>
                </div>
                {medium && <p className="artwork-medium">{medium}</p>}
            </div>
        </div>
    );
};

export default PaintingCard;