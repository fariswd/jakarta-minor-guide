const router = require('express').Router()
const listController = require('../controller/listController')

router.get('/', listController.welcomePage)

module.exports = router;
