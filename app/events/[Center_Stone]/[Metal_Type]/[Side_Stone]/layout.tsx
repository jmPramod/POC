import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

export const generateMetadata = async ({ params }: any) => {
  const response: any =
    await `https://next-poc-1.netlify.app/api/events/${params.Center_Stone}/${params.Metal_Type}/${params.Side_Stone}`;

  return {
    title: response.data?.data?.title
    // description: data?.event_description,
    // openGraph: {
    //   images: [data?.event_image],
    // },
  };
};
