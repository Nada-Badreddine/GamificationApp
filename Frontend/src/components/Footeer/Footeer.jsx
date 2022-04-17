import React from 'react';
import classes from './Footeer.module.css';
import Container from 'react-bootstrap/Container';

const Footeer = () => {
  return (
    <div className={classes.body}>
      <div className={classes.welcomeHero}>
        <div className={classes.topArea}>
          <Container>
            <div className={classes.navbarHeader}>
              <a className={classes.navbarBrand} href="/">
                Oyez<span>Gift</span>.
              </a>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Footeer;
