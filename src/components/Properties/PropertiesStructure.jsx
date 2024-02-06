import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from "react";
import Status from "./Status";
import { useNavigate } from "react-router";
import bathroomPicture from "../../images/bathroom-bathtub-bubble-foam-water-svgrepo-com.svg";
import bedroomPicture from "../../images/bedroom-hotel-svgrepo-com.svg";
import gardenPicture from "../../images/garden-tree-svgrepo-com.svg";
function PropertiesStructure(props) {

    console.log(props)
    const navigate = useNavigate();

    if (props.status === "For Sale") {
        return (
            <div className="d-inline-flex " style={{ maxWidth: "20%", margin: "20px" }}>
                <div className="card">
                    <div className="card-body">
                        <h4>£{Number(props.price).toLocaleString("EN-UK")}</h4><br />
                        <img id="House" src={props.image} width={"70%"}></img>
                        <button style={{ margin:"10px"}} className="btn btn-success" type="submit" onClick={() => navigate("/bookings/" + props.id)}>
                                Bookings
                            </button>
                        <div className="card-text">
                            Address: {props.address}<br />
                            City: {props.city}<br />
                            Type: {props.type}<br />
                            <img  width= "30px"src = {bedroomPicture} alt=""/> {props.bedroom}<br />
                           < img  width= "30px"src = {bathroomPicture} alt=""/> {props.bathroom}<br />
                           < img  width= "20px"src = {gardenPicture} alt=""/> {props.garden}<br />
                            Status: {props.status}<br />
                            <br></br>
                            <Status id={props.id} getProperties={props.getProperties} />
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }


else {
    return (
        <div className="d-inline-flex " style={{ maxWidth: "20%", margin: "20px" }}>
            <div className="card">
                <div className="card-body">
                    <h4>£{Number(props.price).toLocaleString("EN-UK")}</h4><br />
                    <img id="House" src={props.image} width={"70%"}></img>
                    <button disabled={true} style={{ margin:"10px"}} className="btn btn-primary" type="submit" onClick={() => navigate("/Bookings/" + props.id)}>
                            Bookings
                        </button>
                    <div className="card-text">
                        Address: {props.address}<br />
                        City: {props.city}<br />
                        Type: {props.type}<br />
                        <img  width= "30px"src = {bedroomPicture} alt=""/> {props.bedroom}<br />
                        <img width= "30px" src = {bathroomPicture} alt="" /> {props.bathroom}<br />
                        < img  width= "20px"src = {gardenPicture} alt=""/> {props.garden}<br />
                        Status: {props.status}<br />
                        <br></br>
                        <Status id={props.id} getProperties={props.getProperties} />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}}

PropertiesStructure.propTypes = {
    city: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    bedroom: PropTypes.string.isRequired,
    bathroom: PropTypes.string.isRequired,
    garden: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
}

export default PropertiesStructure;