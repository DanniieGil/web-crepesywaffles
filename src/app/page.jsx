import styles from "./page.module.css"

export default function Home() {
  return ( 
    <div>
      <div className={styles.section_one}>
        <h1>Hola</h1>
        <h2>
          Somos Crepes&Waffles y estamos 
          Naturalmente trabajando, artesanalmente produciendo, 
          saludablemente complaciendo.
        </h2>
      </div>
      <div className={styles.section_two}>
        <strong>En Crepes & Waffles sabemos que la mesa y el comer son actos de amor,</strong> que involucran todos los sentidos, 
        por eso, ponemos gran empeño en el servicio y mucha atención en la selección del mobiliario y de las luces,
        para generar lugares con ambiente, donde los alimentos, con sus formas, sus texturas, sus colores, sus aromas 
        y sabores, complazcan todos los deseos.
      </div>
      <div className={styles.section_three}>
        <h1>NOSOTROS</h1>
        <h2>¿QUE SOMOS</h2>
        <button>VER MÁS</button>
      </div>
      <div className={styles.section_four}>
        <h1>BONOS</h1>
        <h2>DE REGALO</h2>
        <button>VER MÁS</button>
      </div>
      <div className={styles.section_five}>
        <h1>COEXISTO</h1>
        <h2>LO QUE HACEMOS</h2>
        <button>VER MÁS</button>
      </div>
      <div className={styles.section_six}>
        <div>
          <h1>CREPES</h1>
          <h2>EN CASA</h2>
          <button>VER MÁS</button>
        </div>
        <div>
          <h1>NOSOTROS</h1>
          <h2>EN el mundo</h2>
          <button>VER MÁS</button>
        </div>

      </div>
    </div> 
  )
}

