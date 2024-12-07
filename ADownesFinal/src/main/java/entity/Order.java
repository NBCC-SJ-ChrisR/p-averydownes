package entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int order_id;
@ManyToOne
@JoinColumn(name = "customer_id")
private Cutomer customer;

}
