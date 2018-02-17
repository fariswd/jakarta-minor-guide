const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  logoUrl: String,
  description: String,
  fromCountry: String,
  coaches: String,
  region: String,
  captain: String,
  manager: String,
  socialMedia: Array,
  sponsor: Array,
  totalEarning: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team
