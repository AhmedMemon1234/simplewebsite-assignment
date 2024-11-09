import { FaPlane } from "react-icons/fa";
export default function Services(){
    return(
        <div className="ParentService" id="services">
           <div className="servicecontent">
            <div className="plane">
            <FaPlane/>
            </div>
            <h2>
                Best Flights
            </h2>
            <p>Find the best flight options with our travel agency, offering competitive prices and convenient schedules for your next journey. Let our expert team help you discover the most affordable and comfortable flights, making your travel experience seamless and unforgettable So Dont Miss This Opportunity And Book Your Flight Now!</p>
           </div>
           
           <div className="servicecontent">
           <div className="plane">
            <FaPlane/>
            </div>
            <h3>
                Facilities
            </h3>
            <p>Enjoy a range of top-notch facilities designed to make your travel experience smooth and hassle-free. From comfortable accommodations and seamless airport transfers to personalized travel assistance, we ensure every detail is taken care of. Travel with ease and confidence, knowing we’ve got you covered at every step!</p>
           </div>
           
           <div className="servicecontent">
           <div className="plane">
            <FaPlane/>
            </div>
            <h4>
                Quality
            </h4>
            <p>At our travel agency, we are committed to delivering exceptional quality in every aspect of your journey. From the finest flights and handpicked accommodations to personalized customer service, we ensure your travel experience is nothing short of outstanding. Our attention to detail and dedication to excellence make every trip memorable and stress-free.</p>
           </div>
        </div>
    )
}