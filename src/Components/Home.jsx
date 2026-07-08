
import './Home.css';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <span className="subtitle">Welcome to my portfolio</span>
        <h1 className="title">
          Hi, I'm <span className="highlight">Kanchana</span>
        </h1>
        <h2 className="role">CSE STUDENT</h2>
        <p className="description">
          I build intelligent systems and clean web applications. Passionate about 
          bridging the gap between complex algorithms and smooth user experiences.
        </p>
        

        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;