const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get( '/' , function (req, res){
    res.sendFile(path.join(rootDir , 'views' , 'Acceuil.html'));
})


module.exports = router;