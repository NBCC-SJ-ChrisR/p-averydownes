package com.example.adownesfinal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pizzatopping_map")
public class PizzaToppingMap
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "pizzaTopping_map_id", nullable = false)
private Integer id;

@ManyToOne(fetch = FetchType.LAZY, optional = false)
@OnDelete(action = OnDeleteAction.CASCADE)
@JoinColumn(name = "pizza_id", nullable = false)
private Pizza pizza;

@ManyToOne(fetch = FetchType.LAZY, optional = false)
@JoinColumn(name = "pizzaTopping_id", nullable = false)
private PizzaTopping pizzaTopping;

}