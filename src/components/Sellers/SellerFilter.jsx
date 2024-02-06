import PropTypes from "prop-types";
import axios from 'axios';

function SellerStructure(props) {

    function deleteSeller (){
        axios.delete("http://localhost:8085/seller/delete/" + props.id)
        .then(response => {props.getSellers()})
        .catch(err => console.error(err))
        }

    return (
        <div> Seller: {props.id}
            <div className="row">
                <p className="col"> {props.firstName} {props.lastName}</p>
                <p><button style={{width: "80px"}}className="btn btn-danger col" onClick={deleteSeller}>Delete</button></p>
            </div>
        </div>

    )
}
SellerStructure.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
}

export default SellerStructure;