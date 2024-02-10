package com.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "userrequirements")
public class UserRequirements {
	@Id
	private int UserId;
	private String Skills;
	private double Wages;
	private String Address;
	private String Date;
	public UserRequirements() {
		super();
	}
	public UserRequirements(String skills, double wages, String address, String date) {
		super();
		Skills = skills;
		Wages = wages;
		Address = address;
		Date = date;
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
	public String getDate() {
		return Date;
	}
	public void setDate(String date) {
		Date = date;
	}
	@Override
	public String toString() {
		return "UserRequirements [UserId=" + UserId + ", Skills=" + Skills + ", Wages=" + Wages + ", Address=" + Address
				+ ", Date=" + Date + "]";
	}
	

	
	

}
