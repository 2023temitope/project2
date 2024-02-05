import BookingStructure from "./BookingStructure";

function BookingDisplay(props) {
    
    const bookingList = []

    for (const booking of props.bookingList) {
        console.log("Booking:", booking);
        bookingList.push(
            <BookingStructure
                key={booking.id }          
                date={booking.date}
                time={booking.time}
                id={booking.id}
                buyerID={booking.buyerID}
                firstname={booking.firstName}
                lastname={booking.lastName}
                getBookings={props.getBookings}
            />
        )
    }

return (
    <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#EE3BE3", width: "80%" }}>
        {bookingList} 
  
    </div>
)
}

export default BookingDisplay;