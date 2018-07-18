import mongoose from "mongoose";
import bcrypt from "bcrypt";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  }
});

schema.pre("save", async function(next) {
  if (!this.isModified) {
    return next();
  }

  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  return next();
});

export default mongoose.model("users", schema);
