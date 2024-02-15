package com.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="Bookinglist")
public class BookingList {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private int Bookingid;
	
	private int userid;
	private int sid;
	private String Namefirst;
	private String Namelast;
	private String Phonenumber;
	private String Skills;
	private String Rating;
	public BookingList() {
		super();
	}
	public BookingList(int userid, int sid, String namefirst, String namelast, String phonenumber, String skills,
			String rating) {
		super();
		this.userid = userid;
		this.sid = sid;
		Namefirst = namefirst;
		Namelast = namelast;
		Phonenumber = phonenumber;
		Skills = skills;
		Rating = rating;
	}
	public int getBookingid() {
		return Bookingid;
	}
	public void setBookingid(int bookingid) {
		Bookingid = bookingid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public String getNamefirst() {
		return Namefirst;
	}
	public void setNamefirst(String namefirst) {
		Namefirst = namefirst;
	}
	public String getNamelast() {
		return Namelast;
	}
	public void setNamelast(String namelast) {
		Namelast = namelast;
	}
	public String getPhonenumber() {
		return Phonenumber;
	}
	public void setPhonenumber(String phonenumber) {
		Phonenumber = phonenumber;
	}
	public String getSkills() {
		return Skills;
	}
	public void setSkills(String skills) {
		Skills = skills;
	}
	public String getRating() {
		return Rating;
	}
	public void setRating(String rating) {
		Rating = rating;
	}
	@Override
	public String toString() {
		return "BookingList [Bookingid=" + Bookingid + ", userid=" + userid + ", sid=" + sid + ", Namefirst="
				+ Namefirst + ", Namelast=" + Namelast + ", Phonenumber=" + Phonenumber + ", Skills=" + Skills
				+ ", Rating=" + Rating + "]";
	}

	

	
	

	
	
}
