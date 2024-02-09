package com.demo.model;

import java.util.Date;

public class UserRequirements {

	private int UserId;
	private String Skills;
	private double Wages;
	private String Address;
	private Date DATE;
	public UserRequirements() {
		super();
	}
	public UserRequirements(int userId, String skills, double wages, String address, Date dATE) {
		super();
		UserId = userId;
		Skills = skills;
		Wages = wages;
		Address = address;
		DATE = dATE;
	}
	public int getUserId() {
		return UserId;
	}
	public void setUserId(int userId) {
		UserId = userId;
	}
	public String getSkills() {
		return Skills;
	}
	public void setSkills(String skills) {
		Skills = skills;
	}
	public double getWages() {
		return Wages;
	}
	public void setWages(double wages) {
		Wages = wages;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	public Date getDATE() {
		return DATE;
	}
	public void setDATE(Date dATE) {
		DATE = dATE;
	}
	@Override
	public String toString() {
		return "UserRequirements [UserId=" + UserId + ", Skills=" + Skills + ", Wages=" + Wages + ", Address=" + Address
				+ ", DATE=" + DATE + "]";
	}
	
	

}
