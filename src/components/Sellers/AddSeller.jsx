import axios from "axios";
import { useState } from "react";
// import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Home from './Home';

function AddSeller(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function CheckSeller() {


        axios.get("http://localhost:8085/seller/get").then(response => {
            console.log(response)
            for (const seller of response.data) {
                if (seller.firstName.toLowerCase() === firstName.toLowerCase() && seller.lastName.toLowerCase() === lastName.toLowerCase()) {
                         alert("Seller already exists")
                         return;
                }
            }

axios.post("http://localhost:8085/seller/create", { firstName, lastName })
            .then(response => {
                console.log(response.data);
                setFirstName("");
                setLastName("");
                props.getSellers();
            })
            .catch(err => console.error(err))

        })
    }

    return (
    
    <form onSubmit={e => {
        e.preventDefault();
        CheckSeller();
        
    }}>
        <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#e3f2fd", width: "80%" }}>
            <label htmlFor="firstName">First Name</label>
            <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                id="firstName"
                firstname="firstname"
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
            />
            <br /><label htmlFor="lastName">Last Name</label>
            <br /><input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
                id="lastName"
                lastname="lastname"
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
            />
            <div className="mt-2">
                <button className="btn btn-primary" type="submit">Submit</button>
            </div>
        </div>
    </form>
    );
}

export default AddSeller;