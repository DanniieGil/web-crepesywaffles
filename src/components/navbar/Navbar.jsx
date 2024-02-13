"use client"
import Link from "next/link"
import Links from "./links/Links"
import Image from "next/image"
import styles from "./navbar.module.css"
import { useContext } from "react"
import {SidebarContext} from "@/context/SidebarContext";
 
export default function Navbar() {

  const { toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className={styles.container}>
      <div className={styles.logos}>
        <button onClick={toggleSidebarcollapse} >
          <Image src="assets/hamburger.svg" width={40} height={21}/>
        </button>
        <Link href="/">
          <Image src="assets/logo.svg" width={422} height={36}/>
        </Link>
      </div>
      <div>
        <Links/>
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
