package com.demo.model;


public class User {
	
	private int UserID;
	private String NameFirst;
	private String NameLast;
	private String Username;
	private String Password;
	private String PhoneNumber;
	private String Address;
	public User() {
		super();
	}
	public User(int userID, String nameFirst, String nameLast, String username, String password, String phoneNumber,
			String address) {
		super();
		UserID = userID;
		NameFirst = nameFirst;
		NameLast = nameLast;
		Username = username;
		Password = password;
		PhoneNumber = phoneNumber;
		Address = address;
	}
	public int getUserID() {
		return UserID;
	}
	public void setUserID(int userID) {
		UserID = userID;
	}
	public String getNameFirst() {
		return NameFirst;
	}
	public void setNameFirst(String nameFirst) {
		NameFirst = nameFirst;
	}
	public String getNameLast() {
		return NameLast;
	}
	public void setNameLast(String nameLast) {
		NameLast = nameLast;
	}
	public String getUsername() {
		return Username;
	}
	public void setUsername(String username) {
		Username = username;
	}
	public String getPassword() {
		return Password;
	}
	public void setPassword(String password) {
		Password = password;
	}
	public String getPhoneNumber() {
		return PhoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		PhoneNumber = phoneNumber;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	@Override
	public String toString() {
		return "User [UserID=" + UserID + ", NameFirst=" + NameFirst + ", NameLast=" + NameLast + ", Username="
				+ Username + ", Password=" + Password + ", PhoneNumber=" + PhoneNumber + ", Address=" + Address + "]";
	}
	
	
}
