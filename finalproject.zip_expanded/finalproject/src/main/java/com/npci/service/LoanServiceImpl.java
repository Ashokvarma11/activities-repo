package com.npci.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.npci.beans.Customer;
import com.npci.beans.Loan;
import com.npci.beans.LoanApplication;
import com.npci.dao.LoanDao;
import com.npci.exceptions.LoanApplicationNotFoundException;

@Service
public class LoanServiceImpl implements LoanService {
	
	@Autowired
	private LoanDao loandao;
	
	
	public LoanServiceImpl(LoanDao loandao) {
		super();
		this.loandao = loandao;
	}

	@Override
	public List<Loan> viewLoans() {
		return loandao.findAll();
	}

	@Override
	public LoanApplication applyLoan(Customer customer,Loan loan) {
		LoanApplication application=new LoanApplication();
		application.setCustomer_id(customer);
		application.setLoan_id(loan);
		application.setStatus("Pending");
		return loandao.save(application);
		
	}

	@Override
	public String loanStatus(int loan_id) {
		LoanApplication application=loandao.findById(loan_id);
		if(application!=null)
		{
			return application.getStatus();
		}
		throw new LoanApplicationNotFoundException("Loan Application with this"+loan_id+"Not Found");
		}

}