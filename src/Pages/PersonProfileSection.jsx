import React from 'react'
import JD_Profile from '../assets/Images/jd_profile.jpeg'

const PersonProfileSection = () => {
    return (
        <section id="hey" className="home-marie-wrap">
            <div className="hey-marie-contain">
                <div className="content-row">
                    {/* Left Column - Text Content */}
                    <div className="content-vflex col-6">
                        <div className="eyebrow">Heya!</div>
                        <h2 className="serif-display-heading u-heading">I'm Brijesh.</h2>
                        <p className="intro-text">
                            I'm an entrepreneur and advisor focused on long-term vision, disciplined execution, and balanced growth. I build meaningful businesses while continuously evolving, guided by strong values, clarity, and a calm, purpose-driven mindset.
                        </p>
                        <a href="/about" className="u-button u-theme-dark">Let's Talk</a>
                    </div>

                    {/* Right Column - Image */}
                    <div className="col-6">
                        <img
                            src={JD_Profile}
                            loading="lazy"
                            alt="Hey I'm Brijesh"
                            className="hey-i-m-jd"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PersonProfileSection