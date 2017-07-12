const express = require('express');

var router = express.Router();

router.get('/',function(request,response){
    response.end('Index page.');
});

module.exports = router;
