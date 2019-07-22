package com.odfd.spring.boot.backend.apirest.models.repository;

import org.springframework.data.repository.CrudRepository;

import com.odfd.spring.boot.backend.apirest.models.entity.Cliente;

public interface ClienteRepository extends CrudRepository<Cliente,Long> {
}
