package com.odfd.spring.boot.backend.apirest.models.repository;

import com.odfd.spring.boot.backend.apirest.models.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente,Long> {
}
