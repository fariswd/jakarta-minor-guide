const Team = require('../model/Team')

const allTeam = (req, res) => {
  Team.find()
  .then(response => {
    res.send({
      status: 'ok',
      response: response
    })
  })
  .catch(err => {
    res.status(500).send({
      status: 'err',
      msg: 'cannot get team',
      response: err
    })
  })
}

//require array
const teamPost = (req, res) => {
  Team.create(req.body)
  .then(response => {
    res.send({
      status: 'ok',
      response: response
    })
  })
  .catch(err => {
    res.status(500).send({
      msg: 'cannot post a new team',
      response: err
    })
  })
}

//require id
const teamDetails = (req, res) => {
  Team.findOne({ _id: req.params.id })
  .then(response => {
    res.send({
      status: 'ok',
      response: response
    })
  })
  .catch(err => {
    res.status(500).send({
      status: 'err',
      msg: 'cannot get team',
      response: err
    })
  })
}

const teamDelete = (req, res) => {
  Team.findByIdAndRemove(req.params.id)
  .then(response => {
    res.send({
      status: 'ok',
      response: response
    })
  })
  .catch(err => {
    res.status(500).send({
      status: 'err',
      msg: 'cannot get team',
      response: err
    })
  })
}

module.exports = {
  teamPost,
  allTeam,
  teamDetails,
  teamDelete
};
