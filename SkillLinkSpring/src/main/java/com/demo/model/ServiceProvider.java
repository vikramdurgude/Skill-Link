package com.demo.model;

public class ServiceProvider {

	private int ServiceProviderId;
	private String NameFirst;
	private String NameLast;
	private String Username;
	private String Password;
	private String PhoneNumber;
	private String Wages;
	private String Address;
	public ServiceProvider(int serviceProviderId, String nameFirst, String nameLast, String username, String password,
			String phoneNumber, String wages, String address) {
		super();
		ServiceProviderId = serviceProviderId;
		NameFirst = nameFirst;
		NameLast = nameLast;
		Username = username;
		Password = password;
		PhoneNumber = phoneNumber;
		Wages = wages;
		Address = address;
	}
	public ServiceProvider() {
		super();
	}
	public int getServiceProviderId() {
		return ServiceProviderId;
	}
	public void setServiceProviderId(int serviceProviderId) {
		ServiceProviderId = serviceProviderId;
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
	public String getWages() {
		return Wages;
	}
	public void setWages(String wages) {
		Wages = wages;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	@Override
	public String toString() {
		return "ServiceProvider [ServiceProviderId=" + ServiceProviderId + ", NameFirst=" + NameFirst + ", NameLast="
				+ NameLast + ", Username=" + Username + ", Password=" + Password + ", PhoneNumber=" + PhoneNumber
				+ ", Wages=" + Wages + ", Address=" + Address + "]";
	}
	
	
}
