import React from "react";

import { Link } from "react-router-dom";

import "./Styles/Home.css";

function Home() {
  return (
    <section className="home">
      <div className="logo">
        <i class="fas fa-hamburger"></i>
      </div>

      <Link  to="/menu" className="button">
        ¡ORDENAR AHORA!
        <i class="fas fa-hand-point-up"></i>
      </Link>

      <div className="networks">
        <p>Visítanos:</p>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </section>
  )
}

export default Home;