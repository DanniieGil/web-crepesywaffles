"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./buttonmenu.module.css";
import { useState, useEffect } from "react";

export default function ButtonMenu() {
  const [showButtons, setshowButtons] = useState(false);

  const handleButtonClick = () => {
    setshowButtons((prevState) => !prevState);
  };

  return (
    <div
      className={`${styles.container} ${showButtons && styles.openContainer}`}
    >
      <div
        className={`${styles.request_here_btn} ${
          showButtons && styles.request_here_btn_opened
        }`}
      >
        {showButtons ? (
          <Image
            src="/assets/close_pedir_aqui.svg"
            width={55}
            height={55}
            onClick={handleButtonClick}
            className={showButtons && styles.show_cross}
          />
        ) : (
          <Image
            src="/assets/pedir_aqui_6.svg"
            width={80}
            height={80}
            onClick={handleButtonClick}
            className={!showButtons && styles.show_pedir_aqui}
          />
        )}
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
          <div
            className={`${styles.item_container} ${
              showButtons ? styles.show_item_1 : styles.hidden_item_1
            }`}
          >
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
          <div
            className={`${styles.item_container} ${
              showButtons ? styles.show_item_2 : styles.hidden_item_2
            }`}
          >
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
          <div
            className={`${styles.item_container} ${
              showButtons ? styles.show_item_3 : styles.hidden_item_3
            }`}
          >
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
