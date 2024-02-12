import Link from "next/link" 
import styles from "./links.module.css"
import NavLink from "./navlinks/navlink"

export default function Links() {

  const links =  [
    {
      title: "CREPES EN CASA",
      path: "/"
    },
    {
      title: "BONOS",
      path: "/about"
    },
    {
      title: "UBICACIONES",
      path: "/"
    },
    {
      title: "CARRETINO",
      path: "/"
    },
    {
      title: "CONTACTO",
      path: "/"
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
