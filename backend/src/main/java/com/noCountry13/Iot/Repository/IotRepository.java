package com.noCountry13.Iot.Repository;

import com.noCountry13.Iot.Model.Entity.Iot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Repository
public interface IotRepository extends JpaRepository<Iot, Long> {

    public Iot findByTopic(String topic);


    ////////////////////////  Ejemplo ////////////////////////////////////
    // Agregue el metodo que busca por topico y por fecha entre dos fechas
    public List<Iot> findAllByTopicAndDateBetween(String topic, LocalDateTime start, LocalDateTime end);

}
