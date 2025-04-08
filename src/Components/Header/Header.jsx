import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import { Box } from '@mui/material'

const Header = () => {
  return (
    <>
      <Box sx={{ background: "linear-gradient(to bottom, #E6FFFF, #FFFFFF)"}}>
        <Navbar />
        <Box sx={{ marginTop: "90px" }}>
          <HeroSection />
        </Box>
      </Box>
    </>
  );
}

export default Header
