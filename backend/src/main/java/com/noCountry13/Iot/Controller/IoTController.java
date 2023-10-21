package com.noCountry13.Iot.controller;

import com.noCountry13.Iot.Model.Entity.Dto.IotDto;
import com.noCountry13.Iot.Model.Entity.Iot;
import com.noCountry13.Iot.Service.IoTService;
import com.noCountry13.Iot.security.util.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/v1/iot")
public class IoTController {

    @Autowired
    private IoTService ioTService;

    @GetMapping("/listAll")
    public List<Iot> listAllItems() {
        return ioTService.listAllItems();
    }

    @GetMapping("/sensorByTopic/{topic}")
    public ResponseEntity<?> sensorByTopic(@RequestBody IotDto iotDto){
        try {
            Iot sensorByTopic = ioTService.getByTopic(iotDto);
            if (sensorByTopic != null){
                return new ResponseEntity<>(sensorByTopic, HttpStatus.OK);
            } else{
                return new ResponseEntity<>(new Mensaje("Sensor no encontrado"), HttpStatus.NOT_FOUND);
            }
        } catch (Exception e){
            return new ResponseEntity<>(new Mensaje("Error al obtener el sensor: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("sensorByTopicByDay/{topic}")
    public ResponseEntity<?>sensorByTopicByDay(@RequestBody IotDto iotDto, @RequestParam Date date){
        try {
            List<Iot> iotList = ioTService.getByTopicAndDay(iotDto, date);
            if (iotList != null){
                return new ResponseEntity<>(iotList, HttpStatus.OK);
            } else{
                return new ResponseEntity<>(new Mensaje("Sensor no encontrado"), HttpStatus.NOT_FOUND);
            }
        } catch (Exception e){
            return new ResponseEntity<>(new Mensaje("Error al obtener el sensor: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("sensorByTopicByMonth/{topic}")
    public ResponseEntity<?>sensorByTopicByMonth(@RequestBody IotDto iotDto, @RequestParam int month, @RequestParam int year){
        try {
            List<Iot> iotList = ioTService.getByTopicByMonth(iotDto, month, year);
            if (iotList != null){
                return new ResponseEntity<>(iotList, HttpStatus.OK);
            } else{
                return new ResponseEntity<>(new Mensaje("Sensor no encontrado"), HttpStatus.NOT_FOUND);
            }
        } catch (Exception e){
            return new ResponseEntity<>(new Mensaje("Error al obtener el sensor: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    ////////////////////////  Ejemplo ////////////////////////////////////
    /*
        Con respecto a los datos, me parece que lo mejor seria traerlos por parametro.

    */

    /**
     *
     * Controlador que devuelve una lista de mensajes de la tabla Iot filtrado por topico y año
     *
     * @param topic Es el topico que se va a usar para la busqueda
     * @param year Es el año que se va a usar para la busqueda
     * @return ResponseEntity:
     *         OK en caso de encontrar la lista
     *         NOT_FOUND en caso de que la busqueda no de resultados
     *         INTERNAL_SERVER_ERROR en caso de error de coneccion con la DB
     */

    @GetMapping("/sensorByTopicByYear")
    public ResponseEntity<?>sensorByTopicByYear(@RequestParam String topic, @RequestParam int year){
        try {
            List<Iot> response = ioTService.findAllByTopicAndDateBetween(topic, year);
            if (response.isEmpty()) return new ResponseEntity<>(new Mensaje("No hay datos"), HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(new Mensaje("Error al obtener el sensor: " + e.getMessage()),
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
