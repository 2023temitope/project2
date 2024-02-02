import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function AddBooking(props) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const params = useParams ("");
    const buyerList = [];
    // useEffect(()=>{getBuyers()},[])
    const [buyers, setBuyers] = useState([])
    const [buyerID, setBuyerID] = useState();
    
    function CheckBooking() {
        useEffect(()=>{getBuyers()},[])
        axios.get("http://localhost:3000/bookings?properties=" + params.id)
        .then(response => {
            console.log(response)
            for (const booking of response.data) {
                if (booking.date === date && booking.time === time) {
                         alert("Booking not available")
                         return;
                }
            }
        
            axios.post("http://localhost:8081/booking/create",{date, time, buyerID, properties: params.id})
                .then(response => {
                    console.log(response);
                    setDate("");
                    setTime("");
                    setBuyerID();
                    props.getBookings();
                }).catch(err => console.error(err))
        })

    }

    function getBuyers() {
        axios.get("http://localhost:8081/buyer/get")
        .then(response=>{
            setBuyers(response.data);
        })
        .catch(console.log)        
    }
    
    for (const buyer of buyers) {
        console.log("Buyers:", buyer);
        buyerList.push(
            <option value={buyer.id}>
                {buyer.firstName + buyer.lastName}
            </option>
        )
    }
        
    return (<form onSubmit={e => {
        e.preventDefault();
        CheckBooking();
    }}>
        <div >
            <label htmlFor="date">Date</label>
            <input className="form-control border-3 border-primary rounded" style={{width:"250px"}}type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            <label htmlFor="time">Time</label>
            <select className="form-control border-3 border-primary rounded" style={{width:"250px"}} value={time} onChange={(e) => setTime(e.target.value)} required>
                <option value="">Select Time</option>
                <option value="8AM">8:00-9:00</option>
                <option value="9AM">9:00-10:00</option>
                <option value="10AM">10:00-11:00</option>
                <option value="11AM">11:00-12:00</option>
                <option value="12PM">12:00-13:00</option>
                <option value="1PM">13:00-14:00</option>
                <option value="2PM">14:00-15:00</option>
                <option value="3PM">15:00-16:00</option>
                <option value="4PM">16:00-17:00</option>
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