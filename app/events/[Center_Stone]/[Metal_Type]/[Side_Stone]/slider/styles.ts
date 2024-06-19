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
    border: 1px solid black;
    display: flex;
    /* flex-direction: col; */
    align-items: center;
    justify-content: center;
    height: 100vh;
    @media (0px<width<900px) {
      height: 40vh;
    }
  `,
};
