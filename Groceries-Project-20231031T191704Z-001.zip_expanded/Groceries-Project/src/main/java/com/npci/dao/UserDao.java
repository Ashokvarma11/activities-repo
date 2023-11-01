package com.npci.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.npci.beans.User;

public interface UserDao extends JpaRepository<User, Integer> {


	@Query("select u from User u where u.email= ?1")
	public User getUser(String email);
}
