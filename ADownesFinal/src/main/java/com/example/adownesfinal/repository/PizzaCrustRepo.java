package com.example.adownesfinal.repository;
import com.example.adownesfinal.entity.PizzaCrust;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PizzaCrustRepo extends JpaRepository<PizzaCrust, Integer>
{
}