import React, { useState } from 'react';
import { useParams } from "react-router";
import classes from './GiftPage.module.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { useQuery } from '@apollo/client'
import { useNavigate } from 'react-router-dom';
import { LOAD_GIFTS_BY_CATEGORY } from '../../services/giftServices/QueryAllGifts'
import { LOAD_FAVORIS_BY_USER_ID } from '../../services/favorisServices/QueryFavoris'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Filters from '../Filters';

import formatListFavoris from '../../utils/formatListFavoris'

import { LOAD_CATEGORIES } from '../../services/categoriesServices/QueryAllCategories'
import Gift from '../Gift/Gift'
const GiftPage = () => {
  const params = useParams();
  const current = params.catgId;
  const [searchQuery, setSearch] = useState('');
  const [pointFilter, setPointFilter] = React.useState('');
  const userConecte = localStorage.getItem("USER_ID");
  const { loading, data } = useQuery(LOAD_GIFTS_BY_CATEGORY, { variables: { id: current } });
  const { loading: loadingFavoris, data: dataFavoris, refetch } = useQuery(LOAD_FAVORIS_BY_USER_ID, { variables: { id: userConecte } })
  const { data: dataCategories } = useQuery(LOAD_CATEGORIES)
  const navigate = useNavigate();



  const handleChangeSearch = (value) => {
    setSearch(value);
  };
  const handleChange = (filterName) => {
    setPointFilter((prevFilter) => prevFilter === filterName ? '' : filterName);
  };

  const checkFilter = (point) => {
    if (pointFilter === "lessThan100") return point < 100
    if (pointFilter === "between100And400") return point >= 100 && point <= 400
    return point > 400
  }


  if (loadingFavoris || loading) {
    return (<Box sx={{ display: 'flex', justifyContent: "center" }}>
      <CircularProgress />
    </Box>)
  }

  const filtredItems =
    data?.category?.gifts?.filter((item) => {
      if (pointFilter) {
        return item?.Name.toLowerCase().includes(searchQuery.toLowerCase()) && checkFilter(item?.PointNumber)
      }
      return item?.Name.toLowerCase().includes(searchQuery.toLowerCase());
    }) ?? [];
  const listFav = formatListFavoris(dataFavoris?.user?.favorises ?? [])

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
                {dataCategories?.categories.map((item) => {
                  return <span className={classes.filterTag} onClick={() => navigate('/giftsbyCategory/' + item?.id)} >{item?.Name}</span>
                })}

              </div>
              <div className={classes.giftCategoriesSearchByName}>
                <div className={classes.filterSecondeTitle}>
                  <span>Select Gifts By Points</span>
                </div>
                <Filters pointFilter={pointFilter} handleChange={handleChange} />
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
              <input placeholder='Type in to search' type="text" className={classes.antInput} onChange={(e) => handleChangeSearch(e.target.value)}
                value={searchQuery} />
              <span className={classes.inputSSuffix}>
                <div style={{
                  position: 'absolute',
                  left: '268px'
                }}>
                  < SearchRoundedIcon
                  />
                </div>
              </span>
            </span>
          </div>
          <div className={classes.giftContentCards}>
            <div className={classes.giftContentList}>
              {filtredItems?.map((item) => {
      
                return (
                  <div>
                   <Gift item={item} refetch={refetch} listFav={listFav}/>
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

export default GiftPage;   