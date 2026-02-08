import { useState } from 'react';

const Footer = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        email: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <footer className="footer_wrap u-theme-dark">
            <div className="footer_contain u-container w-container">
                <a href="/" aria-current="page" className="footer_logo_link w-inline-block w--current">
                    {/* <img
                        src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/643eda50c3f39cb3490ac721_MarieForleo_Logo(WHITE)-500px.png"
                        loading="lazy"
                        width="307"
                        alt="Brijesh Pansuriya"
                    /> */}
                    <span className='font-semibold text-3xl'>Brijesh Pansuriya</span>
                </a>

                <div className="footer_layout">
                    {/* Newsletter Signup Section */}
                    <div className="footer_vflex content-vflex">
                        <h2 className="eyebrow" style={{ color: 'white', fontSize: '14px' }}>Become an MF Insider</h2>
                        <div className="footer_list_item">
                            Sign up for exclusive content, emails & things Marie doesn't share anywhere else.
                        </div>
                        <div id="mf-insider-footer" className="html-embed w-embed w-script">
                            <div className="klaviyo-form-RxfKrX klaviyo-form form-version-cid-1">
                                <div className="needsclick kl-private-reset-css-Xuajs1">
                                    <div className="klaviyo-form-custom">
                                        <div className="form-row">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                className="form-input"
                                                aria-label="First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-row">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Enter Your Email"
                                                className="form-input"
                                                aria-label="Enter Your Email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-row">
                                            <button
                                                type="button"
                                                className="form-button"
                                                onClick={handleSubmit}
                                            >
                                                LET'S DO IT
                                            </button>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-disclaimer">
                                                <p>
                                                    <span>
                                                        By entering your info, you'll become an MF Insider – with FREE access to exclusive insights, private Q+As, and inspiring episodes of MarieTV, delivered with love to your inbox. (Unsub anytime in a click.) You also agree to our{' '}
                                                        <a href="https://www.marieforleo.com/terms" target="_blank" rel="noopener noreferrer">
                                                            <u>Terms of Use</u>
                                                        </a>
                                                        {' '}and{' '}
                                                        <a href="https://www.marieforleo.com/privacy" target="_blank" rel="noopener noreferrer">
                                                            <u>Privacy Policy.</u>
                                                        </a>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="footer_vflex content-vflex">
                        <h2 className="eyebrow" style={{ color: 'white', fontSize: '14px' }}>Profile</h2>
                        <ul role="list" className="footer_list w-list-unstyled">
                            <li className="footer_list_item"><a href="/about" className="footer_link">Social Media</a></li>
                            <li className="footer_list_item"><a href="/marietv" className="footer_link">Hobbies</a></li>
                            <li className="footer_list_item"><a href="/podcast" className="footer_link">Future Plans</a></li>
                            <li className="footer_list_item"><a href="/success-stories" className="footer_link">Success Stories</a></li>
                            <li className="footer_list_item"><a href="/new-here" className="footer_link">Awards</a></li>
                            <li className="footer_list_item"><a href="/new-here" className="footer_link">About</a></li>
                            <li className="footer_list_item"><a href="/jobs" className="footer_link">Jobs</a></li>
                            <li className="need-help-list-item footer_list_item">
                                <a href="/support" className="need-help-hflex w-inline-block">
                                    <img
                                        src="https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/61437caae011cd14cf4fa064_HelpIcon.svg"
                                        loading="lazy"
                                        width="27"
                                        alt="Help Icon"
                                        className="need-help-icon"
                                    />
                                    <div className="need-help-link">Need Help?</div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Courses & Books */}
                    <div className="footer_vflex content-vflex">
                        <h2 className="eyebrow" style={{ color: 'white', fontSize: '14px' }}>Companies</h2>
                        <ul role="list" className="footer_list w-list-unstyled">
                            <li className="footer_list_item">
                                <a href="/bschool" className="footer_link">Lepdo Jewels</a>
                                {/* <ul role="list">
                                    <li className="footer_list_subitem footer_list_item">
                                        <a href="/reviews/bschool" className="footer_link">• B-School Reviews</a>
                                    </li>
                                </ul> */}
                            </li>
                            <li className="footer_list_item"><a href="/the-copy-cure" className="footer_link">Lepdo Tech</a></li>
                        </ul>
                    </div>
                </div>

                {/* Legal Footer */}
                <div className="w-layout-hflex footer_legal_layout">
                    <ul role="list" className="footer_legal_list w-list-unstyled">
                        <li className="footer_legal_list_item"><a href="/terms" className="u-footer-link">Terms</a></li>
                        <li className="footer_legal_list_item"><a href="/privacy" className="u-footer-link">Privacy</a></li>
                        <li className="footer_legal_list_item"><a href="/cookie-policy" className="u-footer-link">Cookie Policy</a></li>
                        <li className="footer_legal_list_item"><a href="/support" className="u-footer-link">Support</a></li>
                        <li className="footer_legal_list_item"><a href="#" className="u-footer-link ot-sdk-show-settings">Cookie Settings</a></li>
                    </ul>
                    <div className="copyright">© 2026 Marie Forleo International</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;