import AboutImage from '../../assets/about.jpg';
import CV from '../../assets/cv.pdf';
import { HiDownload } from 'react-icons/hi';
import data from './data';
import Card from '../../components/Card';
import './about.css';

const About = () => {
  return (
    <section id='about' data-aos='fade-in'>
      <div className='container about__container'>
        <div className='about__left'>
          <div className='about__portrait'>
            <img src={AboutImage} alt='About' />
          </div>
        </div>
        <div className='about__right'>
          <h2>About Me</h2>
          <div className='about__cards'>
            {data.map((item) => (
              <Card key={item.id} className='about__card'>
                <span className='about__card-icon'>{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <br />
          <p>
            Personal portfolio website displaying all the projects worked on and
            ceretificaitons obtained. Most experienced in JavaScript, HTML/CSS
            frameworks, SQL, Python and Java. Well familliar with working in a
            group using methodologies such as AGILE, SCRUM, Github and various
            Code Testing methods.
          </p>
          <a href={CV} download className='btn primary'>
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
