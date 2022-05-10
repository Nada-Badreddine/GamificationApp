import React from 'react'
import classes from './Category.module.css'
import { useNavigate } from 'react-router-dom';
function Category({ item }) {
const ApiUrl = 'http://localhost:1337'
const navigate = useNavigate();
    return (
        <div>
            <div className={classes.giftContentImgContainer}>
                <img className={classes.giftContentImg} alt="gift thumbnail" src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url} />
            </div>
            <div className={classes.giftContentInfo}>
                <div  className={classes.giftContentInfoTitle}>
                    {item?.Name} 
                </div>
                    <div className={classes.giftContentInfoextraInformation}>
                        <div className={classes.giftContentInfoSousInformation} >
                            choose your gifts in this category
                        </div>
                            <div className={classes.giftContentButtnCart}>
                                <div className={classes.giftContentCartTagContainer} >
                                    <div className={classes.giftContentCartTag} onClick={() => navigate('/giftsbyCategory/' + item?.id)} > 
                                        See gifts
                                    </div>
                                </div>
                            </div>
                    </div>
            </div>
        </div>
    )
}
export default Category