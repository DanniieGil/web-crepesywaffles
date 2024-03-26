import styles from "./page.module.css";
import Image from "next/image";

export const metadata = {
  title: "Crepes & Waffles - Valores.",
  description:
    "Arte transformado en alimento. Naturalmente trabajando, artesanalmente produciendo, saludablemente complaciendo.",
};

export default function Valores() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Nuestros
          <br />
          valores
        </h1>
      </div>

      <div className={styles.body_container}>
        <div className={styles.section_one}>
          <div className={styles.col_1}>
            <span>AMOR</span>
            <h3>
              El amor es nuestra naturaleza
              <br />
              y con ella construimos.
              <br />
              Es lo que le da sentido a la vida.
            </h3>
          </div>
          <div className={styles.col_2}>
            <Image
              src="/assets/valores/img1_desktop.svg"
              width={222}
              height={206}
            />
          </div>
        </div>

        <div className={styles.section_two}>
          <div className={styles.col_1}>
            <h2>ALEGRÍA</h2>
            <h3>
              La alegría es el estado más puro del alma, cuando genuinamente
              <br />
              se siente y se expresa, impulsa la creatividad y ese es el
              potencial <br />
              que todos tenemos dentro.
            </h3>
          </div>
          <div className={styles.col_2}>
            <Image
              src="/assets/valores/img2_desktop.svg"
              width={222}
              height={206}
            />
          </div>
        </div>

        <div className={styles.section_three}>
          <div className={styles.col_1}>
            <h2>SOLIDARIDAD</h2>
            <h3>
              La solidaridad es comprender al otro. En la solidaridad se
              <br />
              comparte con los otros las alegrías y los momentos de desánimo.
              <br />
              Pero no solidarizamos con las acciones mal intencionadas.
            </h3>
          </div>
          <div className={styles.col_2}>
            <Image
              src="/assets/valores/img3_desktop.svg"
              width={222}
              height={206}
            />
          </div>
        </div>

        <div className={styles.section_four}>
          <div className={styles.col_1}>
            <h2>RESPONSABILIDAD</h2>
            <h3>
              La responsabilidad es asumir las elecciones que tomamos
              <br />y en consecuencia responder siempre por ellas.
            </h3>
          </div>
          <div className={styles.col_2}>
            <Image
              src="/assets/valores/img4_desktop.svg"
              width={222}
              height={206}
            />
          </div>
        </div>

        <div className={styles.section_five}>
          <div className={styles.col_1}>
            <h2>HONESTIDAD</h2>
            <h3>
              La honestidad es no vulnerar nuestra esencia, es respetarla.
              <br />
              La honestidad es andar en la verdad y obrar con rectitud.
            </h3>
          </div>
          <div className={styles.col_2}>
            <Image
              src="/assets/valores/img5_desktop.svg"
              width={222}
              height={206}
            />
          </div>
        </div>

        <div className={styles.section_six}>
          <div className={styles.col_1}>
            <h2>RESPETO</h2>
            <h3>
              El respeto es saber establecer los límites. Es tener clara la
              línea <br />
              que no sobrepasa ni vulnera al otro.
            </h3>
          </div>
          <div className={styles.col_2}>
            <Image
              src="/assets/valores/img6_desktop.svg"
              width={222}
              height={206}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
