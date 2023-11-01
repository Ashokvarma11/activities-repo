package com.npci.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.npci.beans.User;
import com.npci.exceptions.UserNotFoundException;
import com.npci.service.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserService userservice;
	
	
	@PostMapping(path = "/save", consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> store(@RequestBody User user) {
		User u = userservice.signUp(user);
		return ResponseEntity.status(200).body(u);
	}

	@GetMapping(path = "/login/{email}/{password}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> login(@PathVariable("email") String email,
			@PathVariable("password") String password) {
		try {
			return ResponseEntity.status(200).body(userservice.login(email, password));
		} catch (UserNotFoundException e) {
			Map<String, String> map = new HashMap<>();
			map.put("error", e.getMessage());
			return ResponseEntity.status(404).body(map);
		}
	}
}
