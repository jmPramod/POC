'use client';
import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { styles } from './styles';
import data from '../../../dataCopy.json';
const HomePage = () => {
  useEffect(() => {
    console.log('data', data);
  }, []);
  return (
    <>
      <styles.outerContainer>
        <styles.title variant="h4">
          POC on Next Js with Mongo Db and Node JS{' '}
        </styles.title>
        <styles.descriptionWrapper>
          <styles.description variant="h6">
            This project is a simple Register application.You can do the
            following
          </styles.description>
          <div className="flex  ">
            <div>
              <styles.description variant="h6">1.</styles.description>
            </div>
            <styles.description variant="h6">
              Click on register button and create a user. Once user is created,
              it redirect to the All user Page
            </styles.description>
          </div>
          <div className="flex  ">
            <div>
              <styles.description variant="h6">2.</styles.description>
            </div>
            <styles.description variant="h6">
              Click on all user to view the cerated user
            </styles.description>
          </div>
        </styles.descriptionWrapper>
      </styles.outerContainer>
      {data.map((val, ind) => (
        <div key={ind} style={{ border: '1px solid black', margin: '10px' }}>
          <h1>{ind}</h1>
          CenterStone_Image:{' '}
          <img src={val.CenterStone_Image} width={100} height={100} />
          Metal_Image:
          <img src={val.Metal_Image} width={100} height={100} />
          SideStone_Image:
          <img src={val.SideStone_Image} width={100} height={100} />
          {val.Main_Image.map((v, i) => (
            <div key={i}>
              Main_Image{i}:<img src={v} width={100} height={100} />
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default HomePage;
