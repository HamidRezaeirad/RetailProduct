import React from "react";
import { Link } from "react-router-dom";
import { Icon, Image } from ".";

/**
 *
 * @returns Navbar react component
 */
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary p-3 mb-5">
        <div className="container">
          <a className="navbar-brand me-2" href="https://www.ikea.com/se/sv/">
            <Image
              src="https://www.ikea.com/se/sv/static/ikea-logo.3ee105eef6b5939c1269.svg"
              height="16"
              alt="IKEA Logo"
              style={{ marginTop: "-1px" }}
            />
          </a>
          <div
            data-mdb-collapse-init
            className="navbar-toggler"
            data-mdb-target="#navbarButtons"
            aria-controls="navbarButtons"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Link to={"/"}>PRODUCTS</Link>
          </div>

          <div className="collapse navbar-collapse" id="navbarButtons">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"}>PRODUCTS</Link>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <a
                data-mdb-ripple-init
                className="btn btn-dark px-3"
                href="https://github.com/HamidRezaeirad"
                role="button"
              >
                <Icon name="github" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
