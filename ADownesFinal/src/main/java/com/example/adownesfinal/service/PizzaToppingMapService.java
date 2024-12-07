package com.example.adownesfinal.service;
import com.example.adownesfinal.entity.PizzaToppingMap;
import com.example.adownesfinal.repository.PizzaToppingMapRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PizzaToppingMapService
{
@Autowired
private PizzaToppingMapRepo pizzaToppingMapRepo;
//GET all
public List<PizzaToppingMap> getAll(){
    return pizzaToppingMapRepo.findAll();
}
//GET by ID
public PizzaToppingMap getById(int id)
{
    return pizzaToppingMapRepo.getById(id);
}
//POST
public PizzaToppingMap create(PizzaToppingMap pizzaToppingMap){
    return pizzaToppingMapRepo.save(pizzaToppingMap);
}
}
