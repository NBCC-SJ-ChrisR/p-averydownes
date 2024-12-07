package com.example.adownesfinal.controller;

import com.example.adownesfinal.entity.Customer;
import com.example.adownesfinal.entity.Order;
import com.example.adownesfinal.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("api/Order")
public class OrderController
{
@Autowired
private OrderService orderService;


@GetMapping
public List<Order> getAll(){
    return orderService.getAll();
}

@GetMapping("/id")
public Order getById(@RequestParam int id)
{
    return orderService.getById(id);
}

@PostMapping
public Order create(@RequestBody Order order){
    return orderService.create(order);
}

@PutMapping("/id")
public Order update(@RequestParam int id,@RequestBody Order order)
{
    return orderService.update(id, order);
}

}
