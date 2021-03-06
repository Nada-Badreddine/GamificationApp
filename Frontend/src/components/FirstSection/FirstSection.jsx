import React from 'react';
import classes from './FirstSection.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';


const FirstSection = () =>

 {
  const navigate = useNavigate();
  return (
    <div className={classes.body}>
      <div className={classes.welcomeHero}>
        <Container>
          <Row>
            <Col sm={7}>
              <div className={classes.singleWelcomeHero}>
                <div className={classes.welcomeHeroTxt}>
                  <h2>Engage, Recognize, Win a reward </h2>
                  <p style={{ color: 'grey' }}>
                    the satisfaction of our employees is a priority, with our
                    application we encourage their engagement with rewards of
                    their choice and make the reward experience enjoyable for
                    end users.
                  </p>

                  <Button
                    style={{
                      backgroundColor: '#e99c2e',
                      color: 'white',
                      marginLeft: '-9px',
    marginRight: '9px'
                    }}
                    variant="contained"
                    
                  >
                    <CardGiftcardIcon />
                    <span  onClick={() => navigate('/pageCategories')} style={{marginLeft: '12px'}}>See Gift Catalog</span> 
                  </Button>
                </div>
              </div>
            </Col>
            <Col sm={5}>
              <div className={classes.singleWelcomeHero}>
                <div>
                  <img style={{height: '405px',width: '100%'}} src="assets/images/rewardWomen.png" alt="reward women" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default FirstSection;
