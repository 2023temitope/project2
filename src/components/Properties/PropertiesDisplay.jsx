import PropertiesStructure from "./PropertiesStructure";
import axios from "axios";
import { useState, useEffect } from "react";

function PropertiesDisplay(props) {

    const [filterAdd, setFilterAdd] = useState("")
    const [filterCity, setFilterCity] = useState("")
    const [filterType, setFilterType] = useState("")
    const [filterMinPrice, setFilterMinPrice] = useState("")
    const [filterMaxPrice, setFilterMaxPrice] = useState("")
    const [filterGarden, setFilterGarden] = useState("")
    const [filterBedroom, setFilterBedroom] = useState("")
    const [filterBathroom, setFilterBathroom] = useState("")

    function getProperties() {
        axios.get("http://localhost:8085/property/get")
            .then((response) => { setProperties(response.data) })
            .catch(console.log)
    }

    useEffect(() => { getProperties() }, [])

    const [properties, setProperties] = useState([])

    const propertyList = []

    for (const property of properties) {
        if (filterAdd && !property.address.toLowerCase().includes(filterAdd.toLowerCase())) continue;
        if (filterCity && !property.city.toLowerCase().includes(filterCity.toLowerCase())) continue;
        if (filterType !== "" && !property.type.toLowerCase().includes(filterType.toLowerCase())) continue;
        if (Number(filterMinPrice) && Number(filterMinPrice) > Number(property.price)) continue;
        if (Number(filterMaxPrice) && Number(filterMaxPrice) < Number(property.price)) continue;
        if (Number(filterBathroom) > Number(property.bathroom)) continue;
        if (Number(filterBedroom) > Number(property.bedroom)) continue;
        if (filterGarden && filterGarden !== property.garden) continue;
        console.log("Property:", property)

        propertyList.push(
            <PropertiesStructure
                key={property.id}
                address={property.address}
                type={property.type}
                city={property.city}
                price={property.price}
                bedroom={property.bedroom}
                bathroom={property.bathroom}
                garden={property.garden}
                id={property.id}
                status={property.status}
                image={property.image}
                getProperties={getProperties}
            />
        )
    }
    function handleChangeAddress(event) {
        setFilterAdd(event.target.value);
    }
    function handleChangeCity(event) {
        setFilterCity(event.target.value);
    }
    function handleChangeType(event) {
        setFilterType(event.target.value);
    }
    function handleChangeBedroom(event) {
        setFilterBedroom(event.target.value);
    }
    function handleChangeBathroom(event) {
        setFilterBathroom(event.target.value);
    }
    function handleChangeGarden(event) {
        setFilterGarden(event.target.value);
    }
    return (
        <div>
            <table class="table" className="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#EC97DB", width: "100%" }}>
                <tbody>
                    <tr>
                        <td scope="row" >Address<br /><input className="border-3 border-primary rounded" style={{width: "188px", height: "37px"}} name="property.address" type="text" value={filterAdd} onChange={handleChangeAddress} /></td>
                        <td>City<br /><input className="border-3 border-primary rounded" style={{width: "188px", height: "37px"}} name="property.city" type="text" value={filterCity} onChange={handleChangeCity} /></td>
                        <td>Type<br /><select className="form-select border-3 border-primary" style={{width: "188px", height: "37px"}} onChange={handleChangeType}>
                            <option value={""} ></option>
                            <option value={"Detached"}  >Detached</option>
                            <option value={"Semi-Detached"}  > Semi-Detached</option>
                            <option value={"Terraced"} >Terraced</option>
                            <option value={"Bungalow"} >Bungalow</option>
                            <option value={"Flat"} >Flat</option>
                        </select></td>
                        <td>Garden<br /><select className="form-select border-3 border-primary " style={{width: "188px", height: "37px"}} name="property.garden" onChange={handleChangeGarden}>
                            <option selected value={""}></option>
                            <option value={"Yes"}> Yes</option>
                            <option value={"No"}>No</option>
                        </select></td>
                    </tr>
                    <tr>
                        <td scope="row">Min Bedroom<br /><input className="border-3 border-primary rounded" style={{width: "188px", height: "37px"}} name="property.bedroom" type="text" value={filterBedroom} onChange={handleChangeBedroom} /></td>
                        <td>Min Bathroom<br /><input className="border-3 border-primary rounded" style={{width: "188px", height: "37px"}} name="property.bathroom" type="text" value={filterBathroom} onChange={handleChangeBathroom} /></td>
                        <td>Min Price<br /><input className="border-3 border-primary rounded" style={{width: "188px", height: "37px"}} type="" value={filterMinPrice || ""} onChange={e => setFilterMinPrice(e.target.value)} /></td>
                        <td>Max Price<br /><input className="border-3 border-primary rounded" style={{width: "188px", height: "37px"}} type="" value={filterMaxPrice || ""} onChange={e => setFilterMaxPrice(e.target.value)} /></td>
                    </tr><br/>
                </tbody>
            </table>
            <br/><h4 style={{ color: "#EE3BE3", marginLeft: "20px" }}>Search Results</h4><br/>
            <div className="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#EC97DB", width: "100%" }}>
            {propertyList}
            </div>
        </div >
    )
}
export default PropertiesDisplay;