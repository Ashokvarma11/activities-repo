package com.npci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.beans.Customer;
import com.npci.dao.CustomerDao;
import com.npci.exceptions.CustomerNotFoundException;

import jakarta.transaction.Transactional;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerDao customerdao;
	
	
	public CustomerServiceImpl(CustomerDao customerdao) {
		super();
		this.customerdao = customerdao;
	}
	

	@Override
	@Transactional
	public Customer createCustomer(Customer customer) {
		return customerdao.save(customer);
	}

	@Override
	public Customer getCustomer(String email_id) {
		Customer customer = customerdao.getCustomer(email_id);
		return customer;
	}

	@Override
	public Customer login(String email_id, String password) throws CustomerNotFoundException {
		Customer customer = customerdao.getCustomer(email_id);
		if (customer.getPassword().equals(password)) {
			return customer;
		}
		throw new CustomerNotFoundException("Customer not found with an email-id " + email_id);

	}

}