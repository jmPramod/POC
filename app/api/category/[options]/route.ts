import { NextResponse } from 'next/server';
import { connectDB } from '../../../../config/connectDB';
import optionModel from '../../../../model/optionModel';
import { NextApiRequest, NextApiResponse } from 'next';
import option from '../../../../options.json';
export const dynamic = 'force-dynamic';
export async function GET(request: any, response: any) {
  try {
    let serachParams: any;
    // if (request.url) {
    // const url = new URL(request.url);
    // serachParams = new URLSearchParams(url.searchParams);
    // let Center_Stone = serachParams.get('options');
    // console.log('option BD', Center_Stone);

    await connectDB();
    const data: any = await optionModel.findOne({
      key: response.params.options,
    });
    return NextResponse.json({
      message: 'Users Fetched Successfully.',
      data: data,
      status: 200,
    });
    // }
  } catch (error) {
    console.log('error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
export async function POST(request: any, response: NextApiResponse) {
  try {
    if (request.url) {
      const url = new URL(request.url);

      await connectDB();
      const data: any = await optionModel.insertMany(option);

      return NextResponse.json({
        message: 'data inserted success',
        data: data,
        status: 200,
      });
    }
  } catch (error) {
    console.log('error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
