// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const BookedServices = () => {
//   const [bookedServices, setBookedServices] = useState([]);
//   const [selectedServiceProvider, setSelectedServiceProvider] = useState(null);
//   const userData = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     const fetchBookedServices = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5020/api/BookingList/user/bookingList?userID=${userData.userID}`);
//         setBookedServices(response.data);
//       } catch (error) {
//         console.error("Error fetching booked services:", error);
//       }
//     };

//     if (userData.userID) {
//       fetchBookedServices();
//     }
//   }, [userData.userID]);

//   const handleLogout = () => {
//     // Handle logout logic here, such as clearing local storage and redirecting to the login page
//     localStorage.removeItem("user");
//     // Redirect to login page
//     window.location.href = "/login"; // Update the URL to match your login page route
//   };

//   const handleSelectServiceProvider = (serviceProvider) => {
//     setSelectedServiceProvider(serviceProvider);
    
//   };
//   console.log("selected service provider" ,selectedServiceProvider);
//   return (
//     <div className="container">
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <div>
//           <img src="logo.png" alt="Logo" height="50" width="50" /> {/* Update with your logo image */}
//         </div>
//         <div className="d-flex align-items-center">
//           <span className="mr-3">Welcome,  {userData.username}</span>
//           <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//         </div>
//       </div>
//       <h2 className="text-center">Booked Services</h2>
//       <table className="table table-striped">
//         <thead>
//           <tr>
            
//             <th scope="col">NameFirst</th>
//             <th scope="col">NameLast</th>
//             <th scope="col">PhoneNumber</th>
//             <th scope="col">Skills</th>
//             <th scope="col">Wages</th>
//             <th scope="col">Ratings</th>
//             <th scope="col">Select</th>
//           </tr>
//         </thead>
//         <tbody>
//           {bookedServices.map((service) => (
//             <tr key={service.userID}>
              
//               <td>{service.nameFirst}</td>
//               <td>{service.nameLast}</td>
//               <td>{service.phoneNumber}</td>
//               <td>{service.skills}</td>
//               <td>{service.wages}</td>
//               <td>{service.ratings || "NULL"}</td>
//               <td>
//                 <button 
//                   className="btn btn-primary"
//                   onClick={() => handleSelectServiceProvider(service)}
//                   disabled={selectedServiceProvider && selectedServiceProvider.userID !== service.userID}
//                 >
//                   Confirm
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookedServices;


import React, { useState, useEffect } from "react";
import axios from "axios";

const BookedServices = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const [selectedServiceProvider, setSelectedServiceProvider] = useState(null);
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchBookedServices = async () => {
      try {
        const response = await axios.get(`http://localhost:5020/api/BookingList/user/bookingList?userID=${userData.userID}`);
        setBookedServices(response.data);
      } catch (error) {
        console.error("Error fetching booked services:", error);
      }
    };

    if (userData.userID) {
      fetchBookedServices();
    }
  }, [userData.userID]);

  const handleLogout = () => {
    // Handle logout logic here, such as clearing local storage and redirecting to the login page
    localStorage.removeItem("user");
    // Redirect to login page
    window.location.href = "/login"; // Update the URL to match your login page route
  };

  const handleSelectServiceProvider = (serviceProvider) => {
    setSelectedServiceProvider(serviceProvider);
  };
  console.log("Selected service provider" ,selectedServiceProvider);
  console.log("Booked services",bookedServices);
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <img src="logo.png" alt="Logo" height="50" width="50" />
        </div>
        <div className="d-flex align-items-center">
          <span className="mr-3">Welcome, {userData.username}</span>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
      </div>
      <h2 className="text-center">Booked Services</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">NameFirst</th>
            <th scope="col">NameLast</th>
            <th scope="col">PhoneNumber</th>
            <th scope="col">Skills</th>
            <th scope="col">Wages</th>
            <th scope="col">Ratings</th>
            <th scope="col">Select</th>
          </tr>
        </thead>
        <tbody>
          {bookedServices.map((service) => (
            <tr key={service.userID}>
              <td>{service.nameFirst}</td>
              <td>{service.nameLast}</td>
              <td>{service.phoneNumber}</td>
              <td>{service.skills}</td>
              <td>{service.wages}</td>
              <td>{service.ratings || "NULL"}</td>
              <td>
                <button
                  className={`btn ${selectedServiceProvider === service ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => handleSelectServiceProvider(service)}
                  disabled={selectedServiceProvider !== null && selectedServiceProvider !== service}
                >
                  {selectedServiceProvider === service ? "Selected" : "Select"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedServices;
