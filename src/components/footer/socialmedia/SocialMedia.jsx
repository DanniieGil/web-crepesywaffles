import Link from "next/link"
import Image from "next/image"

export default function SocialMedia(){

  const links = [
    {
      name: "Facebook",
      image: "/assets/facebook_logo.svg",
      path: "https://www.facebook.com/CrepesyWafflesOficial"
    },
    {
      name: "Instagram",
      image: "/assets/instagram_logo.svg",
      path: "https://www.instagram.com/crepesywaffles/"
    },
    {
      name: "Linkedin",
      image: "/assets/linkedin_logo.svg",
      path: "https://www.linkedin.com/company/crepes-y-waffles/"
    },
    {
      name: "Twitter",
      image: "/assets/twitter_logo.svg",
      path: "https://twitter.com/crepesywaffles"
    },
  ]


  return (
    <div>
      {
        links.map(
          link=>(
            <Link href={link.path} key={link.name} target="_blank">
              <Image src={link.image} width={78} height={71}/>
            </Link>
          )
        )
      }
    </div>
  )
}
