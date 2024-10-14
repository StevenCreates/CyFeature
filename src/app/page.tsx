import Image from "next/image";
import styles from "./page.module.css";
import Button from "@mui/material/Button";
import Logo from "./assets/icons/logo";
import NavigationBar from "./components/NavigationBar";

export default function Home() {
  return (
    <div>
      {/* <div className={styles.page}>
        <main className={styles.main}> */}
      {/* <NavigationBar /> */}
      <Logo />
      <Button variant="contained" color="primary">
        Text
      </Button>
      {/* </main>
      </div> */}
    </div>
  );
}
