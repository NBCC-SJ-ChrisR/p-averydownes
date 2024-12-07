package com.example.adownesfinal.repository;
import com.example.adownesfinal.entity.PizzaToppingMap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaToppingMapRepo extends JpaRepository<PizzaToppingMap, Integer>
{
}