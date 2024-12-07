package com.example.adownesfinal.repository;
import com.example.adownesfinal.entity.PizzaSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaSizeRepo extends JpaRepository<PizzaSize, Integer>
{
}