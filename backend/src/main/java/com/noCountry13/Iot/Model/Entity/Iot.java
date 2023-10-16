package com.noCountry13.Iot.Model.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Iot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idIoT;

    private Date date;

    private String topic;

    private String Payload;


}
