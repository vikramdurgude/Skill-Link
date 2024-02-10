package com.demo.model;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;
import java.text.ParseException;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "UserRequirements")
public class UserRequirements {
	@Id
	private int UserId;
	private String Skills;
	private double Wages;
	private String Address;
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd", timezone = "UTC")
	private Date DATE;
	public UserRequirements() {
		super();
	}
//	public UserRequirements(int userId, String skills, double wages, String address, Date dATE) {
//		super();
//		UserId = userId;
//		Skills = skills;
//		Wages = wages;
//		Address = address;
//		
//		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
//	        this.DATE = dateFormat.parse(dATE);
//	}
	
	 public UserRequirements(int userId, String skills, double wages, String address, String dateString) throws ParseException {
	        super();
	        UserId = userId;
	        Skills = skills;
	        Wages = wages;
	        Address = address;

	        // Convert the String to Date
	        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd"); // Adjust the format according to your date string
	        this.DATE = dateFormat.parse(dateString);
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
	
	public void setDATE(String date) {
	    Date parsedDate = new SimpleDateFormat("yyyy-MM-dd", Locale.US).setTimeZone(TimeZone.getTimeZone("UTC")).parse(date);
	    this.DATE = parsedDate;
	}
//	public void setDATE(Date dATE) {
//		DATE = dATE;
//	}
	@Override
	public String toString() {
		return "UserRequirements [UserId=" + UserId + ", Skills=" + Skills + ", Wages=" + Wages + ", Address=" + Address
				+ ", DATE=" + DATE + "]";
	}
	
	

}
