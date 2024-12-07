package com.example.adownesfinal.repository;
import com.example.adownesfinal.entity.PizzaTopping;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaToppingRepo extends JpaRepository<PizzaTopping, Integer>
{
}