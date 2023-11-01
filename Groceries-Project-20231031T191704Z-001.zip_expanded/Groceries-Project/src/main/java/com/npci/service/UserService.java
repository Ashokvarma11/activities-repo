package com.npci.service;

import com.npci.beans.User;
import com.npci.exceptions.UserNotFoundException;

public interface UserService {

	
	User signUp(User user);
	User login(String email,String password) throws UserNotFoundException ;
	void selectItems();
	void deleteItems();
	void updateItems();
	void viewItems();
	void checkOut();
	void orderStatus();
	void editProfile();
	void funds();
	void logout();
	void raiseTicket();
	
	
}
