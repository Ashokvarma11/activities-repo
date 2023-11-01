package com.npci.service;

import com.npci.beans.Employee;
import com.npci.exceptions.EmployeeNotFoundException;

public interface EmployeeService {
void sendRequest();
void updateOrderStatus();
void unlockUsers();
void editProfile();
void logout();
Employee login(String email, String password) throws EmployeeNotFoundException;
Employee createEmployee(Employee employee);
	
}
