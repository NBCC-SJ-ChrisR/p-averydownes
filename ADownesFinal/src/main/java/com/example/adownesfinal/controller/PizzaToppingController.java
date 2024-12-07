package com.example.adownesfinal.controller;

import com.example.adownesfinal.entity.PizzaTopping;
import com.example.adownesfinal.service.PizzaToppingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/PizzaTopping")
public class PizzaToppingController
{
@Autowired
private PizzaToppingService pizzaToppingService;

@GetMapping
public List<PizzaTopping> getAll(){
    return pizzaToppingService.getAll();
}

@GetMapping("/id")
public PizzaTopping getById(@RequestParam int id)
{
    return pizzaToppingService.getById(id);
}
@PostMapping
public PizzaTopping create(@RequestBody PizzaTopping pizzaTopping){
    return pizzaToppingService.create(pizzaTopping);
}

@PutMapping("/id")
public PizzaTopping update(@RequestParam int id,@RequestBody PizzaTopping pizzaTopping)
{
    return pizzaToppingService.update(id, pizzaTopping);
}
@DeleteMapping("/id")
public void delete(@RequestParam int id){
    pizzaToppingService.delete(id);
}
}
