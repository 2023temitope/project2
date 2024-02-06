import PropTypes from "prop-types";
import axios from "axios";

function BuyerStructure(props) {

    function deleteBuyer (){
        axios.delete("http://localhost:8085/buyer/delete/" + props.id)
        .then(response => {props.getBookings()})
        .catch(err => console.error(err))
        }

    return (
        <div>Buyer: {props.id}
        <div className="row">
            <p className="col"> {props.firstname} {props.lastname}</p>
            <p><button style={{width: "80px"}}className="btn btn-danger col" onClick={deleteBuyer}>Delete</button></p>
        </div>
</div>

    )
}
BuyerStructure.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
}

export default BuyerStructure;