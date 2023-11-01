package com.npci.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.yaml.snakeyaml.events.Event.ID;

import com.npci.beans.Employee;

public interface EmployeeDao extends JpaRepository<Employee, Integer> {

	@Query("select e from Employee e where e.email= ?1")
	public Employee getEmployee(String email);
}
