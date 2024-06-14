import mongoose from 'mongoose';
export const connectDB = async () => {
  try {
    let mongoURL = process.env.MONGO_URL_CLOUD as string;
    await mongoose.connect(mongoURL);
    console.log('Connection to data base successfull');
  } catch (error) {
    console.log('Data base error : ', error);
  }
};
