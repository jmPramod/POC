import { Card, Typography, styled } from '@mui/material';

export const styles = {
  cardContainer: styled(Card)`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    margin: 5px;
  `,
  outerContainer: styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (0<width<900px) {
      overflow-x: scroll;
    }
  `,

  cardDetails: styled(Typography)`
    width: 25%;
    @media (0<width<900px) {
      width: auto;
    }
  `,
};
