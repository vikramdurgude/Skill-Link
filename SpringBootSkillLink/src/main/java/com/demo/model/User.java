package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int Userid;
	
	private String Namefirst;
	private String Namelast;
	
	@Column(name="Username",unique=true )

	private String Username;
	@Column(name="Password" )
	private String Password;
	private String Phonenumber;
	private String Address;
	public User() {
		super();
	}
	
	public User(String username, String password) {
		super();
		Username = username;
		Password = password;
	}

	public User( String nameFirst, String nameLast, String username, String password, String phoneNumber,
			String address) {
		super();
		Namefirst = nameFirst;
		Namefirst = nameLast;
		Username = username;
		Password = password;
		Phonenumber = phoneNumber;
		Address = address;
	}
	public int getUserId() {
		return Userid;
	}
	public void setUserId(int userId) {
		Userid = userId;
	}
	public String getNameFirst() {
		return Namefirst;
	}
	public void setNameFirst(String nameFirst) {
		Namefirst = nameFirst;
	}
	public String getNameLast() {
		return Namefirst;
	}
	public void setNameLast(String nameLast) {
		Namefirst = nameLast;
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
		return Phonenumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		Phonenumber = phoneNumber;
	}
	public String getAddress() {
		return Address;
	}
	public void setAddress(String address) {
		Address = address;
	}
	@Override
	public String toString() {
		return "User [UserId=" + Userid + ", NameFirst=" + Namefirst + ", NameLast=" + Namefirst + ", Username="
				+ Username + ", Password=" + Password + ", PhoneNumber=" + Phonenumber + ", Address=" + Address + "]";
	}
	
	
}
