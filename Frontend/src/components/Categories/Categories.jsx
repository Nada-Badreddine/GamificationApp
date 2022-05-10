import React, { useState } from 'react';
import classes from './Categories.module.css'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useQuery } from '@apollo/client';
import { LOAD_CATEGORIES } from '../../services/categoriesServices/QueryAllCategories'
import Category from '../Category/Category'
const Categories = () => {
  const [searchQuery, setSearch] = useState('');
  const { loading, data } = useQuery(LOAD_CATEGORIES) 
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
                   <Category item={item}  />
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