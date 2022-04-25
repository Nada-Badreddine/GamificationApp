import React from 'react';
import classes from './Categories.module.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useQuery,useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CREATE_PRODUCT_MUTATION } from './../../services/addProduct';
import { LOAD_CATEGORIES } from './../../services/categoriesServices/QueryAllCategories'










const Categories = (props) => {
  const { loading, data } = useQuery(LOAD_CATEGORIES)
  const [createProduct] = useMutation(CREATE_PRODUCT_MUTATION);

  const navigate = useNavigate();
  const ApiUrl = 'http://localhost:1337'

  

  const AddProduct = () => {
    createProduct({
      variables: {
        input: {
          data: { name: "tftvbyuy", price : 515151 },
        },
      },
    });
    
  };




 
  return (
    <>
  <div  style={{justifyContent: 'center'}}className={classes.giftContentMain}>


<div className={classes.giftContent}>
<div className={classes.SuperTitleContent}>
<span>Choose a Category</span>
    </div>
<div className={classes.giftContentheader} >
<span className={classes.inputSearch}>
<input placeholder='Type in to search' type="text"  className={classes.antInput}/>
<span className={classes.inputSSuffix}>
    <div style={{position: 'absolute',
    left: '268px'}}>
    < SearchRoundedIcon/>
    </div>
</span>
</span>
</div>
<div className={classes.giftContentCards}>
<div className={classes.giftContentList}>
{data?.categories?.map((item) => {
          return (
<div>
  <div className={classes.giftContentImgContainer}>
<img className={classes.giftContentImg} alt="gift thumbnail" src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url}/>
  </div>
  <div className={classes.giftContentInfo}>  
 <div className={classes.giftContentInfoTitle}>{item?.Name} </div>
<div className={classes.giftContentInfoextraInformation}>  
<div className={classes.giftContentInfoSousInformation} >choose your gifts in this category</div>
<div className={classes.giftContentButtnCart}>
<div className={classes.giftContentCartTagContainer} >
  <div className={classes.giftContentCartTag} onClick={() => navigate('/giftsbyCategory/'+ item?.id )} > See gifts</div>  
</div>


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

<button onClick={() => AddProduct()}>add product </button>

  </div>
    </>
  );
};

export default Categories;   