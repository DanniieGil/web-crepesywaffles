import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import ButtonMenu from "@/components/button_menu/ButtonMenu";

export const metadata = {
  title: "Crepes & Waffles - Nosotros.",
  description:
    "Arte transformado en alimento. Naturalmente trabajando, artesanalmente produciendo, saludablemente complaciendo.",
};

export default function Nosotros() {
  return (
    <div className={styles.container}>
      <ButtonMenu />
      <div className={styles.section_one}>
        <h1>Nosotros</h1>
      </div>
      <div className={styles.section_two}>
        <div className={styles.line_1}>MISIÓN</div>
        <div className={styles.line_2}>
          Despertar admiración en nuestra comunidad
        </div>
        <div className={styles.line_3}>por regenerar vida</div>
        <div className={styles.line_4}>y servir arte-sano con amor</div>
        <div className={styles.line_5}>y alegría a precios razonables.</div>
      </div>
      <div className={styles.section_three}>
        <div className={styles.title}>VISIÓN</div>
        <div className={styles.description}>
          Hacer de Crepes & Waffles una empresa líder en lo que realiza,
          despertando afecto y sentido de pertenencia entre todos sus clientes,
          empleados, colaboradores y la comunidad en general.
        </div>
      </div>
      <div className={styles.section_four}>
        <div className={styles.title}>VALORES</div>
        <div className={styles.description}>
          Nos esforzamos por construir una mejor empresa a través de nuestras
          acciones y decisiones diarias. Descubre cómo nuestros valores
          corporativos dan forma a todo lo que hacemos.
        </div>
      </div>
      <div className={styles.section_five}>
        <div className={styles.title}>INNOVACIÓN</div>
        <div className={styles.description}>
          Con la idea de llegar al corazón y quedarnos en la mente, nos
          reinventamos todo el tiempo con la creación de nuevos platos y la mezcla de diferentes ingredientes que juntos forman una sinfonía capaz de cautivar los paladares más conocedores y los apetitos más
          ambiciosos.
        </div>
      </div>
      <div className={styles.section_six}>
        <div className={styles.title}>BLOG</div>
        <div className={styles.description}>
          ¡Conoce nuestras últimas noticias!
        </div>
      </div>
    </div>
  );
}
