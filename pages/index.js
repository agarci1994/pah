import styles from "../styles/Home.module.css";
import { Login } from "../components/login.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <style js>{`
        body {
          background-color: rgb(100, 174, 114);
          margin: 0;
        }
      `}</style>
      <Login />
    </div>
  );
}
