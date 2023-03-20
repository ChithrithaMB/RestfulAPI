
package com.example.Watch1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Watch1.Model.User;

public interface SignUpRepository extends JpaRepository<User, Long>{

}