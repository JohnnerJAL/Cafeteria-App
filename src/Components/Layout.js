import React from "react";

import "./Styles/Layout.css";

function Layout(props) {
  return (
    <section className="layout">
      <div className="logo">
        <i className="fas fa-hamburger"></i>
      </div>
      {props.children}
    </section>
  )
}

export default Layout;