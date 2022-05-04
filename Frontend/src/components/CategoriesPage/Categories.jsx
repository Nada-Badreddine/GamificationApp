import React, { useState } from 'react';
import classes from './Categories.module.css'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { LOAD_CATEGORIES } from './../../services/categoriesServices/QueryAllCategories'

const Categories = () => {
  const [searchQuery, setSearch] = useState('');
  const { loading, data } = useQuery(LOAD_CATEGORIES)

  const navigate = useNavigate();
  const ApiUrl = 'http://localhost:1337'
  const handleChangeSearch = (value) => {
    setSearch(value);
  };

  if (loading) {
    return (<Box sx={{ display: 'flex', justifyContent: "center" }}>
      <CircularProgress />
    </Box>)
  }

  const filtreditems = data?.categories?.filter((item) => {
    return item?.Name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  return (
    <>
      <div style={{ justifyContent: 'center' }} className={classes.giftContentMain}>
        <div className={classes.giftContent}>
          <div className={classes.SuperTitleContent}>
            <span>Choose a Category</span>
          </div>
          <div className={classes.giftContentheader} >
            <span className={classes.inputSearch}>
              <input placeholder='Type in to search' type="text" className={classes.antInput} onChange={(e) => handleChangeSearch(e.target.value)}
                value={searchQuery} />
              <span className={classes.inputSSuffix}>
                <div style={{
                  position: 'absolute',
                  left: '268px'
                }}>
                  < SearchRoundedIcon />
                </div>
              </span>
            </span>
          </div>
          <div className={classes.giftContentCards}>
            <div className={classes.giftContentList}>
              {filtreditems?.map((item) => {
                return (
                  <div>
                    <div className={classes.giftContentImgContainer}>
                      <img className={classes.giftContentImg} alt="gift thumbnail" src={ApiUrl + item?.Img[0]?.formats?.thumbnail?.url} />
                    </div>
                    <div className={classes.giftContentInfo}>
                      <div className={classes.giftContentInfoTitle}>{item?.Name} </div>
                      <div className={classes.giftContentInfoextraInformation}>
                        <div className={classes.giftContentInfoSousInformation} >choose your gifts in this category</div>
                        <div className={classes.giftContentButtnCart}>
                          <div className={classes.giftContentCartTagContainer} >
                            <div className={classes.giftContentCartTag} onClick={() => navigate('/giftsbyCategory/' + item?.id)} > See gifts</div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;   