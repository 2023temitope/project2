import axios from "axios";
import BuyerDisplay from "./BuyerDisplay";
import BuyerStructure from "./BuyerStructure";
import RegBuyer from "./RegBuyer"
import { useEffect,useState } from "react";


function Buyers() {
    
    function getBuyers() {
        axios.get("http://localhost:8085/buyer/get")
        .then((response)=>{setBuyers(response.data)})
        .catch(console.log)        
    }
    useEffect(()=>{getBuyers()},[])
    const [buyers, setBuyers] = useState([])

    return (
        <div className= "row">
            <br /><h3 style={{ color: "#EE3BE3" }}>Buyers</h3><br/><br/>
            <br /><div className="col-6"><RegBuyer getBuyers={getBuyers}/></div>
            <div className="col-4"><BuyerDisplay listBuyers={buyers} /></div>

        </div>);
}

export default Buyers;