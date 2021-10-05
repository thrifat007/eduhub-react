import { faClock, faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaYoutube, } from 'react-icons/fa';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className='backGround'>
            <Container className='allFooter'>
                <Row className='mb-5' md={4}>
                    <Col className='icon my-auto' >
                        <div className='icon-style'><FaFacebook /></div>
                        <div className='icon-style'><FaYoutube /></div>
                        <div className='icon-style'><FaTwitter /></div>
                        <div className='icon-style'><FaLinkedin /></div>
                        <div className='icon-style'><FaGithub /></div>


                    </Col>
                    <Col className='footer-margin'>
                        <div className='footer-top'>Quick Links</div>
                        <div>Homepage</div>
                        <div>About Edu-Hub</div>
                        <div>Administration</div>
                        <div>Mentors</div>
                        <div>News</div>
                    </Col>
                    <Col className='footer-margin'>
                        <div className='footer-top'>Information</div>
                        <div>Admissions</div>
                        <div>Academic Calendar</div>
                        <div>Timetable</div>
                        <div>Donations</div>
                        <div>FAQ</div>

                    </Col>
                    <Col className='footer-margin' >
                        <div className='footer-top'>Edu-Hub</div>
                        <div>Skills that will allow you to apply for jobs like: Web Developer, Software Developer, Front End Developer, Javascript Developer, and Full Stack Developer</div>
                        <div><FontAwesomeIcon className='footer' icon={faMapMarkerAlt} />Dhaka,Bangladesh</div>
                        <div><FontAwesomeIcon className='footer' icon={faPhoneAlt} />017-5960753</div>
                        <div><FontAwesomeIcon className='footer' icon={faEnvelope} />support@eduhub.com</div>
                        <div><FontAwesomeIcon className='footer' icon={faClock} />Mon - Sat: 9am - 6pm</div>
                    </Col>
                </Row>

                <small className="text-center mt-3 text-muted">Edu-Hub® All Rights Reserved,2021</small>
            </Container>
           
        </div>
    );
};

export default Footer;