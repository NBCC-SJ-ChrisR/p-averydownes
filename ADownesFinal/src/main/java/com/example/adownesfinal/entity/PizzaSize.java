package com.example.adownesfinal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.math.BigDecimal;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pizzasize")
public class PizzaSize
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "pizzaSize_id", nullable = false)
private Integer id;

@Column(name = "name", nullable = false, length = 16)
private String name;

@ColumnDefault("0.00")
@Column(name = "price", nullable = false, precision = 8, scale = 2)
private BigDecimal price;

}