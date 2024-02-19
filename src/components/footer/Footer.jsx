import Link from "next/link"
import styles from "./footer.module.css"
import Links from "./links/Links"
import SocialMedia from "./socialmedia/SocialMedia"
import Image from "next/image"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.row_1}>
        <Links/>
        <Image src="/assets/empresas_b_logo.svg" width={76} height={125}/>
      </div>
      <hr/>
      <div className={styles.row_2}>
        <SocialMedia/>
        <div className={styles.text}>
          <div className={styles.col_1}>
            <Link href="https://domicilios.crepesywaffles.com/terminos-y-condiciones/">Términos y condiciones</Link>
            <Link href="https://domicilios.crepesywaffles.com/politicas-de-privacidad/">Políticas de privacidad</Link>
          </div>
          <span>© Crepes & Waffles 2024. Todos los derechos reservados.</span>
        </div>
      </div>
    </div>
  )
}
