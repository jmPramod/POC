'use client';
import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import { styles } from './styles';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
const NavBar = () => {
  const router = useRouter();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down(700));
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <styles.toolbar>
        <styles.logo
          src="https://sophiafiori.com/wp-content/uploads/2023/02/Logo-SophiaFiori.webp"
          alt=""
          onClick={() => router.push('/')}
        />
        <styles.buttonContainer>
          <styles.button variant="contained" size={mobile ? 'small' : 'medium'}>
            <a href="https://next-poc-1.netlify.app/product/product?Side_Stone=Lab+Diamond&Metal_Type=Rose+Gold&Center_Stone=Blue+Sapphire">
              Product
            </a>
          </styles.button>
          {/* <styles.button variant="contained" size={mobile ? 'small' : 'medium'}>
            <Link href={'/all-user'}>All Users</Link>
          </styles.button> */}
        </styles.buttonContainer>
      </styles.toolbar>
    </AppBar>
  );
};

export default NavBar;
