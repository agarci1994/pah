import styles from "../../styles/Home.module.css";
import { Main } from "../../components/main";
import ProtectedRoute from "../../utils/protectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <div className={styles.container}>
        <style js>{`
          body {
            margin: 0;
          }
        `}</style>
        <Main />
      </div>
    </ProtectedRoute>
  );
}
