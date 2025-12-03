import Header from '../components/Header/Header'
import GridPortfolio from '../components/Grid/GridPortfolio';
import { Container } from 'react-bootstrap';


const Portfolio = () => {
    return  (
        <>
          <Header/>
          <Container className="py-5"> 
            <div className="text-center mb-5">
             <h2>Portfolio</h2>
             <p className="text-muted">Voici quelques-unes de mes réalisations.</p>
             <hr className="section-title-portfolio mx-auto"/>
            
            </div>
            <GridPortfolio/>
           </Container>
        </>
    )
}

export default Portfolio; 
