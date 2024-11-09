import Image from "next/image"
import Blocks from "./Blocks/page"
import Services from "./services/page"
import Contact from "./contact/page"
export default function Home(){
  return(
    <div className="Parent">
      <div className="Child">
        <div className="tourimage">
        <Image src={"/tour.jpg"} alt="Ahmed" width={1280} height={100}/>
        </div>
        <div className="Heading">
  <h1>Ahmed Tours And Travels Info!</h1>
</div>
<Blocks/>
<Services/>
<Contact/>
      </div>
    </div>
  )
}