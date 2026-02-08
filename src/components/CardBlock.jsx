import React from 'react';

const CardBlock = ({
    eyebrow = "Time Genius",
    heading = "Take Back Your Time. Get Back Your Life.",
    description = "Time Genius is a self-paced, on-demand coaching program you can start at any time! Our fail-proof and flexible science-backed system shows you step-by-step how to take back your time, multiply your profits, and own your freedom—guaranteed.",
    buttonText = "Get the Course",
    buttonLink = "#",
    mediaUrl = "https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/683cb0d0455971148a6919c9_marie-forleo-time-genius.avif",
    mediaAlt = "Hero image",
    mediaPosition = "right", // "left" or "right"
    sectionClass = "home_tg_wrap"
}) => {
    return (
        <section className={`${sectionClass} u-section`}>
            <div className="w-layout-blockcontainer content_container_fill u-container w-container">
                <div className={`content_layout_split ${mediaPosition === "left" ? "reverse" : ""}`}>
                    {
                        mediaPosition === "left" ? (
                            <a
                                href={buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fade_hover w-inline-block"
                            >
                                <img
                                    src={mediaUrl}
                                    loading="lazy"
                                    alt={mediaAlt}
                                    className="content_image"
                                />
                            </a>
                        ) : null
                    }
                    <div className="w-layout-vflex u-vflex">
                        <h2 className="eyebrow">{eyebrow}</h2>
                        <h3 className="section_heading u-heading">{heading}</h3>
                        <p>{description}</p>
                        <a
                            href={buttonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tg-button u-button w-button"
                        >
                            {buttonText}
                        </a>
                    </div>
                    {
                        mediaPosition === "right" ? (
                            <a
                                href={buttonLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="fade_hover w-inline-block"
                            >
                                <img
                                    src={mediaUrl}
                                    loading="lazy"
                                    alt={mediaAlt}
                                    className="content_image"
                                />
                            </a>
                        ) : null
                    }
                </div>
            </div>
        </section>
    );
};

export default CardBlock;