package com.odfd.spring.boot.backend.apirest.models.service;

import com.odfd.spring.boot.backend.apirest.models.entity.security.Usuario;

public interface UsuarioService {

    Usuario findByUsername(String username);

}
