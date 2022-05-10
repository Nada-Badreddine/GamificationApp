import React from 'react';
import classes from './ThirdSection.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ThirdSection = () => {
  return (
    <div className={classes.body}>
      <div className={classes.welcomeHero}>
        <Container>
          <Row>
            <Col sm={5}>
              <div className={classes.singleWelcomeHero}>
                <div>
                  <img
                    src="assets/images/developer.png"
                    alt="developer"
                    style={{ width: 450, height: 400, marginLeft: '-18px'
                    }}
                  />
                </div>
              </div>
            </Col>
            <Col sm={7}>
              <div className={classes.singleWelcomeHero}>
                <div className={classes.welcomeHeroTxt}>
                  <h2 className={classes.title}>Win Points </h2>
                  <p>
                    Encourage Achievements,Positive Behaviors And Reward Success
                    By Acknowledging And Awarding Points And Badges.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={7}>
              <div className={classes.singleWelcomeHero}>
                <div className={classes.welcomeHeroTxt}>
                  <h2 className={classes.title}>Celebrate together </h2>
                  <p>
                    Encourage An Achievement And Celebrate Earning Points By
                    Integrating The Tools Of Communication That Your Employees
                    Use Every Day
                  </p>
                </div>
              </div>
            </Col>
            <Col sm={5}>
              <div className={classes.singleWelcomeHero}>
                <div>
                  <img
                    src="assets/images/slack.jpg"
                    alt="slack"
                    style={{ width: 500, height: 400 }}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ThirdSection;
