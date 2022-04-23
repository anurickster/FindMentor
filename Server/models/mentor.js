const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MentorSchema = new Schema({
  mUserid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  mCourses: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
  },
  imgUrl: {
    type: String,
    required: true,
    default: 'https://miro.medium.com/max/895/0*l0QEGkMny8Ifq5pQ.png',
  },
  mOcc: {
    type: String,
    required: true,
  },
  mExp: {
    type: Number,
  },
  mAbout: {
    type: String,
    required: true,
  },
  mSkills: {
    type: Array,
    required: true,
  },
  mWebsite: {
    type: String,
  },
  mLinkedin: {
    type: String,
  },
  mGithub: {
    type: String,
  },
});

const Mentor = mongoose.model('Mentor', MentorSchema);

module.exports = Mentor;
