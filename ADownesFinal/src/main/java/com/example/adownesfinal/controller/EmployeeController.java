package com.example.adownesfinal.controller;

import com.example.adownesfinal.entity.Employee;
import com.example.adownesfinal.service.EmployeeService;
import com.example.adownesfinal.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/Employee")
public class EmployeeController
{
@Autowired
private EmployeeService employeeService;

@GetMapping
public List<Employee> getAll(){
    return employeeService.getAll();
}

@GetMapping("/id")
public Employee getById(@RequestParam int id)
{
    return employeeService.getById(id);
}
}