import Link from "next/link"
import styles from "./links.module.css"

export default function Links() {
  const links = [
    {
      title: "MENÚ DOMICILIO",
      path: "/"
    },
    {
      title: "FACTURA ELECTRÓNICA",
      path: "/"
    },
    {
      title: "TRABAJA CON NOSOTROS",
      path: "/"
    },
    {
      title: "CONTACTO",
      path: "/"
    }
  ]

  return (
    <div>
      {
        links.map(
          link =>(
            <div key={link.title}>
              <Link href={link.path} className={styles.item}>{link.title}</Link> 
            </div>
          )
        )
      }
    </div>
  )
}
