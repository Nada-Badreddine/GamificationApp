import React from 'react';
import Header from '../components/Header';
import Box from '@mui/material/Box';
import FirstSection from '../components/FirstSection/FirstSection';
import SecondSection from '../components/SecondSection/SecondSection';
import ThirdSection from '../components/ThirdSection/ThirdSection';
import NavSection from '../components/NavSection/NavSection';
function Home() {
  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </Box>
  );
}
export default Home;
