import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark w-100">
      <div className="container-fluid">
        <Link className="navbar-brand fs-2" to="/">etorstore</Link>
        <button
          className="navbar-toggler d-lg-none fs-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
          <ul className="navbar-nav mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fs-5" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fs-5" to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
