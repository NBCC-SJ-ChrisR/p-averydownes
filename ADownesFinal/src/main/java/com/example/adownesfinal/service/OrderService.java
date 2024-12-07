package com.example.adownesfinal.service;
import com.example.adownesfinal.entity.Order;
import com.example.adownesfinal.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class OrderService
{
@Autowired
private OrderRepo orderRepo;
//GET all
public List<Order> getAll(){
    return orderRepo.findAll();
}

//GET by ID
public Order getById(int id)
{
    return orderRepo.findById(id).get();
}

//POST
public Order create(Order order){
    return orderRepo.save(order);
}
//PUT
public Order update(int id,Order order){
    Order existingOrder = orderRepo.findById(id).orElseThrow(() -> new RuntimeException("Order not Found"));
    existingOrder.setSubTotal(order.getSubTotal());
    existingOrder.setHst(order.getHst());
    existingOrder.setOrderTotal(order.getOrderTotal());
    existingOrder.setAmountPaid(order.getAmountPaid());
    existingOrder.setOrderStatus(order.getOrderStatus());
    existingOrder.setDelivery(order.getDelivery());
    existingOrder.setDeliveryDate(order.getDeliveryDate());
    existingOrder.setOrderPlacedDate(order.getOrderPlacedDate());
    return orderRepo.save(existingOrder);

}
}
