package com.odfd.spring.boot.backend.apirest.models.service;

import com.odfd.spring.boot.backend.apirest.models.entity.Cliente;

import java.util.List;

public interface ClienteService {

    List<Cliente> findAll();

    Cliente save(Cliente cliente);

    void delete(Long id);

    Cliente findById(Long id);

}
