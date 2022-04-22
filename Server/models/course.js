const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  course_title: {
    type: String,
    minLength: 3,
    required: true,
  },
  course_duration: {
    type: Number,
    required: true,
  },
  lectures: {
    type: Number,
    required: true,
  },
  level: {
    type: Array,
    required: true,
  },
  discription: {
    type: String,
    required: true,
    default:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  course_content: {
    type: Array,
    required: true,
  },
  students: {
    type: Number,
    required: true,
  },
  mentor_ref_id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Mentor',
    required: true,
  },
  mentor_name: {
    type: String,
    default: 'Mohit G',
  },
  price: {
    type: Number,
    required: true,
  },
  course_Img: {
    type: String,
    default: 'https://via.placeholder.com/150',
  },
});

const Course = mongoose.model('Course', CourseSchema);

module.exports = Course;
