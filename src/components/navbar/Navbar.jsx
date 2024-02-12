import Link from "next/link"
import Links from "./links/Links"
import Image from "next/image"
import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image src="assets/logo.svg" width={422} height={36}/>
      </div>
      <div>
        <Links/>
      </div>
      <div>
        <Link href="/">Ingresar</Link>
        <Link href="/">Domicilio</Link>
      </div>
    </div>
  )
}
