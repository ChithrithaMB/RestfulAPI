package com.example.Watch1.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="watch3")
public class Watch {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String brand;
	private int cost;
	private int instock;
	private int saled;

    
	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getBrand() {
		return brand;
	}


	public void setBrand(String brand) {
		this.brand = brand;
	}


	public int getCost() {
		return cost;
	}


	public void setCost(int cost) {
		this.cost = cost;
	}


	public int getInstock() {
		return instock;
	}


	public void setInstock(int instock) {
		this.instock = instock;
	}


	public int getSaled() {
		return saled;
	}


	public void setSaled(int saled) {
		this.saled = saled;
	}
	
	
    
	

	public Watch(Long id, String brand, int cost, int instock, int saled) {
		super();
		this.id = id;
		this.brand = brand;
		this.cost = cost;
		this.instock = instock;
		this.saled = saled;
	}

    
	
	@Override
	public String toString() {
		return "Watch [id=" + id + ", brand=" + brand + ", cost=" + cost + ", instock=" + instock + ", saled=" + saled
				+ "]";
	}


	public Watch() {

	}

}