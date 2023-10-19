package com.noCountry13.Iot.Controller;
import com.noCountry13.Iot.Service.Implements.HouseServiceImpl;
import com.noCountry13.Iot.exceptions.MessageResponse;
import com.noCountry13.Iot.security.util.Mensaje;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.noCountry13.Iot.Model.Entity.House;
import com.noCountry13.Iot.Model.Entity.Dto.House.HouseDto;


import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/house")
public class HouseController {
    @Autowired
    private HouseServiceImpl  houseService;

    // Creando una nueva casa
    @PostMapping("/create")
    public ResponseEntity<HouseDto> newHouse(@Valid @RequestBody HouseDto newHouse) {
        HouseDto houseDto = houseService.create(newHouse);
        return new ResponseEntity<>(houseDto, HttpStatus.CREATED);

    }

    // Devolviendo
    @GetMapping("/getAll")
    public ResponseEntity<List<HouseDto>> getAllHouses() {
        return new ResponseEntity(houseService.allHouse(),HttpStatus.ACCEPTED) ;
    }


    @GetMapping("/{id}")
    public House getHouseById(@PathVariable Long id) {
//       // Optional<House> house = HouseRepository.findById(id);
//        if (house.isPresent()) {
//            return house.get();
//        } else {
//
//            throw new RuntimeException("House con ID " + id + " no se ha encontrado en la base de datos.");
//
//        }
        return  null ;
    }

    // Actualizando por ID
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateHouse( @Valid @PathVariable Long id, @RequestBody HouseDto updatedHouse) {
        HouseDto houseDto = houseService.update(updatedHouse,id);
        return new ResponseEntity<>(houseDto,HttpStatus.ACCEPTED) ;
    }




    // Eliminando por ID
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteHouse(@PathVariable Long id) {

        houseService.delete(id);
        System.out.println(id+"----- ");
        return new ResponseEntity<>( "eliminado", HttpStatus.ACCEPTED);
    }
}
