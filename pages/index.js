import styles from "../styles/Home.module.css";
import { Login } from "../components/login.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <style js>{`
        body {
        background-image: linear-gradient( 117deg,  rgb(100, 174, 114) 39.2%, rgba(255,255,255,1) 156.2% );          
        margin: 0;
        }
      `}</style>
      <Login />
    </div>
  );
}
