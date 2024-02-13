import styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image"

export const metadata = {
  title: 'Crepes & Waffles - Arte transformado en alimento.',
  description: "Arte transformado en alimento. Naturalmente trabajando, artesanalmente produciendo, saludablemente complaciendo.",
};

export default function Home() {
  return ( 
    <div className={styles.container}> 

      <div className={styles.section_one}>
        <h1>Hola</h1>
        <h4 className={styles.h4_simple}>
          Somos Crepes&Waffles y estamos<br/>
          Naturalmente trabajando, artesanalmente produciendo,<br/>
          saludablemente complaciendo.
        </h4>
      </div>
      <div className={styles.section_two}>
        <h4>
          En Crepes & Waffles sabemos que la mesa y el comer son actos de amor, que involucran todos los sentidos, <br/> 
          por eso, ponemos gran empeño en el servicio y mucha atención en la selección del mobiliario y de las luces,<br/>
          para generar lugares con ambiente, donde los alimentos, con sus formas, sus texturas, sus colores, sus aromas <br/>
          y sabores, complazcan todos los deseos.
        </h4>
      </div>
      <div className={styles.section_three}>
        <div className={styles.col_1}>
          <h2>NOSOTROS</h2>
          <h3>¿QUE SOMOS?</h3>
          <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
        </div>
        <div className={styles.col_2}>
          <Image src="/assets/img_1.jpg" width={769} height={722}/>
        </div>
      </div>
      <div className={styles.section_four}>
        <div className={styles.request_here_btn}>
          <Link href="https://crepesywaffles.com/bonos">
            <Image src="/assets/pide_aqui_2.svg" width={78} height={285}/>
          </Link>
        </div>
        <div className={styles.col_1}>
          <h2>BONOS</h2>
          <h3>DE REGALO</h3>
          <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
        </div>
        <div className={styles.col_2}>
          <Image src="/assets/img_2.jpg" width={769} height={722}/>
        </div>
      </div>
      <div className={styles.section_five}>
        <div className={styles.request_here_btn}>
          <Link href="https://crepesywaffles.com/bonos">
            <Image src="/assets/pide_aqui_1.svg" width={78} height={285}/>
          </Link>        </div>
        <h2>COEXISTO</h2>
        <h3>LO QUE HACEMOS</h3>
        <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
      </div>
      <div className={styles.section_six}>
        <div className={styles.col_1}>
          <h2>CREPES</h2>
          <h3>EN CASA</h3>
          <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
        </div>
        <div className={styles.col_2}>
          <Image src="/assets/img_3.jpg" width={769} height={722}/>
        </div>
      </div>
      <div className={styles.section_seven}>
        <div className={styles.col_1}>
          <h2>NOSOTROS</h2>
          <h3>EN EL MUNDO</h3>
          <Link href="/" className={styles.show_more_btn}>VER MÁS</Link>
        </div>
        <div className={styles.col_2}>
          <Image src="/assets/img_4.jpg" width={769} height={722}/>
        </div>
      </div>
    </div> 
  )
}

