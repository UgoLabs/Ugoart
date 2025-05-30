import React, { useState, useEffect } from 'react';
import PaintingCard from './PaintingCard';
import Lightbox from './Lightbox';
import { paintings } from '../data/paintings';

const Gallery: React.FC = () => {
    const [selectedPainting, setSelectedPainting] = useState<typeof paintings[0] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        // Simulate loading for smooth entrance animations
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 300);

        // Scroll progress and scroll-to-top visibility
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
            setShowScrollTop(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            clearTimeout(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const openLightbox = (painting: typeof paintings[0]) => {
        setSelectedPainting(painting);
    };

    const closeLightbox = () => {
        setSelectedPainting(null);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isLoading) {
        return (
            <div className="gallery-loading">
                <div className="loading-spinner"></div>
                <p>Loading gallery...</p>
            </div>
        );
    }

    return (
        <>
            <div className="professional-gallery">
                <div className="artwork-grid">
                    {paintings.map((painting, index) => (
                        <PaintingCard 
                            key={painting.title + painting.imageUrl}
                            title={painting.title}
                            artist={painting.artist}
                            year={painting.year}
                            imageUrl={painting.imageUrl}
                            description={painting.description}
                            medium={painting.medium}
                            dimensions={painting.dimensions}
                            onClick={() => openLightbox(painting)}
                            index={index}
                        />
                    ))}
                </div>
            </div>
            
            {selectedPainting && (
                <Lightbox 
                    painting={selectedPainting}
                    onClose={closeLightbox}
                />
            )}
        </>
    );
};

export default Gallery;