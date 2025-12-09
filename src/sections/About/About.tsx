import "./About.css";

function About() {
  return (
    <section id="sobre" className="about-section mb-5 about">
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
          <div className="col-md-4 text-center">
            <img
              className="img-fluid rounded-4 shadow-sm"
              src="src/assets/Perfil.jpg"
              alt="Foto de perfil"
            />
          </div>

          <div className="col-md-6">
            <h2 className="display-6 fw-bold text-secondary mb-4 text-center">
              Sobre mim
            </h2>

            <p>
              Sempre fui entusiasta de tecnologia, acompanhando as diversas
              funcionalidades que saem no dia-a-dia. Com isso, a programação
              chegou na minha vida e desde então, foi paixão à primeira vista.
            </p>

            <p>
              Hoje busco oportunidades para atuar como Desenvolvedor Front-end,
              aplicando meus conhecimentos em React, TypeScript e boas práticas
              de UI/UX.
            </p>

            <p className="lead">
              Se quiser saber mais sobre meu trabalho, confira meus projetos
              abaixo!
            </p>

            <a href="#projetos" className="btn btn-outline-primary mb-4">
              Ver projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
