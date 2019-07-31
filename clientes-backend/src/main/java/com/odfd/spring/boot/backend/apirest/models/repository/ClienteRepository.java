package com.odfd.spring.boot.backend.apirest.models.repository;

import com.odfd.spring.boot.backend.apirest.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface ClienteRepository extends CrudRepository<Cliente,Long> {
}
