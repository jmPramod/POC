import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '../../../../config/connectDB';
import userModel from './../../../../model/authModel';

export async function DELETE(request: any, response: any) {
  try {
    const id = response.params.id;
    await connectDB();
    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      return response.status(404).json({ message: 'User not found' });
    }

    return NextResponse.json({
      message: 'User Deleted Successfully.',
      data: user,
      status: 200,
    });
  } catch (error) {
    console.log('error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
