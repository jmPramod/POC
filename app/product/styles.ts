import { Typography, styled } from '@mui/material';

export const styles = {
  outerContainer: styled('div')`
    display: flex;
    height: calc(100vh-64px);
    @media (0<width<700px) {
      flex-direction: column;
    }
  `,

  sliderContainer: styled('div')`
    width: 50%;
    @media (0<width<700px) {
      width: 100%;
    }
  `,
  infoContainer: styled('div')`
    width: 50%;
    flex-direction: column;
    display: flex;
    align-items: start;
    gap: 15px;
    padding: 15px;
    @media (0<width<700px) {
      width: 100%;
    }
  `,
  title: styled(Typography)``,
  titleContainer: styled('div')`
    display: flex;
    gap: 10px;
  `,
  startingAt: styled(Typography)`
    color: #ff6f61;
  `,
  IconImage: styled('img')`
    border-radius: 100%;
    cursor: pointer;
  `,
};
