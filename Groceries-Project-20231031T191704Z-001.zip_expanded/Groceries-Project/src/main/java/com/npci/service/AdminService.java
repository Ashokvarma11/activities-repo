package com.npci.service;

import java.util.List;
import java.util.Optional;

import com.npci.beans.Admin;
import com.npci.beans.Employee;
import com.npci.beans.Product;
import com.npci.exceptions.AdminNotFoundException;
import com.npci.exceptions.EmployeeNotFoundException;
import com.npci.exceptions.ProductIDNotFoundException;

public interface AdminService {

	Admin createAdmin(Admin admin);
	Admin login(String email, String password) throws AdminNotFoundException;
	Product addProduct(Product product);
	List<Product> allProducts();
	Product updateProduct(int product_id, double amount, int quantity) throws ProductIDNotFoundException;
	boolean delProduct(int product_id) throws ProductIDNotFoundException;
	Employee addEmployee(Employee employee);
	List<Employee> allEmployees();
	boolean deleteEmployeeById(int employee_id) throws EmployeeNotFoundException;
	void viewRequests();
	void generateReports();
	void logout();

}
