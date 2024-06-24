import { NextResponse } from 'next/server';
import { connectDB } from '../../../config/connectDB';
import userModel from '../../../model/authModel';
import { NextApiRequest, NextApiResponse } from 'next';
export const dynamic = 'force-dynamic';
export async function GET(request: any, response: NextApiResponse) {
  try {
    let serachParams: any;
    if (request.url) {
      const url = new URL(request.url);
      serachParams = new URLSearchParams(url.searchParams);
      let Center_Stone = serachParams.get('Center_Stone');
      let Metal_Type = serachParams.get('Metal_Type');
      let Side_Stone = serachParams.get('Side_Stone');
      await connectDB();
      const data: any = await userModel.findOne({
        $and: [{ Center_Stone }, { Side_Stone }, { Metal_Type }],
      });
      return NextResponse.json({
        message: 'Users Fetched Successfully.',
        data: data,
        status: 200,
      });
    }
  } catch (error) {
    console.log('error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
