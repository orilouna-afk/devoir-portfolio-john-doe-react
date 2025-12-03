import {Container, Row, Col, ProgressBar } from 'react-bootstrap';
import johndoeabout from '../../assets/images/john-doe-about.jpg';
import '../AbtCompetSection/AbtCompetSection.css';


const AboutSkills = () => {
    const skills = [
        { name: 'HTML5', value: 90, variant: 'danger'},
        { name: 'CSS3', value: 80, variant: 'info'},
        { name: 'JAVASCRIPT', value: 70, variant: 'warning'},
        { name: 'PHP', value: 60, variant: 'succes'},
        { name: 'REACT', value: 50, variant: 'primary'},
    ];

    return(
        <section className='py-5'>
            <Container className='contour'>
                <Row>
                <Col md={6} className='mb-4'>
                <h2 >A propos</h2>
                <hr className="section-title-skill"/>
                <img src={johndoeabout} alt='John Doe' className='img-fluid mb-3'/>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
                 consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
                 enim placeat? Natus, neque at?
                </p>
                <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, necessitatibus
                 consectetur tempore perferendis nostrum, ex delectus reiciendis impedit aut iure
                 enim placeat? Natus, neque at?
                </p>
                </Col>

                <Col md={6}>
                <h2>Mes compétences</h2>
                <hr className="section-title-skill"/>

                {skills.map((skill,index) => ( 
                    <div key={index} className='mb-3'>
                        <div className='d-flex justify-content-between'>
                            <span>{skill.name}</span>
                            <span>{skill.value}%</span>
                        </div>
                        <ProgressBar
                        now={skill.value}
                        variant={skill.variant}
                        className='skill-progress-bar'
                        />
                    </div>

                ))}
                </Col>
                </Row>
            </Container>

        </section>
    )
}

export default AboutSkills;