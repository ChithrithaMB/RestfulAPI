package com.example.Watch1.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Watch1.Repository.LoginRepository;

@Service
public class LoginService {

	@Autowired
	LoginRepository loginRepository;

	public boolean userValid(String email,String password)
	{
		List<Integer> countExist = loginRepository.UserValid(email, password);
		if(countExist.get(0)==1)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}

}