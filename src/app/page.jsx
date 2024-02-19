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
      <div className={styles.request_here_btn}>
        <Link href="https://domicilios.crepesywaffles.com/">
          <Image src="/assets/pide_aqui_1.svg" width={60} height={217} />
        </Link>
      </div>
      <div className={styles.section_one}>
        <h1>Hola</h1>
        <h4 className={styles.h4_simple}>
          Somos Crepes & Waffles y estamos
          <br />
          Naturalmente trabajando, artesanalmente produciendo,
          <br />
          saludablemente complaciendo.
        </h4>
      </div>
      <div className={styles.section_two}>
        <h4>
          En Crepes & Waffles sabemos que la mesa y el comer son actos de amor,
          que involucran todos los sentidos, por eso, ponemos gran empeño en el
          servicio y mucha atención en la selección del mobiliario y de las
          luces, para generar lugares con ambiente, donde los alimentos, con sus
          formas, sus texturas, sus colores, sus aromas y sabores, complazcan
          todos los deseos.
        </h4>
      </div>
      <div className={styles.section_three}>
        <div className={styles.col_1}>
          <h2>NOSOTROS</h2>
          <h3>¿QUE SOMOS?</h3>
          <Link href="/" className={styles.show_more_btn}>
            VER MÁS
          </Link>
        </div>
        <div className={styles.col_2}>
          <Image
            src="/assets/img_1.jpg"
            width={513}
            height={482}
            className={styles.image_desktop}
          />
          <div className={styles.image_mobile} />
        </div>
      </div>
      <div className={styles.section_four}>
        <div className={styles.col_1}>
          <h2>HISTORIA</h2>
          <h3>NUESTRA ESENCIA</h3>
          <Link href="/" className={styles.show_more_btn}>
            VER MÁS
          </Link>
        </div>
        <div className={styles.col_2}>
          <Image
            src="/assets/img_1.jpg"
            width={513}
            height={482}
            className={styles.image_desktop}
          />
          <div className={styles.image_mobile} />
        </div>
      </div>
      <div className={styles.section_five}>
        <h2>COEXISTO</h2>
        <h3>LO QUE HACEMOS</h3>
        <Link href="/" className={styles.show_more_btn}>
          VER MÁS
        </Link>
      </div>
      <div className={styles.section_six}>
        <div className={styles.col_1}>
          <h2>NOSOTROS</h2>
          <h3>EN EL MUNDO</h3>
          <Link href="/" className={styles.show_more_btn}>
            VER MÁS
          </Link>
        </div>
        <div className={styles.col_2}>
          <Image
            src="/assets/img_1.jpg"
            width={513}
            height={482}
            className={styles.image_desktop}
          />
          <div className={styles.image_mobile} />
        </div>
      </div>
      <div className={styles.section_seven}>
        <div className={styles.col_1}>
          <h2>BONOS</h2>
          <h3>DE REGALO</h3>
          <Link href="/" className={styles.show_more_btn}>
            VER MÁS
          </Link>
        </div>
        <div className={styles.col_2}>
          <Image
            src="/assets/img_1.jpg"
            width={513}
            height={482}
            className={styles.image_desktop}
          />
          <div className={styles.image_mobile} />
        </div>
      </div>
    </div>
  );
}

