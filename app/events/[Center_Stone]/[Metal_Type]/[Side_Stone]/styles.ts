import { Skeleton, Typography, styled } from '@mui/material';

export const styles = {
  outerContainer: styled('div')`
    display: flex;
    height: calc(100vh-64px);

    padding: 0px 40px;
    @media (0<width<900px) {
      flex-direction: column;
      padding: 0px 24px;
    }
  `,

  sliderContainer: styled('div')`
    width: 50%;
    @media (0<width<900px) {
      width: 100%;
    }
  `,
  infoContainer: styled('div')`
    padding-left: 100px;
    margin-top: 20px;
    width: 50%;
    flex-direction: column;
    display: flex;
    align-items: start;
    gap: 15px;
    /* padding: 15px; */
    @media (0<width<900px) {
      width: 100%;
      padding-left: 0px;
    }
  `,
  titleMain: styled('h1')`
    font-size: 28px !important;
    font-weight: 500;
    font-family: 'Jost*', Arial, sans-serif;
    width: 98%;
  `,

  title: styled(Typography)``,
  titleContainer: styled('div')`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  `,
  startingAt: styled(Typography)`
    color: #ff6f61;
  `,
  IconImage: styled('img')`
    border-radius: 100%;
    cursor: pointer;
    width: 45px;
  `,
  imageText: styled(Typography)``,
  skelitonWrapper: styled('div')`
    display: flex;
    width: 100%;
    @media (0<width<900px) {
      flex-direction: column;
    }
  `,
  skeletonContainer: styled('div')`
    display: flex;
    width: 50%;
    height: 100vh;
    @media (0<width<900px) {
      height: 40vh;
      width: 100%;
    }
  `,
  skelitonInnerWrapper: styled('div')`
    width: 50%;
    margin: 12px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (0<width<900px) {
      width: 93%;

      margin: 0 12px;
    }
  `,

  skeletonLoader: styled(Skeleton)`
    width: 100%;
    height: 80%;
    transform: scale(1) !important;
    margin: 12px;
  `,
  skelitonRectangle: styled(Skeleton)`
    width: 100%;
  `,
  skelitonRectangle1: styled(Skeleton)`
    width: 100%;
  `,
  skelitonRectangle2: styled(Skeleton)`
    width: 100%;
  `,
};
