package com.example.adownesfinal.controller;

import com.example.adownesfinal.entity.Pizza;
import com.example.adownesfinal.service.PizzaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/Pizza")
public class PizzaController
{
@Autowired
private PizzaService pizzaService;

@GetMapping
public List<Pizza> getAll(){
    return pizzaService.getAll();
}

@GetMapping("/id")
public Pizza getById(@RequestParam int id)
{
    return pizzaService.getById(id);
}
@PostMapping
public Pizza create(@RequestBody Pizza pizza){
    return pizzaService.create(pizza);
}
}
