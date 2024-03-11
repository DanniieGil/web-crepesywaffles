"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./buttonmenu.module.css";
import { useState, useEffect } from "react";

export default function ButtonMenu() {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showButtons, setshowButtons] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const isScrolled = window.scrollY >= 80;
      setScrolled(isScrolled);
    };

    const checkInitialScrollPosition = () => {
      const isScrolled = window.scrollY >= 80;
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

  const containerStyle =
    isClient && (scrolled || typeof window === "undefined")
      ? styles.scrolled
      : "";

  const handleButtonClick = () => {
    setshowButtons((prevState) => !prevState);
  };

  return (
    <div className={`${styles.container} ${containerStyle}`}>
      <div className={styles.request_here_btn}>
        <Image
          src="/assets/pedir_aqui_6.svg"
          width={80}
          height={80}
          onClick={handleButtonClick}
        />
      </div>

      <div
        className={`${
          showButtons
            ? styles.showButtons_container
            : styles.hiddenButtons_container
        }`}
      >
        <Link
          href="https://domicilios.crepesywaffles.com/domicilio/ingresar-direccion/"
          target="_blank"
        >
          <div className={styles.item_container}>
            <div>En Línea</div>
            <Image
              src="/assets/calendar_icon.svg"
              width={32}
              height={32}
              className={styles.item_circle}
            />
          </div>
        </Link>
        <Link href="tel:+576016767610" target="_blank">
          <div className={styles.item_container}>
            <div>Call Center</div>
            <Image
              src="/assets/cellphone_icon.svg"
              width={32}
              height={32}
              className={styles.item_circle}
            />
          </div>
        </Link>
        <Link href="https://wa.me/+576016767610" target="_blank">
          <div className={styles.item_container}>
            <div>Whatsapp</div>
            <Image
              src="/assets/whatsapp_icon.svg"
              width={32}
              height={32}
              className={styles.item_circle}
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
