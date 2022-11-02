import Link from "next/link";
import styles from "../styles/components/Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className={styles.content}>{children}</main>;
};

export default Layout;
