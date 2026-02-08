import React from 'react'
import JD_SocialMedia from '../assets/Images/JD_SM.jpeg'

const SocialMediaSection = () => {
    return (
        <section className="about-hero-new">
            <div className="hero-content-wrapper">
                {/* Left Side - Text Content */}
                <div className="hero-text-content">
                    <h1 className="hero-title">
                        <div className="hero-title-handwritten">Hey!</div>
                    </h1>
                    <div className="hero-sub-title-handwritten">I'm Brijesh Pansuriya (JD)</div>
                    <p className="hero-description">
                        I'm an entrepreneur and advisor focused on long-term vision, disciplined execution, and balanced growth. I build meaningful businesses while continuously evolving, guided by strong values, clarity, and a calm, purpose-driven mindset.
                    </p>
                    <button className="hero-cta-button">Let's Talk</button>

                    {/* Social Media Links */}
                    <div className="hero-social-links">
                        <span className="social-label">Find me at:</span>
                        <div className="social-icons">
                            <a href="#" className="social-icon" aria-label="Instagram">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
                                    <circle cx="12" cy="12" r="4" strokeWidth="2" />
                                    <circle cx="17" cy="7" r="1" strokeWidth="2" />
                                </svg>
                            </a>

                            <a href="#" className="social-icon" aria-label="Facebook">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="2" />
                                </svg>
                            </a>

                            <a href="#" className="social-icon" aria-label="LinkedIn">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="2" />
                                    <path d="M8 11v5M8 8v.5M12 16v-5M16 16v-3a2 2 0 0 0-4 0" strokeWidth="2" />
                                </svg>
                            </a>

                            <a href="#" className="social-icon" aria-label="Twitter">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.07 8v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" strokeWidth="2" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>

                {/* Right Side - Profile with Service Tags */}
                <div className="hero-profile-section">
                    <div className="profile-container">
                        {/* Yellow Circle Background */}
                        <div className="profile-circle">
                            {/* Profile Image Placeholder */}
                            <div className="profile-image">
                                <img src={JD_SocialMedia} alt="Profile" />
                            </div>
                        </div>

                        {/* Floating Service Tags */}
                        <div className="service-tag tag-1">Entrepreneur</div>
                        <div className="service-tag tag-2">Athletic</div>
                        <div className="service-tag tag-3">Wanderlust</div>
                        <div className="service-tag tag-4">Reliable</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SocialMediaSection