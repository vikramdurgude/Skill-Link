// import axios from "axios";
// // import navigate from n
// import "../LoginForm.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// const ServiceForm = () => {
//   const userData = JSON.parse(localStorage.getItem("user"));
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     skills: "",
//     wages: "",
//     address: "",
//     date: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { skills, wages, address, date } = formData;
//       const response = await axios
//         .post(
//           "http://localhost:5020/api/User/adduserrequirement",
//           `userID=${userData.userID}&skills=${skills}&wages=${wages}&address=${address}&date=${date}`
//         )
//         .then((response) => {
//           if (response.data.message === "User requirement added successfully") {
//             navigate("/servicelist");
//           }
//         });
//       // setMessage(response.data); // Set the message received from the server
//     } catch (error) {
//       // console.error('Error:', error);
//       // setMessage('An error occurred. Please try again later.'); // Set a generic error message
//       alert("Not inserted successfully");
//     }
//   };

//   const handleLogout = () => {
//     sessionStorage.clear();
//     navigate("/");
// };
// const  handleServiceForm= () => {
//     sessionStorage.clear();
//     navigate("/serviceform");
// };
//   return (
//     <center className="login-center">
//       <h1>Skill🔗Link</h1>
//       <div className="container">
//         <h3>Fill your requirement</h3>
//         <nav id="menu" className="navbar navbar-default navbar-fixed-top">
//             <div className="container">
//                 <div className="navbar-header">
//                     <button
//                         type="button"
//                         className="navbar-toggle collapsed"
//                         data-toggle="collapse"
//                         data-target="#bs-example-navbar-collapse-1"
//                     >
//                         <span className="sr-only">Toggle navigation</span>
//                         <span className="icon-bar"></span>
//                         <span className="icon-bar"></span>
//                         <span className="icon-bar"></span>
//                     </button>
//                     <a className="navbar-brand page-scroll" href="#page-top">
//                         👤{userData.username}
//                     </a>
//                 </div>
//                 <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
//                     <ul className="nav navbar-nav navbar-right">
//                         <li>
//                             <a href="bookedservices" className="page-scroll">
//                                 Booked Services
//                             </a>
//                         </li>
//                         <li>
//                             <a href="/" onClick={handleLogout}>
//                                 LogOut
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="pid">Service</label>
//             <input
//               type="text"
//               className="form-control"
//               id="pid"
//               name="skills"
//               value={formData.skills}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pname">wages</label>
//             <input
//               type="number"
//               className="form-control"
//               id="pname"
//               name="wages"
//               value={formData.wages}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pname">Address</label>
//             <input
//               type="text"
//               className="form-control"
//               id="pname"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pname">Date</label>
//             <input
//               type="date"
//               className="form-control"
//               id="pname"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//             />
//           </div>

//           {/* <input type="submit" className="btn btn-primary" >Add Service</input> */}
//           <button type="submit">add service</button>
//         </form>
//       </div>
//     </center>
//   );
// };
// export default ServiceForm;

import axios from "axios";
// import navigate from n
import "../LoginForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ServiceForm = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    skills: "",
    wages: "",
    address: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { skills, wages, address, date } = formData;
      const response = await axios
        .post(
          "http://localhost:5020/api/User/adduserrequirement",
          `userID=${userData.userID}&skills=${skills}&wages=${wages}&address=${address}&date=${date}`
        )
        .then((response) => {
          if (response.data.message === "User requirement added successfully") {
            navigate("/servicelist");
          }
        });
      // setMessage(response.data); // Set the message received from the server
    } catch (error) {
      // console.error('Error:', error);
      // setMessage('An error occurred. Please try again later.'); // Set a generic error message
      alert("Not inserted successfully");
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  const handleServiceForm = () => {
    sessionStorage.clear();
    navigate("/serviceform");
  };
  return (
    <center className="login-center">
      <h1>Skill🔗Link</h1>
      <div className="container">
        <h3>Fill your requirement</h3>
        <nav id="menu" className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand page-scroll" href="#page-top">
                👤{userData.username}
              </a>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="bookedservices" className="page-scroll">
                    Booked Services
                  </a>
                </li>
                <li>
                  <a href="/" onClick={handleLogout}>
                    LogOut
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label
              htmlFor="pid"
              className="form-label"
              style={{ fontSize: "16px" }}
            >
              Service
            </label>
            <input
              type="text"
              className="form-control"
              id="pid"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="pname"
              className="form-label"
              style={{ fontSize: "16px" }}
            >
              wages
            </label>
            <input
              type="number"
              className="form-control"
              style={{
                backgroundColor: "#f5f5f5",
                borderColor: "#ccc",
                fontSize: "16px",
              }}
              id="pname"
              name="wages"
              value={formData.wages}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="pname"
              className="form-label"
              style={{ fontSize: "16px" }}
            >
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="pname"
              name="address"
              value={formData.address}
              onChange={handleChange}
              style={{ fontSize: "16px" }}
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="pname"
              className="form-label"
              style={{ fontSize: "16px" }}
            >
              Date
            </label>
            <input
              type="date"
              className="form-control"
              id="pname"
              name="date"
              value={formData.date}
              onChange={handleChange}
              style={{ fontSize: "16px" }}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              backgroundColor: "#007bff",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              padding: "10px 20px",
              marginTop: "20px",
              border: "none",
              transition: "background-color 0.3s ease",
            }}
          >
            add service
          </button>
        </form>
      </div>
    </center>
  );
};
export default ServiceForm;
