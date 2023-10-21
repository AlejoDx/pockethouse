package com.noCountry13.Iot.Service.Implements;

import com.noCountry13.Iot.Model.Entity.Dto.HouseDto;
import com.noCountry13.Iot.Model.Entity.Dto.EnvironmentDto;
import com.noCountry13.Iot.Model.Entity.House;
import com.noCountry13.Iot.Model.Entity.Environment;
import com.noCountry13.Iot.Repository.HouseRepository;
import com.noCountry13.Iot.Service.IHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.ArrayList;
@Service
public class HouseServiceImpl implements IHouseService {

    @Autowired
    HouseRepository houseRepository;
    @Override
    public HouseDto create(HouseDto houseDto) {
        House house = new House();
        house.setClient(houseDto.getClient());
        house.setDescription(houseDto.getDescription());
        //house.setEnvironments(houseDto.getEnvironments());
        house.setSubtopic(houseDto.getSubtopic());
        List<Environment> environments = new ArrayList<>();
        for (EnvironmentDto environmentDto : houseDto.getEnvironments()) {
            Environment environment = new Environment();
            environment.getName(environmentDto.getName());
            environment.getName(house); // Relacion house con Enviroments
            environments.add(environment);
        }

        house.setEnvironments(environments);
        houseRepository.save(house);
        return houseDto ;
    }
    @Override
    public HouseDto update(HouseDto updateHouse, Long id) {
        Optional<House> existingHouse = houseRepository.findById(id);
        if (existingHouse.isPresent()) {
            House house = existingHouse.get();
            house.setClient(updateHouse.getClient());
            house.setDescription(updateHouse.getDescription());
            //house.setEnvironments(updateHouse.getEnvironments());
            house.setSubtopic(updateHouse.getSubtopic());

            List<Environment> updatedEnvironments = new ArrayList<>();
            for (EnvironmentDto environmentDto : updateHouse.getEnvironments()) {
                Environment environment = new Environment();
                environment.getName(environmentDto.getName());
                environment.getName(house); // Relacion house con Enviroments
                updatedEnvironments.add(environment);
            }

            house.setEnvironments(updatedEnvironments);
            houseRepository.save(house);
        }else{
            throw new RuntimeException("House not found with id: " + id);
        }
        return updateHouse;
    }




    @Override
    public void delete(Long id) {
        House house = houseRepository.findById(id).orElseThrow();
        System.out.println(house + "-----");
        houseRepository.deleteById(id);
    }






    @Override
    public List<House> allHouse() {
        return houseRepository.findAll()
                .stream()
                .collect(Collectors.toList());
    }
}
