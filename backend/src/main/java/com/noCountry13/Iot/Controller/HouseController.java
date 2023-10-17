package com.noCountry13.Iot.Controller;
import org.aspectj.apache.bcel.Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.noCountry13.Iot.Model.Entity.House;
import com.noCountry13.Iot.Model.Entity.Dto.House.HouseDto;
import com.noCountry13.Iot.Repository.HouseRepository;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/house")
public class HouseController {
    @Autowired
    private HouseRepository HouseRepository;

    // Creando una nueva casa
    @PostMapping
    public House newHouse(@RequestBody HouseDto newHouse) {
        try{

            if (newHouse.getDescription() == null || newHouse.getDescription().isEmpty()) {
                return new House();
            }
            if (newHouse.getClient() == null) {
                return new House();
            }
            if (newHouse.getEnvironments() == null || newHouse.getEnvironments().isEmpty()) {
                return new House();
            }
            if (newHouse.getSubtopic() == null || newHouse.getSubtopic().isEmpty()) {
                return new House();
            }

            return new House();
        }catch (Exception e) {
            return new House();
        }
    }

    // Devolviendo
    @GetMapping("/{id}")
    public List<House> getAllHouses() {
        return HouseRepository.findAll();
    }

    // Retorno
    @GetMapping("/{id}")
    public House getHouseById(@PathVariable Long id) {
        Optional<House> house = HouseRepository.findById(id);
        if (house.isPresent()) {
            return house.get();
        } else {

            throw new ResourceNotFoundException("House con ID " + id + " no se ha encontrado en la base de datos.");

        }
    }

    // Actualizando por ID
    @PutMapping("/{id}")
    public House updateHouse(@PathVariable Long id, @RequestBody House updatedHouse) {
        Optional<House> existingHouse = HouseRepository.findById(id);
        if (existingHouse.isPresent()) {
            House house = existingHouse.get();
            house.setClient(updatedHouse.getClient());
            house.setDescription(updatedHouse.getDescription());
            house.setEnvironments(updatedHouse.getEnvironments());
            house.setSubtopic(updatedHouse.getSubtopic());
            return HouseRepository.save(house);
        } else {
            throw new ResourceNotFoundException("House not found with id: " + id);
        }
    }

    // Eliminando por ID
    @DeleteMapping("/{id}")
    public void deleteHouse(@PathVariable Long id) {
        HouseRepository.deleteById(id);
    }
}
