function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light bg-opacity-75 shadow-sm fixed-top backdrop-blur"
      role="navigation"
    >
      <div className="container-xxl">
        <div className="d-flex justify-content-between w-100 align-items-center">
          <a className="navbar-brand fs-4 fw-bold m-0" href="#home">
            Pedro<span className="text-primary">.dev</span>
          </a>

          <ul className="navbar-nav ms-auto d-flex gap-3 align-items-center">
            <li className="nav-item">
              <a
                href="#sobre"
                className="nav-link rounded-3 hover-bg fw-semibold"
              >
                Sobre mim
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#projetos"
                className="nav-link rounded-3 hover-bg fw-semibold"
              >
                Projetos
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contato"
                className="nav-link rounded-3 hover-bg fw-semibold"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
