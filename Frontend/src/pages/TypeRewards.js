import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Col, Row, Container } from 'reactstrap';
import { useQuery } from '@apollo/client';
import { LOAD_TYPE_REWARDS } from './../services/TypeRewardsServices/getAllType';
import NavSection from '../components/NavSection/NavSection';
import Footer from '../components/Footer';
import CircularProgress from '@mui/material/CircularProgress';

import './../styles/TypeRewards.css';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const TypeRewards = () => {
  const { loading, data } = useQuery(LOAD_TYPE_REWARDS);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box backgroundColor="#efece9">
      <NavSection />
      <h3>Des récompenses pour chaque occasion</h3>
      <Box mb={2}>
        <Container>
          <Row>
            {data?.typeRewards?.map((item) => {
              return (
                <Col xs="12" md="4">
                  <Card
                    style={{
                      backgroundColor: '#fff',
                      height: '290px',
                    }}
                  >
                    <CardContent>
                      <div className="icon-sequence-bg">
                        <img
                          src="https://assets-global.website-files.com/60080cdf80021f5e4cc61c9b/61533720e9211f738a3d8912_Automate.svg"
                          className="icon-sequence"
                          alt=""
                        />
                      </div>
                      <Typography variant="body2">
                        <h6 className="heading-sequence">{item?.Title}</h6>
                        <br />
                        <p>{item?.Description}</p>
                      </Typography>
                    </CardContent>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default TypeRewards;
