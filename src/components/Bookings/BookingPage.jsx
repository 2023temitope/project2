import AddBooking from "./AddBooking";
import BookingDisplay from "./BookingDisplay";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PropertiesDisplay from "../Properties/PropertiesDisplay";
import PropertiesStructure from "../Properties/PropertiesStructure";

function BookingPage() {
    const params = useParams();

    const [property, setProperty] = useState([]);
    const [bookings, setBookings] = useState([]);

    const propertyCard = []

    useEffect(() => { getProperties(); getBookings(); }, []);


    function getBookings() {
        axios.get("http://localhost:8085/booking/get")
            .then((response) => { setBookings(response.data) })
            .catch(console.log)
    }

    function getProperties() {
        axios.get("http://localhost:8085/property/get/" + params.id)
            .then((response) => { setProperty(response.data) })
            .catch(console.log)
    }

    propertyCard.push(
        <div key={property.id}>
            <h5 style={{ color: "#0a69ca" }}>{property.address}</h5>
            <img style={{ width: "80%" }} src={property.image} />

        </div>)



    return (
        <div className="row">
            <h3 style={{ color: "#0a69ca" }}>Bookings</h3><br />

            <br /><br /><div className="col-4">{propertyCard}</div>
            <div className="col-6"><AddBooking  getBookings={getBookings} />
                <BookingDisplay bookingList={bookings} getBookings={getBookings} />
    
            </div>
        </div>
    );
}
export default BookingPage;