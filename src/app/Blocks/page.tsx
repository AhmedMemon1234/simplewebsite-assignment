import Image from "next/image";

export default function Blocks() {
    return (
        <div className="Parentblocks" id="packages">
            <div className="card">
                <Image src={"/tourimg1.jpg"} alt="Ahmed" width={400} height={100} />
                <div className="cardcontent">
                    <h3>Thailand</h3>
                    <p>Book Your Flight Now In The Following Number Given 03368952826.</p>
                    <a href="" className="btn">Read More</a>
                </div>
            </div>
            <div className="card">
                <Image src={"/tourimg2.jpg"} alt="Ahmed" width={400} height={100} />
                <div className="cardcontent">
                    <h3>Dubai UAE</h3>
                    <p>Book Your Flight Now In The Following Number Given 03368952826.</p>
                    <a href="" className="btn">Read More</a>
                </div>
            </div>
            <div className="card">
                <Image src={"/tourimg3.jpg"} alt="Ahmed" width={400} height={100} />
                <div className="cardcontent">
                    <h3>USA America</h3>
                    <p>Book Your Flight Now In The Following Number Given 03368952826.</p>
                    <a href="" className="btn">Read More</a>
                </div>
            </div>
            
            <div className="card">
                <Image src={"/tourimg4.jpeg"} alt="Ahmed" width={400} height={100} />
                <div className="cardcontent">
                    <h3>Turkey</h3>
                    <p>Book Your Flight Now In The Following Number Given 03368952826.</p>
                    <a href="" className="btn">Read More</a>
                </div>
            </div>
            
            <div className="card">
                <Image src={"/tourimg5.jpg"} alt="Ahmed" width={400} height={100} />
                <div className="cardcontent">
                    <h3>United Kingdon U.K</h3>
                    <p>Book Your Flight Now In The Following Number Given 03368952826.</p>
                    <a href="" className="btn">Read More</a>
                </div>
            </div>
            
            <div className="card">
                <Image src={"/tourimg6.jpg"} alt="Ahmed" width={400} height={100} />
                <div className="cardcontent">
                    <h3>South Korea</h3>
                    <p>Book Your Flight Now In The Following Number Given 03368952826.</p>
                    <a href="" className="btn">Read More</a>
                </div>
            </div>

        </div>
    )
}