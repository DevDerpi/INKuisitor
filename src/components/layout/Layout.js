import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation.js";
import Footer from "./Footer";
import background from "../images/background.jpg";
const Layout = (props) => {
  return (
    <div style={{backgroundImage: `url(${background})`}}>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer/>
    </div>
  );
};
export default Layout;
