package com.example.adownesfinal.controller;

import com.example.adownesfinal.entity.Customer;
import com.example.adownesfinal.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/Customer")
public class CustomerController
{
@Autowired
private CustomerService customerService;

@GetMapping
public List<Customer> getAll(){
    return customerService.getAll();
}

@GetMapping("/id")
public Customer getById(@RequestParam int id)
{
    return customerService.getById(id);
}
@PostMapping
public Customer create(@RequestBody Customer customer){
    return customerService.create(customer);
}

@PutMapping("/id")
public Customer update(@RequestParam int id,@RequestBody Customer customer)
{
    return customerService.update(id, customer);
}

}
