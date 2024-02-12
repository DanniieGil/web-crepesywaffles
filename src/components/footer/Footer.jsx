import styles from "./footer.module.css"
import Links from "./links/links"
import SocialMedia from "./socialmedia/socialmedia"
import Image from "next/image"

export default function Footer() {
  return (
    <div className={styles.container}>
      <Links/>
      <Image src="/assets/empresas_b_logo.svg" width={114} height={188}/>
      <div>
        <SocialMedia/>
        <span>Términos y condiciones</span>
        <span>Políticas de privacidad</span>
        <span>© Crepes & Waffles 2023. Todos los derechos reservados.</span>
      </div>
    </div>
  )
}
