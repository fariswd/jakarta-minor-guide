const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  nick: String,
  birthDate: Date,
  imageUrl: String,
  imageSrc: String,
  description: String,
  signatureHero: Array,
  role: Array,
  socialMedia: Array,
  approx: String,
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member;
