package com.noCountry13.Iot.Service;

import com.noCountry13.Iot.Model.Entity.Dto.IotDto;
import com.noCountry13.Iot.Model.Entity.Iot;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Date;
import java.util.List;
import java.util.Optional;


public interface IoTService {

   // public Page<Iot> listAllItems(Pageable pageable);


    public List<Iot> listAllItems();

    Iot getByTopic(IotDto iotDto);

    public List<Iot> getByTopicAndDay(IotDto iotDto, Date date);

    public List<Iot> getByTopicByYear(IotDto iotDto, int year);

    public List<Iot> getByTopicByMonth(IotDto iotDto, int month, int year);


    ////////////////////////  Ejemplo ////////////////////////////////////
    // El metodo que se corresponde con el del repositorio
    public List<Iot> findAllByTopicAndDateBetween(String topic, int year);
}