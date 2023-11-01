package com.npci.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.npci.beans.User;
import com.npci.dao.UserDao;
import com.npci.exceptions.UserNotFoundException;

import jakarta.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userdao;
	

	public void setUserdao(UserDao userdao) {
		this.userdao = userdao;
	}

	public UserServiceImpl(UserDao userdao) {
		super();
		this.userdao = userdao;
	}

	public UserServiceImpl() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	@Transactional
	public User signUp(User user) {
		return userdao.save(user);
	}

	@Override
	@Transactional
	public User login(String email, String password) throws UserNotFoundException {
		User user = userdao.getUser(email);
		if (user.getPassword().equals(password)) {
			return user;
		}
		throw new UserNotFoundException("User not found with this email " + email+" (or) Incorrect Password");
	}

	@Override
	public void selectItems() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteItems() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateItems() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void viewItems() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void checkOut() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void orderStatus() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void editProfile() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void funds() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void logout() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void raiseTicket() {
		// TODO Auto-generated method stub
		
	}

}
