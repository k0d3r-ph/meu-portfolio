import "./Projects.css";

function Projects() {
  return (
    <section
      id="projetos"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <h2 className="display-6 text-center mb-5">Projetos</h2>

        <div className="row gap-5">
          <div className="card" style={{ width: "20rem" }}>
            <img className="img-thumbnail" src="calculadora.png"></img>
            <div className="card-body">
              <h5 className="card-title">Calculadora</h5>
              <p className="card-text fs-6 text-body-secondary">
                Calculadora desenvolvida com JavaScript puro, HTML5 e CSS3, com
                lógica para processar entradas e operações matemáticas.
              </p>
              <div className="d-flex gap-1">
                <a
                  href="https://calculadora-bjvizh5i4-peagafpts-projects.vercel.app/"
                  target="_blank"
                  className="btn btn-primary text-center"
                >
                  Ver Demo
                </a>
                <a
                  href="https://github.com/k0d3r-ph/Calculadora"
                  target="_blank"
                  className="btn btn-primary text-center"
                >
                  Código Fonte
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img className="img-thumbnail" src="weather.png"></img>
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text fs-6 text-body-secondary">
                Aplicação SPA em Angular para exibir clima em tempo real,
                integrada à API OpenWeather usando HttpClient e Observables.
              </p>
              <div className="d-flex gap-1">
                <a
                  href="https://weather-app-rho-gray-73.vercel.app/"
                  target="_blank"
                  className="btn btn-primary text-center"
                >
                  Ver Demo
                </a>
                <a
                  href="https://github.com/k0d3r-ph/weather-app"
                  target="_blank"
                  className="btn btn-primary text-center"
                >
                  Código Fonte
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img className="img-thumbnail" src="to-do.png"></img>
            <div className="card-body">
              <h5 className="card-title">To-do List</h5>
              <p className="card-text fs-6 text-body-secondary">
                Desenvolvimento de uma SPA em Angular com arquitetura focada em
                CRUD (Create, Read, Update, Delete) para gerenciamento de
                tarefas.
              </p>
              <div className="d-flex gap-1">
                <a
                  href="https://to-do-list-angular-m1s74ybk9-peagafpts-projects.vercel.app/"
                  target="_blank"
                  className="btn btn-primary text-center"
                >
                  Ver Demo
                </a>
                <a
                  href="https://github.com/k0d3r-ph/To-Do-List-Angular"
                  target="_blank"
                  className="btn btn-primary text-center"
                >
                  Código Fonte
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img className="img-thumbnail" src="movie.png"></img>
            <div className="card-body">
              <h5 className="card-title">Movie Swiper</h5>
              <p className="card-text fs-6 text-body-secondary">
                Desenvolvimento de uma SPA em Angular para descoberta de filmes,
                simulando uma interface de "swipe".
              </p>
              <div className="d-flex gap-1">
                <a
                  href="https://movie-swiper-l7y63ty99-peagafpts-projects.vercel.app/"
                  target="_blank"
                  className="btn btn-primary text-center"
                >
                  Ver Demo
                </a>
                <a
                  href="https://github.com/k0d3r-ph/movie-swiper"
                  target="_blank"
                  className="btn btn-primary text-center"
                >
                  Código Fonte
                </a>
              </div>
            </div>
          </div>

          <div className="card" style={{ width: "20rem" }}>
            <img className="img-thumbnail" src="universidade.png"></img>
            <div className="card-body">
              <h5 className="card-title">Universidade Systemsat</h5>
              <p className="card-text fs-6 text-body-secondary">
                Portal institucional em Angular com layout responsivo e
                componentes reutilizáveis.
              </p>
              <a
                href="http://universidadesystemsat.com.br"
                target="_blank"
                className="btn btn-primary text-center"
              >
                Visualizar site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
