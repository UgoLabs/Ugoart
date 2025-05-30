import React from 'react';

const About: React.FC = () => {
    return (
        <section className="professional-about">
            <div className="about-content">
                <div className="about-text">
                    <h2>About the Artist</h2>
                    <p className="intro-paragraph">
                        Ugo is a Nigerian-American visual artist based in Houston, Texas, whose powerful paintings explore 
                        the richness and complexity of the Black experience through vibrant color and symbolic storytelling.
                    </p>
                    <p>
                        Born in Ozubulu, Anambra State, Nigeria, he immigrated to the United States at the age of nine, 
                        bringing with him a rich cultural heritage that continues to shape his creative practice. This 
                        bicultural perspective infuses his work with both ancestral wisdom and contemporary urgency.
                    </p>
                    <p>
                        A self-taught painter who began his artistic journey in 2017, Ugo creates work that centers Black people, 
                        Blackness, and the multifaceted Black experience. His art draws heavily from African and indigenous 
                        traditions while courageously confronting the lingering legacies of slavery, colonialism, and systemic racism.
                    </p>
                    <p>
                        Working primarily in acrylic with occasional explorations in oil, Ugo is deeply influenced by abstract 
                        expressionism and contemporary African art movements. His distinctive style is marked by vibrant palettes, 
                        intricate symbolic layers, and what he calls <em>"hueism"</em>—a conceptual approach that employs color 
                        as both emotional catalyst and narrative force.
                    </p>
                    <p className="closing-paragraph">
                        Through his canvases, Ugo creates a powerful dialogue between past and present, honoring ancestral 
                        traditions while empowering contemporary voices. His work serves as both personal catharsis and 
                        cultural reclamation, reimagining the future for the African diaspora through the transformative 
                        power of art.
                    </p>
                    
                    <div className="contact-info">
                        <p>Based in Houston, Texas</p>
                        <p><a href="https://instagram.com/ugotheartist" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                    </div>
                </div>
                
                <div className="about-image">
                    <img src="/Ugo-the-artist/pic1.jpg" alt="Ugo the Artist" />
                </div>
            </div>
        </section>
    );
};

export default About;
