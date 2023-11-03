import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav"

export default function Homepage() {
  return (
    <main className={styles.homepage}>

      <PageNav />

      <section>
        <h1>
          Você viaja pelo mundo.
          <br />
          O WorldWise registra suas aventuras.
        </h1>
        <h2>
        Um mapa-múndi que registra seus passos por todas as cidades que você possa imaginar. Jamais esqueça suas experiências maravilhosas e mostre aos seus amigos como você percorreu o mundo.
        </h2>
        <Link to="/login" className="cta">Comece a registrar agora</Link>
      </section>
    </main>
  );
}
