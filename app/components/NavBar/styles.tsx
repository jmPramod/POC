import styled from '@emotion/styled';
import { Button, Toolbar } from '@mui/material';

export const styles = {
  toolbar: styled(Toolbar)`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  logo: styled('img')`
    cursor: pointer;
    background-color: white;
    border-radius: 10px;
    width: 118px;
    padding: 9px;
  `,
  button: styled(Button)`
    background-color: gold;
    color: black;
    &:hover {
      background-color: white;
      color: black;
    }
  `,
  buttonContainer: styled('div')`
    display: flex;
    gap: 5px;
  `,
};
