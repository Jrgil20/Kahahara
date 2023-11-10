const express = require('express');
const app = express();

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

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));