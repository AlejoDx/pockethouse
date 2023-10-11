package com.noCountry13.Iot.mqtt;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class MqttStart implements CommandLineRunner {

	@Autowired
	MqttService mqttService;

	@Override
	public void run(String... args) throws Exception {

		final String topic = "#";


		mqttService.subscribe(topic);

	}
}

