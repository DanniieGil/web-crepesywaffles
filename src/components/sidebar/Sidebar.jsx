import Link from "next/link";
import styles from "./sidebar.module.css";
import {SidebarContext} from "@/context/SidebarContext";
import {useContext} from "react";
import Image from "next/image"
import {links_1, links_2} from "./links"

export default function Sidebar() {
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div
      className={`${styles.sidebar_wrapper} ${
        isCollapsed ? styles.collapsed : ""
      }`}
    >
      <div className={styles.sidebar_top}>
        <button
          className={styles.sidebar_close_btn}
          onClick={toggleSidebarcollapse}
        >
          <Image src="/assets/cross.svg" width={16} height={16} />
        </button>
        <Link
          href="https://domicilios.crepesywaffles.com/"
          className={styles.sidebar_delivery_btn}
        >
          DOMICILIOS
        </Link>
      </div>
      <aside
        className={`${styles.sidebar}  ${isCollapsed ? styles.collapsed : ""}`}
      >
        <ul className={styles.sidebar_list}>
          {links_1.map(({ title, path }) => (
            <li className={styles.sidebar_item} key={title}>
              <Link href={path} className={styles.sidebar_link} key={title}>
                <span className={styles.sidebar_name}>{title}</span>
              </Link>
            </li>
          ))}
          <div className={styles.line_empty}></div>
          {links_2.map(({ title, path }) => (
            <li className={styles.sidebar_item} key={title}>
              <Link href={path} className={styles.sidebar_link} key={title}>
                <span className={styles.sidebar_name}>{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
