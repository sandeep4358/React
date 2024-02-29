import { FC } from "react";
import styles from "./Layout.module.css";
import SideBar from "../SideBar/SideBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <SideBar />
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default Layout;
