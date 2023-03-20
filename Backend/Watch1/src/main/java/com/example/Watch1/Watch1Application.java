package com.example.Watch1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication

@Configuration
@PropertySource(value = "classpath:application.properties")
public class Watch1Application {

	public static void main(String[] args) {
		SpringApplication.run(Watch1Application.class, args);
	}

}
