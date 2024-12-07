package com.example.adownesfinal.service;
import com.example.adownesfinal.entity.Employee;
import com.example.adownesfinal.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService
{
@Autowired
private EmployeeRepo employeeRepo;
//GET all
public List<Employee> getAll(){
    return employeeRepo.findAll();
}

//GET by ID
public Employee getById(int id)
{
    return employeeRepo.findById(id).get();
}
}
