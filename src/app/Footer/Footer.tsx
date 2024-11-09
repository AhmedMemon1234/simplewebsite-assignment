import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
export default function Footer(){
    return(
        <div className="Parentfooter">
<div className="Childfooter">
<h1 className="websiteurl">AhmedTravelAgency.com</h1>
<ul className="Footerul">
    <li>Home</li>
    <li>Packages</li>
    <li>Services</li>
    <li>Contact</li>
</ul>
<div className="icons">
<a href="https://www.facebook.com/profile.php?id=100060165264114"><CiFacebook/></a>
<a href="https://www.linkedin.com/in/ahmed-memon-5550642b5/"><TiSocialLinkedinCircular/></a>
<a href="https://github.com/AhmedMemon1234"><TiSocialGithubCircular/></a>
</div>
<p className="paragraph">
    Copyright &copy;2024 All Rights Reserved This Website is Made By <span>AhmedMemon</span>
</p>
</div>
        </div>
    )
}