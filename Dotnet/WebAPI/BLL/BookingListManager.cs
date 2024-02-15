namespace BLL;

using BOL;
using DAL;

public static class BookingListManager{
    public static bool AddIntoBookingList(int UserID, ServiceProvider serviceProvider){
        return DBManager.AddBookingEntry(UserID,serviceProvider);
    }
    public static List<BookingList> GetBookingListByUserId(int UserID){
        return DBManager.GetBookingListByUserId(UserID);
    }
    
   
}
