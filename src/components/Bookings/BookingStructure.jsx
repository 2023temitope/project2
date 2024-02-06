import PropTypes from "prop-types";
import axios from "axios";

function BookingStructure(props) {

    function deleteBooking (){
    axios.delete("http://localhost:8085/booking/cancel/" + props.id)
    .then(response => {props.getBookings()})
    .catch(err => console.error(err))
    }
    
    return (
        <div className="row">
        <p className="col">Buyer: {props.firstName} {props.lastName}</p>
        <p className="col">Date: {props.date}</p>
        <p className="col">Time: {props.time}</p>
        <p><button style={{width: "80px"}}className="btn btn-danger col" onClick={deleteBooking}>Delete</button></p>
        </div>
    )
}
BookingStructure.propTypes = {
    buyerID: PropTypes.number.isRequired,
    properties: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
}

export default BookingStructure;