export default function Contact(){
    return(
        <div className="ParentContact" id="contact">
         <div className="ChildContact">
            <h1>Contact Us</h1>
            <input type="text" placeholder="Name" className="name"/>
            <input type="email" placeholder="Email" className="email"/>
            <div className="row2">
            <input type="number" placeholder="Phone" className="phone"/>
            <input type="text" placeholder="Location" className="location" />
        </div>
        <div className="row3">
            <input type="text" placeholder="Company Name" className="company"/>
        </div>
        <div className="row4">
        <input type="text" placeholder="About You" className="AboutUr" />
        </div>
        <div className="submit">
<a href="">Submit Now</a>
        </div>
         </div>
        </div>
    )
}