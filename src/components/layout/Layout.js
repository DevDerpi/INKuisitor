import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation.js";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
