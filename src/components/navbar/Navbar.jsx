import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useContext, useState, useEffect } from "react";
import { SidebarContext } from "@/context/SidebarContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY >= 5;
      setScrolled(isScrolled);
    };

    const checkInitialScrollPosition = () => {
      const isScrolled = window.scrollY >= 5;
      setScrolled(isScrolled);
    };

    if (typeof window !== "undefined") {
      checkInitialScrollPosition();
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const containerStyle =
    isClient && (scrolled || typeof window === "undefined")
      ? styles.scrolled
      : "";

  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <div className={styles.logos}>
        <button onClick={toggleSidebarcollapse}>
          <Image
            src={`${
              containerStyle ? "assets/hamburger_2.svg" : "assets/hamburger.svg"
            }`}
            width={26}
            height={14}
          />
        </button>
        <Link href="/">
          <Image
            src={`${containerStyle ? "assets/logo_2.svg" : "assets/logo.svg"}`}
            width={197}
            height={98}
          />
        </Link>
      </div>
      <div className={`${styles.links} ${!isCollapsed ? styles.hidden : ""}`}>
        <Links />
      </div>
    </div>
  );
}
