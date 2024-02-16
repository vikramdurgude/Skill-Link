using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using BOL;
using BLL;
using System.ComponentModel.DataAnnotations;
using Org.BouncyCastle.Asn1.Iana;
using DAL;
namespace WebAPI.Controllers;
[ApiController]
[Route("api/[controller]")]

    public class BookingList : Controller{

        [HttpGet("user/bookingList")]
        public IActionResult GetAllBookingList(int userID)
        {
            Console.WriteLine("Getting booking list");
            if (userID <= 0)
            {
                return BadRequest("Invalid user ID");
            }

            // Call the BLL method to get booking lists for the specified user ID
            List<BOL.BookingList> bookingLists = BookingListManager.GetBookingListByUserId(userID);

            if (bookingLists == null)
            {
                return NotFound("No booking lists found for the specified user ID");
            }
            foreach (var item in bookingLists)
            {
                Console.WriteLine(item);
            }
            
            return Ok(bookingLists);
        }

        // [HttpGet("user/bookingList")]
        // public IActionResult GetAllBookingList()
        // {
        //     List<BOL.BookingList> bookingLists = BookingListManager.GetBookingListByUserId(currentUserId.Value);
        //     return Ok(bookingLists);
        //     // Get the current user's ID from the session or claims
        //     int? currentUserId = HttpContext.Session.GetInt32("UserID");

        //     if (currentUserId.HasValue)
        //     {
        //         // Call the BLL method to get booking lists for the current user
        //         List<BOL.BookingList> bookingLists = BookingListManager.GetBookingListByUserId(currentUserId.Value);
        //         return Ok(bookingLists);
        //     }
        //     else
        //     {
        //         // Return an error response if the user is not authenticated or the ID is not found
        //         return Unauthorized(new { message = "User not authenticated or user ID not found" });
        //     }
        // }
    
    
        [HttpPost("serviceProvider/bookingList")]
        public IActionResult AddIntoBookingList([FromBody] BookingListViewModel model){

            foreach (int userId in model.UserIDs){
                    
                BookingListManager.AddIntoBookingList(userId, model.serviceProviderData);
                    
            }
            
            return Ok("Added service provider into booking list for all users.");

                // int? serviceProviderID = HttpContext.Session.GetInt32("ServiceProviderID");

            // if (serviceProviderID.HasValue)
            // {
            //     BOL.ServiceProvider serviceProvider = ServiceProviderManager.GetServiceProviderById(serviceProviderID.Value);
            //     // Get user requirements with user info
            //     List<UserRequirementWithUserData> userRequirements = DBManager.GetUserRequirementsWithUserInfo();
            //     // Extract user IDs and store them in an array
            //     int[] userIds = userRequirements.Select(u => u.UserID).ToArray();
            //     foreach (int userId in userIds)
            //     {
            //         BookingListManager.AddIntoBookingList(userId, serviceProvider);
            //     }
            //     return Ok("Added service provider into booking list for all users.");
            // }
            // else
            // {
            //     return Unauthorized(new { message = "Service provider not logged in" });
            // }
        
        
        
        }


    
    }