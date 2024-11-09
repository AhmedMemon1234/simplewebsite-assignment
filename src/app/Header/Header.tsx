import { LuMenu, LuMenuSquare } from "react-icons/lu";
export default function Header(){
    return(
        <div className="Parentheader">
           <input type="checkbox" id="click" className="menu-toggle" />
      
      <label htmlFor="click" className="hamburger">
        <LuMenuSquare />
      </label>
<ul className="Childheader">
  <li><a href="">Home</a></li>
  <li><a href="#packages">Packages</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#contact">Contact</a></li>
  <button><a href="#packages">Explore More</a></button>
</ul>

        </div>
    )
}