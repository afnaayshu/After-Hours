import React, { useState } from 'react';
import './LandingPage.css';
import LoginPage from './LoginPage'; // Import the login page component

function LandingPage() {
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleLoginClick = () => {
        // Set showLoginPopup to true to display the login page
        setShowLoginPopup(true);
    };

    const handleRegisterClick = () => {
        // You can handle the redirection to the registration form here
        // For now, let's just show an alert
        alert("Redirect to registration form");
    };

    return (
        <div className="landing-page">
            <main>
                {showLoginPopup ? (
                    // Render the login page when showLoginPopup is true
                    <LoginPage />
                ) : (
                    // Render the landing page content
                    <section id="hero">
                        <h1>AfterHours</h1>
                        <p>Making your after-hours magical with the bliss of safe and secure nightlife</p>
                        <div className="button-container">
                            <button onClick={handleLoginClick}>Login</button>
                            <button onClick={handleRegisterClick}>Register</button>
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}

export default LandingPage;
