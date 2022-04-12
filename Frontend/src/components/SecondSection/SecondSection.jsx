import React from 'react';
import classes from './SecondSection.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
const SecondSection = () => {
  return (
    <div className={classes.body}>
      <div className={classes.newArrivals}>
        <Container>
          <div className={classes.sectionHeader}>
            <h2>new arrivals</h2>
          </div>
          <div className={classes.newArrivalsContent}>
            <Row>
              <Col md={3} sm={4}>
                <div className={classes.singleNewArrival}>
                  <div className={classes.singleNewArrivalBg}>
                    <img
                      src="assets/images/arrivals1.png"
                      alt="new-arrivals images"
                    />
                    <div className={classes.singleNewArrivalBgOverlay}></div>

                    <div className={classes.newArrivalCart}>
                      <p>
                        <AiOutlineShoppingCart />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className={classes.arrivalReview}>
                        <AiOutlineHeart />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">wooden chair</a>
                  </h4>
                  <p className={classes.arrivalProductPrice}>$65.00</p>
                </div>
              </Col>
              <Col md={3} sm={4}>
                <div className={classes.singleNewArrival}>
                  <div className={classes.singleNewArrivalBg}>
                    <img
                      src="assets/images/arrivals1.png"
                      alt="new-arrivals images"
                    />
                    <div className={classes.singleNewArrivalBgOverlay}></div>

                    <div className={classes.newArrivalCart}>
                      <p>
                        <AiOutlineShoppingCart />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className={classes.arrivalReview}>
                        <AiOutlineHeart />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">wooden chair</a>
                  </h4>
                  <p className={classes.arrivalProductPrice}>$65.00</p>
                </div>
              </Col>
              <Col md={3} sm={4}>
                <div className={classes.singleNewArrival}>
                  <div className={classes.singleNewArrivalBg}>
                    <img
                      src="assets/images/arrivals1.png"
                      alt="new-arrivals images"
                    />
                    <div className={classes.singleNewArrivalBgOverlay}></div>

                    <div className={classes.newArrivalCart}>
                      <p>
                        <AiOutlineShoppingCart />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className={classes.arrivalReview}>
                        <AiOutlineHeart />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">wooden chair</a>
                  </h4>
                  <p className={classes.arrivalProductPrice}>$65.00</p>
                </div>
              </Col>
              <Col md={3} sm={4}>
                <div className={classes.singleNewArrival}>
                  <div className={classes.singleNewArrivalBg}>
                    <img
                      src="assets/images/arrivals1.png"
                      alt="new-arrivals images"
                    />
                    <div className={classes.singleNewArrivalBgOverlay}></div>

                    <div className={classes.newArrivalCart}>
                      <p>
                        <AiOutlineShoppingCart />
                        <a href="#">
                          add <span>to </span> cart
                        </a>
                      </p>
                      <p className={classes.arrivalReview}>
                        <AiOutlineHeart />
                      </p>
                    </div>
                  </div>
                  <h4>
                    <a href="#">wooden chair</a>
                  </h4>
                  <p className={classes.arrivalProductPrice}>$65.00</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default SecondSection;
