package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.yaml.snakeyaml.events.Event.ID;

import com.npci.beans.Customer;

public interface CustomerDao extends JpaRepository<Customer, ID> {

	@Query("select c from Customer c where c.email_id = ?1")
	public Customer getCustomer(String emailId);
}