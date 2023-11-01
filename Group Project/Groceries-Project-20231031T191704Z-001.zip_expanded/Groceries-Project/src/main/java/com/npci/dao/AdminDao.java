package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.yaml.snakeyaml.events.Event.ID;

import com.npci.beans.Admin;
public interface AdminDao extends JpaRepository<Admin, Integer> {

	@Query("select a from Admin a where a.email= ?1")
	public Admin getAdmin(String email);

}
