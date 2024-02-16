// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function ServiceTable() {
//   const [slist, setslist] = useState([]);
//   const serviceProviderData = JSON.parse(
//     localStorage.getItem("serviceProvider")
//   );
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("service provider====>", serviceProviderData);
//         const result = await axios.get(
//           "http://localhost:5020/api/ServiceProvider/userrequirements?skills=" +
//             serviceProviderData.skills
//         );
//         setslist([...result.data]);
//       } catch (err) {
//         console.log("error occurred", err);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   console.log("slist====>", slist);
//   const userIDs = slist.map((item) => item.userID);
//   console.log("userIDs====>", userIDs);
//   console.log("serviceProviderdata////",serviceProviderData);
//   const acceptService = async (ob) => {
//     try {
//       await axios.post(
//         "http://localhost:5020/api/BookingList/serviceProvider/bookingList",
//         {userIDs,serviceProviderData}
//       );
//       // Handle success, maybe show a confirmation message
//     } catch (err) {
//       console.log("Error accepting service:", err);
//     }
//   };

//   return (
//     <div>
//       <br></br>
//       {/* <Link to="/form">
//        <button type="button" name="btn" id="btn" className="btn btn-success"> Add new Product</button>
//     </Link> */}
//       <h3>User: {serviceProviderData.username}</h3>
//       <table className="table table-striped">
//         <thead>
//           <tr>
//             <th scope="col">First name</th>
//             <th scope="col">Last name</th>
//             <th scope="col">Phone Number</th>
//             <th scope="col">Skills</th>
//             <th scope="col">Wages</th>
//             <th scope="col">Address</th>
//             <th scope="col">Date</th>
//             <th>action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {slist.map((ob) => (
//             <tr>
//               <td>{ob.nameFirst}</td>
//               <td>{ob.nameLast}</td>
//               <td>{ob.phoneNumber}</td>
//               <td>{ob.skills}</td>
//               <td>{ob.wages}</td>
//               <td>{ob.address}</td>
//               <td>{ob.date}</td>
//               <td>
//                 {/* <button type="button" name="btn" id="delete"  className="btn btn-danger" onClick={()=>{deleteProduct(ob.pid)}}>delete</button>&nbsp;&nbsp;&nbsp; */}
//                 {/* <Link to={`/edit/${ob.pid}`} state={{pdata:ob}}> */}
//                 <button
//                   type="button"
//                   name="btn"
//                   id="edit"
//                   className="btn btn-primary"
//                   onClick={() => acceptService(ob)}
//                 >
//                   accept
//                 </button>
//                 &nbsp;&nbsp;&nbsp;
//                 {/* </Link> */}
//                 <Link to={`/view/${ob.pid}`}>
//                   <button
//                     type="button"
//                     name="btn"
//                     id="view"
//                     className="btn btn-info"
//                   >
//                     reject
//                   </button>
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }


import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ServiceTable() {
  const [slist, setslist] = useState([]);
  const serviceProviderData = JSON.parse(
    localStorage.getItem("serviceProvider")
  );
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("service provider====>", serviceProviderData);
        const result = await axios.get(
          "http://localhost:5020/api/ServiceProvider/userrequirements?skills=" +
            serviceProviderData.skills
        );
        setslist([...result.data]);
      } catch (err) {
        console.log("error occurred", err);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  console.log("slist====>", slist);
  const userIDs = slist.map((item) => item.userID);
  console.log("userIDs====>", userIDs);
  console.log("serviceProviderdata////", serviceProviderData);
  const acceptService = async () => {
    try {
      await axios.post(
        "http://localhost:5020/api/BookingList/serviceProvider/bookingList",
        { userIDs, serviceProviderData }
      );
      // Handle success, maybe show a confirmation message
    } catch (err) {
      console.log("Error accepting service:", err);
    }
  };

  return (
    <div>
      <br></br>
      <h3>User: {serviceProviderData.username}</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Skills</th>
            <th scope="col">Wages</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {slist.map((ob) => (
            <tr key={ob.userID}>
              <td>{ob.nameFirst}</td>
              <td>{ob.nameLast}</td>
              <td>{ob.phoneNumber}</td>
              <td>{ob.skills}</td>
              <td>{ob.wages}</td>
              <td>{ob.address}</td>
              <td>{ob.date}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={acceptService}
                >
                  accept
                </button>
                &nbsp;&nbsp;&nbsp;
                <Link to={`/view/${ob.pid}`}>
                  <button
                    type="button"
                    className="btn btn-info"
                  >
                    reject
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
