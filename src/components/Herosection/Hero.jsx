import '../Herosection/Hero.css'
import herobg from '../../assets/images/hero-bg.jpg'
import { useEffect, useState } from 'react';
import { Modal, Button, Image, Row, Col } from 'react-bootstrap';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  useEffect( () => {
    const fetchGitHub = async () => {
      try {
        const res = await fetch('https://api.github.com/users/github-john-doe');
        const data = await res.json();   
        setGithubData(data);  
      } catch (error) {
        console.error("Erreur:", error);
      }
    };
    fetchGitHub();
  }, []);


  return (
    <>
      <section 
      className="hero-section" 
      style={{ backgroundImage: `url(${herobg})` }}
      >
      
       <div className="hero-overlay">
        <div className="hero-content text-center text-white">
          <h1>Bonjour, je suis John Doe</h1>
          <h2 className="display-4">Développeur web full stack</h2>
          <button className="btn btn-danger btn-lg mt-3" 
            onClick={handleShow}
            >
              En savoir plus
            </button>
        </div>
       </div>
      </section>
    
      <Modal 
        size='lg'
        show={showModal} 
        onHide={handleClose} 
        dialogClassName="modal-back"
        >
        <Modal.Header  closeButton closeVariant="white">
          <Modal.Title>Mon profil GitHub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {githubData ? (
            <Row>
              <Col md={6} className="text-center">
                <Image src={githubData.avatar_url} roundedCircle fluid />
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-person-circle me-2"></i>
                  <a href={githubData.html_url} target="_blank" rel="noopener noreferrer" className="text-white">
                    {githubData.name || githubData.login}
                  </a>
                </div>

                 <hr className="my-3 border-secondary" />

                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt me-2"></i>
               </div>

                 <hr className="my-3 border-secondary" />

                {githubData.bio && (
                  <div className="d-flex mb-3">
                    <i className="bi bi-blockquote-left me-2"></i>
                    <span className="small fst-italic">{githubData.bio}</span>
                  </div>
                )}

                  <hr className="my-3 border-secondary" />

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-box-seam me-2"></i>
                  <span>Repositories : {githubData.public_repos}</span>
                </div>

                  <hr className="my-3 border-secondary" />

                <div className="d-flex align-items-center">
                  <i className="bi bi-people-fill me-2"></i>
                  <span>Followers : {githubData.followers}</span>
                </div>

                 <hr className="my-3 border-secondary" />

                <div className="d-flex align-items-center">
                  <i className="bi bi-people-fill me-2"></i>
                  <span>Following : {githubData.following}</span>
                </div>
              </Col>
            </Row>
            ) : (
            <p>Les informations du profil ne sont pas disponibles.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );


};

export default HeroSection;

