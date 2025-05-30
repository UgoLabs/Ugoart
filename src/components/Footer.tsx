import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="gallery-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Ugo Art Gallery</h3>
                    <p>Contemporary paintings and artistic expressions</p>
                </div>
                <div className="footer-section">
                    <h4>Collection</h4>
                    <p>Featuring {10} original paintings</p>
                    <p>Created in 2025</p>
                </div>
                <div className="footer-section">
                    <h4>Contact</h4>
                    <p>For inquiries about exhibitions or commissions</p>
                    <p>Visit our gallery or contact us online</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Ugo Art Gallery. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
