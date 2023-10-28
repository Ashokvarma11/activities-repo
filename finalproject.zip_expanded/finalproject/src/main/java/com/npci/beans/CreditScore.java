package com.npci.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="credit_score")
public class CreditScore {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String pan;
	private int score;
	public CreditScore(String pan, int score) {
		super();
		this.pan = pan;
		this.score = score;
	}
	public CreditScore() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getPan() {
		return pan;
	}
	public void setPan(String pan) {
		this.pan = pan;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	
	

}