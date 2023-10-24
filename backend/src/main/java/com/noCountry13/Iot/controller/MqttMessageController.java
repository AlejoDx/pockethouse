package com.noCountry13.Iot.controller;

import com.noCountry13.Iot.config.MqttClientExt;
import com.noCountry13.Iot.dto.PublishMessageDTO;
import com.noCountry13.Iot.mqtt.MqttConfig;
import com.noCountry13.Iot.mqtt.MqttService;
import lombok.AllArgsConstructor;
import org.eclipse.paho.client.mqttv3.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.concurrent.TimeUnit;

@RestController
@RequestMapping("/api/v1/mqtt")
@AllArgsConstructor
public class MqttMessageController {

    @Autowired
    MqttService mqttService;

    @Autowired
    MqttConnectOptions mqttConnectOptions;

    @Autowired
    private Environment env;

    @PostMapping("")
    public ResponseEntity<?> publish(@Valid @RequestBody PublishMessageDTO publishMessageDto) throws MqttPersistenceException, MqttException {

        if (mqttService.publish(publishMessageDto.getTopic(), publishMessageDto.getPayload(), 0,false))
            return new ResponseEntity("Message published succesfully", HttpStatus.OK);

        return new ResponseEntity("Error publishing message", HttpStatus.CONFLICT);

    }

    @PostMapping("/confread")
    public String confread(){

        try {
            MqttClientExt mqttClientExt = new MqttClientExt(env.getProperty("mqtt.hostnamec"),
                    "controller",
                    "LIVE/",
                    "LIVESEND/",
                    "jeb/casa1/parque/temperatura");
            mqttClientExt.connect(mqttConnectOptions);
            while (mqttClientExt.getResponse()==null){
                try {
                    TimeUnit.MILLISECONDS.sleep(500);
                } catch (InterruptedException e) {
                    throw new RuntimeException(e);
                }
            }
            mqttClientExt.disconnect();
            return mqttClientExt.getResponse();

        } catch (MqttException e) {
            throw new RuntimeException(e);
        }
    }
}
