const express = require('express');
const path = require('path');

var router = express.Router();

router.get('/',function(request,response){
    response.sendFile(path.resolve(__dirname,'../views/test.html'));
    response.end(config.root);
});

module.exports = router;
