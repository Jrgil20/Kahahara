//Servidor simple creado con express

const express = require('express');// se importa el modulo express
const app = express();// se crea una instancia de express

const PORT = process.env.PORT ?? 3000;// se define el puerto en el que se va a ejecutar el servidor
const HOST = process.env.HOST ?? 'special-happiness-gg7w55p97qrhp6vj-3000.app.github.dev';

app.use(express.json()); // Para poder parsear JSON

let users = [ // Datos de prueba
    { username: 'usuario1', password: 'contraseña1' },
    { username: 'admin1', password: 'password1' },
];

app.post('/login', (req, res) => { // Ruta para el inicio de sesión
    let user = users.find(u => u.username === req.body.username && u.password === req.body.password);
    if (user) {
        res.status(200).send({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).send({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
});

// Para servir los archivos estáticos, se debe instruir a Express a hacerlo (express.static(...)) <- Puse los archivos en un directorio "public" para organizar los contenidos (separar el "servidor" del "cliente")...
app.use(express.static('public'));
// se ultiliza el metodo listen para que el servidor escuche en el puerto definido
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));