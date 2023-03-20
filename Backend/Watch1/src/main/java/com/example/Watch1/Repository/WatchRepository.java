package com.example.Watch1.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.example.Watch1.Model.Watch;

@Repository
public interface WatchRepository extends PagingAndSortingRepository<Watch, Long>,JpaRepository<Watch, Long>{
	Watch findByCost(int watchcost);
	Watch findByBrand(String brand);
}