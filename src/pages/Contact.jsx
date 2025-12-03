import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
 };
    const handleSubmit = (e) => {
     e.preventDefault();
     console.log('Données du formulaire à envoyer :', formData);
     alert('Merci pour votre message !');
     setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    };



    return  (
        <>
        <Container className="py-5">
         <div className="text-center">
            <h1>Contactez-moi !</h1>            
            <p className="text-muted">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
            <hr className="section-title mx-auto"/>
        </div>

        <Card className='p-4 shadow-sm'>
            <Row>
                <Col md={6}>
                <h2>Formulaire de contact</h2>
                <hr className="section-title"/>

                <Form onSubmit={handleSubmit}>
                    <FloatingLabel controlId="floatingName" label="Votre nom" className="mb-3">
                      <Form.Control 
                     type="text" 
                     placeholder="Votre nom" 
                     name="name" 
                     value={formData.name} 
                     onChange={handleChange} 
                     required 
                     />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Votre adresse email" className="mb-3">
                      <Form.Control 
                     type="text" 
                     placeholder="Votre adresse email" 
                     name="email" 
                     value={formData.email} 
                     onChange={handleChange} 
                     required 
                     />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPhone" label="Votre numéro de téléphone" className="mb-3">
                      <Form.Control 
                     type="tel" 
                     placeholder="Votre numero de telephone" 
                     name="phone" 
                     value={formData.phone} 
                     onChange={handleChange} 
                     required 
                     />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingSubject" label="Sujet" className="mb-3">
                      <Form.Control 
                     type="text" 
                     placeholder="Sujet" 
                     name="subject" 
                     value={formData.subject} 
                     onChange={handleChange} 
                     required 
                     />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextSubject" label="Votre message" className="mb-3">
                      <Form.Control 
                     as="textarea" 
                     placeholder="Votre nom" 
                     style={{ height: '150px' }} 
                     name="message" 
                     value={formData.message} 
                     onChange={handleChange} 
                     required 
                     />
                    </FloatingLabel>

                    <Button variant='primary' type='submit'>
                        Envoyer
                    </Button>
                </Form>
                </Col>

                <Col md={6}>
                   <h2>Mes coordonnées</h2>
                   <hr className="section-title"/>

                   <div className='d-flex align-items-center mb-2'>
                    <i className='bi bi-map me-2'></i>
                    <span>40 rue Laure Diebold</span>
                   </div>

                   <div className='d-flex align-items-center mb-2'>
                    <i className='bi bi-geo-alt me-2'></i>
                    <span>69009 Lyon, France</span>
                   </div>

                   <div className='d-flex align-items-center mb-2'>
                    <i className='bi bi-telephone me-2'></i>
                    <span>10 20 30 40 50</span>
                   </div>

                   <div className='d-flex align-items-center mb-2'>
                    <i className='bi bi-envelope me-2'></i>
                    <a href='mailto:john.doe@gmail.com' className='text-decoration-none text-dark'>
                        john.doe@gmail.com
                    </a>
                   </div>

                   <iframe 
                     src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.626911032577!2d4.802326076801551!3d45.77876991240126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb1b5537656b%3A0x2d5bf367c944e96a!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1678886543210!5m2!1sfr!2sfr'
                     width='100%'
                     height='250'
                     style={{border: 0 }}
                     allowFullScreen=''
                     loading='lazy'
                     referrerPolicy='no-referrer-when-downgrade'
                     title='Carte de localisation'
                     ></iframe>
                </Col>
            </Row>
        </Card>
        </Container>  
        </>
    )
}

export default Contact; 
