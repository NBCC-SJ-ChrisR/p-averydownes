package entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Employee
{
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int employee_id;
private String username;
private String password;
}
