import Header from '../components/Header/Header'
import { Container, Row, Col, Card } from 'react-bootstrap';

const Services = () => {
    return  (
        <>
        <Header/>
        <Container className="py-5">
            <div className="text-center mb-5">
            <h2>Mon offre de services</h2>           
            <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
            <hr className="section-title mx-auto"/>
            </div>

        <Row>
            <Col md={4} className='mb-4'>
            <Card className='h-100 text-center p-6 services-card'>
                <Card.Body>
                    <i className='bi bi-pencil-square' style={{ fontSize: '40px', color: '#0d6efd' }}></i>
                    <Card.Title className='mt-3'>UX Design</Card.Title>
                    <Card.Text className='small'>
                        L'UX Design est une discipline qui consiste a concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'éxperience utilisateur la plus fluide et agréable possible.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>

            <Col md={4} className='mb-4'>
            <Card className='h-100 text-center p-6 services-card'>
                <Card.Body>
                    <i className='bi bi-code-slash' style={{ fontSize: '40px', color: '#0d6efd' }}></i>
                    <Card.Title className='mt-3'>Développement web</Card.Title>
                    <Card.Text className='small'>
                        Le développement de sites web consiste à créer des sites internet en utilisant ddes langages de programmation (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>

            <Col md={4} className='mb-4'>
            <Card className='h-100 text-center p-6 services-card'>
                <Card.Body>
                    <i className='bi bi-search' style={{ fontSize: '40px', color: '#0d6efd' }}></i>
                    <Card.Title className='mt-3'>Référencement</Card.Title>
                    <Card.Text className='small'>
                        Le référencement naturel (SEO) est une technique qui consiste à optimisier un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
        </>
    )
}

export default Services; 
