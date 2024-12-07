package com.example.adownesfinal.controller;

import com.example.adownesfinal.entity.PizzaSize;
import com.example.adownesfinal.service.PizzaSizeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/PizzaSize")
public class PizzaSizeController
{
@Autowired
private PizzaSizeService customerService;

@GetMapping
public List<PizzaSize> getAll(){
    return customerService.getAll();
}

@GetMapping("/id")
public PizzaSize getById(@RequestParam int id)
{
    return customerService.getById(id);
}
}
