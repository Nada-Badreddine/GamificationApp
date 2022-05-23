import React from 'react';
import classes from './SecondSection.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useQuery } from '@apollo/client'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import AddOrRemoveFromCart from '../AddOrRemoveFromCart';
import AddOrRemoveFromFavoriteList from '../AddOrRemoveFromFavoriteList';
import { LOAD_GIFTS } from '../../services/giftServices/QueryAllGifts'


const SecondSection = ({ item, refetch, listFav, width }) => {
  const { data } = useQuery(LOAD_GIFTS)
  {/*
   const items=[{number:1},{number:6},{number:2},{number:8}]
 
   const updatedOSArray = items.map((a) =>{
    return {number: a.number + 1 };
  })
*/}

const updatedOSArray = data?.gifts?.map((a) =>{
  
  return {...a,created_at: new Date(a?.created_at) };
})

const sortedActivities =updatedOSArray?.sort(function (a, b) {
  return a.created_at - b.created_at;
});
const slicedUsers= sortedActivities?.slice(0,4)
console.log(slicedUsers)
const ApiUrl = 'http://localhost:1337'
  return (
    <div className={classes.body}>
      <div className={classes.newArrivals}>
        <Container>
          <div className={classes.sectionHeader}>
            <h2>new arrivals</h2>
          </div>
          <div className={classes.newArrivalsContent}>
            <Row>
            {slicedUsers?.map((item) => {
                return (
              <Col md={3} sm={4}>
                <div className={classes.singleNewArrival}>
                  <div className={classes.singleNewArrivalBg}>
                    <img
                      src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url}
                      alt="new-arrivals images"
                    />
                    <div className={classes.singleNewArrivalBgOverlay}></div>

                    <div className={classes.newArrivalCart}>
                      <p>
                      <AddOrRemoveFromCart item={item} />
                      
                      </p>
                      <p className={classes.arrivalReview}>
                      <AddOrRemoveFromFavoriteList gift={item} refetch={refetch} listFav={listFav} />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">{item?.Name}</a>
                  </h4>
                  <p className={classes.arrivalProductPrice}>{item?.PointNumber} Points</p>
                </div>
              </Col>

                        
   
    
              
              )})}
           
              
            
            
              
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SecondSection;