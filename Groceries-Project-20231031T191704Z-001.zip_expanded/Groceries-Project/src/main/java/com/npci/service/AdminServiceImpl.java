package com.npci.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.beans.Admin;
import com.npci.beans.Employee;
import com.npci.beans.Product;
import com.npci.dao.AdminDao;
import com.npci.dao.EmployeeDao;
import com.npci.dao.ProductDao;

import com.npci.exceptions.AdminNotFoundException;
import com.npci.exceptions.EmployeeNotFoundException;
import com.npci.exceptions.ProductIDNotFoundException;

import jakarta.transaction.Transactional;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminDao admindao;
	@Autowired
	private ProductDao productdao;
	@Autowired
	private EmployeeDao employeedao;

	public AdminServiceImpl() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setAdmindao(AdminDao admindao) {
		this.admindao = admindao;
	}

	public void setEmployeedao(EmployeeDao employeedao) {
		this.employeedao = employeedao;
	}

	// creating-admin
	@Override
	@Transactional
	public Admin createAdmin(Admin admin) {
		return admindao.save(admin);//saving-admin
	}

	// admin-login
	@Override
	@Transactional
	public Admin login(String email, String password) throws AdminNotFoundException {
		//getting email from the database
		 Admin admin = admindao.getAdmin(email);
		
		//check if password is correct or not -if correct return admin-object
		if (admin.getPassword().equals(password)) {
			return admin;
		}
		//throws exception if admin-email not found
		throw new AdminNotFoundException("Admin not found with this email " + email + " (or) Incorrect Password");
	}

	// admin-adding product
	@Override
	@Transactional
	public Product addProduct(Product product) {
		return productdao.save(product);//saving product into the database
	}

	// admin-list of all products
	@Override
	@Transactional
	public List<Product> allProducts() {
		return productdao.findAll();//finding all the products in the database
	}

	// admin-updating products - price and quantity
	@Override
	public Product updateProduct(int product_id,double amount,int quantity) throws ProductIDNotFoundException {
		 Product product = productdao.findById(product_id).orElse(null);
	        if (product != null) {
	            product.setAmount(amount);
	            product.setQuantity(quantity);
	            return productdao.save(product);
	        } 
	       //throws exception if product_id not found
			throw new ProductIDNotFoundException("Product with the id " + product_id + " Not Found"); 
	}

	// admin-delete products
	@Override
	public boolean delProduct(int product_id) throws ProductIDNotFoundException {

		//delete only if id exists in the database
		if (productdao.existsById(product_id)) {
			productdao.deleteById(product_id);
			return true;
		}
		//throws exception if product_id not found
		throw new ProductIDNotFoundException("Product with the id " + product_id + " Not Found");

	}

	// admin-add employees
	@Override
	public Employee addEmployee(Employee employee) {
		return employeedao.save(employee);//saving employee
	}
	
	//admin-list of all employees
	@Override
	@Transactional
	public List<Employee> allEmployees() {
		return employeedao.findAll();//finding all the employees in the database 
	}
	

	// admin-delete employee
	public boolean deleteEmployeeById(int employee_id) throws EmployeeNotFoundException {
		//delete employee only if employee-id is present in the database
		if (employeedao.existsById(employee_id)) {
			employeedao.deleteById(employee_id);
			return true;
		}
		//throws exception if employee_id not found
		throw new EmployeeNotFoundException("Employee with the id " + employee_id + " Not Found");
	}

	// admin-view all employees
	@Override
	public void viewRequests() {
		// TODO Auto-generated method stub

	}

	@Override
	public void generateReports() {
	
	}

	// admin-logout
	@Override
	public void logout() {
		// TODO Auto-generated method stub

	}

}
