package com.npci.beans;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int product_id;
	private String name;
	private int quantity;
	private String description;
	private double amount;
	private boolean status;
	
	private String imageurl;
	private String category;
	public Product(int product_id, String name, int quantity, String description, double amount, boolean status,
			String imageurl, String category) {
		super();
		this.product_id = product_id;
		this.name = name;
		this.quantity = quantity;
		this.description = description;
		this.amount = amount;
		this.status = status;
		this.imageurl = imageurl;
		this.category = category;
	}
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public boolean isStatus() {
		return status;
	}
	public void setStatus(boolean status) {
		this.status = status;
	}
	public String getImageurl() {
		return imageurl;
	}
	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", name=" + name + ", quantity=" + quantity + ", description="
				+ description + ", amount=" + amount + ", status=" + status + ", imageurl=" + imageurl + ", category="
				+ category + "]";
	}
	
	
	
}
