const express = require('express');
const app = express();

const PORT = process.env.port ?? 3000;
const HOST = process.env.host ?? 'https://friendly-lamp-pjj6prjjp5xhvpr-3000.app.github.dev';

app.use(express.json()); // Para poder parsear JSON

let users = [
    { username: 'usuario1', password: 'contraseña1' },
    { username: 'admin1', password: 'password1' },
];

app.post('/login', (req, res) => {
    let user = users.find(u => u.username === req.body.username && u.password === req.body.password);
    if (user) {
        res.status(200).send({ message: 'Inicio de sesión exitoso' });
    } else {
        res.status(401).send({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
});

// Para servir los archivos estáticos, se debe instruir a Express a hacerlo (express.static(...)) <- Puse los archivos en un directorio "public" para organizar los contenidos (separar el "servidor" del "cliente")...
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));