namespace BOL;
    public class BookingList
    {
        public int UserID { get; set; }
        public int ServiceProviderID { get; set; }
        public string NameFirst { get; set; }
        public string NameLast { get; set; }
        public string PhoneNumber { get; set; }
        public string Skills { get; set; }
        public string Wages { get; set; }
        public int Ratings { get; set; }

        public BookingList()
        {
            // Default constructor
        }

        public BookingList(int userId, int serviceProviderId, string firstName, string lastName, string phoneNumber, string skills, string wages, int ratings)
        {
            UserID = userId;
            ServiceProviderID = serviceProviderId;
            NameFirst = firstName;
            NameLast = lastName;
            PhoneNumber = phoneNumber;
            Skills = skills;
            Wages = wages;
            Ratings = ratings;
        }
    }

