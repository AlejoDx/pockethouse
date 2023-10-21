package com.noCountry13.Iot.Model.Entity.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class IotDto {

    @NotNull
    private Date date;

    @NotNull
    private String topic;

    @NotNull
    private String Payload;
}
