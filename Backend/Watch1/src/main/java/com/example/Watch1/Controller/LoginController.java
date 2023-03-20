package com.example.Watch1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Watch1.Service.LoginService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("api/User/Login")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@Operation(summary = "Validates Email Id and Password")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "User Details are Valid"),
			@ApiResponse(responseCode = "401", description = "User Details are not valid") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/getUser", produces = "application/json")
	public boolean getUserValid(@RequestParam String email,@RequestParam String password) {
		return loginService.userValid(email, password);
	}

}
