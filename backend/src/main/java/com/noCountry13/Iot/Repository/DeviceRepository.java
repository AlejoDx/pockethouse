package com.noCountry13.Iot.Repository;

import com.noCountry13.Iot.Model.Entity.Device;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeviceRepository extends JpaRepository<Device, Long> {
    //Defino con Query una consulta personalizada que recupere los dispositivos que no están en ningún entorno
    @Query("SELECT d FROM Device d WHERE d NOT IN (SELECT de.devices FROM Environment de)")
    List<Device> findDevicesNotInAnyEnvironment();
}
