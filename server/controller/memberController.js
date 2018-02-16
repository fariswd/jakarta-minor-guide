const Member = require('../model/Member')

const allMember = (req, res) => {
  Member.find()
  .then(response => {
    res.send({
      status: 'ok',
      response: response
    })
  })
  .catch(err => {
    res.status(500).send({
      status: 'err',
      msg: 'cannot get member',
      response: err
    })
  })
}

//require array
const memberPost = (req, res) => {
  Member.create(req.body)
  .then(response => {
    res.send({
      status: 'ok',
      response: response
    })
  })
  .catch(err => {
    res.status(500).send({
      msg: 'cannot post a new member',
      response: err
    })
  })
}

//require id
const memberDetails = (req, res) => {
  Member.findOne({ _id: req.params.id })
  .then(response => {
    res.send({
      status: 'ok',
      response: response
    })
  })
  .catch(err => {
    res.status(500).send({
      status: 'err',
      msg: 'cannot get member',
      response: err
    })
  })
}

const memberDelete = (req, res) => {
  Member.findByIdAndRemove(req.params.id)
  .then(response => {
    res.send({
      status: 'ok',
      response: response
    })
  })
  .catch(err => {
    res.status(500).send({
      status: 'err',
      msg: 'cannot get member',
      response: err
    })
  })
}


module.exports = {
  // memberPost,
  // allMember,
  // memberDetails,
  // memberDelete
};
