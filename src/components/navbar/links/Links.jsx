import Link from "next/link" 
import styles from "./links.module.css"
import NavLink from "./navlinks/navlink"

export default function Links() {

  const links =  [
    {
      title: "CREPES EN CASA",
      path: "https://domicilios.crepesywaffles.com/catalogo/crepes-en-casa/"
    },
    {
      title: "BONOS",
      path: "https://crepesywaffles.com/bonos"
    },
    {
      title: "UBICACIONES",
      path: "https://domicilios.crepesywaffles.com/ubicaciones/"
    },
    {
      title: "CARRETINO",
      path: "https://domicilios.crepesywaffles.com/carretino/"
    },
    {
      title: "CONTACTO",
      path: "https://domicilios.crepesywaffles.com/contacto/"
    }
  ]

  return(
    <div className={styles.links}>
      {
        links.map(
          link=>(
            <NavLink item={link} key={link.title}/>
          )
        )
      }
    </div>
  )
}
