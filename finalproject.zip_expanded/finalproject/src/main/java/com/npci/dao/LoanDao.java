package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.yaml.snakeyaml.events.Event.ID;

import com.npci.beans.Loan;

public interface LoanDao extends JpaRepository<Loan, ID> {

	
}