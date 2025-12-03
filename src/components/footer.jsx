import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Footer = () => {
    return(
        <footer className='bg-dark text-white mt-5 p-4'>
            <Container>
                <Row className='texte-center'>
                    <Col md={4} className="mb-4 ps-3">
                     <h5>John Doe</h5>

                     <div className="small text-white mb-4">
                            <div>40 rue Laure Diebold</div>
                            <div>69009 Lyon, France</div>
                            <div> 10 20 30 40 50</div>
                            <div>john.doe@gmail.com</div>
                     </div>
                     
                     <div>
                     <a href="https://github.com" target="_blank" rel="nofollow noopener noreferrer" className="me-3 footer-icon" aria-label="GitHub">
                     <i className="bi bi-github" style={{ fontSize: '24px' }}></i> 
                     </a>
                     <a href="https://x.com" target="_blank" rel="nofollow noopener noreferrer" className="me-3 footer-icon" aria-label="X">
                     <i className="bi bi-twitter" style={{ fontSize: '24px' }}></i> 
                     </a>
                     <a href="https://linkedin.com" target="_blank" rel="nofollow noopener noreferrer" className="footer-icon me-3" aria-label="LinkedIn">
                     <i className="bi bi-linkedin" style={{ fontSize: '24px' }}></i>
                     </a>
                     </div>
                    </Col>

                    <Col md={3} className="mb-4">
                     <h5>Liens utiles</h5>
                     <ul className="list-unstyled">
                         <li><Link to="/" className="text-white link-footer">Accueil</Link></li>
                         <li><Link to="/Services" className="text-white link-footer">Services</Link></li>
                         <li><Link to="/Portfolio" className="text-white link-footer">Portfolio</Link></li>
                         <li><Link to="/Contact" className="text-white link-footer">Me contacter</Link></li>
                         <li><Link to="/MentionsLegales" className="text-white link-footer">Mentions légales</Link></li>
                     </ul>
                    </Col>

                    <Col md={5} className="mb-4">
                     <h5>Mes dernières réalisations</h5>
                     <ul className="list-unstyled">
                         <li><Link to="/realisations/fresh-food" className="text-white link-footer">Fresh Food</Link></li>
                         <li><Link to="/realisations/restaurant-akira" className="text-white link-footer">Restaurant Akira</Link></li>
                         <li><Link to="/realisations/espace-bien-etre" className="text-white link-footer">Espace bien-être</Link></li>
                     </ul>
                    </Col>

                </Row>
            
            </Container>

        </footer>

        );

};

export default Footer; 