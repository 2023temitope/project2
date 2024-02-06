import AddProperty from "./AddProperty";
import 'bootstrap/dist/css/bootstrap.css';

function AddPropertiesPage() {
  return (
    <div>
    <h3 style={{ color: "#EE3BE3", marginLeft: "20px", marginTop: "5px" }}>Add Property</h3><br/>
      <AddProperty />
    </div>
  );
}

export default AddPropertiesPage;