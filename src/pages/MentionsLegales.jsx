import { Container, Row, Col, Accordion } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

const MentionsLegales = () => {
    return  (
        <>
        <Container className="py-5">
         <div className="text-center">
            <h1>Mentions Légales</h1>
            <hr className="section-title mx-auto"/>
         </div>
        </Container>

        <Container >
            <Row className="justify-content-center">
                <Col md={8}>
                 <Accordion defaultActiveKey="0">
                 <Accordion.Item eventKey="0">
                 <Accordion.Header>Editeur du site</Accordion.Header>
                 <Accordion.Body>
                    <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-person me-2"></i>
                        <span>John Doe</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-geo-alt me-2"></i>
                        <span>40 rue Laure Diebold, 69009 Lyon, France</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-telephone me-2"></i>
                        <span>06 10 20 30 40</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <i className="bi bi-envelope me-2"></i>
                        <a href="mailto:john.doe@gmail.com" className="text-decoration-none text-dark">
                        john.doe@gmail.com
                        </a>
                    </div>
                  </Accordion.Body>
                  </Accordion.Item>
                
                 <Accordion.Item eventKey="1">
                 <Accordion.Header>Hébergeur</Accordion.Header>
                 <Accordion.Body>
                     <strong>alwaysdata</strong>
                     <div className="d-flex align-items-center my-2">
                        <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
                     </div>
                     <div className="d-flex align-items-center">
                        <i className="bi bi-globe me-2"></i>
                        <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                            www.alwaysdata.com
                        </a>
                     </div> 
                  </Accordion.Body>
                  </Accordion.Item>
                  
                 <Accordion.Item eventKey="2">
                 <Accordion.Header>Crédits</Accordion.Header>
                 <Accordion.Body>
                     <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de Formation</a>.</p>
                     <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
                     <p>La favicon de ce site a été fournie par "John doe Icons erstellt von <a href="https://www.flaticon.com/fr/auteurs/freepik" target="_blank" rel="noopener noreferrer">Freepik - Flaticon</a>".</p>
                  </Accordion.Body>
                  </Accordion.Item>

                  </Accordion>
                </Col>
            </Row>

        </Container>
        
        </>
    )
}

export default MentionsLegales; 

