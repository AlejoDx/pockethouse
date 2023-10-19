package com.noCountry13.Iot.Model.Entity.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class HouseDto {
    private Long id;
    @NotBlank(message = "client not by empty")
    private String client;
    @NotBlank(message = "descriptions not by empty")
    private String description;
    @NotBlank(message = "environments  not by empty")
    private String environments;
    @NotBlank(message = "subtopic not by empty")
    private String subtopic;

}
