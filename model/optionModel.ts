import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    key: { type: String },
    Center_Stone: { type: Array },
    Metal_Type: { type: Array },
    val: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
const userModel =
  mongoose.models.Option || mongoose.model('Option', userSchema);
export default userModel;
