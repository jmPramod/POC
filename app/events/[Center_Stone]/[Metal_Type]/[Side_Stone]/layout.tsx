import { fetchproduct } from '@/app/utils';
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
  const response: any = await fetchproduct(params);
  return {
    title: response.data?.data?.title,
    description: response.data?.data?.description,
    openGraph: {
      images: [response.data?.data?.Main_Image[0]],
    },
  };
};
