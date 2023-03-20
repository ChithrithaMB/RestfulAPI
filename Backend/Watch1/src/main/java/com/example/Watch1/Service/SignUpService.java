package com.example.Watch1.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Watch1.Model.User;
import com.example.Watch1.Repository.SignUpRepository;

@Service
public class SignUpService {
	@Autowired
	SignUpRepository signUpRepository;

	public User createAccount(User user)
	{
		return signUpRepository.save(user);
	}
}