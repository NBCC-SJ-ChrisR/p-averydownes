package com.example.adownesfinal.service;
import com.example.adownesfinal.entity.PizzaSize;
import com.example.adownesfinal.repository.PizzaSizeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PizzaSizeService
{
@Autowired
private PizzaSizeRepo pizzaSizeRepo;
//GET all
public List<PizzaSize> getAll(){
    return pizzaSizeRepo.findAll();
}
//GET by ID
public PizzaSize getById(int id)
{
    return pizzaSizeRepo.findById(id).get();
}
}
