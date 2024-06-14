import { Typography, styled } from '@mui/material';

export const styles = {
  outerContainer: styled('div')`
    width: 100%;
    height: calc(100vh-64px);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
  `,
  title: styled(Typography)`
    text-decoration: underline;
  `,
  descriptionWrapper: styled('div')`
    max-width: 680px;
  `,
  description: styled(Typography)``,
};
