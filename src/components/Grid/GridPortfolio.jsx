import freshfood from '../../assets/images/portfolio/fresh-food.jpg'
import akira from '../../assets/images/portfolio/restaurant-japonais.jpg'
import espace from '../../assets/images/portfolio/espace-bien-etre.jpg'
import seo from '../../assets/images/portfolio/seo.jpg'
import api from '../../assets/images/portfolio/coder.jpg'
import maquette from '../../assets/images/portfolio/screens.jpg'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GridPortfolio = () => {

    const projects = [
        {
      image: freshfood,
      title: 'Fresh Food',
      description: 'Site de vente de produits frais en ligne.',
      tech: 'Site réalisé avec PHP et MySQL',
      link: '/portfolio/fresh-food' 
    },
    {
      image: akira,
      title: 'Restaurant Akira',
      description: 'Site de vente de produits frais en ligne.',
      tech: 'Site réalisé avec WordPress',
      link: '/portfolio/akira'
    },
    {
      image: espace,
      title: 'Espace bien-être',
      description: 'Site de vente de produits frais en ligne.',
      tech: 'Site réalisé avec LARAVEL',
      link: '/portfolio/espace'
    },
    {
      image: api,
      title: 'Création d\'une API',
      description: 'Création d\'une API RESTFULL publique',
      tech: 'PHP - SYMFONY',
      link: '/portfolio/api' 
    },
    {
      image: maquette,
      title: 'Maquette dun site web',
      description: 'Création du prototype d\'un site',
      tech: 'Réalisé avec FIGMA',
      link: '/portfolio/akira'
    },
    { image: seo,
      title: 'SEO',
      description: 'Amélioration du référencement d\'un site e-commerce',
      tech: 'Utilisation des outils SEO',
      link: '/portfolio/seo'
    },
    ]


    return (
        <Row>
            {projects.map((project, index) => (
                <Col md={4} key={index} className='mb-4'>
                    <Card className='h-100 text-center portfolio-card'>
                        <Card.Img variant='top' src={project.image}/>
                        <Card.Body>
                            <Card.Title>{project.title}</Card.Title>
                            <Card.Text className='text-muted small'>
                                {project.description}
                            </Card.Text>
                            <Button  className='eclair-button' variant='primary' as={Link} to={project.link}>Voir le site</Button>
                        </Card.Body>
                        <Card.Footer>
                            <small className='text-muted'>{project.tech}</small>
                        </Card.Footer>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default GridPortfolio;