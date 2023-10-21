package com.noCountry13.Iot.Model.Entity.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.noCountry13.Iot.Model.Entity.Environment;
import javax.validation.constraints.NotBlank;
import java.util.List;

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
    private List<Environment> environments;
    @NotBlank(message = "subtopic not by empty")
    private String subtopic;

    //public HouseDto(String client, String description, List<Environment> environment, String subtopic) {
        //this.client = client;
        //this.description = description;
        //this.environments.add(environment);
        //this.subtopic = subtopic;
    }
}
