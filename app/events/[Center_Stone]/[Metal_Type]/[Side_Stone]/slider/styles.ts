import { styled } from '@mui/material';

export const styles = {
  sliderContainer: styled('div')`
    height: 100%;
    max-height: calc(100vh-64px);
    padding: 25px;
    @media (0<width<700px) {
      padding: 14px;
    }
  `,
  sliderImage: styled('img')``,
  noImage: styled('div')`
    border: 1px solid red;
    height: calc(100vh-64px);
  `,
};
