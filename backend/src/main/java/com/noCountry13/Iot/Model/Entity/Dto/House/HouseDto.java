package com.noCountry13.Iot.Model.Entity.Dto.House;

import lombok.*;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class HouseDto {
    @NotBlank()
    private Long id;
    @NotBlank()
    private String client;
    @NotBlank()
    private String description;
    @NotBlank()
    private String environments;
    @NotBlank()
    private String subtopic;
}
