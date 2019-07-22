package com.odfd.spring.boot.backend.apirest.models.service;

import com.odfd.spring.boot.backend.apirest.models.entity.Cliente;
import com.odfd.spring.boot.backend.apirest.models.repository.ClienteRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class DefaultClienteService implements ClienteService {

    private ClienteRepository clienteRepository;

    public DefaultClienteService(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Cliente> findAll() {
        return (List<Cliente>) clienteRepository.findAll();
    }

    @Override
    @Transactional
    public Cliente save(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        clienteRepository.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Cliente findById(Long id) {
        return clienteRepository.findById(id).orElse(null);
    }
}
