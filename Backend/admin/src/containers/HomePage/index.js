/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { get, upperFirst } from 'lodash';
import { auth, LoadingIndicatorPage } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import { useModels } from '../../hooks';
import useFetch from './hooks';
import { ALink, Block, Container, LinkWrapper, P, Wave, Separator } from './components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import homeImg from './homeImg.jpg';

const HomePage = () => {

  return (
    <>
      <Container style={{backgroundColor: 'white'}} className="container-fluid">
        <Row>
          <Col sm={7}>
                <div>
                  <h1 style={{fontFamily: 'Raleway',
    lineHeight: '1.25',
    margin: '0% 0px 21px 7%',
    fontSize: '32px',
    fontWeight: 'bold',
    width: '70%',
    textAlign: 'center',
    marginTop: '15%',
    marginLeft: '7%'
}}>La plateforme logicielle <span style={{color:'orange'}}> tout-en-un </span> pour la motivation et l’engagement des employés </h1>
                  <p style={{fontSize: '17px',
    textAlign: 'center',marginLeft:'-24px',width: '95%'}}>
                  Apportez de la valeur ajoutée à vos employés pour une meilleure productivité grâce à notre suite logicielle unifiée pour l’engagement des employés.
                  </p>
              </div>
            </Col>
            <Col sm={5}>
            <div>
              <div>
                <img src={homeImg}
                    alt="homeImg" 
                    style={{ marginLeft: '-43px',
                      marginTop: '65px',
                      width: '120%',
                      height:'auto'}}/>
              </div>
            </div>
          </Col>
        </Row>
   </Container>
    </>
  );
};

export default memo(HomePage);
