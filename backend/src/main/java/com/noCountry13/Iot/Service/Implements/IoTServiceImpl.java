package com.noCountry13.Iot.Service.Implements;

import com.noCountry13.Iot.Model.Entity.Dto.IotDto;
import com.noCountry13.Iot.Model.Entity.Iot;
import com.noCountry13.Iot.Repository.IotRepository;
import com.noCountry13.Iot.Service.IoTService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.couchbase.CouchbaseProperties;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static java.time.temporal.TemporalAdjusters.firstDayOfYear;
import static java.time.temporal.TemporalAdjusters.lastDayOfYear;

@Service
public class IoTServiceImpl implements IoTService {
    @Autowired
    private IotRepository iotRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Iot> listAllItems() {
        return iotRepository.findAll();
    }

    @Override
    public Iot getByTopic(IotDto iotDto) {
        Iot iot = iotRepository.findByTopic(iotDto.getTopic());
        return iot;
    }

    @Override
    public List<Iot> getByTopicAndDay(IotDto iotDto, Date date){
        List<Iot> getAll = iotRepository.findAll();
        List<Iot> getByDay = new ArrayList<>();
        for(Iot iot : getAll){
            if (iot.getDate().equals(date) && iot.getTopic().equals(iotDto.getTopic())){
                getByDay.add(iot);
            }
        }
        return getByDay;
    }

    @Override
    public List<Iot> getByTopicByYear(IotDto iotDto, int year){
        List<Iot> getAll = iotRepository.findAll();
        List<Iot> getByYear = new ArrayList<>();
        for (Iot iot : getAll){
            if (iot.getDate().getYear() == year && iot.getDate().getYear() == year){
                getByYear.add(iot);
            }
        }
        return getByYear;
    }

    @Override
    public List<Iot> getByTopicByMonth(IotDto iotDto, int month, int year){
//        List<Iot> getAll = iotRepository.findAll();
//        List<Iot> getByMonth = new ArrayList<>();
//        for (Iot iot : getAll){
//            if (iot.getTopic().equals(iotDto.getTopic()) && iot.getDate().getYear() == year && iot.getDate().getMonth() == month){
//                getByMonth.add(iot);
//            }
//        }
//        return getByMonth;
        return null;
    }



    ////////////////////////  Ejemplo ////////////////////////////////////

    /**
     * Este metodo utiliza dos variables internas que son la fecha de inicio y de fin creadas a partir
     * del año que viene por parametro. Y con esas fechas y el topico realiza el query a la DB
     *
     * @param topic Es el topico a buscar
     * @param year Es el año a buscar
     * @return Una lista de mensajes iot
     */
    @Override
    public List<Iot> findAllByTopicAndDateBetween(String topic, int year) {
        LocalDateTime instance = LocalDate.now().withYear(year).atStartOfDay();
        LocalDateTime dateStart = instance.with(firstDayOfYear());
        LocalDateTime dateEnd = instance.with(lastDayOfYear());
        return iotRepository.findAllByTopicAndDateBetween(topic, dateStart, dateEnd);
    }

}
