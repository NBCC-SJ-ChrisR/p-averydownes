package com.example.adownesfinal.service;
import com.example.adownesfinal.entity.Customer;
import com.example.adownesfinal.repository.CustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CustomerService
{
@Autowired
private CustomerRepo customerRepo;
//GET all
public List<Customer> getAll(){
    return customerRepo.findAll();
}

//GET by ID
public Customer getById(int id)
{
    return customerRepo.findById(id).get();
}

//POST
public Customer create(Customer customer){
    return customerRepo.save(customer);
}

//PUT
public Customer update(int id,Customer customer)
{
    Customer existingCustomer = customerRepo.findById(id).orElseThrow(() -> new RuntimeException("Customer not Found"));
    existingCustomer.setEmail(customer.getEmail());
    existingCustomer.setPassword(customer.getPassword());
    existingCustomer.setFirstName(customer.getFirstName());
    existingCustomer.setLastName(customer.getLastName());
    existingCustomer.setPhoneNumber(customer.getPhoneNumber());
    existingCustomer.setHouseNumber(existingCustomer.getHouseNumber());
    existingCustomer.setStreet(customer.getStreet());
    existingCustomer.setProvince(customer.getProvince());
    existingCustomer.setPostalCode(customer.getPostalCode());
    return customerRepo.save(existingCustomer);
}
}
