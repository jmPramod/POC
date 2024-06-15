"use client"
import React, { useEffect } from 'react';
import Product from './Product';

const page = (params: any) => {
  useEffect(() => {
    console.log('myparams', params);
  }, []);
  return (
    <>
      <Product params={params}/>;
    </>
  );
};

export default page;
