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

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

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
        List<Iot> getAll = iotRepository.findAll();
        List<Iot> getByMonth = new ArrayList<>();
        for (Iot iot : getAll){
            if (iot.getTopic().equals(iotDto.getTopic()) && iot.getDate().getYear() == year && iot.getDate().getMonth() == month){
                getByMonth.add(iot);
            }
        }
        return getByMonth;
    }
}
