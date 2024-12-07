package com.example.adownesfinal.service;
import com.example.adownesfinal.entity.Pizza;
import com.example.adownesfinal.repository.PizzaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PizzaService
{
@Autowired
private PizzaRepo pizzaRepo;
//GET all
public List<Pizza> getAll(){
    return pizzaRepo.findAll();
}
//GET by ID
public Pizza getById(int id)
{
    return pizzaRepo.findById(id).get();
}
//POST
public Pizza create(Pizza pizza){
    return pizzaRepo.save(pizza);
}
}
