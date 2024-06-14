import { TextField, Button, Typography } from '@mui/material';
import styled from '@emotion/styled';
export const styles = {
  outerContainer: styled('div')`
    width: 100%;
    height: calc(100vh-64px);
    display: flex;
    @media (0<width<900px) {
      flex-direction: column;
    }
  `,
  inputField: styled(TextField)`
    width: 100%;
    max-width: 400px;
  `,
  inputContainer: styled('form')`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    flex-direction: column;
    /* height: 100%; */
    gap: 10px;
    width: 50%;
    padding: 15px;

    @media (0<width<900px) {
      width: 100%;
    }
  `,
  imageContainer: styled('div')`
    width: 50%;
    @media (0<width<900px) {
      width: 100%;
    }
  `,
  submitButton: styled(Button)`
    width: 100%;
    max-width: 400px;
  `,
  leftImage: styled('img')`
    width: 100%;
    padding: 10px;
  `,
  title: styled(Typography)`
    font-weight: bold;
  `,
};
