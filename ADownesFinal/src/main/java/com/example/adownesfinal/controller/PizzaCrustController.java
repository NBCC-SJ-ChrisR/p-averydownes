package com.example.adownesfinal.controller;

import com.example.adownesfinal.entity.PizzaCrust;
import com.example.adownesfinal.service.PizzaCrustService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/PizzaCrust")
public class PizzaCrustController
{
@Autowired
private PizzaCrustService pizzaCrustService;

@GetMapping
public List<PizzaCrust> getAll(){
    return pizzaCrustService.getAll();
}

@GetMapping("/id")
public PizzaCrust getById(@RequestParam int id)
{
    return pizzaCrustService.getById(id);
}
}
