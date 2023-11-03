import React from "react";
import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cidades</NavLink>
        </li>
        <li>
          <NavLink to="countries">Países</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
