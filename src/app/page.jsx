import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import ButtonMenu from "@/components/button_menu/ButtonMenu";

export const metadata = {
  title: "Crepes & Waffles - Arte transformado en alimento.",
  description:
    "Arte transformado en alimento. Naturalmente trabajando, artesanalmente produciendo, saludablemente complaciendo.",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.section_one}>
        <video className={styles.video_bg} autoPlay muted loop>
          <source src="/assets/home_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>Hola</h1>
        <h4 className={styles.h4_simple}>
          Somos Crepes & Waffles y estamos
          <br />
          Naturalmente trabajando, artesanalmente produciendo,
          <br />
          saludablemente complaciendo.
        </h4>
      </div>
      {/* <ButtonMenu /> */}
      <div className={styles.section_three}>
        <div className={styles.col_1}>
          <h2>NOSOTROS</h2>
          <h3>¿QUÉ HACEMOS?</h3>
          <h5>
            Transformamos alimento en Arte, con la idea de llegar al corazón y
            quedarnos en la mente, nos reinventamos todo el tiempo con la
            creación de nuevos platos y la mezcla de diferentes ingredientes que
            juntos forman una sinfonía capaz de cautivar los paladares más
            conocedores y los apetitos más ambiciosos.
          </h5>
          <Link href="/nosotros" className={styles.show_more_btn}>
            VER MÁS
          </Link>
        </div>
        <div className={`${styles.image_desktop} ${styles.right_bg}`}></div>
        <div className={styles.image_mobile} />
      </div>
      <div className={styles.section_four}>
        <div className={styles.col_1}>
          <h2>HISTORIA</h2>
          <h3>¿QUÉ SOMOS?</h3>
          <h5>
            Somos una empresa fundada por jóvenes emprendedores, un pequeño país
            en donde todos sus trabajadores son luchadores y guerreros
            incansables. Creemos que vivir tiene sentido si gracias a nuestra
            misión de servir hacemos menos difícil la vida de los demás.
          </h5>
          <Link href="/" className={styles.show_more_btn}>
            VER MÁS
          </Link>
        </div>
        <div className={styles.col_2}>
          <div className={`${styles.image_desktop} ${styles.left_bg}`}></div>
          <div className={styles.image_mobile} />
        </div>
      </div>
      <div className={styles.section_five}>
        <h2>IMPACTO</h2>
        <h3>EJEMPLOS DE CAMBIO</h3>
        <h5 className={styles.h5_simple}>
          Estamos movidos por el deseo de actuar y de inspirar a otros a
          hacerlo. Creemos en el poder de las historias que muestran ejemplos de
          transformación, de colaboración y de co-existencia que nos enseñan que
          es posible crear otras maneras de co-habitar, de relacionarnos con la
          vida, de co-crear bienestar para las comunidades y los ecosistemas.
        </h5>
        <Link href="/" className={styles.show_more_btn}>
          VER MÁS
        </Link>
      </div>
      <div className={styles.section_six}>
        <div className={styles.col_1}>
          <h2>NUESTRAS MARCAS</h2>
          <h3>TEXTO PENDIENTE</h3>
          <h5>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volut
          </h5>
          <Link href="/" className={styles.show_more_btn}>
            VER MÁS
          </Link>
        </div>
        <div className={styles.col_2}>
          <div className={`${styles.image_desktop} ${styles.right_bg}`}></div>
          <div className={styles.image_mobile} />
        </div>
      </div>
      <div className={styles.section_seven}>
        <div className={styles.col_1}>
          <h2>EXPANSIÓN</h2>
          <h3>NOSOTROS EN EL MUNDO</h3>
          <h5>
            Lorem ipsum dolor sit amet, consectetuer adipiscing velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit.
          </h5>
          <Link href="/" className={styles.show_more_btn}>
            VER MÁS
          </Link>
        </div>
        <div className={styles.col_2}>
          <div className={`${styles.image_desktop} ${styles.left_bg}`}></div>
          <div className={styles.image_mobile} />
        </div>
      </div>
    </div>
  );
}
