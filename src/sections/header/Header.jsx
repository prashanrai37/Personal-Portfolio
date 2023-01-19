import { useEffect } from 'react';
import HeaderImage from '../../assets/header.jpg';
import data from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './header.css';
import Typed from 'react-typed';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id='header'>
      <div className='container header__container'>
        <div className='header__profile' data-aos='fade-in'>
          <img src={HeaderImage} alt='Header Portait' />
        </div>
        <h3 data-aos='fade-up'>Prashan Rai</h3>
        <br />
        <p data-aos='fade-up'>
          <Typed
            strings={[
              'Front-End Developer.',
              'React Developer.',
              'Full-Stack Engineer.',
              'Software Engineer.',
              'Java Developer.',
              'JS Developer.',
              'Node.JS Developer.',
              'Javascript Developer',
            ]}
            typeSpeed={40}
            backSpeed={50}
            attr='placeholder'
            loop
          >
            <input type='text' />
          </Typed>
        </p>

        <p data-aos='fade-up'>
          Computer Science Graduate, from City, University of London.
          <br />
          <br />
          Main interests in Full-Stack, Data, and Artificial Intelligence.
          <br />
          <br />
          Can program in most common industry languages - HTML, CSS & JS, C++,
          Java, and Python. With experience in working in software development,
          finance service, education, and conservation projects.
        </p>
        <div className='header__cta' data-aos='fade-up'>
          <a href='#contact' className='btn primary'>
            Contact Me
          </a>
          <a href='#portfolio' className='btn light'>
            Projects
          </a>
        </div>
        <div className='header__socials'>
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
