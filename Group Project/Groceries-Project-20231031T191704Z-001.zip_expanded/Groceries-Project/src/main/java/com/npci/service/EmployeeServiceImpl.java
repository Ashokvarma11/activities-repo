package com.npci.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.beans.Employee;
import com.npci.dao.EmployeeDao;
import com.npci.exceptions.EmployeeNotFoundException;

import jakarta.transaction.Transactional;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDao employeedao;
	
	private List<Employee> employeesList;
	
	@Override
	@Transactional
	public Employee createEmployee(Employee employee) {
		employeesList.add(employee);
		return employeedao.save(employee);
	}

	@Override
	@Transactional
	public Employee login(String email, String password) throws EmployeeNotFoundException {
		Employee employee = employeedao.getEmployee(email);
		if (employee.getPassword().equals(password)) {
			return employee;
		}
		throw new EmployeeNotFoundException("Employee not found with this email " + email+" (or) Incorrect Password");
	}

	@Override
	public void sendRequest() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateOrderStatus() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void unlockUsers() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void editProfile() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void logout() {
		// TODO Auto-generated method stub
		
	}

}
