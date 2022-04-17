import React from 'react';
import Box from '@mui/material/Box';
import FirstSection from '../components/FirstSection/FirstSection';
import SecondSection from '../components/SecondSection/SecondSection';
import ThirdSection from '../components/ThirdSection/ThirdSection';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';
function Home() {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footeer />
    </Box>
  );
}
export default Home;
