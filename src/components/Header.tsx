import "@/style/header.css"
import Link from "next/link"

const Header = () => {
  return (
    <div className="header">
        {/* logo */}
        <div className="logo">
       <h2>HS.</h2>  
        </div>
        {/* nav */}
        <ul className="nav" >
            
                 <li><Link className="nav-link" href={"/"}>Home</Link></li>
                <li> <Link className="nav-link"  href={"/about"}>About</Link></li>
                <li><Link className="nav-link" href={"/contact"}>Contact Us</Link> </li>
           
        </ul>
      
    </div>
  )
}

export default Header
