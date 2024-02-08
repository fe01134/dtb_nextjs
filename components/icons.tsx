import {
  LucideProps,
  Moon,
  SunMedium,
  Instagram,
  Facebook,
  type Icon as LucideIcon,
} from "lucide-react"


export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  instagram: Instagram,
  facebook: Facebook,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" {...props}>
<g clip-path="url(#clip0_1_2)">
<rect width="50" height="50" fill="#FD1F03" fill-opacity="0.1"/>
<rect width="50" height="60" fill="#FD1F03"/>
<circle cx="25" cy="25" r="25" fill="white" />
<g filter="url(#filter0_d_1_2)">
<path d="M32.2656 28.0703H17.8281L14.7109 37H10.0469L22.4922 3.97656H27.7656L39.9531 37H35.3828L32.2656 28.0703ZM30.9062 24.1797L26.9922 12.9531C26.5703 11.8594 26.1719 10.7969 25.7969 9.76562C25.4219 8.71875 25.1797 7.97656 25.0703 7.53906C24.9297 8.03906 24.6719 8.8125 24.2969 9.85938C23.9219 10.9063 23.5234 11.9531 23.1016 13L19.1875 24.1797H30.9062Z" fill="#FF0000"/>
</g>
<path d="M21.8036 40H21.3932L20.1296 36.2308H20.4806L21.593 39.6706H21.6146L22.7378 36.2308H23.078L21.8036 40ZM23.8596 36.4846C23.7138 36.4846 23.649 36.4036 23.649 36.2902V36.2362C23.649 36.1228 23.7138 36.0418 23.8596 36.0418C24.0054 36.0418 24.0702 36.1228 24.0702 36.2362V36.2902C24.0702 36.4036 24.0054 36.4846 23.8596 36.4846ZM23.7084 40V37.2352H24.0162V40H23.7084ZM25.8045 40.0648C25.3239 40.0648 24.9891 39.8758 24.7407 39.5356L24.9675 39.3574C25.1943 39.6544 25.4589 39.8002 25.8261 39.8002C26.2473 39.8002 26.4903 39.6112 26.4903 39.2764C26.4903 38.9848 26.3229 38.8174 25.9233 38.758L25.6965 38.7202C25.1943 38.6446 24.8487 38.4448 24.8487 37.948C24.8487 37.4296 25.2537 37.1704 25.7883 37.1704C26.2473 37.1704 26.5281 37.3486 26.7333 37.597L26.5281 37.786C26.3823 37.6132 26.1555 37.435 25.7721 37.435C25.3779 37.435 25.1457 37.6186 25.1457 37.9318C25.1457 38.2504 25.3455 38.3746 25.7397 38.4394L25.9611 38.4718C26.5227 38.5582 26.7873 38.8012 26.7873 39.244C26.7873 39.757 26.4147 40.0648 25.8045 40.0648ZM27.7462 36.4846C27.6004 36.4846 27.5356 36.4036 27.5356 36.2902V36.2362C27.5356 36.1228 27.6004 36.0418 27.7462 36.0418C27.892 36.0418 27.9568 36.1228 27.9568 36.2362V36.2902C27.9568 36.4036 27.892 36.4846 27.7462 36.4846ZM27.595 40V37.2352H27.9028V40H27.595ZM29.9341 40H29.3833C29.1619 40 29.0431 39.865 29.0431 39.6598V37.5052H28.5625V37.2352H28.8757C29.0269 37.2352 29.0701 37.1812 29.0701 37.0246V36.463H29.3509V37.2352H29.9773V37.5052H29.3509V39.73H29.9341V40Z" fill="black"/>
</g>

   </svg>
  )
}

