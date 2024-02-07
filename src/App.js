import Home from './components/Home';
import Buyers from './components/Buyers/Buyers';
import Sellers from './components/Sellers/Sellers';
import Properties from './components/Properties/Properties';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { useState } from 'react';
import PropTypes from "prop-types";
import property from './data/property.json';
import './App.css';
import AddPropertiesPage from './components/Properties/AddPropertiesPage';
import BookingPage from './components/Bookings/BookingPage';
import styled, { ThemeProvider } from 'styled-components';
import {lightTheme, darkTheme, GlobalStyles} from './themes.js'
import moonIcon from "../src/images/moon-svgrepo-com.svg";
import addPropertyIcon from "../src/images/house-add-svgrepo-com-svg.svg"
import personIcon from "../src/images/person-svgrepo-com (1)-svg.svg";
import propertyIcon from "../src/images/house-floor-svgrepo-com (1)-svg.svg";
import propertiesIcon from "../src/images/houses-svgrepo-com-svg.svg";
import Logo from "../src/images/OIP.jpg";

const StyledApp = styled.div`
  color: ${(props) =>props.theme.fontColor};
`;

function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme == 'light' ? setTheme("Dark") : setTheme("light");
  };

  return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <StyledApp>
       <Router>
        <nav className="navbar align-content-center " style={{display: "flex",  backgroundColor: "#BDA62D",}} >
          <div>
          <Link to="/">
            <img src={Logo} alt='Logo Icon' className="navbar-brand" width="95px" height="90px"  style={{marginLeft: "10px"}}/>
          </Link>
           <Link to='/'><button type="button" className="btn btn-dark" style={{margin:"10px"}}><img src={propertyIcon} width="20px" style={{marginBottom: "4px"}} /> Home</button></Link>
            <Link  to='/buyers'><button type="button" className="btn btn-dark" style={{margin:"10px"}}><img src={personIcon} width="20px" style={{marginBottom: "4px"}} /> Buyers</button></Link>
            <Link to='/sellers'><button type="button" className="btn btn-dark" style={{margin:"10px"}}><img src={personIcon} width="20px" style={{marginBottom: "4px"}} /> Sellers</button></Link>
            <Link to='/properties'><button type="button" className="btn btn-dark" style={{margin:"10px"}}> <img src={propertiesIcon} width="20px" style={{marginBottom: "4px"}} /> Properties</button></Link>
            <Link to='/addpropertiespage'><button type="button" className="btn btn-dark" style={{margin:"10px"}}> <img src={addPropertyIcon} width="20px" style={{marginBottom: "4px"}} /> Add Property</button></Link>
            <button onClick={() => themeToggler()} className='btn btn-light' style={{margin:"10px"}}> <img src={moonIcon} width="17px" style={{marginBottom: "4px"}}/> Change Theme</button>
            </div>
        </nav>
        <Routes> 
          <Route path='/' element={<Home />} />
          <Route path='/buyers' element={<Buyers />} />
          <Route path='/sellers' element={<Sellers />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/addpropertiespage' element={<AddPropertiesPage />} />
          <Route path='/bookings/:id' element={<BookingPage />} />
        </Routes>
      </Router>
      

    </StyledApp>
    </ThemeProvider>

  );
}

export default App;
