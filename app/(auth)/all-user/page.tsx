'use client';

import { Button, Card, Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { styles } from './styles';

const AllUser = () => {
  const [userList, setUserList] = useState<any>([]);

  const [userDelete, setUserDelete] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await axios.get('http://localhost:3000/api/register');
        console.log(data);
        if (data) {
          setUserList(data?.data?.data);
        }
      } catch (error) {
        console.log('er:', error);
      }
    };
    fetchUser();
  }, [userDelete]);
  const handleDelete = async (id: any) => {
    try {
      const res: AxiosResponse<any> = await axios.delete(
        `http://localhost:3000/api/register/${id}`
      );
      setUserDelete(!userDelete);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <styles.outerContainer>
      {userList.length == 0 ? (
        <Typography variant="h6">No User Found</Typography>
      ) : (
        <>
          <styles.cardContainer>
            <styles.cardDetails variant="h6">Name</styles.cardDetails>

            <styles.cardDetails variant="h6">Email</styles.cardDetails>

            <styles.cardDetails variant="h6">Phone</styles.cardDetails>
            <styles.cardDetails variant="h6" sx={{ width: '15%' }}>
              Action
            </styles.cardDetails>
          </styles.cardContainer>
          {userList?.map((value: any, index: number) => (
            <styles.cardContainer key={index}>
              <styles.cardDetails variant="body1">
                {value?.first_name}
              </styles.cardDetails>

              <styles.cardDetails variant="body1">
                {value?.email}
              </styles.cardDetails>

              <styles.cardDetails variant="body1">
                {value?.phone}
              </styles.cardDetails>
              <Button
                variant="contained"
                onClick={() => handleDelete(value._id)}
                sx={{ width: '15%' }}
              >
                Delete
              </Button>
            </styles.cardContainer>
          ))}
        </>
      )}
    </styles.outerContainer>
  );
};

export default AllUser;
