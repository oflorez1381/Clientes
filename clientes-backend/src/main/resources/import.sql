INSERT INTO clientes (nombre, apellido, email, created_at, foto) VALUES ('Frank Edward', 'Daza González', 'frank.daza2@gmail.com', '2019-01-01', '');
INSERT INTO clientes (nombre, apellido, email, created_at, foto) VALUES ('Pedro', 'Pérez', 'pedro@gmail.com', '2017-11-11', '');
INSERT INTO clientes (nombre, apellido, email, created_at, foto) VALUES ('Fernando', 'Alonso', 'fernando.alonso@gmail.com', '2007-12-11', '');
INSERT INTO clientes (nombre, apellido, email, created_at, foto) VALUES ('Vanessa', 'Porras', 'vane.porra@gmail.com', '2018-04-20', '');
INSERT INTO clientes (nombre, apellido, email, created_at, foto) VALUES ('Angie', 'Vanegas', 'agieva@gmail.com', '2007-12-09', '');

-- INSERT INTO regiones (id, nombre) VALUES (1, 'Sudamérica');
-- INSERT INTO regiones (id, nombre) VALUES (2, 'Centroamérica');
-- INSERT INTO regiones (id, nombre) VALUES (3, 'Norteamérica');
-- INSERT INTO regiones (id, nombre) VALUES (4, 'Europa');
-- INSERT INTO regiones (id, nombre) VALUES (5, 'Asia');
-- INSERT INTO regiones (id, nombre) VALUES (6, 'África');
-- INSERT INTO regiones (id, nombre) VALUES (7, 'Oceanía');
-- INSERT INTO regiones (id, nombre) VALUES (8, 'Antártica');

INSERT INTO usuarios (username,password,enabled,nombre,apellido,email) VALUES ('oflorez','$2a$10$E9o7Kj9iVxekVg9VjNgfteiVwaA6zL.S1mQWA8d6ZLl2n51jmkxG.',1,'oscar','florez','oscarflorez1381@gmail.com');
INSERT INTO usuarios (username,password,enabled,nombre,apellido,email) VALUES ('admin','$2a$10$S4pspiz1.ICXFOfCsqdj8uJ4rVA3XnLT4tuzCJ26HBXtvYMONU/pm',1,'admin','admin','admin@gmail.com');

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (1,1);
INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (2,1);
INSERT INTO usuarios_roles (usuario_id, rol_id) VALUES (2,2);
