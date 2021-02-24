import React from "react";

import { Link } from "react-router-dom";

import "./Styles/Home.css";

function Home() {
  return (
    <section className="home">
      <div className="logo">
        <i className="fas fa-hamburger"></i>
      </div>

      <Link  to="/menu" className="button">
        ¡ORDENAR AHORA!
        <i className="fas fa-hand-point-up"></i>
      </Link>

      <div className="networks">
        <p>Visítanos:</p>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </section>
  )
}

export default Home;