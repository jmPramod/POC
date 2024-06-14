'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { styles } from './styles';
import { Typography } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  reEnterPassword: string;
}

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    reEnterPassword: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.reEnterPassword)
      newErrors.reEnterPassword = 'Passwords do not match';
    return newErrors;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      console.log('value', formData);
      const res: AxiosResponse<any> = await axios.post(
        'http://localhost:3000/api/register',
        formData
      );
      if (res.status === 200) {
        router.push('/all-user');
      }
      // const response = await axios.post('/api/register', formData); // Replace with your API endpoint
      // console.log('Form submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <styles.outerContainer>
      <styles.imageContainer>
        <styles.leftImage src="/image/login.jpg" alt="" />
      </styles.imageContainer>

      <styles.inputContainer onSubmit={handleSubmit}>
        <styles.title variant="h5">Register</styles.title>
        <styles.inputField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
        <styles.inputField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
        <styles.inputField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
        />
        <styles.inputField
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
        <styles.inputField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
        />
        <styles.inputField
          id="outlined-basic"
          label="Re-Enter Password"
          variant="outlined"
          name="reEnterPassword"
          type="password"
          value={formData.reEnterPassword}
          onChange={handleChange}
          error={!!errors.reEnterPassword}
          helperText={errors.reEnterPassword}
        />
        <styles.submitButton variant="contained" type="submit">
          Submit
        </styles.submitButton>
      </styles.inputContainer>
    </styles.outerContainer>
  );
};

export default Register;
