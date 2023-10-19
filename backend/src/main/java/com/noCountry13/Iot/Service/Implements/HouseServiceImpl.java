package com.noCountry13.Iot.Service.Implements;

import com.noCountry13.Iot.Model.Entity.Dto.House.HouseDto;
import com.noCountry13.Iot.Model.Entity.House;
import com.noCountry13.Iot.Repository.HouseRepository;
import com.noCountry13.Iot.Service.IHouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class HouseServiceImpl implements IHouseService {

    @Autowired
    HouseRepository houseRepository;
    @Override
    public HouseDto create(HouseDto houseDto) {
        House house = new House();
        house.setClient(houseDto.getClient());
        house.setDescription(houseDto.getDescription());
        house.setEnvironments(houseDto.getEnvironments());
        house.setSubtopic(houseDto.getSubtopic());
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
            house.setEnvironments(updateHouse.getEnvironments());
            house.setSubtopic(updateHouse.getSubtopic());
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
