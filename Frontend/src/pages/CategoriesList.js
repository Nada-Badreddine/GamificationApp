import React from 'react';
import {useQuery} from '@apollo/client'
import {LOAD_CATEGORIES} from './../services/categoriesServices/QueryAllCategories'

const CategoriesList = (props) => {

const { loading, data } = useQuery(LOAD_CATEGORIES)

  return (
     <>
     <h1>Category List</h1>
     {data?.categories?.map((item) => {
       return(
         <>
          <p>Name :   {item?.Name}</p>
          <button>details</button>
          <button>Reservez</button>
          <button>Favoris</button>
         </>
       )
     })}
    </>
  )
}

export default CategoriesList