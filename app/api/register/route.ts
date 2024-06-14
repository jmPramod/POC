import { NextResponse } from 'next/server';
import { connectDB } from '../../../config/connectDB';
import userModel from '../../../model/authModel';
import { NextApiRequest, NextApiResponse } from 'next';

// export async function POST(request: NextRequest, response: any) {
//   try {
//     const { firstName, lastName, email, phone, password, reEnterPassword } =
//       await request.json();
//     await connectDB();
//     // const user = new userModel({
//     //   first_name: firstName,
//     //   last_name: lastName,
//     //   email,
//     //   phone,
//     //   password,
//     // });

//     // const data = await user.save();
//     // const data = await userModel.insertMany([
//     //   {
//     //     title: '14K Rose Gold Oval Cut Blue Sapphire Pendant 0.79 CTW',
//     //     Center_Stone: 'Blue Sapphire',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Translucent Blue Sapphire Pendant@14K Rose Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Translucent Blue Sapphire 0.66 Carats@Style #: CSWP211813@SKU #: 211813',
//     //     selling_price: '909.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image_Thumb: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Green Emerald Pendant 0.79 CTW',
//     //     Center_Stone: 'Emerald',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Green Emerald Pendant@14K Rose Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Green Emerald 0.66 Carats@Style #: CSWP211804@SKU #: 211804',
//     //     selling_price: '909.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_R_0_QAA_CM-1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Morganite Pendant 0.80 CTW',
//     //     Center_Stone: 'Morganite',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Mesmorising Morganite Pendant@14K Rose Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Mesmorising Morganite 0.66 Carats@Style #: CSWP211822@SKU #: 211822',
//     //     selling_price: '809.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Morganite-gemstone-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_128_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_128_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_128_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Pink Sapphire Pendant 0.79 CTW',
//     //     Center_Stone: 'Pink Sapphire',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Majestic Pink Sapphire Pendant@14K Rose Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Majestic Pink Sapphire 0.66 Carats@Style #: CSWP211795@SKU #: 211795',
//     //     selling_price: '859.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/pink-sapphaire-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Red Ruby Pendant 0.79 CTW',
//     //     Center_Stone: 'Ruby',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Lustrous Red Ruby Pendant@14K Rose Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Lustrous Red Ruby 0.66 Carats@Style #: CSWP211777@SKU #: 211777',
//     //     selling_price: '1,009.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Tanzanite Pendant 0.80 CTW',
//     //     Center_Stone: 'Tanzanite',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Adorable Tanzanite Pendant@14K Rose Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Adorable Tanzanite 0.66 Carats@Style #: CSWP211786@SKU #: 211786',
//     //     selling_price: '859.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Blue Sapphire Pendant 0.79 CTW',
//     //     Center_Stone: 'Blue Sapphire',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Translucent Blue Sapphire Pendant@14K White Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Translucent Blue Sapphire 0.66 Carats@Style #: CSWP211816@SKU #: 211816  ',
//     //     selling_price: '859.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Green Emerald Pendant 0.79 CTW',
//     //     Center_Stone: 'Emerald',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Green Emerald Pendant@14K White Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Green Emerald 0.66 Carats@Style #: CSWP211807@SKU #: 211807',
//     //     selling_price: '909.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Green Emerald Pendant 0.79 CTW',
//     //     Center_Stone: 'Morganite',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description: '',
//     //     selling_price: '',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Green Emerald Pendant 0.79 CTW',
//     //     Center_Stone: 'Pink Sapphire',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Majestic Pink Sapphire Pendant@14K White Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Majestic Pink Sapphire 0.66 Carats@Style #: CSWP211798@SKU #: 211798',
//     //     selling_price: '859.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Red Ruby Pendant 0.79 CTW',
//     //     Center_Stone: 'Ruby',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Lustrous Red Ruby Pendant@14K White Gold@Center Oval Shaped Lustrous Red Ruby 0.66 Carats@Style #: CSWP211780@SKU #: 211780',
//     //     selling_price: '1,009.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Tanzanite Pendant 0.80 CTW',
//     //     Center_Stone: 'Tanzanite',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Adorable Tanzanite Pendant@14K White Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Adorable Tanzanite 0.66 Carats@Style #: CSWP211789@SKU #: 211789',
//     //     selling_price: '859.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Blue Sapphire Pendant 0.79 CTW',
//     //     Center_Stone: 'Blue Sapphire',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Translucent Blue Sapphire Pendant@14K Yellow Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Translucent Blue Sapphire 0.66 Carats@Style #: CSWP211819@SKU #: 211819',
//     //     selling_price: '909.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Green Emerald Pendant 0.79 CTW',
//     //     Center_Stone: 'Emerald',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Green Emerald Pendant@14K Yellow Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Green Emerald 0.66 Carats@Style #: CSWP211810@SKU #: 211810',
//     //     selling_price: '909.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Green Emerald Pendant 0.79 CTW',
//     //     Center_Stone: 'Morganite',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description: '',
//     //     selling_price: '',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Morganite-gemstone-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Pink Sapphire Pendant 0.79 CTW',
//     //     Center_Stone: 'Pink Sapphire',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Majestic Pink Sapphire Pendant@14K Yellow Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Majestic Pink Sapphire 0.66 Carats@Style #: CSWP211801@SKU #: 211801',
//     //     selling_price: '859.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Morganite-gemstone-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Pink Sapphire Pendant 0.79 CTW',
//     //     Center_Stone: 'Ruby',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'white Diamond Lab Pendant@14K Yellow Gold@Round Shaped Lab Diamond 0.13 Carats@Center Shaped white Diamond Lab 0.00 Carats@Style #: CSWP211783@SKU #: 211783',
//     //     selling_price: '489.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Tanzanite Pendant 0.80 CTW',
//     //     Center_Stone: 'Tanzanite',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'Lab Diamond',
//     //     description:
//     //       'Adorable Tanzanite Pendant@14K Yellow Gold@Round Shaped Lab Diamond 0.14 Carats@Center Oval Shaped Adorable Tanzanite 0.66 Carats@Style #: CSWP211792@SKU #: 211792',
//     //     selling_price: '859.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Tanzanite Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Tanzanite',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Adorable Tanzanite Pendant@14K Yellow Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Adorable Tanzanite 0.66 Carats@Style #: CSWP145571@SKU #: 145571',
//     //     selling_price: '959.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Red Ruby Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Ruby',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Lustrous Red Ruby Pendant@14K Yellow Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Lustrous Red Ruby 0.66 Carats@Style #: CSWP145562@SKU #: 145562',
//     //     selling_price: '589.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Pink Sapphire Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Pink Sapphire',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Majestic Pink Sapphire Pendant@14K Yellow Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Majestic Pink Sapphire 0.66 Carats@Style #: CSWP145553@SKU #: 145553',
//     //     selling_price: '959.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Green Emerald Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Emerald',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Green Emerald Pendant@14K Yellow Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Green Emerald 0.66 Carats@Style #: CSWP131783@SKU #: 131783',
//     //     selling_price: '1,009.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_Y_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Blue Sapphire Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Blue Sapphire',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Translucent Blue Sapphire Pendant@14K Yellow Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Translucent Blue Sapphire 0.66 Carats@Style #: CSWP145544@SKU #: 145544',
//     //     selling_price: '1,009.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/2-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_Y_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_Y_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_Y_0_QAA_CM.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Yellow Gold Oval Cut Tanzanite Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Tanzanite',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Adorable Tanzanite Pendant@14K White Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Adorable Tanzanite 0.66 Carats@Style #: CSWP145568@SKU #: 145568',
//     //     selling_price: '959.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Red Ruby Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Ruby',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Lustrous Red Ruby Pendant@14K White Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Lustrous Red Ruby 0.66 Carats@Style #: CSWP145559@SKU #: 145559',
//     //     selling_price: '1,109.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Pink Sapphire Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Pink Sapphire',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Majestic Pink Sapphire Pendant@14K White Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Majestic Pink Sapphire 0.66 Carats@Style #: CSWP145550@SKU #: 145550',
//     //     selling_price: '959.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/pink-sapphaire-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Green Emerald Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Emerald',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Green Emerald Pendant@14K White Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Green Emerald 0.66 Carats@Style #: CSWP131780@SKU #: 131780',
//     //     selling_price: '1,009.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K White Gold Oval Cut Blue Sapphire Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Blue Sapphire',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Translucent Blue Sapphire Pendant@14K White Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Translucent Blue Sapphire 0.66 Carats@Style #: CSWP145541@SKU #: 145541',
//     //     selling_price: '1,009.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/1-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_W_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_W_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_W_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Tanzanite Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Tanzanite',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Adorable Tanzanite Pendant@14K Rose Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Adorable Tanzanite 0.66 Carats@Style #: CSWP145566@SKU #: 145566',
//     //     selling_price: '959.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/tanzanite-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_42_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Red Ruby Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Ruby',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Lustrous Red Ruby Pendant@14K Rose Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Lustrous Red Ruby 0.66 Carats@Style #: CSWP145557@SKU #: 145557',
//     //     selling_price: '1,109.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Red-Ruby-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_41_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Pink Sapphire Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Pink Sapphire',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Majestic Pink Sapphire Pendant@14K Rose Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Majestic Pink Sapphire 0.66 Carats@Style #: CSWP145548@SKU #: 145548',
//     //     selling_price: '959.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/pink-sapphaire-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_43_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Morganite Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Morganite',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Mesmorising Morganite Pendant@14K Rose Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Mesmorising Morganite 0.66 Carats@Style #: CSWP149084@SKU #: 149084',
//     //     selling_price: '919.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Morganite-gemstone-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_128_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_128_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_128_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Green Emerald Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Emerald',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Green Emerald Pendant@14K Rose Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Green Emerald 0.66 Carats@Style #: CSWP131778@SKU #: 131778',
//     //     selling_price: '1,009.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Green-Emerald-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_R_0_QAA_CM-1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_44_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '14K Rose Gold Oval Cut Blue Sapphire Pendant 0.80 CTW',
//     //     price: '489.00',
//     //     Center_Stone: 'Blue Sapphire',
//     //     Metal_Type: 'Rose Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description:
//     //       'Translucent Blue Sapphire Pendant@14K Rose Gold@Round Shaped White Diamond 0.14 Carats@Center Oval Shaped Translucent Blue Sapphire 0.66 Carats@Style #: CSWP145539@SKU #: 145539',
//     //     selling_price: '1,009.00',
//     //     CenterStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/About1-45x45.png',
//     //     Main_Image: [
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CM.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CA_1.jpg',
//     //       'https://demo.elbasoft.com/Nextjs_POC/images/187259_115_20_R_0_QAA_CA_2.jpg',
//     //     ],
//     //   },
//     //   {
//     //     title: '',
//     //     price: '489.00',
//     //     Center_Stone: 'Morganite',
//     //     Metal_Type: 'Yellow Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description: '',
//     //     selling_price: '',
//     //     CenterStone_Image:
//     //       'https://sophiafiori.com/wp-content/uploads/2023/03/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://sophiafiori.com/wp-content/uploads/2023/03/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://sophiafiori.com/wp-content/uploads/2024/01/About1-45x45.png',
//     //     Main_Image: ['', '', ''],
//     //   },
//     //   {
//     //     title: '',
//     //     price: '489.00',
//     //     Center_Stone: 'Morganite',
//     //     Metal_Type: 'White Gold',
//     //     Side_Stone: 'White Diamond',
//     //     description: '',
//     //     selling_price: '',
//     //     CenterStone_Image:
//     //       'https://sophiafiori.com/wp-content/uploads/2023/03/Variations-Stone-Blue-Sapphire-A-45x45.png',
//     //     Metal_Image:
//     //       'https://sophiafiori.com/wp-content/uploads/2023/03/3-2-45x45.png',
//     //     SideStone_Image:
//     //       'https://sophiafiori.com/wp-content/uploads/2024/01/About1-45x45.png',
//     //     Main_Image: ['', '', ''],
//     //   },
//     // ]);

//     // console.log('data', data);

//     return NextResponse.json({
//       message: 'User Created Successfull.',
//       // data: data,
//       status: 200,
//     });
//   } catch (error) {
//     console.log('error', error);
//     return response.status(500).json({ message: 'Internal Server Error!.' });
//   }
// }

export async function GET(request: any, response: NextApiResponse) {
  try {
    let serachParams: any;
    if (request.url) {
      const url = new URL(request.url);
      serachParams = new URLSearchParams(url.searchParams);
      let Center_Stone = serachParams.get('Center_Stone');
      let Metal_Type = serachParams.get('Metal_Type');
      let Side_Stone = serachParams.get('Side_Stone');
      const data: any = await userModel.findOne({
        $and: [{ Center_Stone }, { Side_Stone }, { Metal_Type }],
      });
      return NextResponse.json({
        message: 'Users Fetched Successfully.',
        data: data,
        status: 200,
      });
    }
    await connectDB();
    // const users = await userModel.findOne({$and:[{Center_Stone:},{Side_Stone:,Metal_Type:}]}); // Exclude password field
  } catch (error) {
    console.log('error', error);
    return response.status(500).json({ message: 'Internal Server Error' });
  }
}
