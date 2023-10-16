package com.noCountry13.Iot.mqtt;

import org.eclipse.paho.client.mqttv3.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MqttConfig {

    @Bean
    @ConfigurationProperties(prefix = "mqtt")
    public MqttConnectOptions mqttConnectOptions() {
        return new MqttConnectOptions();
    }

    @Bean
    public IMqttClient mqttClient(@Value("${mqtt.clientId}") String clientId,
                                  @Value("${mqtt.hostname}") String hostname, @Value("${mqtt.port}") int port) throws MqttException {

        IMqttClient mqttClient = new MqttClient("tcp://" + hostname + ":" + port, clientId);
        mqttClient.setCallback(new MqttCallbackExtended() {
            @Override
            public void connectComplete(boolean b, String s) {
                try {
                    // TODO: Define main topic to nc_iot
                    mqttClient.subscribe("#",0);
                } catch (MqttException e) {
                    System.out.println("Error subscribing to mqtt broker:" + e.getMessage());;
                }
            }

            @Override
            public void connectionLost(Throwable throwable) {
                System.out.println("Mqtt conection lost:" + throwable);
            }

            @Override
            public void messageArrived(String s, MqttMessage mqttMessage) throws Exception {
                // Uncomment to show input messages
                // System.out.printf("[%s] %s%n", s, new String(mqttMessage.getPayload()));

                /* TODO:
                   Persist messages that has other topic than:
                   NOSTORE/
                   CONFIG/
                   CONFIGREAD/
                   ACTION/
                */
                // Local approximation: iotRepository.save(new Iot(null, new String(mqttMessage.getPayload(), StandardCharsets.UTF_8)));
            }

            @Override
            public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {

            }
        });
        mqttClient.connect(mqttConnectOptions());
        return mqttClient;
    }
}
