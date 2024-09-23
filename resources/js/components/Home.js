import React from "react";
import Navigation from "./Navigation";
import '../../sass/home.scss';

export default function Home() {
    return (
        <div className="home">
            <Navigation />
            <div className="hero">
                <h1>Welcome to Our Website</h1>
                <p>Your satisfaction is our priority.</p>
            </div>
            <div className="features">
                <div className="feature">
                    <h2>Feature 1</h2>
                    <p>Description of feature 1.</p>
                </div>
                <div className="feature">
                    <h2>Feature 2</h2>
                    <p>Description of feature 2.</p>
                </div>
                <div className="feature">
                    <h2>Feature 3</h2>
                    <p>Description of feature 3.</p>
                </div>
            </div>
            <div className="cta">
                <button>Get Started</button>
            </div>
        </div>
    );
}
