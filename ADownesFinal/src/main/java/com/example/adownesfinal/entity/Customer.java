package com.example.adownesfinal.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.LinkedHashSet;
import java.util.Set;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "customer")
public class Customer
{


@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name = "customer_id", nullable = false)
private Integer id;

@Column(name = "email", nullable = false, length = 45)
@Getter
@Setter
private String email;

@Column(name = "password", nullable = false)
@Getter
@Setter
private String password;

@Column(name = "firstName", nullable = false, length = 45)
@Getter
@Setter
private String firstName;

@Column(name = "lastName", nullable = false, length = 45)
@Getter
@Setter
private String lastName;

@Column(name = "phoneNumber", nullable = false, length = 45)
@Getter
@Setter
private String phoneNumber;

@Column(name = "houseNumber")
@Getter
@Setter
private Integer houseNumber;

@Column(name = "street", length = 45)
@Getter
@Setter
private String street;

@Column(name = "province", length = 2)
@Getter
@Setter
private String province;

@Column(name = "postalCode", length = 7)
@Getter
@Setter
private String postalCode;

@OneToMany(mappedBy = "customer")
@Getter
@Setter
private Set<Order> orders = new LinkedHashSet<>();

}