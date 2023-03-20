
package com.example.Watch1.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.example.Watch1.Model.Watch;
import com.example.Watch1.Service.WatchService;
import com.fasterxml.jackson.core.JsonProcessingException;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;

@RestController
@RequestMapping("/watch")
@CrossOrigin
public class WatchController {
	@Autowired
	WatchService watchService;

	@Operation(summary = "Creates a new Watch details")
	@ApiResponses(value = { @ApiResponse(responseCode = "201", description = "watch created successfully"),
			@ApiResponse(responseCode = "400", description = "Watch is invalid") })
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping(value="/create",produces = "application/json", consumes = "application/json")
	public ResponseEntity<Watch> create(final @RequestBody Watch watch) {
		Watch createWatch = watchService.create(watch);
		return ResponseEntity.ok(createWatch);
	}

	@Operation(summary = "Gets a Watch")
	@ApiResponses(value = { @ApiResponse(responseCode = "202", description = "Read the Watch successfully"),
			@ApiResponse(responseCode = "401", description = "Watch is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<Optional<Watch>> getById(final @PathVariable Long id) {
		Optional<Watch> getWatch = watchService.getById(id);
		return ResponseEntity.ok(getWatch);
	}
	@Operation(summary = "Gets a Watch through brand")
	@ApiResponses(value = { @ApiResponse(responseCode = "202", description = "Read the Watch successfully"),
			@ApiResponse(responseCode = "401", description = "Watch is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/_bybrand/{brand}", produces = "application/json")
	public ResponseEntity<Watch> getByBrand(final @PathVariable String brand) {
		Watch getWatch = watchService.getByBrand(brand);
		return ResponseEntity.ok(getWatch);
	}
	@Operation(summary = "Gets a Watch through cost")
	@ApiResponses(value = { @ApiResponse(responseCode = "202", description = "Read the Watch successfully"),
			@ApiResponse(responseCode = "401", description = "Watch is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/_bycost/{cost}", produces = "application/json")
	public ResponseEntity<Watch> getByCost(final @PathVariable int cost) {
		Watch getWatch = watchService.getByCost(cost);
		return ResponseEntity.ok(getWatch);
	}
	@Operation(summary = "Sorts a Watch through brand")
	@ApiResponses(value = { @ApiResponse(responseCode = "202", description = "Sorted the Watch successfully"),
			@ApiResponse(responseCode = "401", description = "Watch is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping(value = "/_sort/{field}", produces = "application/json")
	public ResponseEntity<Iterable<Watch>> Sort(final @PathVariable String field) {
		Iterable<Watch> sortWatch = watchService.sortWatch(field);
		return ResponseEntity.ok(sortWatch);
	}
	@Operation(summary = "Gets all Watches")
	@ApiResponses(value = { @ApiResponse(responseCode = "205", description = "Read all the Watches successfully"),
			@ApiResponse(responseCode = "404", description = "Watch is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@GetMapping("/all")
	public ResponseEntity<List<Watch>> getWatch() {
		List<Watch> getWatch = watchService.getWatch();
		return ResponseEntity.ok(getWatch);
	}

	@Operation(summary = "Updates an Watch")
	@ApiResponses(value = {@ApiResponse(responseCode = "203",description="Watch updated successfully"),
			@ApiResponse(responseCode = "402",description="Watch is not found")})
	@ResponseStatus(HttpStatus.CREATED)
	@PutMapping(value="/{id}", produces = "application/json", consumes="application/json")
	public ResponseEntity<Watch> update(final @RequestBody Watch watch)throws JsonProcessingException{
			final Watch updateWatch= watchService.update(watch);
			return ResponseEntity.ok(updateWatch);
		}

	@Operation(summary = "Deletes a Watch details")
	@ApiResponses(value = { @ApiResponse(responseCode = "204", description = "Watch deleted successfully"),
			@ApiResponse(responseCode = "403", description = "watch is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@DeleteMapping(value = "/delete")
	public ResponseEntity<Object> delete(@RequestParam Long id) {
		watchService.delete(id);
		return new ResponseEntity<>("No worries"+"\n You can always get another watch",HttpStatus.OK);
	}

	@Operation(summary = "Deletes all Watch details")
	@ApiResponses(value = { @ApiResponse(responseCode = "206", description = "All Watches deleted successfully"),
			@ApiResponse(responseCode = "405", description = "watch is not found") })
	@ResponseStatus(HttpStatus.CREATED)
	@DeleteMapping()
	public void deleteAll() {
		watchService.deleteWatchAll();
	}
}