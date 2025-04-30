import mongoose from "mongoose";
const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      index: true,
    },
    username: {
      type: String,
      required: [true, "username is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please provide a valid email address",
      ],
      index: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
      index: true,
    },
    enrollment: {
      type: String,
      required: [true, "Enrollment number is required"],
      match: [/\d{4}[A-Z]{2}\d{6}$/, "Enrollment number is required"],
      unique: true,
      trim: true,
    },
    branch: {
      type: String,
      default: "N/A",
    },
    batch: {
      type: Date,
      default: null,
    },
    photo: {
      type: String,
      to,
    },
    total_tests_appeared: {
      type: Number,
      default: 0,
    },
    average_score: {
      type: Number,
      default: 0,
    },
    last_test_date: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

studentSchema.pre("save", async function (next){
  // if not modified 
  if(!this.isModified("password"))return next();

  // if ask to modified
  this.password = await bcrypt.hash(this.password,10)
  next()
});

studentSchema.methods.isPasswordCorrect = async (requestPassword) => {
  return await bcrypt.compare(requestPassword, this.password);
};
studentSchema.methods.generateAccessToken = (this) => {
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
};
studentSchema.methods.generateRefreshToken = (this) => {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
};

export const Student = mongoose.model("Student", studentSchema);
