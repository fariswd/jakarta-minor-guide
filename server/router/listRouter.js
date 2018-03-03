const router = require('express').Router()
const teamController = require('../controller/teamController')
const memberController = require('../controller/memberController')

router.get('/', (req, res) => {
  res.send({
    msg: 'v1'
  })
})

//CRD team
router.post('/team', teamController.teamPost)
router.get('/team', teamController.allTeam)
router.get('/team/:id', memberController.getTeam)
router.delete('/team/:id', teamController.teamDelete)

//CRD member
router.post('/member', memberController.memberPost)
router.get('/member', memberController.allMember)
router.get('/member/:id', memberController.memberDetails)
router.delete('/member/:id', memberController.memberDelete)

module.exports = router;
