'use client'
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div className="container text-center py-5" data-aos="fade-up">
      <h1 className="display-4">
        Hi, I’m Feneel 👋<br />
        <span style={{ color: '#007bff' }}>
          <Typewriter
            words={[
              
              'Full-Stack Developer',
              'MERN Stack Enthusiast',
              'Always learning'
              
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </h1>
      <p className="lead">I love building scalable apps and solving meaningful problems.</p>
      <a href="/projects" className="btn btn-primary mt-3">View My Work</a>
    </div>
  );
}
