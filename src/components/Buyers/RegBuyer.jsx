import { useState, useEffect } from "react";
import axios from 'axios';
import BuyerDisplay from "./BuyerDisplay";
import BuyerStructure from "./BuyerStructure";

function RegBuyer(props) {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    function CheckBuyer() {



         axios.get("http://localhost:8085/buyer/get").then(response => {
          console.log(response)
             for (const buyer of response.data) {
                if (buyer.firstName.toLowerCase() === firstName.toLowerCase() && buyer.lastName.toLowerCase() === lastName.toLowerCase()) {
                          alert("Buyer already exists")
                          return;
                 }
             }
        
            axios.post("http://localhost:8085/buyer/create",
                { firstName, lastName })
                .then(response => {
                    console.log(response);
                    setFirstName("");
                    setLastName("");
                    props.getBuyers();
                }).catch(err => console.error(err))


         })

    }


    return (

        <form onSubmit={e => {
            e.preventDefault();
            CheckBuyer();
        }}>
            <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#EC97DB", width: "80%" }}>
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
                    lastName="lastName"
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

export default RegBuyer;

