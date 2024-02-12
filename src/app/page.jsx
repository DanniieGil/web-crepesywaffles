import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return ( 
    <div className={styles.container}>
      <div className={styles.section_one}>
        <h1>Hola</h1>
        <h4 className={styles.h4_simple}>
          Somos Crepes&Waffles y estamos 
          Naturalmente trabajando, artesanalmente produciendo, 
          saludablemente complaciendo.
        </h4>
      </div>
      <div className={styles.section_two}>
        <h4>
          <strong>En Crepes & Waffles sabemos que la mesa y el comer son actos de amor,</strong> que involucran todos los sentidos, 
          por eso, ponemos gran empeño en el servicio y mucha atención en la selección del mobiliario y de las luces,
          para generar lugares con ambiente, donde los alimentos, con sus formas, sus texturas, sus colores, sus aromas 
          y sabores, complazcan todos los deseos.
        </h4>
      </div>
      <div className={styles.section_three}>
        <h2>NOSOTROS</h2>
        <h3>¿QUE SOMOS</h3>
        <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
      </div>
      <div className={styles.section_four}>
        <h2>BONOS</h2>
        <h3>DE REGALO</h3>
        <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
      </div>
      <div className={styles.section_five}>
        <h2>COEXISTO</h2>
        <h3>LO QUE HACEMOS</h3>
        <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
      </div>
      <div className={styles.section_six}>
        <h2>CREPES</h2>
        <h3>EN CASA</h3>
        <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
      </div>
      <div className={styles.section_seven}>
        <h2>NOSOTROS</h2>
        <h3>EN EL MUNDO</h3>
        <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
      </div>
    </div> 
  )
}

