package com.odfd.spring.boot.backend.apirest.controller;

import com.odfd.spring.boot.backend.apirest.models.entity.Cliente;
import com.odfd.spring.boot.backend.apirest.models.service.ClienteService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/clientes")
public class ClienteRestController {

    private ClienteService clienteService;

    public ClienteRestController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    public List<Cliente> index(){
        return clienteService.findAll();
    }

    @GetMapping("/{id}")
    public Cliente show(@PathVariable Long id){
        return clienteService.findById(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente create(@RequestBody Cliente cliente){
        return clienteService.save(cliente);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente update(@RequestBody Cliente cliente, @PathVariable  Long id){

        Cliente clienteActual = clienteService.findById(id);

        clienteActual.setNombre(cliente.getNombre());
        clienteActual.setApellido(cliente.getApellido());
        clienteActual.setEmail(cliente.getEmail());

        return clienteService.save(clienteActual);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
        clienteService.delete(id);
    }

}
