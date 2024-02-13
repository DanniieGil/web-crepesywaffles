
import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "@/context/SidebarContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { toggleSidebarcollapse } = useContext(SidebarContext);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY >= 200;
      setScrolled(isScrolled);
    };

    const checkInitialScrollPosition = () => {
      const isScrolled = window.scrollY >= 200;
      setScrolled(isScrolled);
    };

    if (typeof window !== 'undefined') {
      checkInitialScrollPosition();
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const containerStyle = isClient && (scrolled || typeof window === 'undefined') ? styles.scrolled : '';

  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <div className={styles.logos}>
        <button onClick={toggleSidebarcollapse}>
          <Image src={`${containerStyle ? "assets/hamburger_2.svg" : "assets/hamburger.svg"}`} width={40} height={21} />
        </button>
        <Link href="/">
          <Image src={`${containerStyle ? "assets/logo_2.svg" : "assets/logo.svg"}`} width={422} height={36} />
        </Link>
      </div>
      <div>
        <Links />
      </div>
      <div className={styles.col_3}>
        <Link href="https://domicilios.crepesywaffles.com/ingresar/?next=/ingresar/" className={styles.login_btn}>
          INGRESAR
        </Link>
        <Link href="https://domicilios.crepesywaffles.com/" className={styles.delivery_btn}>
          DOMICILIO
        </Link>
      </div>
    </div>
  )
}
