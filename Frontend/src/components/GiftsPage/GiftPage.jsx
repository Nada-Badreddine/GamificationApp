import React, { memo, useState } from 'react';
import { useParams } from "react-router";
import classes from './GiftPage.module.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useQuery } from '@apollo/client'
import { LOAD_GIFTS_BY_CATEGORY } from './../../services/giftServices/QueryAllGifts'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const GiftPage = (props) => {
  const params = useParams();
  const current = params.catgId;
  const [searchQuery, setSearch] = useState('');
  const { loading, data } = useQuery(LOAD_GIFTS_BY_CATEGORY, { variables: { id: current } });
  console.log("aaaaaaaaa",data)
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const ApiUrl = 'http://localhost:1337'

  const handleChangeSearch = (value) => {
    setSearch(value);
  };

  return (
    <>
  <div className={classes.giftContentMain}>
<div className={classes.giftCategories}>

<div className={classes.giftCategoriesSearchFilters}>
<div className={classes.giftCategoriesSearchSousFilters}>
<div className={classes.giftCategoriesSearchByName}>
    <div className={classes.filterTitle}>
<span>Select a Catgory</span>
    </div>
    <span className={classes.filterTag}>Home</span>
    <span className={classes.filterTag}>Office</span>
    <span className={classes.filterTag}>Fashion</span>
</div>
<div className={classes.giftCategoriesSearchByName}>
    <div className={classes.filterSecondeTitle}>
<span>Select Gifts By Points</span>
    </div>
    <FormGroup>
    <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
    <FormControlLabel control={<Checkbox  />} label=">1000 poins" />  
    <FormControlLabel  control={<Checkbox />} label="<100 points" />
    </FormGroup>
</div>
</div>
</div>
</div>


<div className={classes.giftContent}>
<div className={classes.SuperTitleContent}>
  
<span>Choose your Gift of {data?.category?.Name} Category</span>
    </div>
<div className={classes.giftContentheader} >
<span className={classes.inputSearch}>
<input placeholder='Type in to search' type="text"  className={classes.antInput}/>
<span className={classes.inputSSuffix}>
    <div style={{position: 'absolute',
    left: '268px'}}>
    < SearchRoundedIcon 
    
    onChange={(e) => handleChangeSearch(e.target.value)}
    value={searchQuery}
    
    />
    </div>
</span>
</span>
</div>
<div className={classes.giftContentCards}>
<div className={classes.giftContentList}>
{data?.category?.gifts?.map((item) => {
  return(
    <div>
  <div className={classes.giftContentImgContainer}>
<img className={classes.giftContentImg} alt="gift thumbnail"  src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url}/>
  </div>
  <div className={classes.giftContentInfo}>
<div className={classes.giftContentInfoTitle}>{item?.Name}</div>
<div className={classes.giftContentInfoextraInformation}>  
<div className={classes.giftContentInfoSousInformation} >{item?.Description}</div>
<div className={classes.giftContentInfoSousInformation} >{item?.PointNumber} Points</div>

<div className={classes.giftContentButtnCart}>
<div className={classes.giftContentCartTagContainer} >
  <div className={classes.giftContentCartTag} > Add to cart</div>
  
</div>
<FavoriteBorderOutlinedIcon/>

</div>
 </div>
  </div>
</div>
 )})}


</div>
</div>
<div>
    
</div>

</div>
  </div>
    </>
  );
};

export default GiftPage;   