import { SiReaddotcv } from "react-icons/si";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero hero-bg-gradient">
      <div className="container text-center">
        <div className="mb-4">
          <h1 className="display-5 mb-1">Olá, me chamo Pedro! 👋</h1>
          <h4 className="text-body-secondary fw-light mb-4">
            Desenvolvedor Front-end
          </h4>
        </div>

        <div className="d-flex justify-content-center gap-4 fs-4 mb-4">
          <a className="icon-link" href="https://github.com/k0d3r-ph">
            <i className="bi bi-github"></i>
          </a>
          <a
            className="icon-link"
            href="https://www.linkedin.com/in/pedro-henrique-oliveira-fonseca/"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="src/assets/CV_PedroHenrique_2025.pdf"
            download
            className="icon-link"
          >
            <SiReaddotcv />
          </a>
        </div>

        <div className="d-flex gap-2 justify-content-center">
          <img
            src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB"
            alt="React"
          />
          <img
            src="https://img.shields.io/badge/Typescript-20232A?logo=typescript&logoColor=61DAFB"
            alt="TypeScript"
          />
          <img
            src="https://img.shields.io/badge/Angular-20232A?logo=angular&logoColor=61DAFB"
            alt="Angular"
          />

          <img
            src="https://img.shields.io/badge/Bootstrap-20232A?logo=bootstrap&logoColor=61DAFB"
            alt="Bootstrap"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
