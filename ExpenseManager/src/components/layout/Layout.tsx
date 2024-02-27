import { FC } from "react";
import Sidebar from "../sidebar/Sidebar";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Sidebar />
      </div>
      <div className={styles.right}>{children}</div>
    </div>
  );
};

export default Layout;
