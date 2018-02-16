const mongoose = require('mongoose');

const teamScheme = new mongoose.Scheme({
  name: String,
  logoUrl: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Team = mongoose.model('Team', teamScheme)

module.exports = Team
