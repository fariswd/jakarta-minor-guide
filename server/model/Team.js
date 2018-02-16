const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  logoUrl: String,
  desc: String,
  fromCountry: String,
  region: String,
  captain: String,
  leader: String,
  socialMedia: Array,
  sponsor: Array,
  totalEarning: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Team = mongoose.model('Team', teamSchema)

module.exports = Team
