package com.example.adownesfinal.service;
import com.example.adownesfinal.entity.PizzaCrust;
import com.example.adownesfinal.repository.PizzaCrustRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PizzaCrustService
{
@Autowired
private PizzaCrustRepo pizzaCrustRepo;
//GET all
public List<PizzaCrust> getAll(){
    return pizzaCrustRepo.findAll();
}
//GET by ID
public PizzaCrust getById(int id)
{
    return pizzaCrustRepo.findById(id).get();
}
}
