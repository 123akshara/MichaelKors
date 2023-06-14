import logo from "/assets/Michael-Kors-Logo.png";
import { Link } from "react-router-dom";
import "/src/styles.css";

export default function NavBar() {
  return (
    <div className="App">
      <div className="navbar-fixed">
        <img src={logo} className="logo" alt="Logo"></img>
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav "
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa fa-bars text-dark"></i>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav ml-auto d-flex ">
              <li className="nav-item">
                <Link to="new" className="nav-link text-dark">
                  NEW
                </Link>
              </li>
              <li className="nav-item">
                <Link to="women" className="nav-link text-dark">
                  WOMEN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="men" className="nav-link text-dark">
                  MEN
                </Link>
              </li>
              <li className="nav-item">
                <Link to="kids" className="nav-link text-dark">
                  KIDS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="michael-kors-collection"
                  className="nav-link text-dark"
                >
                  MICHAEL KORS COLLECTION
                </Link>
              </li>
              <li className="nav-item">
                <Link to="handbags" className="nav-link text-dark">
                  HANDBAGS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="shoes" className="nav-link text-dark">
                  SHOES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="watches" className="nav-link text-dark">
                  WATCHES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="accessories" className="nav-link text-dark">
                  ACCESSORIES
                </Link>
              </li>
              <li className="nav-item">
                <Link to="gifts" className="nav-link text-dark">
                  GIFTS
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}
