package com.example.adownesfinal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "employee")
public class Employee
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "employee_id", nullable = false)
private Integer id;

@Column(name = "username", nullable = false, length = 45)
private String username;

@Column(name = "password", nullable = false)
private String password;

@OneToMany(mappedBy = "empAddedBy")
private Set<PizzaTopping> pizzatoppings = new LinkedHashSet<>();

}