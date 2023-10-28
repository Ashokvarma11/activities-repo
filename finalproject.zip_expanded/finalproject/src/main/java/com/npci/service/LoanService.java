package com.npci.service;

import java.util.List;

import com.npci.beans.Customer;
import com.npci.beans.Loan;
import com.npci.beans.LoanApplication;

public interface LoanService {

	List<Loan> viewLoans();
	LoanApplication applyLoan(Customer customer, Loan loan);
	String loanStatus(int loan_id);
	
	
	
}