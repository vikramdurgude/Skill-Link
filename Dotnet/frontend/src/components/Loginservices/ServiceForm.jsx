import axios from "axios";
// import navigate from n
import "../LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ServiceForm=()=>{
  const userData = JSON.parse(localStorage.getItem("user"));
    const navigate=useNavigate()
    const [formData, setFormData] = useState({
        skills: '',
        wages: '',
        address: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {skills,wages,address,date} = formData;
        const response = await axios.post('http://localhost:5020/api/User/adduserrequirement', 
        `userID=${userData.userID}&skills=${skills}&wages=${wages}&address=${address}&date=${date}`).then((response) => {
            if(response.data.message === "User requirement added successfully"){    
                navigate("/servicelist")
            } 
           }   ) 
        // setMessage(response.data); // Set the message received from the server
    } catch (error) {
        // console.error('Error:', error);
        // setMessage('An error occurred. Please try again later.'); // Set a generic error message
        alert("Not inserted successfully");
    }
};

    return (
        <center className="login-center">
              <h1>Skill🔗Link</h1>
        <div className="container" >
          <h3>User Requirement</h3>
        <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="pid">Service</label>
      <input type="text" className="form-control" id="pid"  name="skills" value={formData.skills} onChange={handleChange}
     
      />
    </div>
    <div className="form-group">
      <label htmlFor="pname">wages</label>
      <input type="number" className="form-control" id="pname"  name="wages" value={formData.wages} onChange={handleChange}
       
      />
    </div>
    <div className="form-group">
      <label htmlFor="pname">Address</label>
      <input type="text" className="form-control" id="pname"  name="address" value={formData.address} onChange={handleChange}
       
      />
    </div>
    <div className="form-group">
      <label htmlFor="pname">Date</label>
      <input type="date" className="form-control" id="pname"  name="date" value={formData.date} onChange={handleChange}
       
      />
    </div>
   
   {/* <input type="submit" className="btn btn-primary" >Add Service</input> */}
   <button type="submit">add service</button>
   
  
  </form>
      </div>
      </center>
    )
} 
export default ServiceForm;

