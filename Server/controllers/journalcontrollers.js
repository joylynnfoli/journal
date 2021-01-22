express = require('express');
let router = express.Router();
let validateSession = require('../middleware/validate-session')

router.get('/practice', validateSession, function(req, res){
    res.send('Hey!! This is a practice route!');
});

router.get('/about', function(req, res){
    res.send('Hey! This is the about route')
})


module.exports = router;
