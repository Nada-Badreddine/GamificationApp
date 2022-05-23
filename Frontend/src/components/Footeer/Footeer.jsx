import React from 'react';
import classes from './Footeer.module.css';
import Container from 'react-bootstrap/Container';

const Footeer = () => {
  return (   
    <div className={classes.body}>      
      <div className={classes.welcomeHero}>
        <div>
          <Container style={{display: 'flex',     paddingTop: '20px',
   justifyContent: 'space-around'
 }}>
            <div className={classes.navbarHeader}>
              <a className={classes.navbarBrand} href="/">
                Oyez<span>Gift</span>.
              </a>
            </div>
            <div style={{display: 'flex',textAlign: 'right',width: '23px',height: '23px'}}>         
            <img style={{ marginRight: '12px'  }} src="assets/images/email.png" alt="email" />
            <img  style={{ marginRight: '12px'}} src="assets/images/twiter.png" alt="twiter" />
            <img  style={{ marginRight: '12px'}}   src="assets/images/linkedin.png"  alt="linkedin" />
            <img src="assets/images/facebook.png"  alt="facebook" />
               
              
              </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footeer;
