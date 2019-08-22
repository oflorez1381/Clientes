package com.odfd.spring.boot.backend.apirest.models.repository;

import com.odfd.spring.boot.backend.apirest.models.entity.security.Usuario;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {

    Usuario findByUsername(String username);

    @Query("select u from Usuario u where u.username=?1")
    Usuario findByUsername2(String username);
}
