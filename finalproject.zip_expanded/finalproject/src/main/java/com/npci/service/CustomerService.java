package com.npci.service;

import com.npci.beans.Customer;
import com.npci.exceptions.CustomerNotFoundException;

public interface CustomerService {

	public Customer getCustomer(String email_id);
	public Customer login(String email_id, String password) throws CustomerNotFoundException;
	public Customer createCustomer(Customer customer);
	
}