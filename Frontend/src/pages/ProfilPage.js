import React from 'react';
import NavSection from '../components/NavSection/NavSection';
import Footeer from '../components/Footeer/Footeer';
import ProfilUser from '../components/ProfilUser/ProfilUser';

const ProfilPage = () => {
  return (
    <div>
      <NavSection  />
      <ProfilUser/>    
      <Footeer />    
    </div>
  );
};

export default ProfilPage;
