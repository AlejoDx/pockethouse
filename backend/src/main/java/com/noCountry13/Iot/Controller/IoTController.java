package com.noCountry13.Iot.Controller;

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

    @GetMapping("sensorByTopicByYear/{topic}")
    public ResponseEntity<?>sensorByTopicByYear(@RequestBody IotDto iotDto, @RequestParam int year){
        try {
            List<Iot> iotList = ioTService.getByTopicByYear(iotDto, year);
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
}
