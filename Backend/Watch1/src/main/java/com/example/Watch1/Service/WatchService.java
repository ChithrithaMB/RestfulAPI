package com.example.Watch1.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.Watch1.Model.Watch;
import com.example.Watch1.Repository.WatchRepository;

@Service
public class WatchService {
	@Autowired
	WatchRepository watchRepository;
	public Watch create(Watch watch)
	{
		return watchRepository.save(watch);
	}
	public Optional<Watch> getById(@PathVariable Long id)
	{
		return watchRepository.findById(id);
	}
	public Watch getByBrand(@PathVariable String brand)
	{
		return watchRepository.findByBrand(brand);
	}
	public Watch getByCost(@PathVariable int cost)
	{
		return watchRepository.findByCost(cost);
	}
	public List<Watch> getWatch()
	{
		return watchRepository.findAll();
	}
	public Watch update(Watch watch)
	{
		return watchRepository.save(watch);

	}
	public void delete(@RequestParam Long id)
	{
		watchRepository.deleteById(id);
	}
	public void deleteWatchAll()
	{
		watchRepository.deleteAll();
	}
	public Iterable<Watch> sortWatch(String field)
	  {
		  return watchRepository.findAll(Sort.by(field));
	  }
}