
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hola Express!!')
});

router.get('/productos/:codigo', (req,res) => {
    res.send(`Productos ${req.params.codigo}`);
});

//MIDDLEWARE -> VA CAPA POR CAPA EMPEZANDO CON EL GET DE ARRIBA "/"
router.use((req,res,next) => {
    res.status(404).send('Not found');
});



module.exports = router;