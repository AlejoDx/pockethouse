package com.noCountry13.Iot.Model.Entity;

import lombok.*;

import javax.persistence.*;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String client;
    private String description;
    @OneToMany(mappedBy = "house")
    //@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    //@JoinColumn(name = "enviroment_id")
    private List<Environment> environments;
    private String subtopic;

    //public House(String client, String description, List<Environment> environments, String subtopic) {

        //this.client = client;
        //this.description = description;
        //this.environments = environments;
        //this.subtopic = subtopic;
    }
}
