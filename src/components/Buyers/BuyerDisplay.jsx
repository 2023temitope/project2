import BuyerStructure from "./BuyerStructure";
import axios from "axios";
import { useState, useEffect } from "react";

function BuyerDisplay(props) {
    const buyerList = []

    for (const buyer of props.listBuyers) {
        console.log("Buyers:", buyer);
        buyerList.push(
            <BuyerStructure
                key={buyer.firstName + "" + buyer.lastName}
                firstname={buyer.firstName}
                lastname={buyer.lastName}
                id={buyer.id}
                getBuyers={props.getBuyers}
            />
        )
    }

return (
    <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#ec97db", width: "80%" }}>
        {buyerList}
    </div>
)
}

export default BuyerDisplay;