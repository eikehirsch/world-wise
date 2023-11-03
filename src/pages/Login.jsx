import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import PageNav from "../components/PageNav"
import Button from "../components/Button";
import { useAuth } from "../contexts/fakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("eikehi@gmail.com");
  const [password, setPassword] = useState("qwerty");
  
  const {login, isAuthenticated} = useAuth();

  useEffect(() => {
    if(isAuthenticated) {
      navigate("/app", {replace: true})
    }
  }, [isAuthenticated, navigate])

  function handleSubmit(e) {
    e.preventDefault();

    if(email && password) {
      login(email, password);
      
    }
  }
  

  return (
    <main className={styles.login}>

      <PageNav />

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label htmlFor="email">Endereço de email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}
