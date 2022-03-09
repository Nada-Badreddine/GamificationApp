import React from 'react';
import {useQuery} from '@apollo/client'
import {LOAD_GIFTS} from './../services/giftServices/QueryAllGifts'

const GiftList = (props) => {

const { loading, data } = useQuery(LOAD_GIFTS)

  return (
     <>
     <h1>Gift List</h1>
     {data?.gifts?.map((item) => {
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

export default GiftList