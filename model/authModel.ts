import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    title: { type: String },
    price: { type: String },
    Center_Stone: { type: String },
    Metal_Type: { type: String },
    Side_Stone: { type: String },
    description: { type: String },
    selling_price: { type: String },
    CenterStone_Image: { type: String },
    Metal_Image: { type: String },
    SideStone_Image: { type: String },
    Main_Image_Thumb: { type: Array },
    Main_Image: { type: Array },
  },
  {
    timestamps: true,
  }
);
const userModel =
  mongoose.models.Product || mongoose.model('Product', userSchema);
export default userModel;
