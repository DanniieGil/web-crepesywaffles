import Link from "next/link"

export default function Links() {
  const links = [
    {
      title: "MENÚ DOMICILIO",
      path: "/"
    },
    {
      title: "CREPES EN CASA",
      path: "/"
    },
    {
      title: "BONOS DE REGALO",
      path: "/"
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
    },
    {
      title: "COMUNIDAD",
      path: "/"
    },
    {
      title: "TRABAJA CON NOSOTROS",
      path: "/"
    },
    {
      title: "FACTURA ELECTRÓNICA",
      path: "/"
    }
  ]

  return (
    <div>
      {
        links.map(
          link =>(
            <div>
              <Link href={link.path}>{link.title}</Link> 
            </div>
          )
        )
      }
    </div>
  )
}
