package com.example.Watch1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Watch1.Model.User;
import com.example.Watch1.Service.SignUpService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@CrossOrigin
@RequestMapping("/User")

public class SignupController {
	@Autowired
	SignUpService signUpService;
	@Operation(summary = "Creates a new User")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "User created successfully"),
			@ApiResponse(responseCode = "400", description = "Given details are invalid") })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value="/signup",produces = "application/json")
	public ResponseEntity<User> createUser(final @RequestBody User user) {
		User createUser = signUpService.createAccount(user);
		return ResponseEntity.ok(createUser);
	}
}

	