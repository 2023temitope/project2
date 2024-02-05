import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function Home() {
    return (

        <div><br /><br />
            <h1 style={{ textAlign: "center", color: "#EE3BE3" }}>"Kings and Queen Estate Agent"</h1>
            <div>
            <br /><br /><div className="location"></div>
            <a href="https://maps.app.goo.gl/uSq8HAktiNPYP2Co6">
                <p style={{ textAlign: "center" }} alt="Find us here!"><b>Find Us Here</b></p>
            </a>
            </div>
        </div>
    );
}
export default Home;