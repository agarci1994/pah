import styles from "../styles/Home.module.css";
import { Login } from "../components/login.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <style js>{`
        body {
          margin: 0;
        }
      `}</style>
      <Login />
    </div>
  );
}
