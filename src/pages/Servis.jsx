import React from 'react'
import { Link } from 'react-router-dom'
import './Servis.css'
import img1 from '../assets/Logo (4).png'
import img2 from '../assets/Frame 24.png'
import img5 from '../assets/72355892508 1 (1).png'
export default function Servis() {
    return (
        <div className="servis-page">

            <nav className="a2">
                <div className="a3">
                    <img src={img1} alt="Logo" />
                </div>

                <div className="a4">
                    <Link to="/">Home</Link>
                    <Link to="/servis">Services</Link>
                    <Link to="/career">Career Details</Link>
                    <Link to="/contact">Contact</Link>
                    <button className="a5">Contact Us</button>
                </div>
            </nav>

            <div style={{ padding: '80px 60px', textAlign: 'center' }}>
                <img src={img2} alt="" />
            </div>
            <div className="a17">
                <div className="a14">
                    <h1>Our Services</h1>
                    <p>Comprehensive AI, blockchain, and analytics solutions powered by deep expertise <br />  in machine learning and data engineering</p>
                </div>
                <div className="a20">
                    <div className="a18">
                        <div className="a15">
                            <img src={img5} alt="" />
                        </div>
                        <div className="a16">
                            <h1>Machine Learning Solutions</h1>
                            <p>Custom ML models designed and optimized for your specific business <br />challenges, leveraging cutting-edge deep learning techniques.</p>
                        </div>
                    </div>

                    <div className="a18">
                        <div className="a15">
                            <img src={img5} alt="" />
                        </div>
                        <div className="a16">
                            <h1>Predictive Analytics</h1>
                            <p>Forecast trends and make data-driven <br /> decisions with our advanced ML models.</p>
                        </div>
                    </div>


                </div>
                  <div className="a20">
                    <div className="a18">
                        <div className="a15">
                            <img src={img5} alt="" />
                        </div>
                        <div className="a16">
                            <h1>Machine Learning Solutions</h1>
                            <p>Custom ML models designed and optimized for your specific business <br />challenges, leveraging cutting-edge deep learning techniques.</p>
                        </div>
                    </div>

                    <div className="a18">
                        <div className="a15">
                            <img src={img5} alt="" />
                        </div>
                        <div className="a16">
                            <h1>Predictive Analytics</h1>
                            <p>Forecast trends and make data-driven <br /> decisions with our advanced ML models.</p>
                        </div>
                    </div>


                </div>
                  <div className="a20">
                    <div className="a18">
                        <div className="a15">
                            <img src={img5} alt="" />
                        </div>
                        <div className="a16">
                            <h1>Machine Learning Solutions</h1>
                            <p>Custom ML models designed and optimized for your specific business <br />challenges, leveraging cutting-edge deep learning techniques.</p>
                        </div>
                    </div>

                    <div className="a18">
                        <div className="a15">
                            <img src={img5} alt="" />
                        </div>
                        <div className="a16">
                            <h1>Predictive Analytics</h1>
                            <p>Forecast trends and make data-driven <br /> decisions with our advanced ML models.</p>
                        </div>
                    </div>


                </div>
            </div>
            <footer className="footer">
                            <div className="footer-top">
                                <div className="footer-logo">
                                    <img src={img1} alt="Logo" />
                                </div>
            
                                <nav className="footer-nav">
                                    <Link to="/">Home</Link>
                                    <Link to="/servis">Services</Link>
                                    <Link to="/portfolio">Portfolio</Link>
                                    <Link to="/about">About Us</Link>
                                    <Link to="/career">Careers</Link>
                                </nav>
            
                                <div className="footer-socials">
                                    <a href="#" className="social-btn" aria-label="Facebook">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                    </a>
                                    <a href="#" className="social-btn" aria-label="Twitter">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                    </a>
                                    <a href="#" className="social-btn" aria-label="LinkedIn">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                                    </a>
                                </div>
                            </div>
            
                            <div className="footer-middle">
                                <div className="footer-contacts">
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6dff" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                        contact@catalystanalytics.io
                                    </span>
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6dff" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                        +1(469) 712-4672
                                    </span>
                                    <span>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1a6dff" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                                        5511 Parkcrest Dr, Suite 103, Austin, TX 78731
                                    </span>
                                </div>
                                <div className="footer-links">
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms of Service</a>
                                </div>
                            </div>
            
                            <div className="footer-bottom">
                                <p>© 2025 Catalyst Analytics. All rights reserved.</p>
                            </div>
                        </footer>
            
        </div>
    )
}
