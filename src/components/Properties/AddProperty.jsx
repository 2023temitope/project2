import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropertiesRedirect from "./RedirectProperties";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function AddProperty() {
    const [address, setAddress] = useState("");
    const [type, setType] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [garden, setGarden] = useState("");
    const [status, setStatus] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate("")

    return (<form class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }} onSubmit={e => {

        e.preventDefault()

        axios.post("http://localhost:8085/property/create", { address, type, city, price, bedroom, bathroom, garden, status, image })

            .then(response => {
                setAddress("");
                setType("");
                setCity("");
                setPrice("");
                setBedroom("");
                setBathroom("");
                setGarden("");
                setStatus("");
                setImage("");
                setStatus("");
                navigate("/properties")

            })

            .catch(err => console.error(err))

    }}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div label htmlFor="address" className="form-label">Address</div>
                    <input size="50"
                        id="address"
                        className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="col">
                    <label htmlFor="city" className="form-label">City</label>
                    <input size="50"
                        id="city"
                        className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        required
                    /></div>
                <div className="col">
                    <label htmlFor="Type" className="form-label">Type</label><br />
                    <select className="form-select border-3 border-primary" style={{ width: "250px", height: "37px" }} onChange={e => setType(e.target.value)}   >
                        <option selected value={""} onChange={e => setType(e.target.value)} ></option>
                        <option value={"Detached"} onChange={e => setType(e.target.value)} >Detached</option>
                        <option value={"Semi-Detached"} onChange={e => setType(e.target.value)} > Semi-Detached</option>
                        <option value={"Terraced"} onChange={e => setType(e.target.value)} >Terraced</option>
                        <option value={"Bungalow"} onChange={e => setType(e.target.value)} >Bungalow</option>
                        <option value={"Flat"} onChange={e => setType(e.target.value)} >Flat</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input size="50"
                        id="price"
                        className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        required/>
                </div>
                <div className="col">
                    <label htmlFor="Bedrooms" className="form-label">Bedrooms</label>
                    <select className="form-select border-3 border-primary" style={{ width: "250px", height: "37px" }} onChange={e => setBedroom(e.target.value)}   >
                        <option selected value={""} onChange={e => setBedroom(e.target.value)} ></option>
                        <option value={"1"} onChange={e => setBedroom(e.target.value)} >1</option>
                        <option value={"2"} onChange={e => setBedroom(e.target.value)} >2</option>
                        <option value={"3"} onChange={e => setBedroom(e.target.value)} >3</option>
                        <option value={"4"} onChange={e => setBedroom(e.target.value)} >4</option>
                        <option value={"5"} onChange={e => setBedroom(e.target.value)} >5</option>
                        <option value={"6"} onChange={e => setBedroom(e.target.value)} >6</option>
                        <option value={"7"} onChange={e => setBedroom(e.target.value)} >7</option>
                    </select>
                </div>

                <div className="col">
                    <label htmlFor="bathroom" className="form-label">Bathroom</label>
                    <select className="form-select border-3 border-primary" style={{ width: "250px", height: "37px" }} onChange={e => setBathroom(e.target.value)}   >
                        <option selected value={""} onChange={e => setBathroom(e.target.value)} ></option>
                        <option value={"1"} onChange={e => setBathroom(e.target.value)} >1</option>
                        <option value={"2"} onChange={e => setBathroom(e.target.value)} >2</option>
                        <option value={"3"} onChange={e => setBathroom(e.target.value)} >3</option>
                        <option value={"4"} onChange={e => setBathroom(e.target.value)} >4</option>
                        <option value={"5"} onChange={e => setBathroom(e.target.value)} >5</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="garden" className="form-label">Garden</label>
                    <select value={garden} className="form-select border-3 border-primary" style={{ width: "250px", height: "37px" }} onChange={e => setGarden(e.target.value)}   >

                        <option  value="" >select an option</option>
                        <option value= "Yes">Yes</option>
                        <option  value ="No" >No</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select className="form-select border-3 border-primary" style={{ width: "250px", height: "37px" }} onChange={e => setStatus(e.target.value)}   >
                        <option selected value={""} onChange={e => setStatus(e.target.value)} ></option>
                        <option style={{ color: "green" }} value={"For Sale"} onChange={e => setStatus(e.target.value)} >For Sale</option>

                    </select>
                </div>
                <div className="col">
                    <label htmlFor="image" className="form-label">Image</label><br />
                    <input size=""
                        id="image"
                        className="src border-3 border-primary rounded" style={{ width: "250px", height: "37px" }}
                        type="src"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                        required/>
                </div>
            </div>
        </div>
        <br/><div className="mt-2" >
            <button className="btn btn-primary" type="submit">Submit</button>

        </div>



    </form>);
}

export default AddProperty;