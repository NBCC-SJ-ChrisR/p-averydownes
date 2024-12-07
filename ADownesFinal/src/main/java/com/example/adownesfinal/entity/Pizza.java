package com.example.adownesfinal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.math.BigDecimal;
import java.util.LinkedHashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "pizza")
public class Pizza
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "pizza_id", nullable = false)
private Integer id;

@ManyToOne(fetch = FetchType.LAZY, optional = false)
@OnDelete(action = OnDeleteAction.CASCADE)
@JoinColumn(name = "order_id", nullable = false)
private Order order;

@ManyToOne(fetch = FetchType.LAZY, optional = false)
@JoinColumn(name = "pizzaSize_id", nullable = false)
private PizzaSize pizzaSize;

@ManyToOne(fetch = FetchType.LAZY, optional = false)
@JoinColumn(name = "pizzaCrust_id", nullable = false)
private PizzaCrust pizzaCrust;

@ColumnDefault("1")
@Column(name = "quantity", nullable = false)
private Integer quantity;

@Column(name = "priceEach", nullable = false, precision = 8, scale = 2)
private BigDecimal priceEach;

@Column(name = "totalPrice", nullable = false, precision = 8, scale = 2)
private BigDecimal totalPrice;

@OneToMany(mappedBy = "pizza")
private Set<PizzaToppingMap> pizzatoppingMaps = new LinkedHashSet<>();

}