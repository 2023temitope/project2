import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AddBooking(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const params = useParams ("");
    const buyerList = [];
     useEffect(()=>{getBuyers()},[])
    const [buyers, setBuyers] = useState([])
    const [buyerID, setBuyerID] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    
    function CheckBooking() {
        axios.get("http://localhost:8085/property/get/" + params.id)
        .then(response => {
            console.log(response)
            for (const booking of response.data.bookings) {
                if (booking.date === date && booking.time === time) {
                         alert("Booking not available")
                         return;
                }
            }
        
            axios.post("http://localhost:8085/booking/create",{date, time, buyer:{id: buyerID}, property:{id: params.id}})
                .then(response => {
                    console.log(response);
                    setDate("");
                    setTime("");
                    setBuyerID("");
                    props.getBookings();
                }).catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    }

    function getBuyers() {
        axios.get("http://localhost:8085/buyer/get")
        .then(response=>{
            setBuyers(response.data);
        })
        .catch(console.log)        
    }
    
    for (const buyer of buyers) {
        console.log("Buyers:", buyer);
        buyerList.push(
            <option onChange={(e) => setBuyerID(e.target.value)} value={buyer.id}>
                {buyer.firstName + " " + buyer.lastName}
            </option>
        )
    }
        
    return (<form onSubmit={e => {
        e.preventDefault();
        CheckBooking();
    }}>
        <div className="form-control border-3 border-primary rounded" style={{backgroundColor:"#EC97DB"}}>
            
            <label htmlFor="date">Date</label>
            <input className="form-control border-3 border-primary rounded" style={{width:"250px"}}type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <label htmlFor="time">Time</label>
            <select className="form-control border-3 border-primary rounded" style={{width:"250px"}} value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select Time</option>
                <option value="08:00:00">08:00-9:00</option>
                <option value="9:00:00">9:00-10:00</option>
                <option value="10:00:00">10:00-11:00</option>
                <option value="11:00:00">11:00-12:00</option>
                <option value="12:00:00">12:00-13:00</option>
                <option value="13:00:00">13:00-14:00</option>
                <option value="14:00:00">14:00-15:00</option>
                <option value="15:00:00">15:00-16:00</option>
                <option value="16:00:00">16:00-17:00</option>
            </select>      
            <label htmlFor="time">Buyer</label> 
            <select className="form-control border-3 border-primary rounded" style={{width:"250px"}} value={buyerID} onChange={(e) => setBuyerID(e.target.value)} required>
                <option value="">Select Buyer</option>
                {buyerList}
            </select>   
                <button style={{margin:"30px"}} className="btn btn-primary" type="submit">Submit</button>
        </div>
    </form>
    );
}

export default AddBooking;