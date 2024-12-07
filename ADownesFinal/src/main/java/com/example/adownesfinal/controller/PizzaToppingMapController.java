package com.example.adownesfinal.controller;

import com.example.adownesfinal.entity.PizzaToppingMap;
import com.example.adownesfinal.service.PizzaToppingMapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/PizzaToppingMap")
public class PizzaToppingMapController
{
@Autowired
private PizzaToppingMapService pizzaToppingMapService;

@GetMapping
public List<PizzaToppingMap> getAll(){
    return pizzaToppingMapService.getAll();
}

@GetMapping("/id")
public PizzaToppingMap getById(@RequestParam int id)
{
    return pizzaToppingMapService.getById(id);
}
@PostMapping
public PizzaToppingMap create(@RequestBody PizzaToppingMap pizzaToppingMap){
    return pizzaToppingMapService.create(pizzaToppingMap);
}
}
