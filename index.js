const express = require("express");
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) =>{
    res.send('hola mundo');
})

app.use(bodyParser.json());
app.ude(bodyParser.urlencoded({ extended: true }))

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});