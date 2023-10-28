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

import com.npci.beans.Customer;
import com.npci.beans.Loan;
import com.npci.exceptions.LoanApplicationNotFoundException;
import com.npci.service.LoanService;

@RequestMapping("/api/loans")
@RestController
public class LoanController {
	


	@Autowired
	private LoanService loanservice;
//
//	@GetMapping(path = "/allloans", consumes = MediaType.APPLICATION_JSON_VALUE)
//	public ResponseEntity<Object> allLoans(@RequestBody Loan loan) {
//		LoanService service = loanservice.viewLoans().
//		return ResponseEntity.status(200).body(loanservice);
//	}

	@PostMapping(path = "/applyLoan", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> applyLoan(@PathVariable("customer") Customer customer,
			@PathVariable("loan") Loan loan) {
		return ResponseEntity.status(200).body(loanservice.applyLoan(customer, loan));
	}

	@GetMapping(path = "/{loan_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Object> fetch(@PathVariable("loan_id") int loan_id) {
		return ResponseEntity.status(200).body(loanservice.loanStatus(loan_id));
	}
}