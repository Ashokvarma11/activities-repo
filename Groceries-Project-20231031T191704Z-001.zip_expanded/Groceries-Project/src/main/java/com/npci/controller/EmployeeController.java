package com.npci.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npci.beans.Admin;
import com.npci.beans.Employee;
import com.npci.exceptions.EmployeeNotFoundException;
import com.npci.service.EmployeeService;


@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeservice;
	
	@PostMapping(path = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> add(@RequestBody Employee employee) {
		Employee emp= employeeservice.createEmployee(employee);
		return ResponseEntity.status(200).body(emp);
	}
	
	@GetMapping(path = "/login/{email}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> login(@PathVariable("email") String email,
			@PathVariable("password") String password) {
		try {
			return ResponseEntity.status(200).body(employeeservice.login(email, password));
		} catch (EmployeeNotFoundException e) {
			Map<String, String> map = new HashMap<>();
			map.put("error", e.getMessage());
			return ResponseEntity.status(404).body(map);
		}
	}

}
