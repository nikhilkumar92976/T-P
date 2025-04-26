const studentSchema = new mongoose.Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  phone: String,
  rollno: Number,
  branch: String,
  batch: String,
  photo: String,
  total_tests_appeared: {
    type: Number,
    default: 0,
  },
  average_score: {
    type: Number,
    default: 0,
  },
  last_test_date: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});