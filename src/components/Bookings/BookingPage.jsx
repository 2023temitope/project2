import AddBooking from "./AddBooking";
import BookingDisplay from "./BookingDisplay";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PropertiesDisplay from "../Properties/PropertiesDisplay";
import PropertiesStructure from "../Properties/PropertiesStructure";

function BookingPage() {
    const params = useParams();

    const [property, setProperty] = useState({bookings:[]});
  


    useEffect(() => { getProperties();  }, []);



    function getProperties() {
        axios.get("http://localhost:8085/property/get/" + params.id)
            .then((response) => { setProperty(response.data) })
            .catch(console.log)
    }

    

    return (
        <div className="row">
            <h3 style={{ color: "#EE3BE3" }}>Bookings</h3><br />

            <br /><br /><div className="col-4">
            <h5 style={{ color: "#0a69ca" }}>{property.address}</h5>
            <img style={{ width: "80%" }} src={property.image} />

        </div>
            
            <div className="col-6"><AddBooking  getBookings={getProperties} />
                <BookingDisplay bookingList={property.bookings} getBookings={getProperties} />
    
            </div>
        </div>
    );
}
export default BookingPage;