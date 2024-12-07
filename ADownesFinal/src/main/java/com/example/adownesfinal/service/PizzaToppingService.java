package com.example.adownesfinal.service;
import com.example.adownesfinal.entity.PizzaTopping;
import com.example.adownesfinal.repository.PizzaToppingRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PizzaToppingService
{
@Autowired
private PizzaToppingRepo pizzaToppingRepo;
//GET all
public List<PizzaTopping> getAll(){
    return pizzaToppingRepo.findAll();
}
//GET by ID
public PizzaTopping getById(int id)
{
    return pizzaToppingRepo.getById(id);
}
//POST
public PizzaTopping create(PizzaTopping pizzaTopping){
    return pizzaToppingRepo.save(pizzaTopping);
}

//PUT
public PizzaTopping update(int id, PizzaTopping pizzaTopping)
{
    PizzaTopping existingPizzaTopping= pizzaToppingRepo.findById(id).orElseThrow(() -> new RuntimeException("PizzaTopping not Found"));
    existingPizzaTopping.setName(pizzaTopping.getName());
    existingPizzaTopping.setPrice(pizzaTopping.getPrice());
    existingPizzaTopping.setCreatedate(pizzaTopping.getCreatedate());
    existingPizzaTopping.setIsActive(pizzaTopping.getIsActive());
    return pizzaToppingRepo.save(existingPizzaTopping);

}
//DELETE
public void delete(int id){
    PizzaTopping existingPizzaTopping= pizzaToppingRepo.findById(id).orElseThrow(() -> new RuntimeException("PizzaTopping not Found"));
    pizzaToppingRepo.delete(existingPizzaTopping);
}
}
